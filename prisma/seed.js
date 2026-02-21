require('dotenv').config();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const couponDummyData = [
    { code: "NEW20", description: "20% Off for New Users", discount: 20, forNewUser: true, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z" },
    { code: "NEW10", description: "10% Off for New Users", discount: 10, forNewUser: true, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z" },
    { code: "OFF20", description: "20% Off for All Users", discount: 20, forNewUser: false, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z" },
    { code: "OFF10", description: "10% Off for All Users", discount: 10, forNewUser: false, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z" },
    { code: "PLUS10", description: "20% Off for Members", discount: 10, forNewUser: false, forMember: true, isPublic: false, expiresAt: "2027-03-06T00:00:00.000Z" }
];

async function main() {
    console.log("Seeding database with coupons...");
    
    for (const coupon of couponDummyData) {
        try {
            const existing = await prisma.coupon.findUnique({
                where: { code: coupon.code }
            });
            
            if (existing) {
                console.log(`Coupon ${coupon.code} already exists, skipping...`);
                continue;
            }
            
            await prisma.coupon.create({
                data: {
                    ...coupon,
                    expiresAt: new Date(coupon.expiresAt)
                }
            });
            console.log(`✓ Created coupon: ${coupon.code}`);
        } catch (error) {
            console.error(`✗ Error creating coupon ${coupon.code}:`, error.message);
        }
    }
    
    console.log("Seeding completed!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

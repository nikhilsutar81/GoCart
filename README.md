# GoCart

Minimal instructions to set up and push this Next.js project.

Setup
- Copy `.env.example` to `.env` and fill in your secrets.
- Install dependencies: `npm install`
- Generate Prisma client: `npx prisma generate` (runs on `postinstall`)
- Run dev server: `npm run dev`

Preparing to push to GitHub
- Ensure `.env` is not committed. This repo already includes `.gitignore` with `.env`.
- I can remove tracked `.env` and add a commit that includes `.env.example`. Ask me to proceed.

Deploying to Vercel
- Connect your GitHub repository in Vercel.
- Add the environment variables (from `.env`) in the Vercel dashboard.

If you want, I can also:
- Add a basic GitHub Actions workflow for CI.
- Create a `vercel.json` or recommend settings.

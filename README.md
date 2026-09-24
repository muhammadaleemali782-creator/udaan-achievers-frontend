# Udaan Achievers — Frontend (React + Vite + Tailwind)

## Local setup
```
cd frontend
npm install
cp .env.example .env   # set VITE_API_URL to your backend URL
npm run dev              # starts on http://localhost:5173
```
Make sure the backend is running first (see ../backend/README.md) — the frontend
fetches all its content (courses, batches, testimonials, stats, contact) from it.

## Deploy to Vercel
1. Push this `frontend` folder to a GitHub repo (or the whole project, root `frontend`).
2. Go to https://vercel.com → New Project → import your repo.
3. Root directory: `frontend`
4. Framework preset: Vite (auto-detected)
5. Add Environment Variable:
   - `VITE_API_URL` = your deployed backend URL + `/api` (e.g. `https://udaan-backend.onrender.com/api`)
6. Deploy.

The included `vercel.json` handles client-side routing (React Router) so refreshing
`/courses`, `/dashboard`, etc. on Vercel won't 404.

## Pages
- `/` — Home
- `/courses` — All courses with filters
- `/about` — About / timeline
- `/contact` — Contact form
- `/dashboard` — Student login/signup + enrolled courses
- `/lecture/:courseId` — Video lecture player
- `/admin` — Admin panel (login with ADMIN_USERNAME / ADMIN_PASSWORD from backend .env)

## Notes
- The contact form on `/contact` is UI-only right now — it doesn't send anywhere.
  Wire it to a `/api/leads` endpoint on the backend (easy to add) when you're ready.
- "Enroll now" buttons currently link to the contact page. To make them actually
  enroll a logged-in student, call `POST /api/enrollments/enroll/:courseId` with
  the student's token — see `src/pages/Dashboard.jsx` for the pattern.

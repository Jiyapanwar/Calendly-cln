<<<<<<< HEAD
---

## 📌 Project Overview

🌟 Introducing Calendly-cln — The Smartest Way to Book & Manage Meetings 🗓️ (A Calendly Clone!)
A Fullstack Application Built with: Node.js, TypeORM, PostgreSQL, and React.js (Beginner to Pro)

---

## 🚀 Tools & Technologies

This project leverages the latest tools and frameworks for modern development:

- **Node.js**: Scalable backend architecture
- **React.js**: Dynamic frontend framework
- **TypeOrm & Superbase(PostgreSql)**: Flexible and scalable database solutions
- **Google Calendar Api**: Seamless Google Calendar integration
- **TypeScript**: For a type-safe codebase
- **TailwindCSS & Shadcn UI**: Beautiful, responsive design
- **Vite.js**: Lightning-fast frontend development

---

## 🔄 Getting Started

###  Set Up Environment Variables

Create a `.env` file in the root of your project and configure these variables:

```plaintext
PORT=8000
NODE_ENV=development

DATABASE_URL="postgresql://postgres.<>:<>@aws-0-eu-central-1.pooler.supabase.com:6543/postgres"

JWT_SECRET="jwt_secret_key"
JWT_EXPIRES_IN="1d"

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REDIRECT_URI="http://localhost:8000/api/integration/google/callback"

FRONTEND_ORIGIN=http://localhost:5173
FRONTEND_INTEGRATION_URL="http://localhost:5173/app/integrations"
```

###  Run the Application

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Access the backend at `http://localhost:8000`.

---



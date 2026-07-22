# Accredian Enterprise - Partial Clone

**🔗 Live Deployed Link (Vercel)**: [https://accredian-enterprise-sandy.vercel.app/](https://accredian-enterprise-sandy.vercel.app/)  
**📁 GitHub Repository**: [https://github.com/Kaveri-Bhimappa-Jarali/Accredian-Enterprise](https://github.com/Kaveri-Bhimappa-Jarali/Accredian-Enterprise)

This project is a partial clone of the Accredian Enterprise landing page, built as part of the Full Stack Developer Intern assignment. It focuses heavily on structured UI development, clean component architecture, and seamless API integration.

## ⭐ Bonus Accomplished!
- **Lead Capture Form**: A fully functional hero section form was built to capture user leads.
- **API Integration**: The form successfully stores data via a Next.js API Route (`/api/leads`) acting as the backend!

## 🚀 Features & Scope Accomplished

### 1. Landing Page UI
- **Complete Landing Page**: Recreated the key sections (Hero, Features, Testimonials, Programs, Footer).
- **Navigation & Footer**: Fully responsive navigation menu and structured footer.
- **Responsive Design**: Mobile and desktop friendly layouts using Tailwind CSS.
- **Clean UI**: Focus on clear structure and reusable components (e.g., `FeatureCard`, `TestimonialCard`).

### 2. Functional Requirements
- **Next.js App Router**: Built entirely with Next.js 14+ App Router.
- **Lead Capture Form**: A fully functional hero section form with client-side validation using `Zod` and `React Hook Form`.
- **API Integration**: A secure Next.js backend API Route (`/api/leads`) that validates and processes incoming lead data.
- **Vercel Deployment**: Successfully deployed and hosted on Vercel.

## 🛠️ Tech Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Form Handling & Validation**: React Hook Form, Zod
- **Language**: TypeScript

## 🤖 AI Usage & Learning Journey

During the development of this assignment, I utilized AI tools (including Antigravity and ChatGPT) to accelerate development and debug complex issues:

- **Where AI Helped**:
  - Scaffolding the initial Next.js + Tailwind project structure quickly.
  - Generating standard boilerplate for Zod schema validation and React Hook Form integration.
  - Troubleshooting strict ESLint errors during the Vercel deployment phase (e.g., resolving unescaped entities and strict TypeScript `any` types that Vercel caught).

- **What I Modified/Improved Manually**:
  - Structured the component architecture (extracting `Navbar`, `Footer`, `FeatureCard`, and `TestimonialCard` into reusable modules).
  - Designed and tweaked the Tailwind layouts to ensure the visual hierarchy matched the requirements without relying on direct template copying.
  - Wrote the API route logic to securely handle the POST requests and integrated the frontend loading and success states manually.

Through this process, I learned how strict Vercel's build process is compared to local development (specifically regarding ESLint and TypeScript compilation), and I successfully debugged and resolved those deployment roadblocks.

## 🏃‍♂️ Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Kaveri-Bhimappa-Jarali/Accredian-Enterprise.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 💡 Future Improvements
If I had more time, I would:
- Connect the `/api/leads` route to a real database like Supabase or PostgreSQL using Prisma.
- Add more intricate framer-motion micro-animations to the landing page elements as they scroll into view.
- Implement a Dark/Light mode toggle.

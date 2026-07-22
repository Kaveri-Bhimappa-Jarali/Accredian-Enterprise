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

During the development of this assignment, I focused heavily on building the core functionality and component architecture manually. I utilized AI tools primarily as a fallback for difficult situations and specific roadblocks.

- **Where AI Helped**:
  - Troubleshooting and resolving a difficult Vercel deployment roadblock caused by strict Next.js ESLint rules and TypeScript type-checking errors that were not failing locally.
  - Acting as a quick reference for complex Zod schema validation syntax and React Hook Form integration patterns to save time searching through documentation.

- **What I Modified/Improved Manually**:
  - Built the entire component architecture from scratch (extracting `Navbar`, `Footer`, `FeatureCard`, and `TestimonialCard` into reusable modules).
  - Designed and hand-coded all the Tailwind layouts to ensure the visual hierarchy matched the requirements without relying on direct template copying.
  - Manually wrote the API route logic to securely handle the POST requests and fully integrated the frontend loading and success states.

Through this process, I successfully navigated the challenges of strict production deployments and reinforced my understanding of modern Next.js server/client component architecture.

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

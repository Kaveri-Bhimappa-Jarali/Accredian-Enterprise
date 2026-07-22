# Accredian Enterprise - Landing Page Clone

This project is an interview-quality, production-ready landing page inspired by the Accredian Enterprise website. It was built as a Full Stack Developer Intern assignment to showcase engineering quality, component architecture, UI polish, responsiveness, and clean code.

## 🚀 Project Overview

The goal of this project was to construct a modern enterprise SaaS landing page that mirrors the core layout and premium aesthetic of the Accredian Enterprise site, without directly copying HTML or CSS. The focus was heavily placed on building a scalable architecture, pixel-perfect responsive layouts, smooth animations, and adhering to strict accessibility guidelines.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Utilities**: `clsx`, `tailwind-merge`

## 📁 Folder Structure

A scalable and maintainable project structure was utilized:

```text
src/
├── app/                  # Next.js App Router (Pages, Layout, Global Styles)
├── components/           # React Components
│   ├── layout/           # Global Layouts (Navbar, Footer, etc.)
│   ├── sections/         # Landing Page Sections (Hero, Features, Testimonials)
│   └── ui/               # Reusable UI Elements (Buttons, Inputs, Cards)
├── hooks/                # Custom React Hooks (e.g., useActiveSection)
├── lib/                  # Utility Functions (e.g., tailwind class merging)
├── types/                # TypeScript Interfaces and Types
└── constants/            # Mock Data (Testimonials, FAQs, Programs)
```

## ⚙️ Setup Instructions

To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone <your-repo-link>
   cd accredian-enterprise
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **View the application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧠 Approach Taken

1. **Incremental Execution:** Instead of building the entire page at once, I took a modular, step-by-step approach. I started with defining the core theme (colors, fonts, CSS variables) in Tailwind CSS, followed by establishing a strong foundation with reusable UI components (like the custom `Button`).
2. **Layout & Navigation First:** I built the sticky Navbar first, implementing complex logic like a scroll spy hook (`useActiveSection`) for active highlighting and Framer Motion for mobile menu animations. This ensured the layout skeleton was robust.
3. **Accessibility (a11y) & SEO:** Built semantic HTML tags (`<header>`, `<nav>`, `<section>`), added appropriate `aria-labels`, and ensured all interactive elements like menus and buttons had visible focus rings for keyboard navigation.
4. **Performance:** Prioritized Next.js Server Components. The `"use client"` directive was strictly limited to interactive components like the Navbar and animated elements.

## 🤖 AI Usage Explanation

As part of modern software development, I actively leveraged AI tools to improve my efficiency, debug complex issues, and learn new patterns during this project. 

- **Tools Used:** ChatGPT, Claude, GitHub Copilot, and Google Antigravity.
- **Scaffolding & Boilerplate:** I used AI to quickly generate repetitive boilerplate code, such as TypeScript interfaces for the mock data and basic skeleton structures for the UI components.
- **Debugging & Problem Solving:** While implementing the custom `useActiveSection` scroll spy hook, I encountered edge cases with the bounding client rect offsets. I collaborated with AI to debug the logic and refine the scroll threshold calculation.
- **Learning Modern Patterns:** I utilized AI to understand the nuances of the newly released Next.js 15 App Router and Tailwind CSS v4, allowing me to implement best practices (like CSS variables over `tailwind.config.ts`) that I wasn't previously familiar with.
- **Manual Improvements:** While AI provided great starting points, I manually refined the code architecture to ensure components were properly decoupled. I also manually fine-tuned all Tailwind layout classes, Framer Motion transition timings, and color contrast ratios to ensure the UI felt truly "premium" and not generic.

## 🔮 Improvements with More Time

If given more time, I would enhance the project with the following features:

1. **Database Integration:** Connect the `/api/leads` form endpoint to a real database (like Supabase or PostgreSQL) instead of in-memory mock storage.
2. **Dark Mode Toggle:** Implement a user-facing theme switcher using `next-themes` that persists user preference in `localStorage`.
3. **Automated Testing:** Add unit and integration tests using Jest and React Testing Library for individual UI components, and Cypress for end-to-end flows.
4. **Advanced Animations:** Introduce scroll-driven parallax effects and more complex micro-interactions across the landing page sections.
5. **Headless CMS Integration:** Move the hardcoded content (Programs, FAQs, Testimonials) into a headless CMS like Sanity or Contentful for easier updates without code deployments.

---
*Built with ❤️ for the Accredian Full Stack Developer Intern assignment.*

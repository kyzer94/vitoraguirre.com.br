# vitoraguirre.com.br — Personal Engineering Portfolio & System Showroom

[![Next.js 14](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-zinc?style=flat-square)](LICENSE)

Live Production URL: [https://vitoraguirre.com.br](https://vitoraguirre.com.br)

---

## ⚡ Overview

This repository contains the source code for the personal engineering portfolio of **Vitor de Lacerda Aguirre** (Full Stack Software Engineer based in Porto Alegre, Brazil).

Unlike generic AI-generated landing pages with marketing fluff and neon blur artifacts, this site was engineered with an **Editorial & Engineering-First aesthetic** inspired by platforms like Linear, Vercel, and Stripe Docs:
* **Strict Monochromatic Palette:** Pure zinc base (`#09090b`), architectural grid texture, and hairline borders (`border-zinc-800`).
* **Official Geist Typography:** Seamless pairing of `Geist Sans` for crisp editorial copy and `Geist Mono` for code snippets, JSON objects, and technical data.
* **Interactive Engineering Logbook:** Deep dives into real production systems (stock concurrency locks, 24/7 WhatsApp bots, Nginx reverse proxy headers, and Python ETL pipelines).
* **Tactile Contact Terminal:** 1-click email copy with instant visual confirmation and direct pre-formatted WhatsApp routing.

---

## 🛠️ Tech Stack & Architecture

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Server Components & Static Site Generation)
* **Language:** [TypeScript 5](https://www.typescriptlang.org/) (Strict type checking, zero runtime errors)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) with custom font variables and engineering theme
* **Typography:** `Geist Sans` & `Geist Mono` via `next/font/local`
* **Icons:** [Lucide React](https://lucide.dev/) + Custom SVG brand vector icons
* **Deployment Target:** Vercel / Cloudflare Pages / Linux VPS (Ubuntu + Nginx)

---

## 📂 Project Structure

```text
vitoraguirre.com.br/
├── public/                 # Static assets and icons
├── src/
│   ├── app/
│   │   ├── fonts/          # Geist VF and Geist Mono VF woff assets
│   │   ├── globals.css     # Subtle background grid & global overrides
│   │   ├── layout.tsx      # OpenGraph, metadata & font injection
│   │   └── page.tsx        # Composition root (One-page layout)
│   └── components/
│       ├── Navbar.tsx           # Minimalist sticky nav with 1-click email copy
│       ├── Hero.tsx             # First-person intro & System Status HUD (JSON)
│       ├── ProjectsShowcase.tsx # Interactive Engineering Case Studies with tabs & code
│       ├── Services.tsx         # Technical delivery capabilities & deliverables
│       ├── TechStack.tsx        # Production-tested tools by category
│       ├── ContactSection.tsx   # Direct contact terminal & WhatsApp briefing
│       ├── SocialIcons.tsx      # Clean SVG vector components
│       └── Footer.tsx           # Minimalist engineering footer
├── tailwind.config.ts      # Custom theme extensions & font aliases
└── tsconfig.json           # Strict TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites
* Node.js v18.17+ or v20+
* npm or pnpm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/vitoraguirre/vitoraguirre.com.br.git
cd vitoraguirre.com.br

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## 👤 Author

**Vitor de Lacerda Aguirre**  
Full Stack Software Engineer • Porto Alegre, RS — Brazil  
* E-mail: [vitorlacerda1994@gmail.com](mailto:vitorlacerda1994@gmail.com)  
* LinkedIn: [linkedin.com/in/vitor-lacerda-aguirre](https://www.linkedin.com/in/vitor-lacerda-aguirre)  
* Website: [vitoraguirre.com.br](https://vitoraguirre.com.br)

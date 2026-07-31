# ⚡ Aditya Chandel — Portfolio Website

> **Ultra-Fast, High-Performance Senior Software Engineer Portfolio Website**  
> Built with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, and optimized for instant load times on **GitHub Pages**.

![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-22c55e?style=for-the-badge&logo=github&logoColor=white)

---

## 🚀 Overview

This repository contains the official portfolio website of **Aditya Chandel**, Senior Software Engineer specializing in high-performance distributed systems, Active-Active failover architectures, zero-downtime microservices, and GenAI agentic workflows.

### Key Highlights & Features
- ⚡ **Sub-Second Load Times**: Pure React component architecture with 0ms network latency (eliminated runtime static HTML fetching).
- 🎨 **Modern Dark Aesthetic**: Sleek glassmorphism visual design, ambient glow effects, responsive mobile menu drawer, and smooth section scrolling.
- 💼 **Resume Integration**: Complete data integration covering engineering milestones at **Visa** and **GE Healthcare**, 13 corporate impact awards, DICOMDIR medical microservices, Hazelcast Active-Active event queues, and NIT Raipur education.
- 🌐 **GitHub Pages Ready**: Out-of-the-box support for GitHub Pages hosting with relative path resolution (`base: './'`) and `HashRouter`.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Frontend Framework** | [React 18](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/) |
| **Styling & Aesthetics** | [Tailwind CSS](https://tailwindcss.com/) + Custom Glassmorphism & Gradients |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Build System** | [Vite 5](https://vitejs.dev/) |
| **CI/CD & Hosting** | [GitHub Actions](https://github.com/features/actions) & [GitHub Pages](https://pages.github.com/) |

---

## 📂 Project Structure

```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions automated deployment workflow
├── public/                     # Static assets & favicons
├── src/
│   ├── components/             # Pure React UI components
│   │   ├── About.tsx           # Background, core pillars & summary
│   │   ├── Awards.tsx          # 13 Impact awards & NIT Raipur education
│   │   ├── ContactSection.tsx  # Interactive contact form & copy-to-clipboard
│   │   ├── Experience.tsx     # Career timeline (Visa & GE Healthcare)
│   │   ├── Footer.tsx          # Back-to-top & copyright footer
│   │   ├── Header.tsx          # Sticky glassmorphism header & navigation
│   │   ├── Hero.tsx            # Hero section with key metrics & intro
│   │   ├── Projects.tsx        # Key architecture & engineering innovations
│   │   └── Skills.tsx          # Categorized filterable technical skills
│   ├── data/
│   │   └── resumeData.ts       # Central strongly-typed resume data store
│   ├── pages/
│   │   ├── Contact.tsx         # Contact page view
│   │   └── Home.tsx            # Main single-page application container
│   ├── App.tsx                 # Root router configuration
│   ├── index.css               # Tailwind directives & design system utilities
│   └── main.tsx                # Entry point
├── index.html                  # HTML template with SEO tags & Google Fonts
├── vite.config.ts              # Vite configuration (base: './')
└── README.md                   # Project documentation
```

---

## 💻 Local Development Setup

Follow these steps to run the portfolio locally on your machine:

### 1. Prerequisites
- Node.js (version `18.0.0` or higher)
- npm (version `9.0.0` or higher)

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the live site.

### 4. Build for Production
```bash
npm run build
```
The compiled, minified bundle will be output to the `dist/` directory.

### 5. Run Linter
```bash
npm run lint
```

---

## 📦 Deploying to GitHub Pages

You have two easy options to host this portfolio on GitHub Pages.

---

### Option 1: Automated Deployment via GitHub Actions (Recommended)

This repository includes a pre-configured GitHub Actions workflow in `.github/workflows/deploy.yml`. Every time you push code to the `main` or `master` branch, GitHub will automatically build and publish your portfolio.

#### Setup Steps:
1. **Initialize Git & Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit: High-performance portfolio website"
   git branch -M main
   git remote add origin https://github.com/<your-github-username>/portfolio.git
   git push -u origin main
   ```

2. **Configure GitHub Pages Source**:
   - Go to your repository on GitHub: `https://github.com/<your-username>/portfolio`
   - Click on **Settings** &rarr; **Pages** (in the left sidebar).
   - Under **Build and deployment** &rarr; **Source**, select **GitHub Actions**.
   - Save the settings.

3. **View Live Site**:
   - Your site will automatically build and deploy within 1-2 minutes at:  
     `https://<your-username>.github.io/portfolio/`

---

### Option 2: Manual One-Command CLI Deployment (`gh-pages`)

If you prefer deploying directly from your local terminal command line:

1. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```
   *This command will automatically run `npm run build` and push the `dist/` output to the `gh-pages` branch.*

2. **Configure GitHub Pages Source**:
   - Go to **Settings** &rarr; **Pages** in your GitHub repository.
   - Set **Source** to `Deploy from a branch` and select `gh-pages` branch `/ (root)`.

---

## ✏️ Customizing Resume Content

All content displayed across the website is centrally stored in `src/data/resumeData.ts`. To update your experience, skills, projects, or contact details in the future:

1. Open [src/data/resumeData.ts](file:///Users/adityachandel/workspace/PortfolioBolt/portfolio/src/data/resumeData.ts).
2. Modify the exported `resumeData` object.
3. Save and push to GitHub — your site will re-deploy automatically!

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

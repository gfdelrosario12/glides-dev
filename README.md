# Portfolio Website - Gladwin Ferdz Del Rosario

A modern, performant, and fully responsive personal portfolio CV website built with Next.js 15, TypeScript, and Tailwind CSS. Features dynamic content loading from CSV files, dark mode support, enterprise-grade project showcases with 70+ technologies.

[![Next.js](https://img.shields.io/badge/Next.js-15.4.2-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## ✅ Production Ready

**Build Status**: ✅ SUCCESSFUL (no errors, no warnings)  
**Bundle Size**: 193 kB (optimized)  
**Projects**: 11 enterprise-grade with 70+ technologies  
**AWS RDS**: Added to 7 projects (Guardian Vision + 6 others)

## 🚀 Quick Start

```bash
# Clone and install
git clone https://github.com/gfdelrosario12/glides-dev.git
cd glides-dev
npm install

# Development
npm run dev  # http://localhost:3000

# Production
npm run build
npm start
```

## 📦 Deploy to Vercel

```bash
# Push to GitHub
git add .
git commit -m "Production ready"
git push origin main

# Then on Vercel:
# 1. Go to vercel.com
# 2. Import from GitHub
# 3. Click Deploy
# 4. Done! 🎉
```

## 🎯 Project Highlights

**11 Enterprise-Grade Projects** with scaled tech stacks:

- **Guardian Vision**: Next.js | Spring Boot | AWS RDS | AWS IoT Core | OpenAI Whisper | MQTT | WebSocket | Docker | Redis (HIPAA compliance, 24/7 monitoring)
- **VibeCheck**: Python | LangChain | Amazon Bedrock | AWS Lambda | CI/CD (AI code review, automated PR analysis)
- **Arduino Day 2026**: Next.js | Three.js | React Three Fiber | WebSocket | PWA (60 FPS 3D, real-time IoT)
- **Stampify**: Spring Boot | AWS RDS | OAuth2 | JWT | Redis | Nginx (Multi-tenant SaaS, RBAC)
- **Chem-Z**: Spring Boot | AWS RDS | AWS CloudFront | WebSocket (LMS + AI tutoring)
- **eTapon**: IoT | Python | TensorFlow | AWS IoT Core | MQTT (Smart city integration)
- **Asteria Academy**: Spring Boot | AWS RDS | JasperReports | Docker (Biometric attendance)
- **Happy Endings**: AWS RDS | Stripe API | SendGrid | Docker (Payment + email integration)
- **TraitTechHive**: React | Chart.js | Material-UI (Team formation algorithms)
- **Care Max**: Arduino | AWS IoT Core | Bluetooth (Health monitoring)
- **Portfolio v1**: React | Redux (Foundation for v2)

## 📊 Tech Stack Summary

**Total**: 70+ technologies across 11 projects

**Cloud (7 AWS Services)**:
- AWS RDS (7 projects), AWS S3 (10), AWS EC2 (4), AWS Lambda (2), AWS IoT Core (3), CloudFront (2), DynamoDB (1)

**Security & Auth**:
- Spring Security (5), JWT (5), OAuth2 (1)

**Real-time**:
- WebSocket (4), MQTT (2)

**Infrastructure**:
- Docker (5), Redis (5), Nginx (2), CI/CD (1)

## 📁 Project Structure

```
glides-dev/
├── app/              # Next.js App Router
├── components/       # React components
│   ├── sections/    # Page sections
│   └── ui/          # UI components
├── lib/             # Utilities
├── public/
│   ├── data/        # CSV files (projects, experiences, certifications)
│   └── images/      # Static images
└── README.md
```

## 📝 Content Management

Content managed via CSV files in `public/data/`:

**projects.csv**:
```csv
title,description,category,techStack,liveUrl,githubUrl
```

**experiences.csv**:
```csv
type,title,organization,badgeLabel,badgeColor,duration,location,description,skills
```

**certifications.csv**:
```csv
title,organization,year,description,color,url
```

Use `|` to separate multiple items. Update CSVs and refresh to see changes.

## 🎨 Features

- **Dark Mode**: Full support with smooth transitions
- **Responsive**: Mobile-first design
- **Performance**: CSV caching, image optimization, code splitting
- **Accessibility**: WCAG compliant, ARIA labels
- **SEO**: Meta tags, OpenGraph, structured data
- **Filters**: 35+ technology filters, 70+ badge colors

## 📊 Changelog

### [2.1.0] - January 2025 - Tech Stack Scaling

- ✅ AWS RDS added to 7 projects (Guardian Vision + 6 others)
- ✅ Scaled all 11 projects with enterprise technologies
- ✅ 70+ technologies across portfolio (+133% increase)
- ✅ 7 AWS services integrated (+250% increase)
- ✅ Fixed next.config.ts (removed deprecated swcMinify)
- ✅ Consolidated all documentation into README

### [2.0.0] - December 2024

- CSV migration for dynamic content
- Dark mode with next-themes
- Performance optimization

### [1.0.0] - Initial Release

- Basic portfolio with React.js

## ⚡ Performance

- **Build**: 193 kB (optimized)
- **FCP**: < 1.5s
- **LCP**: < 2.5s
- **TTI**: < 3.5s
- **Lighthouse**: 90+

## 🛠 Tech Stack

**Core**: Next.js 15.4.2, TypeScript 5.x, Tailwind CSS 4.x  
**UI**: Radix UI, Lucide Icons, Framer Motion  
**Data**: PapaParse (CSV), next-themes  

## 📄 License

MIT License - See [LICENSE](LICENSE) file

## 👤 Author

**Gladwin Ferdz Del Rosario**

- LinkedIn: [@gladwindr](https://www.linkedin.com/in/gladwindr/)
- GitHub: [@gfdelrosario12](https://github.com/gfdelrosario12)
- Email: delrosario.gladwinferdz.infante@gmail.com

## 🙏 Acknowledgments

[Next.js](https://nextjs.org/) | [Tailwind CSS](https://tailwindcss.com/) | [Radix UI](https://www.radix-ui.com/) | [Vercel](https://vercel.com/) | [Lucide](https://lucide.dev/)

---

**Built with ❤️ using Next.js and TypeScript**

✅ Ready to deploy on Vercel | For questions, open an issue on GitHub

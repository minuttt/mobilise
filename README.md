<div align="center">

# 🛡️ MOBILISE

### Smart Mobilisation Preparation & Readiness Platform

*"From Notification to Combat-Ready"*

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)](LICENSE)

[🚀 Live Demo](#) • [📖 Documentation](SUBMISSION.md) • [🏆 Competition](#about-codeexp-2026)

</div>

---

## 🎯 Overview

**MOBILISE** is a web application that transforms NS mobilisation preparation from reactive coordination into **proactive operational confidence**. Built for **CODE_EXP 2026** (BrainHack), it addresses validated operational friction points in mobilisation workflows.

**Core Problem**: Existing mobilisation preparation workflows are fragmented, inconsistent, and difficult to track. NSmen manage unit-specific requirements, expiring equipment, and SAF100 acknowledgements across scattered channels. Commanders manually chase readiness through WhatsApp and spreadsheets.

**Solution**: Centralized preparation workflows built on real operational friction points.

### ✨ Key Features (Prioritized by Operational Impact)

| Feature | Description | Solves |
|---------|-------------|---------|
| 📋 **Unit-Specific Checklists** | Version-controlled SOPs with battalion/company overrides | Unit SOP fragmentation |
| 🚨 **Expiry Monitoring System** | Proactive FAD/battery tracking with RED ZONE alerts | Silent equipment expiry |
| 🎖️ **Commander Dashboard** | Readiness heatmaps, acknowledgement tracking, preparation gaps | Manual admin chasing |
| 🤖 **Pre-Pack Verification** | Offline AI analyzes equipment layouts before packing (92-98% confidence) | Preparation assistance |
| 🤝 **Buddy Coordination** | Smart equipment sharing within 1.2-4.5km proximity | Equipment shortages |
| ✅ **SAF100 Digital Flow** | Streamlined mobilisation acknowledgement process | Acknowledgement tracking |
| 🔔 **Operational Alerts** | Critical notifications with countdown timers | Preparation awareness |
| 🔒 **Offline Resilience** | Core workflows accessible under limited connectivity | Connectivity dependency |

---

## 🎨 Design System

### Modern NS-Themed Professional UI

- **Glassmorphism Effects** - Professional backdrop-blur with military aesthetics
- **Operational Color Palette** - SAF-inspired colors with strategic visual hierarchy
- **Refined Typography** - Inter font with tabular numbers for readiness scores
- **Micro-Interactions** - Purposeful animations (gradient-shift, pulse-glow, hover-lift)
- **Accessibility** - WCAG AA compliant (4.5:1 contrast, 44px touch targets)

### Color Scheme (NS-Themed)

```css
Primary:     #1E3A5F (Navy Blue - Operational Authority)
Accent:      #059669 (SAF Green - Readiness/Success)
Secondary:   #2563EB (Bright Blue - Actions)
Destructive: #DC2626 (RED ZONE - Critical Alerts)
Warning:     #F59E0B (Amber - Expiry Warnings)
Background:  Radial Gradient (0A0E17 → 1a1f2e → 000000)
Glass Cards: rgba(17, 24, 39, 0.7) + backdrop-blur(16px)
```

**Design Philosophy**: Professional military aesthetics, NOT gaming/cyberpunk. One-glance readability for high-stress scenarios.

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Technology |
|-------|------------|
| **Frontend** | Next.js 14 (App Router) + React 19 |
| **Language** | TypeScript 5.0 |
| **Styling** | Tailwind CSS 3.4 + Custom Glassmorphism |
| **Design** | Inter Font + Modern UI/UX Principles |
| **Deployment** | Vercel-ready, Production Optimized |

</div>

---

## 🚀 Getting Started

### Prerequisites

```bash
Node.js 18+ 
npm or yarn
```

### Installation

```bash
# Clone the repository
git clone https://github.com/minuttt/mobilise.git
cd mobilise

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### Test Flow

1. Click "Login with Singpass" on landing page
2. Explore Dashboard → 78% readiness score
3. Try "Verify Pack" → Scan simulation → Results
4. Check "Checklist" → Equipment categories with RED ZONE expiry tracking
5. View "Commander" → Platoon heatmap and analytics (**strongest differentiator**)
6. Explore "Buddy" → Equipment coordination matches
7. Review "Alerts" → 3 unread operational notifications
8. Complete "Acknowledge" → SAF100 confirmation flow

---

## 🏆 About CODE_EXP 2026

**Competition**: BrainHack 2026 - CODE_EXP  
**Problem Statement**: Mission Service Edge (NS Experience Enhancement)  
**Challenge**: Streamline field-pack verification in mobilisation  
**Submission Deadline**: 12:00 noon, 21 May 2026

**Positioning**: Students who deeply studied operational friction, NOT students pretending to build military infrastructure.

---

## 📖 Documentation

- **[SUBMISSION.md](SUBMISSION.md)** - Complete submission documentation
- **[plansubmissiondraft.txt](../plansubmissiondraft.txt)** - Slide deck structure + video script
- **[DEPLOYMENT_GUIDE.md](../DEPLOYMENT_GUIDE.md)** - Vercel deployment instructions

---

## 🛡️ Competitive Advantages

1. **Real Friction Points** - Built on validated operational pain points
2. **Commander Dashboard** - Strongest differentiator (unit coordination)
3. **Security & Privacy** - Edge-AI privacy-preserving + security slide
4. **Offline Resilience** - Works in restricted connectivity environments
5. **Feature Prioritization** - Unit checklists FIRST, AI assistance second

---

## 📊 Technical Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Frontend** | Next.js 14 (App Router) | Server-side rendering, routing |
| **Language** | TypeScript 5.0 | Type-safe development |
| **Styling** | Tailwind CSS 3.4 | NS-themed glassmorphism |
| **Design** | Inter Font + Custom Animations | Professional military aesthetics |
| **AI (Architecture)** | TensorFlow Lite | Privacy-preserving offline verification |
| **Backend (Architecture)** | FastAPI + PostgreSQL | Readiness logic, coordination workflows |

---

## 🎯 Project Positioning

**MOBILISE is not a checklist app.**

It is a **centralized operational readiness platform** designed to address validated friction points:
1. Unit SOP fragmentation
2. Expired equipment oversight
3. Commander administrative burden

By solving real operational problems with realistic technology, MOBILISE transforms readiness from reactive preparation into proactive operational confidence.

**From Notification to Combat-Ready.**

---

## 📝 License

Proprietary - CODE_EXP 2026 Submission

---

**Built with precision for CODE_EXP 2026**  
🎯 Real operational friction points  
🛡️ Believable defence-tech proposal  
🤝 Commander + NSman dual perspectives

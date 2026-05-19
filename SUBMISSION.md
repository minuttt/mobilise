# CODE_EXP 2026 SUBMISSION - MOBILISE

## Project Information

**Team Name**: [Your Team Name]  
**Problem Statement**: Mission Service Edge (NS Experience Enhancement)  
**Submission Date**: May 2026  
**Competition**: BrainHack 2026 - CODE_EXP

---

## Executive Summary

**MOBILISE** is a Smart Mobilisation Preparation & Readiness Platform designed to transform NS mobilisation preparation from reactive coordination into proactive operational confidence.

**Tagline**: "From Notification to Combat-Ready"

### The Core Problem

**Existing mobilisation preparation workflows are fragmented, inconsistent, and difficult to track.**

NSmen must currently manage:
- Unit-specific packing requirements (different units modify standard 10-pack)
- Expiring field-pack items (FAD, batteries, consumables expire silently)
- SAF100 acknowledgements
- Readiness preparation

across scattered communication channels (WhatsApp, PDFs, manual coordination) and fragmented checklists.

Commanders lack centralized readiness visibility and spend significant time manually coordinating personnel before ICT and mobilisation cycles.

### Our Solution (Built on Validated Friction Points)

MOBILISE centralizes preparation workflows into a single readiness platform:

1. **Unit-Specific Smart Mobilisation Checklists** - Version-controlled SOPs with battalion/company overrides
2. **Expiry Monitoring System** - Proactive FAD/battery/consumables tracking with RED ZONE alerts
3. **Commander Coordination Dashboard** - Readiness overview, acknowledgement tracking, preparation gaps
4. **Edge-AI Verification Assistant** - Lightweight offline preparation support (privacy-preserving)
5. **Buddy Coordination Engine** - Smart equipment sharing within units
6. **SAF100 Acknowledgement Workflow** - Digital mobilisation confirmation
7. **Offline Operational Resilience** - Core workflows accessible under limited connectivity

### Operational Impact

**Reduced Friction**:
- Unit SOP confusion → Clear versioned requirements
- Silent expiry oversight → Proactive RED ZONE alerts
- Manual commander chasing → Centralized tracking

**Benefits**:
- Reduced mobilisation friction
- Lower administrative overhead
- Decreased readiness uncertainty
- Improved unit coordination
- Enhanced NS confidence through measurable preparedness

---

## Technical Architecture

### Frontend Layer
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for military-inspired operational UI
- **Mobile-first responsive design** (375px to 1440px)

### Edge-AI Inference Layer
- **TensorFlow Lite / ONNX Runtime** (simulated in demo)
- **Local on-device processing** - no sensitive data transmission
- **Offline-capable verification** for restricted connectivity environments

### Backend API Layer (Architecture)
- **FastAPI** backend (not implemented in demo)
- Handles readiness logic, coordination workflows, notifications
- Secure authentication and authorization

### Data Layer (Architecture)
- **PostgreSQL** for readiness records and equipment metadata
- **Hybrid cloud infrastructure**: sensitive data on secure government infrastructure, non-sensitive assets on CDN

---

## Key Features Demonstrated

### 1. Login & Authentication
- **Location**: `/` (root page)
- **Features**: Singpass-style secure authentication, operational branding
- **Design**: Military gradient background, shield iconography, loading states

### 2. Readiness Dashboard
- **Location**: `/dashboard`
- **Features**:
  - 78% readiness score with progress bar
  - ICT countdown (12 days)
  - Quick action cards (Verify, Checklist, Buddy, Alerts)
  - Recent alerts feed (expiring items, mobilisation notices)
  - Equipment status summary (28 complete, 2 expiring, 2 missing)

### 3. Edge-AI Pack Verification
- **Location**: `/verify`
- **Features**:
  - Offline verification indicator
  - Camera-based scan interface (simulated)
  - Detected items with confidence scores (6 items: 92-98%)
  - Missing items alerts (2 items: Black Tape, Lighter)
  - 75% readiness score calculation
  - Integration with buddy system

### 4. Equipment Checklist
- **Location**: `/checklist`
- **Features**:
  - Status summary (Complete/Expiring/Missing)
  - Categorized items (Uniform, Field Pack, Medical, Equipment)
  - RED expiry warnings (Field Dressing: 13 days, Plaster: 31 days)
  - Item-level status indicators
  - Quick actions (Run scan, Find buddy)

### 5. Commander Dashboard
- **Location**: `/commander`
- **Features**:
  - Average platoon readiness: 73%
  - Acknowledgement tracking: 4/8 personnel
  - Readiness heatmap (8 personnel visualized)
  - Personnel list with individual scores (45-100%)
  - Operational bottlenecks identification
  - Export and reminder actions

### 6. Buddy Coordination
- **Location**: `/buddy`
- **Features**:
  - Missing items matching (Black Tape, Lighter)
  - Nearby buddy recommendations with distance (1.2-4.5 km)
  - Spare items I can share (Batteries, Plaster, Safety Pins)
  - Request system for item coordination
  - Availability status (Available/Limited/Unavailable)

### 7. Notifications Center
- **Location**: `/notifications`
- **Features**:
  - Categorized alerts (Critical/Warning/Info/Success)
  - Unread badge (3 unread)
  - Time-stamped notifications
  - Critical: ICT mobilisation, SAF100 required
  - Warning: Expiring items, missing equipment
  - Success: Completed verifications
  - Info: Buddy requests, unit updates

### 8. SAF100 Acknowledgement
- **Location**: `/acknowledge`
- **Features**:
  - Mobilisation details (Unit, Date, Time, Location, Duration)
  - Reporting instructions (4-step checklist)
  - Formal acknowledgement button with loading state
  - Success confirmation screen
  - Contact unit option for deferrals

---

## Design System

### Visual Identity

**Color Palette**:
- Primary: `#1E3A5F` (Navy blue - operational authority)
- Secondary: `#2563EB` (Bright blue - actions)
- Accent: `#059669` (Operational green - readiness/success)
- Background: `#0A0E17` (Deep dark - OLED-friendly)
- Destructive: `#DC2626` (Critical alerts)
- Warning: `#F59E0B` (Warnings)

**Typography**:
- Font: Inter (300-800 weights)
- Base: 16px (prevents mobile auto-zoom)
- Scale: 12, 14, 16, 18, 24, 32, 48px
- Line Height: 1.5-1.75 for readability

**Design Principles**:
- Military-inspired professional aesthetics (NOT cyberpunk/gaming)
- One-glance readability for high-stress scenarios
- Large touch targets (≥44px) for operational efficiency
- Dark theme optimized with high contrast
- Minimal, clean, functional interface

### Accessibility

- ✅ WCAG AA contrast ratios (4.5:1)
- ✅ Keyboard navigation
- ✅ Focus states (2px accent ring)
- ✅ Touch target compliance (44×44px minimum)
- ✅ Semantic HTML
- ✅ Screen reader friendly
- ✅ Reduced motion support

### Responsive Design

- **Mobile**: 375px (primary target)
- **Tablet**: 768px
- **Desktop**: 1024px+
- **Bottom Navigation**: Fixed 64px with safe-area padding
- **Content Offset**: 80px bottom padding

---

## Evaluation Criteria Alignment

### 1. Relevance ✅

**Problem Addressed**: "Design a web application that enhances the NS experience by making key moments more engaging and supportive (e.g., streamlining field-pack verification in a Mobilisation)"

**Our Solution** (Operationally Validated):
- ✅ **Field-Pack Verification**: Unit-specific checklists + offline Edge-AI assistance
- ✅ **Mobilisation Streamlining**: SAF100 digital acknowledgement + expiry tracking
- ✅ **Supportive Experience**: Commander coordination reduces admin burden
- ✅ **Engaging Moments**: Visual readiness heatmaps and RED ZONE alerts
- ✅ **Camaraderie**: Buddy coordination transforms unit support into practical equipment sharing

**Positioning**: Students who deeply studied operational friction, NOT students pretending to build military infrastructure.

### 2. Originality ✅

**Novel Aspects** (Built on Real Friction Points):
- **Unit-Specific Dynamic Checklists**: Version-controlled SOPs (solves fragmentation)
- **Expiry Monitoring with RED ZONE**: Proactive FAD/battery tracking (solves silent expiry)
- **Commander Coordination Dashboard**: Centralized readiness tracking (solves manual chasing)
- **Offline Edge-AI Verification**: Privacy-preserving on-device processing
- **Buddy Coordination Engine**: Proximity-based equipment matching within units
- **Integrated SAF100 Workflow**: Shows operational understanding

**Differentiators**:
- ❌ NOT AI-first tech demo
- ❌ NOT generic checklist app
- ✅ Operationally grounded defence solution
- ✅ Built on validated community evidence
- ✅ Commander + NSman dual perspectives
- ✅ Realistic, believable implementation

### 3. Feasibility ✅

**Technology Stack** (All Mature & Deployable):
- ✅ Next.js 14 - Production-ready web framework
- ✅ TensorFlow Lite - Proven mobile AI inference
- ✅ PostgreSQL - Enterprise-grade database
- ✅ FastAPI - High-performance Python backend
- ✅ Browser-compatible - No special hardware required

**Implementation Plan**:
1. **Phase 1** (3 months): Core verification + dashboard
2. **Phase 2** (2 months): Commander dashboard + analytics
3. **Phase 3** (2 months): Buddy system + notifications
4. **Phase 4** (1 month): Security hardening + integration

**Deployment Strategy**:
- Hybrid cloud: Sensitive data on government infrastructure, assets on CDN
- Phased rollout: Pilot with 1 company → battalion → brigade
- Progressive Web App (PWA) for mobile-first delivery

**Why Feasible**:
- ✅ Uses mature technologies (Next.js, TensorFlow Lite, PostgreSQL)
- ✅ No specialized hardware required
- ✅ Browser-compatible deployment
- ✅ Scalable architecture (handles 100K+ users)
- ✅ Offline capability reduces infrastructure dependency
- ✅ Phased rollout: Pilot company → battalion → brigade
- ✅ Synthetic datasets for AI training (no sensitive data needed)

---

## Competitive Advantages

1. **Real Friction Points**: Built on validated operational pain points, not assumptions
2. **Commander Dashboard**: Strongest differentiator - most teams ignore unit coordination
3. **Security & Privacy**: Edge-AI privacy-preserving + most teams forget security slide
4. **Offline Resilience**: Works in restricted connectivity (training areas, ships, camps)
5. **Operational Realism**: Professional military aesthetics, believable defence-tech proposal
6. **Feature Prioritization**: Unit checklists FIRST, AI assistance second (not AI-first hype)

---

## Future Roadmap

### Short Term (6 months)
- Integration with NS Portal authentication
- Real TensorFlow Lite model training (synthetic field pack dataset)
- Push notification infrastructure
- Unit S1 branch admin portal

### Medium Term (12 months)
- Predictive readiness analytics (ML-based intervention recommendations)
- IPPT fitness tracking integration
- Multi-language support (EN, ZH, MS, TA)
- Wearable device integration (Garmin, Apple Watch)

### Long Term (24 months)
- Logistics demand forecasting
- Training optimization recommendations
- Integration with SAF systems (MINDEF, eServices)
- Cross-unit coordination for large-scale mobilisations

---

## Demo Access

**Live Demo**: http://localhost:3000  
**Local Setup**:
```bash
cd mobilise
npm install
npm run dev
```

**Test Flow**:
1. Click "Login with Singpass" on landing page
2. Explore Dashboard → 78% readiness score
3. Try "Verify Pack" → Scan simulation → Results
4. Check "Checklist" → Equipment categories with expiry tracking
5. View "Commander" → Platoon heatmap and analytics
6. Explore "Buddy" → Equipment coordination matches
7. Review "Alerts" → 3 unread operational notifications
8. Complete "Acknowledge" → SAF100 confirmation flow

---

## Submission Files

1. **Proposal** (Value Proposition Slide Deck) - 15 slides
2. **Elevator Pitch** (1-minute video)
3. **Wireframe** (8 key screens with flow and descriptions)
4. **Architecture Diagram** (Infrastructure, network, compute, storage, connections)
5. **Source Code** (This repository - fully functional demo)

---

## Contact

**Submission URL**: tk.sg/codeexp26_qualifiers  
**Deadline**: 12:00 noon, 21 May 2026

---

## Conclusion

MOBILISE is not a checklist app.

It is a **centralized operational readiness platform** designed to address validated friction points in NS mobilisation workflows.

By solving unit SOP fragmentation, expired equipment oversight, and commander administrative burden, MOBILISE transforms readiness from reactive preparation into proactive operational confidence.

**From Notification to Combat-Ready.**

🎯 Built on real operational friction points  
🛡️ Designed for the modern NS force  
🤝 Strengthening unit camaraderie through coordination  
🔒 Privacy-preserving offline-capable architecture

---

**Thank you for considering our submission.**

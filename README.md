<div align="center">

# Vinay Kumar — Portfolio

### Android & Flutter Engineer • Enterprise Mobile • Industrial Systems • Applied AI/ML

🌐 **Live Portfolio**  
https://vinay-portfolio-beryl.vercel.app

</div>

---

## About

This repository contains the source code for my personal engineering portfolio website.

I engineer production-focused mobile applications that connect **enterprise workflows**, **real-world industrial hardware** (Newland, Zebra, CipherLab), **APIs**, and **intelligent on-device AI/ML experiences**.

---

## 🚀 Core Production & Engineering Projects

### 1. SKL-WMS — Warehouse Management System
* **Status**: 🟢 **LIVE IN PRODUCTION**
* **Platform**: Flutter • Dart • Riverpod • Provider • Dio • Newland SDK • Firebase
* **Workflows**: Vehicle gate-in, inward management, GRN verification, smart putaway, bin/location inventory tracking, physical inventory audits (PIV), picking, and outbound dispatch.
* **Hardware**: Dedicated Newland handheld terminals (HHT), camera scanning fallback, and Bluetooth thermal printing.

---

### 2. KBR TMS — Transport Management System
* **Status**: 🟢 **LIVE IN PRODUCTION**
* **Platform**: Flutter • Dart • Provider • Riverpod • Hive • Google Maps • FCM • Secure Storage
* **Workflows**: End-to-end freight lifecycle: Indent → Vehicle Placement → Trip Execution → Live Tracking → Digital Proof of Delivery (POD) → Invoicing & Settlement.
* **Architecture**: Multi-portal authentication (KBR Transways & Sat Kabir Logistics), BFC/THC approvals, remote session termination, and Hive local caching.

---

### 3. PRECAST ERP — Precast Manufacturing & Operations Platform
* **Status**: 🟢 **LIVE IN PRODUCTION**
* **Platform**: Flutter • Dart • Riverpod 2.x • TensorFlow Lite • MobileFaceNet • Google ML Kit • Newland SDK • PHP REST API
* **Workflows**: Concrete pouring, mold casting, curing monitoring, WIP tracking, Quality Control (QC) approvals/rejections, procurement GRN, and product-to-vehicle dispatch.
* **Applied AI/ML**: On-device biometric face verification pipeline (Google ML Kit face detection → MobileFaceNet TFLite → 128D mathematical embeddings → backend gallery verification).

---

### 4. SKL HRMS — Enterprise Human Resource Management System
* **Status**: 🔵 **CURRENTLY BUILDING**
* **Platform**: Flutter • Dart • Riverpod 2.x • GoRouter • GetIt • Camera • Geolocator
* **Workflows**: Command center dashboard, biometric gate-in/out terminal with live camera and GateFrameOverlay, precision GPS geocoding validation, leaves, and payroll UI.
* **Architecture**: Feature-First Clean Architecture (Presentation → Domain → Data). Data layer currently powered by `MockRepositories` while backend APIs are being finalized, designed for zero-friction API replacement without touching presentation logic.

---

## ✨ Tech Stack & Portfolio Architecture

* **Framework**: React 19 + Vite 8
* **Styling**: Tailwind CSS 4
* **Motion & Interactions**: Framer Motion
* **Visual Effects**: tsParticles (with `prefers-reduced-motion` compliance)
* **Integrations**: EmailJS (functional contact form), React GitHub Calendar
* **Routing / Navigation**: React Scroll with active section indicators

---

## 📂 Information Architecture

1. **Hero**: Technical positioning & value proposition ("I build enterprise mobile systems that work beyond the screen.")
2. **About**: Engineering identity & 4-quadrant capability map
3. **Areas of Expertise**: 6 enterprise mobile & industrial disciplines
4. **Selected Production Work**: 4 deep-dive case studies (WMS, TMS, PRECAST ERP, HRMS)
5. **What I Engineer**: Capability-based engineering pillars
6. **Technical Skills**: 5 categorized technical groups (Mobile, Architecture, Backend, Industrial Mobility, AI/ML)
7. **Professional Experience**: Sat Kabir Logistics & Seabird Logisolutions
8. **GitHub Activity**: Live open-source contributions calendar
9. **Certifications**: Compact technical credentials
10. **Contact**: Direct communication channel powered by EmailJS
11. **Footer**: Verified links and professional identity

---

## ⚙️ Getting Started

```bash
# Clone the repository
git clone https://github.com/VinayTiwari023/vinay-portfolio.git
cd vinay-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Run production build
npm run build

# Run linter
npm run lint
```

---

## 🔐 Environment Variables

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 👨‍💻 Connect With Me

* **Portfolio**: https://vinay-portfolio-beryl.vercel.app
* **GitHub**: https://github.com/VinayTiwari023
* **LinkedIn**: https://www.linkedin.com/in/vinay-kumar-android
* **Email**: vinaytiwari7011@gmail.com
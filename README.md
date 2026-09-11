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

The portfolio showcases **8 professional enterprise projects** across two organizations, demonstrating career progression from core mobile development and peripheral integration to end-to-end industrial systems engineering.

---

## 🏢 Professional Experience & Project Portfolio (8 Projects)

### Sat Kabir Logistics — Current Organization (April 2026 – Present)
*Role: Android Developer*

#### 1. SKL-WMS — Warehouse Management System
* **Status**: 🟢 **LIVE IN PRODUCTION**
* **Stack**: Flutter • Dart • Riverpod • Provider • Dio • Newland Barcode SDK • Firebase
* **Workflows**: Vehicle gate-in, inward management, GRN verification, putaway location assignment, bin/location inventory tracking, physical inventory audits (PIV), picking, and outbound dispatch.
* **Hardware**: Dedicated Newland handheld terminals (HHT), camera scanning fallback, and Bluetooth thermal printing.

#### 2. KBR TMS — Transport Management System
* **Status**: 🟢 **LIVE IN PRODUCTION**
* **Stack**: Flutter • Dart • Provider • Riverpod • Hive • Google Maps • FCM • Secure Storage
* **Workflows**: End-to-end commercial freight lifecycle: Indent → Vehicle Placement → Trip Execution → Live Tracking → Digital Proof of Delivery (POD) → Freight Invoicing & Settlement.
* **Architecture**: Multi-portal authentication (KBR Transways & Sat Kabir Logistics), BFC/THC approvals, remote session termination, and Hive local caching.

#### 3. PRECAST ERP — Precast Manufacturing & Operations Platform
* **Status**: 🟢 **LIVE IN PRODUCTION**
* **Stack**: Flutter • Dart • Riverpod 2.x • TensorFlow Lite • MobileFaceNet • Google ML Kit • Newland SDK • PHP REST API
* **Workflows**: Concrete pouring, mold casting, curing monitoring, WIP tracking, Quality Control (QC) approvals/rejections, procurement GRN, and product-to-vehicle dispatch.
* **Applied AI/ML**: On-device biometric face verification pipeline (Google ML Kit face detection → MobileFaceNet TFLite → 128D mathematical embeddings → backend gallery verification).

#### 4. SKL HRMS — Enterprise Human Resource Management System
* **Status**: 🔵 **CURRENTLY BUILDING**
* **Stack**: Flutter • Dart • Riverpod 2.x • GoRouter • GetIt • Camera SDK • Geolocator
* **Workflows**: Command center dashboard, biometric gate-in/out terminal with live camera and GateFrameOverlay, location-aware attendance validation using GPS and geocoding, leaves, and payroll UI.
* **Architecture**: Feature-First Clean Architecture (Presentation → Domain → Data). Data layer currently powered by `MockRepositories` while backend APIs are being finalized, designed for API replacement without restructuring the presentation layer.

---

### Seabird Logisolutions — Previous Organization (July 2023 – April 2026)
*Role: Android & Flutter Software Developer*

#### 5. WMS - GNOSIS — Enterprise Warehouse Management
* **Status**: 🔵 **PRODUCTION DEPLOYED**
* **Stack**: Flutter • REST API • Provider • Barcode Scanner • Bluetooth Thermal Printer • SQLite • WebSocket
* **Workflows**: Multi-warehouse deployment across 3 facilities handling 500+ daily scan operations; inbound receipt, putaway, picking, and shipment workflows with ESC/POS label printing.

#### 6. Visitor Management System — Contactless Enterprise Entry
* **Status**: 🔵 **PRODUCTION DEPLOYED**
* **Stack**: Flutter • Google ML Kit Face Recognition • REST API • Camera SDK • QR Scanner • Firebase
* **Workflows**: Contactless check-in via face detection and QR verification, multi-level host approval chains, and digital gatepass generation.
* **Play Store**: [Google Play Store](https://play.google.com/store/apps/details?id=com.sll.admin.vms)

#### 7. Expense Management System — Financial Mobility & OCR
* **Status**: 🔵 **PRODUCTION DEPLOYED**
* **Stack**: Java • Kotlin • ML Kit OCR • REST API • Firebase • Cloud Functions • SQLite
* **Workflows**: In-house expense tracking platform with ML-powered OCR bill reading for automated receipt data extraction and multi-tier approval workflows.
* **Play Store**: [Google Play Store](https://play.google.com/store/apps/details?id=com.ems.expense)

#### 8. SLL Ticketing System — Enterprise IT Service Management
* **Status**: 🔵 **PRODUCTION DEPLOYED**
* **Stack**: Flutter • Provider • Firebase • REST API • Cloud Functions
* **Workflows**: Internal IT incident management platform used by IT-Infra teams Pan-India; priority routing, real-time tracking, and role-based support dashboards.
* **Play Store**: [Google Play Store](https://play.google.com/store/apps/details?id=com.seabird.ticketing)

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
4. **Selected Production Work**: 8 projects organized across 2 organizations (Sat Kabir Logistics & Seabird Logisolutions)
5. **What I Engineer**: Capability-based engineering pillars
6. **Technical Skills**: 5 categorized technical groups (Mobile, Architecture, Backend, Industrial Mobility, AI/ML)
7. **Professional Experience**: Detailed timeline for Sat Kabir Logistics & Seabird Logisolutions
8. **GitHub Activity**: Live open-source contributions calendar
9. **Certifications**: Verified technical credentials
10. **Contact**: Direct communication channel powered by EmailJS
11. **Footer**: Verified links and professional identity

---

## ⚙️ Getting Started

```bash
# Clone the repository
git clone https://github.com/VinayTiwari023/vinay-portfolio.git
cd vinay-portfolio

# Checkout the redesign branch
git checkout portfolio-redesign

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

## 👨‍💻 Connect With Me

* **Portfolio**: https://vinay-portfolio-beryl.vercel.app
* **GitHub**: https://github.com/VinayTiwari023
* **LinkedIn**: https://www.linkedin.com/in/vinay-kumar-android
* **Email**: vinaytiwari7011@gmail.com

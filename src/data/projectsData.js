import wmsDashboardImg from "../assets/projects/wms_dashboard.png";
import wmsInwardImg from "../assets/projects/wms_inward.png";
import wmsInventoryImg from "../assets/projects/wms_inventory.png";
import precastDashImg from "../assets/projects/precast_dash.png";
import precastVerificationImg from "../assets/projects/precast_verification.png";
import precastDispatchImg from "../assets/projects/precast_dispatch.png";
import kbrSplashImg from "../assets/projects/kbr_splash.png";
import kbrLogoImg from "../assets/projects/kbr_logo.png";
import hrmsIconImg from "../assets/projects/hrms_icon.png";

export const projects = [
  {
    id: "skl-wms",
    number: "01",
    title: "SKL-WMS",
    subtitle: "Warehouse Management System",
    status: "LIVE IN PRODUCTION",
    statusType: "production",
    domain: "Warehouse Operations & Industrial Mobility",
    tagline: "End-to-end warehouse execution system from vehicle gate entry through inward, putaway, inventory verification, and dispatch.",
    overview:
      "SKL-WMS is a cross-platform warehouse management system designed and deployed for Sat Kabir Logistics. It automates and digitizes floor workflows from the exact moment a transport vehicle approaches the gate to final order picking and outbound dispatch. Engineered for high-frequency scanning on industrial handheld terminals as well as mobile devices.",
    architecture:
      "Clean Architecture with Feature-Based Structuring. Strict separation between presentation, domain, and data layers with GetIt service locator and repository contracts.",
    capabilities: [
      "Inward management & GRN verification against goods receipt notes",
      "Smart putaway location suggestions for bin and rack organization",
      "Real-time validation to eliminate stock-entry discrepancies",
      "Outward management: order generation, scan-to-verify picking & dispatch",
      "Multi-stage shipping approval workflows (manual & automated)",
      "Inventory tracking categorized by exact bin/location and product SKU",
      "Physical Inventory Verification (PIV) for cycle counting and audits",
      "Digital vehicle gatepass logging for gate-in and gate-out control",
      "Real-time MIS dashboard with transaction tracking and monthly analytics",
      "Multi-mode scanning: mobile camera fallback + native Newland hardware",
      "Voice-guided warehouse operations with Text-to-Speech (TTS)",
      "Native PDF viewing for invoices/GRNs and Excel reporting exports"
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Provider",
      "Dio",
      "REST APIs",
      "Newland Barcode SDK",
      "TTS (Text-to-Speech)",
      "Firebase",
      "Syncfusion PDF",
      "FL Chart"
    ],
    engineeringFocus:
      "Eliminating scan latency on rugged handheld terminals, enforcing strict offline/storage boundaries through abstract contracts, and ensuring reliable floor-to-cloud transactional integrity.",
    hardware: "Newland Industrial Handheld Terminals (HHT), Camera Scanners, Thermal Bluetooth Printers",
    mainImage: wmsDashboardImg,
    gallery: [
      { img: wmsDashboardImg, label: "MIS & Live Dashboard" },
      { img: wmsInwardImg, label: "GRN & Inward Verification" },
      { img: wmsInventoryImg, label: "Bin & Location Inventory" }
    ]
  },
  {
    id: "kbr-tms",
    number: "02",
    title: "KBR TMS",
    subtitle: "Transport Management System",
    status: "LIVE IN PRODUCTION",
    statusType: "production",
    domain: "Enterprise Logistics & Fleet Management",
    tagline: "Commercial transport platform orchestrating Indent → Placement → Trip → Tracking → POD → Billing → Settlement.",
    overview:
      "An enterprise transport management platform supporting the end-to-end commercial freight lifecycle for KBR Transways and Sat Kabir Logistics. The application coordinates vehicle placement against client freight indents, monitors transit milestones via Google Maps, digitizes Proof of Delivery (POD), and manages billing reconciliations including BFC and THC approvals.",
    architecture:
      "Feature-First Clean Architecture powered by Provider and Riverpod, utilizing Dio interceptors, Hive local caching, and Flutter Secure Storage for token lifecycles.",
    capabilities: [
      "Multi-portal authentication architecture (KBR Transways & Sat Kabir Logistics)",
      "Fleet placement and vehicle allocation against enterprise freight indents",
      "Real-time trip execution monitoring with Google Maps checkpoint tracking",
      "Digital Proof of Delivery (POD) document capture and upload pipeline",
      "Customer freight invoicing and supplier freight billing modules",
      "BFC (Bill For Collection) and THC (Truck Hire Charge) approval systems",
      "Remote session termination and automated session validation guards",
      "High-speed offline caching using Hive and typed JSON data models",
      "Firebase Cloud Messaging (FCM) for real-time dispatch and trip notifications",
      "Dynamic theming engine with custom seed colors for multi-tenant branding"
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Provider",
      "Riverpod",
      "Hive",
      "Dio",
      "REST APIs",
      "Google Maps",
      "Firebase FCM",
      "Secure Storage"
    ],
    engineeringFocus:
      "Multi-portal session isolation, fault-tolerant document upload over inconsistent mobile networks, and typed data integrity across the commercial freight lifecycle.",
    hardware: "Google Maps Location Services, Camera Document Scanner, Secure Credential Storage",
    mainImage: kbrSplashImg,
    gallery: [
      { img: kbrSplashImg, label: "Transport Gateway" },
      { img: kbrLogoImg, label: "KBR Enterprise Portal" }
    ]
  },
  {
    id: "precast-erp",
    number: "03",
    title: "PRECAST ERP",
    subtitle: "Precast Manufacturing & Operations Platform",
    status: "LIVE IN PRODUCTION",
    statusType: "production",
    domain: "Industrial Manufacturing & Applied AI/ML",
    tagline: "Industrial Android platform uniting concrete production, QC, dispatch, and on-device 128D AI face embeddings.",
    overview:
      "A specialized industrial operations platform digitizing the complete production lifecycle in precast concrete manufacturing plants. Connects shop-floor concrete pouring, casting, curing, and WIP monitoring directly with procurement, quality control approval/rejection workflows, gatepass verification, and on-device biometric face verification.",
    architecture:
      "Layered Enterprise Architecture (Models, Services, Riverpod Providers, ViewModels, Views, Widgets) with 0 static analysis issues and responsive adaptors for rugged handheld displays.",
    capabilities: [
      "Concrete batch management, mold scanning, and casting records",
      "Curing activity tracking and multi-stage Work-In-Progress (WIP) monitoring",
      "Quality Control (QC) workflow with structured approval, rejection, and remarks",
      "Procurement lifecycle: Purchase Orders (PO), approval chains, and GRN processing",
      "Supplier transaction history and payment milestone tracking",
      "Product-to-vehicle scanning, dispatch slip generation, and delivery tracking",
      "Enterprise in-app APK distribution via AppCheckService and version manifests",
      "Native Newland hardware barcode scanning (barcode_newland_flutter)",
      "Camera-based barcode and QR code scanning fallback via Google ML Kit",
      "Automated operational PDF document generation and tabular Excel exports"
    ],
    aiMl: {
      headline: "On-Device Face Verification Pipeline",
      technology: "Google ML Kit + MobileFaceNet + TensorFlow Lite",
      pipeline: [
        "1. Camera Stream",
        "2. Google ML Kit Face Detection",
        "3. MobileFaceNet (TensorFlow Lite)",
        "4. 128D Face Embedding",
        "5. Backend Gallery Verification"
      ],
      details:
        "Processes faces locally using custom mobilefacenet.tflite via tflite_flutter. Generates compact 128-dimensional mathematical embeddings to verify identity against backend gallery records without uploading raw facial image frames."
    },
    technologies: [
      "Flutter",
      "Dart",
      "Riverpod 2.x",
      "TensorFlow Lite",
      "MobileFaceNet",
      "Google ML Kit",
      "barcode_newland_flutter",
      "PHP REST API",
      "Firebase FCM",
      "SharedPreferences"
    ],
    engineeringFocus:
      "On-device neural network inference under constrained mobile resources, zero-latency physical barcode capture, and responsive layouts designed for industrial handheld terminals.",
    hardware: "Newland Industrial Scanners, Camera ML Stream, Handheld Industrial Displays",
    mainImage: precastDashImg,
    gallery: [
      { img: precastDashImg, label: "Industrial Command Dashboard" },
      { img: precastVerificationImg, label: "AI Verification & Gatepass" },
      { img: precastDispatchImg, label: "Dispatch & Logistics" }
    ]
  },
  {
    id: "skl-hrms",
    number: "04",
    title: "SKL HRMS",
    subtitle: "Enterprise Human Resource Management System",
    status: "CURRENTLY BUILDING",
    statusType: "building",
    domain: "Workforce Operations & Intelligent Mobility",
    tagline: "Next-generation HR command center with precision GPS geocoding, biometric camera gate validation, and AI assistant.",
    overview:
      "A mobile-first workforce management platform engineered for enterprise scalability. Developed using Feature-First Clean Architecture, the project strictly isolates presentation and domain logic from the data layer using Mock Repositories while backend APIs are being finalized, allowing zero-friction transition to live Dio endpoints without touching business logic.",
    architecture:
      "Feature-First Clean Architecture: Presentation → Domain → Data. Currently powered by Mock Repositories for rapid UI/UX iteration and device sensor validation, ready for direct API swap.",
    capabilities: [
      "Feature-First Clean Architecture across vertically sliced enterprise modules",
      "Riverpod 2.x state management with code generation and autoDispose memory guards",
      "GoRouter declarative routing with reactive Authentication Guards",
      "Biometric Gate-In/Gate-Out terminal with native camera feed & GateFrameOverlay",
      "Precision GPS sync with geolocator & geocoding for physical address verification",
      "Telemetry Command Center Dashboard with glassmorphic widget composition",
      "Leaves Management: multi-step request flows, balance telemetry, and approval status",
      "Payslip & payroll UI with secure financial previews and PDF display",
      "Scaffolds for Shifts, Manager Approvals, Performance Reviews, and Document Vault",
      "AI Assistant / Smart HR Bot (In Development) with contextual chat & suggestion chips"
    ],
    aiAssistant: {
      status: "In Development",
      description:
        "Conversational Smart HR Bot interface with real-time typing indicators, auto-scrolling animations, and context-driven suggestion chips designed to assist employees with corporate HR queries."
    },
    technologies: [
      "Flutter",
      "Dart",
      "Riverpod 2.x",
      "GoRouter",
      "GetIt",
      "Camera SDK",
      "Geolocator",
      "Geocoding",
      "JSON Serializable",
      "Google Fonts"
    ],
    engineeringFocus:
      "Decoupled Clean Architecture ready for API replacement, hardware sensor synchronization (GPS + Camera), and memory-leak prevention via Riverpod autoDispose.",
    hardware: "Native Device Camera, GPS Sensor, Geocoding Location Engine",
    mainImage: hrmsIconImg,
    gallery: [
      { img: hrmsIconImg, label: "SKL HRMS Architecture & Icon" }
    ]
  }
];


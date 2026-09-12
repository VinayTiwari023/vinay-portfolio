import wmsLoginImg from "../assets/projects/sklwms/login.png";
import wmsDashboardImg from "../assets/projects/sklwms/dashboard.png";
import wmsNavImg from "../assets/projects/sklwms/navigation.png";
import wmsVehicleGateInImg from "../assets/projects/sklwms/vehicle_gate_in.png";
import wmsGateInVehicleImg from "../assets/projects/sklwms/gateinvehicle.png";
import wmsVehicleVerifyImg from "../assets/projects/sklwms/vehicleverify.png";
import wmsAddGatepassImg from "../assets/projects/sklwms/addgatepass.png";
import wmsInwardListImg from "../assets/projects/sklwms/inward.png";
import wmsNewInwardImg from "../assets/projects/sklwms/new inward.png";
import wmsInwardDetailsImg from "../assets/projects/sklwms/inwarddetails.png";
import wmsNewGrnImg from "../assets/projects/sklwms/newgrn.png";
import wmsInventoryByLocImg from "../assets/projects/sklwms/inventorybylocations.png";
import wmsInventoryByProdImg from "../assets/projects/sklwms/inventorybyproducts.png";
import wmsReadyDispatchImg from "../assets/projects/sklwms/readytodispatch.png";
import wmsOutwardListImg from "../assets/projects/sklwms/outwardlist.png";
import wmsAddNewOutwardImg from "../assets/projects/sklwms/add_new_outward.png";
import wmsDailyMisImg from "../assets/projects/sklwms/dailymis.png";
import wmsMonthlyMisImg from "../assets/projects/sklwms/monthymis.png";
import precastDashImg from "../assets/projects/precast/Dash.png";
import precastDispatchImg from "../assets/projects/precast/Dispatch.png";
import precastSecurityImg from "../assets/projects/precast/SecurityDispatch.png";
import precastOrdersImg from "../assets/projects/precast/AllOrders.png";
import precastNewOrderImg from "../assets/projects/precast/newOrder.png";
import precastGRNImg from "../assets/projects/precast/NewGRN.png";
import precastRegisterPOImg from "../assets/projects/precast/RegisterPO.png";
import precastPaymentPOImg from "../assets/projects/precast/PaymentPo.png";
import precastRecordPaymentPOImg from "../assets/projects/precast/recordPaymentPO.png";
import precastQuotationImg from "../assets/projects/precast/NewQuoatation.png";
import precastNavImg from "../assets/projects/precast/Navigation.png";
import precastLoginImg from "../assets/projects/precast/Login.png";
import precastVerificationImg from "../assets/projects/precast_verification.png";
import tmsLoginImg from "../assets/projects/tms/logintms.png";
import tmsDashImg from "../assets/projects/tms/dash.png";
import tmsLiveTrackingImg from "../assets/projects/tms/LiveTracking.png";
import tmsTrackingImg from "../assets/projects/tms/Tracking.png";
import tmsNavigationImg from "../assets/projects/tms/navigation.png";
import tmsChallanImg from "../assets/projects/tms/ValidateChallan.png";
import tmsDriversImg from "../assets/projects/tms/ValidateDrivers.png";
import tmsFastagImg from "../assets/projects/tms/ValidateFastag.png";
import hrmsDashboardImg from "../assets/projects/sklhrms/dashboard.png";
import hrmsLoginImg from "../assets/projects/sklhrms/login.png";
import hrmsPunchInImg from "../assets/projects/sklhrms/puchin.png";
import hrmsPunchOutImg from "../assets/projects/sklhrms/punchout.png";
import hrmsAttendanceLogImg from "../assets/projects/sklhrms/attendencelog.png";
import hrmsAttendanceReviewImg from "../assets/projects/sklhrms/attendencelogreview.png";
import hrmsApplyLeaveImg from "../assets/projects/sklhrms/applyleave.png";
import hrmsLeaveListImg from "../assets/projects/sklhrms/leavelist.png";
import hrmsPerformanceImg from "../assets/projects/sklhrms/performance.png";
import hrmsGoalsImg from "../assets/projects/sklhrms/addnewgoals.png";
import hrmsAiBotImg from "../assets/projects/sklhrms/aibot.png";
import hrmsDocumentVaultImg from "../assets/projects/sklhrms/documentsection.png";
import hrmsDirectoryImg from "../assets/projects/sklhrms/companydirectory.png";
import hrmsNewsfeedImg from "../assets/projects/sklhrms/newsfeed.png";
import hrmsNotificationsImg from "../assets/projects/sklhrms/notificationtray.png";
import hrmsRaiseTicketImg from "../assets/projects/sklhrms/raiseticket.png";
import hrmsHelpdeskImg from "../assets/projects/sklhrms/helpdesk.png";
import hrmsProfileImg from "../assets/projects/sklhrms/profile.png";
import hrmsIconImg from "../assets/projects/hrms_icon.png";

// Previous Organization Assets (Seabird Logisolutions)
import wmsGnosisImg from "../assets/projects/wms.png";
import visitorImg from "../assets/projects/visitor.png";
import emsImg from "../assets/projects/ems_app.png";
import ticketingImg from "../assets/projects/ticketing_app.png";

export const organizations = {
  current: {
    name: "Sat Kabir Logistics",
    role: "Android Developer",
    duration: "April 2026 – Present",
    type: "Current Organization",
    summary:
      "Leading core enterprise mobile development across warehouse execution, commercial transport logistics, precast manufacturing ERP, and workforce management systems."
  },
  previous: {
    name: "Seabird Logisolutions",
    role: "Android & Flutter Software Developer",
    duration: "July 2023 – April 2026",
    type: "Previous Organization",
    summary:
      "Engineered and deployed foundational production mobile applications across multi-facility warehouse operations, biometric visitor management, expense automation, and internal IT infrastructure."
  }
};

export const currentProjects = [
  {
    id: "skl-wms",
    number: "01",
    organization: "Sat Kabir Logistics",
    organizationType: "current",
    title: "SKL-WMS",
    subtitle: "Warehouse Management System",
    status: "LIVE",
    statusType: "production",
    statusLabel: "Available on Google Play",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.sklgroup.sklwms",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.sklgroup.sklwms",
    domain: "Warehouse Operations & Industrial Mobility",
    tagline:
      "End-to-end warehouse execution system from vehicle gate entry through inward, putaway, inventory verification, and outbound dispatch.",
    overview:
      "SKL-WMS is a cross-platform warehouse management system engineered and deployed for Sat Kabir Logistics. It digitizes floor workflows from the moment a transport vehicle approaches the gate to final order picking and outbound dispatch. Designed for high-frequency scanning on industrial handheld terminals as well as mobile devices.",
    architecture:
      "Clean Architecture with Feature-Based Structuring. Strict separation between presentation, domain, and data layers with GetIt service locator and repository contracts.",
    capabilities: [
      "Inward management & GRN verification against goods receipt notes",
      "Putaway workflows for bin and rack location assignment",
      "Real-time validation to eliminate stock-entry discrepancies",
      "Outward management: order generation, scan-to-verify picking & dispatch",
      "Multi-stage shipping approval workflows (manual & automated)",
      "Inventory tracking categorized by exact bin/location and product SKU",
      "Physical Inventory Verification (PIV) for cycle counting and audits",
      "Digital vehicle gatepass logging for gate-in and gate-out control",
      "Real-time MIS dashboard with transaction tracking and monthly analytics",
      "Multi-mode scanning: mobile camera fallback + native Newland hardware",
      "Voice-guided warehouse operations with Text-to-Speech (TTS)",
      "Native PDF viewing for invoices/GRNs and tabular Excel exports"
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
      "Sub-second barcode acquisition and floor validation on rugged handheld terminals, strict storage boundaries through abstract contracts, and reliable floor-to-cloud transactional integrity.",
    hardware: "Newland Industrial Handheld Terminals (HHT), Camera Scanners, Thermal Bluetooth Printers",
    mainImage: wmsLoginImg,
    gallery: [
      { img: wmsLoginImg, label: "Industrial Handheld Login" },
      { img: wmsDashboardImg, label: "Warehouse Operations Dashboard" },
      { img: wmsNavImg, label: "Warehouse Module Navigation" },
      { img: wmsVehicleGateInImg, label: "Vehicle Gate Entry" },
      { img: wmsGateInVehicleImg, label: "Gate-In Vehicle Registry" },
      { img: wmsVehicleVerifyImg, label: "Vehicle Verification & Security" },
      { img: wmsAddGatepassImg, label: "Digital Gatepass Generation" },
      { img: wmsInwardListImg, label: "Inward Shipments Pipeline" },
      { img: wmsNewInwardImg, label: "Create Inward Consignment" },
      { img: wmsInwardDetailsImg, label: "Inward Consignment Details" },
      { img: wmsNewGrnImg, label: "Goods Receipt Note (GRN)" },
      { img: wmsInventoryByLocImg, label: "Inventory by Bin & Location" },
      { img: wmsInventoryByProdImg, label: "Inventory by Product SKU" },
      { img: wmsReadyDispatchImg, label: "Ready to Dispatch Queue" },
      { img: wmsOutwardListImg, label: "Outward Order Pipeline" },
      { img: wmsAddNewOutwardImg, label: "Create Outward Order" },
      { img: wmsDailyMisImg, label: "Daily Operations MIS" },
      { img: wmsMonthlyMisImg, label: "Monthly Analytics MIS" }
    ]
  },
  {
    id: "kbr-tms",
    number: "02",
    organization: "Sat Kabir Logistics",
    organizationType: "current",
    title: "KBR TMS",
    subtitle: "Transport Management System",
    status: "LIVE",
    statusType: "production",
    statusLabel: "Available on Google Play",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.kbrtransways.kbrtms",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.kbrtransways.kbrtms",
    domain: "Enterprise Logistics & Fleet Management",
    tagline:
      "Commercial freight execution platform: Indent → Vehicle Placement → Trip → Tracking → POD → Billing → Settlement.",
    overview:
      "An enterprise transport management platform supporting the end-to-end commercial freight lifecycle for KBR Transways and Sat Kabir Logistics. The application coordinates vehicle placement against client freight indents, monitors transit milestones via Google Maps, digitizes Proof of Delivery (POD), and manages billing reconciliations including BFC and THC approvals.",
    architecture:
      "Feature-First Clean Architecture powered by Provider and Riverpod, utilizing Dio interceptors, Hive local caching, and Flutter Secure Storage for token lifecycles.",
    capabilities: [
      "Multi-portal authentication architecture (KBR Transways & Sat Kabir Logistics)",
      "Fleet placement and vehicle allocation against enterprise freight indents",
      "Trip execution monitoring with Google Maps checkpoint tracking",
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
      "Multi-portal session isolation, fault-tolerant document upload over mobile networks, and typed data integrity across the commercial freight lifecycle.",
    hardware: "Google Maps Location Services, Camera Document Scanner, Secure Credential Storage",
    mainImage: tmsLoginImg,
    gallery: [
      { img: tmsLoginImg, label: "Commercial Portal Login" },
      { img: tmsDashImg, label: "Command Dashboard" },
      { img: tmsLiveTrackingImg, label: "Live Fleet Tracking" },
      { img: tmsTrackingImg, label: "Trip Status" },
      { img: tmsNavigationImg, label: "Navigation & Route" },
      { img: tmsChallanImg, label: "Challan Validation" },
      { img: tmsDriversImg, label: "Driver KYC" },
      { img: tmsFastagImg, label: "FASTag Verification" }
    ]
  },
  {
    id: "precast-erp",
    number: "03",
    organization: "Sat Kabir Logistics",
    organizationType: "current",
    title: "PRECAST ERP",
    subtitle: "Precast Manufacturing & Operations Platform",
    status: "LIVE",
    statusType: "production",
    statusLabel: "Available on Google Play",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.skl.precast_erp",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.skl.precast_erp",
    domain: "Industrial Manufacturing & Applied AI/ML",
    tagline:
      "Industrial Android platform uniting concrete production, QC workflows, dispatch, and on-device 128D AI face embeddings.",
    overview:
      "A specialized industrial operations platform digitizing the complete production lifecycle in precast concrete manufacturing plants. Connects shop-floor concrete pouring, casting, curing, and WIP monitoring directly with procurement, quality control approval/rejection workflows, gatepass verification, and on-device biometric face verification.",
    architecture:
      "Layered Enterprise Architecture (Models, Services, Riverpod Providers, ViewModels, Views, Widgets) with responsive adaptors for rugged handheld displays.",
    capabilities: [
      "Concrete batch management, mold scanning, and casting records",
      "Curing activity tracking and multi-stage Work-In-Progress (WIP) monitoring",
      "Quality Control (QC) workflow with structured approval, rejection, and remarks",
      "Procurement lifecycle: Purchase Orders (PO), approval chains, and GRN processing",
      "Supplier transaction history and payment milestone tracking",
      "Product-to-vehicle scanning, dispatch slip generation, and delivery tracking",
      "Enterprise in-app APK distribution via AppCheckService and version manifests",
      "Hardware-assisted barcode scanning for warehouse and factory workflows (Newland HHT)",
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
      "On-device neural network inference under constrained mobile resources, hardware-assisted barcode scanning, and responsive layouts designed for industrial handheld terminals.",
    hardware: "Newland Industrial Scanners, Camera ML Stream, Handheld Industrial Displays",
    mainImage: precastLoginImg,
    gallery: [
      { img: precastLoginImg, label: "Enterprise Authentication" },
      { img: precastDashImg, label: "Industrial Command Dashboard" },
      { img: precastNavImg, label: "Module Navigation" },
      { img: precastDispatchImg, label: "Dispatch & Logistics" },
      { img: precastSecurityImg, label: "Gate Security & Verification" },
      { img: precastVerificationImg, label: "AI Biometric Verification" },
      { img: precastOrdersImg, label: "Order Pipeline" },
      { img: precastNewOrderImg, label: "Work Order Creation" },
      { img: precastGRNImg, label: "GRN Material Inward" },
      { img: precastRegisterPOImg, label: "Purchase Order Registry" },
      { img: precastPaymentPOImg, label: "PO Payment Status" },
      { img: precastRecordPaymentPOImg, label: "Record Payment Milestone" },
      { img: precastQuotationImg, label: "Quotation Generator" }
    ]
  },
  {
    id: "skl-hrms",
    number: "04",
    organization: "Sat Kabir Logistics",
    organizationType: "current",
    title: "SKL HRMS",
    subtitle: "Enterprise Human Resource Management System",
    status: "PRODUCTION",
    statusType: "production",
    statusLabel: "Currently in Production",
    domain: "Workforce Operations & Enterprise Mobility",
    tagline:
      "Mobile workforce command center with location-aware attendance validation, biometric camera gate validation, and AI assistant.",
    overview:
      "A mobile-first workforce management platform engineered for enterprise operations. Developed using Feature-First Clean Architecture, the project strictly isolates presentation and domain logic from the data layer using Mock Repositories while backend APIs are being finalized, designed with repository abstractions to allow backend API integration without restructuring the presentation layer.",
    architecture:
      "Feature-First Clean Architecture: Presentation → Domain → Data. Currently powered by Mock Repositories for rapid UI/UX iteration and device sensor validation, ready for direct API swap.",
    capabilities: [
      "Feature-First Clean Architecture across vertically sliced enterprise modules",
      "Riverpod 2.x state management with code generation and autoDispose memory guards",
      "GoRouter declarative routing with reactive Authentication Guards",
      "Biometric Gate-In/Gate-Out terminal with native camera feed & GateFrameOverlay",
      "Location-aware attendance validation using GPS and geocoding for physical facility verification",
      "Telemetry Command Center Dashboard with glassmorphic widget composition",
      "Leaves Management: multi-step request flows, balance telemetry, and approval status",
      "Payslip & payroll UI with financial previews and PDF display",
      "Scaffolds for Shifts, Manager Approvals, Performance Reviews, and Document Vault",
      "AI Assistant / Smart HR Bot (In Development) with contextual chat & suggestion chips"
    ],
    aiAssistant: {
      status: "In Development",
      description:
        "Conversational Smart HR Bot interface with typing indicators, auto-scrolling stream, and context-driven suggestion chips designed to assist employees with internal corporate HR queries."
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
    mainImage: hrmsLoginImg,
    gallery: [
      { img: hrmsLoginImg, label: "Enterprise Mobile Login" },
      { img: hrmsDashboardImg, label: "Command Center Dashboard" },
      { img: hrmsPunchInImg, label: "Biometric Camera Punch-In" },
      { img: hrmsPunchOutImg, label: "Biometric Punch-Out" },
      { img: hrmsAttendanceLogImg, label: "Attendance History & Logs" },
      { img: hrmsAttendanceReviewImg, label: "Attendance Log Review" },
      { img: hrmsApplyLeaveImg, label: "Apply Leave Flow" },
      { img: hrmsLeaveListImg, label: "Leave Telemetry & Balance" },
      { img: hrmsAiBotImg, label: "AI Smart HR Bot Assistant" },
      { img: hrmsPerformanceImg, label: "Performance & Review Metrics" },
      { img: hrmsGoalsImg, label: "Add Employee Objectives & Goals" },
      { img: hrmsDocumentVaultImg, label: "Employee Document Vault" },
      { img: hrmsDirectoryImg, label: "Corporate Directory & Org Chart" },
      { img: hrmsNewsfeedImg, label: "Corporate Newsfeed & Updates" },
      { img: hrmsNotificationsImg, label: "Notification Center" },
      { img: hrmsHelpdeskImg, label: "HR Helpdesk Support" },
      { img: hrmsRaiseTicketImg, label: "Raise HR Service Ticket" },
      { img: hrmsProfileImg, label: "Employee Profile & Details" },
      { img: hrmsIconImg, label: "Application Identity & Icon" }
    ]
  }
];

export const previousProjects = [
  {
    id: "wms-gnosis",
    number: "05",
    organization: "Seabird Logisolutions",
    organizationType: "previous",
    title: "WMS - GNOSIS",
    subtitle: "Enterprise Warehouse Management System",
    status: "PRODUCTION DEPLOYED",
    statusType: "previous",
    domain: "Enterprise Mobility & Warehouse Operations",
    tagline:
      "Full-stack WMS Android app deployed across 3 warehouses handling 500+ daily scan operations.",
    overview:
      "Full-stack WMS Android app deployed across 3 warehouses handling 500+ daily scan operations. Covers inbound, putaway, picking, and shipment workflows with real-time inventory tracking.",
    capabilities: [
      "Barcode automation across inbound receipt and putaway processes",
      "Real-time inventory verification and bin-level location tracking",
      "Outbound picking verification and vehicle dispatch coordination",
      "Bluetooth thermal printer integration (ESC/POS & ZPL) for label & sticker generation"
    ],
    technologies: [
      "Flutter",
      "REST API",
      "Provider",
      "Honeywell & Zebra Scanners",
      "ZPL & ESC/POS Printers",
      "SQLite",
      "WebSocket",
      "Docker"
    ],
    engineeringFocus:
      "Floor-level inventory accuracy, high-frequency scan handling across 3 warehouses, and ZPL sticker & Bluetooth thermal printer integration.",
    hardware: "Honeywell & Zebra Barcode Scanners, ZPL & ESC/POS Bluetooth Thermal Printers",
    mainImage: wmsGnosisImg,
    playStoreLink: null,
    isProtected: true
  },
  {
    id: "visitor-management",
    number: "06",
    organization: "Seabird Logisolutions",
    organizationType: "previous",
    title: "Visitor Management System",
    subtitle: "Contactless Enterprise Entry Platform",
    status: "PRODUCTION DEPLOYED",
    statusType: "previous",
    domain: "Biometric Security & Facility Access",
    tagline:
      "Enterprise visitor entry system with QR code verification, face recognition, and digital gate passes.",
    overview:
      "Enterprise visitor entry system with QR code verification, face recognition for contactless check-in, approval workflows, and digital gate pass generation.",
    capabilities: [
      "Contactless face recognition and QR code identity verification",
      "Multi-tier visitor entry request and manager approval workflows",
      "Digital gate pass generation with entry/exit timestamp audit trails",
      "Firebase Cloud Messaging triggers for immediate host notifications"
    ],
    technologies: [
      "Flutter",
      "Face Recognition",
      "REST API",
      "Camera SDK",
      "QR Scanner",
      "Firebase",
      "ML Kit"
    ],
    engineeringFocus:
      "On-device camera face detection, low-latency QR verification, and real-time host approval synchronization.",
    hardware: "Camera Feed, QR Optical Scanner",
    mainImage: visitorImg,
    playStoreLink: "https://play.google.com/store/apps/details?id=com.sll.admin.vms",
    isProtected: false
  },
  {
    id: "expense-management",
    number: "07",
    organization: "Seabird Logisolutions",
    organizationType: "previous",
    title: "Expense Management System",
    subtitle: "OCR-Powered Expense Tracking Platform",
    status: "PRODUCTION DEPLOYED",
    statusType: "previous",
    domain: "Internal Tools & Financial Mobility",
    tagline:
      "In-house expense tracking platform with intelligent OCR-powered bill reading using ML.",
    overview:
      "In-house expense tracking platform with intelligent OCR-powered bill reading using ML. Contributed to UI development, error reduction, and ML integration for automated expense capture from receipts and invoices.",
    capabilities: [
      "ML-powered OCR bill reading for automated receipt data extraction",
      "Multi-tier expense submission, receipt attachment, and manager approval queues",
      "Strict client-side form validation to eliminate expense reporting errors",
      "Cloud Functions integration for automated receipt processing"
    ],
    technologies: [
      "Java",
      "Kotlin",
      "ML Kit",
      "OCR",
      "REST API",
      "Firebase",
      "Cloud Functions",
      "SQLite"
    ],
    engineeringFocus:
      "OCR text extraction accuracy on physical receipts, native Android camera integration, and local SQLite caching.",
    hardware: "Native Android Camera, Local Document Storage",
    mainImage: emsImg,
    playStoreLink: "https://play.google.com/store/apps/details?id=com.ems.expense",
    isProtected: false
  },
  {
    id: "sll-ticketing",
    number: "08",
    organization: "Seabird Logisolutions",
    organizationType: "previous",
    title: "SLL Ticketing System",
    subtitle: "Enterprise IT Service Management Platform",
    status: "PRODUCTION DEPLOYED",
    statusType: "previous",
    domain: "Internal IT Infrastructure & Operations",
    tagline:
      "Internal IT ticket management platform used by IT-Infra teams across Pan India.",
    overview:
      "Internal IT ticket management platform used by IT-Infra teams across Pan India. Features dashboards, issue tracking, priority management, and workflow automation.",
    capabilities: [
      "Automated incident routing and multi-tier IT infrastructure ticketing",
      "Role-based dashboards for IT support engineers and infrastructure leads",
      "Ticket lifecycle tracking: submission, escalation, resolution, and SLA monitoring",
      "Real-time status updates and notifications via Firebase"
    ],
    technologies: [
      "Flutter",
      "Provider",
      "Firebase",
      "REST API",
      "Cloud Functions"
    ],
    engineeringFocus:
      "Ticket priority routing algorithms, Pan-India multi-site issue tracking, and real-time support dashboards.",
    hardware: "Cross-Platform Mobile Terminals",
    mainImage: ticketingImg,
    playStoreLink: "https://play.google.com/store/apps/details?id=com.seabird.ticketing",
    isProtected: false
  }
];

// Combined list of all 8 projects
export const allProjects = [...currentProjects, ...previousProjects];

// Default export for backwards compatibility
export const projects = currentProjects;

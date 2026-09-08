export const skillCategories = [
  {
    id: "mobile",
    title: "Mobile Engineering",
    badge: "Core Expertise",
    description: "Production-grade Android and cross-platform mobile systems built with robust patterns and native performance.",
    skills: [
      { name: "Flutter", level: "Advanced", desc: "Cross-platform mobile apps, custom renderers, responsive handheld UI" },
      { name: "Dart", level: "Advanced", desc: "Async streams, sound null safety, isolates, code generation" },
      { name: "Android SDK", level: "Advanced", desc: "Broadcast receivers, services, intents, hardware peripherals" },
      { name: "Kotlin", level: "Proficient", desc: "Coroutines, Jetpack components, modern Android development" },
      { name: "Java", level: "Proficient", desc: "Enterprise Android services, OEM SDK bindings, object-oriented design" }
    ]
  },
  {
    id: "architecture",
    title: "Architecture & State",
    badge: "Scalability",
    description: "Decoupled structures designed for testability, clean boundaries, and independent feature iteration.",
    skills: [
      { name: "Clean Architecture", level: "Core Standard", desc: "Strict separation of Presentation, Domain, and Data layers" },
      { name: "Feature-First Architecture", level: "Core Standard", desc: "Vertically sliced modules for enterprise team scalability" },
      { name: "MVVM & Repository Pattern", level: "Core Standard", desc: "Abstract contracts decoupling business logic from storage/API" },
      { name: "Riverpod 2.x", level: "Advanced", desc: "Reactive state, code generation (riverpod_annotation), autoDispose memory safety" },
      { name: "Provider", level: "Advanced", desc: "Scoped state management across complex enterprise dashboards" },
      { name: "GoRouter", level: "Proficient", desc: "Declarative URL routing, nested navigation, and reactive Auth Guards" }
    ]
  },
  {
    id: "backend",
    title: "Backend & Integration",
    badge: "Connectivity",
    description: "Structured networking, data transformation, secure sessions, and real-time cloud dispatch pipelines.",
    skills: [
      { name: "REST APIs", level: "Advanced", desc: "Transactional contracts, robust error handling, JSON serialization" },
      { name: "Dio & HTTP Client", level: "Advanced", desc: "Interceptors, request queuing, automated retries, token refresh" },
      { name: "JSON Serialization", level: "Advanced", desc: "Typed serialization, schema validation, compile-time code generation" },
      { name: "Firebase & FCM", level: "Proficient", desc: "Cloud Messaging, operational push notifications, remote triggers" },
      { name: "PHP REST APIs", level: "Proficient", desc: "Custom server communication, transactional manifests, data synchronization" },
      { name: "Secure Storage & Hive", level: "Proficient", desc: "Encrypted token persistence, keystore integration, high-speed offline box caching" }
    ]
  },
  {
    id: "industrial",
    title: "Industrial Mobility",
    badge: "Hardware-Connected",
    description: "Direct device integration connecting rugged warehouse and factory floor hardware to mobile software.",
    skills: [
      { name: "Newland Hardware SDK", level: "Specialist", desc: "barcode_newland_flutter, native scan decoders, trigger handling" },
      { name: "Zebra EMDK & DataWedge", level: "Specialist", desc: "Intent-based barcode acquisition, scanner profiles, hardware hooks" },
      { name: "CipherLab SDK", level: "Specialist", desc: "Industrial HHT device integration for logistics scan terminals" },
      { name: "Barcode & QR Scanning", level: "Specialist", desc: "Multi-mode capture: rugged hardware scanners + mobile camera fallbacks" },
      { name: "Bluetooth Thermal Printing", level: "Proficient", desc: "ESC/POS command generation, label formatting, dispatch slips" }
    ]
  },
  {
    id: "ai-ml",
    title: "Applied AI / ML",
    badge: "On-Device Intelligence",
    description: "Real-world computer vision, neural embeddings, and intelligent assistant workflows operating at the mobile edge.",
    skills: [
      { name: "Google ML Kit", level: "Specialist", desc: "Real-time face detection stream, barcode extraction, document analysis" },
      { name: "TensorFlow Lite", level: "Specialist", desc: "tflite_flutter, on-device model execution, tensor buffer manipulation" },
      { name: "MobileFaceNet", level: "Specialist", desc: "Lightweight deep neural network tailored for mobile face verification" },
      { name: "128D Face Embeddings", level: "Specialist", desc: "Feature vector generation, Euclidean/cosine distance verification" },
      { name: "On-Device Edge Inference", level: "Specialist", desc: "Zero-cloud latency, privacy-first biometric matching, offline verification" },
      { name: "Gemini / LLM Integration", level: "In Development", desc: "Contextual smart HR assistant, conversational query interfaces" }
    ]
  }
];


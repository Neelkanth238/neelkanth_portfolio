export const projects = [
  { 
    id: 1, 
    slug: "metro-rail-system",
    title: "MRS / Metro Rail System", 
    role: "Full Stack & Android Development", 
    year: "2024", 
    image: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?q=80&w=1200",
    desc: "A comprehensive Metro Rail System platform featuring both a web interface and an Android application for seamless commuting and ticket management.",
    tags: ["React Native", "React", "Node.js", "MongoDB"],
    overview: "MRS (Metro Rail System) provides end-to-end solutions for urban commuters. The ecosystem includes a responsive web portal and a native Android application, enabling users to check schedules, book tickets, and track trains in real-time.",
    challenge: "Synchronizing real-time train locations and ensuring high availability across both web and mobile platforms to provide accurate transit information.",
    solution: "Implemented WebSocket connections for real-time location streaming and utilized a centralized REST API backend for synchronized data delivery to both web and Android clients.",
    languages: ["JavaScript", "Java", "HTML", "CSS"],
    frameworks: ["React Native", "React", "Express", "Node.js"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/neelkanth",
    features: [
      "Real-time train tracking",
      "QR-code based digital ticketing",
      "Route planning and fare estimation",
      "Cross-platform account synchronization"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?q=80&w=1200",
      "https://images.unsplash.com/photo-1530639834082-05bafb67fbbe?q=80&w=1200",
      "https://images.unsplash.com/photo-1541819661448-4e89277d3f82?q=80&w=1200"
    ]
  },
  { 
    id: 2, 
    slug: "inventory-management-system",
    title: "IMS / Inventory Management", 
    role: "Full Stack Development", 
    year: "2023", 
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c663e0?q=80&w=1200",
    desc: "A robust inventory management system designed to streamline supply chain operations, track stock levels, and automate reordering processes.",
    tags: ["React", "Express.js", "PostgreSQL", "Tailwind CSS"],
    overview: "IMS is entirely focused on optimizing warehouse logistics. It provides administrators with a centralized dashboard to monitor stock inwards, outwards, and automated alerts for low inventory across multiple locations.",
    challenge: "Managing concurrent transactions from multiple warehouse operators updating the same inventory items simultaneously.",
    solution: "Utilized PostgreSQL with strict ACID compliance and optimized transaction isolation levels to prevent race conditions during concurrent inventory updates.",
    languages: ["TypeScript", "SQL", "JavaScript"],
    frameworks: ["React", "Express.js", "PostgreSQL"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/neelkanth",
    features: [
      "Multi-location warehouse tracking",
      "Automated low-stock alerts",
      "Barcode and QR code scanning integration",
      "Detailed analytical reporting"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8ed7c663e0?q=80&w=1200",
      "https://images.unsplash.com/photo-1553413002-f05f13111f43?q=80&w=1200",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200"
    ]
  },
  { 
    id: 3, 
    slug: "car-rental-system",
    title: "CRS / Car Rental System", 
    role: "Full Stack Development", 
    year: "2023", 
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200",
    desc: "A sleek, end-to-end car rental platform allowing users to browse, book, and manage vehicle rentals with dynamic pricing based on availability.",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    overview: "The Car Rental System modernizes the vehicle hiring process by providing an intuitive user interface to explore an extensive fleet, select dates, and complete secure payments seamlessly.",
    challenge: "Implementing a conflict-free booking system that accurately manages complex date ranges and prevents double-booking of specific vehicles.",
    solution: "Developed an advanced scheduling algorithm leveraging MongoDB's aggregation pipeline to query availability instantly against overlapping date ranges.",
    languages: ["JavaScript", "HTML", "CSS"],
    frameworks: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/neelkanth",
    features: [
      "Dynamic availability checking",
      "Secure payment gateway integration",
      "Advanced vehicle filtering",
      "Admin dashboard for fleet management"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200",
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1200",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200"
    ]
  },
  { 
    id: 4, 
    slug: "budget-bloom",
    title: "Budget Bloom / Money Management", 
    role: "Frontend Development", 
    year: "2024", 
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200",
    desc: "An intelligent personal finance and budget tracking application designed to help users visualize spending habits and achieve financial goals.",
    tags: ["React", "Chart.js", "Firebase", "Redux"],
    overview: "Budget Bloom empowers users to take control of their finances. By categorizing transactions and displaying them through aesthetic, interactive charts, the application simplifies complex financial data into actionable insights.",
    challenge: "Creating smooth, responsive visualizations for large datasets of financial transactions on mobile devices.",
    solution: "Integrated Chart.js and optimized rendering by adopting a virtualization technique for transaction lists, significantly improving application performance.",
    languages: ["JavaScript", "CSS", "HTML"],
    frameworks: ["React", "Redux", "Firebase", "Chart.js"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/neelkanth",
    features: [
      "Interactive financial dashboards",
      "Custom budget goal setting",
      "Expense categorization",
      "Real-time cloud synchronization"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1200"
    ]
  },
  { 
    id: 5, 
    slug: "plant-disease-detection",
    title: "Flora Guard / Disease Detection", 
    role: "Machine Learning & Full Stack", 
    year: "2024", 
    image: "https://images.unsplash.com/photo-1530836369250-ef71a3a5e4b1?q=80&w=1200",
    desc: "An AI-powered diagnostic tool that accurately identifies plant diseases from uploaded leaf images and provides targeted treatment recommendations.",
    tags: ["Python", "TensorFlow", "React", "Flask"],
    overview: "Aimed at assisting farmers and agriculturists, this application uses a deep learning model to analyze images of crop leaves, diagnosing potential diseases instantly and suggesting remediation steps.",
    challenge: "Deploying a large convolutional neural network (CNN) model efficiently enough to evaluate images and return results in seconds on the web.",
    solution: "Exported the TensorFlow model to an optimized format, serving it through a lightweight Flask API, enabling rapid inference with minimal overhead.",
    languages: ["Python", "JavaScript", "HTML"],
    frameworks: ["TensorFlow", "Flask", "React", "OpenCV"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/neelkanth",
    features: [
      "Image-based disease classification",
      "AI-driven confidence scoring",
      "Curated treatment database",
      "Mobile-responsive image upload"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1530836369250-ef71a3a5e4b1?q=80&w=1200",
      "https://images.unsplash.com/photo-1416879598553-33e2840acb45?q=80&w=1200",
      "https://images.unsplash.com/photo-1599598425947-33001c3e6df1?q=80&w=1200"
    ]
  }
];

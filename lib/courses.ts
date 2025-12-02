export interface Module {
    title: string;
    description: string;
    topics: string[];
}

export interface Instructor {
    name: string;
    role: string;
    company: string;
    bio: string;
    image: string;
    linkedin?: string;
    twitter?: string;
}

export interface Course {
    slug: string;
    title: string;
    subtitle: string;
    category: "Engineering" | "Product" | "Design" | "AI";
    price: number;
    startDate: string;
    duration: string;
    cohortSize: number;
    rating: number;
    reviewsCount: number;
    instructors: Instructor[];
    description: string;
    outcomes: string[];
    syllabus: Module[];
    videoUrl?: string; // Placeholder for intro video
}

export const courses: Course[] = [
    {
        slug: "backend-systems-architecture",
        title: "Backend Systems & Architecture for Real-World Scale",
        subtitle: "Learn how to design and build resilient, scalable backend systems used in modern fintech, mobility, and SaaS platforms.",
        category: "Engineering",
        price: 350000,
        startDate: "February 17, 2025",
        duration: "6 Weeks",
        cohortSize: 30,
        rating: 4.9,
        reviewsCount: 214,
        instructors: [{
            name: "Olumide Abegunde",
            role: "Software Engineer @Moniepoint",
            company: "Moniepoint",
            bio: "Olumide is a Software Engineer at Moniepoint, where he works on distributed systems that process payments across five African countries. He has over 8 years of experience designing fault-tolerant architectures.",
            image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&crop&w=200&h=200&q=80"
        }],
        description: "This course teaches you the fundamentals and advanced concepts behind building production-grade backend systems that can scale to millions of users. You'll learn distributed systems, microservices, caching, queues, observability, and high availability patterns.",
        outcomes: [
            "Design scalable service architectures",
            "Implement microservices and event-driven systems",
            "Build high-availability backends with caching & queues",
            "Monitor and optimize production systems",
            "Handle concurrency, load, and traffic spikes"
        ],
        syllabus: [
            {
                title: "Week 1: Foundations of Scalable Architecture",
                description: "Understanding core principles behind modern backend systems.",
                topics: ["Monolith vs microservices", "Horizontal scaling", "Load balancing"]
            },
            {
                title: "Week 2: Distributed Systems",
                description: "How to design and reason about distributed behavior.",
                topics: ["CAP theorem", "Consensus", "Service discovery"]
            },
            {
                title: "Week 3: Queues, Caching & Storage",
                description: "Building high-performance applications.",
                topics: ["Redis", "Kafka", "Database sharding", "Indexing"]
            },
            {
                title: "Week 4: Observability & Production Engineering",
                description: "Monitoring, tracing, and debugging real-world systems.",
                topics: ["Prometheus", "Grafana", "OpenTelemetry"]
            },
            {
                title: "Week 5: High Availability & Fault Tolerance",
                description: "Designing for resilience in production.",
                topics: ["Circuit breakers", "Retries", "Graceful degradation"]
            },
            {
                title: "Week 6: Capstone Project",
                description: "Build and deploy a scalable backend architecture.",
                topics: ["Final Architecture Design", "Review", "Certification"]
            }
        ]
    },
    {
        slug: "frontend-production-nextjs",
        title: "Build Production-Grade Frontend with Next.js",
        subtitle: "A practical engineering course on building real-world, performant, SEO-friendly frontends using Next.js, TypeScript, and modern tooling.",
        category: "Engineering",
        price: 300000,
        startDate: "February 14, 2025",
        duration: "5 Weeks",
        cohortSize: 30,
        rating: 4.8,
        reviewsCount: 162,
        instructors: [{
            name: "Ofobrukwetta Jeff",
            role: "Engineering Manager @Access Bank",
            company: "Access Bank",
            bio: "Jeff is a Senior Frontend Engineer at Access Bank, one of Africa's top bank. He specializes in performant web apps, DX, and scalable component architectures.",
            image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&crop&w=200&h=200&q=80"
        }],
        description: "Learn how to build fast, scalable, production-ready frontend applications using Next.js 14, App Router, React Server Components, and TailwindCSS. This course is project-intensive and focuses heavily on real-life engineering skills.",
        outcomes: [
            "Build SEO-optimized, production-grade Next.js apps",
            "Design scalable UI architectures with components",
            "Implement authentication, routing & caching",
            "Optimize performance using RSC and Server Actions",
            "Deploy effectively using Vercel & CI/CD pipelines"
        ],
        syllabus: [
            {
                title: "Week 1: Modern Next.js Architecture",
                description: "Deep dive into the App Router and RSC paradigm.",
                topics: ["App Router", "Layouts", "Server Components", "Streaming"]
            },
            {
                title: "Week 2: State Management & Data Fetching",
                description: "Building apps with robust state/data patterns.",
                topics: ["React Query", "Server Actions", "Caching"]
            },
            {
                title: "Week 3: UI Engineering",
                description: "Building elegant interfaces at scale.",
                topics: ["TailwindCSS", "Design systems", "Component patterns"]
            },
            {
                title: "Week 4: Authentication, Security & Deployment",
                description: "Ship real-world production-ready apps.",
                topics: ["Clerk", "Rate limiting", "Vercel Deployment"]
            },
            {
                title: "Week 5: Capstone Project",
                description: "Build a full production-grade SaaS frontend.",
                topics: ["Final Project", "Review", "Certification"]
            }
        ]
    },
    {
        slug: "product-design-modern-interfaces",
        title: "Product Design for Modern Interfaces",
        subtitle: "Learn how to design beautiful, functional digital products using Figma and world-class UI/UX principles.",
        category: "Design",
        price: 300000,
        startDate: "February 12, 2025",
        duration: "5 Weeks",
        cohortSize: 30,
        rating: 4.9,
        reviewsCount: 198,
        instructors: [{
            name: "Abdulrahman Basit",
            role: "Senior Product Designer",
            company: "Paystack",
            bio: "Basit is a Senior Product Designer at Paystack where he leads design for core merchant experiences. He has designed fintech products used by millions across Africa.",
            image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&crop&w=200&h=200&q=80"
        }],
        description: "This course teaches hands-on UI/UX design skills to build modern digital interfaces that are clean, functional, and visually world-class. You’ll work on real projects and create a case-study ready portfolio.",
        outcomes: [
            "Design clean and modern UI with Figma",
            "Build scalable design systems",
            "Conduct user flows and usability testing",
            "Create high-fidelity product interfaces",
            "Deliver polished portfolio-ready case studies"
        ],
        syllabus: [
            {
                title: "Week 1: UI/UX Foundations",
                description: "Core principles of great digital product design.",
                topics: ["Heuristics", "Information architecture", "User flows"]
            },
            {
                title: "Week 2: Visual Design & Systems",
                description: "Typography, color, spacing, and design systems.",
                topics: ["Design tokens", "Component libraries", "Grids & spacing"]
            },
            {
                title: "Week 3: Prototyping & Motion",
                description: "Building interactive prototypes and micro-interactions.",
                topics: ["Figma prototyping", "Smart animate", "Motion patterns"]
            },
            {
                title: "Week 4: User Testing & Iteration",
                description: "Testing ideas with real users and refining designs.",
                topics: ["Usability testing", "Heuristic evaluation", "Accessibility"]
            },
            {
                title: "Week 5: Capstone Case Study",
                description: "Design a full product interface for your portfolio.",
                topics: ["UI Kit", "High-fidelity screens", "Presentation deck"]
            }
        ]
    },
    {
        slug: "ai-product-management",
        title: "User Research with AI for Product Managers",
        subtitle: "Master how to use AI to conduct deep user research, analyze insights, and build products users actually need.",
        category: "Product",
        price: 350000,
        startDate: "February 10, 2025",
        duration: "4 Weeks",
        cohortSize: 30,
        rating: 4.7,
        reviewsCount: 128,
        instructors: [{
            name: "Ogunbore Florence",
            role: "Product Manager",
            company: "Piggyvest",
            bio: "Florence is a seasoned Product Manager at Piggyvest, where she leads user research initiatives. She has over 7 years of experience building consumer fintech products.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
        }],
        description: "This course is designed for PMs who want to leverage AI to supercharge their user research. You'll learn how to use LLMs to analyze feedback, generate personas, simulate interviews, and build research workflows.",
        outcomes: [
            "Automate user feedback analysis using LLMs",
            "Generate data-driven user personas in minutes",
            "Simulate user interviews to test hypotheses",
            "Integrate AI tools into your daily PM workflow"
        ],
        syllabus: [
            {
                title: "Week 1: AI Fundamentals for PMs",
                description: "How LLMs work and their use cases in product management.",
                topics: ["Intro to LLMs", "Prompt Engineering", "Ethics"]
            },
            {
                title: "Week 2: Automating User Research",
                description: "Using AI to process and analyze qualitative data.",
                topics: ["Sentiment Analysis", "Theme Extraction", "Survey Automation"]
            },
            {
                title: "Week 3: Synthetic Users & Personas",
                description: "Creating data-driven personas and simulations.",
                topics: ["Persona creation", "Interview simulations", "Bias detection"]
            },
            {
                title: "Week 4: Capstone Project",
                description: "Apply everything to a real-world PM challenge.",
                topics: ["Final Project", "Peer Review", "Certification"]
            }
        ]
    },
    {
        slug: "machine-learning-ai-engineering",
        title: "Machine Learning & AI Engineering",
        subtitle: "Learn to build, deploy, and scale end-to-end machine learning systems for real-world applications.",
        category: "Engineering",
        price: 400000,
        startDate: "February 20, 2025",
        duration: "6 Weeks",
        cohortSize: 30,
        rating: 4.8,
        reviewsCount: 187,
        instructors: [{
            name: "Victor Asemota",
            role: "Lead Machine Learning Engineer",
            company: "Interswitch",
            bio: "Victor leads ML engineering at Interswitch, building fraud detection models and large-scale inference systems. He has 8+ years of applied ML experience.",
            image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&crop&w=200&h=200&q=80"
        }],
        description: "A hands-on course that teaches you how to build ML systems end-to-end — from data engineering and model training to evaluation, deployment, and monitoring in production.",
        outcomes: [
            "Build ML models with Python & modern libraries",
            "Deploy ML APIs with FastAPI & Docker",
            "Implement real-time inference pipelines",
            "Optimize models for performance & cost",
            "Monitor ML systems in production"
        ],
        syllabus: [
            {
                title: "Week 1: ML Engineering Foundations",
                description: "Core principles, data pipelines, and experimentation.",
                topics: ["Data prep", "Feature engineering", "Experiment tracking"]
            },
            {
                title: "Week 2: Model Development",
                description: "Training, validation, and evaluation.",
                topics: ["Classification", "Regression", "Metrics", "Hyperparameters"]
            },
            {
                title: "Week 3: Deployment & Serving",
                description: "How to ship ML models to production.",
                topics: ["FastAPI", "Docker", "CI/CD", "GPU vs CPU"]
            },
            {
                title: "Week 4: Real-Time ML Systems",
                description: "Building scalable inference pipelines.",
                topics: ["Kafka", "Batch vs streaming", "Vector databases"]
            },
            {
                title: "Week 5: Monitoring & Maintenance",
                description: "Preventing model drift and ensuring reliability.",
                topics: ["Monitoring", "Alerts", "Retraining pipelines"]
            },
            {
                title: "Week 6: Capstone",
                description: "Build and deploy a full ML microservice.",
                topics: ["Final project", "Review", "Certification"]
            }
        ]
    }            
];

export function getCourseBySlug(slug: string): Course | undefined {
    return courses.find((course) => course.slug === slug);
}

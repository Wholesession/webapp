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
    videoUrl?: string;
}

export const courses: Course[] = [
    {
        slug: "building-production-microservices",
        title: "Building Production Microservices",
        subtitle: "Learn how to  design and build scalable microservices for production, using modern tools and best practices.",
        category: "Engineering",
        price: 250000,
        startDate: "March 23, 2026",
        duration: "6 Weeks",
        cohortSize: 30,
        rating: 4.9,
        reviewsCount: 214,
        instructors: [{
            name: "Akinkumi Okunola",
            role: "Senior Engineer, ALAT by Wema",
            company: "ALAT by Wema",
            bio: "Akinkumi is a Senior Engineer at ALAT by Wema, where he works on distributed systems that process payments across five African countries. He has over 8 years of experience designing fault-tolerant architectures.",
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
        slug: "backend-systems-and-architectures",
        title: "Software Engineering: Backend Systems & Architecture.",
        subtitle: "A practical engineering course on building production-grade backend systems using modern software architecture patterns and best practices.",
        category: "Engineering",
        price: 300000,
        startDate: "March 20, 2026",
        duration: "6 Weeks",
        cohortSize: 30,
        rating: 4.8,
        reviewsCount: 162,
        instructors: [{
            name: "Olumide Abegunde",
            role: "Senior Engineer, Moniepoint",
            company: "Moniepoint",
            bio: "Olumide Abegunde is a Senior Frontend Engineer at Moniepoint, one of Africa's top fintech company. He specializes in building production-grade backend systems using modern software architecture patterns and best practices.",
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
        slug: "vibe-coding-for-product-managers",
        title: "Vibe Coding for Product Managers",
        subtitle: "Learn how to quickly create prototypes with tools like Claude, Antigravity, and Figma.",
        category: "Product",
        price: 250000,
        startDate: "soon",
        duration: "Coming soon",
        cohortSize: 20,
        rating: 0,
        reviewsCount: 0,
        instructors: [{
            name: "Coming soon",
            role: "Coming soon",
            company: "Coming soon",
            bio: "Coming soon",
            image: "null"
        }],
        description: "Learn how to create apps and prototypes with AI tools like Claude, Antigravity, and Figma.",
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
        slug: "design-engineering",
        title: "Design Engineering ",
        subtitle: "Learn how to design and build products using Next.js and AI tools",
        category: "Design",
        price: 250000,
        startDate: "soon",
        duration: "6 Weeks",
        cohortSize: 20,
        rating: 0,
        reviewsCount: 0,
        instructors: [{
            name: "Coming soon",
            role: "Coming soon",
            company: "Coming soon",
            bio: "Coming soon",
            image: "null"
        }],
        description: "Learn how to create apps and prototypes with AI tools like Claude, Antigravity, and Figma.",
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
        slug: "ai-product-management",
        title: "AI Product Management",
        subtitle: "Master the art of AI product management. Learn how to build and ship AI-powered products responsibly.",
        category: "Product",
        price: 250000,
        startDate: "soon",
        duration: "6 Weeks",
        cohortSize: 20,
        rating: 0,
        reviewsCount: 0,
        instructors: [{
            name: "Coming soon",
            role: "Coming soon",
            company: "Coming soon",
            bio: "Coming soon",
            image: "null"
        }],
        description: "Learn how to create apps and prototypes with AI tools like Claude, Antigravity, and Figma.",
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
        slug: "zero-to-one-product-building",
        title: "Zero to One Product Building",
        subtitle: "Master the art of building and shipping products. Learn how to build and ship products users want.",
        category: "Product",
        price: 250000,
        startDate: "soon",
        duration: "6 Weeks",
        cohortSize: 20,
        rating: 0,
        reviewsCount: 0,
        instructors: [{
            name: "Coming soon",
            role: "Coming soon",
            company: "Coming soon",
            bio: "Coming soon",
            image: "null"
        }],
        description: "Learn how to create apps and prototypes with AI tools like Claude, Antigravity, and Figma.",
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
        slug: "react-native-in-production-architecture-performance-and-scale",
        title: "React Native in Production: Architecture, Performance & Scale",
        subtitle: "Build production-grade React Native apps with architecture, performance, and scale.",
        category: "Engineering",
        price: 300000,
        startDate: "soon",
        duration: "8 Weeks",
        cohortSize: 20,
        rating: 0,
        reviewsCount: 0,
        instructors: [{
            name: "Coming soon",
            role: "Coming soon",
            company: "Coming soon",
            bio: "Coming soon",
            image: "null"
        }],
        description: "Learn how to create apps and prototypes with AI tools like Claude, Antigravity, and Figma.",
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
];

export function getCourseBySlug(slug: string): Course | undefined {
    return courses.find((course) => course.slug === slug);
}

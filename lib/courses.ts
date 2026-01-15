import { contentfulClient } from "@/lib/contentful";

// --- Types ---
export interface Instructor {
    name: string;
    role: string;
    company: string;
    bio?: string;
    image: string; // URL string
    linkedin: string;
    twitter?: string;
    github?: string;
    experience?: string;
    prevCompanies?: string[];
    achievements?: string[];
}

export interface Module {
    title: string;
    description: string;
    topics: string[];
}

export interface ScheduleSession {
    date: string;
    time: string;
}

export interface Schedule {
    startDate: string;
    days: string[];
    time: string;
    sessions: ScheduleSession[];
}

export interface Course {
    slug: string;
    title: string;
    subtitle: string;
    tagline?: string;
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
    tools: string[];
    materials: string[];
    prerequisites: string[];
    targetAudience: string[];
    logistics: {
        homework: boolean;
        capstone: boolean;
        teachingStyle: string;
        frequency: string;
    };
    schedule: Schedule;
    included: string[];
    status: "Open" | "Coming Soon" | "Closed";
    faq: {
        question: string;
        answer: string;
    }[];
}

// --- STATIC BACKUP DATA (For initial Setup/Migration) ---
const staticCourses: Course[] = [
    {
        slug: "backend-engineering",
        status: "Open",
        title: "Backend Engineering",
        subtitle: "Build scalable systems that power the world's biggest companies.",
        tagline: "Go from writing code to architecting systems.",
        category: "Engineering",
        price: 350000,
        startDate: "Feb 24, 2026",
        duration: "12 Weeks",
        cohortSize: 30,
        rating: 4.9,
        reviewsCount: 120,
        instructors: [
            {
                name: "Akinkunmi",
                role: "Senior Backend Engineer",
                company: "Moniepoint",
                bio: "Akinkunmi has architected payment systems handling millions of transactions daily. He specializes in distributed systems and high-concurrency Java applications.",
                image: "/instructors/akinkunmi.jpg",
                linkedin: "https://linkedin.com/in/akinkunmi",
                experience: "8+ Years",
                prevCompanies: ["Interswitch", "TeamApt"],
                achievements: ["Built core banking ledger", "Scaled transaction processing to 500 TPS"]
            }
        ],
        description: `
**Backend engineering is more than just APIs.** It's about data consistency, system resilience, and scalability. In this course, we don't just teach you syntax; we teach you how to think like a Senior Engineer.

You will build a production-grade **Fintech Core Banking System**. You will handle concurrency, distributed locking, idempotent transactions, and event-driven architecture.

### What you will learn:
- **Advanced Database Design:** Indexing, partitioning, and query optimization.
- **Distributed Systems:** Microservices, event sourcing, and CAP theorem in practice.
- **System Design:** Designing for high availability and fault tolerance.
- **Infrastructure:** CI/CD pipelines, Docker, and Kubernetes basics.
        `,
        outcomes: [
            "Architect and build a complete microservices-based application",
            "Understand and implement distributed caching strategies",
            "Master database optimization and transaction management",
            "Gain confidence in system design interviews"
        ],
        syllabus: [
            {
                title: "Module 1: Advanced Database Engineering",
                description: "Deep dive into RDBMS internals, indexing strategies, and schema design for scale.",
                topics: ["ACID properties in depth", "B-Tree vs Hash Indexes", "Database Partitioning & Sharding"]
            },
            {
                title: "Module 2: Concurrency & Threading",
                description: "Handling multiple requests simultaneously without data corruption.",
                topics: ["Race Conditions", "Deadlocks", "Optimistic vs Pessimistic Locking"]
            },
            {
                title: "Module 3: Distributed Systems Patterns",
                description: "Building systems that span multiple servers.",
                topics: ["Service Discovery", "Load Balancing", "Circuit Breakers"]
            }
        ],
        tools: ["Java/Spring Boot", "PostgreSQL", "Redis", "Kafka", "Docker"],
        materials: ["System Design Cheatsheets", "Production Code Boilerplates"],
        prerequisites: ["Basic understanding of REST APIs", "Familiarity with any OOP language"],
        targetAudience: ["Junior/Mid-level developers looking to level up", "Frontend devs transitioning to fullstack"],
        logistics: {
            homework: true,
            capstone: true,
            teachingStyle: "Live Coding & Architecture Reviews",
            frequency: "2x Weekly (Weekends)"
        },
        schedule: {
            startDate: "Feb 24",
            days: ["Saturday", "Sunday"],
            time: "10:00 AM - 1:00 PM (WAT)",
            sessions: [
                { date: "Feb 24", time: "10:00 AM - 1:00 PM" },
                { date: "Feb 25", time: "10:00 AM - 1:00 PM" }
            ]
        },
        included: ["Certificate of Completion", "1-on-1 Career Mentorship", "Mock Interview Session"],
        faq: [
            {
                question: "Do I need Java experience?",
                answer: "Basic familiarity is helpful, but we cover the advanced concepts from scratch."
            },
            {
                question: "Is this suitable for beginners?",
                answer: "This is an intermediate-to-advanced course. You should have written some code before."
            }
        ]
    },
    {
        slug: "product-management",
        status: "Open",
        title: "Technical Product Management",
        subtitle: "Bridge the gap between business requirements and technical execution.",
        tagline: "Lead products that scale.",
        category: "Product",
        price: 300000,
        startDate: "March 10, 2026",
        duration: "10 Weeks",
        cohortSize: 25,
        rating: 4.8,
        reviewsCount: 85,
        instructors: [
            {
                name: "Chidinma",
                role: "Senior Product Manager",
                company: "Google",
                bio: "Chidinma has led product teams at global tech giants. She excels at data-driven decision making and user-centric design.",
                image: "/instructors/chidinma.jpg",
                linkedin: "https://linkedin.com/in/chidinma",
                experience: "7+ Years",
                prevCompanies: ["Microsoft", "Andela"],
                achievements: ["Launched Google Maps feature used by 10M+ users", "Increased retention by 15%"]
            }
        ],
        description: "Learn to define product vision, manage roadmaps, and communicate effectively with engineering teams.",
        outcomes: ["Create comprehensive PRDs", "Master agile methodologies", "Conduct effective user research"],
        syllabus: [
            {
                title: "Module 1: Product Strategy",
                description: "Defining the 'Why' and 'What'.",
                topics: ["Market Research", "Value Proposition Design", "OKRs"]
            }
        ],
        tools: ["Jira", "Figma", "Amplitude"],
        materials: ["PRD Templates", "User Interview Scripts"],
        prerequisites: ["None"],
        targetAudience: ["Aspiring PMs", "Engineers moving to PM role"],
        logistics: {
            homework: true,
            capstone: true,
            teachingStyle: "Case Studies & Workshops",
            frequency: "2x Weekly"
        },
        schedule: {
            startDate: "March 10",
            days: ["Saturday", "Sunday"],
            time: "2:00 PM - 5:00 PM (WAT)",
            sessions: []
        },
        included: ["PM Certification", "Portfolio Review"],
        faq: []
    },
    {
        slug: "ai-engineering",
        status: "Coming Soon",
        title: "AI Engineering & LLMs",
        subtitle: "Master the new stack. Build production-ready AI applications.",
        tagline: "The future is deterministic. Or is it?",
        category: "AI",
        price: 400000,
        startDate: "TBA",
        duration: "10 Weeks",
        cohortSize: 20,
        rating: 0,
        reviewsCount: 0,
        instructors: [],
        description: "Coming Soon...",
        outcomes: [],
        syllabus: [],
        tools: ["Python", "OpenAI API", "LangChain", "Vector DBs"],
        materials: [],
        prerequisites: [],
        targetAudience: [],
        logistics: { homework: false, capstone: false, teachingStyle: "", frequency: "" },
        schedule: { startDate: "TBA", days: [], time: "", sessions: [] },
        included: [],
        faq: []
    }
];

// --- HYBRID FETCHING LOGIC ---

// Check if Contentful is configured
const hasContentful = !!process.env.CONTENTFUL_SPACE_ID && !!process.env.CONTENTFUL_ACCESS_TOKEN;

// Helper to map Contentful entry to Course type
// You will need to implement this based on your exact Contentful model fields.
const mapContentfulEntryToCourse = (entry: any): Course => {
    // This is a placeholder mapping. You need to adjust fields to match your Contentful Content Type ID and field names.
    const fields = entry.fields;
    return {
        slug: fields.slug,
        title: fields.title,
        subtitle: fields.subtitle,
        tagline: fields.tagline,
        status: fields.status || "Open", // Default to Open if not set
        category: fields.category,
        price: fields.price,
        startDate: fields.startDate,
        duration: fields.duration,
        cohortSize: fields.cohortSize,
        rating: fields.rating,
        reviewsCount: fields.reviewsCount,
        instructors: fields.instructors ? fields.instructors.map((inst: any) => ({
            name: inst.fields.name,
            role: inst.fields.role,
            company: inst.fields.company,
            bio: inst.fields.bio,
            image: inst.fields.image?.fields?.file?.url ? 'https:' + inst.fields.image.fields.file.url : '',
            linkedin: inst.fields.linkedin,
            experience: inst.fields.experience,
        })) : [],
        description: fields.description,
        outcomes: fields.outcomes || [],
        syllabus: fields.syllabus ? fields.syllabus.map((mod: any) => ({
            title: mod.fields.title,
            description: mod.fields.description,
            topics: mod.fields.topics || []
        })) : [],
        tools: fields.tools || [],
        materials: fields.materials || [],
        prerequisites: fields.prerequisites || [],
        targetAudience: fields.targetAudience || [],
        logistics: fields.logistics || { homework: false, capstone: false, teachingStyle: '', frequency: '' },
        schedule: fields.schedule || { startDate: '', days: [], time: '', sessions: [] },
        included: fields.included || [],
        faq: fields.faq ? fields.faq.map((f: any) => ({ question: f.fields.question, answer: f.fields.answer })) : []
    };
}

export async function getAllCourses(): Promise<Course[]> {
    if (!hasContentful) {
        console.warn("Contentful credentials not found. Serving static courses.");
        return staticCourses;
    }

    try {
        const response = await contentfulClient.getEntries({
            content_type: 'course' // Ensure your Content Type ID in Contentful is 'course'
        });

        if (!response.items || response.items.length === 0) {
            console.warn("Contentful returned no courses. Serving static courses as backup.");
            return staticCourses;
        }

        return response.items.map(mapContentfulEntryToCourse);
    } catch (error) {
        console.error("Error fetching courses from Contentful:", error);
        return staticCourses;
    }
}

export async function getCourseBySlug(slug: string): Promise<Course | null> {
    if (!hasContentful) {
        return staticCourses.find((c) => c.slug === slug) || null;
    }

    try {
        const response = await contentfulClient.getEntries({
            content_type: 'course',
            'fields.slug': slug,
            limit: 1
        });

        if (!response.items || response.items.length === 0) {
            // Fallback check
            const staticCourse = staticCourses.find((c) => c.slug === slug);
            if (staticCourse) {
                console.warn(`Course ${slug} not found in Contentful. Serving static backup.`);
                return staticCourse;
            }
            return null;
        }

        return mapContentfulEntryToCourse(response.items[0]);
    } catch (error) {
        console.error(`Error fetching course ${slug} from Contentful:`, error);
        return staticCourses.find((c) => c.slug === slug) || null;
    }
}

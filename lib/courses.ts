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
    github?: string;
    experience?: string;
    prevCompanies?: string[]; // Top 3/4 previous companies
    achievements?: string[]; // Key achievements/credentials
}

export interface Schedule {
    startDate: string;
    days: string[];
    time: string; // e.g., "5:00 PM—6:00 PM (GMT+1)"
    sessions: {
        date: string;
        time: string;
    }[];
}

export interface Course {
    slug: string;
    title: string;
    subtitle: string;
    tagline?: string; // One sentence tagline
    category: "Engineering" | "Product" | "Design" | "AI";
    price: number;
    startDate: string;
    duration: string;
    cohortSize: number;
    rating: number;
    reviewsCount: number;
    instructors: Instructor[];
    description: string; // Course Overview
    outcomes: string[]; // What students will be able to DO
    syllabus: Module[];
    videoUrl?: string;
    included: string[];
    // New fields
    tools?: string[];
    materials?: string[];
    prerequisites?: string[];
    targetAudience?: string[];
    logistics?: {
        homework: boolean;
        capstone: boolean;
        teachingStyle: string;
        frequency?: string; // e.g. "Every 2-3 days" for slack
    };
    schedule?: Schedule;
    faq?: FAQItem[];
}

export interface FAQItem {
    question: string;
    answer: string;
}

export const courses: Course[] = [
    {
        slug: "building-production-microservices",
        title: "Building Production-Grade Microservices",
        subtitle: "Learn how to design, build, and run scalable microservices from a senior engineer who has done it in real production fintech systems.",
        tagline: "🚀Learn how to build backend systems & architecture for real-world scale",
        category: "Engineering",
        price: 250000,
        startDate: "Feb 24, 2026",
        duration: "8 Weeks",
        cohortSize: 30,
        rating: 4.9,
        reviewsCount: 214,
        instructors: [{
            name: "Akinkunmi Okunola",
            role: "Senior Software Engineer & Technical Lead",
            company: "ALAT by Wema",
            bio: `I am a Senior Software Engineer and Technical Lead with over a decade of experience building, scaling, and maintaining production-grade backend systems, primarily in the fintech and financial services space.
            
My career has focused on designing resilient microservices architectures that handle high transaction volumes, strict security requirements, and real-world operational complexity. I have worked across multiple organizations including banks and payment companies, where I led the migration of legacy monolithic systems to modern, cloud-native microservices.

My work spans system architecture, API design, message-driven systems, CI/CD automation, performance optimization, and incident response for mission-critical platforms. Beyond writing code, I enjoy mentoring engineers and helping them bridge the gap between theory and real-world engineering. I previously taught programming courses during my university years and have continued to guide engineers professionally through code reviews, architecture sessions, and hands-on project work. 

This course is driven by my belief that backend engineers should not just know frameworks, but understand how to design systems that survive scale, failure, and change in production.`,
            image: "/akinkumi.jpeg",
            experience: "10+ years experience",
            linkedin: "https://www.linkedin.com/in/akinkunmi-okunola/",
            github: "https://www.github.com/akinkunmio",
            prevCompanies: ["Interswitch", "Powersoft / Nextekk"],
            achievements: [
                "Led migration of large-scale fintech systems from monoliths to microservices serving millions of users",
                "Designed and implemented highly available payment and wallet systems with 99.9% uptime",
                "Built and optimized CI/CD pipelines and cloud-native architectures on AWS and Azure"
            ]
        }],
        description: `**Building Production-Grade Microservices** focuses on what it actually takes to build backend systems that work reliably in production.

Instead of toy examples, you will learn how real companies design microservices that scale, fail gracefully, and evolve over time. The course covers architecture, communication patterns, data consistency, security, observability, and deployment strategies used in high-traffic fintech and enterprise systems. You will understand not just **how** to build microservices, but **why** certain architectural decisions are made.

**What makes this course unique is its strong emphasis on:**

✔️Real-world trade-offs

✔️Operational challenges

✔️Production lessons learned from systems serving millions of users

By the end, you will have built a complete microservices-based system and gained the confidence to work on real backend platforms.

🔨**What you'll build**\n
You will develop your own **capstone project**, a microservices-based system that handles real-world scale and complexity. By the end, you will present it on the demo day to a panel of judges.

🧠**How it works**\n
Each week follows a 2 hour session:
- **Tuesdays: 6:00 PM - 8:00 PM**
- **Thursdays: 6:00 PM - 8:00 PM**
- **QnA Sessions**
`,
        outcomes: [
            "Design and build production-ready microservices using best practices",
            "Apply Domain-Driven Design (DDD) to real backend systems",
            "Implement reliable inter-service communication (REST & messaging)",
            "Build resilient systems using retries, circuit breakers, and observability",
            "Deploy, monitor, and operate microservices in real-world environments"
        ],
        tools: ["Docker", "Kubernetes", "AWS", "Azure", "Terraform", "Prometheus", "Grafana", "Redis", "Kafka"],
        materials: ["Code repositories", "Slides", "Practice exercises", "Architecture templates"],
        prerequisites: ["Basic programming knowledge (Java, C#, Node.js, or similar)", "Familiarity with REST APIs", "Basic understanding of databases (SQL or NoSQL)", "Comfortable using Git and command-line tools"],
        targetAudience: ["Bootcamp graduates", "Mid-level professionals (3-5 years experience)", "Senior professionals (5+ years experience)", "Junior professionals (1-2 years experience)"],
        logistics: {
            homework: true,
            capstone: true,
            teachingStyle: "Mix of lecture and hands-on practice breakdown",
            frequency: "Daily"
        },
        included: ["Live sessions from Akinkunmi", "Life-time access to the course materials", "Code along sessions", "Reading materials", "Community of peers", "Completion badge", "Eligible for refund through the second week"],
        syllabus: [
            {
                title: "Week 1:  Introduction to Production Microservices",
                description: "Understanding the principles behind production microservices.",
                topics: ["Monolith vs microservices", "Real-world architectural challenges"]
            },
            {
                title: "Week 2: Service Design & Domain-Driven Design",
                description: "Designing microservices that work well in production.",
                topics: ["Bounded contexts", "Aggregate & domain modelling"]
            },
            {
                title: "Week 3: API Design & Communication",
                description: "Learn how to design and reason about distributed behavior.",
                topics: ["REST best practices", "Sync vs async communication"]
            },
            {
                title: "Week 4: Data Management & Consistency",
                description: "Learn how to manage and maintain data consistency in distributed systems.",
                topics: ["Database-per-service", "Event-driven patterns"]
            },
            {
                title: "Week 5: Security & Authentication",
                description: "Learn how to secure microservices and implement authentication.",
                topics: ["JWT, OAuth concepts", "Securing service-to-service communication"]
            },
            {
                title: "Week 6: Resilience & Observability",
                description: "Learn how to make microservices resilient and observable.",
                topics: ["Circuit breakers", "Retries", "Logging, metrics, and tracing"]
            },
            {
                title: "Week 7: CI/CD & Deployment",
                description: "Learn how to deploy and operate microservices in production.",
                topics: ["Automated testing", "Deployment strategies"]
            },
            {
                title: "Week 8: Capstone Project & Review",
                description: "Learn how to deploy and operate microservices in production.",
                topics: ["Final project demo", "Architectural review and feedback"]
            }
        ],
        schedule: {
            startDate: "Jan 12",
            days: ["Mon, Jan 12", "Fri, Jan 16", "Fri, Jan 30"],
            time: "5:00 PM—6:00 PM (GMT+1)",
            sessions: [
                { date: "Tues, Feb 24", time: "6:00 PM—8:00 PM (GMT+1)" },
                { date: "Thurs, Feb 26", time: "6:00 PM—8:00 PM (GMT+1)" },
                { date: "Tues, Mar 3", time: "6:00 PM—8:00 PM (GMT+1)" },
                { date: "Thurs, Mar 5", time: "6:00 PM—8:00 PM (GMT+1)" },
                { date: "Tues, Mar 10", time: "6:00 PM—8:00 PM (GMT+1)" },
                { date: "Thurs, Mar 12", time: "6:00 PM—8:00 PM (GMT+1)" },
                { date: "Tues, Mar 17", time: "6:00 PM—8:00 PM (GMT+1)" },
                { date: "Thurs, Mar 19", time: "6:00 PM—8:00 PM (GMT+1)" },
                { date: "Tues, Mar 24", time: "6:00 PM—8:00 PM (GMT+1)" },
                { date: "Thurs, Mar 26", time: "6:00 PM—8:00 PM (GMT+1)" },
                { date: "Tues, Mar 31", time: "6:00 PM—8:00 PM (GMT+1)" },
                { date: "Thurs, Apr 2", time: "6:00 PM—8:00 PM (GMT+1)" },
                { date: "Tues, Apr 7", time: "6:00 PM—8:00 PM (GMT+1)" },
                { date: "Thurs, Apr 9", time: "6:00 PM—8:00 PM (GMT+1)" },
                { date: "Tues, Apr 14", time: "6:00 PM—8:00 PM (GMT+1)" },
                { date: "Thurs, Apr 16", time: "6:00 PM—8:00 PM (GMT+1)" },
            ]
        },
        faq: [
            {
                question: "Who is this course for?",
                answer: "This course is designed for backend engineers, full-stack developers, and technical leads who want to master microservices. It's ideal if you have some experience building monoliths and want to learn how to architect scalable, distributed systems for production environments."
            },
            {
                question: "What are the prerequisites for this bootcamp?",
                answer: "You should have a basic understanding of backend development and proficiency in at least one backend language (like Node.js, Go, Java, or C#). Familiarity with databases and basic command-line usage is also recommended."
            },
            {
                question: "How much time commitment is expected each week?",
                answer: "Expect to spend about 5-7 hours per week. This includes 4 hours of live sessions (2 hours on Tuesdays and Thursdays) plus 1-3 hours for projects and practice exercises."
            },
            {
                question: "Will sessions be recorded?",
                answer: "Yes, all live sessions are recorded and uploaded to the course portal within 24 hours. You will have lifetime access to these recordings."
            }
        ]
    },
];

export function getCourseBySlug(slug: string): Course | undefined {
    return courses.find((course) => course.slug === slug);
}

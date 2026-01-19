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
    originalPrice?: number;
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
    notForYou?: string[];
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



import { CAMPAIGN_DISCOUNT, CAMPAIGN_END_DATE } from "./constants";

// --- HYBRID FETCHING LOGIC ---

// Check if Contentful is configured
const hasContentful = !!process.env.CONTENTFUL_SPACE_ID && !!process.env.CONTENTFUL_ACCESS_TOKEN;

// Helper to map Contentful entry to Course type
const mapContentfulEntryToCourse = (entry: any): Course => {
    const fields = entry.fields;
    const price = fields.price || 0;

    // Core mapping
    const course: Course = {
        slug: fields.slug,
        title: fields.title,
        subtitle: fields.subtitle,
        tagline: fields.tagline,
        status: fields.status || "Open",
        category: fields.category,
        price: price,
        originalPrice: fields.originalPrice || Math.round(price / (1 - CAMPAIGN_DISCOUNT)),
        startDate: fields.startDate,
        duration: fields.duration,
        cohortSize: fields.cohortSize || 0,
        rating: fields.rating || 5,
        reviewsCount: fields.reviewsCount || 0,
        instructors: fields.instructors ? fields.instructors.map((inst: any) => ({
            name: inst.fields.name,
            role: inst.fields.role,
            company: inst.fields.company,
            bio: inst.fields.bio,
            image: inst.fields.image?.fields?.file?.url ? 'https:' + inst.fields.image.fields.file.url : '/placeholder-profile.png',
            linkedin: inst.fields.linkedin || '#',
            twitter: inst.fields.twitter,
            github: inst.fields.github,
            experience: inst.fields.experience || '',
        })) : [],
        description: fields.description || '',
        outcomes: fields.outcomes || [],
        syllabus: fields.syllabus ? fields.syllabus.map((mod: any) => ({
            title: mod.fields.title || '',
            description: mod.fields.description || '',
            topics: mod.fields.topics || []
        })) : [],
        tools: fields.tools || [],
        materials: fields.materials || [],
        prerequisites: fields.prerequisites || [],
        targetAudience: fields.targetAudience || [],
        notForYou: fields.notForYou || [],
        logistics: fields.logistics || { homework: false, capstone: false, teachingStyle: 'Live Sessions', frequency: 'Twice a week' },
        schedule: fields.schedule || { startDate: fields.startDate || '', days: [], time: '', sessions: [] },
        included: fields.included || [],
        faq: fields.faq ? fields.faq.map((f: any) => ({
            question: f.fields.question || '',
            answer: f.fields.answer || ''
        })) : []
    };

    return course;
}

export async function getAllCourses(): Promise<Course[]> {
    if (!hasContentful) {
        console.warn("Contentful credentials not found.");
        return [];
    }

    try {
        const response = await contentfulClient.getEntries({
            content_type: 'course'
        });

        if (!response.items) return [];
        return response.items.map(mapContentfulEntryToCourse);
    } catch (error) {
        console.error("Error fetching courses from Contentful:", error);
        return [];
    }
}

export async function getCourseBySlug(slug: string): Promise<Course | null> {
    if (!hasContentful) return null;

    try {
        const response = await contentfulClient.getEntries({
            content_type: 'course',
            'fields.slug': slug,
            limit: 1
        });

        if (!response.items || response.items.length === 0) return null;
        return mapContentfulEntryToCourse(response.items[0]);
    } catch (error) {
        console.error(`Error fetching course ${slug} from Contentful:`, error);
        return null;
    }
}

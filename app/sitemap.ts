import { MetadataRoute } from 'next'
import { getAllCourses } from "@/lib/courses";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.wholesession.com'
    const courses = await getAllCourses();

    const courseEntries: MetadataRoute.Sitemap = courses.map((course) => ({
        url: `${baseUrl}/course/${course.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...courseEntries,
    ]
}

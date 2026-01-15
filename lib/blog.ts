
import { createClient, Entry } from "contentful";

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export interface BlogPost {
    sys: { id: string };
    title: string;
    slug: string;
    coverImage: {
        url: string;
        title: string;
    };
    excerpt: string;
    content: any; // Contentful Rich Text
    author: {
        name: string;
        avatar?: string;
    };
    publishedDate: string;
    category: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
    try {
        const response = await client.getEntries({
            content_type: 'blogPost',
            order: ['-fields.publishedDate'], // Newest first
        });

        return response.items.map((item) => mapContentfulEntryToBlogPost(item));
    } catch (error) {
        console.warn("Could not fetch blog posts from Contentful:", error);
        return []; // Return empty array to not break the page if content type doesn't exist yet
    }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    const response = await client.getEntries({
        content_type: 'blogPost',
        'fields.slug': slug,
        limit: 1,
    });

    if (response.items.length > 0) {
        return mapContentfulEntryToBlogPost(response.items[0]);
    }

    return null;
}

function mapContentfulEntryToBlogPost(entry: Entry<any>): BlogPost {
    const fields = entry.fields as any;
    return {
        sys: { id: entry.sys.id },
        title: fields.title || "Untitled",
        slug: fields.slug || "untitled",
        coverImage: {
            url: fields.coverImage?.fields?.file?.url
                ? `https:${fields.coverImage.fields.file.url}`
                : '/placeholder-blog.jpg',
            title: fields.coverImage?.fields?.title || 'Cover Image'
        },
        excerpt: fields.excerpt || "",
        content: fields.content || {},
        author: {
            name: fields.author?.fields?.name || "Wholesession Team",
            avatar: fields.author?.fields?.avatar?.fields?.file?.url
                ? `https:${fields.author?.fields?.avatar?.fields?.file?.url}`
                : undefined
        },
        publishedDate: fields.publishedDate || new Date().toISOString(),
        category: fields.category || "General"
    };
}

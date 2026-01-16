
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return { title: "Article Not Found" };
    }

    const ogUrl = new URL(`${process.env.NEXT_PUBLIC_APP_URL || 'https://wholesession.com'}/api/og`);
    ogUrl.searchParams.set('title', post.title);
    ogUrl.searchParams.set('subtitle', post.excerpt);
    ogUrl.searchParams.set('category', 'Blog');

    return {
        title: `${post.title} | Wholesession Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            images: [
                {
                    url: ogUrl.toString(),
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
    };
}

// Custom Renderer for Rich Text
const renderOptions = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
            <p className="mb-6 text-gray-700 leading-relaxed text-lg">{children}</p>
        ),
        [BLOCKS.HEADING_2]: (node: any, children: any) => (
            <h2 className="text-3xl font-serif font-medium text-[#0a0c1b] mt-10 mb-4">{children}</h2>
        ),
        [BLOCKS.HEADING_3]: (node: any, children: any) => (
            <h3 className="text-2xl font-serif font-medium text-[#0a0c1b] mt-8 mb-3">{children}</h3>
        ),
        [BLOCKS.UL_LIST]: (node: any, children: any) => (
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">{children}</ul>
        ),
        [BLOCKS.OL_LIST]: (node: any, children: any) => (
            <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">{children}</ol>
        ),
        [BLOCKS.QUOTE]: (node: any, children: any) => (
            <blockquote className="border-l-4 border-[#372772] pl-4 italic text-xl text-gray-600 my-8 py-2 bg-gray-50 pr-4 rounded-r-lg">
                "{children}"
            </blockquote>
        ),
        [INLINES.HYPERLINK]: (node: any, children: any) => (
            <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-[#372772] underline decoration-purple-200 hover:decoration-[#372772] transition-all">
                {children}
            </a>
        ),
        [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
            const { title, file } = node.data.target.fields;
            const imageUrl = file.url.startsWith('//') ? `https:${file.url}` : file.url;
            return (
                <div className="my-10 relative aspect-video rounded-xl overflow-hidden shadow-sm">
                    <Image
                        src={imageUrl}
                        alt={title || "Blog Image"}
                        fill
                        className="object-cover"
                    />
                    {title && <p className="text-sm text-gray-400 text-center mt-2 italic">{title}</p>}
                </div>
            );
        },
    },
};

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white font-body selection:bg-purple-100">
            <Navbar theme="light" />

            {/* Progress Bar / Scroll Indicator could go here */}

            <article className="pt-32 pb-20 font-body">
                {/* Hero / Header */}
                <div className="container mx-auto px-4 max-w-4xl">
                    <Link href="/blog" className="inline-flex items-center text-sm text-gray-500 hover:text-[#372772] mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
                    </Link>

                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-6">
                        <span className="text-gray-600 px-3 py-1 rounded-full font-medium text-xs uppercase tracking-wide border border-gray-200">
                            {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" /> {new Date(post.publishedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black leading-tight mb-8">
                        {post.title}
                    </h1>

                    {/* Author Block */}
                    <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-8">
                        <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-100 relative">
                            {post.author.avatar ? (
                                <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                            ) : (
                                <div className="h-full w-full flex items-center justify-center bg-gray-100 text-gray-600">
                                    <User className="w-6 h-6" />
                                </div>
                            )}
                        </div>
                        <div>
                            <p className="font-medium text-gray-900">{post.author.name}</p>
                            <p className="text-xs text-gray-500">Author</p>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="container mx-auto px-4 max-w-5xl mb-16">
                    <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-sm">
                        <Image
                            src={post.coverImage.url}
                            alt={post.coverImage.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="prose prose-lg prose-purple max-w-none">
                        {documentToReactComponents(post.content, renderOptions)}
                    </div>

                    {/* Tags / Share / Bottom Meta */}
                    <div className="mt-16 pt-8 border-t border-gray-100">
                        <h3 className="text-lg font-medium text-black mb-4">Share this article</h3>
                        {/* Add share buttons here later */}
                        <div className="flex gap-2">
                            <Link href={`https://twitter.com/intent/tweet?text=${post.title}&url=https://wholesession.com/blog/${post.slug}`} target="_blank" className="px-4 py-2 bg-gray-500 rounded-lg text-sm font-medium hover:bg-gray-400 text-white transition-colors">
                                Share on X
                            </Link>
                            <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=https://wholesession.com/blog/${post.slug}`} target="_blank" className="px-4 py-2 bg-gray-500 rounded-lg text-sm font-medium hover:bg-gray-400 text-white transition-colors">
                                Share on LinkedIn
                            </Link>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}

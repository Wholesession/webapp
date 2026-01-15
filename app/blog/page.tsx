
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata = {
    title: "Blog | Wholesession",
    description: "Insights on technology, product management, and career growth.",
};

export default async function BlogPage() {
    const posts = await getAllPosts();
    const featuredPost = posts[0];
    const otherPosts = posts.slice(1);

    return (
        <main className="min-h-screen bg-white font-body selection:bg-purple-100">
            <Navbar theme="light" />

            {/* Header */}
            <div className="pt-32 pb-16 bg-gray-50 border-b border-gray-100 font-body">
                <div className="container mx-auto px-4 text-center">
                    <span className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-2 block">The Wholesession Blog</span>
                    <h1 className="text-4xl md:text-5xl font-medium text-[#0a0c1b] mb-6">
                        Insights for your career
                    </h1>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Deep dives into software engineering, product strategy, and the future of work.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 font-body">
                {posts.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-gray-500">No articles published yet. Check back soon.</p>
                    </div>
                ) : (
                    <>
                        {/* Featured Post */}
                        {featuredPost && (
                            <div className="mb-20">
                                <Link href={`/blog/${featuredPost.slug}`} className="group block">
                                    <div className="grid md:grid-cols-2 gap-8 items-center">
                                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                                            <Image
                                                src={featuredPost.coverImage.url}
                                                alt={featuredPost.coverImage.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                                                <span className="text-gray-700 font-semibold uppercase bg-gray-100 px-2 py-0.5 rounded">{featuredPost.category}</span>
                                                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {new Date(featuredPost.publishedDate).toLocaleDateString()}</span>
                                            </div>
                                            <h2 className="text-3xl md:text-4xl font-body font-medium text-black transition-colors leading-tight">
                                                {featuredPost.title}
                                            </h2>
                                            <p className="text-gray-600 mb-6 text-lg line-clamp-3">
                                                {featuredPost.excerpt}
                                            </p>
                                            <div className="flex items-center text-gray-700 font-semibold">
                                                Read Article <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )}

                        {/* Recent Posts Grid */}
                        {otherPosts.length > 0 && (
                            <div>
                                <h3 className="text-2xl font-body font-medium text-black mb-8 pb-4 border-b border-gray-100">Latest Articles</h3>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                                    {otherPosts.map(post => (
                                        <Link key={post.sys.id} href={`/blog/${post.slug}`} className="group block h-full flex flex-col">
                                            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl mb-4">
                                                <Image
                                                    src={post.coverImage.url}
                                                    alt={post.coverImage.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                            <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                                                <span className="text-gray-700 font-semibold uppercase bg-gray-100 px-2 py-0.5 rounded">{post.category}</span>
                                                <span>•</span>
                                                <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                                            </div>
                                            <h4 className="text-xl font-body font-medium text-black mb-3 group-hover:text-black/80 transition-colors">
                                                {post.title}
                                            </h4>
                                            <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
                                                {post.excerpt}
                                            </p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>

            <Footer />
        </main>
    );
}

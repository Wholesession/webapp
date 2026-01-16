
import { Skeleton } from "@/components/ui/skeleton";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function BlogPostLoading() {
    return (
        <main className="min-h-screen bg-white font-body selection:bg-purple-100">
            <Navbar theme="light" />

            <article className="pt-32 pb-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Skeleton className="h-5 w-32 mb-8" />

                    <div className="flex items-center gap-3 mb-6">
                        <Skeleton className="h-6 w-24 rounded-full" />
                        <Skeleton className="h-6 w-32" />
                    </div>

                    <Skeleton className="h-12 w-full mb-4" />
                    <Skeleton className="h-12 w-3/4 mb-8" />

                    <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-8">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-32" />
                            <Skeleton className="h-3 w-16" />
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 max-w-5xl mb-16">
                    <Skeleton className="aspect-[21/9] w-full rounded-2xl" />
                </div>

                <div className="container mx-auto px-4 max-w-3xl space-y-6">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-4/6" />
                </div>
            </article>

            <Footer />
        </main>
    );
}


import { Skeleton } from "@/components/ui/skeleton";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function BlogLoading() {
    return (
        <main className="min-h-screen bg-white font-body selection:bg-purple-100">
            <Navbar theme="light" />

            <div className="pt-32 pb-16 bg-gray-50 border-b border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <Skeleton className="h-4 w-40 mx-auto mb-4" />
                    <Skeleton className="h-12 w-96 mx-auto mb-6" />
                    <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                {/* Featured Post Skeleton */}
                <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
                    <Skeleton className="aspect-[4/3] w-full rounded-2xl" />
                    <div>
                        <div className="flex gap-3 mb-4">
                            <Skeleton className="h-5 w-20" />
                            <Skeleton className="h-5 w-32" />
                        </div>
                        <Skeleton className="h-10 w-full mb-4" />
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-full mb-6" />
                        <Skeleton className="h-6 w-32" />
                    </div>
                </div>

                {/* Grid Skeleton */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i}>
                            <Skeleton className="aspect-[3/2] w-full rounded-xl mb-4" />
                            <div className="flex gap-3 mb-2">
                                <Skeleton className="h-4 w-16" />
                                <Skeleton className="h-4 w-28" />
                            </div>
                            <Skeleton className="h-7 w-full mb-3" />
                            <Skeleton className="h-4 w-full mb-1" />
                            <Skeleton className="h-4 w-full" />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}

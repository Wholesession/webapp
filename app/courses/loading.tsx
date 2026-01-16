
import { Skeleton } from "@/components/ui/skeleton";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function CoursesLoading() {
    return (
        <main className="min-h-screen bg-white font-body selection:bg-purple-100">
            <Navbar theme="light" />

            <div className="pt-32 pb-16 bg-gray-50 border-b border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <Skeleton className="h-4 w-32 mx-auto mb-4" />
                    <Skeleton className="h-12 w-96 mx-auto mb-6" />
                    <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                {/* Category Filters Skeleton */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <Skeleton key={i} className="h-10 w-32 rounded-full" />
                    ))}
                </div>

                {/* Course Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden bg-white">
                            <Skeleton className="aspect-[16/9] w-full" />
                            <div className="p-6">
                                <Skeleton className="h-4 w-24 mb-3" />
                                <Skeleton className="h-7 w-full mb-3" />
                                <Skeleton className="h-4 w-full mb-6" />
                                <div className="flex justify-between items-center">
                                    <Skeleton className="h-6 w-24" />
                                    <Skeleton className="h-10 w-32 rounded-lg" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}

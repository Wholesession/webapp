
import { Skeleton } from "@/components/ui/skeleton";
import { Footer } from "@/components/footer";

export default function CourseLoading() {
    return (
        <main className="min-h-screen bg-white">
            {/* Header Skeleton */}
            <div className="h-20 border-b border-gray-100 flex items-center">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Skeleton className="h-8 w-40" />
                    <div className="flex gap-6">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-4 w-20" />
                    </div>
                </div>
            </div>

            {/* Hero Skeleton */}
            <div className="bg-[#0a0c1b] py-24">
                <div className="container mx-auto px-4 lg:px-8">
                    <Skeleton className="h-6 w-32 mb-6 opacity-20" />
                    <Skeleton className="h-16 w-3/4 mb-6 opacity-20" />
                    <Skeleton className="h-8 w-1/2 mb-10 opacity-20" />
                    <div className="flex gap-8">
                        <Skeleton className="h-12 w-48 opacity-20" />
                        <Skeleton className="h-12 w-48 opacity-20" />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Main Content Column */}
                    <div className="lg:col-span-8 space-y-16">
                        <section>
                            <Skeleton className="h-10 w-full mb-6" />
                            <div className="space-y-4">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-3/4" />
                            </div>
                        </section>

                        <div className="rounded-2xl p-8 border border-gray-100">
                            <Skeleton className="h-8 w-1/2 mb-8" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="flex gap-3">
                                        <Skeleton className="h-5 w-5 rounded-full flex-shrink-0" />
                                        <Skeleton className="h-5 w-full" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-12">
                            <Skeleton className="h-64 w-full rounded-2xl" />
                            <Skeleton className="h-64 w-full rounded-2xl" />
                        </div>
                    </div>

                    {/* Sidebar / Pricing Card Skeleton */}
                    <div className="lg:col-span-4">
                        <div className="border border-gray-100 rounded-3xl p-8 space-y-6">
                            <Skeleton className="h-8 w-32" />
                            <Skeleton className="h-12 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <HrSkeleton />
                            <div className="space-y-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <Skeleton key={i} className="h-5 w-full" />
                                ))}
                            </div>
                            <Skeleton className="h-12 w-full rounded-xl" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

function HrSkeleton() {
    return <div className="h-px bg-gray-100 w-full my-6" />
}

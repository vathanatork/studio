
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import HomePageContent from '@/components/HomePageContent';

const LoadingFallback = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
       <header className="p-6 text-center">
        <Skeleton className="h-12 w-48 mx-auto" />
        <Skeleton className="h-6 w-64 mx-auto mt-2" />
        <div className="mt-4">
            <Skeleton className="h-10 w-36 mx-auto" />
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <aside className="lg:col-span-1 flex flex-col items-start justify-center gap-4">
            <Skeleton className="h-48 w-full max-w-md mx-auto" />
            <Skeleton className="h-80 w-full max-w-md mx-auto" />
          </aside>
          <section className="lg:col-span-2">
             <div className="space-y-4">
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
              </div>
          </section>
        </div>
      </main>
    </div>
  );
}


export default function Home() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <HomePageContent />
    </Suspense>
  );
}

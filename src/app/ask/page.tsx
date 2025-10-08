import { Suspense } from 'react';
import AskPageContent from './AskPageContent';
import { Skeleton } from '@/components/ui/skeleton';

const LoadingFallback = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4 sm:p-6">
            <div className="w-full max-w-lg space-y-8">
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-40 w-full" />
                <Skeleton className="h-12 w-full" />
            </div>
        </div>
    )
}

const AskPage = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <AskPageContent />
    </Suspense>
  );
};

export default AskPage;

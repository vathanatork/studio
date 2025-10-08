'use client';
import QuestionForm from '@/components/QuestionForm';
import { PenSquare } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

const AskPage = () => {
  const searchParams = useSearchParams();
  const eventId = searchParams.get('event');

  if (!eventId) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background p-4 sm:p-6">
        <Alert variant="destructive" className="max-w-lg">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Missing Event ID</AlertTitle>
          <AlertDescription>
            This page requires an event ID to submit a question. Please use a valid link.
          </AlertDescription>
        </Alert>
      </div>
    );
  }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4 sm:p-6">
      <div className="w-full max-w-lg">
        <header className="text-center mb-8">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <PenSquare className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">Ask a Question</h1>
            <p className="text-muted-foreground mt-2">Your question will appear on the main screen in real-time.</p>
        </header>
        <main>
            <QuestionForm eventId={eventId} />
        </main>
      </div>
    </div>
  );
}

export default AskPage;

import QuestionForm from '@/components/QuestionForm';
import { PenSquare } from 'lucide-react';

const AskPage = () => {
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
            <QuestionForm />
        </main>
      </div>
    </div>
  );
}

export default AskPage;

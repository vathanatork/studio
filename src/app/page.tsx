import FooterAnimation from '@/components/FooterAnimation';
import QuestionList from '@/components/QuestionList';
import QRCodeDisplay from '@/components/QRCodeDisplay';
import { Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <header className="p-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary tracking-tight flex items-center justify-center gap-3">
          <Sparkles className="w-8 h-8" />
          CrowdQuestion
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">The floor is yours. Ask away!</p>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <aside className="lg:col-span-1 flex items-start justify-center">
            <QRCodeDisplay />
          </aside>
          <section className="lg:col-span-2 max-h-[60vh] overflow-hidden">
             <QuestionList />
          </section>
        </div>
      </main>

      <FooterAnimation />
    </div>
  );
}

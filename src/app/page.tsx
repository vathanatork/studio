'use client';

import { useState } from 'react';
import FooterAnimation from '@/components/FooterAnimation';
import QuestionList from '@/components/QuestionList';
import QRCodeDisplay from '@/components/QRCodeDisplay';
import { Button } from '@/components/ui/button';
import { Sparkles, QrCode } from 'lucide-react';

export default function Home() {
  const [showQR, setShowQR] = useState(true);

  return (
    <div className="relative flex flex-col min-h-screen">
      <header className="p-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary tracking-tight flex items-center justify-center gap-3">
          <Sparkles className="w-8 h-8" />
          chickChat
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">The floor is yours. Ask away!</p>
        <div className="mt-4">
            <Button onClick={() => setShowQR(!showQR)}>
                <QrCode className="mr-2 h-4 w-4" />
                {showQR ? 'Hide QR Code' : 'Show QR Code'}
            </Button>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <aside className="lg:col-span-1 flex items-start justify-center">
            {showQR && <QRCodeDisplay />}
          </aside>
          <section className={showQR ? "lg:col-span-2 max-h-[60vh] overflow-hidden" : "lg:col-span-3 max-h-[60vh] overflow-hidden"}>
             <QuestionList />
          </section>
        </div>
      </main>

      <FooterAnimation />
    </div>
  );
}

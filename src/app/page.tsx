'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import FooterAnimation from '@/components/FooterAnimation';
import QuestionList from '@/components/QuestionList';
import QRCodeDisplay from '@/components/QRCodeDisplay';
import { Button } from '@/components/ui/button';
import { Sparkles, QrCode, PlusCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

function EventManager({ eventId, onNewEvent }: { eventId: string, onNewEvent: (id: string) => void }) {
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const eventUrl = eventId ? `${origin}/?event=${eventId}` : '';

  const generateNewEvent = () => {
    const newEventId = `evt_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
    onNewEvent(newEventId);
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(eventUrl);
    // Maybe show a toast notification here
  }

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Event Control
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-4">
         <Button onClick={generateNewEvent} className="w-full">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Event
        </Button>
        {eventId && (
          <div className="w-full space-y-2 text-center">
              <p className="text-sm text-muted-foreground">Share this URL for the current event:</p>
              <div className="flex gap-2">
                <Input readOnly value={eventUrl} className="text-sm"/>
                <Button onClick={copyToClipboard} variant="outline" size="sm">Copy</Button>
              </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}


export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showQR, setShowQR] = useState(true);
  const [eventId, setEventId] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const eventIdFromUrl = searchParams.get('event');
    if (eventIdFromUrl) {
      setEventId(eventIdFromUrl);
    }
  }, [searchParams]);

  const handleNewEvent = (newEventId: string) => {
    router.push(`/?event=${newEventId}`);
  };
  
  if (!isClient) {
    return null; // or a loading spinner
  }

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
          <aside className="lg:col-span-1 flex flex-col items-start justify-center gap-4">
            <EventManager eventId={eventId || ''} onNewEvent={handleNewEvent} />
            {showQR && eventId && <QRCodeDisplay eventId={eventId} />}
          </aside>
          <section className={showQR && eventId ? "lg:col-span-2 max-h-[60vh] overflow-hidden" : "lg:col-span-3 max-h-[60vh] overflow-hidden"}>
             <QuestionList eventId={eventId} />
          </section>
        </div>
      </main>

      <FooterAnimation />
    </div>
  );
}

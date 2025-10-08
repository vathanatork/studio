'use client';

import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import Image from 'next/image';
import { QrCode, Smartphone } from 'lucide-react';

import { useOrigin } from '@/lib/hooks/use-origin';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from './ui/skeleton';

const QRCodeDisplay = ({ eventId }: { eventId: string }) => {
  const origin = useOrigin();
  const askUrl = origin && eventId ? `${origin}/ask?event=${eventId}` : '';
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  useEffect(() => {
    if (askUrl) {
      QRCode.toDataURL(askUrl, {
        width: 256,
        margin: 2,
        color: {
          dark: '#004d4d', // Darker teal for better scanability
          light: '#00000000', // transparent
        },
      })
        .then(setQrCodeUrl)
        .catch(console.error);
    }
  }, [askUrl]);

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <QrCode className="text-primary" />
          Join the Conversation!
        </CardTitle>
        <CardDescription>Scan the QR code with your phone to ask a question.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-4">
        <div className="p-2 bg-white rounded-lg shadow-inner">
            {qrCodeUrl ? (
                <Image src={qrCodeUrl} alt="QR Code for question submission" width={240} height={240} className="rounded-md" />
            ) : (
                <Skeleton className="h-[240px] w-[240px]" />
            )}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground break-all text-center">
            <Smartphone size={16} />
            <span className="truncate">Or go to: <span className="font-semibold text-primary">{askUrl}</span></span>
        </div>
      </CardContent>
    </Card>
  );
};

export default QRCodeDisplay;

'use server';

import { z } from 'zod';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { revalidatePath } from 'next/cache';

const questionSchema = z.object({
  question: z.string().min(10, "Question must be at least 10 characters long.").max(500, "Question must be at most 500 characters long."),
  eventId: z.string().optional(),
});

export type FormState = {
  message: string;
  success: boolean;
};

export async function submitQuestion(prevState: FormState, formData: FormData): Promise<FormState> {
  if (!db) {
    return {
      message: 'Database not configured. Please contact the administrator.',
      success: false
    }
  }

  const validatedFields = questionSchema.safeParse({
    question: formData.get('question'),
    eventId: formData.get('eventId'),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors.question?.join(', ') || 'Invalid input.',
      success: false,
    };
  }

  try {
    await addDoc(collection(db, 'questions'), {
      text: validatedFields.data.question,
      eventId: validatedFields.data.eventId || null,
      createdAt: serverTimestamp(),
    });
    
    revalidatePath('/');

    return {
      message: 'Your question has been submitted successfully!',
      success: true,
    };
  } catch (error) {
    console.error('Error adding document: ', error);
    return {
      message: 'Something went wrong while submitting. Please try again.',
      success: false,
    };
  }
}

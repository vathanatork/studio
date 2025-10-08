'use client';

import { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot, Timestamp, where, Query } from 'firebase/firestore';
import { useFirebase } from '@/firebase/provider';
import QuestionCard from './QuestionCard';
import { Skeleton } from '@/components/ui/skeleton';

export interface Question {
  id: string;
  text: string;
  eventId: string;
  createdAt: Timestamp;
}

const QuestionList = ({ eventId }: { eventId: string | null }) => {
  const { db } = useFirebase();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!db) {
        console.warn("Firebase is not configured. Real-time updates are disabled.");
        setIsLoading(false);
        return;
    }
    
    if (!eventId) {
        setQuestions([]);
        setIsLoading(false);
        return;
    }

    const q = query(
        collection(db, 'questions'), 
        where('eventId', '==', eventId)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const questionsData: Question[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      } as Question));
      
      // Sort questions by creation date, newest first
      questionsData.sort((a, b) => {
        const dateA = a.createdAt?.toDate()?.getTime() || 0;
        const dateB = b.createdAt?.toDate()?.getTime() || 0;
        return dateB - dateA;
      });

      setQuestions(questionsData);
      setIsLoading(false);
    }, (error) => {
      console.error("Error fetching questions: ", error);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [db, eventId]);

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
      </div>
    );
  }
  
  if (!eventId) {
      return (
        <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground p-8 rounded-lg border-2 border-dashed bg-card/50">
          <p className="text-lg font-medium">No event selected.</p>
          <p>Click "New Event" to get started.</p>
        </div>
      );
  }

  return (
    <div className="h-full flex flex-col">
      {questions.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground p-8 rounded-lg border-2 border-dashed bg-card/50">
          <p className="text-lg font-medium">No questions yet for this event.</p>
          <p>Be the first one to ask!</p>
        </div>
      ) : (
        <div className="space-y-4 overflow-y-auto p-1 flex-grow">
          {questions.map((question) => <QuestionCard key={question.id} question={question.text} />)}
        </div>
      )}
    </div>
  );
};

export default QuestionList;

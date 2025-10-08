'use client';

import { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot, Timestamp } from 'firebase/firestore';
import { useFirebase } from '@/firebase/provider';
import QuestionCard from './QuestionCard';
import { Skeleton } from '@/components/ui/skeleton';

export interface Question {
  id: string;
  text: string;
  createdAt: Timestamp;
}

const QuestionList = () => {
  const { db } = useFirebase();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!db) {
        console.warn("Firebase is not configured. Real-time updates are disabled.");
        setIsLoading(false);
        return;
    }

    const q = query(collection(db, 'questions'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const questionsData: Question[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      } as Question));
      setQuestions(questionsData);
      setIsLoading(false);
    }, (error) => {
      console.error("Error fetching questions: ", error);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [db]);

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      {questions.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground p-8 rounded-lg border-2 border-dashed bg-card/50">
          <p className="text-lg font-medium">No questions yet.</p>
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

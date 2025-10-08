'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { submitQuestion } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full text-lg py-6">
      {pending && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
      Submit Question
    </Button>
  );
};

const QuestionForm = () => {
  const [state, formAction] = useFormState(submitQuestion, { message: '', success: false });
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success",
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        toast({
          title: "Error",
          description: state.message,
          variant: 'destructive',
        });
      }
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      <div>
        <Textarea
          name="question"
          id="question"
          placeholder="Type your insightful question here..."
          className="min-h-36 w-full rounded-lg border-2 p-4 text-base focus:border-primary focus:ring-primary"
          required
          minLength={10}
          maxLength={500}
        />
      </div>
      <SubmitButton />
    </form>
  );
};

export default QuestionForm;

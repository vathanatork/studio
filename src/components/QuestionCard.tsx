import { MessageSquareText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface QuestionCardProps {
  question: string;
}

const QuestionCard = ({ question }: QuestionCardProps) => {
  return (
    <Card className="w-full animate-in fade-in-0 slide-in-from-top-4 duration-500 ease-out">
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 pt-1">
            <MessageSquareText className="w-6 h-6 text-primary" />
          </div>
          <p className="text-lg font-medium text-card-foreground">
            {question}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;

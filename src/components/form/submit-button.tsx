import { LucideLoaderCircle } from 'lucide-react';
import { useFormStatus } from 'react-dom';
import { Button } from '../ui/button';

type SubmitButtonProps = {
  label: string;
};
export const SubmitButton = ({ label }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button>
      {pending && <LucideLoaderCircle className='h-4 w-4 animate-spin' />}
      {label}
    </Button>
  );
};

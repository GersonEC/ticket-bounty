import Link from 'next/link';
import { Heading } from '@/components/Heading';
import { ticketsPath } from '@/lib/path';

const HomePage = () => {
  return (
    <div className='border flex flex-1 flex-col gap-y-8'>
      <Heading title='Home' description='Your home place to start' />
      <div className='flex-1 flex flex-col items-center'>
        <Link href={ticketsPath()}>Go to Tickets</Link>
      </div>
    </div>
  );
};

export default HomePage;

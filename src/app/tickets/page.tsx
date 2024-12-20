import { Heading } from '@/components/Heading';
import { TicketItem } from '@/features/ticket/components/TicketItem';
import { getTickets } from '@/features/ticket/queries/getTickets';

const TicketsPage = async () => {
  const tickets = await getTickets();
  return (
    <div className='flex-1 flex flex-col gap-y-8'>
      <Heading title='Tickets' description='All your tickets at one place' />

      <div className='flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top'>
        {tickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;

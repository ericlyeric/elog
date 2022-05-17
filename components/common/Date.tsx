import { format, formatISO } from 'date-fns';

interface DateProps {
  date: Date;
}

export const Date = ({ date }: DateProps) => {
  return (
    <time dateTime={formatISO(date)}>
      <span>{format(date, 'LLLL d, yyyy')}</span>
    </time>
  );
};

import { format, formatISO } from 'date-fns';

interface DateProps {
  date: Date;
}

const Date = ({ date }: DateProps) => {
  return (
    <time dateTime={formatISO(date)}>
      <span>{format(date, 'LLLL d, yyyy')}</span>
    </time>
  );
};

export default Date;

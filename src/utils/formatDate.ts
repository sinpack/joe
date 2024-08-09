// src/utils/formatDate.ts
import { format } from 'date-fns';
import { parseISO } from 'date-fns';

export function formatDate(dateString: string): string {
  const parsedDate = parseISO(dateString);
  const formattedDate = format(parsedDate, 'MMMM d, yyyy');
  return formattedDate;
}

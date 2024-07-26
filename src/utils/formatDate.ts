// src/utils/formatDate.ts
import { format } from 'date-fns';
import { el } from 'date-fns/locale'; // Import Greek locale
import { parseISO } from 'date-fns';

export function formatDate(dateString: string): string {
  // const date = new Date(dateString);
  // console.log(dateString);
  // debugger;
  const parsedDate = parseISO(dateString);
  const formattedDate = format(parsedDate, 'MMMM d, yyyy');
  // console.log(dateString);
  // Replace AM/PM with Greek ΠΜ/ΜΜ
  return formattedDate;
}

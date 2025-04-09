// src/utils/formatDate.ts
import { format } from "date-fns";
import { parseISO } from "date-fns";
import { el } from "date-fns/locale";

export function formatDate(dateString: string): string {
  const parsedDate = parseISO(dateString);
  const formattedDate = format(parsedDate, "dd / MM / yyyy", { locale: el });
  return formattedDate;
}

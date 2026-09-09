import { format, formatDistanceToNowStrict, isValid, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

function toDate(value: string | Date | null | undefined): Date | null {
  if (!value) return null;
  const date = typeof value === 'string' ? parseISO(value) : value;
  return isValid(date) ? date : null;
}

/** "12 mars 2025" */
export function formatDate(value: string | Date | null | undefined): string {
  const date = toDate(value);
  return date ? format(date, 'd MMM yyyy', { locale: fr }) : '—';
}

/** "12 mars 2025, 14:30" */
export function formatDateTime(value: string | Date | null | undefined): string {
  const date = toDate(value);
  return date ? format(date, 'd MMM yyyy, HH:mm', { locale: fr }) : '—';
}

/** "12/03/2025" */
export function formatDateShort(value: string | Date | null | undefined): string {
  const date = toDate(value);
  return date ? format(date, 'dd/MM/yyyy', { locale: fr }) : '—';
}

/** "12/03" — compact axis label. */
export function formatDayMonth(value: string | Date | null | undefined): string {
  const date = toDate(value);
  return date ? format(date, 'dd/MM', { locale: fr }) : '—';
}

/** "il y a 3 jours" / "dans 2 jours" */
export function formatRelative(value: string | Date | null | undefined): string {
  const date = toDate(value);
  if (!date) return '—';
  return formatDistanceToNowStrict(date, { addSuffix: true, locale: fr });
}

/** Cents → "12,50 €" */
export function formatMoney(cents: number | null | undefined): string {
  const value = (cents ?? 0) / 100;
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(value);
}

/** Number of whole days between two dates (inclusive of partial days → ceil). */
export function daysBetween(start: string | Date, end: string | Date): number {
  const a = toDate(start);
  const b = toDate(end);
  if (!a || !b) return 0;
  return Math.max(1, Math.ceil((b.getTime() - a.getTime()) / 86_400_000));
}

/** Initials for an avatar, e.g. "Jean Dupont" → "JD". */
export function initials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? '')
    .join('');
}

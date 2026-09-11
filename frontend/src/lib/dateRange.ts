import dayjs, { Dayjs } from 'dayjs';

/** A [start, end] window as held by the pickers (either end may be unset). */
export interface DateRange {
  start: Dayjs | null;
  end: Dayjs | null;
}

export const DEFAULT_BOOKING_DAYS = 1;

export function defaultBookingStart(): Dayjs {
  return dayjs();
}

export function defaultBookingEnd(): Dayjs {
  return dayjs().add(DEFAULT_BOOKING_DAYS, 'day');
}

export function defaultTimelineRange(): { start: Dayjs; end: Dayjs } {
  const start = dayjs().startOf('day');
  return { start, end: start.add(21, 'day') };
}

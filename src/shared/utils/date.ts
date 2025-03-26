import { logger } from '@/logger';
import { format, formatDistanceToNow, parse } from 'date-fns';
import { de } from 'date-fns/locale';

export const formatDate = (date?: Date | number | string) => {
  if (!date) {
    return '';
  }

  try {
    if (typeof date === 'string') {
      return format(new Date(date), 'dd.MM.yyyy');
    } else {
      return format(date, 'dd.MM.yyyy');
    }
  } catch (error) {
    logger.error(error);
  }
};

export const formatDateDif = (date: string | Date): string => {
  const currentDate = new Date();
  const dateToFormat = new Date(date);

  // Calculate the difference in milliseconds between the current date and the provided date
  const difference = currentDate.getTime() - dateToFormat.getTime();

  // If the difference is less than or equal to one month, use formatDistanceToNow
  if (difference <= 30 * 24 * 60 * 60 * 1000) {
    return formatDistanceToNow(dateToFormat, { addSuffix: true, locale: de });
  }

  // If the difference is greater than one month, use custom formatting
  return format(dateToFormat, 'dd.MM.yyyy', { locale: de });
};

export const createDateFromString = (dateString: string): Date => {
  const formatString = 'dd.MM.yyyy';

  return parse(dateString, formatString, new Date());
};

import { getRequestConfig } from 'next-intl/server';
import { getUserLocale } from './i18n.service';

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  return {
    locale,
    timeZone: 'Europe/Berlin',
    messages: (await import(`./locales/${locale}.json`)).default,
  };
});

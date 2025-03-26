import { useTranslations } from 'next-intl';
import Link from 'next/link';

export const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="mt-16 bg-footer py-12">
      <div className="container">
        <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
          <span className="text-sm text-footer-foreground lg:text-base">
            &copy; {new Date().getFullYear()} Fairfield & Archer
          </span>

          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
            <Link
              className="text-sm text-footer-foreground hover:underline lg:text-base"
              href="/legal"
            >
              {t('Impressum')}
            </Link>
            <Link
              className="text-sm text-footer-foreground hover:underline lg:text-base"
              href="/privacy"
            >
              {t('Datenschutz')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

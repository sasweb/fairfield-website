import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Logo } from './Logo';

export const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="mt-16 bg-footer py-12">
      <div className="container">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/">
              <Logo className="h-[18px]" fill="#fff" />
            </Link>
            <span className="text-xs leading-snug text-white/50">
              Neuer Wall 48, <br />
              20354 Hamburg
            </span>
          </div>

          <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
            <span className="text-xs text-footer-foreground lg:text-xs">
              &copy; {new Date().getFullYear()} Fairfield & Archer
            </span>

            <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
              <Link
                className="text-xs text-footer-foreground hover:underline lg:text-xs"
                href="/legal"
              >
                {t('Impressum')}
              </Link>
              <Link
                className="text-xs text-footer-foreground hover:underline lg:text-xs"
                href="/privacy"
              >
                {t('Datenschutz')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

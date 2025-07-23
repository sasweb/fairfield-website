import { cn } from '@/shared';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Logo } from './Logo';

export const Footer = ({ className }: { className?: string }) => {
  const t = useTranslations();

  return (
    <footer className={cn('mt-16 bg-footer py-12', className)}>
      <div className="container">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/">
              <Logo className="h-[20px]" fill="#fff" />
            </Link>
            <span className="text-base leading-snug text-white/50">
              Neuer Wall 48, <br />
              20354 Hamburg
            </span>
          </div>

          <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
            <span className="text-xs text-footer-foreground lg:text-base">
              &copy; {new Date().getFullYear()} Fairfield & Archer
            </span>

            <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
              <Link
                className="text-xs text-footer-foreground hover:underline lg:text-base"
                href="/legal"
              >
                {t('Impressum')}
              </Link>
              <Link
                className="text-xs text-footer-foreground hover:underline lg:text-base"
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

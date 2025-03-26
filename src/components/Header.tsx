'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Button } from './Button';
import { Logo } from './Logo';

export const Header = () => {
  const t = useTranslations();

  return (
    <header className={`flex h-24 items-center border-b bg-white md:sticky md:top-0 md:z-10`}>
      <nav className="container flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex items-center gap-2">
          <a href="mailto:info@fairfield-archer.com">
            <Button variant="outline">{t('Kontakt')}</Button>
          </a>
        </div>
      </nav>
    </header>
  );
};

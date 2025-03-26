import { cn } from '@/shared';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';

export const Logos = () => {
  const t = useTranslations();

  const logos = useMemo(
    () => [
      {
        alt: 'Logo: DIN',
        href: 'https://www.din.de/',
        isHiddenOnMobile: true,
        src: '/collaborate-1.jpeg',
        title: t('Mitgestalten'),
      },
      {
        alt: 'Logo: Frankfurter Arbeitskreis Compliance & Governance',
        href: 'https://www.frankfurter-arbeitskreis.de',
        src: '/active-1.jpeg',
        title: t('Aktiv sein'),
      },
      {
        alt: 'Logo: Deutsches Institut für Compliance',
        href: 'https://www.dico-ev.de',
        src: '/active-2.jpeg',
      },
      {
        alt: 'Logo: Finanzplatz Hamburg',
        href: 'https://www.finanzplatz-hamburg.com/de',
        src: '/active-3.jpeg',
      },
      {
        alt: 'Logo: Young Innovators',
        href: 'https://www.bafa.de/DE/Wirtschaft/Auslandsmarkterschliessung/auslandsmarkterschliessung_node.html',
        isHiddenOnMobile: true,
        src: '/support-1.png',
        title: t('Unterstützt von'),
      },
    ],
    [t],
  );

  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col flex-wrap items-center justify-between md:flex-row md:items-start">
          {logos.map((logo) => (
            <a
              className={cn(
                'flex flex-col gap-6 items-center md:items-start',
                logo.isHiddenOnMobile && 'hidden lg:flex',
              )}
              href={logo.href}
              key={logo.src}
              target="_blank"
            >
              <div className="h-10">
                {logo.title && (
                  <span className="text-xs uppercase text-muted-foreground ">{logo.title}:</span>
                )}
              </div>
              <img
                className="h-10 w-auto object-contain object-left xl:h-12"
                src={logo.src}
                alt={logo.alt}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

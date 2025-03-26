import { Button } from '@/components/Button';
import { useTranslations } from 'next-intl';

export const Stage = () => {
  const t = useTranslations();

  return (
    <section className="flex min-h-[calc(100vh-6rem-15.5rem)] w-full items-center justify-center py-12">
      <div className="container h-full">
        <div className="grid h-full gap-20 overflow-hidden rounded-lg lg:grid-cols-5 lg:bg-muted lg:pl-12 lg:pt-8">
          <div className="flex flex-col items-start justify-center gap-6 lg:col-span-3">
            <h1 className="text-2xl font-bold leading-snug md:text-4xl">
              {t('Verlässlich in der Compliance,')}
              <br />
              {t('visionär in der Technologie')}
            </h1>
            <span className="text-base text-slate-500">
              {t(
                'Mit visionären Technologien und intelligenter Automatisierung gestalten wir bei Fairfield & Archer nahtlose Compliance-Workflows, die Ihren Alltag erleichtern, Risiken besser einschätzbar machen und Zeit für das Wesentliche schaffen',
              )}
              .
            </span>
            <a href="mailto:info@fairfield-archer.com?subject=Demo%20buchen">
              <Button className="mt-3" variant="default">
                {t('Demo buchen')}
              </Button>
            </a>
          </div>

          <div className="relative hidden size-full items-end lg:col-span-2 lg:flex">
            <img
              className="h-auto w-full"
              src="/fairfield-archer-showcase.png"
              alt="Fairfield & Archer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

import { useTranslations } from 'next-intl';

export const Solution = () => {
  const t = useTranslations();

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 rounded-lg bg-[url('/pattern.jpg')] bg-cover bg-center bg-no-repeat px-16 py-20 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <h2 className="text-3xl font-semibold text-white">Regulatory Compliance</h2>
              <span className="text-xl text-[#d7c394]">as a Service</span>
            </div>
            <p className="text-sm text-white">{t('solution-copy-1')}</p>
            <p className="text-sm text-white">{t('solution-copy-2')}</p>
          </div>

          <img
            src="/regulatory-compliance.jpg"
            alt={`${t('Bild: Regulatory Compliance')}`}
            className="h-auto w-full rounded-sm"
          />
        </div>
      </div>
    </section>
  );
};

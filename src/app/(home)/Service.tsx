import { useTranslations } from 'next-intl';

export const Service = () => {
  const t = useTranslations();

  const services = [
    {
      title: 'Regulatory Data as a Service',
      description: t(
        'Relevante regulatorische Anforderungen, fokussiert gefiltert und automatisiert bereitgestellt – direkt nutzbar für Ihre internen Systeme',
      ),
    },
    {
      title: 'Regulatory Compliance as a Service',
      description: t(
        'Bleiben Sie stets einen Schritt voraus: Unsere Lösung automatisiert Ihr Regulatory Change Management – schnell, transparent und zuverlässig',
      ),
    },
    {
      title: 'Compliance Awareness Service',
      description: t(
        'Regulatorische Updates für Fachbereiche – gezielte Information, Wesentlichkeitseinschätzung und Handlungsempfehlung per E-Mail',
      ),
    },
    {
      title: 'KI-Schulung für Compliance, Vorstände & Aufsichtsräte',
      description: t(
        'Praxisnahes E-Learning Angebot: Vermittlung regulatorischer Anforderungen und technologische Einblicke – mit Fokus digitale Transformation von Geschäftsprozessen',
      ),
    },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">
              {t('Wir bringen Effizienz und Übersicht in Ihre Compliance')}
            </h2>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, perferendis!
            </p>
          </div>

          <div className="col-span-2 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8">
            {services.map((service) => (
              <div className="flex flex-col gap-6 rounded-md bg-muted p-8" key={service.title}>
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="text-sm">{service.description}.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

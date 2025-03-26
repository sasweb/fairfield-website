import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/Accordion';
import { useTranslations } from 'next-intl';

export const FAQ = () => {
  const t = useTranslations();

  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold">
              {t('Ihr Wissenshub für Compliance und Risikomanagement')}
            </h2>
            <p className="text-muted-foreground">
              {t(
                'In diesem Bereich finden Sie kompakte und verständliche Erklärungen zu zentralen Begriffen rund um regulatorische Anforderungen, Compliance und Risikomanagement',
              )}
              .
            </p>
            <p className="text-muted-foreground">
              {t(
                'Unser Ziel ist es, Unternehmen dabei zu unterstützen, ihre Compliance-Prozesse effizient und wirksam aufzubauen, weiterzuentwickeln und nachhaltig zu optimieren',
              )}
              .
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>{t('Was ist ein Compliance Management System?')}</AccordionTrigger>
              <AccordionContent>{t('faq-1')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>{t('Was bedeutet Regulatorische Compliance?')}</AccordionTrigger>
              <AccordionContent>{t('faq-2')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>{t('Was ist Risikomanagement?')}</AccordionTrigger>
              <AccordionContent>{t('faq-3')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>{t('Was bedeutet Normeninventar?')}</AccordionTrigger>
              <AccordionContent>{t('faq-4')}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

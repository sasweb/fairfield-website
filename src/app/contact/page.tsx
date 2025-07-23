import { ContactForm } from '@/components/ContactForm/ContactForm';

const ContactPage = () => (
  <section className="py-8">
    <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 xl:gap-16">
      <div className="max-w-[500px] space-y-8 lg:space-y-11">
        <h1 className="text-2xl font-semibold leading-snug md:text-4xl">
          Ihr Workflow für effektive regulatorische Compliance
        </h1>
        <h2 className="text-xl font-medium md:text-2xl">Felder ausfüllen und abschicken.</h2>
        <p className="text-sm font-medium text-muted-foreground md:text-base">
          Senden Sie uns eine Nachricht und wir melden uns bei Ihnen mit einer passenden Lösung.
        </p>
      </div>
      <div className="w-full justify-self-end rounded-md bg-[#e6e6e8] p-4 md:p-6 lg:max-w-[546px]">
        <ContactForm />
      </div>
    </div>
  </section>
);

export default ContactPage;

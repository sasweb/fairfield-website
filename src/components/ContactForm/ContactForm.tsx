'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { logger } from '@/logger';
import { useTranslations } from 'next-intl';
import { toast } from 'sonner';
import { Button } from '../Button';
import { Checkbox } from '../ui/checkbox';
import { Textarea } from '../ui/textarea';

export const contactFormSchema = z
  .object({
    company: z.string().trim().min(1, { message: 'Bitte geben Sie Ihren Firmennamen ein.' }),
    email: z.email({ message: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' }),
    firstname: z.string().trim().min(1, { message: 'Bitte geben Sie Ihren Vornamen ein.' }),
    lastname: z.string().trim().min(1, { message: 'Bitte geben Sie Ihren Nachnamen ein.' }),
    message: z.string().trim().min(1, { message: 'Bitte geben Sie eine Nachricht ein.' }),
    phone: z.string().min(1, { message: 'Bitte geben Sie Ihre Telefonnummer ein.' }),
    tosAccepted: z.boolean(),
  })
  .refine((data) => data.tosAccepted);

export const ContactForm = () => {
  const t = useTranslations();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      message: '',
      company: '',
      phone: '',
      tosAccepted: false,
    },
  });

  const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();

        throw new Error(errorData.error || t('Fehler beim Senden der Nachricht'));
      }

      form.reset();
      toast.success(t('Ihre Nachricht wurde erfolgreich gesendet!'), {
        description: `${t('Wir werden uns so schnell wie möglich bei Ihnen melden')}.`,
      });
    } catch (error) {
      logger.error('Error submitting form:', error);
      toast.error(t('Ein Fehler ist aufgetreten'), {
        description: `${t('Bitte versuchen Sie es erneut')}.`,
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormControl>
                  <Input placeholder={`${t('Vorname')}*`} {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem className="sm:col-span-3">
                <FormControl>
                  <Input placeholder={`${t('Name')}*`} {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder={`${t('Unternehmen')}*`} {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="email" placeholder={`${t('E-Mail Adresse')}*`} {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="pb-2">
              <FormControl>
                <Input type="tel" placeholder={`${t('Telefonnummer')}*`} {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-4 rounded-md bg-white p-4">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder={`${t('Nachricht an uns')}*`}
                    className="h-32 w-full rounded-md"
                    {...field}
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-wrap justify-between gap-4 md:gap-2">
            <FormField
              control={form.control}
              name="tosAccepted"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center gap-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                      className="size-4"
                      required
                    />
                  </FormControl>
                  <FormLabel className="text-xs text-muted-foreground">
                    <span>
                      {t('Ich akzeptiere die')}{' '}
                      <a
                        className="underline"
                        href="/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t('Datenschutzerklärung')}
                      </a>
                      .
                    </span>
                  </FormLabel>
                </FormItem>
              )}
            />
            <Button
              disabled={
                form.formState.isLoading || form.formState.isSubmitting || !form.formState.isValid
              }
              size="xs"
              type="submit"
            >
              {t('Absenden')}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

import { logger } from '@/logger';
import { NextResponse } from 'next/server';

const LIST_IDS = [5];
const BREVO_MAILBOX = 'brevo@fairfield-archer.com';

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { company, firstname, lastname, phone, email, message } = body;

    logger.info('Contact form submission received', {
      company,
      firstname,
      lastname,
      phone,
      email,
      message,
    });

    if (!company || !firstname || !phone || !lastname || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    logger.info('Creating / Updating Brevo contact');

    // Create/Update Brevo contact
    try {
      const response = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.BREVO_API_KEY || '',
        },
        body: JSON.stringify({
          email,
          attributes: {
            FIRSTNAME: firstname,
            LASTNAME: lastname,
            VORNAME: firstname,
            NACHNAME: lastname,
            COMPANY: company,
            PHONE: phone || '',
          },
          listIds: LIST_IDS,
          updateEnabled: true,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();

        logger.error('Failed to create Brevo contact', { error: errorData });

        throw new Error(errorData.message || 'Failed to create Brevo contact');
      }

      logger.info('Sending email via Brevo');

      try {
        // Send email via Brevo
        const res = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-key': process.env.BREVO_API_KEY || '',
          },
          body: JSON.stringify({
            sender: {
              email: 'noreply@fairfield-archer.com',
              name: 'Fairfield Archer Contact Form',
            },
            replyTo: { email, name: `${firstname} ${lastname}` },
            to: [
              {
                email: BREVO_MAILBOX,
              },
            ],
            subject: `New contact form submission from ${firstname} ${lastname} of ${company}`,
            htmlContent: `
            <p><strong>Name:</strong> ${firstname} ${lastname}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Message:</strong> ${message}</p>
            `,
          }),
        });

        if (!res.ok) {
          const errorData = await res.json();

          logger.error('Failed to send email', { error: errorData });

          throw new Error(errorData.message || 'Failed to send email');
        } else {
          logger.info('Email sent successfully', await res.json());
        }
      } catch (emailError) {
        logger.error('Error sending email:', emailError);

        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
      }
    } catch (error) {
      logger.error('Error creating Brevo contact:', error);

      return NextResponse.json({ error: 'Failed to create Brevo contact' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    logger.error('Error sending email:', error);

    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
};

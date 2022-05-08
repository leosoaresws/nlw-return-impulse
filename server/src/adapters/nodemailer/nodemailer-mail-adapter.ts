import nodemailer from 'nodemailer';
import { MailAdapter, MailData } from '../mail-adapter';

export class NodeMailerMailAdapter implements MailAdapter {

/**
 * It creates a transport object, and then sends an email using that transport object
 * @param {MailData} object - The data of email
 * SMTP_HOST: The host of the SMTP server.
 * SMTP_PORT: The port of the SMTP server.
 * SMTP_USER: The user auth of the SMTP server.
 * SMTP_PASS: The password auth of the SMTP server.
 */
  async send({subject, body}: MailData): Promise<void> {
    
    /* Creating a transport object. */
    const transport = nodemailer.createTransport({
      host: process.env['SMTP_HOST'],
      port: parseInt(process.env['SMTP_PORT']!),
      auth: {
        user: process.env['SMTP_USER'],
        pass:process.env['SMTP_PASS'],
      },
    });    

    /* Sending the email. */
    await transport.sendMail({
      from: "Equipe Feedget <noreply@feedget.com>",
      to: "Leonardo Soares <leonardo.soares.ws@gmail.com>",
      subject: subject,
      html: body,
    });
  }

}
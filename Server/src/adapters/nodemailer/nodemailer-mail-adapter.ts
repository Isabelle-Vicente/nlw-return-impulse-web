import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f5c2d013b76c2d",
      pass: "8fb857a2daa118"
    }
  });

export class NodemailerMailAdapter implements MailAdapter{
   async sendMail ({subject, body}: SendMailData){
       await transport.sendMail({
       from: "Equipe Feedget <oi@feedget.com>",
        to: 'Isabelle Vicente <isabelle.v.evil@gmail.com>',
        subject,
         html: body,
           
      });
   }
}
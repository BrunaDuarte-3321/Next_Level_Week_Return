import { MailAdapters, SendMailData } from "../adapters/mail-adapters";
import nodemailer from 'nodemailer'
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ca0b8db549204c",
    pass: "06dcd9f871ee64"
  }
});

export class NodemailerMailAdapter implements MailAdapters{
   async sendMail({subject, body}:SendMailData){
   await transport.sendMail({
    from: 'Equipe Feedget <teste@feedget.com>',
    to: 'Bruna Duarte <brunaduarte3000@hotmail.com>',
    subject,
    html:body
    })  
   }
}
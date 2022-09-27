import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer, { TransportOptions } from "nodemailer"
import Mail from "nodemailer/lib/mailer";

export class MailtrapMailProvider implements IMailProvider{

  private transporter: Mail;

  constructor(){

    this.transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS
      }
    } as TransportOptions)

    this.transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });
  }
  
  async sendMail(message: IMessage): Promise<void> {

    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email
      },
      from: {
        name: message.from.name,
        address: message.from.email
      },
      subject: message.subject,
      html: message.body
    })
  }

}
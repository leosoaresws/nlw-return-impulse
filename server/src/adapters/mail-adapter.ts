export interface MailData {
  subject: string;
  body: string;
}

export interface MailAdapter {
  send: (data: MailData) => Promise<void>;
}

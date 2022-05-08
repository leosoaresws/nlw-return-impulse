import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot: string;
}

/* It creates a new feedback and sends an email with the feedback details */
export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) {}

  /**
   * It creates a new feedback and sends an email with the feedback details
   * @param {SubmitFeedbackUseCaseRequest} request - SubmitFeedbackUseCaseRequest
   */
  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    if(!type) {
      throw new Error('Type is required!')
    }

    if(!comment) {
      throw new Error('Comment is required!')
    }

    if(screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format.');
    }

    /* Creating a new feedback. */
    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    /* Sending an email with the feedback details. */
    await this.mailAdapter.send({
      subject: "Novo Feedback",
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
        `<p>Tipo do Feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        screenshot ? `<img src="${screenshot}" />` : ``,
        `</div>`,
      ].join("\n"),
    });
  }
}

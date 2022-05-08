import { SubmitFeedbackUseCase } from './submit-feedback-use-case';

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { send: sendMailSpy }
);

describe('Submit Feedback', () => {

  it('should be able to submit feedback', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'Example',
        screenshot: 'data:image/png;base64,iVBORw0KGgoAAAANSUhE...',
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not be able to submit feedback without a type', async () => {
    await expect(
      submitFeedback.execute({
        type: '',
        comment: 'Example',
        screenshot: 'data:image/png;base64,iVBORw0KGgoAAAANSUhE...',
      })
    ).rejects.toThrow();
  });

  it('should not be able to submit feedback without a comment', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: '',
        screenshot: 'data:image/png;base64,iVBORw0KGgoAAAANSUhE...',
      })
    ).rejects.toThrow();
  });

  it('should not be able to submit feedback with an invalid screenshot', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'Example',
        screenshot: 'example.png',
      })
    ).rejects.toThrow();
  });

});

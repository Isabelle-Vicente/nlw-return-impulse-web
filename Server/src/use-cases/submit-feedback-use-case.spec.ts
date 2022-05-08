import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbacksSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    {create: createFeedbacksSpy},
    {sendMail: sendMailSpy}
)

describe('Submit feedback',() => {
    it('should be able to submit a feedback', async () => {
        

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,@sbfbwlrfbluewff',
        })).resolves.not.toThrow();
    } );
    expect(createFeedbacksSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
} );
it('should not be able to submit a feedback wihout type', async () => {
    
    await expect(submitFeedback.execute({
        type: '',
        comment: 'example comment',
        screenshot: 'data:image/png;base64,@sbfbwlrfbluewff',
    })).rejects.toThrow();
} );
it('should not be able to submit a feedback wihout comment', async () => {
    
    await expect(submitFeedback.execute({
        type: 'BUG',
        comment: '',
        screenshot: 'data:image/png;base64,@sbfbwlrfbluewff',
    })).rejects.toThrow();
} );
it('should not be able to submit a feedback with an invalid sceenshot', async () => {
    
    await expect(submitFeedback.execute({
        type: 'BUG',
        comment: 'example comment',
        screenshot: 'oijbvcdrtyui',
    })).rejects.toThrow();
} );
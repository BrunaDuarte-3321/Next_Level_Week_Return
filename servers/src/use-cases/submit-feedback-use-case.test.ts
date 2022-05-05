import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"


const createFeedbackSpy = jest.fn();

const sendEmailSpy = jest.fn()
describe('Submit feddback', () =>{
    const submitFeedback = new SubmitFeedbackUseCase(
            {create: createFeedbackSpy},
            {sendMail: sendEmailSpy},

        )
    it('shuold be able to submit a feedback', async () =>{
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshort: 'data:image/png;base64,dsdsdsds',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendEmailSpy).toHaveBeenCalled();
    })
    it('should not be able submit feedback without type', async () =>{
        await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshort: 'data:image/png;base64,dsdsdsds',
        })).rejects.toThrow();
    });
    it('should not be able submit feedback without comment', async () =>{
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshort: 'data:image/png;base64,dsdsdsds',
        })).rejects.toThrow();
    });
    it('should not be able submit feedback with an invalid screenshot', async () =>{
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'teste teste',
            screenshort: 'test.jpg',
        })).rejects.toThrow();
    });
});
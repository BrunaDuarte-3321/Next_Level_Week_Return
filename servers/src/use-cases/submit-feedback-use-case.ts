import { MailAdapters } from "../adapters/mail-adapters";
import { Feedbacksrepositories } from "../repositories/feedbacks-repositories";

interface SubmitFeedbackUseCaseRequest {
    type: string;
    comment: string;
    screenshort?: string;
}
export class SubmitFeedbackUseCase {
constructor(
    private feedbackRepository: Feedbacksrepositories,
    private mailAdapter: MailAdapters,
){}
    async execute(request: SubmitFeedbackUseCaseRequest){
        const {type, comment, screenshort } = request;

        if(!type){
            throw new Error ('Type is riquered')
        }
        if(!comment){
            throw new Error ('Type is riquered')
        }
        if(screenshort && !screenshort.startsWith('data:image/png;base64')){
            throw new Error('Ivalid screenshot format.')
        }
        await this.feedbackRepository.create({
            type,
            comment,
            screenshort,
        })

        await this.mailAdapter.sendMail({
           subject: "Novo feedback",
            body: [
        `<div style="font-family: sans-serif; font-size:16px; color: #111">`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        `</div>`
        ].join('\n')
        })
    }
       
}
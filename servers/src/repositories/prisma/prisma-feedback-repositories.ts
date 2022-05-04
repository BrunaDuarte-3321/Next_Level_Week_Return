import { FeedbackCreatedata, Feedbacksrepositories } from "../feedbacks-repositories";
import { prisma } from "../../prisma";
export class PrismaFeedbacksRepositories implements Feedbacksrepositories {
   async create({type, comment, screenshort}: FeedbackCreatedata) {
       await prisma.feedback.create({
        data:{ 
            type,
            comment,
            screenshort,
        }
    }) 
    }
}
import express from 'express';
import { NodemailerMailAdapter } from './nodemailer/nodemailers-mail-adapters';
import { PrismaFeedbacksRepositories } from './repositories/prisma/prisma-feedback-repositories';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router()



routes.post('/feedbacks', async (req,res) =>{

    const {type, comment, screenshort} = req.body;
    const prismaFeedbackRepository = new PrismaFeedbacksRepositories()
    const nodemailerAdapter = new NodemailerMailAdapter()
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      prismaFeedbackRepository,
      nodemailerAdapter
    )

    await submitFeedbackUseCase.execute({
      type,
      comment,
      screenshort,
    })
  
    return res.status(201).send()
})
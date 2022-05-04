import express from 'express';
import nodemailer from 'nodemailer'
import {prisma} from './prisma'

export const routes = express.Router()

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ca0b8db549204c",
    pass: "06dcd9f871ee64"
  }
});

routes.post('/feedbacks', async (req,res) =>{

    const {type, comment, screenshort} = req.body;
    const feedback =  
    transport.sendMail({
        from: 'Equipe Feedget <teste@feedget.com>',
        to: 'Bruna Duarte <brunaduarte3000@hotmail.com>',
        subject: 'Novo feedback',
        html:[
            `<div style="font-family: sans-serif; font-size:16px; color: #111">`,
            `<p>Tipo do feedback: ${type}</p>`,
            `<p>Comentário: ${comment}</p>`,
            `</div>`

        ].join('\n')
    })
    return res.status(201).json({data:feedback})
})
import { CloseButton } from "../CloseButton"
import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import toughtImageUrl from '../../assets/thought.svg'
import { useState } from "react"
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep"
import { FeedbackContentStep } from "./Steps/FeedbackContentType"
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep"

export const feedbackTypes = {
    BUG:{
        title: 'Problema',
        image:{
            source: bugImageUrl,
            alt: 'Imagem de um inseto',
        }
    },
    IDEA:{
        title: 'Ideia',
         image:{
            source: ideaImageUrl,
            alt: 'Imagem de uma lampada',
        }
    },
    OTHER:{
        title: 'Outro',
         image:{
            source: toughtImageUrl,
            alt: 'Imagem de um balão de pensamento',
        }
    }
};

export type FeedbackType = keyof typeof feedbackTypes

export const WidgetForm = () =>{

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null >(null)

    const [feedbacksent, setFeedbackSent] = useState(false)
    const handleRestartFeedback = () =>{
        setFeedbackSent(false)
        setFeedbackType(null)
    }
    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl 
        mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            
        {feedbacksent ? (
            <FeedbackSucessStep onFeedbackRestartRequested = {handleRestartFeedback}/>
        ): <>
            {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChange = {setFeedbackType}/>
            ):<FeedbackContentStep 
            onFeedbackSent={() => setFeedbackSent(true)}
            feedbackType ={feedbackType}
            onFeedbackRestartRequested={handleRestartFeedback}
            />}
        </> }
            
               
            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline 
                underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a> 
            </footer> 
        </div>
    )
}
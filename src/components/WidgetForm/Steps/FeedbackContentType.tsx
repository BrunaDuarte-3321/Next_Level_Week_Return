import { ArrowArcLeft, Camera } from "phosphor-react";
import React, { useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void
    screenshort?:string
    onFeedbackSent: () => void
}
export const FeedbackContentStep = ({
    feedbackType, 
    onFeedbackRestartRequested,
    onFeedbackSent
}:FeedbackContentStepProps) =>{

    const [comment,setComment] = useState('')

    const [screenshort, setScreenshot] = useState<string | null>(null)

    const handleSubmitFeedback = (event: React.FormEvent) =>{
        event.preventDefault();
        console.log({
            screenshort,
            comment
        })
        setComment('')
        onFeedbackSent();
    }
    const feedbackTypeInfo = feedbackTypes[feedbackType];
    return(
        <>
            <header>
                <button 
                type="button" 
                className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
                onClick={onFeedbackRestartRequested}
                >
                    <ArrowArcLeft width='bold' className="w-4 h-4" />
                </button>
                <span className="text-xl leading-6 items-center flex items-center gap-2">
                    <img className="w-6 h-6" src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} />
                    {feedbackTypeInfo.title}
                </span>  
                <CloseButton/>
            </header>  
            <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
                <textarea
                value={comment}
                onChange={({target}) =>  {
                    setComment(target.value)
                    
                }}
                className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 
                text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brend-500
                 focus:ring-brend-500 focus:ring-1 focus:outline-none resize-none 
                 scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                
                placeholder="Conte com detalhes o que está acontecendo"
                /> 
                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton 
                    screenshort={screenshort}
                    onScreenshortTook={setScreenshot}
                    
                    
                    />
                    <button
                    disabled={comment.length == 0}
                    type="submit"
                    className="p-2 bg-brend-500 rounded-md border-transparent flex-1
                    flex justify-center items-center text-sm hover:bg-brend-300 
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 
                    focus:ring-brend-500 transition-colors disabled:opacity-50 disabled:hover:bg-brend-500"

                    >
                    Enviar feedback
                    </button>
                </footer>
            </form>
        </>
    )
}
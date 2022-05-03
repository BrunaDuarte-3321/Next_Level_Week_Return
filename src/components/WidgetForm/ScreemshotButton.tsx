import { Camera, Trash } from "phosphor-react"
import html2canvas from 'html2canvas'
import { useState } from "react"
import { Loading } from "./Loading"

interface ScreenshortButtonProps {
    onScreenshortTook: (screenshort:string | null) => void
    screenshort:string | null
}
export const ScreenshotButton = ({
    onScreenshortTook,
     screenshort}: ScreenshortButtonProps) => {

    const [isTakeScreenshot, setIsTakeScrennshot] = useState(false)

    const handleTakeScreenshot = async () => {
        setIsTakeScrennshot(true)
        const canvas = await html2canvas(document.querySelector('html')!);
        const base64image = canvas.toDataURL('image/png')

        onScreenshortTook(base64image)
        setIsTakeScrennshot(false)  
    }

    if(screenshort){
        return(
            <button
            onClick={() => onScreenshortTook(null)} 
            type="button" 
            className="p-1 w-10 h-10 rounded-md 
            border-transparent flex justify-end items-end 
            text-zinc-400 hover:text-zinc-100 transition-colors">
                <Trash weight="fill" className="" 
                style={{
                   backgroundImage: `url(${screenshort})`,
                   backgroundPosition:'right bottom',
                   backgroundSize:200
                }}/>
            </button>
        )
    }
    return(
        <button
        onClick={handleTakeScreenshot} 
        type="button" 
        className="p-2 bg-zinc-800 rounded-md border-transparent
        hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 
        focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brend-500 "
       >
           {isTakeScreenshot ? <Loading/> :  <Camera className="w-6 h-6 text-zinc-100"/>}
           
        
        </button>
    )
}
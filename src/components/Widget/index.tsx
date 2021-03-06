import React/* , { useState } */ from "react";

import {ChatTeardropDots} from 'phosphor-react';
import {Popover} from '@headlessui/react' // biblioteca de acessibilidade
import { WidgetForm } from "../WidgetForm";

export const Widget = () =>{

   /*  const [isWidgetOpen, setIsWidgetOpen] = useState(false)

    const toggleWidgetVisibility = () =>{
        setIsWidgetOpen(!isWidgetOpen)
    } */
    return(
        <Popover className="absolute bottom-4 md:bottom-8 md:right-8 right-4 flex flex-col items-end">
            <Popover.Panel>
              <WidgetForm/>
            </Popover.Panel>
          {/*   {isWidgetOpen && <p>Hello World</p>} */}
            <Popover.Button  className="bg-brend-500 rounded-full px-3 h-12 
              text-white flex items-center group">

                <ChatTeardropDots className="w-6 h-6" />

              <span className='max-w-0 overflow-hidden 
              group-hover:max-w-xs transition-all duration-500 ease-linear'>
                <span className="pl-2"></span>
                  Feedback</span>
            </Popover.Button>
        </Popover>
    )
}
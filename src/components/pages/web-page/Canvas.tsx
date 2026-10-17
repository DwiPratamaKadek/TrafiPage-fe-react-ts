

import Droppable from "../../ui/Droppable"

import Navbar from "../../layout/web-builder/Navbar"
import DescCard from "../../ui/card-components/DescCard"

type Props = {
    isDropped: string[],  
} 

export default function Canvas({isDropped}:Props){

    return(
        <section className="border-red-400 w-full">
            <Droppable id="droppable">
                {isDropped.map((item, index) => {
                    if(item === "navbar"){
                        return <Navbar key={`${item}-${index}`}/>
                    }else if(item === "card"){
                        return <DescCard key={`${item}-${index}`}/> 
                    }
                })}
            </Droppable>
        </section>
    )
}
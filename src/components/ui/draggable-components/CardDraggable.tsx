
import {useDraggable} from '@dnd-kit/react';

export default function CardDraggable(){

    const {ref} = useDraggable({
        id: 'card-tool'
    })

    return(
         <button ref={ref} className='border-2 p-2 '>
            Card
        </button>
    )
}

import {useDroppable} from '@dnd-kit/react';
import type { droppableType } from '../../types/ui/droppableType';

export default function Droppable({id, children} : droppableType){
    const {ref} = useDroppable({
        id: id,
    });
    return(
        <div ref={ref} className='min-h-56 p-3 flex-1 border-2 border-amber-500'>
            {children}
        </div>
    )
}
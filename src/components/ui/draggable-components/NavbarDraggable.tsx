
import {useDraggable} from '@dnd-kit/react';

export default function NavbarDraggable(){

    const {ref} = useDraggable({
        id: 'navbar-tool'
    })

    return(
         <button ref={ref} className='border-2 p-2 '>
            Navbar
        </button>
    )
}
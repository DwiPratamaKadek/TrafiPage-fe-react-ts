
import { DragDropProvider } from "@dnd-kit/react"
import type { DragEndEvent } from "@dnd-kit/react";

import Canvas from "../../pages/web-page/Canvas"
import SideBar from "../../layout/web-builder/SideBar"
import Property from "../../pages/web-page/Property";

import { useState } from "react"

export default function Web(){

    const [canvasItem, setCanvasItem] = useState<string[]>([])

    const handleDragEnd = (event: DragEndEvent) => {
        if (event.canceled) return;

        const { source, target } = event.operation;

        if( target?.id === "droppable" && source?.id === "navbar-tool"){
            setCanvasItem((prev) => [...prev, "navbar"])
            console.log("Canvas Item", canvasItem)
        }else if(target?.id === "droppable" && source?.id === "card-tool"){
            setCanvasItem((prev) => [...prev, "card"])
            console.log("Canvas Item", canvasItem)
        }        
    };

    return(
        <main className="flex">
            <DragDropProvider onDragEnd={handleDragEnd}>
                {/* Side Bar */}
                <SideBar />
                {/* Canvas */}
                <Canvas isDropped={canvasItem}/>
                {/* Property */}
                <Property/>

            </DragDropProvider>
        </main>
    )
}
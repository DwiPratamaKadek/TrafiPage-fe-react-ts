
import { useBukaTutup } from "../../../hooks/buka-tutup/BukaTutup"
import NavbarDraggable from "../../ui/draggable-components/NavbarDraggable"
import CardDraggable from "../../ui/draggable-components/CardDraggable"


// type Props = {
//     isDropped : string[]
// }

export default function SideBar(){ 


    const sideBar = useBukaTutup(true)
    const dropDownKomponen = useBukaTutup(false)
    

    return(
        <section className={`relative h-screen border-r transition-all duration-300 ${sideBar.isOpen ? "w-64":"w-16"}`}>
            <button onClick={sideBar.toggle} className="m-3 rounded border px-3 py-2">{sideBar.isOpen ? "Tutup" : "Buka"}</button>
            {sideBar.isOpen && (
                <nav className="flex flex-col gap-3 p-4">
                    <button onClick={dropDownKomponen.toggle} className={`flex flex-col border rounded px-3 py-2`}>
                        {dropDownKomponen.isOpen ? "Komponen" : "K"}
                    </button>
                    
                     {dropDownKomponen.isOpen &&(
                            <div>
                                <NavbarDraggable />
                                <CardDraggable/>
                            </div>
                        )}

                    <button  className="text-left">
                        Pengaturan
                    </button>
                </nav>
            )}
        </section >
    )
    
}
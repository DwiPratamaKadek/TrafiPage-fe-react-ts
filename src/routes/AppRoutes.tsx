
import { Route, Routes } from "react-router-dom"

import WebBuilder from "../components/app/web-page/Web"

export default function AppRoutes(){
    return (
       <Routes>
            <Route path="" element={<WebBuilder/>}/>
        </Routes>
    )
}
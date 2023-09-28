import { Route , Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Conteudo from "./pages/Conteudo.jsx"
import Integrantes from "./pages/Integrantes.jsx"

function Router() {
    
    return(

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Conteudo" element={<Conteudo />} />
            <Route path="/Integrantes" element={<Integrantes />} />
        </Routes>
    )
}

export default Router
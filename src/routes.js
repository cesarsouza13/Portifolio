import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import PaginaPadrao from "./components/PaginaPadrao";
import Rodape from "./components/Rodape";
import Inicio from "./pages/inicio";
import SobreMim from "./pages/sobreMim";
import Post from "./pages/Post";
import NaoEncontrada from "./pages/NaoEncontrada";



function AppRoutes() {
  return (
   <BrowserRouter>
    <Menu />
    
    <Routes>
      <Route path="/" element={<PaginaPadrao/>}>
        <Route  index element={<Inicio/>}/>
        <Route  path="sobremim" element={<SobreMim />}/>
        
      </Route>
      <Route  path="posts/:id" element={<Post />}/>
      <Route   path="*" element={<NaoEncontrada/>}/>
      {/*Na rota "/", a estrutura a ser renderizada é:
      <PaginaPadrao>
        <Inicio />
      <PaginaPadrao>
      
      Na rota "/sobremim", a estrutura a ser renderizada é:
       
        <PaginaPadrao>
        <Sobre mim />
      <PaginaPadrao>*/}
    
    </Routes>

    <Rodape />
   </BrowserRouter>
  );
}

export default AppRoutes;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Inicio from "./pages/inicio";
import SobreMim from "./pages/sobreMim";




function AppRoutes() {
  return (
   <BrowserRouter>
    <Menu />
    <Routes>
      <Route  path="/sobremim" element={<SobreMim />}/>
      <Route  path="/" element={<Inicio/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default AppRoutes;

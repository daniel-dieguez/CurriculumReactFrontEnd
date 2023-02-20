import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Api from "./components/pages/Api";
import Contacto from "./components/pages/Contacto";
import Home from "./components/pages/Home";
import Lenguajes from "./components/pages/Lenguajes";
import SobreMi from "./components/pages/SobreMi";
import  './components/css/all.css';







export default function App() {
  return (
  
   <Router className="navbarr">
    <div>
      <Navigation></Navigation>
    </div>
    <Routes>
      <Route exact path="/home" element={<Home/>}>Home</Route>
      <Route exact path="/sobremi" element={<SobreMi/>}>Sobre mi</Route>
      <Route exact path="/lenguajes" element={<Lenguajes/>}>Lneguajes</Route>
      <Route exact path="/contacto" element={<Contacto/>}>Contacto</Route>
      <Route exact path="/api" element={<Api/>}>Api</Route>

    </Routes>
   </Router>
   
    
  )
}

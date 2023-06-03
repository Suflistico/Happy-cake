import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Portada from "./Views/Portada";
import Contacto from "./Views/Contacto";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Portada />}/>
            <Route path="/Contacto" element={<Contacto />} />
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

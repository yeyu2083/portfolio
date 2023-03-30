
import {Footer } from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Service } from "./components/Service";
import { Bio } from "./components/Bio";
import { Projects} from "./components/Projects";
import {Skills} from "./components/Skills";
import { Home } from "./components/Home";
 

function App() {


  return (
    <div className="App">
       
       <BrowserRouter>
                 
       <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/bio" element={<Bio />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/skills" element={<Skills />}></Route>

       </Routes>
    <Footer />
       </BrowserRouter>

    </div>
  )
}

export default App

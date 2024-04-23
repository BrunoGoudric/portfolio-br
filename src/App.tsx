import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Projects';
import Contact from './pages/Contact';

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/portfolio-br" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/projetos" element={<Project />} />
      <Route path="/contato" element={<Contact />} />
    </Routes> 
   </BrowserRouter>
  )
}

export default App

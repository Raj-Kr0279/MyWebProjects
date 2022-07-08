import './App.css';
import Next from './component/Next'
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from './component/Header';
import About from './component/About';
import Contact from './component/Contact';



function App(){
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/next" element={<Next />} />
  
       
      </Routes>
    </BrowserRouter>
  </>
  )
}
export default App;

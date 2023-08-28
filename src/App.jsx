import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from './components/Home/Home'
import { Menu } from "./components/Menu/Menu";
import { About } from "./components/About/About";
import { User } from "./components/User/User";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Curriculum } from "./components/Curriculum/Curriculum";
import { Contact } from "./components/Contact/Contact";


function App() {



  return (
    <BrowserRouter>
   
    <Menu/>

    <Routes>
      <Route path="/"element={<Home><About/></Home>} />
      <Route path="/user" element={<Home><User/></Home>} />
      <Route path="/curriculum" element={<Home><Curriculum/></Home>} />
      <Route path="/portfolio" element={<Home><Portfolio/></Home>} />
      <Route path="/contact" element={<Home><Contact/></Home>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App

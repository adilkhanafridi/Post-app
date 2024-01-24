import React from "react";
import {Routes,Route} from "react-router-dom";

import Home from "./Home";
import Contact from './Contact'
import PostDeataile from "../Method/PostDeataile";
import About from "../Method/About";



const Routers = () => {
  return (
    <div>
       <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="PostDeataile/:post" element={<PostDeataile/>}/>
    </Routes>
    </div>
  )
}

export default Routers

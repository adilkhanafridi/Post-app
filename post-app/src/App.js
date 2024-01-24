import logo from './logo.svg';
import './App.css';
import Boxes from './component/Boxes';
import { Route, Router, Routes } from 'react-router-dom';
import PostDeataile from './Method/PostDeataile';
import About from './Method/About';
import Routers from'./component/Routers'
import Navbar from './Method/Navbar';
// import { MYRouters, Routers } from './component/Routers';
// import  Routers  from './Router-program/Routers';



function App() {
  return (
    <div >
      <Navbar/>
      <About />
      <Routers/>
      
      {/* <Navbar /> */}
      {/* <Hero /> */}
      {/* <About />
      <Routes> */}
      {/* <Route path="/" element={<Home />}/> */}
      {/* <Route path="/about" element={<About />}/> */}
      {/* <Route path="/conta" element={<Contact />}/> */}
      {/* <Route path="PostDeataile/:post" element={<PostDeataile/>}/> */}
    {/* </Routes> */}
      {/* <PostDeataile /> */}
      {/* <ul>
        <li className='me-3'><Link to="/">Home</Link></li>
        <li className='me-3'><Link to="about">About</Link></li>
        <li className='me-3'><Link to="contact">Contact</Link></li>
        <li className='me-3'><Link to="user/ahmad">Ahmad</Link></li>
        <li className='me-3'><Link to="user/faizan">Faizan</Link></li>
        <li className='me-3'><Link to="user/Rehman">Rehman</Link></li>
        <li className='me-3'><Link to="user/shah">shah</Link></li>
        <li className='me-3'><Link to="user/shah">shah</Link></li>
      </ul>
   
      // <Routers /> */}
      {/* // <Routes>
      //   <Route path='/post/:postId' element={<PostDetail/>} />
      // </Routes>
      // <Routers /> */}
      
{/* 
      <ul>
        <li className='me-3'><Link to="/">Quest1</Link></li>
        <li className='me-3'><Link to="Question2">Question2</Link></li>
        <li className='me-3'><Link to="Question3">Question3</Link></li>
      </ul>
      <Routers /> */}
{/* <Boxes1/> */}
{/* <Repeat /> */}
    </div>
  );
}

export default App;

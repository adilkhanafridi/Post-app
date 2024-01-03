import logo from './logo.svg';
import './App.css';
import Boxes from './component/Boxes';
import { Routers } from './component/Routers';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ul>
        <li className='me-3'><Link to="/">Home</Link></li>
        <li className='me-3'><Link to="about">About</Link></li>
        <li className='me-3'><Link to="contact">Contact</Link></li>
      </ul>

      <Routers />

    </div>
  );
}

export default App;

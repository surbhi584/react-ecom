import Headers from './components/Headers';
import Home from './components/Home';
import CartDetails from './components/CartDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';



function App() {
  return (
    <>
      <Headers/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route  path='/cart' element={<CartDetails/>}/>
        <Route  path='/success' element={<success/>}/>
        <Route  path='/cancel' element={<cancel/>}/>
      </Routes>
      <Toaster />
      
    </>
  );
}

export default App;

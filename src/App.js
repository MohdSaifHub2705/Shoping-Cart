import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductCart from './components/ProductCart'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CartPage from './components/CartPage';

function App() {
  return (
    <div className="App">
          {/* <h1>Hello world</h1> */}

          <BrowserRouter>
              <div>
              <Navbar/>
                <Routes>
                   
                   <Route exact path="/" element={<ProductCart/>}/>
                   <Route path="/cart" element={<CartPage/>}/>
                </Routes>
             </div>
         </BrowserRouter>
    </div>
  );
}

export default App;

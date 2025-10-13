import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Product } from './Pages/Product';
import { HomeV2 } from './Pages/HomeV2';

function App() {

  return <BrowserRouter>
    {/* Navigation */}
    <nav className='navbar'>
      {/* a tag will reload the application */}
      {/* <a href='/'>Home</a> */}
      <Link to="/">Home</Link>
      <Link to="/v2">HomeV2</Link>
    </nav>

    {/* Routes */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/v2" element={<HomeV2 />} />
      <Route path="/product/:product_id" element={<Product />} />
    </Routes>
  </BrowserRouter>
}

export default App

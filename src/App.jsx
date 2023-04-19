import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Login from "./pages/Login"
import OurStory from "./pages/OurStory"
import ProductList from "./pages/ProductList" //Shop Collection
import Product from "./pages/Product"
import Register from "./pages/Register"
import Contact from "./pages/Contact"

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<Home />}>
        </Route>
        <Route 
          path="/products" 
          element={<ProductList />}>
        </Route>
        <Route 
          path="/product/:id" 
          element={<Product />}>
        </Route>
        <Route 
          path="/ourStory" 
          element={<OurStory />}>
        </Route>
        <Route 
          path="/contact" 
          element={<Contact />}>
        </Route>
        <Route 
          path="/login" 
          element={<Login />}>
        </Route>
        <Route 
          path="/register" 
          element={<Register />}>
        </Route>
        <Route 
          path="/cart" 
          element={<Cart />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App


import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import { Auth } from "./Pages/Auth";
import { Checkout } from "./Pages/Checkout";
import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import { ProductDetail } from "./Pages/ProductDetail";
import CartProvider from "./context/CartContext";

const App =() => {
  return (
    <AuthProvider>
      <CartProvider>
    <div className="app">
      <Navbar />
      <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/auth" element = {<Auth />} />
          <Route path="/checkout" element = {<Checkout/> }/>
          <Route path="/products/:id" element = {<ProductDetail/> }/>
      </Routes>
    </div>
    </CartProvider>
    </AuthProvider>
  )
}

export default App;


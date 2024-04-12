import { Routes, Route } from "react-router-dom"
import Home from "../vistas/Home"
import Carrito from "../vistas/Carrito"
import Pizzas from "../vistas/Pizzas"


const AppRouter = () => {
  return (
    <Routes>
    <Route path="/"  element={<Home />} />
    <Route path="/Carrito"  element={<Carrito />} />
    <Route path="/Pizza/:id"  element={<Pizzas />} />
  </Routes>
  )
}

export default AppRouter
import { createContext, useState } from "react"
import ArregloPizza from "./../pizzas.json"



export const MenuContext = createContext();

const MenuProvider = ({children}) => {

  const [menu, setMenu] = useState(ArregloPizza)
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  const addPizza = (pizza) => {
    const existe = cart.findIndex(i => i.id === pizza.id);
    if(existe !== -1){
      const carrito = [...cart]
      carrito[existe].cantidad +=1;
      setCart(carrito)
      console.log(cart)
      setTotal(total+pizza.price)
    }else{
     setCart([...cart, {...pizza,cantidad:1}])
     setTotal(total+pizza.price)

  }
    }

  const lowPizza = (pizza) => {

    const existe = cart.findIndex(i => i.id === pizza.id);
    const carrito = [...cart];
      if(existe  !== -1){
        carrito[existe].cantidad -=1
      }
      if(carrito[existe].cantidad === 0){
        carrito.splice(existe, 1);
      }

      setCart(carrito);
      setTotal(total - pizza.price)
      

      }  


  return (<MenuContext.Provider value={{menu, addPizza, lowPizza, total,cart}}>
    {children}
    </MenuContext.Provider>
  )
}

export default MenuProvider
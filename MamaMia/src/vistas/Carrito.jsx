import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MenuContext } from "../context/MenuProvider";

useNavigate

const Carrito = () => {
  
  const { cart} = useContext(MenuContext);

  return (
    <div className="gallery grid-columns-4 p-3">
        {cart.map((i) => (<div key={i.id}>
          
             <div className="card" width={200}>
             <ul className="list-group list-group-flush">
             <li className="list-group-item"><img src={i.img}  alt="..." width={200} height={200} /></li>
             <li className="list-group-item"><h4 >{i.name}</h4></li>
             <li className="list-group-item"><ul>
                <li>{i.ingredients[0]}</li>
                <li>{i.ingredients[1]}</li>
                <li>{i.ingredients[2]}</li>
                <li>{i.ingredients[3]}</li>
            </ul></li>
              </ul>
              <div>Stock: {i.cantidad}</div>
            </div>
            </div>))}
    
  </div>
  )
}

export default Carrito
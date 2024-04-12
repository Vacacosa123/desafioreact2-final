import { useContext } from "react";
import { useParams } from "react-router-dom"
import { MenuContext } from "../context/MenuProvider";



const Pizzas = () => {

  const {menu} = useContext(MenuContext);

  const {id} = useParams();

  const pizzaArray = menu.find(i => i.id === id);

  return (
    <div><div>
    <div className="card mb-3" > 
<div className="row g-0"> 
    <div className="col-md-6"> 
    <h1>{pizzaArray.name}</h1>
    <br/>
    <img
    src={pizzaArray.img} alt={pizzaArray.name} width={400} /> 
    </div> 
    <div className="col-md-6"> 
        <div className="card-body"> 
            <h5 className="card-title"> 
            {pizzaArray.desc}
            </h5> 
            <h3>Ingredientes:</h3>
            <li className="list-group-item"><ul>
                <li><h4>{pizzaArray.ingredients[0]}</h4></li>
                <li><h3>{pizzaArray.ingredients[1]}</h3></li>
                <li><h3>{pizzaArray.ingredients[2]}</h3></li>
                <li><h3>{pizzaArray.ingredients[3]}</h3></li>
            </ul></li>

        </div> 
    </div> 
</div> 
</div> 
  </div></div>
  )
}

export default Pizzas
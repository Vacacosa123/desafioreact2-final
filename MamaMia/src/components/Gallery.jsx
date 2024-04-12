import { useContext} from "react"
import { MenuContext } from "../context/MenuProvider"
import { useNavigate } from "react-router-dom";




const Gallery = () => {
    

    const navigate = useNavigate();
    const onHandleChangue = (search) =>{
      navigate(`/Pizza/${search}`)
    }

    const {menu, addPizza, lowPizza} = useContext(MenuContext);


  return (
    <div className="gallery grid-columns-4 p-3">
        {menu.map((i) => (<div key={i.id}>
          
             <div className="card" width={200}>
             <ul className="list-group list-group-flush">
             <li className="list-group-item"><img src={i.img}  alt="..." width={200} height={200} /></li>
             <li className="list-group-item"><h4 onClick={() =>onHandleChangue(i.id)}>{i.name}</h4></li>
             <li className="list-group-item"><ul>
                <li>{i.ingredients[0]}</li>
                <li>{i.ingredients[1]}</li>
                <li>{i.ingredients[2]}</li>
                <li>{i.ingredients[3]}</li>
            </ul></li>
             <div className="buttonpad"><button onClick={() => lowPizza(i)}>-</button><h5> {i.price} </h5><button onClick={() => addPizza(i)}>+</button></div>
              </ul>
            </div>
            </div>))}
    
  </div>
  )
}

export default Gallery
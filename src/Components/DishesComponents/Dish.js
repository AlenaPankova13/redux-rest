import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";

const Dish = ({dish}) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    return (
        <div>
           <h2>{dish.name}</h2>
           <img src={`./${dish.img}.jpg`} width='500px' alt='food'/>
           <p>$ {dish.price}</p>
           <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
           <button className="button-cart" onClick={() => {dispatch(addItemToCart({dish, quantity}))}}>Add to cart</button>
        </div>
    )
}

export default Dish;
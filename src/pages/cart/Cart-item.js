import React,{useContext} from 'react'
import {ShopContext} from '../../context/Shop-context'

const CartItem = ({data}) => {
    const{id,productName,price,productImage}=data;
    const{cartItems,addToCart,removeFromCart,updateCartItemCount}=useContext(ShopContext)
  return (
    <div className="cartItem">
        <img src={productImage} alt="img"/>
        <div className="description CART-DESC">
            <p><b>{productName}</b></p>
            <p className="price">RS {price}</p>
            <div className="countHandler">
              <button onClick={()=>removeFromCart(id)}>-</button>
              <input value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)}/>
              <button onClick={()=>addToCart(id)}>+</button>
            </div>
        </div>                                                                                                                                                                                                                                                                          
    </div>
  )
}

export default CartItem                                                                                                                                                                                                                                                                                                                                                                                                                                 
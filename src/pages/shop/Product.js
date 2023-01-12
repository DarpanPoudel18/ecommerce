import React,{useContext} from 'react'
import {ShopContext} from '../../context/Shop-context'


const Product = ({data}) => {
    const{id,productName,price,productImage}=data;
    const {addToCart,cartItems} = useContext(ShopContext)
    
    const cartItemAmount = cartItems[id]
  return (
    <div className="product">
   
        <img src={productImage} alt="img"/>
        <div className="description">
            <p><b>{productName}</b></p>
            <p>RS.{price}</p>
        </div>
       
        <button className="addToCartBttn" onClick={()=>addToCart(id)}>ADD To Cart{cartItemAmount>0&&<> ({cartItemAmount})</>}</button>
        
    </div>
  )
}

export default Product
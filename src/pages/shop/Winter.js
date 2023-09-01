import React,{useState,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import { ShopContext } from '../../context/Shop-context';
import { PRODUCTS } from '../../products'
import { Button, notification, Space } from 'antd';
import './shop.css'

const Winter = () => {

    const[state,setState]=useState([])
   const {addToCart,cartItems} = useContext(ShopContext)

    const navigate = useNavigate();

    function filterCategory(){
        let res =   PRODUCTS.filter((item)=> item.category==='winter')
         setState(res)
         }

         React.useEffect(()=>{ 
           filterCategory(); 
          }
         ,[])


         const [api, contextHolder] = notification.useNotification();
         const openNotificationWithIcon = (type) => {
           api[type]({
             message: 'Dear user your item has been',
             description:
               'added to Cart.',
           });
         };



  return (
    <div>

                {contextHolder}
            <span className="winter-title" >Winter Essentials</span>
            <div className="winter-shopmore">
            <button className="shop-btn" onClick={()=>navigate("/topbrands")}>SHOP MORE</button>
            </div>
         <div className="winter">
           {state.map((data)=>{
                
            return(
            <div className="winter-item">
                <img src={data.productImage} alt="img"  />
            <Button type="primary"
            onClick={()=>{addToCart(data.id)
                openNotificationWithIcon('success') }} >Add to cart</Button>

            </div>
            )
            })}

       </div>
    
    
    </div>
  )
}

export default Winter
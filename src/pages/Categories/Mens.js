import React,{useState,useContext} from 'react'
import {ShopContext} from '../../context/Shop-context'
import {PRODUCTS} from '../../products'
import { Button, notification, Space } from 'antd';

const Mens = () => {
  const[state,setState]=useState([])
  const {addToCart,cartItems} = useContext(ShopContext)
  const [isLoading, setIsLoading] = useState(true); 

    function filterCategory(){
    let res =   PRODUCTS.filter((item)=> item.category==='menfashion')
     setState(res)
     }

   
    React.useEffect(()=>{ 
      setIsLoading(true)
     filterCategory(); 
     setIsLoading(false)
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
    <div className="totalitems">({state.length} items)</div> 

        <div className="mens">
            {isLoading?
            <h1 className="loader">LOADING...</h1>
            :
            <>

            {state.map((data)=>{

              return(
                <div className="men">
                  <img src={data.productImage} alt="img"  />
                  <div className="description">
                <p><b>{data.productName}</b></p>
                  <p>RS {data.price}</p>
                </div>
                
                <Button type="primary"
                onClick={()=>{addToCart(data.id)
                  openNotificationWithIcon('success') }} >ADD To Cart</Button>

                </div>
              )
              })}
            </>
            }
        </div>
    
    </div>
  )
}

export default Mens
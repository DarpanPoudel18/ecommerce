import React,{useState,useContext} from 'react'
import {ShopContext} from '../../context/Shop-context'
import {PRODUCTS} from '../../products'
import { Button, notification, Space } from 'antd';
import { Alert, Spin } from 'antd';
import Sports from '../Categories/Sports'




const Test = () => {
        const[search,setSearch]=useState('')
        const [isLoading, setIsLoading] = useState(true);
       
        const[state,setState]=useState([])
        const {addToCart,cartItems} = useContext(ShopContext)

     
//newly added
        const[flashsale,setFlashSale]=useState([])


        function filterFlashSale(){
          let res =   PRODUCTS.filter((item)=> item.category==='topbrands')
           setFlashSale(res)
          }
//newly added exit




    const searchItem =  PRODUCTS.filter((item)=>{
          return search.toLowerCase() === '' 
          ? item
          : item.productName.toLowerCase().includes(search.toLowerCase())
        })  
        console.log('searched item',searchItem)




        function filterCategory(){
        let res =   PRODUCTS.filter((item)=> item.category==='electronics')
         setState(res)
        }
        
      
                React.useEffect(()=>{ 
                    setIsLoading(true)
                  filterCategory(); 
                  filterFlashSale();
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

<input type="text" onChange={(e)=>setSearch(e.target.value)} style={{position:'relative'}}/>



<div >
  
  <div >

  <div >
    {/* {flashsale.map((item)=>{
      return(
        <div className='test2'>
        <img src={item.productImage} alt="img"  />
                  <div className="description">
                 <p><b>{item.productName}</b></p>
                   <h5 >${item.price}</h5>
                </div>
        </div>
      )
    })} */}
  </div>
  </div>
</div>


   <div className="electronics">   
            <div>
           {isLoading ?  
            <h1 className="loader"> LOADING...</h1>
            : 
             <>
           {searchItem.map((data)=>{
               return(
                 <div className="electronic" key={data.id}>
                 <img src={data.productImage} alt="img"  />
                  <div className="description">
                 <p><b>{data.productName}</b></p>
                   <p>${data.price}</p>
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
       

    </div>
  )
}

export default Test
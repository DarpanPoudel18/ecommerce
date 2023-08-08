import React, { useState,createContext,useEffect } from 'react'
import { PRODUCTS } from '../products'
import Item from 'antd/es/list/Item'

export const ShopContext = createContext(null)

const getDefaultCart=()=>{
    let cart={}
    for(let i=1; i<PRODUCTS.length+1; i++){
        cart[i]=0
    }
    return cart
}



export const ShopContextProvider = (props) => {
    const savedCart = localStorage.getItem('cart');
    const initialCartItems = savedCart ? JSON.parse(savedCart) : getDefaultCart();
    const[cartItems,setCartItems]=useState(initialCartItems)

    // const[cartItems,setCartItems]=useState(getDefaultCart())

    
   
    const getTotalCartAmount=()=>{
        let totalAmount = 0
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = PRODUCTS.find((product)=> product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount
    }

   
 
    const addToCart=(itemId)=>{
        setCartItems((prev)=> ({...prev, [itemId]: prev[itemId]+1}))
    }

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=> ({...prev, [itemId]: prev[itemId]-1}))
    }

    const updateCartItemCount=(newAmount,itemId )=>{
        setCartItems((prev)=>({...prev,[itemId]:newAmount}))
    }



    // Save cart items to local storage whenever cartItems change
    useEffect(()=>{
       localStorage.setItem('cart',JSON.stringify(cartItems)) 
    },[cartItems])



useEffect(() => {
    // Load cart items from local storage if available
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);




    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount}
   
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}   

















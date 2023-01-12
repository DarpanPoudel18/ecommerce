import React, { useState,createContext,useEffect } from 'react'
import { PRODUCTS } from '../products'

export const ShopContext = createContext(null)

const getDefaultCart=()=>{
    let cart={}
    for(let i=1; i<PRODUCTS.length+1; i++){
        cart[i]=0
    }
    return cart
}

// new changes
// const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'))
// new changes ends

export const ShopContextProvider = (props) => {
    // const[cartItems,setCartItems]=useState(getDefaultCart()) old code
    const[cartItems,setCartItems]=useState(getDefaultCart())

    // new changes
    // useEffect(()=>{
    //    localStorage.setItem('cart',JSON.stringify(cartItems)) 
    // },[cartItems])
   // new changes ends
   
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

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount}
   
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}   


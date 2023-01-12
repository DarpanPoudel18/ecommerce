import React,{useState} from 'react'
import './account.css'
import Login from './Login'
import Signup from './Signup'



const Account = () => {
 

  return (
    <div>
   

    <div className="account">
        <Signup/>
        <Login/>  
    </div>
  

     </div>
  )
}

export default Account
import React,{useState,useContext} from 'react'
import {Link} from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
import vector from '../../src/images/vector.svg'
import './Navbar.css'

import { UserOutlined,HomeOutlined,createFromIconfontCN} from '@ant-design/icons';
import { Button,  Input, Space,  notification,} from 'antd';
import Account from '../pages/MyAccount/Account'



const Navbar = () => {
  const { Search } = Input;
  const[search,setSearch] = useState('')

  const onSearch = (value) => console.log(value);


  return (
    
       <div className="navbar">
        
            <Space>
           <Search placeholder="Search for products, brands and shops!!!!!!!!!!" 
           onChange={onSearch} enterButton
           className="searchbar" />
          </Space>



           <div className="links">
           <Link to="/account">
            <button className="ACCOUNT-BTN" onClick={()=>Account()}><UserOutlined className='account-logo'/>  Account</button>
            </Link>
         
           <Link to="/">
           <HomeOutlined className='home-logo' />
           </Link>

           <Link to="/cart">
           <ShoppingCart className='cart-logo'/>
          </Link>

        <img src={vector} alt="img" className="vector-img"/>
      </div>

          

    </div>
  )
}

export default Navbar
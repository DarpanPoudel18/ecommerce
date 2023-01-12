import React from 'react'
import {PRODUCTS} from '../../products'
import Maincarousel from './Maincarousel'
import Product from './Product'
import "./shop.css"

import Topbrands from '../Categories/Topbrands'
import Topdeals from './Topdeals'
import Winter from './Winter'
import Services from './Services'

const Shop = () => {
  return (
    <div className="shop">
        <Maincarousel/>
       <div className="banners" >
       <Topdeals/>
       <Winter/>
       <Services/>
       </div>
        {/* <div className="products">
            {PRODUCTS.map((product)=> (

            <Product data={product}/>
            ))}
        </div> */}
    </div>
  )
}

export default Shop

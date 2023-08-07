import React from 'react'
import './categories.css'
import {Link,NavLink} from 'react-router-dom'



const Categories = () => {
  return (
    <div className="categories">
 
     <div className="cat-links">
     <NavLink to="/electronics">Electronics</NavLink>
     <NavLink to="/homeandliving">Home & Living</NavLink>
     <NavLink to="/mens">Men's Fashion</NavLink>
     <NavLink to="/sports">Sports</NavLink>
     <NavLink to="/topbrands">Top brands</NavLink>
     <NavLink to="/womens">Women's Fashion</NavLink>

    
     {/* <Link to="/test">Test</Link> */}
       </div>

     </div>
  )
}

export default Categories
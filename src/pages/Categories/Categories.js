import React from 'react'
import './categories.css'
import {Link} from 'react-router-dom'



const Categories = () => {
  return (
    <div className="categories">
     <div className="cat-links">
     <Link to="/electronics">Electronics</Link>
     <Link to="/homeandliving">Home & Living</Link>
     <Link to="/mens">Men's Fashion</Link>
     <Link to="/sports">Sports</Link>
     <Link to="/topbrands">Top Brands</Link>
     <Link to="/womens">Women's Fashion</Link>
     {/* <Link to="/test">Test</Link> */}
       </div>

     </div>
  )
}

export default Categories
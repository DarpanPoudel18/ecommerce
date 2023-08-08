import React from 'react'
import Maincarousel from './Maincarousel'
import Topdeals from './Topdeals'
import Winter from './Winter'
import Services from './Services'
import "./shop.css"
import Footer from '../../components/Footer/Footer'


const Shop = () => {

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    });
  }, [2000]);

  return (
    <div className="shop">

    {isLoading ? ( // Conditionally render Loader or content
   <>
   <h1 className="shoploader"></h1>
 
   </>
    
  ) : (
    <>
      <Maincarousel />
      <div className="banners">
        <Topdeals />
        <Winter />
        <Services />
      </div>
      <Footer/>
    </>
  )}


       
       
    </div>
  )
}

export default Shop




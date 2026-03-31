
import { Suspense, useState } from 'react';
import './App.css'
import Main from './navbar/mainPage/Main';
import Navbar from './navbar/Navbar';
import CountingBanner from './Counting/CountingBanner';
import Feature from "./Card/Feature"
import CardApi from "./Card/CardApi"
import CardAvter from './Card/CardAvter';
import PricingCard from "./Card/PricingCard"
  import { ToastContainer, toast } from 'react-toastify';
  import Footer from "./footer/Footer"

  
function App() {
  // tab ar jnno state nibo;;
  const[tabState,setTabState]=useState("Products")


  //   CART PASS KORAR JNNO AITA STATE:
    const [cart, setCart] = useState([]); 
  
  

  return (
    <>
    <Suspense fallback={<span className="loading loading-infinity loading-lg"></span>} >
      <Navbar cart={cart}></Navbar>
      <Main></Main>
      <CountingBanner></CountingBanner>
      <Feature></Feature>
    <div className='flex items-center justify-center mt-10 gap-3'>
        <button onClick={()=>setTabState('Products')}
         className={`btn text-xl ${tabState==="Products" ?"btn-primary rounded-2xl":"btn-neutral rounded-2xl"}`}>
        Products
      </button>
<button onClick={()=>setTabState('Cart')}
         className={`btn  text-xl ${tabState==="Cart" ?"btn-primary rounded-2xl":"btn-neutral rounded-2xl"}`}>
        Cart
        </button>

    </div>



      <CardApi
      tabState={tabState}
      setTabState={setTabState}
      toast={toast}
      setCart={setCart}
      cart={cart}
      ></CardApi>
      <CardAvter></CardAvter>
      <PricingCard></PricingCard>
      <ToastContainer />
<Footer></Footer>
    </Suspense>

    </>
  )
}

export default App


import { Suspense } from 'react';
import './App.css'
import Main from './navbar/mainPage/Main';
import Navbar from './navbar/Navbar';
import CountingBanner from './Counting/CountingBanner';
import Feature from "./Card/Feature"
import CardApi from "./Card/CardApi"
function App() {
  

  return (
    <>
    <Suspense fallback={<span className="loading loading-infinity loading-lg"></span>} >
      <Navbar></Navbar>
      <Main></Main>
      <CountingBanner></CountingBanner>
      <Feature></Feature>
      <CardApi></CardApi>
    </Suspense>

    </>
  )
}

export default App

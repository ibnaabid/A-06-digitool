
import { Suspense } from 'react';
import './App.css'
import Main from './navbar/mainPage/Main';
import Navbar from './navbar/Navbar';
import CountingBanner from './Counting/CountingBanner';
function App() {
  

  return (
    <>
    <Suspense fallback={<span className="loading loading-infinity loading-lg"></span>} >
      <Navbar></Navbar>
      <Main></Main>
      <CountingBanner></CountingBanner>
    </Suspense>

    </>
  )
}

export default App

import React, { useContext, useEffect } from 'react';
import Navbar from "./Navbar.jsx"
import Footer from './Footer.jsx'
import Cards from './Cards.jsx'
import { ContextApp } from './contextapi/ContextApp.jsx';


const App = () => {

const {fetchblogdata} = useContext(ContextApp)
//called fetch data function inside useEffect
  useEffect(()=>{
    fetchblogdata();
  },[])
  return (
    <div>
      <Navbar/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;

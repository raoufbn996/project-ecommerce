import React from 'react';
import {Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'
import { Man } from './pages/Man';
import { Woman } from './pages/Woman';
import { Electronics } from './pages/Electronics';
import { Jewerly } from './pages/Jewerly';



const App = () => {
  return <div className='overflow-hidden'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/Man' element={<Man/>}/>
        <Route path='/woman' element={<Woman/>}/>
        <Route path='/electronics' element={<Electronics/>}/>
        <Route path='/jewerly' element={<Jewerly/>}/>
      </Routes>
      <Sidebar/>
      <Footer/>
  </div>;
};
export default App;

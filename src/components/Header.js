import React,{useContext, useEffect, useState} from 'react';
import {SidebarContext} from '../contexts/SidebarContext';
import {BsBag} from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const {isOpen,setIsOpen}= useContext(SidebarContext);
  const {itemAmount}= useContext(CartContext);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
  <header className={`${isActive? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
        <div className='container mx-auto flex items-center justify-between h-full'>
          <Link to={'/'}>
            <div>
              <img src={Logo} alt="" className='w-[40px]' />
            </div>
          </Link>
          <div className=' flex gap-x-2 sm:gap-x-4 md:gap-x-8 '>
            <div><Link to={"/man"}>Man</Link></div>
            <div><Link to={"/woman"}>Woman</Link></div>
            <div><Link to={"electronics"}>Electronics</Link></div>
            <div><Link to={"jewerly"}>Jewerly</Link></div>
          </div>
        <div onClick={()=> setIsOpen(!isOpen)} className='cursor-pointer flex relative '>
        <BsBag className='text-2xl'/>
        <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
          {itemAmount}
          </div>
        </div>
        </div>
  </header>
  
  )
};

export default Header;

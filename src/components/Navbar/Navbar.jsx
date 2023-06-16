import React, { useState } from 'react'
import './Navbar.scss'
import { images } from '../../constants/index'
import {HiMenuAlt4,HiX} from 'react-icons/hi';
import { motion} from 'framer-motion';
// import logo from '../../assets/logo.png'
import { User, useAuth0 } from '@auth0/auth0-react';
const Navbar = () => {
  const [toggle,setToggle] = useState(false);
  const { loginWithRedirect } = useAuth0();
  const { logout ,isAuthenticated } = useAuth0();

  return (
    <nav className='app__navbar '>
        <div className='app__navbar-logo'>
            <img src = {images.logo} className='logok' alt = "logo"/>
        </div>
        <ul className='app__navbar-links '>
            {['Start learning','Courses', 'About us'].map((item)=>(
             <li className='app__flex p-text' key={`link-${item}`}>
                <div/>
                <a href={`#${item}`}>{item}</a>
             </li>
            ))}
    </ul>
    <div className='logo'>
    <li >{isAuthenticated && <p style={{color:'white'}}>Hello {User.name}</p> }</li>

            {isAuthenticated ?(<div className='buton'><button className='logo-m' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button></div> ):(

        <div className='buton'> <button className='logo-m' onClick={() =>loginWithRedirect()}>Log In</button>
         </div>)} 
        
    </div>
  

     <div className='app__navbar-menu' >
        <HiMenuAlt4 onClick={()=>setToggle(true)} style={{color:'white'}}/>

        {toggle && (
            <motion.div
            
            whileInView={{x:[300,0]}}
            transition={{duration:0.85,ease:'easeOut'}}>
                <HiX onClick={()=>setToggle(false)}/>
                <ul>
                {['start learning','Courses','About us'].map((item)=>(
             <li  key={item}>
              
                <a href={`#${item}`} onClick={()=>setToggle(false)}>{item}</a>
               
             </li>

             
            ))}
               {/* <div className='m-menu'
       {isAuthenticated && <p style={{color:'black'}}>Hello {User.name}</p>}
       {isAuthenticated ? (<div ><button  onClick={() => logout({ logoutParams: { returnTo: window.location.origin }})}>logout</button></div>):
       (  <button  onClick={() =>loginWithRedirect()}>Log In</button>
       )} 
       </div> */}
       {/* <div></div> */}
       {isAuthenticated && <p style={{marginLeft:'12px',marginTop:'12px',color:'black'}}>Hello {User.name}</p>}
       {isAuthenticated ? (<></>):
       (  <button className='m-menu'  onClick={() =>loginWithRedirect()}>Log In</button>
       )} 
            </ul>
            {/* <div className='m-menu'
       {isAuthenticated && <p style={{color:'black'}}>Hello {User.name}</p>}
       {isAuthenticated ? (<div ><button  onClick={() => logout({ logoutParams: { returnTo: window.location.origin }})}>logout</button></div>):
       (  <button  onClick={() =>loginWithRedirect()}>Log In</button>
       )} 
       </div> */}
          
            </motion.div>
        )}
     </div> 


    </nav>
  )
}

export default Navbar

import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const Navbar = () => {
    const [nav,setNav] = useState(false)
    return ( 
       
            
                <div className="navbar">
                    <img src="/img/logo.svg" alt=""/>
                    <div className="nav-links">
                        <p>Home</p>
                        <p>Features</p>
                        <p>Pricing</p>


                    </div>
                    <button>Sing Up</button>


                    <div className="toggle"><MenuIcon  onClick={()=>setNav(!nav)}/></div>
                    <div className={nav ? "toggle-menu show-toggle" : "toggle-menu"}>
                        <div className="cross"><CloseIcon onClick={()=>setNav(!nav)}/></div>

                        <div className="toggle-links">
                        <p>Home</p>
                        <p>Features</p>
                        <p>Pricing</p>
                        </div>


                    </div>
                </div>
        
           
               
        
     );
}
 
export default Navbar;
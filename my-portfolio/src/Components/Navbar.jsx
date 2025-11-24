import React from "react";
import Logo from "../assets/pfp.jpg";
import { RiMenuLine } from "react-icons/ri";
import { useState } from "react";
import OverlayMenu from "./OverlayMenu";



const Navbar = () => {

   const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="  top-0 left-0 w-full h-20 flex  justify-between items-center px-6 py-4 
     bg-transparent z-50 mb-6  ">
      <div className="  justify-self px-4 sm:px-6 lg:px-8 items-center">
        <h4  className="playwrite-nz-guides-regular font-bold text-5xl shadow-xl">PV</h4>
      </div>

      <div className="menu ">
       <button onClick={()=>setOpenMenu(true)} className="text-white text-4xl " >
      <RiMenuLine />
       </button>
      </div>

       <OverlayMenu isOpen={openMenu} onClose={()=>setOpenMenu(false)} />

    </nav>
  );
};

export default Navbar;

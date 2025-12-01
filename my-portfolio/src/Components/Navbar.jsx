import React, { useState, lazy, Suspense } from "react";
import { RiMenuLine } from "react-icons/ri";

// Lazy-load the overlay menu (framer-motion heavy) to keep the main bundle small.
const OverlayMenu = lazy(() => import("./OverlayMenu/OverlayMenu"));

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav
      className="  top-0 left-0 w-full h-20 flex  justify-between items-center px-6 py-4  bg-transparent z-50 mb-6  "
      id="navbar"
    >
      <div className="  justify-self px-4 sm:px-6 lg:px-8 items-center">
        <a href=" ">
          <h4 className="playwrite-nz-guides-regular font-bold text-5xl shadow-xl">PV</h4>
        </a>
      </div>

      <div className="menu ">
        <button onClick={() => setOpenMenu(true)} className="text-white text-4xl ">
          <RiMenuLine />
        </button>
      </div>

      {/* OverlayMenu is lazy-loaded; show nothing while loading */}
      <Suspense fallback={null}>
        <OverlayMenu isOpen={openMenu} onClose={() => setOpenMenu(false)} />
      </Suspense>
    </nav>
  );
};

export default Navbar;

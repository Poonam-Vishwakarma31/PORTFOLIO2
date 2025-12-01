import { useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";

import "./OverlayMenu.css";

export default function OverlayMenu({ isOpen, onClose }) {
  const overlayRef = useRef(null);
  useEffect(() => {
    if (isOpen && overlayRef.current) {
      // Force reflow to restart animation if needed
      overlayRef.current.offsetHeight;
      overlayRef.current.classList.add("open");
      overlayRef.current.classList.remove("closed");
    } else if (overlayRef.current) {
      overlayRef.current.classList.remove("open");
      overlayRef.current.classList.add("closed");
    }
  }, [isOpen]);

  const menuItems = [
    "Home",
    "About",
    "Projects",
    "Skills",
    "Education",
    "Contact",
  ];

  return isOpen ? (
    <div
      ref={overlayRef}
      className="overlay-menu closed"
      onAnimationEnd={e => {
        if (!isOpen && overlayRef.current) {
          overlayRef.current.classList.remove("closed");
        }
      }}
    >
      {/* cross button to close the menu */}
      <div
        className="absolute top-6 right-6 text-white text-4xl cursor-pointer"
        onClick={onClose}
      >
        <FiX />
      </div>

      {/* Overlay content */}
      <ul className="list-none text-center space-y-2">
        {menuItems.map((item, index) => (
          <li
            key={item}
            className="text-white font-bold w-full justify-center items-center cursor-pointer hover:text-[#FFB400] transition duration-300 overlay-fadein"
            style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            onClick={onClose}
          >
            <a href={`#${item.toLowerCase()}`} className="text-3xl">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
}

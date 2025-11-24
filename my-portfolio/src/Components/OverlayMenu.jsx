import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

export default function OverlayMenu({ isOpen, onClose }) {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div className="fixed inset-0 w-full h-screen flex justify-center items-center z-50"
           initial={{ clipPath: "circle(0% at 100% 0%)" }}
           animate={{ clipPath: "circle(150% at 50% 50%)" }}
           exit={{ clipPath: "circle(0% at 100% 0%)" }}
           transition={{ duration: 0.5, ease: "easeInOut" }}
           style={{backgroundColor: "rgba(0,0,0,0.95)"}}
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
               {[
              "Home",
              "About",
              "Projects",
              "Skills",
              "Education",
              "Contact",
            ].map((item, index) => {
              return (
                <motion.li
                  key={item}
                  initial={{opacity:0,y:20}}
                  animate={{opacity:1,y:0}}
                  transition={{delay:0.3+index* 0.1 }}
                  className="text-white font-bold  w-full justify-center items-center cursor-pointer hover:text-[#FFB400] transition duration-300"
                  onClick={onClose}
                >
                  <a 
                   href={`#${item.toLowerCase()}`}
                  className="text-3xl " >{item}</a>
                </motion.li>
              );
            })}
              </ul>
           
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

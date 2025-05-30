import { useState ,useEffect } from "react";
import {FaTimes ,FaBars} from "react-icons/fa"
import { LINKS } from "./data";
import {AnimatePresence,motion} from 'framer-motion'

const Navbar = () => {

    const [isOpen , setIsOpen] =useState(false);

    const toggleMenu=()=>{
        setIsOpen(!isOpen)
    }

    useEffect(()=>{

        if(isOpen){
            document.body.style.overflow="hidden";

        }else{
            document.body.style.overflow="auto"
        }
    },[isOpen])

    const containerVariants={

      hidden:{opacity:0 , y:"-100%"},
      visible:{opacity:1 , y:0 ,
        transition:{
          staggerChildren:0.3
        }
      }
    }

    const linkVariants={
      hidden:{opacity:0 , y:-50},
      visible:{opacity :1 , y:0}
    }

  return (
    <>
      <nav className="fixed right-0 top-0 z-30 p-4">
        <button onClick={toggleMenu} className="rounded-md p-2">
          {isOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className=" fixed inset-3 flex flex-col items-center
             pt-5 bg-black  text-white "
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
          >
            <ul className="space-y-6  text-2xl ">
              {LINKS.map((link) => {
                return (
                  <motion.li variants={linkVariants} key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={toggleMenu}
                      className="  font-semibold uppercase tracking-wide hover:text-lime-300 lg:text-6xl"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
            {LINKS.name}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar

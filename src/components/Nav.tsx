import { useState } from "react"
import Menu from "./Menu"
import "../views/nav.css"
import { motion } from "framer-motion"
import Links from "./Links"

const variants = {
  open: {
    width: "100vw",
    height: "100vh",
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1]
  }
  },
  closed: {
    width: "0px",
    height: "0px"
  }
}

export default function Nav() {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggleDropdown = () => {
        setIsOpen(!isOpen)
      }

  return (
    <nav className="">
      <button 
        className="button" 
        onClick={() => toggleDropdown()}>
          <Menu isOpen={isOpen} setIsOpne={setIsOpen}></Menu>
      </button>
        <motion.ul 
          className="navigation"
          variants={variants}
          animate={ isOpen ? "open" : "closed" }
          initial="closed">
            {isOpen && <Links></Links>}
        </motion.ul>
    </nav>
  )
}

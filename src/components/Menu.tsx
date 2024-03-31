import { motion } from "framer-motion"
import "../views/menu.css"

export default function Menu({isOpen , setIsOpne}: any) {
  return (
    <motion.div  
      animate={isOpen ? "open" : "closed"}
      onClick={() => {setIsOpne(!isOpen)}}
      className='burguer'>
        <motion.div
          variants={{
            open: {
              top: "50%",
              rotate: "45deg",
            },
            closed: {
              top: "8%",
              rotate: "0deg"
            }
          }}
          className='stick-top'></motion.div>
        <motion.div 
          variants={{
            open: {
              opacity: 0
            },
            closed: {
              opacity: 1
            }
          }}
          className='stick-short'></motion.div>
        <motion.div 
          variants={{
            open: {
              bottom: "50%",
              rotate: "-45deg",
            },
            closed: {
              bottom: "8%",
              rotate: "0deg"
            }
          }}
          className='stick-bot'></motion.div>
    </motion.div>
  )
}

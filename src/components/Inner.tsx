import { motion } from "framer-motion";
import "../views/inner.css"

interface InnerProps {
    children: React.ReactNode;
  }
  
export default function Inner({children}: InnerProps) {

    const anim = (variants: any) => {
        return{
            initial: "initial",
            animate: "enter",
            exit: "exit",
            variants
        }
    }

    const opacity = {
        initial: {
            opacity: 0
        },
        enter: {
            opacity: 1
        },
        exit: {
            opacity: 1
        }
    }

    const slide = {
        initial: {
            top: "100vh"
        },
        enter: {
            top: "100vh"
        },
        exit: {
            top: "0",
            transition: {
                duration: 1,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    }
  return (
        <div className="inner">
            <motion.div {...anim(slide)} className="slide"/>
            <motion.div {...anim(opacity)} className="page">
                {children}
            </motion.div>
        </div>
  )
}

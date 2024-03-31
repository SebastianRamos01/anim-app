import { motion } from "framer-motion"
import "../views/links.css"
import { refs } from "../data/data"
import { Link } from "react-router-dom"

const perspective = {
    initial: {
        opacity: 0
    },
    enter: (i: any) => ({
        opacity: 1,
        transition: {
            delay: 0.5 + (i * 0.1)
        }
    }),
    exit: {
        opacity: 0,
    }
}

export default function Links() {
  return (
    <div className="links">
        <div className="body">
            {
                refs.map((ref ,i) => {
                    return (
                    <motion.div
                        variants={perspective} 
                        custom={i}
                        animate="enter"
                        exit="exit"
                        initial="initial"
                        className="list"
                        key={i}>
                        <Link className="link" to={ref.href}>
                            <p className="ref">{ref.title}</p>
                        </Link>
                    </motion.div>)
                })
            }
        </div>
    </div>
  )
}

import { motion } from "framer-motion"
import Header from "../components/Header"
import Inner from "../components/Inner"

const title1 = ["M", "U", "S", "I", "C"]
const title2 = ["I","N","M","E","R","S","I","V","E",]
const title3 = ["E","X","P","E","R","I","E","N","C","E"]

const perspective = {
  initial: {
      opacity: 0
  },
  enter: (i: any) => ({
      opacity: 1,
      transition: {
          delay: 0.4 + (i * 0.1)
      }
  }),
  exit: {
      opacity: 0,
  }
}

export default function Home() {
  return (
    <Inner>
      <main>
        <Header></Header>
        <div className="img-box">
          <img src="images/colors-90.jpeg"></img>
        </div>
        <div className="img-box-vert">
          <img src="images/colors.jpeg"></img>
        </div>
        <h1 className="title">
          <span className="word">
            {title1.map((leter, i) => {
              return <motion.p
                className="leter"
                custom={i}
                animate="enter"
                exit="exit"
                initial="initial"
                variants={perspective} 
                key={i}>{leter}</motion.p>
            })}
          </span>
            <span className="word-mid">
              {title2.map((leter, i) => {
                  return <motion.p
                    className="leter"
                    custom={i}
                    animate="enter"
                    exit="exit"
                    initial="initial"
                    variants={perspective} 
                    key={i}>{leter}</motion.p>
                })}
            </span>
            <span className="word">
            {title3.map((leter, i) => {
              return <motion.p
                className="leter"
                custom={i}
                animate="enter"
                exit="exit"
                initial="initial"
                variants={perspective} 
                key={i}>{leter}</motion.p>
            })}
          </span>
        </h1>
        <footer className="foot">
          <p className="text">
            2024, Ramos Sebastian
          </p>
          <p className="text-link">
            Instagram
          </p>
        </footer>
      </main>
    </Inner>
  )
}

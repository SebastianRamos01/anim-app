import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./routes/Home"
import About from "./routes/About"
import { AnimatePresence } from "framer-motion"

function App() {

  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/:title" element={ <About /> }></Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App

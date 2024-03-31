import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Inner from '../components/Inner'
import { refs } from '../data/data'
import '../views/about.css'

export default function About() {
  const { title } = useParams()

  const ref = refs.find((e) => 
    e.title === title?.toUpperCase()
  )
  return (
    <Inner>
        <Header></Header>
      <div className='about'>
        <div className='body'>
          <div className='title'>
            {ref?.title}
          </div>
          <p className='text'>
            {ref?.description}
          </p>
        </div>
        <div className='img'>
          <img src={`/images/${ref?.img}`} alt="imge" />
        </div>
      </div>
    </Inner>
  )
}

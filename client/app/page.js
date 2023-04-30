import Image from 'next/image'
import styles from './styles/home.module.css'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className = {styles.home}>
        <div className = {styles.bg}>
      </div>
    </div>
    </div>
  )
}

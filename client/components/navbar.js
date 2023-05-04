import styles from '../app/styles/navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return ( 
    <nav className={styles.navbar}>
      <h1 className={styles.siteTitle}>Pantry</h1>
      <div className = {styles.links}>     
          <Link href = "/" className = {styles.navbarButtons}> Home </Link>
          <Link href = "/about" className = {styles.navbarButtons}> About </Link>
          <Link href = "/foods" className = {styles.navbarButtons}> Foods </Link>
      </div>
    </nav>
   );
}
 
export default Navbar;
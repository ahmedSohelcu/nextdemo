import Link from 'next/link'
import styles from "../styles/blog.module.css";
import Image from 'next/image'

const Layout = ({children})=>{
  return (
    <div>
      <header className={styles.header}>
        <br/>
        <Image src="/vercel.svg" alt ="Vercel Logo" width = { 100 } height = { 50 }/>  
        {/* <div className={styles.headerCartIcon}>
          5
        </div>   */}
        <ul className={styles.menu}>            
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
        </ul>
      </header>
        {children}
      <footer>
      <h2>Footer From layout page </h2>
      </footer>
    </div>
  );
}

export default Layout;
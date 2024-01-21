import Link from "next/link";
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li><Link href="/" className={styles.link}>Home</Link></li>
        <li><Link href="/services" className={styles.link}>Services</Link></li>
        <li><Link href="/products" className={styles.link}>Products</Link></li>
        <li><Link href="/about" className={styles.link}>About</Link></li>
        <li><Link href="/contact" className={styles.link}>Contact Us</Link></li>
      </ul>

      <Link href="/products/veggies"><h5>Vegie Products</h5></Link>

      <Link href="https://www.w3schools.com/" target="_blank" id={styles.speciallink}><h3>W3 School</h3></Link>
    </div>
  );
}

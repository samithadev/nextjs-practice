import Link from "next/link";
import styles from './page.module.css'
import Image from "next/image";
import img1 from '../../public/web1.png'
import Button from "./(components)/Button";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <Button/>

      <Image src={img1} alt="sample img" className={styles.img}/>

      <Image src={"https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}  alt="remote img" className={styles.img} width={1000} height={1000}/>

      <Image src={"https://images.pexels.com/photos/18509061/pexels-photo-18509061/free-photo-of-woman-holding-lantern-in-the-evening.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"}  alt="remote img" className={styles.img} width={1000} height={1000}/>


      <p className={styles.p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel aut provident aliquam at neque animi dolore doloremque ut culpa deserunt nihil odit rem, adipisci numquam fuga reiciendis nesciunt, a cumque.</p>
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

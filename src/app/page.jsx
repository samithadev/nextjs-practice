import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li><Link href="/" >Home</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
      </ul>

      <Link href="/products/veggies"><h5>Vegie Products</h5></Link>

      <Link href="https://www.w3schools.com/" target="_blank"><h3>W3 School</h3></Link>
    </div>
  );
}

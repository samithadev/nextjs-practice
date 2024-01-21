import Link from 'next/link'
import React from 'react'
import style from './contact.module.css'

function page() {
  return (
    <div>
        <h3><Link href="/" className={style.link}>Home</Link></h3>
        <h1>Contact Us</h1>
    </div>
  )
}

export default page
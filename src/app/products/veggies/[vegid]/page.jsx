import React from 'react'
import Link from 'next/link'

function page({params}) {
  return (
    <div>
        <h1>Veggie item {params.vegid}</h1>

        <Link href="/products/veggies"><h3>Back to Veggies</h3></Link>
    </div>
  )
}

export default page
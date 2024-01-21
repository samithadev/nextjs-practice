import React from 'react'
import Link from 'next/link'

function page() {

  const veggies =[
    {id:1, vegname:"Brocoly"},
    {id:2, vegname:"Pumkin"},
    {id:3, vegname:"Cabage"}
  ]

  return (
    <div>
      <h3><Link href="/">Home</Link></h3>
        <h2>veggies page</h2>

        <ul>
          {
            veggies.map((items) => {
              return(
                <Link href={`/products/veggies/${items.vegname}`}><li>{items.vegname}</li></Link>
              )
            })
          }
        </ul>
    </div>
  )
}

export default page
import React from 'react'

function page({params}) {
  return (
    <div>
        <h1>Veggie item {params.vegid}</h1>
    </div>
  )
}

export default page
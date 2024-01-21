import React from 'react'

function page({params}) {
  return (
    <div>
        <h1>Meat Item {params.id}</h1>
    </div>
  )
}

export default page
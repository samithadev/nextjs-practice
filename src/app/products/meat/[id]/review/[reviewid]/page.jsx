import React from 'react'

function page({params}) {
  return (
    <div>
        <h1>Meat item {params.id} review {params.reviewid}</h1>
    </div>
  )
}

export default page
import React from 'react'

function page({params}) {
  return (
    <div>
        <h3>Catch all routes</h3>

        <ul>
            {params.dpath.map((item)=> {
                return(
                    <li>{item}</li>
                )
            })}
        </ul>
    </div>
  )
}

export default page
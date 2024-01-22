'use client'

import React from 'react'

function Button() {

    const showalert = () => {
        alert("This is client component")
    }
  return (
    <div>
        <button onClick={showalert}>Click me</button>
    </div>
  )
}

export default Button
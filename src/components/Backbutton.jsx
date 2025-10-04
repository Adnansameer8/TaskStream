import React from 'react'
import { useNavigate } from 'react-router-dom'

const Backbutton = () => {
    const navigate = useNavigate();

  return (
   <button onClick={()=>navigate(-1)}>
    🔙
   </button>
  )
}

export default Backbutton

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Redirect({path}) {
    const navigate=useNavigate(path);

    useEffect(() => {
     navigate(path)
    
     
    }, [])
    
  return (
    <div></div>
  )
}

export default Redirect
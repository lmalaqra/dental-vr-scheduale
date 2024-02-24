import React from 'react'
import { useNavigate } from 'react-router-dom'

function Redirect({path}) {
    const navigate=useNavigate(path);
    navigate(path);
  return (
    <div></div>
  )
}

export default Redirect
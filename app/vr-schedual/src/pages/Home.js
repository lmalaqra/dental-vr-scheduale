import React from 'react'
import { checkIfStudentBookedApt, checkIfStudentIsRegister, getUserFromLocalStorage } from '../helper/helper';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import Redirect from '../components/Redirect';
import axios from 'axios';




function Home() {


   
  return (
    <div>
        {checkIfStudentIsRegister()?<Redirect path={'/scheduale'} />:<Login/>}
    </div>
  )
}

export default Home
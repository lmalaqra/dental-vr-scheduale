import React from 'react'
import { checkIfStudentBookedApt, getUserFromLocalStorage } from '../helper/helper';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import Redirect from '../components/Redirect';
import axios from 'axios';




function Home() {
    const getStudentBook=async()=>{

        try{
            const res=await axios.get(`${process.env.REACT_APP_BASE_URL}scheduale/${getUserFromLocalStorage().student_id}`)
            console.log(res)
        }catch(e){
            console.log(e)
        }
    }
    getStudentBook();

   
  return (
    <div>
        {!getUserFromLocalStorage()?<Login/>:getUserFromLocalStorage().registered?<Login/>:!checkIfStudentBookedApt() || checkIfStudentBookedApt()?<Redirect path={'/scheduale'}/>:<div>registered</div>}
    </div>
  )
}

export default Home
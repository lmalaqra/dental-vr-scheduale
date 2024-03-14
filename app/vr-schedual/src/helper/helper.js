import { json } from "react-router-dom";

const getUserFromLocalStorage=()=>{

    return JSON.parse( localStorage.getItem('user'));
}

const setUserInLocalStorage=(user)=>{

    localStorage.setItem('user',JSON.stringify(user));
}
 const checkIfStudentIsRegister=()=>{

    const user=localStorage.getItem('registered');
    if(!user)return false
    return user

 }

const checkIfStudentBookedApt=()=>{


    const isBooked= localStorage.getItem('booked');
    if(!isBooked)return false
    return isBooked;
}

const getStudentIdfromLocalStorage=()=>{

    return localStorage.getItem('student_id');
}
export {getUserFromLocalStorage,setUserInLocalStorage,checkIfStudentBookedApt,checkIfStudentIsRegister,getStudentIdfromLocalStorage}
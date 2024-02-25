import { json } from "react-router-dom";

const getUserFromLocalStorage=()=>{

    return JSON.parse( localStorage.getItem('user'));
}

const setUserInLocalStorage=(user)=>{

    localStorage.setItem('user',JSON.stringify(user));
}
 const checkIfStudentIsRegister=()=>{

    const user=localStorage.getItem('user');
    if(!user)return false
    return JSON.parse(user).registered

 }

const checkIfStudentBookedApt=()=>{


    const isBooked= localStorage.getItem('booked');
    if(!isBooked)return false
    return isBooked;
}
export {getUserFromLocalStorage,setUserInLocalStorage,checkIfStudentBookedApt,checkIfStudentIsRegister}
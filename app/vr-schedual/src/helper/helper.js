const getUserFromLocalStorage=()=>{

    return JSON.parse( localStorage.getItem('user'));
}

const setUserInLocalStorage=(user)=>{

    localStorage.setItem('user',JSON.stringify(user));
}


const checkIfStudentBookedApt=()=>{


    const isBooked= localStorage.getItem('booked');
    if(!isBooked)return false
    return isBooked;
}
export {getUserFromLocalStorage,setUserInLocalStorage,checkIfStudentBookedApt}
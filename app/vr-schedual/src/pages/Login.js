import { useState } from "react";
import axios from 'axios';
import { useNavigate} from "react-router-dom";
import { setUserInLocalStorage } from "../helper/helper";

function Login() {
    const navigate=useNavigate();
  const [student, setStudent] = useState({
    student_id: "",
    name: "",
    email:'',
    state: "",
  });
  const login=async(user)=>{

    try{
const user=await axios.post(`${process.env.REACT_APP_BASE_URL}student/login`,student).then(result=>result.data);
setUserInLocalStorage(user);


navigate('/scheduale');

    }catch(e){
console.log(e)

    }

  }


  return (
    <div className="w-full h-full flex justify-center items-center pt-20 bg-white">
      <div className=" shadow-lg  flex flex-col gap-y-5   text-center pb-10 pt-2 px-8" >
      <img src="./logo.webp" className="w-32 h-32 mx-auto my-5" />
      <h1 className="text-center w-1/2 text-xs mx-auto">DEPARTMENT OF ORAL AND DENTAL MEDICINE</h1>


        <div className="flex border-b  rounded-sm items-center">
         <label className="text-sm w-2/6 text-left ">Student ID </label> <input className="outline-none focus:outline-none  shadow-sm  bg-none bg-transparent border-b border-black"
            name="student_id"
           
            value={student.student_id}
            onChange={(e) => {
              setStudent((prev) => {
                const { name, value } = e.target;
                return { ...prev, [name]: value };
              });
            }}
          />
        </div>{" "}
        <div className="flex items-center gap-x-2 ">
        <label className="text-sm w-2/6 text-left ">Name</label>  <input className="outline-none focus:outline-none  shadow-sm bg-none bg-transparent border-b border-black "
            name="name" 
           
            value={student.name}
            onChange={(e) => {
              setStudent((prev) => {
                const { name, value } = e.target;
                return { ...prev, [name]: value };
              });
            }}
          />
        </div>

        <div className="flex items-center gap-x-2 ">
        <label className="text-sm w-2/6 text-left ">Email</label>  <input className="outline-none focus:outline-none  shadow-sm bg-none bg-transparent border-b border-black "
            name="email" 
           
            value={student.email}
            onChange={(e) => {
              setStudent((prev) => {
                const { name, value } = e.target;
                return { ...prev, [name]: value };
              });
            }}
          />
        </div>
        <div className="flex items-center gap-x-2">
         <labe className="text-sm w-2/6 text-left " >residence</labe> <input className="outline-none focus:outline-none  shadow-sm bg-none bg-transparent border-b border-black "
            name="state"
            value={student.state}
            onChange={(e) => {
              setStudent((prev) => {
                const { name, value } = e.target;
                return { ...prev, [name]: value };
              });
            }}
          />
        </div>
        <button onClick={login} className="px-4 py-2 bg-black text-white rounded-sm"> Continue</button>
      </div>
    </div>
  );
}

export default Login;

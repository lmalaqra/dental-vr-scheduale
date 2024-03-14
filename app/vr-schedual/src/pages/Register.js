import axios from "axios";
import React, { useEffect, useState } from "react";
import { getUserFromLocalStorage,getStudentIdfromLocalStorage } from "../helper/helper";
import { useLoaderData } from "react-router-dom";

function Register() {
  const [slot, setSlot] = useState();

  useEffect(() => {
    const getRegistration = async () => {
      try {
        const slots = await axios
          .get(
            `${process.env.REACT_APP_BASE_URL}scheduale/${
              getStudentIdfromLocalStorage()
            }`
          )
          .then((result) => result.data.scheduale);
        setSlot(slots);
      } catch (e) {
        console.log(e);
      }
    };
    getRegistration();
  }, []);
  const deleteAppointment=async()=>{
    try{
      await axios.delete(`${process.env.REACT_APP_BASE_URL}scheduale?student_id=${getStudentIdfromLocalStorage()}&week=${slot.week}&id=${slot.slots[0].id}`);
      window.location.reload();

    }catch(e){

console.log(e);
    }
  }

  const createDate = () => {
    let date = new Date(slot.start_date);

    date.setDate(date.getDate() + parseInt(slot.slots[0].id / 6));
    console.log(parseInt(slot.slots[0].id / 6));
    return {
      day: date.toLocaleDateString("en-US", { weekday: "short" }),
      date: date.getDate(),
    };
  };

  return (
    <div className="w-2/6  h-full   grow">
      <div className="  shadow-md text-center   relative  bg-white flex flex-col gap-2 ">
        <div className={`w-full px-4 py-2 rounded-sm ${!slot?'bg-red-600':"bg-green-500"} shadow-md   text-white`}>
          VR Session{" "}
        </div>
        {!slot ? (
          <h1 className="font-bold text-lg p-10">You aren't registered yet <h2 className="font-bold text-xl"> Please choose An Appointment</h2> </h1>
        ) : (
          <div className="p-4">
            {" "}
            <h1 className="font-bold text-2xl  ">
              {createDate().date} <span> {createDate().day.toUpperCase()}</span>{" "}
            </h1>
            <h2 className="font-bold text-2xl">{`${
              (slot.slots[0].id % 6) + 8
            }:00 - ${(slot.slots[0].id % 6) + 9}:00`}</h2>

            <button onClick={deleteAppointment} className="mt-6 px-4 py-2 rounded-sm bg-red-600 text-white" >Delete</button>
          </div>
          
        )}
      </div>
    </div>
  );
}

export default Register;

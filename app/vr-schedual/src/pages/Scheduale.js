import React from "react";
import { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import WeekScheduale from "../components/WeekScheduale";
import NewWeekSch from "../components/NewWeekSch";
import axios from "axios";
import {
  checkIfStudentBookedApt,
  getUserFromLocalStorage,
} from "../helper/helper";

function Scheduale() {
  const navigate = useNavigate();
  useEffect(() => {
    if (checkIfStudentBookedApt()) navigate("/");

    return () => {};
  }, []);

  

  const [status, setStatus] = useState({
    loading: false,
    done: false,
    error: false,
  });

  const data = useLoaderData();
  const [index, setIndex] = useState(0);
  const [slot, setSlots] = useState({
    week: "",
    id: "",
  });
  const registerStudent = async () => {
    try {
      setStatus((prev) => ({ loading: true, done: false, error: false }));
      const regSlot = await axios
        .post(process.env.REACT_APP_BASE_URL + "scheduale", {
          student: getUserFromLocalStorage(),
          slot,
        })
        .then((result) => result.data);
      localStorage.setItem("booked", true);
      setStatus((prev) => ({ loading: false, done: true, error: false }));
setTimeout(()=>{

  navigate("/");

},3000)
    } catch (e) {
      setStatus((prev) => ({ loading: false, done: false, error: true }));

      console.log(e);
    }
  };
  return (
    <div>
      <div className="mb-5">
        <div className="flex w-full justify-center items bg-center p-2">
          <img src="./logo.webp " className="w-20 h-20 mr-5" />

          <div>
            <h1 className="text-center text-2xl font-bold  ">
              AN-NAJAH UNIVERSITY{" "}
            </h1>
            <h3 className="text-center text-sm ">
              Department of Oral and Dental Medicine{" "}
            </h3>
          </div>
        </div>
      </div>
      <div className="flex justify-center  ">
        <div className="flex justify-center items-center  border-black   w-2/6 gap-x-4 relative">
          <h1 className="text-2xl font-bold ">{data[index].start_date}</h1>
          <div className=" flex gap-4">
            <button
              disabled={index === 0 ? true : false}
              onClick={() => {
                setIndex((prev) => prev - 1);
              }}
              className="text-5xl  text-slate-800 disabled:text-slate-400"
            >
              &#x3c;
            </button>
            <button
              disabled={index !== 0 ? true : false}
              onClick={() => {
                setIndex((prev) => prev + 1);
              }}
              className="disabled:text-slate-400 text-5xl font-bold"
            >
              &#x3e;
            </button>
          </div>
        </div>
      </div>

      <div className="w-4/6 pb-10 mx-auto">
        {index === 0 ? (
          <NewWeekSch
            registerStudent={registerStudent}
            status={status}
            data={data[0]}
            setSlots={setSlots}
          />
        ) : (
          <NewWeekSch
            registerStudent={registerStudent}
            status={status}
            data={data[1]}
            setSlots={setSlots}
            index
          />
        )}
      </div>
    </div>
  );
}

export default Scheduale;

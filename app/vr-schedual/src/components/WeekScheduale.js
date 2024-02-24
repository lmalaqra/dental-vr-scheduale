import React from "react";
import "./styles/comp.css"

function WeekScheduale({data}) {
    const {slots}=data;
  return (
    <div className="p-2">
    <div>
        <h1 className="text-center m-2 font-bold">VR SESSION Scheduale</h1>
    </div>
    <div className="flex ">
    <div className="w-1/12 flex flex-col ">
    <h1 className=" h-10"> </h1>

    <h1 className="col-cell">SUN </h1>
    <h1 className="col-cell">MON </h1>
    <h1 className="col-cell">TUE </h1>
    <h1 className="col-cell">WED </h1>
    <h1 className="col-cell">THU </h1>





    </div>
    <div className="grow">
      <div className="flex flex-wrap">
        <h1 className="cell  text-left">8:00</h1>
        <h1 className="cell  text-left">9:00</h1>
        <h1 className="cell  text-left">10:00</h1>
        <h1 className="cell  text-left">11:00</h1>
        <h1 className="cell  text-left">12:00</h1>
        <h1 className="cell  text-left">13:00</h1>

      </div>
      <div className="flex flex-wrap  border ">
        {
            slots.map((el,id)=>{

                return <button className="cell text-center h-20 hover:bg-cyan-600 focus:bg-cyan-500">
                    {el.students.length}
                </button>
            })
        }
      </div>
      </div>
      </div>

    </div>
  );
}

export default WeekScheduale;

import React from "react";
import "./styles/comp.css"
import { useSpring, animated } from '@react-spring/web'


function NewWeekSch({ data,setSlots,index }) {
    const spring=useSpring({
        from:{backgroundColor:'grey'},
        to:{backgroundColor:'blue'}
    })

    const CheackIfIsFull=(i,e)=>{


    }
   function timeToNumber(i,e){
    return (i*6)+e
   }

    const findSlotById=(id)=>{
        console.log(data)
        const slot= [...data.slots].find(el=>el.id===id);
        return slot;

    }
 
  const date = new Date(data.start_date);
  const createDate = (date, i) => {
    let k = 0;
    if (i !== 0) {
      k = 1;
    }
    console.log(i);
    date.setDate(date.getDate() + k);
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };

  return (
    <div className=" flex justify-center   ">
      <div className="flex  gap-0  flex justify-center">
        {[...Array(4)].map((el, i) => (
          <div className=" text-center flex flex-col justify-center hover:bg-white  shadow-sm hover:scale-105">
            <div className=" head text-center py-4 border-b bg-slate-400 text-white animatea ">
              <h1 className="text-3xl font-light ">{createDate(date, i)}</h1>
              <h2 className="text-2xl ">{date.getDate()}</h2>
            </div>
<animated.div className={`flex flex-col gap-4 ${index===0?'animatea':'animateb'}` }>
            {[...Array(6)].map((el, e) => {
              return (
                <button onDoubleClick={()=>{
                    setSlots({id:'',week:''})
                }} disabled={findSlotById(timeToNumber(i,e)).full?true:false} onClick={()=>{
                    setSlots({id:timeToNumber(i,e),week:data.week})
                    console.log(timeToNumber(i,e))
                }}  className="focus:bg-slate-300  time  px-10 hover:bg-slate-200 pt-2 disabled:bg-red-200">
                <div className={`w-8 h-4 text-center text-xs shadow-sm  rounded-full ${findSlotById(timeToNumber(i,e)).full?'bg-red-600':'bg-green-600'}  tag`}> VR </div>
                  <div className=" time p-1  font-bold text-md">{`${e + 8}:00 - ${e + 1 + 8}:00`}
                  <h1 className="text-xs text-center font-light ">Registered : {findSlotById(timeToNumber(i,e)).students.length}</h1></div>
                </button>
              );
            })}
            </animated.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewWeekSch;

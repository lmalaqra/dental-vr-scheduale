import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getUserFromLocalStorage } from '../helper/helper'
import { useLoaderData } from 'react-router-dom';

function Register() {
  const slot=useLoaderData();


    const createDate = ( ) => {
  let date = new Date(slot.start_date);


   
      date.setDate(date.getDate() + parseInt(slot.slots[0].id/6));
      console.log(parseInt(slot.slots[0].id/6))
      return {day:date.toLocaleDateString("en-US", { weekday: "short" }),date:date.getDate()};
    };
  
  
  

 
    


  return (<div className='w-full h-full flex justify-center items-center'>
        <div className='w-2/6 p-4 shadow-md text-center mt-32 py-32 relative  bg-white flex flex-col gap-2 '>
        <div className='w-full p-4 rounded-sm bg-green-500 shadow-md absolute top-1 left-0  text-white'>Vr Session </div>
        <h2 className='font-bold text-xl tracking-wide'>{getUserFromLocalStorage().name.toUpperCase()} </h2>

        <h1 className='font-bold text-2xl  '>{createDate().date } <span> {createDate().day.toUpperCase() }</span> </h1>
        <h2 className='font-bold text-lg'>{`${(slot.slots[0].id %6) + 8}:00 - ${(slot.slots[0].id %6) + 9}:00`}</h2>

        </div>
    </div>
  )
}

export default Register
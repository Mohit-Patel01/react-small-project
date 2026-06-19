import React, { useContext, useEffect } from 'react'
import { Authcontext } from '../../context/Authprovider'
import { getLocalStorage } from '../../utils/Localstorage'

const Taskstatus = () => {
  
const today = new Date().toLocaleDateString();
const {employees, admin} = getLocalStorage()
  return (
    <div id='taskstatus' className=' h-133 overflow-scroll w-[50vw] max-sm:w-screen rounded-2xl   flex flex-col gap-5 items-center max-sm:overflow-auto max-sm:h-[60vh] '>
         { 
          employees.map((elem)=>{
         return  elem.tasks.map((val,idx)=>{
          return <div key={idx} className=' shrink-0 w-full bg-lime-500  rounded-2xl flex flex-col gap-2 p-2'>
          <div className='flex justify-between'> 
          <h1 className='bg-red-600 px-1 rounded-[5px] h-fit'>{val.priority}</h1>
          <h1 className='text-lg font-medium'>{val.taskTitle}</h1>
          <h1>Assigned: {today}</h1>
          </div>
          <div>
            <h1>{val.taskDescription} </h1>
          </div>
          <div className='flex justify-between'>
            <h1>To: {elem.name}</h1>
            <h1 className='h-fit'>{val.status}</h1>
            <h1>{val.taskDeadline}</h1>
          </div>
        </div>
          })  
    })}
    </div>
  )
}

export default Taskstatus
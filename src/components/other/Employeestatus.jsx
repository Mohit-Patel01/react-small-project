import React, { useContext } from 'react'
import { Authcontext } from '../../context/Authprovider'

const Employeestatus = () => {
    const data = JSON.parse(localStorage.getItem("employees"))
  return (
    <div className='bg-black p-5 rounded mt-5 h-fit w-screen'>
      <div className='bg-red-400 mb-2 px-2 py-2 flex justify-between rounded '>
        <h1 className='text-lg font-medium w-1/5 max-sm:text-[15px] max-sm:w-1/6 '>Employee Name</h1>
        <h1 className='text-lg font-medium  text-blue-300 w-1/5 max-sm:text-[15px] max-sm:w-1/8 '>New Task</h1>
        <h1 className='text-lg font-medium text-yellow-200 w-1/5 max-sm:text-[15px] max-sm:w-1/10'>Active Task</h1>
        <h1 className='text-lg font-medium text-green-400  w-1/5 max-sm:text-[15px] max-sm:w-fit'>Completed</h1>
        <h1 className='text-lg font-medium text-red-500 w-1/5 max-sm:text-[15px] max-sm:w-1/8'>Failed</h1>
      </div>
      <div className='overflow-auto h-[30vh]' >
          {data.map((elem,idx)=>{
       return <div key={idx} className='bg-black border-2 border-emerald-500 mb-2 px-2 py-2 flex justify-between rounded'> 
       <h1 className='text-lg font-medium w-1/5  max-sm:w-1/2'>{elem.name}</h1>
        <h1 className='text-lg font-medium text-blue-300 w-1/5 max-sm:w-1/3'>{elem.taskCount[0].newTask}</h1>
        <h1 className='text-lg font-medium text-yellow-200 w-1/5  max-sm:w-1/3'>{elem.taskCount[0].active}</h1>
        <h1 className='text-lg font-medium text-green-400 w-1/5  max-sm:w-1/3'>{elem.taskCount[0].completed}</h1>
        <h1 className='text-lg font-medium text-red-500 w-1/5  max-sm:w-1/3'>{elem.taskCount[0].failed}</h1> </div>
          })}
      </div>
    </div>
  )
}

export default Employeestatus

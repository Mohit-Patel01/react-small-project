import React, { useContext } from 'react'
import { Authcontext } from '../../context/Authprovider'

const Taskoverview = ({data}) => {

const userData = JSON.parse(localStorage.getItem("loggedIn"))
  return (
    <div>
    {
      userData.data.taskCount.map((elem, idx)=>{
         return (
         <div key={idx} className='flex screen mt-10 gap-5 justify-between p-8 max-sm:flex-wrap'>
         <div className=' w-[40%] p-10 bg-blue-400 rounded-2xl flex flex-col'>
         <h1>{elem.active}</h1>
         <h1>Active Task</h1>
         </div>
         <div className=' w-[40%] p-10 bg-lime-300 rounded-2xl flex flex-col'>
         <h1>{elem.newTask}</h1>
         <h1>New Task</h1>
         </div>
         <div className=' w-[40%] p-10 bg-amber-300 rounded-2xl flex flex-col'>
         <h1>{elem.completed}</h1>
         <h1>Completed Task</h1>
         </div>
         <div className=' w-[40%] p-10 bg-red-400 rounded-2xl flex flex-col'>
         <h1>{elem.failed}</h1>
         <h1>Failed task</h1>
         </div> </div>
         )
        })
    }
      {/* <div className=' w-[40%] p-10 bg-blue-400 rounded-2xl flex flex-col'>
        <h1>{userData.data.taskCount.active}</h1>
        <h1>Active Task</h1>
      </div>
      <div className=' w-[40%] p-10 bg-lime-300 rounded-2xl flex flex-col'>
        <h1>{userData.data.taskCount.newTask}</h1>
        <h1>New Task</h1>
      </div>
      <div className=' w-[40%] p-10 bg-amber-300 rounded-2xl flex flex-col'>
        <h1>{userData.data.taskCount.completed}</h1>
        <h1>Completed Task</h1>
      </div>
      <div className=' w-[40%] p-10 bg-red-400 rounded-2xl flex flex-col'>
        <h1>{userData.data.taskCount.failed}</h1>
        <h1>Failed task</h1>
      </div> */}
    </div>
  )
}

export default Taskoverview
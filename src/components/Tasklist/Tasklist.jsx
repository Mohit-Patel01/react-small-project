import React from 'react'
import Activetask from './Activetask'
import Completedtask from './Completedtask'
import Failedtask from './Failedtask'
import Newtask from './Newtask'
const Tasklist = ({data, setLoggedInUserData}) => {
  return (
    <div className='px-8'>
    <h1 className='bg-orange-400 w-fit px-2 py-2 rounded-xl text-lg font-medium'>Active Task:</h1>
      <div className='h-fit w-full  flex items-center justify-start gap-6 flex-nowrap overflow-auto max-sm:flex-wrap mt-3 '>
      {data.data.tasks.map((elem,idx)=>{
        if(elem.active){return <Activetask key = {idx} elem = {elem} currentUser={data.data} setLoggedInUserData={setLoggedInUserData}  />}
      })}</div>
      <div className='py-4'><h1 className='bg-blue-500 w-fit px-2 py-2 rounded-xl text-lg font-medium'>New Task:</h1>
      <div className='h-fit w-full  flex items-center justify-start gap-6 flex-nowrap overflow-auto max-sm:flex-wrap mt-3 '>
      {data.data.tasks.map((elem,idx)=>{
        if(elem.newTask){return <Newtask key = {idx} elem={elem} currentUser={data.data} setLoggedInUserData={setLoggedInUserData} />}
      })}</div>
      </div>
         <div className='py-4'><h1 className='bg-green-500 w-fit px-2 py-2 rounded-xl text-lg font-medium'>Completed Task:</h1>
      <div className='h-fit w-full  flex items-center justify-start gap-6 flex-nowrap overflow-auto max-sm:flex-wrap mt-3 '>
      {data.data.tasks.map((elem,idx)=>{
        if(elem.status === "completed"){return <Completedtask key = {idx} elem = {elem}  />}
      })}</div>
      </div>
         <div className='py-4'><h1 className='bg-red-500 w-fit px-2 py-2 rounded-xl text-lg font-medium'>Failed Task:</h1>
      <div className='h-fit w-full  flex items-center justify-start gap-6 flex-nowrap overflow-auto max-sm:flex-wrap mt-3 '>
      {data.data.tasks.map((elem,idx)=>{
        if(elem.status === "failed"){return <Failedtask key = {idx} elem = {elem} />}
      })}</div>
      </div>
       </div>
  )
}

export default Tasklist
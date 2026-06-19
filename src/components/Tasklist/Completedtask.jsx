import React from 'react'

const Completedtask = ({elem}) => {
  return (
    <div>
        <div  className='shrink-0 w-[30vw] h-[35vh] bg-red-400 rounded-xl max-sm:w-screen flex flex-col px-3 py-2 justify-between max-sm:overflow-clip'>
         <div className='flex justify-between'>
          <h1 className='bg-red-500 p-2 rounded-xl text-lg font-medium'>{elem.priority}</h1>
          <h1 className='text-lg font-medium'>DeadLine: {elem.taskDeadline} </h1>
         </div>
         <div className='flex flex-col gap-2 py-4'>
          <h1 className=' text-3xl font-semib old'>{elem.taskTitle}</h1>
          <h1>{elem.taskDescription}</h1>
         </div>
         <h1 className='text-lg font-medium text-gray-200 bg-green-400 w-fit p-2 rounded-xl '>{elem.status}</h1>
       </div>
    </div>
  )
}

export default Completedtask

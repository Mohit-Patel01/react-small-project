import React from 'react'
import Header from '../other/header'
import Taskstatus from '../other/Taskstatus'
import Employeestatus from '../other/Employeestatus'
import Createtask from '../other/Createtask'
const Admindashboard = (data) => {
 
 const submithandler = (e) => {
   e.preventDefault()
 }

  return (
    <div className='h-screen w-full'>
      <Header data = {data} />
      <div className=' flex justify-around items-center max-sm:flex-col max-sm:gap-4'> 
        <Createtask />
        <Taskstatus />
      </div>
     <Employeestatus />
    </div>
  )
}

export default Admindashboard

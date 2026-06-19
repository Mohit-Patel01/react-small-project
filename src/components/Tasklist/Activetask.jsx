import React, { useContext } from 'react'
import { getLocalStorage } from '../../utils/Localstorage'
import { Authcontext } from '../../context/Authprovider'
const Activetask = ({elem, currentUser, setLoggedInUserData}) => {
  const [{admin, employees} , setuserdata] = useContext(Authcontext)
  const ActivetoCompleted = () =>{
   let updatedEmployee = null
   const newEmployees = employees.map((val)=>{
     if(val.email === currentUser.email){
       const tasks = val.tasks.map((value)=>{
         if(value.taskTitle === elem.taskTitle && value.taskDescription === elem.taskDescription && value.taskDeadline === elem.taskDeadline){
           return {...value, active: false, newTask: false, completed: true, status: 'completed' }
         }
         return value
       })
        const taskCount = val.taskCount.map((value1)=>{
            return { ...value1, completed : value1.completed + 1, active: value1.active - 1 }
       })
       updatedEmployee = {...val, tasks, taskCount}
       return {...val, tasks, taskCount}
     }
     return val
   })

   localStorage.setItem("employees", JSON.stringify(newEmployees))
   setuserdata({admin, employees: newEmployees})
   if(updatedEmployee){
     localStorage.setItem("loggedIn", JSON.stringify({role: 'employee', data: updatedEmployee}))
     setLoggedInUserData(updatedEmployee)
   }
  }
  const ActivetoFailed = () =>{
       let updatedEmployee = null
       const newEmployees = employees.map((val)=>{
         if(val.email === currentUser.email){
           const tasks = val.tasks.map((value)=>{
             if(value.taskTitle === elem.taskTitle && value.taskDescription === elem.taskDescription && value.taskDeadline === elem.taskDeadline){
               return {...value, active: false, newTask: false, failed: true, status: 'failed'}
             }
             return value
           })
            const taskCount = val.taskCount.map((value1)=>{
            return { ...value1, failed : value1.failed + 1, active: value1.active - 1 }
       })
           updatedEmployee = {...val, tasks, taskCount}
           return {...val, tasks, taskCount}
         }
         return val
       })
    
       localStorage.setItem("employees", JSON.stringify(newEmployees))
       setuserdata({admin, employees: newEmployees})
       if(updatedEmployee){
         localStorage.setItem("loggedIn", JSON.stringify({role: 'employee', data: updatedEmployee}))
         setLoggedInUserData(updatedEmployee)
       }
  }
  return (
    <div>
        <div className='shrink-0 w-[30vw] h-fit bg-red-400 rounded-xl max-sm:w-screen flex flex-col px-3 py-2 justify-between max-sm:overflow-clip'>
         <div className='flex justify-between'>
          <h1 className='bg-red-500 p-2 rounded-xl text-lg font-medium'>{elem.priority}</h1>
          <h1 className='text-lg font-medium'>DeadLine: {elem.taskDeadline} </h1>
         </div>
         <div className='flex flex-col gap-2 py-4'>
          <h1 className=' text-3xl font-semib old'>{elem.taskTitle}</h1>
          <h1>{elem.taskDescription}</h1>
         </div>
         <h1 className='text-lg font-medium text-gray-200'>{elem.status}</h1>
         <div className='flex justify-between p-3'><button onClick={()=>{
          ActivetoCompleted()
         }}  className='bg-green-500 p-3 rounded-xl hover:cursor-pointer active:scale-95 h-fit w-fit' >Mark As Completed</button>
         <button onClick={()=>{
          ActivetoFailed()
         }}  className='bg-red-500 p-3 rounded-xl hover:cursor-pointer active:scale-95'>Marks As Failed</button></div>
       </div>
    </div>
  )
}

export default Activetask

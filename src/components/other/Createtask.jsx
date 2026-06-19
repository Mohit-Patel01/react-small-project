import React ,{useContext, useState} from 'react'
import { getLocalStorage } from '../../utils/Localstorage'
import { Authcontext } from '../../context/Authprovider'

const Createtask = () => {
    const [userdata, setuserdata] = useContext(Authcontext) 
    const [taskTitle, settaskTitle] = useState('')
    const [taskDescription, settaskDescription] = useState('')
    const [taskDeadline, settaskDeadline] = useState('')
    const [name, setname] = useState('')
    const [priority, setpriority] = useState('')
    const [Category, setCategory] = useState('')
    let Namecheck = false;
    const submithandler = (e) => {
    e.preventDefault()
    const newTask = {
      taskTitle,
      taskDescription,
      taskDeadline,
      priority,
      Category,
      active: false,
      newTask: true,
      status: "pending",
      failed: false,
      completed: false,
    }
    const data = JSON.parse(localStorage.getItem("employees"))
    const employee = data.find((elem) => elem.name === name)
    if(employee){
      employee.tasks.unshift(newTask)
      employee.taskCount = [{...employee.taskCount[0], newTask: employee.taskCount[0].newTask + 1}]
      localStorage.setItem("employees", JSON.stringify(data))
      setuserdata({ ...userdata, employees: data })
    } else {
      alert("enter correct employee name")
    }

    settaskTitle("")
    settaskDescription("")
    setname("")
    setpriority("")
    settaskDeadline("")
    setCategory("")
 }
  return (
    <div>
        <form onSubmit={(e)=>{
            submithandler(e)
        }} className=' flex flex-col gap-7  max-sm:flex max  max-sm:items-center max-sm:justify-center w-fit  items-center p-4 rounded-2xl max-sm:w-screen max-sm:ml-0 bg-[#1e1e1e]'>
          <h1 className='  text-4xl font-semibold'> Create task</h1>
          <div className='flex gap-10 '>
          <h1>Task Title:</h1>
          <input required value={taskTitle} onChange={(e)=>{
            settaskTitle(e.target.value)
          }} className='bg-[#383838] rounded-[5px] p-1 outline-none' type='text' placeholder='Make a UI design' />
          </div>
          <div className='flex gap-7'>
            <h1>Description</h1>
            <textarea required value={taskDescription} onChange={(e)=>{
            settaskDescription(e.target.value)
          }} className=' sm:h-[15vh] sm:w-[15vw] bg-[#383838] rounded-[5px] p-1  ' placeholder='Detailed Desc. Of task'></textarea>
          </div>
          <div className='flex gap-19 '>
          <h1>Date</h1>
          <input required value={taskDeadline} onChange={(e)=>{
            settaskDeadline(e.target.value)
          }} className=' bg-[#383838] rounded-[5px] p-1 outline-none' type='date'/>
          </div>
          <div className='flex gap-10 '>
            <h1>
              Assign To
            </h1>
            <input required value={name} onChange={(e)=>{
            setname(e.target.value)
          }} className='bg-[#383838] rounded-[5px] p-1  outline-none' placeholder='Employe Names '/>
          </div>
          <div className='flex gap-10 max-sm:ml-[2vw] ml-[1vw] '>
          <h1>Priority:</h1>
          <input required value={priority} onChange={(e)=>{
            setpriority(e.target.value)
          }} className='bg-[#383838] rounded-[5px] p-1 outline-none' type='text' placeholder='High/Medium/Low' />
          </div>
          <div className='flex gap-11 '>
            <h1>Category</h1>
            <input required value={Category} onChange={(e)=>{
            setCategory(e.target.value)
          }} className='bg-[#383838] rounded-[5px] p-1  outline-none' placeholder='Design,Development'/>
          </div>
          <button className='bg-black border-2 border-amber-50 p-3 rounded-xl hover:cursor-pointer active:scale-95 hover:-translate-y-0.5'>Create Task</button>
        </form>
    </div>
  )
}

export default Createtask
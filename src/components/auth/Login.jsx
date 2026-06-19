import React, { useState } from 'react'
const Login = ({Loginhandle}) => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const submithandler = (e)=>{
  e.preventDefault()
  Loginhandle(email,password)
  setemail("")
  setpassword("")
  }
  return (
    <div className='text-white h-screen w-screen flex justify-center items-center' >
      <div className='border-2 border-emerald-600 h-100 w-100 flex justify-center items-center rounded-2xl'>
      <form onSubmit={(e)=>{
          submithandler(e)
      }} className='flex flex-col justify-center items-center gap-4 relative'>
        <input value={email} onChange={(e)=>{
           setemail(e.target.value)
        }} required className=' placeholder:text-gray-500 border-2 border-emerald-600 rounded-3xl outline-none py-3 px-5' placeholder='Enter Email' type='email'/>
        <input value={password} onChange={(e)=>{
           setpassword(e.target.value)
        }} required className='placeholder:text-gray-500 border-2 border-emerald-600 rounded-3xl outline-none py-3 px-5' placeholder='Enter Password' type='Password'/>
        <button className=' bg-emerald-500  rounded-3xl hover:cursor-pointer w-54 mt-5 py-3 px-5'> Login </button>
      </form>
     </div>
    </div>
  )
}

export default Login

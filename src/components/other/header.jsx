import React from 'react'

const Header = ({data} ) => {
const logOutUser = () =>{
localStorage.setItem("loggedIn", "")
window.location.reload()
}
  return (
    <div className=' text-white flex items-center justify-between px-10 py-5 '>
      <h1 className='text-4xl  '>Hello, <br/> <span className='text-6xl'> {data.data.name} 👋</span></h1>
      <button onClick={()=>{
        logOutUser();
      }} className=' hover:cursor-pointer rounded-[5px] p-1.5 bg-red-600 text-lg font-medium  active:scale-95'>Log out</button>
    </div>
  )
}

export default Header

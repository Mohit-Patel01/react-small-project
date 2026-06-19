import Login from './components/auth/Login'
import Employdashboard from './components/Dashboard/EmployDashboard'
import Admindashboard from './components/Dashboard/Admindashboard'
import { useContext, useEffect, useState } from 'react'
import { Authcontext } from './context/Authprovider'
import { getLocalStorage, setLocalStorage } from './utils/Localstorage'
import Newtask from './components/Tasklist/Newtask'
const App = () => {
  useEffect(() => {
  const alreadyRun = localStorage.getItem("initialized");
  if (!alreadyRun) {
    setLocalStorage();
    getLocalStorage();
    localStorage.setItem("initialized", "true");
  }
}, []);
useEffect(() => {
  const loggedIn = localStorage.getItem("loggedIn")
  if(loggedIn){
    const userData = JSON.parse(loggedIn)
    setuser(userData.role)
    setloggedInUserData(userData.data)}
}, [])

 const [Authdata, setuserdata] = useContext(Authcontext) 
 const [user, setuser] = useState("")
 const [loggedInUserData, setloggedInUserData] = useState(null)
 const Loginhandle = (email,password) =>{
  if(Authdata){
    const employee = Authdata.employees.find((e)=>email == e.email && password == e.password)
    if(employee){
       setuser("employee")
       setloggedInUserData(employee)
  localStorage.setItem("loggedIn", JSON.stringify({role:"employee", data: employee}))
    }
  }
  if(Authdata){
    const admin = Authdata.admin.find((e)=>email == e.email && password == e.password)
    if(admin){
    setuser("admin")
    setloggedInUserData(admin)
    localStorage.setItem("loggedIn", JSON.stringify({role:"admin", data:admin}))}
}
else 
  alert("enter a valid email or password");
}
  return (
    <>
      { !user ?  <Login Loginhandle={Loginhandle}  /> : "" }
      {user === "admin" ? <Admindashboard data = {loggedInUserData } />: user === "employee" ? <Employdashboard data = {loggedInUserData} setLoggedInUserData = {setloggedInUserData}/> : null }
      
    </>
  )
}
export default App
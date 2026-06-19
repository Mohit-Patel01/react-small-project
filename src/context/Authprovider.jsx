import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/Localstorage'
export const Authcontext = createContext();

const Authprovider = ({children}) => {
  const [userdata, setuserdata] = useState("")

 useEffect(() => {
   const {admin , employees} = getLocalStorage()
   setuserdata({admin,employees})
   
 }, [])
    
     return (
    <Authcontext.Provider value={[userdata, setuserdata]} >
        {children}
    </Authcontext.Provider>
  )
}

export default Authprovider
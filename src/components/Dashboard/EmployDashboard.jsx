import React from 'react'
import Header from '../other/header'
import Taskoverview from '../other/Taskoverview'
import Tasklist from '../Tasklist/Tasklist'

const Employdashboard = ({data, setLoggedInUserData}) => {
  return (
      <div className='min-h-screen'> 
      <Header data = {{data}} />
      <Taskoverview data = {{data}} />
     <Tasklist data= {{data}} setLoggedInUserData={setLoggedInUserData} />
    </div>
  )
}

export default Employdashboard
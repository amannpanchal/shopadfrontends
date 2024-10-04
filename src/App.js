import React, { useEffect } from 'react'
import AllTypesOfRoutes from './routes/AllTypesOfRoutes'
import { adminProfile } from './api/auth'


const App = () => {
  const adminData = async () => {

    const response = await adminProfile();
    localStorage.setItem("admindata", JSON.stringify(response));
    localStorage.setItem("adminid", response?._id);
    
    
}
  useEffect(() => {
    adminData();
  },[])
  return (
    <div>
    <AllTypesOfRoutes/>
    </div>
  )
}

export default App


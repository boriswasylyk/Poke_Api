import React from 'react';
import { Navigate,Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoutes = () => {
 

  const trainer = useSelector(store => store.trainerSlice)

 if (trainer.length >= 3){
   return <Outlet  />;
 } else{
   return <Navigate to="/error" />;
 }

}

export default ProtectedRoutes;
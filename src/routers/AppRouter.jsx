import React from 'react'
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {Login} from '../auth'
import {HeroesRoutes} from '../heroes'
import HeroesApp from '../HeroesApp';

export const AppRouter = () => {
  return (
    <>
        
        <Routes>
       
            <Route path="/login" element={<Login />} />

            <Route path="/*" element={<HeroesRoutes />} />
            <Route path="" element={<HeroesRoutes />} />
           
          
  
      </Routes>
    </>
  )
}

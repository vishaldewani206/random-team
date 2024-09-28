import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import '../App.css'
import StepOne from '../components/StepOne'
import { useState } from 'react'

function HomePage() {
  const [totalTeams, setTotalTeams] = useState(0)
  const [totalMembers, setTotalMembers] = useState(0)
  const [formation, setFormation] = useState(0)
  const [teamMembers, setTeamMembers] = useState([])
  const [leaders, setLeaders ]= useState([])


  return (
    <div className='w-full px-5'>
     
      <h1 className='text-3xl md:text-5xl font-bold text-center my-10'>Creating Random Team</h1>
      <Outlet context={[totalMembers, setTotalMembers, totalTeams, setTotalTeams, formation, setFormation, teamMembers, setTeamMembers,leaders, setLeaders]}/>
      

      
       

    </div>
  )
}

export default HomePage

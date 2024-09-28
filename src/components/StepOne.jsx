import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import {  Link } from 'react-router-dom'

export default function StepOne() {
    const [totalMembers, setTotalMembers, totalTeams, setTotalTeams, formation, setFormation] = useOutletContext();
    const [canCreateTeam, setCanCreateTeam] = useState(false)
    const [isDisabled, setDisabled] = useState(true)
    useEffect(()=>{
        const handleTotalTeamsCount = ()=>{
            
            if(totalMembers > 0 && formation > 0){
                let canCreate = totalMembers % formation
                if(canCreate === 0){
                    const teams = totalMembers / formation
                    setTotalTeams(teams)
                    setCanCreateTeam(false)
                    setDisabled(false)
                }else{
                    setCanCreateTeam(true)
                    setDisabled(true)

                }
            }
        }
        handleTotalTeamsCount()
    },[totalMembers, formation])

    const handleRadioChange = (e) => {
        setFormation(Number(e.target.value)); // Get the selected value
      };
  return (
    <div>
        <div className='space-y-6'>
            <h2 className='text-center text-2xl md:text-3xl'>Step One: Total Teams</h2>
            {/* TOTAL MEMBERS  */}
            <div className='flex md:flex-row flex-col md:items-center '>
                
                <h2 className='text-xl md:text-2xl mb-3 md:mb-0'>Total Members:</h2>
                <div>
                    <input 
                    className='w-[90%] md:w-40 h-10 border-b-2 px-2 border-white focus:outline-none md:ml-3 text-white' 
                    type="number" 
                    name="number" 
                    id="number" 
                    value={totalMembers}
                    onChange={(e)=> setTotalMembers(e.target.value)}
                     />
                </div>
            </div>
            {totalMembers < formation && <p className='text-red-400'>*Total members cannot be less formation </p>}
            {/* FORMATION  */}
            <div className='flex md:flex-row flex-col md:items-center md:space-x-4 space-y-4 md:space-y-0'>
                <h2 className='text-xl md:text-2xl'>Formation:</h2>
                <div className='flex  md:justify-center items-center space-x-2'>
                    <input className='h-5 w-5  border-b-2  border-white focus:outline-none md:ml-3 text-white' type="radio" name="radio" id="two" onChange={handleRadioChange} value={2} />
                    <label htmlFor="two">Two Members</label>
                </div>
                <div className='flex md:justify-center items-center space-x-2 '>
                    <input className='h-5 w-5  border-b-2  border-white focus:outline-none md:ml-3 text-white' type="radio" name="radio" id="three" onChange={handleRadioChange} value={3} />
                    <label htmlFor="three">Three Members</label>
                </div>
                <div className='flex md:justify-center items-center space-x-2'>
                    <input className='h-5 w-5  border-b-2  border-white focus:outline-none md:ml-3 text-white' type="radio" name="radio" id="four" onChange={handleRadioChange} value={4} />
                    <label htmlFor="four">Four Members</label>
                </div>
                <div className='flex md:justify-center items-center space-x-2'>
                    <input className='h-5 w-5  border-b-2  border-white focus:outline-none md:ml-3 text-white' type="radio" name="radio" id="five" onChange={handleRadioChange} value={5} />
                    <label htmlFor="five">Five Members</label>
                </div>
            </div>

            <div className='flex items-center mt-10'>
                <h2 className='text-2xl md:text-3xl'>Total Teams: {canCreateTeam? "You cannot create teams!" :totalTeams }</h2>
              
        </div>

            
        </div>
        
        <div className='w-full flex  mt-10'>
      <Link  to={"/step-two"} state={{ totalTeams }}>
      <button disabled={isDisabled}  className={`${!isDisabled ? "bg-green-500": "bg-gray-400"}  w-[200px] py-2 rounded-lg`}>Next</button>
      </Link>
      </div>
    </div>
  )
}

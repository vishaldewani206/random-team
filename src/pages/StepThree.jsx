import React, {  useEffect, useRef, useState } from 'react'
import { Link,  useNavigate,  useOutletContext } from 'react-router-dom';

export default function StepThree() {
    const navigate = useNavigate();

    const [totalMembers, setTotalMembers, totalTeams, setTotalTeams, formation, setFormation, teamMembers, setTeamMembers, leaders, setLeaders] = useOutletContext();
    const [isDisabled, setDisabled] = useState(true)

    useEffect(()=>{
        const addTeamLeaders = ()=>{
            if(formation === 0){
                navigate("/")
            }
            if(totalTeams - leaders.length === 0){
                setDisabled(false)
            }
        }
        addTeamLeaders()
    },[teamMembers, setTeamMembers])

    const handleAddLeader = (i)=>{
       console.log(teamMembers[i])
       if(totalTeams - leaders.length > 0){
        setLeaders((prev)=> [...prev, teamMembers[i]])
        setTeamMembers((prevItems) => prevItems.filter((_, index) => index !== i));
        console.log('Members', teamMembers)
       }
        
    }
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-center text-2xl md:text-3xl'>Step Two: Leaders Selection</h1>
        <p className='mt-2 text-gray-400'>Total Leaders: {totalTeams}</p>
        {/* BOX  */}
        <div className='flex space-x-2 w-[95%] md:w-[400px] flex-wrap mt-4'>
            {teamMembers.map((mem, i) =>(
                <div key={i}  onClick={()=>handleAddLeader(i)} className={`${isDisabled ? 'bg-orange-500' : 'bg-gray-400'} px-2 py-1 rounded-full m-1 cursor-pointer`}>{mem}</div>
            ))}
        </div>
        {/* LEADERS  */}
        <div className='flex space-x-2 w-[95%] md:w-[400px] flex-wrap mt-4 items-center'>
            <h3 className='text-bold'>Leaders:</h3>
            {leaders.map((mem, i) =>(
                <div key={i}   className="bg-green-500 px-2 py-1 rounded-full m-1 cursor-pointer">{mem}</div>
            ))}
        </div>
        <div>
            <p className='mt-4 text-gray-600'>Click on the name to select a leader</p>
        </div>

        <div className='w-full flex justify-center mt-10'>
        <Link  to={"/step-final"} state={{ totalTeams }}>
      <button disabled={isDisabled}  className={`${!isDisabled ? "bg-green-500": "bg-gray-400"} w-[200px] py-2 rounded-lg`}>Next</button>
      </Link>
      </div>
    </div>
  )
}

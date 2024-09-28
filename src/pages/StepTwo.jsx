import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useOutletContext } from 'react-router-dom';

export default function StepTwo() {
    const navigate = useNavigate();
    const [totalMembers, setTotalMembers, totalTeams, setTotalTeams, formation, setFormation, teamMembers, setTeamMembers] = useOutletContext();
    const [member, setMember] = useState('')
    const [isDisabled, setDisabled] = useState(true)

    useEffect(()=>{
        const addTeamMembers = ()=>{
            if(formation === 0){
                navigate("/")
            }
            if(totalMembers - teamMembers.length === 0){
                setDisabled(false)
            }
        }
        addTeamMembers()
    },[teamMembers, setTeamMembers])

    const handleAddMember = ()=>{
        setTeamMembers((prev)=> [...prev, member])
        setMember("")
        
    }
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-center text-2xl md:text-3xl'>Step Two: Members Selection</h1>
            <p className='mt-2 text-lg'>Remaining: {totalMembers - teamMembers.length}</p>
        {/* BOX  */}
        <div className='flex space-x-2 w-[95%] md:w-[400px] flex-wrap mt-4'>
            {teamMembers.map((mem, i) =>(
                <div key={i} className='bg-orange-500 px-2 py-1 rounded-full m-1'>{mem}</div>
            ))}
        </div>

        {/* ADD   */}
        <div>
        <input 
        className='mt-20  w-[90%] md:w-[400px] h-12 rounded-lg focus:outline-none px-2'
        type="text" 
        name="name" 
        id="name"
        value={member}
        onChange={(e)=> setMember(e.target.value)}
        onKeyDown={(event)=> event.key === 'Enter' ? handleAddMember() : ''}
        disabled={!isDisabled}
         />
        <button disabled={!isDisabled}  onClick={handleAddMember} 
        className='bg-blue-400  w-[90%] md:w-[120px] mt-5 md:mt-0  h-12 md:ml-2  rounded-lg'>Add</button>
        </div>

        <div className='w-full flex  mt-10 justify-center'>
        <Link  to={"/step-three"} state={{ totalTeams }}>
      <button disabled={isDisabled}  
      className={`${!isDisabled ? "bg-green-500": "bg-gray-400"} w-[200px] py-2 rounded-lg`}>Next</button>
      </Link>
      </div>
    </div>
  )
}

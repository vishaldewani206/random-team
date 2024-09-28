import React, { useEffect, useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom';

export default function StepFinal() {

    const [teams, setTeams] = useState([])
    const navigate = useNavigate();
    const [totalMembers, setTotalMembers, totalTeams, setTotalTeams, formation, setFormation, teamMembers, setTeamMembers, leaders, setLeaders] = useOutletContext();
       // Function to shuffle array elements
       const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    useEffect(() => {
        
        // If formation is not set, navigate back to home
        if (formation === 0) {
            navigate("/");
        }

        // Function to create teams
        const teamCreation = () => {
            // Shuffle members and leaders
            const shuffledMembers = [...teamMembers];
            const shuffledLeaders = [...leaders];
            shuffleArray(shuffledMembers);
            shuffleArray(shuffledLeaders);
            console.log(shuffledMembers)
            console.log(shuffledLeaders)
            const newTeams = [];
            const teamSize = formation;

            // Create teams based on the formation
            for (let i = 0; i < shuffledLeaders.length; i++) {
                const team = [];

                // Add one leader to the team
                if (shuffledLeaders[i]) {
                    team.push(shuffledLeaders[i]);
                }

                // Add members to the team
                for (let j = 0; j < teamSize -1; j++) {
                    const member = shuffledMembers.pop(); // Remove from members pool
                    if (member) {
                        team.push(member);
                    }
                }

                newTeams.push(team);
            }

            setTeams(newTeams); // Save the created teams in state
            console.log(teams)
        };
        
        
        teamCreation(); // Call the function to create teams
    }, [formation, teamMembers, leaders, totalTeams, navigate]);
  return (
    <div>
            <h1 className='text-center text-2xl md:text-3xl mb-4'>Step Final: Your Groups</h1>
            <div className="teams-container flex space-x-5  flex-wrap">
                {teams.map((team, index) => (
                    <div key={index} className="team-card mt-4">
                        <h2 className="team-title texl-xl font-bold md:text-2xl">Team {index + 1}</h2>
                        <ul>
                            {team.map((member, idx) => (
                                <li className='text-lg' key={idx}>{member}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
  )
}

import { useState } from 'react';
import './CreateMatchPage.scss';

function CreateMatchPage({leagues, teams}){

    const [selectedLeague , setSelectedLeague] = useState('')

    function handleChange(e){
        const currentValue = e.target.value;
        setSelectedLeague(currentValue)
    }

    function orderTeamsByAlpha(a, b){
        return a.teamName > b.teamName
    }

    const orderedTeams = teams.sort(orderTeamsByAlpha)
   
    return(
        <div className="create-match">
            <h1>Création d'un match : </h1>
            <form action="">

                <div className="form-match-league">
                    <label htmlFor="">Choisir ligue :</label>
                    <select name="league" id="league" onChange={handleChange}>
                        <option value="">...</option>
                        {leagues.map((league) => 
                            <option value={league}>{league}</option>
                        )}
                    </select>
                </div>                

                <div className="form-match-day">
                    <label htmlFor="day">Journée : </label>
                    <input type="number" placeholder="n° journée" name="matchDay"/>
                </div>

                <div className="form-match-equipeDom">
                <label htmlFor="">Equipe Dom. : </label>
                    <select name="domTeam" id="domTeam">
                        <option value="">...</option>
                        {orderedTeams.map((team) => 
                            !selectedLeague || selectedLeague === team.teamLeague ?
                                ( <option value={team.teamName}>{team.teamName}</option> ) : null
                        )}                  
                    </select>
                </div>

                <div className="form-match-scoreDom">
                    <label htmlFor="">Score Dom.</label>
                    <input type="text" placeholder="0" value="NC" name="scoreDom"/>
                </div>

                <div className="form-match-equipeExt">
                    <label htmlFor="">Equipe Dom. : </label>
                        <select name="league" id="league">
                            <option value="">...</option>
                            {teams.map((team) => 
                                !selectedLeague || selectedLeague === team.teamLeague ?
                                    ( <option value={team.teamName}>{team.teamName}</option> ) : null
                            )}                  
                        </select>
                </div>
                <div className="form-match-scoreExt">
                    <label htmlFor="">Score Ext..</label>
                    <input type="text" placeholder="0" value="NC" name="scoreExt"/>
                </div>
                <div className="form-match-date">
                    <label htmlFor="date">Date : </label>
                    <input type="date" name="matchDate" id="" />
                </div>
                <div className="form-match-hour">
                    <label htmlFor="">Heure : </label>
                    <input type="time" name="matchHour" id="" />
                </div>
                <button>Ajouter Match</button>
            </form>
        </div>
    )
}

export default CreateMatchPage
import { useState } from 'react';
import './CreateMatchPage.scss';

function CreateMatchPage({leagues, teams}){

    const [inputsMatch, setInputsMatch] = useState({
        matchLeague: '',
        matchDay: '',
        teamDom: '',
        scoreDom: '',
        teamExt: '',
        scoreExt: '',
        matchDate: '',
        matchHour: ''
    })

    function handleChange(e){
        const {name, value} = e.target;
        setInputsMatch(inputsMatch => {
            return {
                ...inputsMatch,
                [name]:value
            } 
        })
    }

    function handleClick(e){
        e.preventDefault();
        console.log(inputsMatch);
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
                    <label htmlFor="matchLeague">Choisir ligue :</label>
                    <select name="matchLeague" id="matchLeague" onChange={handleChange}>
                        <option value="">...</option>
                        {leagues.map((league, index) => 
                            <option key={index} value={league}>{league}</option>
                        )}
                    </select>
                </div>                

                <div className="form-match-day">
                    <label htmlFor="matchDay">Journée : </label>
                    <input type="number" placeholder="n° journée" name="matchDay" id="matchDay" onChange={handleChange}/>
                </div>

                <div className="form-match-equipeDom">
                <label htmlFor="teamDom">Equipe Dom. : </label>
                    <select name="teamDom" id="teamDom" onChange={handleChange}>
                        <option value="">...</option>
                        {orderedTeams.map((team, index) => 
                            !inputsMatch.matchLeague || inputsMatch.matchLeague === team.teamLeague ?
                                ( <option key={index} value={team.teamName}>{team.teamName}</option> ) : null
                        )}                  
                    </select>
                </div>

                <div className="form-match-scoreDom">
                    <label htmlFor="scoreDom">Score Dom.</label>
                    <input type="text" placeholder="0" value="NC" name="scoreDom" id="scoreDom" onChange={handleChange}/>
                </div>

                <div className="form-match-equipeExt">
                    <label htmlFor="">Equipe Dom. : </label>
                        <select name="teamExt" id="teamExt" onChange={handleChange}>
                            <option value="">...</option>
                            {orderedTeams.map((team, index) => 
                                !inputsMatch.matchLeague || inputsMatch.matchLeague === team.teamLeague ?
                                    ( <option key={index} value={team.teamName}>{team.teamName}</option> ) : null
                            )}                  
                        </select>
                </div>
                <div className="form-match-scoreExt">
                    <label htmlFor="scoreExt">Score Ext..</label>
                    <input type="text" placeholder="0" value="NC" name="scoreExt" id="scoreExt" onChange={handleChange}/>
                </div>
                <div className="form-match-date">
                    <label htmlFor="matchDate">Date : </label>
                    <input type="date" name="matchDate" id="matchDate" onChange={handleChange}/>
                </div>
                <div className="form-match-hour">
                    <label htmlFor="matchHour">Heure : </label>
                    <input type="time" name="matchHour" id="matchHour" onChange={handleChange}/>
                </div>
                <button onClick={handleClick}>Ajouter Match</button>
            </form>
        </div>
    )
}

export default CreateMatchPage
import {useState} from 'react'
import axios from 'axios';
import './CreateTeamPage.scss';

function CreateTeamPage(){

    const [teamInputs, setTeamInputs] = useState({
        teamName: '',
        teamLeague: '',
        teamURLLogo: ''
    })

    function handleChange(e){
        const {name, value} = e.target
        setTeamInputs(prevInput => {
            return {
                ...prevInput,
                [name]:value
            }
        })
    }

    function handleClick(e){
        e.preventDefault();
        axios.post('/addteam', teamInputs)
            .then(function (response){
                console.log(response.data);
            })
    }

    return(
        <div className="create-team">
            <h1>Création d'équipe : </h1>
            <form action="">
                <div className="form-name">
                    <label htmlFor="teamName">Nom de l'équipe : </label>
                    <input id="teamName" type="text" placeholder="nom de l'equipe" name="teamName" value={teamInputs.teamName} onChange={handleChange}/>
                </div>
                <div className="form-league">
                    <label htmlFor="teamLeague">Choisir ligue :</label>
                    <select name="teamLeague" id="teamLeague" onChange={handleChange}>
                        <option value="">...</option>
                        <option value="Ligue 1">Ligue 1</option>
                        <option value="Premiere League">Premiere League</option>
                        <option value="Seri A">Seri A</option>
                        <option value="Bundesliga">Bundesliga</option>
                        <option value="Liga">Liga</option>
                    </select>
                </div>
                <div className="form-logo">
                    <label htmlFor="teamURLLogo">URL logo : </label>
                    <input id="teamURLLogo" type="text" placeholder="URL logo" name="teamURLLogo" value={teamInputs.teamURLLogo} onChange={handleChange}/>
                </div>                
                <button onClick={handleClick}>Ajouter Equipe</button>
            </form>
        </div>
    )
}

export default CreateTeamPage
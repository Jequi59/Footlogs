import './CreateTeamPage.scss';

function CreateTeamPage(){
    return(
        <div className="create-team">
            <h1>Création d'équipe : </h1>
            <form action="">
                <div className="form-name">
                    <label htmlFor="name">Nom de l'équipe : </label>
                    <input id="name" type="text" placeholder="nom de l'equipe" name="name"/>
                </div>
                <div className="form league">
                    <label htmlFor="league">Choisir ligue :</label>
                    <select name="league" id="league">
                        <option value="Ligue 1">Ligue 1</option>
                        <option value="Premiere League">Premiere League</option>
                        <option value="Seri A">Seri A</option>
                        <option value="Bundesliga">Bundesliga</option>
                        <option value="Liga">Liga</option>
                    </select>
                </div>
                <div className="form-logo">
                    <label htmlFor="url_logo">URL logo : </label>
                    <input id="url_logo" type="text" placeholder="URL logo" name="url"/>
                </div>                
                <button>Ajouter Equipe</button>
            </form>
        </div>
    )
}

export default CreateTeamPage
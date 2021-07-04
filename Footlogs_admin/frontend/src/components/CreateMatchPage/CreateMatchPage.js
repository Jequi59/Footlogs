import './CreateMatchPage.scss';

function CreateMatchPage(){
    return(
        <div className="create-match">
            <h1>Création d'un match : </h1>
            <form action="">
                <div className="form-match-league">
                    <label htmlFor="">Choisir ligue :</label>
                    <select name="league" id="league">
                        <option value="Ligue 1">Ligue 1</option>
                        <option value="Premiere League">Premiere League</option>
                        <option value="Liga">Liga</option>
                        <option value="Seri A">Seri A</option>
                        <option value="Bundesliga">Bundesliga</option>
                    </select>
                </div>
                <div className="form-match-day">
                    <label htmlFor="day">Journée : </label>
                    <input type="text" placeholder="n° journée" />
                </div>
                <div className="form-match-equipeDom">
                    <label htmlFor="">Equipe Dom. : </label>
                    <input type="text" placeholder="equipe domicile" />
                </div>
                <div className="form-match-scoreDom">
                    <label htmlFor="">Score Dom.</label>
                    <input type="text" placeholder="0" value="NC"/>
                </div>
                <div className="form-match-equipeExt">
                    <label htmlFor="">Equipe Ext. : </label>
                    <input type="text" placeholder="equipe exterieure" />
                </div>
                <div className="form-match-scoreExt">
                    <label htmlFor="">Score Ext..</label>
                    <input type="text" placeholder="0" value="NC"/>
                </div>
                <div className="form-match-date">
                    <label htmlFor="date">Date : </label>
                    <input type="date" name="" id="" />
                </div>
                <div className="form-match-hour">
                    <label htmlFor="">Heure : </label>
                    <input type="time" name="" id="" />
                </div>
                <button>Ajouter Match</button>
            </form>
        </div>
    )
}

export default CreateMatchPage
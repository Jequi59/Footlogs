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
                <div className="form-match-equipeDom">
                    <label htmlFor="">Equipe à domicile : </label>
                    <input type="text" placeholder="equipe domicile" />
                </div>
                <div className="form-match-scoreDom">
                    <label htmlFor="">Score equipe Dom</label>
                    <input type="text" placeholder="0"/>
                </div>
            </form>
        </div>
    )
}

export default CreateMatchPage
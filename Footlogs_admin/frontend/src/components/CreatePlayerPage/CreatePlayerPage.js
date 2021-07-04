import './CreatePlayerPage.scss';

function CreatePlayerPage(){
    return(
        <div className="create-player">
            <h1>Creation d'un Joueur : </h1>
            <form action="">
                <div className="form-player-firstname">
                    <label htmlFor="player-firstname">Nom du joueur : </label>
                    <input id="player-firstname" type="text" placeholder="nom de joueur"/>
                </div>
                <div className="form-player-lastname">
                    <label htmlFor="player-lastname">Prénom du joueur : </label>
                    <input type="text" placeholder="prenom du joueur" />
                </div>
                <div className="form-player-team">
                    <label htmlFor="">Equipe : </label>
                    <input type="text" placeholder="nom equipe" />
                </div>
                <button>Ajouter joueur</button>
            </form>
        </div>
    )
}

export default CreatePlayerPage
import {NavLink} from 'react-router-dom';

import './NavBar.scss';

function NavBar(){
    return(
        <div className="navbar">            
            <NavLink to="/" exact><h4>Accueil</h4></NavLink>
            <NavLink to="/teams"><h4>Equipes</h4></NavLink>
            <NavLink to="/players"><h4>Joueurs</h4></NavLink>
            <NavLink to="/matchs"><h4>Matchs</h4></NavLink>
            <NavLink to="/addteam"><h4>Créer Equipe</h4></NavLink>
            <NavLink to="/addplayer"><h4>Créer Joueur</h4></NavLink>
            <NavLink to="/addmatch"><h4>Créer Match</h4></NavLink>            
        </div>
    )
}

export default NavBar
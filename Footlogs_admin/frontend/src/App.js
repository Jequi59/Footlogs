import { BrowserRouter as Router, Route} from 'react-router-dom';
import {useState, useEffect} from 'react'

import './App.scss';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';

import Home from './components/Home/Home';
import TeamsPage from './components/TeamsPage/TeamsPage';
import PlayersPage from './components/PlayersPage/PlayersPage';
import MatchsPage from './components/MatchsPage/MatchsPage';
import CreateTeamPage from './components/CreateTeamPage/CreateTeamPage';
import CreatePlayerPage from './components/CreatePlayerPage/CreatePlayerPage';
import CreateMatchPage from './components/CreateMatchPage/CreateMatchPage';

const axios = require('axios');

function App() {

  const [teams, setTeams] = useState([])

    useEffect(() => {
        axios.get('/teams')
        .then(res => {
            const resTeams = res.data;
            setTeams(resTeams)            
        })
        
    }, []);  

    const leagues = teams.reduce(
        (acc, team) =>
          acc.includes(team.teamLeague) ? acc : acc.concat(team.teamLeague),[]
        ).sort()

  return (
    <>
    <Router>
      <Banner />
      <NavBar />
      <Route path="/" exact activeClassName="selected">
        <Home/>
      </Route>
      <Route path="/teams" activeClassName="selected">
        <TeamsPage/>
      </Route>
      <Route path="/players" activeClassName="selected">
        <PlayersPage />
      </Route>
      <Route path="/matchs" activeClassName="selected">
        <MatchsPage />
      </Route>
      <Route path="/addteam" activeClassName="selected">
        <CreateTeamPage/>
      </Route>
      <Route path="/addplayer" activeClassName="selected">
        <CreatePlayerPage/>
      </Route>
      <Route path="/addmatch" activeClassName="selected" >
        <CreateMatchPage leagues={leagues} teams={teams}/>
      </Route>
    </Router>
    </>
  );
}

export default App;

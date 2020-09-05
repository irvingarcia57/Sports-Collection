import React from 'react';
import '../../components/styles.scss';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import { BBItems } from '../../components/MenuItems';


import FBHome from './Football_Home';
import FBMatches from './Football_Matches';
import FBTeams from './Football_Teams';

class Football extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <BrowserRouter>
                <nav className='navbar2'>
                    <ul className='nav-item'>
                        {BBItems.map(({ name, cName2, id }) => {
                            return (
                                <li key={id}>
                                    <Link to={`/football/${id}`} className={cName2}>{name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <Switch>
                    <Route exact path={`/football/home`} component={FBHome} />
                    <Route path={`/football/teams`} component={FBTeams} />
                    <Route path={`/football/matches`} component={FBMatches} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Football;
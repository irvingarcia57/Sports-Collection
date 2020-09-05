import React from 'react';
import '../../components/styles.scss';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import { BBItems } from '../../components/MenuItems';

import SHome from './Soccer_Home';
import STeams from './Soccer_Teams';
import SMatches from './Soccer_Matches';

class Soccer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <nav className='navbar2'>
                        <ul className='nav-item'>
                            {BBItems.map(({ name, cName2, id }) => {
                                return (
                                    <li key={id}>
                                        <Link to={`/soccer/${id}`} className={cName2}>{name}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <Switch>
                        <Route path={`/soccer/home`} component={SHome} />
                        <Route path={`/soccer/teams`} component={STeams} />
                        <Route path={`/soccer/matches`} component={SMatches} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Soccer;
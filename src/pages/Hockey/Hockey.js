import React from 'react';
import '../../components/styles.scss';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import { BBItems } from '../../components/MenuItems';

import HHome from './Hockey_Home';
import HMatches from './Hockey_Matches';
import HTeams from './Hockey_Teams';


class Hockey extends React.Component {
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
                                        <Link to={`/hockey/${id}`} className={cName2}>{name}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path={`/hockey/home`} component={HHome} />
                        <Route path={`/hockey/teams`} component={HTeams} />
                        <Route path={`/hockey/matches`} component={HMatches} />
                    </Switch>
                </BrowserRouter>

            </div>
        );
    }
}

export default Hockey;
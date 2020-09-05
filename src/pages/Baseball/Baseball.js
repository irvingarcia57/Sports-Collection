import React from 'react';
import '../../components/styles.scss';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import { BBItems } from '../../components/MenuItems';

import BsBHome from './Baseball_Home';
import BsBMatches from './Baseball_Matches';
import BsBTeams from './Baseball_Teams';


class Baseball extends React.Component {
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
                                        <Link to={`/baseball/${id}`} className={cName2}>{name}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path={`/baseball/home`} component={BsBHome} />
                        <Route path={`/baseball/teams`} component={BsBTeams} />
                        <Route path={`/baseball/matches`} component={BsBMatches} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Baseball;
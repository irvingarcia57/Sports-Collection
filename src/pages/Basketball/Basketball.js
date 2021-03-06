import React from 'react';
import '../../components/styles.scss';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import { BBItems } from '../../components/MenuItems';

import BBTeams from './Basketball_Teams';
import BBHome from './Basketball_Home';
import BBMatches from './Basketball_Matches';

class Basketball extends React.Component {
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
                                        <Link to={`/basketball/${id}`} className={cName2}>{name}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <form>
                            <input type='text' placeholder='Search' />

                        </form>


                    </nav>
                    <Switch>
                        <Route exact path={`/basketball/home`} component={BBHome} />
                        <Route path={`/basketball/teams`} component={BBTeams} />
                        <Route path={`/basketball/matches`} component={BBMatches} />
                    </Switch>
                </BrowserRouter>


            </div>
        );
    }
}

export default Basketball;
import React from 'react';
import { MenuItems } from './MenuItems';
import './styles.scss';

import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Football from '../pages/Football/Football';
import Soccer from '../pages/Soccer/Soccer';
import Baseball from '../pages/Baseball/Baseball';
import Hockey from '../pages/Hockey/Hockey';

import Basketball from '../pages/Basketball/Basketball';

class Routing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        return (
            <div>
                <BrowserRouter>
                    <nav className='navbar1'>
                        <ul className='nav-item'>
                            {MenuItems.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={item.path} className={item.cName}>{item.name}</Link>
                                    </li>
                                );
                            })}

                        </ul>
                    </nav>

                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/football' component={Football} />
                        <Route path='/soccer' component={Soccer} />
                        <Route path='/basketball' component={Basketball} />
                        <Route path='/baseball' component={Baseball} />
                        <Route path='/hockey' component={Hockey} />

                    </Switch>
                </BrowserRouter>

            </div>
        );
    }
}

export default Routing;
// export class Routing2 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }
//     render() {
//         return (
//             <div>
//                 <BrowserRouter>
//                     <Navbar2 />
//                     <Switch>
//                         <Route exact path='/basketball-home' component={BBHome} />
//                         <Route exact path='/basketball-teams' component={BBTeams} />
//                     </Switch>
//                 </BrowserRouter>
//             </div>
//         );
//     }
// }


// export class Navbar1 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }
//     render() {
//         return (
//             <nav className='navbar1'>
//                 <ul className='nav-item'>
//                     {MenuItems.map((item, index) => {
//                         return (
//                             <li key={index}>
//                                 <Link to={item.name} className={item.cName}>{item.name}</Link>
//                             </li>
//                         );
//                     })}
//                 </ul>
//             </nav>
//         );
//     }
// }

// export class Navbar2 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }
//     render() {
//         return (
//             <div className='navbar2'>
//                 <ul className='nav-item'>
//                     {/* <Link to={BBItems.item.name} className={NavbarTwoItems.item.cName2} /> */}
//                     {BBItems.map((item, index) => {
//                         return (
//                             <li key={index}>
//                                 <Link to={'basketball-' + item.name} className={item.cName2} >{item.name}</Link>
//                             </li>
//                         );
//                     })}
//                 </ul>
//             </div>
//         );
//     }
// }

// export default Navbar2;


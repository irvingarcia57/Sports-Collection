import React from 'react';
import Navbar2, { Navbar1 } from '../components/Navbar/navbar';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Basketball from '../pages/Basketball/Basketball';
import Home from '../pages/Home/Home';
import Football from '../pages/Football/Football';
import Soccer from '../pages/Soccer/Soccer';
import Baseball from '../pages/Baseball/Baseball';
import Tennis from '../pages/Tennis/Tennis';
import Ufc from '../pages/Ufc/Ufc';

class Routing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        return (
            <div>
                <BrowserRouter>
                    <Navbar1 />
                    <Switch>
                        <Route exact path='/home' component={Home} />
                        <Route exact path='/football' component={Football} />
                        <Route exact path='/soccer' component={Soccer} />
                        <Route exact path='/basketball' component={Basketball} />
                        <Route exact path='/baseball' component={Baseball} />
                        <Route exact path='/tennis' component={Tennis} />
                        <Route exact path='/ufc' component={Ufc} />
                    </Switch>
                </BrowserRouter>

            </div>
        );
    }
}

export default Routing;

export class Routing2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Navbar2 />
                    <Switch>
                        <Route exact path='' component={} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
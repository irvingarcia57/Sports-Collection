import React from 'react';
import { MenuItems, NavbarTwoItems } from './MenuItems';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './styles.scss';

export class Navbar1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <nav className='navbar1'>
                <ul className='nav-item'>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.title} className={item.cName}>{item.title}</Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    }
}

export class Navbar2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='navbar2'>
                <ul className='nav-item'>
                    {NavbarTwoItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.title} className={item.cName2} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Navbar2;


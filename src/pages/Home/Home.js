import React from 'react';
import { Navbar1, Navbar2 } from '../../components/Navbar/navbar';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Navbar2 />
                <h1>this is the home tab</h1>
                <h1>Hello</h1>




            </div>
        );
    }
}

export default Home;
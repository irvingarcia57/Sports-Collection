import React from 'react';
import './photos/Bulls.png';

class BBTeams extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: []
        };
    }
    componentDidMount() {
        const url = `https://free-nba.p.rapidapi.com/teams?page=0`;
        fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-nba.p.rapidapi.com",
                "x-rapidapi-key": "b20caa8884msha5f07d84af7a506p1a1accjsn689aca296a00"
            }
        })
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    data: result.data
                })
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        const { error, isLoaded, data } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <ul>
                    {data.map(data => (
                        <li key={data.name}>
                            {data.name}
                            <img src={`./photos/${data.name}.png`} alt={data.name}></img>
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default BBTeams;
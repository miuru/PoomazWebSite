import React, {Component} from 'react';

import Implementation from "./implementation/implementation";


class Methodology extends Component {
    render() {
        return (
            <div className="container">
                <h3 className={'title'}>Places to Visit near PoomaZ</h3>
                <br/>
                <Implementation/>
                <hr style={{border:'1px solid white'}}/>
            </div>
        );
    }
}

export default Methodology;
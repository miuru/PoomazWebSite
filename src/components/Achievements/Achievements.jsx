import React, {Component} from 'react';

class Achievements extends Component {
    render() {
        return (
            <div className="container">
                <h3 className={'title'}>Achievements</h3>
                <ul className="regular tickedList mt-3">
                    <li className="listElem" data-aos={"fade-up"} >9.7 score on Booking.com in 2018</li>
                    <br/>
                    <li className="listElem" data-aos={"fade-up"} >9.6 score on Booking.com in 2019</li>
                    <br/>
                    <li className="listElem" data-aos={"fade-up"} data-aos-delay={"100"}>Over 250, 5 start remarks</li>
                    <br/>
                    <br/>
                    <br/>
                </ul>
            </div>
        );
    }
}

export default Achievements;
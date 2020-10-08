import React, {Component} from 'react';

import Avatar1 from '../../assets/img/avatars/puma.png';
import Avatar3 from '../../assets/img/avatars/dad.jpeg';

class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h3 className={'title'}>Contact Us</h3>
                </div>
                <div className="row" style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <div style={{padding: 30}} className="col-md-3 text-light text-center justify-content-center"
                         data-aos="fade-up" data-aos-duration="500">
                        <img style={{borderRadius: 400 / 2}} alt="Author 1 avatar" src={Avatar1} width={'100%'}/>
                        <div className={'mt-4'}>
                            <span className="light">Poorna Malinga</span><br/>
                            <span className="light">071 1461529</span><br/>
                            <span><a href="mailto:poomazpeacepalace@gmail.com" className="regular"
                                     style={{
                                         color: '#6AFBBD',
                                         textDecoration: 'none'
                                     }}>poomazpeacepalace@gmail.com</a></span>
                        </div>
                    </div>
                    <div style={{padding: 30}} className="col-md-3 text-light text-center justify-content-center"
                         data-aos="fade-up" data-aos-duration="500" data-aos-delay={"500"}>
                        <img style={{borderRadius: 400 / 2}} alt="Author 1 avatar" src={Avatar3} width={'100%'}/>
                        <div className={'mt-4'}>
                            <span className="light">Nimal Arunashantha</span><br/>
                            <span className="light">071 7026305</span><br/>
                            <span><a href="mailto:arunashantha@gmail.com" className="regular" style={{
                                color: '#6AFBBD',
                                textDecoration: 'none'
                            }}>arunashantha@gmail.com</a></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
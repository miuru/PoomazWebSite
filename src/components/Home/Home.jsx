import React, {Component} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';

import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';
import Banner1 from "../../assets/img/HomeBanner.svg";
import Banner2 from "../../assets/img/DoubleRoomWithView.jpg";
import Banner3 from "../../assets/img/TwinRoom.jpg";
import Banner4 from "../../assets/img/LargeDoubleRoom.jpg";
import Banner5 from "../../assets/img/Breakfast.jpg";
class Home extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 2500,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            autoplay: true,
            appendDots: dots => {
                return <MagicSliderDots dots={dots} numDotsToShow={5} dotWidth={30}/>;
            }
        };
        return (
            <Slider {...settings}>
                <div>
                    <div className="row tile mt-4">
                        <div className="col-md-7 subTile">
                            <p className="title">Welcome to PoomaZ Peace Palace</p>
                            <br/>
                            <p className="subtitle">
                                A place where you can relax, dine and stay. If you're visiting Ella, <span
                                className="bold">Poomaz Peace Palace</span> is where you must be..
                            </p>
                            <br/>
                            <a href="/#VDS_Section" className="exploreBtn">Explore</a>
                        </div>
                        <div className="col-md-5 subTile">
                            <img src={Banner1} width={'100%'} alt={"Slide 1"}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row tile mt-4">
                        <div className="col-md-6 subTile">
                            <p className="title"> Double room with <span className="bold">Mountain View</span></p>
                            <br/>
                            <p className="subtitle">
                                This double room has a common balcony with seating area. Mountain view and garden view
                                with city view.
                            </p>
                            <br/>
                            <a href="/#VDS_Section" className="exploreBtn">Explore</a>
                        </div>
                        <div className="col-md-6 subTile">
                            <img src={Banner2} width={'100%'} height={'100%'} alt={"Slide 1"}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row tile mt-4">
                        <div className="col-md-6 subTile">
                            <p className="title">Twin Room with <span className="bold">Mountain View </span></p>
                            <br/>
                            <p className="subtitle">
                                This twin room has a common balcony with seating area. Mountain view and garden view
                                with city view.
                            </p>
                            <br/>
                            <a href="/#MCS_Section" className="exploreBtn">Explore</a>
                        </div>
                        <div className="col-md-6 subTile">
                            <img src={Banner3} width={'100%'} height={'100%'} alt={"Slide 1"}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row tile mt-4">
                        <div className="col-md-6 subTile">
                            <p className="title"><span className="bold">Large</span> Double Room.</p>
                            <br/>
                            <p className="subtitle">
                                This double room has a common balcony. Seating area inside the room and also in balcony.
                                Mountain view and garden view with city view. </p>
                            <br/>
                            <a href="/#OPS_Section" className="exploreBtn">Explore</a>
                        </div>
                        <div className="col-md-6 subTile">
                            <img src={Banner4} width={'100%'} alt={"Slide 1"}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row tile mt-4">
                        <div className="col-md-5 subTile">
                            <p className="title"><span className="bold">Sri Lankan</span> Breakfast.</p>
                            <br/>
                            <p className="subtitle">
                                Home made <span className="bold">Delicious</span> Breakfast</p>
                            <br/>
                            <a href="/#RGS_Section" className="exploreBtn">Explore</a>
                        </div>
                        <div className="col-md-7 subTile">
                            <img src={Banner5} width={'100%'} alt={"Slide 1"}/>
                        </div>
                    </div>
                </div>
            </Slider>
        );
    }
}

export default Home;
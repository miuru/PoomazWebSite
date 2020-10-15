import React, {Component} from 'react';
import AOS from 'aos';
import { Waypoint } from 'react-waypoint';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

import Leaf from '../assets/img/LEAF.png';
import Home from "./Home/Home";
import System from './Accomodations/Accomodations';
import Vists from "./Visits/Vists";
import Achievements from "./Achievements/Achievements";
import About from "./About/About";

import Logo from '../assets/img/Logo.svg';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state={
            navbarOpen:false,
            homeActive:true,
            systemActive:false,
            methodologyActive:false,
            achieveActive:false,
            contactActive:false,
            count:0
        }
        this.toggleNav= this.toggleNav.bind(this);
        this.waypointReached = this.waypointReached.bind(this);
    }

    waypointReached(wp){
        switch (wp) {
            case 1:
                this.setState({
                    homeActive:true, systemActive:false, methodologyActive:false, achieveActive:false, contactActive:false,count:1
                });
                break;
            case 2:
                if(this.state.count == 1){
                    this.setState({
                        homeActive:true, systemActive:false, methodologyActive:false, achieveActive:false, contactActive:false,count:0
                    });
                    break;
                }
                else {
                    this.setState({
                        homeActive: false,
                        systemActive: true,
                        methodologyActive: false,
                        achieveActive: false,
                        contactActive: false
                    });
                    break;
                }
            case 3:
                this.setState({
                    homeActive:false, systemActive:false, methodologyActive:true, achieveActive:false, contactActive:false
                });
                break;
            case 4:
                this.setState({
                    homeActive:false, systemActive:false, methodologyActive:false, achieveActive:true, contactActive:false
                });
                break;
            case 5:
                this.setState({
                    homeActive:false, systemActive:false, methodologyActive:false, achieveActive:false, contactActive:true
                });
                break;
            default:
                this.setState({
                    homeActive:false, systemActive:false, methodologyActive:false, achieveActive:false, contactActive:false
                });
                break;
        }
    }

    toggleNav(){
        this.setState({navBarOpen:!this.state.navBarOpen});
    }

    componentDidMount() {
        document.body.style.background = "#040511";
        AOS.init();
        let scrollRef = 0;

        document.getElementById('subBody').addEventListener('scroll', function() {
            scrollRef <= 15 ? scrollRef++ : AOS.refresh();
        });
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    render() {

        return (
            <div>
                <div className={'Main'}>
                    <Navbar dark expand="md">
                        <a href="/"><img height={'100%'} width={'50%'} alt={'Poomaz Peace Palace'} src={Logo}/></a>
                        <NavbarToggler onClick={()=>{this.toggleNav()}} />
                        <Collapse style={{marginLeft:'25%',transform:'translate(-25%,0)'}} isOpen={this.state.navBarOpen} navbar>
                            <Nav navbar>
                                <NavItem active={this.state.homeActive} className={"NavItem"}>
                                    <NavLink href="#Home">Home</NavLink>
                                </NavItem>
                                <NavItem active={this.state.systemActive} className={"NavItem"}>
                                    <NavLink href="#SystemOverview">Accommodation</NavLink>
                                </NavItem>
                                <NavItem active={this.state.methodologyActive} className={"NavItem"}>
                                    <NavLink href="#Vists">Places to Visit</NavLink>
                                </NavItem>
                                <NavItem active={this.state.achieveActive} className={"NavItem"}>
                                    <NavLink href="#Achievements">Achievements</NavLink>
                                </NavItem>
                                <NavItem active={this.state.contactActive} className={"NavItem"}>
                                    <NavLink href="#About">About Us</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                    <div id="subBody" className="Sub">
                        <div className="d-block mt-4">
                            <div className={'LeafHome'} data-aos="fade-right">
                                <img src={Leaf} height={'100%'} alt={"Leaf ClipArt"}/>
                            </div>
                            <Waypoint
                                onEnter={()=>{this.waypointReached(1)}}
                            />
                            <div id={'Home'}>
                                <Home/>
                            </div>
                            <div className={'LeafSystem'} data-aos="fade-left">
                                <img className="flipped" src={Leaf} height={'100%'} alt={"Leaf ClipArt"}/>
                            </div>
                            <div id={'SystemOverview'} className={"SectionContainer"}>
                                <Waypoint
                                    onEnter={()=>{this.waypointReached(2)}}
                                />
                                <System/>
                            </div>
                            <div className={'LeafMethodology'} data-aos="fade-right">
                                <img src={Leaf} height={'100%'} alt={"Leaf ClipArt"}/>
                            </div>
                            <div id={'Vists'}>
                                <Waypoint
                                    onEnter={()=>{this.waypointReached(3)}}
                                />
                                <Vists/>
                                <Waypoint
                                    onEnter={()=>{this.waypointReached(3)}}
                                />
                            </div>
                            <div className={'LeafAchievements'} data-aos="fade-left">
                                <img className="flipped" src={Leaf} height={'100%'} alt={"Leaf ClipArt"}/>
                            </div>
                            <div id={'Achievements'} className={"SectionContainer"}>
                                <Waypoint
                                    onEnter={()=>{this.waypointReached(4)}}
                                />
                                <Achievements/>
                            </div>
                            <div className={'LeafAbout'} data-aos="fade-right">
                                <img src={Leaf} height={'100%'} alt={"Leaf ClipArt"}/>
                            </div>
                            <div id={'About'} className={"SectionContainer"}>
                                <Waypoint
                                    onEnter={()=>{this.waypointReached(5)}}
                                />
                                <About/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
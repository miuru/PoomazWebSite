import React, {Component} from 'react';
import SystemOverview from "../../assets/img/systemoverview.svg";

const info={
    DB:"Cloud based Mongo DB atlas is used for flexibility and reliability.",
    SERVER:"Node JS based REST API due to IO heavy workload.",
    VDS:"System responsible of software wise solid waste classification using an image input.",
    MCS:"Physical sorting and storing the collected solid waste items in separate containers.",
    OPS:"Prevention of spilling of garbage and responsible of notifying the bin when the containers are filled.",
    RGS:"Interface for waste collectors to find the optimum route between respective locations.",
}


class SysOverview extends Component {

    constructor(props) {
        super(props);
        this.state={
          infoStr:'Hover over the systems for more information'
        };
        this.initializeListeners=this.initializeListeners.bind(this);
        this.fadeIn=this.fadeIn.bind(this);
    }

    componentDidMount() {
        let svg = document.getElementById('sysOverview');
        svg.addEventListener('load',()=>{
            let svgDoc = svg.contentDocument;
            this.initializeListeners(svgDoc);
        });
    }

    initializeListeners(svgDoc){

        svgDoc.getElementById('DB').addEventListener('mouseenter',()=>this.fadeIn(info.DB));
        svgDoc.getElementById('SERVER').addEventListener('mouseenter',()=>this.fadeIn(info.SERVER));
        svgDoc.getElementById('VDS').addEventListener('mouseenter',()=>this.fadeIn(info.VDS));
        svgDoc.getElementById('MCS').addEventListener('mouseenter',()=>this.fadeIn(info.MCS));
        svgDoc.getElementById('OPS').addEventListener('mouseenter',()=>this.fadeIn(info.OPS));
        svgDoc.getElementById('RGS').addEventListener('mouseenter',()=>this.fadeIn(info.RGS));
    }

    fadeIn(str){
        let infoElem=document.getElementById('infoStr');
        infoElem.classList.add('hide');
        setTimeout(()=> {
            this.setState({infoStr:str});
        }, 500);
        setTimeout(()=>{
            infoElem.classList.remove('hide')
        }, 500);
    }

    render() {
        return (
                <div className="container tile mt-4">
                    <div className="row mt-4">
                        <h3 className="title mt-4">System Overview</h3>
                    </div>
                    <div className="row mt-1">
                        <h4 id={"infoStr"} className="lightSubtitle animatedText">{this.state.infoStr}</h4>
                    </div>
                    <div className="row justify-content-center mt-2">
                            <object id="sysOverview" type="image/svg+xml" data={SystemOverview} aria-label={"System Overview"} width={'70%'} height={'70%'}/>
                    </div>
                </div>
        );
    }
}

export default SysOverview;
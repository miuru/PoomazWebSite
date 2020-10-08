import React, {Component} from 'react';
import methodologyH from '../../assets/img/Methodology/acco.jpg';
import Vds from "./subcomps/VDS";
import Mcs from "./subcomps/MCS";
import Ops from "./subcomps/OPS";
import Rgs from "./subcomps/RGS";
import Implementation from "./implementation/implementation";
import VDS_icon from '../../assets/img/Methodology/icons/VDS_icon.png';
import MCS_icon from '../../assets/img/Methodology/icons/BFS.png';
import RGS_icon from '../../assets/img/Methodology/icons/RGS_icon.png';

class Methodology extends Component {
    render() {
        return (
            <div className="container">
                <h3 className={'title'}>ACCOMMODATION</h3>
                <p className="regular">
                    Located in Ella, 1.2 mi from Demodara Nine Arch Bridge and 656 feet from Chill Restaurant, POOMAZ PEACE PALACE offers accommodations with access to a garden with a rooftop terrace.
                </p>
                <div className="row justify-content-center">
                    <img alt={'Methodology Hierarchy'} src={methodologyH} width={'70%'} data-aos="zoom-in" data-aos-duration="1500"/>
                </div>
                <hr style={{border:'1px solid white'}}/>
                <h3 id={'VDS_Section'} className="subtitle"><span><img style={{marginRight:10}} alt={'Visual Detection icon'} src={VDS_icon} height={30}/></span>Double Room with Mountain View</h3>
                <br/>
                <Vds/>
                <hr style={{border:'1px solid white'}}/>
                <h3 id={'MCS_Section'} className="subtitle"><span><img style={{marginRight:10}} alt={'Mechanical Classification icon'} src={VDS_icon} height={30}/></span>Twin Room with Mountain View</h3>
                <br/>
                <Mcs/>
                <hr style={{border:'1px solid white'}}/>
                <h3 id={'OPS_Section'} className="subtitle"><span><img style={{marginRight:10}} alt={'Overfill Prevention icon'} src={VDS_icon} height={30}/></span>Large Double Room</h3>
                <br/>
                <Ops/>
                <hr style={{border:'1px solid white'}}/>
                <h3 id={'RGS_Section'} className="subtitle"><span><img style={{marginRight:10}} alt={'Dumpster icon'} src={MCS_icon} height={30}/></span>Sri Lankan Breakfast</h3>
                <br/>
                <Rgs/>
                <hr style={{border:'1px solid white'}}/>
            </div>
        );
    }
}

export default Methodology;
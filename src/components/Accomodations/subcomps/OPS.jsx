import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';

import image1 from '../../../assets/img/Methodology/OPS/1.png';
import thumb1 from '../../../assets/img/Methodology/OPS/thumbs/1.png';
import image2 from '../../../assets/img/Methodology/OPS/2.png';
import thumb2 from '../../../assets/img/Methodology/OPS/thumbs/2.png';
import image3 from '../../../assets/img/Methodology/OPS/3.png';
import thumb3 from '../../../assets/img/Methodology/OPS/thumbs/3.png';
import image4 from '../../../assets/img/Methodology/OPS/4.png';
import thumb4 from '../../../assets/img/Methodology/OPS/thumbs/4.png';
import image5 from '../../../assets/img/Methodology/OPS/5.png';
import thumb5 from '../../../assets/img/Methodology/OPS/thumbs/5.png';
import booking from "../../../assets/img/Methodology/icons/bookingcom.png";
import tripAdvicer from "../../../assets/img/Methodology/icons/tripadvisor.png";

const images = [
    {
        original: image1,
        thumbnail: thumb1,
    },
    {
        original: image2,
        thumbnail: thumb2,
    },
    {
        original: image3,
        thumbnail: thumb3,
    },
    {
        original: image4,
        thumbnail: thumb4,
    },
    {
        original: image5,
        thumbnail: thumb5,
    },
];

class Ops extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-6" data-aos="fade-right">
                    <ul className="regular">
                        <li>Has a common balcony with seating area</li>
                        <li>A scenic view of Ella Rock.</li>
                        <li>Extra long beds (>6.5 fts)</li>
                        <li>Hardwood or parquet floors</li>
                        <li>Free wifi</li>
                        <li>Ironing facilities</li>
                        <li>Refrigerator</li>
                        <li>Electric Kettle</li>
                        <li>Fan</li>
                        <li>Private Entrance</li>
                        <li>Tea/Coffee maker</li>
                        <li>Books, DVDs or music for children</li>
                        <li>Dining area</li>
                    </ul>
                    <hr style={{borderTop:'1px solid white'}}/>
                    <hr style={{borderTop:'1px solid white'}}/>
                    <ul className="regular">Make Your bookings by contacting the owner or through any of the following</ul>
                    <div className="row justify-content-sm-center">
                        <a href={"http://www.booking.com/Share-TugdoY"}><span style={{paddingRight: 10}}><img alt="Booking.com" src={booking} height={50} width={180}/></span></a>
                        <a style={{paddingLeft: 40}}href={"https://www.tripadvisor.com/Hotel_Review-g616035-d15636356-Reviews-Poomaz_Peace_Palace_Ella-Ella_Uva_Province.html?m=19905"}><span style={{paddingRight: 10}}><img alt="Booking.com" src={tripAdvicer} height={50} width={180}/></span></a>
                    </div>
                    <hr style={{borderTop:'1px solid white'}}/>
                </div>
                <div className="col-md-6" data-aos="fade-left">
                    <ImageGallery items={images} showPlayButton={false} />;
                </div>
            </div>
        );
    }
}

export default Ops;
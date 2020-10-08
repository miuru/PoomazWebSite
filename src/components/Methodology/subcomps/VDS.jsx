import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';

import image1 from '../../../assets/img/Methodology/VDS/1.jpg';
import thumb1 from '../../../assets/img/Methodology/VDS/thumbs/1.jpg';
import image2 from '../../../assets/img/Methodology/VDS/2.jpg';
import thumb2 from '../../../assets/img/Methodology/VDS/thumbs/2.jpg';
import image3 from '../../../assets/img/Methodology/VDS/3.jpg';
import thumb3 from '../../../assets/img/Methodology/VDS/thumbs/3.jpg';
import image4 from '../../../assets/img/Methodology/VDS/4.jpg';
import thumb4 from '../../../assets/img/Methodology/VDS/thumbs/4.jpg';
import image5 from '../../../assets/img/Methodology/VDS/5.jpg';
import thumb5 from '../../../assets/img/Methodology/VDS/thumbs/5.jpg';

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
class Vds extends Component {
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
                    <h3 className="light" align={'center'}>
                        Price - 30 $
                    </h3>
                    <hr style={{borderTop:'1px solid white'}}/>
                </div>
                <div className="col-md-6" data-aos="fade-left">
                    <ImageGallery items={images} showPlayButton={false} />;
                </div>
            </div>
        );
    }
}

export default Vds;
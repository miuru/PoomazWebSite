import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';

import image1 from '../../../assets/img/Methodology/RGS/1.png';
import thumb1 from '../../../assets/img/Methodology/RGS/thumbs/1.png';
import image2 from '../../../assets/img/Methodology/RGS/2.png';
import thumb2 from '../../../assets/img/Methodology/RGS/thumbs/2.png';
import image3 from '../../../assets/img/Methodology/RGS/3.png';
import thumb3 from '../../../assets/img/Methodology/RGS/thumbs/3.png';
import image4 from '../../../assets/img/Methodology/RGS/4.png';
import thumb4 from '../../../assets/img/Methodology/RGS/thumbs/4.png';
import image5 from '../../../assets/img/Methodology/RGS/5.png';
import thumb5 from '../../../assets/img/Methodology/RGS/thumbs/5.png';

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

class Rgs extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-6" data-aos="fade-right">
                    <ul className="regular">
                        <li>Delicious home made breakfast</li>
                        <li>Coconut Rotti with Dal curry and Onion Sambol </li>
                        <li>Fruits</li>
                        <li>Toasted Bread with Butter,Eggs and Sambol</li>
                        <li>Milk Rice with Sambol</li>
                        <li>String Hoppers</li>
                        <li>Hoppers</li>
                        <li>Pancake</li>
                        <li>Coffee or Tea</li>
                        <li>Fruit Juices</li>
                        <li>Herbal tea</li>
                        <li>Cereals</li>

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

export default Rgs;
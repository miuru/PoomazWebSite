import React, {Component} from 'react';
import ImageGallery from "react-image-gallery";

import image1 from '../../../assets/img/Methodology/Implementation/1.png';
import thumb1 from '../../../assets/img/Methodology/Implementation/thumbs/1.png';
import image2 from '../../../assets/img/Methodology/Implementation/2.png';
import thumb2 from '../../../assets/img/Methodology/Implementation/thumbs/2.png';
import image3 from '../../../assets/img/Methodology/Implementation/3.png';
import thumb3 from '../../../assets/img/Methodology/Implementation/thumbs/3.png';
import image4 from '../../../assets/img/Methodology/Implementation/4.png';
import thumb4 from '../../../assets/img/Methodology/Implementation/thumbs/4.png';
import image5 from '../../../assets/img/Methodology/Implementation/5.png';
import thumb5 from '../../../assets/img/Methodology/Implementation/thumbs/5.png';
import image6 from '../../../assets/img/Methodology/Implementation/6.png';
import thumb6 from '../../../assets/img/Methodology/Implementation/thumbs/6.png';
import image7 from '../../../assets/img/Methodology/Implementation/7.png';
import thumb7 from '../../../assets/img/Methodology/Implementation/thumbs/7.png';
import image8 from '../../../assets/img/Methodology/Implementation/8.jpg';
import thumb8 from '../../../assets/img/Methodology/Implementation/thumbs/8.jpg';
import image9 from '../../../assets/img/Methodology/Implementation/9.jpg';
import thumb9 from '../../../assets/img/Methodology/Implementation/thumbs/9.jpg';

const images = [
    {
        original: image1,
        thumbnail: thumb1,
        description :'Sun rise at Ella Rock Sri Lanka',
    },
    {
        original: image2,
        thumbnail: thumb2,
        description :'View at the Little Adams Peak',
    },
    {
        original: image3,
        thumbnail: thumb3,
        description :'Nine Arch Bridge',
    },
    {
        original: image4,
        thumbnail: thumb4,
        description :'Rawana Waterfalls',
    },
    {
        original: image5,
        thumbnail: thumb5,
        description :'Dowa Temple',
    },
    {
        original: image6,
        thumbnail: thumb6,
        description :'Bogoda wooden bridge',
    },
    {
        original: image7,
        thumbnail: thumb7,
        description :'Kinnellan Tea Factory',
    },
    // {
    //     original: image8,
    //     thumbnail: thumb8,
    //     description :'Mounting the Arduino Mega and the Power distribution board to the bin',
    // },
    // {
    //     original: image9,
    //     thumbnail: thumb9,
    //     description :'LEDs that are used to notify the status of the bin',
    // },
];

class Implementation extends Component {
    render() {
        return (
            <div className={'row justify-content-center'}>
                <ImageGallery items={images} showPlayButton={false} autoPlay={true}/>;
            </div>
        );
    }
}

export default Implementation;
import React, {Component} from 'react';
import ImageGallery from "react-image-gallery";

import image1 from '../../../assets/img/Methodology/Implementation/1.jpg';
import thumb1 from '../../../assets/img/Methodology/Implementation/thumbs/1.jpg';
import image2 from '../../../assets/img/Methodology/Implementation/2.jpg';
import thumb2 from '../../../assets/img/Methodology/Implementation/thumbs/2.jpg';
import image3 from '../../../assets/img/Methodology/Implementation/3.jpg';
import thumb3 from '../../../assets/img/Methodology/Implementation/thumbs/3.jpg';
import image4 from '../../../assets/img/Methodology/Implementation/4.jpg';
import thumb4 from '../../../assets/img/Methodology/Implementation/thumbs/4.jpg';
import image5 from '../../../assets/img/Methodology/Implementation/5.jpg';
import thumb5 from '../../../assets/img/Methodology/Implementation/thumbs/5.jpg';
import image6 from '../../../assets/img/Methodology/Implementation/6.jpg';
import thumb6 from '../../../assets/img/Methodology/Implementation/thumbs/6.jpg';
import image7 from '../../../assets/img/Methodology/Implementation/7.jpg';
import thumb7 from '../../../assets/img/Methodology/Implementation/thumbs/7.jpg';
import image8 from '../../../assets/img/Methodology/Implementation/8.jpg';
import thumb8 from '../../../assets/img/Methodology/Implementation/thumbs/8.jpg';
import image9 from '../../../assets/img/Methodology/Implementation/9.jpg';
import thumb9 from '../../../assets/img/Methodology/Implementation/thumbs/9.jpg';

const images = [
    {
        original: image1,
        thumbnail: thumb1,
        description :'Structure was made using Hardboard and Plastic',
    },
    {
        original: image2,
        thumbnail: thumb2,
        description :'Precise cutout should be there to insert the motor',
    },
    {
        original: image3,
        thumbnail: thumb3,
        description :'Servo motor was used to open and close the lid',
    },
    {
        original: image4,
        thumbnail: thumb4,
        description :'Initial integration tests',
    },
    {
        original: image5,
        thumbnail: thumb5,
        description :'Mounting sensors for each waste compartment',
    },
    {
        original: image6,
        thumbnail: thumb6,
        description :'Usage of Arduino UNO for initial tests',
    },
    {
        original: image7,
        thumbnail: thumb7,
        description :'Connecting the mounted sensors with the Arduino Mega and the Power distribution unit',
    },
    {
        original: image8,
        thumbnail: thumb8,
        description :'Mounting the Arduino Mega and the Power distribution board to the bin',
    },
    {
        original: image9,
        thumbnail: thumb9,
        description :'LEDs that are used to notify the status of the bin',
    },
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
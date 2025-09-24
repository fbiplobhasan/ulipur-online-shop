import React from 'react';
import img1 from '../../assets/Marquee/1.jpg'
import img2 from '../../assets/Marquee/2.jpg'
import img3 from '../../assets/Marquee/3.jpg'
import img4 from '../../assets/Marquee/4.jpg'
import img5 from '../../assets/Marquee/5.jpg'

const MarqueeImg = () => {
    return (
        <div className='flex w-[500px] h-[300px]'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
        </div>
    );
};

export default MarqueeImg;
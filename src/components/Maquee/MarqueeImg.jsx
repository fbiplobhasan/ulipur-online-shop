import React from 'react';
import img1 from '../../assets/Marquee/1.png'
import img2 from '../../assets/Marquee/2.png'
import img3 from '../../assets/Marquee/3.png'
import img4 from '../../assets/Marquee/4.png'
import img5 from '../../assets/Marquee/5.png'
import img6 from '../../assets/Marquee/6.png'

const MarqueeImg = () => {
    return (
        <div className='flex w-full h-[80px] gap-5 '>
            <img className='rounded-2xl' src={img1} alt="" />
            <img className='rounded-2xl' src={img2} alt="" />
            <img className='rounded-2xl' src={img3} alt="" />
            <img className='rounded-2xl' src={img4} alt="" />
            <img className='rounded-2xl' src={img5} alt="" />
            <img className='rounded-2xl' src={img6} alt="" />
        </div>
    );
};

export default MarqueeImg;
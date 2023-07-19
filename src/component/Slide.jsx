import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardSlider from './CardSlider';
import Slider1 from '../assets/slider1.png';
import Slider2 from '../assets/slider2.png';
import Slider3 from '../assets/slider3.png';
import Slider4 from '../assets/slider4.png';
import { GrPrevious, GrNext } from 'react-icons/gr';

const Slide = () => {
    const images = [Slider1, Slider2, Slider3, Slider4];
    const titles = [
        <>Kontente <br /> ho solusaun</>,
        <>
            Nafatin <br />kontrola iha
        </>,
        <>Build <br />community</>,
        <>
            Express <br />yourself
        </>,
    ];

    const sliderRef = useRef(null);
    const [showAll, setShowAll] = useState(false);

    const isMobile = window.innerWidth <= 768;

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: showAll ? images.length : (isMobile ? 1 : 3),
        slidesToScroll: 1,
    };

    const nextSlide = () => {
        if (!showAll && sliderRef.current && sliderRef.current.innerSlider) {
            const { slideCount, slidesToShow } = sliderRef.current.innerSlider.props;
            if (slideCount - slidesToShow <= sliderRef.current.innerSlider.state.currentSlide) {
                setShowAll(true);
            }
        }
        sliderRef.current.slickNext();
    };

    const prevSlide = () => {
        setShowAll(false);
        sliderRef.current.slickPrev();
    };

    return (
        <div className='flex flex-col my-32 overflow-hidden'>
            <div className='flex flex-col md:flex-row'>
                <div className='w-full md:w-2/4 px-4 md:pl-32 2xl:pl-72 md:pr-4'>
                    <h1 className='text-6xl md:mr-16'>Haree testamunha...</h1>
                    <p className='text-base mt-10'>
                        Ami agradese ba sira hotu ne`ebé fó sasin pozitivu kona-ba ami-nia serbisu haklaken. Ita-boot sira sente katak ida-ne`e
                        signifikante tebes ba ami no ami sei kontinua haka`as an atu fornese solusaun di`ak liu ba ekipamentu ko`alia nian no dezeñu
                        kriativu ba ita-boot sira-nia nesesidade.
                    </p>
                    <div className='mt-8 md:mt-28'>
                        <button className='text-black border-2 border-black w-12 h-12 rounded-full px-4 py-2' onClick={prevSlide}>
                            <GrPrevious />
                        </button>
                        <button className='text-black border-2 border-black w-12 h-12 rounded-full px-4 py-2 ml-2' onClick={nextSlide}>
                            <GrNext />
                        </button>
                    </div>
                </div>
                <div className='w-full md:w-3/4 mt-8 px-6 md:px-0 md:mt-0'>
                    <div style={{ paddingRight: '16px' }}>
                        <Slider {...settings} ref={sliderRef}>
                            {images.map((image, index) => (
                                <div key={index} style={{ marginRight: '16px' }}>
                                    <CardSlider img={image} title={titles[index]} more='Haree liu tan >' />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide;

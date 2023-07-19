import React from 'react';
import Card from './Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Header = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="bg-header-color bg-opacity-50">
            <div className="container mx-auto px-4 md:px-28 pt-12">
                <div className="flex flex-col items-center md:flex-row">
                    <h1 className="text-4xl md:text-6xl text-secondary-color text-center md:text-left mb-8 md:mb-0">
                        Solusaun ne`ebé sei halo fasil o...
                    </h1>
                    <div className="text-base md:text-lg font-thin text-center md:text-left md:ml-8 mt-4 md:mt-0">
                        <p>Ami hakarak atu fó solusaun teknolojia ne`ebé di`ak liu hotu ne`ebé bele hasa`e ita-nia negósiu..</p>
                        <p>By installing WhatsApp, you agree to our Terms & Privacy Policy.</p>
                    </div>
                </div>
                <div className="mt-12 md:mt-20">
                    <Slider {...settings}>
                        <Card
                            app="Desktop"
                            title="Software Kasir (POS)"
                            desc="Iha mundu negósiu dijitál ne'ebé boot liu, iha software rejistu osan ne'ebé loos mak xave ba susesu. Ami fornese solusaun software kazáriu oin-oin ne'ebé bele adapta ba nesesidade negósiu nian."
                        />
                        <Card
                            app="Mobile App"
                            title="Design Varanda"
                            desc="Ami-nia ekipa dezenvolvimentu iha esperiénsia atu kria aplikasaun Android úniku no funsional ho lian programa Java."
                        />
                        <Card
                            app="Website Design"
                            title="Design Varanda"
                            desc="Website ida-ne'ebé atrativu no responsivu mak xave ba susesu iha mundu dijitál. Ami-nia ekipa dezeñu iha kompromisu atu kria dezeñu website ida-ne'ebé esthetikamente kontente, intuitivu no tuir imi-nia identidade negósiu."
                        />
                        <Card
                            app="Desktop"
                            title="Software Kasir (POS)"
                            desc="Iha mundu negósiu dijitál ne'ebé boot liu, iha software rejistu osan ne'ebé loos mak xave ba susesu. Ami fornese solusaun software kazáriu oin-oin ne'ebé bele adapta ba nesesidade negósiu nian."
                        />
                        <Card
                            app="Mobile App"
                            title="Design Varanda"
                            desc="Ami-nia ekipa dezenvolvimentu iha esperiénsia atu kria aplikasaun Android úniku no funsional ho lian programa Java."
                        />
                    </Slider>
                </div>
                <p className="text-center py-6 md:py-9">
                    Klik <a href="https://www.whatsapp.com/dl" target="_blank" rel="noopener noreferrer"><u>whatsapp.com/dl</u></a> hodi kontaktu no hatene barak liu tan
                </p>
            </div>
        </div>
    );
};


export default Header;

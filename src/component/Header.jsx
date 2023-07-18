import React from 'react';
import Card from './Card';

const Header = () => {
    return (
        <div className='bg-header-color bg-opacity-50'>
            <div className='container mx-auto md:px-28 pt-12'>
                <div className='flex flex-col md:flex-row justify-center items-center'>
                    <h1 className='text-6xl text-secondary-color text-center mb-8 md:mb-0'>Solusaun ne`ebé sei halo fasil o...</h1>
                    <div className='text-lg font-thin text-center md:ml-8'>
                        <p>
                            Ami hakarak atu fó solusaun teknolojia ne`ebé di`ak liu hotu ne`ebé bele hasa`e ita-nia negósiu..
                        </p>
                        <p>
                            By installing WhatsApp, you agree to our Terms & Privacy Policy.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-6 mt-20 justify-center'>
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
                </div>
                <p className='text-center py-9'>
                    Klik <a href="https://www.whatsapp.com/dl" target="_blank" rel="noopener noreferrer"><u>whatsapp.com/dl</u></a> hodi kontaktu no hatene barak liu tan
                </p>

            </div>
        </div>
    );
}

export default Header;

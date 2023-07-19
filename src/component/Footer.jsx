import React from 'react';
import { Link } from 'react-router-dom';
import { BsTelephone, BsTwitter, BsYoutube, BsInstagram } from 'react-icons/bs';
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineDown } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <div className='bg-secondary-color flex text-center md:text-left flex-col md:flex-row py-4 px-4 md:px-6'>
        <div className='flex flex-wrap px-4 md:my-24 md:px-16 md:w-1/4 mb-4 md:mb-0'>
          <button className='bg-green-400 text-white w-36 mx-auto md:mx-0 rounded-full h-12 px-4 flex items-center'>
            <BsTelephone className='mr-1 font-extrabold' />
            KONTAKU
          </button>
        </div>
        <div className='text-white py-6 md:w-1/4'>
          <p className='text-xs mb-4'>Saida mak ami Halo</p>
          <div className='flex flex-col text-lg font-normal gap-2'>
            <Link to='/features'>Features</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/seguransa'>Seguransa</Link>
            <Link to='/ba-negosiu'>Ba Negosiu</Link>
          </div>
        </div>
        <div className='text-white py-6 md:w-1/4'>
          <p className='text-xs mb-4'>Empreza</p>
          <div className='flex flex-col text-lg font-normal gap-2'>
            <Link to='/konaba-ami'>Konaba Ami</Link>
            <Link to='/karreira'>Karreira</Link>
            <Link to='/produtu'>Produtu</Link>
            <Link to='/sustentabilidade'>Sustentabilidade</Link>
          </div>
        </div>
        <div className='text-white py-6 md:w-1/4'>
          <p className='text-xs mb-4'>Apoiu</p>
          <div className='flex flex-col text-lg font-normal gap-2'>
            <Link to='/kontaktu-ami'>Kontaktu Ami</Link>
            <Link to='/sentru-ajuda'>Sentru Ajuda</Link>
            <Link to='/korona-virus'>Korona Virus</Link>
            <Link to='/seguransa-advisor'>Seguransa Advisor</Link>
          </div>
        </div>
        <div className='text-white py-6 md:w-1/4'>
          <p className='text-xs mb-4'>Ami nia Enderesu</p>
          <Link to='/edifisiu'>Edifísiu</Link>
          <p className='my-3'>Bemori Has-Laran. Rua Belarmino Lobo Dili Timor-Leste</p>
          <p className='mb-1'>Email: info@uma.it</p>
        </div>
      </div>
      <hr className='border-white' />
      <div className='bg-secondary-color py-3 flex flex-col md:flex-row items-center justify-center md:mx-auto'>
        <div className='flex flex-col md:flex-row items-center justify-center md:ml-6 md:w-2/4'>
          <p className='text-white text-xs md:mr-8'>2023 © UMA.IT</p>
          <p className='text-white text-xs md:mr-8'>Termo & Kondisaun</p>
          <div className='flex my-3 md:my-0 md:mx-20 gap-6'>
            <button className='w-10 h-10 rounded-full border-2 border-white flex items-center justify-center'>
              <BsTwitter className='text-white' />
            </button>
            <button className='w-10 h-10 rounded-full border-2 border-white flex items-center justify-center'>
              <BsYoutube className='text-white' />
            </button>
            <button className='w-10 h-10 rounded-full border-2 border-white flex items-center justify-center'>
              <BsInstagram className='text-white' />
            </button>
            <button className='w-10 h-10 rounded-full border-2 border-white flex items-center justify-center'>
              <BiLogoFacebook className='text-white' />
            </button>
          </div>
        </div>
        <button className='text-white w-36 md:w-52 h-10 md:h-14 rounded-3xl border-2 p-2 px-6 flex items-center justify-between text-base font-bold mt-4 md:mt-0'>
          Tetum <AiOutlineDown />
        </button>
      </div>

    </>
  );
};

export default Footer;

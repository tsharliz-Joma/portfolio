import React from 'react';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import content from './Header.content.json';

const Header = () => {
  const headshot = content.Header.Headshot.src;
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center h-screen bg-cover bg-center bg-no-repeat bg-[url('/static/img/header.jpeg')]">
      <div className='container flex flex-col sm:justify-center sm:items-center gap-10'>
        <div className='flex justify-center'>
          <Image
            src={headshot}
            alt='headshot'
            height={1000}
            width={1000}
            className='w-full h-auto sm:w-1/2 sm:h-auto object-cover '
          />
        </div>

        <div className='flex flex-col gap-7 sm:container sm:w-4/5'>
          <p className='text-black text-center'>
            Sudan Born | South Gippsland raised | Sydney Based{' '}
          </p>{' '}
          <p className='text-black text-4xl font-bold'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text
            ever since the 1500s, when an unknown printer took
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;

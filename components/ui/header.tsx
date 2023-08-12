import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header id='start'>
      <nav className='flex items-center justify-between py-8 max-[345px]:px-5 px-16 mx-auto flex-wrap lg:mx-16'>
        <div className='flex lg:items-center lg:space-x-2'>
          <Link
            href='/'
            className='hover:text-gray-600 transition duration-300'
          >
            <div className=' w-32 md:w-48'>
              <h1 className=' max-[345px]:text-base text-2xl font-bold'>
                Francisco Mulet
              </h1>
            </div>
          </Link>
        </div>
        <button
          className='inline-flex p-3 rounded lg:hidden ml-auto text-yellow outline-none hover:text-gray-700'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          } flex flex-col font-medium w-full lg:inline-flex lg:flex-row lg:w-auto lg:items-center lg:justify-center lg:space-x-12`}
        >
          <ul className='flex flex-col font-medium lg:flex-row lg:space-x-20'>
            <li className='mt-5 lg:mt-0'>
              <Link
                href='/#sobremi'
                scroll={false}
                className='hover:text-gray-600 transition duration-300'
              >
                Sobre Mí
              </Link>
            </li>
            <li className='mt-5 lg:mt-0'>
              <Link
                href='/#proyectos'
                scroll={false}
                className='hover:text-gray-600 transition duration-300'
              >
                Proyectos Recientes
              </Link>
            </li>
            <li className='mt-5 lg:mt-0'>
              <Link
                href='/#skills'
                scroll={false}
                className='mt-5 lg:mt-0 hover:text-gray-600 transition duration-300'
              >
                Skills
              </Link>
            </li>
            <li className='mt-5 lg:mt-0'>
              <Link
                href='#contacto'
                scroll={false}
                className='hover:text-gray-700 transition duration-300'
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

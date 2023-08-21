import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

export default function Header() {
  const [active, setActive] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    setActive(!active);
  };

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;
    if (currentTheme === 'dark') {
      return (
        <BsFillSunFill
          size={25}
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <BsFillMoonFill
          size={25}
          onClick={() => setTheme('dark')}
        />
      );
    }
  };

  return (
    <header id='start'>
      <nav className='flex items-center justify-between py-8 max-[345px]:px-5 px-16 mx-auto flex-wrap '>
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
          className='inline-flex p-3 rounded lg:hidden ml-auto text-black dark:text-white outline-none hover:text-black dark:hover:text-white transition duration-300'
          onClick={handleClick}
          aria-label='Boton Menu'
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
                className='hover:text-gray-600 dark:text-white transition duration-300'
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

            <li className='mt-5 lg:mt-0 cursor-pointer'>
              {renderThemeChanger()}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

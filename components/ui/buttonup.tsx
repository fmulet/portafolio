import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { handleScroll } from '@/helpers';

export default function ButtonUp() {
  const [isVisible, setIsVisible] = useState(false);
  const router = usePathname();

  const toggleVisibility = () => {
    if (window.pageYOffset > 250) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Link
      href={router! === '/' ? '/#start' : '#start'}
      onClick={handleScroll as any}
      className={`${
        !isVisible && 'hidden'
      } w-14 h-14 dark:bg-white bg-black text-white dark:text-black text-center font-bold text-lg leading-tight uppercase rounded-full flex items-center justify-center shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out bottom-5 right-5 fixed z-10`}
    >
      &uarr;
    </Link>
  );
}

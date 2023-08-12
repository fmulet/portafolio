import Image from 'next/image';
import Link from 'next/link';
import { Children, ReactNode } from 'react';

interface Props {
  image: string;
  titulo: string;
  tamano: string;
  descripcion: string;
  py?: string;
  link: string;
  github: string;
  children: ReactNode;
}

export default function CardProyecto({
  image,
  titulo,
  descripcion,
  link,
  github,
  children,
}: Props) {
  const childrenArray = Children.toArray(children);
  const isOdd = childrenArray.length % 2 !== 0;

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <Image
        src={image}
        alt={`Imagen ${titulo}`}
        width={350}
        height={0}
        objectFit='contain'
        className='w-full transition delay-150 duration-300 ease-in-out transform hover:scale-110'
      />
      <div className='px-6 py-4'>
        <p className='text-gray-700 text-base'>{descripcion}</p>
      </div>
      <div className='grid grid-cols-2 gap-1'>
        {childrenArray.slice(0, isOdd ? -1 : undefined).map((child) => child)}
      </div>
      {isOdd && (
        <div className='flex justify-center'>
          {childrenArray[childrenArray.length - 1]}
        </div>
      )}
      <div
        className={`grid py-3 px-10 ${
          github === '#' || link === '#'
            ? 'grid-cols-1 justify-center'
            : 'grid-cols-2 gap-3'
        }`}
      >
        {github !== '#' && (
          <Link
            href={github}
            className='bg-black border-2 text-center border-black hover:bg-white text-white hover:text-black  transition duration-300 font-bold py-2 px-4 rounded-full'
            target='_blank'
          >
            Github
          </Link>
        )}
        {link !== '#' && (
          <Link
            href={link}
            target='_blank'
            className='bg-black border-2 border-black hover:bg-white text-white text-center hover:text-black  transition duration-300 font-bold py-2 px-4 rounded-full'
          >
            Link
          </Link>
        )}
      </div>
    </div>
  );
}

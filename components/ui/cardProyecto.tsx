import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
  image: string;
  titulo: string;
  tamano: string;
  className?: string;
  descripcion: string;
  py?: string;
  link: string;
  github: string;
  children: ReactNode;
}

export default function CardProyecto({
  image,
  titulo,
  tamano,
  descripcion,
  className,
  link,
  github,
  children,
}: Props) {
  return (
    <div className={` rounded-2xl overflow-hidden shadow-lg`}>
      <Image
        src={image}
        alt={`Imagen ${titulo}`}
        width={350}
        height={197}
        objectFit='contain'
        className='w-full h-72 transition delay-150 duration-300 ease-in-out transform hover:scale-110'
      />

      <div className={`${className} justify-center my-3 text-center`}>
        <p
          className={`text-black rounded-full ${tamano} inline-flex font-bold`}
        >
          {titulo}
        </p>
      </div>
      <div className={`${className} justify-center my-3 text-center`}>
        <span className='text-black rounded-full inline-flex'>
          {descripcion}
        </span>
      </div>
      <div className={`grid grid-cols-3 gap-1`}>{children}</div>

      <div
        className={`grid py-3 px-10 ${
          github === '#' || link === '#'
            ? 'grid-cols-1 justify-center'
            : 'grid-cols-2 gap-3 '
        }  `}
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

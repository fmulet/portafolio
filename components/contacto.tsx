import Link from 'next/link';
import { BiLogoGmail, BiLogoLinkedin } from 'react-icons/bi';

export const Contacto = () => {
  return (
    <div
      className='flex my-10 md:mx-32'
      id='contacto'
    >
      <div className='grid py-10 items-center'>
        <div>
          <h2 className='font-bold max-[345px]:text-4xl text-5xl mb-5'>
            Contacto
          </h2>
        </div>
        <div className='grid'>
          <p className='text-2xl my-10'>Más información</p>
          <Link
            href='https://www.linkedin.com/in/fmulet/'
            target='_blank'
          >
            <BiLogoLinkedin
              className='text-black mr-1'
              size={100}
            />
          </Link>
        </div>

        <div className='grid'>
          <p className='text-2xl my-10'>Envíame un correo</p>
          <Link
            href='mailto:fmulete@gmail.com'
            target='_blank'
          >
            <BiLogoGmail
              className='text-black mr-1'
              size={100}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

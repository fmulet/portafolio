import Link from 'next/link';
import { BiLogoGmail, BiLogoLinkedin } from 'react-icons/bi';

export const Contacto = () => {
  return (
    <div
      className='my-20 md:mx-32'
      id='contacto'
    >
      <h2 className='font-bold max-[345px]:text-4xl text-5xl mb-5'>Contacto</h2>
      <div className='grid lg:grid-cols-2'>
        <div>
          <p className='text-2xl my-10'>Más información</p>
          <Link
            href='https://www.linkedin.com/in/fmulet/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Perfil de LinkedIn'
            className='inline-block'
          >
            <BiLogoLinkedin
              className='text-black'
              size={100}
            />
            <span className='sr-only'>Perfil de LinkedIn</span>
          </Link>
        </div>
        <div>
          <p className='text-2xl my-10'>Envíame un correo</p>
          <Link
            href='mailto:fmulete@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Enviar correo a fmulete@gmail.com'
            className='inline-block'
          >
            <BiLogoGmail
              className='text-black'
              size={100}
            />
            <span className='sr-only'>Enviar correo a fmulete@gmail.com</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

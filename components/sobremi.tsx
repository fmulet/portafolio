import Image from 'next/image';
import Link from 'next/link';

export const SobreMi = () => {
  return (
    <div
      className='flex my-10 md:mx-32'
      id='sobremi'
    >
      <div className='grid md:gap-5 md:grid-cols-2 py-10 items-center'>
        <div>
          <h2 className='font-bold text-5xl mb-5'>Bienvenido(a)</h2>
          <p>
            Soy Francisco Mulet, Desarrollador Full Stack. Me apasiona
            transformar ideas en aplicaciones web y móviles de alta calidad. A
            lo largo de mi carrera, he colaborado en la creación de sitios web
            corporativos y plataformas de comercio electrónico para pequeñas y
            medianas empresas. Mi enfoque siempre ha sido ofrecer soluciones
            efectivas y enfrentar cada desafío técnico con entusiasmo y
            dedicación.
          </p>
          <Link
            href={
              'https://drive.google.com/file/d/1tyJ1en2bKKv_ecZQCtQ12DpebgSGL8tW/view?usp=drive_link'
            }
            target='_blank'
            className='bg-black border-2 border-black hover:bg-white text-white hover:text-black  transition duration-300 font-bold py-2 px-4 rounded-full my-5'
          >
            Currículum
          </Link>
        </div>
        <div>
          <Image
            src='/perfil.jpeg'
            width={250}
            height={250}
            alt='imagen perfil'
            className='mx-auto rounded-full mt-10 lg:mt-0'
          />
        </div>
      </div>
    </div>
  );
};

import {
    BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoTypescript, BiLogoWordpress
} from 'react-icons/bi';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

import CardProyecto from './ui/cardProyecto';
import { Etiqueta } from './ui/etiqueta';

export const Proyectos = () => {
  return (
    <div
      className='flex my-10 lg:mx-32'
      id='proyectos'
    >
      <div className='grid md:gap-5 py-10 items-center'>
        <div>
          <h2 className='max-[345px]:text-2xl text-left font-bold text-[35px] lg:text-5xl mb-10'>
            Proyectos Recientes
          </h2>
        </div>
        <div className='grid mx-auto md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {' '}
          <CardProyecto
            image='/emisoca.jpg'
            titulo='Emisoca Propiedades'
            descripcion='Desarrollo Web para la empresa inmobiliaria Emisoca Propiedades'
            tamano='text-xl'
            link='https://www.emisocapropiedades.cl/'
            github='https://github.com/fmulet/emisocapropiedades'
          >
            <Etiqueta texto={'Next JS'}>
              <SiNextdotjs
                className='text-black mr-1'
                size={20}
              />
            </Etiqueta>
            <Etiqueta texto={'Tailwind'}>
              <SiTailwindcss
                className='text-black mr-1'
                size={20}
              />
            </Etiqueta>
            <Etiqueta texto={'Typescript'}>
              <BiLogoTypescript
                className='text-black mr-1'
                size={20}
              />
            </Etiqueta>
          </CardProyecto>
          <CardProyecto
            image='/singular.jpg'
            titulo='Grupo Singular'
            descripcion='Desarrollo Web para la empresa consultora Grupo Singular'
            tamano='text-xl'
            link='https://www.gruposingular.cl/'
            github='#'
          >
            <Etiqueta texto={'Next JS'}>
              {' '}
              <SiNextdotjs
                className='text-black mr-1'
                size={20}
              />
            </Etiqueta>
            <Etiqueta texto={'Tailwind'}>
              <SiTailwindcss
                className='text-black mr-1'
                size={20}
              />
            </Etiqueta>

            <Etiqueta texto={'Typescript'}>
              <BiLogoTypescript
                className='text-black mr-1'
                size={20}
              />
            </Etiqueta>
          </CardProyecto>
          <CardProyecto
            image='/emprendedor.jpg'
            titulo='El Viaje del Emprendedor'
            descripcion='Desarrollo Web plataforma educativa El Viaje del Emprendedor para la empresa Grupo Singular'
            tamano='text-xl'
            link='https://elviajedelemprendedor.gruposingular.cl'
            github='#'
          >
            <Etiqueta texto={'HTML5'}>
              <BiLogoHtml5
                className='text-black mr-1'
                size={20}
              />
            </Etiqueta>

            <Etiqueta texto={'CSS3'}>
              <BiLogoCss3
                className='text-black mr-1'
                size={20}
              />
            </Etiqueta>

            <Etiqueta texto={'Javascript'}>
              <BiLogoJavascript
                className='text-black mr-1'
                size={20}
              />
            </Etiqueta>
            <div className='col-start-2 col-end-3'>
              <Etiqueta texto={'Wordpress'}>
                <BiLogoWordpress
                  className='text-black mr-1'
                  size={20}
                />
              </Etiqueta>
            </div>
          </CardProyecto>
        </div>
      </div>
    </div>
  );
};

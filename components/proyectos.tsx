import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoWordpress,
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
          <h2 className='text-left font-bold text-[35px] lg:text-5xl mb-10'>
            Proyectos Recientes
          </h2>
        </div>
        <div className='grid mx-auto lg:grid-cols-3 gap-10'>
          <CardProyecto
            image='/emisoca.avif'
            titulo='Emisoca Propiedades'
            descripcion='Desarrollo Web para la empresa inmobiliaria Emisoca Propiedades'
            tamano='text-xl'
            link='https://www.emisocapropiedades.cl/'
            github='https://github.com/fmulet/emisocapropiedades'
            columns='grid-cols-3'
            childre={[
              <>
                <Etiqueta
                  texto={'Next JS'}
                  children={
                    <SiNextdotjs
                      className='text-black mr-1'
                      size={20}
                    />
                  }
                />
                <Etiqueta
                  texto={'Tailwind'}
                  children={
                    <SiTailwindcss
                      className='text-black mr-1'
                      size={20}
                    />
                  }
                />
                <Etiqueta
                  texto={'Typescript'}
                  children={
                    <BiLogoTypescript
                      className='text-black mr-1'
                      size={20}
                    />
                  }
                />
              </>,
            ]}
          />
          <CardProyecto
            image='/singular.avif'
            titulo='Grupo Singular'
            descripcion='Desarrollo Web para la empresa consultora Grupo Singular'
            tamano='text-xl'
            columns='grid-cols-3'
            link='https://www.gruposingular.cl/'
            github='#'
            childre={[
              <>
                <Etiqueta
                  texto={'Next JS'}
                  children={
                    <SiNextdotjs
                      className='text-black mr-1'
                      size={20}
                    />
                  }
                />
                <Etiqueta
                  texto={'Tailwind'}
                  children={
                    <SiTailwindcss
                      className='text-black mr-1'
                      size={20}
                    />
                  }
                />
                <Etiqueta
                  texto={'Typescript'}
                  children={
                    <BiLogoTypescript
                      className='text-black mr-1'
                      size={20}
                    />
                  }
                />
              </>,
            ]}
          />
          <CardProyecto
            image='/emprendedor.avif'
            titulo='El Viaje del Emprendedor'
            descripcion='Desarrollo Web plataforma educativa El Viaje del Emprendedor para la empresa Grupo Singular'
            tamano='text-xl'
            columns='grid-cols-3'
            link='https://elviajedelemprendedor.gruposingular.cl'
            github='#'
            childre={[
              <>
                <Etiqueta
                  texto={'HTML5'}
                  children={
                    <BiLogoHtml5
                      className='text-black mr-1'
                      size={20}
                    />
                  }
                />
                <Etiqueta
                  texto={'CSS3'}
                  children={
                    <BiLogoCss3
                      className='text-black mr-1'
                      size={20}
                    />
                  }
                />
                <Etiqueta
                  texto={'Javascript'}
                  children={
                    <BiLogoJavascript
                      className='text-black mr-1'
                      size={20}
                    />
                  }
                />
                <div className='col-start-2 col-end-3'>
                  <Etiqueta
                    texto={'Wordpress'}
                    children={
                      <BiLogoWordpress
                        className='text-black mr-1'
                        size={20}
                      />
                    }
                  />
                </div>
              </>,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

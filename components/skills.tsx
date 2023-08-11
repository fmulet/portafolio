import {
    BiLogoCss3, BiLogoDocker, BiLogoFlutter, BiLogoGit, BiLogoGithub, BiLogoGraphql, BiLogoHtml5,
    BiLogoJava, BiLogoJavascript, BiLogoMongodb, BiLogoReact, BiLogoSpringBoot, BiLogoTailwindCss,
    BiLogoTypescript, BiLogoVisualStudio, BiLogoWordpress
} from 'react-icons/bi';
import { SiDart, SiMysql, SiNestjs, SiNextdotjs } from 'react-icons/si';

export const Skills = () => {
  return (
    <div
      className='flex my-10 md:mx-32'
      id='skills'
    >
      <div className='py-10 items-center'>
        <div>
          <h2 className='font-bold max-[345px]:text-4xl text-5xl mb-10'>
            Skills
          </h2>
          <p className='text-2xl my-10'>Lenguajes</p>
          <div className='grid grid-cols-3 lg:grid-cols-7 lg:gap-8'>
            <BiLogoHtml5
              className='text-black mr-1'
              size={100}
            />
            <BiLogoCss3
              className='text-black mr-1'
              size={100}
            />
            <BiLogoJavascript
              className='text-black mr-1'
              size={100}
            />
            <BiLogoTypescript
              className='text-black mr-1'
              size={100}
            />
            <BiLogoJava
              className='text-black mr-1'
              size={100}
            />
            <SiDart
              className='text-black mr-1'
              size={100}
            />
          </div>
          <p className='text-2xl my-10'>Frameworks y Librerías</p>
          <div className='grid grid-cols-3 lg:grid-cols-7 lg:gap-8'>
            <BiLogoReact
              className='text-black mr-1'
              size={100}
            />
            <SiNextdotjs
              className='text-black mr-1'
              size={100}
            />
            <SiNestjs
              className='text-black mr-1'
              size={100}
            />
            <BiLogoTailwindCss
              className='text-black mr-1'
              size={100}
            />
            <BiLogoSpringBoot
              className='text-black mr-1'
              size={100}
            />
            <BiLogoWordpress
              className='text-black mr-1'
              size={100}
            />
            <BiLogoFlutter
              className='text-black mr-1'
              size={100}
            />
          </div>
          <p className='text-2xl my-10'>Tecnologías y Herramientas</p>
          <div className='grid grid-cols-3 lg:grid-cols-7 lg:gap-8'>
            <BiLogoVisualStudio
              className='text-black mr-1'
              size={100}
            />
            <BiLogoGit
              className='text-black mr-1'
              size={100}
            />
            <BiLogoGithub
              className='text-black mr-1'
              size={100}
            />
            <BiLogoMongodb
              className='text-black mr-1'
              size={100}
            />
            <SiMysql
              className='text-black mr-1'
              size={100}
            />
            <BiLogoGraphql
              className='text-black mr-1'
              size={100}
            />
            <BiLogoDocker
              className='text-black mr-1'
              size={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

import { Inter } from 'next/font/google';

import { Contacto } from '@/components/contacto';
import Layout from '@/components/layout';
import { Proyectos } from '@/components/proyectos';
import { Skills } from '@/components/skills';
import { SobreMi } from '@/components/sobremi';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout title='Portafolio Francisco Mulet'>
      <div>
        <SobreMi />
        <Proyectos />
        <Skills />
        <Contacto />
      </div>
    </Layout>
  );
}

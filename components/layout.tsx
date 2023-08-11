import Head from 'next/head';
import { ReactElement } from 'react';

import Header from '@/components/ui/header';

import ButtonUp from './ui/buttonup';

// import ButtonUp from '@/components/ui/buttonup';

// import Footer from './footer';

export default function Layout({
  children,
  title,
  image,
  description = 'Gestión Inmobiliaria',
}: {
  children: ReactElement;
  title: string;
  description?: string;
  image?: string;
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name='description'
          content={description}
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
        <meta
          property='og:title'
          content={title}
        />
        <meta
          property='og:description'
          content={description}
        />
        <meta
          property='og:image'
          content={image}
        />
      </Head>
      <Header />
      <ButtonUp />
      {children}
    </div>
  );
}

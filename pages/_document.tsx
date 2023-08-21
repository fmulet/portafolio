import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html
      lang='en'
      className='scroll-smooth dark'
    >
      <Head />
      <body className='mx-5 lg:mx-24 dark:bg-black dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

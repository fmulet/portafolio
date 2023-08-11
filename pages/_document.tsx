import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html
      lang='en'
      className='scroll-smooth'
    >
      <Head />
      <body className='mx-5 lg:mx-24'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

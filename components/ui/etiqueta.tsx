import { ReactNode } from 'react';

interface Props {
  texto: string;
  children: ReactNode;
}
export const Etiqueta = ({ texto, children }: Props) => {
  return (
    <div className='flex mx-auto justify-center gap-1 py-3'>
      {children}
      <div className='text-sm'>
        <p className='text-black text-center'>{texto}</p>
      </div>
    </div>
  );
};

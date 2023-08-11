import { MouseEvent } from 'react';

export const handleScroll = (e: MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  e.preventDefault();
  const href = e.currentTarget.href;
  const targetId = href.replace(/.*\#/, '');
  const elem = document.getElementById(targetId);
  elem?.scrollIntoView({
    behavior: 'smooth',
  });
};

export const formatearFecha = (fecha: Date) => {
  return new Date(fecha).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
};


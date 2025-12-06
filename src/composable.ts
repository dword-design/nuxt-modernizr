import modernizr from 'modernizr';

declare global {
  var Modernizr: typeof modernizr;
}

export const useModernizr = () => globalThis.Modernizr;

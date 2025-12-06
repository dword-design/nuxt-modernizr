import type modernizr from 'modernizr';

declare global {
  var Modernizr: typeof modernizr;
}

export const useModernizr = () =>
  import.meta.client ? globalThis.Modernizr : null;

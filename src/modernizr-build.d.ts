declare module 'modernizr-build' {
  export interface ModernizrConfig {
    classPrefix: string;
    enableClasses: boolean;
    enableJSClass: boolean;
    scriptGlobalName: string;
    usePrefixes: boolean;
    minify: boolean;
    options: string[];
    'feature-detects': string[];
  }

  export interface Modernizr {
    build(
      config: Partial<ModernizrConfig>,
      callback: (result: string) => void,
    ): void;
  }
  const modernizr: Modernizr;

  export default modernizr;
}

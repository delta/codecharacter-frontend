import { bm as e } from './index-3b0785b0.js';
function r(e, r) {
  for (var i = 0; i < r.length; i++) {
    const t = r[i];
    if ('string' != typeof t && !Array.isArray(t))
      for (const r in t)
        if ('default' !== r && !(r in e)) {
          const i = Object.getOwnPropertyDescriptor(t, r);
          i &&
            Object.defineProperty(
              e,
              r,
              i.get ? i : { enumerable: !0, get: () => t[r] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var i, t;
var a = (function () {
  if (t) return i;
  function e(e) {
    (e.languages.glsl = e.languages.extend('clike', {
      comment: [/\/\*[\s\S]*?\*\//, /\/\/(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/],
      number: /(?:\b0x[\da-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ulf]*/i,
      keyword:
        /\b(?:attribute|const|uniform|varying|buffer|shared|coherent|volatile|restrict|readonly|writeonly|atomic_uint|layout|centroid|flat|smooth|noperspective|patch|sample|break|continue|do|for|while|switch|case|default|if|else|subroutine|in|out|inout|float|double|int|void|bool|true|false|invariant|precise|discard|return|d?mat[234](?:x[234])?|[ibdu]?vec[234]|uint|lowp|mediump|highp|precision|[iu]?sampler[123]D|[iu]?samplerCube|sampler[12]DShadow|samplerCubeShadow|[iu]?sampler[12]DArray|sampler[12]DArrayShadow|[iu]?sampler2DRect|sampler2DRectShadow|[iu]?samplerBuffer|[iu]?sampler2DMS(?:Array)?|[iu]?samplerCubeArray|samplerCubeArrayShadow|[iu]?image[123]D|[iu]?image2DRect|[iu]?imageCube|[iu]?imageBuffer|[iu]?image[12]DArray|[iu]?imageCubeArray|[iu]?image2DMS(?:Array)?|struct|common|partition|active|asm|class|union|enum|typedef|template|this|resource|goto|inline|noinline|public|static|extern|external|interface|long|short|half|fixed|unsigned|superp|input|output|hvec[234]|fvec[234]|sampler3DRect|filter|sizeof|cast|namespace|using)\b/,
    })),
      e.languages.insertBefore('glsl', 'comment', {
        preprocessor: {
          pattern:
            /(^[ \t]*)#(?:(?:define|undef|if|ifdef|ifndef|else|elif|endif|error|pragma|extension|version|line)\b)?/m,
          lookbehind: !0,
          alias: 'builtin',
        },
      });
  }
  return (t = 1), (i = e), (e.displayName = 'glsl'), (e.aliases = []), i;
})();
const n = r({ __proto__: null, default: e(a) }, [a]);
export { n as g };
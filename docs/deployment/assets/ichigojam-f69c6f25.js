import { bm as E } from './index-3b0785b0.js';
function e(E, e) {
  for (var r = 0; r < e.length; r++) {
    const t = e[r];
    if ('string' != typeof t && !Array.isArray(t))
      for (const e in t)
        if ('default' !== e && !(e in E)) {
          const r = Object.getOwnPropertyDescriptor(t, e);
          r &&
            Object.defineProperty(
              E,
              e,
              r.get ? r : { enumerable: !0, get: () => t[e] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(E, Symbol.toStringTag, { value: 'Module' }),
  );
}
var r, t;
var n = (function () {
  if (t) return r;
  function E(E) {
    E.languages.ichigojam = {
      comment: /(?:\B'|REM)(?:[^\n\r]*)/i,
      string: {
        pattern: /"(?:""|[!#$%&'()*,\/:;<=>?^_ +\-.A-Z\d])*"/i,
        greedy: !0,
      },
      number: /\B#[0-9A-F]+|\B`[01]+|(?:\b\d+\.?\d*|\B\.\d+)(?:E[+-]?\d+)?/i,
      keyword:
        /\b(?:BEEP|BPS|CASE|CLEAR|CLK|CLO|CLP|CLS|CLT|CLV|CONT|COPY|ELSE|END|FILE|FILES|FOR|GOSUB|GSB|GOTO|IF|INPUT|KBD|LED|LET|LIST|LOAD|LOCATE|LRUN|NEW|NEXT|OUT|RIGHT|PLAY|POKE|PRINT|PWM|REM|RENUM|RESET|RETURN|RTN|RUN|SAVE|SCROLL|SLEEP|SRND|STEP|STOP|SUB|TEMPO|THEN|TO|UART|VIDEO|WAIT)(?:\$|\b)/i,
      function:
        /\b(?:ABS|ANA|ASC|BIN|BTN|DEC|END|FREE|HELP|HEX|I2CR|I2CW|IN|INKEY|LEN|LINE|PEEK|RND|SCR|SOUND|STR|TICK|USR|VER|VPEEK|ZER)(?:\$|\b)/i,
      label: /(?:\B@[^\s]+)/i,
      operator: /<[=>]?|>=?|\|\||&&|[+\-*\/=|&^~!]|\b(?:AND|NOT|OR)\b/i,
      punctuation: /[\[,;:()\]]/,
    };
  }
  return (t = 1), (r = E), (E.displayName = 'ichigojam'), (E.aliases = []), r;
})();
const i = e({ __proto__: null, default: E(n) }, [n]);
export { i };
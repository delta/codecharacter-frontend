import { bz as e } from './index-24a58ae8.js';
function n(e, n) {
  for (var r = 0; r < n.length; r++) {
    const t = n[r];
    if ('string' != typeof t && !Array.isArray(t))
      for (const n in t)
        if ('default' !== n && !(n in e)) {
          const r = Object.getOwnPropertyDescriptor(t, n);
          r &&
            Object.defineProperty(
              e,
              n,
              r.get ? r : { enumerable: !0, get: () => t[n] },
            );
        }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var r, t;
var i = (function () {
  if (t) return r;
  function e(e) {
    e.languages.verilog = {
      comment: /\/\/.*|\/\*[\s\S]*?\*\//,
      string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 },
      property: /\B\$\w+\b/,
      constant: /\B`\w+\b/,
      function: /\w+(?=\()/,
      keyword:
        /\b(?:alias|and|assert|assign|assume|automatic|before|begin|bind|bins|binsof|bit|break|buf|bufif0|bufif1|byte|class|case|casex|casez|cell|chandle|clocking|cmos|config|const|constraint|context|continue|cover|covergroup|coverpoint|cross|deassign|default|defparam|design|disable|dist|do|edge|else|end|endcase|endclass|endclocking|endconfig|endfunction|endgenerate|endgroup|endinterface|endmodule|endpackage|endprimitive|endprogram|endproperty|endspecify|endsequence|endtable|endtask|enum|event|expect|export|extends|extern|final|first_match|for|force|foreach|forever|fork|forkjoin|function|generate|genvar|highz0|highz1|if|iff|ifnone|ignore_bins|illegal_bins|import|incdir|include|initial|inout|input|inside|instance|int|integer|interface|intersect|join|join_any|join_none|large|liblist|library|local|localparam|logic|longint|macromodule|matches|medium|modport|module|nand|negedge|new|nmos|nor|noshowcancelled|not|notif0|notif1|null|or|output|package|packed|parameter|pmos|posedge|primitive|priority|program|property|protected|pull0|pull1|pulldown|pullup|pulsestyle_onevent|pulsestyle_ondetect|pure|rand|randc|randcase|randsequence|rcmos|real|realtime|ref|reg|release|repeat|return|rnmos|rpmos|rtran|rtranif0|rtranif1|scalared|sequence|shortint|shortreal|showcancelled|signed|small|solve|specify|specparam|static|string|strong0|strong1|struct|super|supply0|supply1|table|tagged|task|this|throughout|time|timeprecision|timeunit|tran|tranif0|tranif1|tri|tri0|tri1|triand|trior|trireg|type|typedef|union|unique|unsigned|use|uwire|var|vectored|virtual|void|wait|wait_order|wand|weak0|weak1|while|wildcard|wire|with|within|wor|xnor|xor)\b/,
      important: /\b(?:always_latch|always_comb|always_ff|always)\b ?@?/,
      number:
        /\B##?\d+|(?:\b\d+)?'[odbh] ?[\da-fzx_?]+|\b\d*[._]?\d+(?:e[-+]?\d+)?/i,
      operator: /[-+{}^~%*\/?=!<>&|]+/,
      punctuation: /[[\];(),.:]/,
    };
  }
  return (t = 1), (r = e), (e.displayName = 'verilog'), (e.aliases = []), r;
})();
const a = n({ __proto__: null, default: e(i) }, [i]);
export { a as v };

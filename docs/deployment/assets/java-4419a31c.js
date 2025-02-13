var e, a;
function t() {
  if (a) return e;
  function t(e) {
    var a, t, n;
    (t =
      /\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while|var|null|exports|module|open|opens|provides|requires|to|transitive|uses|with)\b/),
      (n = /\b[A-Z](?:\w*[a-z]\w*)?\b/),
      ((a = e).languages.java = a.languages.extend('clike', {
        'class-name': [n, /\b[A-Z]\w*(?=\s+\w+\s*[;,=())])/],
        keyword: t,
        function: [
          a.languages.clike.function,
          { pattern: /(\:\:)[a-z_]\w*/, lookbehind: !0 },
        ],
        number:
          /\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
        operator: {
          pattern:
            /(^|[^.])(?:<<=?|>>>?=?|->|([-+&|])\2|[?:~]|[-+*/%&|^!=<>]=?)/m,
          lookbehind: !0,
        },
      })),
      a.languages.insertBefore('java', 'class-name', {
        annotation: {
          alias: 'punctuation',
          pattern: /(^|[^.])@\w+/,
          lookbehind: !0,
        },
        namespace: {
          pattern:
            /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)[a-z]\w*(\.[a-z]\w*)+/,
          lookbehind: !0,
          inside: { punctuation: /\./ },
        },
        generics: {
          pattern:
            /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
          inside: {
            'class-name': n,
            keyword: t,
            punctuation: /[<>(),.:]/,
            operator: /[?&|]/,
          },
        },
      });
  }
  return (a = 1), (e = t), (t.displayName = 'java'), (t.aliases = []), e;
}
export { t as r };

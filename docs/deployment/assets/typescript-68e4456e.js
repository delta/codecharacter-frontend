var e, t;
function n() {
  if (t) return e;
  function n(e) {
    (e.languages.typescript = e.languages.extend('javascript', {
      keyword:
        /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
      builtin:
        /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
    })),
      (e.languages.ts = e.languages.typescript);
  }
  return (
    (t = 1), (e = n), (n.displayName = 'typescript'), (n.aliases = ['ts']), e
  );
}
export { n as r };

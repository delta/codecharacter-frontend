var e = Object.defineProperty,
  t = (t, i, s) => (
    ((t, i, s) => {
      i in t
        ? e(t, i, { enumerable: !0, configurable: !0, writable: !0, value: s })
        : (t[i] = s);
    })(t, 'symbol' != typeof i ? i + '' : i, s),
    s
  );
import { t as i, m as s } from './Dashboard-bf38bfb8.js';
import './index-24a58ae8.js';
import './react-code-blocks.esm-2d1e384d.js';
import './extends-64d70faf.js';
import './setPrototypeOf-b9a4b5f8.js';
import './objectWithoutPropertiesLoose-87a5ea27.js';
import './index.es-8a521e47.js';
import './index-06bcf729.js';
import './react-lifecycles-compat.es-642e4ba5.js';
import './_baseFlatten-13b14a1d.js';
import './Modal-5efe701c.js';
import './ThemeProvider-092c2682.js';
import './useWindow-9130f6b7.js';
import './createWithBsPrefix-6a3b0d2e.js';
import './divWithClassName-cc198704.js';
import './MapDesigner-5fad8ad1.js';
import './TourProvider-f8fb0617.js';
import './Container-4692a76f.js';
import './Row-59744247.js';
import './Button-0a98cdad.js';
import './Col-ae03dcbb.js';
import './Form-0bcab3dd.js';
import './FormGroup-06fc443c.js';
var r,
  n,
  o = Object.defineProperty,
  a = Object.getOwnPropertyDescriptor,
  l = Object.getOwnPropertyNames,
  c = Object.prototype.hasOwnProperty,
  d = (e, t, i, s) => {
    if ((t && 'object' == typeof t) || 'function' == typeof t)
      for (let r of l(t))
        c.call(e, r) ||
          r === i ||
          o(e, r, {
            get: () => t[r],
            enumerable: !(s = a(t, r)) || s.enumerable,
          });
    return e;
  },
  u = (e, t, i) => (
    ((e, t, i) => {
      t in e
        ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
        : (e[t] = i);
    })(e, 'symbol' != typeof t ? t + '' : t, i),
    i
  ),
  g = {};
d(g, (r = s), 'default'), n && d(n, r, 'default');
var p = class {
    constructor(e, i) {
      t(this, '_configChangeListener'),
        t(this, '_updateExtraLibsToken'),
        t(this, '_extraLibsChangeListener'),
        t(this, '_worker'),
        t(this, '_client'),
        (this._modeId = e),
        (this._defaults = i),
        (this._worker = null),
        (this._client = null),
        (this._configChangeListener = this._defaults.onDidChange(() =>
          this._stopWorker(),
        )),
        (this._updateExtraLibsToken = 0),
        (this._extraLibsChangeListener = this._defaults.onDidExtraLibsChange(
          () => this._updateExtraLibs(),
        ));
    }
    dispose() {
      this._configChangeListener.dispose(),
        this._extraLibsChangeListener.dispose(),
        this._stopWorker();
    }
    _stopWorker() {
      this._worker && (this._worker.dispose(), (this._worker = null)),
        (this._client = null);
    }
    async _updateExtraLibs() {
      if (!this._worker) return;
      const e = ++this._updateExtraLibsToken,
        t = await this._worker.getProxy();
      this._updateExtraLibsToken === e &&
        t.updateExtraLibs(this._defaults.getExtraLibs());
    }
    _getClient() {
      return (
        this._client ||
          (this._client = (async () => (
            (this._worker = g.editor.createWebWorker({
              moduleId: 'vs/language/typescript/tsWorker',
              label: this._modeId,
              keepIdleModels: !0,
              createData: {
                compilerOptions: this._defaults.getCompilerOptions(),
                extraLibs: this._defaults.getExtraLibs(),
                customWorkerPath: this._defaults.workerOptions.customWorkerPath,
                inlayHintsOptions: this._defaults.inlayHintsOptions,
              },
            })),
            this._defaults.getEagerModelSync()
              ? await this._worker.withSyncedResources(
                  g.editor
                    .getModels()
                    .filter(e => e.getLanguageId() === this._modeId)
                    .map(e => e.uri),
                )
              : await this._worker.getProxy()
          ))()),
        this._client
      );
    }
    async getLanguageServiceWorker(...e) {
      const t = await this._getClient();
      return this._worker && (await this._worker.withSyncedResources(e)), t;
    }
  },
  m = {};
function h(e, t, i = 0) {
  if ('string' == typeof e) return e;
  if (void 0 === e) return '';
  let s = '';
  if (i) {
    s += t;
    for (let e = 0; e < i; e++) s += '  ';
  }
  if (((s += e.messageText), i++, e.next))
    for (const r of e.next) s += h(r, t, i);
  return s;
}
function b(e) {
  return e ? e.map(e => e.text).join('') : '';
}
(m['lib.d.ts'] = !0),
  (m['lib.dom.d.ts'] = !0),
  (m['lib.dom.iterable.d.ts'] = !0),
  (m['lib.es2015.collection.d.ts'] = !0),
  (m['lib.es2015.core.d.ts'] = !0),
  (m['lib.es2015.d.ts'] = !0),
  (m['lib.es2015.generator.d.ts'] = !0),
  (m['lib.es2015.iterable.d.ts'] = !0),
  (m['lib.es2015.promise.d.ts'] = !0),
  (m['lib.es2015.proxy.d.ts'] = !0),
  (m['lib.es2015.reflect.d.ts'] = !0),
  (m['lib.es2015.symbol.d.ts'] = !0),
  (m['lib.es2015.symbol.wellknown.d.ts'] = !0),
  (m['lib.es2016.array.include.d.ts'] = !0),
  (m['lib.es2016.d.ts'] = !0),
  (m['lib.es2016.full.d.ts'] = !0),
  (m['lib.es2017.d.ts'] = !0),
  (m['lib.es2017.full.d.ts'] = !0),
  (m['lib.es2017.intl.d.ts'] = !0),
  (m['lib.es2017.object.d.ts'] = !0),
  (m['lib.es2017.sharedmemory.d.ts'] = !0),
  (m['lib.es2017.string.d.ts'] = !0),
  (m['lib.es2017.typedarrays.d.ts'] = !0),
  (m['lib.es2018.asyncgenerator.d.ts'] = !0),
  (m['lib.es2018.asynciterable.d.ts'] = !0),
  (m['lib.es2018.d.ts'] = !0),
  (m['lib.es2018.full.d.ts'] = !0),
  (m['lib.es2018.intl.d.ts'] = !0),
  (m['lib.es2018.promise.d.ts'] = !0),
  (m['lib.es2018.regexp.d.ts'] = !0),
  (m['lib.es2019.array.d.ts'] = !0),
  (m['lib.es2019.d.ts'] = !0),
  (m['lib.es2019.full.d.ts'] = !0),
  (m['lib.es2019.object.d.ts'] = !0),
  (m['lib.es2019.string.d.ts'] = !0),
  (m['lib.es2019.symbol.d.ts'] = !0),
  (m['lib.es2020.bigint.d.ts'] = !0),
  (m['lib.es2020.d.ts'] = !0),
  (m['lib.es2020.full.d.ts'] = !0),
  (m['lib.es2020.intl.d.ts'] = !0),
  (m['lib.es2020.promise.d.ts'] = !0),
  (m['lib.es2020.sharedmemory.d.ts'] = !0),
  (m['lib.es2020.string.d.ts'] = !0),
  (m['lib.es2020.symbol.wellknown.d.ts'] = !0),
  (m['lib.es2021.d.ts'] = !0),
  (m['lib.es2021.full.d.ts'] = !0),
  (m['lib.es2021.intl.d.ts'] = !0),
  (m['lib.es2021.promise.d.ts'] = !0),
  (m['lib.es2021.string.d.ts'] = !0),
  (m['lib.es2021.weakref.d.ts'] = !0),
  (m['lib.es5.d.ts'] = !0),
  (m['lib.es6.d.ts'] = !0),
  (m['lib.esnext.d.ts'] = !0),
  (m['lib.esnext.full.d.ts'] = !0),
  (m['lib.esnext.intl.d.ts'] = !0),
  (m['lib.esnext.promise.d.ts'] = !0),
  (m['lib.esnext.string.d.ts'] = !0),
  (m['lib.esnext.weakref.d.ts'] = !0),
  (m['lib.scripthost.d.ts'] = !0),
  (m['lib.webworker.d.ts'] = !0),
  (m['lib.webworker.importscripts.d.ts'] = !0),
  (m['lib.webworker.iterable.d.ts'] = !0);
var f = class {
    constructor(e) {
      this._worker = e;
    }
    _textSpanToRange(e, t) {
      let i = e.getPositionAt(t.start),
        s = e.getPositionAt(t.start + t.length),
        { lineNumber: r, column: n } = i,
        { lineNumber: o, column: a } = s;
      return {
        startLineNumber: r,
        startColumn: n,
        endLineNumber: o,
        endColumn: a,
      };
    }
  },
  _ = class {
    constructor(e) {
      t(this, '_libFiles'),
        t(this, '_hasFetchedLibFiles'),
        t(this, '_fetchLibFilesPromise'),
        (this._worker = e),
        (this._libFiles = {}),
        (this._hasFetchedLibFiles = !1),
        (this._fetchLibFilesPromise = null);
    }
    isLibFile(e) {
      return !!e && 0 === e.path.indexOf('/lib.') && !!m[e.path.slice(1)];
    }
    getOrCreateModel(e) {
      const t = g.Uri.parse(e),
        s = g.editor.getModel(t);
      if (s) return s;
      if (this.isLibFile(t) && this._hasFetchedLibFiles)
        return g.editor.createModel(
          this._libFiles[t.path.slice(1)],
          'typescript',
          t,
        );
      const r = i.getExtraLibs()[e];
      return r ? g.editor.createModel(r.content, 'typescript', t) : null;
    }
    _containsLibFile(e) {
      for (let t of e) if (this.isLibFile(t)) return !0;
      return !1;
    }
    async fetchLibFilesIfNecessary(e) {
      this._containsLibFile(e) && (await this._fetchLibFiles());
    }
    _fetchLibFiles() {
      return (
        this._fetchLibFilesPromise ||
          (this._fetchLibFilesPromise = this._worker()
            .then(e => e.getLibFiles())
            .then(e => {
              (this._hasFetchedLibFiles = !0), (this._libFiles = e);
            })),
        this._fetchLibFilesPromise
      );
    }
  },
  y = class extends f {
    constructor(e, i, s, r) {
      super(r),
        t(this, '_disposables', []),
        t(this, '_listener', Object.create(null)),
        (this._libFiles = e),
        (this._defaults = i),
        (this._selector = s);
      const n = e => {
          if (e.getLanguageId() !== s) return;
          const t = () => {
            const { onlyVisible: t } = this._defaults.getDiagnosticsOptions();
            t
              ? e.isAttachedToEditor() && this._doValidate(e)
              : this._doValidate(e);
          };
          let i;
          const r = e.onDidChangeContent(() => {
              clearTimeout(i), (i = window.setTimeout(t, 500));
            }),
            n = e.onDidChangeAttached(() => {
              const { onlyVisible: i } = this._defaults.getDiagnosticsOptions();
              i &&
                (e.isAttachedToEditor()
                  ? t()
                  : g.editor.setModelMarkers(e, this._selector, []));
            });
          (this._listener[e.uri.toString()] = {
            dispose() {
              r.dispose(), n.dispose(), clearTimeout(i);
            },
          }),
            t();
        },
        o = e => {
          g.editor.setModelMarkers(e, this._selector, []);
          const t = e.uri.toString();
          this._listener[t] &&
            (this._listener[t].dispose(), delete this._listener[t]);
        };
      this._disposables.push(g.editor.onDidCreateModel(e => n(e))),
        this._disposables.push(g.editor.onWillDisposeModel(o)),
        this._disposables.push(
          g.editor.onDidChangeModelLanguage(e => {
            o(e.model), n(e.model);
          }),
        ),
        this._disposables.push({
          dispose() {
            for (const e of g.editor.getModels()) o(e);
          },
        });
      const a = () => {
        for (const e of g.editor.getModels()) o(e), n(e);
      };
      this._disposables.push(this._defaults.onDidChange(a)),
        this._disposables.push(this._defaults.onDidExtraLibsChange(a)),
        g.editor.getModels().forEach(e => n(e));
    }
    dispose() {
      this._disposables.forEach(e => e && e.dispose()),
        (this._disposables = []);
    }
    async _doValidate(e) {
      const t = await this._worker(e.uri);
      if (e.isDisposed()) return;
      const i = [],
        {
          noSyntaxValidation: s,
          noSemanticValidation: r,
          noSuggestionDiagnostics: n,
        } = this._defaults.getDiagnosticsOptions();
      s || i.push(t.getSyntacticDiagnostics(e.uri.toString())),
        r || i.push(t.getSemanticDiagnostics(e.uri.toString())),
        n || i.push(t.getSuggestionDiagnostics(e.uri.toString()));
      const o = await Promise.all(i);
      if (!o || e.isDisposed()) return;
      const a = o
          .reduce((e, t) => t.concat(e), [])
          .filter(
            e =>
              -1 ===
              (
                this._defaults.getDiagnosticsOptions()
                  .diagnosticCodesToIgnore || []
              ).indexOf(e.code),
          ),
        l = a
          .map(e => e.relatedInformation || [])
          .reduce((e, t) => t.concat(e), [])
          .map(e => (e.file ? g.Uri.parse(e.file.fileName) : null));
      await this._libFiles.fetchLibFilesIfNecessary(l),
        e.isDisposed() ||
          g.editor.setModelMarkers(
            e,
            this._selector,
            a.map(t => this._convertDiagnostics(e, t)),
          );
    }
    _convertDiagnostics(e, t) {
      const i = t.start || 0,
        s = t.length || 1,
        { lineNumber: r, column: n } = e.getPositionAt(i),
        { lineNumber: o, column: a } = e.getPositionAt(i + s),
        l = [];
      return (
        t.reportsUnnecessary && l.push(g.MarkerTag.Unnecessary),
        t.reportsDeprecated && l.push(g.MarkerTag.Deprecated),
        {
          severity: this._tsDiagnosticCategoryToMarkerSeverity(t.category),
          startLineNumber: r,
          startColumn: n,
          endLineNumber: o,
          endColumn: a,
          message: h(t.messageText, '\n'),
          code: t.code.toString(),
          tags: l,
          relatedInformation: this._convertRelatedInformation(
            e,
            t.relatedInformation,
          ),
        }
      );
    }
    _convertRelatedInformation(e, t) {
      if (!t) return [];
      const i = [];
      return (
        t.forEach(t => {
          let s = e;
          if (
            (t.file && (s = this._libFiles.getOrCreateModel(t.file.fileName)),
            !s)
          )
            return;
          const r = t.start || 0,
            n = t.length || 1,
            { lineNumber: o, column: a } = s.getPositionAt(r),
            { lineNumber: l, column: c } = s.getPositionAt(r + n);
          i.push({
            resource: s.uri,
            startLineNumber: o,
            startColumn: a,
            endLineNumber: l,
            endColumn: c,
            message: h(t.messageText, '\n'),
          });
        }),
        i
      );
    }
    _tsDiagnosticCategoryToMarkerSeverity(e) {
      switch (e) {
        case 1:
          return g.MarkerSeverity.Error;
        case 3:
          return g.MarkerSeverity.Info;
        case 0:
          return g.MarkerSeverity.Warning;
        case 2:
          return g.MarkerSeverity.Hint;
      }
      return g.MarkerSeverity.Info;
    }
  },
  w = class extends f {
    get triggerCharacters() {
      return ['.'];
    }
    async provideCompletionItems(e, t, i, s) {
      const r = e.getWordUntilPosition(t),
        n = new g.Range(t.lineNumber, r.startColumn, t.lineNumber, r.endColumn),
        o = e.uri,
        a = e.getOffsetAt(t),
        l = await this._worker(o);
      if (e.isDisposed()) return;
      const c = await l.getCompletionsAtPosition(o.toString(), a);
      if (!c || e.isDisposed()) return;
      return {
        suggestions: c.entries.map(i => {
          var s;
          let r = n;
          if (i.replacementSpan) {
            const t = e.getPositionAt(i.replacementSpan.start),
              s = e.getPositionAt(
                i.replacementSpan.start + i.replacementSpan.length,
              );
            r = new g.Range(t.lineNumber, t.column, s.lineNumber, s.column);
          }
          const l = [];
          return (
            -1 !==
              (null == (s = i.kindModifiers)
                ? void 0
                : s.indexOf('deprecated')) &&
              l.push(g.languages.CompletionItemTag.Deprecated),
            {
              uri: o,
              position: t,
              offset: a,
              range: r,
              label: i.name,
              insertText: i.name,
              sortText: i.sortText,
              kind: w.convertKind(i.kind),
              tags: l,
            }
          );
        }),
      };
    }
    async resolveCompletionItem(e, t) {
      const i = e,
        s = i.uri,
        r = i.position,
        n = i.offset,
        o = await this._worker(s),
        a = await o.getCompletionEntryDetails(s.toString(), n, i.label);
      return a
        ? {
            uri: s,
            position: r,
            label: a.name,
            kind: w.convertKind(a.kind),
            detail: b(a.displayParts),
            documentation: { value: w.createDocumentationString(a) },
          }
        : i;
    }
    static convertKind(e) {
      switch (e) {
        case P.primitiveType:
        case P.keyword:
          return g.languages.CompletionItemKind.Keyword;
        case P.variable:
        case P.localVariable:
          return g.languages.CompletionItemKind.Variable;
        case P.memberVariable:
        case P.memberGetAccessor:
        case P.memberSetAccessor:
          return g.languages.CompletionItemKind.Field;
        case P.function:
        case P.memberFunction:
        case P.constructSignature:
        case P.callSignature:
        case P.indexSignature:
          return g.languages.CompletionItemKind.Function;
        case P.enum:
          return g.languages.CompletionItemKind.Enum;
        case P.module:
          return g.languages.CompletionItemKind.Module;
        case P.class:
          return g.languages.CompletionItemKind.Class;
        case P.interface:
          return g.languages.CompletionItemKind.Interface;
        case P.warning:
          return g.languages.CompletionItemKind.File;
      }
      return g.languages.CompletionItemKind.Property;
    }
    static createDocumentationString(e) {
      let t = b(e.documentation);
      if (e.tags) for (const i of e.tags) t += `\n\n${S(i)}`;
      return t;
    }
  };
function S(e) {
  let t = `*@${e.name}*`;
  if ('param' === e.name && e.text) {
    const [i, ...s] = e.text;
    (t += `\`${i.text}\``),
      s.length > 0 && (t += ` — ${s.map(e => e.text).join(' ')}`);
  } else
    Array.isArray(e.text)
      ? (t += ` — ${e.text.map(e => e.text).join(' ')}`)
      : e.text && (t += ` — ${e.text}`);
  return t;
}
var x = class extends f {
    constructor() {
      super(...arguments),
        t(this, 'signatureHelpTriggerCharacters', ['(', ',']);
    }
    static _toSignatureHelpTriggerReason(e) {
      switch (e.triggerKind) {
        case g.languages.SignatureHelpTriggerKind.TriggerCharacter:
          return e.triggerCharacter
            ? e.isRetrigger
              ? { kind: 'retrigger', triggerCharacter: e.triggerCharacter }
              : { kind: 'characterTyped', triggerCharacter: e.triggerCharacter }
            : { kind: 'invoked' };
        case g.languages.SignatureHelpTriggerKind.ContentChange:
          return e.isRetrigger ? { kind: 'retrigger' } : { kind: 'invoked' };
        case g.languages.SignatureHelpTriggerKind.Invoke:
        default:
          return { kind: 'invoked' };
      }
    }
    async provideSignatureHelp(e, t, i, s) {
      const r = e.uri,
        n = e.getOffsetAt(t),
        o = await this._worker(r);
      if (e.isDisposed()) return;
      const a = await o.getSignatureHelpItems(r.toString(), n, {
        triggerReason: x._toSignatureHelpTriggerReason(s),
      });
      if (!a || e.isDisposed()) return;
      const l = {
        activeSignature: a.selectedItemIndex,
        activeParameter: a.argumentIndex,
        signatures: [],
      };
      return (
        a.items.forEach(e => {
          const t = { label: '', parameters: [] };
          (t.documentation = { value: b(e.documentation) }),
            (t.label += b(e.prefixDisplayParts)),
            e.parameters.forEach((i, s, r) => {
              const n = b(i.displayParts),
                o = { label: n, documentation: { value: b(i.documentation) } };
              (t.label += n),
                t.parameters.push(o),
                s < r.length - 1 && (t.label += b(e.separatorDisplayParts));
            }),
            (t.label += b(e.suffixDisplayParts)),
            l.signatures.push(t);
        }),
        { value: l, dispose() {} }
      );
    }
  },
  v = class extends f {
    async provideHover(e, t, i) {
      const s = e.uri,
        r = e.getOffsetAt(t),
        n = await this._worker(s);
      if (e.isDisposed()) return;
      const o = await n.getQuickInfoAtPosition(s.toString(), r);
      if (!o || e.isDisposed()) return;
      const a = b(o.documentation),
        l = o.tags ? o.tags.map(e => S(e)).join('  \n\n') : '',
        c = b(o.displayParts);
      return {
        range: this._textSpanToRange(e, o.textSpan),
        contents: [
          { value: '```typescript\n' + c + '\n```\n' },
          { value: a + (l ? '\n\n' + l : '') },
        ],
      };
    }
  },
  k = class extends f {
    async provideDocumentHighlights(e, t, i) {
      const s = e.uri,
        r = e.getOffsetAt(t),
        n = await this._worker(s);
      if (e.isDisposed()) return;
      const o = await n.getOccurrencesAtPosition(s.toString(), r);
      return o && !e.isDisposed()
        ? o.map(t => ({
            range: this._textSpanToRange(e, t.textSpan),
            kind: t.isWriteAccess
              ? g.languages.DocumentHighlightKind.Write
              : g.languages.DocumentHighlightKind.Text,
          }))
        : void 0;
    }
  },
  C = class extends f {
    constructor(e, t) {
      super(t), (this._libFiles = e);
    }
    async provideDefinition(e, t, i) {
      const s = e.uri,
        r = e.getOffsetAt(t),
        n = await this._worker(s);
      if (e.isDisposed()) return;
      const o = await n.getDefinitionAtPosition(s.toString(), r);
      if (!o || e.isDisposed()) return;
      if (
        (await this._libFiles.fetchLibFilesIfNecessary(
          o.map(e => g.Uri.parse(e.fileName)),
        ),
        e.isDisposed())
      )
        return;
      const a = [];
      for (let l of o) {
        const e = this._libFiles.getOrCreateModel(l.fileName);
        e &&
          a.push({ uri: e.uri, range: this._textSpanToRange(e, l.textSpan) });
      }
      return a;
    }
  },
  D = class extends f {
    constructor(e, t) {
      super(t), (this._libFiles = e);
    }
    async provideReferences(e, t, i, s) {
      const r = e.uri,
        n = e.getOffsetAt(t),
        o = await this._worker(r);
      if (e.isDisposed()) return;
      const a = await o.getReferencesAtPosition(r.toString(), n);
      if (!a || e.isDisposed()) return;
      if (
        (await this._libFiles.fetchLibFilesIfNecessary(
          a.map(e => g.Uri.parse(e.fileName)),
        ),
        e.isDisposed())
      )
        return;
      const l = [];
      for (let c of a) {
        const e = this._libFiles.getOrCreateModel(c.fileName);
        e &&
          l.push({ uri: e.uri, range: this._textSpanToRange(e, c.textSpan) });
      }
      return l;
    }
  },
  F = class extends f {
    async provideDocumentSymbols(e, t) {
      const i = e.uri,
        s = await this._worker(i);
      if (e.isDisposed()) return;
      const r = await s.getNavigationBarItems(i.toString());
      if (!r || e.isDisposed()) return;
      const n = (t, i, s) => {
        let r = {
          name: i.text,
          detail: '',
          kind: I[i.kind] || g.languages.SymbolKind.Variable,
          range: this._textSpanToRange(e, i.spans[0]),
          selectionRange: this._textSpanToRange(e, i.spans[0]),
          tags: [],
        };
        if (
          (s && (r.containerName = s), i.childItems && i.childItems.length > 0)
        )
          for (let e of i.childItems) n(t, e, r.name);
        t.push(r);
      };
      let o = [];
      return r.forEach(e => n(o, e)), o;
    }
  },
  P = class {};
u(P, 'unknown', ''),
  u(P, 'keyword', 'keyword'),
  u(P, 'script', 'script'),
  u(P, 'module', 'module'),
  u(P, 'class', 'class'),
  u(P, 'interface', 'interface'),
  u(P, 'type', 'type'),
  u(P, 'enum', 'enum'),
  u(P, 'variable', 'var'),
  u(P, 'localVariable', 'local var'),
  u(P, 'function', 'function'),
  u(P, 'localFunction', 'local function'),
  u(P, 'memberFunction', 'method'),
  u(P, 'memberGetAccessor', 'getter'),
  u(P, 'memberSetAccessor', 'setter'),
  u(P, 'memberVariable', 'property'),
  u(P, 'constructorImplementation', 'constructor'),
  u(P, 'callSignature', 'call'),
  u(P, 'indexSignature', 'index'),
  u(P, 'constructSignature', 'construct'),
  u(P, 'parameter', 'parameter'),
  u(P, 'typeParameter', 'type parameter'),
  u(P, 'primitiveType', 'primitive type'),
  u(P, 'label', 'label'),
  u(P, 'alias', 'alias'),
  u(P, 'const', 'const'),
  u(P, 'let', 'let'),
  u(P, 'warning', 'warning');
var I = Object.create(null);
(I[P.module] = g.languages.SymbolKind.Module),
  (I[P.class] = g.languages.SymbolKind.Class),
  (I[P.enum] = g.languages.SymbolKind.Enum),
  (I[P.interface] = g.languages.SymbolKind.Interface),
  (I[P.memberFunction] = g.languages.SymbolKind.Method),
  (I[P.memberVariable] = g.languages.SymbolKind.Property),
  (I[P.memberGetAccessor] = g.languages.SymbolKind.Property),
  (I[P.memberSetAccessor] = g.languages.SymbolKind.Property),
  (I[P.variable] = g.languages.SymbolKind.Variable),
  (I[P.const] = g.languages.SymbolKind.Variable),
  (I[P.localVariable] = g.languages.SymbolKind.Variable),
  (I[P.variable] = g.languages.SymbolKind.Variable),
  (I[P.function] = g.languages.SymbolKind.Function),
  (I[P.localFunction] = g.languages.SymbolKind.Function);
var L,
  A,
  T = class extends f {
    static _convertOptions(e) {
      return {
        ConvertTabsToSpaces: e.insertSpaces,
        TabSize: e.tabSize,
        IndentSize: e.tabSize,
        IndentStyle: 2,
        NewLineCharacter: '\n',
        InsertSpaceAfterCommaDelimiter: !0,
        InsertSpaceAfterSemicolonInForStatements: !0,
        InsertSpaceBeforeAndAfterBinaryOperators: !0,
        InsertSpaceAfterKeywordsInControlFlowStatements: !0,
        InsertSpaceAfterFunctionKeywordForAnonymousFunctions: !0,
        InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: !1,
        InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: !1,
        InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: !1,
        PlaceOpenBraceOnNewLineForControlBlocks: !1,
        PlaceOpenBraceOnNewLineForFunctions: !1,
      };
    }
    _convertTextChanges(e, t) {
      return { text: t.newText, range: this._textSpanToRange(e, t.span) };
    }
  },
  O = class extends T {
    async provideDocumentRangeFormattingEdits(e, t, i, s) {
      const r = e.uri,
        n = e.getOffsetAt({
          lineNumber: t.startLineNumber,
          column: t.startColumn,
        }),
        o = e.getOffsetAt({ lineNumber: t.endLineNumber, column: t.endColumn }),
        a = await this._worker(r);
      if (e.isDisposed()) return;
      const l = await a.getFormattingEditsForRange(
        r.toString(),
        n,
        o,
        T._convertOptions(i),
      );
      return l && !e.isDisposed()
        ? l.map(t => this._convertTextChanges(e, t))
        : void 0;
    }
  },
  N = class extends T {
    get autoFormatTriggerCharacters() {
      return [';', '}', '\n'];
    }
    async provideOnTypeFormattingEdits(e, t, i, s, r) {
      const n = e.uri,
        o = e.getOffsetAt(t),
        a = await this._worker(n);
      if (e.isDisposed()) return;
      const l = await a.getFormattingEditsAfterKeystroke(
        n.toString(),
        o,
        i,
        T._convertOptions(s),
      );
      return l && !e.isDisposed()
        ? l.map(t => this._convertTextChanges(e, t))
        : void 0;
    }
  },
  K = class extends T {
    async provideCodeActions(e, t, i, s) {
      const r = e.uri,
        n = e.getOffsetAt({
          lineNumber: t.startLineNumber,
          column: t.startColumn,
        }),
        o = e.getOffsetAt({ lineNumber: t.endLineNumber, column: t.endColumn }),
        a = T._convertOptions(e.getOptions()),
        l = i.markers
          .filter(e => e.code)
          .map(e => e.code)
          .map(Number),
        c = await this._worker(r);
      if (e.isDisposed()) return;
      const d = await c.getCodeFixesAtPosition(r.toString(), n, o, l, a);
      if (!d || e.isDisposed()) return { actions: [], dispose: () => {} };
      return {
        actions: d
          .filter(e => 0 === e.changes.filter(e => e.isNewFile).length)
          .map(t => this._tsCodeFixActionToMonacoCodeAction(e, i, t)),
        dispose: () => {},
      };
    }
    _tsCodeFixActionToMonacoCodeAction(e, t, i) {
      const s = [];
      for (const r of i.changes)
        for (const t of r.textChanges)
          s.push({
            resource: e.uri,
            versionId: void 0,
            textEdit: {
              range: this._textSpanToRange(e, t.span),
              text: t.newText,
            },
          });
      return {
        title: i.description,
        edit: { edits: s },
        diagnostics: t.markers,
        kind: 'quickfix',
      };
    }
  },
  M = class extends f {
    constructor(e, t) {
      super(t), (this._libFiles = e);
    }
    async provideRenameEdits(e, t, i, s) {
      const r = e.uri,
        n = r.toString(),
        o = e.getOffsetAt(t),
        a = await this._worker(r);
      if (e.isDisposed()) return;
      const l = await a.getRenameInfo(n, o, { allowRenameOfImportPath: !1 });
      if (!1 === l.canRename)
        return { edits: [], rejectReason: l.localizedErrorMessage };
      if (void 0 !== l.fileToRename)
        throw new Error('Renaming files is not supported.');
      const c = await a.findRenameLocations(n, o, !1, !1, !1);
      if (!c || e.isDisposed()) return;
      const d = [];
      for (const u of c) {
        const e = this._libFiles.getOrCreateModel(u.fileName);
        if (!e) throw new Error(`Unknown file ${u.fileName}.`);
        d.push({
          resource: e.uri,
          versionId: void 0,
          textEdit: { range: this._textSpanToRange(e, u.textSpan), text: i },
        });
      }
      return { edits: d };
    }
  },
  j = class extends f {
    async provideInlayHints(e, t, i) {
      const s = e.uri,
        r = s.toString(),
        n = e.getOffsetAt({
          lineNumber: t.startLineNumber,
          column: t.startColumn,
        }),
        o = e.getOffsetAt({ lineNumber: t.endLineNumber, column: t.endColumn }),
        a = await this._worker(s);
      if (e.isDisposed()) return null;
      return {
        hints: (await a.provideInlayHints(r, n, o)).map(t => ({
          ...t,
          label: t.text,
          position: e.getPositionAt(t.position),
          kind: this._convertHintKind(t.kind),
        })),
        dispose: () => {},
      };
    }
    _convertHintKind(e) {
      return 'Parameter' === e
        ? g.languages.InlayHintKind.Parameter
        : g.languages.InlayHintKind.Type;
    }
  };
function E(e) {
  A = W(e, 'typescript');
}
function R(e) {
  L = W(e, 'javascript');
}
function H() {
  return new Promise((e, t) => {
    if (!L) return t('JavaScript not registered!');
    e(L);
  });
}
function V() {
  return new Promise((e, t) => {
    if (!A) return t('TypeScript not registered!');
    e(A);
  });
}
function W(e, t) {
  const i = new p(t, e),
    s = (...e) => i.getLanguageServiceWorker(...e),
    r = new _(s);
  return (
    g.languages.registerCompletionItemProvider(t, new w(s)),
    g.languages.registerSignatureHelpProvider(t, new x(s)),
    g.languages.registerHoverProvider(t, new v(s)),
    g.languages.registerDocumentHighlightProvider(t, new k(s)),
    g.languages.registerDefinitionProvider(t, new C(r, s)),
    g.languages.registerReferenceProvider(t, new D(r, s)),
    g.languages.registerDocumentSymbolProvider(t, new F(s)),
    g.languages.registerDocumentRangeFormattingEditProvider(t, new O(s)),
    g.languages.registerOnTypeFormattingEditProvider(t, new N(s)),
    g.languages.registerCodeActionProvider(t, new K(s)),
    g.languages.registerRenameProvider(t, new M(r, s)),
    g.languages.registerInlayHintsProvider(t, new j(s)),
    new y(r, e, t, s),
    s
  );
}
export {
  f as Adapter,
  K as CodeActionAdaptor,
  C as DefinitionAdapter,
  y as DiagnosticsAdapter,
  O as FormatAdapter,
  T as FormatHelper,
  N as FormatOnTypeAdapter,
  j as InlayHintsAdapter,
  P as Kind,
  _ as LibFiles,
  k as OccurrencesAdapter,
  F as OutlineAdapter,
  v as QuickInfoAdapter,
  D as ReferenceAdapter,
  M as RenameAdapter,
  x as SignatureHelpAdapter,
  w as SuggestAdapter,
  p as WorkerManager,
  h as flattenDiagnosticMessageText,
  H as getJavaScriptWorker,
  V as getTypeScriptWorker,
  R as setupJavaScript,
  E as setupTypeScript,
};

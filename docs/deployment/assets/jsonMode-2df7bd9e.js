var e = Object.defineProperty,
  t = (t, n, r) => (
    ((t, n, r) => {
      n in t
        ? e(t, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
        : (t[n] = r);
    })(t, 'symbol' != typeof n ? n + '' : n, r),
    r
  );
import { m as n } from './Dashboard-bf38bfb8.js';
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
  i,
  o = Object.defineProperty,
  a = Object.getOwnPropertyDescriptor,
  s = Object.getOwnPropertyNames,
  c = Object.prototype.hasOwnProperty,
  u = (e, t, n, r) => {
    if ((t && 'object' == typeof t) || 'function' == typeof t)
      for (let i of s(t))
        c.call(e, i) ||
          i === n ||
          o(e, i, {
            get: () => t[i],
            enumerable: !(r = a(t, i)) || r.enumerable,
          });
    return e;
  },
  d = {};
u(d, (r = n), 'default'), i && u(i, r, 'default');
var g,
  l,
  h,
  f,
  p,
  m,
  v,
  _,
  b,
  k,
  w,
  C,
  y,
  E,
  x,
  A,
  I,
  S,
  j,
  T,
  R,
  P,
  D,
  M,
  L,
  F,
  O,
  W,
  N,
  U,
  V,
  z,
  K,
  H,
  q,
  B,
  X,
  $,
  G,
  Q,
  Z,
  J,
  Y,
  ee,
  te,
  ne,
  re,
  ie,
  oe,
  ae = class {
    constructor(e) {
      t(this, '_defaults'),
        t(this, '_idleCheckInterval'),
        t(this, '_lastUsedTime'),
        t(this, '_configChangeListener'),
        t(this, '_worker'),
        t(this, '_client'),
        (this._defaults = e),
        (this._worker = null),
        (this._client = null),
        (this._idleCheckInterval = window.setInterval(
          () => this._checkIfIdle(),
          3e4,
        )),
        (this._lastUsedTime = 0),
        (this._configChangeListener = this._defaults.onDidChange(() =>
          this._stopWorker(),
        ));
    }
    _stopWorker() {
      this._worker && (this._worker.dispose(), (this._worker = null)),
        (this._client = null);
    }
    dispose() {
      clearInterval(this._idleCheckInterval),
        this._configChangeListener.dispose(),
        this._stopWorker();
    }
    _checkIfIdle() {
      if (!this._worker) return;
      Date.now() - this._lastUsedTime > 12e4 && this._stopWorker();
    }
    _getClient() {
      return (
        (this._lastUsedTime = Date.now()),
        this._client ||
          ((this._worker = d.editor.createWebWorker({
            moduleId: 'vs/language/json/jsonWorker',
            label: this._defaults.languageId,
            createData: {
              languageSettings: this._defaults.diagnosticsOptions,
              languageId: this._defaults.languageId,
              enableSchemaRequest:
                this._defaults.diagnosticsOptions.enableSchemaRequest,
            },
          })),
          (this._client = this._worker.getProxy())),
        this._client
      );
    }
    getLanguageServiceWorker(...e) {
      let t;
      return this._getClient()
        .then(e => {
          t = e;
        })
        .then(t => {
          if (this._worker) return this._worker.withSyncedResources(e);
        })
        .then(e => t);
    }
  };
((l = g || (g = {})).MIN_VALUE = -2147483648),
  (l.MAX_VALUE = 2147483647),
  ((f = h || (h = {})).MIN_VALUE = 0),
  (f.MAX_VALUE = 2147483647),
  ((m = p || (p = {})).create = function (e, t) {
    return (
      e === Number.MAX_VALUE && (e = h.MAX_VALUE),
      t === Number.MAX_VALUE && (t = h.MAX_VALUE),
      { line: e, character: t }
    );
  }),
  (m.is = function (e) {
    var t = e;
    return (
      at.objectLiteral(t) && at.uinteger(t.line) && at.uinteger(t.character)
    );
  }),
  ((_ = v || (v = {})).create = function (e, t, n, r) {
    if (at.uinteger(e) && at.uinteger(t) && at.uinteger(n) && at.uinteger(r))
      return { start: p.create(e, t), end: p.create(n, r) };
    if (p.is(e) && p.is(t)) return { start: e, end: t };
    throw new Error(
      'Range#create called with invalid arguments[' +
        e +
        ', ' +
        t +
        ', ' +
        n +
        ', ' +
        r +
        ']',
    );
  }),
  (_.is = function (e) {
    var t = e;
    return at.objectLiteral(t) && p.is(t.start) && p.is(t.end);
  }),
  ((k = b || (b = {})).create = function (e, t) {
    return { uri: e, range: t };
  }),
  (k.is = function (e) {
    var t = e;
    return (
      at.defined(t) &&
      v.is(t.range) &&
      (at.string(t.uri) || at.undefined(t.uri))
    );
  }),
  ((C = w || (w = {})).create = function (e, t, n, r) {
    return {
      targetUri: e,
      targetRange: t,
      targetSelectionRange: n,
      originSelectionRange: r,
    };
  }),
  (C.is = function (e) {
    var t = e;
    return (
      at.defined(t) &&
      v.is(t.targetRange) &&
      at.string(t.targetUri) &&
      (v.is(t.targetSelectionRange) || at.undefined(t.targetSelectionRange)) &&
      (v.is(t.originSelectionRange) || at.undefined(t.originSelectionRange))
    );
  }),
  ((E = y || (y = {})).create = function (e, t, n, r) {
    return { red: e, green: t, blue: n, alpha: r };
  }),
  (E.is = function (e) {
    var t = e;
    return (
      at.numberRange(t.red, 0, 1) &&
      at.numberRange(t.green, 0, 1) &&
      at.numberRange(t.blue, 0, 1) &&
      at.numberRange(t.alpha, 0, 1)
    );
  }),
  ((A = x || (x = {})).create = function (e, t) {
    return { range: e, color: t };
  }),
  (A.is = function (e) {
    var t = e;
    return v.is(t.range) && y.is(t.color);
  }),
  ((S = I || (I = {})).create = function (e, t, n) {
    return { label: e, textEdit: t, additionalTextEdits: n };
  }),
  (S.is = function (e) {
    var t = e;
    return (
      at.string(t.label) &&
      (at.undefined(t.textEdit) || H.is(t)) &&
      (at.undefined(t.additionalTextEdits) ||
        at.typedArray(t.additionalTextEdits, H.is))
    );
  }),
  ((T = j || (j = {})).Comment = 'comment'),
  (T.Imports = 'imports'),
  (T.Region = 'region'),
  ((P = R || (R = {})).create = function (e, t, n, r, i) {
    var o = { startLine: e, endLine: t };
    return (
      at.defined(n) && (o.startCharacter = n),
      at.defined(r) && (o.endCharacter = r),
      at.defined(i) && (o.kind = i),
      o
    );
  }),
  (P.is = function (e) {
    var t = e;
    return (
      at.uinteger(t.startLine) &&
      at.uinteger(t.startLine) &&
      (at.undefined(t.startCharacter) || at.uinteger(t.startCharacter)) &&
      (at.undefined(t.endCharacter) || at.uinteger(t.endCharacter)) &&
      (at.undefined(t.kind) || at.string(t.kind))
    );
  }),
  ((M = D || (D = {})).create = function (e, t) {
    return { location: e, message: t };
  }),
  (M.is = function (e) {
    var t = e;
    return at.defined(t) && b.is(t.location) && at.string(t.message);
  }),
  ((F = L || (L = {})).Error = 1),
  (F.Warning = 2),
  (F.Information = 3),
  (F.Hint = 4),
  ((W = O || (O = {})).Unnecessary = 1),
  (W.Deprecated = 2),
  ((N || (N = {})).is = function (e) {
    var t = e;
    return null != t && at.string(t.href);
  }),
  ((V = U || (U = {})).create = function (e, t, n, r, i, o) {
    var a = { range: e, message: t };
    return (
      at.defined(n) && (a.severity = n),
      at.defined(r) && (a.code = r),
      at.defined(i) && (a.source = i),
      at.defined(o) && (a.relatedInformation = o),
      a
    );
  }),
  (V.is = function (e) {
    var t,
      n = e;
    return (
      at.defined(n) &&
      v.is(n.range) &&
      at.string(n.message) &&
      (at.number(n.severity) || at.undefined(n.severity)) &&
      (at.integer(n.code) || at.string(n.code) || at.undefined(n.code)) &&
      (at.undefined(n.codeDescription) ||
        at.string(
          null === (t = n.codeDescription) || void 0 === t ? void 0 : t.href,
        )) &&
      (at.string(n.source) || at.undefined(n.source)) &&
      (at.undefined(n.relatedInformation) ||
        at.typedArray(n.relatedInformation, D.is))
    );
  }),
  ((K = z || (z = {})).create = function (e, t) {
    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
    var i = { title: e, command: t };
    return at.defined(n) && n.length > 0 && (i.arguments = n), i;
  }),
  (K.is = function (e) {
    var t = e;
    return at.defined(t) && at.string(t.title) && at.string(t.command);
  }),
  ((q = H || (H = {})).replace = function (e, t) {
    return { range: e, newText: t };
  }),
  (q.insert = function (e, t) {
    return { range: { start: e, end: e }, newText: t };
  }),
  (q.del = function (e) {
    return { range: e, newText: '' };
  }),
  (q.is = function (e) {
    var t = e;
    return at.objectLiteral(t) && at.string(t.newText) && v.is(t.range);
  }),
  ((X = B || (B = {})).create = function (e, t, n) {
    var r = { label: e };
    return (
      void 0 !== t && (r.needsConfirmation = t),
      void 0 !== n && (r.description = n),
      r
    );
  }),
  (X.is = function (e) {
    var t = e;
    return (
      void 0 !== t &&
      at.objectLiteral(t) &&
      at.string(t.label) &&
      (at.boolean(t.needsConfirmation) || void 0 === t.needsConfirmation) &&
      (at.string(t.description) || void 0 === t.description)
    );
  }),
  (($ || ($ = {})).is = function (e) {
    return 'string' == typeof e;
  }),
  ((Q = G || (G = {})).replace = function (e, t, n) {
    return { range: e, newText: t, annotationId: n };
  }),
  (Q.insert = function (e, t, n) {
    return { range: { start: e, end: e }, newText: t, annotationId: n };
  }),
  (Q.del = function (e, t) {
    return { range: e, newText: '', annotationId: t };
  }),
  (Q.is = function (e) {
    var t = e;
    return H.is(t) && (B.is(t.annotationId) || $.is(t.annotationId));
  }),
  ((J = Z || (Z = {})).create = function (e, t) {
    return { textDocument: e, edits: t };
  }),
  (J.is = function (e) {
    var t = e;
    return at.defined(t) && ge.is(t.textDocument) && Array.isArray(t.edits);
  }),
  ((ee = Y || (Y = {})).create = function (e, t, n) {
    var r = { kind: 'create', uri: e };
    return (
      void 0 === t ||
        (void 0 === t.overwrite && void 0 === t.ignoreIfExists) ||
        (r.options = t),
      void 0 !== n && (r.annotationId = n),
      r
    );
  }),
  (ee.is = function (e) {
    var t = e;
    return (
      t &&
      'create' === t.kind &&
      at.string(t.uri) &&
      (void 0 === t.options ||
        ((void 0 === t.options.overwrite || at.boolean(t.options.overwrite)) &&
          (void 0 === t.options.ignoreIfExists ||
            at.boolean(t.options.ignoreIfExists)))) &&
      (void 0 === t.annotationId || $.is(t.annotationId))
    );
  }),
  ((ne = te || (te = {})).create = function (e, t, n, r) {
    var i = { kind: 'rename', oldUri: e, newUri: t };
    return (
      void 0 === n ||
        (void 0 === n.overwrite && void 0 === n.ignoreIfExists) ||
        (i.options = n),
      void 0 !== r && (i.annotationId = r),
      i
    );
  }),
  (ne.is = function (e) {
    var t = e;
    return (
      t &&
      'rename' === t.kind &&
      at.string(t.oldUri) &&
      at.string(t.newUri) &&
      (void 0 === t.options ||
        ((void 0 === t.options.overwrite || at.boolean(t.options.overwrite)) &&
          (void 0 === t.options.ignoreIfExists ||
            at.boolean(t.options.ignoreIfExists)))) &&
      (void 0 === t.annotationId || $.is(t.annotationId))
    );
  }),
  ((ie = re || (re = {})).create = function (e, t, n) {
    var r = { kind: 'delete', uri: e };
    return (
      void 0 === t ||
        (void 0 === t.recursive && void 0 === t.ignoreIfNotExists) ||
        (r.options = t),
      void 0 !== n && (r.annotationId = n),
      r
    );
  }),
  (ie.is = function (e) {
    var t = e;
    return (
      t &&
      'delete' === t.kind &&
      at.string(t.uri) &&
      (void 0 === t.options ||
        ((void 0 === t.options.recursive || at.boolean(t.options.recursive)) &&
          (void 0 === t.options.ignoreIfNotExists ||
            at.boolean(t.options.ignoreIfNotExists)))) &&
      (void 0 === t.annotationId || $.is(t.annotationId))
    );
  }),
  ((oe || (oe = {})).is = function (e) {
    var t = e;
    return (
      t &&
      (void 0 !== t.changes || void 0 !== t.documentChanges) &&
      (void 0 === t.documentChanges ||
        t.documentChanges.every(function (e) {
          return at.string(e.kind) ? Y.is(e) || te.is(e) || re.is(e) : Z.is(e);
        }))
    );
  });
var se,
  ce,
  ue,
  de,
  ge,
  le,
  he,
  fe,
  pe,
  me,
  ve,
  _e,
  be,
  ke,
  we,
  Ce,
  ye,
  Ee,
  xe,
  Ae,
  Ie,
  Se,
  je,
  Te,
  Re,
  Pe,
  De,
  Me,
  Le,
  Fe,
  Oe,
  We,
  Ne,
  Ue,
  Ve,
  ze,
  Ke,
  He,
  qe,
  Be,
  Xe,
  $e,
  Ge,
  Qe,
  Ze,
  Je,
  Ye,
  et,
  tt,
  nt,
  rt,
  it = (function () {
    function e(e, t) {
      (this.edits = e), (this.changeAnnotations = t);
    }
    return (
      (e.prototype.insert = function (e, t, n) {
        var r, i;
        if (
          (void 0 === n
            ? (r = H.insert(e, t))
            : $.is(n)
            ? ((i = n), (r = G.insert(e, t, n)))
            : (this.assertChangeAnnotations(this.changeAnnotations),
              (i = this.changeAnnotations.manage(n)),
              (r = G.insert(e, t, i))),
          this.edits.push(r),
          void 0 !== i)
        )
          return i;
      }),
      (e.prototype.replace = function (e, t, n) {
        var r, i;
        if (
          (void 0 === n
            ? (r = H.replace(e, t))
            : $.is(n)
            ? ((i = n), (r = G.replace(e, t, n)))
            : (this.assertChangeAnnotations(this.changeAnnotations),
              (i = this.changeAnnotations.manage(n)),
              (r = G.replace(e, t, i))),
          this.edits.push(r),
          void 0 !== i)
        )
          return i;
      }),
      (e.prototype.delete = function (e, t) {
        var n, r;
        if (
          (void 0 === t
            ? (n = H.del(e))
            : $.is(t)
            ? ((r = t), (n = G.del(e, t)))
            : (this.assertChangeAnnotations(this.changeAnnotations),
              (r = this.changeAnnotations.manage(t)),
              (n = G.del(e, r))),
          this.edits.push(n),
          void 0 !== r)
        )
          return r;
      }),
      (e.prototype.add = function (e) {
        this.edits.push(e);
      }),
      (e.prototype.all = function () {
        return this.edits;
      }),
      (e.prototype.clear = function () {
        this.edits.splice(0, this.edits.length);
      }),
      (e.prototype.assertChangeAnnotations = function (e) {
        if (void 0 === e)
          throw new Error(
            'Text edit change is not configured to manage change annotations.',
          );
      }),
      e
    );
  })(),
  ot = (function () {
    function e(e) {
      (this._annotations = void 0 === e ? Object.create(null) : e),
        (this._counter = 0),
        (this._size = 0);
    }
    return (
      (e.prototype.all = function () {
        return this._annotations;
      }),
      Object.defineProperty(e.prototype, 'size', {
        get: function () {
          return this._size;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.manage = function (e, t) {
        var n;
        if (
          ($.is(e) ? (n = e) : ((n = this.nextId()), (t = e)),
          void 0 !== this._annotations[n])
        )
          throw new Error('Id ' + n + ' is already in use.');
        if (void 0 === t) throw new Error('No annotation provided for id ' + n);
        return (this._annotations[n] = t), this._size++, n;
      }),
      (e.prototype.nextId = function () {
        return this._counter++, this._counter.toString();
      }),
      e
    );
  })();
!(function () {
  function e(e) {
    var t = this;
    (this._textEditChanges = Object.create(null)),
      void 0 !== e
        ? ((this._workspaceEdit = e),
          e.documentChanges
            ? ((this._changeAnnotations = new ot(e.changeAnnotations)),
              (e.changeAnnotations = this._changeAnnotations.all()),
              e.documentChanges.forEach(function (e) {
                if (Z.is(e)) {
                  var n = new it(e.edits, t._changeAnnotations);
                  t._textEditChanges[e.textDocument.uri] = n;
                }
              }))
            : e.changes &&
              Object.keys(e.changes).forEach(function (n) {
                var r = new it(e.changes[n]);
                t._textEditChanges[n] = r;
              }))
        : (this._workspaceEdit = {});
  }
  Object.defineProperty(e.prototype, 'edit', {
    get: function () {
      return (
        this.initDocumentChanges(),
        void 0 !== this._changeAnnotations &&
          (0 === this._changeAnnotations.size
            ? (this._workspaceEdit.changeAnnotations = void 0)
            : (this._workspaceEdit.changeAnnotations =
                this._changeAnnotations.all())),
        this._workspaceEdit
      );
    },
    enumerable: !1,
    configurable: !0,
  }),
    (e.prototype.getTextEditChange = function (e) {
      if (ge.is(e)) {
        if (
          (this.initDocumentChanges(),
          void 0 === this._workspaceEdit.documentChanges)
        )
          throw new Error(
            'Workspace edit is not configured for document changes.',
          );
        var t = { uri: e.uri, version: e.version };
        if (!(r = this._textEditChanges[t.uri])) {
          var n = { textDocument: t, edits: (i = []) };
          this._workspaceEdit.documentChanges.push(n),
            (r = new it(i, this._changeAnnotations)),
            (this._textEditChanges[t.uri] = r);
        }
        return r;
      }
      if ((this.initChanges(), void 0 === this._workspaceEdit.changes))
        throw new Error(
          'Workspace edit is not configured for normal text edit changes.',
        );
      var r;
      if (!(r = this._textEditChanges[e])) {
        var i = [];
        (this._workspaceEdit.changes[e] = i),
          (r = new it(i)),
          (this._textEditChanges[e] = r);
      }
      return r;
    }),
    (e.prototype.initDocumentChanges = function () {
      void 0 === this._workspaceEdit.documentChanges &&
        void 0 === this._workspaceEdit.changes &&
        ((this._changeAnnotations = new ot()),
        (this._workspaceEdit.documentChanges = []),
        (this._workspaceEdit.changeAnnotations =
          this._changeAnnotations.all()));
    }),
    (e.prototype.initChanges = function () {
      void 0 === this._workspaceEdit.documentChanges &&
        void 0 === this._workspaceEdit.changes &&
        (this._workspaceEdit.changes = Object.create(null));
    }),
    (e.prototype.createFile = function (e, t, n) {
      if (
        (this.initDocumentChanges(),
        void 0 === this._workspaceEdit.documentChanges)
      )
        throw new Error(
          'Workspace edit is not configured for document changes.',
        );
      var r, i, o;
      if (
        (B.is(t) || $.is(t) ? (r = t) : (n = t),
        void 0 === r
          ? (i = Y.create(e, n))
          : ((o = $.is(r) ? r : this._changeAnnotations.manage(r)),
            (i = Y.create(e, n, o))),
        this._workspaceEdit.documentChanges.push(i),
        void 0 !== o)
      )
        return o;
    }),
    (e.prototype.renameFile = function (e, t, n, r) {
      if (
        (this.initDocumentChanges(),
        void 0 === this._workspaceEdit.documentChanges)
      )
        throw new Error(
          'Workspace edit is not configured for document changes.',
        );
      var i, o, a;
      if (
        (B.is(n) || $.is(n) ? (i = n) : (r = n),
        void 0 === i
          ? (o = te.create(e, t, r))
          : ((a = $.is(i) ? i : this._changeAnnotations.manage(i)),
            (o = te.create(e, t, r, a))),
        this._workspaceEdit.documentChanges.push(o),
        void 0 !== a)
      )
        return a;
    }),
    (e.prototype.deleteFile = function (e, t, n) {
      if (
        (this.initDocumentChanges(),
        void 0 === this._workspaceEdit.documentChanges)
      )
        throw new Error(
          'Workspace edit is not configured for document changes.',
        );
      var r, i, o;
      if (
        (B.is(t) || $.is(t) ? (r = t) : (n = t),
        void 0 === r
          ? (i = re.create(e, n))
          : ((o = $.is(r) ? r : this._changeAnnotations.manage(r)),
            (i = re.create(e, n, o))),
        this._workspaceEdit.documentChanges.push(i),
        void 0 !== o)
      )
        return o;
    });
})(),
  ((ce = se || (se = {})).create = function (e) {
    return { uri: e };
  }),
  (ce.is = function (e) {
    var t = e;
    return at.defined(t) && at.string(t.uri);
  }),
  ((de = ue || (ue = {})).create = function (e, t) {
    return { uri: e, version: t };
  }),
  (de.is = function (e) {
    var t = e;
    return at.defined(t) && at.string(t.uri) && at.integer(t.version);
  }),
  ((le = ge || (ge = {})).create = function (e, t) {
    return { uri: e, version: t };
  }),
  (le.is = function (e) {
    var t = e;
    return (
      at.defined(t) &&
      at.string(t.uri) &&
      (null === t.version || at.integer(t.version))
    );
  }),
  ((fe = he || (he = {})).create = function (e, t, n, r) {
    return { uri: e, languageId: t, version: n, text: r };
  }),
  (fe.is = function (e) {
    var t = e;
    return (
      at.defined(t) &&
      at.string(t.uri) &&
      at.string(t.languageId) &&
      at.integer(t.version) &&
      at.string(t.text)
    );
  }),
  ((me = pe || (pe = {})).PlainText = 'plaintext'),
  (me.Markdown = 'markdown'),
  (function (e) {
    e.is = function (t) {
      var n = t;
      return n === e.PlainText || n === e.Markdown;
    };
  })(pe || (pe = {})),
  ((ve || (ve = {})).is = function (e) {
    var t = e;
    return at.objectLiteral(e) && pe.is(t.kind) && at.string(t.value);
  }),
  ((be = _e || (_e = {})).Text = 1),
  (be.Method = 2),
  (be.Function = 3),
  (be.Constructor = 4),
  (be.Field = 5),
  (be.Variable = 6),
  (be.Class = 7),
  (be.Interface = 8),
  (be.Module = 9),
  (be.Property = 10),
  (be.Unit = 11),
  (be.Value = 12),
  (be.Enum = 13),
  (be.Keyword = 14),
  (be.Snippet = 15),
  (be.Color = 16),
  (be.File = 17),
  (be.Reference = 18),
  (be.Folder = 19),
  (be.EnumMember = 20),
  (be.Constant = 21),
  (be.Struct = 22),
  (be.Event = 23),
  (be.Operator = 24),
  (be.TypeParameter = 25),
  ((we = ke || (ke = {})).PlainText = 1),
  (we.Snippet = 2),
  ((Ce || (Ce = {})).Deprecated = 1),
  ((Ee = ye || (ye = {})).create = function (e, t, n) {
    return { newText: e, insert: t, replace: n };
  }),
  (Ee.is = function (e) {
    var t = e;
    return t && at.string(t.newText) && v.is(t.insert) && v.is(t.replace);
  }),
  ((Ae = xe || (xe = {})).asIs = 1),
  (Ae.adjustIndentation = 2),
  ((Ie || (Ie = {})).create = function (e) {
    return { label: e };
  }),
  ((Se || (Se = {})).create = function (e, t) {
    return { items: e || [], isIncomplete: !!t };
  }),
  ((Te = je || (je = {})).fromPlainText = function (e) {
    return e.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&');
  }),
  (Te.is = function (e) {
    var t = e;
    return (
      at.string(t) ||
      (at.objectLiteral(t) && at.string(t.language) && at.string(t.value))
    );
  }),
  ((Re || (Re = {})).is = function (e) {
    var t = e;
    return (
      !!t &&
      at.objectLiteral(t) &&
      (ve.is(t.contents) ||
        je.is(t.contents) ||
        at.typedArray(t.contents, je.is)) &&
      (void 0 === e.range || v.is(e.range))
    );
  }),
  ((Pe || (Pe = {})).create = function (e, t) {
    return t ? { label: e, documentation: t } : { label: e };
  }),
  ((De || (De = {})).create = function (e, t) {
    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
    var i = { label: e };
    return (
      at.defined(t) && (i.documentation = t),
      at.defined(n) ? (i.parameters = n) : (i.parameters = []),
      i
    );
  }),
  ((Le = Me || (Me = {})).Text = 1),
  (Le.Read = 2),
  (Le.Write = 3),
  ((Fe || (Fe = {})).create = function (e, t) {
    var n = { range: e };
    return at.number(t) && (n.kind = t), n;
  }),
  ((We = Oe || (Oe = {})).File = 1),
  (We.Module = 2),
  (We.Namespace = 3),
  (We.Package = 4),
  (We.Class = 5),
  (We.Method = 6),
  (We.Property = 7),
  (We.Field = 8),
  (We.Constructor = 9),
  (We.Enum = 10),
  (We.Interface = 11),
  (We.Function = 12),
  (We.Variable = 13),
  (We.Constant = 14),
  (We.String = 15),
  (We.Number = 16),
  (We.Boolean = 17),
  (We.Array = 18),
  (We.Object = 19),
  (We.Key = 20),
  (We.Null = 21),
  (We.EnumMember = 22),
  (We.Struct = 23),
  (We.Event = 24),
  (We.Operator = 25),
  (We.TypeParameter = 26),
  ((Ne || (Ne = {})).Deprecated = 1),
  ((Ue || (Ue = {})).create = function (e, t, n, r, i) {
    var o = { name: e, kind: t, location: { uri: r, range: n } };
    return i && (o.containerName = i), o;
  }),
  ((ze = Ve || (Ve = {})).create = function (e, t, n, r, i, o) {
    var a = { name: e, detail: t, kind: n, range: r, selectionRange: i };
    return void 0 !== o && (a.children = o), a;
  }),
  (ze.is = function (e) {
    var t = e;
    return (
      t &&
      at.string(t.name) &&
      at.number(t.kind) &&
      v.is(t.range) &&
      v.is(t.selectionRange) &&
      (void 0 === t.detail || at.string(t.detail)) &&
      (void 0 === t.deprecated || at.boolean(t.deprecated)) &&
      (void 0 === t.children || Array.isArray(t.children)) &&
      (void 0 === t.tags || Array.isArray(t.tags))
    );
  }),
  ((He = Ke || (Ke = {})).Empty = ''),
  (He.QuickFix = 'quickfix'),
  (He.Refactor = 'refactor'),
  (He.RefactorExtract = 'refactor.extract'),
  (He.RefactorInline = 'refactor.inline'),
  (He.RefactorRewrite = 'refactor.rewrite'),
  (He.Source = 'source'),
  (He.SourceOrganizeImports = 'source.organizeImports'),
  (He.SourceFixAll = 'source.fixAll'),
  ((Be = qe || (qe = {})).create = function (e, t) {
    var n = { diagnostics: e };
    return null != t && (n.only = t), n;
  }),
  (Be.is = function (e) {
    var t = e;
    return (
      at.defined(t) &&
      at.typedArray(t.diagnostics, U.is) &&
      (void 0 === t.only || at.typedArray(t.only, at.string))
    );
  }),
  (($e = Xe || (Xe = {})).create = function (e, t, n) {
    var r = { title: e },
      i = !0;
    return (
      'string' == typeof t
        ? ((i = !1), (r.kind = t))
        : z.is(t)
        ? (r.command = t)
        : (r.edit = t),
      i && void 0 !== n && (r.kind = n),
      r
    );
  }),
  ($e.is = function (e) {
    var t = e;
    return (
      t &&
      at.string(t.title) &&
      (void 0 === t.diagnostics || at.typedArray(t.diagnostics, U.is)) &&
      (void 0 === t.kind || at.string(t.kind)) &&
      (void 0 !== t.edit || void 0 !== t.command) &&
      (void 0 === t.command || z.is(t.command)) &&
      (void 0 === t.isPreferred || at.boolean(t.isPreferred)) &&
      (void 0 === t.edit || oe.is(t.edit))
    );
  }),
  ((Qe = Ge || (Ge = {})).create = function (e, t) {
    var n = { range: e };
    return at.defined(t) && (n.data = t), n;
  }),
  (Qe.is = function (e) {
    var t = e;
    return (
      at.defined(t) &&
      v.is(t.range) &&
      (at.undefined(t.command) || z.is(t.command))
    );
  }),
  ((Je = Ze || (Ze = {})).create = function (e, t) {
    return { tabSize: e, insertSpaces: t };
  }),
  (Je.is = function (e) {
    var t = e;
    return (
      at.defined(t) && at.uinteger(t.tabSize) && at.boolean(t.insertSpaces)
    );
  }),
  ((et = Ye || (Ye = {})).create = function (e, t, n) {
    return { range: e, target: t, data: n };
  }),
  (et.is = function (e) {
    var t = e;
    return (
      at.defined(t) &&
      v.is(t.range) &&
      (at.undefined(t.target) || at.string(t.target))
    );
  }),
  ((nt = tt || (tt = {})).create = function (e, t) {
    return { range: e, parent: t };
  }),
  (nt.is = function (e) {
    var t = e;
    return (
      void 0 !== t && v.is(t.range) && (void 0 === t.parent || nt.is(t.parent))
    );
  }),
  (function (e) {
    function t(e, n) {
      if (e.length <= 1) return e;
      var r = (e.length / 2) | 0,
        i = e.slice(0, r),
        o = e.slice(r);
      t(i, n), t(o, n);
      for (var a = 0, s = 0, c = 0; a < i.length && s < o.length; ) {
        var u = n(i[a], o[s]);
        e[c++] = u <= 0 ? i[a++] : o[s++];
      }
      for (; a < i.length; ) e[c++] = i[a++];
      for (; s < o.length; ) e[c++] = o[s++];
      return e;
    }
    (e.create = function (e, t, n, r) {
      return new ut(e, t, n, r);
    }),
      (e.is = function (e) {
        var t = e;
        return !!(
          at.defined(t) &&
          at.string(t.uri) &&
          (at.undefined(t.languageId) || at.string(t.languageId)) &&
          at.uinteger(t.lineCount) &&
          at.func(t.getText) &&
          at.func(t.positionAt) &&
          at.func(t.offsetAt)
        );
      }),
      (e.applyEdits = function (e, n) {
        for (
          var r = e.getText(),
            i = t(n, function (e, t) {
              var n = e.range.start.line - t.range.start.line;
              return 0 === n
                ? e.range.start.character - t.range.start.character
                : n;
            }),
            o = r.length,
            a = i.length - 1;
          a >= 0;
          a--
        ) {
          var s = i[a],
            c = e.offsetAt(s.range.start),
            u = e.offsetAt(s.range.end);
          if (!(u <= o)) throw new Error('Overlapping edit');
          (r = r.substring(0, c) + s.newText + r.substring(u, r.length)),
            (o = c);
        }
        return r;
      });
  })(rt || (rt = {}));
var at,
  st,
  ct,
  ut = (function () {
    function e(e, t, n, r) {
      (this._uri = e),
        (this._languageId = t),
        (this._version = n),
        (this._content = r),
        (this._lineOffsets = void 0);
    }
    return (
      Object.defineProperty(e.prototype, 'uri', {
        get: function () {
          return this._uri;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'languageId', {
        get: function () {
          return this._languageId;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'version', {
        get: function () {
          return this._version;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.getText = function (e) {
        if (e) {
          var t = this.offsetAt(e.start),
            n = this.offsetAt(e.end);
          return this._content.substring(t, n);
        }
        return this._content;
      }),
      (e.prototype.update = function (e, t) {
        (this._content = e.text),
          (this._version = t),
          (this._lineOffsets = void 0);
      }),
      (e.prototype.getLineOffsets = function () {
        if (void 0 === this._lineOffsets) {
          for (
            var e = [], t = this._content, n = !0, r = 0;
            r < t.length;
            r++
          ) {
            n && (e.push(r), (n = !1));
            var i = t.charAt(r);
            (n = '\r' === i || '\n' === i),
              '\r' === i && r + 1 < t.length && '\n' === t.charAt(r + 1) && r++;
          }
          n && t.length > 0 && e.push(t.length), (this._lineOffsets = e);
        }
        return this._lineOffsets;
      }),
      (e.prototype.positionAt = function (e) {
        e = Math.max(Math.min(e, this._content.length), 0);
        var t = this.getLineOffsets(),
          n = 0,
          r = t.length;
        if (0 === r) return p.create(0, e);
        for (; n < r; ) {
          var i = Math.floor((n + r) / 2);
          t[i] > e ? (r = i) : (n = i + 1);
        }
        var o = n - 1;
        return p.create(o, e - t[o]);
      }),
      (e.prototype.offsetAt = function (e) {
        var t = this.getLineOffsets();
        if (e.line >= t.length) return this._content.length;
        if (e.line < 0) return 0;
        var n = t[e.line],
          r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
        return Math.max(Math.min(n + e.character, r), n);
      }),
      Object.defineProperty(e.prototype, 'lineCount', {
        get: function () {
          return this.getLineOffsets().length;
        },
        enumerable: !1,
        configurable: !0,
      }),
      e
    );
  })();
(st = at || (at = {})),
  (ct = Object.prototype.toString),
  (st.defined = function (e) {
    return void 0 !== e;
  }),
  (st.undefined = function (e) {
    return void 0 === e;
  }),
  (st.boolean = function (e) {
    return !0 === e || !1 === e;
  }),
  (st.string = function (e) {
    return '[object String]' === ct.call(e);
  }),
  (st.number = function (e) {
    return '[object Number]' === ct.call(e);
  }),
  (st.numberRange = function (e, t, n) {
    return '[object Number]' === ct.call(e) && t <= e && e <= n;
  }),
  (st.integer = function (e) {
    return (
      '[object Number]' === ct.call(e) && -2147483648 <= e && e <= 2147483647
    );
  }),
  (st.uinteger = function (e) {
    return '[object Number]' === ct.call(e) && 0 <= e && e <= 2147483647;
  }),
  (st.func = function (e) {
    return '[object Function]' === ct.call(e);
  }),
  (st.objectLiteral = function (e) {
    return null !== e && 'object' == typeof e;
  }),
  (st.typedArray = function (e, t) {
    return Array.isArray(e) && e.every(t);
  });
var dt = class {
  constructor(e, n, r) {
    t(this, '_disposables', []),
      t(this, '_listener', Object.create(null)),
      (this._languageId = e),
      (this._worker = n);
    const i = e => {
        let t,
          n = e.getLanguageId();
        n === this._languageId &&
          ((this._listener[e.uri.toString()] = e.onDidChangeContent(() => {
            window.clearTimeout(t),
              (t = window.setTimeout(() => this._doValidate(e.uri, n), 500));
          })),
          this._doValidate(e.uri, n));
      },
      o = e => {
        d.editor.setModelMarkers(e, this._languageId, []);
        let t = e.uri.toString(),
          n = this._listener[t];
        n && (n.dispose(), delete this._listener[t]);
      };
    this._disposables.push(d.editor.onDidCreateModel(i)),
      this._disposables.push(d.editor.onWillDisposeModel(o)),
      this._disposables.push(
        d.editor.onDidChangeModelLanguage(e => {
          o(e.model), i(e.model);
        }),
      ),
      this._disposables.push(
        r(e => {
          d.editor.getModels().forEach(e => {
            e.getLanguageId() === this._languageId && (o(e), i(e));
          });
        }),
      ),
      this._disposables.push({
        dispose: () => {
          d.editor.getModels().forEach(o);
          for (let e in this._listener) this._listener[e].dispose();
        },
      }),
      d.editor.getModels().forEach(i);
  }
  dispose() {
    this._disposables.forEach(e => e && e.dispose()),
      (this._disposables.length = 0);
  }
  _doValidate(e, t) {
    this._worker(e)
      .then(t => t.doValidation(e.toString()))
      .then(n => {
        const r = n.map(e =>
          (function (e, t) {
            let n = 'number' == typeof t.code ? String(t.code) : t.code;
            return {
              severity: gt(t.severity),
              startLineNumber: t.range.start.line + 1,
              startColumn: t.range.start.character + 1,
              endLineNumber: t.range.end.line + 1,
              endColumn: t.range.end.character + 1,
              message: t.message,
              code: n,
              source: t.source,
            };
          })(0, e),
        );
        let i = d.editor.getModel(e);
        i && i.getLanguageId() === t && d.editor.setModelMarkers(i, t, r);
      })
      .then(void 0, e => {
        console.error(e);
      });
  }
};
function gt(e) {
  switch (e) {
    case L.Error:
      return d.MarkerSeverity.Error;
    case L.Warning:
      return d.MarkerSeverity.Warning;
    case L.Information:
      return d.MarkerSeverity.Info;
    case L.Hint:
      return d.MarkerSeverity.Hint;
    default:
      return d.MarkerSeverity.Info;
  }
}
var lt = class {
  constructor(e, t) {
    (this._worker = e), (this._triggerCharacters = t);
  }
  get triggerCharacters() {
    return this._triggerCharacters;
  }
  provideCompletionItems(e, t, n, r) {
    const i = e.uri;
    return this._worker(i)
      .then(e => e.doComplete(i.toString(), ht(t)))
      .then(n => {
        if (!n) return;
        const r = e.getWordUntilPosition(t),
          i = new d.Range(
            t.lineNumber,
            r.startColumn,
            t.lineNumber,
            r.endColumn,
          ),
          o = n.items.map(e => {
            const t = {
              label: e.label,
              insertText: e.insertText || e.label,
              sortText: e.sortText,
              filterText: e.filterText,
              documentation: e.documentation,
              detail: e.detail,
              command:
                ((n = e.command),
                n && 'editor.action.triggerSuggest' === n.command
                  ? { id: n.command, title: n.title, arguments: n.arguments }
                  : void 0),
              range: i,
              kind: mt(e.kind),
            };
            var n, r;
            return (
              e.textEdit &&
                (void 0 !== (r = e.textEdit).insert && void 0 !== r.replace
                  ? (t.range = {
                      insert: pt(e.textEdit.insert),
                      replace: pt(e.textEdit.replace),
                    })
                  : (t.range = pt(e.textEdit.range)),
                (t.insertText = e.textEdit.newText)),
              e.additionalTextEdits &&
                (t.additionalTextEdits = e.additionalTextEdits.map(vt)),
              e.insertTextFormat === ke.Snippet &&
                (t.insertTextRules =
                  d.languages.CompletionItemInsertTextRule.InsertAsSnippet),
              t
            );
          });
        return { isIncomplete: n.isIncomplete, suggestions: o };
      });
  }
};
function ht(e) {
  if (e) return { character: e.column - 1, line: e.lineNumber - 1 };
}
function ft(e) {
  if (e)
    return {
      start: { line: e.startLineNumber - 1, character: e.startColumn - 1 },
      end: { line: e.endLineNumber - 1, character: e.endColumn - 1 },
    };
}
function pt(e) {
  if (e)
    return new d.Range(
      e.start.line + 1,
      e.start.character + 1,
      e.end.line + 1,
      e.end.character + 1,
    );
}
function mt(e) {
  const t = d.languages.CompletionItemKind;
  switch (e) {
    case _e.Text:
      return t.Text;
    case _e.Method:
      return t.Method;
    case _e.Function:
      return t.Function;
    case _e.Constructor:
      return t.Constructor;
    case _e.Field:
      return t.Field;
    case _e.Variable:
      return t.Variable;
    case _e.Class:
      return t.Class;
    case _e.Interface:
      return t.Interface;
    case _e.Module:
      return t.Module;
    case _e.Property:
      return t.Property;
    case _e.Unit:
      return t.Unit;
    case _e.Value:
      return t.Value;
    case _e.Enum:
      return t.Enum;
    case _e.Keyword:
      return t.Keyword;
    case _e.Snippet:
      return t.Snippet;
    case _e.Color:
      return t.Color;
    case _e.File:
      return t.File;
    case _e.Reference:
      return t.Reference;
  }
  return t.Property;
}
function vt(e) {
  if (e) return { range: pt(e.range), text: e.newText };
}
var _t = class {
  constructor(e) {
    this._worker = e;
  }
  provideHover(e, t, n) {
    let r = e.uri;
    return this._worker(r)
      .then(e => e.doHover(r.toString(), ht(t)))
      .then(e => {
        if (e) return { range: pt(e.range), contents: kt(e.contents) };
      });
  }
};
function bt(e) {
  return 'string' == typeof e
    ? { value: e }
    : (t = e) && 'object' == typeof t && 'string' == typeof t.kind
    ? 'plaintext' === e.kind
      ? { value: e.value.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&') }
      : { value: e.value }
    : { value: '```' + e.language + '\n' + e.value + '\n```\n' };
  var t;
}
function kt(e) {
  if (e) return Array.isArray(e) ? e.map(bt) : [bt(e)];
}
var wt = class {
  constructor(e) {
    this._worker = e;
  }
  provideDocumentHighlights(e, t, n) {
    const r = e.uri;
    return this._worker(r)
      .then(e => e.findDocumentHighlights(r.toString(), ht(t)))
      .then(e => {
        if (e) return e.map(e => ({ range: pt(e.range), kind: Ct(e.kind) }));
      });
  }
};
function Ct(e) {
  switch (e) {
    case Me.Read:
      return d.languages.DocumentHighlightKind.Read;
    case Me.Write:
      return d.languages.DocumentHighlightKind.Write;
    case Me.Text:
      return d.languages.DocumentHighlightKind.Text;
  }
  return d.languages.DocumentHighlightKind.Text;
}
var yt = class {
  constructor(e) {
    this._worker = e;
  }
  provideDefinition(e, t, n) {
    const r = e.uri;
    return this._worker(r)
      .then(e => e.findDefinition(r.toString(), ht(t)))
      .then(e => {
        if (e) return [Et(e)];
      });
  }
};
function Et(e) {
  return { uri: d.Uri.parse(e.uri), range: pt(e.range) };
}
var xt = class {
    constructor(e) {
      this._worker = e;
    }
    provideReferences(e, t, n, r) {
      const i = e.uri;
      return this._worker(i)
        .then(e => e.findReferences(i.toString(), ht(t)))
        .then(e => {
          if (e) return e.map(Et);
        });
    }
  },
  At = class {
    constructor(e) {
      this._worker = e;
    }
    provideRenameEdits(e, t, n, r) {
      const i = e.uri;
      return this._worker(i)
        .then(e => e.doRename(i.toString(), ht(t), n))
        .then(e =>
          (function (e) {
            if (!e || !e.changes) return;
            let t = [];
            for (let n in e.changes) {
              const r = d.Uri.parse(n);
              for (let i of e.changes[n])
                t.push({
                  resource: r,
                  versionId: void 0,
                  textEdit: { range: pt(i.range), text: i.newText },
                });
            }
            return { edits: t };
          })(e),
        );
    }
  };
var It = class {
  constructor(e) {
    this._worker = e;
  }
  provideDocumentSymbols(e, t) {
    const n = e.uri;
    return this._worker(n)
      .then(e => e.findDocumentSymbols(n.toString()))
      .then(e => {
        if (e)
          return e.map(e => ({
            name: e.name,
            detail: '',
            containerName: e.containerName,
            kind: St(e.kind),
            range: pt(e.location.range),
            selectionRange: pt(e.location.range),
            tags: [],
          }));
      });
  }
};
function St(e) {
  let t = d.languages.SymbolKind;
  switch (e) {
    case Oe.File:
      return t.Array;
    case Oe.Module:
      return t.Module;
    case Oe.Namespace:
      return t.Namespace;
    case Oe.Package:
      return t.Package;
    case Oe.Class:
      return t.Class;
    case Oe.Method:
      return t.Method;
    case Oe.Property:
      return t.Property;
    case Oe.Field:
      return t.Field;
    case Oe.Constructor:
      return t.Constructor;
    case Oe.Enum:
      return t.Enum;
    case Oe.Interface:
      return t.Interface;
    case Oe.Function:
      return t.Function;
    case Oe.Variable:
      return t.Variable;
    case Oe.Constant:
      return t.Constant;
    case Oe.String:
      return t.String;
    case Oe.Number:
      return t.Number;
    case Oe.Boolean:
      return t.Boolean;
    case Oe.Array:
      return t.Array;
  }
  return t.Function;
}
var jt = class {
    constructor(e) {
      this._worker = e;
    }
    provideLinks(e, t) {
      const n = e.uri;
      return this._worker(n)
        .then(e => e.findDocumentLinks(n.toString()))
        .then(e => {
          if (e)
            return {
              links: e.map(e => ({ range: pt(e.range), url: e.target })),
            };
        });
    }
  },
  Tt = class {
    constructor(e) {
      this._worker = e;
    }
    provideDocumentFormattingEdits(e, t, n) {
      const r = e.uri;
      return this._worker(r).then(e =>
        e.format(r.toString(), null, Pt(t)).then(e => {
          if (e && 0 !== e.length) return e.map(vt);
        }),
      );
    }
  },
  Rt = class {
    constructor(e) {
      this._worker = e;
    }
    provideDocumentRangeFormattingEdits(e, t, n, r) {
      const i = e.uri;
      return this._worker(i).then(e =>
        e.format(i.toString(), ft(t), Pt(n)).then(e => {
          if (e && 0 !== e.length) return e.map(vt);
        }),
      );
    }
  };
function Pt(e) {
  return { tabSize: e.tabSize, insertSpaces: e.insertSpaces };
}
var Dt = class {
    constructor(e) {
      this._worker = e;
    }
    provideDocumentColors(e, t) {
      const n = e.uri;
      return this._worker(n)
        .then(e => e.findDocumentColors(n.toString()))
        .then(e => {
          if (e) return e.map(e => ({ color: e.color, range: pt(e.range) }));
        });
    }
    provideColorPresentations(e, t, n) {
      const r = e.uri;
      return this._worker(r)
        .then(e => e.getColorPresentations(r.toString(), t.color, ft(t.range)))
        .then(e => {
          if (e)
            return e.map(e => {
              let t = { label: e.label };
              return (
                e.textEdit && (t.textEdit = vt(e.textEdit)),
                e.additionalTextEdits &&
                  (t.additionalTextEdits = e.additionalTextEdits.map(vt)),
                t
              );
            });
        });
    }
  },
  Mt = class {
    constructor(e) {
      this._worker = e;
    }
    provideFoldingRanges(e, t, n) {
      const r = e.uri;
      return this._worker(r)
        .then(e => e.getFoldingRanges(r.toString(), t))
        .then(e => {
          if (e)
            return e.map(e => {
              const t = { start: e.startLine + 1, end: e.endLine + 1 };
              return (
                void 0 !== e.kind &&
                  (t.kind = (function (e) {
                    switch (e) {
                      case j.Comment:
                        return d.languages.FoldingRangeKind.Comment;
                      case j.Imports:
                        return d.languages.FoldingRangeKind.Imports;
                      case j.Region:
                        return d.languages.FoldingRangeKind.Region;
                    }
                    return;
                  })(e.kind)),
                t
              );
            });
        });
    }
  };
var Lt,
  Ft = class {
    constructor(e) {
      this._worker = e;
    }
    provideSelectionRanges(e, t, n) {
      const r = e.uri;
      return this._worker(r)
        .then(e => e.getSelectionRanges(r.toString(), t.map(ht)))
        .then(e => {
          if (e)
            return e.map(e => {
              const t = [];
              for (; e; ) t.push({ range: pt(e.range) }), (e = e.parent);
              return t;
            });
        });
    }
  };
function Ot(e) {
  return (
    32 === e ||
    9 === e ||
    11 === e ||
    12 === e ||
    160 === e ||
    5760 === e ||
    (e >= 8192 && e <= 8203) ||
    8239 === e ||
    8287 === e ||
    12288 === e ||
    65279 === e
  );
}
function Wt(e) {
  return 10 === e || 13 === e || 8232 === e || 8233 === e;
}
function Nt(e) {
  return e >= 48 && e <= 57;
}
(Lt || (Lt = {})).DEFAULT = { allowTrailingComma: !1 };
var Ut = function (e, t) {
  void 0 === t && (t = !1);
  var n = e.length,
    r = 0,
    i = '',
    o = 0,
    a = 16,
    s = 0,
    c = 0,
    u = 0,
    d = 0,
    g = 0;
  function l(t, n) {
    for (var i = 0, o = 0; i < t || !n; ) {
      var a = e.charCodeAt(r);
      if (a >= 48 && a <= 57) o = 16 * o + a - 48;
      else if (a >= 65 && a <= 70) o = 16 * o + a - 65 + 10;
      else {
        if (!(a >= 97 && a <= 102)) break;
        o = 16 * o + a - 97 + 10;
      }
      r++, i++;
    }
    return i < t && (o = -1), o;
  }
  function h() {
    if (((i = ''), (g = 0), (o = r), (c = s), (d = u), r >= n))
      return (o = n), (a = 17);
    var t = e.charCodeAt(r);
    if (Ot(t)) {
      do {
        r++, (i += String.fromCharCode(t)), (t = e.charCodeAt(r));
      } while (Ot(t));
      return (a = 15);
    }
    if (Wt(t))
      return (
        r++,
        (i += String.fromCharCode(t)),
        13 === t && 10 === e.charCodeAt(r) && (r++, (i += '\n')),
        s++,
        (u = r),
        (a = 14)
      );
    switch (t) {
      case 123:
        return r++, (a = 1);
      case 125:
        return r++, (a = 2);
      case 91:
        return r++, (a = 3);
      case 93:
        return r++, (a = 4);
      case 58:
        return r++, (a = 6);
      case 44:
        return r++, (a = 5);
      case 34:
        return (
          r++,
          (i = (function () {
            for (var t = '', i = r; ; ) {
              if (r >= n) {
                (t += e.substring(i, r)), (g = 2);
                break;
              }
              var o = e.charCodeAt(r);
              if (34 === o) {
                (t += e.substring(i, r)), r++;
                break;
              }
              if (92 !== o) {
                if (o >= 0 && o <= 31) {
                  if (Wt(o)) {
                    (t += e.substring(i, r)), (g = 2);
                    break;
                  }
                  g = 6;
                }
                r++;
              } else {
                if (((t += e.substring(i, r)), ++r >= n)) {
                  g = 2;
                  break;
                }
                switch (e.charCodeAt(r++)) {
                  case 34:
                    t += '"';
                    break;
                  case 92:
                    t += '\\';
                    break;
                  case 47:
                    t += '/';
                    break;
                  case 98:
                    t += '\b';
                    break;
                  case 102:
                    t += '\f';
                    break;
                  case 110:
                    t += '\n';
                    break;
                  case 114:
                    t += '\r';
                    break;
                  case 116:
                    t += '\t';
                    break;
                  case 117:
                    var a = l(4, !0);
                    a >= 0 ? (t += String.fromCharCode(a)) : (g = 4);
                    break;
                  default:
                    g = 5;
                }
                i = r;
              }
            }
            return t;
          })()),
          (a = 10)
        );
      case 47:
        var h = r - 1;
        if (47 === e.charCodeAt(r + 1)) {
          for (r += 2; r < n && !Wt(e.charCodeAt(r)); ) r++;
          return (i = e.substring(h, r)), (a = 12);
        }
        if (42 === e.charCodeAt(r + 1)) {
          r += 2;
          for (var p = n - 1, m = !1; r < p; ) {
            var v = e.charCodeAt(r);
            if (42 === v && 47 === e.charCodeAt(r + 1)) {
              (r += 2), (m = !0);
              break;
            }
            r++,
              Wt(v) &&
                (13 === v && 10 === e.charCodeAt(r) && r++, s++, (u = r));
          }
          return m || (r++, (g = 1)), (i = e.substring(h, r)), (a = 13);
        }
        return (i += String.fromCharCode(t)), r++, (a = 16);
      case 45:
        if (((i += String.fromCharCode(t)), ++r === n || !Nt(e.charCodeAt(r))))
          return (a = 16);
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return (
          (i += (function () {
            var t = r;
            if (48 === e.charCodeAt(r)) r++;
            else for (r++; r < e.length && Nt(e.charCodeAt(r)); ) r++;
            if (r < e.length && 46 === e.charCodeAt(r)) {
              if (!(++r < e.length && Nt(e.charCodeAt(r))))
                return (g = 3), e.substring(t, r);
              for (r++; r < e.length && Nt(e.charCodeAt(r)); ) r++;
            }
            var n = r;
            if (
              r < e.length &&
              (69 === e.charCodeAt(r) || 101 === e.charCodeAt(r))
            )
              if (
                (((++r < e.length && 43 === e.charCodeAt(r)) ||
                  45 === e.charCodeAt(r)) &&
                  r++,
                r < e.length && Nt(e.charCodeAt(r)))
              ) {
                for (r++; r < e.length && Nt(e.charCodeAt(r)); ) r++;
                n = r;
              } else g = 3;
            return e.substring(t, n);
          })()),
          (a = 11)
        );
      default:
        for (; r < n && f(t); ) r++, (t = e.charCodeAt(r));
        if (o !== r) {
          switch ((i = e.substring(o, r))) {
            case 'true':
              return (a = 8);
            case 'false':
              return (a = 9);
            case 'null':
              return (a = 7);
          }
          return (a = 16);
        }
        return (i += String.fromCharCode(t)), r++, (a = 16);
    }
  }
  function f(e) {
    if (Ot(e) || Wt(e)) return !1;
    switch (e) {
      case 125:
      case 93:
      case 123:
      case 91:
      case 34:
      case 58:
      case 44:
      case 47:
        return !1;
    }
    return !0;
  }
  return {
    setPosition: function (e) {
      (r = e), (i = ''), (o = 0), (a = 16), (g = 0);
    },
    getPosition: function () {
      return r;
    },
    scan: t
      ? function () {
          var e;
          do {
            e = h();
          } while (e >= 12 && e <= 15);
          return e;
        }
      : h,
    getToken: function () {
      return a;
    },
    getTokenValue: function () {
      return i;
    },
    getTokenOffset: function () {
      return o;
    },
    getTokenLength: function () {
      return r - o;
    },
    getTokenStartLine: function () {
      return c;
    },
    getTokenStartCharacter: function () {
      return o - d;
    },
    getTokenError: function () {
      return g;
    },
  };
};
function Vt(e) {
  return {
    getInitialState: () => new en(null, null, !1, null),
    tokenize: (t, n) =>
      (function (e, t, n, r = 0) {
        let i = 0,
          o = !1;
        switch (n.scanError) {
          case 2:
            (t = '"' + t), (i = 1);
            break;
          case 1:
            (t = '/*' + t), (i = 2);
        }
        const a = Ut(t);
        let s = n.lastWasColon,
          c = n.parents;
        const u = { tokens: [], endState: n.clone() };
        for (;;) {
          let d = r + a.getPosition(),
            g = '';
          const l = a.scan();
          if (17 === l) break;
          if (d === r + a.getPosition())
            throw new Error(
              'Scanner did not advance, next 3 characters are: ' +
                t.substr(a.getPosition(), 3),
            );
          switch ((o && (d -= i), (o = i > 0), l)) {
            case 1:
              (c = Yt.push(c, 0)), (g = zt), (s = !1);
              break;
            case 2:
              (c = Yt.pop(c)), (g = zt), (s = !1);
              break;
            case 3:
              (c = Yt.push(c, 1)), (g = Kt), (s = !1);
              break;
            case 4:
              (c = Yt.pop(c)), (g = Kt), (s = !1);
              break;
            case 6:
              (g = Ht), (s = !0);
              break;
            case 5:
              (g = qt), (s = !1);
              break;
            case 8:
            case 9:
              (g = Bt), (s = !1);
              break;
            case 7:
              (g = Xt), (s = !1);
              break;
            case 10:
              const e = c ? c.type : 0;
              (g = s || 1 === e ? $t : Qt), (s = !1);
              break;
            case 11:
              (g = Gt), (s = !1);
          }
          if (e)
            switch (l) {
              case 12:
                g = Jt;
                break;
              case 13:
                g = Zt;
            }
          (u.endState = new en(n.getStateData(), a.getTokenError(), s, c)),
            u.tokens.push({ startIndex: d, scopes: g });
        }
        return u;
      })(e, t, n),
  };
}
var zt = 'delimiter.bracket.json',
  Kt = 'delimiter.array.json',
  Ht = 'delimiter.colon.json',
  qt = 'delimiter.comma.json',
  Bt = 'keyword.json',
  Xt = 'keyword.json',
  $t = 'string.value.json',
  Gt = 'number.json',
  Qt = 'string.key.json',
  Zt = 'comment.block.json',
  Jt = 'comment.line.json',
  Yt = class {
    constructor(e, t) {
      (this.parent = e), (this.type = t);
    }
    static pop(e) {
      return e ? e.parent : null;
    }
    static push(e, t) {
      return new Yt(e, t);
    }
    static equals(e, t) {
      if (!e && !t) return !0;
      if (!e || !t) return !1;
      for (; e && t; ) {
        if (e === t) return !0;
        if (e.type !== t.type) return !1;
        (e = e.parent), (t = t.parent);
      }
      return !0;
    }
  },
  en = class {
    constructor(e, n, r, i) {
      t(this, '_state'),
        t(this, 'scanError'),
        t(this, 'lastWasColon'),
        t(this, 'parents'),
        (this._state = e),
        (this.scanError = n),
        (this.lastWasColon = r),
        (this.parents = i);
    }
    clone() {
      return new en(
        this._state,
        this.scanError,
        this.lastWasColon,
        this.parents,
      );
    }
    equals(e) {
      return (
        e === this ||
        (!!(e && e instanceof en) &&
          this.scanError === e.scanError &&
          this.lastWasColon === e.lastWasColon &&
          Yt.equals(this.parents, e.parents))
      );
    }
    getStateData() {
      return this._state;
    }
    setStateData(e) {
      this._state = e;
    }
  };
var tn = class extends dt {
  constructor(e, t, n) {
    super(e, t, n.onDidChange),
      this._disposables.push(
        d.editor.onWillDisposeModel(e => {
          this._resetSchema(e.uri);
        }),
      ),
      this._disposables.push(
        d.editor.onDidChangeModelLanguage(e => {
          this._resetSchema(e.model.uri);
        }),
      );
  }
  _resetSchema(e) {
    this._worker().then(t => {
      t.resetSchema(e.toString());
    });
  }
};
function nn(e) {
  const t = [],
    n = [],
    r = new ae(e);
  t.push(r);
  const i = (...e) => r.getLanguageServiceWorker(...e);
  function o() {
    const { languageId: t, modeConfiguration: r } = e;
    on(n),
      r.documentFormattingEdits &&
        n.push(
          d.languages.registerDocumentFormattingEditProvider(t, new Tt(i)),
        ),
      r.documentRangeFormattingEdits &&
        n.push(
          d.languages.registerDocumentRangeFormattingEditProvider(t, new Rt(i)),
        ),
      r.completionItems &&
        n.push(
          d.languages.registerCompletionItemProvider(
            t,
            new lt(i, [' ', ':', '"']),
          ),
        ),
      r.hovers && n.push(d.languages.registerHoverProvider(t, new _t(i))),
      r.documentSymbols &&
        n.push(d.languages.registerDocumentSymbolProvider(t, new It(i))),
      r.tokens && n.push(d.languages.setTokensProvider(t, Vt(!0))),
      r.colors && n.push(d.languages.registerColorProvider(t, new Dt(i))),
      r.foldingRanges &&
        n.push(d.languages.registerFoldingRangeProvider(t, new Mt(i))),
      r.diagnostics && n.push(new tn(t, i, e)),
      r.selectionRanges &&
        n.push(d.languages.registerSelectionRangeProvider(t, new Ft(i)));
  }
  o(), t.push(d.languages.setLanguageConfiguration(e.languageId, an));
  let a = e.modeConfiguration;
  return (
    e.onDidChange(e => {
      e.modeConfiguration !== a && ((a = e.modeConfiguration), o());
    }),
    t.push(rn(n)),
    rn(t)
  );
}
function rn(e) {
  return { dispose: () => on(e) };
}
function on(e) {
  for (; e.length; ) e.pop().dispose();
}
var an = {
  wordPattern: /(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,
  comments: { lineComment: '//', blockComment: ['/*', '*/'] },
  brackets: [
    ['{', '}'],
    ['[', ']'],
  ],
  autoClosingPairs: [
    { open: '{', close: '}', notIn: ['string'] },
    { open: '[', close: ']', notIn: ['string'] },
    { open: '"', close: '"', notIn: ['string'] },
  ],
};
export {
  lt as CompletionAdapter,
  yt as DefinitionAdapter,
  dt as DiagnosticsAdapter,
  Dt as DocumentColorAdapter,
  Tt as DocumentFormattingEditProvider,
  wt as DocumentHighlightAdapter,
  jt as DocumentLinkAdapter,
  Rt as DocumentRangeFormattingEditProvider,
  It as DocumentSymbolAdapter,
  Mt as FoldingRangeAdapter,
  _t as HoverAdapter,
  xt as ReferenceAdapter,
  At as RenameAdapter,
  Ft as SelectionRangeAdapter,
  ae as WorkerManager,
  ht as fromPosition,
  ft as fromRange,
  nn as setupMode,
  pt as toRange,
  vt as toTextEdit,
};

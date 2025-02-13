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
  u = Object.prototype.hasOwnProperty,
  c = (e, t, n, r) => {
    if ((t && 'object' == typeof t) || 'function' == typeof t)
      for (let i of s(t))
        u.call(e, i) ||
          i === n ||
          o(e, i, {
            get: () => t[i],
            enumerable: !(r = a(t, i)) || r.enumerable,
          });
    return e;
  },
  d = {};
c(d, (r = n), 'default'), i && c(i, r, 'default');
var g,
  l,
  h,
  f,
  p,
  m,
  v,
  _,
  w,
  b,
  k,
  y,
  E,
  C,
  x,
  I,
  A,
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
  N,
  W,
  U,
  V,
  H,
  K,
  z,
  B,
  X,
  $,
  q,
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
            moduleId: 'vs/language/css/cssWorker',
            label: this._defaults.languageId,
            createData: {
              options: this._defaults.options,
              languageId: this._defaults.languageId,
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
  ((b = w || (w = {})).create = function (e, t) {
    return { uri: e, range: t };
  }),
  (b.is = function (e) {
    var t = e;
    return (
      at.defined(t) &&
      v.is(t.range) &&
      (at.string(t.uri) || at.undefined(t.uri))
    );
  }),
  ((y = k || (k = {})).create = function (e, t, n, r) {
    return {
      targetUri: e,
      targetRange: t,
      targetSelectionRange: n,
      originSelectionRange: r,
    };
  }),
  (y.is = function (e) {
    var t = e;
    return (
      at.defined(t) &&
      v.is(t.targetRange) &&
      at.string(t.targetUri) &&
      (v.is(t.targetSelectionRange) || at.undefined(t.targetSelectionRange)) &&
      (v.is(t.originSelectionRange) || at.undefined(t.originSelectionRange))
    );
  }),
  ((C = E || (E = {})).create = function (e, t, n, r) {
    return { red: e, green: t, blue: n, alpha: r };
  }),
  (C.is = function (e) {
    var t = e;
    return (
      at.numberRange(t.red, 0, 1) &&
      at.numberRange(t.green, 0, 1) &&
      at.numberRange(t.blue, 0, 1) &&
      at.numberRange(t.alpha, 0, 1)
    );
  }),
  ((I = x || (x = {})).create = function (e, t) {
    return { range: e, color: t };
  }),
  (I.is = function (e) {
    var t = e;
    return v.is(t.range) && E.is(t.color);
  }),
  ((S = A || (A = {})).create = function (e, t, n) {
    return { label: e, textEdit: t, additionalTextEdits: n };
  }),
  (S.is = function (e) {
    var t = e;
    return (
      at.string(t.label) &&
      (at.undefined(t.textEdit) || z.is(t)) &&
      (at.undefined(t.additionalTextEdits) ||
        at.typedArray(t.additionalTextEdits, z.is))
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
    return at.defined(t) && w.is(t.location) && at.string(t.message);
  }),
  ((F = L || (L = {})).Error = 1),
  (F.Warning = 2),
  (F.Information = 3),
  (F.Hint = 4),
  ((N = O || (O = {})).Unnecessary = 1),
  (N.Deprecated = 2),
  ((W || (W = {})).is = function (e) {
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
  ((K = H || (H = {})).create = function (e, t) {
    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
    var i = { title: e, command: t };
    return at.defined(n) && n.length > 0 && (i.arguments = n), i;
  }),
  (K.is = function (e) {
    var t = e;
    return at.defined(t) && at.string(t.title) && at.string(t.command);
  }),
  ((B = z || (z = {})).replace = function (e, t) {
    return { range: e, newText: t };
  }),
  (B.insert = function (e, t) {
    return { range: { start: e, end: e }, newText: t };
  }),
  (B.del = function (e) {
    return { range: e, newText: '' };
  }),
  (B.is = function (e) {
    var t = e;
    return at.objectLiteral(t) && at.string(t.newText) && v.is(t.range);
  }),
  (($ = X || (X = {})).create = function (e, t, n) {
    var r = { label: e };
    return (
      void 0 !== t && (r.needsConfirmation = t),
      void 0 !== n && (r.description = n),
      r
    );
  }),
  ($.is = function (e) {
    var t = e;
    return (
      void 0 !== t &&
      at.objectLiteral(t) &&
      at.string(t.label) &&
      (at.boolean(t.needsConfirmation) || void 0 === t.needsConfirmation) &&
      (at.string(t.description) || void 0 === t.description)
    );
  }),
  ((q || (q = {})).is = function (e) {
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
    return z.is(t) && (X.is(t.annotationId) || q.is(t.annotationId));
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
      (void 0 === t.annotationId || q.is(t.annotationId))
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
      (void 0 === t.annotationId || q.is(t.annotationId))
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
      (void 0 === t.annotationId || q.is(t.annotationId))
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
  ue,
  ce,
  de,
  ge,
  le,
  he,
  fe,
  pe,
  me,
  ve,
  _e,
  we,
  be,
  ke,
  ye,
  Ee,
  Ce,
  xe,
  Ie,
  Ae,
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
  Ne,
  We,
  Ue,
  Ve,
  He,
  Ke,
  ze,
  Be,
  Xe,
  $e,
  qe,
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
            ? (r = z.insert(e, t))
            : q.is(n)
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
            ? (r = z.replace(e, t))
            : q.is(n)
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
            ? (n = z.del(e))
            : q.is(t)
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
          (q.is(e) ? (n = e) : ((n = this.nextId()), (t = e)),
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
        (X.is(t) || q.is(t) ? (r = t) : (n = t),
        void 0 === r
          ? (i = Y.create(e, n))
          : ((o = q.is(r) ? r : this._changeAnnotations.manage(r)),
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
        (X.is(n) || q.is(n) ? (i = n) : (r = n),
        void 0 === i
          ? (o = te.create(e, t, r))
          : ((a = q.is(i) ? i : this._changeAnnotations.manage(i)),
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
        (X.is(t) || q.is(t) ? (r = t) : (n = t),
        void 0 === r
          ? (i = re.create(e, n))
          : ((o = q.is(r) ? r : this._changeAnnotations.manage(r)),
            (i = re.create(e, n, o))),
        this._workspaceEdit.documentChanges.push(i),
        void 0 !== o)
      )
        return o;
    });
})(),
  ((ue = se || (se = {})).create = function (e) {
    return { uri: e };
  }),
  (ue.is = function (e) {
    var t = e;
    return at.defined(t) && at.string(t.uri);
  }),
  ((de = ce || (ce = {})).create = function (e, t) {
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
  ((we = _e || (_e = {})).Text = 1),
  (we.Method = 2),
  (we.Function = 3),
  (we.Constructor = 4),
  (we.Field = 5),
  (we.Variable = 6),
  (we.Class = 7),
  (we.Interface = 8),
  (we.Module = 9),
  (we.Property = 10),
  (we.Unit = 11),
  (we.Value = 12),
  (we.Enum = 13),
  (we.Keyword = 14),
  (we.Snippet = 15),
  (we.Color = 16),
  (we.File = 17),
  (we.Reference = 18),
  (we.Folder = 19),
  (we.EnumMember = 20),
  (we.Constant = 21),
  (we.Struct = 22),
  (we.Event = 23),
  (we.Operator = 24),
  (we.TypeParameter = 25),
  ((ke = be || (be = {})).PlainText = 1),
  (ke.Snippet = 2),
  ((ye || (ye = {})).Deprecated = 1),
  ((Ce = Ee || (Ee = {})).create = function (e, t, n) {
    return { newText: e, insert: t, replace: n };
  }),
  (Ce.is = function (e) {
    var t = e;
    return t && at.string(t.newText) && v.is(t.insert) && v.is(t.replace);
  }),
  ((Ie = xe || (xe = {})).asIs = 1),
  (Ie.adjustIndentation = 2),
  ((Ae || (Ae = {})).create = function (e) {
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
  ((Ne = Oe || (Oe = {})).File = 1),
  (Ne.Module = 2),
  (Ne.Namespace = 3),
  (Ne.Package = 4),
  (Ne.Class = 5),
  (Ne.Method = 6),
  (Ne.Property = 7),
  (Ne.Field = 8),
  (Ne.Constructor = 9),
  (Ne.Enum = 10),
  (Ne.Interface = 11),
  (Ne.Function = 12),
  (Ne.Variable = 13),
  (Ne.Constant = 14),
  (Ne.String = 15),
  (Ne.Number = 16),
  (Ne.Boolean = 17),
  (Ne.Array = 18),
  (Ne.Object = 19),
  (Ne.Key = 20),
  (Ne.Null = 21),
  (Ne.EnumMember = 22),
  (Ne.Struct = 23),
  (Ne.Event = 24),
  (Ne.Operator = 25),
  (Ne.TypeParameter = 26),
  ((We || (We = {})).Deprecated = 1),
  ((Ue || (Ue = {})).create = function (e, t, n, r, i) {
    var o = { name: e, kind: t, location: { uri: r, range: n } };
    return i && (o.containerName = i), o;
  }),
  ((He = Ve || (Ve = {})).create = function (e, t, n, r, i, o) {
    var a = { name: e, detail: t, kind: n, range: r, selectionRange: i };
    return void 0 !== o && (a.children = o), a;
  }),
  (He.is = function (e) {
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
  ((ze = Ke || (Ke = {})).Empty = ''),
  (ze.QuickFix = 'quickfix'),
  (ze.Refactor = 'refactor'),
  (ze.RefactorExtract = 'refactor.extract'),
  (ze.RefactorInline = 'refactor.inline'),
  (ze.RefactorRewrite = 'refactor.rewrite'),
  (ze.Source = 'source'),
  (ze.SourceOrganizeImports = 'source.organizeImports'),
  (ze.SourceFixAll = 'source.fixAll'),
  ((Xe = Be || (Be = {})).create = function (e, t) {
    var n = { diagnostics: e };
    return null != t && (n.only = t), n;
  }),
  (Xe.is = function (e) {
    var t = e;
    return (
      at.defined(t) &&
      at.typedArray(t.diagnostics, U.is) &&
      (void 0 === t.only || at.typedArray(t.only, at.string))
    );
  }),
  ((qe = $e || ($e = {})).create = function (e, t, n) {
    var r = { title: e },
      i = !0;
    return (
      'string' == typeof t
        ? ((i = !1), (r.kind = t))
        : H.is(t)
        ? (r.command = t)
        : (r.edit = t),
      i && void 0 !== n && (r.kind = n),
      r
    );
  }),
  (qe.is = function (e) {
    var t = e;
    return (
      t &&
      at.string(t.title) &&
      (void 0 === t.diagnostics || at.typedArray(t.diagnostics, U.is)) &&
      (void 0 === t.kind || at.string(t.kind)) &&
      (void 0 !== t.edit || void 0 !== t.command) &&
      (void 0 === t.command || H.is(t.command)) &&
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
      (at.undefined(t.command) || H.is(t.command))
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
      for (var a = 0, s = 0, u = 0; a < i.length && s < o.length; ) {
        var c = n(i[a], o[s]);
        e[u++] = c <= 0 ? i[a++] : o[s++];
      }
      for (; a < i.length; ) e[u++] = i[a++];
      for (; s < o.length; ) e[u++] = o[s++];
      return e;
    }
    (e.create = function (e, t, n, r) {
      return new ct(e, t, n, r);
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
            u = e.offsetAt(s.range.start),
            c = e.offsetAt(s.range.end);
          if (!(c <= o)) throw new Error('Overlapping edit');
          (r = r.substring(0, u) + s.newText + r.substring(c, r.length)),
            (o = u);
        }
        return r;
      });
  })(rt || (rt = {}));
var at,
  st,
  ut,
  ct = (function () {
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
  (ut = Object.prototype.toString),
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
    return '[object String]' === ut.call(e);
  }),
  (st.number = function (e) {
    return '[object Number]' === ut.call(e);
  }),
  (st.numberRange = function (e, t, n) {
    return '[object Number]' === ut.call(e) && t <= e && e <= n;
  }),
  (st.integer = function (e) {
    return (
      '[object Number]' === ut.call(e) && -2147483648 <= e && e <= 2147483647
    );
  }),
  (st.uinteger = function (e) {
    return '[object Number]' === ut.call(e) && 0 <= e && e <= 2147483647;
  }),
  (st.func = function (e) {
    return '[object Function]' === ut.call(e);
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
              e.insertTextFormat === be.Snippet &&
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
        if (e) return { range: pt(e.range), contents: bt(e.contents) };
      });
  }
};
function wt(e) {
  return 'string' == typeof e
    ? { value: e }
    : (t = e) && 'object' == typeof t && 'string' == typeof t.kind
    ? 'plaintext' === e.kind
      ? { value: e.value.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&') }
      : { value: e.value }
    : { value: '```' + e.language + '\n' + e.value + '\n```\n' };
  var t;
}
function bt(e) {
  if (e) return Array.isArray(e) ? e.map(wt) : [wt(e)];
}
var kt = class {
  constructor(e) {
    this._worker = e;
  }
  provideDocumentHighlights(e, t, n) {
    const r = e.uri;
    return this._worker(r)
      .then(e => e.findDocumentHighlights(r.toString(), ht(t)))
      .then(e => {
        if (e) return e.map(e => ({ range: pt(e.range), kind: yt(e.kind) }));
      });
  }
};
function yt(e) {
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
var Et = class {
  constructor(e) {
    this._worker = e;
  }
  provideDefinition(e, t, n) {
    const r = e.uri;
    return this._worker(r)
      .then(e => e.findDefinition(r.toString(), ht(t)))
      .then(e => {
        if (e) return [Ct(e)];
      });
  }
};
function Ct(e) {
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
          if (e) return e.map(Ct);
        });
    }
  },
  It = class {
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
var At = class {
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
var Lt = class {
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
function Ft(e) {
  const t = [],
    n = [],
    r = new ae(e);
  t.push(r);
  const i = (...e) => r.getLanguageServiceWorker(...e);
  return (
    (function () {
      const { languageId: t, modeConfiguration: r } = e;
      Nt(n),
        r.completionItems &&
          n.push(
            d.languages.registerCompletionItemProvider(
              t,
              new lt(i, ['/', '-', ':']),
            ),
          ),
        r.hovers && n.push(d.languages.registerHoverProvider(t, new _t(i))),
        r.documentHighlights &&
          n.push(d.languages.registerDocumentHighlightProvider(t, new kt(i))),
        r.definitions &&
          n.push(d.languages.registerDefinitionProvider(t, new Et(i))),
        r.references &&
          n.push(d.languages.registerReferenceProvider(t, new xt(i))),
        r.documentSymbols &&
          n.push(d.languages.registerDocumentSymbolProvider(t, new At(i))),
        r.rename && n.push(d.languages.registerRenameProvider(t, new It(i))),
        r.colors && n.push(d.languages.registerColorProvider(t, new Dt(i))),
        r.foldingRanges &&
          n.push(d.languages.registerFoldingRangeProvider(t, new Mt(i))),
        r.diagnostics && n.push(new dt(t, i, e.onDidChange)),
        r.selectionRanges &&
          n.push(d.languages.registerSelectionRangeProvider(t, new Lt(i))),
        r.documentFormattingEdits &&
          n.push(
            d.languages.registerDocumentFormattingEditProvider(t, new Tt(i)),
          ),
        r.documentRangeFormattingEdits &&
          n.push(
            d.languages.registerDocumentRangeFormattingEditProvider(
              t,
              new Rt(i),
            ),
          );
    })(),
    t.push(Ot(n)),
    Ot(t)
  );
}
function Ot(e) {
  return { dispose: () => Nt(e) };
}
function Nt(e) {
  for (; e.length; ) e.pop().dispose();
}
export {
  lt as CompletionAdapter,
  Et as DefinitionAdapter,
  dt as DiagnosticsAdapter,
  Dt as DocumentColorAdapter,
  Tt as DocumentFormattingEditProvider,
  kt as DocumentHighlightAdapter,
  jt as DocumentLinkAdapter,
  Rt as DocumentRangeFormattingEditProvider,
  At as DocumentSymbolAdapter,
  Mt as FoldingRangeAdapter,
  _t as HoverAdapter,
  xt as ReferenceAdapter,
  It as RenameAdapter,
  Lt as SelectionRangeAdapter,
  ae as WorkerManager,
  ht as fromPosition,
  ft as fromRange,
  Ft as setupMode,
  pt as toRange,
  vt as toTextEdit,
};

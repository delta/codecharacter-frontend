function t(t, e) {
  if (null == t) return {};
  var n,
    r,
    o = {},
    f = Object.keys(t);
  for (r = 0; r < f.length; r++) (n = f[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
  return o;
}
function e(t, n) {
  return (e = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (t, e) {
        return (t.__proto__ = e), t;
      })(t, n);
}
export { t as _, e as a };
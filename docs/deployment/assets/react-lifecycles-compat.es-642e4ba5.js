function t() {
  var t = this.constructor.getDerivedStateFromProps(this.props, this.state);
  null != t && this.setState(t);
}
function e(t) {
  this.setState(
    function (e) {
      var n = this.constructor.getDerivedStateFromProps(t, e);
      return null != n ? n : null;
    }.bind(this),
  );
}
function n(t, e) {
  try {
    var n = this.props,
      o = this.state;
    (this.props = t),
      (this.state = e),
      (this.__reactInternalSnapshotFlag = !0),
      (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, o));
  } finally {
    (this.props = n), (this.state = o);
  }
}
function o(o) {
  var p = o.prototype;
  if (!p || !p.isReactComponent)
    throw new Error('Can only polyfill class components');
  if (
    'function' != typeof o.getDerivedStateFromProps &&
    'function' != typeof p.getSnapshotBeforeUpdate
  )
    return o;
  var i = null,
    l = null,
    r = null;
  if (
    ('function' == typeof p.componentWillMount
      ? (i = 'componentWillMount')
      : 'function' == typeof p.UNSAFE_componentWillMount &&
        (i = 'UNSAFE_componentWillMount'),
    'function' == typeof p.componentWillReceiveProps
      ? (l = 'componentWillReceiveProps')
      : 'function' == typeof p.UNSAFE_componentWillReceiveProps &&
        (l = 'UNSAFE_componentWillReceiveProps'),
    'function' == typeof p.componentWillUpdate
      ? (r = 'componentWillUpdate')
      : 'function' == typeof p.UNSAFE_componentWillUpdate &&
        (r = 'UNSAFE_componentWillUpdate'),
    null !== i || null !== l || null !== r)
  ) {
    var s = o.displayName || o.name,
      a =
        'function' == typeof o.getDerivedStateFromProps
          ? 'getDerivedStateFromProps()'
          : 'getSnapshotBeforeUpdate()';
    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        s +
        ' uses ' +
        a +
        ' but also contains the following legacy lifecycles:' +
        (null !== i ? '\n  ' + i : '') +
        (null !== l ? '\n  ' + l : '') +
        (null !== r ? '\n  ' + r : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks',
    );
  }
  if (
    ('function' == typeof o.getDerivedStateFromProps &&
      ((p.componentWillMount = t), (p.componentWillReceiveProps = e)),
    'function' == typeof p.getSnapshotBeforeUpdate)
  ) {
    if ('function' != typeof p.componentDidUpdate)
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype',
      );
    p.componentWillUpdate = n;
    var c = p.componentDidUpdate;
    p.componentDidUpdate = function (t, e, n) {
      var o = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : n;
      c.call(this, t, e, o);
    };
  }
  return o;
}
(t.__suppressDeprecationWarning = !0),
  (e.__suppressDeprecationWarning = !0),
  (n.__suppressDeprecationWarning = !0);
export { o as p };

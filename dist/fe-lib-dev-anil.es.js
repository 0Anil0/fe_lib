import K from "react";
import { Table as ee } from "antd";
var S = { exports: {} }, m = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $;
function re() {
  if ($) return m;
  $ = 1;
  var l = Symbol.for("react.transitional.element"), E = Symbol.for("react.fragment");
  function c(i, o, s) {
    var f = null;
    if (s !== void 0 && (f = "" + s), o.key !== void 0 && (f = "" + o.key), "key" in o) {
      s = {};
      for (var d in o)
        d !== "key" && (s[d] = o[d]);
    } else s = o;
    return o = s.ref, {
      $$typeof: l,
      type: i,
      key: f,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return m.Fragment = E, m.jsx = c, m.jsxs = c, m;
}
var _ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function te() {
  return F || (F = 1, process.env.NODE_ENV !== "production" && function() {
    function l(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === H ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case p:
          return "Fragment";
        case U:
          return "Profiler";
        case W:
          return "StrictMode";
        case G:
          return "Suspense";
        case q:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case M:
            return "Portal";
          case V:
            return e.displayName || "Context";
          case J:
            return (e._context.displayName || "Context") + ".Consumer";
          case z:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case X:
            return r = e.displayName || null, r !== null ? r : l(e.type) || "Memo";
          case v:
            r = e._payload, e = e._init;
            try {
              return l(e(r));
            } catch {
            }
        }
      return null;
    }
    function E(e) {
      return "" + e;
    }
    function c(e) {
      try {
        E(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, a = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          a
        ), E(e);
      }
    }
    function i(e) {
      if (e === p) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === v)
        return "<...>";
      try {
        var r = l(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = T.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function f(e) {
      if (j.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function d(e, r) {
      function t() {
        h || (h = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function D() {
      var e = l(this.type);
      return N[e] || (N[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function L(e, r, t, a, R, y) {
      var n = t.ref;
      return e = {
        $$typeof: P,
        type: e,
        key: r,
        props: t,
        _owner: a
      }, (n !== void 0 ? n : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: D
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: R
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: y
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function g(e, r, t, a, R, y) {
      var n = r.children;
      if (n !== void 0)
        if (a)
          if (Z(n)) {
            for (a = 0; a < n.length; a++)
              w(n[a]);
            Object.freeze && Object.freeze(n);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(n);
      if (j.call(r, "key")) {
        n = l(e);
        var u = Object.keys(r).filter(function(Q) {
          return Q !== "key";
        });
        a = 0 < u.length ? "{key: someKey, " + u.join(": ..., ") + ": ...}" : "{key: someKey}", I[n + a] || (u = 0 < u.length ? "{" + u.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          a,
          n,
          u,
          n
        ), I[n + a] = !0);
      }
      if (n = null, t !== void 0 && (c(t), n = "" + t), f(r) && (c(r.key), n = "" + r.key), "key" in r) {
        t = {};
        for (var A in r)
          A !== "key" && (t[A] = r[A]);
      } else t = r;
      return n && d(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), L(
        e,
        n,
        t,
        o(),
        R,
        y
      );
    }
    function w(e) {
      x(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === v && (e._payload.status === "fulfilled" ? x(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function x(e) {
      return typeof e == "object" && e !== null && e.$$typeof === P;
    }
    var b = K, P = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), J = Symbol.for("react.consumer"), V = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), q = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), H = Symbol.for("react.client.reference"), T = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, Z = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var h, N = {}, C = b.react_stack_bottom_frame.bind(
      b,
      s
    )(), Y = k(i(s)), I = {};
    _.Fragment = p, _.jsx = function(e, r, t) {
      var a = 1e4 > T.recentlyCreatedOwnerStacks++;
      return g(
        e,
        r,
        t,
        !1,
        a ? Error("react-stack-top-frame") : C,
        a ? k(i(e)) : Y
      );
    }, _.jsxs = function(e, r, t) {
      var a = 1e4 > T.recentlyCreatedOwnerStacks++;
      return g(
        e,
        r,
        t,
        !0,
        a ? Error("react-stack-top-frame") : C,
        a ? k(i(e)) : Y
      );
    };
  }()), _;
}
process.env.NODE_ENV === "production" ? S.exports = re() : S.exports = te();
var O = S.exports;
const ae = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Age", dataIndex: "age", key: "age" },
  { title: "Address", dataIndex: "address", key: "address" }
], se = () => {
  const l = [
    { key: "1", name: "John Brown", age: 32, address: "New York" },
    { key: "2", name: "Jim Green", age: 42, address: "London" },
    { key: "3", name: "Joe Black", age: 22, address: "Sydney" }
  ];
  return /* @__PURE__ */ O.jsxs("div", { style: { padding: 24 }, children: [
    /* @__PURE__ */ O.jsx("h3", { children: "Static Ant Table (Library Component)" }),
    /* @__PURE__ */ O.jsx(ee, { columns: ae, dataSource: l, bordered: !0, pagination: !1 })
  ] });
};
export {
  se as default
};

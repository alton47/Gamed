function o5(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const a of i.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && r(a)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
})();
var Bs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function i5(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var za = {},
    a5 = {
        get exports() {
            return za
        },
        set exports(e) {
            za = e
        }
    },
    Iu = {},
    b = {},
    s5 = {
        get exports() {
            return b
        },
        set exports(e) {
            b = e
        }
    },
    J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ms = Symbol.for("react.element"),
    l5 = Symbol.for("react.portal"),
    u5 = Symbol.for("react.fragment"),
    c5 = Symbol.for("react.strict_mode"),
    d5 = Symbol.for("react.profiler"),
    f5 = Symbol.for("react.provider"),
    p5 = Symbol.for("react.context"),
    m5 = Symbol.for("react.forward_ref"),
    h5 = Symbol.for("react.suspense"),
    g5 = Symbol.for("react.memo"),
    y5 = Symbol.for("react.lazy"),
    vg = Symbol.iterator;

function v5(e) {
    return e === null || typeof e != "object" ? null : (e = vg && e[vg] || e["@@iterator"], typeof e == "function" ? e : null)
}
var h1 = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    g1 = Object.assign,
    y1 = {};

function Ai(e, t, n) {
    this.props = e, this.context = t, this.refs = y1, this.updater = n || h1
}
Ai.prototype.isReactComponent = {};
Ai.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Ai.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function v1() {}
v1.prototype = Ai.prototype;

function Wp(e, t, n) {
    this.props = e, this.context = t, this.refs = y1, this.updater = n || h1
}
var Up = Wp.prototype = new v1;
Up.constructor = Wp;
g1(Up, Ai.prototype);
Up.isPureReactComponent = !0;
var bg = Array.isArray,
    b1 = Object.prototype.hasOwnProperty,
    Gp = {
        current: null
    },
    S1 = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function w1(e, t, n) {
    var r, o = {},
        i = null,
        a = null;
    if (t != null)
        for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t) b1.call(t, r) && !S1.hasOwnProperty(r) && (o[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1) o.children = n;
    else if (1 < s) {
        for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
        o.children = l
    }
    if (e && e.defaultProps)
        for (r in s = e.defaultProps, s) o[r] === void 0 && (o[r] = s[r]);
    return {
        $$typeof: ms,
        type: e,
        key: i,
        ref: a,
        props: o,
        _owner: Gp.current
    }
}

function b5(e, t) {
    return {
        $$typeof: ms,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Kp(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ms
}

function S5(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Sg = /\/+/g;

function Xc(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? S5("" + e.key) : t.toString(36)
}

function yl(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var a = !1;
    if (e === null) a = !0;
    else switch (i) {
        case "string":
        case "number":
            a = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case ms:
                case l5:
                    a = !0
            }
    }
    if (a) return a = e, o = o(a), e = r === "" ? "." + Xc(a, 0) : r, bg(o) ? (n = "", e != null && (n = e.replace(Sg, "$&/") + "/"), yl(o, t, n, "", function(u) {
        return u
    })) : o != null && (Kp(o) && (o = b5(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(Sg, "$&/") + "/") + e)), t.push(o)), 1;
    if (a = 0, r = r === "" ? "." : r + ":", bg(e))
        for (var s = 0; s < e.length; s++) {
            i = e[s];
            var l = r + Xc(i, s);
            a += yl(i, t, n, l, o)
        } else if (l = v5(e), typeof l == "function")
            for (e = l.call(e), s = 0; !(i = e.next()).done;) i = i.value, l = r + Xc(i, s++), a += yl(i, t, n, l, o);
        else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return a
}

function js(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return yl(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }), r
}

function w5(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var pt = {
        current: null
    },
    vl = {
        transition: null
    },
    x5 = {
        ReactCurrentDispatcher: pt,
        ReactCurrentBatchConfig: vl,
        ReactCurrentOwner: Gp
    };
J.Children = {
    map: js,
    forEach: function(e, t, n) {
        js(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return js(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return js(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Kp(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
J.Component = Ai;
J.Fragment = u5;
J.Profiler = d5;
J.PureComponent = Wp;
J.StrictMode = c5;
J.Suspense = h5;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = x5;
J.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = g1({}, e.props),
        o = e.key,
        i = e.ref,
        a = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref, a = Gp.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
        for (l in t) b1.call(t, l) && !S1.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        s = Array(l);
        for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
        r.children = s
    }
    return {
        $$typeof: ms,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: a
    }
};
J.createContext = function(e) {
    return e = {
        $$typeof: p5,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: f5,
        _context: e
    }, e.Consumer = e
};
J.createElement = w1;
J.createFactory = function(e) {
    var t = w1.bind(null, e);
    return t.type = e, t
};
J.createRef = function() {
    return {
        current: null
    }
};
J.forwardRef = function(e) {
    return {
        $$typeof: m5,
        render: e
    }
};
J.isValidElement = Kp;
J.lazy = function(e) {
    return {
        $$typeof: y5,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: w5
    }
};
J.memo = function(e, t) {
    return {
        $$typeof: g5,
        type: e,
        compare: t === void 0 ? null : t
    }
};
J.startTransition = function(e) {
    var t = vl.transition;
    vl.transition = {};
    try {
        e()
    } finally {
        vl.transition = t
    }
};
J.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
};
J.useCallback = function(e, t) {
    return pt.current.useCallback(e, t)
};
J.useContext = function(e) {
    return pt.current.useContext(e)
};
J.useDebugValue = function() {};
J.useDeferredValue = function(e) {
    return pt.current.useDeferredValue(e)
};
J.useEffect = function(e, t) {
    return pt.current.useEffect(e, t)
};
J.useId = function() {
    return pt.current.useId()
};
J.useImperativeHandle = function(e, t, n) {
    return pt.current.useImperativeHandle(e, t, n)
};
J.useInsertionEffect = function(e, t) {
    return pt.current.useInsertionEffect(e, t)
};
J.useLayoutEffect = function(e, t) {
    return pt.current.useLayoutEffect(e, t)
};
J.useMemo = function(e, t) {
    return pt.current.useMemo(e, t)
};
J.useReducer = function(e, t, n) {
    return pt.current.useReducer(e, t, n)
};
J.useRef = function(e) {
    return pt.current.useRef(e)
};
J.useState = function(e) {
    return pt.current.useState(e)
};
J.useSyncExternalStore = function(e, t, n) {
    return pt.current.useSyncExternalStore(e, t, n)
};
J.useTransition = function() {
    return pt.current.useTransition()
};
J.version = "18.2.0";
(function(e) {
    e.exports = J
})(s5);
const Rt = i5(b),
    wg = o5({
        __proto__: null,
        default: Rt
    }, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var k5 = b,
    C5 = Symbol.for("react.element"),
    _5 = Symbol.for("react.fragment"),
    E5 = Object.prototype.hasOwnProperty,
    T5 = k5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    P5 = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function x1(e, t, n) {
    var r, o = {},
        i = null,
        a = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
    for (r in t) E5.call(t, r) && !P5.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: C5,
        type: e,
        key: i,
        ref: a,
        props: o,
        _owner: T5.current
    }
}
Iu.Fragment = _5;
Iu.jsx = x1;
Iu.jsxs = x1;
(function(e) {
    e.exports = Iu
})(a5);
const k1 = za.Fragment,
    _ = za.jsx,
    fe = za.jsxs;
var rf = {},
    $a = {},
    A5 = {
        get exports() {
            return $a
        },
        set exports(e) {
            $a = e
        }
    },
    It = {},
    of = {},
    R5 = {
        get exports() {
            return of
        },
        set exports(e) { of = e
        }
    },
    C1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(z, N) {
        var H = z.length;
        z.push(N);
        e: for (; 0 < H;) {
            var le = H - 1 >>> 1,
                oe = z[le];
            if (0 < o(oe, N)) z[le] = N, z[H] = oe, H = le;
            else break e
        }
    }

    function n(z) {
        return z.length === 0 ? null : z[0]
    }

    function r(z) {
        if (z.length === 0) return null;
        var N = z[0],
            H = z.pop();
        if (H !== N) {
            z[0] = H;
            e: for (var le = 0, oe = z.length, j = oe >>> 1; le < j;) {
                var q = 2 * (le + 1) - 1,
                    ze = z[q],
                    _e = q + 1,
                    et = z[_e];
                if (0 > o(ze, H)) _e < oe && 0 > o(et, ze) ? (z[le] = et, z[_e] = H, le = _e) : (z[le] = ze, z[q] = H, le = q);
                else if (_e < oe && 0 > o(et, H)) z[le] = et, z[_e] = H, le = _e;
                else break e
            }
        }
        return N
    }

    function o(z, N) {
        var H = z.sortIndex - N.sortIndex;
        return H !== 0 ? H : z.id - N.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var a = Date,
            s = a.now();
        e.unstable_now = function() {
            return a.now() - s
        }
    }
    var l = [],
        u = [],
        c = 1,
        d = null,
        f = 3,
        p = !1,
        m = !1,
        y = !1,
        x = typeof setTimeout == "function" ? setTimeout : null,
        g = typeof clearTimeout == "function" ? clearTimeout : null,
        h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function v(z) {
        for (var N = n(u); N !== null;) {
            if (N.callback === null) r(u);
            else if (N.startTime <= z) r(u), N.sortIndex = N.expirationTime, t(l, N);
            else break;
            N = n(u)
        }
    }

    function w(z) {
        if (y = !1, v(z), !m)
            if (n(l) !== null) m = !0, W(E);
            else {
                var N = n(u);
                N !== null && $(w, N.startTime - z)
            }
    }

    function E(z, N) {
        m = !1, y && (y = !1, g(R), R = -1), p = !0;
        var H = f;
        try {
            for (v(N), d = n(l); d !== null && (!(d.expirationTime > N) || z && !B());) {
                var le = d.callback;
                if (typeof le == "function") {
                    d.callback = null, f = d.priorityLevel;
                    var oe = le(d.expirationTime <= N);
                    N = e.unstable_now(), typeof oe == "function" ? d.callback = oe : d === n(l) && r(l), v(N)
                } else r(l);
                d = n(l)
            }
            if (d !== null) var j = !0;
            else {
                var q = n(u);
                q !== null && $(w, q.startTime - N), j = !1
            }
            return j
        } finally {
            d = null, f = H, p = !1
        }
    }
    var P = !1,
        T = null,
        R = -1,
        I = 5,
        M = -1;

    function B() {
        return !(e.unstable_now() - M < I)
    }

    function Y() {
        if (T !== null) {
            var z = e.unstable_now();
            M = z;
            var N = !0;
            try {
                N = T(!0, z)
            } finally {
                N ? K() : (P = !1, T = null)
            }
        } else P = !1
    }
    var K;
    if (typeof h == "function") K = function() {
        h(Y)
    };
    else if (typeof MessageChannel < "u") {
        var ee = new MessageChannel,
            Q = ee.port2;
        ee.port1.onmessage = Y, K = function() {
            Q.postMessage(null)
        }
    } else K = function() {
        x(Y, 0)
    };

    function W(z) {
        T = z, P || (P = !0, K())
    }

    function $(z, N) {
        R = x(function() {
            z(e.unstable_now())
        }, N)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(z) {
        z.callback = null
    }, e.unstable_continueExecution = function() {
        m || p || (m = !0, W(E))
    }, e.unstable_forceFrameRate = function(z) {
        0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < z ? Math.floor(1e3 / z) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return f
    }, e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }, e.unstable_next = function(z) {
        switch (f) {
            case 1:
            case 2:
            case 3:
                var N = 3;
                break;
            default:
                N = f
        }
        var H = f;
        f = N;
        try {
            return z()
        } finally {
            f = H
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(z, N) {
        switch (z) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                z = 3
        }
        var H = f;
        f = z;
        try {
            return N()
        } finally {
            f = H
        }
    }, e.unstable_scheduleCallback = function(z, N, H) {
        var le = e.unstable_now();
        switch (typeof H == "object" && H !== null ? (H = H.delay, H = typeof H == "number" && 0 < H ? le + H : le) : H = le, z) {
            case 1:
                var oe = -1;
                break;
            case 2:
                oe = 250;
                break;
            case 5:
                oe = 1073741823;
                break;
            case 4:
                oe = 1e4;
                break;
            default:
                oe = 5e3
        }
        return oe = H + oe, z = {
            id: c++,
            callback: N,
            priorityLevel: z,
            startTime: H,
            expirationTime: oe,
            sortIndex: -1
        }, H > le ? (z.sortIndex = H, t(u, z), n(l) === null && z === n(u) && (y ? (g(R), R = -1) : y = !0, $(w, H - le))) : (z.sortIndex = oe, t(l, z), m || p || (m = !0, W(E))), z
    }, e.unstable_shouldYield = B, e.unstable_wrapCallback = function(z) {
        var N = f;
        return function() {
            var H = f;
            f = N;
            try {
                return z.apply(this, arguments)
            } finally {
                f = H
            }
        }
    }
})(C1);
(function(e) {
    e.exports = C1
})(R5);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _1 = b,
    $t = of ;

function L(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var E1 = new Set,
    La = {};

function Co(e, t) {
    fi(e, t), fi(e + "Capture", t)
}

function fi(e, t) {
    for (La[e] = t, e = 0; e < t.length; e++) E1.add(t[e])
}
var Zn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    af = Object.prototype.hasOwnProperty,
    M5 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    xg = {},
    kg = {};

function O5(e) {
    return af.call(kg, e) ? !0 : af.call(xg, e) ? !1 : M5.test(e) ? kg[e] = !0 : (xg[e] = !0, !1)
}

function z5(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function $5(e, t, n, r) {
    if (t === null || typeof t > "u" || z5(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function mt(e, t, n, r, o, i, a) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a
}
var Je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Je[e] = new mt(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    Je[t] = new mt(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Je[e] = new mt(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Je[e] = new mt(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Je[e] = new mt(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Je[e] = new mt(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    Je[e] = new mt(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Je[e] = new mt(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    Je[e] = new mt(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var qp = /[\-:]([a-z])/g;

function Xp(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(qp, Xp);
    Je[t] = new mt(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(qp, Xp);
    Je[t] = new mt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(qp, Xp);
    Je[t] = new mt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Je[e] = new mt(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Je.xlinkHref = new mt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Je[e] = new mt(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Yp(e, t, n, r) {
    var o = Je.hasOwnProperty(t) ? Je[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && ($5(t, n, o, r) && (n = null), r || o === null ? O5(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var or = _1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Vs = Symbol.for("react.element"),
    No = Symbol.for("react.portal"),
    Bo = Symbol.for("react.fragment"),
    Qp = Symbol.for("react.strict_mode"),
    sf = Symbol.for("react.profiler"),
    T1 = Symbol.for("react.provider"),
    P1 = Symbol.for("react.context"),
    Zp = Symbol.for("react.forward_ref"),
    lf = Symbol.for("react.suspense"),
    uf = Symbol.for("react.suspense_list"),
    Jp = Symbol.for("react.memo"),
    hr = Symbol.for("react.lazy"),
    A1 = Symbol.for("react.offscreen"),
    Cg = Symbol.iterator;

function Bi(e) {
    return e === null || typeof e != "object" ? null : (e = Cg && e[Cg] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Oe = Object.assign,
    Yc;

function ta(e) {
    if (Yc === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Yc = t && t[1] || ""
    }
    return `
` + Yc + e
}
var Qc = !1;

function Zc(e, t) {
    if (!e || Qc) return "";
    Qc = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), a = o.length - 1, s = i.length - 1; 1 <= a && 0 <= s && o[a] !== i[s];) s--;
            for (; 1 <= a && 0 <= s; a--, s--)
                if (o[a] !== i[s]) {
                    if (a !== 1 || s !== 1)
                        do
                            if (a--, s--, 0 > s || o[a] !== i[s]) {
                                var l = `
` + o[a].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                            }
                    while (1 <= a && 0 <= s);
                    break
                }
        }
    } finally {
        Qc = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? ta(e) : ""
}

function L5(e) {
    switch (e.tag) {
        case 5:
            return ta(e.type);
        case 16:
            return ta("Lazy");
        case 13:
            return ta("Suspense");
        case 19:
            return ta("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Zc(e.type, !1), e;
        case 11:
            return e = Zc(e.type.render, !1), e;
        case 1:
            return e = Zc(e.type, !0), e;
        default:
            return ""
    }
}

function cf(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Bo:
            return "Fragment";
        case No:
            return "Portal";
        case sf:
            return "Profiler";
        case Qp:
            return "StrictMode";
        case lf:
            return "Suspense";
        case uf:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case P1:
            return (e.displayName || "Context") + ".Consumer";
        case T1:
            return (e._context.displayName || "Context") + ".Provider";
        case Zp:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Jp:
            return t = e.displayName || null, t !== null ? t : cf(e.type) || "Memo";
        case hr:
            t = e._payload, e = e._init;
            try {
                return cf(e(t))
            } catch {}
    }
    return null
}

function I5(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return cf(t);
        case 8:
            return t === Qp ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function $r(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function R1(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function D5(e) {
    var t = R1(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get,
            i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(a) {
                r = "" + a, i.call(this, a)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(a) {
                r = "" + a
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Hs(e) {
    e._valueTracker || (e._valueTracker = D5(e))
}

function M1(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = R1(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Gl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function df(e, t) {
    var n = t.checked;
    return Oe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function _g(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = $r(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function O1(e, t) {
    t = t.checked, t != null && Yp(e, "checked", t, !1)
}

function ff(e, t) {
    O1(e, t);
    var n = $r(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? pf(e, t.type, n) : t.hasOwnProperty("defaultValue") && pf(e, t.type, $r(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Eg(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function pf(e, t, n) {
    (t !== "number" || Gl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var na = Array.isArray;

function ei(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + $r(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0, r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}

function mf(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
    return Oe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Tg(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(L(92));
            if (na(n)) {
                if (1 < n.length) throw Error(L(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: $r(n)
    }
}

function z1(e, t) {
    var n = $r(t.value),
        r = $r(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Pg(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function $1(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function hf(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? $1(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Ws, L1 = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (Ws = Ws || document.createElement("div"), Ws.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ws.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Ia(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var ca = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    F5 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ca).forEach(function(e) {
    F5.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), ca[t] = ca[e]
    })
});

function I1(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ca.hasOwnProperty(e) && ca[e] ? ("" + t).trim() : t + "px"
}

function D1(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = I1(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
        }
}
var N5 = Oe({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function gf(e, t) {
    if (t) {
        if (N5[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(L(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(L(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(L(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(L(62))
    }
}

function yf(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var vf = null;

function em(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var bf = null,
    ti = null,
    ni = null;

function Ag(e) {
    if (e = ys(e)) {
        if (typeof bf != "function") throw Error(L(280));
        var t = e.stateNode;
        t && (t = ju(t), bf(e.stateNode, e.type, t))
    }
}

function F1(e) {
    ti ? ni ? ni.push(e) : ni = [e] : ti = e
}

function N1() {
    if (ti) {
        var e = ti,
            t = ni;
        if (ni = ti = null, Ag(e), t)
            for (e = 0; e < t.length; e++) Ag(t[e])
    }
}

function B1(e, t) {
    return e(t)
}

function j1() {}
var Jc = !1;

function V1(e, t, n) {
    if (Jc) return e(t, n);
    Jc = !0;
    try {
        return B1(e, t, n)
    } finally {
        Jc = !1, (ti !== null || ni !== null) && (j1(), N1())
    }
}

function Da(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ju(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(L(231, t, typeof n));
    return n
}
var Sf = !1;
if (Zn) try {
    var ji = {};
    Object.defineProperty(ji, "passive", {
        get: function() {
            Sf = !0
        }
    }), window.addEventListener("test", ji, ji), window.removeEventListener("test", ji, ji)
} catch {
    Sf = !1
}

function B5(e, t, n, r, o, i, a, s, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var da = !1,
    Kl = null,
    ql = !1,
    wf = null,
    j5 = {
        onError: function(e) {
            da = !0, Kl = e
        }
    };

function V5(e, t, n, r, o, i, a, s, l) {
    da = !1, Kl = null, B5.apply(j5, arguments)
}

function H5(e, t, n, r, o, i, a, s, l) {
    if (V5.apply(this, arguments), da) {
        if (da) {
            var u = Kl;
            da = !1, Kl = null
        } else throw Error(L(198));
        ql || (ql = !0, wf = u)
    }
}

function _o(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function H1(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Rg(e) {
    if (_o(e) !== e) throw Error(L(188))
}

function W5(e) {
    var t = e.alternate;
    if (!t) {
        if (t = _o(e), t === null) throw Error(L(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var o = n.return;
        if (o === null) break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i;) {
                if (i === n) return Rg(o), e;
                if (i === r) return Rg(o), t;
                i = i.sibling
            }
            throw Error(L(188))
        }
        if (n.return !== r.return) n = o, r = i;
        else {
            for (var a = !1, s = o.child; s;) {
                if (s === n) {
                    a = !0, n = o, r = i;
                    break
                }
                if (s === r) {
                    a = !0, r = o, n = i;
                    break
                }
                s = s.sibling
            }
            if (!a) {
                for (s = i.child; s;) {
                    if (s === n) {
                        a = !0, n = i, r = o;
                        break
                    }
                    if (s === r) {
                        a = !0, r = i, n = o;
                        break
                    }
                    s = s.sibling
                }
                if (!a) throw Error(L(189))
            }
        }
        if (n.alternate !== r) throw Error(L(190))
    }
    if (n.tag !== 3) throw Error(L(188));
    return n.stateNode.current === n ? e : t
}

function W1(e) {
    return e = W5(e), e !== null ? U1(e) : null
}

function U1(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = U1(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var G1 = $t.unstable_scheduleCallback,
    Mg = $t.unstable_cancelCallback,
    U5 = $t.unstable_shouldYield,
    G5 = $t.unstable_requestPaint,
    Ie = $t.unstable_now,
    K5 = $t.unstable_getCurrentPriorityLevel,
    tm = $t.unstable_ImmediatePriority,
    K1 = $t.unstable_UserBlockingPriority,
    Xl = $t.unstable_NormalPriority,
    q5 = $t.unstable_LowPriority,
    q1 = $t.unstable_IdlePriority,
    Du = null,
    Pn = null;

function X5(e) {
    if (Pn && typeof Pn.onCommitFiberRoot == "function") try {
        Pn.onCommitFiberRoot(Du, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var mn = Math.clz32 ? Math.clz32 : Z5,
    Y5 = Math.log,
    Q5 = Math.LN2;

function Z5(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Y5(e) / Q5 | 0) | 0
}
var Us = 64,
    Gs = 4194304;

function ra(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function Yl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        o = e.suspendedLanes,
        i = e.pingedLanes,
        a = n & 268435455;
    if (a !== 0) {
        var s = a & ~o;
        s !== 0 ? r = ra(s) : (i &= a, i !== 0 && (r = ra(i)))
    } else a = n & ~o, a !== 0 ? r = ra(a) : i !== 0 && (r = ra(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - mn(t), o = 1 << n, r |= e[n], t &= ~o;
    return r
}

function J5(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function eC(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var a = 31 - mn(i),
            s = 1 << a,
            l = o[a];
        l === -1 ? (!(s & n) || s & r) && (o[a] = J5(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s
    }
}

function xf(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function X1() {
    var e = Us;
    return Us <<= 1, !(Us & 4194240) && (Us = 64), e
}

function ed(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function hs(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - mn(t), e[t] = n
}

function tC(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var o = 31 - mn(n),
            i = 1 << o;
        t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i
    }
}

function nm(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - mn(n),
            o = 1 << r;
        o & t | e[r] & t && (e[r] |= t), n &= ~o
    }
}
var he = 0;

function Y1(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Q1, rm, Z1, J1, eb, kf = !1,
    Ks = [],
    kr = null,
    Cr = null,
    _r = null,
    Fa = new Map,
    Na = new Map,
    vr = [],
    nC = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Og(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            kr = null;
            break;
        case "dragenter":
        case "dragleave":
            Cr = null;
            break;
        case "mouseover":
        case "mouseout":
            _r = null;
            break;
        case "pointerover":
        case "pointerout":
            Fa.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Na.delete(t.pointerId)
    }
}

function Vi(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    }, t !== null && (t = ys(t), t !== null && rm(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
}

function rC(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return kr = Vi(kr, e, t, n, r, o), !0;
        case "dragenter":
            return Cr = Vi(Cr, e, t, n, r, o), !0;
        case "mouseover":
            return _r = Vi(_r, e, t, n, r, o), !0;
        case "pointerover":
            var i = o.pointerId;
            return Fa.set(i, Vi(Fa.get(i) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return i = o.pointerId, Na.set(i, Vi(Na.get(i) || null, e, t, n, r, o)), !0
    }
    return !1
}

function tb(e) {
    var t = io(e.target);
    if (t !== null) {
        var n = _o(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = H1(n), t !== null) {
                    e.blockedOn = t, eb(e.priority, function() {
                        Z1(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function bl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Cf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            vf = r, n.target.dispatchEvent(r), vf = null
        } else return t = ys(n), t !== null && rm(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function zg(e, t, n) {
    bl(e) && n.delete(t)
}

function oC() {
    kf = !1, kr !== null && bl(kr) && (kr = null), Cr !== null && bl(Cr) && (Cr = null), _r !== null && bl(_r) && (_r = null), Fa.forEach(zg), Na.forEach(zg)
}

function Hi(e, t) {
    e.blockedOn === t && (e.blockedOn = null, kf || (kf = !0, $t.unstable_scheduleCallback($t.unstable_NormalPriority, oC)))
}

function Ba(e) {
    function t(o) {
        return Hi(o, e)
    }
    if (0 < Ks.length) {
        Hi(Ks[0], e);
        for (var n = 1; n < Ks.length; n++) {
            var r = Ks[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (kr !== null && Hi(kr, e), Cr !== null && Hi(Cr, e), _r !== null && Hi(_r, e), Fa.forEach(t), Na.forEach(t), n = 0; n < vr.length; n++) r = vr[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < vr.length && (n = vr[0], n.blockedOn === null);) tb(n), n.blockedOn === null && vr.shift()
}
var ri = or.ReactCurrentBatchConfig,
    Ql = !0;

function iC(e, t, n, r) {
    var o = he,
        i = ri.transition;
    ri.transition = null;
    try {
        he = 1, om(e, t, n, r)
    } finally {
        he = o, ri.transition = i
    }
}

function aC(e, t, n, r) {
    var o = he,
        i = ri.transition;
    ri.transition = null;
    try {
        he = 4, om(e, t, n, r)
    } finally {
        he = o, ri.transition = i
    }
}

function om(e, t, n, r) {
    if (Ql) {
        var o = Cf(e, t, n, r);
        if (o === null) cd(e, t, r, Zl, n), Og(e, r);
        else if (rC(o, e, t, n, r)) r.stopPropagation();
        else if (Og(e, r), t & 4 && -1 < nC.indexOf(e)) {
            for (; o !== null;) {
                var i = ys(o);
                if (i !== null && Q1(i), i = Cf(e, t, n, r), i === null && cd(e, t, r, Zl, n), i === o) break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else cd(e, t, r, null, n)
    }
}
var Zl = null;

function Cf(e, t, n, r) {
    if (Zl = null, e = em(r), e = io(e), e !== null)
        if (t = _o(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = H1(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Zl = e, null
}

function nb(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (K5()) {
                case tm:
                    return 1;
                case K1:
                    return 4;
                case Xl:
                case q5:
                    return 16;
                case q1:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var wr = null,
    im = null,
    Sl = null;

function rb() {
    if (Sl) return Sl;
    var e, t = im,
        n = t.length,
        r, o = "value" in wr ? wr.value : wr.textContent,
        i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
    return Sl = o.slice(e, 1 < r ? 1 - r : void 0)
}

function wl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function qs() {
    return !0
}

function $g() {
    return !1
}

function Dt(e) {
    function t(n, r, o, i, a) {
        this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = a, this.currentTarget = null;
        for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? qs : $g, this.isPropagationStopped = $g, this
    }
    return Oe(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = qs)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = qs)
        },
        persist: function() {},
        isPersistent: qs
    }), t
}
var Ri = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    am = Dt(Ri),
    gs = Oe({}, Ri, {
        view: 0,
        detail: 0
    }),
    sC = Dt(gs),
    td, nd, Wi, Fu = Oe({}, gs, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: sm,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== Wi && (Wi && e.type === "mousemove" ? (td = e.screenX - Wi.screenX, nd = e.screenY - Wi.screenY) : nd = td = 0, Wi = e), td)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : nd
        }
    }),
    Lg = Dt(Fu),
    lC = Oe({}, Fu, {
        dataTransfer: 0
    }),
    uC = Dt(lC),
    cC = Oe({}, gs, {
        relatedTarget: 0
    }),
    rd = Dt(cC),
    dC = Oe({}, Ri, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    fC = Dt(dC),
    pC = Oe({}, Ri, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    mC = Dt(pC),
    hC = Oe({}, Ri, {
        data: 0
    }),
    Ig = Dt(hC),
    gC = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    yC = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    vC = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function bC(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = vC[e]) ? !!t[e] : !1
}

function sm() {
    return bC
}
var SC = Oe({}, gs, {
        key: function(e) {
            if (e.key) {
                var t = gC[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = wl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? yC[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: sm,
        charCode: function(e) {
            return e.type === "keypress" ? wl(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? wl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    wC = Dt(SC),
    xC = Oe({}, Fu, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    Dg = Dt(xC),
    kC = Oe({}, gs, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: sm
    }),
    CC = Dt(kC),
    _C = Oe({}, Ri, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    EC = Dt(_C),
    TC = Oe({}, Fu, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    PC = Dt(TC),
    AC = [9, 13, 27, 32],
    lm = Zn && "CompositionEvent" in window,
    fa = null;
Zn && "documentMode" in document && (fa = document.documentMode);
var RC = Zn && "TextEvent" in window && !fa,
    ob = Zn && (!lm || fa && 8 < fa && 11 >= fa),
    Fg = String.fromCharCode(32),
    Ng = !1;

function ib(e, t) {
    switch (e) {
        case "keyup":
            return AC.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function ab(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var jo = !1;

function MC(e, t) {
    switch (e) {
        case "compositionend":
            return ab(t);
        case "keypress":
            return t.which !== 32 ? null : (Ng = !0, Fg);
        case "textInput":
            return e = t.data, e === Fg && Ng ? null : e;
        default:
            return null
    }
}

function OC(e, t) {
    if (jo) return e === "compositionend" || !lm && ib(e, t) ? (e = rb(), Sl = im = wr = null, jo = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return ob && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var zC = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Bg(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!zC[e.type] : t === "textarea"
}

function sb(e, t, n, r) {
    F1(r), t = Jl(t, "onChange"), 0 < t.length && (n = new am("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var pa = null,
    ja = null;

function $C(e) {
    vb(e, 0)
}

function Nu(e) {
    var t = Wo(e);
    if (M1(t)) return e
}

function LC(e, t) {
    if (e === "change") return t
}
var lb = !1;
if (Zn) {
    var od;
    if (Zn) {
        var id = "oninput" in document;
        if (!id) {
            var jg = document.createElement("div");
            jg.setAttribute("oninput", "return;"), id = typeof jg.oninput == "function"
        }
        od = id
    } else od = !1;
    lb = od && (!document.documentMode || 9 < document.documentMode)
}

function Vg() {
    pa && (pa.detachEvent("onpropertychange", ub), ja = pa = null)
}

function ub(e) {
    if (e.propertyName === "value" && Nu(ja)) {
        var t = [];
        sb(t, ja, e, em(e)), V1($C, t)
    }
}

function IC(e, t, n) {
    e === "focusin" ? (Vg(), pa = t, ja = n, pa.attachEvent("onpropertychange", ub)) : e === "focusout" && Vg()
}

function DC(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Nu(ja)
}

function FC(e, t) {
    if (e === "click") return Nu(t)
}

function NC(e, t) {
    if (e === "input" || e === "change") return Nu(t)
}

function BC(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var gn = typeof Object.is == "function" ? Object.is : BC;

function Va(e, t) {
    if (gn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!af.call(t, o) || !gn(e[o], t[o])) return !1
    }
    return !0
}

function Hg(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Wg(e, t) {
    var n = Hg(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Hg(n)
    }
}

function cb(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? cb(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function db() {
    for (var e = window, t = Gl(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Gl(e.document)
    }
    return t
}

function um(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function jC(e) {
    var t = db(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && cb(n.ownerDocument.documentElement, n)) {
        if (r !== null && um(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length,
                    i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Wg(n, i);
                var a = Wg(n, r);
                o && a && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var VC = Zn && "documentMode" in document && 11 >= document.documentMode,
    Vo = null,
    _f = null,
    ma = null,
    Ef = !1;

function Ug(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ef || Vo == null || Vo !== Gl(r) || (r = Vo, "selectionStart" in r && um(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), ma && Va(ma, r) || (ma = r, r = Jl(_f, "onSelect"), 0 < r.length && (t = new am("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Vo)))
}

function Xs(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Ho = {
        animationend: Xs("Animation", "AnimationEnd"),
        animationiteration: Xs("Animation", "AnimationIteration"),
        animationstart: Xs("Animation", "AnimationStart"),
        transitionend: Xs("Transition", "TransitionEnd")
    },
    ad = {},
    fb = {};
Zn && (fb = document.createElement("div").style, "AnimationEvent" in window || (delete Ho.animationend.animation, delete Ho.animationiteration.animation, delete Ho.animationstart.animation), "TransitionEvent" in window || delete Ho.transitionend.transition);

function Bu(e) {
    if (ad[e]) return ad[e];
    if (!Ho[e]) return e;
    var t = Ho[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in fb) return ad[e] = t[n];
    return e
}
var pb = Bu("animationend"),
    mb = Bu("animationiteration"),
    hb = Bu("animationstart"),
    gb = Bu("transitionend"),
    yb = new Map,
    Gg = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Nr(e, t) {
    yb.set(e, t), Co(t, [e])
}
for (var sd = 0; sd < Gg.length; sd++) {
    var ld = Gg[sd],
        HC = ld.toLowerCase(),
        WC = ld[0].toUpperCase() + ld.slice(1);
    Nr(HC, "on" + WC)
}
Nr(pb, "onAnimationEnd");
Nr(mb, "onAnimationIteration");
Nr(hb, "onAnimationStart");
Nr("dblclick", "onDoubleClick");
Nr("focusin", "onFocus");
Nr("focusout", "onBlur");
Nr(gb, "onTransitionEnd");
fi("onMouseEnter", ["mouseout", "mouseover"]);
fi("onMouseLeave", ["mouseout", "mouseover"]);
fi("onPointerEnter", ["pointerout", "pointerover"]);
fi("onPointerLeave", ["pointerout", "pointerover"]);
Co("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Co("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Co("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Co("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Co("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Co("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var oa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    UC = new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));

function Kg(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, H5(r, t, void 0, e), e.currentTarget = null
}

function vb(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                    var s = r[a],
                        l = s.instance,
                        u = s.currentTarget;
                    if (s = s.listener, l !== i && o.isPropagationStopped()) break e;
                    Kg(o, s, u), i = l
                } else
                    for (a = 0; a < r.length; a++) {
                        if (s = r[a], l = s.instance, u = s.currentTarget, s = s.listener, l !== i && o.isPropagationStopped()) break e;
                        Kg(o, s, u), i = l
                    }
        }
    }
    if (ql) throw e = wf, ql = !1, wf = null, e
}

function Se(e, t) {
    var n = t[Mf];
    n === void 0 && (n = t[Mf] = new Set);
    var r = e + "__bubble";
    n.has(r) || (bb(t, e, 2, !1), n.add(r))
}

function ud(e, t, n) {
    var r = 0;
    t && (r |= 4), bb(n, e, r, t)
}
var Ys = "_reactListening" + Math.random().toString(36).slice(2);

function Ha(e) {
    if (!e[Ys]) {
        e[Ys] = !0, E1.forEach(function(n) {
            n !== "selectionchange" && (UC.has(n) || ud(n, !1, e), ud(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ys] || (t[Ys] = !0, ud("selectionchange", !1, t))
    }
}

function bb(e, t, n, r) {
    switch (nb(t)) {
        case 1:
            var o = iC;
            break;
        case 4:
            o = aC;
            break;
        default:
            o = om
    }
    n = o.bind(null, t, n, e), o = void 0, !Sf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}

function cd(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var a = r.tag;
        if (a === 3 || a === 4) {
            var s = r.stateNode.containerInfo;
            if (s === o || s.nodeType === 8 && s.parentNode === o) break;
            if (a === 4)
                for (a = r.return; a !== null;) {
                    var l = a.tag;
                    if ((l === 3 || l === 4) && (l = a.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o)) return;
                    a = a.return
                }
            for (; s !== null;) {
                if (a = io(s), a === null) return;
                if (l = a.tag, l === 5 || l === 6) {
                    r = i = a;
                    continue e
                }
                s = s.parentNode
            }
        }
        r = r.return
    }
    V1(function() {
        var u = i,
            c = em(n),
            d = [];
        e: {
            var f = yb.get(e);
            if (f !== void 0) {
                var p = am,
                    m = e;
                switch (e) {
                    case "keypress":
                        if (wl(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        p = wC;
                        break;
                    case "focusin":
                        m = "focus", p = rd;
                        break;
                    case "focusout":
                        m = "blur", p = rd;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        p = rd;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        p = Lg;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        p = uC;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        p = CC;
                        break;
                    case pb:
                    case mb:
                    case hb:
                        p = fC;
                        break;
                    case gb:
                        p = EC;
                        break;
                    case "scroll":
                        p = sC;
                        break;
                    case "wheel":
                        p = PC;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        p = mC;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        p = Dg
                }
                var y = (t & 4) !== 0,
                    x = !y && e === "scroll",
                    g = y ? f !== null ? f + "Capture" : null : f;
                y = [];
                for (var h = u, v; h !== null;) {
                    v = h;
                    var w = v.stateNode;
                    if (v.tag === 5 && w !== null && (v = w, g !== null && (w = Da(h, g), w != null && y.push(Wa(h, w, v)))), x) break;
                    h = h.return
                }
                0 < y.length && (f = new p(f, m, null, n, c), d.push({
                    event: f,
                    listeners: y
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", f && n !== vf && (m = n.relatedTarget || n.fromElement) && (io(m) || m[Jn])) break e;
                if ((p || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, p ? (m = n.relatedTarget || n.toElement, p = u, m = m ? io(m) : null, m !== null && (x = _o(m), m !== x || m.tag !== 5 && m.tag !== 6) && (m = null)) : (p = null, m = u), p !== m)) {
                    if (y = Lg, w = "onMouseLeave", g = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (y = Dg, w = "onPointerLeave", g = "onPointerEnter", h = "pointer"), x = p == null ? f : Wo(p), v = m == null ? f : Wo(m), f = new y(w, h + "leave", p, n, c), f.target = x, f.relatedTarget = v, w = null, io(c) === u && (y = new y(g, h + "enter", m, n, c), y.target = v, y.relatedTarget = x, w = y), x = w, p && m) t: {
                        for (y = p, g = m, h = 0, v = y; v; v = $o(v)) h++;
                        for (v = 0, w = g; w; w = $o(w)) v++;
                        for (; 0 < h - v;) y = $o(y),
                        h--;
                        for (; 0 < v - h;) g = $o(g),
                        v--;
                        for (; h--;) {
                            if (y === g || g !== null && y === g.alternate) break t;
                            y = $o(y), g = $o(g)
                        }
                        y = null
                    }
                    else y = null;
                    p !== null && qg(d, f, p, y, !1), m !== null && x !== null && qg(d, x, m, y, !0)
                }
            }
            e: {
                if (f = u ? Wo(u) : window, p = f.nodeName && f.nodeName.toLowerCase(), p === "select" || p === "input" && f.type === "file") var E = LC;
                else if (Bg(f))
                    if (lb) E = NC;
                    else {
                        E = DC;
                        var P = IC
                    }
                else(p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (E = FC);
                if (E && (E = E(e, u))) {
                    sb(d, E, n, c);
                    break e
                }
                P && P(e, f, u),
                e === "focusout" && (P = f._wrapperState) && P.controlled && f.type === "number" && pf(f, "number", f.value)
            }
            switch (P = u ? Wo(u) : window, e) {
                case "focusin":
                    (Bg(P) || P.contentEditable === "true") && (Vo = P, _f = u, ma = null);
                    break;
                case "focusout":
                    ma = _f = Vo = null;
                    break;
                case "mousedown":
                    Ef = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Ef = !1, Ug(d, n, c);
                    break;
                case "selectionchange":
                    if (VC) break;
                case "keydown":
                case "keyup":
                    Ug(d, n, c)
            }
            var T;
            if (lm) e: {
                switch (e) {
                    case "compositionstart":
                        var R = "onCompositionStart";
                        break e;
                    case "compositionend":
                        R = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        R = "onCompositionUpdate";
                        break e
                }
                R = void 0
            }
            else jo ? ib(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");R && (ob && n.locale !== "ko" && (jo || R !== "onCompositionStart" ? R === "onCompositionEnd" && jo && (T = rb()) : (wr = c, im = "value" in wr ? wr.value : wr.textContent, jo = !0)), P = Jl(u, R), 0 < P.length && (R = new Ig(R, e, null, n, c), d.push({
                event: R,
                listeners: P
            }), T ? R.data = T : (T = ab(n), T !== null && (R.data = T)))),
            (T = RC ? MC(e, n) : OC(e, n)) && (u = Jl(u, "onBeforeInput"), 0 < u.length && (c = new Ig("onBeforeInput", "beforeinput", null, n, c), d.push({
                event: c,
                listeners: u
            }), c.data = T))
        }
        vb(d, t)
    })
}

function Wa(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function Jl(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var o = e,
            i = o.stateNode;
        o.tag === 5 && i !== null && (o = i, i = Da(e, n), i != null && r.unshift(Wa(e, i, o)), i = Da(e, t), i != null && r.push(Wa(e, i, o))), e = e.return
    }
    return r
}

function $o(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function qg(e, t, n, r, o) {
    for (var i = t._reactName, a = []; n !== null && n !== r;) {
        var s = n,
            l = s.alternate,
            u = s.stateNode;
        if (l !== null && l === r) break;
        s.tag === 5 && u !== null && (s = u, o ? (l = Da(n, i), l != null && a.unshift(Wa(n, l, s))) : o || (l = Da(n, i), l != null && a.push(Wa(n, l, s)))), n = n.return
    }
    a.length !== 0 && e.push({
        event: t,
        listeners: a
    })
}
var GC = /\r\n?/g,
    KC = /\u0000|\uFFFD/g;

function Xg(e) {
    return (typeof e == "string" ? e : "" + e).replace(GC, `
`).replace(KC, "")
}

function Qs(e, t, n) {
    if (t = Xg(t), Xg(e) !== t && n) throw Error(L(425))
}

function eu() {}
var Tf = null,
    Pf = null;

function Af(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Rf = typeof setTimeout == "function" ? setTimeout : void 0,
    qC = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Yg = typeof Promise == "function" ? Promise : void 0,
    XC = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yg < "u" ? function(e) {
        return Yg.resolve(null).then(e).catch(YC)
    } : Rf;

function YC(e) {
    setTimeout(function() {
        throw e
    })
}

function dd(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n), o && o.nodeType === 8)
            if (n = o.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(o), Ba(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    Ba(t)
}

function Er(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Qg(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Mi = Math.random().toString(36).slice(2),
    _n = "__reactFiber$" + Mi,
    Ua = "__reactProps$" + Mi,
    Jn = "__reactContainer$" + Mi,
    Mf = "__reactEvents$" + Mi,
    QC = "__reactListeners$" + Mi,
    ZC = "__reactHandles$" + Mi;

function io(e) {
    var t = e[_n];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Jn] || n[_n]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = Qg(e); e !== null;) {
                    if (n = e[_n]) return n;
                    e = Qg(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function ys(e) {
    return e = e[_n] || e[Jn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Wo(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(L(33))
}

function ju(e) {
    return e[Ua] || null
}
var Of = [],
    Uo = -1;

function Br(e) {
    return {
        current: e
    }
}

function ke(e) {
    0 > Uo || (e.current = Of[Uo], Of[Uo] = null, Uo--)
}

function be(e, t) {
    Uo++, Of[Uo] = e.current, e.current = t
}
var Lr = {},
    st = Br(Lr),
    bt = Br(!1),
    yo = Lr;

function pi(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Lr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        i;
    for (i in n) o[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function St(e) {
    return e = e.childContextTypes, e != null
}

function tu() {
    ke(bt), ke(st)
}

function Zg(e, t, n) {
    if (st.current !== Lr) throw Error(L(168));
    be(st, t), be(bt, n)
}

function Sb(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t)) throw Error(L(108, I5(e) || "Unknown", o));
    return Oe({}, n, r)
}

function nu(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Lr, yo = st.current, be(st, e), be(bt, bt.current), !0
}

function Jg(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(L(169));
    n ? (e = Sb(e, t, yo), r.__reactInternalMemoizedMergedChildContext = e, ke(bt), ke(st), be(st, e)) : ke(bt), be(bt, n)
}
var Nn = null,
    Vu = !1,
    fd = !1;

function wb(e) {
    Nn === null ? Nn = [e] : Nn.push(e)
}

function JC(e) {
    Vu = !0, wb(e)
}

function jr() {
    if (!fd && Nn !== null) {
        fd = !0;
        var e = 0,
            t = he;
        try {
            var n = Nn;
            for (he = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Nn = null, Vu = !1
        } catch (o) {
            throw Nn !== null && (Nn = Nn.slice(e + 1)), G1(tm, jr), o
        } finally {
            he = t, fd = !1
        }
    }
    return null
}
var Go = [],
    Ko = 0,
    ru = null,
    ou = 0,
    Gt = [],
    Kt = 0,
    vo = null,
    jn = 1,
    Vn = "";

function Jr(e, t) {
    Go[Ko++] = ou, Go[Ko++] = ru, ru = e, ou = t
}

function xb(e, t, n) {
    Gt[Kt++] = jn, Gt[Kt++] = Vn, Gt[Kt++] = vo, vo = e;
    var r = jn;
    e = Vn;
    var o = 32 - mn(r) - 1;
    r &= ~(1 << o), n += 1;
    var i = 32 - mn(t) + o;
    if (30 < i) {
        var a = o - o % 5;
        i = (r & (1 << a) - 1).toString(32), r >>= a, o -= a, jn = 1 << 32 - mn(t) + o | n << o | r, Vn = i + e
    } else jn = 1 << i | n << o | r, Vn = e
}

function cm(e) {
    e.return !== null && (Jr(e, 1), xb(e, 1, 0))
}

function dm(e) {
    for (; e === ru;) ru = Go[--Ko], Go[Ko] = null, ou = Go[--Ko], Go[Ko] = null;
    for (; e === vo;) vo = Gt[--Kt], Gt[Kt] = null, Vn = Gt[--Kt], Gt[Kt] = null, jn = Gt[--Kt], Gt[Kt] = null
}
var Mt = null,
    At = null,
    Pe = !1,
    fn = null;

function kb(e, t) {
    var n = qt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function e0(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Mt = e, At = Er(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Mt = e, At = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = vo !== null ? {
                id: jn,
                overflow: Vn
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = qt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Mt = e, At = null, !0) : !1;
        default:
            return !1
    }
}

function zf(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function $f(e) {
    if (Pe) {
        var t = At;
        if (t) {
            var n = t;
            if (!e0(e, t)) {
                if (zf(e)) throw Error(L(418));
                t = Er(n.nextSibling);
                var r = Mt;
                t && e0(e, t) ? kb(r, n) : (e.flags = e.flags & -4097 | 2, Pe = !1, Mt = e)
            }
        } else {
            if (zf(e)) throw Error(L(418));
            e.flags = e.flags & -4097 | 2, Pe = !1, Mt = e
        }
    }
}

function t0(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Mt = e
}

function Zs(e) {
    if (e !== Mt) return !1;
    if (!Pe) return t0(e), Pe = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Af(e.type, e.memoizedProps)), t && (t = At)) {
        if (zf(e)) throw Cb(), Error(L(418));
        for (; t;) kb(e, t), t = Er(t.nextSibling)
    }
    if (t0(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(L(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            At = Er(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            At = null
        }
    } else At = Mt ? Er(e.stateNode.nextSibling) : null;
    return !0
}

function Cb() {
    for (var e = At; e;) e = Er(e.nextSibling)
}

function mi() {
    At = Mt = null, Pe = !1
}

function fm(e) {
    fn === null ? fn = [e] : fn.push(e)
}
var e3 = or.ReactCurrentBatchConfig;

function cn(e, t) {
    if (e && e.defaultProps) {
        t = Oe({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var iu = Br(null),
    au = null,
    qo = null,
    pm = null;

function mm() {
    pm = qo = au = null
}

function hm(e) {
    var t = iu.current;
    ke(iu), e._currentValue = t
}

function Lf(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function oi(e, t) {
    au = e, pm = qo = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (vt = !0), e.firstContext = null)
}

function Jt(e) {
    var t = e._currentValue;
    if (pm !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, qo === null) {
            if (au === null) throw Error(L(308));
            qo = e, au.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else qo = qo.next = e;
    return t
}
var ao = null;

function gm(e) {
    ao === null ? ao = [e] : ao.push(e)
}

function _b(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, gm(t)) : (n.next = o.next, o.next = n), t.interleaved = n, er(e, r)
}

function er(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var gr = !1;

function ym(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function Eb(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Gn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function Tr(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, se & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, er(e, n)
    }
    return o = r.interleaved, o === null ? (t.next = t, gm(r)) : (t.next = o.next, o.next = t), r.interleaved = t, er(e, n)
}

function xl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, nm(e, n)
    }
}

function n0(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var o = null,
            i = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var a = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = a : i = i.next = a, n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function su(e, t, n, r) {
    var o = e.updateQueue;
    gr = !1;
    var i = o.firstBaseUpdate,
        a = o.lastBaseUpdate,
        s = o.shared.pending;
    if (s !== null) {
        o.shared.pending = null;
        var l = s,
            u = l.next;
        l.next = null, a === null ? i = u : a.next = u, a = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue, s = c.lastBaseUpdate, s !== a && (s === null ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = l))
    }
    if (i !== null) {
        var d = o.baseState;
        a = 0, c = u = l = null, s = i;
        do {
            var f = s.lane,
                p = s.eventTime;
            if ((r & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: p,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                });
                e: {
                    var m = e,
                        y = s;
                    switch (f = t, p = n, y.tag) {
                        case 1:
                            if (m = y.payload, typeof m == "function") {
                                d = m.call(p, d, f);
                                break e
                            }
                            d = m;
                            break e;
                        case 3:
                            m.flags = m.flags & -65537 | 128;
                        case 0:
                            if (m = y.payload, f = typeof m == "function" ? m.call(p, d, f) : m, f == null) break e;
                            d = Oe({}, d, f);
                            break e;
                        case 2:
                            gr = !0
                    }
                }
                s.callback !== null && s.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [s] : f.push(s))
            } else p = {
                eventTime: p,
                lane: f,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null
            }, c === null ? (u = c = p, l = d) : c = c.next = p, a |= f;
            if (s = s.next, s === null) {
                if (s = o.shared.pending, s === null) break;
                f = s, s = f.next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null
            }
        } while (1);
        if (c === null && (l = d), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
            o = t;
            do a |= o.lane, o = o.next; while (o !== t)
        } else i === null && (o.shared.lanes = 0);
        So |= a, e.lanes = a, e.memoizedState = d
    }
}

function r0(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(L(191, o));
                o.call(r)
            }
        }
}
var Tb = new _1.Component().refs;

function If(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : Oe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Hu = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? _o(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = dt(),
            o = Ar(e),
            i = Gn(r, o);
        i.payload = t, n != null && (i.callback = n), t = Tr(e, i, o), t !== null && (hn(t, e, o, r), xl(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = dt(),
            o = Ar(e),
            i = Gn(r, o);
        i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Tr(e, i, o), t !== null && (hn(t, e, o, r), xl(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = dt(),
            r = Ar(e),
            o = Gn(n, r);
        o.tag = 2, t != null && (o.callback = t), t = Tr(e, o, r), t !== null && (hn(t, e, r, n), xl(t, e, r))
    }
};

function o0(e, t, n, r, o, i, a) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, a) : t.prototype && t.prototype.isPureReactComponent ? !Va(n, r) || !Va(o, i) : !0
}

function Pb(e, t, n) {
    var r = !1,
        o = Lr,
        i = t.contextType;
    return typeof i == "object" && i !== null ? i = Jt(i) : (o = St(t) ? yo : st.current, r = t.contextTypes, i = (r = r != null) ? pi(e, o) : Lr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Hu, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function i0(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Hu.enqueueReplaceState(t, t.state, null)
}

function Df(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = Tb, ym(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = Jt(i) : (i = St(t) ? yo : st.current, o.context = pi(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (If(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Hu.enqueueReplaceState(o, o.state, null), su(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}

function Ui(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(L(309));
                var r = n.stateNode
            }
            if (!r) throw Error(L(147, e));
            var o = r,
                i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
                var s = o.refs;
                s === Tb && (s = o.refs = {}), a === null ? delete s[i] : s[i] = a
            }, t._stringRef = i, t)
        }
        if (typeof e != "string") throw Error(L(284));
        if (!n._owner) throw Error(L(290, e))
    }
    return e
}

function Js(e, t) {
    throw e = Object.prototype.toString.call(t), Error(L(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function a0(e) {
    var t = e._init;
    return t(e._payload)
}

function Ab(e) {
    function t(g, h) {
        if (e) {
            var v = g.deletions;
            v === null ? (g.deletions = [h], g.flags |= 16) : v.push(h)
        }
    }

    function n(g, h) {
        if (!e) return null;
        for (; h !== null;) t(g, h), h = h.sibling;
        return null
    }

    function r(g, h) {
        for (g = new Map; h !== null;) h.key !== null ? g.set(h.key, h) : g.set(h.index, h), h = h.sibling;
        return g
    }

    function o(g, h) {
        return g = Rr(g, h), g.index = 0, g.sibling = null, g
    }

    function i(g, h, v) {
        return g.index = v, e ? (v = g.alternate, v !== null ? (v = v.index, v < h ? (g.flags |= 2, h) : v) : (g.flags |= 2, h)) : (g.flags |= 1048576, h)
    }

    function a(g) {
        return e && g.alternate === null && (g.flags |= 2), g
    }

    function s(g, h, v, w) {
        return h === null || h.tag !== 6 ? (h = bd(v, g.mode, w), h.return = g, h) : (h = o(h, v), h.return = g, h)
    }

    function l(g, h, v, w) {
        var E = v.type;
        return E === Bo ? c(g, h, v.props.children, w, v.key) : h !== null && (h.elementType === E || typeof E == "object" && E !== null && E.$$typeof === hr && a0(E) === h.type) ? (w = o(h, v.props), w.ref = Ui(g, h, v), w.return = g, w) : (w = Pl(v.type, v.key, v.props, null, g.mode, w), w.ref = Ui(g, h, v), w.return = g, w)
    }

    function u(g, h, v, w) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== v.containerInfo || h.stateNode.implementation !== v.implementation ? (h = Sd(v, g.mode, w), h.return = g, h) : (h = o(h, v.children || []), h.return = g, h)
    }

    function c(g, h, v, w, E) {
        return h === null || h.tag !== 7 ? (h = fo(v, g.mode, w, E), h.return = g, h) : (h = o(h, v), h.return = g, h)
    }

    function d(g, h, v) {
        if (typeof h == "string" && h !== "" || typeof h == "number") return h = bd("" + h, g.mode, v), h.return = g, h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case Vs:
                    return v = Pl(h.type, h.key, h.props, null, g.mode, v), v.ref = Ui(g, null, h), v.return = g, v;
                case No:
                    return h = Sd(h, g.mode, v), h.return = g, h;
                case hr:
                    var w = h._init;
                    return d(g, w(h._payload), v)
            }
            if (na(h) || Bi(h)) return h = fo(h, g.mode, v, null), h.return = g, h;
            Js(g, h)
        }
        return null
    }

    function f(g, h, v, w) {
        var E = h !== null ? h.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number") return E !== null ? null : s(g, h, "" + v, w);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case Vs:
                    return v.key === E ? l(g, h, v, w) : null;
                case No:
                    return v.key === E ? u(g, h, v, w) : null;
                case hr:
                    return E = v._init, f(g, h, E(v._payload), w)
            }
            if (na(v) || Bi(v)) return E !== null ? null : c(g, h, v, w, null);
            Js(g, v)
        }
        return null
    }

    function p(g, h, v, w, E) {
        if (typeof w == "string" && w !== "" || typeof w == "number") return g = g.get(v) || null, s(h, g, "" + w, E);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
                case Vs:
                    return g = g.get(w.key === null ? v : w.key) || null, l(h, g, w, E);
                case No:
                    return g = g.get(w.key === null ? v : w.key) || null, u(h, g, w, E);
                case hr:
                    var P = w._init;
                    return p(g, h, v, P(w._payload), E)
            }
            if (na(w) || Bi(w)) return g = g.get(v) || null, c(h, g, w, E, null);
            Js(h, w)
        }
        return null
    }

    function m(g, h, v, w) {
        for (var E = null, P = null, T = h, R = h = 0, I = null; T !== null && R < v.length; R++) {
            T.index > R ? (I = T, T = null) : I = T.sibling;
            var M = f(g, T, v[R], w);
            if (M === null) {
                T === null && (T = I);
                break
            }
            e && T && M.alternate === null && t(g, T), h = i(M, h, R), P === null ? E = M : P.sibling = M, P = M, T = I
        }
        if (R === v.length) return n(g, T), Pe && Jr(g, R), E;
        if (T === null) {
            for (; R < v.length; R++) T = d(g, v[R], w), T !== null && (h = i(T, h, R), P === null ? E = T : P.sibling = T, P = T);
            return Pe && Jr(g, R), E
        }
        for (T = r(g, T); R < v.length; R++) I = p(T, g, R, v[R], w), I !== null && (e && I.alternate !== null && T.delete(I.key === null ? R : I.key), h = i(I, h, R), P === null ? E = I : P.sibling = I, P = I);
        return e && T.forEach(function(B) {
            return t(g, B)
        }), Pe && Jr(g, R), E
    }

    function y(g, h, v, w) {
        var E = Bi(v);
        if (typeof E != "function") throw Error(L(150));
        if (v = E.call(v), v == null) throw Error(L(151));
        for (var P = E = null, T = h, R = h = 0, I = null, M = v.next(); T !== null && !M.done; R++, M = v.next()) {
            T.index > R ? (I = T, T = null) : I = T.sibling;
            var B = f(g, T, M.value, w);
            if (B === null) {
                T === null && (T = I);
                break
            }
            e && T && B.alternate === null && t(g, T), h = i(B, h, R), P === null ? E = B : P.sibling = B, P = B, T = I
        }
        if (M.done) return n(g, T), Pe && Jr(g, R), E;
        if (T === null) {
            for (; !M.done; R++, M = v.next()) M = d(g, M.value, w), M !== null && (h = i(M, h, R), P === null ? E = M : P.sibling = M, P = M);
            return Pe && Jr(g, R), E
        }
        for (T = r(g, T); !M.done; R++, M = v.next()) M = p(T, g, R, M.value, w), M !== null && (e && M.alternate !== null && T.delete(M.key === null ? R : M.key), h = i(M, h, R), P === null ? E = M : P.sibling = M, P = M);
        return e && T.forEach(function(Y) {
            return t(g, Y)
        }), Pe && Jr(g, R), E
    }

    function x(g, h, v, w) {
        if (typeof v == "object" && v !== null && v.type === Bo && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case Vs:
                    e: {
                        for (var E = v.key, P = h; P !== null;) {
                            if (P.key === E) {
                                if (E = v.type, E === Bo) {
                                    if (P.tag === 7) {
                                        n(g, P.sibling), h = o(P, v.props.children), h.return = g, g = h;
                                        break e
                                    }
                                } else if (P.elementType === E || typeof E == "object" && E !== null && E.$$typeof === hr && a0(E) === P.type) {
                                    n(g, P.sibling), h = o(P, v.props), h.ref = Ui(g, P, v), h.return = g, g = h;
                                    break e
                                }
                                n(g, P);
                                break
                            } else t(g, P);
                            P = P.sibling
                        }
                        v.type === Bo ? (h = fo(v.props.children, g.mode, w, v.key), h.return = g, g = h) : (w = Pl(v.type, v.key, v.props, null, g.mode, w), w.ref = Ui(g, h, v), w.return = g, g = w)
                    }
                    return a(g);
                case No:
                    e: {
                        for (P = v.key; h !== null;) {
                            if (h.key === P)
                                if (h.tag === 4 && h.stateNode.containerInfo === v.containerInfo && h.stateNode.implementation === v.implementation) {
                                    n(g, h.sibling), h = o(h, v.children || []), h.return = g, g = h;
                                    break e
                                } else {
                                    n(g, h);
                                    break
                                }
                            else t(g, h);
                            h = h.sibling
                        }
                        h = Sd(v, g.mode, w),
                        h.return = g,
                        g = h
                    }
                    return a(g);
                case hr:
                    return P = v._init, x(g, h, P(v._payload), w)
            }
            if (na(v)) return m(g, h, v, w);
            if (Bi(v)) return y(g, h, v, w);
            Js(g, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, h !== null && h.tag === 6 ? (n(g, h.sibling), h = o(h, v), h.return = g, g = h) : (n(g, h), h = bd(v, g.mode, w), h.return = g, g = h), a(g)) : n(g, h)
    }
    return x
}
var hi = Ab(!0),
    Rb = Ab(!1),
    vs = {},
    An = Br(vs),
    Ga = Br(vs),
    Ka = Br(vs);

function so(e) {
    if (e === vs) throw Error(L(174));
    return e
}

function vm(e, t) {
    switch (be(Ka, t), be(Ga, e), be(An, vs), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : hf(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = hf(t, e)
    }
    ke(An), be(An, t)
}

function gi() {
    ke(An), ke(Ga), ke(Ka)
}

function Mb(e) {
    so(Ka.current);
    var t = so(An.current),
        n = hf(t, e.type);
    t !== n && (be(Ga, e), be(An, n))
}

function bm(e) {
    Ga.current === e && (ke(An), ke(Ga))
}
var Ae = Br(0);

function lu(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var pd = [];

function Sm() {
    for (var e = 0; e < pd.length; e++) pd[e]._workInProgressVersionPrimary = null;
    pd.length = 0
}
var kl = or.ReactCurrentDispatcher,
    md = or.ReactCurrentBatchConfig,
    bo = 0,
    Me = null,
    je = null,
    Ue = null,
    uu = !1,
    ha = !1,
    qa = 0,
    t3 = 0;

function tt() {
    throw Error(L(321))
}

function wm(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!gn(e[n], t[n])) return !1;
    return !0
}

function xm(e, t, n, r, o, i) {
    if (bo = i, Me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, kl.current = e === null || e.memoizedState === null ? i3 : a3, e = n(r, o), ha) {
        i = 0;
        do {
            if (ha = !1, qa = 0, 25 <= i) throw Error(L(301));
            i += 1, Ue = je = null, t.updateQueue = null, kl.current = s3, e = n(r, o)
        } while (ha)
    }
    if (kl.current = cu, t = je !== null && je.next !== null, bo = 0, Ue = je = Me = null, uu = !1, t) throw Error(L(300));
    return e
}

function km() {
    var e = qa !== 0;
    return qa = 0, e
}

function Sn() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ue === null ? Me.memoizedState = Ue = e : Ue = Ue.next = e, Ue
}

function en() {
    if (je === null) {
        var e = Me.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = je.next;
    var t = Ue === null ? Me.memoizedState : Ue.next;
    if (t !== null) Ue = t, je = e;
    else {
        if (e === null) throw Error(L(310));
        je = e, e = {
            memoizedState: je.memoizedState,
            baseState: je.baseState,
            baseQueue: je.baseQueue,
            queue: je.queue,
            next: null
        }, Ue === null ? Me.memoizedState = Ue = e : Ue = Ue.next = e
    }
    return Ue
}

function Xa(e, t) {
    return typeof t == "function" ? t(e) : t
}

function hd(e) {
    var t = en(),
        n = t.queue;
    if (n === null) throw Error(L(311));
    n.lastRenderedReducer = e;
    var r = je,
        o = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var a = o.next;
            o.next = i.next, i.next = a
        }
        r.baseQueue = o = i, n.pending = null
    }
    if (o !== null) {
        i = o.next, r = r.baseState;
        var s = a = null,
            l = null,
            u = i;
        do {
            var c = u.lane;
            if ((bo & c) === c) l !== null && (l = l.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (s = l = d, a = r) : l = l.next = d, Me.lanes |= c, So |= c
            }
            u = u.next
        } while (u !== null && u !== i);
        l === null ? a = r : l.next = s, gn(r, t.memoizedState) || (vt = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = l, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        o = e;
        do i = o.lane, Me.lanes |= i, So |= i, o = o.next; while (o !== e)
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function gd(e) {
    var t = en(),
        n = t.queue;
    if (n === null) throw Error(L(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var a = o = o.next;
        do i = e(i, a.action), a = a.next; while (a !== o);
        gn(i, t.memoizedState) || (vt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
    }
    return [i, r]
}

function Ob() {}

function zb(e, t) {
    var n = Me,
        r = en(),
        o = t(),
        i = !gn(r.memoizedState, o);
    if (i && (r.memoizedState = o, vt = !0), r = r.queue, Cm(Ib.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Ue !== null && Ue.memoizedState.tag & 1) {
        if (n.flags |= 2048, Ya(9, Lb.bind(null, n, r, o, t), void 0, null), Ge === null) throw Error(L(349));
        bo & 30 || $b(n, t, o)
    }
    return o
}

function $b(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = Me.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Me.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Lb(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Db(t) && Fb(e)
}

function Ib(e, t, n) {
    return n(function() {
        Db(t) && Fb(e)
    })
}

function Db(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !gn(e, n)
    } catch {
        return !0
    }
}

function Fb(e) {
    var t = er(e, 1);
    t !== null && hn(t, e, 1, -1)
}

function s0(e) {
    var t = Sn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xa,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = o3.bind(null, Me, e), [t.memoizedState, e]
}

function Ya(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = Me.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Me.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Nb() {
    return en().memoizedState
}

function Cl(e, t, n, r) {
    var o = Sn();
    Me.flags |= e, o.memoizedState = Ya(1 | t, n, void 0, r === void 0 ? null : r)
}

function Wu(e, t, n, r) {
    var o = en();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (je !== null) {
        var a = je.memoizedState;
        if (i = a.destroy, r !== null && wm(r, a.deps)) {
            o.memoizedState = Ya(t, n, i, r);
            return
        }
    }
    Me.flags |= e, o.memoizedState = Ya(1 | t, n, i, r)
}

function l0(e, t) {
    return Cl(8390656, 8, e, t)
}

function Cm(e, t) {
    return Wu(2048, 8, e, t)
}

function Bb(e, t) {
    return Wu(4, 2, e, t)
}

function jb(e, t) {
    return Wu(4, 4, e, t)
}

function Vb(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function Hb(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Wu(4, 4, Vb.bind(null, t, e), n)
}

function _m() {}

function Wb(e, t) {
    var n = en();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && wm(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Ub(e, t) {
    var n = en();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && wm(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Gb(e, t, n) {
    return bo & 21 ? (gn(n, t) || (n = X1(), Me.lanes |= n, So |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, vt = !0), e.memoizedState = n)
}

function n3(e, t) {
    var n = he;
    he = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = md.transition;
    md.transition = {};
    try {
        e(!1), t()
    } finally {
        he = n, md.transition = r
    }
}

function Kb() {
    return en().memoizedState
}

function r3(e, t, n) {
    var r = Ar(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, qb(e)) Xb(t, n);
    else if (n = _b(e, t, n, r), n !== null) {
        var o = dt();
        hn(n, e, r, o), Yb(n, t, r)
    }
}

function o3(e, t, n) {
    var r = Ar(e),
        o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (qb(e)) Xb(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
            var a = t.lastRenderedState,
                s = i(a, n);
            if (o.hasEagerState = !0, o.eagerState = s, gn(s, a)) {
                var l = t.interleaved;
                l === null ? (o.next = o, gm(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
                return
            }
        } catch {} finally {}
        n = _b(e, t, o, r), n !== null && (o = dt(), hn(n, e, r, o), Yb(n, t, r))
    }
}

function qb(e) {
    var t = e.alternate;
    return e === Me || t !== null && t === Me
}

function Xb(e, t) {
    ha = uu = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Yb(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, nm(e, n)
    }
}
var cu = {
        readContext: Jt,
        useCallback: tt,
        useContext: tt,
        useEffect: tt,
        useImperativeHandle: tt,
        useInsertionEffect: tt,
        useLayoutEffect: tt,
        useMemo: tt,
        useReducer: tt,
        useRef: tt,
        useState: tt,
        useDebugValue: tt,
        useDeferredValue: tt,
        useTransition: tt,
        useMutableSource: tt,
        useSyncExternalStore: tt,
        useId: tt,
        unstable_isNewReconciler: !1
    },
    i3 = {
        readContext: Jt,
        useCallback: function(e, t) {
            return Sn().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: Jt,
        useEffect: l0,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, Cl(4194308, 4, Vb.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Cl(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Cl(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Sn();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = Sn();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = r3.bind(null, Me, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Sn();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: s0,
        useDebugValue: _m,
        useDeferredValue: function(e) {
            return Sn().memoizedState = e
        },
        useTransition: function() {
            var e = s0(!1),
                t = e[0];
            return e = n3.bind(null, e[1]), Sn().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = Me,
                o = Sn();
            if (Pe) {
                if (n === void 0) throw Error(L(407));
                n = n()
            } else {
                if (n = t(), Ge === null) throw Error(L(349));
                bo & 30 || $b(r, t, n)
            }
            o.memoizedState = n;
            var i = {
                value: n,
                getSnapshot: t
            };
            return o.queue = i, l0(Ib.bind(null, r, i, e), [e]), r.flags |= 2048, Ya(9, Lb.bind(null, r, i, n, t), void 0, null), n
        },
        useId: function() {
            var e = Sn(),
                t = Ge.identifierPrefix;
            if (Pe) {
                var n = Vn,
                    r = jn;
                n = (r & ~(1 << 32 - mn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = qa++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = t3++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    a3 = {
        readContext: Jt,
        useCallback: Wb,
        useContext: Jt,
        useEffect: Cm,
        useImperativeHandle: Hb,
        useInsertionEffect: Bb,
        useLayoutEffect: jb,
        useMemo: Ub,
        useReducer: hd,
        useRef: Nb,
        useState: function() {
            return hd(Xa)
        },
        useDebugValue: _m,
        useDeferredValue: function(e) {
            var t = en();
            return Gb(t, je.memoizedState, e)
        },
        useTransition: function() {
            var e = hd(Xa)[0],
                t = en().memoizedState;
            return [e, t]
        },
        useMutableSource: Ob,
        useSyncExternalStore: zb,
        useId: Kb,
        unstable_isNewReconciler: !1
    },
    s3 = {
        readContext: Jt,
        useCallback: Wb,
        useContext: Jt,
        useEffect: Cm,
        useImperativeHandle: Hb,
        useInsertionEffect: Bb,
        useLayoutEffect: jb,
        useMemo: Ub,
        useReducer: gd,
        useRef: Nb,
        useState: function() {
            return gd(Xa)
        },
        useDebugValue: _m,
        useDeferredValue: function(e) {
            var t = en();
            return je === null ? t.memoizedState = e : Gb(t, je.memoizedState, e)
        },
        useTransition: function() {
            var e = gd(Xa)[0],
                t = en().memoizedState;
            return [e, t]
        },
        useMutableSource: Ob,
        useSyncExternalStore: zb,
        useId: Kb,
        unstable_isNewReconciler: !1
    };

function yi(e, t) {
    try {
        var n = "",
            r = t;
        do n += L5(r), r = r.return; while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}

function yd(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function Ff(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var l3 = typeof WeakMap == "function" ? WeakMap : Map;

function Qb(e, t, n) {
    n = Gn(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        fu || (fu = !0, qf = r), Ff(e, t)
    }, n
}

function Zb(e, t, n) {
    n = Gn(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }, n.callback = function() {
            Ff(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        Ff(e, t), typeof r != "function" && (Pr === null ? Pr = new Set([this]) : Pr.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : ""
        })
    }), n
}

function u0(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new l3;
        var o = new Set;
        r.set(t, o)
    } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
    o.has(n) || (o.add(n), e = x3.bind(null, e, t, n), t.then(e, e))
}

function c0(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function d0(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Gn(-1, 1), t.tag = 2, Tr(n, t, 1))), n.lanes |= 1), e)
}
var u3 = or.ReactCurrentOwner,
    vt = !1;

function ut(e, t, n, r) {
    t.child = e === null ? Rb(t, null, n, r) : hi(t, e.child, n, r)
}

function f0(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return oi(t, o), r = xm(e, t, n, r, i, o), n = km(), e !== null && !vt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, tr(e, t, o)) : (Pe && n && cm(t), t.flags |= 1, ut(e, t, r, o), t.child)
}

function p0(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !zm(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Jb(e, t, i, r, o)) : (e = Pl(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (i = e.child, !(e.lanes & o)) {
        var a = i.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Va, n(a, r) && e.ref === t.ref) return tr(e, t, o)
    }
    return t.flags |= 1, e = Rr(i, r), e.ref = t.ref, e.return = t, t.child = e
}

function Jb(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Va(i, r) && e.ref === t.ref)
            if (vt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (vt = !0);
            else return t.lanes = e.lanes, tr(e, t, o)
    }
    return Nf(e, t, n, r, o)
}

function eS(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, be(Yo, Tt), Tt |= n;
        else {
            if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, be(Yo, Tt), Tt |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = i !== null ? i.baseLanes : n, be(Yo, Tt), Tt |= r
        }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, be(Yo, Tt), Tt |= r;
    return ut(e, t, o, n), t.child
}

function tS(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Nf(e, t, n, r, o) {
    var i = St(n) ? yo : st.current;
    return i = pi(t, i), oi(t, o), n = xm(e, t, n, r, i, o), r = km(), e !== null && !vt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, tr(e, t, o)) : (Pe && r && cm(t), t.flags |= 1, ut(e, t, n, o), t.child)
}

function m0(e, t, n, r, o) {
    if (St(n)) {
        var i = !0;
        nu(t)
    } else i = !1;
    if (oi(t, o), t.stateNode === null) _l(e, t), Pb(t, n, r), Df(t, n, r, o), r = !0;
    else if (e === null) {
        var a = t.stateNode,
            s = t.memoizedProps;
        a.props = s;
        var l = a.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = Jt(u) : (u = St(n) ? yo : st.current, u = pi(t, u));
        var c = n.getDerivedStateFromProps,
            d = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
        d || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== r || l !== u) && i0(t, a, r, u), gr = !1;
        var f = t.memoizedState;
        a.state = f, su(t, r, a, o), l = t.memoizedState, s !== r || f !== l || bt.current || gr ? (typeof c == "function" && (If(t, n, c, r), l = t.memoizedState), (s = gr || o0(t, n, s, r, f, l, u)) ? (d || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = u, r = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        a = t.stateNode, Eb(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : cn(t.type, s), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, typeof l == "object" && l !== null ? l = Jt(l) : (l = St(n) ? yo : st.current, l = pi(t, l));
        var p = n.getDerivedStateFromProps;
        (c = typeof p == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== d || f !== l) && i0(t, a, r, l), gr = !1, f = t.memoizedState, a.state = f, su(t, r, a, o);
        var m = t.memoizedState;
        s !== d || f !== m || bt.current || gr ? (typeof p == "function" && (If(t, n, p, r), m = t.memoizedState), (u = gr || o0(t, n, u, r, f, m, l) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, m, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, m, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), a.props = r, a.state = m, a.context = l, r = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Bf(e, t, n, r, i, o)
}

function Bf(e, t, n, r, o, i) {
    tS(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a) return o && Jg(t, n, !1), tr(e, t, i);
    r = t.stateNode, u3.current = t;
    var s = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && a ? (t.child = hi(t, e.child, null, i), t.child = hi(t, null, s, i)) : ut(e, t, s, i), t.memoizedState = r.state, o && Jg(t, n, !0), t.child
}

function nS(e) {
    var t = e.stateNode;
    t.pendingContext ? Zg(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Zg(e, t.context, !1), vm(e, t.containerInfo)
}

function h0(e, t, n, r, o) {
    return mi(), fm(o), t.flags |= 256, ut(e, t, n, r), t.child
}
var jf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Vf(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function rS(e, t, n) {
    var r = t.pendingProps,
        o = Ae.current,
        i = !1,
        a = (t.flags & 128) !== 0,
        s;
    if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), be(Ae, o & 1), e === null) return $f(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, a = {
        mode: "hidden",
        children: a
    }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = Ku(a, r, 0, null), e = fo(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Vf(n), t.memoizedState = jf, e) : Em(t, a));
    if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return c3(e, t, a, r, s, o, n);
    if (i) {
        i = r.fallback, a = t.mode, o = e.child, s = o.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(a & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Rr(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = Rr(s, i) : (i = fo(i, a, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, a = e.child.memoizedState, a = a === null ? Vf(n) : {
            baseLanes: a.baseLanes | n,
            cachePool: null,
            transitions: a.transitions
        }, i.memoizedState = a, i.childLanes = e.childLanes & ~n, t.memoizedState = jf, r
    }
    return i = e.child, e = i.sibling, r = Rr(i, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Em(e, t) {
    return t = Ku({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function el(e, t, n, r) {
    return r !== null && fm(r), hi(t, e.child, null, n), e = Em(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function c3(e, t, n, r, o, i, a) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = yd(Error(L(422))), el(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Ku({
        mode: "visible",
        children: r.children
    }, o, 0, null), i = fo(i, o, a, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && hi(t, e.child, null, a), t.child.memoizedState = Vf(a), t.memoizedState = jf, i);
    if (!(t.mode & 1)) return el(e, t, a, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
        return r = s, i = Error(L(419)), r = yd(i, r, void 0), el(e, t, a, r)
    }
    if (s = (a & e.childLanes) !== 0, vt || s) {
        if (r = Ge, r !== null) {
            switch (a & -a) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0
            }
            o = o & (r.suspendedLanes | a) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, er(e, o), hn(r, e, o, -1))
        }
        return Om(), r = yd(Error(L(421))), el(e, t, a, r)
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = k3.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, At = Er(o.nextSibling), Mt = t, Pe = !0, fn = null, e !== null && (Gt[Kt++] = jn, Gt[Kt++] = Vn, Gt[Kt++] = vo, jn = e.id, Vn = e.overflow, vo = t), t = Em(t, r.children), t.flags |= 4096, t)
}

function g0(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Lf(e.return, t, n)
}

function vd(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o)
}

function oS(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail;
    if (ut(e, t, r.children, n), r = Ae.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && g0(e, n, t);
            else if (e.tag === 19) g0(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (be(Ae, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (o) {
        case "forwards":
            for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null && lu(e) === null && (o = n), n = n.sibling;
            n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), vd(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null, o = t.child, t.child = null; o !== null;) {
                if (e = o.alternate, e !== null && lu(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling, o.sibling = n, n = o, o = e
            }
            vd(t, !0, n, null, i);
            break;
        case "together":
            vd(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function _l(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function tr(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), So |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(L(153));
    if (t.child !== null) {
        for (e = t.child, n = Rr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Rr(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function d3(e, t, n) {
    switch (t.tag) {
        case 3:
            nS(t), mi();
            break;
        case 5:
            Mb(t);
            break;
        case 1:
            St(t.type) && nu(t);
            break;
        case 4:
            vm(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            be(iu, r._currentValue), r._currentValue = o;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (be(Ae, Ae.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? rS(e, t, n) : (be(Ae, Ae.current & 1), e = tr(e, t, n), e !== null ? e.sibling : null);
            be(Ae, Ae.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return oS(e, t, n);
                t.flags |= 128
            }
            if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), be(Ae, Ae.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, eS(e, t, n)
    }
    return tr(e, t, n)
}
var iS, Hf, aS, sS;
iS = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Hf = function() {};
aS = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode, so(An.current);
        var i = null;
        switch (n) {
            case "input":
                o = df(e, o), r = df(e, r), i = [];
                break;
            case "select":
                o = Oe({}, o, {
                    value: void 0
                }), r = Oe({}, r, {
                    value: void 0
                }), i = [];
                break;
            case "textarea":
                o = mf(e, o), r = mf(e, r), i = [];
                break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = eu)
        }
        gf(n, r);
        var a;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var s = o[u];
                    for (a in s) s.hasOwnProperty(a) && (n || (n = {}), n[a] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (La.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (s = o != null ? o[u] : void 0, r.hasOwnProperty(u) && l !== s && (l != null || s != null))
                if (u === "style")
                    if (s) {
                        for (a in s) !s.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
                        for (a in l) l.hasOwnProperty(a) && s[a] !== l[a] && (n || (n = {}), n[a] = l[a])
                    } else n || (i || (i = []), i.push(u, n)), n = l;
            else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (La.hasOwnProperty(u) ? (l != null && u === "onScroll" && Se("scroll", e), i || s === l || (i = [])) : (i = i || []).push(u, l))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
sS = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function Gi(e, t) {
    if (!Pe) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function nt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
    else
        for (o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function f3(e, t, n) {
    var r = t.pendingProps;
    switch (dm(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return nt(t), null;
        case 1:
            return St(t.type) && tu(), nt(t), null;
        case 3:
            return r = t.stateNode, gi(), ke(bt), ke(st), Sm(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Zs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, fn !== null && (Qf(fn), fn = null))), Hf(e, t), nt(t), null;
        case 5:
            bm(t);
            var o = so(Ka.current);
            if (n = t.type, e !== null && t.stateNode != null) aS(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(L(166));
                    return nt(t), null
                }
                if (e = so(An.current), Zs(t)) {
                    r = t.stateNode, n = t.type;
                    var i = t.memoizedProps;
                    switch (r[_n] = t, r[Ua] = i, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            Se("cancel", r), Se("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Se("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < oa.length; o++) Se(oa[o], r);
                            break;
                        case "source":
                            Se("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Se("error", r), Se("load", r);
                            break;
                        case "details":
                            Se("toggle", r);
                            break;
                        case "input":
                            _g(r, i), Se("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!i.multiple
                            }, Se("invalid", r);
                            break;
                        case "textarea":
                            Tg(r, i), Se("invalid", r)
                    }
                    gf(n, i), o = null;
                    for (var a in i)
                        if (i.hasOwnProperty(a)) {
                            var s = i[a];
                            a === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && Qs(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && Qs(r.textContent, s, e), o = ["children", "" + s]) : La.hasOwnProperty(a) && s != null && a === "onScroll" && Se("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            Hs(r), Eg(r, i, !0);
                            break;
                        case "textarea":
                            Hs(r), Pg(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = eu)
                    }
                    r = o, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = $1(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, {
                        is: r.is
                    }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[_n] = t, e[Ua] = r, iS(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (a = yf(n, r), n) {
                            case "dialog":
                                Se("cancel", e), Se("close", e), o = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Se("load", e), o = r;
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < oa.length; o++) Se(oa[o], e);
                                o = r;
                                break;
                            case "source":
                                Se("error", e), o = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Se("error", e), Se("load", e), o = r;
                                break;
                            case "details":
                                Se("toggle", e), o = r;
                                break;
                            case "input":
                                _g(e, r), o = df(e, r), Se("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, o = Oe({}, r, {
                                    value: void 0
                                }), Se("invalid", e);
                                break;
                            case "textarea":
                                Tg(e, r), o = mf(e, r), Se("invalid", e);
                                break;
                            default:
                                o = r
                        }
                        gf(n, o),
                        s = o;
                        for (i in s)
                            if (s.hasOwnProperty(i)) {
                                var l = s[i];
                                i === "style" ? D1(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && L1(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Ia(e, l) : typeof l == "number" && Ia(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (La.hasOwnProperty(i) ? l != null && i === "onScroll" && Se("scroll", e) : l != null && Yp(e, i, l, a))
                            }
                        switch (n) {
                            case "input":
                                Hs(e), Eg(e, r, !1);
                                break;
                            case "textarea":
                                Hs(e), Pg(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + $r(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, i = r.value, i != null ? ei(e, !!r.multiple, i, !1) : r.defaultValue != null && ei(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = eu)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return nt(t), null;
        case 6:
            if (e && t.stateNode != null) sS(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
                if (n = so(Ka.current), so(An.current), Zs(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[_n] = t, (i = r.nodeValue !== n) && (e = Mt, e !== null)) switch (e.tag) {
                        case 3:
                            Qs(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Qs(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    i && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[_n] = t, t.stateNode = r
            }
            return nt(t), null;
        case 13:
            if (ke(Ae), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (Pe && At !== null && t.mode & 1 && !(t.flags & 128)) Cb(), mi(), t.flags |= 98560, i = !1;
                else if (i = Zs(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!i) throw Error(L(318));
                        if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(L(317));
                        i[_n] = t
                    } else mi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    nt(t), i = !1
                } else fn !== null && (Qf(fn), fn = null), i = !0;
                if (!i) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Ae.current & 1 ? Ve === 0 && (Ve = 3) : Om())), t.updateQueue !== null && (t.flags |= 4), nt(t), null);
        case 4:
            return gi(), Hf(e, t), e === null && Ha(t.stateNode.containerInfo), nt(t), null;
        case 10:
            return hm(t.type._context), nt(t), null;
        case 17:
            return St(t.type) && tu(), nt(t), null;
        case 19:
            if (ke(Ae), i = t.memoizedState, i === null) return nt(t), null;
            if (r = (t.flags & 128) !== 0, a = i.rendering, a === null)
                if (r) Gi(i, !1);
                else {
                    if (Ve !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (a = lu(e), a !== null) {
                                for (t.flags |= 128, Gi(i, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return be(Ae, Ae.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    i.tail !== null && Ie() > vi && (t.flags |= 128, r = !0, Gi(i, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = lu(a), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Gi(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !Pe) return nt(t), null
                    } else 2 * Ie() - i.renderingStartTime > vi && n !== 1073741824 && (t.flags |= 128, r = !0, Gi(i, !1), t.lanes = 4194304);
                i.isBackwards ? (a.sibling = t.child, t.child = a) : (n = i.last, n !== null ? n.sibling = a : t.child = a, i.last = a)
            }
            return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ie(), t.sibling = null, n = Ae.current, be(Ae, r ? n & 1 | 2 : n & 1), t) : (nt(t), null);
        case 22:
        case 23:
            return Mm(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Tt & 1073741824 && (nt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : nt(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(L(156, t.tag))
}

function p3(e, t) {
    switch (dm(t), t.tag) {
        case 1:
            return St(t.type) && tu(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return gi(), ke(bt), ke(st), Sm(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return bm(t), null;
        case 13:
            if (ke(Ae), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(L(340));
                mi()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return ke(Ae), null;
        case 4:
            return gi(), null;
        case 10:
            return hm(t.type._context), null;
        case 22:
        case 23:
            return Mm(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var tl = !1,
    ot = !1,
    m3 = typeof WeakSet == "function" ? WeakSet : Set,
    F = null;

function Xo(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            Le(e, t, r)
        } else n.current = null
}

function Wf(e, t, n) {
    try {
        n()
    } catch (r) {
        Le(e, t, r)
    }
}
var y0 = !1;

function h3(e, t) {
    if (Tf = Ql, e = db(), um(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var o = r.anchorOffset,
                    i = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, i.nodeType
                } catch {
                    n = null;
                    break e
                }
                var a = 0,
                    s = -1,
                    l = -1,
                    u = 0,
                    c = 0,
                    d = e,
                    f = null;
                t: for (;;) {
                    for (var p; d !== n || o !== 0 && d.nodeType !== 3 || (s = a + o), d !== i || r !== 0 && d.nodeType !== 3 || (l = a + r), d.nodeType === 3 && (a += d.nodeValue.length), (p = d.firstChild) !== null;) f = d, d = p;
                    for (;;) {
                        if (d === e) break t;
                        if (f === n && ++u === o && (s = a), f === i && ++c === r && (l = a), (p = d.nextSibling) !== null) break;
                        d = f, f = d.parentNode
                    }
                    d = p
                }
                n = s === -1 || l === -1 ? null : {
                    start: s,
                    end: l
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (Pf = {
            focusedElem: e,
            selectionRange: n
        }, Ql = !1, F = t; F !== null;)
        if (t = F, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, F = e;
        else
            for (; F !== null;) {
                t = F;
                try {
                    var m = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (m !== null) {
                                var y = m.memoizedProps,
                                    x = m.memoizedState,
                                    g = t.stateNode,
                                    h = g.getSnapshotBeforeUpdate(t.elementType === t.type ? y : cn(t.type, y), x);
                                g.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(L(163))
                    }
                } catch (w) {
                    Le(t, t.return, w)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, F = e;
                    break
                }
                F = t.return
            }
    return m = y0, y0 = !1, m
}

function ga(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0, i !== void 0 && Wf(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}

function Uu(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Uf(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function lS(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, lS(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[_n], delete t[Ua], delete t[Mf], delete t[QC], delete t[ZC])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function uS(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function v0(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || uS(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Gf(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = eu));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Gf(e, t, n), e = e.sibling; e !== null;) Gf(e, t, n), e = e.sibling
}

function Kf(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Kf(e, t, n), e = e.sibling; e !== null;) Kf(e, t, n), e = e.sibling
}
var Xe = null,
    dn = !1;

function ur(e, t, n) {
    for (n = n.child; n !== null;) cS(e, t, n), n = n.sibling
}

function cS(e, t, n) {
    if (Pn && typeof Pn.onCommitFiberUnmount == "function") try {
        Pn.onCommitFiberUnmount(Du, n)
    } catch {}
    switch (n.tag) {
        case 5:
            ot || Xo(n, t);
        case 6:
            var r = Xe,
                o = dn;
            Xe = null, ur(e, t, n), Xe = r, dn = o, Xe !== null && (dn ? (e = Xe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Xe.removeChild(n.stateNode));
            break;
        case 18:
            Xe !== null && (dn ? (e = Xe, n = n.stateNode, e.nodeType === 8 ? dd(e.parentNode, n) : e.nodeType === 1 && dd(e, n), Ba(e)) : dd(Xe, n.stateNode));
            break;
        case 4:
            r = Xe, o = dn, Xe = n.stateNode.containerInfo, dn = !0, ur(e, t, n), Xe = r, dn = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ot && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                o = r = r.next;
                do {
                    var i = o,
                        a = i.destroy;
                    i = i.tag, a !== void 0 && (i & 2 || i & 4) && Wf(n, t, a), o = o.next
                } while (o !== r)
            }
            ur(e, t, n);
            break;
        case 1:
            if (!ot && (Xo(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (s) {
                Le(n, t, s)
            }
            ur(e, t, n);
            break;
        case 21:
            ur(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (ot = (r = ot) || n.memoizedState !== null, ur(e, t, n), ot = r) : ur(e, t, n);
            break;
        default:
            ur(e, t, n)
    }
}

function b0(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new m3), t.forEach(function(r) {
            var o = C3.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(o, o))
        })
    }
}

function sn(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e,
                    a = t,
                    s = a;
                e: for (; s !== null;) {
                    switch (s.tag) {
                        case 5:
                            Xe = s.stateNode, dn = !1;
                            break e;
                        case 3:
                            Xe = s.stateNode.containerInfo, dn = !0;
                            break e;
                        case 4:
                            Xe = s.stateNode.containerInfo, dn = !0;
                            break e
                    }
                    s = s.return
                }
                if (Xe === null) throw Error(L(160));
                cS(i, a, o), Xe = null, dn = !1;
                var l = o.alternate;
                l !== null && (l.return = null), o.return = null
            } catch (u) {
                Le(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) dS(t, e), t = t.sibling
}

function dS(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (sn(t, e), vn(e), r & 4) {
                try {
                    ga(3, e, e.return), Uu(3, e)
                } catch (y) {
                    Le(e, e.return, y)
                }
                try {
                    ga(5, e, e.return)
                } catch (y) {
                    Le(e, e.return, y)
                }
            }
            break;
        case 1:
            sn(t, e), vn(e), r & 512 && n !== null && Xo(n, n.return);
            break;
        case 5:
            if (sn(t, e), vn(e), r & 512 && n !== null && Xo(n, n.return), e.flags & 32) {
                var o = e.stateNode;
                try {
                    Ia(o, "")
                } catch (y) {
                    Le(e, e.return, y)
                }
            }
            if (r & 4 && (o = e.stateNode, o != null)) {
                var i = e.memoizedProps,
                    a = n !== null ? n.memoizedProps : i,
                    s = e.type,
                    l = e.updateQueue;
                if (e.updateQueue = null, l !== null) try {
                    s === "input" && i.type === "radio" && i.name != null && O1(o, i), yf(s, a);
                    var u = yf(s, i);
                    for (a = 0; a < l.length; a += 2) {
                        var c = l[a],
                            d = l[a + 1];
                        c === "style" ? D1(o, d) : c === "dangerouslySetInnerHTML" ? L1(o, d) : c === "children" ? Ia(o, d) : Yp(o, c, d, u)
                    }
                    switch (s) {
                        case "input":
                            ff(o, i);
                            break;
                        case "textarea":
                            z1(o, i);
                            break;
                        case "select":
                            var f = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!i.multiple;
                            var p = i.value;
                            p != null ? ei(o, !!i.multiple, p, !1) : f !== !!i.multiple && (i.defaultValue != null ? ei(o, !!i.multiple, i.defaultValue, !0) : ei(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[Ua] = i
                } catch (y) {
                    Le(e, e.return, y)
                }
            }
            break;
        case 6:
            if (sn(t, e), vn(e), r & 4) {
                if (e.stateNode === null) throw Error(L(162));
                o = e.stateNode, i = e.memoizedProps;
                try {
                    o.nodeValue = i
                } catch (y) {
                    Le(e, e.return, y)
                }
            }
            break;
        case 3:
            if (sn(t, e), vn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Ba(t.containerInfo)
            } catch (y) {
                Le(e, e.return, y)
            }
            break;
        case 4:
            sn(t, e), vn(e);
            break;
        case 13:
            sn(t, e), vn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Am = Ie())), r & 4 && b0(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (ot = (u = ot) || c, sn(t, e), ot = u) : sn(t, e), vn(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
                    for (F = e, c = e.child; c !== null;) {
                        for (d = F = c; F !== null;) {
                            switch (f = F, p = f.child, f.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    ga(4, f, f.return);
                                    break;
                                case 1:
                                    Xo(f, f.return);
                                    var m = f.stateNode;
                                    if (typeof m.componentWillUnmount == "function") {
                                        r = f, n = f.return;
                                        try {
                                            t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount()
                                        } catch (y) {
                                            Le(r, n, y)
                                        }
                                    }
                                    break;
                                case 5:
                                    Xo(f, f.return);
                                    break;
                                case 22:
                                    if (f.memoizedState !== null) {
                                        w0(d);
                                        continue
                                    }
                            }
                            p !== null ? (p.return = f, F = p) : w0(d)
                        }
                        c = c.sibling
                    }
                e: for (c = null, d = e;;) {
                    if (d.tag === 5) {
                        if (c === null) {
                            c = d;
                            try {
                                o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode, l = d.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = I1("display", a))
                            } catch (y) {
                                Le(e, e.return, y)
                            }
                        }
                    } else if (d.tag === 6) {
                        if (c === null) try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (y) {
                            Le(e, e.return, y)
                        }
                    } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                        d.child.return = d, d = d.child;
                        continue
                    }
                    if (d === e) break e;
                    for (; d.sibling === null;) {
                        if (d.return === null || d.return === e) break e;
                        c === d && (c = null), d = d.return
                    }
                    c === d && (c = null), d.sibling.return = d.return, d = d.sibling
                }
            }
            break;
        case 19:
            sn(t, e), vn(e), r & 4 && b0(e);
            break;
        case 21:
            break;
        default:
            sn(t, e), vn(e)
    }
}

function vn(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (uS(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(L(160))
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (Ia(o, ""), r.flags &= -33);
                    var i = v0(e);
                    Kf(e, i, o);
                    break;
                case 3:
                case 4:
                    var a = r.stateNode.containerInfo,
                        s = v0(e);
                    Gf(e, s, a);
                    break;
                default:
                    throw Error(L(161))
            }
        }
        catch (l) {
            Le(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function g3(e, t, n) {
    F = e, fS(e)
}

function fS(e, t, n) {
    for (var r = (e.mode & 1) !== 0; F !== null;) {
        var o = F,
            i = o.child;
        if (o.tag === 22 && r) {
            var a = o.memoizedState !== null || tl;
            if (!a) {
                var s = o.alternate,
                    l = s !== null && s.memoizedState !== null || ot;
                s = tl;
                var u = ot;
                if (tl = a, (ot = l) && !u)
                    for (F = o; F !== null;) a = F, l = a.child, a.tag === 22 && a.memoizedState !== null ? x0(o) : l !== null ? (l.return = a, F = l) : x0(o);
                for (; i !== null;) F = i, fS(i), i = i.sibling;
                F = o, tl = s, ot = u
            }
            S0(e)
        } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, F = i) : S0(e)
    }
}

function S0(e) {
    for (; F !== null;) {
        var t = F;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ot || Uu(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ot)
                            if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : cn(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && r0(t, i, r);
                        break;
                    case 3:
                        var a = t.updateQueue;
                        if (a !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            r0(t, a, n)
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = s;
                            var l = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l.autoFocus && n.focus();
                                    break;
                                case "img":
                                    l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && Ba(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(L(163))
                }
                ot || t.flags & 512 && Uf(t)
            } catch (f) {
                Le(t, t.return, f)
            }
        }
        if (t === e) {
            F = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, F = n;
            break
        }
        F = t.return
    }
}

function w0(e) {
    for (; F !== null;) {
        var t = F;
        if (t === e) {
            F = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, F = n;
            break
        }
        F = t.return
    }
}

function x0(e) {
    for (; F !== null;) {
        var t = F;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Uu(4, t)
                    } catch (l) {
                        Le(t, n, l)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount()
                        } catch (l) {
                            Le(t, o, l)
                        }
                    }
                    var i = t.return;
                    try {
                        Uf(t)
                    } catch (l) {
                        Le(t, i, l)
                    }
                    break;
                case 5:
                    var a = t.return;
                    try {
                        Uf(t)
                    } catch (l) {
                        Le(t, a, l)
                    }
            }
        } catch (l) {
            Le(t, t.return, l)
        }
        if (t === e) {
            F = null;
            break
        }
        var s = t.sibling;
        if (s !== null) {
            s.return = t.return, F = s;
            break
        }
        F = t.return
    }
}
var y3 = Math.ceil,
    du = or.ReactCurrentDispatcher,
    Tm = or.ReactCurrentOwner,
    Yt = or.ReactCurrentBatchConfig,
    se = 0,
    Ge = null,
    Ne = null,
    Ze = 0,
    Tt = 0,
    Yo = Br(0),
    Ve = 0,
    Qa = null,
    So = 0,
    Gu = 0,
    Pm = 0,
    ya = null,
    gt = null,
    Am = 0,
    vi = 1 / 0,
    Fn = null,
    fu = !1,
    qf = null,
    Pr = null,
    nl = !1,
    xr = null,
    pu = 0,
    va = 0,
    Xf = null,
    El = -1,
    Tl = 0;

function dt() {
    return se & 6 ? Ie() : El !== -1 ? El : El = Ie()
}

function Ar(e) {
    return e.mode & 1 ? se & 2 && Ze !== 0 ? Ze & -Ze : e3.transition !== null ? (Tl === 0 && (Tl = X1()), Tl) : (e = he, e !== 0 || (e = window.event, e = e === void 0 ? 16 : nb(e.type)), e) : 1
}

function hn(e, t, n, r) {
    if (50 < va) throw va = 0, Xf = null, Error(L(185));
    hs(e, n, r), (!(se & 2) || e !== Ge) && (e === Ge && (!(se & 2) && (Gu |= n), Ve === 4 && br(e, Ze)), wt(e, r), n === 1 && se === 0 && !(t.mode & 1) && (vi = Ie() + 500, Vu && jr()))
}

function wt(e, t) {
    var n = e.callbackNode;
    eC(e, t);
    var r = Yl(e, e === Ge ? Ze : 0);
    if (r === 0) n !== null && Mg(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Mg(n), t === 1) e.tag === 0 ? JC(k0.bind(null, e)) : wb(k0.bind(null, e)), XC(function() {
            !(se & 6) && jr()
        }), n = null;
        else {
            switch (Y1(r)) {
                case 1:
                    n = tm;
                    break;
                case 4:
                    n = K1;
                    break;
                case 16:
                    n = Xl;
                    break;
                case 536870912:
                    n = q1;
                    break;
                default:
                    n = Xl
            }
            n = SS(n, pS.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function pS(e, t) {
    if (El = -1, Tl = 0, se & 6) throw Error(L(327));
    var n = e.callbackNode;
    if (ii() && e.callbackNode !== n) return null;
    var r = Yl(e, e === Ge ? Ze : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = mu(e, r);
    else {
        t = r;
        var o = se;
        se |= 2;
        var i = hS();
        (Ge !== e || Ze !== t) && (Fn = null, vi = Ie() + 500, co(e, t));
        do try {
            S3();
            break
        } catch (s) {
            mS(e, s)
        }
        while (1);
        mm(), du.current = i, se = o, Ne !== null ? t = 0 : (Ge = null, Ze = 0, t = Ve)
    }
    if (t !== 0) {
        if (t === 2 && (o = xf(e), o !== 0 && (r = o, t = Yf(e, o))), t === 1) throw n = Qa, co(e, 0), br(e, r), wt(e, Ie()), n;
        if (t === 6) br(e, r);
        else {
            if (o = e.current.alternate, !(r & 30) && !v3(o) && (t = mu(e, r), t === 2 && (i = xf(e), i !== 0 && (r = i, t = Yf(e, i))), t === 1)) throw n = Qa, co(e, 0), br(e, r), wt(e, Ie()), n;
            switch (e.finishedWork = o, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(L(345));
                case 2:
                    eo(e, gt, Fn);
                    break;
                case 3:
                    if (br(e, r), (r & 130023424) === r && (t = Am + 500 - Ie(), 10 < t)) {
                        if (Yl(e, 0) !== 0) break;
                        if (o = e.suspendedLanes, (o & r) !== r) {
                            dt(), e.pingedLanes |= e.suspendedLanes & o;
                            break
                        }
                        e.timeoutHandle = Rf(eo.bind(null, e, gt, Fn), t);
                        break
                    }
                    eo(e, gt, Fn);
                    break;
                case 4:
                    if (br(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, o = -1; 0 < r;) {
                        var a = 31 - mn(r);
                        i = 1 << a, a = t[a], a > o && (o = a), r &= ~i
                    }
                    if (r = o, r = Ie() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * y3(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Rf(eo.bind(null, e, gt, Fn), r);
                        break
                    }
                    eo(e, gt, Fn);
                    break;
                case 5:
                    eo(e, gt, Fn);
                    break;
                default:
                    throw Error(L(329))
            }
        }
    }
    return wt(e, Ie()), e.callbackNode === n ? pS.bind(null, e) : null
}

function Yf(e, t) {
    var n = ya;
    return e.current.memoizedState.isDehydrated && (co(e, t).flags |= 256), e = mu(e, t), e !== 2 && (t = gt, gt = n, t !== null && Qf(t)), e
}

function Qf(e) {
    gt === null ? gt = e : gt.push.apply(gt, e)
}

function v3(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!gn(i(), o)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function br(e, t) {
    for (t &= ~Pm, t &= ~Gu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - mn(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function k0(e) {
    if (se & 6) throw Error(L(327));
    ii();
    var t = Yl(e, 0);
    if (!(t & 1)) return wt(e, Ie()), null;
    var n = mu(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = xf(e);
        r !== 0 && (t = r, n = Yf(e, r))
    }
    if (n === 1) throw n = Qa, co(e, 0), br(e, t), wt(e, Ie()), n;
    if (n === 6) throw Error(L(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, eo(e, gt, Fn), wt(e, Ie()), null
}

function Rm(e, t) {
    var n = se;
    se |= 1;
    try {
        return e(t)
    } finally {
        se = n, se === 0 && (vi = Ie() + 500, Vu && jr())
    }
}

function wo(e) {
    xr !== null && xr.tag === 0 && !(se & 6) && ii();
    var t = se;
    se |= 1;
    var n = Yt.transition,
        r = he;
    try {
        if (Yt.transition = null, he = 1, e) return e()
    } finally {
        he = r, Yt.transition = n, se = t, !(se & 6) && jr()
    }
}

function Mm() {
    Tt = Yo.current, ke(Yo)
}

function co(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, qC(n)), Ne !== null)
        for (n = Ne.return; n !== null;) {
            var r = n;
            switch (dm(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && tu();
                    break;
                case 3:
                    gi(), ke(bt), ke(st), Sm();
                    break;
                case 5:
                    bm(r);
                    break;
                case 4:
                    gi();
                    break;
                case 13:
                    ke(Ae);
                    break;
                case 19:
                    ke(Ae);
                    break;
                case 10:
                    hm(r.type._context);
                    break;
                case 22:
                case 23:
                    Mm()
            }
            n = n.return
        }
    if (Ge = e, Ne = e = Rr(e.current, null), Ze = Tt = t, Ve = 0, Qa = null, Pm = Gu = So = 0, gt = ya = null, ao !== null) {
        for (t = 0; t < ao.length; t++)
            if (n = ao[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var o = r.next,
                    i = n.pending;
                if (i !== null) {
                    var a = i.next;
                    i.next = o, r.next = a
                }
                n.pending = r
            }
        ao = null
    }
    return e
}

function mS(e, t) {
    do {
        var n = Ne;
        try {
            if (mm(), kl.current = cu, uu) {
                for (var r = Me.memoizedState; r !== null;) {
                    var o = r.queue;
                    o !== null && (o.pending = null), r = r.next
                }
                uu = !1
            }
            if (bo = 0, Ue = je = Me = null, ha = !1, qa = 0, Tm.current = null, n === null || n.return === null) {
                Ve = 1, Qa = t, Ne = null;
                break
            }
            e: {
                var i = e,
                    a = n.return,
                    s = n,
                    l = t;
                if (t = Ze, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l,
                        c = s,
                        d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var p = c0(a);
                    if (p !== null) {
                        p.flags &= -257, d0(p, a, s, i, t), p.mode & 1 && u0(i, u, t), t = p, l = u;
                        var m = t.updateQueue;
                        if (m === null) {
                            var y = new Set;
                            y.add(l), t.updateQueue = y
                        } else m.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            u0(i, u, t), Om();
                            break e
                        }
                        l = Error(L(426))
                    }
                } else if (Pe && s.mode & 1) {
                    var x = c0(a);
                    if (x !== null) {
                        !(x.flags & 65536) && (x.flags |= 256), d0(x, a, s, i, t), fm(yi(l, s));
                        break e
                    }
                }
                i = l = yi(l, s),
                Ve !== 4 && (Ve = 2),
                ya === null ? ya = [i] : ya.push(i),
                i = a;do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536, t &= -t, i.lanes |= t;
                            var g = Qb(i, l, t);
                            n0(i, g);
                            break e;
                        case 1:
                            s = l;
                            var h = i.type,
                                v = i.stateNode;
                            if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Pr === null || !Pr.has(v)))) {
                                i.flags |= 65536, t &= -t, i.lanes |= t;
                                var w = Zb(i, s, t);
                                n0(i, w);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            yS(n)
        } catch (E) {
            t = E, Ne === n && n !== null && (Ne = n = n.return);
            continue
        }
        break
    } while (1)
}

function hS() {
    var e = du.current;
    return du.current = cu, e === null ? cu : e
}

function Om() {
    (Ve === 0 || Ve === 3 || Ve === 2) && (Ve = 4), Ge === null || !(So & 268435455) && !(Gu & 268435455) || br(Ge, Ze)
}

function mu(e, t) {
    var n = se;
    se |= 2;
    var r = hS();
    (Ge !== e || Ze !== t) && (Fn = null, co(e, t));
    do try {
        b3();
        break
    } catch (o) {
        mS(e, o)
    }
    while (1);
    if (mm(), se = n, du.current = r, Ne !== null) throw Error(L(261));
    return Ge = null, Ze = 0, Ve
}

function b3() {
    for (; Ne !== null;) gS(Ne)
}

function S3() {
    for (; Ne !== null && !U5();) gS(Ne)
}

function gS(e) {
    var t = bS(e.alternate, e, Tt);
    e.memoizedProps = e.pendingProps, t === null ? yS(e) : Ne = t, Tm.current = null
}

function yS(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = p3(n, t), n !== null) {
                n.flags &= 32767, Ne = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                Ve = 6, Ne = null;
                return
            }
        } else if (n = f3(n, t, Tt), n !== null) {
            Ne = n;
            return
        }
        if (t = t.sibling, t !== null) {
            Ne = t;
            return
        }
        Ne = t = e
    } while (t !== null);
    Ve === 0 && (Ve = 5)
}

function eo(e, t, n) {
    var r = he,
        o = Yt.transition;
    try {
        Yt.transition = null, he = 1, w3(e, t, n, r)
    } finally {
        Yt.transition = o, he = r
    }
    return null
}

function w3(e, t, n, r) {
    do ii(); while (xr !== null);
    if (se & 6) throw Error(L(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(L(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (tC(e, i), e === Ge && (Ne = Ge = null, Ze = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || nl || (nl = !0, SS(Xl, function() {
            return ii(), null
        })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
        i = Yt.transition, Yt.transition = null;
        var a = he;
        he = 1;
        var s = se;
        se |= 4, Tm.current = null, h3(e, n), dS(n, e), jC(Pf), Ql = !!Tf, Pf = Tf = null, e.current = n, g3(n), G5(), se = s, he = a, Yt.transition = i
    } else e.current = n;
    if (nl && (nl = !1, xr = e, pu = o), i = e.pendingLanes, i === 0 && (Pr = null), X5(n.stateNode), wt(e, Ie()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
    if (fu) throw fu = !1, e = qf, qf = null, e;
    return pu & 1 && e.tag !== 0 && ii(), i = e.pendingLanes, i & 1 ? e === Xf ? va++ : (va = 0, Xf = e) : va = 0, jr(), null
}

function ii() {
    if (xr !== null) {
        var e = Y1(pu),
            t = Yt.transition,
            n = he;
        try {
            if (Yt.transition = null, he = 16 > e ? 16 : e, xr === null) var r = !1;
            else {
                if (e = xr, xr = null, pu = 0, se & 6) throw Error(L(331));
                var o = se;
                for (se |= 4, F = e.current; F !== null;) {
                    var i = F,
                        a = i.child;
                    if (F.flags & 16) {
                        var s = i.deletions;
                        if (s !== null) {
                            for (var l = 0; l < s.length; l++) {
                                var u = s[l];
                                for (F = u; F !== null;) {
                                    var c = F;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ga(8, c, i)
                                    }
                                    var d = c.child;
                                    if (d !== null) d.return = c, F = d;
                                    else
                                        for (; F !== null;) {
                                            c = F;
                                            var f = c.sibling,
                                                p = c.return;
                                            if (lS(c), c === u) {
                                                F = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = p, F = f;
                                                break
                                            }
                                            F = p
                                        }
                                }
                            }
                            var m = i.alternate;
                            if (m !== null) {
                                var y = m.child;
                                if (y !== null) {
                                    m.child = null;
                                    do {
                                        var x = y.sibling;
                                        y.sibling = null, y = x
                                    } while (y !== null)
                                }
                            }
                            F = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && a !== null) a.return = i, F = a;
                    else e: for (; F !== null;) {
                        if (i = F, i.flags & 2048) switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                ga(9, i, i.return)
                        }
                        var g = i.sibling;
                        if (g !== null) {
                            g.return = i.return, F = g;
                            break e
                        }
                        F = i.return
                    }
                }
                var h = e.current;
                for (F = h; F !== null;) {
                    a = F;
                    var v = a.child;
                    if (a.subtreeFlags & 2064 && v !== null) v.return = a, F = v;
                    else e: for (a = h; F !== null;) {
                        if (s = F, s.flags & 2048) try {
                            switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Uu(9, s)
                            }
                        } catch (E) {
                            Le(s, s.return, E)
                        }
                        if (s === a) {
                            F = null;
                            break e
                        }
                        var w = s.sibling;
                        if (w !== null) {
                            w.return = s.return, F = w;
                            break e
                        }
                        F = s.return
                    }
                }
                if (se = o, jr(), Pn && typeof Pn.onPostCommitFiberRoot == "function") try {
                    Pn.onPostCommitFiberRoot(Du, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            he = n, Yt.transition = t
        }
    }
    return !1
}

function C0(e, t, n) {
    t = yi(n, t), t = Qb(e, t, 1), e = Tr(e, t, 1), t = dt(), e !== null && (hs(e, 1, t), wt(e, t))
}

function Le(e, t, n) {
    if (e.tag === 3) C0(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                C0(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Pr === null || !Pr.has(r))) {
                    e = yi(n, e), e = Zb(t, e, 1), t = Tr(t, e, 1), e = dt(), t !== null && (hs(t, 1, e), wt(t, e));
                    break
                }
            }
            t = t.return
        }
}

function x3(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = dt(), e.pingedLanes |= e.suspendedLanes & n, Ge === e && (Ze & n) === n && (Ve === 4 || Ve === 3 && (Ze & 130023424) === Ze && 500 > Ie() - Am ? co(e, 0) : Pm |= n), wt(e, t)
}

function vS(e, t) {
    t === 0 && (e.mode & 1 ? (t = Gs, Gs <<= 1, !(Gs & 130023424) && (Gs = 4194304)) : t = 1);
    var n = dt();
    e = er(e, t), e !== null && (hs(e, t, n), wt(e, n))
}

function k3(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), vS(e, n)
}

function C3(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(L(314))
    }
    r !== null && r.delete(t), vS(e, n)
}
var bS;
bS = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || bt.current) vt = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return vt = !1, d3(e, t, n);
            vt = !!(e.flags & 131072)
        }
    else vt = !1, Pe && t.flags & 1048576 && xb(t, ou, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            _l(e, t), e = t.pendingProps;
            var o = pi(t, st.current);
            oi(t, n), o = xm(null, t, r, e, o, n);
            var i = km();
            return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, St(r) ? (i = !0, nu(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, ym(t), o.updater = Hu, t.stateNode = o, o._reactInternals = t, Df(t, r, e, n), t = Bf(null, t, r, !0, i, n)) : (t.tag = 0, Pe && i && cm(t), ut(null, t, o, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (_l(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = E3(r), e = cn(r, e), o) {
                    case 0:
                        t = Nf(null, t, r, e, n);
                        break e;
                    case 1:
                        t = m0(null, t, r, e, n);
                        break e;
                    case 11:
                        t = f0(null, t, r, e, n);
                        break e;
                    case 14:
                        t = p0(null, t, r, cn(r.type, e), n);
                        break e
                }
                throw Error(L(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : cn(r, o), Nf(e, t, r, o, n);
        case 1:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : cn(r, o), m0(e, t, r, o, n);
        case 3:
            e: {
                if (nS(t), e === null) throw Error(L(387));r = t.pendingProps,
                i = t.memoizedState,
                o = i.element,
                Eb(e, t),
                su(t, r, null, n);
                var a = t.memoizedState;
                if (r = a.element, i.isDehydrated)
                    if (i = {
                            element: r,
                            isDehydrated: !1,
                            cache: a.cache,
                            pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                            transitions: a.transitions
                        }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                        o = yi(Error(L(423)), t), t = h0(e, t, r, n, o);
                        break e
                    } else if (r !== o) {
                    o = yi(Error(L(424)), t), t = h0(e, t, r, n, o);
                    break e
                } else
                    for (At = Er(t.stateNode.containerInfo.firstChild), Mt = t, Pe = !0, fn = null, n = Rb(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (mi(), r === o) {
                        t = tr(e, t, n);
                        break e
                    }
                    ut(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Mb(t), e === null && $f(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, Af(r, o) ? a = null : i !== null && Af(r, i) && (t.flags |= 32), tS(e, t), ut(e, t, a, n), t.child;
        case 6:
            return e === null && $f(t), null;
        case 13:
            return rS(e, t, n);
        case 4:
            return vm(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = hi(t, null, r, n) : ut(e, t, r, n), t.child;
        case 11:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : cn(r, o), f0(e, t, r, o, n);
        case 7:
            return ut(e, t, t.pendingProps, n), t.child;
        case 8:
            return ut(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return ut(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, be(iu, r._currentValue), r._currentValue = a, i !== null)
                    if (gn(i.value, a)) {
                        if (i.children === o.children && !bt.current) {
                            t = tr(e, t, n);
                            break e
                        }
                    } else
                        for (i = t.child, i !== null && (i.return = t); i !== null;) {
                            var s = i.dependencies;
                            if (s !== null) {
                                a = i.child;
                                for (var l = s.firstContext; l !== null;) {
                                    if (l.context === r) {
                                        if (i.tag === 1) {
                                            l = Gn(-1, n & -n), l.tag = 2;
                                            var u = i.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l
                                            }
                                        }
                                        i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), Lf(i.return, n, t), s.lanes |= n;
                                        break
                                    }
                                    l = l.next
                                }
                            } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (a = i.return, a === null) throw Error(L(341));
                                a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), Lf(a, n, t), a = i.sibling
                            } else a = i.child;
                            if (a !== null) a.return = i;
                            else
                                for (a = i; a !== null;) {
                                    if (a === t) {
                                        a = null;
                                        break
                                    }
                                    if (i = a.sibling, i !== null) {
                                        i.return = a.return, a = i;
                                        break
                                    }
                                    a = a.return
                                }
                            i = a
                        }
                ut(e, t, o.children, n),
                t = t.child
            }
            return t;
        case 9:
            return o = t.type, r = t.pendingProps.children, oi(t, n), o = Jt(o), r = r(o), t.flags |= 1, ut(e, t, r, n), t.child;
        case 14:
            return r = t.type, o = cn(r, t.pendingProps), o = cn(r.type, o), p0(e, t, r, o, n);
        case 15:
            return Jb(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : cn(r, o), _l(e, t), t.tag = 1, St(r) ? (e = !0, nu(t)) : e = !1, oi(t, n), Pb(t, r, o), Df(t, r, o, n), Bf(null, t, r, !0, e, n);
        case 19:
            return oS(e, t, n);
        case 22:
            return eS(e, t, n)
    }
    throw Error(L(156, t.tag))
};

function SS(e, t) {
    return G1(e, t)
}

function _3(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function qt(e, t, n, r) {
    return new _3(e, t, n, r)
}

function zm(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function E3(e) {
    if (typeof e == "function") return zm(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Zp) return 11;
        if (e === Jp) return 14
    }
    return 2
}

function Rr(e, t) {
    var n = e.alternate;
    return n === null ? (n = qt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Pl(e, t, n, r, o, i) {
    var a = 2;
    if (r = e, typeof e == "function") zm(e) && (a = 1);
    else if (typeof e == "string") a = 5;
    else e: switch (e) {
        case Bo:
            return fo(n.children, o, i, t);
        case Qp:
            a = 8, o |= 8;
            break;
        case sf:
            return e = qt(12, n, t, o | 2), e.elementType = sf, e.lanes = i, e;
        case lf:
            return e = qt(13, n, t, o), e.elementType = lf, e.lanes = i, e;
        case uf:
            return e = qt(19, n, t, o), e.elementType = uf, e.lanes = i, e;
        case A1:
            return Ku(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case T1:
                    a = 10;
                    break e;
                case P1:
                    a = 9;
                    break e;
                case Zp:
                    a = 11;
                    break e;
                case Jp:
                    a = 14;
                    break e;
                case hr:
                    a = 16, r = null;
                    break e
            }
            throw Error(L(130, e == null ? e : typeof e, ""))
    }
    return t = qt(a, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t
}

function fo(e, t, n, r) {
    return e = qt(7, e, r, t), e.lanes = n, e
}

function Ku(e, t, n, r) {
    return e = qt(22, e, r, t), e.elementType = A1, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function bd(e, t, n) {
    return e = qt(6, e, null, t), e.lanes = n, e
}

function Sd(e, t, n) {
    return t = qt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function T3(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ed(0), this.expirationTimes = ed(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ed(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function $m(e, t, n, r, o, i, a, s, l) {
    return e = new T3(e, t, n, s, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = qt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, ym(i), e
}

function P3(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: No,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function wS(e) {
    if (!e) return Lr;
    e = e._reactInternals;
    e: {
        if (_o(e) !== e || e.tag !== 1) throw Error(L(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (St(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(L(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (St(n)) return Sb(e, n, t)
    }
    return t
}

function xS(e, t, n, r, o, i, a, s, l) {
    return e = $m(n, r, !0, e, o, i, a, s, l), e.context = wS(null), n = e.current, r = dt(), o = Ar(n), i = Gn(r, o), i.callback = t ? ? null, Tr(n, i, o), e.current.lanes = o, hs(e, o, r), wt(e, r), e
}

function qu(e, t, n, r) {
    var o = t.current,
        i = dt(),
        a = Ar(o);
    return n = wS(n), t.context === null ? t.context = n : t.pendingContext = n, t = Gn(i, a), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Tr(o, t, a), e !== null && (hn(e, o, a, i), xl(e, o, a)), a
}

function hu(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function _0(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Lm(e, t) {
    _0(e, t), (e = e.alternate) && _0(e, t)
}

function A3() {
    return null
}
var kS = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Im(e) {
    this._internalRoot = e
}
Xu.prototype.render = Im.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(L(409));
    qu(e, t, null, null)
};
Xu.prototype.unmount = Im.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        wo(function() {
            qu(null, e, null, null)
        }), t[Jn] = null
    }
};

function Xu(e) {
    this._internalRoot = e
}
Xu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = J1();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < vr.length && t !== 0 && t < vr[n].priority; n++);
        vr.splice(n, 0, e), n === 0 && tb(e)
    }
};

function Dm(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Yu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function E0() {}

function R3(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = hu(a);
                i.call(u)
            }
        }
        var a = xS(t, r, e, 0, null, !1, !1, "", E0);
        return e._reactRootContainer = a, e[Jn] = a.current, Ha(e.nodeType === 8 ? e.parentNode : e), wo(), a
    }
    for (; o = e.lastChild;) e.removeChild(o);
    if (typeof r == "function") {
        var s = r;
        r = function() {
            var u = hu(l);
            s.call(u)
        }
    }
    var l = $m(e, 0, !1, null, null, !1, !1, "", E0);
    return e._reactRootContainer = l, e[Jn] = l.current, Ha(e.nodeType === 8 ? e.parentNode : e), wo(function() {
        qu(t, l, n, r)
    }), l
}

function Qu(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var a = i;
        if (typeof o == "function") {
            var s = o;
            o = function() {
                var l = hu(a);
                s.call(l)
            }
        }
        qu(t, a, e, o)
    } else a = R3(n, t, e, o, r);
    return hu(a)
}
Q1 = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = ra(t.pendingLanes);
                n !== 0 && (nm(t, n | 1), wt(t, Ie()), !(se & 6) && (vi = Ie() + 500, jr()))
            }
            break;
        case 13:
            wo(function() {
                var r = er(e, 1);
                if (r !== null) {
                    var o = dt();
                    hn(r, e, 1, o)
                }
            }), Lm(e, 1)
    }
};
rm = function(e) {
    if (e.tag === 13) {
        var t = er(e, 134217728);
        if (t !== null) {
            var n = dt();
            hn(t, e, 134217728, n)
        }
        Lm(e, 134217728)
    }
};
Z1 = function(e) {
    if (e.tag === 13) {
        var t = Ar(e),
            n = er(e, t);
        if (n !== null) {
            var r = dt();
            hn(n, e, t, r)
        }
        Lm(e, t)
    }
};
J1 = function() {
    return he
};
eb = function(e, t) {
    var n = he;
    try {
        return he = e, t()
    } finally {
        he = n
    }
};
bf = function(e, t, n) {
    switch (t) {
        case "input":
            if (ff(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = ju(r);
                        if (!o) throw Error(L(90));
                        M1(r), ff(r, o)
                    }
                }
            }
            break;
        case "textarea":
            z1(e, n);
            break;
        case "select":
            t = n.value, t != null && ei(e, !!n.multiple, t, !1)
    }
};
B1 = Rm;
j1 = wo;
var M3 = {
        usingClientEntryPoint: !1,
        Events: [ys, Wo, ju, F1, N1, Rm]
    },
    Ki = {
        findFiberByHostInstance: io,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom"
    },
    O3 = {
        bundleType: Ki.bundleType,
        version: Ki.version,
        rendererPackageName: Ki.rendererPackageName,
        rendererConfig: Ki.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: or.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = W1(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Ki.findFiberByHostInstance || A3,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var rl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!rl.isDisabled && rl.supportsFiber) try {
        Du = rl.inject(O3), Pn = rl
    } catch {}
}
It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M3;
It.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Dm(t)) throw Error(L(200));
    return P3(e, t, null, n)
};
It.createRoot = function(e, t) {
    if (!Dm(e)) throw Error(L(299));
    var n = !1,
        r = "",
        o = kS;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = $m(e, 1, !1, null, null, n, !1, r, o), e[Jn] = t.current, Ha(e.nodeType === 8 ? e.parentNode : e), new Im(t)
};
It.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(L(188)) : (e = Object.keys(e).join(","), Error(L(268, e)));
    return e = W1(t), e = e === null ? null : e.stateNode, e
};
It.flushSync = function(e) {
    return wo(e)
};
It.hydrate = function(e, t, n) {
    if (!Yu(t)) throw Error(L(200));
    return Qu(null, e, t, !0, n)
};
It.hydrateRoot = function(e, t, n) {
    if (!Dm(e)) throw Error(L(405));
    var r = n != null && n.hydratedSources || null,
        o = !1,
        i = "",
        a = kS;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = xS(t, null, e, 1, n ? ? null, o, !1, i, a), e[Jn] = t.current, Ha(e), r)
        for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Xu(t)
};
It.render = function(e, t, n) {
    if (!Yu(t)) throw Error(L(200));
    return Qu(null, e, t, !1, n)
};
It.unmountComponentAtNode = function(e) {
    if (!Yu(e)) throw Error(L(40));
    return e._reactRootContainer ? (wo(function() {
        Qu(null, null, e, !1, function() {
            e._reactRootContainer = null, e[Jn] = null
        })
    }), !0) : !1
};
It.unstable_batchedUpdates = Rm;
It.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Yu(n)) throw Error(L(200));
    if (e == null || e._reactInternals === void 0) throw Error(L(38));
    return Qu(e, t, n, !1, r)
};
It.version = "18.2.0-next-9e3b772b8-20220608";
(function(e) {
    function t() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
        } catch (n) {
            console.error(n)
        }
    }
    t(), e.exports = It
})(A5);
var T0 = $a;
rf.createRoot = T0.createRoot, rf.hydrateRoot = T0.hydrateRoot;

function z3(e) {
    if (e.sheet) return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++)
        if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
}

function $3(e) {
    var t = document.createElement("style");
    return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t
}
var L3 = function() {
        function e(n) {
            var r = this;
            this._insertTag = function(o) {
                var i;
                r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o)
            }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null
        }
        var t = e.prototype;
        return t.hydrate = function(r) {
            r.forEach(this._insertTag)
        }, t.insert = function(r) {
            this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag($3(this));
            var o = this.tags[this.tags.length - 1];
            if (this.isSpeedy) {
                var i = z3(o);
                try {
                    i.insertRule(r, i.cssRules.length)
                } catch {}
            } else o.appendChild(document.createTextNode(r));
            this.ctr++
        }, t.flush = function() {
            this.tags.forEach(function(r) {
                return r.parentNode && r.parentNode.removeChild(r)
            }), this.tags = [], this.ctr = 0
        }, e
    }(),
    rt = "-ms-",
    gu = "-moz-",
    ce = "-webkit-",
    CS = "comm",
    Fm = "rule",
    Nm = "decl",
    I3 = "@import",
    _S = "@keyframes",
    D3 = Math.abs,
    Zu = String.fromCharCode,
    F3 = Object.assign;

function N3(e, t) {
    return Qe(e, 0) ^ 45 ? (((t << 2 ^ Qe(e, 0)) << 2 ^ Qe(e, 1)) << 2 ^ Qe(e, 2)) << 2 ^ Qe(e, 3) : 0
}

function ES(e) {
    return e.trim()
}

function B3(e, t) {
    return (e = t.exec(e)) ? e[0] : e
}

function pe(e, t, n) {
    return e.replace(t, n)
}

function Zf(e, t) {
    return e.indexOf(t)
}

function Qe(e, t) {
    return e.charCodeAt(t) | 0
}

function Za(e, t, n) {
    return e.slice(t, n)
}

function kn(e) {
    return e.length
}

function Bm(e) {
    return e.length
}

function ol(e, t) {
    return t.push(e), e
}

function j3(e, t) {
    return e.map(t).join("")
}
var Ju = 1,
    bi = 1,
    TS = 0,
    Ct = 0,
    Fe = 0,
    Oi = "";

function ec(e, t, n, r, o, i, a) {
    return {
        value: e,
        root: t,
        parent: n,
        type: r,
        props: o,
        children: i,
        line: Ju,
        column: bi,
        length: a,
        return: ""
    }
}

function qi(e, t) {
    return F3(ec("", null, null, "", null, null, 0), e, {
        length: -e.length
    }, t)
}

function V3() {
    return Fe
}

function H3() {
    return Fe = Ct > 0 ? Qe(Oi, --Ct) : 0, bi--, Fe === 10 && (bi = 1, Ju--), Fe
}

function Ot() {
    return Fe = Ct < TS ? Qe(Oi, Ct++) : 0, bi++, Fe === 10 && (bi = 1, Ju++), Fe
}

function Rn() {
    return Qe(Oi, Ct)
}

function Al() {
    return Ct
}

function bs(e, t) {
    return Za(Oi, e, t)
}

function Ja(e) {
    switch (e) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
            return 4;
        case 58:
            return 3;
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        case 41:
        case 93:
            return 1
    }
    return 0
}

function PS(e) {
    return Ju = bi = 1, TS = kn(Oi = e), Ct = 0, []
}

function AS(e) {
    return Oi = "", e
}

function Rl(e) {
    return ES(bs(Ct - 1, Jf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}

function W3(e) {
    for (;
        (Fe = Rn()) && Fe < 33;) Ot();
    return Ja(e) > 2 || Ja(Fe) > 3 ? "" : " "
}

function U3(e, t) {
    for (; --t && Ot() && !(Fe < 48 || Fe > 102 || Fe > 57 && Fe < 65 || Fe > 70 && Fe < 97););
    return bs(e, Al() + (t < 6 && Rn() == 32 && Ot() == 32))
}

function Jf(e) {
    for (; Ot();) switch (Fe) {
        case e:
            return Ct;
        case 34:
        case 39:
            e !== 34 && e !== 39 && Jf(Fe);
            break;
        case 40:
            e === 41 && Jf(e);
            break;
        case 92:
            Ot();
            break
    }
    return Ct
}

function G3(e, t) {
    for (; Ot() && e + Fe !== 47 + 10;)
        if (e + Fe === 42 + 42 && Rn() === 47) break;
    return "/*" + bs(t, Ct - 1) + "*" + Zu(e === 47 ? e : Ot())
}

function K3(e) {
    for (; !Ja(Rn());) Ot();
    return bs(e, Ct)
}

function q3(e) {
    return AS(Ml("", null, null, null, [""], e = PS(e), 0, [0], e))
}

function Ml(e, t, n, r, o, i, a, s, l) {
    for (var u = 0, c = 0, d = a, f = 0, p = 0, m = 0, y = 1, x = 1, g = 1, h = 0, v = "", w = o, E = i, P = r, T = v; x;) switch (m = h, h = Ot()) {
        case 40:
            if (m != 108 && Qe(T, d - 1) == 58) {
                Zf(T += pe(Rl(h), "&", "&\f"), "&\f") != -1 && (g = -1);
                break
            }
        case 34:
        case 39:
        case 91:
            T += Rl(h);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            T += W3(m);
            break;
        case 92:
            T += U3(Al() - 1, 7);
            continue;
        case 47:
            switch (Rn()) {
                case 42:
                case 47:
                    ol(X3(G3(Ot(), Al()), t, n), l);
                    break;
                default:
                    T += "/"
            }
            break;
        case 123 * y:
            s[u++] = kn(T) * g;
        case 125 * y:
        case 59:
        case 0:
            switch (h) {
                case 0:
                case 125:
                    x = 0;
                case 59 + c:
                    p > 0 && kn(T) - d && ol(p > 32 ? A0(T + ";", r, n, d - 1) : A0(pe(T, " ", "") + ";", r, n, d - 2), l);
                    break;
                case 59:
                    T += ";";
                default:
                    if (ol(P = P0(T, t, n, u, c, o, s, v, w = [], E = [], d), i), h === 123)
                        if (c === 0) Ml(T, t, P, P, w, i, d, s, E);
                        else switch (f === 99 && Qe(T, 3) === 110 ? 100 : f) {
                            case 100:
                            case 109:
                            case 115:
                                Ml(e, P, P, r && ol(P0(e, P, P, 0, 0, o, s, v, o, w = [], d), E), o, E, d, s, r ? w : E);
                                break;
                            default:
                                Ml(T, P, P, P, [""], E, 0, s, E)
                        }
            }
            u = c = p = 0, y = g = 1, v = T = "", d = a;
            break;
        case 58:
            d = 1 + kn(T), p = m;
        default:
            if (y < 1) {
                if (h == 123) --y;
                else if (h == 125 && y++ == 0 && H3() == 125) continue
            }
            switch (T += Zu(h), h * y) {
                case 38:
                    g = c > 0 ? 1 : (T += "\f", -1);
                    break;
                case 44:
                    s[u++] = (kn(T) - 1) * g, g = 1;
                    break;
                case 64:
                    Rn() === 45 && (T += Rl(Ot())), f = Rn(), c = d = kn(v = T += K3(Al())), h++;
                    break;
                case 45:
                    m === 45 && kn(T) == 2 && (y = 0)
            }
    }
    return i
}

function P0(e, t, n, r, o, i, a, s, l, u, c) {
    for (var d = o - 1, f = o === 0 ? i : [""], p = Bm(f), m = 0, y = 0, x = 0; m < r; ++m)
        for (var g = 0, h = Za(e, d + 1, d = D3(y = a[m])), v = e; g < p; ++g)(v = ES(y > 0 ? f[g] + " " + h : pe(h, /&\f/g, f[g]))) && (l[x++] = v);
    return ec(e, t, n, o === 0 ? Fm : s, l, u, c)
}

function X3(e, t, n) {
    return ec(e, t, n, CS, Zu(V3()), Za(e, 2, -2), 0)
}

function A0(e, t, n, r) {
    return ec(e, t, n, Nm, Za(e, 0, r), Za(e, r + 1, -1), r)
}

function ai(e, t) {
    for (var n = "", r = Bm(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
    return n
}

function Y3(e, t, n, r) {
    switch (e.type) {
        case I3:
        case Nm:
            return e.return = e.return || e.value;
        case CS:
            return "";
        case _S:
            return e.return = e.value + "{" + ai(e.children, r) + "}";
        case Fm:
            e.value = e.props.join(",")
    }
    return kn(n = ai(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
}

function Q3(e) {
    var t = Bm(e);
    return function(n, r, o, i) {
        for (var a = "", s = 0; s < t; s++) a += e[s](n, r, o, i) || "";
        return a
    }
}

function Z3(e) {
    return function(t) {
        t.root || (t = t.return) && e(t)
    }
}
var R0 = function(t) {
    var n = new WeakMap;
    return function(r) {
        if (n.has(r)) return n.get(r);
        var o = t(r);
        return n.set(r, o), o
    }
};

function RS(e) {
    var t = Object.create(null);
    return function(n) {
        return t[n] === void 0 && (t[n] = e(n)), t[n]
    }
}
var J3 = function(t, n, r) {
        for (var o = 0, i = 0; o = i, i = Rn(), o === 38 && i === 12 && (n[r] = 1), !Ja(i);) Ot();
        return bs(t, Ct)
    },
    e4 = function(t, n) {
        var r = -1,
            o = 44;
        do switch (Ja(o)) {
            case 0:
                o === 38 && Rn() === 12 && (n[r] = 1), t[r] += J3(Ct - 1, n, r);
                break;
            case 2:
                t[r] += Rl(o);
                break;
            case 4:
                if (o === 44) {
                    t[++r] = Rn() === 58 ? "&\f" : "", n[r] = t[r].length;
                    break
                }
            default:
                t[r] += Zu(o)
        }
        while (o = Ot());
        return t
    },
    t4 = function(t, n) {
        return AS(e4(PS(t), n))
    },
    M0 = new WeakMap,
    n4 = function(t) {
        if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
            for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule";)
                if (r = r.parent, !r) return;
            if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !M0.get(r)) && !o) {
                M0.set(t, !0);
                for (var i = [], a = t4(n, i), s = r.props, l = 0, u = 0; l < a.length; l++)
                    for (var c = 0; c < s.length; c++, u++) t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l]
            }
        }
    },
    r4 = function(t) {
        if (t.type === "decl") {
            var n = t.value;
            n.charCodeAt(0) === 108 && n.charCodeAt(2) === 98 && (t.return = "", t.value = "")
        }
    };

function MS(e, t) {
    switch (N3(e, t)) {
        case 5103:
            return ce + "print-" + e + e;
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return ce + e + e;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return ce + e + gu + e + rt + e + e;
        case 6828:
        case 4268:
            return ce + e + rt + e + e;
        case 6165:
            return ce + e + rt + "flex-" + e + e;
        case 5187:
            return ce + e + pe(e, /(\w+).+(:[^]+)/, ce + "box-$1$2" + rt + "flex-$1$2") + e;
        case 5443:
            return ce + e + rt + "flex-item-" + pe(e, /flex-|-self/, "") + e;
        case 4675:
            return ce + e + rt + "flex-line-pack" + pe(e, /align-content|flex-|-self/, "") + e;
        case 5548:
            return ce + e + rt + pe(e, "shrink", "negative") + e;
        case 5292:
            return ce + e + rt + pe(e, "basis", "preferred-size") + e;
        case 6060:
            return ce + "box-" + pe(e, "-grow", "") + ce + e + rt + pe(e, "grow", "positive") + e;
        case 4554:
            return ce + pe(e, /([^-])(transform)/g, "$1" + ce + "$2") + e;
        case 6187:
            return pe(pe(pe(e, /(zoom-|grab)/, ce + "$1"), /(image-set)/, ce + "$1"), e, "") + e;
        case 5495:
        case 3959:
            return pe(e, /(image-set\([^]*)/, ce + "$1$`$1");
        case 4968:
            return pe(pe(e, /(.+:)(flex-)?(.*)/, ce + "box-pack:$3" + rt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ce + e + e;
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return pe(e, /(.+)-inline(.+)/, ce + "$1$2") + e;
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            if (kn(e) - 1 - t > 6) switch (Qe(e, t + 1)) {
                case 109:
                    if (Qe(e, t + 4) !== 45) break;
                case 102:
                    return pe(e, /(.+:)(.+)-([^]+)/, "$1" + ce + "$2-$3$1" + gu + (Qe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
                case 115:
                    return ~Zf(e, "stretch") ? MS(pe(e, "stretch", "fill-available"), t) + e : e
            }
            break;
        case 4949:
            if (Qe(e, t + 1) !== 115) break;
        case 6444:
            switch (Qe(e, kn(e) - 3 - (~Zf(e, "!important") && 10))) {
                case 107:
                    return pe(e, ":", ":" + ce) + e;
                case 101:
                    return pe(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ce + (Qe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ce + "$2$3$1" + rt + "$2box$3") + e
            }
            break;
        case 5936:
            switch (Qe(e, t + 11)) {
                case 114:
                    return ce + e + rt + pe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
                case 108:
                    return ce + e + rt + pe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
                case 45:
                    return ce + e + rt + pe(e, /[svh]\w+-[tblr]{2}/, "lr") + e
            }
            return ce + e + rt + e + e
    }
    return e
}
var o4 = function(t, n, r, o) {
        if (t.length > -1 && !t.return) switch (t.type) {
            case Nm:
                t.return = MS(t.value, t.length);
                break;
            case _S:
                return ai([qi(t, {
                    value: pe(t.value, "@", "@" + ce)
                })], o);
            case Fm:
                if (t.length) return j3(t.props, function(i) {
                    switch (B3(i, /(::plac\w+|:read-\w+)/)) {
                        case ":read-only":
                        case ":read-write":
                            return ai([qi(t, {
                                props: [pe(i, /:(read-\w+)/, ":" + gu + "$1")]
                            })], o);
                        case "::placeholder":
                            return ai([qi(t, {
                                props: [pe(i, /:(plac\w+)/, ":" + ce + "input-$1")]
                            }), qi(t, {
                                props: [pe(i, /:(plac\w+)/, ":" + gu + "$1")]
                            }), qi(t, {
                                props: [pe(i, /:(plac\w+)/, rt + "input-$1")]
                            })], o)
                    }
                    return ""
                })
        }
    },
    i4 = [o4],
    a4 = function(t) {
        var n = t.key;
        if (n === "css") {
            var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
            Array.prototype.forEach.call(r, function(y) {
                var x = y.getAttribute("data-emotion");
                x.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""))
            })
        }
        var o = t.stylisPlugins || i4,
            i = {},
            a, s = [];
        a = t.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + n + ' "]'), function(y) {
            for (var x = y.getAttribute("data-emotion").split(" "), g = 1; g < x.length; g++) i[x[g]] = !0;
            s.push(y)
        });
        var l, u = [n4, r4]; {
            var c, d = [Y3, Z3(function(y) {
                    c.insert(y)
                })],
                f = Q3(u.concat(o, d)),
                p = function(x) {
                    return ai(q3(x), f)
                };
            l = function(x, g, h, v) {
                c = h, p(x ? x + "{" + g.styles + "}" : g.styles), v && (m.inserted[g.name] = !0)
            }
        }
        var m = {
            key: n,
            sheet: new L3({
                key: n,
                container: a,
                nonce: t.nonce,
                speedy: t.speedy,
                prepend: t.prepend,
                insertionPoint: t.insertionPoint
            }),
            nonce: t.nonce,
            inserted: i,
            registered: {},
            insert: l
        };
        return m.sheet.hydrate(s), m
    };

function yu() {
    return yu = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, yu.apply(this, arguments)
}
var ep = {},
    s4 = {
        get exports() {
            return ep
        },
        set exports(e) {
            ep = e
        }
    },
    ye = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke = typeof Symbol == "function" && Symbol.for,
    jm = Ke ? Symbol.for("react.element") : 60103,
    Vm = Ke ? Symbol.for("react.portal") : 60106,
    tc = Ke ? Symbol.for("react.fragment") : 60107,
    nc = Ke ? Symbol.for("react.strict_mode") : 60108,
    rc = Ke ? Symbol.for("react.profiler") : 60114,
    oc = Ke ? Symbol.for("react.provider") : 60109,
    ic = Ke ? Symbol.for("react.context") : 60110,
    Hm = Ke ? Symbol.for("react.async_mode") : 60111,
    ac = Ke ? Symbol.for("react.concurrent_mode") : 60111,
    sc = Ke ? Symbol.for("react.forward_ref") : 60112,
    lc = Ke ? Symbol.for("react.suspense") : 60113,
    l4 = Ke ? Symbol.for("react.suspense_list") : 60120,
    uc = Ke ? Symbol.for("react.memo") : 60115,
    cc = Ke ? Symbol.for("react.lazy") : 60116,
    u4 = Ke ? Symbol.for("react.block") : 60121,
    c4 = Ke ? Symbol.for("react.fundamental") : 60117,
    d4 = Ke ? Symbol.for("react.responder") : 60118,
    f4 = Ke ? Symbol.for("react.scope") : 60119;

function Ft(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
            case jm:
                switch (e = e.type, e) {
                    case Hm:
                    case ac:
                    case tc:
                    case rc:
                    case nc:
                    case lc:
                        return e;
                    default:
                        switch (e = e && e.$$typeof, e) {
                            case ic:
                            case sc:
                            case cc:
                            case uc:
                            case oc:
                                return e;
                            default:
                                return t
                        }
                }
            case Vm:
                return t
        }
    }
}

function OS(e) {
    return Ft(e) === ac
}
ye.AsyncMode = Hm;
ye.ConcurrentMode = ac;
ye.ContextConsumer = ic;
ye.ContextProvider = oc;
ye.Element = jm;
ye.ForwardRef = sc;
ye.Fragment = tc;
ye.Lazy = cc;
ye.Memo = uc;
ye.Portal = Vm;
ye.Profiler = rc;
ye.StrictMode = nc;
ye.Suspense = lc;
ye.isAsyncMode = function(e) {
    return OS(e) || Ft(e) === Hm
};
ye.isConcurrentMode = OS;
ye.isContextConsumer = function(e) {
    return Ft(e) === ic
};
ye.isContextProvider = function(e) {
    return Ft(e) === oc
};
ye.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === jm
};
ye.isForwardRef = function(e) {
    return Ft(e) === sc
};
ye.isFragment = function(e) {
    return Ft(e) === tc
};
ye.isLazy = function(e) {
    return Ft(e) === cc
};
ye.isMemo = function(e) {
    return Ft(e) === uc
};
ye.isPortal = function(e) {
    return Ft(e) === Vm
};
ye.isProfiler = function(e) {
    return Ft(e) === rc
};
ye.isStrictMode = function(e) {
    return Ft(e) === nc
};
ye.isSuspense = function(e) {
    return Ft(e) === lc
};
ye.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === tc || e === ac || e === rc || e === nc || e === lc || e === l4 || typeof e == "object" && e !== null && (e.$$typeof === cc || e.$$typeof === uc || e.$$typeof === oc || e.$$typeof === ic || e.$$typeof === sc || e.$$typeof === c4 || e.$$typeof === d4 || e.$$typeof === f4 || e.$$typeof === u4)
};
ye.typeOf = Ft;
(function(e) {
    e.exports = ye
})(s4);
var zS = ep,
    p4 = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
    },
    m4 = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0
    },
    $S = {};
$S[zS.ForwardRef] = p4;
$S[zS.Memo] = m4;
var h4 = !0;

function g4(e, t, n) {
    var r = "";
    return n.split(" ").forEach(function(o) {
        e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " "
    }), r
}
var LS = function(t, n, r) {
        var o = t.key + "-" + n.name;
        (r === !1 || h4 === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles)
    },
    IS = function(t, n, r) {
        LS(t, n, r);
        var o = t.key + "-" + n.name;
        if (t.inserted[n.name] === void 0) {
            var i = n;
            do t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next; while (i !== void 0)
        }
    };

function y4(e) {
    for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4) n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= n >>> 24, t = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
    switch (o) {
        case 3:
            t ^= (e.charCodeAt(r + 2) & 255) << 16;
        case 2:
            t ^= (e.charCodeAt(r + 1) & 255) << 8;
        case 1:
            t ^= e.charCodeAt(r) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16)
    }
    return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36)
}
var v4 = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1
    },
    b4 = /[A-Z]|^ms/g,
    S4 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    DS = function(t) {
        return t.charCodeAt(1) === 45
    },
    O0 = function(t) {
        return t != null && typeof t != "boolean"
    },
    wd = RS(function(e) {
        return DS(e) ? e : e.replace(b4, "-$&").toLowerCase()
    }),
    z0 = function(t, n) {
        switch (t) {
            case "animation":
            case "animationName":
                if (typeof n == "string") return n.replace(S4, function(r, o, i) {
                    return Cn = {
                        name: o,
                        styles: i,
                        next: Cn
                    }, o
                })
        }
        return v4[t] !== 1 && !DS(t) && typeof n == "number" && n !== 0 ? n + "px" : n
    };

function es(e, t, n) {
    if (n == null) return "";
    if (n.__emotion_styles !== void 0) return n;
    switch (typeof n) {
        case "boolean":
            return "";
        case "object":
            {
                if (n.anim === 1) return Cn = {
                    name: n.name,
                    styles: n.styles,
                    next: Cn
                }, n.name;
                if (n.styles !== void 0) {
                    var r = n.next;
                    if (r !== void 0)
                        for (; r !== void 0;) Cn = {
                            name: r.name,
                            styles: r.styles,
                            next: Cn
                        }, r = r.next;
                    var o = n.styles + ";";
                    return o
                }
                return w4(e, t, n)
            }
        case "function":
            {
                if (e !== void 0) {
                    var i = Cn,
                        a = n(e);
                    return Cn = i, es(e, t, a)
                }
                break
            }
    }
    if (t == null) return n;
    var s = t[n];
    return s !== void 0 ? s : n
}

function w4(e, t, n) {
    var r = "";
    if (Array.isArray(n))
        for (var o = 0; o < n.length; o++) r += es(e, t, n[o]) + ";";
    else
        for (var i in n) {
            var a = n[i];
            if (typeof a != "object") t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : O0(a) && (r += wd(i) + ":" + z0(i, a) + ";");
            else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
                for (var s = 0; s < a.length; s++) O0(a[s]) && (r += wd(i) + ":" + z0(i, a[s]) + ";");
            else {
                var l = es(e, t, a);
                switch (i) {
                    case "animation":
                    case "animationName":
                        {
                            r += wd(i) + ":" + l + ";";
                            break
                        }
                    default:
                        r += i + "{" + l + "}"
                }
            }
        }
    return r
}
var $0 = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
    Cn, Wm = function(t, n, r) {
        if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0) return t[0];
        var o = !0,
            i = "";
        Cn = void 0;
        var a = t[0];
        a == null || a.raw === void 0 ? (o = !1, i += es(r, n, a)) : i += a[0];
        for (var s = 1; s < t.length; s++) i += es(r, n, t[s]), o && (i += a[s]);
        $0.lastIndex = 0;
        for (var l = "", u;
            (u = $0.exec(i)) !== null;) l += "-" + u[1];
        var c = y4(i) + l;
        return {
            name: c,
            styles: i,
            next: Cn
        }
    },
    x4 = function(t) {
        return t()
    },
    FS = wg["useInsertionEffect"] ? wg["useInsertionEffect"] : !1,
    k4 = FS || x4,
    L0 = FS || b.useLayoutEffect,
    NS = b.createContext(typeof HTMLElement < "u" ? a4({
        key: "css"
    }) : null);
NS.Provider;
var BS = function(t) {
        return b.forwardRef(function(n, r) {
            var o = b.useContext(NS);
            return t(n, o, r)
        })
    },
    ts = b.createContext({}),
    C4 = function(t, n) {
        if (typeof n == "function") {
            var r = n(t);
            return r
        }
        return yu({}, t, n)
    },
    _4 = R0(function(e) {
        return R0(function(t) {
            return C4(e, t)
        })
    }),
    E4 = function(t) {
        var n = b.useContext(ts);
        return t.theme !== n && (n = _4(n)(t.theme)), b.createElement(ts.Provider, {
            value: n
        }, t.children)
    },
    dc = BS(function(e, t) {
        var n = e.styles,
            r = Wm([n], void 0, b.useContext(ts)),
            o = b.useRef();
        return L0(function() {
            var i = t.key + "-global",
                a = new t.sheet.constructor({
                    key: i,
                    nonce: t.sheet.nonce,
                    container: t.sheet.container,
                    speedy: t.sheet.isSpeedy
                }),
                s = !1,
                l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
            return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", i), a.hydrate([l])), o.current = [a, s],
                function() {
                    a.flush()
                }
        }, [t]), L0(function() {
            var i = o.current,
                a = i[0],
                s = i[1];
            if (s) {
                i[1] = !1;
                return
            }
            if (r.next !== void 0 && IS(t, r.next, !0), a.tags.length) {
                var l = a.tags[a.tags.length - 1].nextElementSibling;
                a.before = l, a.flush()
            }
            t.insert("", r, a, !1)
        }, [t, r.name]), null
    });

function T4() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return Wm(t)
}
var Um = function() {
        var t = T4.apply(void 0, arguments),
            n = "animation-" + t.name;
        return {
            name: n,
            styles: "@keyframes " + n + "{" + t.styles + "}",
            anim: 1,
            toString: function() {
                return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
            }
        }
    },
    jS = `
  :root {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root {
      --chakra-vh: 100dvh;
    }
  }
`,
    P4 = () => _(dc, {
        styles: jS
    }),
    A4 = () => _(dc, {
        styles: `
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        font-feature-settings: 'kern';
      }

      *,
      *::before,
      *::after {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
      }

      main {
        display: block;
      }

      hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      pre,
      code,
      kbd,
      samp {
        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      b,
      strong {
        font-weight: bold;
      }

      small {
        font-size: 80%;
      }

      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      img {
        border-style: none;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      button,
      input {
        overflow: visible;
      }

      button,
      select {
        text-transform: none;
      }

      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      progress {
        vertical-align: baseline;
      }

      textarea {
        overflow: auto;
      }

      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box;
        padding: 0;
      }

      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      input[type="number"] {
        -moz-appearance: textfield;
      }

      [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      details {
        display: block;
      }

      summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      body,
      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hr,
      figure,
      p,
      pre {
        margin: 0;
      }

      button {
        background: transparent;
        padding: 0;
      }

      fieldset {
        margin: 0;
        padding: 0;
      }

      ol,
      ul {
        margin: 0;
        padding: 0;
      }

      textarea {
        resize: vertical;
      }

      button,
      [role="button"] {
        cursor: pointer;
      }

      button::-moz-focus-inner {
        border: 0 !important;
      }

      table {
        border-collapse: collapse;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: inherit;
        font-weight: inherit;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      img,
      svg,
      video,
      canvas,
      audio,
      iframe,
      embed,
      object {
        display: block;
      }

      img,
      video {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible] :focus:not([data-focus-visible-added]):not([data-focus-visible-disabled]) {
        outline: none;
        box-shadow: none;
      }

      select::-ms-expand {
        display: none;
      }

      ${jS}
    `
    });

function R4(e, t) {
    return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`
}

function Nt(e = {}) {
    const {
        name: t,
        strict: n = !0,
        hookName: r = "useContext",
        providerName: o = "Provider",
        errorMessage: i
    } = e, a = b.createContext(void 0);
    a.displayName = t;

    function s() {
        var l;
        const u = b.useContext(a);
        if (!u && n) {
            const c = new Error(i ? ? R4(r, o));
            throw c.name = "ContextError", (l = Error.captureStackTrace) == null || l.call(Error, c, s), c
        }
        return u
    }
    return [a.Provider, s, a]
}
var [M4, O4] = Nt({
    strict: !1,
    name: "PortalManagerContext"
});

function VS(e) {
    const {
        children: t,
        zIndex: n
    } = e;
    return _(M4, {
        value: {
            zIndex: n
        },
        children: t
    })
}
VS.displayName = "PortalManager";
var Kn = Boolean(globalThis == null ? void 0 : globalThis.document) ? b.useLayoutEffect : b.useEffect,
    [HS, z4] = Nt({
        strict: !1,
        name: "PortalContext"
    }),
    Gm = "chakra-portal",
    $4 = ".chakra-portal",
    L4 = e => _("div", {
        className: "chakra-portal-zIndex",
        style: {
            position: "absolute",
            zIndex: e.zIndex,
            top: 0,
            left: 0,
            right: 0
        },
        children: e.children
    }),
    I4 = e => {
        const {
            appendToParentPortal: t,
            children: n
        } = e, [r, o] = b.useState(null), i = b.useRef(null), [, a] = b.useState({});
        b.useEffect(() => a({}), []);
        const s = z4(),
            l = O4();
        Kn(() => {
            if (!r) return;
            const c = r.ownerDocument,
                d = t ? s ? ? c.body : c.body;
            if (!d) return;
            i.current = c.createElement("div"), i.current.className = Gm, d.appendChild(i.current), a({});
            const f = i.current;
            return () => {
                d.contains(f) && d.removeChild(f)
            }
        }, [r]);
        const u = l != null && l.zIndex ? _(L4, {
            zIndex: l == null ? void 0 : l.zIndex,
            children: n
        }) : n;
        return i.current ? $a.createPortal(_(HS, {
            value: i.current,
            children: u
        }), i.current) : _("span", {
            ref: c => {
                c && o(c)
            }
        })
    },
    D4 = e => {
        const {
            children: t,
            containerRef: n,
            appendToParentPortal: r
        } = e, o = n.current, i = o ? ? (typeof window < "u" ? document.body : void 0), a = b.useMemo(() => {
            const l = o == null ? void 0 : o.ownerDocument.createElement("div");
            return l && (l.className = Gm), l
        }, [o]), [, s] = b.useState({});
        return Kn(() => s({}), []), Kn(() => {
            if (!(!a || !i)) return i.appendChild(a), () => {
                i.removeChild(a)
            }
        }, [a, i]), i && a ? $a.createPortal(_(HS, {
            value: r ? a : null,
            children: t
        }), a) : null
    };

function fc(e) {
    const t = {
            appendToParentPortal: !0,
            ...e
        },
        {
            containerRef: n,
            ...r
        } = t;
    return n ? _(D4, {
        containerRef: n,
        ...r
    }) : _(I4, { ...r
    })
}
fc.className = Gm;
fc.selector = $4;
fc.displayName = "Portal";

function Eo() {
    const e = b.useContext(ts);
    if (!e) throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");
    return e
}
var Km = b.createContext({});
Km.displayName = "ColorModeContext";

function pc() {
    const e = b.useContext(Km);
    if (e === void 0) throw new Error("useColorMode must be used within a ColorModeProvider");
    return e
}
var il = {
    light: "chakra-ui-light",
    dark: "chakra-ui-dark"
};

function F4(e = {}) {
    const {
        preventTransition: t = !0
    } = e, n = {
        setDataset: r => {
            const o = t ? n.preventTransition() : void 0;
            document.documentElement.dataset.theme = r, document.documentElement.style.colorScheme = r, o == null || o()
        },
        setClassName(r) {
            document.body.classList.add(r ? il.dark : il.light), document.body.classList.remove(r ? il.light : il.dark)
        },
        query() {
            return window.matchMedia("(prefers-color-scheme: dark)")
        },
        getSystemTheme(r) {
            var o;
            return ((o = n.query().matches) != null ? o : r === "dark") ? "dark" : "light"
        },
        addListener(r) {
            const o = n.query(),
                i = a => {
                    r(a.matches ? "dark" : "light")
                };
            return typeof o.addListener == "function" ? o.addListener(i) : o.addEventListener("change", i), () => {
                typeof o.removeListener == "function" ? o.removeListener(i) : o.removeEventListener("change", i)
            }
        },
        preventTransition() {
            const r = document.createElement("style");
            return r.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(r), () => {
                window.getComputedStyle(document.body), requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        document.head.removeChild(r)
                    })
                })
            }
        }
    };
    return n
}
var N4 = "chakra-ui-color-mode";

function B4(e) {
    return {
        ssr: !1,
        type: "localStorage",
        get(t) {
            if (!(globalThis != null && globalThis.document)) return t;
            let n;
            try {
                n = localStorage.getItem(e) || t
            } catch {}
            return n || t
        },
        set(t) {
            try {
                localStorage.setItem(e, t)
            } catch {}
        }
    }
}
var j4 = B4(N4),
    I0 = () => {};

function D0(e, t) {
    return e.type === "cookie" && e.ssr ? e.get(t) : t
}

function WS(e) {
    const {
        value: t,
        children: n,
        options: {
            useSystemColorMode: r,
            initialColorMode: o,
            disableTransitionOnChange: i
        } = {},
        colorModeManager: a = j4
    } = e, s = o === "dark" ? "dark" : "light", [l, u] = b.useState(() => D0(a, s)), [c, d] = b.useState(() => D0(a)), {
        getSystemTheme: f,
        setClassName: p,
        setDataset: m,
        addListener: y
    } = b.useMemo(() => F4({
        preventTransition: i
    }), [i]), x = o === "system" && !l ? c : l, g = b.useCallback(w => {
        const E = w === "system" ? f() : w;
        u(E), p(E === "dark"), m(E), a.set(E)
    }, [a, f, p, m]);
    Kn(() => {
        o === "system" && d(f())
    }, []), b.useEffect(() => {
        const w = a.get();
        if (w) {
            g(w);
            return
        }
        if (o === "system") {
            g("system");
            return
        }
        g(s)
    }, [a, s, o, g]);
    const h = b.useCallback(() => {
        g(x === "dark" ? "light" : "dark")
    }, [x, g]);
    b.useEffect(() => {
        if (r) return y(g)
    }, [r, y, g]);
    const v = b.useMemo(() => ({
        colorMode: t ? ? x,
        toggleColorMode: t ? I0 : h,
        setColorMode: t ? I0 : g,
        forced: t !== void 0
    }), [x, h, g, t]);
    return _(Km.Provider, {
        value: v,
        children: n
    })
}
WS.displayName = "ColorModeProvider";
var V4 = new Set(["dark", "light", "system"]);

function H4(e) {
    let t = e;
    return V4.has(t) || (t = "light"), t
}

function W4(e = {}) {
    const {
        initialColorMode: t = "light",
        type: n = "localStorage",
        storageKey: r = "chakra-ui-color-mode"
    } = e, o = H4(t), i = n === "cookie", a = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${o}",r="${r}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `, s = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${o}",e="${r}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `;
    return `!${i?a:s}`.trim()
}

function U4(e = {}) {
    const {
        nonce: t
    } = e;
    return _("script", {
        id: "chakra-script",
        nonce: t,
        dangerouslySetInnerHTML: {
            __html: W4(e)
        }
    })
}

function G4() {
    const e = pc(),
        t = Eo();
    return { ...e,
        theme: t
    }
}

function K4(e, t, n) {
    var r, o;
    if (t == null) return t;
    const i = a => {
        var s, l;
        return (l = (s = e.__breakpoints) == null ? void 0 : s.asArray) == null ? void 0 : l[a]
    };
    return (o = (r = i(t)) != null ? r : i(n)) != null ? o : n
}

function q4(e, t, n) {
    var r, o;
    if (t == null) return t;
    const i = a => {
        var s, l;
        return (l = (s = e.__cssMap) == null ? void 0 : s[a]) == null ? void 0 : l.value
    };
    return (o = (r = i(t)) != null ? r : i(n)) != null ? o : n
}

function X4(e, t, n) {
    const r = Eo();
    return US(e, t, n)(r)
}

function US(e, t, n) {
    const r = Array.isArray(t) ? t : [t],
        o = Array.isArray(n) ? n : [n];
    return i => {
        const a = o.filter(Boolean),
            s = r.map((l, u) => {
                var c, d;
                if (e === "breakpoints") return K4(i, l, (c = a[u]) != null ? c : l);
                const f = `${e}.${l}`;
                return q4(i, f, (d = a[u]) != null ? d : l)
            });
        return Array.isArray(t) ? s : s[0]
    }
}
var ge = (...e) => e.filter(Boolean).join(" ");

function it(e) {
    const t = typeof e;
    return e != null && (t === "object" || t === "function") && !Array.isArray(e)
}

function Hn(e, ...t) {
    return Y4(e) ? e(...t) : e
}
var Y4 = e => typeof e == "function",
    xe = e => e ? "" : void 0,
    xd = e => e ? !0 : void 0;

function Ye(...e) {
    return function(n) {
        e.some(r => (r == null || r(n), n == null ? void 0 : n.defaultPrevented))
    }
}

function Q4(...e) {
    return function(n) {
        e.forEach(r => {
            r == null || r(n)
        })
    }
}
var vu = {},
    Z4 = {
        get exports() {
            return vu
        },
        set exports(e) {
            vu = e
        }
    };
(function(e, t) {
    var n = 200,
        r = "__lodash_hash_undefined__",
        o = 800,
        i = 16,
        a = 9007199254740991,
        s = "[object Arguments]",
        l = "[object Array]",
        u = "[object AsyncFunction]",
        c = "[object Boolean]",
        d = "[object Date]",
        f = "[object Error]",
        p = "[object Function]",
        m = "[object GeneratorFunction]",
        y = "[object Map]",
        x = "[object Number]",
        g = "[object Null]",
        h = "[object Object]",
        v = "[object Proxy]",
        w = "[object RegExp]",
        E = "[object Set]",
        P = "[object String]",
        T = "[object Undefined]",
        R = "[object WeakMap]",
        I = "[object ArrayBuffer]",
        M = "[object DataView]",
        B = "[object Float32Array]",
        Y = "[object Float64Array]",
        K = "[object Int8Array]",
        ee = "[object Int16Array]",
        Q = "[object Int32Array]",
        W = "[object Uint8Array]",
        $ = "[object Uint8ClampedArray]",
        z = "[object Uint16Array]",
        N = "[object Uint32Array]",
        H = /[\\^$.*+?()[\]{}|]/g,
        le = /^\[object .+?Constructor\]$/,
        oe = /^(?:0|[1-9]\d*)$/,
        j = {};
    j[B] = j[Y] = j[K] = j[ee] = j[Q] = j[W] = j[$] = j[z] = j[N] = !0, j[s] = j[l] = j[I] = j[c] = j[M] = j[d] = j[f] = j[p] = j[y] = j[x] = j[h] = j[w] = j[E] = j[P] = j[R] = !1;
    var q = typeof Bs == "object" && Bs && Bs.Object === Object && Bs,
        ze = typeof self == "object" && self && self.Object === Object && self,
        _e = q || ze || Function("return this")(),
        et = t && !t.nodeType && t,
        Be = et && !0 && e && !e.nodeType && e,
        ar = Be && Be.exports === et,
        Gr = ar && q.process,
        sr = function() {
            try {
                var S = Be && Be.require && Be.require("util").types;
                return S || Gr && Gr.binding && Gr.binding("util")
            } catch {}
        }(),
        Ro = sr && sr.isTypedArray;

    function Li(S, k, A) {
        switch (A.length) {
            case 0:
                return S.call(k);
            case 1:
                return S.call(k, A[0]);
            case 2:
                return S.call(k, A[0], A[1]);
            case 3:
                return S.call(k, A[0], A[1], A[2])
        }
        return S.apply(k, A)
    }

    function Z(S, k) {
        for (var A = -1, D = Array(S); ++A < S;) D[A] = k(A);
        return D
    }

    function an(S) {
        return function(k) {
            return S(k)
        }
    }

    function Bt(S, k) {
        return S == null ? void 0 : S[k]
    }

    function Ln(S, k) {
        return function(A) {
            return S(k(A))
        }
    }
    var Dc = Array.prototype,
        Fc = Function.prototype,
        jt = Object.prototype,
        lr = _e["__core-js_shared__"],
        Kr = Fc.toString,
        Vt = jt.hasOwnProperty,
        Mo = function() {
            var S = /[^.]+$/.exec(lr && lr.keys && lr.keys.IE_PROTO || "");
            return S ? "Symbol(src)_1." + S : ""
        }(),
        Ii = jt.toString,
        zs = Kr.call(Object),
        $s = RegExp("^" + Kr.call(Vt).replace(H, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        qr = ar ? _e.Buffer : void 0,
        tg = _e.Symbol,
        ng = _e.Uint8Array,
        rg = qr ? qr.allocUnsafe : void 0,
        og = Ln(Object.getPrototypeOf, Object),
        ig = Object.create,
        ek = jt.propertyIsEnumerable,
        tk = Dc.splice,
        Xr = tg ? tg.toStringTag : void 0,
        Ls = function() {
            try {
                var S = jc(Object, "defineProperty");
                return S({}, "", {}), S
            } catch {}
        }(),
        nk = qr ? qr.isBuffer : void 0,
        ag = Math.max,
        rk = Date.now,
        sg = jc(_e, "Map"),
        Di = jc(Object, "create"),
        ok = function() {
            function S() {}
            return function(k) {
                if (!Qr(k)) return {};
                if (ig) return ig(k);
                S.prototype = k;
                var A = new S;
                return S.prototype = void 0, A
            }
        }();

    function Yr(S) {
        var k = -1,
            A = S == null ? 0 : S.length;
        for (this.clear(); ++k < A;) {
            var D = S[k];
            this.set(D[0], D[1])
        }
    }

    function ik() {
        this.__data__ = Di ? Di(null) : {}, this.size = 0
    }

    function ak(S) {
        var k = this.has(S) && delete this.__data__[S];
        return this.size -= k ? 1 : 0, k
    }

    function sk(S) {
        var k = this.__data__;
        if (Di) {
            var A = k[S];
            return A === r ? void 0 : A
        }
        return Vt.call(k, S) ? k[S] : void 0
    }

    function lk(S) {
        var k = this.__data__;
        return Di ? k[S] !== void 0 : Vt.call(k, S)
    }

    function uk(S, k) {
        var A = this.__data__;
        return this.size += this.has(S) ? 0 : 1, A[S] = Di && k === void 0 ? r : k, this
    }
    Yr.prototype.clear = ik, Yr.prototype.delete = ak, Yr.prototype.get = sk, Yr.prototype.has = lk, Yr.prototype.set = uk;

    function In(S) {
        var k = -1,
            A = S == null ? 0 : S.length;
        for (this.clear(); ++k < A;) {
            var D = S[k];
            this.set(D[0], D[1])
        }
    }

    function ck() {
        this.__data__ = [], this.size = 0
    }

    function dk(S) {
        var k = this.__data__,
            A = Is(k, S);
        if (A < 0) return !1;
        var D = k.length - 1;
        return A == D ? k.pop() : tk.call(k, A, 1), --this.size, !0
    }

    function fk(S) {
        var k = this.__data__,
            A = Is(k, S);
        return A < 0 ? void 0 : k[A][1]
    }

    function pk(S) {
        return Is(this.__data__, S) > -1
    }

    function mk(S, k) {
        var A = this.__data__,
            D = Is(A, S);
        return D < 0 ? (++this.size, A.push([S, k])) : A[D][1] = k, this
    }
    In.prototype.clear = ck, In.prototype.delete = dk, In.prototype.get = fk, In.prototype.has = pk, In.prototype.set = mk;

    function Oo(S) {
        var k = -1,
            A = S == null ? 0 : S.length;
        for (this.clear(); ++k < A;) {
            var D = S[k];
            this.set(D[0], D[1])
        }
    }

    function hk() {
        this.size = 0, this.__data__ = {
            hash: new Yr,
            map: new(sg || In),
            string: new Yr
        }
    }

    function gk(S) {
        var k = Fs(this, S).delete(S);
        return this.size -= k ? 1 : 0, k
    }

    function yk(S) {
        return Fs(this, S).get(S)
    }

    function vk(S) {
        return Fs(this, S).has(S)
    }

    function bk(S, k) {
        var A = Fs(this, S),
            D = A.size;
        return A.set(S, k), this.size += A.size == D ? 0 : 1, this
    }
    Oo.prototype.clear = hk, Oo.prototype.delete = gk, Oo.prototype.get = yk, Oo.prototype.has = vk, Oo.prototype.set = bk;

    function zo(S) {
        var k = this.__data__ = new In(S);
        this.size = k.size
    }

    function Sk() {
        this.__data__ = new In, this.size = 0
    }

    function wk(S) {
        var k = this.__data__,
            A = k.delete(S);
        return this.size = k.size, A
    }

    function xk(S) {
        return this.__data__.get(S)
    }

    function kk(S) {
        return this.__data__.has(S)
    }

    function Ck(S, k) {
        var A = this.__data__;
        if (A instanceof In) {
            var D = A.__data__;
            if (!sg || D.length < n - 1) return D.push([S, k]), this.size = ++A.size, this;
            A = this.__data__ = new Oo(D)
        }
        return A.set(S, k), this.size = A.size, this
    }
    zo.prototype.clear = Sk, zo.prototype.delete = wk, zo.prototype.get = xk, zo.prototype.has = kk, zo.prototype.set = Ck;

    function _k(S, k) {
        var A = Wc(S),
            D = !A && Hc(S),
            ne = !A && !D && fg(S),
            ve = !A && !D && !ne && mg(S),
            Ee = A || D || ne || ve,
            te = Ee ? Z(S.length, String) : [],
            Te = te.length;
        for (var Ht in S)(k || Vt.call(S, Ht)) && !(Ee && (Ht == "length" || ne && (Ht == "offset" || Ht == "parent") || ve && (Ht == "buffer" || Ht == "byteLength" || Ht == "byteOffset") || cg(Ht, Te))) && te.push(Ht);
        return te
    }

    function Nc(S, k, A) {
        (A !== void 0 && !Ns(S[k], A) || A === void 0 && !(k in S)) && Bc(S, k, A)
    }

    function Ek(S, k, A) {
        var D = S[k];
        (!(Vt.call(S, k) && Ns(D, A)) || A === void 0 && !(k in S)) && Bc(S, k, A)
    }

    function Is(S, k) {
        for (var A = S.length; A--;)
            if (Ns(S[A][0], k)) return A;
        return -1
    }

    function Bc(S, k, A) {
        k == "__proto__" && Ls ? Ls(S, k, {
            configurable: !0,
            enumerable: !0,
            value: A,
            writable: !0
        }) : S[k] = A
    }
    var Tk = Bk();

    function Ds(S) {
        return S == null ? S === void 0 ? T : g : Xr && Xr in Object(S) ? jk(S) : Kk(S)
    }

    function lg(S) {
        return Fi(S) && Ds(S) == s
    }

    function Pk(S) {
        if (!Qr(S) || Uk(S)) return !1;
        var k = Gc(S) ? $s : le;
        return k.test(Qk(S))
    }

    function Ak(S) {
        return Fi(S) && pg(S.length) && !!j[Ds(S)]
    }

    function Rk(S) {
        if (!Qr(S)) return Gk(S);
        var k = dg(S),
            A = [];
        for (var D in S) D == "constructor" && (k || !Vt.call(S, D)) || A.push(D);
        return A
    }

    function ug(S, k, A, D, ne) {
        S !== k && Tk(k, function(ve, Ee) {
            if (ne || (ne = new zo), Qr(ve)) Mk(S, k, Ee, A, ug, D, ne);
            else {
                var te = D ? D(Vc(S, Ee), ve, Ee + "", S, k, ne) : void 0;
                te === void 0 && (te = ve), Nc(S, Ee, te)
            }
        }, hg)
    }

    function Mk(S, k, A, D, ne, ve, Ee) {
        var te = Vc(S, A),
            Te = Vc(k, A),
            Ht = Ee.get(Te);
        if (Ht) {
            Nc(S, A, Ht);
            return
        }
        var Et = ve ? ve(te, Te, A + "", S, k, Ee) : void 0,
            Ni = Et === void 0;
        if (Ni) {
            var Kc = Wc(Te),
                qc = !Kc && fg(Te),
                yg = !Kc && !qc && mg(Te);
            Et = Te, Kc || qc || yg ? Wc(te) ? Et = te : Zk(te) ? Et = Dk(te) : qc ? (Ni = !1, Et = $k(Te, !0)) : yg ? (Ni = !1, Et = Ik(Te, !0)) : Et = [] : Jk(Te) || Hc(Te) ? (Et = te, Hc(te) ? Et = e5(te) : (!Qr(te) || Gc(te)) && (Et = Vk(Te))) : Ni = !1
        }
        Ni && (Ee.set(Te, Et), ne(Et, Te, D, ve, Ee), Ee.delete(Te)), Nc(S, A, Et)
    }

    function Ok(S, k) {
        return Xk(qk(S, k, gg), S + "")
    }
    var zk = Ls ? function(S, k) {
        return Ls(S, "toString", {
            configurable: !0,
            enumerable: !1,
            value: n5(k),
            writable: !0
        })
    } : gg;

    function $k(S, k) {
        if (k) return S.slice();
        var A = S.length,
            D = rg ? rg(A) : new S.constructor(A);
        return S.copy(D), D
    }

    function Lk(S) {
        var k = new S.constructor(S.byteLength);
        return new ng(k).set(new ng(S)), k
    }

    function Ik(S, k) {
        var A = k ? Lk(S.buffer) : S.buffer;
        return new S.constructor(A, S.byteOffset, S.length)
    }

    function Dk(S, k) {
        var A = -1,
            D = S.length;
        for (k || (k = Array(D)); ++A < D;) k[A] = S[A];
        return k
    }

    function Fk(S, k, A, D) {
        var ne = !A;
        A || (A = {});
        for (var ve = -1, Ee = k.length; ++ve < Ee;) {
            var te = k[ve],
                Te = D ? D(A[te], S[te], te, A, S) : void 0;
            Te === void 0 && (Te = S[te]), ne ? Bc(A, te, Te) : Ek(A, te, Te)
        }
        return A
    }

    function Nk(S) {
        return Ok(function(k, A) {
            var D = -1,
                ne = A.length,
                ve = ne > 1 ? A[ne - 1] : void 0,
                Ee = ne > 2 ? A[2] : void 0;
            for (ve = S.length > 3 && typeof ve == "function" ? (ne--, ve) : void 0, Ee && Hk(A[0], A[1], Ee) && (ve = ne < 3 ? void 0 : ve, ne = 1), k = Object(k); ++D < ne;) {
                var te = A[D];
                te && S(k, te, D, ve)
            }
            return k
        })
    }

    function Bk(S) {
        return function(k, A, D) {
            for (var ne = -1, ve = Object(k), Ee = D(k), te = Ee.length; te--;) {
                var Te = Ee[S ? te : ++ne];
                if (A(ve[Te], Te, ve) === !1) break
            }
            return k
        }
    }

    function Fs(S, k) {
        var A = S.__data__;
        return Wk(k) ? A[typeof k == "string" ? "string" : "hash"] : A.map
    }

    function jc(S, k) {
        var A = Bt(S, k);
        return Pk(A) ? A : void 0
    }

    function jk(S) {
        var k = Vt.call(S, Xr),
            A = S[Xr];
        try {
            S[Xr] = void 0;
            var D = !0
        } catch {}
        var ne = Ii.call(S);
        return D && (k ? S[Xr] = A : delete S[Xr]), ne
    }

    function Vk(S) {
        return typeof S.constructor == "function" && !dg(S) ? ok(og(S)) : {}
    }

    function cg(S, k) {
        var A = typeof S;
        return k = k ? ? a, !!k && (A == "number" || A != "symbol" && oe.test(S)) && S > -1 && S % 1 == 0 && S < k
    }

    function Hk(S, k, A) {
        if (!Qr(A)) return !1;
        var D = typeof k;
        return (D == "number" ? Uc(A) && cg(k, A.length) : D == "string" && k in A) ? Ns(A[k], S) : !1
    }

    function Wk(S) {
        var k = typeof S;
        return k == "string" || k == "number" || k == "symbol" || k == "boolean" ? S !== "__proto__" : S === null
    }

    function Uk(S) {
        return !!Mo && Mo in S
    }

    function dg(S) {
        var k = S && S.constructor,
            A = typeof k == "function" && k.prototype || jt;
        return S === A
    }

    function Gk(S) {
        var k = [];
        if (S != null)
            for (var A in Object(S)) k.push(A);
        return k
    }

    function Kk(S) {
        return Ii.call(S)
    }

    function qk(S, k, A) {
        return k = ag(k === void 0 ? S.length - 1 : k, 0),
            function() {
                for (var D = arguments, ne = -1, ve = ag(D.length - k, 0), Ee = Array(ve); ++ne < ve;) Ee[ne] = D[k + ne];
                ne = -1;
                for (var te = Array(k + 1); ++ne < k;) te[ne] = D[ne];
                return te[k] = A(Ee), Li(S, this, te)
            }
    }

    function Vc(S, k) {
        if (!(k === "constructor" && typeof S[k] == "function") && k != "__proto__") return S[k]
    }
    var Xk = Yk(zk);

    function Yk(S) {
        var k = 0,
            A = 0;
        return function() {
            var D = rk(),
                ne = i - (D - A);
            if (A = D, ne > 0) {
                if (++k >= o) return arguments[0]
            } else k = 0;
            return S.apply(void 0, arguments)
        }
    }

    function Qk(S) {
        if (S != null) {
            try {
                return Kr.call(S)
            } catch {}
            try {
                return S + ""
            } catch {}
        }
        return ""
    }

    function Ns(S, k) {
        return S === k || S !== S && k !== k
    }
    var Hc = lg(function() {
            return arguments
        }()) ? lg : function(S) {
            return Fi(S) && Vt.call(S, "callee") && !ek.call(S, "callee")
        },
        Wc = Array.isArray;

    function Uc(S) {
        return S != null && pg(S.length) && !Gc(S)
    }

    function Zk(S) {
        return Fi(S) && Uc(S)
    }
    var fg = nk || r5;

    function Gc(S) {
        if (!Qr(S)) return !1;
        var k = Ds(S);
        return k == p || k == m || k == u || k == v
    }

    function pg(S) {
        return typeof S == "number" && S > -1 && S % 1 == 0 && S <= a
    }

    function Qr(S) {
        var k = typeof S;
        return S != null && (k == "object" || k == "function")
    }

    function Fi(S) {
        return S != null && typeof S == "object"
    }

    function Jk(S) {
        if (!Fi(S) || Ds(S) != h) return !1;
        var k = og(S);
        if (k === null) return !0;
        var A = Vt.call(k, "constructor") && k.constructor;
        return typeof A == "function" && A instanceof A && Kr.call(A) == zs
    }
    var mg = Ro ? an(Ro) : Ak;

    function e5(S) {
        return Fk(S, hg(S))
    }

    function hg(S) {
        return Uc(S) ? _k(S, !0) : Rk(S)
    }
    var t5 = Nk(function(S, k, A, D) {
        ug(S, k, A, D)
    });

    function n5(S) {
        return function() {
            return S
        }
    }

    function gg(S) {
        return S
    }

    function r5() {
        return !1
    }
    e.exports = t5
})(Z4, vu);
const Xt = vu;
var J4 = e => /!(important)?$/.test(e),
    F0 = e => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e,
    e_ = (e, t) => n => {
        const r = String(t),
            o = J4(r),
            i = F0(r),
            a = e ? `${e}.${i}` : i;
        let s = it(n.__cssMap) && a in n.__cssMap ? n.__cssMap[a].varRef : t;
        return s = F0(s), o ? `${s} !important` : s
    };

function qm(e) {
    const {
        scale: t,
        transform: n,
        compose: r
    } = e;
    return (i, a) => {
        var s;
        const l = e_(t, i)(a);
        let u = (s = n == null ? void 0 : n(l, a)) != null ? s : l;
        return r && (u = r(u, a)), u
    }
}
var al = (...e) => t => e.reduce((n, r) => r(n), t);

function ln(e, t) {
    return n => {
        const r = {
            property: n,
            scale: e
        };
        return r.transform = qm({
            scale: e,
            transform: t
        }), r
    }
}
var t_ = ({
    rtl: e,
    ltr: t
}) => n => n.direction === "rtl" ? e : t;

function n_(e) {
    const {
        property: t,
        scale: n,
        transform: r
    } = e;
    return {
        scale: n,
        property: t_(t),
        transform: n ? qm({
            scale: n,
            compose: r
        }) : r
    }
}
var GS = ["rotate(var(--chakra-rotate, 0))", "scaleX(var(--chakra-scale-x, 1))", "scaleY(var(--chakra-scale-y, 1))", "skewX(var(--chakra-skew-x, 0))", "skewY(var(--chakra-skew-y, 0))"];

function r_() {
    return ["translateX(var(--chakra-translate-x, 0))", "translateY(var(--chakra-translate-y, 0))", ...GS].join(" ")
}

function o_() {
    return ["translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)", ...GS].join(" ")
}
var i_ = {
        "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
        filter: ["var(--chakra-blur)", "var(--chakra-brightness)", "var(--chakra-contrast)", "var(--chakra-grayscale)", "var(--chakra-hue-rotate)", "var(--chakra-invert)", "var(--chakra-saturate)", "var(--chakra-sepia)", "var(--chakra-drop-shadow)"].join(" ")
    },
    a_ = {
        backdropFilter: ["var(--chakra-backdrop-blur)", "var(--chakra-backdrop-brightness)", "var(--chakra-backdrop-contrast)", "var(--chakra-backdrop-grayscale)", "var(--chakra-backdrop-hue-rotate)", "var(--chakra-backdrop-invert)", "var(--chakra-backdrop-opacity)", "var(--chakra-backdrop-saturate)", "var(--chakra-backdrop-sepia)"].join(" "),
        "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
    };

function s_(e) {
    return {
        "--chakra-ring-offset-shadow": "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
        "--chakra-ring-shadow": "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
        "--chakra-ring-width": e,
        boxShadow: ["var(--chakra-ring-offset-shadow)", "var(--chakra-ring-shadow)", "var(--chakra-shadow, 0 0 #0000)"].join(", ")
    }
}
var l_ = {
        "row-reverse": {
            space: "--chakra-space-x-reverse",
            divide: "--chakra-divide-x-reverse"
        },
        "column-reverse": {
            space: "--chakra-space-y-reverse",
            divide: "--chakra-divide-y-reverse"
        }
    },
    tp = {
        "to-t": "to top",
        "to-tr": "to top right",
        "to-r": "to right",
        "to-br": "to bottom right",
        "to-b": "to bottom",
        "to-bl": "to bottom left",
        "to-l": "to left",
        "to-tl": "to top left"
    },
    u_ = new Set(Object.values(tp)),
    KS = new Set(["none", "-moz-initial", "inherit", "initial", "revert", "unset"]),
    c_ = e => e.trim();

function d_(e, t) {
    if (e == null || KS.has(e)) return e;
    const r = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e),
        o = r == null ? void 0 : r[1],
        i = r == null ? void 0 : r[2];
    if (!o || !i) return e;
    const a = o.includes("-gradient") ? o : `${o}-gradient`,
        [s, ...l] = i.split(",").map(c_).filter(Boolean);
    if ((l == null ? void 0 : l.length) === 0) return e;
    const u = s in tp ? tp[s] : s;
    l.unshift(u);
    const c = l.map(d => {
        if (u_.has(d)) return d;
        const f = d.indexOf(" "),
            [p, m] = f !== -1 ? [d.substr(0, f), d.substr(f + 1)] : [d],
            y = qS(m) ? m : m && m.split(" "),
            x = `colors.${p}`,
            g = x in t.__cssMap ? t.__cssMap[x].varRef : p;
        return y ? [g, ...Array.isArray(y) ? y : [y]].join(" ") : g
    });
    return `${a}(${c.join(", ")})`
}
var qS = e => typeof e == "string" && e.includes("(") && e.includes(")"),
    f_ = (e, t) => d_(e, t ? ? {});

function p_(e) {
    return /^var\(--.+\)$/.test(e)
}
var m_ = e => {
        const t = parseFloat(e.toString()),
            n = e.toString().replace(String(t), "");
        return {
            unitless: !n,
            value: t,
            unit: n
        }
    },
    bn = e => t => `${e}(${t})`,
    ie = {
        filter(e) {
            return e !== "auto" ? e : i_
        },
        backdropFilter(e) {
            return e !== "auto" ? e : a_
        },
        ring(e) {
            return s_(ie.px(e))
        },
        bgClip(e) {
            return e === "text" ? {
                color: "transparent",
                backgroundClip: "text"
            } : {
                backgroundClip: e
            }
        },
        transform(e) {
            return e === "auto" ? r_() : e === "auto-gpu" ? o_() : e
        },
        vh(e) {
            return e === "$100vh" ? "var(--chakra-vh)" : e
        },
        px(e) {
            if (e == null) return e;
            const {
                unitless: t
            } = m_(e);
            return t || typeof e == "number" ? `${e}px` : e
        },
        fraction(e) {
            return typeof e != "number" || e > 1 ? e : `${e*100}%`
        },
        float(e, t) {
            const n = {
                left: "right",
                right: "left"
            };
            return t.direction === "rtl" ? n[e] : e
        },
        degree(e) {
            if (p_(e) || e == null) return e;
            const t = typeof e == "string" && !e.endsWith("deg");
            return typeof e == "number" || t ? `${e}deg` : e
        },
        gradient: f_,
        blur: bn("blur"),
        opacity: bn("opacity"),
        brightness: bn("brightness"),
        contrast: bn("contrast"),
        dropShadow: bn("drop-shadow"),
        grayscale: bn("grayscale"),
        hueRotate: bn("hue-rotate"),
        invert: bn("invert"),
        saturate: bn("saturate"),
        sepia: bn("sepia"),
        bgImage(e) {
            return e == null || qS(e) || KS.has(e) ? e : `url(${e})`
        },
        outline(e) {
            const t = String(e) === "0" || String(e) === "none";
            return e !== null && t ? {
                outline: "2px solid transparent",
                outlineOffset: "2px"
            } : {
                outline: e
            }
        },
        flexDirection(e) {
            var t;
            const {
                space: n,
                divide: r
            } = (t = l_[e]) != null ? t : {}, o = {
                flexDirection: e
            };
            return n && (o[n] = 1), r && (o[r] = 1), o
        }
    },
    C = {
        borderWidths: ln("borderWidths"),
        borderStyles: ln("borderStyles"),
        colors: ln("colors"),
        borders: ln("borders"),
        radii: ln("radii", ie.px),
        space: ln("space", al(ie.vh, ie.px)),
        spaceT: ln("space", al(ie.vh, ie.px)),
        degreeT(e) {
            return {
                property: e,
                transform: ie.degree
            }
        },
        prop(e, t, n) {
            return {
                property: e,
                scale: t,
                ...t && {
                    transform: qm({
                        scale: t,
                        transform: n
                    })
                }
            }
        },
        propT(e, t) {
            return {
                property: e,
                transform: t
            }
        },
        sizes: ln("sizes", al(ie.vh, ie.px)),
        sizesT: ln("sizes", al(ie.vh, ie.fraction)),
        shadows: ln("shadows"),
        logical: n_,
        blur: ln("blur", ie.blur)
    },
    Ol = {
        background: C.colors("background"),
        backgroundColor: C.colors("backgroundColor"),
        backgroundImage: C.propT("backgroundImage", ie.bgImage),
        backgroundSize: !0,
        backgroundPosition: !0,
        backgroundRepeat: !0,
        backgroundAttachment: !0,
        backgroundClip: {
            transform: ie.bgClip
        },
        bgSize: C.prop("backgroundSize"),
        bgPosition: C.prop("backgroundPosition"),
        bg: C.colors("background"),
        bgColor: C.colors("backgroundColor"),
        bgPos: C.prop("backgroundPosition"),
        bgRepeat: C.prop("backgroundRepeat"),
        bgAttachment: C.prop("backgroundAttachment"),
        bgGradient: C.propT("backgroundImage", ie.gradient),
        bgClip: {
            transform: ie.bgClip
        }
    };
Object.assign(Ol, {
    bgImage: Ol.backgroundImage,
    bgImg: Ol.backgroundImage
});
var ue = {
    border: C.borders("border"),
    borderWidth: C.borderWidths("borderWidth"),
    borderStyle: C.borderStyles("borderStyle"),
    borderColor: C.colors("borderColor"),
    borderRadius: C.radii("borderRadius"),
    borderTop: C.borders("borderTop"),
    borderBlockStart: C.borders("borderBlockStart"),
    borderTopLeftRadius: C.radii("borderTopLeftRadius"),
    borderStartStartRadius: C.logical({
        scale: "radii",
        property: {
            ltr: "borderTopLeftRadius",
            rtl: "borderTopRightRadius"
        }
    }),
    borderEndStartRadius: C.logical({
        scale: "radii",
        property: {
            ltr: "borderBottomLeftRadius",
            rtl: "borderBottomRightRadius"
        }
    }),
    borderTopRightRadius: C.radii("borderTopRightRadius"),
    borderStartEndRadius: C.logical({
        scale: "radii",
        property: {
            ltr: "borderTopRightRadius",
            rtl: "borderTopLeftRadius"
        }
    }),
    borderEndEndRadius: C.logical({
        scale: "radii",
        property: {
            ltr: "borderBottomRightRadius",
            rtl: "borderBottomLeftRadius"
        }
    }),
    borderRight: C.borders("borderRight"),
    borderInlineEnd: C.borders("borderInlineEnd"),
    borderBottom: C.borders("borderBottom"),
    borderBlockEnd: C.borders("borderBlockEnd"),
    borderBottomLeftRadius: C.radii("borderBottomLeftRadius"),
    borderBottomRightRadius: C.radii("borderBottomRightRadius"),
    borderLeft: C.borders("borderLeft"),
    borderInlineStart: {
        property: "borderInlineStart",
        scale: "borders"
    },
    borderInlineStartRadius: C.logical({
        scale: "radii",
        property: {
            ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
            rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
        }
    }),
    borderInlineEndRadius: C.logical({
        scale: "radii",
        property: {
            ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
            rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
        }
    }),
    borderX: C.borders(["borderLeft", "borderRight"]),
    borderInline: C.borders("borderInline"),
    borderY: C.borders(["borderTop", "borderBottom"]),
    borderBlock: C.borders("borderBlock"),
    borderTopWidth: C.borderWidths("borderTopWidth"),
    borderBlockStartWidth: C.borderWidths("borderBlockStartWidth"),
    borderTopColor: C.colors("borderTopColor"),
    borderBlockStartColor: C.colors("borderBlockStartColor"),
    borderTopStyle: C.borderStyles("borderTopStyle"),
    borderBlockStartStyle: C.borderStyles("borderBlockStartStyle"),
    borderBottomWidth: C.borderWidths("borderBottomWidth"),
    borderBlockEndWidth: C.borderWidths("borderBlockEndWidth"),
    borderBottomColor: C.colors("borderBottomColor"),
    borderBlockEndColor: C.colors("borderBlockEndColor"),
    borderBottomStyle: C.borderStyles("borderBottomStyle"),
    borderBlockEndStyle: C.borderStyles("borderBlockEndStyle"),
    borderLeftWidth: C.borderWidths("borderLeftWidth"),
    borderInlineStartWidth: C.borderWidths("borderInlineStartWidth"),
    borderLeftColor: C.colors("borderLeftColor"),
    borderInlineStartColor: C.colors("borderInlineStartColor"),
    borderLeftStyle: C.borderStyles("borderLeftStyle"),
    borderInlineStartStyle: C.borderStyles("borderInlineStartStyle"),
    borderRightWidth: C.borderWidths("borderRightWidth"),
    borderInlineEndWidth: C.borderWidths("borderInlineEndWidth"),
    borderRightColor: C.colors("borderRightColor"),
    borderInlineEndColor: C.colors("borderInlineEndColor"),
    borderRightStyle: C.borderStyles("borderRightStyle"),
    borderInlineEndStyle: C.borderStyles("borderInlineEndStyle"),
    borderTopRadius: C.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
    borderBottomRadius: C.radii(["borderBottomLeftRadius", "borderBottomRightRadius"]),
    borderLeftRadius: C.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
    borderRightRadius: C.radii(["borderTopRightRadius", "borderBottomRightRadius"])
};
Object.assign(ue, {
    rounded: ue.borderRadius,
    roundedTop: ue.borderTopRadius,
    roundedTopLeft: ue.borderTopLeftRadius,
    roundedTopRight: ue.borderTopRightRadius,
    roundedTopStart: ue.borderStartStartRadius,
    roundedTopEnd: ue.borderStartEndRadius,
    roundedBottom: ue.borderBottomRadius,
    roundedBottomLeft: ue.borderBottomLeftRadius,
    roundedBottomRight: ue.borderBottomRightRadius,
    roundedBottomStart: ue.borderEndStartRadius,
    roundedBottomEnd: ue.borderEndEndRadius,
    roundedLeft: ue.borderLeftRadius,
    roundedRight: ue.borderRightRadius,
    roundedStart: ue.borderInlineStartRadius,
    roundedEnd: ue.borderInlineEndRadius,
    borderStart: ue.borderInlineStart,
    borderEnd: ue.borderInlineEnd,
    borderTopStartRadius: ue.borderStartStartRadius,
    borderTopEndRadius: ue.borderStartEndRadius,
    borderBottomStartRadius: ue.borderEndStartRadius,
    borderBottomEndRadius: ue.borderEndEndRadius,
    borderStartRadius: ue.borderInlineStartRadius,
    borderEndRadius: ue.borderInlineEndRadius,
    borderStartWidth: ue.borderInlineStartWidth,
    borderEndWidth: ue.borderInlineEndWidth,
    borderStartColor: ue.borderInlineStartColor,
    borderEndColor: ue.borderInlineEndColor,
    borderStartStyle: ue.borderInlineStartStyle,
    borderEndStyle: ue.borderInlineEndStyle
});
var h_ = {
        color: C.colors("color"),
        textColor: C.colors("color"),
        fill: C.colors("fill"),
        stroke: C.colors("stroke")
    },
    np = {
        boxShadow: C.shadows("boxShadow"),
        mixBlendMode: !0,
        blendMode: C.prop("mixBlendMode"),
        backgroundBlendMode: !0,
        bgBlendMode: C.prop("backgroundBlendMode"),
        opacity: !0
    };
Object.assign(np, {
    shadow: np.boxShadow
});
var g_ = {
        filter: {
            transform: ie.filter
        },
        blur: C.blur("--chakra-blur"),
        brightness: C.propT("--chakra-brightness", ie.brightness),
        contrast: C.propT("--chakra-contrast", ie.contrast),
        hueRotate: C.degreeT("--chakra-hue-rotate"),
        invert: C.propT("--chakra-invert", ie.invert),
        saturate: C.propT("--chakra-saturate", ie.saturate),
        dropShadow: C.propT("--chakra-drop-shadow", ie.dropShadow),
        backdropFilter: {
            transform: ie.backdropFilter
        },
        backdropBlur: C.blur("--chakra-backdrop-blur"),
        backdropBrightness: C.propT("--chakra-backdrop-brightness", ie.brightness),
        backdropContrast: C.propT("--chakra-backdrop-contrast", ie.contrast),
        backdropHueRotate: C.degreeT("--chakra-backdrop-hue-rotate"),
        backdropInvert: C.propT("--chakra-backdrop-invert", ie.invert),
        backdropSaturate: C.propT("--chakra-backdrop-saturate", ie.saturate)
    },
    bu = {
        alignItems: !0,
        alignContent: !0,
        justifyItems: !0,
        justifyContent: !0,
        flexWrap: !0,
        flexDirection: {
            transform: ie.flexDirection
        },
        flex: !0,
        flexFlow: !0,
        flexGrow: !0,
        flexShrink: !0,
        flexBasis: C.sizes("flexBasis"),
        justifySelf: !0,
        alignSelf: !0,
        order: !0,
        placeItems: !0,
        placeContent: !0,
        placeSelf: !0,
        gap: C.space("gap"),
        rowGap: C.space("rowGap"),
        columnGap: C.space("columnGap")
    };
Object.assign(bu, {
    flexDir: bu.flexDirection
});
var XS = {
        gridGap: C.space("gridGap"),
        gridColumnGap: C.space("gridColumnGap"),
        gridRowGap: C.space("gridRowGap"),
        gridColumn: !0,
        gridRow: !0,
        gridAutoFlow: !0,
        gridAutoColumns: !0,
        gridColumnStart: !0,
        gridColumnEnd: !0,
        gridRowStart: !0,
        gridRowEnd: !0,
        gridAutoRows: !0,
        gridTemplate: !0,
        gridTemplateColumns: !0,
        gridTemplateRows: !0,
        gridTemplateAreas: !0,
        gridArea: !0
    },
    y_ = {
        appearance: !0,
        cursor: !0,
        resize: !0,
        userSelect: !0,
        pointerEvents: !0,
        outline: {
            transform: ie.outline
        },
        outlineOffset: !0,
        outlineColor: C.colors("outlineColor")
    },
    Ut = {
        width: C.sizesT("width"),
        inlineSize: C.sizesT("inlineSize"),
        height: C.sizes("height"),
        blockSize: C.sizes("blockSize"),
        boxSize: C.sizes(["width", "height"]),
        minWidth: C.sizes("minWidth"),
        minInlineSize: C.sizes("minInlineSize"),
        minHeight: C.sizes("minHeight"),
        minBlockSize: C.sizes("minBlockSize"),
        maxWidth: C.sizes("maxWidth"),
        maxInlineSize: C.sizes("maxInlineSize"),
        maxHeight: C.sizes("maxHeight"),
        maxBlockSize: C.sizes("maxBlockSize"),
        overflow: !0,
        overflowX: !0,
        overflowY: !0,
        overscrollBehavior: !0,
        overscrollBehaviorX: !0,
        overscrollBehaviorY: !0,
        display: !0,
        hideFrom: {
            scale: "breakpoints",
            transform: (e, t) => {
                var n, r, o;
                return {
                    [(o = (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null ? void 0 : r.minWQuery) != null ? o : `@media screen and (min-width: ${e})`]: {
                        display: "none"
                    }
                }
            }
        },
        hideBelow: {
            scale: "breakpoints",
            transform: (e, t) => {
                var n, r, o;
                return {
                    [(o = (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null ? void 0 : r.maxWQuery) != null ? o : `@media screen and (max-width: ${e})`]: {
                        display: "none"
                    }
                }
            }
        },
        verticalAlign: !0,
        boxSizing: !0,
        boxDecorationBreak: !0,
        float: C.propT("float", ie.float),
        objectFit: !0,
        objectPosition: !0,
        visibility: !0,
        isolation: !0
    };
Object.assign(Ut, {
    w: Ut.width,
    h: Ut.height,
    minW: Ut.minWidth,
    maxW: Ut.maxWidth,
    minH: Ut.minHeight,
    maxH: Ut.maxHeight,
    overscroll: Ut.overscrollBehavior,
    overscrollX: Ut.overscrollBehaviorX,
    overscrollY: Ut.overscrollBehaviorY
});
var v_ = {
    listStyleType: !0,
    listStylePosition: !0,
    listStylePos: C.prop("listStylePosition"),
    listStyleImage: !0,
    listStyleImg: C.prop("listStyleImage")
};

function b_(e, t, n, r) {
    const o = typeof t == "string" ? t.split(".") : [t];
    for (r = 0; r < o.length && e; r += 1) e = e[o[r]];
    return e === void 0 ? n : e
}
var S_ = e => {
        const t = new WeakMap;
        return (r, o, i, a) => {
            if (typeof r > "u") return e(r, o, i);
            t.has(r) || t.set(r, new Map);
            const s = t.get(r);
            if (s.has(o)) return s.get(o);
            const l = e(r, o, i, a);
            return s.set(o, l), l
        }
    },
    w_ = S_(b_),
    x_ = {
        border: "0px",
        clip: "rect(0, 0, 0, 0)",
        width: "1px",
        height: "1px",
        margin: "-1px",
        padding: "0px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "absolute"
    },
    k_ = {
        position: "static",
        width: "auto",
        height: "auto",
        clip: "auto",
        padding: "0",
        margin: "0",
        overflow: "visible",
        whiteSpace: "normal"
    },
    kd = (e, t, n) => {
        const r = {},
            o = w_(e, t, {});
        for (const i in o) i in n && n[i] != null || (r[i] = o[i]);
        return r
    },
    C_ = {
        srOnly: {
            transform(e) {
                return e === !0 ? x_ : e === "focusable" ? k_ : {}
            }
        },
        layerStyle: {
            processResult: !0,
            transform: (e, t, n) => kd(t, `layerStyles.${e}`, n)
        },
        textStyle: {
            processResult: !0,
            transform: (e, t, n) => kd(t, `textStyles.${e}`, n)
        },
        apply: {
            processResult: !0,
            transform: (e, t, n) => kd(t, e, n)
        }
    },
    ba = {
        position: !0,
        pos: C.prop("position"),
        zIndex: C.prop("zIndex", "zIndices"),
        inset: C.spaceT("inset"),
        insetX: C.spaceT(["left", "right"]),
        insetInline: C.spaceT("insetInline"),
        insetY: C.spaceT(["top", "bottom"]),
        insetBlock: C.spaceT("insetBlock"),
        top: C.spaceT("top"),
        insetBlockStart: C.spaceT("insetBlockStart"),
        bottom: C.spaceT("bottom"),
        insetBlockEnd: C.spaceT("insetBlockEnd"),
        left: C.spaceT("left"),
        insetInlineStart: C.logical({
            scale: "space",
            property: {
                ltr: "left",
                rtl: "right"
            }
        }),
        right: C.spaceT("right"),
        insetInlineEnd: C.logical({
            scale: "space",
            property: {
                ltr: "right",
                rtl: "left"
            }
        })
    };
Object.assign(ba, {
    insetStart: ba.insetInlineStart,
    insetEnd: ba.insetInlineEnd
});
var __ = {
        ring: {
            transform: ie.ring
        },
        ringColor: C.colors("--chakra-ring-color"),
        ringOffset: C.prop("--chakra-ring-offset-width"),
        ringOffsetColor: C.colors("--chakra-ring-offset-color"),
        ringInset: C.prop("--chakra-ring-inset")
    },
    we = {
        margin: C.spaceT("margin"),
        marginTop: C.spaceT("marginTop"),
        marginBlockStart: C.spaceT("marginBlockStart"),
        marginRight: C.spaceT("marginRight"),
        marginInlineEnd: C.spaceT("marginInlineEnd"),
        marginBottom: C.spaceT("marginBottom"),
        marginBlockEnd: C.spaceT("marginBlockEnd"),
        marginLeft: C.spaceT("marginLeft"),
        marginInlineStart: C.spaceT("marginInlineStart"),
        marginX: C.spaceT(["marginInlineStart", "marginInlineEnd"]),
        marginInline: C.spaceT("marginInline"),
        marginY: C.spaceT(["marginTop", "marginBottom"]),
        marginBlock: C.spaceT("marginBlock"),
        padding: C.space("padding"),
        paddingTop: C.space("paddingTop"),
        paddingBlockStart: C.space("paddingBlockStart"),
        paddingRight: C.space("paddingRight"),
        paddingBottom: C.space("paddingBottom"),
        paddingBlockEnd: C.space("paddingBlockEnd"),
        paddingLeft: C.space("paddingLeft"),
        paddingInlineStart: C.space("paddingInlineStart"),
        paddingInlineEnd: C.space("paddingInlineEnd"),
        paddingX: C.space(["paddingInlineStart", "paddingInlineEnd"]),
        paddingInline: C.space("paddingInline"),
        paddingY: C.space(["paddingTop", "paddingBottom"]),
        paddingBlock: C.space("paddingBlock")
    };
Object.assign(we, {
    m: we.margin,
    mt: we.marginTop,
    mr: we.marginRight,
    me: we.marginInlineEnd,
    marginEnd: we.marginInlineEnd,
    mb: we.marginBottom,
    ml: we.marginLeft,
    ms: we.marginInlineStart,
    marginStart: we.marginInlineStart,
    mx: we.marginX,
    my: we.marginY,
    p: we.padding,
    pt: we.paddingTop,
    py: we.paddingY,
    px: we.paddingX,
    pb: we.paddingBottom,
    pl: we.paddingLeft,
    ps: we.paddingInlineStart,
    paddingStart: we.paddingInlineStart,
    pr: we.paddingRight,
    pe: we.paddingInlineEnd,
    paddingEnd: we.paddingInlineEnd
});
var E_ = {
        textDecorationColor: C.colors("textDecorationColor"),
        textDecoration: !0,
        textDecor: {
            property: "textDecoration"
        },
        textDecorationLine: !0,
        textDecorationStyle: !0,
        textDecorationThickness: !0,
        textUnderlineOffset: !0,
        textShadow: C.shadows("textShadow")
    },
    T_ = {
        clipPath: !0,
        transform: C.propT("transform", ie.transform),
        transformOrigin: !0,
        translateX: C.spaceT("--chakra-translate-x"),
        translateY: C.spaceT("--chakra-translate-y"),
        skewX: C.degreeT("--chakra-skew-x"),
        skewY: C.degreeT("--chakra-skew-y"),
        scaleX: C.prop("--chakra-scale-x"),
        scaleY: C.prop("--chakra-scale-y"),
        scale: C.prop(["--chakra-scale-x", "--chakra-scale-y"]),
        rotate: C.degreeT("--chakra-rotate")
    },
    P_ = {
        transition: !0,
        transitionDelay: !0,
        animation: !0,
        willChange: !0,
        transitionDuration: C.prop("transitionDuration", "transition.duration"),
        transitionProperty: C.prop("transitionProperty", "transition.property"),
        transitionTimingFunction: C.prop("transitionTimingFunction", "transition.easing")
    },
    A_ = {
        fontFamily: C.prop("fontFamily", "fonts"),
        fontSize: C.prop("fontSize", "fontSizes", ie.px),
        fontWeight: C.prop("fontWeight", "fontWeights"),
        lineHeight: C.prop("lineHeight", "lineHeights"),
        letterSpacing: C.prop("letterSpacing", "letterSpacings"),
        textAlign: !0,
        fontStyle: !0,
        textIndent: !0,
        wordBreak: !0,
        overflowWrap: !0,
        textOverflow: !0,
        textTransform: !0,
        whiteSpace: !0,
        isTruncated: {
            transform(e) {
                if (e === !0) return {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                }
            }
        },
        noOfLines: {
            static: {
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "var(--chakra-line-clamp)"
            },
            property: "--chakra-line-clamp"
        }
    },
    R_ = {
        scrollBehavior: !0,
        scrollSnapAlign: !0,
        scrollSnapStop: !0,
        scrollSnapType: !0,
        scrollMargin: C.spaceT("scrollMargin"),
        scrollMarginTop: C.spaceT("scrollMarginTop"),
        scrollMarginBottom: C.spaceT("scrollMarginBottom"),
        scrollMarginLeft: C.spaceT("scrollMarginLeft"),
        scrollMarginRight: C.spaceT("scrollMarginRight"),
        scrollMarginX: C.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
        scrollMarginY: C.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
        scrollPadding: C.spaceT("scrollPadding"),
        scrollPaddingTop: C.spaceT("scrollPaddingTop"),
        scrollPaddingBottom: C.spaceT("scrollPaddingBottom"),
        scrollPaddingLeft: C.spaceT("scrollPaddingLeft"),
        scrollPaddingRight: C.spaceT("scrollPaddingRight"),
        scrollPaddingX: C.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
        scrollPaddingY: C.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
    };

function YS(e) {
    return it(e) && e.reference ? e.reference : String(e)
}
var mc = (e, ...t) => t.map(YS).join(` ${e} `).replace(/calc/g, ""),
    N0 = (...e) => `calc(${mc("+",...e)})`,
    B0 = (...e) => `calc(${mc("-",...e)})`,
    rp = (...e) => `calc(${mc("*",...e)})`,
    j0 = (...e) => `calc(${mc("/",...e)})`,
    V0 = e => {
        const t = YS(e);
        return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : rp(t, -1)
    },
    ro = Object.assign(e => ({
        add: (...t) => ro(N0(e, ...t)),
        subtract: (...t) => ro(B0(e, ...t)),
        multiply: (...t) => ro(rp(e, ...t)),
        divide: (...t) => ro(j0(e, ...t)),
        negate: () => ro(V0(e)),
        toString: () => e.toString()
    }), {
        add: N0,
        subtract: B0,
        multiply: rp,
        divide: j0,
        negate: V0
    });

function M_(e, t = "-") {
    return e.replace(/\s+/g, t)
}

function O_(e) {
    const t = M_(e.toString());
    return $_(z_(t))
}

function z_(e) {
    return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e
}

function $_(e) {
    return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&")
}

function L_(e, t = "") {
    return [t, e].filter(Boolean).join("-")
}

function I_(e, t) {
    return `var(${e}${t?`, ${t}`:""})`
}

function D_(e, t = "") {
    return O_(`--${L_(e,t)}`)
}

function re(e, t, n) {
    const r = D_(e, n);
    return {
        variable: r,
        reference: I_(r, t)
    }
}

function F_(e) {
    const t = e == null ? 0 : e.length;
    return t ? e[t - 1] : void 0
}

function N_(e) {
    const t = parseFloat(e.toString()),
        n = e.toString().replace(String(t), "");
    return {
        unitless: !n,
        value: t,
        unit: n
    }
}

function op(e) {
    if (e == null) return e;
    const {
        unitless: t
    } = N_(e);
    return t || typeof e == "number" ? `${e}px` : e
}
var QS = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1,
    Xm = e => Object.fromEntries(Object.entries(e).sort(QS));

function H0(e) {
    const t = Xm(e);
    return Object.assign(Object.values(t), t)
}

function B_(e) {
    const t = Object.keys(Xm(e));
    return new Set(t)
}

function W0(e) {
    var t;
    if (!e) return e;
    e = (t = op(e)) != null ? t : e;
    const n = -.02;
    return typeof e == "number" ? `${e+n}` : e.replace(/(\d+\.?\d*)/u, r => `${parseFloat(r)+n}`)
}

function ia(e, t) {
    const n = ["@media screen"];
    return e && n.push("and", `(min-width: ${op(e)})`), t && n.push("and", `(max-width: ${op(t)})`), n.join(" ")
}

function j_(e) {
    var t;
    if (!e) return null;
    e.base = (t = e.base) != null ? t : "0px";
    const n = H0(e),
        r = Object.entries(e).sort(QS).map(([a, s], l, u) => {
            var c;
            let [, d] = (c = u[l + 1]) != null ? c : [];
            return d = parseFloat(d) > 0 ? W0(d) : void 0, {
                _minW: W0(s),
                breakpoint: a,
                minW: s,
                maxW: d,
                maxWQuery: ia(null, d),
                minWQuery: ia(s),
                minMaxQuery: ia(s, d)
            }
        }),
        o = B_(e),
        i = Array.from(o.values());
    return {
        keys: o,
        normalized: n,
        isResponsive(a) {
            const s = Object.keys(a);
            return s.length > 0 && s.every(l => o.has(l))
        },
        asObject: Xm(e),
        asArray: H0(e),
        details: r,
        get(a) {
            return r.find(s => s.breakpoint === a)
        },
        media: [null, ...n.map(a => ia(a)).slice(1)],
        toArrayValue(a) {
            if (!it(a)) throw new Error("toArrayValue: value must be an object");
            const s = i.map(l => {
                var u;
                return (u = a[l]) != null ? u : null
            });
            for (; F_(s) === null;) s.pop();
            return s
        },
        toObjectValue(a) {
            if (!Array.isArray(a)) throw new Error("toObjectValue: value must be an array");
            return a.reduce((s, l, u) => {
                const c = i[u];
                return c != null && l != null && (s[c] = l), s
            }, {})
        }
    }
}
var qe = {
        hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
        focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
        focusVisible: (e, t) => `${e}:focus-visible ${t}`,
        focusWithin: (e, t) => `${e}:focus-within ${t}`,
        active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
        disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
        invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
        checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
        indeterminate: (e, t) => `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
        readOnly: (e, t) => `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
        expanded: (e, t) => `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
        placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`
    },
    cr = e => ZS(t => e(t, "&"), "[role=group]", "[data-group]", ".group"),
    Dn = e => ZS(t => e(t, "~ &"), "[data-peer]", ".peer"),
    ZS = (e, ...t) => t.map(e).join(", "),
    hc = {
        _hover: "&:hover, &[data-hover]",
        _active: "&:active, &[data-active]",
        _focus: "&:focus, &[data-focus]",
        _highlighted: "&[data-highlighted]",
        _focusWithin: "&:focus-within",
        _focusVisible: "&:focus-visible, &[data-focus-visible]",
        _disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
        _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
        _before: "&::before",
        _after: "&::after",
        _empty: "&:empty",
        _expanded: "&[aria-expanded=true], &[data-expanded]",
        _checked: "&[aria-checked=true], &[data-checked]",
        _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
        _pressed: "&[aria-pressed=true], &[data-pressed]",
        _invalid: "&[aria-invalid=true], &[data-invalid]",
        _valid: "&[data-valid], &[data-state=valid]",
        _loading: "&[data-loading], &[aria-busy=true]",
        _selected: "&[aria-selected=true], &[data-selected]",
        _hidden: "&[hidden], &[data-hidden]",
        _autofill: "&:-webkit-autofill",
        _even: "&:nth-of-type(even)",
        _odd: "&:nth-of-type(odd)",
        _first: "&:first-of-type",
        _last: "&:last-of-type",
        _notFirst: "&:not(:first-of-type)",
        _notLast: "&:not(:last-of-type)",
        _visited: "&:visited",
        _activeLink: "&[aria-current=page]",
        _activeStep: "&[aria-current=step]",
        _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
        _groupHover: cr(qe.hover),
        _peerHover: Dn(qe.hover),
        _groupFocus: cr(qe.focus),
        _peerFocus: Dn(qe.focus),
        _groupFocusVisible: cr(qe.focusVisible),
        _peerFocusVisible: Dn(qe.focusVisible),
        _groupActive: cr(qe.active),
        _peerActive: Dn(qe.active),
        _groupDisabled: cr(qe.disabled),
        _peerDisabled: Dn(qe.disabled),
        _groupInvalid: cr(qe.invalid),
        _peerInvalid: Dn(qe.invalid),
        _groupChecked: cr(qe.checked),
        _peerChecked: Dn(qe.checked),
        _groupFocusWithin: cr(qe.focusWithin),
        _peerFocusWithin: Dn(qe.focusWithin),
        _peerPlaceholderShown: Dn(qe.placeholderShown),
        _placeholder: "&::placeholder",
        _placeholderShown: "&:placeholder-shown",
        _fullScreen: "&:fullscreen",
        _selection: "&::selection",
        _rtl: "[dir=rtl] &, &[dir=rtl]",
        _ltr: "[dir=ltr] &, &[dir=ltr]",
        _mediaDark: "@media (prefers-color-scheme: dark)",
        _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
        _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
        _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]"
    },
    V_ = Object.keys(hc);

function U0(e, t) {
    return re(String(e).replace(/\./g, "-"), void 0, t)
}

function H_(e, t) {
    let n = {};
    const r = {};
    for (const [o, i] of Object.entries(e)) {
        const {
            isSemantic: a,
            value: s
        } = i, {
            variable: l,
            reference: u
        } = U0(o, t == null ? void 0 : t.cssVarPrefix);
        if (!a) {
            if (o.startsWith("space")) {
                const f = o.split("."),
                    [p, ...m] = f,
                    y = `${p}.-${m.join(".")}`,
                    x = ro.negate(s),
                    g = ro.negate(u);
                r[y] = {
                    value: x,
                    var: l,
                    varRef: g
                }
            }
            n[l] = s, r[o] = {
                value: s,
                var: l,
                varRef: u
            };
            continue
        }
        const c = f => {
                const m = [String(o).split(".")[0], f].join(".");
                if (!e[m]) return f;
                const {
                    reference: x
                } = U0(m, t == null ? void 0 : t.cssVarPrefix);
                return x
            },
            d = it(s) ? s : {
                default: s
            };
        n = Xt(n, Object.entries(d).reduce((f, [p, m]) => {
            var y, x;
            const g = c(m);
            if (p === "default") return f[l] = g, f;
            const h = (x = (y = hc) == null ? void 0 : y[p]) != null ? x : p;
            return f[h] = {
                [l]: g
            }, f
        }, {})), r[o] = {
            value: u,
            var: l,
            varRef: u
        }
    }
    return {
        cssVars: n,
        cssMap: r
    }
}

function W_(e, t = []) {
    const n = Object.assign({}, e);
    for (const r of t) r in n && delete n[r];
    return n
}

function U_(e, t) {
    const n = {};
    for (const r of t) r in e && (n[r] = e[r]);
    return n
}
var G_ = ["colors", "borders", "borderWidths", "borderStyles", "fonts", "fontSizes", "fontWeights", "letterSpacings", "lineHeights", "radii", "space", "shadows", "sizes", "zIndices", "transition", "blur", "breakpoints"];

function K_(e) {
    return U_(e, G_)
}

function q_(e) {
    return e.semanticTokens
}

function X_(e) {
    const {
        __cssMap: t,
        __cssVars: n,
        __breakpoints: r,
        ...o
    } = e;
    return o
}

function Y_({
    tokens: e,
    semanticTokens: t
}) {
    var n, r;
    const o = Object.entries((n = ip(e)) != null ? n : {}).map(([a, s]) => [a, {
            isSemantic: !1,
            value: s
        }]),
        i = Object.entries((r = ip(t, 1)) != null ? r : {}).map(([a, s]) => [a, {
            isSemantic: !0,
            value: s
        }]);
    return Object.fromEntries([...o, ...i])
}

function ip(e, t = 1 / 0) {
    return !it(e) && !Array.isArray(e) || !t ? e : Object.entries(e).reduce((n, [r, o]) => (it(o) || Array.isArray(o) ? Object.entries(ip(o, t - 1)).forEach(([i, a]) => {
        n[`${r}.${i}`] = a
    }) : n[r] = o, n), {})
}

function Q_(e) {
    var t;
    const n = X_(e),
        r = K_(n),
        o = q_(n),
        i = Y_({
            tokens: r,
            semanticTokens: o
        }),
        a = (t = n.config) == null ? void 0 : t.cssVarPrefix,
        {
            cssMap: s,
            cssVars: l
        } = H_(i, {
            cssVarPrefix: a
        });
    return Object.assign(n, {
        __cssVars: { ...{
                "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
                "--chakra-ring-offset-width": "0px",
                "--chakra-ring-offset-color": "#fff",
                "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
                "--chakra-ring-offset-shadow": "0 0 #0000",
                "--chakra-ring-shadow": "0 0 #0000",
                "--chakra-space-x-reverse": "0",
                "--chakra-space-y-reverse": "0"
            },
            ...l
        },
        __cssMap: s,
        __breakpoints: j_(n.breakpoints)
    }), n
}
var Ym = Xt({}, Ol, ue, h_, bu, Ut, g_, __, y_, XS, C_, ba, np, we, R_, A_, E_, T_, v_, P_);
Object.assign({}, we, Ut, bu, XS, ba);
var Z_ = [...Object.keys(Ym), ...V_],
    J_ = { ...Ym,
        ...hc
    },
    eE = e => e in J_,
    tE = e => t => {
        if (!t.__breakpoints) return e;
        const {
            isResponsive: n,
            toArrayValue: r,
            media: o
        } = t.__breakpoints, i = {};
        for (const a in e) {
            let s = Hn(e[a], t);
            if (s == null) continue;
            if (s = it(s) && n(s) ? r(s) : s, !Array.isArray(s)) {
                i[a] = s;
                continue
            }
            const l = s.slice(0, o.length).length;
            for (let u = 0; u < l; u += 1) {
                const c = o == null ? void 0 : o[u];
                if (!c) {
                    i[a] = s[u];
                    continue
                }
                i[c] = i[c] || {}, s[u] != null && (i[c][a] = s[u])
            }
        }
        return i
    };

function nE(e) {
    const t = [];
    let n = "",
        r = !1;
    for (let o = 0; o < e.length; o++) {
        const i = e[o];
        i === "(" ? (r = !0, n += i) : i === ")" ? (r = !1, n += i) : i === "," && !r ? (t.push(n), n = "") : n += i
    }
    return n = n.trim(), n && t.push(n), t
}

function rE(e) {
    return /^var\(--.+\)$/.test(e)
}
var oE = (e, t) => e.startsWith("--") && typeof t == "string" && !rE(t),
    iE = (e, t) => {
        var n, r;
        if (t == null) return t;
        const o = l => {
                var u, c;
                return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null ? void 0 : c.varRef
            },
            i = l => {
                var u;
                return (u = o(l)) != null ? u : l
            },
            [a, s] = nE(t);
        return t = (r = (n = o(a)) != null ? n : i(s)) != null ? r : i(t), t
    };

function aE(e) {
    const {
        configs: t = {},
        pseudos: n = {},
        theme: r
    } = e, o = (i, a = !1) => {
        var s, l, u;
        const c = Hn(i, r),
            d = tE(c)(r);
        let f = {};
        for (let p in d) {
            const m = d[p];
            let y = Hn(m, r);
            p in n && (p = n[p]), oE(p, y) && (y = iE(r, y));
            let x = t[p];
            if (x === !0 && (x = {
                    property: p
                }), it(y)) {
                f[p] = (s = f[p]) != null ? s : {}, f[p] = Xt({}, f[p], o(y, !0));
                continue
            }
            let g = (u = (l = x == null ? void 0 : x.transform) == null ? void 0 : l.call(x, y, r, c)) != null ? u : y;
            g = x != null && x.processResult ? o(g, !0) : g;
            const h = Hn(x == null ? void 0 : x.property, r);
            if (!a && (x != null && x.static)) {
                const v = Hn(x.static, r);
                f = Xt({}, f, v)
            }
            if (h && Array.isArray(h)) {
                for (const v of h) f[v] = g;
                continue
            }
            if (h) {
                h === "&" && it(g) ? f = Xt({}, f, g) : f[h] = g;
                continue
            }
            if (it(g)) {
                f = Xt({}, f, g);
                continue
            }
            f[p] = g
        }
        return f
    };
    return o
}
var JS = e => t => aE({
    theme: t,
    pseudos: hc,
    configs: Ym
})(e);

function Ce(e) {
    return {
        definePartsStyle(t) {
            return t
        },
        defineMultiStyleConfig(t) {
            return {
                parts: e,
                ...t
            }
        }
    }
}

function sE(e, t) {
    if (Array.isArray(e)) return e;
    if (it(e)) return t(e);
    if (e != null) return [e]
}

function lE(e, t) {
    for (let n = t + 1; n < e.length; n++)
        if (e[n] != null) return n;
    return -1
}

function uE(e) {
    const t = e.__breakpoints;
    return function(r, o, i, a) {
        var s, l;
        if (!t) return;
        const u = {},
            c = sE(i, t.toArrayValue);
        if (!c) return u;
        const d = c.length,
            f = d === 1,
            p = !!r.parts;
        for (let m = 0; m < d; m++) {
            const y = t.details[m],
                x = t.details[lE(c, m)],
                g = ia(y.minW, x == null ? void 0 : x._minW),
                h = Hn((s = r[o]) == null ? void 0 : s[c[m]], a);
            if (h) {
                if (p) {
                    (l = r.parts) == null || l.forEach(v => {
                        Xt(u, {
                            [v]: f ? h[v] : {
                                [g]: h[v]
                            }
                        })
                    });
                    continue
                }
                if (!p) {
                    f ? Xt(u, h) : u[g] = h;
                    continue
                }
                u[g] = h
            }
        }
        return u
    }
}

function cE(e) {
    return t => {
        var n;
        const {
            variant: r,
            size: o,
            theme: i
        } = t, a = uE(i);
        return Xt({}, Hn((n = e.baseStyle) != null ? n : {}, t), a(e, "sizes", o, t), a(e, "variants", r, t))
    }
}

function ht(e) {
    return W_(e, ["styleConfig", "size", "variant", "colorScheme"])
}
var dE = ["borders", "breakpoints", "colors", "components", "config", "direction", "fonts", "fontSizes", "fontWeights", "letterSpacings", "lineHeights", "radii", "shadows", "sizes", "space", "styles", "transition", "zIndices"];

function fE(e) {
    return it(e) ? dE.every(t => Object.prototype.hasOwnProperty.call(e, t)) : !1
}
var pE = {
        hide: -1,
        auto: "auto",
        base: 0,
        docked: 10,
        dropdown: 1e3,
        sticky: 1100,
        banner: 1200,
        overlay: 1300,
        modal: 1400,
        popover: 1500,
        skipLink: 1600,
        toast: 1700,
        tooltip: 1800
    },
    mE = pE,
    hE = {
        base: "0em",
        sm: "30em",
        md: "48em",
        lg: "62em",
        xl: "80em",
        "2xl": "96em"
    },
    gE = hE,
    yE = {
        transparent: "transparent",
        current: "currentColor",
        black: "#000000",
        white: "#FFFFFF",
        whiteAlpha: {
            50: "rgba(255, 255, 255, 0.04)",
            100: "rgba(255, 255, 255, 0.06)",
            200: "rgba(255, 255, 255, 0.08)",
            300: "rgba(255, 255, 255, 0.16)",
            400: "rgba(255, 255, 255, 0.24)",
            500: "rgba(255, 255, 255, 0.36)",
            600: "rgba(255, 255, 255, 0.48)",
            700: "rgba(255, 255, 255, 0.64)",
            800: "rgba(255, 255, 255, 0.80)",
            900: "rgba(255, 255, 255, 0.92)"
        },
        blackAlpha: {
            50: "rgba(0, 0, 0, 0.04)",
            100: "rgba(0, 0, 0, 0.06)",
            200: "rgba(0, 0, 0, 0.08)",
            300: "rgba(0, 0, 0, 0.16)",
            400: "rgba(0, 0, 0, 0.24)",
            500: "rgba(0, 0, 0, 0.36)",
            600: "rgba(0, 0, 0, 0.48)",
            700: "rgba(0, 0, 0, 0.64)",
            800: "rgba(0, 0, 0, 0.80)",
            900: "rgba(0, 0, 0, 0.92)"
        },
        gray: {
            50: "#F7FAFC",
            100: "#EDF2F7",
            200: "#E2E8F0",
            300: "#CBD5E0",
            400: "#A0AEC0",
            500: "#718096",
            600: "#4A5568",
            700: "#2D3748",
            800: "#1A202C",
            900: "#171923"
        },
        red: {
            50: "#FFF5F5",
            100: "#FED7D7",
            200: "#FEB2B2",
            300: "#FC8181",
            400: "#F56565",
            500: "#E53E3E",
            600: "#C53030",
            700: "#9B2C2C",
            800: "#822727",
            900: "#63171B"
        },
        orange: {
            50: "#FFFAF0",
            100: "#FEEBC8",
            200: "#FBD38D",
            300: "#F6AD55",
            400: "#ED8936",
            500: "#DD6B20",
            600: "#C05621",
            700: "#9C4221",
            800: "#7B341E",
            900: "#652B19"
        },
        yellow: {
            50: "#FFFFF0",
            100: "#FEFCBF",
            200: "#FAF089",
            300: "#F6E05E",
            400: "#ECC94B",
            500: "#D69E2E",
            600: "#B7791F",
            700: "#975A16",
            800: "#744210",
            900: "#5F370E"
        },
        green: {
            50: "#F0FFF4",
            100: "#C6F6D5",
            200: "#9AE6B4",
            300: "#68D391",
            400: "#48BB78",
            500: "#38A169",
            600: "#2F855A",
            700: "#276749",
            800: "#22543D",
            900: "#1C4532"
        },
        teal: {
            50: "#E6FFFA",
            100: "#B2F5EA",
            200: "#81E6D9",
            300: "#4FD1C5",
            400: "#38B2AC",
            500: "#319795",
            600: "#2C7A7B",
            700: "#285E61",
            800: "#234E52",
            900: "#1D4044"
        },
        blue: {
            50: "#ebf8ff",
            100: "#bee3f8",
            200: "#90cdf4",
            300: "#63b3ed",
            400: "#4299e1",
            500: "#3182ce",
            600: "#2b6cb0",
            700: "#2c5282",
            800: "#2a4365",
            900: "#1A365D"
        },
        cyan: {
            50: "#EDFDFD",
            100: "#C4F1F9",
            200: "#9DECF9",
            300: "#76E4F7",
            400: "#0BC5EA",
            500: "#00B5D8",
            600: "#00A3C4",
            700: "#0987A0",
            800: "#086F83",
            900: "#065666"
        },
        purple: {
            50: "#FAF5FF",
            100: "#E9D8FD",
            200: "#D6BCFA",
            300: "#B794F4",
            400: "#9F7AEA",
            500: "#805AD5",
            600: "#6B46C1",
            700: "#553C9A",
            800: "#44337A",
            900: "#322659"
        },
        pink: {
            50: "#FFF5F7",
            100: "#FED7E2",
            200: "#FBB6CE",
            300: "#F687B3",
            400: "#ED64A6",
            500: "#D53F8C",
            600: "#B83280",
            700: "#97266D",
            800: "#702459",
            900: "#521B41"
        },
        linkedin: {
            50: "#E8F4F9",
            100: "#CFEDFB",
            200: "#9BDAF3",
            300: "#68C7EC",
            400: "#34B3E4",
            500: "#00A0DC",
            600: "#008CC9",
            700: "#0077B5",
            800: "#005E93",
            900: "#004471"
        },
        facebook: {
            50: "#E8F4F9",
            100: "#D9DEE9",
            200: "#B7C2DA",
            300: "#6482C0",
            400: "#4267B2",
            500: "#385898",
            600: "#314E89",
            700: "#29487D",
            800: "#223B67",
            900: "#1E355B"
        },
        messenger: {
            50: "#D0E6FF",
            100: "#B9DAFF",
            200: "#A2CDFF",
            300: "#7AB8FF",
            400: "#2E90FF",
            500: "#0078FF",
            600: "#0063D1",
            700: "#0052AC",
            800: "#003C7E",
            900: "#002C5C"
        },
        whatsapp: {
            50: "#dffeec",
            100: "#b9f5d0",
            200: "#90edb3",
            300: "#65e495",
            400: "#3cdd78",
            500: "#22c35e",
            600: "#179848",
            700: "#0c6c33",
            800: "#01421c",
            900: "#001803"
        },
        twitter: {
            50: "#E5F4FD",
            100: "#C8E9FB",
            200: "#A8DCFA",
            300: "#83CDF7",
            400: "#57BBF5",
            500: "#1DA1F2",
            600: "#1A94DA",
            700: "#1681BF",
            800: "#136B9E",
            900: "#0D4D71"
        },
        telegram: {
            50: "#E3F2F9",
            100: "#C5E4F3",
            200: "#A2D4EC",
            300: "#7AC1E4",
            400: "#47A9DA",
            500: "#0088CC",
            600: "#007AB8",
            700: "#006BA1",
            800: "#005885",
            900: "#003F5E"
        }
    },
    vE = yE,
    bE = {
        none: "0",
        sm: "0.125rem",
        base: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px"
    },
    SE = bE,
    wE = {
        xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
        inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
        none: "none",
        "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
    },
    xE = wE,
    kE = {
        common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
        colors: "background-color, border-color, color, fill, stroke",
        dimensions: "width, height",
        position: "left, right, top, bottom",
        background: "background-color, background-image, background-position"
    },
    CE = {
        "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
        "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
        "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
    },
    _E = {
        "ultra-fast": "50ms",
        faster: "100ms",
        fast: "150ms",
        normal: "200ms",
        slow: "300ms",
        slower: "400ms",
        "ultra-slow": "500ms"
    },
    EE = {
        property: kE,
        easing: CE,
        duration: _E
    },
    TE = EE,
    PE = {
        none: 0,
        sm: "4px",
        base: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
        "3xl": "64px"
    },
    AE = PE,
    RE = {
        none: 0,
        "1px": "1px solid",
        "2px": "2px solid",
        "4px": "4px solid",
        "8px": "8px solid"
    },
    ME = RE,
    OE = {
        letterSpacings: {
            tighter: "-0.05em",
            tight: "-0.025em",
            normal: "0",
            wide: "0.025em",
            wider: "0.05em",
            widest: "0.1em"
        },
        lineHeights: {
            normal: "normal",
            none: 1,
            shorter: 1.25,
            short: 1.375,
            base: 1.5,
            tall: 1.625,
            taller: "2",
            3: ".75rem",
            4: "1rem",
            5: "1.25rem",
            6: "1.5rem",
            7: "1.75rem",
            8: "2rem",
            9: "2.25rem",
            10: "2.5rem"
        },
        fontWeights: {
            hairline: 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900
        },
        fonts: {
            heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
        },
        fontSizes: {
            "3xs": "0.45rem",
            "2xs": "0.625rem",
            xs: "0.75rem",
            sm: "0.875rem",
            md: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "3.75rem",
            "7xl": "4.5rem",
            "8xl": "6rem",
            "9xl": "8rem"
        }
    },
    e2 = OE,
    t2 = {
        px: "1px",
        .5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem"
    },
    zE = {
        max: "max-content",
        min: "min-content",
        full: "100%",
        "3xs": "14rem",
        "2xs": "16rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        "8xl": "90rem",
        prose: "60ch"
    },
    $E = {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px"
    },
    LE = { ...t2,
        ...zE,
        container: $E
    },
    n2 = LE,
    IE = {
        breakpoints: gE,
        zIndices: mE,
        radii: SE,
        blur: AE,
        colors: vE,
        ...e2,
        sizes: n2,
        shadows: xE,
        space: t2,
        borders: ME,
        transition: TE
    };

function me(e, t = {}) {
    let n = !1;

    function r() {
        if (!n) {
            n = !0;
            return
        }
        throw new Error("[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?")
    }

    function o(...c) {
        r();
        for (const d of c) t[d] = l(d);
        return me(e, t)
    }

    function i(...c) {
        for (const d of c) d in t || (t[d] = l(d));
        return me(e, t)
    }

    function a() {
        return Object.fromEntries(Object.entries(t).map(([d, f]) => [d, f.selector]))
    }

    function s() {
        return Object.fromEntries(Object.entries(t).map(([d, f]) => [d, f.className]))
    }

    function l(c) {
        const p = `chakra-${(["container","root"].includes(c??"")?[e]:[e,c]).filter(Boolean).join("__")}`;
        return {
            className: p,
            selector: `.${p}`,
            toString: () => c
        }
    }
    return {
        parts: o,
        toPart: l,
        extend: i,
        selectors: a,
        classnames: s,
        get keys() {
            return Object.keys(t)
        },
        __type: {}
    }
}
var DE = me("accordion").parts("root", "container", "button", "panel").extend("icon"),
    FE = me("alert").parts("title", "description", "container").extend("icon", "spinner"),
    NE = me("avatar").parts("label", "badge", "container").extend("excessLabel", "group"),
    BE = me("breadcrumb").parts("link", "item", "container").extend("separator");
me("button").parts();
var jE = me("checkbox").parts("control", "icon", "container").extend("label");
me("progress").parts("track", "filledTrack").extend("label");
var VE = me("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"),
    HE = me("editable").parts("preview", "input", "textarea"),
    WE = me("form").parts("container", "requiredIndicator", "helperText"),
    UE = me("formError").parts("text", "icon"),
    GE = me("input").parts("addon", "field", "element"),
    KE = me("list").parts("container", "item", "icon"),
    qE = me("menu").parts("button", "list", "item").extend("groupTitle", "command", "divider"),
    XE = me("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"),
    YE = me("numberinput").parts("root", "field", "stepperGroup", "stepper");
me("pininput").parts("field");
var QE = me("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"),
    ZE = me("progress").parts("label", "filledTrack", "track"),
    JE = me("radio").parts("container", "control", "label"),
    eT = me("select").parts("field", "icon"),
    tT = me("slider").parts("container", "track", "thumb", "filledTrack", "mark"),
    nT = me("stat").parts("container", "label", "helpText", "number", "icon"),
    rT = me("switch").parts("container", "track", "thumb"),
    oT = me("table").parts("table", "thead", "tbody", "tr", "th", "td", "tfoot", "caption"),
    iT = me("tabs").parts("root", "tab", "tablist", "tabpanel", "tabpanels", "indicator"),
    aT = me("tag").parts("container", "label", "closeButton"),
    sT = me("card").parts("container", "header", "body", "footer");

function lo(e, t, n) {
    return Math.min(Math.max(e, n), t)
}
class lT extends Error {
    constructor(t) {
        super(`Failed to parse color: "${t}"`)
    }
}
var aa = lT;

function Qm(e) {
    if (typeof e != "string") throw new aa(e);
    if (e.trim().toLowerCase() === "transparent") return [0, 0, 0, 0];
    let t = e.trim();
    t = gT.test(e) ? dT(e) : e;
    const n = fT.exec(t);
    if (n) {
        const a = Array.from(n).slice(1);
        return [...a.slice(0, 3).map(s => parseInt(ns(s, 2), 16)), parseInt(ns(a[3] || "f", 2), 16) / 255]
    }
    const r = pT.exec(t);
    if (r) {
        const a = Array.from(r).slice(1);
        return [...a.slice(0, 3).map(s => parseInt(s, 16)), parseInt(a[3] || "ff", 16) / 255]
    }
    const o = mT.exec(t);
    if (o) {
        const a = Array.from(o).slice(1);
        return [...a.slice(0, 3).map(s => parseInt(s, 10)), parseFloat(a[3] || "1")]
    }
    const i = hT.exec(t);
    if (i) {
        const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat);
        if (lo(0, 100, s) !== s) throw new aa(e);
        if (lo(0, 100, l) !== l) throw new aa(e);
        return [...yT(a, s, l), Number.isNaN(u) ? 1 : u]
    }
    throw new aa(e)
}

function uT(e) {
    let t = 5381,
        n = e.length;
    for (; n;) t = t * 33 ^ e.charCodeAt(--n);
    return (t >>> 0) % 2341
}
const G0 = e => parseInt(e.replace(/_/g, ""), 36),
    cT = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
        const n = G0(t.substring(0, 3)),
            r = G0(t.substring(3)).toString(16);
        let o = "";
        for (let i = 0; i < 6 - r.length; i++) o += "0";
        return e[n] = `${o}${r}`, e
    }, {});

function dT(e) {
    const t = e.toLowerCase().trim(),
        n = cT[uT(t)];
    if (!n) throw new aa(e);
    return `#${n}`
}
const ns = (e, t) => Array.from(Array(t)).map(() => e).join(""),
    fT = new RegExp(`^#${ns("([a-f0-9])",3)}([a-f0-9])?$`, "i"),
    pT = new RegExp(`^#${ns("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
    mT = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${ns(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
    hT = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
    gT = /^[a-z]+$/i,
    K0 = e => Math.round(e * 255),
    yT = (e, t, n) => {
        let r = n / 100;
        if (t === 0) return [r, r, r].map(K0);
        const o = (e % 360 + 360) % 360 / 60,
            i = (1 - Math.abs(2 * r - 1)) * (t / 100),
            a = i * (1 - Math.abs(o % 2 - 1));
        let s = 0,
            l = 0,
            u = 0;
        o >= 0 && o < 1 ? (s = i, l = a) : o >= 1 && o < 2 ? (s = a, l = i) : o >= 2 && o < 3 ? (l = i, u = a) : o >= 3 && o < 4 ? (l = a, u = i) : o >= 4 && o < 5 ? (s = a, u = i) : o >= 5 && o < 6 && (s = i, u = a);
        const c = r - i / 2,
            d = s + c,
            f = l + c,
            p = u + c;
        return [d, f, p].map(K0)
    };

function vT(e, t, n, r) {
    return `rgba(${lo(0,255,e).toFixed()}, ${lo(0,255,t).toFixed()}, ${lo(0,255,n).toFixed()}, ${parseFloat(lo(0,1,r).toFixed(3))})`
}

function bT(e, t) {
    const [n, r, o, i] = Qm(e);
    return vT(n, r, o, i - t)
}

function ST(e) {
    const [t, n, r, o] = Qm(e);
    let i = a => {
        const s = lo(0, 255, a).toString(16);
        return s.length === 1 ? `0${s}` : s
    };
    return `#${i(t)}${i(n)}${i(r)}${o<1?i(Math.round(o*255)):""}`
}

function wT(e, t, n, r, o) {
    for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++) e = e ? e[t[r]] : o;
    return e === o ? n : e
}
var xT = e => Object.keys(e).length === 0,
    ct = (e, t, n) => {
        const r = wT(e, `colors.${t}`, t);
        try {
            return ST(r), r
        } catch {
            return n ? ? "#000000"
        }
    },
    kT = e => {
        const [t, n, r] = Qm(e);
        return (t * 299 + n * 587 + r * 114) / 1e3
    },
    CT = e => t => {
        const n = ct(t, e);
        return kT(n) < 128 ? "dark" : "light"
    },
    _T = e => t => CT(e)(t) === "dark",
    Si = (e, t) => n => {
        const r = ct(n, e);
        return bT(r, 1 - t)
    };

function q0(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
    return {
        backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
        backgroundSize: `${e} ${e}`
    }
}
var ET = () => `#${Math.floor(Math.random()*16777215).toString(16).padEnd(6,"0")}`;

function TT(e) {
    const t = ET();
    return !e || xT(e) ? t : e.string && e.colors ? AT(e.string, e.colors) : e.string && !e.colors ? PT(e.string) : e.colors && !e.string ? RT(e.colors) : t
}

function PT(e) {
    let t = 0;
    if (e.length === 0) return t.toString();
    for (let r = 0; r < e.length; r += 1) t = e.charCodeAt(r) + ((t << 5) - t), t = t & t;
    let n = "#";
    for (let r = 0; r < 3; r += 1) {
        const o = t >> r * 8 & 255;
        n += `00${o.toString(16)}`.substr(-2)
    }
    return n
}

function AT(e, t) {
    let n = 0;
    if (e.length === 0) return t[0];
    for (let r = 0; r < e.length; r += 1) n = e.charCodeAt(r) + ((n << 5) - n), n = n & n;
    return n = (n % t.length + t.length) % t.length, t[n]
}

function RT(e) {
    return e[Math.floor(Math.random() * e.length)]
}

function V(e, t) {
    return n => n.colorMode === "dark" ? t : e
}

function Zm(e) {
    const {
        orientation: t,
        vertical: n,
        horizontal: r
    } = e;
    return t ? t === "vertical" ? n : r : {}
}

function r2(e) {
    return it(e) && e.reference ? e.reference : String(e)
}
var gc = (e, ...t) => t.map(r2).join(` ${e} `).replace(/calc/g, ""),
    X0 = (...e) => `calc(${gc("+",...e)})`,
    Y0 = (...e) => `calc(${gc("-",...e)})`,
    ap = (...e) => `calc(${gc("*",...e)})`,
    Q0 = (...e) => `calc(${gc("/",...e)})`,
    Z0 = e => {
        const t = r2(e);
        return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : ap(t, -1)
    },
    Bn = Object.assign(e => ({
        add: (...t) => Bn(X0(e, ...t)),
        subtract: (...t) => Bn(Y0(e, ...t)),
        multiply: (...t) => Bn(ap(e, ...t)),
        divide: (...t) => Bn(Q0(e, ...t)),
        negate: () => Bn(Z0(e)),
        toString: () => e.toString()
    }), {
        add: X0,
        subtract: Y0,
        multiply: ap,
        divide: Q0,
        negate: Z0
    });

function MT(e) {
    return !Number.isInteger(parseFloat(e.toString()))
}

function OT(e, t = "-") {
    return e.replace(/\s+/g, t)
}

function o2(e) {
    const t = OT(e.toString());
    return t.includes("\\.") ? e : MT(e) ? t.replace(".", "\\.") : e
}

function zT(e, t = "") {
    return [t, o2(e)].filter(Boolean).join("-")
}

function $T(e, t) {
    return `var(${o2(e)}${t?`, ${t}`:""})`
}

function LT(e, t = "") {
    return `--${zT(e,t)}`
}

function We(e, t) {
    const n = LT(e, t == null ? void 0 : t.prefix);
    return {
        variable: n,
        reference: $T(n, IT(t == null ? void 0 : t.fallback))
    }
}

function IT(e) {
    return typeof e == "string" ? e : e == null ? void 0 : e.reference
}
var {
    defineMultiStyleConfig: DT,
    definePartsStyle: zl
} = Ce(rT.keys), Sa = We("switch-track-width"), po = We("switch-track-height"), Cd = We("switch-track-diff"), FT = Bn.subtract(Sa, po), sp = We("switch-thumb-x"), Xi = We("switch-bg"), NT = e => {
    const {
        colorScheme: t
    } = e;
    return {
        borderRadius: "full",
        p: "0.5",
        width: [Sa.reference],
        height: [po.reference],
        transitionProperty: "common",
        transitionDuration: "fast",
        [Xi.variable]: "colors.gray.300",
        _dark: {
            [Xi.variable]: "colors.whiteAlpha.400"
        },
        _focusVisible: {
            boxShadow: "outline"
        },
        _disabled: {
            opacity: .4,
            cursor: "not-allowed"
        },
        _checked: {
            [Xi.variable]: `colors.${t}.500`,
            _dark: {
                [Xi.variable]: `colors.${t}.200`
            }
        },
        bg: Xi.reference
    }
}, BT = {
    bg: "white",
    transitionProperty: "transform",
    transitionDuration: "normal",
    borderRadius: "inherit",
    width: [po.reference],
    height: [po.reference],
    _checked: {
        transform: `translateX(${sp.reference})`
    }
}, jT = zl(e => ({
    container: {
        [Cd.variable]: FT,
        [sp.variable]: Cd.reference,
        _rtl: {
            [sp.variable]: Bn(Cd).negate().toString()
        }
    },
    track: NT(e),
    thumb: BT
})), VT = {
    sm: zl({
        container: {
            [Sa.variable]: "1.375rem",
            [po.variable]: "sizes.3"
        }
    }),
    md: zl({
        container: {
            [Sa.variable]: "1.875rem",
            [po.variable]: "sizes.4"
        }
    }),
    lg: zl({
        container: {
            [Sa.variable]: "2.875rem",
            [po.variable]: "sizes.6"
        }
    })
}, HT = DT({
    baseStyle: jT,
    sizes: VT,
    defaultProps: {
        size: "md",
        colorScheme: "blue"
    }
}), {
    defineMultiStyleConfig: WT,
    definePartsStyle: si
} = Ce(oT.keys), UT = si({
    table: {
        fontVariantNumeric: "lining-nums tabular-nums",
        borderCollapse: "collapse",
        width: "full"
    },
    th: {
        fontFamily: "heading",
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: "wider",
        textAlign: "start"
    },
    td: {
        textAlign: "start"
    },
    caption: {
        mt: 4,
        fontFamily: "heading",
        textAlign: "center",
        fontWeight: "medium"
    }
}), Su = {
    "&[data-is-numeric=true]": {
        textAlign: "end"
    }
}, GT = si(e => {
    const {
        colorScheme: t
    } = e;
    return {
        th: {
            color: V("gray.600", "gray.400")(e),
            borderBottom: "1px",
            borderColor: V(`${t}.100`, `${t}.700`)(e),
            ...Su
        },
        td: {
            borderBottom: "1px",
            borderColor: V(`${t}.100`, `${t}.700`)(e),
            ...Su
        },
        caption: {
            color: V("gray.600", "gray.100")(e)
        },
        tfoot: {
            tr: {
                "&:last-of-type": {
                    th: {
                        borderBottomWidth: 0
                    }
                }
            }
        }
    }
}), KT = si(e => {
    const {
        colorScheme: t
    } = e;
    return {
        th: {
            color: V("gray.600", "gray.400")(e),
            borderBottom: "1px",
            borderColor: V(`${t}.100`, `${t}.700`)(e),
            ...Su
        },
        td: {
            borderBottom: "1px",
            borderColor: V(`${t}.100`, `${t}.700`)(e),
            ...Su
        },
        caption: {
            color: V("gray.600", "gray.100")(e)
        },
        tbody: {
            tr: {
                "&:nth-of-type(odd)": {
                    "th, td": {
                        borderBottomWidth: "1px",
                        borderColor: V(`${t}.100`, `${t}.700`)(e)
                    },
                    td: {
                        background: V(`${t}.100`, `${t}.700`)(e)
                    }
                }
            }
        },
        tfoot: {
            tr: {
                "&:last-of-type": {
                    th: {
                        borderBottomWidth: 0
                    }
                }
            }
        }
    }
}), qT = {
    simple: GT,
    striped: KT,
    unstyled: {}
}, XT = {
    sm: si({
        th: {
            px: "4",
            py: "1",
            lineHeight: "4",
            fontSize: "xs"
        },
        td: {
            px: "4",
            py: "2",
            fontSize: "sm",
            lineHeight: "4"
        },
        caption: {
            px: "4",
            py: "2",
            fontSize: "xs"
        }
    }),
    md: si({
        th: {
            px: "6",
            py: "3",
            lineHeight: "4",
            fontSize: "xs"
        },
        td: {
            px: "6",
            py: "4",
            lineHeight: "5"
        },
        caption: {
            px: "6",
            py: "2",
            fontSize: "sm"
        }
    }),
    lg: si({
        th: {
            px: "8",
            py: "4",
            lineHeight: "5",
            fontSize: "sm"
        },
        td: {
            px: "8",
            py: "5",
            lineHeight: "6"
        },
        caption: {
            px: "6",
            py: "2",
            fontSize: "md"
        }
    })
}, YT = WT({
    baseStyle: UT,
    variants: qT,
    sizes: XT,
    defaultProps: {
        variant: "simple",
        size: "md",
        colorScheme: "gray"
    }
}), yt = re("tabs-color"), pn = re("tabs-bg"), sl = re("tabs-border-color"), {
    defineMultiStyleConfig: QT,
    definePartsStyle: Mn
} = Ce(iT.keys), ZT = e => {
    const {
        orientation: t
    } = e;
    return {
        display: t === "vertical" ? "flex" : "block"
    }
}, JT = e => {
    const {
        isFitted: t
    } = e;
    return {
        flex: t ? 1 : void 0,
        transitionProperty: "common",
        transitionDuration: "normal",
        _focusVisible: {
            zIndex: 1,
            boxShadow: "outline"
        },
        _disabled: {
            cursor: "not-allowed",
            opacity: .4
        }
    }
}, eP = e => {
    const {
        align: t = "start",
        orientation: n
    } = e;
    return {
        justifyContent: {
            end: "flex-end",
            center: "center",
            start: "flex-start"
        }[t],
        flexDirection: n === "vertical" ? "column" : "row"
    }
}, tP = {
    p: 4
}, nP = Mn(e => ({
    root: ZT(e),
    tab: JT(e),
    tablist: eP(e),
    tabpanel: tP
})), rP = {
    sm: Mn({
        tab: {
            py: 1,
            px: 4,
            fontSize: "sm"
        }
    }),
    md: Mn({
        tab: {
            fontSize: "md",
            py: 2,
            px: 4
        }
    }),
    lg: Mn({
        tab: {
            fontSize: "lg",
            py: 3,
            px: 4
        }
    })
}, oP = Mn(e => {
    const {
        colorScheme: t,
        orientation: n
    } = e, r = n === "vertical", o = n === "vertical" ? "borderStart" : "borderBottom", i = r ? "marginStart" : "marginBottom";
    return {
        tablist: {
            [o]: "2px solid",
            borderColor: "inherit"
        },
        tab: {
            [o]: "2px solid",
            borderColor: "transparent",
            [i]: "-2px",
            _selected: {
                [yt.variable]: `colors.${t}.600`,
                _dark: {
                    [yt.variable]: `colors.${t}.300`
                },
                borderColor: "currentColor"
            },
            _active: {
                [pn.variable]: "colors.gray.200",
                _dark: {
                    [pn.variable]: "colors.whiteAlpha.300"
                }
            },
            _disabled: {
                _active: {
                    bg: "none"
                }
            },
            color: yt.reference,
            bg: pn.reference
        }
    }
}), iP = Mn(e => {
    const {
        colorScheme: t
    } = e;
    return {
        tab: {
            borderTopRadius: "md",
            border: "1px solid",
            borderColor: "transparent",
            mb: "-1px",
            [sl.variable]: "transparent",
            _selected: {
                [yt.variable]: `colors.${t}.600`,
                [sl.variable]: "colors.white",
                _dark: {
                    [yt.variable]: `colors.${t}.300`,
                    [sl.variable]: "colors.gray.800"
                },
                borderColor: "inherit",
                borderBottomColor: sl.reference
            },
            color: yt.reference
        },
        tablist: {
            mb: "-1px",
            borderBottom: "1px solid",
            borderColor: "inherit"
        }
    }
}), aP = Mn(e => {
    const {
        colorScheme: t
    } = e;
    return {
        tab: {
            border: "1px solid",
            borderColor: "inherit",
            [pn.variable]: "colors.gray.50",
            _dark: {
                [pn.variable]: "colors.whiteAlpha.50"
            },
            mb: "-1px",
            _notLast: {
                marginEnd: "-1px"
            },
            _selected: {
                [pn.variable]: "colors.white",
                [yt.variable]: `colors.${t}.600`,
                _dark: {
                    [pn.variable]: "colors.gray.800",
                    [yt.variable]: `colors.${t}.300`
                },
                borderColor: "inherit",
                borderTopColor: "currentColor",
                borderBottomColor: "transparent"
            },
            color: yt.reference,
            bg: pn.reference
        },
        tablist: {
            mb: "-1px",
            borderBottom: "1px solid",
            borderColor: "inherit"
        }
    }
}), sP = Mn(e => {
    const {
        colorScheme: t,
        theme: n
    } = e;
    return {
        tab: {
            borderRadius: "full",
            fontWeight: "semibold",
            color: "gray.600",
            _selected: {
                color: ct(n, `${t}.700`),
                bg: ct(n, `${t}.100`)
            }
        }
    }
}), lP = Mn(e => {
    const {
        colorScheme: t
    } = e;
    return {
        tab: {
            borderRadius: "full",
            fontWeight: "semibold",
            [yt.variable]: "colors.gray.600",
            _dark: {
                [yt.variable]: "inherit"
            },
            _selected: {
                [yt.variable]: "colors.white",
                [pn.variable]: `colors.${t}.600`,
                _dark: {
                    [yt.variable]: "colors.gray.800",
                    [pn.variable]: `colors.${t}.300`
                }
            },
            color: yt.reference,
            bg: pn.reference
        }
    }
}), uP = Mn({}), cP = {
    line: oP,
    enclosed: iP,
    "enclosed-colored": aP,
    "soft-rounded": sP,
    "solid-rounded": lP,
    unstyled: uP
}, dP = QT({
    baseStyle: nP,
    sizes: rP,
    variants: cP,
    defaultProps: {
        size: "md",
        variant: "line",
        colorScheme: "blue"
    }
}), fP = {
    px: 1,
    textTransform: "uppercase",
    fontSize: "xs",
    borderRadius: "sm",
    fontWeight: "bold"
}, li = re("badge-bg"), En = re("badge-color"), pP = e => {
    const {
        colorScheme: t,
        theme: n
    } = e, r = Si(`${t}.500`, .6)(n);
    return {
        [li.variable]: `colors.${t}.500`,
        [En.variable]: "colors.white",
        _dark: {
            [li.variable]: r,
            [En.variable]: "colors.whiteAlpha.800"
        },
        bg: li.reference,
        color: En.reference
    }
}, mP = e => {
    const {
        colorScheme: t,
        theme: n
    } = e, r = Si(`${t}.200`, .16)(n);
    return {
        [li.variable]: `colors.${t}.100`,
        [En.variable]: `colors.${t}.800`,
        _dark: {
            [li.variable]: r,
            [En.variable]: `colors.${t}.200`
        },
        bg: li.reference,
        color: En.reference
    }
}, hP = e => {
    const {
        colorScheme: t,
        theme: n
    } = e, r = Si(`${t}.200`, .8)(n);
    return {
        [En.variable]: `colors.${t}.500`,
        _dark: {
            [En.variable]: r
        },
        color: En.reference,
        boxShadow: `inset 0 0 0px 1px ${En.reference}`
    }
}, gP = {
    solid: pP,
    subtle: mP,
    outline: hP
}, wa = {
    baseStyle: fP,
    variants: gP,
    defaultProps: {
        variant: "subtle",
        colorScheme: "gray"
    }
}, {
    defineMultiStyleConfig: yP,
    definePartsStyle: mo
} = Ce(aT.keys), vP = {
    fontWeight: "medium",
    lineHeight: 1.2,
    outline: 0,
    borderRadius: "md",
    _focusVisible: {
        boxShadow: "outline"
    }
}, bP = {
    lineHeight: 1.2,
    overflow: "visible"
}, SP = {
    fontSize: "lg",
    w: "5",
    h: "5",
    transitionProperty: "common",
    transitionDuration: "normal",
    borderRadius: "full",
    marginStart: "1.5",
    marginEnd: "-1",
    opacity: .5,
    _disabled: {
        opacity: .4
    },
    _focusVisible: {
        boxShadow: "outline",
        bg: "rgba(0, 0, 0, 0.14)"
    },
    _hover: {
        opacity: .8
    },
    _active: {
        opacity: 1
    }
}, wP = mo({
    container: vP,
    label: bP,
    closeButton: SP
}), xP = {
    sm: mo({
        container: {
            minH: "5",
            minW: "5",
            fontSize: "xs",
            px: "2"
        },
        closeButton: {
            marginEnd: "-2px",
            marginStart: "0.35rem"
        }
    }),
    md: mo({
        container: {
            minH: "6",
            minW: "6",
            fontSize: "sm",
            px: "2"
        }
    }),
    lg: mo({
        container: {
            minH: "8",
            minW: "8",
            fontSize: "md",
            px: "3"
        }
    })
}, kP = {
    subtle: mo(e => {
        var t;
        return {
            container: (t = wa.variants) == null ? void 0 : t.subtle(e)
        }
    }),
    solid: mo(e => {
        var t;
        return {
            container: (t = wa.variants) == null ? void 0 : t.solid(e)
        }
    }),
    outline: mo(e => {
        var t;
        return {
            container: (t = wa.variants) == null ? void 0 : t.outline(e)
        }
    })
}, CP = yP({
    variants: kP,
    baseStyle: wP,
    sizes: xP,
    defaultProps: {
        size: "md",
        variant: "subtle",
        colorScheme: "gray"
    }
}), {
    definePartsStyle: Wn,
    defineMultiStyleConfig: _P
} = Ce(GE.keys), EP = Wn({
    field: {
        width: "100%",
        minWidth: 0,
        outline: 0,
        position: "relative",
        appearance: "none",
        transitionProperty: "common",
        transitionDuration: "normal",
        _disabled: {
            opacity: .4,
            cursor: "not-allowed"
        }
    }
}), dr = {
    lg: {
        fontSize: "lg",
        px: "4",
        h: "12",
        borderRadius: "md"
    },
    md: {
        fontSize: "md",
        px: "4",
        h: "10",
        borderRadius: "md"
    },
    sm: {
        fontSize: "sm",
        px: "3",
        h: "8",
        borderRadius: "sm"
    },
    xs: {
        fontSize: "xs",
        px: "2",
        h: "6",
        borderRadius: "sm"
    }
}, TP = {
    lg: Wn({
        field: dr.lg,
        addon: dr.lg
    }),
    md: Wn({
        field: dr.md,
        addon: dr.md
    }),
    sm: Wn({
        field: dr.sm,
        addon: dr.sm
    }),
    xs: Wn({
        field: dr.xs,
        addon: dr.xs
    })
};

function Jm(e) {
    const {
        focusBorderColor: t,
        errorBorderColor: n
    } = e;
    return {
        focusBorderColor: t || V("blue.500", "blue.300")(e),
        errorBorderColor: n || V("red.500", "red.300")(e)
    }
}
var PP = Wn(e => {
        const {
            theme: t
        } = e, {
            focusBorderColor: n,
            errorBorderColor: r
        } = Jm(e);
        return {
            field: {
                border: "1px solid",
                borderColor: "inherit",
                bg: "inherit",
                _hover: {
                    borderColor: V("gray.300", "whiteAlpha.400")(e)
                },
                _readOnly: {
                    boxShadow: "none !important",
                    userSelect: "all"
                },
                _invalid: {
                    borderColor: ct(t, r),
                    boxShadow: `0 0 0 1px ${ct(t,r)}`
                },
                _focusVisible: {
                    zIndex: 1,
                    borderColor: ct(t, n),
                    boxShadow: `0 0 0 1px ${ct(t,n)}`
                }
            },
            addon: {
                border: "1px solid",
                borderColor: V("inherit", "whiteAlpha.50")(e),
                bg: V("gray.100", "whiteAlpha.300")(e)
            }
        }
    }),
    AP = Wn(e => {
        const {
            theme: t
        } = e, {
            focusBorderColor: n,
            errorBorderColor: r
        } = Jm(e);
        return {
            field: {
                border: "2px solid",
                borderColor: "transparent",
                bg: V("gray.100", "whiteAlpha.50")(e),
                _hover: {
                    bg: V("gray.200", "whiteAlpha.100")(e)
                },
                _readOnly: {
                    boxShadow: "none !important",
                    userSelect: "all"
                },
                _invalid: {
                    borderColor: ct(t, r)
                },
                _focusVisible: {
                    bg: "transparent",
                    borderColor: ct(t, n)
                }
            },
            addon: {
                border: "2px solid",
                borderColor: "transparent",
                bg: V("gray.100", "whiteAlpha.50")(e)
            }
        }
    }),
    RP = Wn(e => {
        const {
            theme: t
        } = e, {
            focusBorderColor: n,
            errorBorderColor: r
        } = Jm(e);
        return {
            field: {
                borderBottom: "1px solid",
                borderColor: "inherit",
                borderRadius: "0",
                px: "0",
                bg: "transparent",
                _readOnly: {
                    boxShadow: "none !important",
                    userSelect: "all"
                },
                _invalid: {
                    borderColor: ct(t, r),
                    boxShadow: `0px 1px 0px 0px ${ct(t,r)}`
                },
                _focusVisible: {
                    borderColor: ct(t, n),
                    boxShadow: `0px 1px 0px 0px ${ct(t,n)}`
                }
            },
            addon: {
                borderBottom: "2px solid",
                borderColor: "inherit",
                borderRadius: "0",
                px: "0",
                bg: "transparent"
            }
        }
    }),
    MP = Wn({
        field: {
            bg: "transparent",
            px: "0",
            height: "auto"
        },
        addon: {
            bg: "transparent",
            px: "0",
            height: "auto"
        }
    }),
    OP = {
        outline: PP,
        filled: AP,
        flushed: RP,
        unstyled: MP
    },
    de = _P({
        baseStyle: EP,
        sizes: TP,
        variants: OP,
        defaultProps: {
            size: "md",
            variant: "outline"
        }
    }),
    J0, zP = { ...(J0 = de.baseStyle) == null ? void 0 : J0.field,
        paddingY: "2",
        minHeight: "20",
        lineHeight: "short",
        verticalAlign: "top"
    },
    ey, ty, $P = {
        outline: e => {
            var t, n;
            return (n = (t = de.variants) == null ? void 0 : t.outline(e).field) != null ? n : {}
        },
        flushed: e => {
            var t, n;
            return (n = (t = de.variants) == null ? void 0 : t.flushed(e).field) != null ? n : {}
        },
        filled: e => {
            var t, n;
            return (n = (t = de.variants) == null ? void 0 : t.filled(e).field) != null ? n : {}
        },
        unstyled: (ty = (ey = de.variants) == null ? void 0 : ey.unstyled.field) != null ? ty : {}
    },
    ny, ry, oy, iy, ay, sy, ly, uy, LP = {
        xs: (ry = (ny = de.sizes) == null ? void 0 : ny.xs.field) != null ? ry : {},
        sm: (iy = (oy = de.sizes) == null ? void 0 : oy.sm.field) != null ? iy : {},
        md: (sy = (ay = de.sizes) == null ? void 0 : ay.md.field) != null ? sy : {},
        lg: (uy = (ly = de.sizes) == null ? void 0 : ly.lg.field) != null ? uy : {}
    },
    IP = {
        baseStyle: zP,
        sizes: LP,
        variants: $P,
        defaultProps: {
            size: "md",
            variant: "outline"
        }
    },
    ll = We("tooltip-bg"),
    _d = We("tooltip-fg"),
    DP = We("popper-arrow-bg"),
    FP = {
        bg: ll.reference,
        color: _d.reference,
        [ll.variable]: "colors.gray.700",
        [_d.variable]: "colors.whiteAlpha.900",
        _dark: {
            [ll.variable]: "colors.gray.300",
            [_d.variable]: "colors.gray.900"
        },
        [DP.variable]: ll.reference,
        px: "2",
        py: "0.5",
        borderRadius: "sm",
        fontWeight: "medium",
        fontSize: "sm",
        boxShadow: "md",
        maxW: "xs",
        zIndex: "tooltip"
    },
    NP = {
        baseStyle: FP
    },
    {
        defineMultiStyleConfig: BP,
        definePartsStyle: sa
    } = Ce(ZE.keys),
    jP = e => {
        const {
            colorScheme: t,
            theme: n,
            isIndeterminate: r,
            hasStripe: o
        } = e, i = V(q0(), q0("1rem", "rgba(0,0,0,0.1)"))(e), a = V(`${t}.500`, `${t}.200`)(e), s = `linear-gradient(
    to right,
    transparent 0%,
    ${ct(n,a)} 50%,
    transparent 100%
  )`;
        return { ...!r && o && i,
            ...r ? {
                bgImage: s
            } : {
                bgColor: a
            }
        }
    },
    VP = {
        lineHeight: "1",
        fontSize: "0.25em",
        fontWeight: "bold",
        color: "white"
    },
    HP = e => ({
        bg: V("gray.100", "whiteAlpha.300")(e)
    }),
    WP = e => ({
        transitionProperty: "common",
        transitionDuration: "slow",
        ...jP(e)
    }),
    UP = sa(e => ({
        label: VP,
        filledTrack: WP(e),
        track: HP(e)
    })),
    GP = {
        xs: sa({
            track: {
                h: "1"
            }
        }),
        sm: sa({
            track: {
                h: "2"
            }
        }),
        md: sa({
            track: {
                h: "3"
            }
        }),
        lg: sa({
            track: {
                h: "4"
            }
        })
    },
    KP = BP({
        sizes: GP,
        baseStyle: UP,
        defaultProps: {
            size: "md",
            colorScheme: "blue"
        }
    }),
    qP = e => typeof e == "function";

function ft(e, ...t) {
    return qP(e) ? e(...t) : e
}
var {
    definePartsStyle: $l,
    defineMultiStyleConfig: XP
} = Ce(jE.keys), xa = re("checkbox-size"), YP = e => {
    const {
        colorScheme: t
    } = e;
    return {
        w: xa.reference,
        h: xa.reference,
        transitionProperty: "box-shadow",
        transitionDuration: "normal",
        border: "2px solid",
        borderRadius: "sm",
        borderColor: "inherit",
        color: "white",
        _checked: {
            bg: V(`${t}.500`, `${t}.200`)(e),
            borderColor: V(`${t}.500`, `${t}.200`)(e),
            color: V("white", "gray.900")(e),
            _hover: {
                bg: V(`${t}.600`, `${t}.300`)(e),
                borderColor: V(`${t}.600`, `${t}.300`)(e)
            },
            _disabled: {
                borderColor: V("gray.200", "transparent")(e),
                bg: V("gray.200", "whiteAlpha.300")(e),
                color: V("gray.500", "whiteAlpha.500")(e)
            }
        },
        _indeterminate: {
            bg: V(`${t}.500`, `${t}.200`)(e),
            borderColor: V(`${t}.500`, `${t}.200`)(e),
            color: V("white", "gray.900")(e)
        },
        _disabled: {
            bg: V("gray.100", "whiteAlpha.100")(e),
            borderColor: V("gray.100", "transparent")(e)
        },
        _focusVisible: {
            boxShadow: "outline"
        },
        _invalid: {
            borderColor: V("red.500", "red.300")(e)
        }
    }
}, QP = {
    _disabled: {
        cursor: "not-allowed"
    }
}, ZP = {
    userSelect: "none",
    _disabled: {
        opacity: .4
    }
}, JP = {
    transitionProperty: "transform",
    transitionDuration: "normal"
}, e6 = $l(e => ({
    icon: JP,
    container: QP,
    control: ft(YP, e),
    label: ZP
})), t6 = {
    sm: $l({
        control: {
            [xa.variable]: "sizes.3"
        },
        label: {
            fontSize: "sm"
        },
        icon: {
            fontSize: "3xs"
        }
    }),
    md: $l({
        control: {
            [xa.variable]: "sizes.4"
        },
        label: {
            fontSize: "md"
        },
        icon: {
            fontSize: "2xs"
        }
    }),
    lg: $l({
        control: {
            [xa.variable]: "sizes.5"
        },
        label: {
            fontSize: "lg"
        },
        icon: {
            fontSize: "2xs"
        }
    })
}, wu = XP({
    baseStyle: e6,
    sizes: t6,
    defaultProps: {
        size: "md",
        colorScheme: "blue"
    }
}), {
    defineMultiStyleConfig: n6,
    definePartsStyle: Ll
} = Ce(JE.keys), r6 = e => {
    var t;
    const n = (t = ft(wu.baseStyle, e)) == null ? void 0 : t.control;
    return { ...n,
        borderRadius: "full",
        _checked: { ...n == null ? void 0 : n._checked,
            _before: {
                content: '""',
                display: "inline-block",
                pos: "relative",
                w: "50%",
                h: "50%",
                borderRadius: "50%",
                bg: "currentColor"
            }
        }
    }
}, o6 = Ll(e => {
    var t, n, r, o;
    return {
        label: (n = (t = wu).baseStyle) == null ? void 0 : n.call(t, e).label,
        container: (o = (r = wu).baseStyle) == null ? void 0 : o.call(r, e).container,
        control: r6(e)
    }
}), i6 = {
    md: Ll({
        control: {
            w: "4",
            h: "4"
        },
        label: {
            fontSize: "md"
        }
    }),
    lg: Ll({
        control: {
            w: "5",
            h: "5"
        },
        label: {
            fontSize: "lg"
        }
    }),
    sm: Ll({
        control: {
            width: "3",
            height: "3"
        },
        label: {
            fontSize: "sm"
        }
    })
}, a6 = n6({
    baseStyle: o6,
    sizes: i6,
    defaultProps: {
        size: "md",
        colorScheme: "blue"
    }
}), {
    defineMultiStyleConfig: s6,
    definePartsStyle: l6
} = Ce(eT.keys), ul = re("select-bg"), cy, u6 = { ...(cy = de.baseStyle) == null ? void 0 : cy.field,
    appearance: "none",
    paddingBottom: "1px",
    lineHeight: "normal",
    bg: ul.reference,
    [ul.variable]: "colors.white",
    _dark: {
        [ul.variable]: "colors.gray.700"
    },
    "> option, > optgroup": {
        bg: ul.reference
    }
}, c6 = {
    width: "6",
    height: "100%",
    insetEnd: "2",
    position: "relative",
    color: "currentColor",
    fontSize: "xl",
    _disabled: {
        opacity: .5
    }
}, d6 = l6({
    field: u6,
    icon: c6
}), cl = {
    paddingInlineEnd: "8"
}, dy, fy, py, my, hy, gy, yy, vy, f6 = {
    lg: { ...(dy = de.sizes) == null ? void 0 : dy.lg,
        field: { ...(fy = de.sizes) == null ? void 0 : fy.lg.field,
            ...cl
        }
    },
    md: { ...(py = de.sizes) == null ? void 0 : py.md,
        field: { ...(my = de.sizes) == null ? void 0 : my.md.field,
            ...cl
        }
    },
    sm: { ...(hy = de.sizes) == null ? void 0 : hy.sm,
        field: { ...(gy = de.sizes) == null ? void 0 : gy.sm.field,
            ...cl
        }
    },
    xs: { ...(yy = de.sizes) == null ? void 0 : yy.xs,
        field: { ...(vy = de.sizes) == null ? void 0 : vy.xs.field,
            ...cl
        },
        icon: {
            insetEnd: "1"
        }
    }
}, p6 = s6({
    baseStyle: d6,
    sizes: f6,
    variants: de.variants,
    defaultProps: de.defaultProps
}), Ed = re("skeleton-start-color"), Td = re("skeleton-end-color"), m6 = {
    [Ed.variable]: "colors.gray.100",
    [Td.variable]: "colors.gray.400",
    _dark: {
        [Ed.variable]: "colors.gray.800",
        [Td.variable]: "colors.gray.600"
    },
    background: Ed.reference,
    borderColor: Td.reference,
    opacity: .7,
    borderRadius: "sm"
}, h6 = {
    baseStyle: m6
}, Pd = re("skip-link-bg"), g6 = {
    borderRadius: "md",
    fontWeight: "semibold",
    _focusVisible: {
        boxShadow: "outline",
        padding: "4",
        position: "fixed",
        top: "6",
        insetStart: "6",
        [Pd.variable]: "colors.white",
        _dark: {
            [Pd.variable]: "colors.gray.700"
        },
        bg: Pd.reference
    }
}, y6 = {
    baseStyle: g6
}, {
    defineMultiStyleConfig: v6,
    definePartsStyle: yc
} = Ce(tT.keys), rs = re("slider-thumb-size"), os = re("slider-track-size"), Sr = re("slider-bg"), b6 = e => {
    const {
        orientation: t
    } = e;
    return {
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        _disabled: {
            opacity: .6,
            cursor: "default",
            pointerEvents: "none"
        },
        ...Zm({
            orientation: t,
            vertical: {
                h: "100%"
            },
            horizontal: {
                w: "100%"
            }
        })
    }
}, S6 = e => ({ ...Zm({
        orientation: e.orientation,
        horizontal: {
            h: os.reference
        },
        vertical: {
            w: os.reference
        }
    }),
    overflow: "hidden",
    borderRadius: "sm",
    [Sr.variable]: "colors.gray.200",
    _dark: {
        [Sr.variable]: "colors.whiteAlpha.200"
    },
    _disabled: {
        [Sr.variable]: "colors.gray.300",
        _dark: {
            [Sr.variable]: "colors.whiteAlpha.300"
        }
    },
    bg: Sr.reference
}), w6 = e => {
    const {
        orientation: t
    } = e;
    return { ...Zm({
            orientation: t,
            vertical: {
                left: "50%",
                transform: "translateX(-50%)",
                _active: {
                    transform: "translateX(-50%) scale(1.15)"
                }
            },
            horizontal: {
                top: "50%",
                transform: "translateY(-50%)",
                _active: {
                    transform: "translateY(-50%) scale(1.15)"
                }
            }
        }),
        w: rs.reference,
        h: rs.reference,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        outline: 0,
        zIndex: 1,
        borderRadius: "full",
        bg: "white",
        boxShadow: "base",
        border: "1px solid",
        borderColor: "transparent",
        transitionProperty: "transform",
        transitionDuration: "normal",
        _focusVisible: {
            boxShadow: "outline"
        },
        _disabled: {
            bg: "gray.300"
        }
    }
}, x6 = e => {
    const {
        colorScheme: t
    } = e;
    return {
        width: "inherit",
        height: "inherit",
        [Sr.variable]: `colors.${t}.500`,
        _dark: {
            [Sr.variable]: `colors.${t}.200`
        },
        bg: Sr.reference
    }
}, k6 = yc(e => ({
    container: b6(e),
    track: S6(e),
    thumb: w6(e),
    filledTrack: x6(e)
})), C6 = yc({
    container: {
        [rs.variable]: "sizes.4",
        [os.variable]: "sizes.1"
    }
}), _6 = yc({
    container: {
        [rs.variable]: "sizes.3.5",
        [os.variable]: "sizes.1"
    }
}), E6 = yc({
    container: {
        [rs.variable]: "sizes.2.5",
        [os.variable]: "sizes.0.5"
    }
}), T6 = {
    lg: C6,
    md: _6,
    sm: E6
}, P6 = v6({
    baseStyle: k6,
    sizes: T6,
    defaultProps: {
        size: "md",
        colorScheme: "blue"
    }
}), oo = We("spinner-size"), A6 = {
    width: [oo.reference],
    height: [oo.reference]
}, R6 = {
    xs: {
        [oo.variable]: "sizes.3"
    },
    sm: {
        [oo.variable]: "sizes.4"
    },
    md: {
        [oo.variable]: "sizes.6"
    },
    lg: {
        [oo.variable]: "sizes.8"
    },
    xl: {
        [oo.variable]: "sizes.12"
    }
}, M6 = {
    baseStyle: A6,
    sizes: R6,
    defaultProps: {
        size: "md"
    }
}, {
    defineMultiStyleConfig: O6,
    definePartsStyle: i2
} = Ce(nT.keys), z6 = {
    fontWeight: "medium"
}, $6 = {
    opacity: .8,
    marginBottom: "2"
}, L6 = {
    verticalAlign: "baseline",
    fontWeight: "semibold"
}, I6 = {
    marginEnd: 1,
    w: "3.5",
    h: "3.5",
    verticalAlign: "middle"
}, D6 = i2({
    container: {},
    label: z6,
    helpText: $6,
    number: L6,
    icon: I6
}), F6 = {
    md: i2({
        label: {
            fontSize: "sm"
        },
        helpText: {
            fontSize: "sm"
        },
        number: {
            fontSize: "2xl"
        }
    })
}, N6 = O6({
    baseStyle: D6,
    sizes: F6,
    defaultProps: {
        size: "md"
    }
}), Ad = re("kbd-bg"), B6 = {
    [Ad.variable]: "colors.gray.100",
    _dark: {
        [Ad.variable]: "colors.whiteAlpha.100"
    },
    bg: Ad.reference,
    borderRadius: "md",
    borderWidth: "1px",
    borderBottomWidth: "3px",
    fontSize: "0.8em",
    fontWeight: "bold",
    lineHeight: "normal",
    px: "0.4em",
    whiteSpace: "nowrap"
}, j6 = {
    baseStyle: B6
}, V6 = {
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    cursor: "pointer",
    textDecoration: "none",
    outline: "none",
    color: "inherit",
    _hover: {
        textDecoration: "underline"
    },
    _focusVisible: {
        boxShadow: "outline"
    }
}, H6 = {
    baseStyle: V6
}, {
    defineMultiStyleConfig: W6,
    definePartsStyle: U6
} = Ce(KE.keys), G6 = {
    marginEnd: "2",
    display: "inline",
    verticalAlign: "text-bottom"
}, K6 = U6({
    icon: G6
}), q6 = W6({
    baseStyle: K6
}), {
    defineMultiStyleConfig: X6,
    definePartsStyle: Y6
} = Ce(qE.keys), xn = re("menu-bg"), Rd = re("menu-shadow"), Q6 = {
    [xn.variable]: "#fff",
    [Rd.variable]: "shadows.sm",
    _dark: {
        [xn.variable]: "colors.gray.700",
        [Rd.variable]: "shadows.dark-lg"
    },
    color: "inherit",
    minW: "3xs",
    py: "2",
    zIndex: 1,
    borderRadius: "md",
    borderWidth: "1px",
    bg: xn.reference,
    boxShadow: Rd.reference
}, Z6 = {
    py: "1.5",
    px: "3",
    transitionProperty: "background",
    transitionDuration: "ultra-fast",
    transitionTimingFunction: "ease-in",
    _focus: {
        [xn.variable]: "colors.gray.100",
        _dark: {
            [xn.variable]: "colors.whiteAlpha.100"
        }
    },
    _active: {
        [xn.variable]: "colors.gray.200",
        _dark: {
            [xn.variable]: "colors.whiteAlpha.200"
        }
    },
    _expanded: {
        [xn.variable]: "colors.gray.100",
        _dark: {
            [xn.variable]: "colors.whiteAlpha.100"
        }
    },
    _disabled: {
        opacity: .4,
        cursor: "not-allowed"
    },
    bg: xn.reference
}, J6 = {
    mx: 4,
    my: 2,
    fontWeight: "semibold",
    fontSize: "sm"
}, e8 = {
    opacity: .6
}, t8 = {
    border: 0,
    borderBottom: "1px solid",
    borderColor: "inherit",
    my: "2",
    opacity: .6
}, n8 = {
    transitionProperty: "common",
    transitionDuration: "normal"
}, r8 = Y6({
    button: n8,
    list: Q6,
    item: Z6,
    groupTitle: J6,
    command: e8,
    divider: t8
}), o8 = X6({
    baseStyle: r8
}), {
    defineMultiStyleConfig: i8,
    definePartsStyle: lp
} = Ce(XE.keys), a8 = {
    bg: "blackAlpha.600",
    zIndex: "modal"
}, s8 = e => {
    const {
        isCentered: t,
        scrollBehavior: n
    } = e;
    return {
        display: "flex",
        zIndex: "modal",
        justifyContent: "center",
        alignItems: t ? "center" : "flex-start",
        overflow: n === "inside" ? "hidden" : "auto",
        overscrollBehaviorY: "none"
    }
}, l8 = e => {
    const {
        scrollBehavior: t
    } = e;
    return {
        borderRadius: "md",
        bg: V("white", "gray.700")(e),
        color: "inherit",
        my: "16",
        zIndex: "modal",
        maxH: t === "inside" ? "calc(100% - 7.5rem)" : void 0,
        boxShadow: V("lg", "dark-lg")(e)
    }
}, u8 = {
    px: "6",
    py: "4",
    fontSize: "xl",
    fontWeight: "semibold"
}, c8 = {
    position: "absolute",
    top: "2",
    insetEnd: "3"
}, d8 = e => {
    const {
        scrollBehavior: t
    } = e;
    return {
        px: "6",
        py: "2",
        flex: "1",
        overflow: t === "inside" ? "auto" : void 0
    }
}, f8 = {
    px: "6",
    py: "4"
}, p8 = lp(e => ({
    overlay: a8,
    dialogContainer: ft(s8, e),
    dialog: ft(l8, e),
    header: u8,
    closeButton: c8,
    body: ft(d8, e),
    footer: f8
}));

function un(e) {
    return lp(e === "full" ? {
        dialog: {
            maxW: "100vw",
            minH: "$100vh",
            my: "0",
            borderRadius: "0"
        }
    } : {
        dialog: {
            maxW: e
        }
    })
}
var m8 = {
        xs: un("xs"),
        sm: un("sm"),
        md: un("md"),
        lg: un("lg"),
        xl: un("xl"),
        "2xl": un("2xl"),
        "3xl": un("3xl"),
        "4xl": un("4xl"),
        "5xl": un("5xl"),
        "6xl": un("6xl"),
        full: un("full")
    },
    h8 = i8({
        baseStyle: p8,
        sizes: m8,
        defaultProps: {
            size: "md"
        }
    }),
    {
        defineMultiStyleConfig: g8,
        definePartsStyle: a2
    } = Ce(YE.keys),
    eh = We("number-input-stepper-width"),
    s2 = We("number-input-input-padding"),
    y8 = Bn(eh).add("0.5rem").toString(),
    Md = We("number-input-bg"),
    Od = We("number-input-color"),
    zd = We("number-input-border-color"),
    v8 = {
        [eh.variable]: "sizes.6",
        [s2.variable]: y8
    },
    b8 = e => {
        var t, n;
        return (n = (t = ft(de.baseStyle, e)) == null ? void 0 : t.field) != null ? n : {}
    },
    S8 = {
        width: eh.reference
    },
    w8 = {
        borderStart: "1px solid",
        borderStartColor: zd.reference,
        color: Od.reference,
        bg: Md.reference,
        [Od.variable]: "colors.chakra-body-text",
        [zd.variable]: "colors.chakra-border-color",
        _dark: {
            [Od.variable]: "colors.whiteAlpha.800",
            [zd.variable]: "colors.whiteAlpha.300"
        },
        _active: {
            [Md.variable]: "colors.gray.200",
            _dark: {
                [Md.variable]: "colors.whiteAlpha.300"
            }
        },
        _disabled: {
            opacity: .4,
            cursor: "not-allowed"
        }
    },
    x8 = a2(e => {
        var t;
        return {
            root: v8,
            field: (t = ft(b8, e)) != null ? t : {},
            stepperGroup: S8,
            stepper: w8
        }
    });

function dl(e) {
    var t, n, r;
    const o = (t = de.sizes) == null ? void 0 : t[e],
        i = {
            lg: "md",
            md: "md",
            sm: "sm",
            xs: "sm"
        },
        a = (r = (n = o.field) == null ? void 0 : n.fontSize) != null ? r : "md",
        s = e2.fontSizes[a];
    return a2({
        field: { ...o.field,
            paddingInlineEnd: s2.reference,
            verticalAlign: "top"
        },
        stepper: {
            fontSize: Bn(s).multiply(.75).toString(),
            _first: {
                borderTopEndRadius: i[e]
            },
            _last: {
                borderBottomEndRadius: i[e],
                mt: "-1px",
                borderTopWidth: 1
            }
        }
    })
}
var k8 = {
        xs: dl("xs"),
        sm: dl("sm"),
        md: dl("md"),
        lg: dl("lg")
    },
    C8 = g8({
        baseStyle: x8,
        sizes: k8,
        variants: de.variants,
        defaultProps: de.defaultProps
    }),
    by, _8 = { ...(by = de.baseStyle) == null ? void 0 : by.field,
        textAlign: "center"
    },
    E8 = {
        lg: {
            fontSize: "lg",
            w: 12,
            h: 12,
            borderRadius: "md"
        },
        md: {
            fontSize: "md",
            w: 10,
            h: 10,
            borderRadius: "md"
        },
        sm: {
            fontSize: "sm",
            w: 8,
            h: 8,
            borderRadius: "sm"
        },
        xs: {
            fontSize: "xs",
            w: 6,
            h: 6,
            borderRadius: "sm"
        }
    },
    Sy, wy, T8 = {
        outline: e => {
            var t, n, r;
            return (r = (n = ft((t = de.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : n.field) != null ? r : {}
        },
        flushed: e => {
            var t, n, r;
            return (r = (n = ft((t = de.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : n.field) != null ? r : {}
        },
        filled: e => {
            var t, n, r;
            return (r = (n = ft((t = de.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : n.field) != null ? r : {}
        },
        unstyled: (wy = (Sy = de.variants) == null ? void 0 : Sy.unstyled.field) != null ? wy : {}
    },
    P8 = {
        baseStyle: _8,
        sizes: E8,
        variants: T8,
        defaultProps: de.defaultProps
    },
    {
        defineMultiStyleConfig: A8,
        definePartsStyle: R8
    } = Ce(QE.keys),
    fl = We("popper-bg"),
    M8 = We("popper-arrow-bg"),
    xy = We("popper-arrow-shadow-color"),
    O8 = {
        zIndex: 10
    },
    z8 = {
        [fl.variable]: "colors.white",
        bg: fl.reference,
        [M8.variable]: fl.reference,
        [xy.variable]: "colors.gray.200",
        _dark: {
            [fl.variable]: "colors.gray.700",
            [xy.variable]: "colors.whiteAlpha.300"
        },
        width: "xs",
        border: "1px solid",
        borderColor: "inherit",
        borderRadius: "md",
        boxShadow: "sm",
        zIndex: "inherit",
        _focusVisible: {
            outline: 0,
            boxShadow: "outline"
        }
    },
    $8 = {
        px: 3,
        py: 2,
        borderBottomWidth: "1px"
    },
    L8 = {
        px: 3,
        py: 2
    },
    I8 = {
        px: 3,
        py: 2,
        borderTopWidth: "1px"
    },
    D8 = {
        position: "absolute",
        borderRadius: "md",
        top: 1,
        insetEnd: 2,
        padding: 2
    },
    F8 = R8({
        popper: O8,
        content: z8,
        header: $8,
        body: L8,
        footer: I8,
        closeButton: D8
    }),
    N8 = A8({
        baseStyle: F8
    }),
    {
        definePartsStyle: up,
        defineMultiStyleConfig: B8
    } = Ce(VE.keys),
    $d = re("drawer-bg"),
    Ld = re("drawer-box-shadow");

function Lo(e) {
    return up(e === "full" ? {
        dialog: {
            maxW: "100vw",
            h: "100vh"
        }
    } : {
        dialog: {
            maxW: e
        }
    })
}
var j8 = {
        bg: "blackAlpha.600",
        zIndex: "overlay"
    },
    V8 = {
        display: "flex",
        zIndex: "modal",
        justifyContent: "center"
    },
    H8 = e => {
        const {
            isFullHeight: t
        } = e;
        return { ...t && {
                height: "100vh"
            },
            zIndex: "modal",
            maxH: "100vh",
            color: "inherit",
            [$d.variable]: "colors.white",
            [Ld.variable]: "shadows.lg",
            _dark: {
                [$d.variable]: "colors.gray.700",
                [Ld.variable]: "shadows.dark-lg"
            },
            bg: $d.reference,
            boxShadow: Ld.reference
        }
    },
    W8 = {
        px: "6",
        py: "4",
        fontSize: "xl",
        fontWeight: "semibold"
    },
    U8 = {
        position: "absolute",
        top: "2",
        insetEnd: "3"
    },
    G8 = {
        px: "6",
        py: "2",
        flex: "1",
        overflow: "auto"
    },
    K8 = {
        px: "6",
        py: "4"
    },
    q8 = up(e => ({
        overlay: j8,
        dialogContainer: V8,
        dialog: ft(H8, e),
        header: W8,
        closeButton: U8,
        body: G8,
        footer: K8
    })),
    X8 = {
        xs: Lo("xs"),
        sm: Lo("md"),
        md: Lo("lg"),
        lg: Lo("2xl"),
        xl: Lo("4xl"),
        full: Lo("full")
    },
    Y8 = B8({
        baseStyle: q8,
        sizes: X8,
        defaultProps: {
            size: "xs"
        }
    }),
    {
        definePartsStyle: Q8,
        defineMultiStyleConfig: Z8
    } = Ce(HE.keys),
    J8 = {
        borderRadius: "md",
        py: "1",
        transitionProperty: "common",
        transitionDuration: "normal"
    },
    eA = {
        borderRadius: "md",
        py: "1",
        transitionProperty: "common",
        transitionDuration: "normal",
        width: "full",
        _focusVisible: {
            boxShadow: "outline"
        },
        _placeholder: {
            opacity: .6
        }
    },
    tA = {
        borderRadius: "md",
        py: "1",
        transitionProperty: "common",
        transitionDuration: "normal",
        width: "full",
        _focusVisible: {
            boxShadow: "outline"
        },
        _placeholder: {
            opacity: .6
        }
    },
    nA = Q8({
        preview: J8,
        input: eA,
        textarea: tA
    }),
    rA = Z8({
        baseStyle: nA
    }),
    {
        definePartsStyle: oA,
        defineMultiStyleConfig: iA
    } = Ce(WE.keys),
    ui = re("form-control-color"),
    aA = {
        marginStart: "1",
        [ui.variable]: "colors.red.500",
        _dark: {
            [ui.variable]: "colors.red.300"
        },
        color: ui.reference
    },
    sA = {
        mt: "2",
        [ui.variable]: "colors.gray.600",
        _dark: {
            [ui.variable]: "colors.whiteAlpha.600"
        },
        color: ui.reference,
        lineHeight: "normal",
        fontSize: "sm"
    },
    lA = oA({
        container: {
            width: "100%",
            position: "relative"
        },
        requiredIndicator: aA,
        helperText: sA
    }),
    uA = iA({
        baseStyle: lA
    }),
    {
        definePartsStyle: cA,
        defineMultiStyleConfig: dA
    } = Ce(UE.keys),
    ci = re("form-error-color"),
    fA = {
        [ci.variable]: "colors.red.500",
        _dark: {
            [ci.variable]: "colors.red.300"
        },
        color: ci.reference,
        mt: "2",
        fontSize: "sm",
        lineHeight: "normal"
    },
    pA = {
        marginEnd: "0.5em",
        [ci.variable]: "colors.red.500",
        _dark: {
            [ci.variable]: "colors.red.300"
        },
        color: ci.reference
    },
    mA = cA({
        text: fA,
        icon: pA
    }),
    hA = dA({
        baseStyle: mA
    }),
    gA = {
        fontSize: "md",
        marginEnd: "3",
        mb: "2",
        fontWeight: "medium",
        transitionProperty: "common",
        transitionDuration: "normal",
        opacity: 1,
        _disabled: {
            opacity: .4
        }
    },
    yA = {
        baseStyle: gA
    },
    vA = {
        fontFamily: "heading",
        fontWeight: "bold"
    },
    bA = {
        "4xl": {
            fontSize: ["6xl", null, "7xl"],
            lineHeight: 1
        },
        "3xl": {
            fontSize: ["5xl", null, "6xl"],
            lineHeight: 1
        },
        "2xl": {
            fontSize: ["4xl", null, "5xl"],
            lineHeight: [1.2, null, 1]
        },
        xl: {
            fontSize: ["3xl", null, "4xl"],
            lineHeight: [1.33, null, 1.2]
        },
        lg: {
            fontSize: ["2xl", null, "3xl"],
            lineHeight: [1.33, null, 1.2]
        },
        md: {
            fontSize: "xl",
            lineHeight: 1.2
        },
        sm: {
            fontSize: "md",
            lineHeight: 1.2
        },
        xs: {
            fontSize: "sm",
            lineHeight: 1.2
        }
    },
    SA = {
        baseStyle: vA,
        sizes: bA,
        defaultProps: {
            size: "xl"
        }
    },
    {
        defineMultiStyleConfig: wA,
        definePartsStyle: xA
    } = Ce(BE.keys),
    kA = {
        transitionProperty: "common",
        transitionDuration: "fast",
        transitionTimingFunction: "ease-out",
        cursor: "pointer",
        textDecoration: "none",
        outline: "none",
        color: "inherit",
        _hover: {
            textDecoration: "underline"
        },
        _focusVisible: {
            boxShadow: "outline"
        }
    },
    CA = xA({
        link: kA
    }),
    _A = wA({
        baseStyle: CA
    }),
    EA = {
        lineHeight: "1.2",
        borderRadius: "md",
        fontWeight: "semibold",
        transitionProperty: "common",
        transitionDuration: "normal",
        _focusVisible: {
            boxShadow: "outline"
        },
        _disabled: {
            opacity: .4,
            cursor: "not-allowed",
            boxShadow: "none"
        },
        _hover: {
            _disabled: {
                bg: "initial"
            }
        }
    },
    l2 = e => {
        const {
            colorScheme: t,
            theme: n
        } = e;
        if (t === "gray") return {
            color: V("inherit", "whiteAlpha.900")(e),
            _hover: {
                bg: V("gray.100", "whiteAlpha.200")(e)
            },
            _active: {
                bg: V("gray.200", "whiteAlpha.300")(e)
            }
        };
        const r = Si(`${t}.200`, .12)(n),
            o = Si(`${t}.200`, .24)(n);
        return {
            color: V(`${t}.600`, `${t}.200`)(e),
            bg: "transparent",
            _hover: {
                bg: V(`${t}.50`, r)(e)
            },
            _active: {
                bg: V(`${t}.100`, o)(e)
            }
        }
    },
    TA = e => {
        const {
            colorScheme: t
        } = e, n = V("gray.200", "whiteAlpha.300")(e);
        return {
            border: "1px solid",
            borderColor: t === "gray" ? n : "currentColor",
            ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": {
                marginEnd: "-1px"
            },
            ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": {
                marginBottom: "-1px"
            },
            ...ft(l2, e)
        }
    },
    PA = {
        yellow: {
            bg: "yellow.400",
            color: "black",
            hoverBg: "yellow.500",
            activeBg: "yellow.600"
        },
        cyan: {
            bg: "cyan.400",
            color: "black",
            hoverBg: "cyan.500",
            activeBg: "cyan.600"
        }
    },
    AA = e => {
        var t;
        const {
            colorScheme: n
        } = e;
        if (n === "gray") {
            const l = V("gray.100", "whiteAlpha.200")(e);
            return {
                bg: l,
                _hover: {
                    bg: V("gray.200", "whiteAlpha.300")(e),
                    _disabled: {
                        bg: l
                    }
                },
                _active: {
                    bg: V("gray.300", "whiteAlpha.400")(e)
                }
            }
        }
        const {
            bg: r = `${n}.500`,
            color: o = "white",
            hoverBg: i = `${n}.600`,
            activeBg: a = `${n}.700`
        } = (t = PA[n]) != null ? t : {}, s = V(r, `${n}.200`)(e);
        return {
            bg: s,
            color: V(o, "gray.800")(e),
            _hover: {
                bg: V(i, `${n}.300`)(e),
                _disabled: {
                    bg: s
                }
            },
            _active: {
                bg: V(a, `${n}.400`)(e)
            }
        }
    },
    RA = e => {
        const {
            colorScheme: t
        } = e;
        return {
            padding: 0,
            height: "auto",
            lineHeight: "normal",
            verticalAlign: "baseline",
            color: V(`${t}.500`, `${t}.200`)(e),
            _hover: {
                textDecoration: "underline",
                _disabled: {
                    textDecoration: "none"
                }
            },
            _active: {
                color: V(`${t}.700`, `${t}.500`)(e)
            }
        }
    },
    MA = {
        bg: "none",
        color: "inherit",
        display: "inline",
        lineHeight: "inherit",
        m: "0",
        p: "0"
    },
    OA = {
        ghost: l2,
        outline: TA,
        solid: AA,
        link: RA,
        unstyled: MA
    },
    zA = {
        lg: {
            h: "12",
            minW: "12",
            fontSize: "lg",
            px: "6"
        },
        md: {
            h: "10",
            minW: "10",
            fontSize: "md",
            px: "4"
        },
        sm: {
            h: "8",
            minW: "8",
            fontSize: "sm",
            px: "3"
        },
        xs: {
            h: "6",
            minW: "6",
            fontSize: "xs",
            px: "2"
        }
    },
    $A = {
        baseStyle: EA,
        variants: OA,
        sizes: zA,
        defaultProps: {
            variant: "solid",
            size: "md",
            colorScheme: "gray"
        }
    },
    {
        definePartsStyle: ho,
        defineMultiStyleConfig: LA
    } = Ce(sT.keys),
    xu = re("card-bg"),
    qn = re("card-padding"),
    u2 = re("card-shadow"),
    Il = re("card-radius"),
    c2 = re("card-border-width", "0"),
    d2 = re("card-border-color"),
    IA = ho({
        container: {
            [xu.variable]: "colors.chakra-body-bg",
            backgroundColor: xu.reference,
            boxShadow: u2.reference,
            borderRadius: Il.reference,
            color: "chakra-body-text",
            borderWidth: c2.reference,
            borderColor: d2.reference
        },
        body: {
            padding: qn.reference,
            flex: "1 1 0%"
        },
        header: {
            padding: qn.reference
        },
        footer: {
            padding: qn.reference
        }
    }),
    DA = {
        sm: ho({
            container: {
                [Il.variable]: "radii.base",
                [qn.variable]: "space.3"
            }
        }),
        md: ho({
            container: {
                [Il.variable]: "radii.md",
                [qn.variable]: "space.5"
            }
        }),
        lg: ho({
            container: {
                [Il.variable]: "radii.xl",
                [qn.variable]: "space.7"
            }
        })
    },
    FA = {
        elevated: ho({
            container: {
                [u2.variable]: "shadows.base",
                _dark: {
                    [xu.variable]: "colors.gray.700"
                }
            }
        }),
        outline: ho({
            container: {
                [c2.variable]: "1px",
                [d2.variable]: "colors.chakra-border-color"
            }
        }),
        filled: ho({
            container: {
                [xu.variable]: "colors.chakra-subtle-bg"
            }
        }),
        unstyled: {
            body: {
                [qn.variable]: 0
            },
            header: {
                [qn.variable]: 0
            },
            footer: {
                [qn.variable]: 0
            }
        }
    },
    NA = LA({
        baseStyle: IA,
        variants: FA,
        sizes: DA,
        defaultProps: {
            variant: "elevated",
            size: "md"
        }
    }),
    ka = We("close-button-size"),
    Yi = We("close-button-bg"),
    BA = {
        w: [ka.reference],
        h: [ka.reference],
        borderRadius: "md",
        transitionProperty: "common",
        transitionDuration: "normal",
        _disabled: {
            opacity: .4,
            cursor: "not-allowed",
            boxShadow: "none"
        },
        _hover: {
            [Yi.variable]: "colors.blackAlpha.100",
            _dark: {
                [Yi.variable]: "colors.whiteAlpha.100"
            }
        },
        _active: {
            [Yi.variable]: "colors.blackAlpha.200",
            _dark: {
                [Yi.variable]: "colors.whiteAlpha.200"
            }
        },
        _focusVisible: {
            boxShadow: "outline"
        },
        bg: Yi.reference
    },
    jA = {
        lg: {
            [ka.variable]: "sizes.10",
            fontSize: "md"
        },
        md: {
            [ka.variable]: "sizes.8",
            fontSize: "xs"
        },
        sm: {
            [ka.variable]: "sizes.6",
            fontSize: "2xs"
        }
    },
    VA = {
        baseStyle: BA,
        sizes: jA,
        defaultProps: {
            size: "md"
        }
    },
    {
        variants: HA,
        defaultProps: WA
    } = wa,
    UA = {
        fontFamily: "mono",
        fontSize: "sm",
        px: "0.2em",
        borderRadius: "sm"
    },
    GA = {
        baseStyle: UA,
        variants: HA,
        defaultProps: WA
    },
    KA = {
        w: "100%",
        mx: "auto",
        maxW: "prose",
        px: "4"
    },
    qA = {
        baseStyle: KA
    },
    XA = {
        opacity: .6,
        borderColor: "inherit"
    },
    YA = {
        borderStyle: "solid"
    },
    QA = {
        borderStyle: "dashed"
    },
    ZA = {
        solid: YA,
        dashed: QA
    },
    JA = {
        baseStyle: XA,
        variants: ZA,
        defaultProps: {
            variant: "solid"
        }
    },
    {
        definePartsStyle: e7,
        defineMultiStyleConfig: t7
    } = Ce(DE.keys),
    n7 = {
        borderTopWidth: "1px",
        borderColor: "inherit",
        _last: {
            borderBottomWidth: "1px"
        }
    },
    r7 = {
        transitionProperty: "common",
        transitionDuration: "normal",
        fontSize: "md",
        _focusVisible: {
            boxShadow: "outline"
        },
        _hover: {
            bg: "blackAlpha.50"
        },
        _disabled: {
            opacity: .4,
            cursor: "not-allowed"
        },
        px: "4",
        py: "2"
    },
    o7 = {
        pt: "2",
        px: "4",
        pb: "5"
    },
    i7 = {
        fontSize: "1.25em"
    },
    a7 = e7({
        container: n7,
        button: r7,
        panel: o7,
        icon: i7
    }),
    s7 = t7({
        baseStyle: a7
    }),
    {
        definePartsStyle: Ss,
        defineMultiStyleConfig: l7
    } = Ce(FE.keys),
    zt = re("alert-fg"),
    nr = re("alert-bg"),
    u7 = Ss({
        container: {
            bg: nr.reference,
            px: "4",
            py: "3"
        },
        title: {
            fontWeight: "bold",
            lineHeight: "6",
            marginEnd: "2"
        },
        description: {
            lineHeight: "6"
        },
        icon: {
            color: zt.reference,
            flexShrink: 0,
            marginEnd: "3",
            w: "5",
            h: "6"
        },
        spinner: {
            color: zt.reference,
            flexShrink: 0,
            marginEnd: "3",
            w: "5",
            h: "5"
        }
    });

function th(e) {
    const {
        theme: t,
        colorScheme: n
    } = e, r = Si(`${n}.200`, .16)(t);
    return {
        light: `colors.${n}.100`,
        dark: r
    }
}
var c7 = Ss(e => {
        const {
            colorScheme: t
        } = e, n = th(e);
        return {
            container: {
                [zt.variable]: `colors.${t}.500`,
                [nr.variable]: n.light,
                _dark: {
                    [zt.variable]: `colors.${t}.200`,
                    [nr.variable]: n.dark
                }
            }
        }
    }),
    d7 = Ss(e => {
        const {
            colorScheme: t
        } = e, n = th(e);
        return {
            container: {
                [zt.variable]: `colors.${t}.500`,
                [nr.variable]: n.light,
                _dark: {
                    [zt.variable]: `colors.${t}.200`,
                    [nr.variable]: n.dark
                },
                paddingStart: "3",
                borderStartWidth: "4px",
                borderStartColor: zt.reference
            }
        }
    }),
    f7 = Ss(e => {
        const {
            colorScheme: t
        } = e, n = th(e);
        return {
            container: {
                [zt.variable]: `colors.${t}.500`,
                [nr.variable]: n.light,
                _dark: {
                    [zt.variable]: `colors.${t}.200`,
                    [nr.variable]: n.dark
                },
                pt: "2",
                borderTopWidth: "4px",
                borderTopColor: zt.reference
            }
        }
    }),
    p7 = Ss(e => {
        const {
            colorScheme: t
        } = e;
        return {
            container: {
                [zt.variable]: "colors.white",
                [nr.variable]: `colors.${t}.500`,
                _dark: {
                    [zt.variable]: "colors.gray.900",
                    [nr.variable]: `colors.${t}.200`
                },
                color: zt.reference
            }
        }
    }),
    m7 = {
        subtle: c7,
        "left-accent": d7,
        "top-accent": f7,
        solid: p7
    },
    h7 = l7({
        baseStyle: u7,
        variants: m7,
        defaultProps: {
            variant: "subtle",
            colorScheme: "blue"
        }
    }),
    {
        definePartsStyle: f2,
        defineMultiStyleConfig: g7
    } = Ce(NE.keys),
    di = re("avatar-border-color"),
    Id = re("avatar-bg"),
    y7 = {
        borderRadius: "full",
        border: "0.2em solid",
        [di.variable]: "white",
        _dark: {
            [di.variable]: "colors.gray.800"
        },
        borderColor: di.reference
    },
    v7 = {
        [Id.variable]: "colors.gray.200",
        _dark: {
            [Id.variable]: "colors.whiteAlpha.400"
        },
        bgColor: Id.reference
    },
    ky = re("avatar-background"),
    b7 = e => {
        const {
            name: t,
            theme: n
        } = e, r = t ? TT({
            string: t
        }) : "colors.gray.400", o = _T(r)(n);
        let i = "white";
        return o || (i = "gray.800"), {
            bg: ky.reference,
            "&:not([data-loaded])": {
                [ky.variable]: r
            },
            color: i,
            [di.variable]: "colors.white",
            _dark: {
                [di.variable]: "colors.gray.800"
            },
            borderColor: di.reference,
            verticalAlign: "top"
        }
    },
    S7 = f2(e => ({
        badge: ft(y7, e),
        excessLabel: ft(v7, e),
        container: ft(b7, e)
    }));

function fr(e) {
    const t = e !== "100%" ? n2[e] : void 0;
    return f2({
        container: {
            width: e,
            height: e,
            fontSize: `calc(${t??e} / 2.5)`
        },
        excessLabel: {
            width: e,
            height: e
        },
        label: {
            fontSize: `calc(${t??e} / 2.5)`,
            lineHeight: e !== "100%" ? t ? ? e : void 0
        }
    })
}
var w7 = {
        "2xs": fr(4),
        xs: fr(6),
        sm: fr(8),
        md: fr(12),
        lg: fr(16),
        xl: fr(24),
        "2xl": fr(32),
        full: fr("100%")
    },
    x7 = g7({
        baseStyle: S7,
        sizes: w7,
        defaultProps: {
            size: "md"
        }
    }),
    k7 = {
        Accordion: s7,
        Alert: h7,
        Avatar: x7,
        Badge: wa,
        Breadcrumb: _A,
        Button: $A,
        Checkbox: wu,
        CloseButton: VA,
        Code: GA,
        Container: qA,
        Divider: JA,
        Drawer: Y8,
        Editable: rA,
        Form: uA,
        FormError: hA,
        FormLabel: yA,
        Heading: SA,
        Input: de,
        Kbd: j6,
        Link: H6,
        List: q6,
        Menu: o8,
        Modal: h8,
        NumberInput: C8,
        PinInput: P8,
        Popover: N8,
        Progress: KP,
        Radio: a6,
        Select: p6,
        Skeleton: h6,
        SkipLink: y6,
        Slider: P6,
        Spinner: M6,
        Stat: N6,
        Switch: HT,
        Table: YT,
        Tabs: dP,
        Tag: CP,
        Textarea: IP,
        Tooltip: NP,
        Card: NA
    },
    C7 = {
        colors: {
            "chakra-body-text": {
                _light: "gray.800",
                _dark: "whiteAlpha.900"
            },
            "chakra-body-bg": {
                _light: "white",
                _dark: "gray.800"
            },
            "chakra-border-color": {
                _light: "gray.200",
                _dark: "whiteAlpha.300"
            },
            "chakra-subtle-bg": {
                _light: "gray.100",
                _dark: "gray.700"
            },
            "chakra-placeholder-color": {
                _light: "gray.500",
                _dark: "whiteAlpha.400"
            }
        }
    },
    _7 = {
        global: {
            body: {
                fontFamily: "body",
                color: "chakra-body-text",
                bg: "chakra-body-bg",
                transitionProperty: "background-color",
                transitionDuration: "normal",
                lineHeight: "base"
            },
            "*::placeholder": {
                color: "chakra-placeholder-color"
            },
            "*, *::before, &::after": {
                borderColor: "chakra-border-color",
                wordWrap: "break-word"
            }
        }
    },
    E7 = "ltr",
    T7 = {
        useSystemColorMode: !1,
        initialColorMode: "light",
        cssVarPrefix: "chakra"
    },
    p2 = {
        semanticTokens: C7,
        direction: E7,
        ...IE,
        components: k7,
        styles: _7,
        config: T7
    };

function la(e) {
    return typeof e == "function"
}

function P7(...e) {
    return t => e.reduce((n, r) => r(n), t)
}
var A7 = e => function(...n) {
        let r = [...n],
            o = n[n.length - 1];
        return fE(o) && r.length > 1 ? r = r.slice(0, r.length - 1) : o = e, P7(...r.map(i => a => la(i) ? i(a) : M7(a, i)))(o)
    },
    R7 = A7(p2);

function M7(...e) {
    return Xt({}, ...e, m2)
}

function m2(e, t, n, r) {
    if ((la(e) || la(t)) && Object.prototype.hasOwnProperty.call(r, n)) return (...o) => {
        const i = la(e) ? e(...o) : e,
            a = la(t) ? t(...o) : t;
        return Xt({}, i, a, m2)
    }
}

function O7(e, t) {
    const n = {};
    return Object.keys(e).forEach(r => {
        t.includes(r) || (n[r] = e[r])
    }), n
}

function z7(e, t, n, r) {
    const o = typeof t == "string" ? t.split(".") : [t];
    for (r = 0; r < o.length && e; r += 1) e = e[o[r]];
    return e === void 0 ? n : e
}
var $7 = e => {
        const t = new WeakMap;
        return (r, o, i, a) => {
            if (typeof r > "u") return e(r, o, i);
            t.has(r) || t.set(r, new Map);
            const s = t.get(r);
            if (s.has(o)) return s.get(o);
            const l = e(r, o, i, a);
            return s.set(o, l), l
        }
    },
    h2 = $7(z7);

function g2(e, t) {
    const n = {};
    return Object.keys(e).forEach(r => {
        const o = e[r];
        t(o, r, e) && (n[r] = o)
    }), n
}
var y2 = e => g2(e, t => t != null);

function L7(e) {
    return typeof e == "function"
}

function v2(e, ...t) {
    return L7(e) ? e(...t) : e
}
var I7 = typeof Element < "u",
    D7 = typeof Map == "function",
    F7 = typeof Set == "function",
    N7 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;

function Dl(e, t) {
    if (e === t) return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
        if (e.constructor !== t.constructor) return !1;
        var n, r, o;
        if (Array.isArray(e)) {
            if (n = e.length, n != t.length) return !1;
            for (r = n; r-- !== 0;)
                if (!Dl(e[r], t[r])) return !1;
            return !0
        }
        var i;
        if (D7 && e instanceof Map && t instanceof Map) {
            if (e.size !== t.size) return !1;
            for (i = e.entries(); !(r = i.next()).done;)
                if (!t.has(r.value[0])) return !1;
            for (i = e.entries(); !(r = i.next()).done;)
                if (!Dl(r.value[1], t.get(r.value[0]))) return !1;
            return !0
        }
        if (F7 && e instanceof Set && t instanceof Set) {
            if (e.size !== t.size) return !1;
            for (i = e.entries(); !(r = i.next()).done;)
                if (!t.has(r.value[0])) return !1;
            return !0
        }
        if (N7 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
            if (n = e.length, n != t.length) return !1;
            for (r = n; r-- !== 0;)
                if (e[r] !== t[r]) return !1;
            return !0
        }
        if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
        if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
        for (r = n; r-- !== 0;)
            if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
        if (I7 && e instanceof Element) return !1;
        for (r = n; r-- !== 0;)
            if (!((o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") && e.$$typeof) && !Dl(e[o[r]], t[o[r]])) return !1;
        return !0
    }
    return e !== e && t !== t
}
var B7 = function(t, n) {
    try {
        return Dl(t, n)
    } catch (r) {
        if ((r.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
        throw r
    }
};

function b2(e, t = {}) {
    var n;
    const {
        styleConfig: r,
        ...o
    } = t, {
        theme: i,
        colorMode: a
    } = G4(), s = e ? h2(i, `components.${e}`) : void 0, l = r || s, u = Xt({
        theme: i,
        colorMode: a
    }, (n = l == null ? void 0 : l.defaultProps) != null ? n : {}, y2(O7(o, ["children"]))), c = b.useRef({});
    if (l) {
        const f = cE(l)(u);
        B7(c.current, f) || (c.current = f)
    }
    return c.current
}

function Vr(e, t = {}) {
    return b2(e, t)
}

function Hr(e, t = {}) {
    return b2(e, t)
}
var j7 = new Set([...Z_, "textStyle", "layerStyle", "apply", "noOfLines", "focusBorderColor", "errorBorderColor", "as", "__css", "css", "sx"]),
    V7 = new Set(["htmlWidth", "htmlHeight", "htmlSize", "htmlTranslate"]);

function H7(e) {
    return V7.has(e) || !j7.has(e)
}

function nh(e) {
    const t = Object.assign({}, e);
    for (let n in t) t[n] === void 0 && delete t[n];
    return t
}

function W7(e, ...t) {
    if (e == null) throw new TypeError("Cannot convert undefined or null to object");
    const n = { ...e
    };
    for (const r of t)
        if (r != null)
            for (const o in r) Object.prototype.hasOwnProperty.call(r, o) && (o in n && delete n[o], n[o] = r[o]);
    return n
}
var U7 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    G7 = RS(function(e) {
        return U7.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91
    }),
    K7 = G7,
    q7 = function(t) {
        return t !== "theme"
    },
    Cy = function(t) {
        return typeof t == "string" && t.charCodeAt(0) > 96 ? K7 : q7
    },
    _y = function(t, n, r) {
        var o;
        if (n) {
            var i = n.shouldForwardProp;
            o = t.__emotion_forwardProp && i ? function(a) {
                return t.__emotion_forwardProp(a) && i(a)
            } : i
        }
        return typeof o != "function" && r && (o = t.__emotion_forwardProp), o
    },
    X7 = function(t) {
        var n = t.cache,
            r = t.serialized,
            o = t.isStringTag;
        return LS(n, r, o), k4(function() {
            return IS(n, r, o)
        }), null
    },
    Y7 = function e(t, n) {
        var r = t.__emotion_real === t,
            o = r && t.__emotion_base || t,
            i, a;
        n !== void 0 && (i = n.label, a = n.target);
        var s = _y(t, n, r),
            l = s || Cy(o),
            u = !l("as");
        return function() {
            var c = arguments,
                d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
            if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0) d.push.apply(d, c);
            else {
                d.push(c[0][0]);
                for (var f = c.length, p = 1; p < f; p++) d.push(c[p], c[0][p])
            }
            var m = BS(function(y, x, g) {
                var h = u && y.as || o,
                    v = "",
                    w = [],
                    E = y;
                if (y.theme == null) {
                    E = {};
                    for (var P in y) E[P] = y[P];
                    E.theme = b.useContext(ts)
                }
                typeof y.className == "string" ? v = g4(x.registered, w, y.className) : y.className != null && (v = y.className + " ");
                var T = Wm(d.concat(w), x.registered, E);
                v += x.key + "-" + T.name, a !== void 0 && (v += " " + a);
                var R = u && s === void 0 ? Cy(h) : l,
                    I = {};
                for (var M in y) u && M === "as" || R(M) && (I[M] = y[M]);
                return I.className = v, I.ref = g, b.createElement(b.Fragment, null, b.createElement(X7, {
                    cache: x,
                    serialized: T,
                    isStringTag: typeof h == "string"
                }), b.createElement(h, I))
            });
            return m.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", m.defaultProps = t.defaultProps, m.__emotion_real = m, m.__emotion_base = o, m.__emotion_styles = d, m.__emotion_forwardProp = s, Object.defineProperty(m, "toString", {
                value: function() {
                    return "." + a
                }
            }), m.withComponent = function(y, x) {
                return e(y, yu({}, n, x, {
                    shouldForwardProp: _y(m, x, !0)
                })).apply(void 0, d)
            }, m
        }
    },
    Q7 = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"],
    ku = Y7.bind();
Q7.forEach(function(e) {
    ku[e] = ku(e)
});
var Ey, Z7 = (Ey = ku.default) != null ? Ey : ku,
    J7 = ({
        baseStyle: e
    }) => t => {
        const {
            theme: n,
            css: r,
            __css: o,
            sx: i,
            ...a
        } = t, s = g2(a, (d, f) => eE(f)), l = v2(e, t), u = W7({}, o, l, y2(s), i), c = JS(u)(t.theme);
        return r ? [c, r] : c
    };

function Dd(e, t) {
    const {
        baseStyle: n,
        ...r
    } = t ? ? {};
    r.shouldForwardProp || (r.shouldForwardProp = H7);
    const o = J7({
            baseStyle: n
        }),
        i = Z7(e, r)(o);
    return Rt.forwardRef(function(l, u) {
        const {
            colorMode: c,
            forced: d
        } = pc();
        return Rt.createElement(i, {
            ref: u,
            "data-theme": d ? c : void 0,
            ...l
        })
    })
}

function e9() {
    const e = new Map;
    return new Proxy(Dd, {
        apply(t, n, r) {
            return Dd(...r)
        },
        get(t, n) {
            return e.has(n) || e.set(n, Dd(n)), e.get(n)
        }
    })
}
var G = e9();

function X(e) {
    return b.forwardRef(e)
}

function S2(e = {}) {
    const {
        strict: t = !0,
        errorMessage: n = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
        name: r
    } = e, o = b.createContext(void 0);
    o.displayName = r;

    function i() {
        var a;
        const s = b.useContext(o);
        if (!s && t) {
            const l = new Error(n);
            throw l.name = "ContextError", (a = Error.captureStackTrace) == null || a.call(Error, l, i), l
        }
        return s
    }
    return [o.Provider, i, o]
}

function t9(e) {
    const {
        cssVarsRoot: t,
        theme: n,
        children: r
    } = e, o = b.useMemo(() => Q_(n), [n]);
    return fe(E4, {
        theme: o,
        children: [_(n9, {
            root: t
        }), r]
    })
}

function n9({
    root: e = ":host, :root"
}) {
    const t = [e, "[data-theme]"].join(",");
    return _(dc, {
        styles: n => ({
            [t]: n.__cssVars
        })
    })
}
S2({
    name: "StylesContext",
    errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});

function r9(e) {
    return S2({
        name: `${e}StylesContext`,
        errorMessage: `useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<${e} />" `
    })
}

function o9() {
    const {
        colorMode: e
    } = pc();
    return _(dc, {
        styles: t => {
            const n = h2(t, "styles.global"),
                r = v2(n, {
                    theme: t,
                    colorMode: e
                });
            return r ? JS(r)(t) : void 0
        }
    })
}
var rh = b.createContext({
    getDocument() {
        return document
    },
    getWindow() {
        return window
    }
});
rh.displayName = "EnvironmentContext";

function i9({
    defer: e
} = {}) {
    const [, t] = b.useReducer(n => n + 1, 0);
    return Kn(() => {
        e && t()
    }, [e]), b.useContext(rh)
}

function w2(e) {
    const {
        children: t,
        environment: n,
        disabled: r
    } = e, o = b.useRef(null), i = b.useMemo(() => n || {
        getDocument: () => {
            var s, l;
            return (l = (s = o.current) == null ? void 0 : s.ownerDocument) != null ? l : document
        },
        getWindow: () => {
            var s, l;
            return (l = (s = o.current) == null ? void 0 : s.ownerDocument.defaultView) != null ? l : window
        }
    }, [n]), a = !r || !n;
    return fe(rh.Provider, {
        value: i,
        children: [t, a && _("span", {
            id: "__chakra_env",
            hidden: !0,
            ref: o
        })]
    })
}
w2.displayName = "EnvironmentProvider";
var a9 = e => {
        const {
            children: t,
            colorModeManager: n,
            portalZIndex: r,
            resetCSS: o = !0,
            theme: i = {},
            environment: a,
            cssVarsRoot: s,
            disableEnvironment: l
        } = e, u = _(w2, {
            environment: a,
            disabled: l,
            children: t
        });
        return _(t9, {
            theme: i,
            cssVarsRoot: s,
            children: fe(WS, {
                colorModeManager: n,
                options: i.config,
                children: [o ? _(A4, {}) : _(P4, {}), _(o9, {}), r ? _(VS, {
                    zIndex: r,
                    children: u
                }) : u]
            })
        })
    },
    s9 = (e, t) => e.find(n => n.id === t);

function Ty(e, t) {
    const n = x2(e, t),
        r = n ? e[n].findIndex(o => o.id === t) : -1;
    return {
        position: n,
        index: r
    }
}

function x2(e, t) {
    for (const [n, r] of Object.entries(e))
        if (s9(r, t)) return n
}

function l9(e) {
    const t = e.includes("right"),
        n = e.includes("left");
    let r = "center";
    return t && (r = "flex-end"), n && (r = "flex-start"), {
        display: "flex",
        flexDirection: "column",
        alignItems: r
    }
}

function u9(e) {
    const n = e === "top" || e === "bottom" ? "0 auto" : void 0,
        r = e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0,
        o = e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0,
        i = e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)",
        a = e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)";
    return {
        position: "fixed",
        zIndex: 5500,
        pointerEvents: "none",
        display: "flex",
        flexDirection: "column",
        margin: n,
        top: r,
        bottom: o,
        right: i,
        left: a
    }
}

function Mr(e, t = []) {
    const n = b.useRef(e);
    return b.useEffect(() => {
        n.current = e
    }), b.useCallback((...r) => {
        var o;
        return (o = n.current) == null ? void 0 : o.call(n, ...r)
    }, t)
}

function c9(e, t) {
    const n = Mr(e);
    b.useEffect(() => {
        if (t == null) return;
        let r = null;
        return r = window.setTimeout(() => {
            n()
        }, t), () => {
            r && window.clearTimeout(r)
        }
    }, [t, n])
}

function wi(e, t) {
    const n = b.useRef(!1),
        r = b.useRef(!1);
    b.useEffect(() => {
        if (n.current && r.current) return e();
        r.current = !0
    }, t), b.useEffect(() => (n.current = !0, () => {
        n.current = !1
    }), [])
}
const k2 = b.createContext({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    }),
    vc = b.createContext({});

function d9() {
    return b.useContext(vc).visualElement
}
const ws = b.createContext(null),
    bc = typeof document < "u",
    Cu = bc ? b.useLayoutEffect : b.useEffect,
    C2 = b.createContext({
        strict: !1
    });

function f9(e, t, n, r) {
    const o = d9(),
        i = b.useContext(C2),
        a = b.useContext(ws),
        s = b.useContext(k2).reducedMotion,
        l = b.useRef();
    r = r || i.renderer, !l.current && r && (l.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: s
    }));
    const u = l.current;
    return b.useInsertionEffect(() => {
        u && u.update(n, a)
    }), Cu(() => {
        u && u.render()
    }), b.useEffect(() => {
        u && u.updateFeatures()
    }), (window.HandoffAppearAnimations ? Cu : b.useEffect)(() => {
        u && u.animationState && u.animationState.animateChanges()
    }), u
}

function Qo(e) {
    return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}

function p9(e, t, n) {
    return b.useCallback(r => {
        r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Qo(n) && (n.current = r))
    }, [t])
}

function is(e) {
    return typeof e == "string" || Array.isArray(e)
}

function Sc(e) {
    return typeof e == "object" && typeof e.start == "function"
}
const oh = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    ih = ["initial", ...oh];

function wc(e) {
    return Sc(e.animate) || ih.some(t => is(e[t]))
}

function _2(e) {
    return Boolean(wc(e) || e.variants)
}

function m9(e, t) {
    if (wc(e)) {
        const {
            initial: n,
            animate: r
        } = e;
        return {
            initial: n === !1 || is(n) ? n : void 0,
            animate: is(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}

function h9(e) {
    const {
        initial: t,
        animate: n
    } = m9(e, b.useContext(vc));
    return b.useMemo(() => ({
        initial: t,
        animate: n
    }), [Py(t), Py(n)])
}

function Py(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Ay = {
        animation: ["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    },
    as = {};
for (const e in Ay) as[e] = {
    isEnabled: t => Ay[e].some(n => !!t[n])
};

function g9(e) {
    for (const t in e) as[t] = { ...as[t],
        ...e[t]
    }
}

function ah(e) {
    const t = b.useRef(null);
    return t.current === null && (t.current = e()), t.current
}
const Ca = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
let y9 = 1;

function v9() {
    return ah(() => {
        if (Ca.hasEverUpdated) return y9++
    })
}
const sh = b.createContext({}),
    E2 = b.createContext({}),
    b9 = Symbol.for("motionComponentSymbol");

function S9({
    preloadedFeatures: e,
    createVisualElement: t,
    useRender: n,
    useVisualState: r,
    Component: o
}) {
    e && g9(e);

    function i(s, l) {
        let u;
        const c = { ...b.useContext(k2),
                ...s,
                layoutId: w9(s)
            },
            {
                isStatic: d
            } = c,
            f = h9(s),
            p = d ? void 0 : v9(),
            m = r(s, d);
        if (!d && bc) {
            f.visualElement = f9(o, m, c, t);
            const y = b.useContext(E2),
                x = b.useContext(C2).strict;
            f.visualElement && (u = f.visualElement.loadFeatures(c, x, e, p, y))
        }
        return b.createElement(vc.Provider, {
            value: f
        }, u && f.visualElement ? b.createElement(u, {
            visualElement: f.visualElement,
            ...c
        }) : null, n(o, s, p, p9(m, f.visualElement, l), m, d, f.visualElement))
    }
    const a = b.forwardRef(i);
    return a[b9] = o, a
}

function w9({
    layoutId: e
}) {
    const t = b.useContext(sh).id;
    return t && e !== void 0 ? t + "-" + e : e
}

function x9(e) {
    function t(r, o = {}) {
        return S9(e(r, o))
    }
    if (typeof Proxy > "u") return t;
    const n = new Map;
    return new Proxy(t, {
        get: (r, o) => (n.has(o) || n.set(o, t(o)), n.get(o))
    })
}
const k9 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function lh(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(k9.indexOf(e) > -1 || /[A-Z]/.test(e))
}
const _u = {};

function C9(e) {
    Object.assign(_u, e)
}
const xc = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    To = new Set(xc);

function T2(e, {
    layout: t,
    layoutId: n
}) {
    return To.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!_u[e] || e === "opacity")
}
const _t = e => Boolean(e && e.getVelocity),
    _9 = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    E9 = xc.length;

function T9(e, {
    enableHardwareAcceleration: t = !0,
    allowTransformNone: n = !0
}, r, o) {
    let i = "";
    for (let a = 0; a < E9; a++) {
        const s = xc[a];
        if (e[s] !== void 0) {
            const l = _9[s] || s;
            i += `${l}(${e[s]}) `
        }
    }
    return t && !e.z && (i += "translateZ(0)"), i = i.trim(), o ? i = o(e, r ? "" : i) : n && r && (i = "none"), i
}
const P2 = e => t => typeof t == "string" && t.startsWith(e),
    A2 = P2("--"),
    cp = P2("var(--"),
    P9 = (e, t) => t && typeof e == "number" ? t.transform(e) : e,
    xi = (e, t, n) => Math.min(Math.max(n, e), t),
    Po = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    },
    _a = { ...Po,
        transform: e => xi(0, 1, e)
    },
    pl = { ...Po,
        default: 1
    },
    Ea = e => Math.round(e * 1e5) / 1e5,
    ss = /(-)?([\d]*\.?[\d])+/g,
    dp = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
    A9 = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

function xs(e) {
    return typeof e == "string"
}
const ks = e => ({
        test: t => xs(t) && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: t => `${t}${e}`
    }),
    mr = ks("deg"),
    On = ks("%"),
    U = ks("px"),
    R9 = ks("vh"),
    M9 = ks("vw"),
    Ry = { ...On,
        parse: e => On.parse(e) / 100,
        transform: e => On.transform(e * 100)
    },
    My = { ...Po,
        transform: Math.round
    },
    R2 = {
        borderWidth: U,
        borderTopWidth: U,
        borderRightWidth: U,
        borderBottomWidth: U,
        borderLeftWidth: U,
        borderRadius: U,
        radius: U,
        borderTopLeftRadius: U,
        borderTopRightRadius: U,
        borderBottomRightRadius: U,
        borderBottomLeftRadius: U,
        width: U,
        maxWidth: U,
        height: U,
        maxHeight: U,
        size: U,
        top: U,
        right: U,
        bottom: U,
        left: U,
        padding: U,
        paddingTop: U,
        paddingRight: U,
        paddingBottom: U,
        paddingLeft: U,
        margin: U,
        marginTop: U,
        marginRight: U,
        marginBottom: U,
        marginLeft: U,
        rotate: mr,
        rotateX: mr,
        rotateY: mr,
        rotateZ: mr,
        scale: pl,
        scaleX: pl,
        scaleY: pl,
        scaleZ: pl,
        skew: mr,
        skewX: mr,
        skewY: mr,
        distance: U,
        translateX: U,
        translateY: U,
        translateZ: U,
        x: U,
        y: U,
        z: U,
        perspective: U,
        transformPerspective: U,
        opacity: _a,
        originX: Ry,
        originY: Ry,
        originZ: U,
        zIndex: My,
        fillOpacity: _a,
        strokeOpacity: _a,
        numOctaves: My
    };

function uh(e, t, n, r) {
    const {
        style: o,
        vars: i,
        transform: a,
        transformOrigin: s
    } = e;
    let l = !1,
        u = !1,
        c = !0;
    for (const d in t) {
        const f = t[d];
        if (A2(d)) {
            i[d] = f;
            continue
        }
        const p = R2[d],
            m = P9(f, p);
        if (To.has(d)) {
            if (l = !0, a[d] = m, !c) continue;
            f !== (p.default || 0) && (c = !1)
        } else d.startsWith("origin") ? (u = !0, s[d] = m) : o[d] = m
    }
    if (t.transform || (l || r ? o.transform = T9(e.transform, n, c, r) : o.transform && (o.transform = "none")), u) {
        const {
            originX: d = "50%",
            originY: f = "50%",
            originZ: p = 0
        } = s;
        o.transformOrigin = `${d} ${f} ${p}`
    }
}
const ch = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});

function M2(e, t, n) {
    for (const r in t) !_t(t[r]) && !T2(r, n) && (e[r] = t[r])
}

function O9({
    transformTemplate: e
}, t, n) {
    return b.useMemo(() => {
        const r = ch();
        return uh(r, t, {
            enableHardwareAcceleration: !n
        }, e), Object.assign({}, r.vars, r.style)
    }, [t])
}

function z9(e, t, n) {
    const r = e.style || {},
        o = {};
    return M2(o, r, e), Object.assign(o, O9(e, t, n)), e.transformValues ? e.transformValues(o) : o
}

function $9(e, t, n) {
    const r = {},
        o = z9(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag==="x"?"y":"x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = o, r
}
const L9 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);

function Eu(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || L9.has(e)
}
let O2 = e => !Eu(e);

function I9(e) {
    e && (O2 = t => t.startsWith("on") ? !Eu(t) : e(t))
}
try {
    I9(require("@emotion/is-prop-valid").default)
} catch {}

function D9(e, t, n) {
    const r = {};
    for (const o in e) o === "values" && typeof e.values == "object" || (O2(o) || n === !0 && Eu(o) || !t && !Eu(o) || e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
    return r
}

function Oy(e, t, n) {
    return typeof e == "string" ? e : U.transform(t + n * e)
}

function F9(e, t, n) {
    const r = Oy(t, e.x, e.width),
        o = Oy(n, e.y, e.height);
    return `${r} ${o}`
}
const N9 = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    B9 = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function j9(e, t, n = 1, r = 0, o = !0) {
    e.pathLength = 1;
    const i = o ? N9 : B9;
    e[i.offset] = U.transform(-r);
    const a = U.transform(t),
        s = U.transform(n);
    e[i.array] = `${a} ${s}`
}

function dh(e, {
    attrX: t,
    attrY: n,
    originX: r,
    originY: o,
    pathLength: i,
    pathSpacing: a = 1,
    pathOffset: s = 0,
    ...l
}, u, c, d) {
    if (uh(e, l, u, d), c) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style, e.style = {};
    const {
        attrs: f,
        style: p,
        dimensions: m
    } = e;
    f.transform && (m && (p.transform = f.transform), delete f.transform), m && (r !== void 0 || o !== void 0 || p.transform) && (p.transformOrigin = F9(m, r !== void 0 ? r : .5, o !== void 0 ? o : .5)), t !== void 0 && (f.x = t), n !== void 0 && (f.y = n), i !== void 0 && j9(f, i, a, s, !1)
}
const z2 = () => ({ ...ch(),
        attrs: {}
    }),
    fh = e => typeof e == "string" && e.toLowerCase() === "svg";

function V9(e, t, n, r) {
    const o = b.useMemo(() => {
        const i = z2();
        return dh(i, t, {
            enableHardwareAcceleration: !1
        }, fh(r), e.transformTemplate), { ...i.attrs,
            style: { ...i.style
            }
        }
    }, [t]);
    if (e.style) {
        const i = {};
        M2(i, e.style, e), o.style = { ...i,
            ...o.style
        }
    }
    return o
}

function H9(e = !1) {
    return (n, r, o, i, {
        latestValues: a
    }, s) => {
        const u = (lh(n) ? V9 : $9)(r, a, s, n),
            d = { ...D9(r, typeof n == "string", e),
                ...u,
                ref: i
            },
            {
                children: f
            } = r,
            p = b.useMemo(() => _t(f) ? f.get() : f, [f]);
        return o && (d["data-projection-id"] = o), b.createElement(n, { ...d,
            children: p
        })
    }
}
const ph = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

function $2(e, {
    style: t,
    vars: n
}, r, o) {
    Object.assign(e.style, t, o && o.getProjectionStyles(r));
    for (const i in n) e.style.setProperty(i, n[i])
}
const L2 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function I2(e, t, n, r) {
    $2(e, t, void 0, r);
    for (const o in t.attrs) e.setAttribute(L2.has(o) ? o : ph(o), t.attrs[o])
}

function mh(e, t) {
    const {
        style: n
    } = e, r = {};
    for (const o in n)(_t(n[o]) || t.style && _t(t.style[o]) || T2(o, e)) && (r[o] = n[o]);
    return r
}

function D2(e, t) {
    const n = mh(e, t);
    for (const r in e)
        if (_t(e[r]) || _t(t[r])) {
            const o = r === "x" || r === "y" ? "attr" + r.toUpperCase() : r;
            n[o] = e[r]
        }
    return n
}

function hh(e, t, n, r = {}, o = {}) {
    return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), t
}
const Tu = e => Array.isArray(e),
    W9 = e => Boolean(e && typeof e == "object" && e.mix && e.toValue),
    U9 = e => Tu(e) ? e[e.length - 1] || 0 : e;

function Fl(e) {
    const t = _t(e) ? e.get() : e;
    return W9(t) ? t.toValue() : t
}

function G9({
    scrapeMotionValuesFromProps: e,
    createRenderState: t,
    onMount: n
}, r, o, i) {
    const a = {
        latestValues: K9(r, o, i, e),
        renderState: t()
    };
    return n && (a.mount = s => n(r, s, a)), a
}
const F2 = e => (t, n) => {
    const r = b.useContext(vc),
        o = b.useContext(ws),
        i = () => G9(e, t, r, o);
    return n ? i() : ah(i)
};

function K9(e, t, n, r) {
    const o = {},
        i = r(e, {});
    for (const f in i) o[f] = Fl(i[f]);
    let {
        initial: a,
        animate: s
    } = e;
    const l = wc(e),
        u = _2(e);
    t && u && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || a === !1;
    const d = c ? s : a;
    return d && typeof d != "boolean" && !Sc(d) && (Array.isArray(d) ? d : [d]).forEach(p => {
        const m = hh(e, p);
        if (!m) return;
        const {
            transitionEnd: y,
            transition: x,
            ...g
        } = m;
        for (const h in g) {
            let v = g[h];
            if (Array.isArray(v)) {
                const w = c ? v.length - 1 : 0;
                v = v[w]
            }
            v !== null && (o[h] = v)
        }
        for (const h in y) o[h] = y[h]
    }), o
}
const q9 = {
        useVisualState: F2({
            scrapeMotionValuesFromProps: D2,
            createRenderState: z2,
            onMount: (e, t, {
                renderState: n,
                latestValues: r
            }) => {
                try {
                    n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                } catch {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
                dh(n, r, {
                    enableHardwareAcceleration: !1
                }, fh(t.tagName), e.transformTemplate), I2(t, n)
            }
        })
    },
    X9 = {
        useVisualState: F2({
            scrapeMotionValuesFromProps: mh,
            createRenderState: ch
        })
    };

function Y9(e, {
    forwardMotionProps: t = !1
}, n, r) {
    return { ...lh(e) ? q9 : X9,
        preloadedFeatures: n,
        useRender: H9(t),
        createVisualElement: r,
        Component: e
    }
}

function Un(e, t, n, r = {
    passive: !0
}) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}
const N2 = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;

function kc(e, t = "page") {
    return {
        point: {
            x: e[t + "X"],
            y: e[t + "Y"]
        }
    }
}
const Q9 = e => t => N2(t) && e(t, kc(t));

function Xn(e, t, n, r) {
    return Un(e, t, Q9(n), r)
}
const Z9 = (e, t) => n => t(e(n)),
    Or = (...e) => e.reduce(Z9);

function B2(e) {
    let t = null;
    return () => {
        const n = () => {
            t = null
        };
        return t === null ? (t = e, n) : !1
    }
}
const zy = B2("dragHorizontal"),
    $y = B2("dragVertical");

function j2(e) {
    let t = !1;
    if (e === "y") t = $y();
    else if (e === "x") t = zy();
    else {
        const n = zy(),
            r = $y();
        n && r ? t = () => {
            n(), r()
        } : (n && n(), r && r())
    }
    return t
}

function V2() {
    const e = j2(!0);
    return e ? (e(), !1) : !0
}
class Wr {
    constructor(t) {
        this.isMounted = !1, this.node = t
    }
    update() {}
}

function Ly(e, t) {
    const n = "pointer" + (t ? "enter" : "leave"),
        r = "onHover" + (t ? "Start" : "End"),
        o = (i, a) => {
            if (i.type === "touch" || V2()) return;
            const s = e.getProps();
            e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[r] && s[r](i, a)
        };
    return Xn(e.current, n, o, {
        passive: !e.getProps()[r]
    })
}
class J9 extends Wr {
    mount() {
        this.unmount = Or(Ly(this.node, !0), Ly(this.node, !1))
    }
    unmount() {}
}
class eR extends Wr {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }!t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = Or(Un(this.node.current, "focus", () => this.onFocus()), Un(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const H2 = (e, t) => t ? e === t ? !0 : H2(e, t.parentElement) : !1,
    Qt = e => e;

function Fd(e, t) {
    if (!t) return;
    const n = new PointerEvent("pointer" + e);
    t(n, kc(n))
}
class tR extends Wr {
    constructor() {
        super(...arguments), this.removeStartListeners = Qt, this.removeEndListeners = Qt, this.removeAccessibleListeners = Qt, this.startPointerPress = (t, n) => {
            if (this.removeEndListeners(), this.isPressing) return;
            const r = this.node.getProps(),
                i = Xn(window, "pointerup", (s, l) => {
                    if (!this.checkPressEnd()) return;
                    const {
                        onTap: u,
                        onTapCancel: c
                    } = this.node.getProps();
                    H2(this.node.current, s.target) ? u && u(s, l) : c && c(s, l)
                }, {
                    passive: !(r.onTap || r.onPointerUp)
                }),
                a = Xn(window, "pointercancel", (s, l) => this.cancelPress(s, l), {
                    passive: !(r.onTapCancel || r.onPointerCancel)
                });
            this.removeEndListeners = Or(i, a), this.startPress(t, n)
        }, this.startAccessiblePress = () => {
            const t = i => {
                    if (i.key !== "Enter" || this.isPressing) return;
                    const a = s => {
                        s.key !== "Enter" || !this.checkPressEnd() || Fd("up", this.node.getProps().onTap)
                    };
                    this.removeEndListeners(), this.removeEndListeners = Un(this.node.current, "keyup", a), Fd("down", (s, l) => {
                        this.startPress(s, l)
                    })
                },
                n = Un(this.node.current, "keydown", t),
                r = () => {
                    this.isPressing && Fd("cancel", (i, a) => this.cancelPress(i, a))
                },
                o = Un(this.node.current, "blur", r);
            this.removeAccessibleListeners = Or(n, o)
        }
    }
    startPress(t, n) {
        this.isPressing = !0;
        const {
            onTapStart: r,
            whileTap: o
        } = this.node.getProps();
        o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && r(t, n)
    }
    checkPressEnd() {
        return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !V2()
    }
    cancelPress(t, n) {
        if (!this.checkPressEnd()) return;
        const {
            onTapCancel: r
        } = this.node.getProps();
        r && r(t, n)
    }
    mount() {
        const t = this.node.getProps(),
            n = Xn(this.node.current, "pointerdown", this.startPointerPress, {
                passive: !(t.onTapStart || t.onPointerStart)
            }),
            r = Un(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = Or(n, r)
    }
    unmount() {
        this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
    }
}
const fp = new WeakMap,
    Nd = new WeakMap,
    nR = e => {
        const t = fp.get(e.target);
        t && t(e)
    },
    rR = e => {
        e.forEach(nR)
    };

function oR({
    root: e,
    ...t
}) {
    const n = e || document;
    Nd.has(n) || Nd.set(n, {});
    const r = Nd.get(n),
        o = JSON.stringify(t);
    return r[o] || (r[o] = new IntersectionObserver(rR, {
        root: e,
        ...t
    })), r[o]
}

function iR(e, t, n) {
    const r = oR(t);
    return fp.set(e, n), r.observe(e), () => {
        fp.delete(e), r.unobserve(e)
    }
}
const aR = {
    some: 0,
    all: 1
};
class sR extends Wr {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: t = {}
        } = this.node.getProps(), {
            root: n,
            margin: r,
            amount: o = "some",
            once: i
        } = t, a = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof o == "number" ? o : aR[o]
        }, s = l => {
            const {
                isIntersecting: u
            } = l;
            if (this.isInView === u || (this.isInView = u, i && !u && this.hasEnteredView)) return;
            u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {
                onViewportEnter: c,
                onViewportLeave: d
            } = this.node.getProps(), f = u ? c : d;
            f && f(l)
        };
        return iR(this.node.current, a, s)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: t,
            prevProps: n
        } = this.node;
        ["amount", "margin", "root"].some(lR(t, n)) && this.startObserver()
    }
    unmount() {}
}

function lR({
    viewport: e = {}
}, {
    viewport: t = {}
} = {}) {
    return n => e[n] !== t[n]
}
const uR = {
    inView: {
        Feature: sR
    },
    tap: {
        Feature: tR
    },
    focus: {
        Feature: eR
    },
    hover: {
        Feature: J9
    }
};

function W2(e, t) {
    if (!Array.isArray(t)) return !1;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r]) return !1;
    return !0
}
const cR = e => /^\-?\d*\.?\d+$/.test(e),
    dR = e => /^0[^.\s]+$/.test(e),
    Yn = {
        delta: 0,
        timestamp: 0
    },
    U2 = 1 / 60 * 1e3,
    fR = typeof performance < "u" ? () => performance.now() : () => Date.now(),
    G2 = typeof window < "u" ? e => window.requestAnimationFrame(e) : e => setTimeout(() => e(fR()), U2);

function pR(e) {
    let t = [],
        n = [],
        r = 0,
        o = !1,
        i = !1;
    const a = new WeakSet,
        s = {
            schedule: (l, u = !1, c = !1) => {
                const d = c && o,
                    f = d ? t : n;
                return u && a.add(l), f.indexOf(l) === -1 && (f.push(l), d && o && (r = t.length)), l
            },
            cancel: l => {
                const u = n.indexOf(l);
                u !== -1 && n.splice(u, 1), a.delete(l)
            },
            process: l => {
                if (o) {
                    i = !0;
                    return
                }
                if (o = !0, [t, n] = [n, t], n.length = 0, r = t.length, r)
                    for (let u = 0; u < r; u++) {
                        const c = t[u];
                        c(l), a.has(c) && (s.schedule(c), e())
                    }
                o = !1, i && (i = !1, s.process(l))
            }
        };
    return s
}
const mR = 40;
let pp = !0,
    ls = !1,
    mp = !1;
const Cs = ["read", "update", "preRender", "render", "postRender"],
    Cc = Cs.reduce((e, t) => (e[t] = pR(() => ls = !0), e), {}),
    at = Cs.reduce((e, t) => {
        const n = Cc[t];
        return e[t] = (r, o = !1, i = !1) => (ls || gR(), n.schedule(r, o, i)), e
    }, {}),
    Ir = Cs.reduce((e, t) => (e[t] = Cc[t].cancel, e), {}),
    Bd = Cs.reduce((e, t) => (e[t] = () => Cc[t].process(Yn), e), {}),
    hR = e => Cc[e].process(Yn),
    K2 = e => {
        ls = !1, Yn.delta = pp ? U2 : Math.max(Math.min(e - Yn.timestamp, mR), 1), Yn.timestamp = e, mp = !0, Cs.forEach(hR), mp = !1, ls && (pp = !1, G2(K2))
    },
    gR = () => {
        ls = !0, pp = !0, mp || G2(K2)
    };

function gh(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}

function yh(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class vh {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return gh(this.subscriptions, t), () => yh(this.subscriptions, t)
    }
    notify(t, n, r) {
        const o = this.subscriptions.length;
        if (o)
            if (o === 1) this.subscriptions[0](t, n, r);
            else
                for (let i = 0; i < o; i++) {
                    const a = this.subscriptions[i];
                    a && a(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}

function bh(e, t) {
    return t ? e * (1e3 / t) : 0
}
const yR = e => !isNaN(parseFloat(e));
class vR {
    constructor(t, n = {}) {
        this.version = "10.0.1", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (r, o = !0) => {
            this.prev = this.current, this.current = r;
            const {
                delta: i,
                timestamp: a
            } = Yn;
            this.lastUpdated !== a && (this.timeDelta = i, this.lastUpdated = a, at.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.scheduleVelocityCheck = () => at.postRender(this.velocityCheck), this.velocityCheck = ({
            timestamp: r
        }) => {
            r !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
        }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = yR(this.current), this.owner = n.owner
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new vh);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(), at.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : r
    }
    clearListeners() {
        for (const t in this.events) this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t, this.stopPassiveEffect = n
    }
    set(t, n = !0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n), this.prev = t, this.timeDelta = r
    }
    jump(t) {
        this.updateAndNotify(t), this.prev = t, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        return this.canTrackVelocity ? bh(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
    }
    start(t) {
        return this.stop(), new Promise(n => {
            this.hasAnimated = !0, this.animation = t(n) || null, this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        this.animation = null
    }
    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function ki(e, t) {
    return new vR(e, t)
}
const Sh = (e, t) => n => Boolean(xs(n) && A9.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)),
    q2 = (e, t, n) => r => {
        if (!xs(r)) return r;
        const [o, i, a, s] = r.match(ss);
        return {
            [e]: parseFloat(o),
            [t]: parseFloat(i),
            [n]: parseFloat(a),
            alpha: s !== void 0 ? parseFloat(s) : 1
        }
    },
    bR = e => xi(0, 255, e),
    jd = { ...Po,
        transform: e => Math.round(bR(e))
    },
    uo = {
        test: Sh("rgb", "red"),
        parse: q2("red", "green", "blue"),
        transform: ({
            red: e,
            green: t,
            blue: n,
            alpha: r = 1
        }) => "rgba(" + jd.transform(e) + ", " + jd.transform(t) + ", " + jd.transform(n) + ", " + Ea(_a.transform(r)) + ")"
    };

function SR(e) {
    let t = "",
        n = "",
        r = "",
        o = "";
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: o ? parseInt(o, 16) / 255 : 1
    }
}
const hp = {
        test: Sh("#"),
        parse: SR,
        transform: uo.transform
    },
    Zo = {
        test: Sh("hsl", "hue"),
        parse: q2("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: t,
            lightness: n,
            alpha: r = 1
        }) => "hsla(" + Math.round(e) + ", " + On.transform(Ea(t)) + ", " + On.transform(Ea(n)) + ", " + Ea(_a.transform(r)) + ")"
    },
    lt = {
        test: e => uo.test(e) || hp.test(e) || Zo.test(e),
        parse: e => uo.test(e) ? uo.parse(e) : Zo.test(e) ? Zo.parse(e) : hp.parse(e),
        transform: e => xs(e) ? e : e.hasOwnProperty("red") ? uo.transform(e) : Zo.transform(e)
    },
    X2 = "${c}",
    Y2 = "${n}";

function wR(e) {
    var t, n;
    return isNaN(e) && xs(e) && (((t = e.match(ss)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(dp)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}

function Pu(e) {
    typeof e == "number" && (e = `${e}`);
    const t = [];
    let n = 0,
        r = 0;
    const o = e.match(dp);
    o && (n = o.length, e = e.replace(dp, X2), t.push(...o.map(lt.parse)));
    const i = e.match(ss);
    return i && (r = i.length, e = e.replace(ss, Y2), t.push(...i.map(Po.parse))), {
        values: t,
        numColors: n,
        numNumbers: r,
        tokenised: e
    }
}

function Q2(e) {
    return Pu(e).values
}

function Z2(e) {
    const {
        values: t,
        numColors: n,
        tokenised: r
    } = Pu(e), o = t.length;
    return i => {
        let a = r;
        for (let s = 0; s < o; s++) a = a.replace(s < n ? X2 : Y2, s < n ? lt.transform(i[s]) : Ea(i[s]));
        return a
    }
}
const xR = e => typeof e == "number" ? 0 : e;

function kR(e) {
    const t = Q2(e);
    return Z2(e)(t.map(xR))
}
const Dr = {
        test: wR,
        parse: Q2,
        createTransformer: Z2,
        getAnimatableNone: kR
    },
    CR = new Set(["brightness", "contrast", "saturate", "opacity"]);

function _R(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    const [r] = n.match(ss) || [];
    if (!r) return e;
    const o = n.replace(r, "");
    let i = CR.has(t) ? 1 : 0;
    return r !== n && (i *= 100), t + "(" + i + o + ")"
}
const ER = /([a-z-]*)\(.*?\)/g,
    gp = { ...Dr,
        getAnimatableNone: e => {
            const t = e.match(ER);
            return t ? t.map(_R).join(" ") : e
        }
    },
    TR = { ...R2,
        color: lt,
        backgroundColor: lt,
        outlineColor: lt,
        fill: lt,
        stroke: lt,
        borderColor: lt,
        borderTopColor: lt,
        borderRightColor: lt,
        borderBottomColor: lt,
        borderLeftColor: lt,
        filter: gp,
        WebkitFilter: gp
    },
    wh = e => TR[e];

function xh(e, t) {
    let n = wh(e);
    return n !== gp && (n = Dr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const J2 = e => t => t.test(e),
    PR = {
        test: e => e === "auto",
        parse: e => e
    },
    ew = [Po, U, On, mr, M9, R9, PR],
    Qi = e => ew.find(J2(e)),
    AR = [...ew, lt, Dr],
    RR = e => AR.find(J2(e));

function MR(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.get()), t
}

function OR(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.getVelocity()), t
}

function _c(e, t, n) {
    const r = e.getProps();
    return hh(r, t, n !== void 0 ? n : r.custom, MR(e), OR(e))
}

function zR(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ki(n))
}

function $R(e, t) {
    const n = _c(e, t);
    let {
        transitionEnd: r = {},
        transition: o = {},
        ...i
    } = n ? e.makeTargetAnimatable(n, !1) : {};
    i = { ...i,
        ...r
    };
    for (const a in i) {
        const s = U9(i[a]);
        zR(e, a, s)
    }
}

function LR(e, t, n) {
    var r, o;
    const i = Object.keys(t).filter(s => !e.hasValue(s)),
        a = i.length;
    if (a)
        for (let s = 0; s < a; s++) {
            const l = i[s],
                u = t[l];
            let c = null;
            Array.isArray(u) && (c = u[0]), c === null && (c = (o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), c != null && (typeof c == "string" && (cR(c) || dR(c)) ? c = parseFloat(c) : !RR(c) && Dr.test(u) && (c = xh(l, u)), e.addValue(l, ki(c, {
                owner: e
            })), n[l] === void 0 && (n[l] = c), c !== null && e.setBaseTarget(l, c))
        }
}

function IR(e, t) {
    return t ? (t[e] || t.default || t).from : void 0
}

function DR(e, t, n) {
    const r = {};
    for (const o in e) {
        const i = IR(o, t);
        if (i !== void 0) r[o] = i;
        else {
            const a = n.getValue(o);
            a && (r[o] = a.get())
        }
    }
    return r
}

function Au(e) {
    return Boolean(_t(e) && e.add)
}
const FR = "framerAppearId",
    NR = "data-" + ph(FR);
let BR = Qt,
    Ru = Qt;
const Nl = e => e * 1e3,
    jR = {
        current: !1
    },
    kh = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    Ch = e => t => 1 - e(1 - t),
    _h = e => e * e,
    VR = Ch(_h),
    Eh = kh(_h),
    Re = (e, t, n) => -n * e + n * t + e;

function Vd(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function HR({
    hue: e,
    saturation: t,
    lightness: n,
    alpha: r
}) {
    e /= 360, t /= 100, n /= 100;
    let o = 0,
        i = 0,
        a = 0;
    if (!t) o = i = a = n;
    else {
        const s = n < .5 ? n * (1 + t) : n + t - n * t,
            l = 2 * n - s;
        o = Vd(l, s, e + 1 / 3), i = Vd(l, s, e), a = Vd(l, s, e - 1 / 3)
    }
    return {
        red: Math.round(o * 255),
        green: Math.round(i * 255),
        blue: Math.round(a * 255),
        alpha: r
    }
}
const Hd = (e, t, n) => {
        const r = e * e;
        return Math.sqrt(Math.max(0, n * (t * t - r) + r))
    },
    WR = [hp, uo, Zo],
    UR = e => WR.find(t => t.test(e));

function Iy(e) {
    const t = UR(e);
    let n = t.parse(e);
    return t === Zo && (n = HR(n)), n
}
const tw = (e, t) => {
    const n = Iy(e),
        r = Iy(t),
        o = { ...n
        };
    return i => (o.red = Hd(n.red, r.red, i), o.green = Hd(n.green, r.green, i), o.blue = Hd(n.blue, r.blue, i), o.alpha = Re(n.alpha, r.alpha, i), uo.transform(o))
};

function nw(e, t) {
    return typeof e == "number" ? n => Re(e, t, n) : lt.test(e) ? tw(e, t) : ow(e, t)
}
const rw = (e, t) => {
        const n = [...e],
            r = n.length,
            o = e.map((i, a) => nw(i, t[a]));
        return i => {
            for (let a = 0; a < r; a++) n[a] = o[a](i);
            return n
        }
    },
    GR = (e, t) => {
        const n = { ...e,
                ...t
            },
            r = {};
        for (const o in n) e[o] !== void 0 && t[o] !== void 0 && (r[o] = nw(e[o], t[o]));
        return o => {
            for (const i in r) n[i] = r[i](o);
            return n
        }
    },
    ow = (e, t) => {
        const n = Dr.createTransformer(t),
            r = Pu(e),
            o = Pu(t);
        return r.numColors === o.numColors && r.numNumbers >= o.numNumbers ? Or(rw(r.values, o.values), n) : a => `${a>0?t:e}`
    },
    us = (e, t, n) => {
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r
    },
    Dy = (e, t) => n => Re(e, t, n);

function KR(e) {
    return typeof e == "number" ? Dy : typeof e == "string" ? lt.test(e) ? tw : ow : Array.isArray(e) ? rw : typeof e == "object" ? GR : Dy
}

function qR(e, t, n) {
    const r = [],
        o = n || KR(e[0]),
        i = e.length - 1;
    for (let a = 0; a < i; a++) {
        let s = o(e[a], e[a + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[a] : t;
            s = Or(l, s)
        }
        r.push(s)
    }
    return r
}

function iw(e, t, {
    clamp: n = !0,
    ease: r,
    mixer: o
} = {}) {
    const i = e.length;
    Ru(i === t.length), Ru(!r || !Array.isArray(r) || r.length === i - 1), e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
    const a = qR(t, r, o),
        s = a.length,
        l = u => {
            let c = 0;
            if (s > 1)
                for (; c < e.length - 2 && !(u < e[c + 1]); c++);
            const d = us(e[c], e[c + 1], u);
            return a[c](d)
        };
    return n ? u => l(xi(e[0], e[i - 1], u)) : l
}

function XR(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const o = us(0, t, r);
        e.push(Re(n, 1, o))
    }
}

function YR(e) {
    const t = [0];
    return XR(t, e.length - 1), t
}

function QR(e, t) {
    return e.map(n => n * t)
}
const aw = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
    ZR = 1e-7,
    JR = 12;

function eM(e, t, n, r, o) {
    let i, a, s = 0;
    do a = t + (n - t) / 2, i = aw(a, r, o) - e, i > 0 ? n = a : t = a; while (Math.abs(i) > ZR && ++s < JR);
    return a
}

function sw(e, t, n, r) {
    if (e === t && n === r) return Qt;
    const o = i => eM(i, 0, 1, e, n);
    return i => i === 0 || i === 1 ? i : aw(o(i), t, r)
}
const lw = e => 1 - Math.sin(Math.acos(e)),
    Th = Ch(lw),
    tM = kh(Th),
    uw = sw(.33, 1.53, .69, .99),
    Ph = Ch(uw),
    nM = kh(Ph),
    rM = e => (e *= 2) < 1 ? .5 * Ph(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
    oM = {
        linear: Qt,
        easeIn: _h,
        easeInOut: Eh,
        easeOut: VR,
        circIn: lw,
        circInOut: tM,
        circOut: Th,
        backIn: Ph,
        backInOut: nM,
        backOut: uw,
        anticipate: rM
    },
    Fy = e => {
        if (Array.isArray(e)) {
            Ru(e.length === 4);
            const [t, n, r, o] = e;
            return sw(t, n, r, o)
        } else if (typeof e == "string") return oM[e];
        return e
    },
    iM = e => Array.isArray(e) && typeof e[0] != "number";

function aM(e, t) {
    return e.map(() => t || Eh).splice(0, e.length - 1)
}

function yp({
    keyframes: e,
    ease: t = Eh,
    times: n,
    duration: r = 300
}) {
    e = [...e];
    const o = iM(t) ? t.map(Fy) : Fy(t),
        i = {
            done: !1,
            value: e[0]
        },
        a = QR(n && n.length === e.length ? n : YR(e), r);

    function s() {
        return iw(a, e, {
            ease: Array.isArray(o) ? o : aM(e, o)
        })
    }
    let l = s();
    return {
        next: u => (i.value = l(u), i.done = u >= r, i),
        flipTarget: () => {
            e.reverse(), l = s()
        }
    }
}
const Wd = .001,
    sM = .01,
    Ny = 10,
    lM = .05,
    uM = 1;

function cM({
    duration: e = 800,
    bounce: t = .25,
    velocity: n = 0,
    mass: r = 1
}) {
    let o, i;
    BR(e <= Ny * 1e3);
    let a = 1 - t;
    a = xi(lM, uM, a), e = xi(sM, Ny, e / 1e3), a < 1 ? (o = u => {
        const c = u * a,
            d = c * e,
            f = c - n,
            p = vp(u, a),
            m = Math.exp(-d);
        return Wd - f / p * m
    }, i = u => {
        const d = u * a * e,
            f = d * n + n,
            p = Math.pow(a, 2) * Math.pow(u, 2) * e,
            m = Math.exp(-d),
            y = vp(Math.pow(u, 2), a);
        return (-o(u) + Wd > 0 ? -1 : 1) * ((f - p) * m) / y
    }) : (o = u => {
        const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
        return -Wd + c * d
    }, i = u => {
        const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
        return c * d
    });
    const s = 5 / e,
        l = fM(o, i, s);
    if (e = e * 1e3, isNaN(l)) return {
        stiffness: 100,
        damping: 10,
        duration: e
    }; {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: a * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const dM = 12;

function fM(e, t, n) {
    let r = n;
    for (let o = 1; o < dM; o++) r = r - e(r) / t(r);
    return r
}

function vp(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const pM = ["duration", "bounce"],
    mM = ["stiffness", "damping", "mass"];

function By(e, t) {
    return t.some(n => e[n] !== void 0)
}

function hM(e) {
    let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!By(e, mM) && By(e, pM)) {
        const n = cM(e);
        t = { ...t,
            ...n,
            velocity: 0,
            mass: 1
        }, t.isResolvedFromDuration = !0
    }
    return t
}
const gM = 5;

function cw({
    keyframes: e,
    restDelta: t,
    restSpeed: n,
    ...r
}) {
    let o = e[0],
        i = e[e.length - 1];
    const a = {
            done: !1,
            value: o
        },
        {
            stiffness: s,
            damping: l,
            mass: u,
            velocity: c,
            duration: d,
            isResolvedFromDuration: f
        } = hM(r);
    let p = yM,
        m = c ? -(c / 1e3) : 0;
    const y = l / (2 * Math.sqrt(s * u));

    function x() {
        const g = i - o,
            h = Math.sqrt(s / u) / 1e3,
            v = Math.abs(g) < 5;
        if (n || (n = v ? .01 : 2), t || (t = v ? .005 : .5), y < 1) {
            const w = vp(h, y);
            p = E => {
                const P = Math.exp(-y * h * E);
                return i - P * ((m + y * h * g) / w * Math.sin(w * E) + g * Math.cos(w * E))
            }
        } else if (y === 1) p = w => i - Math.exp(-h * w) * (g + (m + h * g) * w);
        else {
            const w = h * Math.sqrt(y * y - 1);
            p = E => {
                const P = Math.exp(-y * h * E),
                    T = Math.min(w * E, 300);
                return i - P * ((m + y * h * g) * Math.sinh(T) + w * g * Math.cosh(T)) / w
            }
        }
    }
    return x(), {
        next: g => {
            const h = p(g);
            if (f) a.done = g >= d;
            else {
                let v = m;
                if (g !== 0)
                    if (y < 1) {
                        const P = Math.max(0, g - gM);
                        v = bh(h - p(P), g - P)
                    } else v = 0;
                const w = Math.abs(v) <= n,
                    E = Math.abs(i - h) <= t;
                a.done = w && E
            }
            return a.value = a.done ? i : h, a
        },
        flipTarget: () => {
            m = -m, [o, i] = [i, o], x()
        }
    }
}
cw.needsInterpolation = (e, t) => typeof e == "string" || typeof t == "string";
const yM = e => 0;

function vM({
    keyframes: e = [0],
    velocity: t = 0,
    power: n = .8,
    timeConstant: r = 350,
    restDelta: o = .5,
    modifyTarget: i
}) {
    const a = e[0],
        s = {
            done: !1,
            value: a
        };
    let l = n * t;
    const u = a + l,
        c = i === void 0 ? u : i(u);
    return c !== u && (l = c - a), {
        next: d => {
            const f = -l * Math.exp(-d / r);
            return s.done = !(f > o || f < -o), s.value = s.done ? c : c + f, s
        },
        flipTarget: () => {}
    }
}
const bM = {
    decay: vM,
    keyframes: yp,
    tween: yp,
    spring: cw
};

function dw(e, t, n = 0) {
    return e - t - n
}

function SM(e, t = 0, n = 0, r = !0) {
    return r ? dw(t + -e, t, n) : t - (e - t) + n
}

function wM(e, t, n, r) {
    return r ? e >= t + n : e <= -n
}
const xM = e => {
    const t = ({
        delta: n
    }) => e(n);
    return {
        start: () => at.update(t, !0),
        stop: () => Ir.update(t)
    }
};

function Mu({
    duration: e,
    driver: t = xM,
    elapsed: n = 0,
    repeat: r = 0,
    repeatType: o = "loop",
    repeatDelay: i = 0,
    keyframes: a,
    autoplay: s = !0,
    onPlay: l,
    onStop: u,
    onComplete: c,
    onRepeat: d,
    onUpdate: f,
    type: p = "keyframes",
    ...m
}) {
    const y = n;
    let x, g = 0,
        h = e,
        v = !1,
        w = !0,
        E;
    const P = bM[a.length > 2 ? "keyframes" : p] || yp,
        T = a[0],
        R = a[a.length - 1];
    let I = {
        done: !1,
        value: T
    };
    const {
        needsInterpolation: M
    } = P;
    M && M(T, R) && (E = iw([0, 100], [T, R], {
        clamp: !1
    }), a = [0, 100]);
    const B = P({ ...m,
        duration: e,
        keyframes: a
    });

    function Y() {
        g++, o === "reverse" ? (w = g % 2 === 0, n = SM(n, h, i, w)) : (n = dw(n, h, i), o === "mirror" && B.flipTarget()), v = !1, d && d()
    }

    function K() {
        x && x.stop(), c && c()
    }

    function ee(W) {
        w || (W = -W), n += W, v || (I = B.next(Math.max(0, n)), E && (I.value = E(I.value)), v = w ? I.done : n <= 0), f && f(I.value), v && (g === 0 && (h = h !== void 0 ? h : n), g < r ? wM(n, h, i, w) && Y() : K())
    }

    function Q() {
        l && l(), x = t(ee), x.start()
    }
    return s && Q(), {
        stop: () => {
            u && u(), x && x.stop()
        },
        set currentTime(W) {
            n = y, ee(W)
        },
        sample: (W, $ = !1) => {
            if (n = y, $) return ee(W), I;
            const z = e && typeof e == "number" ? Math.max(e * .5, 50) : 50;
            let N = 0;
            for (ee(0); N <= W;) {
                const H = W - N;
                ee(Math.min(H, z)), N += z
            }
            return I
        }
    }
}

function kM(e) {
    return !e || Array.isArray(e) || typeof e == "string" && fw[e]
}
const ua = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
    fw = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: ua([0, .65, .55, 1]),
        circOut: ua([.55, 0, 1, .45]),
        backIn: ua([.31, .01, .66, -.59]),
        backOut: ua([.33, 1.53, .69, .99])
    };

function CM(e) {
    if (e) return Array.isArray(e) ? ua(e) : fw[e]
}

function _M(e, t, n, {
    delay: r = 0,
    duration: o,
    repeat: i = 0,
    repeatType: a = "loop",
    ease: s,
    times: l
} = {}) {
    return e.animate({
        [t]: n,
        offset: l
    }, {
        delay: r,
        duration: o,
        easing: CM(s),
        fill: "both",
        iterations: i + 1,
        direction: a === "reverse" ? "alternate" : "normal"
    })
}
const jy = {
        waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
    },
    Ud = {},
    pw = {};
for (const e in jy) pw[e] = () => (Ud[e] === void 0 && (Ud[e] = jy[e]()), Ud[e]);

function EM(e, {
    repeat: t,
    repeatType: n = "loop"
}) {
    const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
    return e[r]
}
const TM = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
    ml = 10,
    PM = (e, t) => t.type === "spring" || e === "backgroundColor" || !kM(t.ease);

function AM(e, t, {
    onUpdate: n,
    onComplete: r,
    ...o
}) {
    if (!(pw.waapi() && TM.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0)) return !1;
    let {
        keyframes: a,
        duration: s = 300,
        elapsed: l = 0,
        ease: u
    } = o;
    if (PM(t, o)) {
        const d = Mu({ ...o,
            repeat: 0,
            elapsed: 0
        });
        let f = {
            done: !1,
            value: a[0]
        };
        const p = [];
        let m = 0;
        for (; !f.done && m < 2e4;) f = d.sample(m, !0), p.push(f.value), m += ml;
        a = p, s = m - ml, u = "linear"
    }
    const c = _M(e.owner.current, t, a, { ...o,
        delay: -l,
        duration: s,
        ease: u
    });
    return c.onfinish = () => {
        e.set(EM(a, o)), at.update(() => c.cancel()), r && r()
    }, {
        get currentTime() {
            return c.currentTime || 0
        },
        set currentTime(d) {
            c.currentTime = d
        },
        stop: () => {
            const {
                currentTime: d
            } = c;
            if (d) {
                const f = Mu({ ...o,
                    autoplay: !1
                });
                e.setWithVelocity(f.sample(d - ml).value, f.sample(d).value, ml)
            }
            at.update(() => c.cancel())
        }
    }
}

function mw(e, t) {
    const n = performance.now(),
        r = ({
            timestamp: o
        }) => {
            const i = o - n;
            i >= t && (Ir.read(r), e(i - t))
        };
    return at.read(r, !0), () => Ir.read(r)
}

function RM({
    keyframes: e,
    elapsed: t,
    onUpdate: n,
    onComplete: r
}) {
    const o = () => {
        n && n(e[e.length - 1]), r && r()
    };
    return t ? {
        stop: mw(o, -t)
    } : o()
}

function MM({
    keyframes: e,
    velocity: t = 0,
    min: n,
    max: r,
    power: o = .8,
    timeConstant: i = 750,
    bounceStiffness: a = 500,
    bounceDamping: s = 10,
    restDelta: l = 1,
    modifyTarget: u,
    driver: c,
    onUpdate: d,
    onComplete: f,
    onStop: p
}) {
    const m = e[0];
    let y;

    function x(w) {
        return n !== void 0 && w < n || r !== void 0 && w > r
    }

    function g(w) {
        return n === void 0 ? r : r === void 0 || Math.abs(n - w) < Math.abs(r - w) ? n : r
    }

    function h(w) {
        y && y.stop(), y = Mu({
            keyframes: [0, 1],
            velocity: 0,
            ...w,
            driver: c,
            onUpdate: E => {
                d && d(E), w.onUpdate && w.onUpdate(E)
            },
            onComplete: f,
            onStop: p
        })
    }

    function v(w) {
        h({
            type: "spring",
            stiffness: a,
            damping: s,
            restDelta: l,
            ...w
        })
    }
    if (x(m)) v({
        velocity: t,
        keyframes: [m, g(m)]
    });
    else {
        let w = o * t + m;
        typeof u < "u" && (w = u(w));
        const E = g(w),
            P = E === n ? -1 : 1;
        let T, R;
        const I = M => {
            T = R, R = M, t = bh(M - T, Yn.delta), (P === 1 && M > E || P === -1 && M < E) && v({
                keyframes: [M, E],
                velocity: t
            })
        };
        h({
            type: "decay",
            keyframes: [m, 0],
            velocity: t,
            timeConstant: i,
            power: o,
            restDelta: l,
            modifyTarget: u,
            onUpdate: x(w) ? I : void 0
        })
    }
    return {
        stop: () => y && y.stop()
    }
}
const OM = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    zM = e => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    $M = {
        type: "keyframes",
        duration: .8
    },
    LM = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    IM = (e, {
        keyframes: t
    }) => t.length > 2 ? $M : To.has(e) ? e.startsWith("scale") ? zM(t[1]) : OM : LM,
    bp = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && Dr.test(t) && !t.startsWith("url("));

function DM({
    when: e,
    delay: t,
    delayChildren: n,
    staggerChildren: r,
    staggerDirection: o,
    repeat: i,
    repeatType: a,
    repeatDelay: s,
    from: l,
    elapsed: u,
    ...c
}) {
    return !!Object.keys(c).length
}

function Vy(e) {
    return e === 0 || typeof e == "string" && parseFloat(e) === 0 && e.indexOf(" ") === -1
}

function Hy(e) {
    return typeof e == "number" ? 0 : xh("", e)
}

function hw(e, t) {
    return e[t] || e.default || e
}

function FM(e, t, n, r) {
    const o = bp(t, n);
    let i = r.from !== void 0 ? r.from : e.get();
    return i === "none" && o && typeof n == "string" ? i = xh(t, n) : Vy(i) && typeof n == "string" ? i = Hy(n) : !Array.isArray(n) && Vy(n) && typeof i == "string" && (n = Hy(i)), Array.isArray(n) ? (n[0] === null && (n[0] = i), n) : [i, n]
}
const Ah = (e, t, n, r = {}) => o => {
    const i = hw(r, e) || {},
        a = i.delay || r.delay || 0;
    let {
        elapsed: s = 0
    } = r;
    s = s - Nl(a);
    const l = FM(t, e, n, i),
        u = l[0],
        c = l[l.length - 1],
        d = bp(e, u),
        f = bp(e, c);
    let p = {
        keyframes: l,
        velocity: t.getVelocity(),
        ...i,
        elapsed: s,
        onUpdate: m => {
            t.set(m), i.onUpdate && i.onUpdate(m)
        },
        onComplete: () => {
            o(), i.onComplete && i.onComplete()
        }
    };
    if (!d || !f || jR.current || i.type === !1) return RM(p);
    if (i.type === "inertia") return MM(p);
    if (DM(i) || (p = { ...p,
            ...IM(e, p)
        }), p.duration && (p.duration = Nl(p.duration)), p.repeatDelay && (p.repeatDelay = Nl(p.repeatDelay)), t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
        const m = AM(t, e, p);
        if (m) return m
    }
    return Mu(p)
};

function NM(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const o = t.map(i => Sp(e, i, n));
        r = Promise.all(o)
    } else if (typeof t == "string") r = Sp(e, t, n);
    else {
        const o = typeof t == "function" ? _c(e, t, n.custom) : t;
        r = gw(e, o, n)
    }
    return r.then(() => e.notify("AnimationComplete", t))
}

function Sp(e, t, n = {}) {
    const r = _c(e, t, n.custom);
    let {
        transition: o = e.getDefaultTransition() || {}
    } = r || {};
    n.transitionOverride && (o = n.transitionOverride);
    const i = r ? () => gw(e, r, n) : () => Promise.resolve(),
        a = e.variantChildren && e.variantChildren.size ? (l = 0) => {
            const {
                delayChildren: u = 0,
                staggerChildren: c,
                staggerDirection: d
            } = o;
            return BM(e, t, u + l, c, d, n)
        } : () => Promise.resolve(),
        {
            when: s
        } = o;
    if (s) {
        const [l, u] = s === "beforeChildren" ? [i, a] : [a, i];
        return l().then(u)
    } else return Promise.all([i(), a(n.delay)])
}

function gw(e, t, {
    delay: n = 0,
    transitionOverride: r,
    type: o
} = {}) {
    let {
        transition: i = e.getDefaultTransition(),
        transitionEnd: a,
        ...s
    } = e.makeTargetAnimatable(t);
    const l = e.getValue("willChange");
    r && (i = r);
    const u = [],
        c = o && e.animationState && e.animationState.getState()[o];
    for (const d in s) {
        const f = e.getValue(d),
            p = s[d];
        if (!f || p === void 0 || c && VM(c, d)) continue;
        const m = {
            delay: n,
            elapsed: 0,
            ...i
        };
        if (window.HandoffAppearAnimations && !f.hasAnimated) {
            const x = e.getProps()[NR];
            x && (m.elapsed = window.HandoffAppearAnimations(x, d, f, at))
        }
        let y = f.start(Ah(d, f, p, e.shouldReduceMotion && To.has(d) ? {
            type: !1
        } : m));
        Au(l) && (l.add(d), y = y.then(() => l.remove(d))), u.push(y)
    }
    return Promise.all(u).then(() => {
        a && $R(e, a)
    })
}

function BM(e, t, n = 0, r = 0, o = 1, i) {
    const a = [],
        s = (e.variantChildren.size - 1) * r,
        l = o === 1 ? (u = 0) => u * r : (u = 0) => s - u * r;
    return Array.from(e.variantChildren).sort(jM).forEach((u, c) => {
        u.notify("AnimationStart", t), a.push(Sp(u, t, { ...i,
            delay: n + l(c)
        }).then(() => u.notify("AnimationComplete", t)))
    }), Promise.all(a)
}

function jM(e, t) {
    return e.sortNodePosition(t)
}

function VM({
    protectedKeys: e,
    needsAnimating: t
}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r
}
const HM = [...oh].reverse(),
    WM = oh.length;

function UM(e) {
    return t => Promise.all(t.map(({
        animation: n,
        options: r
    }) => NM(e, n, r)))
}

function GM(e) {
    let t = UM(e);
    const n = qM();
    let r = !0;
    const o = (l, u) => {
        const c = _c(e, u);
        if (c) {
            const {
                transition: d,
                transitionEnd: f,
                ...p
            } = c;
            l = { ...l,
                ...p,
                ...f
            }
        }
        return l
    };

    function i(l) {
        t = l(e)
    }

    function a(l, u) {
        const c = e.getProps(),
            d = e.getVariantContext(!0) || {},
            f = [],
            p = new Set;
        let m = {},
            y = 1 / 0;
        for (let g = 0; g < WM; g++) {
            const h = HM[g],
                v = n[h],
                w = c[h] !== void 0 ? c[h] : d[h],
                E = is(w),
                P = h === u ? v.isActive : null;
            P === !1 && (y = g);
            let T = w === d[h] && w !== c[h] && E;
            if (T && r && e.manuallyAnimateOnMount && (T = !1), v.protectedKeys = { ...m
                }, !v.isActive && P === null || !w && !v.prevProp || Sc(w) || typeof w == "boolean") continue;
            const R = KM(v.prevProp, w);
            let I = R || h === u && v.isActive && !T && E || g > y && E;
            const M = Array.isArray(w) ? w : [w];
            let B = M.reduce(o, {});
            P === !1 && (B = {});
            const {
                prevResolvedValues: Y = {}
            } = v, K = { ...Y,
                ...B
            }, ee = Q => {
                I = !0, p.delete(Q), v.needsAnimating[Q] = !0
            };
            for (const Q in K) {
                const W = B[Q],
                    $ = Y[Q];
                m.hasOwnProperty(Q) || (W !== $ ? Tu(W) && Tu($) ? !W2(W, $) || R ? ee(Q) : v.protectedKeys[Q] = !0 : W !== void 0 ? ee(Q) : p.add(Q) : W !== void 0 && p.has(Q) ? ee(Q) : v.protectedKeys[Q] = !0)
            }
            v.prevProp = w, v.prevResolvedValues = B, v.isActive && (m = { ...m,
                ...B
            }), r && e.blockInitialAnimation && (I = !1), I && !T && f.push(...M.map(Q => ({
                animation: Q,
                options: {
                    type: h,
                    ...l
                }
            })))
        }
        if (p.size) {
            const g = {};
            p.forEach(h => {
                const v = e.getBaseTarget(h);
                v !== void 0 && (g[h] = v)
            }), f.push({
                animation: g
            })
        }
        let x = Boolean(f.length);
        return r && c.initial === !1 && !e.manuallyAnimateOnMount && (x = !1), r = !1, x ? t(f) : Promise.resolve()
    }

    function s(l, u, c) {
        var d;
        if (n[l].isActive === u) return Promise.resolve();
        (d = e.variantChildren) === null || d === void 0 || d.forEach(p => {
            var m;
            return (m = p.animationState) === null || m === void 0 ? void 0 : m.setActive(l, u)
        }), n[l].isActive = u;
        const f = a(c, l);
        for (const p in n) n[p].protectedKeys = {};
        return f
    }
    return {
        animateChanges: a,
        setActive: s,
        setAnimateFunction: i,
        getState: () => n
    }
}

function KM(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !W2(t, e) : !1
}

function Zr(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function qM() {
    return {
        animate: Zr(!0),
        whileInView: Zr(),
        whileHover: Zr(),
        whileTap: Zr(),
        whileDrag: Zr(),
        whileFocus: Zr(),
        exit: Zr()
    }
}
class XM extends Wr {
    constructor(t) {
        super(t), t.animationState || (t.animationState = GM(t))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: t
        } = this.node.getProps();
        this.unmount(), Sc(t) && (this.unmount = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: t
        } = this.node.getProps(), {
            animate: n
        } = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {}
}
let YM = 0;
class QM extends Wr {
    constructor() {
        super(...arguments), this.id = YM++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: t,
            onExitComplete: n,
            custom: r
        } = this.node.presenceContext, {
            isPresent: o
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === o) return;
        const i = this.node.animationState.setActive("exit", !t, {
            custom: r ? ? this.node.getProps().custom
        });
        n && !t && i.then(() => n(this.id))
    }
    mount() {
        const {
            register: t
        } = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const ZM = {
        animation: {
            Feature: XM
        },
        exit: {
            Feature: QM
        }
    },
    Wy = (e, t) => Math.abs(e - t);

function JM(e, t) {
    const n = Wy(e.x, t.x),
        r = Wy(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class yw {
    constructor(t, n, {
        transformPagePoint: r
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const u = Kd(this.lastMoveEventInfo, this.history),
                    c = this.startEvent !== null,
                    d = JM(u.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!c && !d) return;
                const {
                    point: f
                } = u, {
                    timestamp: p
                } = Yn;
                this.history.push({ ...f,
                    timestamp: p
                });
                const {
                    onStart: m,
                    onMove: y
                } = this.handlers;
                c || (m && m(this.lastMoveEvent, u), this.startEvent = this.lastMoveEvent), y && y(this.lastMoveEvent, u)
            }, this.handlePointerMove = (u, c) => {
                this.lastMoveEvent = u, this.lastMoveEventInfo = Gd(c, this.transformPagePoint), at.update(this.updatePoint, !0)
            }, this.handlePointerUp = (u, c) => {
                if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const {
                    onEnd: d,
                    onSessionEnd: f
                } = this.handlers, p = Kd(u.type === "pointercancel" ? this.lastMoveEventInfo : Gd(c, this.transformPagePoint), this.history);
                this.startEvent && d && d(u, p), f && f(u, p)
            }, !N2(t)) return;
        this.handlers = n, this.transformPagePoint = r;
        const o = kc(t),
            i = Gd(o, this.transformPagePoint),
            {
                point: a
            } = i,
            {
                timestamp: s
            } = Yn;
        this.history = [{ ...a,
            timestamp: s
        }];
        const {
            onSessionStart: l
        } = n;
        l && l(t, Kd(i, this.history)), this.removeListeners = Or(Xn(window, "pointermove", this.handlePointerMove), Xn(window, "pointerup", this.handlePointerUp), Xn(window, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(), Ir.update(this.updatePoint)
    }
}

function Gd(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}

function Uy(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}

function Kd({
    point: e
}, t) {
    return {
        point: e,
        delta: Uy(e, vw(t)),
        offset: Uy(e, eO(t)),
        velocity: tO(t, .1)
    }
}

function eO(e) {
    return e[0]
}

function vw(e) {
    return e[e.length - 1]
}

function tO(e, t) {
    if (e.length < 2) return {
        x: 0,
        y: 0
    };
    let n = e.length - 1,
        r = null;
    const o = vw(e);
    for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > Nl(t)));) n--;
    if (!r) return {
        x: 0,
        y: 0
    };
    const i = (o.timestamp - r.timestamp) / 1e3;
    if (i === 0) return {
        x: 0,
        y: 0
    };
    const a = {
        x: (o.x - r.x) / i,
        y: (o.y - r.y) / i
    };
    return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
}

function Lt(e) {
    return e.max - e.min
}

function wp(e, t = 0, n = .01) {
    return Math.abs(e - t) <= n
}

function Gy(e, t, n, r = .5) {
    e.origin = r, e.originPoint = Re(t.min, t.max, e.origin), e.scale = Lt(n) / Lt(t), (wp(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = Re(n.min, n.max, e.origin) - e.originPoint, (wp(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}

function Ta(e, t, n, r) {
    Gy(e.x, t.x, n.x, r ? r.originX : void 0), Gy(e.y, t.y, n.y, r ? r.originY : void 0)
}

function Ky(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + Lt(t)
}

function nO(e, t, n) {
    Ky(e.x, t.x, n.x), Ky(e.y, t.y, n.y)
}

function qy(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + Lt(t)
}

function Pa(e, t, n) {
    qy(e.x, t.x, n.x), qy(e.y, t.y, n.y)
}

function rO(e, {
    min: t,
    max: n
}, r) {
    return t !== void 0 && e < t ? e = r ? Re(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? Re(n, e, r.max) : Math.min(e, n)), e
}

function Xy(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}

function oO(e, {
    top: t,
    left: n,
    bottom: r,
    right: o
}) {
    return {
        x: Xy(e.x, n, o),
        y: Xy(e.y, t, r)
    }
}

function Yy(e, t) {
    let n = t.min - e.min,
        r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
        min: n,
        max: r
    }
}

function iO(e, t) {
    return {
        x: Yy(e.x, t.x),
        y: Yy(e.y, t.y)
    }
}

function aO(e, t) {
    let n = .5;
    const r = Lt(e),
        o = Lt(t);
    return o > r ? n = us(t.min, t.max - r, e.min) : r > o && (n = us(e.min, e.max - o, t.min)), xi(0, 1, n)
}

function sO(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
const xp = .35;

function lO(e = xp) {
    return e === !1 ? e = 0 : e === !0 && (e = xp), {
        x: Qy(e, "left", "right"),
        y: Qy(e, "top", "bottom")
    }
}

function Qy(e, t, n) {
    return {
        min: Zy(e, t),
        max: Zy(e, n)
    }
}

function Zy(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const Jy = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    Aa = () => ({
        x: Jy(),
        y: Jy()
    }),
    ev = () => ({
        min: 0,
        max: 0
    }),
    De = () => ({
        x: ev(),
        y: ev()
    });

function wn(e) {
    return [e("x"), e("y")]
}

function bw({
    top: e,
    left: t,
    right: n,
    bottom: r
}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}

function uO({
    x: e,
    y: t
}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}

function cO(e, t) {
    if (!t) return e;
    const n = t({
            x: e.left,
            y: e.top
        }),
        r = t({
            x: e.right,
            y: e.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}

function qd(e) {
    return e === void 0 || e === 1
}

function kp({
    scale: e,
    scaleX: t,
    scaleY: n
}) {
    return !qd(e) || !qd(t) || !qd(n)
}

function to(e) {
    return kp(e) || Sw(e) || e.z || e.rotate || e.rotateX || e.rotateY
}

function Sw(e) {
    return tv(e.x) || tv(e.y)
}

function tv(e) {
    return e && e !== "0%"
}

function Ou(e, t, n) {
    const r = e - n,
        o = t * r;
    return n + o
}

function nv(e, t, n, r, o) {
    return o !== void 0 && (e = Ou(e, o, r)), Ou(e, n, r) + t
}

function Cp(e, t = 0, n = 1, r, o) {
    e.min = nv(e.min, t, n, r, o), e.max = nv(e.max, t, n, r, o)
}

function ww(e, {
    x: t,
    y: n
}) {
    Cp(e.x, t.translate, t.scale, t.originPoint), Cp(e.y, n.translate, n.scale, n.originPoint)
}

function dO(e, t, n, r = !1) {
    const o = n.length;
    if (!o) return;
    t.x = t.y = 1;
    let i, a;
    for (let s = 0; s < o; s++) {
        i = n[s], a = i.projectionDelta;
        const l = i.instance;
        l && l.style && l.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && Jo(e, {
            x: -i.scroll.offset.x,
            y: -i.scroll.offset.y
        }), a && (t.x *= a.x.scale, t.y *= a.y.scale, ww(e, a)), r && to(i.latestValues) && Jo(e, i.latestValues))
    }
    t.x = rv(t.x), t.y = rv(t.y)
}

function rv(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
}

function yr(e, t) {
    e.min = e.min + t, e.max = e.max + t
}

function ov(e, t, [n, r, o]) {
    const i = t[o] !== void 0 ? t[o] : .5,
        a = Re(e.min, e.max, i);
    Cp(e, t[n], t[r], a, t.scale)
}
const fO = ["x", "scaleX", "originX"],
    pO = ["y", "scaleY", "originY"];

function Jo(e, t) {
    ov(e.x, t, fO), ov(e.y, t, pO)
}

function xw(e, t) {
    return bw(cO(e.getBoundingClientRect(), t))
}

function mO(e, t, n) {
    const r = xw(e, n),
        {
            scroll: o
        } = t;
    return o && (yr(r.x, o.offset.x), yr(r.y, o.offset.y)), r
}
const hO = new WeakMap;
class gO {
    constructor(t) {
        this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = De(), this.visualElement = t
    }
    start(t, {
        snapToCursor: n = !1
    } = {}) {
        const {
            presenceContext: r
        } = this.visualElement;
        if (r && r.isPresent === !1) return;
        const o = l => {
                this.stopAnimation(), n && this.snapToCursor(kc(l, "page").point)
            },
            i = (l, u) => {
                const {
                    drag: c,
                    dragPropagation: d,
                    onDragStart: f
                } = this.getProps();
                if (c && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = j2(c), !this.openGlobalLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), wn(m => {
                    let y = this.getAxisMotionValue(m).get() || 0;
                    if (On.test(y)) {
                        const {
                            projection: x
                        } = this.visualElement;
                        if (x && x.layout) {
                            const g = x.layout.layoutBox[m];
                            g && (y = Lt(g) * (parseFloat(y) / 100))
                        }
                    }
                    this.originPoint[m] = y
                }), f && f(l, u);
                const {
                    animationState: p
                } = this.visualElement;
                p && p.setActive("whileDrag", !0)
            },
            a = (l, u) => {
                const {
                    dragPropagation: c,
                    dragDirectionLock: d,
                    onDirectionLock: f,
                    onDrag: p
                } = this.getProps();
                if (!c && !this.openGlobalLock) return;
                const {
                    offset: m
                } = u;
                if (d && this.currentDirection === null) {
                    this.currentDirection = yO(m), this.currentDirection !== null && f && f(this.currentDirection);
                    return
                }
                this.updateAxis("x", u.point, m), this.updateAxis("y", u.point, m), this.visualElement.render(), p && p(l, u)
            },
            s = (l, u) => this.stop(l, u);
        this.panSession = new yw(t, {
            onSessionStart: o,
            onStart: i,
            onMove: a,
            onSessionEnd: s
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint()
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(), !r) return;
        const {
            velocity: o
        } = n;
        this.startAnimation(o);
        const {
            onDragEnd: i
        } = this.getProps();
        i && i(t, n)
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: t,
            animationState: n
        } = this.visualElement;
        t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: r
        } = this.getProps();
        !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {
            drag: o
        } = this.getProps();
        if (!r || !hl(t, o, this.currentDirection)) return;
        const i = this.getAxisMotionValue(t);
        let a = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (a = rO(a, this.constraints[t], this.elastic[t])), i.set(a)
    }
    resolveConstraints() {
        const {
            dragConstraints: t,
            dragElastic: n
        } = this.getProps(), {
            layout: r
        } = this.visualElement.projection || {}, o = this.constraints;
        t && Qo(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = oO(r.layoutBox, t) : this.constraints = !1, this.elastic = lO(n), o !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && wn(i => {
            this.getAxisMotionValue(i) && (this.constraints[i] = sO(r.layoutBox[i], this.constraints[i]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: t,
            onMeasureDragConstraints: n
        } = this.getProps();
        if (!t || !Qo(t)) return !1;
        const r = t.current,
            {
                projection: o
            } = this.visualElement;
        if (!o || !o.layout) return !1;
        const i = mO(r, o.root, this.visualElement.getTransformPagePoint());
        let a = iO(o.layout.layoutBox, i);
        if (n) {
            const s = n(uO(a));
            this.hasMutatedConstraints = !!s, s && (a = bw(s))
        }
        return a
    }
    startAnimation(t) {
        const {
            drag: n,
            dragMomentum: r,
            dragElastic: o,
            dragTransition: i,
            dragSnapToOrigin: a,
            onDragTransitionEnd: s
        } = this.getProps(), l = this.constraints || {}, u = wn(c => {
            if (!hl(c, n, this.currentDirection)) return;
            let d = l && l[c] || {};
            a && (d = {
                min: 0,
                max: 0
            });
            const f = o ? 200 : 1e6,
                p = o ? 40 : 1e7,
                m = {
                    type: "inertia",
                    velocity: r ? t[c] : 0,
                    bounceStiffness: f,
                    bounceDamping: p,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...i,
                    ...d
                };
            return this.startAxisValueAnimation(c, m)
        });
        return Promise.all(u).then(s)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return r.start(Ah(t, r, 0, n))
    }
    stopAnimation() {
        wn(t => this.getAxisMotionValue(t).stop())
    }
    getAxisMotionValue(t) {
        const n = "_drag" + t.toUpperCase(),
            r = this.visualElement.getProps(),
            o = r[n];
        return o || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        wn(n => {
            const {
                drag: r
            } = this.getProps();
            if (!hl(n, r, this.currentDirection)) return;
            const {
                projection: o
            } = this.visualElement, i = this.getAxisMotionValue(n);
            if (o && o.layout) {
                const {
                    min: a,
                    max: s
                } = o.layout.layoutBox[n];
                i.set(t[n] - Re(a, s, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: t,
            dragConstraints: n
        } = this.getProps(), {
            projection: r
        } = this.visualElement;
        if (!Qo(n) || !r || !this.constraints) return;
        this.stopAnimation();
        const o = {
            x: 0,
            y: 0
        };
        wn(a => {
            const s = this.getAxisMotionValue(a);
            if (s) {
                const l = s.get();
                o[a] = aO({
                    min: l,
                    max: l
                }, this.constraints[a])
            }
        });
        const {
            transformTemplate: i
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), wn(a => {
            if (!hl(a, t, null)) return;
            const s = this.getAxisMotionValue(a),
                {
                    min: l,
                    max: u
                } = this.constraints[a];
            s.set(Re(l, u, o[a]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        hO.set(this.visualElement, this);
        const t = this.visualElement.current,
            n = Xn(t, "pointerdown", l => {
                const {
                    drag: u,
                    dragListener: c = !0
                } = this.getProps();
                u && c && this.start(l)
            }),
            r = () => {
                const {
                    dragConstraints: l
                } = this.getProps();
                Qo(l) && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: o
            } = this.visualElement,
            i = o.addEventListener("measure", r);
        o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), r();
        const a = Un(window, "resize", () => this.scalePositionWithinConstraints()),
            s = o.addEventListener("didUpdate", ({
                delta: l,
                hasLayoutChanged: u
            }) => {
                this.isDragging && u && (wn(c => {
                    const d = this.getAxisMotionValue(c);
                    d && (this.originPoint[c] += l[c].translate, d.set(d.get() + l[c].translate))
                }), this.visualElement.render())
            });
        return () => {
            a(), n(), i(), s && s()
        }
    }
    getProps() {
        const t = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: r = !1,
                dragPropagation: o = !1,
                dragConstraints: i = !1,
                dragElastic: a = xp,
                dragMomentum: s = !0
            } = t;
        return { ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: o,
            dragConstraints: i,
            dragElastic: a,
            dragMomentum: s
        }
    }
}

function hl(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}

function yO(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
}
class vO extends Wr {
    constructor(t) {
        super(t), this.removeGroupControls = Qt, this.removeListeners = Qt, this.controls = new gO(t)
    }
    mount() {
        const {
            dragControls: t
        } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Qt
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
class bO extends Wr {
    constructor() {
        super(...arguments), this.removePointerDownListener = Qt
    }
    onPointerDown(t) {
        this.session = new yw(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint()
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: t,
            onPanStart: n,
            onPan: r,
            onPanEnd: o
        } = this.node.getProps();
        return {
            onSessionStart: t,
            onStart: n,
            onMove: r,
            onEnd: (i, a) => {
                delete this.session, o && o(i, a)
            }
        }
    }
    mount() {
        this.removePointerDownListener = Xn(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}

function SO() {
    const e = b.useContext(ws);
    if (e === null) return [!0, null];
    const {
        isPresent: t,
        onExitComplete: n,
        register: r
    } = e, o = b.useId();
    return b.useEffect(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0]
}

function wO() {
    return xO(b.useContext(ws))
}

function xO(e) {
    return e === null ? !0 : e.isPresent
}

function iv(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const Zi = {
        correct: (e, t) => {
            if (!t.target) return e;
            if (typeof e == "string")
                if (U.test(e)) e = parseFloat(e);
                else return e;
            const n = iv(e, t.target.x),
                r = iv(e, t.target.y);
            return `${n}% ${r}%`
        }
    },
    kw = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

function kO(e) {
    const t = kw.exec(e);
    if (!t) return [, ];
    const [, n, r] = t;
    return [n, r]
}

function _p(e, t, n = 1) {
    const [r, o] = kO(e);
    if (!r) return;
    const i = window.getComputedStyle(t).getPropertyValue(r);
    return i ? i.trim() : cp(o) ? _p(o, t, n + 1) : o
}

function CO(e, { ...t
}, n) {
    const r = e.current;
    if (!(r instanceof Element)) return {
        target: t,
        transitionEnd: n
    };
    n && (n = { ...n
    }), e.values.forEach(o => {
        const i = o.get();
        if (!cp(i)) return;
        const a = _p(i, r);
        a && o.set(a)
    });
    for (const o in t) {
        const i = t[o];
        if (!cp(i)) continue;
        const a = _p(i, r);
        a && (t[o] = a, n && n[o] === void 0 && (n[o] = i))
    }
    return {
        target: t,
        transitionEnd: n
    }
}
const av = "_$css",
    _O = {
        correct: (e, {
            treeScale: t,
            projectionDelta: n
        }) => {
            const r = e,
                o = e.includes("var("),
                i = [];
            o && (e = e.replace(kw, p => (i.push(p), av)));
            const a = Dr.parse(e);
            if (a.length > 5) return r;
            const s = Dr.createTransformer(e),
                l = typeof a[0] != "number" ? 1 : 0,
                u = n.x.scale * t.x,
                c = n.y.scale * t.y;
            a[0 + l] /= u, a[1 + l] /= c;
            const d = Re(u, c, .5);
            typeof a[2 + l] == "number" && (a[2 + l] /= d), typeof a[3 + l] == "number" && (a[3 + l] /= d);
            let f = s(a);
            if (o) {
                let p = 0;
                f = f.replace(av, () => {
                    const m = i[p];
                    return p++, m
                })
            }
            return f
        }
    };
class EO extends Rt.Component {
    componentDidMount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r,
            layoutId: o
        } = this.props, {
            projection: i
        } = t;
        C9(TO), i && (n.group && n.group.add(i), r && r.register && o && r.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), i.setOptions({ ...i.options,
            onExitComplete: () => this.safeToRemove()
        })), Ca.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {
            layoutDependency: n,
            visualElement: r,
            drag: o,
            isPresent: i
        } = this.props, a = r.projection;
        return a && (a.isPresent = i, o || t.layoutDependency !== n || n === void 0 ? a.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? a.promote() : a.relegate() || at.postRender(() => {
            const s = a.getStack();
            (!s || !s.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: t
        } = this.props.visualElement;
        t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove())
    }
    componentWillUnmount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r
        } = this.props, {
            projection: o
        } = t;
        o && (o.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(o), r && r.deregister && r.deregister(o))
    }
    safeToRemove() {
        const {
            safeToRemove: t
        } = this.props;
        t && t()
    }
    render() {
        return null
    }
}

function Cw(e) {
    const [t, n] = SO(), r = b.useContext(sh);
    return Rt.createElement(EO, { ...e,
        layoutGroup: r,
        switchLayoutGroup: b.useContext(E2),
        isPresent: t,
        safeToRemove: n
    })
}
const TO = {
    borderRadius: { ...Zi,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Zi,
    borderTopRightRadius: Zi,
    borderBottomLeftRadius: Zi,
    borderBottomRightRadius: Zi,
    boxShadow: _O
};

function PO(e, t, n = {}) {
    const r = _t(e) ? e : ki(e);
    return r.start(Ah("", r, t, n)), {
        stop: () => r.stop(),
        isAnimating: () => r.isAnimating()
    }
}
const _w = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    AO = _w.length,
    sv = e => typeof e == "string" ? parseFloat(e) : e,
    lv = e => typeof e == "number" || U.test(e);

function RO(e, t, n, r, o, i) {
    o ? (e.opacity = Re(0, n.opacity !== void 0 ? n.opacity : 1, MO(r)), e.opacityExit = Re(t.opacity !== void 0 ? t.opacity : 1, 0, OO(r))) : i && (e.opacity = Re(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let a = 0; a < AO; a++) {
        const s = `border${_w[a]}Radius`;
        let l = uv(t, s),
            u = uv(n, s);
        if (l === void 0 && u === void 0) continue;
        l || (l = 0), u || (u = 0), l === 0 || u === 0 || lv(l) === lv(u) ? (e[s] = Math.max(Re(sv(l), sv(u), r), 0), (On.test(u) || On.test(l)) && (e[s] += "%")) : e[s] = u
    }(t.rotate || n.rotate) && (e.rotate = Re(t.rotate || 0, n.rotate || 0, r))
}

function uv(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const MO = Ew(0, .5, Th),
    OO = Ew(.5, .95, Qt);

function Ew(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(us(e, t, r))
}

function cv(e, t) {
    e.min = t.min, e.max = t.max
}

function Wt(e, t) {
    cv(e.x, t.x), cv(e.y, t.y)
}

function dv(e, t, n, r, o) {
    return e -= t, e = Ou(e, 1 / n, r), o !== void 0 && (e = Ou(e, 1 / o, r)), e
}

function zO(e, t = 0, n = 1, r = .5, o, i = e, a = e) {
    if (On.test(t) && (t = parseFloat(t), t = Re(a.min, a.max, t / 100) - a.min), typeof t != "number") return;
    let s = Re(i.min, i.max, r);
    e === i && (s -= t), e.min = dv(e.min, t, n, s, o), e.max = dv(e.max, t, n, s, o)
}

function fv(e, t, [n, r, o], i, a) {
    zO(e, t[n], t[r], t[o], t.scale, i, a)
}
const $O = ["x", "scaleX", "originX"],
    LO = ["y", "scaleY", "originY"];

function pv(e, t, n, r) {
    fv(e.x, t, $O, n ? n.x : void 0, r ? r.x : void 0), fv(e.y, t, LO, n ? n.y : void 0, r ? r.y : void 0)
}

function mv(e) {
    return e.translate === 0 && e.scale === 1
}

function Tw(e) {
    return mv(e.x) && mv(e.y)
}

function Ep(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}

function hv(e) {
    return Lt(e.x) / Lt(e.y)
}
class IO {
    constructor() {
        this.members = []
    }
    add(t) {
        gh(this.members, t), t.scheduleRender()
    }
    remove(t) {
        if (yh(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(o => t === o);
        if (n === 0) return !1;
        let r;
        for (let o = n; o >= 0; o--) {
            const i = this.members[o];
            if (i.isPresent !== !1) {
                r = i;
                break
            }
        }
        return r ? (this.promote(r), !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
            r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {
                crossfade: o
            } = t.options;
            o === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {
                options: n,
                resumingFrom: r
            } = t;
            n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function gv(e, t, n) {
    let r = "";
    const o = e.x.translate / t.x,
        i = e.y.translate / t.y;
    if ((o || i) && (r = `translate3d(${o}px, ${i}px, 0) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1/t.x}, ${1/t.y}) `), n) {
        const {
            rotate: l,
            rotateX: u,
            rotateY: c
        } = n;
        l && (r += `rotate(${l}deg) `), u && (r += `rotateX(${u}deg) `), c && (r += `rotateY(${c}deg) `)
    }
    const a = e.x.scale * t.x,
        s = e.y.scale * t.y;
    return (a !== 1 || s !== 1) && (r += `scale(${a}, ${s})`), r || "none"
}
const DO = (e, t) => e.depth - t.depth;
class FO {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(t) {
        gh(this.children, t), this.isDirty = !0
    }
    remove(t) {
        yh(this.children, t), this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(DO), this.isDirty = !1, this.children.forEach(t)
    }
}

function NO(e) {
    window.MotionDebug && window.MotionDebug.record(e)
}
const yv = ["", "X", "Y", "Z"],
    vv = 1e3;
let BO = 0;
const no = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};

function Pw({
    attachResizeListener: e,
    defaultParent: t,
    measureScroll: n,
    checkIsScrollRoot: r,
    resetTransform: o
}) {
    return class {
        constructor(a, s = {}, l = t == null ? void 0 : t()) {
            this.id = BO++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                no.totalNodes = no.resolvedTargetDeltas = no.recalculatedProjection = 0, this.nodes.forEach(HO), this.nodes.forEach(KO), this.nodes.forEach(qO), this.nodes.forEach(WO), NO(no)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.elementId = a, this.latestValues = s, this.root = l ? l.root || l : this, this.path = l ? [...l.path, l] : [], this.parent = l, this.depth = l ? l.depth + 1 : 0, a && this.root.registerPotentialNode(a, this);
            for (let u = 0; u < this.path.length; u++) this.path[u].shouldResetTransform = !0;
            this.root === this && (this.nodes = new FO)
        }
        addEventListener(a, s) {
            return this.eventHandlers.has(a) || this.eventHandlers.set(a, new vh), this.eventHandlers.get(a).add(s)
        }
        notifyListeners(a, ...s) {
            const l = this.eventHandlers.get(a);
            l && l.notify(...s)
        }
        hasListeners(a) {
            return this.eventHandlers.has(a)
        }
        registerPotentialNode(a, s) {
            this.potentialNodes.set(a, s)
        }
        mount(a, s = !1) {
            if (this.instance) return;
            this.isSVG = a instanceof SVGElement && a.tagName !== "svg", this.instance = a;
            const {
                layoutId: l,
                layout: u,
                visualElement: c
            } = this.options;
            if (c && !c.current && c.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), s && (u || l) && (this.isLayoutDirty = !0), e) {
                let d;
                const f = () => this.root.updateBlockedByResize = !1;
                e(a, () => {
                    this.root.updateBlockedByResize = !0, d && d(), d = mw(f, 250), Ca.hasAnimatedSinceResize && (Ca.hasAnimatedSinceResize = !1, this.nodes.forEach(Sv))
                })
            }
            l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({
                delta: d,
                hasLayoutChanged: f,
                hasRelativeTargetChanged: p,
                layout: m
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const y = this.options.transition || c.getDefaultTransition() || JO,
                    {
                        onLayoutAnimationStart: x,
                        onLayoutAnimationComplete: g
                    } = c.getProps(),
                    h = !this.targetLayout || !Ep(this.targetLayout, m) || p,
                    v = !f && p;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || v || f && (h || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, v);
                    const w = { ...hw(y, "layout"),
                        onPlay: x,
                        onComplete: g
                    };
                    (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w)
                } else !f && this.animationProgress === 0 && Sv(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = m
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const a = this.getStack();
            a && a.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Ir.preRender(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(XO), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: a
            } = this.options;
            return a && a.getProps().transformTemplate
        }
        willUpdate(a = !0) {
            if (this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1)
            }
            const {
                layoutId: s,
                layout: l
            } = this.options;
            if (s === void 0 && !l) return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), a && this.notifyListeners("willUpdate")
        }
        didUpdate() {
            if (this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(bv);
                return
            }
            this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(ez), this.potentialNodes.clear()), this.nodes.forEach(GO), this.nodes.forEach(jO), this.nodes.forEach(VO), this.clearAllSnapshots(), Bd.update(), Bd.preRender(), Bd.render())
        }
        clearAllSnapshots() {
            this.nodes.forEach(UO), this.sharedNodes.forEach(YO)
        }
        scheduleUpdateProjection() {
            at.preRender(this.updateProjection, !1, !0)
        }
        scheduleCheckAfterUnmount() {
            at.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
            const a = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = De(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: s
            } = this.options;
            s && s.notify("LayoutMeasure", this.layout.layoutBox, a ? a.layoutBox : void 0)
        }
        updateScroll(a = "measure") {
            let s = Boolean(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === a && (s = !1), s && (this.scroll = {
                animationId: this.root.animationId,
                phase: a,
                isRoot: r(this.instance),
                offset: n(this.instance)
            })
        }
        resetTransform() {
            if (!o) return;
            const a = this.isLayoutDirty || this.shouldResetTransform,
                s = this.projectionDelta && !Tw(this.projectionDelta),
                l = this.getTransformTemplate(),
                u = l ? l(this.latestValues, "") : void 0,
                c = u !== this.prevTransformTemplateValue;
            a && (s || to(this.latestValues) || c) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(a = !0) {
            const s = this.measurePageBox();
            let l = this.removeElementScroll(s);
            return a && (l = this.removeTransform(l)), tz(l), {
                animationId: this.root.animationId,
                measuredBox: s,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {
                visualElement: a
            } = this.options;
            if (!a) return De();
            const s = a.measureViewportBox(),
                {
                    scroll: l
                } = this.root;
            return l && (yr(s.x, l.offset.x), yr(s.y, l.offset.y)), s
        }
        removeElementScroll(a) {
            const s = De();
            Wt(s, a);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l],
                    {
                        scroll: c,
                        options: d
                    } = u;
                if (u !== this.root && c && d.layoutScroll) {
                    if (c.isRoot) {
                        Wt(s, a);
                        const {
                            scroll: f
                        } = this.root;
                        f && (yr(s.x, -f.offset.x), yr(s.y, -f.offset.y))
                    }
                    yr(s.x, c.offset.x), yr(s.y, c.offset.y)
                }
            }
            return s
        }
        applyTransform(a, s = !1) {
            const l = De();
            Wt(l, a);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !s && c.options.layoutScroll && c.scroll && c !== c.root && Jo(l, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }), to(c.latestValues) && Jo(l, c.latestValues)
            }
            return to(this.latestValues) && Jo(l, this.latestValues), l
        }
        removeTransform(a) {
            const s = De();
            Wt(s, a);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !to(u.latestValues)) continue;
                kp(u.latestValues) && u.updateSnapshot();
                const c = De(),
                    d = u.measurePageBox();
                Wt(c, d), pv(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return to(this.latestValues) && pv(s, this.latestValues), s
        }
        setTargetDelta(a) {
            this.targetDelta = a, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(a) {
            this.options = { ...this.options,
                ...a,
                crossfade: a.crossfade !== void 0 ? a.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        resolveTargetDelta() {
            var a;
            const s = this.getLead();
            if (this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty), !((Boolean(this.resumingFrom) || this !== s) && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget)) return;
            const {
                layout: c,
                layoutId: d
            } = this.options;
            if (!(!this.layout || !(c || d))) {
                if (!this.targetDelta && !this.relativeTarget) {
                    const f = this.getClosestProjectingParent();
                    f && f.layout ? (this.relativeParent = f, this.relativeTarget = De(), this.relativeTargetOrigin = De(), Pa(this.relativeTargetOrigin, this.layout.layoutBox, f.layout.layoutBox), Wt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = De(), this.targetWithTransforms = De()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? nO(this.target, this.relativeTarget, this.relativeParent.target) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : Wt(this.target, this.layout.layoutBox), ww(this.target, this.targetDelta)) : Wt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const f = this.getClosestProjectingParent();
                        f && Boolean(f.resumingFrom) === Boolean(this.resumingFrom) && !f.options.layoutScroll && f.target ? (this.relativeParent = f, this.relativeTarget = De(), this.relativeTargetOrigin = De(), Pa(this.relativeTargetOrigin, this.target, f.target), Wt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    no.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || kp(this.parent.latestValues) || Sw(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var a;
            const s = this.getLead(),
                l = Boolean(this.resumingFrom) || this !== s;
            let u = !0;
            if ((this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), u) return;
            const {
                layout: c,
                layoutId: d
            } = this.options;
            if (this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d)) return;
            Wt(this.layoutCorrected, this.layout.layoutBox), dO(this.layoutCorrected, this.treeScale, this.path, l);
            const {
                target: f
            } = s;
            if (!f) return;
            this.projectionDelta || (this.projectionDelta = Aa(), this.projectionDeltaWithTransform = Aa());
            const p = this.treeScale.x,
                m = this.treeScale.y,
                y = this.projectionTransform;
            Ta(this.projectionDelta, this.layoutCorrected, f, this.latestValues), this.projectionTransform = gv(this.projectionDelta, this.treeScale), (this.projectionTransform !== y || this.treeScale.x !== p || this.treeScale.y !== m) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", f)), no.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(a = !0) {
            if (this.options.scheduleRender && this.options.scheduleRender(), a) {
                const s = this.getStack();
                s && s.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(a, s = !1) {
            const l = this.snapshot,
                u = l ? l.latestValues : {},
                c = { ...this.latestValues
                },
                d = Aa();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
            const f = De(),
                p = l ? l.source : void 0,
                m = this.layout ? this.layout.source : void 0,
                y = p !== m,
                x = this.getStack(),
                g = !x || x.members.length <= 1,
                h = Boolean(y && !g && this.options.crossfade === !0 && !this.path.some(ZO));
            this.animationProgress = 0;
            let v;
            this.mixTargetDelta = w => {
                const E = w / 1e3;
                wv(d.x, a.x, E), wv(d.y, a.y, E), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Pa(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), QO(this.relativeTarget, this.relativeTargetOrigin, f, E), v && Ep(this.relativeTarget, v) && (this.isProjectionDirty = !1), v || (v = De()), Wt(v, this.relativeTarget)), y && (this.animationValues = c, RO(c, u, this.latestValues, E, h, g)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = E
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(a) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Ir.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = at.update(() => {
                Ca.hasAnimatedSinceResize = !0, this.currentAnimation = PO(0, vv, { ...a,
                    onUpdate: s => {
                        this.mixTargetDelta(s), a.onUpdate && a.onUpdate(s)
                    },
                    onComplete: () => {
                        a.onComplete && a.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const a = this.getStack();
            a && a.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(vv), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const a = this.getLead();
            let {
                targetWithTransforms: s,
                target: l,
                layout: u,
                latestValues: c
            } = a;
            if (!(!s || !l || !u)) {
                if (this !== a && this.layout && u && Aw(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || De();
                    const d = Lt(this.layout.layoutBox.x);
                    l.x.min = a.target.x.min, l.x.max = l.x.min + d;
                    const f = Lt(this.layout.layoutBox.y);
                    l.y.min = a.target.y.min, l.y.max = l.y.min + f
                }
                Wt(s, l), Jo(s, c), Ta(this.projectionDeltaWithTransform, this.layoutCorrected, s, c)
            }
        }
        registerSharedNode(a, s) {
            this.sharedNodes.has(a) || this.sharedNodes.set(a, new IO), this.sharedNodes.get(a).add(s);
            const u = s.options.initialPromotionConfig;
            s.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(s) : void 0
            })
        }
        isLead() {
            const a = this.getStack();
            return a ? a.lead === this : !0
        }
        getLead() {
            var a;
            const {
                layoutId: s
            } = this.options;
            return s ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) || this : this
        }
        getPrevLead() {
            var a;
            const {
                layoutId: s
            } = this.options;
            return s ? (a = this.getStack()) === null || a === void 0 ? void 0 : a.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: a
            } = this.options;
            if (a) return this.root.sharedNodes.get(a)
        }
        promote({
            needsReset: a,
            transition: s,
            preserveFollowOpacity: l
        } = {}) {
            const u = this.getStack();
            u && u.promote(this, l), a && (this.projectionDelta = void 0, this.needsReset = !0), s && this.setOptions({
                transition: s
            })
        }
        relegate() {
            const a = this.getStack();
            return a ? a.relegate(this) : !1
        }
        resetRotation() {
            const {
                visualElement: a
            } = this.options;
            if (!a) return;
            let s = !1;
            const {
                latestValues: l
            } = a;
            if ((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (s = !0), !s) return;
            const u = {};
            for (let c = 0; c < yv.length; c++) {
                const d = "rotate" + yv[c];
                l[d] && (u[d] = l[d], a.setStaticValue(d, 0))
            }
            a.render();
            for (const c in u) a.setStaticValue(c, u[c]);
            a.scheduleRender()
        }
        getProjectionStyles(a = {}) {
            var s, l;
            const u = {};
            if (!this.instance || this.isSVG) return u;
            if (this.isVisible) u.visibility = "";
            else return {
                visibility: "hidden"
            };
            const c = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, u.opacity = "", u.pointerEvents = Fl(a.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
            const d = this.getLead();
            if (!this.projectionDelta || !this.layout || !d.target) {
                const y = {};
                return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, y.pointerEvents = Fl(a.pointerEvents) || ""), this.hasProjected && !to(this.latestValues) && (y.transform = c ? c({}, "") : "none", this.hasProjected = !1), y
            }
            const f = d.animationValues || d.latestValues;
            this.applyTransformsToTarget(), u.transform = gv(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
            const {
                x: p,
                y: m
            } = this.projectionDelta;
            u.transformOrigin = `${p.origin*100}% ${m.origin*100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
            for (const y in _u) {
                if (f[y] === void 0) continue;
                const {
                    correct: x,
                    applyTo: g
                } = _u[y], h = u.transform === "none" ? f[y] : x(f[y], d);
                if (g) {
                    const v = g.length;
                    for (let w = 0; w < v; w++) u[g[w]] = h
                } else u[y] = h
            }
            return this.options.layoutId && (u.pointerEvents = d === this ? Fl(a.pointerEvents) || "" : "none"), u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(a => {
                var s;
                return (s = a.currentAnimation) === null || s === void 0 ? void 0 : s.stop()
            }), this.root.nodes.forEach(bv), this.root.sharedNodes.clear()
        }
    }
}

function jO(e) {
    e.updateLayout()
}

function VO(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {
            layoutBox: r,
            measuredBox: o
        } = e.layout, {
            animationType: i
        } = e.options, a = n.source !== e.layout.source;
        i === "size" ? wn(d => {
            const f = a ? n.measuredBox[d] : n.layoutBox[d],
                p = Lt(f);
            f.min = r[d].min, f.max = f.min + p
        }) : Aw(i, n.layoutBox, r) && wn(d => {
            const f = a ? n.measuredBox[d] : n.layoutBox[d],
                p = Lt(r[d]);
            f.max = f.min + p
        });
        const s = Aa();
        Ta(s, r, n.layoutBox);
        const l = Aa();
        a ? Ta(l, e.applyTransform(o, !0), n.measuredBox) : Ta(l, r, n.layoutBox);
        const u = !Tw(s);
        let c = !1;
        if (!e.resumeFrom) {
            const d = e.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
                const {
                    snapshot: f,
                    layout: p
                } = d;
                if (f && p) {
                    const m = De();
                    Pa(m, n.layoutBox, f.layoutBox);
                    const y = De();
                    Pa(y, r, p.layoutBox), Ep(m, y) || (c = !0), d.options.layoutRoot && (e.relativeTarget = y, e.relativeTargetOrigin = m, e.relativeParent = d)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: l,
            layoutDelta: s,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c
        })
    } else if (e.isLead()) {
        const {
            onExitComplete: r
        } = e.options;
        r && r()
    }
    e.options.transition = void 0
}

function HO(e) {
    no.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = Boolean(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function WO(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function UO(e) {
    e.clearSnapshot()
}

function bv(e) {
    e.clearMeasurements()
}

function GO(e) {
    const {
        visualElement: t
    } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function Sv(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0
}

function KO(e) {
    e.resolveTargetDelta()
}

function qO(e) {
    e.calcProjection()
}

function XO(e) {
    e.resetRotation()
}

function YO(e) {
    e.removeLeadSnapshot()
}

function wv(e, t, n) {
    e.translate = Re(t.translate, 0, n), e.scale = Re(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
}

function xv(e, t, n, r) {
    e.min = Re(t.min, n.min, r), e.max = Re(t.max, n.max, r)
}

function QO(e, t, n, r) {
    xv(e.x, t.x, n.x, r), xv(e.y, t.y, n.y, r)
}

function ZO(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const JO = {
    duration: .45,
    ease: [.4, 0, .1, 1]
};

function ez(e, t) {
    let n = e.root;
    for (let i = e.path.length - 1; i >= 0; i--)
        if (Boolean(e.path[i].instance)) {
            n = e.path[i];
            break
        }
    const o = (n && n !== e.root ? n.instance : document).querySelector(`[data-projection-id="${t}"]`);
    o && e.mount(o, !0)
}

function kv(e) {
    e.min = Math.round(e.min), e.max = Math.round(e.max)
}

function tz(e) {
    kv(e.x), kv(e.y)
}

function Aw(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !wp(hv(t), hv(n), .2)
}
const nz = Pw({
        attachResizeListener: (e, t) => Un(e, "resize", t),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    Xd = {
        current: void 0
    },
    Rw = Pw({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!Xd.current) {
                const e = new nz(0, {});
                e.mount(window), e.setOptions({
                    layoutScroll: !0
                }), Xd.current = e
            }
            return Xd.current
        },
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none"
        },
        checkIsScrollRoot: e => Boolean(window.getComputedStyle(e).position === "fixed")
    }),
    rz = {
        pan: {
            Feature: bO
        },
        drag: {
            Feature: vO,
            ProjectionNode: Rw,
            MeasureLayout: Cw
        }
    },
    oz = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
    Mw = e => oz.has(e),
    iz = e => Object.keys(e).some(Mw),
    Cv = e => e === Po || e === U,
    _v = (e, t) => parseFloat(e.split(", ")[t]),
    Ev = (e, t) => (n, {
        transform: r
    }) => {
        if (r === "none" || !r) return 0;
        const o = r.match(/^matrix3d\((.+)\)$/);
        if (o) return _v(o[1], t); {
            const i = r.match(/^matrix\((.+)\)$/);
            return i ? _v(i[1], e) : 0
        }
    },
    az = new Set(["x", "y", "z"]),
    sz = xc.filter(e => !az.has(e));

function lz(e) {
    const t = [];
    return sz.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
    }), t.length && e.render(), t
}
const Tv = {
        width: ({
            x: e
        }, {
            paddingLeft: t = "0",
            paddingRight: n = "0"
        }) => e.max - e.min - parseFloat(t) - parseFloat(n),
        height: ({
            y: e
        }, {
            paddingTop: t = "0",
            paddingBottom: n = "0"
        }) => e.max - e.min - parseFloat(t) - parseFloat(n),
        top: (e, {
            top: t
        }) => parseFloat(t),
        left: (e, {
            left: t
        }) => parseFloat(t),
        bottom: ({
            y: e
        }, {
            top: t
        }) => parseFloat(t) + (e.max - e.min),
        right: ({
            x: e
        }, {
            left: t
        }) => parseFloat(t) + (e.max - e.min),
        x: Ev(4, 13),
        y: Ev(5, 14)
    },
    uz = (e, t, n) => {
        const r = t.measureViewportBox(),
            o = t.current,
            i = getComputedStyle(o),
            {
                display: a
            } = i,
            s = {};
        a === "none" && t.setStaticValue("display", e.display || "block"), n.forEach(u => {
            s[u] = Tv[u](r, i)
        }), t.render();
        const l = t.measureViewportBox();
        return n.forEach(u => {
            const c = t.getValue(u);
            c && c.jump(s[u]), e[u] = Tv[u](l, i)
        }), e
    },
    cz = (e, t, n = {}, r = {}) => {
        t = { ...t
        }, r = { ...r
        };
        const o = Object.keys(t).filter(Mw);
        let i = [],
            a = !1;
        const s = [];
        if (o.forEach(l => {
                const u = e.getValue(l);
                if (!e.hasValue(l)) return;
                let c = n[l],
                    d = Qi(c);
                const f = t[l];
                let p;
                if (Tu(f)) {
                    const m = f.length,
                        y = f[0] === null ? 1 : 0;
                    c = f[y], d = Qi(c);
                    for (let x = y; x < m; x++) p ? Ru(Qi(f[x]) === p) : p = Qi(f[x])
                } else p = Qi(f);
                if (d !== p)
                    if (Cv(d) && Cv(p)) {
                        const m = u.get();
                        typeof m == "string" && u.set(parseFloat(m)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && p === U && (t[l] = f.map(parseFloat))
                    } else d != null && d.transform && (p != null && p.transform) && (c === 0 || f === 0) ? c === 0 ? u.set(p.transform(c)) : t[l] = d.transform(f) : (a || (i = lz(e), a = !0), s.push(l), r[l] = r[l] !== void 0 ? r[l] : t[l], u.jump(f))
            }), s.length) {
            const l = s.indexOf("height") >= 0 ? window.pageYOffset : null,
                u = uz(t, e, s);
            return i.length && i.forEach(([c, d]) => {
                e.getValue(c).set(d)
            }), e.render(), bc && l !== null && window.scrollTo({
                top: l
            }), {
                target: u,
                transitionEnd: r
            }
        } else return {
            target: t,
            transitionEnd: r
        }
    };

function dz(e, t, n, r) {
    return iz(t) ? cz(e, t, n, r) : {
        target: t,
        transitionEnd: r
    }
}
const fz = (e, t, n, r) => {
        const o = CO(e, t, r);
        return t = o.target, r = o.transitionEnd, dz(e, t, n, r)
    },
    Tp = {
        current: null
    },
    Ow = {
        current: !1
    };

function pz() {
    if (Ow.current = !0, !!bc)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                t = () => Tp.current = e.matches;
            e.addListener(t), t()
        } else Tp.current = !1
}

function mz(e, t, n) {
    const {
        willChange: r
    } = t;
    for (const o in t) {
        const i = t[o],
            a = n[o];
        if (_t(i)) e.addValue(o, i), Au(r) && r.add(o);
        else if (_t(a)) e.addValue(o, ki(i, {
            owner: e
        })), Au(r) && r.remove(o);
        else if (a !== i)
            if (e.hasValue(o)) {
                const s = e.getValue(o);
                !s.hasAnimated && s.set(i)
            } else {
                const s = e.getStaticValue(o);
                e.addValue(o, ki(s !== void 0 ? s : i, {
                    owner: e
                }))
            }
    }
    for (const o in n) t[o] === void 0 && e.removeValue(o);
    return t
}
const zw = Object.keys(as),
    hz = zw.length,
    Pv = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
    gz = ih.length;
class yz {
    constructor({
        parent: t,
        props: n,
        presenceContext: r,
        reducedMotionConfig: o,
        visualState: i
    }, a = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.scheduleRender = () => at.render(this.render, !1, !0);
        const {
            latestValues: s,
            renderState: l
        } = i;
        this.latestValues = s, this.baseTarget = { ...s
        }, this.initialValues = n.initial ? { ...s
        } : {}, this.renderState = l, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.isControllingVariants = wc(n), this.isVariantNode = _2(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(t && t.current);
        const {
            willChange: u,
            ...c
        } = this.scrapeMotionValuesFromProps(n, {});
        for (const d in c) {
            const f = c[d];
            s[d] !== void 0 && _t(f) && (f.set(s[d], !1), Au(u) && u.add(d))
        }
    }
    scrapeMotionValuesFromProps(t, n) {
        return {}
    }
    mount(t) {
        this.current = t, this.projection && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Ow.current || pz(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Tp.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        this.projection && this.projection.unmount(), Ir.update(this.notifyUpdate), Ir.render(this.render), this.valueSubscriptions.forEach(t => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const t in this.events) this.events[t].clear();
        for (const t in this.features) this.features[t].unmount();
        this.current = null
    }
    bindToMotionValue(t, n) {
        const r = To.has(t),
            o = n.on("change", a => {
                this.latestValues[t] = a, this.props.onUpdate && at.update(this.notifyUpdate, !1, !0), r && this.projection && (this.projection.isTransformDirty = !0)
            }),
            i = n.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(t, () => {
            o(), i()
        })
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    loadFeatures({
        children: t,
        ...n
    }, r, o, i, a) {
        let s, l;
        for (let u = 0; u < hz; u++) {
            const c = zw[u],
                {
                    isEnabled: d,
                    Feature: f,
                    ProjectionNode: p,
                    MeasureLayout: m
                } = as[c];
            p && (s = p), d(n) && (!this.features[c] && f && (this.features[c] = new f(this)), m && (l = m))
        }
        if (!this.projection && s) {
            this.projection = new s(i, this.latestValues, this.parent && this.parent.projection);
            const {
                layoutId: u,
                layout: c,
                drag: d,
                dragConstraints: f,
                layoutScroll: p,
                layoutRoot: m
            } = n;
            this.projection.setOptions({
                layoutId: u,
                layout: c,
                alwaysMeasureLayout: Boolean(d) || f && Qo(f),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                animationType: typeof c == "string" ? c : "both",
                initialPromotionConfig: a,
                layoutScroll: p,
                layoutRoot: m
            })
        }
        return l
    }
    updateFeatures() {
        for (const t in this.features) {
            const n = this.features[t];
            n.isMounted ? n.update(this.props, this.prevProps) : (n.mount(), n.isMounted = !0)
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : De()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    makeTargetAnimatable(t, n = !0) {
        return this.makeTargetAnimatableFromInstance(t, this.props, n)
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
        for (let r = 0; r < Pv.length; r++) {
            const o = Pv[r];
            this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
            const i = t["on" + o];
            i && (this.propEventSubscriptions[o] = this.on(o, i))
        }
        this.prevMotionValues = mz(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    getVariantContext(t = !1) {
        if (t) return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const r = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (r.initial = this.props.initial), r
        }
        const n = {};
        for (let r = 0; r < gz; r++) {
            const o = ih[r],
                i = this.props[o];
            (is(i) || i === !1) && (n[o] = i)
        }
        return n
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        n !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, n)), this.values.set(t, n), this.latestValues[t] = n.get()
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t]) return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = ki(n, {
            owner: this
        }), this.addValue(t, r)), r
    }
    readValue(t) {
        return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.readValueFromInstance(this.current, t, this.options)
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {
            initial: r
        } = this.props, o = typeof r == "string" || typeof r == "object" ? (n = hh(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
        if (r && o !== void 0) return o;
        const i = this.getBaseTargetFromProps(this.props, t);
        return i !== void 0 && !_t(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new vh), this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class $w extends yz {
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {
        vars: n,
        style: r
    }) {
        delete n[t], delete r[t]
    }
    makeTargetAnimatableFromInstance({
        transition: t,
        transitionEnd: n,
        ...r
    }, {
        transformValues: o
    }, i) {
        let a = DR(r, t || {}, this);
        if (o && (n && (n = o(n)), r && (r = o(r)), a && (a = o(a))), i) {
            LR(this, r, a);
            const s = fz(this, r, a, n);
            n = s.transitionEnd, r = s.target
        }
        return {
            transition: t,
            transitionEnd: n,
            ...r
        }
    }
}

function vz(e) {
    return window.getComputedStyle(e)
}
class bz extends $w {
    readValueFromInstance(t, n) {
        if (To.has(n)) {
            const r = wh(n);
            return r && r.default || 0
        } else {
            const r = vz(t),
                o = (A2(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof o == "string" ? o.trim() : o
        }
    }
    measureInstanceViewportBox(t, {
        transformPagePoint: n
    }) {
        return xw(t, n)
    }
    build(t, n, r, o) {
        uh(t, n, r, o.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n) {
        return mh(t, n)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: t
        } = this.props;
        _t(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }))
    }
    renderInstance(t, n, r, o) {
        $2(t, n, r, o)
    }
}
class Sz extends $w {
    constructor() {
        super(...arguments), this.isSVGTag = !1
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (To.has(n)) {
            const r = wh(n);
            return r && r.default || 0
        }
        return n = L2.has(n) ? n : ph(n), t.getAttribute(n)
    }
    measureInstanceViewportBox() {
        return De()
    }
    scrapeMotionValuesFromProps(t, n) {
        return D2(t, n)
    }
    build(t, n, r, o) {
        dh(t, n, r, this.isSVGTag, o.transformTemplate)
    }
    renderInstance(t, n, r, o) {
        I2(t, n, r, o)
    }
    mount(t) {
        this.isSVGTag = fh(t.tagName), super.mount(t)
    }
}
const wz = (e, t) => lh(e) ? new Sz(t, {
        enableHardwareAcceleration: !1
    }) : new bz(t, {
        enableHardwareAcceleration: !0
    }),
    xz = {
        layout: {
            ProjectionNode: Rw,
            MeasureLayout: Cw
        }
    },
    kz = { ...ZM,
        ...uR,
        ...rz,
        ...xz
    },
    Lw = x9((e, t) => Y9(e, t, kz, wz));

function Iw() {
    const e = b.useRef(!1);
    return Cu(() => (e.current = !0, () => {
        e.current = !1
    }), []), e
}

function Cz() {
    const e = Iw(),
        [t, n] = b.useState(0),
        r = b.useCallback(() => {
            e.current && n(t + 1)
        }, [t]);
    return [b.useCallback(() => at.postRender(r), [r]), t]
}
class _z extends b.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = this.props.sizeRef.current;
            r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}

function Ez({
    children: e,
    isPresent: t
}) {
    const n = b.useId(),
        r = b.useRef(null),
        o = b.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0
        });
    return b.useInsertionEffect(() => {
        const {
            width: i,
            height: a,
            top: s,
            left: l
        } = o.current;
        if (t || !r.current || !i || !a) return;
        r.current.dataset.motionPopId = n;
        const u = document.createElement("style");
        return document.head.appendChild(u), u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${a}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `), () => {
            document.head.removeChild(u)
        }
    }, [t]), b.createElement(_z, {
        isPresent: t,
        childRef: r,
        sizeRef: o
    }, b.cloneElement(e, {
        ref: r
    }))
}
const Yd = ({
    children: e,
    initial: t,
    isPresent: n,
    onExitComplete: r,
    custom: o,
    presenceAffectsLayout: i,
    mode: a
}) => {
    const s = ah(Tz),
        l = b.useId(),
        u = b.useMemo(() => ({
            id: l,
            initial: t,
            isPresent: n,
            custom: o,
            onExitComplete: c => {
                s.set(c, !0);
                for (const d of s.values())
                    if (!d) return;
                r && r()
            },
            register: c => (s.set(c, !1), () => s.delete(c))
        }), i ? void 0 : [n]);
    return b.useMemo(() => {
        s.forEach((c, d) => s.set(d, !1))
    }, [n]), b.useEffect(() => {
        !n && !s.size && r && r()
    }, [n]), a === "popLayout" && (e = b.createElement(Ez, {
        isPresent: n
    }, e)), b.createElement(ws.Provider, {
        value: u
    }, e)
};

function Tz() {
    return new Map
}

function Pz(e) {
    return b.useEffect(() => () => e(), [])
}
const Fo = e => e.key || "";

function Az(e, t) {
    e.forEach(n => {
        const r = Fo(n);
        t.set(r, n)
    })
}

function Rz(e) {
    const t = [];
    return b.Children.forEach(e, n => {
        b.isValidElement(n) && t.push(n)
    }), t
}
const Mz = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    exitBeforeEnter: o,
    presenceAffectsLayout: i = !0,
    mode: a = "sync"
}) => {
    let [s] = Cz();
    const l = b.useContext(sh).forceRender;
    l && (s = l);
    const u = Iw(),
        c = Rz(e);
    let d = c;
    const f = new Set,
        p = b.useRef(d),
        m = b.useRef(new Map).current,
        y = b.useRef(!0);
    if (Cu(() => {
            y.current = !1, Az(c, m), p.current = d
        }), Pz(() => {
            y.current = !0, m.clear(), f.clear()
        }), y.current) return b.createElement(b.Fragment, null, d.map(v => b.createElement(Yd, {
        key: Fo(v),
        isPresent: !0,
        initial: n ? void 0 : !1,
        presenceAffectsLayout: i,
        mode: a
    }, v)));
    d = [...d];
    const x = p.current.map(Fo),
        g = c.map(Fo),
        h = x.length;
    for (let v = 0; v < h; v++) {
        const w = x[v];
        g.indexOf(w) === -1 && f.add(w)
    }
    return a === "wait" && f.size && (d = []), f.forEach(v => {
        if (g.indexOf(v) !== -1) return;
        const w = m.get(v);
        if (!w) return;
        const E = x.indexOf(v),
            P = () => {
                m.delete(v), f.delete(v);
                const T = p.current.findIndex(R => R.key === v);
                if (p.current.splice(T, 1), !f.size) {
                    if (p.current = c, u.current === !1) return;
                    s(), r && r()
                }
            };
        d.splice(E, 0, b.createElement(Yd, {
            key: Fo(w),
            isPresent: !1,
            onExitComplete: P,
            custom: t,
            presenceAffectsLayout: i,
            mode: a
        }, w))
    }), d = d.map(v => {
        const w = v.key;
        return f.has(w) ? v : b.createElement(Yd, {
            key: Fo(v),
            isPresent: !0,
            presenceAffectsLayout: i,
            mode: a
        }, v)
    }), b.createElement(b.Fragment, null, f.size ? d : d.map(v => b.cloneElement(v)))
};
var Oz = {
        initial: e => {
            const {
                position: t
            } = e, n = ["top", "bottom"].includes(t) ? "y" : "x";
            let r = ["top-right", "bottom-right"].includes(t) ? 1 : -1;
            return t === "bottom" && (r = 1), {
                opacity: 0,
                [n]: r * 24
            }
        },
        animate: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
                duration: .4,
                ease: [.4, 0, .2, 1]
            }
        },
        exit: {
            opacity: 0,
            scale: .85,
            transition: {
                duration: .2,
                ease: [.4, 0, 1, 1]
            }
        }
    },
    Dw = b.memo(e => {
        const {
            id: t,
            message: n,
            onCloseComplete: r,
            onRequestRemove: o,
            requestClose: i = !1,
            position: a = "bottom",
            duration: s = 5e3,
            containerStyle: l,
            motionVariants: u = Oz,
            toastSpacing: c = "0.5rem"
        } = e, [d, f] = b.useState(s), p = wO();
        wi(() => {
            p || r == null || r()
        }, [p]), wi(() => {
            f(s)
        }, [s]);
        const m = () => f(null),
            y = () => f(s),
            x = () => {
                p && o()
            };
        b.useEffect(() => {
            p && i && o()
        }, [p, i, o]), c9(x, d);
        const g = b.useMemo(() => ({
                pointerEvents: "auto",
                maxWidth: 560,
                minWidth: 300,
                margin: c,
                ...l
            }), [l, c]),
            h = b.useMemo(() => l9(a), [a]);
        return _(Lw.li, {
            layout: !0,
            className: "chakra-toast",
            variants: u,
            initial: "initial",
            animate: "animate",
            exit: "exit",
            onHoverStart: m,
            onHoverEnd: y,
            custom: {
                position: a
            },
            style: h,
            children: _(G.div, {
                role: "status",
                "aria-atomic": "true",
                className: "chakra-toast__inner",
                __css: g,
                children: Hn(n, {
                    id: t,
                    onClose: x
                })
            })
        })
    });
Dw.displayName = "ToastComponent";
var Av = {
        path: fe("g", {
            stroke: "currentColor",
            strokeWidth: "1.5",
            children: [_("path", {
                strokeLinecap: "round",
                fill: "none",
                d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
            }), _("path", {
                fill: "currentColor",
                strokeLinecap: "round",
                d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
            }), _("circle", {
                fill: "none",
                strokeMiterlimit: "10",
                cx: "12",
                cy: "12",
                r: "11.25"
            })]
        }),
        viewBox: "0 0 24 24"
    },
    Ao = X((e, t) => {
        const {
            as: n,
            viewBox: r,
            color: o = "currentColor",
            focusable: i = !1,
            children: a,
            className: s,
            __css: l,
            ...u
        } = e, c = ge("chakra-icon", s), d = Vr("Icon", e), f = {
            w: "1em",
            h: "1em",
            display: "inline-block",
            lineHeight: "1em",
            flexShrink: 0,
            color: o,
            ...l,
            ...d
        }, p = {
            ref: t,
            focusable: i,
            className: c,
            __css: f
        }, m = r ? ? Av.viewBox;
        if (n && typeof n != "string") return _(G.svg, {
            as: n,
            ...p,
            ...u
        });
        const y = a ? ? Av.path;
        return _(G.svg, {
            verticalAlign: "middle",
            viewBox: m,
            ...p,
            ...u,
            children: y
        })
    });
Ao.displayName = "Icon";

function zz(e) {
    return _(Ao, {
        viewBox: "0 0 24 24",
        ...e,
        children: _("path", {
            fill: "currentColor",
            d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
        })
    })
}

function $z(e) {
    return _(Ao, {
        viewBox: "0 0 24 24",
        ...e,
        children: _("path", {
            fill: "currentColor",
            d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
        })
    })
}

function Rv(e) {
    return _(Ao, {
        viewBox: "0 0 24 24",
        ...e,
        children: _("path", {
            fill: "currentColor",
            d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
        })
    })
}
var Lz = Um({
        "0%": {
            transform: "rotate(0deg)"
        },
        "100%": {
            transform: "rotate(360deg)"
        }
    }),
    Ec = X((e, t) => {
        const n = Vr("Spinner", e),
            {
                label: r = "Loading...",
                thickness: o = "2px",
                speed: i = "0.45s",
                emptyColor: a = "transparent",
                className: s,
                ...l
            } = ht(e),
            u = ge("chakra-spinner", s),
            c = {
                display: "inline-block",
                borderColor: "currentColor",
                borderStyle: "solid",
                borderRadius: "99999px",
                borderWidth: o,
                borderBottomColor: a,
                borderLeftColor: a,
                animation: `${Lz} ${i} linear infinite`,
                ...n
            };
        return _(G.div, {
            ref: t,
            __css: c,
            className: u,
            ...l,
            children: r && _(G.span, {
                srOnly: !0,
                children: r
            })
        })
    });
Ec.displayName = "Spinner";
var [Iz, Dz] = Nt({
    name: "AlertContext",
    hookName: "useAlertContext",
    providerName: "<Alert />"
}), [Fz, Rh] = Nt({
    name: "AlertStylesContext",
    hookName: "useAlertStyles",
    providerName: "<Alert />"
}), Fw = {
    info: {
        icon: $z,
        colorScheme: "blue"
    },
    warning: {
        icon: Rv,
        colorScheme: "orange"
    },
    success: {
        icon: zz,
        colorScheme: "green"
    },
    error: {
        icon: Rv,
        colorScheme: "red"
    },
    loading: {
        icon: Ec,
        colorScheme: "blue"
    }
};

function Nz(e) {
    return Fw[e].colorScheme
}

function Bz(e) {
    return Fw[e].icon
}
var Nw = X(function(t, n) {
    const o = {
        display: "inline",
        ...Rh().description
    };
    return _(G.div, {
        ref: n,
        ...t,
        className: ge("chakra-alert__desc", t.className),
        __css: o
    })
});
Nw.displayName = "AlertDescription";

function Bw(e) {
    const {
        status: t
    } = Dz(), n = Bz(t), r = Rh(), o = t === "loading" ? r.spinner : r.icon;
    return _(G.span, {
        display: "inherit",
        ...e,
        className: ge("chakra-alert__icon", e.className),
        __css: o,
        children: e.children || _(n, {
            h: "100%",
            w: "100%"
        })
    })
}
Bw.displayName = "AlertIcon";
var jw = X(function(t, n) {
    const r = Rh();
    return _(G.div, {
        ref: n,
        ...t,
        className: ge("chakra-alert__title", t.className),
        __css: r.title
    })
});
jw.displayName = "AlertTitle";
var Vw = X(function(t, n) {
    var r;
    const {
        status: o = "info",
        addRole: i = !0,
        ...a
    } = ht(t), s = (r = t.colorScheme) != null ? r : Nz(o), l = Hr("Alert", { ...t,
        colorScheme: s
    }), u = {
        width: "100%",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        ...l.container
    };
    return _(Iz, {
        value: {
            status: o
        },
        children: _(Fz, {
            value: l,
            children: _(G.div, {
                role: i ? "alert" : void 0,
                ref: n,
                ...a,
                className: ge("chakra-alert", t.className),
                __css: u
            })
        })
    })
});
Vw.displayName = "Alert";

function jz(e) {
    return _(Ao, {
        focusable: "false",
        "aria-hidden": !0,
        ...e,
        children: _("path", {
            fill: "currentColor",
            d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
        })
    })
}
var Hw = X(function(t, n) {
    const r = Vr("CloseButton", t),
        {
            children: o,
            isDisabled: i,
            __css: a,
            ...s
        } = ht(t),
        l = {
            outline: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0
        };
    return _(G.button, {
        type: "button",
        "aria-label": "Close",
        ref: n,
        disabled: i,
        __css: { ...l,
            ...r,
            ...a
        },
        ...s,
        children: o || _(jz, {
            width: "1em",
            height: "1em"
        })
    })
});
Hw.displayName = "CloseButton";
var Vz = {
        top: [],
        "top-left": [],
        "top-right": [],
        "bottom-left": [],
        bottom: [],
        "bottom-right": []
    },
    Ra = Hz(Vz);

function Hz(e) {
    let t = e;
    const n = new Set,
        r = o => {
            t = o(t), n.forEach(i => i())
        };
    return {
        getState: () => t,
        subscribe: o => (n.add(o), () => {
            r(() => e), n.delete(o)
        }),
        removeToast: (o, i) => {
            r(a => ({ ...a,
                [i]: a[i].filter(s => s.id != o)
            }))
        },
        notify: (o, i) => {
            const a = Wz(o, i),
                {
                    position: s,
                    id: l
                } = a;
            return r(u => {
                var c, d;
                const p = s.includes("top") ? [a, ...(c = u[s]) != null ? c : []] : [...(d = u[s]) != null ? d : [], a];
                return { ...u,
                    [s]: p
                }
            }), l
        },
        update: (o, i) => {
            o && r(a => {
                const s = { ...a
                    },
                    {
                        position: l,
                        index: u
                    } = Ty(s, o);
                return l && u !== -1 && (s[l][u] = { ...s[l][u],
                    ...i,
                    message: Gz(i)
                }), s
            })
        },
        closeAll: ({
            positions: o
        } = {}) => {
            r(i => (o ? ? ["bottom", "bottom-right", "bottom-left", "top", "top-left", "top-right"]).reduce((l, u) => (l[u] = i[u].map(c => ({ ...c,
                requestClose: !0
            })), l), { ...i
            }))
        },
        close: o => {
            r(i => {
                const a = x2(i, o);
                return a ? { ...i,
                    [a]: i[a].map(s => s.id == o ? { ...s,
                        requestClose: !0
                    } : s)
                } : i
            })
        },
        isActive: o => Boolean(Ty(Ra.getState(), o).position)
    }
}
var Mv = 0;

function Wz(e, t = {}) {
    var n, r;
    Mv += 1;
    const o = (n = t.id) != null ? n : Mv,
        i = (r = t.position) != null ? r : "bottom";
    return {
        id: o,
        message: e,
        position: i,
        duration: t.duration,
        onCloseComplete: t.onCloseComplete,
        onRequestRemove: () => Ra.removeToast(String(o), i),
        status: t.status,
        requestClose: !1,
        containerStyle: t.containerStyle
    }
}
var Uz = e => {
    const {
        status: t,
        variant: n = "solid",
        id: r,
        title: o,
        isClosable: i,
        onClose: a,
        description: s,
        icon: l
    } = e, u = r ? {
        root: `toast-${r}`,
        title: `toast-${r}-title`,
        description: `toast-${r}-description`
    } : void 0;
    return fe(Vw, {
        addRole: !1,
        status: t,
        variant: n,
        id: u == null ? void 0 : u.root,
        alignItems: "start",
        borderRadius: "md",
        boxShadow: "lg",
        paddingEnd: 8,
        textAlign: "start",
        width: "auto",
        children: [_(Bw, {
            children: l
        }), fe(G.div, {
            flex: "1",
            maxWidth: "100%",
            children: [o && _(jw, {
                id: u == null ? void 0 : u.title,
                children: o
            }), s && _(Nw, {
                id: u == null ? void 0 : u.description,
                display: "block",
                children: s
            })]
        }), i && _(Hw, {
            size: "sm",
            onClick: a,
            position: "absolute",
            insetEnd: 1,
            top: 1
        })]
    })
};

function Gz(e = {}) {
    const {
        render: t,
        toastComponent: n = Uz
    } = e;
    return o => typeof t == "function" ? t({ ...o,
        ...e
    }) : _(n, { ...o,
        ...e
    })
}
var [Kz, uN] = Nt({
    name: "ToastOptionsContext",
    strict: !1
}), qz = e => {
    const t = b.useSyncExternalStore(Ra.subscribe, Ra.getState, Ra.getState),
        {
            motionVariants: n,
            component: r = Dw,
            portalProps: o
        } = e,
        a = Object.keys(t).map(s => {
            const l = t[s];
            return _("ul", {
                role: "region",
                "aria-live": "polite",
                id: `chakra-toast-manager-${s}`,
                style: u9(s),
                children: _(Mz, {
                    initial: !1,
                    children: l.map(u => _(r, {
                        motionVariants: n,
                        ...u
                    }, u.id))
                })
            }, s)
        });
    return _(fc, { ...o,
        children: a
    })
}, Xz = e => function({
    children: n,
    theme: r = e,
    toastOptions: o,
    ...i
}) {
    return fe(a9, {
        theme: r,
        ...i,
        children: [_(Kz, {
            value: o == null ? void 0 : o.defaultOptions,
            children: n
        }), _(qz, { ...o
        })]
    })
}, Yz = Xz(p2), Qz = Object.defineProperty, Zz = (e, t, n) => t in e ? Qz(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n, $e = (e, t, n) => (Zz(e, typeof t != "symbol" ? t + "" : t, n), n);

function Ov(e) {
    return e.sort((t, n) => {
        const r = t.compareDocumentPosition(n);
        if (r & Node.DOCUMENT_POSITION_FOLLOWING || r & Node.DOCUMENT_POSITION_CONTAINED_BY) return -1;
        if (r & Node.DOCUMENT_POSITION_PRECEDING || r & Node.DOCUMENT_POSITION_CONTAINS) return 1;
        if (r & Node.DOCUMENT_POSITION_DISCONNECTED || r & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC) throw Error("Cannot sort the given nodes.");
        return 0
    })
}
var Jz = e => typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;

function zv(e, t, n) {
    let r = e + 1;
    return n && r >= t && (r = 0), r
}

function $v(e, t, n) {
    let r = e - 1;
    return n && r < 0 && (r = t), r
}
var Pp = typeof window < "u" ? b.useLayoutEffect : b.useEffect,
    zu = e => e,
    e$ = class {
        constructor() {
            $e(this, "descendants", new Map), $e(this, "register", e => {
                if (e != null) return Jz(e) ? this.registerNode(e) : t => {
                    this.registerNode(t, e)
                }
            }), $e(this, "unregister", e => {
                this.descendants.delete(e);
                const t = Ov(Array.from(this.descendants.keys()));
                this.assignIndex(t)
            }), $e(this, "destroy", () => {
                this.descendants.clear()
            }), $e(this, "assignIndex", e => {
                this.descendants.forEach(t => {
                    const n = e.indexOf(t.node);
                    t.index = n, t.node.dataset.index = t.index.toString()
                })
            }), $e(this, "count", () => this.descendants.size), $e(this, "enabledCount", () => this.enabledValues().length), $e(this, "values", () => Array.from(this.descendants.values()).sort((t, n) => t.index - n.index)), $e(this, "enabledValues", () => this.values().filter(e => !e.disabled)), $e(this, "item", e => {
                if (this.count() !== 0) return this.values()[e]
            }), $e(this, "enabledItem", e => {
                if (this.enabledCount() !== 0) return this.enabledValues()[e]
            }), $e(this, "first", () => this.item(0)), $e(this, "firstEnabled", () => this.enabledItem(0)), $e(this, "last", () => this.item(this.descendants.size - 1)), $e(this, "lastEnabled", () => {
                const e = this.enabledValues().length - 1;
                return this.enabledItem(e)
            }), $e(this, "indexOf", e => {
                var t, n;
                return e && (n = (t = this.descendants.get(e)) == null ? void 0 : t.index) != null ? n : -1
            }), $e(this, "enabledIndexOf", e => e == null ? -1 : this.enabledValues().findIndex(t => t.node.isSameNode(e))), $e(this, "next", (e, t = !0) => {
                const n = zv(e, this.count(), t);
                return this.item(n)
            }), $e(this, "nextEnabled", (e, t = !0) => {
                const n = this.item(e);
                if (!n) return;
                const r = this.enabledIndexOf(n.node),
                    o = zv(r, this.enabledCount(), t);
                return this.enabledItem(o)
            }), $e(this, "prev", (e, t = !0) => {
                const n = $v(e, this.count() - 1, t);
                return this.item(n)
            }), $e(this, "prevEnabled", (e, t = !0) => {
                const n = this.item(e);
                if (!n) return;
                const r = this.enabledIndexOf(n.node),
                    o = $v(r, this.enabledCount() - 1, t);
                return this.enabledItem(o)
            }), $e(this, "registerNode", (e, t) => {
                if (!e || this.descendants.has(e)) return;
                const n = Array.from(this.descendants.keys()).concat(e),
                    r = Ov(n);
                t != null && t.disabled && (t.disabled = !!t.disabled);
                const o = {
                    node: e,
                    index: -1,
                    ...t
                };
                this.descendants.set(e, o), this.assignIndex(r)
            })
        }
    };

function t$(e, t) {
    if (e != null) {
        if (typeof e == "function") {
            e(t);
            return
        }
        try {
            e.current = t
        } catch {
            throw new Error(`Cannot assign value '${t}' to ref '${e}'`)
        }
    }
}

function tn(...e) {
    return t => {
        e.forEach(n => {
            t$(n, t)
        })
    }
}

function n$(...e) {
    return b.useMemo(() => tn(...e), e)
}

function r$() {
    const e = b.useRef(new e$);
    return Pp(() => () => e.current.destroy()), e.current
}
var [o$, Ww] = Nt({
    name: "DescendantsProvider",
    errorMessage: "useDescendantsContext must be used within DescendantsProvider"
});

function i$(e) {
    const t = Ww(),
        [n, r] = b.useState(-1),
        o = b.useRef(null);
    Pp(() => () => {
        o.current && t.unregister(o.current)
    }, []), Pp(() => {
        if (!o.current) return;
        const a = Number(o.current.dataset.index);
        n != a && !Number.isNaN(a) && r(a)
    });
    const i = zu(e ? t.register(e) : t.register);
    return {
        descendants: t,
        index: n,
        enabledIndex: t.enabledIndexOf(o.current),
        register: tn(i, o)
    }
}

function a$() {
    return [zu(o$), () => zu(Ww()), () => r$(), o => i$(o)]
}
var Ap = X(function(t, n) {
    const {
        htmlWidth: r,
        htmlHeight: o,
        alt: i,
        ...a
    } = t;
    return _("img", {
        width: r,
        height: o,
        ref: n,
        alt: i,
        ...a
    })
});
Ap.displayName = "NativeImage";

function s$(e) {
    const {
        loading: t,
        src: n,
        srcSet: r,
        onLoad: o,
        onError: i,
        crossOrigin: a,
        sizes: s,
        ignoreFallback: l
    } = e, [u, c] = b.useState("pending");
    b.useEffect(() => {
        c(n ? "loading" : "pending")
    }, [n]);
    const d = b.useRef(),
        f = b.useCallback(() => {
            if (!n) return;
            p();
            const m = new Image;
            m.src = n, a && (m.crossOrigin = a), r && (m.srcset = r), s && (m.sizes = s), t && (m.loading = t), m.onload = y => {
                p(), c("loaded"), o == null || o(y)
            }, m.onerror = y => {
                p(), c("failed"), i == null || i(y)
            }, d.current = m
        }, [n, a, r, s, o, i, t]),
        p = () => {
            d.current && (d.current.onload = null, d.current.onerror = null, d.current = null)
        };
    return Kn(() => {
        if (!l) return u === "loading" && f(), () => {
            p()
        }
    }, [u, f, l]), l ? "loaded" : u
}
var l$ = (e, t) => e !== "loaded" && t === "beforeLoadOrError" || e === "failed" && t === "onError";

function u$(e, t = []) {
    const n = Object.assign({}, e);
    for (const r of t) r in n && delete n[r];
    return n
}
var _s = X(function(t, n) {
    const {
        fallbackSrc: r,
        fallback: o,
        src: i,
        srcSet: a,
        align: s,
        fit: l,
        loading: u,
        ignoreFallback: c,
        crossOrigin: d,
        fallbackStrategy: f = "beforeLoadOrError",
        referrerPolicy: p,
        ...m
    } = t, y = r !== void 0 || o !== void 0, x = u != null || c || !y, g = s$({ ...t,
        ignoreFallback: x
    }), h = l$(g, f), v = {
        ref: n,
        objectFit: l,
        objectPosition: s,
        ...x ? m : u$(m, ["onError", "onLoad"])
    };
    return h ? o || _(G.img, {
        as: Ap,
        className: "chakra-image__placeholder",
        src: r,
        ...v
    }) : _(G.img, {
        as: Ap,
        src: i,
        srcSet: a,
        crossOrigin: d,
        loading: u,
        referrerPolicy: p,
        className: "chakra-image",
        ...v
    })
});
_s.displayName = "Image";

function Mh(e) {
    return b.Children.toArray(e).filter(t => b.isValidElement(t))
}
var [cN, c$] = Nt({
    strict: !1,
    name: "ButtonGroupContext"
});

function d$(e) {
    const [t, n] = b.useState(!e);
    return {
        ref: b.useCallback(i => {
            i && n(i.tagName === "BUTTON")
        }, []),
        type: t ? "button" : void 0
    }
}

function Rp(e) {
    const {
        children: t,
        className: n,
        ...r
    } = e, o = b.isValidElement(t) ? b.cloneElement(t, {
        "aria-hidden": !0,
        focusable: !1
    }) : t, i = ge("chakra-button__icon", n);
    return _(G.span, {
        display: "inline-flex",
        alignSelf: "center",
        flexShrink: 0,
        ...r,
        className: i,
        children: o
    })
}
Rp.displayName = "ButtonIcon";

function Mp(e) {
    const {
        label: t,
        placement: n,
        spacing: r = "0.5rem",
        children: o = _(Ec, {
            color: "currentColor",
            width: "1em",
            height: "1em"
        }),
        className: i,
        __css: a,
        ...s
    } = e, l = ge("chakra-button__spinner", i), u = n === "start" ? "marginEnd" : "marginStart", c = b.useMemo(() => ({
        display: "flex",
        alignItems: "center",
        position: t ? "relative" : "absolute",
        [u]: t ? r : 0,
        fontSize: "1em",
        lineHeight: "normal",
        ...a
    }), [a, t, u, r]);
    return _(G.div, {
        className: l,
        ...s,
        __css: c,
        children: o
    })
}
Mp.displayName = "ButtonSpinner";
var Tc = X((e, t) => {
    const n = c$(),
        r = Vr("Button", { ...n,
            ...e
        }),
        {
            isDisabled: o = n == null ? void 0 : n.isDisabled,
            isLoading: i,
            isActive: a,
            children: s,
            leftIcon: l,
            rightIcon: u,
            loadingText: c,
            iconSpacing: d = "0.5rem",
            type: f,
            spinner: p,
            spinnerPlacement: m = "start",
            className: y,
            as: x,
            ...g
        } = ht(e),
        h = b.useMemo(() => {
            const P = { ...r == null ? void 0 : r._focus,
                zIndex: 1
            };
            return {
                display: "inline-flex",
                appearance: "none",
                alignItems: "center",
                justifyContent: "center",
                userSelect: "none",
                position: "relative",
                whiteSpace: "nowrap",
                verticalAlign: "middle",
                outline: "none",
                ...r,
                ...!!n && {
                    _focus: P
                }
            }
        }, [r, n]),
        {
            ref: v,
            type: w
        } = d$(x),
        E = {
            rightIcon: u,
            leftIcon: l,
            iconSpacing: d,
            children: s
        };
    return fe(G.button, {
        ref: n$(t, v),
        as: x,
        type: f ? ? w,
        "data-active": xe(a),
        "data-loading": xe(i),
        __css: h,
        className: ge("chakra-button", y),
        ...g,
        disabled: o || i,
        children: [i && m === "start" && _(Mp, {
            className: "chakra-button__spinner--start",
            label: c,
            placement: "start",
            spacing: d,
            children: p
        }), i ? c || _(G.span, {
            opacity: 0,
            children: _(Lv, { ...E
            })
        }) : _(Lv, { ...E
        }), i && m === "end" && _(Mp, {
            className: "chakra-button__spinner--end",
            label: c,
            placement: "end",
            spacing: d,
            children: p
        })]
    })
});
Tc.displayName = "Button";

function Lv(e) {
    const {
        leftIcon: t,
        rightIcon: n,
        children: r,
        iconSpacing: o
    } = e;
    return fe(k1, {
        children: [t && _(Rp, {
            marginEnd: o,
            children: t
        }), r, n && _(Rp, {
            marginStart: o,
            children: n
        })]
    })
}
var [f$, p$] = r9("Card"), Uw = X(function(t, n) {
    const {
        className: r,
        ...o
    } = t, i = p$();
    return _(G.div, {
        ref: n,
        className: ge("chakra-card__body", r),
        __css: i.body,
        ...o
    })
}), Gw = X(function(t, n) {
    const {
        className: r,
        children: o,
        direction: i = "column",
        justify: a,
        align: s,
        ...l
    } = ht(t), u = Hr("Card", t);
    return _(G.div, {
        ref: n,
        className: ge("chakra-card", r),
        __css: {
            display: "flex",
            flexDirection: i,
            justifyContent: a,
            alignItems: s,
            position: "relative",
            minWidth: 0,
            wordWrap: "break-word",
            ...u.container
        },
        ...l,
        children: _(f$, {
            value: u,
            children: o
        })
    })
}), [m$, h$] = Nt({
    name: "FormControlStylesContext",
    errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
}), [g$, Kw] = Nt({
    strict: !1,
    name: "FormControlContext"
});

function y$(e) {
    const {
        id: t,
        isRequired: n,
        isInvalid: r,
        isDisabled: o,
        isReadOnly: i,
        ...a
    } = e, s = b.useId(), l = t || `field-${s}`, u = `${l}-label`, c = `${l}-feedback`, d = `${l}-helptext`, [f, p] = b.useState(!1), [m, y] = b.useState(!1), [x, g] = b.useState(!1), h = b.useCallback((T = {}, R = null) => ({
        id: d,
        ...T,
        ref: tn(R, I => {
            I && y(!0)
        })
    }), [d]), v = b.useCallback((T = {}, R = null) => {
        var I, M;
        return { ...T,
            ref: R,
            "data-focus": xe(x),
            "data-disabled": xe(o),
            "data-invalid": xe(r),
            "data-readonly": xe(i),
            id: (I = T.id) != null ? I : u,
            htmlFor: (M = T.htmlFor) != null ? M : l
        }
    }, [l, o, x, r, i, u]), w = b.useCallback((T = {}, R = null) => ({
        id: c,
        ...T,
        ref: tn(R, I => {
            I && p(!0)
        }),
        "aria-live": "polite"
    }), [c]), E = b.useCallback((T = {}, R = null) => ({ ...T,
        ...a,
        ref: R,
        role: "group"
    }), [a]), P = b.useCallback((T = {}, R = null) => ({ ...T,
        ref: R,
        role: "presentation",
        "aria-hidden": !0,
        children: T.children || "*"
    }), []);
    return {
        isRequired: !!n,
        isInvalid: !!r,
        isReadOnly: !!i,
        isDisabled: !!o,
        isFocused: !!x,
        onFocus: () => g(!0),
        onBlur: () => g(!1),
        hasFeedbackText: f,
        setHasFeedbackText: p,
        hasHelpText: m,
        setHasHelpText: y,
        id: l,
        labelId: u,
        feedbackId: c,
        helpTextId: d,
        htmlProps: a,
        getHelpTextProps: h,
        getErrorMessageProps: w,
        getRootProps: E,
        getLabelProps: v,
        getRequiredIndicatorProps: P
    }
}
var v$ = X(function(t, n) {
    const r = Hr("Form", t),
        o = ht(t),
        {
            getRootProps: i,
            htmlProps: a,
            ...s
        } = y$(o),
        l = ge("chakra-form-control", t.className);
    return _(g$, {
        value: s,
        children: _(m$, {
            value: r,
            children: _(G.div, { ...i({}, n),
                className: l,
                __css: r.container
            })
        })
    })
});
v$.displayName = "FormControl";
var b$ = X(function(t, n) {
    const r = Kw(),
        o = h$(),
        i = ge("chakra-form__helper-text", t.className);
    return _(G.div, { ...r == null ? void 0 : r.getHelpTextProps(t, n),
        __css: o.helperText,
        className: i
    })
});
b$.displayName = "FormHelperText";

function S$(e) {
    const {
        isDisabled: t,
        isInvalid: n,
        isReadOnly: r,
        isRequired: o,
        ...i
    } = qw(e);
    return { ...i,
        disabled: t,
        readOnly: r,
        required: o,
        "aria-invalid": xd(n),
        "aria-required": xd(o),
        "aria-readonly": xd(r)
    }
}

function qw(e) {
    var t, n, r;
    const o = Kw(),
        {
            id: i,
            disabled: a,
            readOnly: s,
            required: l,
            isRequired: u,
            isInvalid: c,
            isReadOnly: d,
            isDisabled: f,
            onFocus: p,
            onBlur: m,
            ...y
        } = e,
        x = e["aria-describedby"] ? [e["aria-describedby"]] : [];
    return o != null && o.hasFeedbackText && (o != null && o.isInvalid) && x.push(o.feedbackId), o != null && o.hasHelpText && x.push(o.helpTextId), { ...y,
        "aria-describedby": x.join(" ") || void 0,
        id: i ? ? (o == null ? void 0 : o.id),
        isDisabled: (t = a ? ? f) != null ? t : o == null ? void 0 : o.isDisabled,
        isReadOnly: (n = s ? ? d) != null ? n : o == null ? void 0 : o.isReadOnly,
        isRequired: (r = l ? ? u) != null ? r : o == null ? void 0 : o.isRequired,
        isInvalid: c ? ? (o == null ? void 0 : o.isInvalid),
        onFocus: Ye(o == null ? void 0 : o.onFocus, p),
        onBlur: Ye(o == null ? void 0 : o.onBlur, m)
    }
}
var w$ = {
        border: "0",
        clip: "rect(0, 0, 0, 0)",
        height: "1px",
        width: "1px",
        margin: "-1px",
        padding: "0",
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "absolute"
    },
    Iv = !1,
    Es = null,
    xo = !1,
    Op = !1,
    zp = new Set;

function Oh(e, t) {
    zp.forEach(n => n(e, t))
}
var x$ = typeof window < "u" && window.navigator != null ? /^Mac/.test(window.navigator.platform) : !1;

function k$(e) {
    return !(e.metaKey || !x$ && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta")
}

function Dv(e) {
    xo = !0, k$(e) && (Es = "keyboard", Oh("keyboard", e))
}

function Io(e) {
    if (Es = "pointer", e.type === "mousedown" || e.type === "pointerdown") {
        xo = !0;
        const t = e.composedPath ? e.composedPath()[0] : e.target;
        let n = !1;
        try {
            n = t.matches(":focus-visible")
        } catch {}
        if (n) return;
        Oh("pointer", e)
    }
}

function C$(e) {
    return e.mozInputSource === 0 && e.isTrusted ? !0 : e.detail === 0 && !e.pointerType
}

function _$(e) {
    C$(e) && (xo = !0, Es = "virtual")
}

function E$(e) {
    e.target === window || e.target === document || (!xo && !Op && (Es = "virtual", Oh("virtual", e)), xo = !1, Op = !1)
}

function T$() {
    xo = !1, Op = !0
}

function Fv() {
    return Es !== "pointer"
}

function P$() {
    if (typeof window > "u" || Iv) return;
    const {
        focus: e
    } = HTMLElement.prototype;
    HTMLElement.prototype.focus = function(...n) {
        xo = !0, e.apply(this, n)
    }, document.addEventListener("keydown", Dv, !0), document.addEventListener("keyup", Dv, !0), document.addEventListener("click", _$, !0), window.addEventListener("focus", E$, !0), window.addEventListener("blur", T$, !1), typeof PointerEvent < "u" ? (document.addEventListener("pointerdown", Io, !0), document.addEventListener("pointermove", Io, !0), document.addEventListener("pointerup", Io, !0)) : (document.addEventListener("mousedown", Io, !0), document.addEventListener("mousemove", Io, !0), document.addEventListener("mouseup", Io, !0)), Iv = !0
}

function A$(e) {
    P$(), e(Fv());
    const t = () => e(Fv());
    return zp.add(t), () => {
        zp.delete(t)
    }
}

function R$(e, t = []) {
    const n = Object.assign({}, e);
    for (const r of t) r in n && delete n[r];
    return n
}

function M$(e = {}) {
    const t = qw(e),
        {
            isDisabled: n,
            isReadOnly: r,
            isRequired: o,
            isInvalid: i,
            id: a,
            onBlur: s,
            onFocus: l,
            "aria-describedby": u
        } = t,
        {
            defaultChecked: c,
            isChecked: d,
            isFocusable: f,
            onChange: p,
            isIndeterminate: m,
            name: y,
            value: x,
            tabIndex: g = void 0,
            "aria-label": h,
            "aria-labelledby": v,
            "aria-invalid": w,
            ...E
        } = e,
        P = R$(E, ["isDisabled", "isReadOnly", "isRequired", "isInvalid", "id", "onBlur", "onFocus", "aria-describedby"]),
        T = Mr(p),
        R = Mr(s),
        I = Mr(l),
        [M, B] = b.useState(!1),
        [Y, K] = b.useState(!1),
        [ee, Q] = b.useState(!1),
        [W, $] = b.useState(!1);
    b.useEffect(() => A$(B), []);
    const z = b.useRef(null),
        [N, H] = b.useState(!0),
        [le, oe] = b.useState(!!c),
        j = d !== void 0,
        q = j ? d : le,
        ze = b.useCallback(Z => {
            if (r || n) {
                Z.preventDefault();
                return
            }
            j || oe(q ? Z.target.checked : m ? !0 : Z.target.checked), T == null || T(Z)
        }, [r, n, q, j, m, T]);
    Kn(() => {
        z.current && (z.current.indeterminate = Boolean(m))
    }, [m]), wi(() => {
        n && K(!1)
    }, [n, K]), Kn(() => {
        const Z = z.current;
        Z != null && Z.form && (Z.form.onreset = () => {
            oe(!!c)
        })
    }, []);
    const _e = n && !f,
        et = b.useCallback(Z => {
            Z.key === " " && $(!0)
        }, [$]),
        Be = b.useCallback(Z => {
            Z.key === " " && $(!1)
        }, [$]);
    Kn(() => {
        if (!z.current) return;
        z.current.checked !== q && oe(z.current.checked)
    }, [z.current]);
    const ar = b.useCallback((Z = {}, an = null) => {
            const Bt = Ln => {
                Y && Ln.preventDefault(), $(!0)
            };
            return { ...Z,
                ref: an,
                "data-active": xe(W),
                "data-hover": xe(ee),
                "data-checked": xe(q),
                "data-focus": xe(Y),
                "data-focus-visible": xe(Y && M),
                "data-indeterminate": xe(m),
                "data-disabled": xe(n),
                "data-invalid": xe(i),
                "data-readonly": xe(r),
                "aria-hidden": !0,
                onMouseDown: Ye(Z.onMouseDown, Bt),
                onMouseUp: Ye(Z.onMouseUp, () => $(!1)),
                onMouseEnter: Ye(Z.onMouseEnter, () => Q(!0)),
                onMouseLeave: Ye(Z.onMouseLeave, () => Q(!1))
            }
        }, [W, q, n, Y, M, ee, m, i, r]),
        Gr = b.useCallback((Z = {}, an = null) => ({ ...P,
            ...Z,
            ref: tn(an, Bt => {
                Bt && H(Bt.tagName === "LABEL")
            }),
            onClick: Ye(Z.onClick, () => {
                var Bt;
                N || ((Bt = z.current) == null || Bt.click(), requestAnimationFrame(() => {
                    var Ln;
                    (Ln = z.current) == null || Ln.focus()
                }))
            }),
            "data-disabled": xe(n),
            "data-checked": xe(q),
            "data-invalid": xe(i)
        }), [P, n, q, i, N]),
        sr = b.useCallback((Z = {}, an = null) => ({ ...Z,
            ref: tn(z, an),
            type: "checkbox",
            name: y,
            value: x,
            id: a,
            tabIndex: g,
            onChange: Ye(Z.onChange, ze),
            onBlur: Ye(Z.onBlur, R, () => K(!1)),
            onFocus: Ye(Z.onFocus, I, () => K(!0)),
            onKeyDown: Ye(Z.onKeyDown, et),
            onKeyUp: Ye(Z.onKeyUp, Be),
            required: o,
            checked: q,
            disabled: _e,
            readOnly: r,
            "aria-label": h,
            "aria-labelledby": v,
            "aria-invalid": w ? Boolean(w) : i,
            "aria-describedby": u,
            "aria-disabled": n,
            style: w$
        }), [y, x, a, ze, R, I, et, Be, o, q, _e, r, h, v, w, i, u, n, g]),
        Ro = b.useCallback((Z = {}, an = null) => ({ ...Z,
            ref: an,
            onMouseDown: Ye(Z.onMouseDown, Nv),
            onTouchStart: Ye(Z.onTouchStart, Nv),
            "data-disabled": xe(n),
            "data-checked": xe(q),
            "data-invalid": xe(i)
        }), [q, n, i]);
    return {
        state: {
            isInvalid: i,
            isFocused: Y,
            isChecked: q,
            isActive: W,
            isHovered: ee,
            isIndeterminate: m,
            isDisabled: n,
            isReadOnly: r,
            isRequired: o
        },
        getRootProps: Gr,
        getCheckboxProps: ar,
        getInputProps: sr,
        getLabelProps: Ro,
        htmlProps: P
    }
}

function Nv(e) {
    e.preventDefault(), e.stopPropagation()
}

function O$(e, t, n, r) {
    const o = Mr(n);
    return b.useEffect(() => {
        const i = typeof e == "function" ? e() : e ? ? document;
        if (!(!n || !i)) return i.addEventListener(t, o, r), () => {
            i.removeEventListener(t, o, r)
        }
    }, [t, e, r, o, n]), () => {
        const i = typeof e == "function" ? e() : e ? ? document;
        i == null || i.removeEventListener(t, o, r)
    }
}

function Xw(e) {
    return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE
}

function Yw(e) {
    var t;
    if (!Xw(e)) return !1;
    const n = (t = e.ownerDocument.defaultView) != null ? t : window;
    return e instanceof n.HTMLElement
}

function z$(e) {
    var t, n;
    return (n = (t = Qw(e)) == null ? void 0 : t.defaultView) != null ? n : window
}

function Qw(e) {
    return Xw(e) ? e.ownerDocument : document
}

function $$(e) {
    return Qw(e).activeElement
}
var Zw = e => e.hasAttribute("tabindex"),
    L$ = e => Zw(e) && e.tabIndex === -1;

function I$(e) {
    return Boolean(e.getAttribute("disabled")) === !0 || Boolean(e.getAttribute("aria-disabled")) === !0
}

function Jw(e) {
    return e.parentElement && Jw(e.parentElement) ? !0 : e.hidden
}

function D$(e) {
    const t = e.getAttribute("contenteditable");
    return t !== "false" && t != null
}

function F$(e) {
    if (!Yw(e) || Jw(e) || I$(e)) return !1;
    const {
        localName: t
    } = e;
    if (["input", "select", "textarea", "button"].indexOf(t) >= 0) return !0;
    const r = {
        a: () => e.hasAttribute("href"),
        audio: () => e.hasAttribute("controls"),
        video: () => e.hasAttribute("controls")
    };
    return t in r ? r[t]() : D$(e) ? !0 : Zw(e)
}

function N$(e) {
    return e ? Yw(e) && F$(e) && !L$(e) : !1
}
var [B$, j$] = Nt({
    name: "InputGroupStylesContext",
    errorMessage: `useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `
}), ex = X(function(t, n) {
    const r = Hr("Input", t),
        {
            children: o,
            className: i,
            ...a
        } = ht(t),
        s = ge("chakra-input__group", i),
        l = {},
        u = Mh(o),
        c = r.field;
    u.forEach(f => {
        var p, m;
        r && (c && f.type.id === "InputLeftElement" && (l.paddingStart = (p = c.height) != null ? p : c.h), c && f.type.id === "InputRightElement" && (l.paddingEnd = (m = c.height) != null ? m : c.h), f.type.id === "InputRightAddon" && (l.borderEndRadius = 0), f.type.id === "InputLeftAddon" && (l.borderStartRadius = 0))
    });
    const d = u.map(f => {
        var p, m;
        const y = nh({
            size: ((p = f.props) == null ? void 0 : p.size) || t.size,
            variant: ((m = f.props) == null ? void 0 : m.variant) || t.variant
        });
        return f.type.id !== "Input" ? b.cloneElement(f, y) : b.cloneElement(f, Object.assign(y, l, f.props))
    });
    return _(G.div, {
        className: s,
        ref: n,
        __css: {
            width: "100%",
            display: "flex",
            position: "relative",
            isolation: "isolate"
        },
        "data-group": !0,
        ...a,
        children: _(B$, {
            value: r,
            children: d
        })
    })
});
ex.displayName = "InputGroup";
var V$ = G("div", {
        baseStyle: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "0",
            zIndex: 2
        }
    }),
    Pc = X(function(t, n) {
        var r, o;
        const {
            placement: i = "left",
            ...a
        } = t, s = j$(), l = s.field, c = {
            [i === "left" ? "insetStart" : "insetEnd"]: "0",
            width: (r = l == null ? void 0 : l.height) != null ? r : l == null ? void 0 : l.h,
            height: (o = l == null ? void 0 : l.height) != null ? o : l == null ? void 0 : l.h,
            fontSize: l == null ? void 0 : l.fontSize,
            ...s.element
        };
        return _(V$, {
            ref: n,
            __css: c,
            ...a
        })
    });
Pc.id = "InputElement";
Pc.displayName = "InputElement";
var zh = X(function(t, n) {
    const {
        className: r,
        ...o
    } = t, i = ge("chakra-input__left-element", r);
    return _(Pc, {
        ref: n,
        placement: "left",
        className: i,
        ...o
    })
});
zh.id = "InputLeftElement";
zh.displayName = "InputLeftElement";
var tx = X(function(t, n) {
    const {
        className: r,
        ...o
    } = t, i = ge("chakra-input__right-element", r);
    return _(Pc, {
        ref: n,
        placement: "right",
        className: i,
        ...o
    })
});
tx.id = "InputRightElement";
tx.displayName = "InputRightElement";
var $h = X(function(t, n) {
    const {
        htmlSize: r,
        ...o
    } = t, i = Hr("Input", o), a = ht(o), s = S$(a), l = ge("chakra-input", t.className);
    return _(G.input, {
        size: r,
        ...s,
        __css: i.field,
        ref: n,
        className: l
    })
});
$h.displayName = "Input";
$h.id = "Input";
var [H$, nx] = Nt({
    name: "ListStylesContext",
    errorMessage: `useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `
}), Ac = X(function(t, n) {
    const r = Hr("List", t),
        {
            children: o,
            styleType: i = "none",
            stylePosition: a,
            spacing: s,
            ...l
        } = ht(t),
        u = Mh(o),
        d = s ? {
            ["& > *:not(style) ~ *:not(style)"]: {
                mt: s
            }
        } : {};
    return _(H$, {
        value: r,
        children: _(G.ul, {
            ref: n,
            listStyleType: i,
            listStylePosition: a,
            role: "list",
            __css: { ...r.container,
                ...d
            },
            ...l,
            children: u
        })
    })
});
Ac.displayName = "List";
var W$ = X((e, t) => {
    const {
        as: n,
        ...r
    } = e;
    return _(Ac, {
        ref: t,
        as: "ol",
        styleType: "decimal",
        marginStart: "1em",
        ...r
    })
});
W$.displayName = "OrderedList";
var U$ = X(function(t, n) {
    const {
        as: r,
        ...o
    } = t;
    return _(Ac, {
        ref: n,
        as: "ul",
        styleType: "initial",
        marginStart: "1em",
        ...o
    })
});
U$.displayName = "UnorderedList";
var rx = X(function(t, n) {
    const r = nx();
    return _(G.li, {
        ref: n,
        ...t,
        __css: r.item
    })
});
rx.displayName = "ListItem";
var G$ = X(function(t, n) {
    const r = nx();
    return _(Ao, {
        ref: n,
        role: "presentation",
        ...t,
        __css: r.icon
    })
});
G$.displayName = "ListIcon";
var Lh = X(function(t, n) {
    const {
        templateAreas: r,
        gap: o,
        rowGap: i,
        columnGap: a,
        column: s,
        row: l,
        autoFlow: u,
        autoRows: c,
        templateRows: d,
        autoColumns: f,
        templateColumns: p,
        ...m
    } = t, y = {
        display: "grid",
        gridTemplateAreas: r,
        gridGap: o,
        gridRowGap: i,
        gridColumnGap: a,
        gridAutoColumns: f,
        gridColumn: s,
        gridRow: l,
        gridAutoFlow: u,
        gridAutoRows: c,
        gridTemplateRows: d,
        gridTemplateColumns: p
    };
    return _(G.div, {
        ref: n,
        __css: y,
        ...m
    })
});
Lh.displayName = "Grid";
var ox = Object.freeze(["base", "sm", "md", "lg", "xl", "2xl"]);

function Ts(e, t) {
    return Array.isArray(e) ? e.map(n => n === null ? null : t(n)) : it(e) ? Object.keys(e).reduce((n, r) => (n[r] = t(e[r]), n), {}) : e != null ? t(e) : null
}

function K$(e, t = ox) {
    const n = {};
    return e.forEach((r, o) => {
        const i = t[o];
        r != null && (n[i] = r)
    }), n
}
var ix = X(function(t, n) {
    const {
        columns: r,
        spacingX: o,
        spacingY: i,
        spacing: a,
        minChildWidth: s,
        ...l
    } = t, u = Eo(), c = s ? X$(s, u) : Y$(r);
    return _(Lh, {
        ref: n,
        gap: a,
        columnGap: o,
        rowGap: i,
        templateColumns: c,
        ...l
    })
});
ix.displayName = "SimpleGrid";

function q$(e) {
    return typeof e == "number" ? `${e}px` : e
}

function X$(e, t) {
    return Ts(e, n => {
        const r = US("sizes", n, q$(n))(t);
        return n === null ? null : `repeat(auto-fit, minmax(${r}, 1fr))`
    })
}

function Y$(e) {
    return Ts(e, t => t === null ? null : `repeat(${t}, minmax(0, 1fr))`)
}
var Ih = X(function(t, n) {
    const r = Vr("Text", t),
        {
            className: o,
            align: i,
            decoration: a,
            casing: s,
            ...l
        } = ht(t),
        u = nh({
            textAlign: t.align,
            textDecoration: t.decoration,
            textTransform: t.casing
        });
    return _(G.p, {
        ref: n,
        className: ge("chakra-text", t.className),
        ...u,
        ...l,
        __css: r
    })
});
Ih.displayName = "Text";
var ax = e => _(G.div, {
    className: "chakra-stack__item",
    ...e,
    __css: {
        display: "inline-block",
        flex: "0 0 auto",
        minWidth: 0,
        ...e.__css
    }
});
ax.displayName = "StackItem";
var $p = "& > *:not(style) ~ *:not(style)";

function Q$(e) {
    const {
        spacing: t,
        direction: n
    } = e, r = {
        column: {
            marginTop: t,
            marginEnd: 0,
            marginBottom: 0,
            marginStart: 0
        },
        row: {
            marginTop: 0,
            marginEnd: 0,
            marginBottom: 0,
            marginStart: t
        },
        "column-reverse": {
            marginTop: 0,
            marginEnd: 0,
            marginBottom: t,
            marginStart: 0
        },
        "row-reverse": {
            marginTop: 0,
            marginEnd: t,
            marginBottom: 0,
            marginStart: 0
        }
    };
    return {
        flexDirection: n,
        [$p]: Ts(n, o => r[o])
    }
}

function Z$(e) {
    const {
        spacing: t,
        direction: n
    } = e, r = {
        column: {
            my: t,
            mx: 0,
            borderLeftWidth: 0,
            borderBottomWidth: "1px"
        },
        "column-reverse": {
            my: t,
            mx: 0,
            borderLeftWidth: 0,
            borderBottomWidth: "1px"
        },
        row: {
            mx: t,
            my: 0,
            borderLeftWidth: "1px",
            borderBottomWidth: 0
        },
        "row-reverse": {
            mx: t,
            my: 0,
            borderLeftWidth: "1px",
            borderBottomWidth: 0
        }
    };
    return {
        "&": Ts(n, o => r[o])
    }
}
var sx = X((e, t) => {
    const {
        isInline: n,
        direction: r,
        align: o,
        justify: i,
        spacing: a = "0.5rem",
        wrap: s,
        children: l,
        divider: u,
        className: c,
        shouldWrapChildren: d,
        ...f
    } = e, p = n ? "row" : r ? ? "column", m = b.useMemo(() => Q$({
        direction: p,
        spacing: a
    }), [p, a]), y = b.useMemo(() => Z$({
        spacing: a,
        direction: p
    }), [a, p]), x = !!u, g = !d && !x, h = b.useMemo(() => {
        const w = Mh(l);
        return g ? w : w.map((E, P) => {
            const T = typeof E.key < "u" ? E.key : P,
                R = P + 1 === w.length,
                M = d ? _(ax, {
                    children: E
                }, T) : E;
            if (!x) return M;
            const B = b.cloneElement(u, {
                    __css: y
                }),
                Y = R ? null : B;
            return fe(b.Fragment, {
                children: [M, Y]
            }, T)
        })
    }, [u, y, x, g, d, l]), v = ge("chakra-stack", c);
    return _(G.div, {
        ref: t,
        display: "flex",
        alignItems: o,
        justifyContent: i,
        flexDirection: m.flexDirection,
        flexWrap: s,
        className: v,
        __css: x ? {} : {
            [$p]: m[$p]
        },
        ...f,
        children: h
    })
});
sx.displayName = "Stack";
var zi = X((e, t) => _(sx, {
    align: "center",
    ...e,
    direction: "row",
    ref: t
}));
zi.displayName = "HStack";

function Bv(e) {
    return Ts(e, t => t === "auto" ? "auto" : `span ${t}/span ${t}`)
}
var Bl = X(function(t, n) {
    const {
        area: r,
        colSpan: o,
        colStart: i,
        colEnd: a,
        rowEnd: s,
        rowSpan: l,
        rowStart: u,
        ...c
    } = t, d = nh({
        gridArea: r,
        gridColumn: Bv(o),
        gridRow: Bv(l),
        gridColumnStart: i,
        gridColumnEnd: a,
        gridRowStart: u,
        gridRowEnd: s
    });
    return _(G.div, {
        ref: n,
        __css: d,
        ...c
    })
});
Bl.displayName = "GridItem";
var Rc = X(function(t, n) {
    const r = Vr("Heading", t),
        {
            className: o,
            ...i
        } = ht(t);
    return _(G.h2, {
        ref: n,
        className: ge("chakra-heading", t.className),
        ...i,
        __css: r
    })
});
Rc.displayName = "Heading";
var cs = G("div");
cs.displayName = "Box";
var lx = X(function(t, n) {
    const {
        size: r,
        centerContent: o = !0,
        ...i
    } = t;
    return _(cs, {
        ref: n,
        boxSize: r,
        __css: { ...o ? {
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            } : {},
            flexShrink: 0,
            flexGrow: 0
        },
        ...i
    })
});
lx.displayName = "Square";
var J$ = X(function(t, n) {
    const {
        size: r,
        ...o
    } = t;
    return _(lx, {
        size: r,
        ref: n,
        borderRadius: "9999px",
        ...o
    })
});
J$.displayName = "Circle";
var ux = X(function(t, n) {
    const r = Vr("Badge", t),
        {
            className: o,
            ...i
        } = ht(t);
    return _(G.span, {
        ref: n,
        className: ge("chakra-badge", t.className),
        ...i,
        __css: {
            display: "inline-block",
            whiteSpace: "nowrap",
            verticalAlign: "middle",
            ...r
        }
    })
});
ux.displayName = "Badge";
var cx = X(function(t, n) {
    const {
        direction: r,
        align: o,
        justify: i,
        wrap: a,
        basis: s,
        grow: l,
        shrink: u,
        ...c
    } = t, d = {
        display: "flex",
        flexDirection: r,
        alignItems: o,
        justifyContent: i,
        flexWrap: a,
        flexBasis: s,
        flexGrow: l,
        flexShrink: u
    };
    return _(G.div, {
        ref: n,
        __css: d,
        ...c
    })
});
cx.displayName = "Flex";

function dx(e, t = {}) {
    const {
        ssr: n = !0,
        fallback: r
    } = t, {
        getWindow: o
    } = i9(), i = Array.isArray(e) ? e : [e];
    let a = Array.isArray(r) ? r : [r];
    a = a.filter(u => u != null);
    const [s, l] = b.useState(() => i.map((u, c) => ({
        media: u,
        matches: n ? !!a[c] : o().matchMedia(u).matches
    })));
    return b.useEffect(() => {
        const u = o();
        l(i.map(f => ({
            media: f,
            matches: u.matchMedia(f).matches
        })));
        const c = i.map(f => u.matchMedia(f)),
            d = f => {
                l(p => p.slice().map(m => m.media === f.media ? { ...m,
                    matches: f.matches
                } : m))
            };
        return c.forEach(f => {
            typeof f.addListener == "function" ? f.addListener(d) : f.addEventListener("change", d)
        }), () => {
            c.forEach(f => {
                typeof f.removeListener == "function" ? f.removeListener(d) : f.removeEventListener("change", d)
            })
        }
    }, [o]), s.map(u => u.matches)
}

function eL(e) {
    const {
        breakpoint: t,
        hide: n,
        children: r,
        ssr: o
    } = e, [i] = dx(t, {
        ssr: o
    });
    return (n ? !i : i) ? r : null
}
var jv = (e, t) => {
    var n, r;
    return (r = (n = e == null ? void 0 : e.breakpoints) == null ? void 0 : n[t]) != null ? r : t
};

function tL(e) {
    const {
        breakpoint: t = "",
        below: n,
        above: r
    } = e, o = Eo(), i = jv(o, n), a = jv(o, r);
    let s = t;
    return i ? s = `(max-width: ${i})` : a && (s = `(min-width: ${a})`), s
}

function fx(e) {
    const {
        children: t,
        ssr: n
    } = e, r = tL(e);
    return _(eL, {
        breakpoint: r,
        ssr: n,
        children: t
    })
}
fx.displayName = "Show";

function nL(e, t, n = ox) {
    let r = Object.keys(e).indexOf(t);
    if (r !== -1) return e[t];
    let o = n.indexOf(t);
    for (; o >= 0;) {
        const i = n[o];
        if (e.hasOwnProperty(i)) {
            r = o;
            break
        }
        o -= 1
    }
    if (r !== -1) {
        const i = n[r];
        return e[i]
    }
}

function rL(e) {
    var t, n;
    const r = it(e) ? e : {
            fallback: e ? ? "base"
        },
        i = Eo().__breakpoints.details.map(({
            minMaxQuery: u,
            breakpoint: c
        }) => ({
            breakpoint: c,
            query: u.replace("@media screen and ", "")
        })),
        a = i.map(u => u.breakpoint === r.fallback),
        l = dx(i.map(u => u.query), {
            fallback: a,
            ssr: r.ssr
        }).findIndex(u => u == !0);
    return (n = (t = i[l]) == null ? void 0 : t.breakpoint) != null ? n : r.fallback
}

function oL(e, t) {
    var n;
    const r = it(t) ? t : {
            fallback: t ? ? "base"
        },
        o = rL(r),
        i = Eo();
    if (!o) return;
    const a = Array.from(((n = i.__breakpoints) == null ? void 0 : n.keys) || []),
        s = Array.isArray(e) ? Object.fromEntries(Object.entries(K$(e, a)).map(([l, u]) => [l, u])) : e;
    return nL(s, o, a)
}

function iL(e) {
    const {
        key: t
    } = e;
    return t.length === 1 || t.length > 1 && /[^a-zA-Z0-9]/.test(t)
}

function aL(e = {}) {
    const {
        timeout: t = 300,
        preventDefault: n = () => !0
    } = e, [r, o] = b.useState([]), i = b.useRef(), a = () => {
        i.current && (clearTimeout(i.current), i.current = null)
    }, s = () => {
        a(), i.current = setTimeout(() => {
            o([]), i.current = null
        }, t)
    };
    b.useEffect(() => a, []);

    function l(u) {
        return c => {
            if (c.key === "Backspace") {
                const d = [...r];
                d.pop(), o(d);
                return
            }
            if (iL(c)) {
                const d = r.concat(c.key);
                n(c) && (c.preventDefault(), c.stopPropagation()), o(d), u(d.join("")), s()
            }
        }
    }
    return l
}

function sL(e, t, n, r) {
    if (t == null) return r;
    if (!r) return e.find(a => n(a).toLowerCase().startsWith(t.toLowerCase()));
    const o = e.filter(i => n(i).toLowerCase().startsWith(t.toLowerCase()));
    if (o.length > 0) {
        let i;
        return o.includes(r) ? (i = o.indexOf(r) + 1, i === o.length && (i = 0), o[i]) : (i = e.indexOf(o[0]), e[i])
    }
    return r
}

function lL() {
    const e = b.useRef(new Map),
        t = e.current,
        n = b.useCallback((o, i, a, s) => {
            e.current.set(a, {
                type: i,
                el: o,
                options: s
            }), o.addEventListener(i, a, s)
        }, []),
        r = b.useCallback((o, i, a, s) => {
            o.removeEventListener(i, a, s), e.current.delete(a)
        }, []);
    return b.useEffect(() => () => {
        t.forEach((o, i) => {
            r(o.el, o.type, i, o.options)
        })
    }, [r, t]), {
        add: n,
        remove: r
    }
}

function Qd(e) {
    const t = e.target,
        {
            tagName: n,
            isContentEditable: r
        } = t;
    return n !== "INPUT" && n !== "TEXTAREA" && r !== !0
}

function uL(e = {}) {
    const {
        ref: t,
        isDisabled: n,
        isFocusable: r,
        clickOnEnter: o = !0,
        clickOnSpace: i = !0,
        onMouseDown: a,
        onMouseUp: s,
        onClick: l,
        onKeyDown: u,
        onKeyUp: c,
        tabIndex: d,
        onMouseOver: f,
        onMouseLeave: p,
        ...m
    } = e, [y, x] = b.useState(!0), [g, h] = b.useState(!1), v = lL(), w = $ => {
        $ && $.tagName !== "BUTTON" && x(!1)
    }, E = y ? d : d || 0, P = n && !r, T = b.useCallback($ => {
        if (n) {
            $.stopPropagation(), $.preventDefault();
            return
        }
        $.currentTarget.focus(), l == null || l($)
    }, [n, l]), R = b.useCallback($ => {
        g && Qd($) && ($.preventDefault(), $.stopPropagation(), h(!1), v.remove(document, "keyup", R, !1))
    }, [g, v]), I = b.useCallback($ => {
        if (u == null || u($), n || $.defaultPrevented || $.metaKey || !Qd($.nativeEvent) || y) return;
        const z = o && $.key === "Enter";
        i && $.key === " " && ($.preventDefault(), h(!0)), z && ($.preventDefault(), $.currentTarget.click()), v.add(document, "keyup", R, !1)
    }, [n, y, u, o, i, v, R]), M = b.useCallback($ => {
        if (c == null || c($), n || $.defaultPrevented || $.metaKey || !Qd($.nativeEvent) || y) return;
        i && $.key === " " && ($.preventDefault(), h(!1), $.currentTarget.click())
    }, [i, y, n, c]), B = b.useCallback($ => {
        $.button === 0 && (h(!1), v.remove(document, "mouseup", B, !1))
    }, [v]), Y = b.useCallback($ => {
        if ($.button !== 0) return;
        if (n) {
            $.stopPropagation(), $.preventDefault();
            return
        }
        y || h(!0), $.currentTarget.focus({
            preventScroll: !0
        }), v.add(document, "mouseup", B, !1), a == null || a($)
    }, [n, y, a, v, B]), K = b.useCallback($ => {
        $.button === 0 && (y || h(!1), s == null || s($))
    }, [s, y]), ee = b.useCallback($ => {
        if (n) {
            $.preventDefault();
            return
        }
        f == null || f($)
    }, [n, f]), Q = b.useCallback($ => {
        g && ($.preventDefault(), h(!1)), p == null || p($)
    }, [g, p]), W = tn(t, w);
    return y ? { ...m,
        ref: W,
        type: "button",
        "aria-disabled": P ? void 0 : n,
        disabled: P,
        onClick: T,
        onMouseDown: a,
        onMouseUp: s,
        onKeyUp: c,
        onKeyDown: u,
        onMouseOver: f,
        onMouseLeave: p
    } : { ...m,
        ref: W,
        role: "button",
        "data-active": xe(g),
        "aria-disabled": n ? "true" : void 0,
        tabIndex: P ? void 0 : E,
        onClick: T,
        onMouseDown: Y,
        onMouseUp: K,
        onKeyUp: M,
        onKeyDown: I,
        onMouseOver: ee,
        onMouseLeave: Q
    }
}

function cL(e) {
    const t = e.current;
    if (!t) return !1;
    const n = $$(t);
    return !n || t.contains(n) ? !1 : !!N$(n)
}

function dL(e, t) {
    const {
        shouldFocus: n,
        visible: r,
        focusRef: o
    } = t, i = n && !r;
    wi(() => {
        if (!i || cL(e)) return;
        const a = (o == null ? void 0 : o.current) || e.current;
        a && requestAnimationFrame(() => {
            a.focus()
        })
    }, [i, e, o])
}
var Do = (e, t) => ({
        var: e,
        varRef: t ? `var(${e}, ${t})` : `var(${e})`
    }),
    Pt = {
        arrowShadowColor: Do("--popper-arrow-shadow-color"),
        arrowSize: Do("--popper-arrow-size", "8px"),
        arrowSizeHalf: Do("--popper-arrow-size-half"),
        arrowBg: Do("--popper-arrow-bg"),
        transformOrigin: Do("--popper-transform-origin"),
        arrowOffset: Do("--popper-arrow-offset")
    };

function fL(e) {
    if (e.includes("top")) return "1px 1px 1px 0 var(--popper-arrow-shadow-color)";
    if (e.includes("bottom")) return "-1px -1px 1px 0 var(--popper-arrow-shadow-color)";
    if (e.includes("right")) return "-1px 1px 1px 0 var(--popper-arrow-shadow-color)";
    if (e.includes("left")) return "1px -1px 1px 0 var(--popper-arrow-shadow-color)"
}
var pL = {
        top: "bottom center",
        "top-start": "bottom left",
        "top-end": "bottom right",
        bottom: "top center",
        "bottom-start": "top left",
        "bottom-end": "top right",
        left: "right center",
        "left-start": "right top",
        "left-end": "right bottom",
        right: "left center",
        "right-start": "left top",
        "right-end": "left bottom"
    },
    mL = e => pL[e],
    Vv = {
        scroll: !0,
        resize: !0
    };

function hL(e) {
    let t;
    return typeof e == "object" ? t = {
        enabled: !0,
        options: { ...Vv,
            ...e
        }
    } : t = {
        enabled: e,
        options: Vv
    }, t
}
var gL = {
        name: "matchWidth",
        enabled: !0,
        phase: "beforeWrite",
        requires: ["computeStyles"],
        fn: ({
            state: e
        }) => {
            e.styles.popper.width = `${e.rects.reference.width}px`
        },
        effect: ({
            state: e
        }) => () => {
            const t = e.elements.reference;
            e.elements.popper.style.width = `${t.offsetWidth}px`
        }
    },
    yL = {
        name: "transformOrigin",
        enabled: !0,
        phase: "write",
        fn: ({
            state: e
        }) => {
            Hv(e)
        },
        effect: ({
            state: e
        }) => () => {
            Hv(e)
        }
    },
    Hv = e => {
        e.elements.popper.style.setProperty(Pt.transformOrigin.var, mL(e.placement))
    },
    vL = {
        name: "positionArrow",
        enabled: !0,
        phase: "afterWrite",
        fn: ({
            state: e
        }) => {
            bL(e)
        }
    },
    bL = e => {
        var t;
        if (!e.placement) return;
        const n = SL(e.placement);
        if ((t = e.elements) != null && t.arrow && n) {
            Object.assign(e.elements.arrow.style, {
                [n.property]: n.value,
                width: Pt.arrowSize.varRef,
                height: Pt.arrowSize.varRef,
                zIndex: -1
            });
            const r = {
                [Pt.arrowSizeHalf.var]: `calc(${Pt.arrowSize.varRef} / 2)`,
                [Pt.arrowOffset.var]: `calc(${Pt.arrowSizeHalf.varRef} * -1)`
            };
            for (const o in r) e.elements.arrow.style.setProperty(o, r[o])
        }
    },
    SL = e => {
        if (e.startsWith("top")) return {
            property: "bottom",
            value: Pt.arrowOffset.varRef
        };
        if (e.startsWith("bottom")) return {
            property: "top",
            value: Pt.arrowOffset.varRef
        };
        if (e.startsWith("left")) return {
            property: "right",
            value: Pt.arrowOffset.varRef
        };
        if (e.startsWith("right")) return {
            property: "left",
            value: Pt.arrowOffset.varRef
        }
    },
    wL = {
        name: "innerArrow",
        enabled: !0,
        phase: "main",
        requires: ["arrow"],
        fn: ({
            state: e
        }) => {
            Wv(e)
        },
        effect: ({
            state: e
        }) => () => {
            Wv(e)
        }
    },
    Wv = e => {
        if (!e.elements.arrow) return;
        const t = e.elements.arrow.querySelector("[data-popper-arrow-inner]");
        if (!t) return;
        const n = fL(e.placement);
        n && t.style.setProperty("--popper-arrow-default-shadow", n), Object.assign(t.style, {
            transform: "rotate(45deg)",
            background: Pt.arrowBg.varRef,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: "inherit",
            boxShadow: "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"
        })
    },
    xL = {
        "start-start": {
            ltr: "left-start",
            rtl: "right-start"
        },
        "start-end": {
            ltr: "left-end",
            rtl: "right-end"
        },
        "end-start": {
            ltr: "right-start",
            rtl: "left-start"
        },
        "end-end": {
            ltr: "right-end",
            rtl: "left-end"
        },
        start: {
            ltr: "left",
            rtl: "right"
        },
        end: {
            ltr: "right",
            rtl: "left"
        }
    },
    kL = {
        "auto-start": "auto-end",
        "auto-end": "auto-start",
        "top-start": "top-end",
        "top-end": "top-start",
        "bottom-start": "bottom-end",
        "bottom-end": "bottom-start"
    };

function CL(e, t = "ltr") {
    var n, r;
    const o = ((n = xL[e]) == null ? void 0 : n[t]) || e;
    return t === "ltr" ? o : (r = kL[e]) != null ? r : o
}
var xt = "top",
    nn = "bottom",
    rn = "right",
    kt = "left",
    Dh = "auto",
    Ps = [xt, nn, rn, kt],
    Ci = "start",
    ds = "end",
    _L = "clippingParents",
    px = "viewport",
    Ji = "popper",
    EL = "reference",
    Uv = Ps.reduce(function(e, t) {
        return e.concat([t + "-" + Ci, t + "-" + ds])
    }, []),
    mx = [].concat(Ps, [Dh]).reduce(function(e, t) {
        return e.concat([t, t + "-" + Ci, t + "-" + ds])
    }, []),
    TL = "beforeRead",
    PL = "read",
    AL = "afterRead",
    RL = "beforeMain",
    ML = "main",
    OL = "afterMain",
    zL = "beforeWrite",
    $L = "write",
    LL = "afterWrite",
    IL = [TL, PL, AL, RL, ML, OL, zL, $L, LL];

function $n(e) {
    return e ? (e.nodeName || "").toLowerCase() : null
}

function on(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
        var t = e.ownerDocument;
        return t && t.defaultView || window
    }
    return e
}

function ko(e) {
    var t = on(e).Element;
    return e instanceof t || e instanceof Element
}

function Zt(e) {
    var t = on(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement
}

function Fh(e) {
    if (typeof ShadowRoot > "u") return !1;
    var t = on(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot
}

function DL(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
        var r = t.styles[n] || {},
            o = t.attributes[n] || {},
            i = t.elements[n];
        !Zt(i) || !$n(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(a) {
            var s = o[a];
            s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s)
        }))
    })
}

function FL(e) {
    var t = e.state,
        n = {
            popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0"
            },
            arrow: {
                position: "absolute"
            },
            reference: {}
        };
    return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
        function() {
            Object.keys(t.elements).forEach(function(r) {
                var o = t.elements[r],
                    i = t.attributes[r] || {},
                    a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]),
                    s = a.reduce(function(l, u) {
                        return l[u] = "", l
                    }, {});
                !Zt(o) || !$n(o) || (Object.assign(o.style, s), Object.keys(i).forEach(function(l) {
                    o.removeAttribute(l)
                }))
            })
        }
}
const NL = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: DL,
    effect: FL,
    requires: ["computeStyles"]
};

function zn(e) {
    return e.split("-")[0]
}
var go = Math.max,
    $u = Math.min,
    _i = Math.round;

function Lp() {
    var e = navigator.userAgentData;
    return e != null && e.brands ? e.brands.map(function(t) {
        return t.brand + "/" + t.version
    }).join(" ") : navigator.userAgent
}

function hx() {
    return !/^((?!chrome|android).)*safari/i.test(Lp())
}

function Ei(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    var r = e.getBoundingClientRect(),
        o = 1,
        i = 1;
    t && Zt(e) && (o = e.offsetWidth > 0 && _i(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && _i(r.height) / e.offsetHeight || 1);
    var a = ko(e) ? on(e) : window,
        s = a.visualViewport,
        l = !hx() && n,
        u = (r.left + (l && s ? s.offsetLeft : 0)) / o,
        c = (r.top + (l && s ? s.offsetTop : 0)) / i,
        d = r.width / o,
        f = r.height / i;
    return {
        width: d,
        height: f,
        top: c,
        right: u + d,
        bottom: c + f,
        left: u,
        x: u,
        y: c
    }
}

function Nh(e) {
    var t = Ei(e),
        n = e.offsetWidth,
        r = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
        x: e.offsetLeft,
        y: e.offsetTop,
        width: n,
        height: r
    }
}

function gx(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && Fh(n)) {
        var r = t;
        do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host
        } while (r)
    }
    return !1
}

function rr(e) {
    return on(e).getComputedStyle(e)
}

function BL(e) {
    return ["table", "td", "th"].indexOf($n(e)) >= 0
}

function Ur(e) {
    return ((ko(e) ? e.ownerDocument : e.document) || window.document).documentElement
}

function Mc(e) {
    return $n(e) === "html" ? e : e.assignedSlot || e.parentNode || (Fh(e) ? e.host : null) || Ur(e)
}

function Gv(e) {
    return !Zt(e) || rr(e).position === "fixed" ? null : e.offsetParent
}

function jL(e) {
    var t = /firefox/i.test(Lp()),
        n = /Trident/i.test(Lp());
    if (n && Zt(e)) {
        var r = rr(e);
        if (r.position === "fixed") return null
    }
    var o = Mc(e);
    for (Fh(o) && (o = o.host); Zt(o) && ["html", "body"].indexOf($n(o)) < 0;) {
        var i = rr(o);
        if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none") return o;
        o = o.parentNode
    }
    return null
}

function As(e) {
    for (var t = on(e), n = Gv(e); n && BL(n) && rr(n).position === "static";) n = Gv(n);
    return n && ($n(n) === "html" || $n(n) === "body" && rr(n).position === "static") ? t : n || jL(e) || t
}

function Bh(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
}

function Ma(e, t, n) {
    return go(e, $u(t, n))
}

function VL(e, t, n) {
    var r = Ma(e, t, n);
    return r > n ? n : r
}

function yx() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
}

function vx(e) {
    return Object.assign({}, yx(), e)
}

function bx(e, t) {
    return t.reduce(function(n, r) {
        return n[r] = e, n
    }, {})
}
var HL = function(t, n) {
    return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
        placement: n.placement
    })) : t, vx(typeof t != "number" ? t : bx(t, Ps))
};

function WL(e) {
    var t, n = e.state,
        r = e.name,
        o = e.options,
        i = n.elements.arrow,
        a = n.modifiersData.popperOffsets,
        s = zn(n.placement),
        l = Bh(s),
        u = [kt, rn].indexOf(s) >= 0,
        c = u ? "height" : "width";
    if (!(!i || !a)) {
        var d = HL(o.padding, n),
            f = Nh(i),
            p = l === "y" ? xt : kt,
            m = l === "y" ? nn : rn,
            y = n.rects.reference[c] + n.rects.reference[l] - a[l] - n.rects.popper[c],
            x = a[l] - n.rects.reference[l],
            g = As(i),
            h = g ? l === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
            v = y / 2 - x / 2,
            w = d[p],
            E = h - f[c] - d[m],
            P = h / 2 - f[c] / 2 + v,
            T = Ma(w, P, E),
            R = l;
        n.modifiersData[r] = (t = {}, t[R] = T, t.centerOffset = T - P, t)
    }
}

function UL(e) {
    var t = e.state,
        n = e.options,
        r = n.element,
        o = r === void 0 ? "[data-popper-arrow]" : r;
    o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || gx(t.elements.popper, o) && (t.elements.arrow = o))
}
const GL = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: WL,
    effect: UL,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
};

function Ti(e) {
    return e.split("-")[1]
}
var KL = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
};

function qL(e) {
    var t = e.x,
        n = e.y,
        r = window,
        o = r.devicePixelRatio || 1;
    return {
        x: _i(t * o) / o || 0,
        y: _i(n * o) / o || 0
    }
}

function Kv(e) {
    var t, n = e.popper,
        r = e.popperRect,
        o = e.placement,
        i = e.variation,
        a = e.offsets,
        s = e.position,
        l = e.gpuAcceleration,
        u = e.adaptive,
        c = e.roundOffsets,
        d = e.isFixed,
        f = a.x,
        p = f === void 0 ? 0 : f,
        m = a.y,
        y = m === void 0 ? 0 : m,
        x = typeof c == "function" ? c({
            x: p,
            y
        }) : {
            x: p,
            y
        };
    p = x.x, y = x.y;
    var g = a.hasOwnProperty("x"),
        h = a.hasOwnProperty("y"),
        v = kt,
        w = xt,
        E = window;
    if (u) {
        var P = As(n),
            T = "clientHeight",
            R = "clientWidth";
        if (P === on(n) && (P = Ur(n), rr(P).position !== "static" && s === "absolute" && (T = "scrollHeight", R = "scrollWidth")), P = P, o === xt || (o === kt || o === rn) && i === ds) {
            w = nn;
            var I = d && P === E && E.visualViewport ? E.visualViewport.height : P[T];
            y -= I - r.height, y *= l ? 1 : -1
        }
        if (o === kt || (o === xt || o === nn) && i === ds) {
            v = rn;
            var M = d && P === E && E.visualViewport ? E.visualViewport.width : P[R];
            p -= M - r.width, p *= l ? 1 : -1
        }
    }
    var B = Object.assign({
            position: s
        }, u && KL),
        Y = c === !0 ? qL({
            x: p,
            y
        }) : {
            x: p,
            y
        };
    if (p = Y.x, y = Y.y, l) {
        var K;
        return Object.assign({}, B, (K = {}, K[w] = h ? "0" : "", K[v] = g ? "0" : "", K.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + y + "px)" : "translate3d(" + p + "px, " + y + "px, 0)", K))
    }
    return Object.assign({}, B, (t = {}, t[w] = h ? y + "px" : "", t[v] = g ? p + "px" : "", t.transform = "", t))
}

function XL(e) {
    var t = e.state,
        n = e.options,
        r = n.gpuAcceleration,
        o = r === void 0 ? !0 : r,
        i = n.adaptive,
        a = i === void 0 ? !0 : i,
        s = n.roundOffsets,
        l = s === void 0 ? !0 : s,
        u = {
            placement: zn(t.placement),
            variation: Ti(t.placement),
            popper: t.elements.popper,
            popperRect: t.rects.popper,
            gpuAcceleration: o,
            isFixed: t.options.strategy === "fixed"
        };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Kv(Object.assign({}, u, {
        offsets: t.modifiersData.popperOffsets,
        position: t.options.strategy,
        adaptive: a,
        roundOffsets: l
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Kv(Object.assign({}, u, {
        offsets: t.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: l
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement
    })
}
const YL = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: XL,
    data: {}
};
var gl = {
    passive: !0
};

function QL(e) {
    var t = e.state,
        n = e.instance,
        r = e.options,
        o = r.scroll,
        i = o === void 0 ? !0 : o,
        a = r.resize,
        s = a === void 0 ? !0 : a,
        l = on(t.elements.popper),
        u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return i && u.forEach(function(c) {
            c.addEventListener("scroll", n.update, gl)
        }), s && l.addEventListener("resize", n.update, gl),
        function() {
            i && u.forEach(function(c) {
                c.removeEventListener("scroll", n.update, gl)
            }), s && l.removeEventListener("resize", n.update, gl)
        }
}
const ZL = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function() {},
    effect: QL,
    data: {}
};
var JL = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};

function jl(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
        return JL[t]
    })
}
var eI = {
    start: "end",
    end: "start"
};

function qv(e) {
    return e.replace(/start|end/g, function(t) {
        return eI[t]
    })
}

function jh(e) {
    var t = on(e),
        n = t.pageXOffset,
        r = t.pageYOffset;
    return {
        scrollLeft: n,
        scrollTop: r
    }
}

function Vh(e) {
    return Ei(Ur(e)).left + jh(e).scrollLeft
}

function tI(e, t) {
    var n = on(e),
        r = Ur(e),
        o = n.visualViewport,
        i = r.clientWidth,
        a = r.clientHeight,
        s = 0,
        l = 0;
    if (o) {
        i = o.width, a = o.height;
        var u = hx();
        (u || !u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop)
    }
    return {
        width: i,
        height: a,
        x: s + Vh(e),
        y: l
    }
}

function nI(e) {
    var t, n = Ur(e),
        r = jh(e),
        o = (t = e.ownerDocument) == null ? void 0 : t.body,
        i = go(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
        a = go(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
        s = -r.scrollLeft + Vh(e),
        l = -r.scrollTop;
    return rr(o || n).direction === "rtl" && (s += go(n.clientWidth, o ? o.clientWidth : 0) - i), {
        width: i,
        height: a,
        x: s,
        y: l
    }
}

function Hh(e) {
    var t = rr(e),
        n = t.overflow,
        r = t.overflowX,
        o = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + o + r)
}

function Sx(e) {
    return ["html", "body", "#document"].indexOf($n(e)) >= 0 ? e.ownerDocument.body : Zt(e) && Hh(e) ? e : Sx(Mc(e))
}

function Oa(e, t) {
    var n;
    t === void 0 && (t = []);
    var r = Sx(e),
        o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
        i = on(r),
        a = o ? [i].concat(i.visualViewport || [], Hh(r) ? r : []) : r,
        s = t.concat(a);
    return o ? s : s.concat(Oa(Mc(a)))
}

function Ip(e) {
    return Object.assign({}, e, {
        left: e.x,
        top: e.y,
        right: e.x + e.width,
        bottom: e.y + e.height
    })
}

function rI(e, t) {
    var n = Ei(e, !1, t === "fixed");
    return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n
}

function Xv(e, t, n) {
    return t === px ? Ip(tI(e, n)) : ko(t) ? rI(t, n) : Ip(nI(Ur(e)))
}

function oI(e) {
    var t = Oa(Mc(e)),
        n = ["absolute", "fixed"].indexOf(rr(e).position) >= 0,
        r = n && Zt(e) ? As(e) : e;
    return ko(r) ? t.filter(function(o) {
        return ko(o) && gx(o, r) && $n(o) !== "body"
    }) : []
}

function iI(e, t, n, r) {
    var o = t === "clippingParents" ? oI(e) : [].concat(t),
        i = [].concat(o, [n]),
        a = i[0],
        s = i.reduce(function(l, u) {
            var c = Xv(e, u, r);
            return l.top = go(c.top, l.top), l.right = $u(c.right, l.right), l.bottom = $u(c.bottom, l.bottom), l.left = go(c.left, l.left), l
        }, Xv(e, a, r));
    return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s
}

function wx(e) {
    var t = e.reference,
        n = e.element,
        r = e.placement,
        o = r ? zn(r) : null,
        i = r ? Ti(r) : null,
        a = t.x + t.width / 2 - n.width / 2,
        s = t.y + t.height / 2 - n.height / 2,
        l;
    switch (o) {
        case xt:
            l = {
                x: a,
                y: t.y - n.height
            };
            break;
        case nn:
            l = {
                x: a,
                y: t.y + t.height
            };
            break;
        case rn:
            l = {
                x: t.x + t.width,
                y: s
            };
            break;
        case kt:
            l = {
                x: t.x - n.width,
                y: s
            };
            break;
        default:
            l = {
                x: t.x,
                y: t.y
            }
    }
    var u = o ? Bh(o) : null;
    if (u != null) {
        var c = u === "y" ? "height" : "width";
        switch (i) {
            case Ci:
                l[u] = l[u] - (t[c] / 2 - n[c] / 2);
                break;
            case ds:
                l[u] = l[u] + (t[c] / 2 - n[c] / 2);
                break
        }
    }
    return l
}

function fs(e, t) {
    t === void 0 && (t = {});
    var n = t,
        r = n.placement,
        o = r === void 0 ? e.placement : r,
        i = n.strategy,
        a = i === void 0 ? e.strategy : i,
        s = n.boundary,
        l = s === void 0 ? _L : s,
        u = n.rootBoundary,
        c = u === void 0 ? px : u,
        d = n.elementContext,
        f = d === void 0 ? Ji : d,
        p = n.altBoundary,
        m = p === void 0 ? !1 : p,
        y = n.padding,
        x = y === void 0 ? 0 : y,
        g = vx(typeof x != "number" ? x : bx(x, Ps)),
        h = f === Ji ? EL : Ji,
        v = e.rects.popper,
        w = e.elements[m ? h : f],
        E = iI(ko(w) ? w : w.contextElement || Ur(e.elements.popper), l, c, a),
        P = Ei(e.elements.reference),
        T = wx({
            reference: P,
            element: v,
            strategy: "absolute",
            placement: o
        }),
        R = Ip(Object.assign({}, v, T)),
        I = f === Ji ? R : P,
        M = {
            top: E.top - I.top + g.top,
            bottom: I.bottom - E.bottom + g.bottom,
            left: E.left - I.left + g.left,
            right: I.right - E.right + g.right
        },
        B = e.modifiersData.offset;
    if (f === Ji && B) {
        var Y = B[o];
        Object.keys(M).forEach(function(K) {
            var ee = [rn, nn].indexOf(K) >= 0 ? 1 : -1,
                Q = [xt, nn].indexOf(K) >= 0 ? "y" : "x";
            M[K] += Y[Q] * ee
        })
    }
    return M
}

function aI(e, t) {
    t === void 0 && (t = {});
    var n = t,
        r = n.placement,
        o = n.boundary,
        i = n.rootBoundary,
        a = n.padding,
        s = n.flipVariations,
        l = n.allowedAutoPlacements,
        u = l === void 0 ? mx : l,
        c = Ti(r),
        d = c ? s ? Uv : Uv.filter(function(m) {
            return Ti(m) === c
        }) : Ps,
        f = d.filter(function(m) {
            return u.indexOf(m) >= 0
        });
    f.length === 0 && (f = d);
    var p = f.reduce(function(m, y) {
        return m[y] = fs(e, {
            placement: y,
            boundary: o,
            rootBoundary: i,
            padding: a
        })[zn(y)], m
    }, {});
    return Object.keys(p).sort(function(m, y) {
        return p[m] - p[y]
    })
}

function sI(e) {
    if (zn(e) === Dh) return [];
    var t = jl(e);
    return [qv(e), t, qv(t)]
}

function lI(e) {
    var t = e.state,
        n = e.options,
        r = e.name;
    if (!t.modifiersData[r]._skip) {
        for (var o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !0 : a, l = n.fallbackPlacements, u = n.padding, c = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, m = p === void 0 ? !0 : p, y = n.allowedAutoPlacements, x = t.options.placement, g = zn(x), h = g === x, v = l || (h || !m ? [jl(x)] : sI(x)), w = [x].concat(v).reduce(function(q, ze) {
                return q.concat(zn(ze) === Dh ? aI(t, {
                    placement: ze,
                    boundary: c,
                    rootBoundary: d,
                    padding: u,
                    flipVariations: m,
                    allowedAutoPlacements: y
                }) : ze)
            }, []), E = t.rects.reference, P = t.rects.popper, T = new Map, R = !0, I = w[0], M = 0; M < w.length; M++) {
            var B = w[M],
                Y = zn(B),
                K = Ti(B) === Ci,
                ee = [xt, nn].indexOf(Y) >= 0,
                Q = ee ? "width" : "height",
                W = fs(t, {
                    placement: B,
                    boundary: c,
                    rootBoundary: d,
                    altBoundary: f,
                    padding: u
                }),
                $ = ee ? K ? rn : kt : K ? nn : xt;
            E[Q] > P[Q] && ($ = jl($));
            var z = jl($),
                N = [];
            if (i && N.push(W[Y] <= 0), s && N.push(W[$] <= 0, W[z] <= 0), N.every(function(q) {
                    return q
                })) {
                I = B, R = !1;
                break
            }
            T.set(B, N)
        }
        if (R)
            for (var H = m ? 3 : 1, le = function(ze) {
                    var _e = w.find(function(et) {
                        var Be = T.get(et);
                        if (Be) return Be.slice(0, ze).every(function(ar) {
                            return ar
                        })
                    });
                    if (_e) return I = _e, "break"
                }, oe = H; oe > 0; oe--) {
                var j = le(oe);
                if (j === "break") break
            }
        t.placement !== I && (t.modifiersData[r]._skip = !0, t.placement = I, t.reset = !0)
    }
}
const uI = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: lI,
    requiresIfExists: ["offset"],
    data: {
        _skip: !1
    }
};

function Yv(e, t, n) {
    return n === void 0 && (n = {
        x: 0,
        y: 0
    }), {
        top: e.top - t.height - n.y,
        right: e.right - t.width + n.x,
        bottom: e.bottom - t.height + n.y,
        left: e.left - t.width - n.x
    }
}

function Qv(e) {
    return [xt, rn, nn, kt].some(function(t) {
        return e[t] >= 0
    })
}

function cI(e) {
    var t = e.state,
        n = e.name,
        r = t.rects.reference,
        o = t.rects.popper,
        i = t.modifiersData.preventOverflow,
        a = fs(t, {
            elementContext: "reference"
        }),
        s = fs(t, {
            altBoundary: !0
        }),
        l = Yv(a, r),
        u = Yv(s, o, i),
        c = Qv(l),
        d = Qv(u);
    t.modifiersData[n] = {
        referenceClippingOffsets: l,
        popperEscapeOffsets: u,
        isReferenceHidden: c,
        hasPopperEscaped: d
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-reference-hidden": c,
        "data-popper-escaped": d
    })
}
const dI = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: cI
};

function fI(e, t, n) {
    var r = zn(e),
        o = [kt, xt].indexOf(r) >= 0 ? -1 : 1,
        i = typeof n == "function" ? n(Object.assign({}, t, {
            placement: e
        })) : n,
        a = i[0],
        s = i[1];
    return a = a || 0, s = (s || 0) * o, [kt, rn].indexOf(r) >= 0 ? {
        x: s,
        y: a
    } : {
        x: a,
        y: s
    }
}

function pI(e) {
    var t = e.state,
        n = e.options,
        r = e.name,
        o = n.offset,
        i = o === void 0 ? [0, 0] : o,
        a = mx.reduce(function(c, d) {
            return c[d] = fI(d, t.rects, i), c
        }, {}),
        s = a[t.placement],
        l = s.x,
        u = s.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a
}
const mI = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: pI
};

function hI(e) {
    var t = e.state,
        n = e.name;
    t.modifiersData[n] = wx({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement
    })
}
const gI = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: hI,
    data: {}
};

function yI(e) {
    return e === "x" ? "y" : "x"
}

function vI(e) {
    var t = e.state,
        n = e.options,
        r = e.name,
        o = n.mainAxis,
        i = o === void 0 ? !0 : o,
        a = n.altAxis,
        s = a === void 0 ? !1 : a,
        l = n.boundary,
        u = n.rootBoundary,
        c = n.altBoundary,
        d = n.padding,
        f = n.tether,
        p = f === void 0 ? !0 : f,
        m = n.tetherOffset,
        y = m === void 0 ? 0 : m,
        x = fs(t, {
            boundary: l,
            rootBoundary: u,
            padding: d,
            altBoundary: c
        }),
        g = zn(t.placement),
        h = Ti(t.placement),
        v = !h,
        w = Bh(g),
        E = yI(w),
        P = t.modifiersData.popperOffsets,
        T = t.rects.reference,
        R = t.rects.popper,
        I = typeof y == "function" ? y(Object.assign({}, t.rects, {
            placement: t.placement
        })) : y,
        M = typeof I == "number" ? {
            mainAxis: I,
            altAxis: I
        } : Object.assign({
            mainAxis: 0,
            altAxis: 0
        }, I),
        B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
        Y = {
            x: 0,
            y: 0
        };
    if (P) {
        if (i) {
            var K, ee = w === "y" ? xt : kt,
                Q = w === "y" ? nn : rn,
                W = w === "y" ? "height" : "width",
                $ = P[w],
                z = $ + x[ee],
                N = $ - x[Q],
                H = p ? -R[W] / 2 : 0,
                le = h === Ci ? T[W] : R[W],
                oe = h === Ci ? -R[W] : -T[W],
                j = t.elements.arrow,
                q = p && j ? Nh(j) : {
                    width: 0,
                    height: 0
                },
                ze = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : yx(),
                _e = ze[ee],
                et = ze[Q],
                Be = Ma(0, T[W], q[W]),
                ar = v ? T[W] / 2 - H - Be - _e - M.mainAxis : le - Be - _e - M.mainAxis,
                Gr = v ? -T[W] / 2 + H + Be + et + M.mainAxis : oe + Be + et + M.mainAxis,
                sr = t.elements.arrow && As(t.elements.arrow),
                Ro = sr ? w === "y" ? sr.clientTop || 0 : sr.clientLeft || 0 : 0,
                Li = (K = B == null ? void 0 : B[w]) != null ? K : 0,
                Z = $ + ar - Li - Ro,
                an = $ + Gr - Li,
                Bt = Ma(p ? $u(z, Z) : z, $, p ? go(N, an) : N);
            P[w] = Bt, Y[w] = Bt - $
        }
        if (s) {
            var Ln, Dc = w === "x" ? xt : kt,
                Fc = w === "x" ? nn : rn,
                jt = P[E],
                lr = E === "y" ? "height" : "width",
                Kr = jt + x[Dc],
                Vt = jt - x[Fc],
                Mo = [xt, kt].indexOf(g) !== -1,
                Ii = (Ln = B == null ? void 0 : B[E]) != null ? Ln : 0,
                zs = Mo ? Kr : jt - T[lr] - R[lr] - Ii + M.altAxis,
                $s = Mo ? jt + T[lr] + R[lr] - Ii - M.altAxis : Vt,
                qr = p && Mo ? VL(zs, jt, $s) : Ma(p ? zs : Kr, jt, p ? $s : Vt);
            P[E] = qr, Y[E] = qr - jt
        }
        t.modifiersData[r] = Y
    }
}
const bI = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: vI,
    requiresIfExists: ["offset"]
};

function SI(e) {
    return {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    }
}

function wI(e) {
    return e === on(e) || !Zt(e) ? jh(e) : SI(e)
}

function xI(e) {
    var t = e.getBoundingClientRect(),
        n = _i(t.width) / e.offsetWidth || 1,
        r = _i(t.height) / e.offsetHeight || 1;
    return n !== 1 || r !== 1
}

function kI(e, t, n) {
    n === void 0 && (n = !1);
    var r = Zt(t),
        o = Zt(t) && xI(t),
        i = Ur(t),
        a = Ei(e, o, n),
        s = {
            scrollLeft: 0,
            scrollTop: 0
        },
        l = {
            x: 0,
            y: 0
        };
    return (r || !r && !n) && (($n(t) !== "body" || Hh(i)) && (s = wI(t)), Zt(t) ? (l = Ei(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = Vh(i))), {
        x: a.left + s.scrollLeft - l.x,
        y: a.top + s.scrollTop - l.y,
        width: a.width,
        height: a.height
    }
}

function CI(e) {
    var t = new Map,
        n = new Set,
        r = [];
    e.forEach(function(i) {
        t.set(i.name, i)
    });

    function o(i) {
        n.add(i.name);
        var a = [].concat(i.requires || [], i.requiresIfExists || []);
        a.forEach(function(s) {
            if (!n.has(s)) {
                var l = t.get(s);
                l && o(l)
            }
        }), r.push(i)
    }
    return e.forEach(function(i) {
        n.has(i.name) || o(i)
    }), r
}

function _I(e) {
    var t = CI(e);
    return IL.reduce(function(n, r) {
        return n.concat(t.filter(function(o) {
            return o.phase === r
        }))
    }, [])
}

function EI(e) {
    var t;
    return function() {
        return t || (t = new Promise(function(n) {
            Promise.resolve().then(function() {
                t = void 0, n(e())
            })
        })), t
    }
}

function TI(e) {
    var t = e.reduce(function(n, r) {
        var o = n[r.name];
        return n[r.name] = o ? Object.assign({}, o, r, {
            options: Object.assign({}, o.options, r.options),
            data: Object.assign({}, o.data, r.data)
        }) : r, n
    }, {});
    return Object.keys(t).map(function(n) {
        return t[n]
    })
}
var Zv = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};

function Jv() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function(r) {
        return !(r && typeof r.getBoundingClientRect == "function")
    })
}

function PI(e) {
    e === void 0 && (e = {});
    var t = e,
        n = t.defaultModifiers,
        r = n === void 0 ? [] : n,
        o = t.defaultOptions,
        i = o === void 0 ? Zv : o;
    return function(s, l, u) {
        u === void 0 && (u = i);
        var c = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, Zv, i),
                modifiersData: {},
                elements: {
                    reference: s,
                    popper: l
                },
                attributes: {},
                styles: {}
            },
            d = [],
            f = !1,
            p = {
                state: c,
                setOptions: function(g) {
                    var h = typeof g == "function" ? g(c.options) : g;
                    y(), c.options = Object.assign({}, i, c.options, h), c.scrollParents = {
                        reference: ko(s) ? Oa(s) : s.contextElement ? Oa(s.contextElement) : [],
                        popper: Oa(l)
                    };
                    var v = _I(TI([].concat(r, c.options.modifiers)));
                    return c.orderedModifiers = v.filter(function(w) {
                        return w.enabled
                    }), m(), p.update()
                },
                forceUpdate: function() {
                    if (!f) {
                        var g = c.elements,
                            h = g.reference,
                            v = g.popper;
                        if (Jv(h, v)) {
                            c.rects = {
                                reference: kI(h, As(v), c.options.strategy === "fixed"),
                                popper: Nh(v)
                            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(M) {
                                return c.modifiersData[M.name] = Object.assign({}, M.data)
                            });
                            for (var w = 0; w < c.orderedModifiers.length; w++) {
                                if (c.reset === !0) {
                                    c.reset = !1, w = -1;
                                    continue
                                }
                                var E = c.orderedModifiers[w],
                                    P = E.fn,
                                    T = E.options,
                                    R = T === void 0 ? {} : T,
                                    I = E.name;
                                typeof P == "function" && (c = P({
                                    state: c,
                                    options: R,
                                    name: I,
                                    instance: p
                                }) || c)
                            }
                        }
                    }
                },
                update: EI(function() {
                    return new Promise(function(x) {
                        p.forceUpdate(), x(c)
                    })
                }),
                destroy: function() {
                    y(), f = !0
                }
            };
        if (!Jv(s, l)) return p;
        p.setOptions(u).then(function(x) {
            !f && u.onFirstUpdate && u.onFirstUpdate(x)
        });

        function m() {
            c.orderedModifiers.forEach(function(x) {
                var g = x.name,
                    h = x.options,
                    v = h === void 0 ? {} : h,
                    w = x.effect;
                if (typeof w == "function") {
                    var E = w({
                            state: c,
                            name: g,
                            instance: p,
                            options: v
                        }),
                        P = function() {};
                    d.push(E || P)
                }
            })
        }

        function y() {
            d.forEach(function(x) {
                return x()
            }), d = []
        }
        return p
    }
}
var AI = [ZL, gI, YL, NL, mI, uI, bI, GL, dI],
    RI = PI({
        defaultModifiers: AI
    });

function MI(e = {}) {
    const {
        enabled: t = !0,
        modifiers: n,
        placement: r = "bottom",
        strategy: o = "absolute",
        arrowPadding: i = 8,
        eventListeners: a = !0,
        offset: s,
        gutter: l = 8,
        flip: u = !0,
        boundary: c = "clippingParents",
        preventOverflow: d = !0,
        matchWidth: f,
        direction: p = "ltr"
    } = e, m = b.useRef(null), y = b.useRef(null), x = b.useRef(null), g = CL(r, p), h = b.useRef(() => {}), v = b.useCallback(() => {
        var M;
        !t || !m.current || !y.current || ((M = h.current) == null || M.call(h), x.current = RI(m.current, y.current, {
            placement: g,
            modifiers: [wL, vL, yL, { ...gL,
                enabled: !!f
            }, {
                name: "eventListeners",
                ...hL(a)
            }, {
                name: "arrow",
                options: {
                    padding: i
                }
            }, {
                name: "offset",
                options: {
                    offset: s ? ? [0, l]
                }
            }, {
                name: "flip",
                enabled: !!u,
                options: {
                    padding: 8
                }
            }, {
                name: "preventOverflow",
                enabled: !!d,
                options: {
                    boundary: c
                }
            }, ...n ? ? []],
            strategy: o
        }), x.current.forceUpdate(), h.current = x.current.destroy)
    }, [g, t, n, f, a, i, s, l, u, d, c, o]);
    b.useEffect(() => () => {
        var M;
        !m.current && !y.current && ((M = x.current) == null || M.destroy(), x.current = null)
    }, []);
    const w = b.useCallback(M => {
            m.current = M, v()
        }, [v]),
        E = b.useCallback((M = {}, B = null) => ({ ...M,
            ref: tn(w, B)
        }), [w]),
        P = b.useCallback(M => {
            y.current = M, v()
        }, [v]),
        T = b.useCallback((M = {}, B = null) => ({ ...M,
            ref: tn(P, B),
            style: { ...M.style,
                position: o,
                minWidth: f ? void 0 : "max-content",
                inset: "0 auto auto 0"
            }
        }), [o, P, f]),
        R = b.useCallback((M = {}, B = null) => {
            const {
                size: Y,
                shadowColor: K,
                bg: ee,
                style: Q,
                ...W
            } = M;
            return { ...W,
                ref: B,
                "data-popper-arrow": "",
                style: OI(M)
            }
        }, []),
        I = b.useCallback((M = {}, B = null) => ({ ...M,
            ref: B,
            "data-popper-arrow-inner": ""
        }), []);
    return {
        update() {
            var M;
            (M = x.current) == null || M.update()
        },
        forceUpdate() {
            var M;
            (M = x.current) == null || M.forceUpdate()
        },
        transformOrigin: Pt.transformOrigin.varRef,
        referenceRef: w,
        popperRef: P,
        getPopperProps: T,
        getArrowProps: R,
        getArrowInnerProps: I,
        getReferenceProps: E
    }
}

function OI(e) {
    const {
        size: t,
        shadowColor: n,
        bg: r,
        style: o
    } = e, i = { ...o,
        position: "absolute"
    };
    return t && (i["--popper-arrow-size"] = t), n && (i["--popper-arrow-shadow-color"] = n), r && (i["--popper-arrow-bg"] = r), i
}

function zI(e = {}) {
    const {
        onClose: t,
        onOpen: n,
        isOpen: r,
        id: o
    } = e, i = Mr(n), a = Mr(t), [s, l] = b.useState(e.defaultIsOpen || !1), u = r !== void 0 ? r : s, c = r !== void 0, d = b.useId(), f = o ? ? `disclosure-${d}`, p = b.useCallback(() => {
        c || l(!1), a == null || a()
    }, [c, a]), m = b.useCallback(() => {
        c || l(!0), i == null || i()
    }, [c, i]), y = b.useCallback(() => {
        u ? p() : m()
    }, [u, m, p]);

    function x(h = {}) {
        return { ...h,
            "aria-expanded": u,
            "aria-controls": f,
            onClick(v) {
                var w;
                (w = h.onClick) == null || w.call(h, v), y()
            }
        }
    }

    function g(h = {}) {
        return { ...h,
            hidden: !u,
            id: f
        }
    }
    return {
        isOpen: u,
        onOpen: m,
        onClose: p,
        onToggle: y,
        isControlled: c,
        getButtonProps: x,
        getDisclosureProps: g
    }
}

function $I(e) {
    const {
        ref: t,
        handler: n,
        enabled: r = !0
    } = e, o = Mr(n), a = b.useRef({
        isPointerDown: !1,
        ignoreEmulatedMouseEvents: !1
    }).current;
    b.useEffect(() => {
        if (!r) return;
        const s = d => {
                Zd(d, t) && (a.isPointerDown = !0)
            },
            l = d => {
                if (a.ignoreEmulatedMouseEvents) {
                    a.ignoreEmulatedMouseEvents = !1;
                    return
                }
                a.isPointerDown && n && Zd(d, t) && (a.isPointerDown = !1, o(d))
            },
            u = d => {
                a.ignoreEmulatedMouseEvents = !0, n && a.isPointerDown && Zd(d, t) && (a.isPointerDown = !1, o(d))
            },
            c = xx(t.current);
        return c.addEventListener("mousedown", s, !0), c.addEventListener("mouseup", l, !0), c.addEventListener("touchstart", s, !0), c.addEventListener("touchend", u, !0), () => {
            c.removeEventListener("mousedown", s, !0), c.removeEventListener("mouseup", l, !0), c.removeEventListener("touchstart", s, !0), c.removeEventListener("touchend", u, !0)
        }
    }, [n, t, o, a, r])
}

function Zd(e, t) {
    var n;
    const r = e.target;
    return e.button > 0 || r && !xx(r).contains(r) ? !1 : !((n = t.current) != null && n.contains(r))
}

function xx(e) {
    var t;
    return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document
}

function LI(e) {
    const {
        isOpen: t,
        ref: n
    } = e, [r, o] = b.useState(t), [i, a] = b.useState(!1);
    return b.useEffect(() => {
        i || (o(t), a(!0))
    }, [t, i, r]), O$(() => n.current, "animationend", () => {
        o(t)
    }), {
        present: !(t ? !1 : !r),
        onComplete() {
            var l;
            const u = z$(n.current),
                c = new u.CustomEvent("animationend", {
                    bubbles: !0
                });
            (l = n.current) == null || l.dispatchEvent(c)
        }
    }
}

function II(e) {
    const {
        wasSelected: t,
        enabled: n,
        isSelected: r,
        mode: o = "unmount"
    } = e;
    return !!(!n || r || o === "keepMounted" && t)
}
var [DI, FI, NI, BI] = a$(), [jI, Rs] = Nt({
    strict: !1,
    name: "MenuContext"
});

function VI(e, ...t) {
    const n = b.useId(),
        r = e || n;
    return b.useMemo(() => t.map(o => `${o}-${r}`), [r, t])
}

function kx(e) {
    var t;
    return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document
}

function e1(e) {
    return kx(e).activeElement === e
}

function HI(e = {}) {
    const {
        id: t,
        closeOnSelect: n = !0,
        closeOnBlur: r = !0,
        initialFocusRef: o,
        autoSelect: i = !0,
        isLazy: a,
        isOpen: s,
        defaultIsOpen: l,
        onClose: u,
        onOpen: c,
        placement: d = "bottom-start",
        lazyBehavior: f = "unmount",
        direction: p,
        computePositionOnMount: m = !1,
        ...y
    } = e, x = b.useRef(null), g = b.useRef(null), h = NI(), v = b.useCallback(() => {
        requestAnimationFrame(() => {
            var j;
            (j = x.current) == null || j.focus({
                preventScroll: !1
            })
        })
    }, []), w = b.useCallback(() => {
        const j = setTimeout(() => {
            var q;
            if (o)(q = o.current) == null || q.focus();
            else {
                const ze = h.firstEnabled();
                ze && K(ze.index)
            }
        });
        z.current.add(j)
    }, [h, o]), E = b.useCallback(() => {
        const j = setTimeout(() => {
            const q = h.lastEnabled();
            q && K(q.index)
        });
        z.current.add(j)
    }, [h]), P = b.useCallback(() => {
        c == null || c(), i ? w() : v()
    }, [i, w, v, c]), {
        isOpen: T,
        onOpen: R,
        onClose: I,
        onToggle: M
    } = zI({
        isOpen: s,
        defaultIsOpen: l,
        onClose: u,
        onOpen: P
    });
    $I({
        enabled: T && r,
        ref: x,
        handler: j => {
            var q;
            (q = g.current) != null && q.contains(j.target) || I()
        }
    });
    const B = MI({ ...y,
            enabled: T || m,
            placement: d,
            direction: p
        }),
        [Y, K] = b.useState(-1);
    wi(() => {
        T || K(-1)
    }, [T]), dL(x, {
        focusRef: g,
        visible: T,
        shouldFocus: !0
    });
    const ee = LI({
            isOpen: T,
            ref: x
        }),
        [Q, W] = VI(t, "menu-button", "menu-list"),
        $ = b.useCallback(() => {
            R(), v()
        }, [R, v]),
        z = b.useRef(new Set([]));
    YI(() => {
        z.current.forEach(j => clearTimeout(j)), z.current.clear()
    });
    const N = b.useCallback(() => {
            R(), w()
        }, [w, R]),
        H = b.useCallback(() => {
            R(), E()
        }, [R, E]),
        le = b.useCallback(() => {
            var j, q;
            const ze = kx(x.current),
                _e = (j = x.current) == null ? void 0 : j.contains(ze.activeElement);
            if (!(T && !_e)) return;
            const Be = (q = h.item(Y)) == null ? void 0 : q.node;
            Be == null || Be.focus()
        }, [T, Y, h]),
        oe = b.useRef(null);
    return {
        openAndFocusMenu: $,
        openAndFocusFirstItem: N,
        openAndFocusLastItem: H,
        onTransitionEnd: le,
        unstable__animationState: ee,
        descendants: h,
        popper: B,
        buttonId: Q,
        menuId: W,
        forceUpdate: B.forceUpdate,
        orientation: "vertical",
        isOpen: T,
        onToggle: M,
        onOpen: R,
        onClose: I,
        menuRef: x,
        buttonRef: g,
        focusedIndex: Y,
        closeOnSelect: n,
        closeOnBlur: r,
        autoSelect: i,
        setFocusedIndex: K,
        isLazy: a,
        lazyBehavior: f,
        initialFocusRef: o,
        rafId: oe
    }
}

function WI(e = {}, t = null) {
    const n = Rs(),
        {
            onToggle: r,
            popper: o,
            openAndFocusFirstItem: i,
            openAndFocusLastItem: a
        } = n,
        s = b.useCallback(l => {
            const u = l.key,
                d = {
                    Enter: i,
                    ArrowDown: i,
                    ArrowUp: a
                }[u];
            d && (l.preventDefault(), l.stopPropagation(), d(l))
        }, [i, a]);
    return { ...e,
        ref: tn(n.buttonRef, t, o.referenceRef),
        id: n.buttonId,
        "data-active": xe(n.isOpen),
        "aria-expanded": n.isOpen,
        "aria-haspopup": "menu",
        "aria-controls": n.menuId,
        onClick: Ye(e.onClick, r),
        onKeyDown: Ye(e.onKeyDown, s)
    }
}

function Dp(e) {
    var t;
    return qI(e) && !!((t = e == null ? void 0 : e.getAttribute("role")) != null && t.startsWith("menuitem"))
}

function UI(e = {}, t = null) {
    const n = Rs();
    if (!n) throw new Error("useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>");
    const {
        focusedIndex: r,
        setFocusedIndex: o,
        menuRef: i,
        isOpen: a,
        onClose: s,
        menuId: l,
        isLazy: u,
        lazyBehavior: c,
        unstable__animationState: d
    } = n, f = FI(), p = aL({
        preventDefault: g => g.key !== " " && Dp(g.target)
    }), m = b.useCallback(g => {
        const h = g.key,
            w = {
                Tab: P => P.preventDefault(),
                Escape: s,
                ArrowDown: () => {
                    const P = f.nextEnabled(r);
                    P && o(P.index)
                },
                ArrowUp: () => {
                    const P = f.prevEnabled(r);
                    P && o(P.index)
                }
            }[h];
        if (w) {
            g.preventDefault(), w(g);
            return
        }
        const E = p(P => {
            const T = sL(f.values(), P, R => {
                var I, M;
                return (M = (I = R == null ? void 0 : R.node) == null ? void 0 : I.textContent) != null ? M : ""
            }, f.item(r));
            if (T) {
                const R = f.indexOf(T.node);
                o(R)
            }
        });
        Dp(g.target) && E(g)
    }, [f, r, p, s, o]), y = b.useRef(!1);
    a && (y.current = !0);
    const x = II({
        wasSelected: y.current,
        enabled: u,
        mode: c,
        isSelected: d.present
    });
    return { ...e,
        ref: tn(i, t),
        children: x ? e.children : null,
        tabIndex: -1,
        role: "menu",
        id: l,
        style: { ...e.style,
            transformOrigin: "var(--popper-transform-origin)"
        },
        "aria-orientation": "vertical",
        onKeyDown: Ye(e.onKeyDown, m)
    }
}

function GI(e = {}) {
    const {
        popper: t,
        isOpen: n
    } = Rs();
    return t.getPopperProps({ ...e,
        style: {
            visibility: n ? "visible" : "hidden",
            ...e.style
        }
    })
}

function KI(e = {}, t = null) {
    const {
        onMouseEnter: n,
        onMouseMove: r,
        onMouseLeave: o,
        onClick: i,
        onFocus: a,
        isDisabled: s,
        isFocusable: l,
        closeOnSelect: u,
        type: c,
        ...d
    } = e, f = Rs(), {
        setFocusedIndex: p,
        focusedIndex: m,
        closeOnSelect: y,
        onClose: x,
        menuRef: g,
        isOpen: h,
        menuId: v,
        rafId: w
    } = f, E = b.useRef(null), P = `${v}-menuitem-${b.useId()}`, {
        index: T,
        register: R
    } = BI({
        disabled: s && !l
    }), I = b.useCallback($ => {
        n == null || n($), !s && p(T)
    }, [p, T, s, n]), M = b.useCallback($ => {
        r == null || r($), E.current && !e1(E.current) && I($)
    }, [I, r]), B = b.useCallback($ => {
        o == null || o($), !s && p(-1)
    }, [p, s, o]), Y = b.useCallback($ => {
        i == null || i($), Dp($.currentTarget) && (u ? ? y) && x()
    }, [x, i, y, u]), K = b.useCallback($ => {
        a == null || a($), p(T)
    }, [p, a, T]), ee = T === m, Q = s && !l;
    wi(() => {
        h && (ee && !Q && E.current ? (w.current && cancelAnimationFrame(w.current), w.current = requestAnimationFrame(() => {
            var $;
            ($ = E.current) == null || $.focus(), w.current = null
        })) : g.current && !e1(g.current) && g.current.focus())
    }, [ee, Q, g, h]);
    const W = uL({
        onClick: Y,
        onFocus: K,
        onMouseEnter: I,
        onMouseMove: M,
        onMouseLeave: B,
        ref: tn(R, E, t),
        isDisabled: s,
        isFocusable: l
    });
    return { ...d,
        ...W,
        type: c ? ? W.type,
        id: P,
        role: "menuitem",
        tabIndex: ee ? 0 : -1
    }
}

function qI(e) {
    var t;
    if (!XI(e)) return !1;
    const n = (t = e.ownerDocument.defaultView) != null ? t : window;
    return e instanceof n.HTMLElement
}

function XI(e) {
    return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE
}

function YI(e, t = []) {
    return b.useEffect(() => () => e(), t)
}
var [QI, Oc] = Nt({
    name: "MenuStylesContext",
    errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `
}), Wh = e => {
    const {
        children: t
    } = e, n = Hr("Menu", e), r = ht(e), {
        direction: o
    } = Eo(), {
        descendants: i,
        ...a
    } = HI({ ...r,
        direction: o
    }), s = b.useMemo(() => a, [a]), {
        isOpen: l,
        onClose: u,
        forceUpdate: c
    } = s;
    return _(DI, {
        value: i,
        children: _(jI, {
            value: s,
            children: _(QI, {
                value: n,
                children: Hn(t, {
                    isOpen: l,
                    onClose: u,
                    forceUpdate: c
                })
            })
        })
    })
};
Wh.displayName = "Menu";
var Cx = X((e, t) => {
    const n = Oc();
    return _(G.span, {
        ref: t,
        ...e,
        __css: n.command,
        className: "chakra-menu__command"
    })
});
Cx.displayName = "MenuCommand";
var ZI = X((e, t) => {
        const {
            type: n,
            ...r
        } = e, o = Oc(), i = r.as || n ? n ? ? void 0 : "button", a = b.useMemo(() => ({
            textDecoration: "none",
            color: "inherit",
            userSelect: "none",
            display: "flex",
            width: "100%",
            alignItems: "center",
            textAlign: "start",
            flex: "0 0 auto",
            outline: 0,
            ...o.item
        }), [o.item]);
        return _(G.button, {
            ref: t,
            type: i,
            ...r,
            __css: a
        })
    }),
    _x = e => {
        const {
            className: t,
            children: n,
            ...r
        } = e, o = b.Children.only(n), i = b.isValidElement(o) ? b.cloneElement(o, {
            focusable: "false",
            "aria-hidden": !0,
            className: ge("chakra-menu__icon", o.props.className)
        }) : null, a = ge("chakra-menu__icon-wrapper", t);
        return _(G.span, {
            className: a,
            ...r,
            __css: {
                flexShrink: 0
            },
            children: i
        })
    };
_x.displayName = "MenuIcon";
var Uh = X((e, t) => {
    const {
        icon: n,
        iconSpacing: r = "0.75rem",
        command: o,
        commandSpacing: i = "0.75rem",
        children: a,
        ...s
    } = e, l = KI(s, t), c = n || o ? _("span", {
        style: {
            pointerEvents: "none",
            flex: 1
        },
        children: a
    }) : a;
    return fe(ZI, { ...l,
        className: ge("chakra-menu__menuitem", l.className),
        children: [n && _(_x, {
            fontSize: "0.8em",
            marginEnd: r,
            children: n
        }), c, o && _(Cx, {
            marginStart: i,
            children: o
        })]
    })
});
Uh.displayName = "MenuItem";
var JI = {
        enter: {
            visibility: "visible",
            opacity: 1,
            scale: 1,
            transition: {
                duration: .2,
                ease: [.4, 0, .2, 1]
            }
        },
        exit: {
            transitionEnd: {
                visibility: "hidden"
            },
            opacity: 0,
            scale: .8,
            transition: {
                duration: .1,
                easings: "easeOut"
            }
        }
    },
    eD = G(Lw.div),
    Gh = X(function(t, n) {
        var r, o;
        const {
            rootProps: i,
            motionProps: a,
            ...s
        } = t, {
            isOpen: l,
            onTransitionEnd: u,
            unstable__animationState: c
        } = Rs(), d = UI(s, n), f = GI(i), p = Oc();
        return _(G.div, { ...f,
            __css: {
                zIndex: (o = t.zIndex) != null ? o : (r = p.list) == null ? void 0 : r.zIndex
            },
            children: _(eD, {
                variants: JI,
                initial: !1,
                animate: l ? "enter" : "exit",
                __css: {
                    outline: 0,
                    ...p.list
                },
                ...a,
                className: ge("chakra-menu__menu-list", d.className),
                ...d,
                onUpdate: u,
                onAnimationComplete: Q4(c.onComplete, d.onAnimationComplete)
            })
        })
    });
Gh.displayName = "MenuList";
var tD = X((e, t) => {
        const n = Oc();
        return _(G.button, {
            ref: t,
            ...e,
            __css: {
                display: "inline-flex",
                appearance: "none",
                alignItems: "center",
                outline: 0,
                ...n.button
            }
        })
    }),
    Kh = X((e, t) => {
        const {
            children: n,
            as: r,
            ...o
        } = e, i = WI(o, t);
        return _(r || tD, { ...i,
            className: ge("chakra-menu__menu-button", e.className),
            children: _(G.span, {
                __css: {
                    pointerEvents: "none",
                    flex: "1 1 auto",
                    minW: 0
                },
                children: e.children
            })
        })
    });
Kh.displayName = "MenuButton";

function nD() {
    const e = b.useRef(!0);
    return b.useEffect(() => {
        e.current = !1
    }, []), e.current
}

function rD(e) {
    const t = b.useRef();
    return b.useEffect(() => {
        t.current = e
    }, [e]), t.current
}
var oD = G("div", {
        baseStyle: {
            boxShadow: "none",
            backgroundClip: "padding-box",
            cursor: "default",
            color: "transparent",
            pointerEvents: "none",
            userSelect: "none",
            "&::before, &::after, *": {
                visibility: "hidden"
            }
        }
    }),
    Fp = re("skeleton-start-color"),
    Np = re("skeleton-end-color"),
    iD = Um({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    }),
    aD = Um({
        from: {
            borderColor: Fp.reference,
            background: Fp.reference
        },
        to: {
            borderColor: Np.reference,
            background: Np.reference
        }
    }),
    qh = X((e, t) => {
        const n = { ...e,
                fadeDuration: typeof e.fadeDuration == "number" ? e.fadeDuration : .4,
                speed: typeof e.speed == "number" ? e.speed : .8
            },
            r = Vr("Skeleton", n),
            o = nD(),
            {
                startColor: i = "",
                endColor: a = "",
                isLoaded: s,
                fadeDuration: l,
                speed: u,
                className: c,
                fitContent: d,
                ...f
            } = ht(n),
            [p, m] = X4("colors", [i, a]),
            y = rD(s),
            x = ge("chakra-skeleton", c),
            g = { ...p && {
                    [Fp.variable]: p
                },
                ...m && {
                    [Np.variable]: m
                }
            };
        if (s) {
            const h = o || y ? "none" : `${iD} ${l}s`;
            return _(G.div, {
                ref: t,
                className: x,
                __css: {
                    animation: h
                },
                ...f
            })
        }
        return _(oD, {
            ref: t,
            className: x,
            ...f,
            __css: {
                width: d ? "fit-content" : void 0,
                ...r,
                ...g,
                _dark: { ...r._dark,
                    ...g
                },
                animation: `${u}s linear infinite alternate ${aD}`
            }
        })
    });
qh.displayName = "Skeleton";

function sD(e) {
    return Array(e).fill(1).map((t, n) => n + 1)
}
var t1 = 3,
    Ex = e => {
        const {
            noOfLines: t = t1,
            spacing: n = "0.5rem",
            skeletonHeight: r = "0.5rem",
            className: o,
            startColor: i,
            endColor: a,
            isLoaded: s,
            fadeDuration: l,
            speed: u,
            variant: c,
            size: d,
            colorScheme: f,
            children: p,
            ...m
        } = e, y = oL(typeof t == "number" ? [t] : t) || t1, x = sD(y), g = v => y > 1 && v === x.length ? "80%" : "100%", h = ge("chakra-skeleton__group", o);
        return _(G.div, {
            className: h,
            ...m,
            children: x.map((v, w) => {
                if (s && w > 0) return null;
                const E = s ? null : {
                    mb: v === x.length ? "0" : n,
                    width: g(v),
                    height: r
                };
                return _(qh, {
                    startColor: i,
                    endColor: a,
                    isLoaded: s,
                    fadeDuration: l,
                    speed: u,
                    variant: c,
                    size: d,
                    colorScheme: f,
                    ...E,
                    children: w === 0 ? p : void 0
                }, x.length.toString() + v)
            })
        })
    };
Ex.displayName = "SkeletonText";
var Tx = X(function(t, n) {
    const r = Hr("Switch", t),
        {
            spacing: o = "0.5rem",
            children: i,
            ...a
        } = ht(t),
        {
            state: s,
            getInputProps: l,
            getCheckboxProps: u,
            getRootProps: c,
            getLabelProps: d
        } = M$(a),
        f = b.useMemo(() => ({
            display: "inline-block",
            position: "relative",
            verticalAlign: "middle",
            lineHeight: 0,
            ...r.container
        }), [r.container]),
        p = b.useMemo(() => ({
            display: "inline-flex",
            flexShrink: 0,
            justifyContent: "flex-start",
            boxSizing: "content-box",
            cursor: "pointer",
            ...r.track
        }), [r.track]),
        m = b.useMemo(() => ({
            userSelect: "none",
            marginStart: o,
            ...r.label
        }), [o, r.label]);
    return fe(G.label, { ...c(),
        className: ge("chakra-switch", t.className),
        __css: f,
        children: [_("input", {
            className: "chakra-switch__input",
            ...l({}, n)
        }), _(G.span, { ...u(),
            className: "chakra-switch__track",
            __css: p,
            children: _(G.span, {
                __css: r.thumb,
                className: "chakra-switch__thumb",
                "data-checked": xe(s.isChecked),
                "data-hover": xe(s.isHovered)
            })
        }), i && _(G.span, {
            className: "chakra-switch__label",
            ...d(),
            __css: m,
            children: i
        })]
    })
});
Tx.displayName = "Switch";

function Px(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {
    toString: Ax
} = Object.prototype, {
    getPrototypeOf: Xh
} = Object, Yh = (e => t => {
    const n = Ax.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
})(Object.create(null)), ir = e => (e = e.toLowerCase(), t => Yh(t) === e), zc = e => t => typeof t === e, {
    isArray: $i
} = Array, ps = zc("undefined");

function lD(e) {
    return e !== null && !ps(e) && e.constructor !== null && !ps(e.constructor) && Fr(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const Rx = ir("ArrayBuffer");

function uD(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Rx(e.buffer), t
}
const cD = zc("string"),
    Fr = zc("function"),
    Mx = zc("number"),
    Qh = e => e !== null && typeof e == "object",
    dD = e => e === !0 || e === !1,
    Vl = e => {
        if (Yh(e) !== "object") return !1;
        const t = Xh(e);
        return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
    },
    fD = ir("Date"),
    pD = ir("File"),
    mD = ir("Blob"),
    hD = ir("FileList"),
    gD = e => Qh(e) && Fr(e.pipe),
    yD = e => {
        const t = "[object FormData]";
        return e && (typeof FormData == "function" && e instanceof FormData || Ax.call(e) === t || Fr(e.toString) && e.toString() === t)
    },
    vD = ir("URLSearchParams"),
    bD = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function Ms(e, t, {
    allOwnKeys: n = !1
} = {}) {
    if (e === null || typeof e > "u") return;
    let r, o;
    if (typeof e != "object" && (e = [e]), $i(e))
        for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
    else {
        const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
            a = i.length;
        let s;
        for (r = 0; r < a; r++) s = i[r], t.call(null, e[s], s, e)
    }
}

function Ox(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length,
        o;
    for (; r-- > 0;)
        if (o = n[r], t === o.toLowerCase()) return o;
    return null
}
const zx = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(),
    $x = e => !ps(e) && e !== zx;

function Bp() {
    const {
        caseless: e
    } = $x(this) && this || {}, t = {}, n = (r, o) => {
        const i = e && Ox(t, o) || o;
        Vl(t[i]) && Vl(r) ? t[i] = Bp(t[i], r) : Vl(r) ? t[i] = Bp({}, r) : $i(r) ? t[i] = r.slice() : t[i] = r
    };
    for (let r = 0, o = arguments.length; r < o; r++) arguments[r] && Ms(arguments[r], n);
    return t
}
const SD = (e, t, n, {
        allOwnKeys: r
    } = {}) => (Ms(t, (o, i) => {
        n && Fr(o) ? e[i] = Px(o, n) : e[i] = o
    }, {
        allOwnKeys: r
    }), e),
    wD = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    xD = (e, t, n, r) => {
        e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
            value: t.prototype
        }), n && Object.assign(e.prototype, n)
    },
    kD = (e, t, n, r) => {
        let o, i, a;
        const s = {};
        if (t = t || {}, e == null) return t;
        do {
            for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0;) a = o[i], (!r || r(a, e, t)) && !s[a] && (t[a] = e[a], s[a] = !0);
            e = n !== !1 && Xh(e)
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t
    },
    CD = (e, t, n) => {
        e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
        const r = e.indexOf(t, n);
        return r !== -1 && r === n
    },
    _D = e => {
        if (!e) return null;
        if ($i(e)) return e;
        let t = e.length;
        if (!Mx(t)) return null;
        const n = new Array(t);
        for (; t-- > 0;) n[t] = e[t];
        return n
    },
    ED = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && Xh(Uint8Array)),
    TD = (e, t) => {
        const r = (e && e[Symbol.iterator]).call(e);
        let o;
        for (;
            (o = r.next()) && !o.done;) {
            const i = o.value;
            t.call(e, i[0], i[1])
        }
    },
    PD = (e, t) => {
        let n;
        const r = [];
        for (;
            (n = e.exec(t)) !== null;) r.push(n);
        return r
    },
    AD = ir("HTMLFormElement"),
    RD = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
        return r.toUpperCase() + o
    }),
    n1 = (({
        hasOwnProperty: e
    }) => (t, n) => e.call(t, n))(Object.prototype),
    MD = ir("RegExp"),
    Lx = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e),
            r = {};
        Ms(n, (o, i) => {
            t(o, i, e) !== !1 && (r[i] = o)
        }), Object.defineProperties(e, r)
    },
    OD = e => {
        Lx(e, (t, n) => {
            if (Fr(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
            const r = e[n];
            if (Fr(r)) {
                if (t.enumerable = !1, "writable" in t) {
                    t.writable = !1;
                    return
                }
                t.set || (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + n + "'")
                })
            }
        })
    },
    zD = (e, t) => {
        const n = {},
            r = o => {
                o.forEach(i => {
                    n[i] = !0
                })
            };
        return $i(e) ? r(e) : r(String(e).split(t)), n
    },
    $D = () => {},
    LD = (e, t) => (e = +e, Number.isFinite(e) ? e : t),
    Jd = "abcdefghijklmnopqrstuvwxyz",
    r1 = "0123456789",
    Ix = {
        DIGIT: r1,
        ALPHA: Jd,
        ALPHA_DIGIT: Jd + Jd.toUpperCase() + r1
    },
    ID = (e = 16, t = Ix.ALPHA_DIGIT) => {
        let n = "";
        const {
            length: r
        } = t;
        for (; e--;) n += t[Math.random() * r | 0];
        return n
    };

function DD(e) {
    return !!(e && Fr(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const FD = e => {
        const t = new Array(10),
            n = (r, o) => {
                if (Qh(r)) {
                    if (t.indexOf(r) >= 0) return;
                    if (!("toJSON" in r)) {
                        t[o] = r;
                        const i = $i(r) ? [] : {};
                        return Ms(r, (a, s) => {
                            const l = n(a, o + 1);
                            !ps(l) && (i[s] = l)
                        }), t[o] = void 0, i
                    }
                }
                return r
            };
        return n(e, 0)
    },
    O = {
        isArray: $i,
        isArrayBuffer: Rx,
        isBuffer: lD,
        isFormData: yD,
        isArrayBufferView: uD,
        isString: cD,
        isNumber: Mx,
        isBoolean: dD,
        isObject: Qh,
        isPlainObject: Vl,
        isUndefined: ps,
        isDate: fD,
        isFile: pD,
        isBlob: mD,
        isRegExp: MD,
        isFunction: Fr,
        isStream: gD,
        isURLSearchParams: vD,
        isTypedArray: ED,
        isFileList: hD,
        forEach: Ms,
        merge: Bp,
        extend: SD,
        trim: bD,
        stripBOM: wD,
        inherits: xD,
        toFlatObject: kD,
        kindOf: Yh,
        kindOfTest: ir,
        endsWith: CD,
        toArray: _D,
        forEachEntry: TD,
        matchAll: PD,
        isHTMLForm: AD,
        hasOwnProperty: n1,
        hasOwnProp: n1,
        reduceDescriptors: Lx,
        freezeMethods: OD,
        toObjectSet: zD,
        toCamelCase: RD,
        noop: $D,
        toFiniteNumber: LD,
        findKey: Ox,
        global: zx,
        isContextDefined: $x,
        ALPHABET: Ix,
        generateString: ID,
        isSpecCompliantForm: DD,
        toJSONObject: FD
    };

function ae(e, t, n, r, o) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o)
}
O.inherits(ae, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: O.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const Dx = ae.prototype,
    Fx = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    Fx[e] = {
        value: e
    }
});
Object.defineProperties(ae, Fx);
Object.defineProperty(Dx, "isAxiosError", {
    value: !0
});
ae.from = (e, t, n, r, o, i) => {
    const a = Object.create(Dx);
    return O.toFlatObject(e, a, function(l) {
        return l !== Error.prototype
    }, s => s !== "isAxiosError"), ae.call(a, e.message, t, n, r, o), a.cause = e, a.name = e.name, i && Object.assign(a, i), a
};
const ND = null;

function jp(e) {
    return O.isPlainObject(e) || O.isArray(e)
}

function Nx(e) {
    return O.endsWith(e, "[]") ? e.slice(0, -2) : e
}

function o1(e, t, n) {
    return e ? e.concat(t).map(function(o, i) {
        return o = Nx(o), !n && i ? "[" + o + "]" : o
    }).join(n ? "." : "") : t
}

function BD(e) {
    return O.isArray(e) && !e.some(jp)
}
const jD = O.toFlatObject(O, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});

function $c(e, t, n) {
    if (!O.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData, n = O.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(y, x) {
        return !O.isUndefined(x[y])
    });
    const r = n.metaTokens,
        o = n.visitor || c,
        i = n.dots,
        a = n.indexes,
        l = (n.Blob || typeof Blob < "u" && Blob) && O.isSpecCompliantForm(t);
    if (!O.isFunction(o)) throw new TypeError("visitor must be a function");

    function u(m) {
        if (m === null) return "";
        if (O.isDate(m)) return m.toISOString();
        if (!l && O.isBlob(m)) throw new ae("Blob is not supported. Use a Buffer instead.");
        return O.isArrayBuffer(m) || O.isTypedArray(m) ? l && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m
    }

    function c(m, y, x) {
        let g = m;
        if (m && !x && typeof m == "object") {
            if (O.endsWith(y, "{}")) y = r ? y : y.slice(0, -2), m = JSON.stringify(m);
            else if (O.isArray(m) && BD(m) || (O.isFileList(m) || O.endsWith(y, "[]")) && (g = O.toArray(m))) return y = Nx(y), g.forEach(function(v, w) {
                !(O.isUndefined(v) || v === null) && t.append(a === !0 ? o1([y], w, i) : a === null ? y : y + "[]", u(v))
            }), !1
        }
        return jp(m) ? !0 : (t.append(o1(x, y, i), u(m)), !1)
    }
    const d = [],
        f = Object.assign(jD, {
            defaultVisitor: c,
            convertValue: u,
            isVisitable: jp
        });

    function p(m, y) {
        if (!O.isUndefined(m)) {
            if (d.indexOf(m) !== -1) throw Error("Circular reference detected in " + y.join("."));
            d.push(m), O.forEach(m, function(g, h) {
                (!(O.isUndefined(g) || g === null) && o.call(t, g, O.isString(h) ? h.trim() : h, y, f)) === !0 && p(g, y ? y.concat(h) : [h])
            }), d.pop()
        }
    }
    if (!O.isObject(e)) throw new TypeError("data must be an object");
    return p(e), t
}

function i1(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
        return t[r]
    })
}

function Zh(e, t) {
    this._pairs = [], e && $c(e, this, t)
}
const Bx = Zh.prototype;
Bx.append = function(t, n) {
    this._pairs.push([t, n])
};
Bx.toString = function(t) {
    const n = t ? function(r) {
        return t.call(this, r, i1)
    } : i1;
    return this._pairs.map(function(o) {
        return n(o[0]) + "=" + n(o[1])
    }, "").join("&")
};

function VD(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function jx(e, t, n) {
    if (!t) return e;
    const r = n && n.encode || VD,
        o = n && n.serialize;
    let i;
    if (o ? i = o(t, n) : i = O.isURLSearchParams(t) ? t.toString() : new Zh(t, n).toString(r), i) {
        const a = e.indexOf("#");
        a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i
    }
    return e
}
class HD {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }), this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        O.forEach(this.handlers, function(r) {
            r !== null && t(r)
        })
    }
}
const a1 = HD,
    Vx = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    },
    WD = typeof URLSearchParams < "u" ? URLSearchParams : Zh,
    UD = typeof FormData < "u" ? FormData : null,
    GD = typeof Blob < "u" ? Blob : null,
    KD = (() => {
        let e;
        return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u"
    })(),
    qD = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(),
    Tn = {
        isBrowser: !0,
        classes: {
            URLSearchParams: WD,
            FormData: UD,
            Blob: GD
        },
        isStandardBrowserEnv: KD,
        isStandardBrowserWebWorkerEnv: qD,
        protocols: ["http", "https", "file", "blob", "url", "data"]
    };

function XD(e, t) {
    return $c(e, new Tn.classes.URLSearchParams, Object.assign({
        visitor: function(n, r, o, i) {
            return Tn.isNode && O.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments)
        }
    }, t))
}

function YD(e) {
    return O.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}

function QD(e) {
    const t = {},
        n = Object.keys(e);
    let r;
    const o = n.length;
    let i;
    for (r = 0; r < o; r++) i = n[r], t[i] = e[i];
    return t
}

function Hx(e) {
    function t(n, r, o, i) {
        let a = n[i++];
        const s = Number.isFinite(+a),
            l = i >= n.length;
        return a = !a && O.isArray(o) ? o.length : a, l ? (O.hasOwnProp(o, a) ? o[a] = [o[a], r] : o[a] = r, !s) : ((!o[a] || !O.isObject(o[a])) && (o[a] = []), t(n, r, o[a], i) && O.isArray(o[a]) && (o[a] = QD(o[a])), !s)
    }
    if (O.isFormData(e) && O.isFunction(e.entries)) {
        const n = {};
        return O.forEachEntry(e, (r, o) => {
            t(YD(r), o, n, 0)
        }), n
    }
    return null
}
const ZD = {
    "Content-Type": void 0
};

function JD(e, t, n) {
    if (O.isString(e)) try {
        return (t || JSON.parse)(e), O.trim(e)
    } catch (r) {
        if (r.name !== "SyntaxError") throw r
    }
    return (n || JSON.stringify)(e)
}
const Lc = {
    transitional: Vx,
    adapter: ["xhr", "http"],
    transformRequest: [function(t, n) {
        const r = n.getContentType() || "",
            o = r.indexOf("application/json") > -1,
            i = O.isObject(t);
        if (i && O.isHTMLForm(t) && (t = new FormData(t)), O.isFormData(t)) return o && o ? JSON.stringify(Hx(t)) : t;
        if (O.isArrayBuffer(t) || O.isBuffer(t) || O.isStream(t) || O.isFile(t) || O.isBlob(t)) return t;
        if (O.isArrayBufferView(t)) return t.buffer;
        if (O.isURLSearchParams(t)) return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
        let s;
        if (i) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1) return XD(t, this.formSerializer).toString();
            if ((s = O.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const l = this.env && this.env.FormData;
                return $c(s ? {
                    "files[]": t
                } : t, l && new l, this.formSerializer)
            }
        }
        return i || o ? (n.setContentType("application/json", !1), JD(t)) : t
    }],
    transformResponse: [function(t) {
        const n = this.transitional || Lc.transitional,
            r = n && n.forcedJSONParsing,
            o = this.responseType === "json";
        if (t && O.isString(t) && (r && !this.responseType || o)) {
            const a = !(n && n.silentJSONParsing) && o;
            try {
                return JSON.parse(t)
            } catch (s) {
                if (a) throw s.name === "SyntaxError" ? ae.from(s, ae.ERR_BAD_RESPONSE, this, null, this.response) : s
            }
        }
        return t
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: Tn.classes.FormData,
        Blob: Tn.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*"
        }
    }
};
O.forEach(["delete", "get", "head"], function(t) {
    Lc.headers[t] = {}
});
O.forEach(["post", "put", "patch"], function(t) {
    Lc.headers[t] = O.merge(ZD)
});
const Jh = Lc,
    eF = O.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    tF = e => {
        const t = {};
        let n, r, o;
        return e && e.split(`
`).forEach(function(a) {
            o = a.indexOf(":"), n = a.substring(0, o).trim().toLowerCase(), r = a.substring(o + 1).trim(), !(!n || t[n] && eF[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
        }), t
    },
    s1 = Symbol("internals");

function ea(e) {
    return e && String(e).trim().toLowerCase()
}

function Hl(e) {
    return e === !1 || e == null ? e : O.isArray(e) ? e.map(Hl) : String(e)
}

function nF(e) {
    const t = Object.create(null),
        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e);) t[r[1]] = r[2];
    return t
}

function rF(e) {
    return /^[-_a-zA-Z]+$/.test(e.trim())
}

function ef(e, t, n, r, o) {
    if (O.isFunction(r)) return r.call(this, t, n);
    if (o && (t = n), !!O.isString(t)) {
        if (O.isString(r)) return t.indexOf(r) !== -1;
        if (O.isRegExp(r)) return r.test(t)
    }
}

function oF(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}

function iF(e, t) {
    const n = O.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(e, r + n, {
            value: function(o, i, a) {
                return this[r].call(this, t, o, i, a)
            },
            configurable: !0
        })
    })
}
let Ic = class {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const o = this;

        function i(s, l, u) {
            const c = ea(l);
            if (!c) throw new Error("header name must be a non-empty string");
            const d = O.findKey(o, c);
            (!d || o[d] === void 0 || u === !0 || u === void 0 && o[d] !== !1) && (o[d || l] = Hl(s))
        }
        const a = (s, l) => O.forEach(s, (u, c) => i(u, c, l));
        return O.isPlainObject(t) || t instanceof this.constructor ? a(t, n) : O.isString(t) && (t = t.trim()) && !rF(t) ? a(tF(t), n) : t != null && i(n, t, r), this
    }
    get(t, n) {
        if (t = ea(t), t) {
            const r = O.findKey(this, t);
            if (r) {
                const o = this[r];
                if (!n) return o;
                if (n === !0) return nF(o);
                if (O.isFunction(n)) return n.call(this, o, r);
                if (O.isRegExp(n)) return n.exec(o);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = ea(t), t) {
            const r = O.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || ef(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let o = !1;

        function i(a) {
            if (a = ea(a), a) {
                const s = O.findKey(r, a);
                s && (!n || ef(r, r[s], s, n)) && (delete r[s], o = !0)
            }
        }
        return O.isArray(t) ? t.forEach(i) : i(t), o
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length,
            o = !1;
        for (; r--;) {
            const i = n[r];
            (!t || ef(this, this[i], i, t, !0)) && (delete this[i], o = !0)
        }
        return o
    }
    normalize(t) {
        const n = this,
            r = {};
        return O.forEach(this, (o, i) => {
            const a = O.findKey(r, i);
            if (a) {
                n[a] = Hl(o), delete n[i];
                return
            }
            const s = t ? oF(i) : String(i).trim();
            s !== i && delete n[i], n[s] = Hl(o), r[s] = !0
        }), this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return O.forEach(this, (r, o) => {
            r != null && r !== !1 && (n[o] = t && O.isArray(r) ? r.join(", ") : r)
        }), n
    }[Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(o => r.set(o)), r
    }
    static accessor(t) {
        const r = (this[s1] = this[s1] = {
                accessors: {}
            }).accessors,
            o = this.prototype;

        function i(a) {
            const s = ea(a);
            r[s] || (iF(o, a), r[s] = !0)
        }
        return O.isArray(t) ? t.forEach(i) : i(t), this
    }
};
Ic.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
O.freezeMethods(Ic.prototype);
O.freezeMethods(Ic);
const Qn = Ic;

function tf(e, t) {
    const n = this || Jh,
        r = t || n,
        o = Qn.from(r.headers);
    let i = r.data;
    return O.forEach(e, function(s) {
        i = s.call(n, i, o.normalize(), t ? t.status : void 0)
    }), o.normalize(), i
}

function Wx(e) {
    return !!(e && e.__CANCEL__)
}

function Os(e, t, n) {
    ae.call(this, e ? ? "canceled", ae.ERR_CANCELED, t, n), this.name = "CanceledError"
}
O.inherits(Os, ae, {
    __CANCEL__: !0
});

function aF(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new ae("Request failed with status code " + n.status, [ae.ERR_BAD_REQUEST, ae.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n))
}
const sF = Tn.isStandardBrowserEnv ? function() {
    return {
        write: function(n, r, o, i, a, s) {
            const l = [];
            l.push(n + "=" + encodeURIComponent(r)), O.isNumber(o) && l.push("expires=" + new Date(o).toGMTString()), O.isString(i) && l.push("path=" + i), O.isString(a) && l.push("domain=" + a), s === !0 && l.push("secure"), document.cookie = l.join("; ")
        },
        read: function(n) {
            const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
            return r ? decodeURIComponent(r[3]) : null
        },
        remove: function(n) {
            this.write(n, "", Date.now() - 864e5)
        }
    }
}() : function() {
    return {
        write: function() {},
        read: function() {
            return null
        },
        remove: function() {}
    }
}();

function lF(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}

function uF(e, t) {
    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
}

function Ux(e, t) {
    return e && !lF(t) ? uF(e, t) : t
}
const cF = Tn.isStandardBrowserEnv ? function() {
    const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
    let r;

    function o(i) {
        let a = i;
        return t && (n.setAttribute("href", a), a = n.href), n.setAttribute("href", a), {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
        }
    }
    return r = o(window.location.href),
        function(a) {
            const s = O.isString(a) ? o(a) : a;
            return s.protocol === r.protocol && s.host === r.host
        }
}() : function() {
    return function() {
        return !0
    }
}();

function dF(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}

function fF(e, t) {
    e = e || 10;
    const n = new Array(e),
        r = new Array(e);
    let o = 0,
        i = 0,
        a;
    return t = t !== void 0 ? t : 1e3,
        function(l) {
            const u = Date.now(),
                c = r[i];
            a || (a = u), n[o] = l, r[o] = u;
            let d = i,
                f = 0;
            for (; d !== o;) f += n[d++], d = d % e;
            if (o = (o + 1) % e, o === i && (i = (i + 1) % e), u - a < t) return;
            const p = c && u - c;
            return p ? Math.round(f * 1e3 / p) : void 0
        }
}

function l1(e, t) {
    let n = 0;
    const r = fF(50, 250);
    return o => {
        const i = o.loaded,
            a = o.lengthComputable ? o.total : void 0,
            s = i - n,
            l = r(s),
            u = i <= a;
        n = i;
        const c = {
            loaded: i,
            total: a,
            progress: a ? i / a : void 0,
            bytes: s,
            rate: l || void 0,
            estimated: l && a && u ? (a - i) / l : void 0,
            event: o
        };
        c[t ? "download" : "upload"] = !0, e(c)
    }
}
const pF = typeof XMLHttpRequest < "u",
    mF = pF && function(e) {
        return new Promise(function(n, r) {
            let o = e.data;
            const i = Qn.from(e.headers).normalize(),
                a = e.responseType;
            let s;

            function l() {
                e.cancelToken && e.cancelToken.unsubscribe(s), e.signal && e.signal.removeEventListener("abort", s)
            }
            O.isFormData(o) && (Tn.isStandardBrowserEnv || Tn.isStandardBrowserWebWorkerEnv) && i.setContentType(!1);
            let u = new XMLHttpRequest;
            if (e.auth) {
                const p = e.auth.username || "",
                    m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                i.set("Authorization", "Basic " + btoa(p + ":" + m))
            }
            const c = Ux(e.baseURL, e.url);
            u.open(e.method.toUpperCase(), jx(c, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;

            function d() {
                if (!u) return;
                const p = Qn.from("getAllResponseHeaders" in u && u.getAllResponseHeaders()),
                    y = {
                        data: !a || a === "text" || a === "json" ? u.responseText : u.response,
                        status: u.status,
                        statusText: u.statusText,
                        headers: p,
                        config: e,
                        request: u
                    };
                aF(function(g) {
                    n(g), l()
                }, function(g) {
                    r(g), l()
                }, y), u = null
            }
            if ("onloadend" in u ? u.onloadend = d : u.onreadystatechange = function() {
                    !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(d)
                }, u.onabort = function() {
                    u && (r(new ae("Request aborted", ae.ECONNABORTED, e, u)), u = null)
                }, u.onerror = function() {
                    r(new ae("Network Error", ae.ERR_NETWORK, e, u)), u = null
                }, u.ontimeout = function() {
                    let m = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
                    const y = e.transitional || Vx;
                    e.timeoutErrorMessage && (m = e.timeoutErrorMessage), r(new ae(m, y.clarifyTimeoutError ? ae.ETIMEDOUT : ae.ECONNABORTED, e, u)), u = null
                }, Tn.isStandardBrowserEnv) {
                const p = (e.withCredentials || cF(c)) && e.xsrfCookieName && sF.read(e.xsrfCookieName);
                p && i.set(e.xsrfHeaderName, p)
            }
            o === void 0 && i.setContentType(null), "setRequestHeader" in u && O.forEach(i.toJSON(), function(m, y) {
                u.setRequestHeader(y, m)
            }), O.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), a && a !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", l1(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", l1(e.onUploadProgress)), (e.cancelToken || e.signal) && (s = p => {
                u && (r(!p || p.type ? new Os(null, e, u) : p), u.abort(), u = null)
            }, e.cancelToken && e.cancelToken.subscribe(s), e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
            const f = dF(c);
            if (f && Tn.protocols.indexOf(f) === -1) {
                r(new ae("Unsupported protocol " + f + ":", ae.ERR_BAD_REQUEST, e));
                return
            }
            u.send(o || null)
        })
    },
    Wl = {
        http: ND,
        xhr: mF
    };
O.forEach(Wl, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
});
const hF = {
    getAdapter: e => {
        e = O.isArray(e) ? e : [e];
        const {
            length: t
        } = e;
        let n, r;
        for (let o = 0; o < t && (n = e[o], !(r = O.isString(n) ? Wl[n.toLowerCase()] : n)); o++);
        if (!r) throw r === !1 ? new ae(`Adapter ${n} is not supported by the environment`, "ERR_NOT_SUPPORT") : new Error(O.hasOwnProp(Wl, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`);
        if (!O.isFunction(r)) throw new TypeError("adapter is not a function");
        return r
    },
    adapters: Wl
};

function nf(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Os(null, e)
}

function u1(e) {
    return nf(e), e.headers = Qn.from(e.headers), e.data = tf.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), hF.getAdapter(e.adapter || Jh.adapter)(e).then(function(r) {
        return nf(e), r.data = tf.call(e, e.transformResponse, r), r.headers = Qn.from(r.headers), r
    }, function(r) {
        return Wx(r) || (nf(e), r && r.response && (r.response.data = tf.call(e, e.transformResponse, r.response), r.response.headers = Qn.from(r.response.headers))), Promise.reject(r)
    })
}
const c1 = e => e instanceof Qn ? e.toJSON() : e;

function Pi(e, t) {
    t = t || {};
    const n = {};

    function r(u, c, d) {
        return O.isPlainObject(u) && O.isPlainObject(c) ? O.merge.call({
            caseless: d
        }, u, c) : O.isPlainObject(c) ? O.merge({}, c) : O.isArray(c) ? c.slice() : c
    }

    function o(u, c, d) {
        if (O.isUndefined(c)) {
            if (!O.isUndefined(u)) return r(void 0, u, d)
        } else return r(u, c, d)
    }

    function i(u, c) {
        if (!O.isUndefined(c)) return r(void 0, c)
    }

    function a(u, c) {
        if (O.isUndefined(c)) {
            if (!O.isUndefined(u)) return r(void 0, u)
        } else return r(void 0, c)
    }

    function s(u, c, d) {
        if (d in t) return r(u, c);
        if (d in e) return r(void 0, u)
    }
    const l = {
        url: i,
        method: i,
        data: i,
        baseURL: a,
        transformRequest: a,
        transformResponse: a,
        paramsSerializer: a,
        timeout: a,
        timeoutMessage: a,
        withCredentials: a,
        adapter: a,
        responseType: a,
        xsrfCookieName: a,
        xsrfHeaderName: a,
        onUploadProgress: a,
        onDownloadProgress: a,
        decompress: a,
        maxContentLength: a,
        maxBodyLength: a,
        beforeRedirect: a,
        transport: a,
        httpAgent: a,
        httpsAgent: a,
        cancelToken: a,
        socketPath: a,
        responseEncoding: a,
        validateStatus: s,
        headers: (u, c) => o(c1(u), c1(c), !0)
    };
    return O.forEach(Object.keys(e).concat(Object.keys(t)), function(c) {
        const d = l[c] || o,
            f = d(e[c], t[c], c);
        O.isUndefined(f) && d !== s || (n[c] = f)
    }), n
}
const Gx = "1.3.4",
    eg = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
    eg[e] = function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
});
const d1 = {};
eg.transitional = function(t, n, r) {
    function o(i, a) {
        return "[Axios v" + Gx + "] Transitional option '" + i + "'" + a + (r ? ". " + r : "")
    }
    return (i, a, s) => {
        if (t === !1) throw new ae(o(a, " has been removed" + (n ? " in " + n : "")), ae.ERR_DEPRECATED);
        return n && !d1[a] && (d1[a] = !0, console.warn(o(a, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(i, a, s) : !0
    }
};

function gF(e, t, n) {
    if (typeof e != "object") throw new ae("options must be an object", ae.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let o = r.length;
    for (; o-- > 0;) {
        const i = r[o],
            a = t[i];
        if (a) {
            const s = e[i],
                l = s === void 0 || a(s, i, e);
            if (l !== !0) throw new ae("option " + i + " must be " + l, ae.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0) throw new ae("Unknown option " + i, ae.ERR_BAD_OPTION)
    }
}
const Vp = {
        assertOptions: gF,
        validators: eg
    },
    pr = Vp.validators;
let Lu = class {
    constructor(t) {
        this.defaults = t, this.interceptors = {
            request: new a1,
            response: new a1
        }
    }
    request(t, n) {
        typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Pi(this.defaults, n);
        const {
            transitional: r,
            paramsSerializer: o,
            headers: i
        } = n;
        r !== void 0 && Vp.assertOptions(r, {
            silentJSONParsing: pr.transitional(pr.boolean),
            forcedJSONParsing: pr.transitional(pr.boolean),
            clarifyTimeoutError: pr.transitional(pr.boolean)
        }, !1), o !== void 0 && Vp.assertOptions(o, {
            encode: pr.function,
            serialize: pr.function
        }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let a;
        a = i && O.merge(i.common, i[n.method]), a && O.forEach(["delete", "get", "head", "post", "put", "patch", "common"], m => {
            delete i[m]
        }), n.headers = Qn.concat(a, i);
        const s = [];
        let l = !0;
        this.interceptors.request.forEach(function(y) {
            typeof y.runWhen == "function" && y.runWhen(n) === !1 || (l = l && y.synchronous, s.unshift(y.fulfilled, y.rejected))
        });
        const u = [];
        this.interceptors.response.forEach(function(y) {
            u.push(y.fulfilled, y.rejected)
        });
        let c, d = 0,
            f;
        if (!l) {
            const m = [u1.bind(this), void 0];
            for (m.unshift.apply(m, s), m.push.apply(m, u), f = m.length, c = Promise.resolve(n); d < f;) c = c.then(m[d++], m[d++]);
            return c
        }
        f = s.length;
        let p = n;
        for (d = 0; d < f;) {
            const m = s[d++],
                y = s[d++];
            try {
                p = m(p)
            } catch (x) {
                y.call(this, x);
                break
            }
        }
        try {
            c = u1.call(this, p)
        } catch (m) {
            return Promise.reject(m)
        }
        for (d = 0, f = u.length; d < f;) c = c.then(u[d++], u[d++]);
        return c
    }
    getUri(t) {
        t = Pi(this.defaults, t);
        const n = Ux(t.baseURL, t.url);
        return jx(n, t.params, t.paramsSerializer)
    }
};
O.forEach(["delete", "get", "head", "options"], function(t) {
    Lu.prototype[t] = function(n, r) {
        return this.request(Pi(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
});
O.forEach(["post", "put", "patch"], function(t) {
    function n(r) {
        return function(i, a, s) {
            return this.request(Pi(s || {}, {
                method: t,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: i,
                data: a
            }))
        }
    }
    Lu.prototype[t] = n(), Lu.prototype[t + "Form"] = n(!0)
});
const Ul = Lu;
let yF = class Kx {
    constructor(t) {
        if (typeof t != "function") throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(i) {
            n = i
        });
        const r = this;
        this.promise.then(o => {
            if (!r._listeners) return;
            let i = r._listeners.length;
            for (; i-- > 0;) r._listeners[i](o);
            r._listeners = null
        }), this.promise.then = o => {
            let i;
            const a = new Promise(s => {
                r.subscribe(s), i = s
            }).then(o);
            return a.cancel = function() {
                r.unsubscribe(i)
            }, a
        }, t(function(i, a, s) {
            r.reason || (r.reason = new Os(i, a, s), n(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners) return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    static source() {
        let t;
        return {
            token: new Kx(function(o) {
                t = o
            }),
            cancel: t
        }
    }
};
const vF = yF;

function bF(e) {
    return function(n) {
        return e.apply(null, n)
    }
}

function SF(e) {
    return O.isObject(e) && e.isAxiosError === !0
}
const Hp = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(Hp).forEach(([e, t]) => {
    Hp[t] = e
});
const wF = Hp;

function qx(e) {
    const t = new Ul(e),
        n = Px(Ul.prototype.request, t);
    return O.extend(n, Ul.prototype, t, {
        allOwnKeys: !0
    }), O.extend(n, t, null, {
        allOwnKeys: !0
    }), n.create = function(o) {
        return qx(Pi(e, o))
    }, n
}
const He = qx(Jh);
He.Axios = Ul;
He.CanceledError = Os;
He.CancelToken = vF;
He.isCancel = Wx;
He.VERSION = Gx;
He.toFormData = $c;
He.AxiosError = ae;
He.Cancel = He.CanceledError;
He.all = function(t) {
    return Promise.all(t)
};
He.spread = bF;
He.isAxiosError = SF;
He.mergeConfig = Pi;
He.AxiosHeaders = Qn;
He.formToJSON = e => Hx(O.isHTMLForm(e) ? new FormData(e) : e);
He.HttpStatusCode = wF;
He.default = He;
const Xx = He,
    {
        Axios: pN,
        AxiosError: mN,
        CanceledError: xF,
        isCancel: hN,
        CancelToken: gN,
        VERSION: yN,
        all: vN,
        Cancel: bN,
        isAxiosError: SN,
        spread: wN,
        toFormData: xN,
        AxiosHeaders: kN,
        HttpStatusCode: CN,
        formToJSON: _N,
        mergeConfig: EN
    } = Xx,
    kF = Xx.create({
        baseURL: "https://api.rawg.io/api",
        params: {
            key: "c7b18323a47d40c394ea5b019646b1f5"
        }
    }),
    CF = (e, t, n) => {
        const [r, o] = b.useState([]), [i, a] = b.useState(""), [s, l] = b.useState(!1);
        return b.useEffect(() => {
            const u = new AbortController;
            return l(!0), kF.get(e, {
                signal: u.signal,
                ...t
            }).then(c => {
                o(c.data.results), l(!1)
            }).catch(c => {
                c instanceof xF || (a(c.message), l(!1))
            }), () => u.abort()
        }, n ? [...n] : []), {
            data: r,
            error: i,
            isLoading: s
        }
    },
    _F = e => {
        var t, n;
        return CF("/games", {
            params: {
                genres: (t = e.genre) == null ? void 0 : t.id,
                platforms: (n = e.platform) == null ? void 0 : n.id,
                ordering: e.sortOrder,
                search: e.searchText
            }
        }, [e])
    },
    EF = "/assets/no-image-placeholder-6f3882e0.webp",
    Yx = e => {
        if (!e) return EF;
        const t = "media/",
            n = e.indexOf(t) + t.length;
        return e.slice(0, n) + "crop/600/400/" + e.slice(n)
    },
    TF = ({
        score: e
    }) => {
        let t = e > 75 ? "green" : e > 60 ? "yellow" : "";
        return _(ux, {
            colorScheme: t,
            fontSize: "14px",
            paddingX: 2,
            borderRadius: "4px",
            children: e
        })
    },
    PF = "/assets/bulls-eye-d37f7fe5.webp",
    AF = "data:image/webp;base64,UklGRtoLAABXRUJQVlA4WAoAAAAQAAAAnwAAnwAAQUxQSDwEAAABoMIAFNvGejIw6AgyuhWUoNyKgiKjSiYpMoiKosJWDbrRcTPo/p6mjYpWlNu7sL29995R9975Knqkd37P8Xv6MCImAMI13nKwUCi0J01QqeM9w+9+6nX04Yyiz9EWZRxAwpKliSNIOuvoIYXUB9Twggx/VUIKGT0d/MqBR1RQZkFHA8M8VUsB/Tx4QwFHmNCVz+aqyGcuMGFOPDjP9Uy+A1yYEi/F5olnVrkq4sENLkyK57EdES/Hdl683WwfxTMXuHCbdHCDLSmex5YRL8fmipdkaxHPqnLlxIMXXK58w1wZ+TwuW74jXHHxjBzTRkQ8yDJ9BO2cVkAr0ykFHGFyFFDm2axTwBjPCMhvI29BAWWmtHwW8k4b8h1hKoH8Y0wd8jnInJbvBtOmJZ2xG5knQfwbXA/Fc5F7RDqjqp1+ZH8oXBb5FwzRLAxiTLRngchJ1o+BvCHYEQxok1guBnUhJpSNwa1mRdpdDRBif0ye2AIGvLhbmG0LGPxyRhKrgjX54oAlxbYK1upa2TUliC9gLY95GQPMyLZoLGXbTsbNZt2MY++ORkJk2wLWeuXF2Ow6+l57UT7imKGwrYIhPuZFa8+qYLhX87VWV8HQL9bYCxTwfE0No4inuKyISVdEIXdz1P36aX127NOz0VJv4WCLk4xbdT+SRymfMcTG0Pf67Kcbl3t/PdLqpjIop0MWXUclnqcyZ1CLCybRDdTjbpp2VKRLYqEmW0luqCJL4aAqbYp3qqjWEdioyn4gvKaLOME2VGU/EB5UxaRJcVcTG3Eg3IaKfB8DynZF9JlAOqSFtYsZIB7TwqsoEG9DPZ5O0DiKQPyJpFsV+NAi8HSBFdPfNWXgDX9PtYF5P+aYOtD0sQ31mfeRVMgNH45CFny0qKddIRs/ZnRrB7z/YT76GFJI0cc1hTRp5xn4vKePhJ+n6ugA5fwEyukE3QyngfCuHuYvukB6TQ+dQDykh3mXyNMDYhNNtybW6khaNIH9JElV4G6KyH+qKFPAXVVghKJXFw5Fuy7yFHFd/EkB79TTq4pTJI4q8iTGlCZsEuhVRLWOxlZEEYin9GBRHVRDDqjrtNAJ9AUVTDcDozkj3/vOOmC1hZsuZQ3gLkhWTEcgiMOCXYWA3gjKZghhX0CMG3yVYa+jaVt6PnwwEQyAfoaV+32dbsyALaOvw6cUFMhvUqzc7+tIW/DjxunQ2agLCkRP+3hdbEtHgLQzbNANDIBd2qpyseBGwTAMIE6/DplCgACiHX1ebrcB7CfC5c9ABTd6WjsA6dPhUQgpgERxLSTc0AKwTrwKBSvEAKC5uFJzDyHcDcNqu7pSW27IbWk1F1/VznuQMtrcVrz6aiV481ExtrYSabet86fi6dP3779+/z4AFy2Q3R1hGmkC6Q1IdFycpnr4ZwpUaICRyBVKDz8uf29j8uH5U7k46NEAMCDwVlA4IHgHAADQLwCdASqgAKAAPpFAmUgltKghLTcKspASCWIAzupZ3B6C/t/7Zzg3VPiL2VeTslLr+8qdV/zAP1u6eHmF84X+4/pL7k/QA/qvUOegB/Cv8p6aXsZ/u2614f6In1yf8dva0Ah5ljbWR9wfd85zhfhUOW1Xh+/6FRof/vcPUh1BEhZzHWsbmQh/GacBYFuLol1ipwV+CLX4oHAgrby/z/gXPkP9J4c3xp2zGatn6imFuWnZekyUdUCXZBEyXl2USSD/jglwb8jzRKDCOopi5Q6KnQCc2f+mB9Bi1UBmkFE9Kv67zmfmFLLu/gZMyy/ei0Fp8ZQpLIy8mCTwEQpY9FnP+3HAnKdbOiyaj3j40GYFo55YRsfy2FiZ7ykZOZmAjTwsD+JjZx3IvZzeeUWfVe5NPUkKyvXtFJpQVYxgEK0s1pStE8SjgzdT9tYZ4utvzH9IUmOo1MJn2kkgrTMW8aNGcoTS7oO/Hqy7a4LEdhThbepB01V/nTP1UQ9Di5ttnvY4sGwpFkmAAP7uQxbunCbv3SI+AIn3R8TqVjpsFFwCpb/hkPxu/KukYLSxf++mpB6W7Q28fk3IoV6WUHDK5fpNbf8DUk+DLvAmesB7LzDERww0DXSBQyy/OUNgvim26ZtdmqVTr58fgufsMKJBGoQjCIR0s1Q3dYu3/ddm/XWcvwiSSh5jPwEsuAAD5ug1xxQEysNygvol1L7do7dNGp89vGtlWCL265zjDg7qYEvSZcP6EnsLO52v7ANADcit01HxxNfg8yqbNRQxRDtlyGQAAARljEjP48pWn7Vl1M2vKEDcoGmDj93kBxY2AYBcQNMdPHSlfKy7xoeI5diX9t3CHT85bJXXlAB8S3mYy/AAAKv1xiffhzbSI36p9One1h4TIuROrRnqh+lfD2st+4Yx5dtqN5Z2VukJeTFoRsf35oLvNqMwMgdYyILJXkSf/M6t74owIG0zvxsp8psRZZxw0HrnTGzk2Jmg5TE6Ic2/xdVoGoNWy/3Cd53QPK590R+Auf4RBgAPL1G3jcgfYCi2CUKwDWf5WhIoXSRWv5jqu+VXEYhi9SMnLuTHKrRc2mu3lj4zx3UqNjAd7FmKplpag2x4p3zp+Z7fkW2o5ThTcav6uKzTIZh7vuPpB9/ZCZeXZtWfeDTsKYQL/2VrYJEzdbidMv6BB55xX95lqYU+GruSbhdMPiZRRcXCoZhLsHDuzNnN6LN09tzhzS8EB7rU1SSVeSRKBEQZu44YL9uOmhnLSKqmm8l9AXVJVacevYBJI2xs4F3nCSxo3pQVTiAfxpwX07OLC6DWvQx2H9N2teF3CtzNLgRbghtKWflqyvbWzHv1TdhH6VybEt9TnpsukMnrjjpH04dAHUCfs7fNUfqMLGgR4hVyVs8/dCWoxRbFeS4LhevCMcgJ/a8Sx3YwlV13FOlcq+hqcgbOj8cMvwjXhTdbaF+Cuqc5Vn5KFR5nYYN2UtM01hVkuc+tnU4NBGRMSJGef/sEfto71A+QgEwY8P0ev3cAoMjtJURjfGYiwJ9653CcCbVxYPUApI8Lb8FHavM8/HqSALIk3R9jrofFo4qX+LY7kHBS0I4KtVqdfYjNskRhY/PcOBZvMmwseGbHg43DOu/8y1pxIzB99nZAtcI1SbLmAX28h4ZyPf74GNDmLI5cCRnTBVqBiw5Lk2U8xeSVtglLZxgxPktmCcsV2AKHRbYsJ3OgxntvHOIWpsLTkjJDr00CoxQF2n+9RcmjaVDExIdBfOUHx0hkk7YFQaX0sl8yuslJ3stNIQJtV4Ti9OhE5efYBhGZvfn8TYyS9IDBXEriV/B9Zb/4i+rNC7gVTPc5myeNH6pur//oFiPwvf5Tad4RS+uCuNMNoC8s+vw7W0wRl4mLTTMb1DRP1FbuuBF0d0MMAmMzwEV2v0scIshuRZ0+gPXImdefPSzL10+Vk5kkAhOVMy3k53yCY7+dM8w6og35BH8cG4yoGMfs6tW2ojGIkhQTyJxNBET5KbdUrry8q1YoTInRmXzLfsMnESnfdOZttMmhrUALj2cEH4/yTR8xkocNLwjJsXVxXXck0TU1RF2sUK9cotX9bpxMzJeovJxwpNvaDiXPKK9Rq73gdHN67Ure8/zClVZIRXR7YQwZL4nfpPk4Zy7M9trXv7zuIH/4BzsyebIsa9Eu5CMH8Lqbq2nGMG+iat0AfcoP6uzafgKG9j+z/Lt+xFVc5tL29gUmFDhufRm0YolO1tJKRqPcHgYtt/hAbXQhoMIjSciieecO82prFObKK6fiw/OqOrc1/zfAgJV3O0t1aHGZZmhkw41o29afMCNbTLmp4DAFye8WycuUD6Hm7vBStRrTDl0fCaK5qWqOCwQuOVK0EML+Kujm0i/C3dcnm+8DJSZHGJbrFtOek7VsE47zy6Xlm6pn7ggO1f668YwSF+IFebpFzi0jK6/0TRU5qN/7twfblkgk8ZnXVLrG8hJ24vVlIuYFlGZtY1RgILsWKZCvY79FIwWXi3VgW9smH2ZES+5GdyPNBTSH3/QPtR+C0AAA",
    RF = "/assets/meh-e338422f.webp",
    MF = ({
        rating: e
    }) => e < 3 ? null : _(_s, { ...{
            3: {
                src: RF,
                alt: "meh",
                boxSize: "25px"
            },
            4: {
                src: AF,
                alt: "recommended",
                boxSize: "25px"
            },
            5: {
                src: PF,
                alt: "exceptional",
                boxSize: "35px"
            }
        }[e],
        marginTop: 1
    });
var Qx = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0
    },
    f1 = Rt.createContext && Rt.createContext(Qx),
    zr = globalThis && globalThis.__assign || function() {
        return zr = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
                t = arguments[n];
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            return e
        }, zr.apply(this, arguments)
    },
    OF = globalThis && globalThis.__rest || function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
        return n
    };

function Zx(e) {
    return e && e.map(function(t, n) {
        return Rt.createElement(t.tag, zr({
            key: n
        }, t.attr), Zx(t.child))
    })
}

function yn(e) {
    return function(t) {
        return Rt.createElement(zF, zr({
            attr: zr({}, e.attr)
        }, t), Zx(e.child))
    }
}

function zF(e) {
    var t = function(n) {
        var r = e.attr,
            o = e.size,
            i = e.title,
            a = OF(e, ["attr", "size", "title"]),
            s = o || n.size || "1em",
            l;
        return n.className && (l = n.className), e.className && (l = (l ? l + " " : "") + e.className), Rt.createElement("svg", zr({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, n.attr, r, a, {
            className: l,
            style: zr(zr({
                color: e.color || n.color
            }, n.style), e.style),
            height: s,
            width: s,
            xmlns: "http://www.w3.org/2000/svg"
        }), i && Rt.createElement("title", null, i), e.children)
    };
    return f1 !== void 0 ? Rt.createElement(f1.Consumer, null, function(n) {
        return t(n)
    }) : t(Qx)
}

function $F(e) {
    return yn({
        tag: "svg",
        attr: {
            viewBox: "0 0 576 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"
            }
        }]
    })(e)
}

function LF(e) {
    return yn({
        tag: "svg",
        attr: {
            viewBox: "0 0 384 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
            }
        }]
    })(e)
}

function IF(e) {
    return yn({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5.2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4.2-.8.7-.6 1.1.3 1.3 2.3 1.1 3.4 1.7zm-21.9 1.7c1.2 0 2-1.2 3-1.7 1.1-.6 3.1-.4 3.5-1.6.2-.4-.2-.9-.6-1.1-1.6-.9-3.8-.6-5.5.1-1.3.6-3.4 1.5-3.2 2.9.1 1 1.8 1.5 2.8 1.4zM420 403.8c-3.6-4-5.3-11.6-7.2-19.7-1.8-8.1-3.9-16.8-10.5-22.4-1.3-1.1-2.6-2.1-4-2.9-1.3-.8-2.7-1.5-4.1-2 9.2-27.3 5.6-54.5-3.7-79.1-11.4-30.1-31.3-56.4-46.5-74.4-17.1-21.5-33.7-41.9-33.4-72C311.1 85.4 315.7.1 234.8 0 132.4-.2 158 103.4 156.9 135.2c-1.7 23.4-6.4 41.8-22.5 64.7-18.9 22.5-45.5 58.8-58.1 96.7-6 17.9-8.8 36.1-6.2 53.3-6.5 5.8-11.4 14.7-16.6 20.2-4.2 4.3-10.3 5.9-17 8.3s-14 6-18.5 14.5c-2.1 3.9-2.8 8.1-2.8 12.4 0 3.9.6 7.9 1.2 11.8 1.2 8.1 2.5 15.7.8 20.8-5.2 14.4-5.9 24.4-2.2 31.7 3.8 7.3 11.4 10.5 20.1 12.3 17.3 3.6 40.8 2.7 59.3 12.5 19.8 10.4 39.9 14.1 55.9 10.4 11.6-2.6 21.1-9.6 25.9-20.2 12.5-.1 26.3-5.4 48.3-6.6 14.9-1.2 33.6 5.3 55.1 4.1.6 2.3 1.4 4.6 2.5 6.7v.1c8.3 16.7 23.8 24.3 40.3 23 16.6-1.3 34.1-11 48.3-27.9 13.6-16.4 36-23.2 50.9-32.2 7.4-4.5 13.4-10.1 13.9-18.3.4-8.2-4.4-17.3-15.5-29.7zM223.7 87.3c9.8-22.2 34.2-21.8 44-.4 6.5 14.2 3.6 30.9-4.3 40.4-1.6-.8-5.9-2.6-12.6-4.9 1.1-1.2 3.1-2.7 3.9-4.6 4.8-11.8-.2-27-9.1-27.3-7.3-.5-13.9 10.8-11.8 23-4.1-2-9.4-3.5-13-4.4-1-6.9-.3-14.6 2.9-21.8zM183 75.8c10.1 0 20.8 14.2 19.1 33.5-3.5 1-7.1 2.5-10.2 4.6 1.2-8.9-3.3-20.1-9.6-19.6-8.4.7-9.8 21.2-1.8 28.1 1 .8 1.9-.2-5.9 5.5-15.6-14.6-10.5-52.1 8.4-52.1zm-13.6 60.7c6.2-4.6 13.6-10 14.1-10.5 4.7-4.4 13.5-14.2 27.9-14.2 7.1 0 15.6 2.3 25.9 8.9 6.3 4.1 11.3 4.4 22.6 9.3 8.4 3.5 13.7 9.7 10.5 18.2-2.6 7.1-11 14.4-22.7 18.1-11.1 3.6-19.8 16-38.2 14.9-3.9-.2-7-1-9.6-2.1-8-3.5-12.2-10.4-20-15-8.6-4.8-13.2-10.4-14.7-15.3-1.4-4.9 0-9 4.2-12.3zm3.3 334c-2.7 35.1-43.9 34.4-75.3 18-29.9-15.8-68.6-6.5-76.5-21.9-2.4-4.7-2.4-12.7 2.6-26.4v-.2c2.4-7.6.6-16-.6-23.9-1.2-7.8-1.8-15 .9-20 3.5-6.7 8.5-9.1 14.8-11.3 10.3-3.7 11.8-3.4 19.6-9.9 5.5-5.7 9.5-12.9 14.3-18 5.1-5.5 10-8.1 17.7-6.9 8.1 1.2 15.1 6.8 21.9 16l19.6 35.6c9.5 19.9 43.1 48.4 41 68.9zm-1.4-25.9c-4.1-6.6-9.6-13.6-14.4-19.6 7.1 0 14.2-2.2 16.7-8.9 2.3-6.2 0-14.9-7.4-24.9-13.5-18.2-38.3-32.5-38.3-32.5-13.5-8.4-21.1-18.7-24.6-29.9s-3-23.3-.3-35.2c5.2-22.9 18.6-45.2 27.2-59.2 2.3-1.7.8 3.2-8.7 20.8-8.5 16.1-24.4 53.3-2.6 82.4.6-20.7 5.5-41.8 13.8-61.5 12-27.4 37.3-74.9 39.3-112.7 1.1.8 4.6 3.2 6.2 4.1 4.6 2.7 8.1 6.7 12.6 10.3 12.4 10 28.5 9.2 42.4 1.2 6.2-3.5 11.2-7.5 15.9-9 9.9-3.1 17.8-8.6 22.3-15 7.7 30.4 25.7 74.3 37.2 95.7 6.1 11.4 18.3 35.5 23.6 64.6 3.3-.1 7 .4 10.9 1.4 13.8-35.7-11.7-74.2-23.3-84.9-4.7-4.6-4.9-6.6-2.6-6.5 12.6 11.2 29.2 33.7 35.2 59 2.8 11.6 3.3 23.7.4 35.7 16.4 6.8 35.9 17.9 30.7 34.8-2.2-.1-3.2 0-4.2 0 3.2-10.1-3.9-17.6-22.8-26.1-19.6-8.6-36-8.6-38.3 12.5-12.1 4.2-18.3 14.7-21.4 27.3-2.8 11.2-3.6 24.7-4.4 39.9-.5 7.7-3.6 18-6.8 29-32.1 22.9-76.7 32.9-114.3 7.2zm257.4-11.5c-.9 16.8-41.2 19.9-63.2 46.5-13.2 15.7-29.4 24.4-43.6 25.5s-26.5-4.8-33.7-19.3c-4.7-11.1-2.4-23.1 1.1-36.3 3.7-14.2 9.2-28.8 9.9-40.6.8-15.2 1.7-28.5 4.2-38.7 2.6-10.3 6.6-17.2 13.7-21.1.3-.2.7-.3 1-.5.8 13.2 7.3 26.6 18.8 29.5 12.6 3.3 30.7-7.5 38.4-16.3 9-.3 15.7-.9 22.6 5.1 9.9 8.5 7.1 30.3 17.1 41.6 10.6 11.6 14 19.5 13.7 24.6zM173.3 148.7c2 1.9 4.7 4.5 8 7.1 6.6 5.2 15.8 10.6 27.3 10.6 11.6 0 22.5-5.9 31.8-10.8 4.9-2.6 10.9-7 14.8-10.4s5.9-6.3 3.1-6.6-2.6 2.6-6 5.1c-4.4 3.2-9.7 7.4-13.9 9.8-7.4 4.2-19.5 10.2-29.9 10.2s-18.7-4.8-24.9-9.7c-3.1-2.5-5.7-5-7.7-6.9-1.5-1.4-1.9-4.6-4.3-4.9-1.4-.1-1.8 3.7 1.7 6.5z"
            }
        }]
    })(e)
}

function DF(e) {
    return yn({
        tag: "svg",
        attr: {
            viewBox: "0 0 576 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M570.9 372.3c-11.3 14.2-38.8 24.3-38.8 24.3L327 470.2v-54.3l150.9-53.8c17.1-6.1 19.8-14.8 5.8-19.4-13.9-4.6-39.1-3.3-56.2 2.9L327 381.1v-56.4c23.2-7.8 47.1-13.6 75.7-16.8 40.9-4.5 90.9.6 130.2 15.5 44.2 14 49.2 34.7 38 48.9zm-224.4-92.5v-139c0-16.3-3-31.3-18.3-35.6-11.7-3.8-19 7.1-19 23.4v347.9l-93.8-29.8V32c39.9 7.4 98 24.9 129.2 35.4C424.1 94.7 451 128.7 451 205.2c0 74.5-46 102.8-104.5 74.6zM43.2 410.2c-45.4-12.8-53-39.5-32.3-54.8 19.1-14.2 51.7-24.9 51.7-24.9l134.5-47.8v54.5l-96.8 34.6c-17.1 6.1-19.7 14.8-5.8 19.4 13.9 4.6 39.1 3.3 56.2-2.9l46.4-16.9v48.8c-51.6 9.3-101.4 7.3-153.9-10z"
            }
        }]
    })(e)
}

function FF(e) {
    return yn({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"
            }
        }]
    })(e)
}

function NF(e) {
    return yn({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M369.9 318.2c44.3 54.3 64.7 98.8 54.4 118.7-7.9 15.1-56.7 44.6-92.6 55.9-29.6 9.3-68.4 13.3-100.4 10.2-38.2-3.7-76.9-17.4-110.1-39C93.3 445.8 87 438.3 87 423.4c0-29.9 32.9-82.3 89.2-142.1 32-33.9 76.5-73.7 81.4-72.6 9.4 2.1 84.3 75.1 112.3 109.5zM188.6 143.8c-29.7-26.9-58.1-53.9-86.4-63.4-15.2-5.1-16.3-4.8-28.7 8.1-29.2 30.4-53.5 79.7-60.3 122.4-5.4 34.2-6.1 43.8-4.2 60.5 5.6 50.5 17.3 85.4 40.5 120.9 9.5 14.6 12.1 17.3 9.3 9.9-4.2-11-.3-37.5 9.5-64 14.3-39 53.9-112.9 120.3-194.4zm311.6 63.5C483.3 127.3 432.7 77 425.6 77c-7.3 0-24.2 6.5-36 13.9-23.3 14.5-41 31.4-64.3 52.8C367.7 197 427.5 283.1 448.2 346c6.8 20.7 9.7 41.1 7.4 52.3-1.7 8.5-1.7 8.5 1.4 4.6 6.1-7.7 19.9-31.3 25.4-43.5 7.4-16.2 15-40.2 18.6-58.7 4.3-22.5 3.9-70.8-.8-93.4zM141.3 43C189 40.5 251 77.5 255.6 78.4c.7.1 10.4-4.2 21.6-9.7 63.9-31.1 94-25.8 107.4-25.2-63.9-39.3-152.7-50-233.9-11.7-23.4 11.1-24 11.9-9.4 11.2z"
            }
        }]
    })(e)
}

function BF(e) {
    return yn({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M15.5 1h-8A2.5 2.5 0 005 3.5v17A2.5 2.5 0 007.5 23h8a2.5 2.5 0 002.5-2.5v-17A2.5 2.5 0 0015.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"
            }
        }]
    })(e)
}

function jF(e) {
    return yn({
        tag: "svg",
        attr: {
            role: "img",
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "title",
            attr: {},
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M0 .6h7.1l9.85 15.9V.6H24v22.8h-7.04L7.06 7.5v15.9H0V.6"
            }
        }]
    })(e)
}

function Jx(e) {
    return yn({
        tag: "svg",
        attr: {
            fill: "currentColor",
            viewBox: "0 0 16 16"
        },
        child: [{
            tag: "path",
            attr: {
                fillRule: "evenodd",
                d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            }
        }]
    })(e)
}

function VF(e) {
    return yn({
        tag: "svg",
        attr: {
            fill: "currentColor",
            viewBox: "0 0 16 16"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"
            }
        }]
    })(e)
}

function HF(e) {
    return yn({
        tag: "svg",
        attr: {
            fill: "currentColor",
            viewBox: "0 0 16 16"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            }
        }]
    })(e)
}
const WF = ({
        platforms: e = []
    }) => {
        const t = {
            pc: FF,
            playstation: DF,
            xbox: NF,
            nintendo: jF,
            mac: LF,
            linux: IF,
            android: $F,
            ios: BF,
            web: VF
        };
        return _(zi, {
            marginY: 1,
            children: e.map(n => _(Ao, {
                as: t[n.slug],
                color: "gray.500"
            }, n.id))
        })
    },
    UF = ({
        game: e
    }) => {
        var t;
        return fe(Gw, {
            children: [_(_s, {
                src: Yx(e.background_image)
            }), fe(Uw, {
                children: [fe(zi, {
                    justifyContent: "space-between",
                    marginBottom: 3,
                    children: [_(WF, {
                        platforms: (t = e.parent_platforms) == null ? void 0 : t.map(n => n.platform)
                    }), _(TF, {
                        score: e.metacritic
                    })]
                }), fe(Rc, {
                    fontSize: "2xl",
                    children: [e.name, _(MF, {
                        rating: e.rating_top
                    })]
                })]
            })]
        })
    },
    p1 = ({
        children: e
    }) => _(cs, {
        borderRadius: 10,
        overflow: "hidden",
        children: e
    }),
    GF = () => fe(Gw, {
        children: [_(qh, {
            height: "200px"
        }), _(Uw, {
            children: _(Ex, {})
        })]
    }),
    KF = ({
        gameQuery: e
    }) => {
        const {
            data: t,
            error: n,
            isLoading: r
        } = _F(e), o = [1, 2, 3, 4, 5, 6];
        return n ? _(Ih, {
            children: n
        }) : fe(ix, {
            columns: {
                sm: 1,
                md: 2,
                lg: 3,
                xl: 4
            },
            padding: "10px",
            spacing: 6,
            children: [r && o.map(i => _(p1, {
                children: _(GF, {})
            }, i)), t.map(i => _(p1, {
                children: _(UF, {
                    game: i
                })
            }, i.id))]
        })
    },
    qF = ({
        gameQuery: e
    }) => {
        var n, r;
        const t = `${((n=e.platform)==null?void 0:n.name)||""} ${((r=e.genre)==null?void 0:r.name)||""} Games`;
        return _(Rc, {
            as: "h1",
            marginY: 5,
            fontSize: "5xl",
            children: t
        })
    },
    XF = [{
        id: 4,
        name: "Action",
        slug: "action",
        games_count: 177189,
        image_background: "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
        games: [{
            id: 3498,
            slug: "grand-theft-auto-v",
            name: "Grand Theft Auto V",
            added: 18995
        }, {
            id: 3328,
            slug: "the-witcher-3-wild-hunt",
            name: "The Witcher 3: Wild Hunt",
            added: 18127
        }, {
            id: 5286,
            slug: "tomb-raider",
            name: "Tomb Raider (2013)",
            added: 14967
        }, {
            id: 4291,
            slug: "counter-strike-global-offensive",
            name: "Counter-Strike: Global Offensive",
            added: 14774
        }, {
            id: 12020,
            slug: "left-4-dead-2",
            name: "Left 4 Dead 2",
            added: 14489
        }, {
            id: 5679,
            slug: "the-elder-scrolls-v-skyrim",
            name: "The Elder Scrolls V: Skyrim",
            added: 14391
        }]
    }, {
        id: 51,
        name: "Indie",
        slug: "indie",
        games_count: 51112,
        image_background: "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
        games: [{
            id: 1030,
            slug: "limbo",
            name: "Limbo",
            added: 12272
        }, {
            id: 3272,
            slug: "rocket-league",
            name: "Rocket League",
            added: 11164
        }, {
            id: 422,
            slug: "terraria",
            name: "Terraria",
            added: 10975
        }, {
            id: 9767,
            slug: "hollow-knight",
            name: "Hollow Knight",
            added: 9542
        }, {
            id: 3612,
            slug: "hotline-miami",
            name: "Hotline Miami",
            added: 9376
        }, {
            id: 3790,
            slug: "outlast",
            name: "Outlast",
            added: 9296
        }]
    }, {
        id: 3,
        name: "Adventure",
        slug: "adventure",
        games_count: 136213,
        image_background: "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
        games: [{
            id: 3498,
            slug: "grand-theft-auto-v",
            name: "Grand Theft Auto V",
            added: 18995
        }, {
            id: 3328,
            slug: "the-witcher-3-wild-hunt",
            name: "The Witcher 3: Wild Hunt",
            added: 18127
        }, {
            id: 5286,
            slug: "tomb-raider",
            name: "Tomb Raider (2013)",
            added: 14967
        }, {
            id: 13536,
            slug: "portal",
            name: "Portal",
            added: 14517
        }, {
            id: 28,
            slug: "red-dead-redemption-2",
            name: "Red Dead Redemption 2",
            added: 13743
        }, {
            id: 3439,
            slug: "life-is-strange-episode-1-2",
            name: "Life is Strange",
            added: 13719
        }]
    }, {
        id: 5,
        name: "RPG",
        slug: "role-playing-games-rpg",
        games_count: 53575,
        image_background: "https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg",
        games: [{
            id: 3328,
            slug: "the-witcher-3-wild-hunt",
            name: "The Witcher 3: Wild Hunt",
            added: 18127
        }, {
            id: 5679,
            slug: "the-elder-scrolls-v-skyrim",
            name: "The Elder Scrolls V: Skyrim",
            added: 14391
        }, {
            id: 802,
            slug: "borderlands-2",
            name: "Borderlands 2",
            added: 13720
        }, {
            id: 58175,
            slug: "god-of-war-2",
            name: "God of War (2018)",
            added: 12068
        }, {
            id: 3070,
            slug: "fallout-4",
            name: "Fallout 4",
            added: 12065
        }, {
            id: 278,
            slug: "horizon-zero-dawn",
            name: "Horizon Zero Dawn",
            added: 11512
        }]
    }, {
        id: 10,
        name: "Strategy",
        slug: "strategy",
        games_count: 53393,
        image_background: "https://media.rawg.io/media/games/40a/40ab95c1639aa1d7ec04d4cd523af6b1.jpg",
        games: [{
            id: 13633,
            slug: "civilization-v",
            name: "Sid Meier's Civilization V",
            added: 8490
        }, {
            id: 10243,
            slug: "company-of-heroes-2",
            name: "Company of Heroes 2",
            added: 8371
        }, {
            id: 13910,
            slug: "xcom-enemy-unknown",
            name: "XCOM: Enemy Unknown",
            added: 7567
        }, {
            id: 5525,
            slug: "brutal-legend",
            name: "Brutal Legend",
            added: 7502
        }, {
            id: 10065,
            slug: "cities-skylines",
            name: "Cities: Skylines",
            added: 7299
        }, {
            id: 11147,
            slug: "ark-survival-of-the-fittest",
            name: "ARK: Survival Of The Fittest",
            added: 6962
        }]
    }, {
        id: 2,
        name: "Shooter",
        slug: "shooter",
        games_count: 62697,
        image_background: "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
        games: [{
            id: 4200,
            slug: "portal-2",
            name: "Portal 2",
            added: 17084
        }, {
            id: 4291,
            slug: "counter-strike-global-offensive",
            name: "Counter-Strike: Global Offensive",
            added: 14774
        }, {
            id: 12020,
            slug: "left-4-dead-2",
            name: "Left 4 Dead 2",
            added: 14489
        }, {
            id: 4062,
            slug: "bioshock-infinite",
            name: "BioShock Infinite",
            added: 13894
        }, {
            id: 802,
            slug: "borderlands-2",
            name: "Borderlands 2",
            added: 13720
        }, {
            id: 13537,
            slug: "half-life-2",
            name: "Half-Life 2",
            added: 12970
        }]
    }, {
        id: 40,
        name: "Casual",
        slug: "casual",
        games_count: 43416,
        image_background: "https://media.rawg.io/media/screenshots/42d/42d770eb49f2ba01cd4045e0d92af7a9.jpg",
        games: [{
            id: 9721,
            slug: "garrys-mod",
            name: "Garry's Mod",
            added: 8560
        }, {
            id: 326292,
            slug: "fall-guys",
            name: "Fall Guys: Ultimate Knockout",
            added: 7532
        }, {
            id: 9830,
            slug: "brawlhalla",
            name: "Brawlhalla",
            added: 6465
        }, {
            id: 356714,
            slug: "among-us",
            name: "Among Us",
            added: 6137
        }, {
            id: 1959,
            slug: "goat-simulator",
            name: "Goat Simulator",
            added: 5693
        }, {
            id: 16343,
            slug: "a-story-about-my-uncle",
            name: "A Story About My Uncle",
            added: 5377
        }]
    }, {
        id: 14,
        name: "Simulation",
        slug: "simulation",
        games_count: 66761,
        image_background: "https://media.rawg.io/media/games/997/997ab4d67e96fb20a4092383477d4463.jpg",
        games: [{
            id: 10035,
            slug: "hitman",
            name: "Hitman",
            added: 9640
        }, {
            id: 654,
            slug: "stardew-valley",
            name: "Stardew Valley",
            added: 8632
        }, {
            id: 9721,
            slug: "garrys-mod",
            name: "Garry's Mod",
            added: 8560
        }, {
            id: 10243,
            slug: "company-of-heroes-2",
            name: "Company of Heroes 2",
            added: 8371
        }, {
            id: 9882,
            slug: "dont-starve-together",
            name: "Don't Starve Together",
            added: 8007
        }, {
            id: 22509,
            slug: "minecraft",
            name: "Minecraft",
            added: 7333
        }]
    }, {
        id: 7,
        name: "Puzzle",
        slug: "puzzle",
        games_count: 99805,
        image_background: "https://media.rawg.io/media/games/8cd/8cd179c85bd3de8f79bef245b15075fb.jpg",
        games: [{
            id: 4200,
            slug: "portal-2",
            name: "Portal 2",
            added: 17084
        }, {
            id: 13536,
            slug: "portal",
            name: "Portal",
            added: 14517
        }, {
            id: 1030,
            slug: "limbo",
            name: "Limbo",
            added: 12272
        }, {
            id: 19709,
            slug: "half-life-2-episode-two",
            name: "Half-Life 2: Episode Two",
            added: 9682
        }, {
            id: 18080,
            slug: "half-life",
            name: "Half-Life",
            added: 8892
        }, {
            id: 1450,
            slug: "inside",
            name: "INSIDE",
            added: 7112
        }]
    }, {
        id: 11,
        name: "Arcade",
        slug: "arcade",
        games_count: 22544,
        image_background: "https://media.rawg.io/media/games/238/238e2b2b24c9838626700c69cacf1e3a.jpg",
        games: [{
            id: 3612,
            slug: "hotline-miami",
            name: "Hotline Miami",
            added: 9376
        }, {
            id: 17540,
            slug: "injustice-gods-among-us-ultimate-edition",
            name: "Injustice: Gods Among Us Ultimate Edition",
            added: 8582
        }, {
            id: 22509,
            slug: "minecraft",
            name: "Minecraft",
            added: 7333
        }, {
            id: 4003,
            slug: "grid-2",
            name: "GRID 2",
            added: 6775
        }, {
            id: 3408,
            slug: "hotline-miami-2-wrong-number",
            name: "Hotline Miami 2: Wrong Number",
            added: 5476
        }, {
            id: 16343,
            slug: "a-story-about-my-uncle",
            name: "A Story About My Uncle",
            added: 5377
        }]
    }, {
        id: 83,
        name: "Platformer",
        slug: "platformer",
        games_count: 105652,
        image_background: "https://media.rawg.io/media/games/fd7/fd794a9f0ffe816038d981b3acc3eec9.jpg",
        games: [{
            id: 1030,
            slug: "limbo",
            name: "Limbo",
            added: 12272
        }, {
            id: 422,
            slug: "terraria",
            name: "Terraria",
            added: 10975
        }, {
            id: 9767,
            slug: "hollow-knight",
            name: "Hollow Knight",
            added: 9542
        }, {
            id: 41,
            slug: "little-nightmares",
            name: "Little Nightmares",
            added: 9422
        }, {
            id: 18080,
            slug: "half-life",
            name: "Half-Life",
            added: 8892
        }, {
            id: 3144,
            slug: "super-meat-boy",
            name: "Super Meat Boy",
            added: 8559
        }]
    }, {
        id: 1,
        name: "Racing",
        slug: "racing",
        games_count: 24448,
        image_background: "https://media.rawg.io/media/games/23d/23d78acedbb5f40c9fb64e73af5af65d.jpg",
        games: [{
            id: 3272,
            slug: "rocket-league",
            name: "Rocket League",
            added: 11164
        }, {
            id: 4003,
            slug: "grid-2",
            name: "GRID 2",
            added: 6775
        }, {
            id: 2572,
            slug: "dirt-rally",
            name: "DiRT Rally",
            added: 6068
        }, {
            id: 58753,
            slug: "forza-horizon-4",
            name: "Forza Horizon 4",
            added: 5375
        }, {
            id: 5578,
            slug: "grid",
            name: "Race Driver: Grid",
            added: 4981
        }, {
            id: 4347,
            slug: "dirt-showdown",
            name: "DiRT Showdown",
            added: 4332
        }]
    }, {
        id: 59,
        name: "Massively Multiplayer",
        slug: "massively-multiplayer",
        games_count: 3152,
        image_background: "https://media.rawg.io/media/games/651/651ae84f2d5e36206aad90976a453329.jpg",
        games: [{
            id: 32,
            slug: "destiny-2",
            name: "Destiny 2",
            added: 12059
        }, {
            id: 10213,
            slug: "dota-2",
            name: "Dota 2",
            added: 11021
        }, {
            id: 766,
            slug: "warframe",
            name: "Warframe",
            added: 10860
        }, {
            id: 290856,
            slug: "apex-legends",
            name: "Apex Legends",
            added: 9605
        }, {
            id: 10533,
            slug: "path-of-exile",
            name: "Path of Exile",
            added: 8685
        }, {
            id: 10142,
            slug: "playerunknowns-battlegrounds",
            name: "PlayerUnknown’s Battlegrounds",
            added: 8537
        }]
    }, {
        id: 15,
        name: "Sports",
        slug: "sports",
        games_count: 20711,
        image_background: "https://media.rawg.io/media/screenshots/f5a/f5abab52c4d606551cd5ec3ab709e501.jpg",
        games: [{
            id: 3272,
            slug: "rocket-league",
            name: "Rocket League",
            added: 11164
        }, {
            id: 326292,
            slug: "fall-guys",
            name: "Fall Guys: Ultimate Knockout",
            added: 7532
        }, {
            id: 2572,
            slug: "dirt-rally",
            name: "DiRT Rally",
            added: 6068
        }, {
            id: 53341,
            slug: "jet-set-radio-2012",
            name: "Jet Set Radio",
            added: 4740
        }, {
            id: 9575,
            slug: "vrchat",
            name: "VRChat",
            added: 3909
        }, {
            id: 622492,
            slug: "forza-horizon-5",
            name: "Forza Horizon 5",
            added: 3873
        }]
    }, {
        id: 6,
        name: "Fighting",
        slug: "fighting",
        games_count: 12308,
        image_background: "https://media.rawg.io/media/games/cc5/cc576aa274780702ef93463f5410031e.jpg",
        games: [{
            id: 17540,
            slug: "injustice-gods-among-us-ultimate-edition",
            name: "Injustice: Gods Among Us Ultimate Edition",
            added: 8582
        }, {
            id: 108,
            slug: "mortal-kombat-x",
            name: "Mortal Kombat X",
            added: 7908
        }, {
            id: 28179,
            slug: "sega-mega-drive-and-genesis-classics",
            name: "SEGA Mega Drive and Genesis Classics",
            added: 7280
        }, {
            id: 9830,
            slug: "brawlhalla",
            name: "Brawlhalla",
            added: 6465
        }, {
            id: 274480,
            slug: "mortal-kombat-11",
            name: "Mortal Kombat 11",
            added: 4685
        }, {
            id: 44525,
            slug: "yakuza-kiwami",
            name: "Yakuza Kiwami",
            added: 4038
        }]
    }, {
        id: 19,
        name: "Family",
        slug: "family",
        games_count: 5378,
        image_background: "https://media.rawg.io/media/games/9f7/9f750cb69a31a42648f45e3681abed3a.jpg",
        games: [{
            id: 3254,
            slug: "journey",
            name: "Journey",
            added: 7784
        }, {
            id: 2597,
            slug: "lego-lord-of-the-rings",
            name: "LEGO The Lord of the Rings",
            added: 4950
        }, {
            id: 3350,
            slug: "broken-age",
            name: "Broken Age",
            added: 4625
        }, {
            id: 3729,
            slug: "lego-the-hobbit",
            name: "LEGO The Hobbit",
            added: 4549
        }, {
            id: 1259,
            slug: "machinarium",
            name: "Machinarium",
            added: 4105
        }, {
            id: 1140,
            slug: "world-of-goo",
            name: "World of Goo",
            added: 4042
        }]
    }, {
        id: 28,
        name: "Board Games",
        slug: "board-games",
        games_count: 8272,
        image_background: "https://media.rawg.io/media/screenshots/768/768e36d4b62a1481fef737c6920fbfc7.jpg",
        games: [{
            id: 23557,
            slug: "gwent-the-witcher-card-game",
            name: "Gwent: The Witcher Card Game",
            added: 4218
        }, {
            id: 327999,
            slug: "dota-underlords",
            name: "Dota Underlords",
            added: 3557
        }, {
            id: 2055,
            slug: "adventure-capitalist",
            name: "AdVenture Capitalist",
            added: 2972
        }, {
            id: 2306,
            slug: "poker-night-2",
            name: "Poker Night 2",
            added: 1914
        }, {
            id: 3187,
            slug: "armello",
            name: "Armello",
            added: 1802
        }, {
            id: 758,
            slug: "hue",
            name: "Hue",
            added: 1743
        }]
    }, {
        id: 34,
        name: "Educational",
        slug: "educational",
        games_count: 16155,
        image_background: "https://media.rawg.io/media/screenshots/6cd/6cd13ed3dcb6b44b8bc995850f2861e6.jpg",
        games: [{
            id: 1358,
            slug: "papers-please",
            name: "Papers, Please",
            added: 6053
        }, {
            id: 1140,
            slug: "world-of-goo",
            name: "World of Goo",
            added: 4042
        }, {
            id: 2778,
            slug: "surgeon-simulator-cpr",
            name: "Surgeon Simulator",
            added: 3545
        }, {
            id: 9768,
            slug: "gameguru",
            name: "GameGuru",
            added: 2260
        }, {
            id: 13777,
            slug: "sid-meiers-civilization-iv-colonization",
            name: "Sid Meier's Civilization IV: Colonization",
            added: 2105
        }, {
            id: 6885,
            slug: "pirates-3",
            name: "Sid Meier's Pirates!",
            added: 1995
        }]
    }, {
        id: 17,
        name: "Card",
        slug: "card",
        games_count: 4461,
        image_background: "https://media.rawg.io/media/screenshots/ca2/ca257e3481af0b2c8149d6600440aa85.jpeg",
        games: [{
            id: 23557,
            slug: "gwent-the-witcher-card-game",
            name: "Gwent: The Witcher Card Game",
            added: 4218
        }, {
            id: 28121,
            slug: "slay-the-spire",
            name: "Slay the Spire",
            added: 4182
        }, {
            id: 18852,
            slug: "poker-night-at-the-inventory",
            name: "Poker Night at the Inventory",
            added: 2539
        }, {
            id: 8923,
            slug: "faeria",
            name: "Faeria",
            added: 1998
        }, {
            id: 332,
            slug: "the-elder-scrolls-legends",
            name: "The Elder Scrolls: Legends",
            added: 1932
        }, {
            id: 2306,
            slug: "poker-night-2",
            name: "Poker Night 2",
            added: 1914
        }]
    }],
    YF = () => ({
        data: XF,
        isLoading: !1,
        error: null
    }),
    QF = ({
        selectedGenre: e,
        onSelectGenre: t
    }) => {
        const {
            data: n,
            isLoading: r,
            error: o
        } = YF();
        return o ? null : r ? _(Ec, {}) : fe(k1, {
            children: [_(Rc, {
                fontSize: "2xl",
                marginTop: 9,
                marginBottom: 3,
                children: "Genres"
            }), _(Ac, {
                children: n.map(i => _(rx, {
                    paddingY: "5px",
                    children: fe(zi, {
                        children: [_(_s, {
                            boxSize: "32px",
                            borderRadius: 8,
                            objectFit: "cover",
                            src: Yx(i.image_background)
                        }), _(Tc, {
                            whiteSpace: "normal",
                            textAlign: "left",
                            fontWeight: i.id === (e == null ? void 0 : e.id) ? "bold" : "normal",
                            onClick: () => t(i),
                            fontSize: "md",
                            variant: "link",
                            children: i.name
                        })]
                    })
                }, i.id))
            })]
        })
    },
    ZF = "/assets/logo-ff4914e6.webp",
    JF = () => {
        const {
            toggleColorMode: e,
            colorMode: t
        } = pc();
        return fe(zi, {
            children: [_(Tx, {
                colorScheme: "green",
                isChecked: t === "dark",
                onChange: e
            }), _(Ih, {
                whiteSpace: "nowrap",
                children: "Dark Mode"
            })]
        })
    },
    eN = ({
        onSearch: e
    }) => {
        const t = b.useRef(null);
        return _("form", {
            onSubmit: n => {
                n.preventDefault(), t.current && e(t.current.value)
            },
            children: fe(ex, {
                children: [_(zh, {
                    children: _(HF, {})
                }), _($h, {
                    ref: t,
                    borderRadius: 20,
                    placeholder: "Search games...",
                    variant: "filled"
                })]
            })
        })
    },
    tN = ({
        onSearch: e
    }) => fe(zi, {
        padding: "10px",
        children: [_(_s, {
            src: ZF,
            boxSize: "60px"
        }), _(eN, {
            onSearch: e
        }), _(JF, {})]
    }),
    nN = [{
        id: 1,
        name: "PC",
        slug: "pc",
        platforms: [{
            id: 4,
            name: "PC",
            slug: "pc",
            games_count: 534727,
            image_background: "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
            image: null,
            year_start: null,
            year_end: null
        }]
    }, {
        id: 2,
        name: "PlayStation",
        slug: "playstation",
        platforms: [{
            id: 187,
            name: "PlayStation 5",
            slug: "playstation5",
            games_count: 819,
            image_background: "https://media.rawg.io/media/games/d89/d89bd0cf4fcdc10820892980cbba0f49.jpg",
            image: null,
            year_start: 2020,
            year_end: null
        }, {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            games_count: 6590,
            image_background: "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 16,
            name: "PlayStation 3",
            slug: "playstation3",
            games_count: 3323,
            image_background: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 15,
            name: "PlayStation 2",
            slug: "playstation2",
            games_count: 1970,
            image_background: "https://media.rawg.io/media/games/683/6833fbb183fd72a61c032501e3bc6d36.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 27,
            name: "PlayStation",
            slug: "playstation1",
            games_count: 1606,
            image_background: "https://media.rawg.io/media/games/0c5/0c5fcdf04048200da14b90e0e6cfaf6b.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 19,
            name: "PS Vita",
            slug: "ps-vita",
            games_count: 1667,
            image_background: "https://media.rawg.io/media/games/be0/be084b850302abe81675bc4ffc08a0d0.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 17,
            name: "PSP",
            slug: "psp",
            games_count: 1438,
            image_background: "https://media.rawg.io/media/games/a6c/a6cd31267a20a615d35f618e766208fc.jpg",
            image: null,
            year_start: null,
            year_end: null
        }]
    }, {
        id: 3,
        name: "Xbox",
        slug: "xbox",
        platforms: [{
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            games_count: 5485,
            image_background: "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 186,
            name: "Xbox Series S/X",
            slug: "xbox-series-x",
            games_count: 730,
            image_background: "https://media.rawg.io/media/games/d47/d479582ed0a46496ad34f65c7099d7e5.jpg",
            image: null,
            year_start: 2020,
            year_end: null
        }, {
            id: 14,
            name: "Xbox 360",
            slug: "xbox360",
            games_count: 2780,
            image_background: "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 80,
            name: "Xbox",
            slug: "xbox-old",
            games_count: 722,
            image_background: "https://media.rawg.io/media/games/bc7/bc77b1eb8e35df2d90b952bac5342c75.jpg",
            image: null,
            year_start: null,
            year_end: null
        }]
    }, {
        id: 4,
        name: "iOS",
        slug: "ios",
        platforms: [{
            id: 3,
            name: "iOS",
            slug: "ios",
            games_count: 76450,
            image_background: "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
            image: null,
            year_start: null,
            year_end: null
        }]
    }, {
        id: 8,
        name: "Android",
        slug: "android",
        platforms: [{
            id: 21,
            name: "Android",
            slug: "android",
            games_count: 54864,
            image_background: "https://media.rawg.io/media/games/e74/e74458058b35e01c1ae3feeb39a3f724.jpg",
            image: null,
            year_start: null,
            year_end: null
        }]
    }, {
        id: 5,
        name: "Apple Macintosh",
        slug: "mac",
        platforms: [{
            id: 5,
            name: "macOS",
            slug: "macos",
            games_count: 106165,
            image_background: "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 55,
            name: "Classic Macintosh",
            slug: "macintosh",
            games_count: 677,
            image_background: "https://media.rawg.io/media/games/dd7/dd72d8a527cd9245c7eb7cd05aa53efa.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 41,
            name: "Apple II",
            slug: "apple-ii",
            games_count: 422,
            image_background: "https://media.rawg.io/media/screenshots/510/510ad66178757fcafc467d6d01c3b425.jpeg",
            image: null,
            year_start: null,
            year_end: null
        }]
    }, {
        id: 6,
        name: "Linux",
        slug: "linux",
        platforms: [{
            id: 6,
            name: "Linux",
            slug: "linux",
            games_count: 78912,
            image_background: "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
            image: null,
            year_start: null,
            year_end: null
        }]
    }, {
        id: 7,
        name: "Nintendo",
        slug: "nintendo",
        platforms: [{
            id: 7,
            name: "Nintendo Switch",
            slug: "nintendo-switch",
            games_count: 5190,
            image_background: "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 8,
            name: "Nintendo 3DS",
            slug: "nintendo-3ds",
            games_count: 1731,
            image_background: "https://media.rawg.io/media/games/369/36914d895c20e35f273286145c267764.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 9,
            name: "Nintendo DS",
            slug: "nintendo-ds",
            games_count: 2476,
            image_background: "https://media.rawg.io/media/screenshots/157/1571cdfb52888191eabaf53c2b897240.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 13,
            name: "Nintendo DSi",
            slug: "nintendo-dsi",
            games_count: 37,
            image_background: "https://media.rawg.io/media/screenshots/b45/b452e9b20e969a64d0088ae467d1dcab.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 10,
            name: "Wii U",
            slug: "wii-u",
            games_count: 1203,
            image_background: "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 11,
            name: "Wii",
            slug: "wii",
            games_count: 2269,
            image_background: "https://media.rawg.io/media/screenshots/f10/f10e7cafed6665861c58187b2ae3b310.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 105,
            name: "GameCube",
            slug: "gamecube",
            games_count: 642,
            image_background: "https://media.rawg.io/media/games/4f5/4f57124f7c0285150626cd1411c45b6e.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 83,
            name: "Nintendo 64",
            slug: "nintendo-64",
            games_count: 364,
            image_background: "https://media.rawg.io/media/games/f62/f62d090119e5ff05c59036480123fd83.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 24,
            name: "Game Boy Advance",
            slug: "game-boy-advance",
            games_count: 956,
            image_background: "https://media.rawg.io/media/games/dc6/dc68ca77e06ad993aade7faf645f5ec2.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 43,
            name: "Game Boy Color",
            slug: "game-boy-color",
            games_count: 414,
            image_background: "https://media.rawg.io/media/games/a9a/a9a2472f862b041d2980103ddbb61c91.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 26,
            name: "Game Boy",
            slug: "game-boy",
            games_count: 604,
            image_background: "https://media.rawg.io/media/screenshots/1e5/1e5e083780bb330479f7c778e6a0b7f0.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 79,
            name: "SNES",
            slug: "snes",
            games_count: 940,
            image_background: "https://media.rawg.io/media/games/0df/0dfe8852fa43d58cbdeb973765a9828d.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 49,
            name: "NES",
            slug: "nes",
            games_count: 970,
            image_background: "https://media.rawg.io/media/games/98e/98e3ce9d1be0f578d120168fb6c1e0a0.jpg",
            image: null,
            year_start: null,
            year_end: null
        }]
    }, {
        id: 9,
        name: "Atari",
        slug: "atari",
        platforms: [{
            id: 28,
            name: "Atari 7800",
            slug: "atari-7800",
            games_count: 64,
            image_background: "https://media.rawg.io/media/screenshots/565/56504b28b184dbc630a7de118e39d822.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 31,
            name: "Atari 5200",
            slug: "atari-5200",
            games_count: 64,
            image_background: "https://media.rawg.io/media/screenshots/61a/61a60e3ee55941387681eaa59e3becbf.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 23,
            name: "Atari 2600",
            slug: "atari-2600",
            games_count: 286,
            image_background: "https://media.rawg.io/media/games/23e/23eecccb588a4a9c97f35ebf8f9f00ef.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 22,
            name: "Atari Flashback",
            slug: "atari-flashback",
            games_count: 30,
            image_background: "https://media.rawg.io/media/screenshots/2aa/2aa07f58491e14b0183333f8956bc802.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 25,
            name: "Atari 8-bit",
            slug: "atari-8-bit",
            games_count: 306,
            image_background: "https://media.rawg.io/media/screenshots/b12/b12ed274eed80e4aced37badf228d1cf.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 34,
            name: "Atari ST",
            slug: "atari-st",
            games_count: 834,
            image_background: "https://media.rawg.io/media/screenshots/f7a/f7a70f1b271de9b92a9714db33e4c8ba.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 46,
            name: "Atari Lynx",
            slug: "atari-lynx",
            games_count: 56,
            image_background: "https://media.rawg.io/media/screenshots/575/575b2838392ed177dd7d2c734c682f93.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 50,
            name: "Atari XEGS",
            slug: "atari-xegs",
            games_count: 22,
            image_background: "https://media.rawg.io/media/screenshots/769/7691726d70c23c029903df08858df001.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 112,
            name: "Jaguar",
            slug: "jaguar",
            games_count: 37,
            image_background: "https://media.rawg.io/media/screenshots/7dd/7dd630a9b38257450b53099932d3047d.jpg",
            image: null,
            year_start: null,
            year_end: null
        }]
    }, {
        id: 10,
        name: "Commodore / Amiga",
        slug: "commodore-amiga",
        platforms: [{
            id: 166,
            name: "Commodore / Amiga",
            slug: "commodore-amiga",
            games_count: 2061,
            image_background: "https://media.rawg.io/media/games/a9a/a9a2472f862b041d2980103ddbb61c91.jpg",
            image: null,
            year_start: null,
            year_end: null
        }]
    }, {
        id: 11,
        name: "SEGA",
        slug: "sega",
        platforms: [{
            id: 167,
            name: "Genesis",
            slug: "genesis",
            games_count: 824,
            image_background: "https://media.rawg.io/media/games/373/373a9a1f664de6e4c31f08644729e2db.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 107,
            name: "SEGA Saturn",
            slug: "sega-saturn",
            games_count: 347,
            image_background: "https://media.rawg.io/media/games/47b/47b50d880be8453bf9cda6e5c007bc26.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 119,
            name: "SEGA CD",
            slug: "sega-cd",
            games_count: 161,
            image_background: "https://media.rawg.io/media/screenshots/b45/b452e9b20e969a64d0088ae467d1dcab.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 117,
            name: "SEGA 32X",
            slug: "sega-32x",
            games_count: 47,
            image_background: "https://media.rawg.io/media/games/0df/0dfe8852fa43d58cbdeb973765a9828d.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 74,
            name: "SEGA Master System",
            slug: "sega-master-system",
            games_count: 223,
            image_background: "https://media.rawg.io/media/screenshots/f9a/f9ac59bb4af2ca2193ee9ffb979577cf.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 106,
            name: "Dreamcast",
            slug: "dreamcast",
            games_count: 353,
            image_background: "https://media.rawg.io/media/games/1cf/1cf9e301f1d27172546dcabc2f6cb597.jpg",
            image: null,
            year_start: null,
            year_end: null
        }, {
            id: 77,
            name: "Game Gear",
            slug: "game-gear",
            games_count: 217,
            image_background: "https://media.rawg.io/media/games/2c3/2c3363eb1ae202b9e4e7520d3f14ab2e.jpg",
            image: null,
            year_start: null,
            year_end: null
        }]
    }, {
        id: 12,
        name: "3DO",
        slug: "3do",
        platforms: [{
            id: 111,
            name: "3DO",
            slug: "3do",
            games_count: 95,
            image_background: "https://media.rawg.io/media/screenshots/180/180b5f6e5d8c770bbbf941b9875046b6.jpg",
            image: null,
            year_start: null,
            year_end: null
        }]
    }, {
        id: 13,
        name: "Neo Geo",
        slug: "neo-geo",
        platforms: [{
            id: 12,
            name: "Neo Geo",
            slug: "neogeo",
            games_count: 113,
            image_background: "https://media.rawg.io/media/screenshots/488/488788e787a69d5ecf3c74884548ec24.jpg",
            image: null,
            year_start: null,
            year_end: null
        }]
    }, {
        id: 14,
        name: "Web",
        slug: "web",
        platforms: [{
            id: 171,
            name: "Web",
            slug: "web",
            games_count: 269156,
            image_background: "https://media.rawg.io/media/screenshots/78d/78d2dc36ce3b03af2e3000a078da8185.jpeg",
            image: null,
            year_start: null,
            year_end: null
        }]
    }],
    rN = () => ({
        data: nN,
        isLoading: !1,
        error: null
    }),
    oN = ({
        onSelectPlatform: e,
        selectedPlatform: t
    }) => {
        const {
            data: n,
            error: r
        } = rN();
        return r ? null : fe(Wh, {
            children: [_(Kh, {
                as: Tc,
                rightIcon: _(Jx, {}),
                children: (t == null ? void 0 : t.name) || "Platforms"
            }), _(Gh, {
                children: n.map(o => _(Uh, {
                    onClick: () => e(o),
                    children: o.name
                }, o.id))
            })]
        })
    },
    iN = ({
        onSelectSortOrder: e,
        sortOrder: t
    }) => {
        const n = [{
                value: "",
                label: "Relevance"
            }, {
                value: "-added",
                label: "Date added"
            }, {
                value: "name",
                label: "Name"
            }, {
                value: "-released",
                label: "Release date"
            }, {
                value: "-metacritic",
                label: "Popularity"
            }, {
                value: "-rating",
                label: "Average rating"
            }],
            r = n.find(o => o.value === t);
        return fe(Wh, {
            children: [fe(Kh, {
                as: Tc,
                rightIcon: _(Jx, {}),
                children: ["Order by: ", (r == null ? void 0 : r.label) || "Relevance"]
            }), _(Gh, {
                children: n.map(o => _(Uh, {
                    onClick: () => e(o.value),
                    value: o.value,
                    children: o.label
                }, o.value))
            })]
        })
    };

function aN() {
    const [e, t] = b.useState({});
    return fe(Lh, {
        templateAreas: {
            base: '"nav" "main"',
            lg: '"nav nav" "aside main"'
        },
        templateColumns: {
            base: "1fr",
            lg: "250px 1fr"
        },
        children: [_(Bl, {
            area: "nav",
            children: _(tN, {
                onSearch: n => t({ ...e,
                    searchText: n
                })
            })
        }), _(fx, {
            above: "lg",
            children: _(Bl, {
                area: "aside",
                paddingX: 5,
                children: _(QF, {
                    selectedGenre: e.genre,
                    onSelectGenre: n => t({ ...e,
                        genre: n
                    })
                })
            })
        }), fe(Bl, {
            area: "main",
            children: [fe(cs, {
                paddingLeft: 2,
                children: [_(qF, {
                    gameQuery: e
                }), fe(cx, {
                    marginBottom: 5,
                    children: [_(cs, {
                        marginRight: 5,
                        children: _(oN, {
                            selectedPlatform: e.platform,
                            onSelectPlatform: n => t({ ...e,
                                platform: n
                            })
                        })
                    }), _(iN, {
                        sortOrder: e.sortOrder,
                        onSelectSortOrder: n => t({ ...e,
                            sortOrder: n
                        })
                    })]
                })]
            }), _(KF, {
                gameQuery: e
            })]
        })]
    })
}
const sN = {
        initialColorMode: "dark"
    },
    m1 = R7({
        config: sN,
        colors: {
            gray: {
                50: "#f9f9f9",
                100: "#ededed",
                200: "#d3d3d3",
                300: "#b3b3b3",
                400: "#a0a0a0",
                500: "#898989",
                600: "#6c6c6c",
                700: "#202020",
                800: "#121212",
                900: "#111"
            }
        }
    });
rf.createRoot(document.getElementById("root")).render(_(Rt.StrictMode, {
    children: fe(Yz, {
        theme: m1,
        children: [_(U4, {
            initialColorMode: m1.config.initialColorMode
        }), _(aN, {})]
    })
}));
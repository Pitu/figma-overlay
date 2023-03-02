function Dn(e, t) {
  const n = /* @__PURE__ */ Object.create(null), s = e.split(",");
  for (let o = 0; o < s.length; o++)
    n[s[o]] = !0;
  return t ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
function Vt(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = q(s) ? To(s) : Vt(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else {
    if (q(e))
      return e;
    if (G(e))
      return e;
  }
}
const Ro = /;(?![^(]*\))/g, yo = /:([^]+)/, Io = /\/\*.*?\*\//gs;
function To(e) {
  const t = {};
  return e.replace(Io, "").split(Ro).forEach((n) => {
    if (n) {
      const s = n.split(yo);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function On(e) {
  let t = "";
  if (q(e))
    t = e;
  else if (I(e))
    for (let n = 0; n < e.length; n++) {
      const s = On(e[n]);
      s && (t += s + " ");
    }
  else if (G(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const No = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", xo = /* @__PURE__ */ Dn(No);
function ys(e) {
  return !!e || e === "";
}
const Lo = (e) => q(e) ? e : e == null ? "" : I(e) || G(e) && (e.toString === xs || !N(e.toString)) ? JSON.stringify(e, Is, 2) : String(e), Is = (e, t) => t && t.__v_isRef ? Is(e, t.value) : nt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, o]) => (n[`${s} =>`] = o, n), {})
} : Ts(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : G(t) && !I(t) && !Ls(t) ? String(t) : t, H = {}, tt = [], he = () => {
}, Mo = () => !1, Fo = /^on[^a-z]/, Wt = (e) => Fo.test(e), bn = (e) => e.startsWith("onUpdate:"), Y = Object.assign, Rn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Uo = Object.prototype.hasOwnProperty, M = (e, t) => Uo.call(e, t), I = Array.isArray, nt = (e) => Ht(e) === "[object Map]", Ts = (e) => Ht(e) === "[object Set]", N = (e) => typeof e == "function", q = (e) => typeof e == "string", yn = (e) => typeof e == "symbol", G = (e) => e !== null && typeof e == "object", Ns = (e) => G(e) && N(e.then) && N(e.catch), xs = Object.prototype.toString, Ht = (e) => xs.call(e), wo = (e) => Ht(e).slice(8, -1), Ls = (e) => Ht(e) === "[object Object]", In = (e) => q(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, It = /* @__PURE__ */ Dn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), jt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ko = /-(\w)/g, ye = jt((e) => e.replace(ko, (t, n) => n ? n.toUpperCase() : "")), Vo = /\B([A-Z])/g, me = jt((e) => e.replace(Vo, "-$1").toLowerCase()), Ms = jt((e) => e.charAt(0).toUpperCase() + e.slice(1)), Qt = jt((e) => e ? `on${Ms(e)}` : ""), mt = (e, t) => !Object.is(e, t), Tt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Ft = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, cn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Yn = (e) => {
  const t = q(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Zn;
const Wo = () => Zn || (Zn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let pe;
class Ho {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = pe, !t && pe && (this.index = (pe.scopes || (pe.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = pe;
      try {
        return pe = this, t();
      } finally {
        pe = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    pe = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    pe = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function jo(e, t = pe) {
  t && t.active && t.effects.push(e);
}
function Bo() {
  return pe;
}
const Tn = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Fs = (e) => (e.w & ke) > 0, Us = (e) => (e.n & ke) > 0, Ko = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= ke;
}, Xo = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let s = 0; s < t.length; s++) {
      const o = t[s];
      Fs(o) && !Us(o) ? o.delete(e) : t[n++] = o, o.w &= ~ke, o.n &= ~ke;
    }
    t.length = n;
  }
}, fn = /* @__PURE__ */ new WeakMap();
let ut = 0, ke = 1;
const un = 30;
let _e;
const ze = Symbol(""), pn = Symbol("");
class Nn {
  constructor(t, n = null, s) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, jo(this, s);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = _e, n = Ue;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = _e, _e = this, Ue = !0, ke = 1 << ++ut, ut <= un ? Ko(this) : Qn(this), this.fn();
    } finally {
      ut <= un && Xo(this), ke = 1 << --ut, _e = this.parent, Ue = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    _e === this ? this.deferStop = !0 : this.active && (Qn(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Qn(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Ue = !0;
const ws = [];
function lt() {
  ws.push(Ue), Ue = !1;
}
function at() {
  const e = ws.pop();
  Ue = e === void 0 ? !0 : e;
}
function re(e, t, n) {
  if (Ue && _e) {
    let s = fn.get(e);
    s || fn.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || s.set(n, o = Tn()), ks(o);
  }
}
function ks(e, t) {
  let n = !1;
  ut <= un ? Us(e) || (e.n |= ke, n = !Fs(e)) : n = !e.has(_e), n && (e.add(_e), _e.deps.push(e));
}
function Ne(e, t, n, s, o, r) {
  const i = fn.get(e);
  if (!i)
    return;
  let a = [];
  if (t === "clear")
    a = [...i.values()];
  else if (n === "length" && I(e)) {
    const f = Number(s);
    i.forEach((p, d) => {
      (d === "length" || d >= f) && a.push(p);
    });
  } else
    switch (n !== void 0 && a.push(i.get(n)), t) {
      case "add":
        I(e) ? In(n) && a.push(i.get("length")) : (a.push(i.get(ze)), nt(e) && a.push(i.get(pn)));
        break;
      case "delete":
        I(e) || (a.push(i.get(ze)), nt(e) && a.push(i.get(pn)));
        break;
      case "set":
        nt(e) && a.push(i.get(ze));
        break;
    }
  if (a.length === 1)
    a[0] && dn(a[0]);
  else {
    const f = [];
    for (const p of a)
      p && f.push(...p);
    dn(Tn(f));
  }
}
function dn(e, t) {
  const n = I(e) ? e : [...e];
  for (const s of n)
    s.computed && es(s);
  for (const s of n)
    s.computed || es(s);
}
function es(e, t) {
  (e !== _e || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const Go = /* @__PURE__ */ Dn("__proto__,__v_isRef,__isVue"), Vs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(yn)
), $o = /* @__PURE__ */ xn(), Jo = /* @__PURE__ */ xn(!1, !0), zo = /* @__PURE__ */ xn(!0), ts = /* @__PURE__ */ qo();
function qo() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = F(this);
      for (let r = 0, i = this.length; r < i; r++)
        re(s, "get", r + "");
      const o = s[t](...n);
      return o === -1 || o === !1 ? s[t](...n.map(F)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      lt();
      const s = F(this)[t].apply(this, n);
      return at(), s;
    };
  }), e;
}
function Yo(e) {
  const t = F(this);
  return re(t, "has", e), t.hasOwnProperty(e);
}
function xn(e = !1, t = !1) {
  return function(s, o, r) {
    if (o === "__v_isReactive")
      return !e;
    if (o === "__v_isReadonly")
      return e;
    if (o === "__v_isShallow")
      return t;
    if (o === "__v_raw" && r === (e ? t ? dr : Ks : t ? Bs : js).get(s))
      return s;
    const i = I(s);
    if (!e) {
      if (i && M(ts, o))
        return Reflect.get(ts, o, r);
      if (o === "hasOwnProperty")
        return Yo;
    }
    const a = Reflect.get(s, o, r);
    return (yn(o) ? Vs.has(o) : Go(o)) || (e || re(s, "get", o), t) ? a : ee(a) ? i && In(o) ? a : a.value : G(a) ? e ? Xs(a) : Fn(a) : a;
  };
}
const Zo = /* @__PURE__ */ Ws(), Qo = /* @__PURE__ */ Ws(!0);
function Ws(e = !1) {
  return function(n, s, o, r) {
    let i = n[s];
    if (rt(i) && ee(i) && !ee(o))
      return !1;
    if (!e && (!Ut(o) && !rt(o) && (i = F(i), o = F(o)), !I(n) && ee(i) && !ee(o)))
      return i.value = o, !0;
    const a = I(n) && In(s) ? Number(s) < n.length : M(n, s), f = Reflect.set(n, s, o, r);
    return n === F(r) && (a ? mt(o, i) && Ne(n, "set", s, o) : Ne(n, "add", s, o)), f;
  };
}
function er(e, t) {
  const n = M(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && Ne(e, "delete", t, void 0), s;
}
function tr(e, t) {
  const n = Reflect.has(e, t);
  return (!yn(t) || !Vs.has(t)) && re(e, "has", t), n;
}
function nr(e) {
  return re(e, "iterate", I(e) ? "length" : ze), Reflect.ownKeys(e);
}
const Hs = {
  get: $o,
  set: Zo,
  deleteProperty: er,
  has: tr,
  ownKeys: nr
}, sr = {
  get: zo,
  set(e, t) {
    return !0;
  },
  deleteProperty(e, t) {
    return !0;
  }
}, or = /* @__PURE__ */ Y({}, Hs, {
  get: Jo,
  set: Qo
}), Ln = (e) => e, Bt = (e) => Reflect.getPrototypeOf(e);
function At(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const o = F(e), r = F(t);
  n || (t !== r && re(o, "get", t), re(o, "get", r));
  const { has: i } = Bt(o), a = s ? Ln : n ? wn : _t;
  if (i.call(o, t))
    return a(e.get(t));
  if (i.call(o, r))
    return a(e.get(r));
  e !== o && e.get(t);
}
function St(e, t = !1) {
  const n = this.__v_raw, s = F(n), o = F(e);
  return t || (e !== o && re(s, "has", e), re(s, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o);
}
function Dt(e, t = !1) {
  return e = e.__v_raw, !t && re(F(e), "iterate", ze), Reflect.get(e, "size", e);
}
function ns(e) {
  e = F(e);
  const t = F(this);
  return Bt(t).has.call(t, e) || (t.add(e), Ne(t, "add", e, e)), this;
}
function ss(e, t) {
  t = F(t);
  const n = F(this), { has: s, get: o } = Bt(n);
  let r = s.call(n, e);
  r || (e = F(e), r = s.call(n, e));
  const i = o.call(n, e);
  return n.set(e, t), r ? mt(t, i) && Ne(n, "set", e, t) : Ne(n, "add", e, t), this;
}
function os(e) {
  const t = F(this), { has: n, get: s } = Bt(t);
  let o = n.call(t, e);
  o || (e = F(e), o = n.call(t, e)), s && s.call(t, e);
  const r = t.delete(e);
  return o && Ne(t, "delete", e, void 0), r;
}
function rs() {
  const e = F(this), t = e.size !== 0, n = e.clear();
  return t && Ne(e, "clear", void 0, void 0), n;
}
function Ot(e, t) {
  return function(s, o) {
    const r = this, i = r.__v_raw, a = F(i), f = t ? Ln : e ? wn : _t;
    return !e && re(a, "iterate", ze), i.forEach((p, d) => s.call(o, f(p), f(d), r));
  };
}
function bt(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = F(o), i = nt(r), a = e === "entries" || e === Symbol.iterator && i, f = e === "keys" && i, p = o[e](...s), d = n ? Ln : t ? wn : _t;
    return !t && re(r, "iterate", f ? pn : ze), {
      // iterator protocol
      next() {
        const { value: P, done: E } = p.next();
        return E ? { value: P, done: E } : {
          value: a ? [d(P[0]), d(P[1])] : d(P),
          done: E
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Me(e) {
  return function(...t) {
    return e === "delete" ? !1 : this;
  };
}
function rr() {
  const e = {
    get(r) {
      return At(this, r);
    },
    get size() {
      return Dt(this);
    },
    has: St,
    add: ns,
    set: ss,
    delete: os,
    clear: rs,
    forEach: Ot(!1, !1)
  }, t = {
    get(r) {
      return At(this, r, !1, !0);
    },
    get size() {
      return Dt(this);
    },
    has: St,
    add: ns,
    set: ss,
    delete: os,
    clear: rs,
    forEach: Ot(!1, !0)
  }, n = {
    get(r) {
      return At(this, r, !0);
    },
    get size() {
      return Dt(this, !0);
    },
    has(r) {
      return St.call(this, r, !0);
    },
    add: Me(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: Me(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: Me(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: Me(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: Ot(!0, !1)
  }, s = {
    get(r) {
      return At(this, r, !0, !0);
    },
    get size() {
      return Dt(this, !0);
    },
    has(r) {
      return St.call(this, r, !0);
    },
    add: Me(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: Me(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: Me(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: Me(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: Ot(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    e[r] = bt(r, !1, !1), n[r] = bt(r, !0, !1), t[r] = bt(r, !1, !0), s[r] = bt(r, !0, !0);
  }), [
    e,
    n,
    t,
    s
  ];
}
const [ir, lr, ar, cr] = /* @__PURE__ */ rr();
function Mn(e, t) {
  const n = t ? e ? cr : ar : e ? lr : ir;
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(M(n, o) && o in s ? n : s, o, r);
}
const fr = {
  get: /* @__PURE__ */ Mn(!1, !1)
}, ur = {
  get: /* @__PURE__ */ Mn(!1, !0)
}, pr = {
  get: /* @__PURE__ */ Mn(!0, !1)
}, js = /* @__PURE__ */ new WeakMap(), Bs = /* @__PURE__ */ new WeakMap(), Ks = /* @__PURE__ */ new WeakMap(), dr = /* @__PURE__ */ new WeakMap();
function mr(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function _r(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : mr(wo(e));
}
function Fn(e) {
  return rt(e) ? e : Un(e, !1, Hs, fr, js);
}
function gr(e) {
  return Un(e, !1, or, ur, Bs);
}
function Xs(e) {
  return Un(e, !0, sr, pr, Ks);
}
function Un(e, t, n, s, o) {
  if (!G(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = o.get(e);
  if (r)
    return r;
  const i = _r(e);
  if (i === 0)
    return e;
  const a = new Proxy(e, i === 2 ? s : n);
  return o.set(e, a), a;
}
function st(e) {
  return rt(e) ? st(e.__v_raw) : !!(e && e.__v_isReactive);
}
function rt(e) {
  return !!(e && e.__v_isReadonly);
}
function Ut(e) {
  return !!(e && e.__v_isShallow);
}
function Gs(e) {
  return st(e) || rt(e);
}
function F(e) {
  const t = e && e.__v_raw;
  return t ? F(t) : e;
}
function $s(e) {
  return Ft(e, "__v_skip", !0), e;
}
const _t = (e) => G(e) ? Fn(e) : e, wn = (e) => G(e) ? Xs(e) : e;
function Js(e) {
  Ue && _e && (e = F(e), ks(e.dep || (e.dep = Tn())));
}
function zs(e, t) {
  e = F(e);
  const n = e.dep;
  n && dn(n);
}
function ee(e) {
  return !!(e && e.__v_isRef === !0);
}
function Rt(e) {
  return hr(e, !1);
}
function hr(e, t) {
  return ee(e) ? e : new Cr(e, t);
}
class Cr {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : F(t), this._value = n ? t : _t(t);
  }
  get value() {
    return Js(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Ut(t) || rt(t);
    t = n ? t : F(t), mt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : _t(t), zs(this));
  }
}
function Pr(e) {
  return ee(e) ? e.value : e;
}
const vr = {
  get: (e, t, n) => Pr(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return ee(o) && !ee(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function qs(e) {
  return st(e) ? e : new Proxy(e, vr);
}
var Ys;
class Er {
  constructor(t, n, s, o) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Ys] = !1, this._dirty = !0, this.effect = new Nn(t, () => {
      this._dirty || (this._dirty = !0, zs(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = s;
  }
  get value() {
    const t = F(this);
    return Js(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Ys = "__v_isReadonly";
function Ar(e, t, n = !1) {
  let s, o;
  const r = N(e);
  return r ? (s = e, o = he) : (s = e.get, o = e.set), new Er(s, o, r || !o, n);
}
function we(e, t, n, s) {
  let o;
  try {
    o = s ? e(...s) : e();
  } catch (r) {
    Kt(r, t, n);
  }
  return o;
}
function fe(e, t, n, s) {
  if (N(e)) {
    const r = we(e, t, n, s);
    return r && Ns(r) && r.catch((i) => {
      Kt(i, t, n);
    }), r;
  }
  const o = [];
  for (let r = 0; r < e.length; r++)
    o.push(fe(e[r], t, n, s));
  return o;
}
function Kt(e, t, n, s = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const i = t.proxy, a = n;
    for (; r; ) {
      const p = r.ec;
      if (p) {
        for (let d = 0; d < p.length; d++)
          if (p[d](e, i, a) === !1)
            return;
      }
      r = r.parent;
    }
    const f = t.appContext.config.errorHandler;
    if (f) {
      we(f, null, 10, [e, i, a]);
      return;
    }
  }
  Sr(e, n, o, s);
}
function Sr(e, t, n, s = !0) {
  console.error(e);
}
let gt = !1, mn = !1;
const Q = [];
let Se = 0;
const ot = [];
let be = null, Xe = 0;
const Zs = /* @__PURE__ */ Promise.resolve();
let kn = null;
function Qs(e) {
  const t = kn || Zs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Dr(e) {
  let t = Se + 1, n = Q.length;
  for (; t < n; ) {
    const s = t + n >>> 1;
    ht(Q[s]) < e ? t = s + 1 : n = s;
  }
  return t;
}
function Vn(e) {
  (!Q.length || !Q.includes(e, gt && e.allowRecurse ? Se + 1 : Se)) && (e.id == null ? Q.push(e) : Q.splice(Dr(e.id), 0, e), eo());
}
function eo() {
  !gt && !mn && (mn = !0, kn = Zs.then(no));
}
function Or(e) {
  const t = Q.indexOf(e);
  t > Se && Q.splice(t, 1);
}
function br(e) {
  I(e) ? ot.push(...e) : (!be || !be.includes(e, e.allowRecurse ? Xe + 1 : Xe)) && ot.push(e), eo();
}
function is(e, t = gt ? Se + 1 : 0) {
  for (; t < Q.length; t++) {
    const n = Q[t];
    n && n.pre && (Q.splice(t, 1), t--, n());
  }
}
function to(e) {
  if (ot.length) {
    const t = [...new Set(ot)];
    if (ot.length = 0, be) {
      be.push(...t);
      return;
    }
    for (be = t, be.sort((n, s) => ht(n) - ht(s)), Xe = 0; Xe < be.length; Xe++)
      be[Xe]();
    be = null, Xe = 0;
  }
}
const ht = (e) => e.id == null ? 1 / 0 : e.id, Rr = (e, t) => {
  const n = ht(e) - ht(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function no(e) {
  mn = !1, gt = !0, Q.sort(Rr);
  const t = he;
  try {
    for (Se = 0; Se < Q.length; Se++) {
      const n = Q[Se];
      n && n.active !== !1 && we(
        n,
        null,
        14
        /* ErrorCodes.SCHEDULER */
      );
    }
  } finally {
    Se = 0, Q.length = 0, to(), gt = !1, kn = null, (Q.length || ot.length) && no();
  }
}
function yr(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || H;
  let o = n;
  const r = t.startsWith("update:"), i = r && t.slice(7);
  if (i && i in s) {
    const d = `${i === "modelValue" ? "model" : i}Modifiers`, { number: P, trim: E } = s[d] || H;
    E && (o = n.map((R) => q(R) ? R.trim() : R)), P && (o = n.map(cn));
  }
  let a, f = s[a = Qt(t)] || // also try camelCase event handler (#2249)
  s[a = Qt(ye(t))];
  !f && r && (f = s[a = Qt(me(t))]), f && fe(f, e, 6, o);
  const p = s[a + "Once"];
  if (p) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, fe(p, e, 6, o);
  }
}
function so(e, t, n = !1) {
  const s = t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const r = e.emits;
  let i = {}, a = !1;
  if (!N(e)) {
    const f = (p) => {
      const d = so(p, t, !0);
      d && (a = !0, Y(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !r && !a ? (G(e) && s.set(e, null), null) : (I(r) ? r.forEach((f) => i[f] = null) : Y(i, r), G(e) && s.set(e, i), i);
}
function Xt(e, t) {
  return !e || !Wt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), M(e, t[0].toLowerCase() + t.slice(1)) || M(e, me(t)) || M(e, t));
}
let ce = null, oo = null;
function wt(e) {
  const t = ce;
  return ce = e, oo = e && e.type.__scopeId || null, t;
}
function Ir(e, t = ce, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && _s(-1);
    const r = wt(t);
    let i;
    try {
      i = e(...o);
    } finally {
      wt(r), s._d && _s(1);
    }
    return i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function en(e) {
  const { type: t, vnode: n, proxy: s, withProxy: o, props: r, propsOptions: [i], slots: a, attrs: f, emit: p, render: d, renderCache: P, data: E, setupState: R, ctx: U, inheritAttrs: b } = e;
  let j, w;
  const te = wt(e);
  try {
    if (n.shapeFlag & 4) {
      const B = o || s;
      j = Ae(d.call(B, B, P, r, R, E, U)), w = f;
    } else {
      const B = t;
      j = Ae(B.length > 1 ? B(r, { attrs: f, slots: a, emit: p }) : B(
        r,
        null
        /* we know it doesn't need it */
      )), w = t.props ? f : Tr(f);
    }
  } catch (B) {
    dt.length = 0, Kt(
      B,
      e,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ), j = Te(Ie);
  }
  let T = j;
  if (w && b !== !1) {
    const B = Object.keys(w), { shapeFlag: Z } = T;
    B.length && Z & 7 && (i && B.some(bn) && (w = Nr(w, i)), T = Ve(T, w));
  }
  return n.dirs && (T = Ve(T), T.dirs = T.dirs ? T.dirs.concat(n.dirs) : n.dirs), n.transition && (T.transition = n.transition), j = T, wt(te), j;
}
const Tr = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Wt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Nr = (e, t) => {
  const n = {};
  for (const s in e)
    (!bn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function xr(e, t, n) {
  const { props: s, children: o, component: r } = e, { props: i, children: a, patchFlag: f } = t, p = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return s ? ls(s, i, p) : !!i;
    if (f & 8) {
      const d = t.dynamicProps;
      for (let P = 0; P < d.length; P++) {
        const E = d[P];
        if (i[E] !== s[E] && !Xt(p, E))
          return !0;
      }
    }
  } else
    return (o || a) && (!a || !a.$stable) ? !0 : s === i ? !1 : s ? i ? ls(s, i, p) : !0 : !!i;
  return !1;
}
function ls(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    if (t[r] !== e[r] && !Xt(n, r))
      return !0;
  }
  return !1;
}
function Lr({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Mr = (e) => e.__isSuspense;
function Fr(e, t) {
  t && t.pendingBranch ? I(e) ? t.effects.push(...e) : t.effects.push(e) : br(e);
}
function Ur(e, t) {
  if (J) {
    let n = J.provides;
    const s = J.parent && J.parent.provides;
    s === n && (n = J.provides = Object.create(s)), n[e] = t;
  }
}
function Nt(e, t, n = !1) {
  const s = J || ce;
  if (s) {
    const o = s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && N(t) ? t.call(s.proxy) : t;
  }
}
const yt = {};
function tn(e, t, n) {
  return ro(e, t, n);
}
function ro(e, t, { immediate: n, deep: s, flush: o, onTrack: r, onTrigger: i } = H) {
  const a = Bo() === (J == null ? void 0 : J.scope) ? J : null;
  let f, p = !1, d = !1;
  if (ee(e) ? (f = () => e.value, p = Ut(e)) : st(e) ? (f = () => e, s = !0) : I(e) ? (d = !0, p = e.some((T) => st(T) || Ut(T)), f = () => e.map((T) => {
    if (ee(T))
      return T.value;
    if (st(T))
      return Je(T);
    if (N(T))
      return we(
        T,
        a,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
  })) : N(e) ? t ? f = () => we(
    e,
    a,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : f = () => {
    if (!(a && a.isUnmounted))
      return P && P(), fe(e, a, 3, [E]);
  } : f = he, t && s) {
    const T = f;
    f = () => Je(T());
  }
  let P, E = (T) => {
    P = w.onStop = () => {
      we(
        T,
        a,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, R;
  if (Pt)
    if (E = he, t ? n && fe(t, a, 3, [
      f(),
      d ? [] : void 0,
      E
    ]) : f(), o === "sync") {
      const T = Mi();
      R = T.__watcherHandles || (T.__watcherHandles = []);
    } else
      return he;
  let U = d ? new Array(e.length).fill(yt) : yt;
  const b = () => {
    if (w.active)
      if (t) {
        const T = w.run();
        (s || p || (d ? T.some((B, Z) => mt(B, U[Z])) : mt(T, U))) && (P && P(), fe(t, a, 3, [
          T,
          // pass undefined as the old value when it's changed for the first time
          U === yt ? void 0 : d && U[0] === yt ? [] : U,
          E
        ]), U = T);
      } else
        w.run();
  };
  b.allowRecurse = !!t;
  let j;
  o === "sync" ? j = b : o === "post" ? j = () => oe(b, a && a.suspense) : (b.pre = !0, a && (b.id = a.uid), j = () => Vn(b));
  const w = new Nn(f, j);
  t ? n ? b() : U = w.run() : o === "post" ? oe(w.run.bind(w), a && a.suspense) : w.run();
  const te = () => {
    w.stop(), a && a.scope && Rn(a.scope.effects, w);
  };
  return R && R.push(te), te;
}
function wr(e, t, n) {
  const s = this.proxy, o = q(e) ? e.includes(".") ? io(s, e) : () => s[e] : e.bind(s, s);
  let r;
  N(t) ? r = t : (r = t.handler, n = t);
  const i = J;
  it(this);
  const a = ro(o, r.bind(s), n);
  return i ? it(i) : qe(), a;
}
function io(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
function Je(e, t) {
  if (!G(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), ee(e))
    Je(e.value, t);
  else if (I(e))
    for (let n = 0; n < e.length; n++)
      Je(e[n], t);
  else if (Ts(e) || nt(e))
    e.forEach((n) => {
      Je(n, t);
    });
  else if (Ls(e))
    for (const n in e)
      Je(e[n], t);
  return e;
}
function kr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Wn(() => {
    e.isMounted = !0;
  }), uo(() => {
    e.isUnmounting = !0;
  }), e;
}
const ae = [Function, Array], Vr = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: ae,
    onEnter: ae,
    onAfterEnter: ae,
    onEnterCancelled: ae,
    // leave
    onBeforeLeave: ae,
    onLeave: ae,
    onAfterLeave: ae,
    onLeaveCancelled: ae,
    // appear
    onBeforeAppear: ae,
    onAppear: ae,
    onAfterAppear: ae,
    onAppearCancelled: ae
  },
  setup(e, { slots: t }) {
    const n = bi(), s = kr();
    let o;
    return () => {
      const r = t.default && ao(t.default(), !0);
      if (!r || !r.length)
        return;
      let i = r[0];
      if (r.length > 1) {
        for (const b of r)
          if (b.type !== Ie) {
            i = b;
            break;
          }
      }
      const a = F(e), { mode: f } = a;
      if (s.isLeaving)
        return nn(i);
      const p = as(i);
      if (!p)
        return nn(i);
      const d = _n(p, a, s, n);
      gn(p, d);
      const P = n.subTree, E = P && as(P);
      let R = !1;
      const { getTransitionKey: U } = p.type;
      if (U) {
        const b = U();
        o === void 0 ? o = b : b !== o && (o = b, R = !0);
      }
      if (E && E.type !== Ie && (!Ge(p, E) || R)) {
        const b = _n(E, a, s, n);
        if (gn(E, b), f === "out-in")
          return s.isLeaving = !0, b.afterLeave = () => {
            s.isLeaving = !1, n.update.active !== !1 && n.update();
          }, nn(i);
        f === "in-out" && p.type !== Ie && (b.delayLeave = (j, w, te) => {
          const T = lo(s, E);
          T[String(E.key)] = E, j._leaveCb = () => {
            w(), j._leaveCb = void 0, delete d.delayedLeave;
          }, d.delayedLeave = te;
        });
      }
      return i;
    };
  }
}, Wr = Vr;
function lo(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function _n(e, t, n, s) {
  const { appear: o, mode: r, persisted: i = !1, onBeforeEnter: a, onEnter: f, onAfterEnter: p, onEnterCancelled: d, onBeforeLeave: P, onLeave: E, onAfterLeave: R, onLeaveCancelled: U, onBeforeAppear: b, onAppear: j, onAfterAppear: w, onAppearCancelled: te } = t, T = String(e.key), B = lo(n, e), Z = (x, z) => {
    x && fe(x, s, 9, z);
  }, Ye = (x, z) => {
    const K = z[1];
    Z(x, z), I(x) ? x.every((ie) => ie.length <= 1) && K() : x.length <= 1 && K();
  }, Le = {
    mode: r,
    persisted: i,
    beforeEnter(x) {
      let z = a;
      if (!n.isMounted)
        if (o)
          z = b || a;
        else
          return;
      x._leaveCb && x._leaveCb(
        !0
        /* cancelled */
      );
      const K = B[T];
      K && Ge(e, K) && K.el._leaveCb && K.el._leaveCb(), Z(z, [x]);
    },
    enter(x) {
      let z = f, K = p, ie = d;
      if (!n.isMounted)
        if (o)
          z = j || f, K = w || p, ie = te || d;
        else
          return;
      let Ce = !1;
      const De = x._enterCb = (ct) => {
        Ce || (Ce = !0, ct ? Z(ie, [x]) : Z(K, [x]), Le.delayedLeave && Le.delayedLeave(), x._enterCb = void 0);
      };
      z ? Ye(z, [x, De]) : De();
    },
    leave(x, z) {
      const K = String(e.key);
      if (x._enterCb && x._enterCb(
        !0
        /* cancelled */
      ), n.isUnmounting)
        return z();
      Z(P, [x]);
      let ie = !1;
      const Ce = x._leaveCb = (De) => {
        ie || (ie = !0, z(), De ? Z(U, [x]) : Z(R, [x]), x._leaveCb = void 0, B[K] === e && delete B[K]);
      };
      B[K] = e, E ? Ye(E, [x, Ce]) : Ce();
    },
    clone(x) {
      return _n(x, t, n, s);
    }
  };
  return Le;
}
function nn(e) {
  if (Gt(e))
    return e = Ve(e), e.children = null, e;
}
function as(e) {
  return Gt(e) ? e.children ? e.children[0] : void 0 : e;
}
function gn(e, t) {
  e.shapeFlag & 6 && e.component ? gn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ao(e, t = !1, n) {
  let s = [], o = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === de ? (i.patchFlag & 128 && o++, s = s.concat(ao(i.children, t, a))) : (t || i.type !== Ie) && s.push(a != null ? Ve(i, { key: a }) : i);
  }
  if (o > 1)
    for (let r = 0; r < s.length; r++)
      s[r].patchFlag = -2;
  return s;
}
function co(e) {
  return N(e) ? { setup: e, name: e.name } : e;
}
const xt = (e) => !!e.type.__asyncLoader, Gt = (e) => e.type.__isKeepAlive;
function Hr(e, t) {
  fo(e, "a", t);
}
function jr(e, t) {
  fo(e, "da", t);
}
function fo(e, t, n = J) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if ($t(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Gt(o.parent.vnode) && Br(s, t, n, o), o = o.parent;
  }
}
function Br(e, t, n, s) {
  const o = $t(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  po(() => {
    Rn(s[t], o);
  }, n);
}
function $t(e, t, n = J, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      lt(), it(n);
      const a = fe(t, n, e, i);
      return qe(), at(), a;
    });
    return s ? o.unshift(r) : o.push(r), r;
  }
}
const xe = (e) => (t, n = J) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Pt || e === "sp") && $t(e, (...s) => t(...s), n)
), Kr = xe(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), Wn = xe(
  "m"
  /* LifecycleHooks.MOUNTED */
), Xr = xe(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), Gr = xe(
  "u"
  /* LifecycleHooks.UPDATED */
), uo = xe(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), po = xe(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), $r = xe(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), Jr = xe(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), zr = xe(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function qr(e, t = J) {
  $t("ec", e, t);
}
function Yr(e, t) {
  const n = ce;
  if (n === null)
    return e;
  const s = qt(n) || n.proxy, o = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, a, f, p = H] = t[r];
    i && (N(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Je(a), o.push({
      dir: i,
      instance: s,
      value: a,
      oldValue: void 0,
      arg: f,
      modifiers: p
    }));
  }
  return e;
}
function je(e, t, n, s) {
  const o = e.dirs, r = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const a = o[i];
    r && (a.oldValue = r[i].value);
    let f = a.dir[s];
    f && (lt(), fe(f, n, 8, [
      e.el,
      a,
      e,
      t
    ]), at());
  }
}
const Zr = Symbol(), hn = (e) => e ? So(e) ? qt(e) || e.proxy : hn(e.parent) : null, pt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Y(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => hn(e.parent),
    $root: (e) => hn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Hn(e),
    $forceUpdate: (e) => e.f || (e.f = () => Vn(e.update)),
    $nextTick: (e) => e.n || (e.n = Qs.bind(e.proxy)),
    $watch: (e) => wr.bind(e)
  })
), sn = (e, t) => e !== H && !e.__isScriptSetup && M(e, t), Qr = {
  get({ _: e }, t) {
    const { ctx: n, setupState: s, data: o, props: r, accessCache: i, type: a, appContext: f } = e;
    let p;
    if (t[0] !== "$") {
      const R = i[t];
      if (R !== void 0)
        switch (R) {
          case 1:
            return s[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (sn(s, t))
          return i[t] = 1, s[t];
        if (o !== H && M(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (p = e.propsOptions[0]) && M(p, t)
        )
          return i[t] = 3, r[t];
        if (n !== H && M(n, t))
          return i[t] = 4, n[t];
        Cn && (i[t] = 0);
      }
    }
    const d = pt[t];
    let P, E;
    if (d)
      return t === "$attrs" && re(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (P = a.__cssModules) && (P = P[t])
    )
      return P;
    if (n !== H && M(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      E = f.config.globalProperties, M(E, t)
    )
      return E[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return sn(o, t) ? (o[t] = n, !0) : s !== H && M(s, t) ? (s[t] = n, !0) : M(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: r } }, i) {
    let a;
    return !!n[i] || e !== H && M(e, i) || sn(t, i) || (a = r[0]) && M(a, i) || M(s, i) || M(pt, i) || M(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : M(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
let Cn = !0;
function ei(e) {
  const t = Hn(e), n = e.proxy, s = e.ctx;
  Cn = !1, t.beforeCreate && cs(
    t.beforeCreate,
    e,
    "bc"
    /* LifecycleHooks.BEFORE_CREATE */
  );
  const {
    // state
    data: o,
    computed: r,
    methods: i,
    watch: a,
    provide: f,
    inject: p,
    // lifecycle
    created: d,
    beforeMount: P,
    mounted: E,
    beforeUpdate: R,
    updated: U,
    activated: b,
    deactivated: j,
    beforeDestroy: w,
    beforeUnmount: te,
    destroyed: T,
    unmounted: B,
    render: Z,
    renderTracked: Ye,
    renderTriggered: Le,
    errorCaptured: x,
    serverPrefetch: z,
    // public API
    expose: K,
    inheritAttrs: ie,
    // assets
    components: Ce,
    directives: De,
    filters: ct
  } = t;
  if (p && ti(p, s, null, e.appContext.config.unwrapInjectedRef), i)
    for (const X in i) {
      const V = i[X];
      N(V) && (s[X] = V.bind(n));
    }
  if (o) {
    const X = o.call(n, n);
    G(X) && (e.data = Fn(X));
  }
  if (Cn = !0, r)
    for (const X in r) {
      const V = r[X], We = N(V) ? V.bind(n, n) : N(V.get) ? V.get.bind(n, n) : he, vt = !N(V) && N(V.set) ? V.set.bind(n) : he, He = xi({
        get: We,
        set: vt
      });
      Object.defineProperty(s, X, {
        enumerable: !0,
        configurable: !0,
        get: () => He.value,
        set: (Pe) => He.value = Pe
      });
    }
  if (a)
    for (const X in a)
      mo(a[X], s, n, X);
  if (f) {
    const X = N(f) ? f.call(n) : f;
    Reflect.ownKeys(X).forEach((V) => {
      Ur(V, X[V]);
    });
  }
  d && cs(
    d,
    e,
    "c"
    /* LifecycleHooks.CREATED */
  );
  function ne(X, V) {
    I(V) ? V.forEach((We) => X(We.bind(n))) : V && X(V.bind(n));
  }
  if (ne(Kr, P), ne(Wn, E), ne(Xr, R), ne(Gr, U), ne(Hr, b), ne(jr, j), ne(qr, x), ne(zr, Ye), ne(Jr, Le), ne(uo, te), ne(po, B), ne($r, z), I(K))
    if (K.length) {
      const X = e.exposed || (e.exposed = {});
      K.forEach((V) => {
        Object.defineProperty(X, V, {
          get: () => n[V],
          set: (We) => n[V] = We
        });
      });
    } else
      e.exposed || (e.exposed = {});
  Z && e.render === he && (e.render = Z), ie != null && (e.inheritAttrs = ie), Ce && (e.components = Ce), De && (e.directives = De);
}
function ti(e, t, n = he, s = !1) {
  I(e) && (e = Pn(e));
  for (const o in e) {
    const r = e[o];
    let i;
    G(r) ? "default" in r ? i = Nt(
      r.from || o,
      r.default,
      !0
      /* treat default function as factory */
    ) : i = Nt(r.from || o) : i = Nt(r), ee(i) && s ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (a) => i.value = a
    }) : t[o] = i;
  }
}
function cs(e, t, n) {
  fe(I(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function mo(e, t, n, s) {
  const o = s.includes(".") ? io(n, s) : () => n[s];
  if (q(e)) {
    const r = t[e];
    N(r) && tn(o, r);
  } else if (N(e))
    tn(o, e.bind(n));
  else if (G(e))
    if (I(e))
      e.forEach((r) => mo(r, t, n, s));
    else {
      const r = N(e.handler) ? e.handler.bind(n) : t[e.handler];
      N(r) && tn(o, r, e);
    }
}
function Hn(e) {
  const t = e.type, { mixins: n, extends: s } = t, { mixins: o, optionsCache: r, config: { optionMergeStrategies: i } } = e.appContext, a = r.get(t);
  let f;
  return a ? f = a : !o.length && !n && !s ? f = t : (f = {}, o.length && o.forEach((p) => kt(f, p, i, !0)), kt(f, t, i)), G(t) && r.set(t, f), f;
}
function kt(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && kt(e, r, n, !0), o && o.forEach((i) => kt(e, i, n, !0));
  for (const i in t)
    if (!(s && i === "expose")) {
      const a = ni[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const ni = {
  data: fs,
  props: Ke,
  emits: Ke,
  // objects
  methods: Ke,
  computed: Ke,
  // lifecycle
  beforeCreate: se,
  created: se,
  beforeMount: se,
  mounted: se,
  beforeUpdate: se,
  updated: se,
  beforeDestroy: se,
  beforeUnmount: se,
  destroyed: se,
  unmounted: se,
  activated: se,
  deactivated: se,
  errorCaptured: se,
  serverPrefetch: se,
  // assets
  components: Ke,
  directives: Ke,
  // watch
  watch: oi,
  // provide / inject
  provide: fs,
  inject: si
};
function fs(e, t) {
  return t ? e ? function() {
    return Y(N(e) ? e.call(this, this) : e, N(t) ? t.call(this, this) : t);
  } : t : e;
}
function si(e, t) {
  return Ke(Pn(e), Pn(t));
}
function Pn(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function se(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ke(e, t) {
  return e ? Y(Y(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function oi(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = Y(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = se(e[s], t[s]);
  return n;
}
function ri(e, t, n, s = !1) {
  const o = {}, r = {};
  Ft(r, zt, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), _o(e, t, o, r);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  n ? e.props = s ? o : gr(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
}
function ii(e, t, n, s) {
  const { props: o, attrs: r, vnode: { patchFlag: i } } = e, a = F(o), [f] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let P = 0; P < d.length; P++) {
        let E = d[P];
        if (Xt(e.emitsOptions, E))
          continue;
        const R = t[E];
        if (f)
          if (M(r, E))
            R !== r[E] && (r[E] = R, p = !0);
          else {
            const U = ye(E);
            o[U] = vn(
              f,
              a,
              U,
              R,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          R !== r[E] && (r[E] = R, p = !0);
      }
    }
  } else {
    _o(e, t, o, r) && (p = !0);
    let d;
    for (const P in a)
      (!t || // for camelCase
      !M(t, P) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = me(P)) === P || !M(t, d))) && (f ? n && // for camelCase
      (n[P] !== void 0 || // for kebab-case
      n[d] !== void 0) && (o[P] = vn(
        f,
        a,
        P,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete o[P]);
    if (r !== a)
      for (const P in r)
        (!t || !M(t, P)) && (delete r[P], p = !0);
  }
  p && Ne(e, "set", "$attrs");
}
function _o(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let f in t) {
      if (It(f))
        continue;
      const p = t[f];
      let d;
      o && M(o, d = ye(f)) ? !r || !r.includes(d) ? n[d] = p : (a || (a = {}))[d] = p : Xt(e.emitsOptions, f) || (!(f in s) || p !== s[f]) && (s[f] = p, i = !0);
    }
  if (r) {
    const f = F(n), p = a || H;
    for (let d = 0; d < r.length; d++) {
      const P = r[d];
      n[P] = vn(o, f, P, p[P], e, !M(p, P));
    }
  }
  return i;
}
function vn(e, t, n, s, o, r) {
  const i = e[n];
  if (i != null) {
    const a = M(i, "default");
    if (a && s === void 0) {
      const f = i.default;
      if (i.type !== Function && N(f)) {
        const { propsDefaults: p } = o;
        n in p ? s = p[n] : (it(o), s = p[n] = f.call(null, t), qe());
      } else
        s = f;
    }
    i[
      0
      /* BooleanFlags.shouldCast */
    ] && (r && !a ? s = !1 : i[
      1
      /* BooleanFlags.shouldCastTrue */
    ] && (s === "" || s === me(n)) && (s = !0));
  }
  return s;
}
function go(e, t, n = !1) {
  const s = t.propsCache, o = s.get(e);
  if (o)
    return o;
  const r = e.props, i = {}, a = [];
  let f = !1;
  if (!N(e)) {
    const d = (P) => {
      f = !0;
      const [E, R] = go(P, t, !0);
      Y(i, E), R && a.push(...R);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!r && !f)
    return G(e) && s.set(e, tt), tt;
  if (I(r))
    for (let d = 0; d < r.length; d++) {
      const P = ye(r[d]);
      us(P) && (i[P] = H);
    }
  else if (r)
    for (const d in r) {
      const P = ye(d);
      if (us(P)) {
        const E = r[d], R = i[P] = I(E) || N(E) ? { type: E } : Object.assign({}, E);
        if (R) {
          const U = ms(Boolean, R.type), b = ms(String, R.type);
          R[
            0
            /* BooleanFlags.shouldCast */
          ] = U > -1, R[
            1
            /* BooleanFlags.shouldCastTrue */
          ] = b < 0 || U < b, (U > -1 || M(R, "default")) && a.push(P);
        }
      }
    }
  const p = [i, a];
  return G(e) && s.set(e, p), p;
}
function us(e) {
  return e[0] !== "$";
}
function ps(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function ds(e, t) {
  return ps(e) === ps(t);
}
function ms(e, t) {
  return I(t) ? t.findIndex((n) => ds(n, e)) : N(t) && ds(t, e) ? 0 : -1;
}
const ho = (e) => e[0] === "_" || e === "$stable", jn = (e) => I(e) ? e.map(Ae) : [Ae(e)], li = (e, t, n) => {
  if (t._n)
    return t;
  const s = Ir((...o) => jn(t(...o)), n);
  return s._c = !1, s;
}, Co = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (ho(o))
      continue;
    const r = e[o];
    if (N(r))
      t[o] = li(o, r, s);
    else if (r != null) {
      const i = jn(r);
      t[o] = () => i;
    }
  }
}, Po = (e, t) => {
  const n = jn(t);
  e.slots.default = () => n;
}, ai = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = F(t), Ft(t, "_", n)) : Co(t, e.slots = {});
  } else
    e.slots = {}, t && Po(e, t);
  Ft(e.slots, zt, 1);
}, ci = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let r = !0, i = H;
  if (s.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? r = !1 : (Y(o, t), !n && a === 1 && delete o._) : (r = !t.$stable, Co(t, o)), i = t;
  } else
    t && (Po(e, t), i = { default: 1 });
  if (r)
    for (const a in o)
      !ho(a) && !(a in i) && delete o[a];
};
function vo() {
  return {
    app: null,
    config: {
      isNativeTag: Mo,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let fi = 0;
function ui(e, t) {
  return function(s, o = null) {
    N(s) || (s = Object.assign({}, s)), o != null && !G(o) && (o = null);
    const r = vo(), i = /* @__PURE__ */ new Set();
    let a = !1;
    const f = r.app = {
      _uid: fi++,
      _component: s,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: Fi,
      get config() {
        return r.config;
      },
      set config(p) {
      },
      use(p, ...d) {
        return i.has(p) || (p && N(p.install) ? (i.add(p), p.install(f, ...d)) : N(p) && (i.add(p), p(f, ...d))), f;
      },
      mixin(p) {
        return r.mixins.includes(p) || r.mixins.push(p), f;
      },
      component(p, d) {
        return d ? (r.components[p] = d, f) : r.components[p];
      },
      directive(p, d) {
        return d ? (r.directives[p] = d, f) : r.directives[p];
      },
      mount(p, d, P) {
        if (!a) {
          const E = Te(s, o);
          return E.appContext = r, d && t ? t(E, p) : e(E, p, P), a = !0, f._container = p, p.__vue_app__ = f, qt(E.component) || E.component.proxy;
        }
      },
      unmount() {
        a && (e(null, f._container), delete f._container.__vue_app__);
      },
      provide(p, d) {
        return r.provides[p] = d, f;
      }
    };
    return f;
  };
}
function En(e, t, n, s, o = !1) {
  if (I(e)) {
    e.forEach((E, R) => En(E, t && (I(t) ? t[R] : t), n, s, o));
    return;
  }
  if (xt(s) && !o)
    return;
  const r = s.shapeFlag & 4 ? qt(s.component) || s.component.proxy : s.el, i = o ? null : r, { i: a, r: f } = e, p = t && t.r, d = a.refs === H ? a.refs = {} : a.refs, P = a.setupState;
  if (p != null && p !== f && (q(p) ? (d[p] = null, M(P, p) && (P[p] = null)) : ee(p) && (p.value = null)), N(f))
    we(f, a, 12, [i, d]);
  else {
    const E = q(f), R = ee(f);
    if (E || R) {
      const U = () => {
        if (e.f) {
          const b = E ? M(P, f) ? P[f] : d[f] : f.value;
          o ? I(b) && Rn(b, r) : I(b) ? b.includes(r) || b.push(r) : E ? (d[f] = [r], M(P, f) && (P[f] = d[f])) : (f.value = [r], e.k && (d[e.k] = f.value));
        } else
          E ? (d[f] = i, M(P, f) && (P[f] = i)) : R && (f.value = i, e.k && (d[e.k] = i));
      };
      i ? (U.id = -1, oe(U, n)) : U();
    }
  }
}
const oe = Fr;
function pi(e) {
  return di(e);
}
function di(e, t) {
  const n = Wo();
  n.__VUE__ = !0;
  const { insert: s, remove: o, patchProp: r, createElement: i, createText: a, createComment: f, setText: p, setElementText: d, parentNode: P, nextSibling: E, setScopeId: R = he, insertStaticContent: U } = e, b = (l, c, u, _ = null, m = null, C = null, A = !1, h = null, v = !!c.dynamicChildren) => {
    if (l === c)
      return;
    l && !Ge(l, c) && (_ = Et(l), Pe(l, m, C, !0), l = null), c.patchFlag === -2 && (v = !1, c.dynamicChildren = null);
    const { type: g, ref: D, shapeFlag: S } = c;
    switch (g) {
      case Jt:
        j(l, c, u, _);
        break;
      case Ie:
        w(l, c, u, _);
        break;
      case Lt:
        l == null && te(c, u, _, A);
        break;
      case de:
        Ce(l, c, u, _, m, C, A, h, v);
        break;
      default:
        S & 1 ? Z(l, c, u, _, m, C, A, h, v) : S & 6 ? De(l, c, u, _, m, C, A, h, v) : (S & 64 || S & 128) && g.process(l, c, u, _, m, C, A, h, v, Ze);
    }
    D != null && m && En(D, l && l.ref, C, c || l, !c);
  }, j = (l, c, u, _) => {
    if (l == null)
      s(c.el = a(c.children), u, _);
    else {
      const m = c.el = l.el;
      c.children !== l.children && p(m, c.children);
    }
  }, w = (l, c, u, _) => {
    l == null ? s(c.el = f(c.children || ""), u, _) : c.el = l.el;
  }, te = (l, c, u, _) => {
    [l.el, l.anchor] = U(l.children, c, u, _, l.el, l.anchor);
  }, T = ({ el: l, anchor: c }, u, _) => {
    let m;
    for (; l && l !== c; )
      m = E(l), s(l, u, _), l = m;
    s(c, u, _);
  }, B = ({ el: l, anchor: c }) => {
    let u;
    for (; l && l !== c; )
      u = E(l), o(l), l = u;
    o(c);
  }, Z = (l, c, u, _, m, C, A, h, v) => {
    A = A || c.type === "svg", l == null ? Ye(c, u, _, m, C, A, h, v) : z(l, c, m, C, A, h, v);
  }, Ye = (l, c, u, _, m, C, A, h) => {
    let v, g;
    const { type: D, props: S, shapeFlag: O, transition: y, dirs: L } = l;
    if (v = l.el = i(l.type, C, S && S.is, S), O & 8 ? d(v, l.children) : O & 16 && x(l.children, v, null, _, m, C && D !== "foreignObject", A, h), L && je(l, null, _, "created"), Le(v, l, l.scopeId, A, _), S) {
      for (const k in S)
        k !== "value" && !It(k) && r(v, k, null, S[k], C, l.children, _, m, Oe);
      "value" in S && r(v, "value", null, S.value), (g = S.onVnodeBeforeMount) && Ee(g, _, l);
    }
    L && je(l, null, _, "beforeMount");
    const W = (!m || m && !m.pendingBranch) && y && !y.persisted;
    W && y.beforeEnter(v), s(v, c, u), ((g = S && S.onVnodeMounted) || W || L) && oe(() => {
      g && Ee(g, _, l), W && y.enter(v), L && je(l, null, _, "mounted");
    }, m);
  }, Le = (l, c, u, _, m) => {
    if (u && R(l, u), _)
      for (let C = 0; C < _.length; C++)
        R(l, _[C]);
    if (m) {
      let C = m.subTree;
      if (c === C) {
        const A = m.vnode;
        Le(l, A, A.scopeId, A.slotScopeIds, m.parent);
      }
    }
  }, x = (l, c, u, _, m, C, A, h, v = 0) => {
    for (let g = v; g < l.length; g++) {
      const D = l[g] = h ? Fe(l[g]) : Ae(l[g]);
      b(null, D, c, u, _, m, C, A, h);
    }
  }, z = (l, c, u, _, m, C, A) => {
    const h = c.el = l.el;
    let { patchFlag: v, dynamicChildren: g, dirs: D } = c;
    v |= l.patchFlag & 16;
    const S = l.props || H, O = c.props || H;
    let y;
    u && Be(u, !1), (y = O.onVnodeBeforeUpdate) && Ee(y, u, c, l), D && je(c, l, u, "beforeUpdate"), u && Be(u, !0);
    const L = m && c.type !== "foreignObject";
    if (g ? K(l.dynamicChildren, g, h, u, _, L, C) : A || V(l, c, h, null, u, _, L, C, !1), v > 0) {
      if (v & 16)
        ie(h, c, S, O, u, _, m);
      else if (v & 2 && S.class !== O.class && r(h, "class", null, O.class, m), v & 4 && r(h, "style", S.style, O.style, m), v & 8) {
        const W = c.dynamicProps;
        for (let k = 0; k < W.length; k++) {
          const $ = W[k], ue = S[$], Qe = O[$];
          (Qe !== ue || $ === "value") && r(h, $, ue, Qe, m, l.children, u, _, Oe);
        }
      }
      v & 1 && l.children !== c.children && d(h, c.children);
    } else
      !A && g == null && ie(h, c, S, O, u, _, m);
    ((y = O.onVnodeUpdated) || D) && oe(() => {
      y && Ee(y, u, c, l), D && je(c, l, u, "updated");
    }, _);
  }, K = (l, c, u, _, m, C, A) => {
    for (let h = 0; h < c.length; h++) {
      const v = l[h], g = c[h], D = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        v.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (v.type === de || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ge(v, g) || // - In the case of a component, it could contain anything.
        v.shapeFlag & 70) ? P(v.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          u
        )
      );
      b(v, g, D, null, _, m, C, A, !0);
    }
  }, ie = (l, c, u, _, m, C, A) => {
    if (u !== _) {
      if (u !== H)
        for (const h in u)
          !It(h) && !(h in _) && r(l, h, u[h], null, A, c.children, m, C, Oe);
      for (const h in _) {
        if (It(h))
          continue;
        const v = _[h], g = u[h];
        v !== g && h !== "value" && r(l, h, g, v, A, c.children, m, C, Oe);
      }
      "value" in _ && r(l, "value", u.value, _.value);
    }
  }, Ce = (l, c, u, _, m, C, A, h, v) => {
    const g = c.el = l ? l.el : a(""), D = c.anchor = l ? l.anchor : a("");
    let { patchFlag: S, dynamicChildren: O, slotScopeIds: y } = c;
    y && (h = h ? h.concat(y) : y), l == null ? (s(g, u, _), s(D, u, _), x(c.children, u, D, m, C, A, h, v)) : S > 0 && S & 64 && O && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (K(l.dynamicChildren, O, u, m, C, A, h), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (c.key != null || m && c === m.subTree) && Eo(
      l,
      c,
      !0
      /* shallow */
    )) : V(l, c, u, D, m, C, A, h, v);
  }, De = (l, c, u, _, m, C, A, h, v) => {
    c.slotScopeIds = h, l == null ? c.shapeFlag & 512 ? m.ctx.activate(c, u, _, A, v) : ct(c, u, _, m, C, A, v) : Xn(l, c, v);
  }, ct = (l, c, u, _, m, C, A) => {
    const h = l.component = Oi(l, _, m);
    if (Gt(l) && (h.ctx.renderer = Ze), Ri(h), h.asyncDep) {
      if (m && m.registerDep(h, ne), !l.el) {
        const v = h.subTree = Te(Ie);
        w(null, v, c, u);
      }
      return;
    }
    ne(h, l, c, u, m, C, A);
  }, Xn = (l, c, u) => {
    const _ = c.component = l.component;
    if (xr(l, c, u))
      if (_.asyncDep && !_.asyncResolved) {
        X(_, c, u);
        return;
      } else
        _.next = c, Or(_.update), _.update();
    else
      c.el = l.el, _.vnode = c;
  }, ne = (l, c, u, _, m, C, A) => {
    const h = () => {
      if (l.isMounted) {
        let { next: D, bu: S, u: O, parent: y, vnode: L } = l, W = D, k;
        Be(l, !1), D ? (D.el = L.el, X(l, D, A)) : D = L, S && Tt(S), (k = D.props && D.props.onVnodeBeforeUpdate) && Ee(k, y, D, L), Be(l, !0);
        const $ = en(l), ue = l.subTree;
        l.subTree = $, b(
          ue,
          $,
          // parent may have changed if it's in a teleport
          P(ue.el),
          // anchor may have changed if it's in a fragment
          Et(ue),
          l,
          m,
          C
        ), D.el = $.el, W === null && Lr(l, $.el), O && oe(O, m), (k = D.props && D.props.onVnodeUpdated) && oe(() => Ee(k, y, D, L), m);
      } else {
        let D;
        const { el: S, props: O } = c, { bm: y, m: L, parent: W } = l, k = xt(c);
        if (Be(l, !1), y && Tt(y), !k && (D = O && O.onVnodeBeforeMount) && Ee(D, W, c), Be(l, !0), S && Zt) {
          const $ = () => {
            l.subTree = en(l), Zt(S, l.subTree, l, m, null);
          };
          k ? c.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !l.isUnmounted && $()
          ) : $();
        } else {
          const $ = l.subTree = en(l);
          b(null, $, u, _, l, m, C), c.el = $.el;
        }
        if (L && oe(L, m), !k && (D = O && O.onVnodeMounted)) {
          const $ = c;
          oe(() => Ee(D, W, $), m);
        }
        (c.shapeFlag & 256 || W && xt(W.vnode) && W.vnode.shapeFlag & 256) && l.a && oe(l.a, m), l.isMounted = !0, c = u = _ = null;
      }
    }, v = l.effect = new Nn(
      h,
      () => Vn(g),
      l.scope
      // track it in component's effect scope
    ), g = l.update = () => v.run();
    g.id = l.uid, Be(l, !0), g();
  }, X = (l, c, u) => {
    c.component = l;
    const _ = l.vnode.props;
    l.vnode = c, l.next = null, ii(l, c.props, _, u), ci(l, c.children, u), lt(), is(), at();
  }, V = (l, c, u, _, m, C, A, h, v = !1) => {
    const g = l && l.children, D = l ? l.shapeFlag : 0, S = c.children, { patchFlag: O, shapeFlag: y } = c;
    if (O > 0) {
      if (O & 128) {
        vt(g, S, u, _, m, C, A, h, v);
        return;
      } else if (O & 256) {
        We(g, S, u, _, m, C, A, h, v);
        return;
      }
    }
    y & 8 ? (D & 16 && Oe(g, m, C), S !== g && d(u, S)) : D & 16 ? y & 16 ? vt(g, S, u, _, m, C, A, h, v) : Oe(g, m, C, !0) : (D & 8 && d(u, ""), y & 16 && x(S, u, _, m, C, A, h, v));
  }, We = (l, c, u, _, m, C, A, h, v) => {
    l = l || tt, c = c || tt;
    const g = l.length, D = c.length, S = Math.min(g, D);
    let O;
    for (O = 0; O < S; O++) {
      const y = c[O] = v ? Fe(c[O]) : Ae(c[O]);
      b(l[O], y, u, null, m, C, A, h, v);
    }
    g > D ? Oe(l, m, C, !0, !1, S) : x(c, u, _, m, C, A, h, v, S);
  }, vt = (l, c, u, _, m, C, A, h, v) => {
    let g = 0;
    const D = c.length;
    let S = l.length - 1, O = D - 1;
    for (; g <= S && g <= O; ) {
      const y = l[g], L = c[g] = v ? Fe(c[g]) : Ae(c[g]);
      if (Ge(y, L))
        b(y, L, u, null, m, C, A, h, v);
      else
        break;
      g++;
    }
    for (; g <= S && g <= O; ) {
      const y = l[S], L = c[O] = v ? Fe(c[O]) : Ae(c[O]);
      if (Ge(y, L))
        b(y, L, u, null, m, C, A, h, v);
      else
        break;
      S--, O--;
    }
    if (g > S) {
      if (g <= O) {
        const y = O + 1, L = y < D ? c[y].el : _;
        for (; g <= O; )
          b(null, c[g] = v ? Fe(c[g]) : Ae(c[g]), u, L, m, C, A, h, v), g++;
      }
    } else if (g > O)
      for (; g <= S; )
        Pe(l[g], m, C, !0), g++;
    else {
      const y = g, L = g, W = /* @__PURE__ */ new Map();
      for (g = L; g <= O; g++) {
        const le = c[g] = v ? Fe(c[g]) : Ae(c[g]);
        le.key != null && W.set(le.key, g);
      }
      let k, $ = 0;
      const ue = O - L + 1;
      let Qe = !1, Jn = 0;
      const ft = new Array(ue);
      for (g = 0; g < ue; g++)
        ft[g] = 0;
      for (g = y; g <= S; g++) {
        const le = l[g];
        if ($ >= ue) {
          Pe(le, m, C, !0);
          continue;
        }
        let ve;
        if (le.key != null)
          ve = W.get(le.key);
        else
          for (k = L; k <= O; k++)
            if (ft[k - L] === 0 && Ge(le, c[k])) {
              ve = k;
              break;
            }
        ve === void 0 ? Pe(le, m, C, !0) : (ft[ve - L] = g + 1, ve >= Jn ? Jn = ve : Qe = !0, b(le, c[ve], u, null, m, C, A, h, v), $++);
      }
      const zn = Qe ? mi(ft) : tt;
      for (k = zn.length - 1, g = ue - 1; g >= 0; g--) {
        const le = L + g, ve = c[le], qn = le + 1 < D ? c[le + 1].el : _;
        ft[g] === 0 ? b(null, ve, u, qn, m, C, A, h, v) : Qe && (k < 0 || g !== zn[k] ? He(
          ve,
          u,
          qn,
          2
          /* MoveType.REORDER */
        ) : k--);
      }
    }
  }, He = (l, c, u, _, m = null) => {
    const { el: C, type: A, transition: h, children: v, shapeFlag: g } = l;
    if (g & 6) {
      He(l.component.subTree, c, u, _);
      return;
    }
    if (g & 128) {
      l.suspense.move(c, u, _);
      return;
    }
    if (g & 64) {
      A.move(l, c, u, Ze);
      return;
    }
    if (A === de) {
      s(C, c, u);
      for (let S = 0; S < v.length; S++)
        He(v[S], c, u, _);
      s(l.anchor, c, u);
      return;
    }
    if (A === Lt) {
      T(l, c, u);
      return;
    }
    if (_ !== 2 && g & 1 && h)
      if (_ === 0)
        h.beforeEnter(C), s(C, c, u), oe(() => h.enter(C), m);
      else {
        const { leave: S, delayLeave: O, afterLeave: y } = h, L = () => s(C, c, u), W = () => {
          S(C, () => {
            L(), y && y();
          });
        };
        O ? O(C, L, W) : W();
      }
    else
      s(C, c, u);
  }, Pe = (l, c, u, _ = !1, m = !1) => {
    const { type: C, props: A, ref: h, children: v, dynamicChildren: g, shapeFlag: D, patchFlag: S, dirs: O } = l;
    if (h != null && En(h, null, u, l, !0), D & 256) {
      c.ctx.deactivate(l);
      return;
    }
    const y = D & 1 && O, L = !xt(l);
    let W;
    if (L && (W = A && A.onVnodeBeforeUnmount) && Ee(W, c, l), D & 6)
      bo(l.component, u, _);
    else {
      if (D & 128) {
        l.suspense.unmount(u, _);
        return;
      }
      y && je(l, null, c, "beforeUnmount"), D & 64 ? l.type.remove(l, c, u, m, Ze, _) : g && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (C !== de || S > 0 && S & 64) ? Oe(g, c, u, !1, !0) : (C === de && S & 384 || !m && D & 16) && Oe(v, c, u), _ && Gn(l);
    }
    (L && (W = A && A.onVnodeUnmounted) || y) && oe(() => {
      W && Ee(W, c, l), y && je(l, null, c, "unmounted");
    }, u);
  }, Gn = (l) => {
    const { type: c, el: u, anchor: _, transition: m } = l;
    if (c === de) {
      Oo(u, _);
      return;
    }
    if (c === Lt) {
      B(l);
      return;
    }
    const C = () => {
      o(u), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (l.shapeFlag & 1 && m && !m.persisted) {
      const { leave: A, delayLeave: h } = m, v = () => A(u, C);
      h ? h(l.el, C, v) : v();
    } else
      C();
  }, Oo = (l, c) => {
    let u;
    for (; l !== c; )
      u = E(l), o(l), l = u;
    o(c);
  }, bo = (l, c, u) => {
    const { bum: _, scope: m, update: C, subTree: A, um: h } = l;
    _ && Tt(_), m.stop(), C && (C.active = !1, Pe(A, l, c, u)), h && oe(h, c), oe(() => {
      l.isUnmounted = !0;
    }, c), c && c.pendingBranch && !c.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === c.pendingId && (c.deps--, c.deps === 0 && c.resolve());
  }, Oe = (l, c, u, _ = !1, m = !1, C = 0) => {
    for (let A = C; A < l.length; A++)
      Pe(l[A], c, u, _, m);
  }, Et = (l) => l.shapeFlag & 6 ? Et(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : E(l.anchor || l.el), $n = (l, c, u) => {
    l == null ? c._vnode && Pe(c._vnode, null, null, !0) : b(c._vnode || null, l, c, null, null, null, u), is(), to(), c._vnode = l;
  }, Ze = {
    p: b,
    um: Pe,
    m: He,
    r: Gn,
    mt: ct,
    mc: x,
    pc: V,
    pbc: K,
    n: Et,
    o: e
  };
  let Yt, Zt;
  return t && ([Yt, Zt] = t(Ze)), {
    render: $n,
    hydrate: Yt,
    createApp: ui($n, Yt)
  };
}
function Be({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Eo(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (I(s) && I(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let a = o[r];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[r] = Fe(o[r]), a.el = i.el), n || Eo(i, a)), a.type === Jt && (a.el = i.el);
    }
}
function mi(e) {
  const t = e.slice(), n = [0];
  let s, o, r, i, a;
  const f = e.length;
  for (s = 0; s < f; s++) {
    const p = e[s];
    if (p !== 0) {
      if (o = n[n.length - 1], e[o] < p) {
        t[s] = o, n.push(s);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        a = r + i >> 1, e[n[a]] < p ? r = a + 1 : i = a;
      p < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s);
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; )
    n[r] = i, i = t[i];
  return n;
}
const _i = (e) => e.__isTeleport, de = Symbol(void 0), Jt = Symbol(void 0), Ie = Symbol(void 0), Lt = Symbol(void 0), dt = [];
let ge = null;
function on(e = !1) {
  dt.push(ge = e ? null : []);
}
function gi() {
  dt.pop(), ge = dt[dt.length - 1] || null;
}
let Ct = 1;
function _s(e) {
  Ct += e;
}
function hi(e) {
  return e.dynamicChildren = Ct > 0 ? ge || tt : null, gi(), Ct > 0 && ge && ge.push(e), e;
}
function rn(e, t, n, s, o, r) {
  return hi(Re(
    e,
    t,
    n,
    s,
    o,
    r,
    !0
    /* isBlock */
  ));
}
function Ci(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ge(e, t) {
  return e.type === t.type && e.key === t.key;
}
const zt = "__vInternal", Ao = ({ key: e }) => e ?? null, Mt = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? q(e) || ee(e) || N(e) ? { i: ce, r: e, k: t, f: !!n } : e : null;
function Re(e, t = null, n = null, s = 0, o = null, r = e === de ? 0 : 1, i = !1, a = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ao(t),
    ref: t && Mt(t),
    scopeId: oo,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: ce
  };
  return a ? (Bn(f, n), r & 128 && e.normalize(f)) : n && (f.shapeFlag |= q(n) ? 8 : 16), Ct > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  ge && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && ge.push(f), f;
}
const Te = Pi;
function Pi(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === Zr) && (e = Ie), Ci(e)) {
    const a = Ve(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Bn(a, n), Ct > 0 && !r && ge && (a.shapeFlag & 6 ? ge[ge.indexOf(e)] = a : ge.push(a)), a.patchFlag |= -2, a;
  }
  if (Ni(e) && (e = e.__vccOpts), t) {
    t = vi(t);
    let { class: a, style: f } = t;
    a && !q(a) && (t.class = On(a)), G(f) && (Gs(f) && !I(f) && (f = Y({}, f)), t.style = Vt(f));
  }
  const i = q(e) ? 1 : Mr(e) ? 128 : _i(e) ? 64 : G(e) ? 4 : N(e) ? 2 : 0;
  return Re(e, t, n, s, o, i, r, !0);
}
function vi(e) {
  return e ? Gs(e) || zt in e ? Y({}, e) : e : null;
}
function Ve(e, t, n = !1) {
  const { props: s, ref: o, patchFlag: r, children: i } = e, a = t ? Ai(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Ao(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? I(o) ? o.concat(Mt(t)) : [o, Mt(t)] : Mt(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== de ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ve(e.ssContent),
    ssFallback: e.ssFallback && Ve(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function An(e = " ", t = 0) {
  return Te(Jt, null, e, t);
}
function Ei(e, t) {
  const n = Te(Lt, null, e);
  return n.staticCount = t, n;
}
function Ae(e) {
  return e == null || typeof e == "boolean" ? Te(Ie) : I(e) ? Te(
    de,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Fe(e) : Te(Jt, null, String(e));
}
function Fe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ve(e);
}
function Bn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (I(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Bn(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(zt in t) ? t._ctx = ce : o === 3 && ce && (ce.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    N(t) ? (t = { default: t, _ctx: ce }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [An(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ai(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = On([t.class, s.class]));
      else if (o === "style")
        t.style = Vt([t.style, s.style]);
      else if (Wt(o)) {
        const r = t[o], i = s[o];
        i && r !== i && !(I(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i);
      } else
        o !== "" && (t[o] = s[o]);
  }
  return t;
}
function Ee(e, t, n, s = null) {
  fe(e, t, 7, [
    n,
    s
  ]);
}
const Si = vo();
let Di = 0;
function Oi(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Si, r = {
    uid: Di++,
    vnode: e,
    type: s,
    parent: t,
    appContext: o,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Ho(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: go(s, o),
    emitsOptions: so(s, o),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: H,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: H,
    data: H,
    props: H,
    attrs: H,
    slots: H,
    refs: H,
    setupState: H,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = yr.bind(null, r), e.ce && e.ce(r), r;
}
let J = null;
const bi = () => J || ce, it = (e) => {
  J = e, e.scope.on();
}, qe = () => {
  J && J.scope.off(), J = null;
};
function So(e) {
  return e.vnode.shapeFlag & 4;
}
let Pt = !1;
function Ri(e, t = !1) {
  Pt = t;
  const { props: n, children: s } = e.vnode, o = So(e);
  ri(e, n, o, t), ai(e, s);
  const r = o ? yi(e, t) : void 0;
  return Pt = !1, r;
}
function yi(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = $s(new Proxy(e.ctx, Qr));
  const { setup: s } = n;
  if (s) {
    const o = e.setupContext = s.length > 1 ? Ti(e) : null;
    it(e), lt();
    const r = we(s, e, 0, [e.props, o]);
    if (at(), qe(), Ns(r)) {
      if (r.then(qe, qe), t)
        return r.then((i) => {
          gs(e, i, t);
        }).catch((i) => {
          Kt(
            i,
            e,
            0
            /* ErrorCodes.SETUP_FUNCTION */
          );
        });
      e.asyncDep = r;
    } else
      gs(e, r, t);
  } else
    Do(e, t);
}
function gs(e, t, n) {
  N(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : G(t) && (e.setupState = qs(t)), Do(e, n);
}
let hs;
function Do(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && hs && !s.render) {
      const o = s.template || Hn(e).template;
      if (o) {
        const { isCustomElement: r, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: f } = s, p = Y(Y({
          isCustomElement: r,
          delimiters: a
        }, i), f);
        s.render = hs(o, p);
      }
    }
    e.render = s.render || he;
  }
  it(e), lt(), ei(e), at(), qe();
}
function Ii(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return re(e, "get", "$attrs"), t[n];
    }
  });
}
function Ti(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = Ii(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function qt(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(qs($s(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in pt)
          return pt[n](e);
      },
      has(t, n) {
        return n in t || n in pt;
      }
    }));
}
function Ni(e) {
  return N(e) && "__vccOpts" in e;
}
const xi = (e, t) => Ar(e, t, Pt), Li = Symbol(""), Mi = () => Nt(Li), Fi = "3.2.47", Ui = "http://www.w3.org/2000/svg", $e = typeof document < "u" ? document : null, Cs = $e && /* @__PURE__ */ $e.createElement("template"), wi = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t ? $e.createElementNS(Ui, e) : $e.createElement(e, n ? { is: n } : void 0);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => $e.createTextNode(e),
  createComment: (e) => $e.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => $e.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, o, r) {
    const i = n ? n.previousSibling : t.lastChild;
    if (o && (o === r || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === r || !(o = o.nextSibling)); )
        ;
    else {
      Cs.innerHTML = s ? `<svg>${e}</svg>` : e;
      const a = Cs.content;
      if (s) {
        const f = a.firstChild;
        for (; f.firstChild; )
          a.appendChild(f.firstChild);
        a.removeChild(f);
      }
      t.insertBefore(a, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function ki(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function Vi(e, t, n) {
  const s = e.style, o = q(n);
  if (n && !o) {
    if (t && !q(t))
      for (const r in t)
        n[r] == null && Sn(s, r, "");
    for (const r in n)
      Sn(s, r, n[r]);
  } else {
    const r = s.display;
    o ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (s.display = r);
  }
}
const Ps = /\s*!important$/;
function Sn(e, t, n) {
  if (I(n))
    n.forEach((s) => Sn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Wi(e, t);
    Ps.test(n) ? e.setProperty(me(s), n.replace(Ps, ""), "important") : e[s] = n;
  }
}
const vs = ["Webkit", "Moz", "ms"], ln = {};
function Wi(e, t) {
  const n = ln[t];
  if (n)
    return n;
  let s = ye(t);
  if (s !== "filter" && s in e)
    return ln[t] = s;
  s = Ms(s);
  for (let o = 0; o < vs.length; o++) {
    const r = vs[o] + s;
    if (r in e)
      return ln[t] = r;
  }
  return t;
}
const Es = "http://www.w3.org/1999/xlink";
function Hi(e, t, n, s, o) {
  if (s && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Es, t.slice(6, t.length)) : e.setAttributeNS(Es, t, n);
  else {
    const r = xo(t);
    n == null || r && !ys(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : n);
  }
}
function ji(e, t, n, s, o, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    s && i(s, o, r), e[t] = n ?? "";
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && // custom elements may use _value internally
  !e.tagName.includes("-")) {
    e._value = n;
    const f = n ?? "";
    (e.value !== f || // #4956: always set for OPTION elements because its value falls back to
    // textContent if no value attribute is present. And setting .value for
    // OPTION has no side effect
    e.tagName === "OPTION") && (e.value = f), n == null && e.removeAttribute(t);
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    const f = typeof e[t];
    f === "boolean" ? n = ys(n) : n == null && f === "string" ? (n = "", a = !0) : f === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  a && e.removeAttribute(t);
}
function et(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Bi(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
function Ki(e, t, n, s, o = null) {
  const r = e._vei || (e._vei = {}), i = r[t];
  if (s && i)
    i.value = s;
  else {
    const [a, f] = Xi(t);
    if (s) {
      const p = r[t] = Ji(s, o);
      et(e, a, p, f);
    } else
      i && (Bi(e, a, i, f), r[t] = void 0);
  }
}
const As = /(?:Once|Passive|Capture)$/;
function Xi(e) {
  let t;
  if (As.test(e)) {
    t = {};
    let s;
    for (; s = e.match(As); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : me(e.slice(2)), t];
}
let an = 0;
const Gi = /* @__PURE__ */ Promise.resolve(), $i = () => an || (Gi.then(() => an = 0), an = Date.now());
function Ji(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    fe(zi(s, n.value), t, 5, [s]);
  };
  return n.value = e, n.attached = $i(), n;
}
function zi(e, t) {
  if (I(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((s) => (o) => !o._stopped && s && s(o));
  } else
    return t;
}
const Ss = /^on[a-z]/, qi = (e, t, n, s, o = !1, r, i, a, f) => {
  t === "class" ? ki(e, s, o) : t === "style" ? Vi(e, n, s) : Wt(t) ? bn(t) || Ki(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Yi(e, t, s, o)) ? ji(e, t, s, r, i, a, f) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Hi(e, t, s, o));
};
function Yi(e, t, n, s) {
  return s ? !!(t === "innerHTML" || t === "textContent" || t in e && Ss.test(t) && N(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Ss.test(t) && q(n) ? !1 : t in e;
}
function Zi(e, t) {
  const n = co(e);
  class s extends Kn {
    constructor(r) {
      super(n, r, t);
    }
  }
  return s.def = n, s;
}
const Qi = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Kn extends Qi {
  constructor(t, n = {}, s) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && s ? s(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, Qs(() => {
      this._connected || (Rs(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let s = 0; s < this.attributes.length; s++)
      this._setAttr(this.attributes[s].name);
    new MutationObserver((s) => {
      for (const o of s)
        this._setAttr(o.attributeName);
    }).observe(this, { attributes: !0 });
    const t = (s, o = !1) => {
      const { props: r, styles: i } = s;
      let a;
      if (r && !I(r))
        for (const f in r) {
          const p = r[f];
          (p === Number || p && p.type === Number) && (f in this._props && (this._props[f] = Yn(this._props[f])), (a || (a = /* @__PURE__ */ Object.create(null)))[ye(f)] = !0);
        }
      this._numberProps = a, o && this._resolveProps(s), this._applyStyles(i), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((s) => t(s, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t, s = I(n) ? n : Object.keys(n || {});
    for (const o of Object.keys(this))
      o[0] !== "_" && s.includes(o) && this._setProp(o, this[o], !0, !1);
    for (const o of s.map(ye))
      Object.defineProperty(this, o, {
        get() {
          return this._getProp(o);
        },
        set(r) {
          this._setProp(o, r);
        }
      });
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    const s = ye(t);
    this._numberProps && this._numberProps[s] && (n = Yn(n)), this._setProp(s, n, !1);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, s = !0, o = !0) {
    n !== this._props[t] && (this._props[t] = n, o && this._instance && this._update(), s && (n === !0 ? this.setAttribute(me(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(me(t), n + "") : n || this.removeAttribute(me(t))));
  }
  _update() {
    Rs(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = Te(this._def, Y({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0;
      const s = (r, i) => {
        this.dispatchEvent(new CustomEvent(r, {
          detail: i
        }));
      };
      n.emit = (r, ...i) => {
        s(r, i), me(r) !== r && s(me(r), i);
      };
      let o = this;
      for (; o = o && (o.parentNode || o.host); )
        if (o instanceof Kn) {
          n.parent = o._instance, n.provides = o._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((n) => {
      const s = document.createElement("style");
      s.textContent = n, this.shadowRoot.appendChild(s);
    });
  }
}
const el = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
Wr.props;
const Ds = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return I(t) ? (n) => Tt(t, n) : t;
};
function tl(e) {
  e.target.composing = !0;
}
function Os(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const nl = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e._assign = Ds(o);
    const r = s || o.props && o.props.type === "number";
    et(e, t ? "change" : "input", (i) => {
      if (i.target.composing)
        return;
      let a = e.value;
      n && (a = a.trim()), r && (a = cn(a)), e._assign(a);
    }), n && et(e, "change", () => {
      e.value = e.value.trim();
    }), t || (et(e, "compositionstart", tl), et(e, "compositionend", Os), et(e, "change", Os));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: s, number: o } }, r) {
    if (e._assign = Ds(r), e.composing || document.activeElement === e && e.type !== "range" && (n || s && e.value.trim() === t || (o || e.type === "number") && cn(e.value) === t))
      return;
    const i = t ?? "";
    e.value !== i && (e.value = i);
  }
}, sl = /* @__PURE__ */ Y({ patchProp: qi }, wi);
let bs;
function ol() {
  return bs || (bs = pi(sl));
}
const Rs = (...e) => {
  ol().render(...e);
}, rl = { id: "container" }, il = { key: 1 }, ll = { id: "info" }, al = /* @__PURE__ */ Ei('<datalist id="tickmarks"><option value="0"></option><option value="10"></option><option value="20"></option><option value="30"></option><option value="40"></option><option value="50"></option><option value="60"></option><option value="70"></option><option value="80"></option><option value="90"></option><option value="100"></option></datalist>', 1), cl = /* @__PURE__ */ Re("p", null, [
  /* @__PURE__ */ An(" ← ↑ → ↓ to move the overlay "),
  /* @__PURE__ */ Re("br"),
  /* @__PURE__ */ An(" escape to remove the overlay ")
], -1), fl = /* @__PURE__ */ co({
  __name: "FigmaOverlay.ce",
  setup(e) {
    const t = Rt("Load figma component from clipboard"), n = Rt(null), s = Rt(!1), o = Rt(50), r = (d) => {
      n.value && (n.value.innerHTML = d, s.value = !0, document.addEventListener("keydown", p));
    }, i = () => {
      n.value && (n.value.innerHTML = "", s.value = !1, document.removeEventListener("keydown", p));
    }, a = async () => {
      try {
        const d = await navigator.clipboard.readText();
        d.startsWith("<svg") ? r(d) : (t.value = "No SVG found in clipboard!", window.setTimeout(() => {
          t.value = "Load figma component from clipboard";
        }, 2e3));
      } catch (d) {
        console.error(d);
      }
    }, f = () => {
      var d;
      (d = n.value) == null || d.addEventListener("mousedown", (P) => {
        if (!n.value)
          return;
        const E = n.value, R = E.getBoundingClientRect(), U = P.clientX - R.left, b = P.clientY - R.top, j = (te) => {
          E.style.top = `${te.clientY - b}px`, E.style.left = `${te.clientX - U}px`;
        }, w = () => {
          document.removeEventListener("mousemove", j), document.removeEventListener("mouseup", w);
        };
        document.addEventListener("mousemove", j), document.addEventListener("mouseup", w);
      });
    }, p = (d) => {
      if (n.value)
        switch (d.key) {
          case "ArrowUp":
            n.value.style.top = `${n.value.offsetTop - 1}px`;
            break;
          case "ArrowDown":
            n.value.style.top = `${n.value.offsetTop + 1}px`;
            break;
          case "ArrowLeft":
            n.value.style.left = `${n.value.offsetLeft - 1}px`;
            break;
          case "ArrowRight":
            n.value.style.left = `${n.value.offsetLeft + 1}px`;
            break;
          case "Escape":
            i();
            break;
        }
    };
    return Wn(() => f()), (d, P) => (on(), rn(de, null, [
      Re("div", rl, [
        s.value ? (on(), rn("div", il, [
          Re("button", {
            type: "button",
            onClick: i
          }, "Remove overlay"),
          Re("div", ll, [
            Yr(Re("input", {
              "onUpdate:modelValue": P[0] || (P[0] = (E) => o.value = E),
              type: "range",
              list: "tickmarks",
              min: "0",
              max: "100",
              step: "10"
            }, null, 512), [
              [nl, o.value]
            ]),
            al
          ]),
          cl
        ])) : (on(), rn("button", {
          key: 0,
          type: "button",
          onClick: a
        }, Lo(t.value), 1))
      ]),
      Re("div", {
        id: "figmaOverlay",
        ref_key: "figmaOverlay",
        ref: n,
        style: Vt({
          opacity: o.value / 100
        })
      }, null, 4)
    ], 64));
  }
}), ul = `div,button,input,p{margin:0;padding:0}#container{position:absolute;bottom:1rem;left:1rem}button{background-color:#27313b;color:#dee5ec;font-size:.75rem;line-height:1rem;padding:0 .5rem;border-radius:.25rem;height:28px}#info{width:100%;margin-top:.5rem}input[type=range]{width:100%}p{font-size:.75rem;line-height:1rem}button,p{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}#figmaOverlay{position:absolute;z-index:9999;top:0px;left:0px}
`, pl = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, dl = /* @__PURE__ */ pl(fl, [["styles", [ul]]]), ml = Zi(dl);
customElements.define("figma-overlay", ml);

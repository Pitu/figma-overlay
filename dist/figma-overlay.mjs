function In(e, t) {
  const n = /* @__PURE__ */ Object.create(null), s = e.split(",");
  for (let o = 0; o < s.length; o++)
    n[s[o]] = !0;
  return t ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
function Bt(e) {
  if (R(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = z(s) ? No(s) : Bt(s);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else {
    if (z(e))
      return e;
    if (H(e))
      return e;
  }
}
const xo = /;(?![^(]*\))/g, ko = /:([^]+)/, Mo = /\/\*.*?\*\//gs;
function No(e) {
  const t = {};
  return e.replace(Mo, "").split(xo).forEach((n) => {
    if (n) {
      const s = n.split(ko);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Gt(e) {
  let t = "";
  if (z(e))
    t = e;
  else if (R(e))
    for (let n = 0; n < e.length; n++) {
      const s = Gt(e[n]);
      s && (t += s + " ");
    }
  else if (H(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const wo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Fo = /* @__PURE__ */ In(wo);
function xs(e) {
  return !!e || e === "";
}
function Vo(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Kt(e[s], t[s]);
  return n;
}
function Kt(e, t) {
  if (e === t)
    return !0;
  let n = es(e), s = es(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = _t(e), s = _t(t), n || s)
    return e === t;
  if (n = R(e), s = R(t), n || s)
    return n && s ? Vo(e, t) : !1;
  if (n = H(e), s = H(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, i = Object.keys(t).length;
    if (o !== i)
      return !1;
    for (const r in e) {
      const l = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
      if (l && !a || !l && a || !Kt(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function ks(e, t) {
  return e.findIndex((n) => Kt(n, t));
}
const jo = (e) => z(e) ? e : e == null ? "" : R(e) || H(e) && (e.toString === ws || !L(e.toString)) ? JSON.stringify(e, Ms, 2) : String(e), Ms = (e, t) => t && t.__v_isRef ? Ms(e, t.value) : nt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, o]) => (n[`${s} =>`] = o, n), {})
} : Jt(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : H(t) && !R(t) && !Fs(t) ? String(t) : t, W = {}, tt = [], Ce = () => {
}, Wo = () => !1, Ho = /^on[^a-z]/, $t = (e) => Ho.test(e), Un = (e) => e.startsWith("onUpdate:"), q = Object.assign, Ln = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Bo = Object.prototype.hasOwnProperty, k = (e, t) => Bo.call(e, t), R = Array.isArray, nt = (e) => bt(e) === "[object Map]", Jt = (e) => bt(e) === "[object Set]", es = (e) => bt(e) === "[object Date]", L = (e) => typeof e == "function", z = (e) => typeof e == "string", _t = (e) => typeof e == "symbol", H = (e) => e !== null && typeof e == "object", Ns = (e) => H(e) && L(e.then) && L(e.catch), ws = Object.prototype.toString, bt = (e) => ws.call(e), Go = (e) => bt(e).slice(8, -1), Fs = (e) => bt(e) === "[object Object]", Tn = (e) => z(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Lt = /* @__PURE__ */ In(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Xt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ko = /-(\w)/g, Re = Xt((e) => e.replace(Ko, (t, n) => n ? n.toUpperCase() : "")), $o = /\B([A-Z])/g, _e = Xt((e) => e.replace($o, "-$1").toLowerCase()), Vs = Xt((e) => e.charAt(0).toUpperCase() + e.slice(1)), rn = Xt((e) => e ? `on${Vs(e)}` : ""), gt = (e, t) => !Object.is(e, t), Tt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, wt = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, _n = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ts = (e) => {
  const t = z(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ns;
const Jo = () => ns || (ns = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let de;
class Xo {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = de, !t && de && (this.index = (de.scopes || (de.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = de;
      try {
        return de = this, t();
      } finally {
        de = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    de = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    de = this.parent;
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
function Yo(e, t = de) {
  t && t.active && t.effects.push(e);
}
function zo() {
  return de;
}
const xn = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, js = (e) => (e.w & Fe) > 0, Ws = (e) => (e.n & Fe) > 0, qo = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Fe;
}, Zo = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let s = 0; s < t.length; s++) {
      const o = t[s];
      js(o) && !Ws(o) ? o.delete(e) : t[n++] = o, o.w &= ~Fe, o.n &= ~Fe;
    }
    t.length = n;
  }
}, gn = /* @__PURE__ */ new WeakMap();
let dt = 0, Fe = 1;
const hn = 30;
let ge;
const ze = Symbol(""), Cn = Symbol("");
class kn {
  constructor(t, n = null, s) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Yo(this, s);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = ge, n = Ne;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = ge, ge = this, Ne = !0, Fe = 1 << ++dt, dt <= hn ? qo(this) : ss(this), this.fn();
    } finally {
      dt <= hn && Zo(this), Fe = 1 << --dt, ge = this.parent, Ne = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    ge === this ? this.deferStop = !0 : this.active && (ss(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function ss(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Ne = !0;
const Hs = [];
function lt() {
  Hs.push(Ne), Ne = !1;
}
function ct() {
  const e = Hs.pop();
  Ne = e === void 0 ? !0 : e;
}
function ie(e, t, n) {
  if (Ne && ge) {
    let s = gn.get(e);
    s || gn.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || s.set(n, o = xn()), Bs(o);
  }
}
function Bs(e, t) {
  let n = !1;
  dt <= hn ? Ws(e) || (e.n |= Fe, n = !js(e)) : n = !e.has(ge), n && (e.add(ge), ge.deps.push(e));
}
function Le(e, t, n, s, o, i) {
  const r = gn.get(e);
  if (!r)
    return;
  let l = [];
  if (t === "clear")
    l = [...r.values()];
  else if (n === "length" && R(e)) {
    const a = Number(s);
    r.forEach((u, _) => {
      (_ === "length" || _ >= a) && l.push(u);
    });
  } else
    switch (n !== void 0 && l.push(r.get(n)), t) {
      case "add":
        R(e) ? Tn(n) && l.push(r.get("length")) : (l.push(r.get(ze)), nt(e) && l.push(r.get(Cn)));
        break;
      case "delete":
        R(e) || (l.push(r.get(ze)), nt(e) && l.push(r.get(Cn)));
        break;
      case "set":
        nt(e) && l.push(r.get(ze));
        break;
    }
  if (l.length === 1)
    l[0] && vn(l[0]);
  else {
    const a = [];
    for (const u of l)
      u && a.push(...u);
    vn(xn(a));
  }
}
function vn(e, t) {
  const n = R(e) ? e : [...e];
  for (const s of n)
    s.computed && os(s);
  for (const s of n)
    s.computed || os(s);
}
function os(e, t) {
  (e !== ge || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const Qo = /* @__PURE__ */ In("__proto__,__v_isRef,__isVue"), Gs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_t)
), ei = /* @__PURE__ */ Mn(), ti = /* @__PURE__ */ Mn(!1, !0), ni = /* @__PURE__ */ Mn(!0), is = /* @__PURE__ */ si();
function si() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = N(this);
      for (let i = 0, r = this.length; i < r; i++)
        ie(s, "get", i + "");
      const o = s[t](...n);
      return o === -1 || o === !1 ? s[t](...n.map(N)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      lt();
      const s = N(this)[t].apply(this, n);
      return ct(), s;
    };
  }), e;
}
function oi(e) {
  const t = N(this);
  return ie(t, "has", e), t.hasOwnProperty(e);
}
function Mn(e = !1, t = !1) {
  return function(s, o, i) {
    if (o === "__v_isReactive")
      return !e;
    if (o === "__v_isReadonly")
      return e;
    if (o === "__v_isShallow")
      return t;
    if (o === "__v_raw" && i === (e ? t ? Pi : Ys : t ? Xs : Js).get(s))
      return s;
    const r = R(s);
    if (!e) {
      if (r && k(is, o))
        return Reflect.get(is, o, i);
      if (o === "hasOwnProperty")
        return oi;
    }
    const l = Reflect.get(s, o, i);
    return (_t(o) ? Gs.has(o) : Qo(o)) || (e || ie(s, "get", o), t) ? l : ee(l) ? r && Tn(o) ? l : l.value : H(l) ? e ? zs(l) : Fn(l) : l;
  };
}
const ii = /* @__PURE__ */ Ks(), ri = /* @__PURE__ */ Ks(!0);
function Ks(e = !1) {
  return function(n, s, o, i) {
    let r = n[s];
    if (it(r) && ee(r) && !ee(o))
      return !1;
    if (!e && (!Ft(o) && !it(o) && (r = N(r), o = N(o)), !R(n) && ee(r) && !ee(o)))
      return r.value = o, !0;
    const l = R(n) && Tn(s) ? Number(s) < n.length : k(n, s), a = Reflect.set(n, s, o, i);
    return n === N(i) && (l ? gt(o, r) && Le(n, "set", s, o) : Le(n, "add", s, o)), a;
  };
}
function li(e, t) {
  const n = k(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && Le(e, "delete", t, void 0), s;
}
function ci(e, t) {
  const n = Reflect.has(e, t);
  return (!_t(t) || !Gs.has(t)) && ie(e, "has", t), n;
}
function ai(e) {
  return ie(e, "iterate", R(e) ? "length" : ze), Reflect.ownKeys(e);
}
const $s = {
  get: ei,
  set: ii,
  deleteProperty: li,
  has: ci,
  ownKeys: ai
}, fi = {
  get: ni,
  set(e, t) {
    return !0;
  },
  deleteProperty(e, t) {
    return !0;
  }
}, ui = /* @__PURE__ */ q({}, $s, {
  get: ti,
  set: ri
}), Nn = (e) => e, Yt = (e) => Reflect.getPrototypeOf(e);
function Ot(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const o = N(e), i = N(t);
  n || (t !== i && ie(o, "get", t), ie(o, "get", i));
  const { has: r } = Yt(o), l = s ? Nn : n ? jn : ht;
  if (r.call(o, t))
    return l(e.get(t));
  if (r.call(o, i))
    return l(e.get(i));
  e !== o && e.get(t);
}
function Dt(e, t = !1) {
  const n = this.__v_raw, s = N(n), o = N(e);
  return t || (e !== o && ie(s, "has", e), ie(s, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o);
}
function yt(e, t = !1) {
  return e = e.__v_raw, !t && ie(N(e), "iterate", ze), Reflect.get(e, "size", e);
}
function rs(e) {
  e = N(e);
  const t = N(this);
  return Yt(t).has.call(t, e) || (t.add(e), Le(t, "add", e, e)), this;
}
function ls(e, t) {
  t = N(t);
  const n = N(this), { has: s, get: o } = Yt(n);
  let i = s.call(n, e);
  i || (e = N(e), i = s.call(n, e));
  const r = o.call(n, e);
  return n.set(e, t), i ? gt(t, r) && Le(n, "set", e, t) : Le(n, "add", e, t), this;
}
function cs(e) {
  const t = N(this), { has: n, get: s } = Yt(t);
  let o = n.call(t, e);
  o || (e = N(e), o = n.call(t, e)), s && s.call(t, e);
  const i = t.delete(e);
  return o && Le(t, "delete", e, void 0), i;
}
function as() {
  const e = N(this), t = e.size !== 0, n = e.clear();
  return t && Le(e, "clear", void 0, void 0), n;
}
function Rt(e, t) {
  return function(s, o) {
    const i = this, r = i.__v_raw, l = N(r), a = t ? Nn : e ? jn : ht;
    return !e && ie(l, "iterate", ze), r.forEach((u, _) => s.call(o, a(u), a(_), i));
  };
}
function It(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = N(o), r = nt(i), l = e === "entries" || e === Symbol.iterator && r, a = e === "keys" && r, u = o[e](...s), _ = n ? Nn : t ? jn : ht;
    return !t && ie(i, "iterate", a ? Cn : ze), {
      // iterator protocol
      next() {
        const { value: h, done: E } = u.next();
        return E ? { value: h, done: E } : {
          value: l ? [_(h[0]), _(h[1])] : _(h),
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
function ke(e) {
  return function(...t) {
    return e === "delete" ? !1 : this;
  };
}
function di() {
  const e = {
    get(i) {
      return Ot(this, i);
    },
    get size() {
      return yt(this);
    },
    has: Dt,
    add: rs,
    set: ls,
    delete: cs,
    clear: as,
    forEach: Rt(!1, !1)
  }, t = {
    get(i) {
      return Ot(this, i, !1, !0);
    },
    get size() {
      return yt(this);
    },
    has: Dt,
    add: rs,
    set: ls,
    delete: cs,
    clear: as,
    forEach: Rt(!1, !0)
  }, n = {
    get(i) {
      return Ot(this, i, !0);
    },
    get size() {
      return yt(this, !0);
    },
    has(i) {
      return Dt.call(this, i, !0);
    },
    add: ke(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: ke(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: ke(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: ke(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: Rt(!0, !1)
  }, s = {
    get(i) {
      return Ot(this, i, !0, !0);
    },
    get size() {
      return yt(this, !0);
    },
    has(i) {
      return Dt.call(this, i, !0);
    },
    add: ke(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: ke(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: ke(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: ke(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: Rt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
    e[i] = It(i, !1, !1), n[i] = It(i, !0, !1), t[i] = It(i, !1, !0), s[i] = It(i, !0, !0);
  }), [
    e,
    n,
    t,
    s
  ];
}
const [pi, mi, _i, gi] = /* @__PURE__ */ di();
function wn(e, t) {
  const n = t ? e ? gi : _i : e ? mi : pi;
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(k(n, o) && o in s ? n : s, o, i);
}
const hi = {
  get: /* @__PURE__ */ wn(!1, !1)
}, Ci = {
  get: /* @__PURE__ */ wn(!1, !0)
}, vi = {
  get: /* @__PURE__ */ wn(!0, !1)
}, Js = /* @__PURE__ */ new WeakMap(), Xs = /* @__PURE__ */ new WeakMap(), Ys = /* @__PURE__ */ new WeakMap(), Pi = /* @__PURE__ */ new WeakMap();
function Ei(e) {
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
function bi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ei(Go(e));
}
function Fn(e) {
  return it(e) ? e : Vn(e, !1, $s, hi, Js);
}
function Ai(e) {
  return Vn(e, !1, ui, Ci, Xs);
}
function zs(e) {
  return Vn(e, !0, fi, vi, Ys);
}
function Vn(e, t, n, s, o) {
  if (!H(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const r = bi(e);
  if (r === 0)
    return e;
  const l = new Proxy(e, r === 2 ? s : n);
  return o.set(e, l), l;
}
function st(e) {
  return it(e) ? st(e.__v_raw) : !!(e && e.__v_isReactive);
}
function it(e) {
  return !!(e && e.__v_isReadonly);
}
function Ft(e) {
  return !!(e && e.__v_isShallow);
}
function qs(e) {
  return st(e) || it(e);
}
function N(e) {
  const t = e && e.__v_raw;
  return t ? N(t) : e;
}
function Zs(e) {
  return wt(e, "__v_skip", !0), e;
}
const ht = (e) => H(e) ? Fn(e) : e, jn = (e) => H(e) ? zs(e) : e;
function Qs(e) {
  Ne && ge && (e = N(e), Bs(e.dep || (e.dep = xn())));
}
function eo(e, t) {
  e = N(e);
  const n = e.dep;
  n && vn(n);
}
function ee(e) {
  return !!(e && e.__v_isRef === !0);
}
function ut(e) {
  return Si(e, !1);
}
function Si(e, t) {
  return ee(e) ? e : new Oi(e, t);
}
class Oi {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : N(t), this._value = n ? t : ht(t);
  }
  get value() {
    return Qs(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Ft(t) || it(t);
    t = n ? t : N(t), gt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : ht(t), eo(this));
  }
}
function Di(e) {
  return ee(e) ? e.value : e;
}
const yi = {
  get: (e, t, n) => Di(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return ee(o) && !ee(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function to(e) {
  return st(e) ? e : new Proxy(e, yi);
}
var no;
class Ri {
  constructor(t, n, s, o) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[no] = !1, this._dirty = !0, this.effect = new kn(t, () => {
      this._dirty || (this._dirty = !0, eo(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = s;
  }
  get value() {
    const t = N(this);
    return Qs(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
no = "__v_isReadonly";
function Ii(e, t, n = !1) {
  let s, o;
  const i = L(e);
  return i ? (s = e, o = Ce) : (s = e.get, o = e.set), new Ri(s, o, i || !o, n);
}
function we(e, t, n, s) {
  let o;
  try {
    o = s ? e(...s) : e();
  } catch (i) {
    zt(i, t, n);
  }
  return o;
}
function fe(e, t, n, s) {
  if (L(e)) {
    const i = we(e, t, n, s);
    return i && Ns(i) && i.catch((r) => {
      zt(r, t, n);
    }), i;
  }
  const o = [];
  for (let i = 0; i < e.length; i++)
    o.push(fe(e[i], t, n, s));
  return o;
}
function zt(e, t, n, s = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const r = t.proxy, l = n;
    for (; i; ) {
      const u = i.ec;
      if (u) {
        for (let _ = 0; _ < u.length; _++)
          if (u[_](e, r, l) === !1)
            return;
      }
      i = i.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      we(a, null, 10, [e, r, l]);
      return;
    }
  }
  Ui(e, n, o, s);
}
function Ui(e, t, n, s = !0) {
  console.error(e);
}
let Ct = !1, Pn = !1;
const Q = [];
let Se = 0;
const ot = [];
let ye = null, Ke = 0;
const so = /* @__PURE__ */ Promise.resolve();
let Wn = null;
function oo(e) {
  const t = Wn || so;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Li(e) {
  let t = Se + 1, n = Q.length;
  for (; t < n; ) {
    const s = t + n >>> 1;
    vt(Q[s]) < e ? t = s + 1 : n = s;
  }
  return t;
}
function Hn(e) {
  (!Q.length || !Q.includes(e, Ct && e.allowRecurse ? Se + 1 : Se)) && (e.id == null ? Q.push(e) : Q.splice(Li(e.id), 0, e), io());
}
function io() {
  !Ct && !Pn && (Pn = !0, Wn = so.then(lo));
}
function Ti(e) {
  const t = Q.indexOf(e);
  t > Se && Q.splice(t, 1);
}
function xi(e) {
  R(e) ? ot.push(...e) : (!ye || !ye.includes(e, e.allowRecurse ? Ke + 1 : Ke)) && ot.push(e), io();
}
function fs(e, t = Ct ? Se + 1 : 0) {
  for (; t < Q.length; t++) {
    const n = Q[t];
    n && n.pre && (Q.splice(t, 1), t--, n());
  }
}
function ro(e) {
  if (ot.length) {
    const t = [...new Set(ot)];
    if (ot.length = 0, ye) {
      ye.push(...t);
      return;
    }
    for (ye = t, ye.sort((n, s) => vt(n) - vt(s)), Ke = 0; Ke < ye.length; Ke++)
      ye[Ke]();
    ye = null, Ke = 0;
  }
}
const vt = (e) => e.id == null ? 1 / 0 : e.id, ki = (e, t) => {
  const n = vt(e) - vt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function lo(e) {
  Pn = !1, Ct = !0, Q.sort(ki);
  const t = Ce;
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
    Se = 0, Q.length = 0, ro(), Ct = !1, Wn = null, (Q.length || ot.length) && lo();
  }
}
function Mi(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || W;
  let o = n;
  const i = t.startsWith("update:"), r = i && t.slice(7);
  if (r && r in s) {
    const _ = `${r === "modelValue" ? "model" : r}Modifiers`, { number: h, trim: E } = s[_] || W;
    E && (o = n.map((D) => z(D) ? D.trim() : D)), h && (o = n.map(_n));
  }
  let l, a = s[l = rn(t)] || // also try camelCase event handler (#2249)
  s[l = rn(Re(t))];
  !a && i && (a = s[l = rn(_e(t))]), a && fe(a, e, 6, o);
  const u = s[l + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, fe(u, e, 6, o);
  }
}
function co(e, t, n = !1) {
  const s = t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let r = {}, l = !1;
  if (!L(e)) {
    const a = (u) => {
      const _ = co(u, t, !0);
      _ && (l = !0, q(r, _));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !i && !l ? (H(e) && s.set(e, null), null) : (R(i) ? i.forEach((a) => r[a] = null) : q(r, i), H(e) && s.set(e, r), r);
}
function qt(e, t) {
  return !e || !$t(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), k(e, t[0].toLowerCase() + t.slice(1)) || k(e, _e(t)) || k(e, t));
}
let ae = null, ao = null;
function Vt(e) {
  const t = ae;
  return ae = e, ao = e && e.type.__scopeId || null, t;
}
function Ni(e, t = ae, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Ps(-1);
    const i = Vt(t);
    let r;
    try {
      r = e(...o);
    } finally {
      Vt(i), s._d && Ps(1);
    }
    return r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function ln(e) {
  const { type: t, vnode: n, proxy: s, withProxy: o, props: i, propsOptions: [r], slots: l, attrs: a, emit: u, render: _, renderCache: h, data: E, setupState: D, ctx: M, inheritAttrs: y } = e;
  let B, w;
  const te = Vt(e);
  try {
    if (n.shapeFlag & 4) {
      const G = o || s;
      B = Ae(_.call(G, G, h, i, D, E, M)), w = a;
    } else {
      const G = t;
      B = Ae(G.length > 1 ? G(i, { attrs: a, slots: l, emit: u }) : G(
        i,
        null
        /* we know it doesn't need it */
      )), w = t.props ? a : wi(a);
    }
  } catch (G) {
    mt.length = 0, zt(
      G,
      e,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ), B = Ue(Ie);
  }
  let U = B;
  if (w && y !== !1) {
    const G = Object.keys(w), { shapeFlag: Z } = U;
    G.length && Z & 7 && (r && G.some(Un) && (w = Fi(w, r)), U = Ve(U, w));
  }
  return n.dirs && (U = Ve(U), U.dirs = U.dirs ? U.dirs.concat(n.dirs) : n.dirs), n.transition && (U.transition = n.transition), B = U, Vt(te), B;
}
const wi = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || $t(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Fi = (e, t) => {
  const n = {};
  for (const s in e)
    (!Un(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Vi(e, t, n) {
  const { props: s, children: o, component: i } = e, { props: r, children: l, patchFlag: a } = t, u = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? us(s, r, u) : !!r;
    if (a & 8) {
      const _ = t.dynamicProps;
      for (let h = 0; h < _.length; h++) {
        const E = _[h];
        if (r[E] !== s[E] && !qt(u, E))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : s === r ? !1 : s ? r ? us(s, r, u) : !0 : !!r;
  return !1;
}
function us(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const i = s[o];
    if (t[i] !== e[i] && !qt(n, i))
      return !0;
  }
  return !1;
}
function ji({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Wi = (e) => e.__isSuspense;
function Hi(e, t) {
  t && t.pendingBranch ? R(e) ? t.effects.push(...e) : t.effects.push(e) : xi(e);
}
function Bi(e, t) {
  if (X) {
    let n = X.provides;
    const s = X.parent && X.parent.provides;
    s === n && (n = X.provides = Object.create(s)), n[e] = t;
  }
}
function xt(e, t, n = !1) {
  const s = X || ae;
  if (s) {
    const o = s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && L(t) ? t.call(s.proxy) : t;
  }
}
const Ut = {};
function cn(e, t, n) {
  return fo(e, t, n);
}
function fo(e, t, { immediate: n, deep: s, flush: o, onTrack: i, onTrigger: r } = W) {
  const l = zo() === (X == null ? void 0 : X.scope) ? X : null;
  let a, u = !1, _ = !1;
  if (ee(e) ? (a = () => e.value, u = Ft(e)) : st(e) ? (a = () => e, s = !0) : R(e) ? (_ = !0, u = e.some((U) => st(U) || Ft(U)), a = () => e.map((U) => {
    if (ee(U))
      return U.value;
    if (st(U))
      return Ye(U);
    if (L(U))
      return we(
        U,
        l,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
  })) : L(e) ? t ? a = () => we(
    e,
    l,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : a = () => {
    if (!(l && l.isUnmounted))
      return h && h(), fe(e, l, 3, [E]);
  } : a = Ce, t && s) {
    const U = a;
    a = () => Ye(U());
  }
  let h, E = (U) => {
    h = w.onStop = () => {
      we(
        U,
        l,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, D;
  if (Et)
    if (E = Ce, t ? n && fe(t, l, 3, [
      a(),
      _ ? [] : void 0,
      E
    ]) : a(), o === "sync") {
      const U = jr();
      D = U.__watcherHandles || (U.__watcherHandles = []);
    } else
      return Ce;
  let M = _ ? new Array(e.length).fill(Ut) : Ut;
  const y = () => {
    if (w.active)
      if (t) {
        const U = w.run();
        (s || u || (_ ? U.some((G, Z) => gt(G, M[Z])) : gt(U, M))) && (h && h(), fe(t, l, 3, [
          U,
          // pass undefined as the old value when it's changed for the first time
          M === Ut ? void 0 : _ && M[0] === Ut ? [] : M,
          E
        ]), M = U);
      } else
        w.run();
  };
  y.allowRecurse = !!t;
  let B;
  o === "sync" ? B = y : o === "post" ? B = () => oe(y, l && l.suspense) : (y.pre = !0, l && (y.id = l.uid), B = () => Hn(y));
  const w = new kn(a, B);
  t ? n ? y() : M = w.run() : o === "post" ? oe(w.run.bind(w), l && l.suspense) : w.run();
  const te = () => {
    w.stop(), l && l.scope && Ln(l.scope.effects, w);
  };
  return D && D.push(te), te;
}
function Gi(e, t, n) {
  const s = this.proxy, o = z(e) ? e.includes(".") ? uo(s, e) : () => s[e] : e.bind(s, s);
  let i;
  L(t) ? i = t : (i = t.handler, n = t);
  const r = X;
  rt(this);
  const l = fo(o, i.bind(s), n);
  return r ? rt(r) : qe(), l;
}
function uo(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
function Ye(e, t) {
  if (!H(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), ee(e))
    Ye(e.value, t);
  else if (R(e))
    for (let n = 0; n < e.length; n++)
      Ye(e[n], t);
  else if (Jt(e) || nt(e))
    e.forEach((n) => {
      Ye(n, t);
    });
  else if (Fs(e))
    for (const n in e)
      Ye(e[n], t);
  return e;
}
function Ki() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Bn(() => {
    e.isMounted = !0;
  }), ho(() => {
    e.isUnmounting = !0;
  }), e;
}
const ce = [Function, Array], $i = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: ce,
    onEnter: ce,
    onAfterEnter: ce,
    onEnterCancelled: ce,
    // leave
    onBeforeLeave: ce,
    onLeave: ce,
    onAfterLeave: ce,
    onLeaveCancelled: ce,
    // appear
    onBeforeAppear: ce,
    onAppear: ce,
    onAfterAppear: ce,
    onAppearCancelled: ce
  },
  setup(e, { slots: t }) {
    const n = Tr(), s = Ki();
    let o;
    return () => {
      const i = t.default && mo(t.default(), !0);
      if (!i || !i.length)
        return;
      let r = i[0];
      if (i.length > 1) {
        for (const y of i)
          if (y.type !== Ie) {
            r = y;
            break;
          }
      }
      const l = N(e), { mode: a } = l;
      if (s.isLeaving)
        return an(r);
      const u = ds(r);
      if (!u)
        return an(r);
      const _ = En(u, l, s, n);
      bn(u, _);
      const h = n.subTree, E = h && ds(h);
      let D = !1;
      const { getTransitionKey: M } = u.type;
      if (M) {
        const y = M();
        o === void 0 ? o = y : y !== o && (o = y, D = !0);
      }
      if (E && E.type !== Ie && (!$e(u, E) || D)) {
        const y = En(E, l, s, n);
        if (bn(E, y), a === "out-in")
          return s.isLeaving = !0, y.afterLeave = () => {
            s.isLeaving = !1, n.update.active !== !1 && n.update();
          }, an(r);
        a === "in-out" && u.type !== Ie && (y.delayLeave = (B, w, te) => {
          const U = po(s, E);
          U[String(E.key)] = E, B._leaveCb = () => {
            w(), B._leaveCb = void 0, delete _.delayedLeave;
          }, _.delayedLeave = te;
        });
      }
      return r;
    };
  }
}, Ji = $i;
function po(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function En(e, t, n, s) {
  const { appear: o, mode: i, persisted: r = !1, onBeforeEnter: l, onEnter: a, onAfterEnter: u, onEnterCancelled: _, onBeforeLeave: h, onLeave: E, onAfterLeave: D, onLeaveCancelled: M, onBeforeAppear: y, onAppear: B, onAfterAppear: w, onAppearCancelled: te } = t, U = String(e.key), G = po(n, e), Z = (T, Y) => {
    T && fe(T, s, 9, Y);
  }, Ze = (T, Y) => {
    const K = Y[1];
    Z(T, Y), R(T) ? T.every((re) => re.length <= 1) && K() : T.length <= 1 && K();
  }, xe = {
    mode: i,
    persisted: r,
    beforeEnter(T) {
      let Y = l;
      if (!n.isMounted)
        if (o)
          Y = y || l;
        else
          return;
      T._leaveCb && T._leaveCb(
        !0
        /* cancelled */
      );
      const K = G[U];
      K && $e(e, K) && K.el._leaveCb && K.el._leaveCb(), Z(Y, [T]);
    },
    enter(T) {
      let Y = a, K = u, re = _;
      if (!n.isMounted)
        if (o)
          Y = B || a, K = w || u, re = te || _;
        else
          return;
      let ve = !1;
      const Oe = T._enterCb = (at) => {
        ve || (ve = !0, at ? Z(re, [T]) : Z(K, [T]), xe.delayedLeave && xe.delayedLeave(), T._enterCb = void 0);
      };
      Y ? Ze(Y, [T, Oe]) : Oe();
    },
    leave(T, Y) {
      const K = String(e.key);
      if (T._enterCb && T._enterCb(
        !0
        /* cancelled */
      ), n.isUnmounting)
        return Y();
      Z(h, [T]);
      let re = !1;
      const ve = T._leaveCb = (Oe) => {
        re || (re = !0, Y(), Oe ? Z(M, [T]) : Z(D, [T]), T._leaveCb = void 0, G[K] === e && delete G[K]);
      };
      G[K] = e, E ? Ze(E, [T, ve]) : ve();
    },
    clone(T) {
      return En(T, t, n, s);
    }
  };
  return xe;
}
function an(e) {
  if (Zt(e))
    return e = Ve(e), e.children = null, e;
}
function ds(e) {
  return Zt(e) ? e.children ? e.children[0] : void 0 : e;
}
function bn(e, t) {
  e.shapeFlag & 6 && e.component ? bn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function mo(e, t = !1, n) {
  let s = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    const l = n == null ? r.key : String(n) + String(r.key != null ? r.key : i);
    r.type === me ? (r.patchFlag & 128 && o++, s = s.concat(mo(r.children, t, l))) : (t || r.type !== Ie) && s.push(l != null ? Ve(r, { key: l }) : r);
  }
  if (o > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
function _o(e) {
  return L(e) ? { setup: e, name: e.name } : e;
}
const kt = (e) => !!e.type.__asyncLoader, Zt = (e) => e.type.__isKeepAlive;
function Xi(e, t) {
  go(e, "a", t);
}
function Yi(e, t) {
  go(e, "da", t);
}
function go(e, t, n = X) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Qt(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Zt(o.parent.vnode) && zi(s, t, n, o), o = o.parent;
  }
}
function zi(e, t, n, s) {
  const o = Qt(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Co(() => {
    Ln(s[t], o);
  }, n);
}
function Qt(e, t, n = X, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...r) => {
      if (n.isUnmounted)
        return;
      lt(), rt(n);
      const l = fe(t, n, e, r);
      return qe(), ct(), l;
    });
    return s ? o.unshift(i) : o.push(i), i;
  }
}
const Te = (e) => (t, n = X) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Et || e === "sp") && Qt(e, (...s) => t(...s), n)
), qi = Te(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), Bn = Te(
  "m"
  /* LifecycleHooks.MOUNTED */
), Zi = Te(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), Qi = Te(
  "u"
  /* LifecycleHooks.UPDATED */
), ho = Te(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), Co = Te(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), er = Te(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), tr = Te(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), nr = Te(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function sr(e, t = X) {
  Qt("ec", e, t);
}
function ps(e, t) {
  const n = ae;
  if (n === null)
    return e;
  const s = nn(n) || n.proxy, o = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, l, a, u = W] = t[i];
    r && (L(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Ye(l), o.push({
      dir: r,
      instance: s,
      value: l,
      oldValue: void 0,
      arg: a,
      modifiers: u
    }));
  }
  return e;
}
function He(e, t, n, s) {
  const o = e.dirs, i = t && t.dirs;
  for (let r = 0; r < o.length; r++) {
    const l = o[r];
    i && (l.oldValue = i[r].value);
    let a = l.dir[s];
    a && (lt(), fe(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), ct());
  }
}
const or = Symbol(), An = (e) => e ? Ro(e) ? nn(e) || e.proxy : An(e.parent) : null, pt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ q(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => An(e.parent),
    $root: (e) => An(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Gn(e),
    $forceUpdate: (e) => e.f || (e.f = () => Hn(e.update)),
    $nextTick: (e) => e.n || (e.n = oo.bind(e.proxy)),
    $watch: (e) => Gi.bind(e)
  })
), fn = (e, t) => e !== W && !e.__isScriptSetup && k(e, t), ir = {
  get({ _: e }, t) {
    const { ctx: n, setupState: s, data: o, props: i, accessCache: r, type: l, appContext: a } = e;
    let u;
    if (t[0] !== "$") {
      const D = r[t];
      if (D !== void 0)
        switch (D) {
          case 1:
            return s[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (fn(s, t))
          return r[t] = 1, s[t];
        if (o !== W && k(o, t))
          return r[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && k(u, t)
        )
          return r[t] = 3, i[t];
        if (n !== W && k(n, t))
          return r[t] = 4, n[t];
        Sn && (r[t] = 0);
      }
    }
    const _ = pt[t];
    let h, E;
    if (_)
      return t === "$attrs" && ie(e, "get", t), _(e);
    if (
      // css module (injected by vue-loader)
      (h = l.__cssModules) && (h = h[t])
    )
      return h;
    if (n !== W && k(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      E = a.config.globalProperties, k(E, t)
    )
      return E[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: i } = e;
    return fn(o, t) ? (o[t] = n, !0) : s !== W && k(s, t) ? (s[t] = n, !0) : k(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: i } }, r) {
    let l;
    return !!n[r] || e !== W && k(e, r) || fn(t, r) || (l = i[0]) && k(l, r) || k(s, r) || k(pt, r) || k(o.config.globalProperties, r);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : k(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
let Sn = !0;
function rr(e) {
  const t = Gn(e), n = e.proxy, s = e.ctx;
  Sn = !1, t.beforeCreate && ms(
    t.beforeCreate,
    e,
    "bc"
    /* LifecycleHooks.BEFORE_CREATE */
  );
  const {
    // state
    data: o,
    computed: i,
    methods: r,
    watch: l,
    provide: a,
    inject: u,
    // lifecycle
    created: _,
    beforeMount: h,
    mounted: E,
    beforeUpdate: D,
    updated: M,
    activated: y,
    deactivated: B,
    beforeDestroy: w,
    beforeUnmount: te,
    destroyed: U,
    unmounted: G,
    render: Z,
    renderTracked: Ze,
    renderTriggered: xe,
    errorCaptured: T,
    serverPrefetch: Y,
    // public API
    expose: K,
    inheritAttrs: re,
    // assets
    components: ve,
    directives: Oe,
    filters: at
  } = t;
  if (u && lr(u, s, null, e.appContext.config.unwrapInjectedRef), r)
    for (const $ in r) {
      const V = r[$];
      L(V) && (s[$] = V.bind(n));
    }
  if (o) {
    const $ = o.call(n, n);
    H($) && (e.data = Fn($));
  }
  if (Sn = !0, i)
    for (const $ in i) {
      const V = i[$], je = L(V) ? V.bind(n, n) : L(V.get) ? V.get.bind(n, n) : Ce, At = !L(V) && L(V.set) ? V.set.bind(n) : Ce, We = Fr({
        get: je,
        set: At
      });
      Object.defineProperty(s, $, {
        enumerable: !0,
        configurable: !0,
        get: () => We.value,
        set: (Pe) => We.value = Pe
      });
    }
  if (l)
    for (const $ in l)
      vo(l[$], s, n, $);
  if (a) {
    const $ = L(a) ? a.call(n) : a;
    Reflect.ownKeys($).forEach((V) => {
      Bi(V, $[V]);
    });
  }
  _ && ms(
    _,
    e,
    "c"
    /* LifecycleHooks.CREATED */
  );
  function ne($, V) {
    R(V) ? V.forEach((je) => $(je.bind(n))) : V && $(V.bind(n));
  }
  if (ne(qi, h), ne(Bn, E), ne(Zi, D), ne(Qi, M), ne(Xi, y), ne(Yi, B), ne(sr, T), ne(nr, Ze), ne(tr, xe), ne(ho, te), ne(Co, G), ne(er, Y), R(K))
    if (K.length) {
      const $ = e.exposed || (e.exposed = {});
      K.forEach((V) => {
        Object.defineProperty($, V, {
          get: () => n[V],
          set: (je) => n[V] = je
        });
      });
    } else
      e.exposed || (e.exposed = {});
  Z && e.render === Ce && (e.render = Z), re != null && (e.inheritAttrs = re), ve && (e.components = ve), Oe && (e.directives = Oe);
}
function lr(e, t, n = Ce, s = !1) {
  R(e) && (e = On(e));
  for (const o in e) {
    const i = e[o];
    let r;
    H(i) ? "default" in i ? r = xt(
      i.from || o,
      i.default,
      !0
      /* treat default function as factory */
    ) : r = xt(i.from || o) : r = xt(i), ee(r) && s ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (l) => r.value = l
    }) : t[o] = r;
  }
}
function ms(e, t, n) {
  fe(R(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function vo(e, t, n, s) {
  const o = s.includes(".") ? uo(n, s) : () => n[s];
  if (z(e)) {
    const i = t[e];
    L(i) && cn(o, i);
  } else if (L(e))
    cn(o, e.bind(n));
  else if (H(e))
    if (R(e))
      e.forEach((i) => vo(i, t, n, s));
    else {
      const i = L(e.handler) ? e.handler.bind(n) : t[e.handler];
      L(i) && cn(o, i, e);
    }
}
function Gn(e) {
  const t = e.type, { mixins: n, extends: s } = t, { mixins: o, optionsCache: i, config: { optionMergeStrategies: r } } = e.appContext, l = i.get(t);
  let a;
  return l ? a = l : !o.length && !n && !s ? a = t : (a = {}, o.length && o.forEach((u) => jt(a, u, r, !0)), jt(a, t, r)), H(t) && i.set(t, a), a;
}
function jt(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t;
  i && jt(e, i, n, !0), o && o.forEach((r) => jt(e, r, n, !0));
  for (const r in t)
    if (!(s && r === "expose")) {
      const l = cr[r] || n && n[r];
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const cr = {
  data: _s,
  props: Ge,
  emits: Ge,
  // objects
  methods: Ge,
  computed: Ge,
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
  components: Ge,
  directives: Ge,
  // watch
  watch: fr,
  // provide / inject
  provide: _s,
  inject: ar
};
function _s(e, t) {
  return t ? e ? function() {
    return q(L(e) ? e.call(this, this) : e, L(t) ? t.call(this, this) : t);
  } : t : e;
}
function ar(e, t) {
  return Ge(On(e), On(t));
}
function On(e) {
  if (R(e)) {
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
function Ge(e, t) {
  return e ? q(q(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function fr(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = q(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = se(e[s], t[s]);
  return n;
}
function ur(e, t, n, s = !1) {
  const o = {}, i = {};
  wt(i, tn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Po(e, t, o, i);
  for (const r in e.propsOptions[0])
    r in o || (o[r] = void 0);
  n ? e.props = s ? o : Ai(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function dr(e, t, n, s) {
  const { props: o, attrs: i, vnode: { patchFlag: r } } = e, l = N(o), [a] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const _ = e.vnode.dynamicProps;
      for (let h = 0; h < _.length; h++) {
        let E = _[h];
        if (qt(e.emitsOptions, E))
          continue;
        const D = t[E];
        if (a)
          if (k(i, E))
            D !== i[E] && (i[E] = D, u = !0);
          else {
            const M = Re(E);
            o[M] = Dn(
              a,
              l,
              M,
              D,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          D !== i[E] && (i[E] = D, u = !0);
      }
    }
  } else {
    Po(e, t, o, i) && (u = !0);
    let _;
    for (const h in l)
      (!t || // for camelCase
      !k(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((_ = _e(h)) === h || !k(t, _))) && (a ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[_] !== void 0) && (o[h] = Dn(
        a,
        l,
        h,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete o[h]);
    if (i !== l)
      for (const h in i)
        (!t || !k(t, h)) && (delete i[h], u = !0);
  }
  u && Le(e, "set", "$attrs");
}
function Po(e, t, n, s) {
  const [o, i] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let a in t) {
      if (Lt(a))
        continue;
      const u = t[a];
      let _;
      o && k(o, _ = Re(a)) ? !i || !i.includes(_) ? n[_] = u : (l || (l = {}))[_] = u : qt(e.emitsOptions, a) || (!(a in s) || u !== s[a]) && (s[a] = u, r = !0);
    }
  if (i) {
    const a = N(n), u = l || W;
    for (let _ = 0; _ < i.length; _++) {
      const h = i[_];
      n[h] = Dn(o, a, h, u[h], e, !k(u, h));
    }
  }
  return r;
}
function Dn(e, t, n, s, o, i) {
  const r = e[n];
  if (r != null) {
    const l = k(r, "default");
    if (l && s === void 0) {
      const a = r.default;
      if (r.type !== Function && L(a)) {
        const { propsDefaults: u } = o;
        n in u ? s = u[n] : (rt(o), s = u[n] = a.call(null, t), qe());
      } else
        s = a;
    }
    r[
      0
      /* BooleanFlags.shouldCast */
    ] && (i && !l ? s = !1 : r[
      1
      /* BooleanFlags.shouldCastTrue */
    ] && (s === "" || s === _e(n)) && (s = !0));
  }
  return s;
}
function Eo(e, t, n = !1) {
  const s = t.propsCache, o = s.get(e);
  if (o)
    return o;
  const i = e.props, r = {}, l = [];
  let a = !1;
  if (!L(e)) {
    const _ = (h) => {
      a = !0;
      const [E, D] = Eo(h, t, !0);
      q(r, E), D && l.push(...D);
    };
    !n && t.mixins.length && t.mixins.forEach(_), e.extends && _(e.extends), e.mixins && e.mixins.forEach(_);
  }
  if (!i && !a)
    return H(e) && s.set(e, tt), tt;
  if (R(i))
    for (let _ = 0; _ < i.length; _++) {
      const h = Re(i[_]);
      gs(h) && (r[h] = W);
    }
  else if (i)
    for (const _ in i) {
      const h = Re(_);
      if (gs(h)) {
        const E = i[_], D = r[h] = R(E) || L(E) ? { type: E } : Object.assign({}, E);
        if (D) {
          const M = vs(Boolean, D.type), y = vs(String, D.type);
          D[
            0
            /* BooleanFlags.shouldCast */
          ] = M > -1, D[
            1
            /* BooleanFlags.shouldCastTrue */
          ] = y < 0 || M < y, (M > -1 || k(D, "default")) && l.push(h);
        }
      }
    }
  const u = [r, l];
  return H(e) && s.set(e, u), u;
}
function gs(e) {
  return e[0] !== "$";
}
function hs(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Cs(e, t) {
  return hs(e) === hs(t);
}
function vs(e, t) {
  return R(t) ? t.findIndex((n) => Cs(n, e)) : L(t) && Cs(t, e) ? 0 : -1;
}
const bo = (e) => e[0] === "_" || e === "$stable", Kn = (e) => R(e) ? e.map(Ae) : [Ae(e)], pr = (e, t, n) => {
  if (t._n)
    return t;
  const s = Ni((...o) => Kn(t(...o)), n);
  return s._c = !1, s;
}, Ao = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (bo(o))
      continue;
    const i = e[o];
    if (L(i))
      t[o] = pr(o, i, s);
    else if (i != null) {
      const r = Kn(i);
      t[o] = () => r;
    }
  }
}, So = (e, t) => {
  const n = Kn(t);
  e.slots.default = () => n;
}, mr = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = N(t), wt(t, "_", n)) : Ao(t, e.slots = {});
  } else
    e.slots = {}, t && So(e, t);
  wt(e.slots, tn, 1);
}, _r = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let i = !0, r = W;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : (q(o, t), !n && l === 1 && delete o._) : (i = !t.$stable, Ao(t, o)), r = t;
  } else
    t && (So(e, t), r = { default: 1 });
  if (i)
    for (const l in o)
      !bo(l) && !(l in r) && delete o[l];
};
function Oo() {
  return {
    app: null,
    config: {
      isNativeTag: Wo,
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
let gr = 0;
function hr(e, t) {
  return function(s, o = null) {
    L(s) || (s = Object.assign({}, s)), o != null && !H(o) && (o = null);
    const i = Oo(), r = /* @__PURE__ */ new Set();
    let l = !1;
    const a = i.app = {
      _uid: gr++,
      _component: s,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: Wr,
      get config() {
        return i.config;
      },
      set config(u) {
      },
      use(u, ..._) {
        return r.has(u) || (u && L(u.install) ? (r.add(u), u.install(a, ..._)) : L(u) && (r.add(u), u(a, ..._))), a;
      },
      mixin(u) {
        return i.mixins.includes(u) || i.mixins.push(u), a;
      },
      component(u, _) {
        return _ ? (i.components[u] = _, a) : i.components[u];
      },
      directive(u, _) {
        return _ ? (i.directives[u] = _, a) : i.directives[u];
      },
      mount(u, _, h) {
        if (!l) {
          const E = Ue(s, o);
          return E.appContext = i, _ && t ? t(E, u) : e(E, u, h), l = !0, a._container = u, u.__vue_app__ = a, nn(E.component) || E.component.proxy;
        }
      },
      unmount() {
        l && (e(null, a._container), delete a._container.__vue_app__);
      },
      provide(u, _) {
        return i.provides[u] = _, a;
      }
    };
    return a;
  };
}
function yn(e, t, n, s, o = !1) {
  if (R(e)) {
    e.forEach((E, D) => yn(E, t && (R(t) ? t[D] : t), n, s, o));
    return;
  }
  if (kt(s) && !o)
    return;
  const i = s.shapeFlag & 4 ? nn(s.component) || s.component.proxy : s.el, r = o ? null : i, { i: l, r: a } = e, u = t && t.r, _ = l.refs === W ? l.refs = {} : l.refs, h = l.setupState;
  if (u != null && u !== a && (z(u) ? (_[u] = null, k(h, u) && (h[u] = null)) : ee(u) && (u.value = null)), L(a))
    we(a, l, 12, [r, _]);
  else {
    const E = z(a), D = ee(a);
    if (E || D) {
      const M = () => {
        if (e.f) {
          const y = E ? k(h, a) ? h[a] : _[a] : a.value;
          o ? R(y) && Ln(y, i) : R(y) ? y.includes(i) || y.push(i) : E ? (_[a] = [i], k(h, a) && (h[a] = _[a])) : (a.value = [i], e.k && (_[e.k] = a.value));
        } else
          E ? (_[a] = r, k(h, a) && (h[a] = r)) : D && (a.value = r, e.k && (_[e.k] = r));
      };
      r ? (M.id = -1, oe(M, n)) : M();
    }
  }
}
const oe = Hi;
function Cr(e) {
  return vr(e);
}
function vr(e, t) {
  const n = Jo();
  n.__VUE__ = !0;
  const { insert: s, remove: o, patchProp: i, createElement: r, createText: l, createComment: a, setText: u, setElementText: _, parentNode: h, nextSibling: E, setScopeId: D = Ce, insertStaticContent: M } = e, y = (c, f, d, m = null, p = null, v = null, b = !1, C = null, P = !!f.dynamicChildren) => {
    if (c === f)
      return;
    c && !$e(c, f) && (m = St(c), Pe(c, p, v, !0), c = null), f.patchFlag === -2 && (P = !1, f.dynamicChildren = null);
    const { type: g, ref: S, shapeFlag: A } = f;
    switch (g) {
      case en:
        B(c, f, d, m);
        break;
      case Ie:
        w(c, f, d, m);
        break;
      case Mt:
        c == null && te(f, d, m, b);
        break;
      case me:
        ve(c, f, d, m, p, v, b, C, P);
        break;
      default:
        A & 1 ? Z(c, f, d, m, p, v, b, C, P) : A & 6 ? Oe(c, f, d, m, p, v, b, C, P) : (A & 64 || A & 128) && g.process(c, f, d, m, p, v, b, C, P, Qe);
    }
    S != null && p && yn(S, c && c.ref, v, f || c, !f);
  }, B = (c, f, d, m) => {
    if (c == null)
      s(f.el = l(f.children), d, m);
    else {
      const p = f.el = c.el;
      f.children !== c.children && u(p, f.children);
    }
  }, w = (c, f, d, m) => {
    c == null ? s(f.el = a(f.children || ""), d, m) : f.el = c.el;
  }, te = (c, f, d, m) => {
    [c.el, c.anchor] = M(c.children, f, d, m, c.el, c.anchor);
  }, U = ({ el: c, anchor: f }, d, m) => {
    let p;
    for (; c && c !== f; )
      p = E(c), s(c, d, m), c = p;
    s(f, d, m);
  }, G = ({ el: c, anchor: f }) => {
    let d;
    for (; c && c !== f; )
      d = E(c), o(c), c = d;
    o(f);
  }, Z = (c, f, d, m, p, v, b, C, P) => {
    b = b || f.type === "svg", c == null ? Ze(f, d, m, p, v, b, C, P) : Y(c, f, p, v, b, C, P);
  }, Ze = (c, f, d, m, p, v, b, C) => {
    let P, g;
    const { type: S, props: A, shapeFlag: O, transition: I, dirs: x } = c;
    if (P = c.el = r(c.type, v, A && A.is, A), O & 8 ? _(P, c.children) : O & 16 && T(c.children, P, null, m, p, v && S !== "foreignObject", b, C), x && He(c, null, m, "created"), xe(P, c, c.scopeId, b, m), A) {
      for (const F in A)
        F !== "value" && !Lt(F) && i(P, F, null, A[F], v, c.children, m, p, De);
      "value" in A && i(P, "value", null, A.value), (g = A.onVnodeBeforeMount) && be(g, m, c);
    }
    x && He(c, null, m, "beforeMount");
    const j = (!p || p && !p.pendingBranch) && I && !I.persisted;
    j && I.beforeEnter(P), s(P, f, d), ((g = A && A.onVnodeMounted) || j || x) && oe(() => {
      g && be(g, m, c), j && I.enter(P), x && He(c, null, m, "mounted");
    }, p);
  }, xe = (c, f, d, m, p) => {
    if (d && D(c, d), m)
      for (let v = 0; v < m.length; v++)
        D(c, m[v]);
    if (p) {
      let v = p.subTree;
      if (f === v) {
        const b = p.vnode;
        xe(c, b, b.scopeId, b.slotScopeIds, p.parent);
      }
    }
  }, T = (c, f, d, m, p, v, b, C, P = 0) => {
    for (let g = P; g < c.length; g++) {
      const S = c[g] = C ? Me(c[g]) : Ae(c[g]);
      y(null, S, f, d, m, p, v, b, C);
    }
  }, Y = (c, f, d, m, p, v, b) => {
    const C = f.el = c.el;
    let { patchFlag: P, dynamicChildren: g, dirs: S } = f;
    P |= c.patchFlag & 16;
    const A = c.props || W, O = f.props || W;
    let I;
    d && Be(d, !1), (I = O.onVnodeBeforeUpdate) && be(I, d, f, c), S && He(f, c, d, "beforeUpdate"), d && Be(d, !0);
    const x = p && f.type !== "foreignObject";
    if (g ? K(c.dynamicChildren, g, C, d, m, x, v) : b || V(c, f, C, null, d, m, x, v, !1), P > 0) {
      if (P & 16)
        re(C, f, A, O, d, m, p);
      else if (P & 2 && A.class !== O.class && i(C, "class", null, O.class, p), P & 4 && i(C, "style", A.style, O.style, p), P & 8) {
        const j = f.dynamicProps;
        for (let F = 0; F < j.length; F++) {
          const J = j[F], ue = A[J], et = O[J];
          (et !== ue || J === "value") && i(C, J, ue, et, p, c.children, d, m, De);
        }
      }
      P & 1 && c.children !== f.children && _(C, f.children);
    } else
      !b && g == null && re(C, f, A, O, d, m, p);
    ((I = O.onVnodeUpdated) || S) && oe(() => {
      I && be(I, d, f, c), S && He(f, c, d, "updated");
    }, m);
  }, K = (c, f, d, m, p, v, b) => {
    for (let C = 0; C < f.length; C++) {
      const P = c[C], g = f[C], S = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        P.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (P.type === me || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !$e(P, g) || // - In the case of a component, it could contain anything.
        P.shapeFlag & 70) ? h(P.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          d
        )
      );
      y(P, g, S, null, m, p, v, b, !0);
    }
  }, re = (c, f, d, m, p, v, b) => {
    if (d !== m) {
      if (d !== W)
        for (const C in d)
          !Lt(C) && !(C in m) && i(c, C, d[C], null, b, f.children, p, v, De);
      for (const C in m) {
        if (Lt(C))
          continue;
        const P = m[C], g = d[C];
        P !== g && C !== "value" && i(c, C, g, P, b, f.children, p, v, De);
      }
      "value" in m && i(c, "value", d.value, m.value);
    }
  }, ve = (c, f, d, m, p, v, b, C, P) => {
    const g = f.el = c ? c.el : l(""), S = f.anchor = c ? c.anchor : l("");
    let { patchFlag: A, dynamicChildren: O, slotScopeIds: I } = f;
    I && (C = C ? C.concat(I) : I), c == null ? (s(g, d, m), s(S, d, m), T(f.children, d, S, p, v, b, C, P)) : A > 0 && A & 64 && O && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (K(c.dynamicChildren, O, d, p, v, b, C), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || p && f === p.subTree) && Do(
      c,
      f,
      !0
      /* shallow */
    )) : V(c, f, d, S, p, v, b, C, P);
  }, Oe = (c, f, d, m, p, v, b, C, P) => {
    f.slotScopeIds = C, c == null ? f.shapeFlag & 512 ? p.ctx.activate(f, d, m, b, P) : at(f, d, m, p, v, b, P) : Xn(c, f, P);
  }, at = (c, f, d, m, p, v, b) => {
    const C = c.component = Lr(c, m, p);
    if (Zt(c) && (C.ctx.renderer = Qe), xr(C), C.asyncDep) {
      if (p && p.registerDep(C, ne), !c.el) {
        const P = C.subTree = Ue(Ie);
        w(null, P, f, d);
      }
      return;
    }
    ne(C, c, f, d, p, v, b);
  }, Xn = (c, f, d) => {
    const m = f.component = c.component;
    if (Vi(c, f, d))
      if (m.asyncDep && !m.asyncResolved) {
        $(m, f, d);
        return;
      } else
        m.next = f, Ti(m.update), m.update();
    else
      f.el = c.el, m.vnode = f;
  }, ne = (c, f, d, m, p, v, b) => {
    const C = () => {
      if (c.isMounted) {
        let { next: S, bu: A, u: O, parent: I, vnode: x } = c, j = S, F;
        Be(c, !1), S ? (S.el = x.el, $(c, S, b)) : S = x, A && Tt(A), (F = S.props && S.props.onVnodeBeforeUpdate) && be(F, I, S, x), Be(c, !0);
        const J = ln(c), ue = c.subTree;
        c.subTree = J, y(
          ue,
          J,
          // parent may have changed if it's in a teleport
          h(ue.el),
          // anchor may have changed if it's in a fragment
          St(ue),
          c,
          p,
          v
        ), S.el = J.el, j === null && ji(c, J.el), O && oe(O, p), (F = S.props && S.props.onVnodeUpdated) && oe(() => be(F, I, S, x), p);
      } else {
        let S;
        const { el: A, props: O } = f, { bm: I, m: x, parent: j } = c, F = kt(f);
        if (Be(c, !1), I && Tt(I), !F && (S = O && O.onVnodeBeforeMount) && be(S, j, f), Be(c, !0), A && on) {
          const J = () => {
            c.subTree = ln(c), on(A, c.subTree, c, p, null);
          };
          F ? f.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !c.isUnmounted && J()
          ) : J();
        } else {
          const J = c.subTree = ln(c);
          y(null, J, d, m, c, p, v), f.el = J.el;
        }
        if (x && oe(x, p), !F && (S = O && O.onVnodeMounted)) {
          const J = f;
          oe(() => be(S, j, J), p);
        }
        (f.shapeFlag & 256 || j && kt(j.vnode) && j.vnode.shapeFlag & 256) && c.a && oe(c.a, p), c.isMounted = !0, f = d = m = null;
      }
    }, P = c.effect = new kn(
      C,
      () => Hn(g),
      c.scope
      // track it in component's effect scope
    ), g = c.update = () => P.run();
    g.id = c.uid, Be(c, !0), g();
  }, $ = (c, f, d) => {
    f.component = c;
    const m = c.vnode.props;
    c.vnode = f, c.next = null, dr(c, f.props, m, d), _r(c, f.children, d), lt(), fs(), ct();
  }, V = (c, f, d, m, p, v, b, C, P = !1) => {
    const g = c && c.children, S = c ? c.shapeFlag : 0, A = f.children, { patchFlag: O, shapeFlag: I } = f;
    if (O > 0) {
      if (O & 128) {
        At(g, A, d, m, p, v, b, C, P);
        return;
      } else if (O & 256) {
        je(g, A, d, m, p, v, b, C, P);
        return;
      }
    }
    I & 8 ? (S & 16 && De(g, p, v), A !== g && _(d, A)) : S & 16 ? I & 16 ? At(g, A, d, m, p, v, b, C, P) : De(g, p, v, !0) : (S & 8 && _(d, ""), I & 16 && T(A, d, m, p, v, b, C, P));
  }, je = (c, f, d, m, p, v, b, C, P) => {
    c = c || tt, f = f || tt;
    const g = c.length, S = f.length, A = Math.min(g, S);
    let O;
    for (O = 0; O < A; O++) {
      const I = f[O] = P ? Me(f[O]) : Ae(f[O]);
      y(c[O], I, d, null, p, v, b, C, P);
    }
    g > S ? De(c, p, v, !0, !1, A) : T(f, d, m, p, v, b, C, P, A);
  }, At = (c, f, d, m, p, v, b, C, P) => {
    let g = 0;
    const S = f.length;
    let A = c.length - 1, O = S - 1;
    for (; g <= A && g <= O; ) {
      const I = c[g], x = f[g] = P ? Me(f[g]) : Ae(f[g]);
      if ($e(I, x))
        y(I, x, d, null, p, v, b, C, P);
      else
        break;
      g++;
    }
    for (; g <= A && g <= O; ) {
      const I = c[A], x = f[O] = P ? Me(f[O]) : Ae(f[O]);
      if ($e(I, x))
        y(I, x, d, null, p, v, b, C, P);
      else
        break;
      A--, O--;
    }
    if (g > A) {
      if (g <= O) {
        const I = O + 1, x = I < S ? f[I].el : m;
        for (; g <= O; )
          y(null, f[g] = P ? Me(f[g]) : Ae(f[g]), d, x, p, v, b, C, P), g++;
      }
    } else if (g > O)
      for (; g <= A; )
        Pe(c[g], p, v, !0), g++;
    else {
      const I = g, x = g, j = /* @__PURE__ */ new Map();
      for (g = x; g <= O; g++) {
        const le = f[g] = P ? Me(f[g]) : Ae(f[g]);
        le.key != null && j.set(le.key, g);
      }
      let F, J = 0;
      const ue = O - x + 1;
      let et = !1, qn = 0;
      const ft = new Array(ue);
      for (g = 0; g < ue; g++)
        ft[g] = 0;
      for (g = I; g <= A; g++) {
        const le = c[g];
        if (J >= ue) {
          Pe(le, p, v, !0);
          continue;
        }
        let Ee;
        if (le.key != null)
          Ee = j.get(le.key);
        else
          for (F = x; F <= O; F++)
            if (ft[F - x] === 0 && $e(le, f[F])) {
              Ee = F;
              break;
            }
        Ee === void 0 ? Pe(le, p, v, !0) : (ft[Ee - x] = g + 1, Ee >= qn ? qn = Ee : et = !0, y(le, f[Ee], d, null, p, v, b, C, P), J++);
      }
      const Zn = et ? Pr(ft) : tt;
      for (F = Zn.length - 1, g = ue - 1; g >= 0; g--) {
        const le = x + g, Ee = f[le], Qn = le + 1 < S ? f[le + 1].el : m;
        ft[g] === 0 ? y(null, Ee, d, Qn, p, v, b, C, P) : et && (F < 0 || g !== Zn[F] ? We(
          Ee,
          d,
          Qn,
          2
          /* MoveType.REORDER */
        ) : F--);
      }
    }
  }, We = (c, f, d, m, p = null) => {
    const { el: v, type: b, transition: C, children: P, shapeFlag: g } = c;
    if (g & 6) {
      We(c.component.subTree, f, d, m);
      return;
    }
    if (g & 128) {
      c.suspense.move(f, d, m);
      return;
    }
    if (g & 64) {
      b.move(c, f, d, Qe);
      return;
    }
    if (b === me) {
      s(v, f, d);
      for (let A = 0; A < P.length; A++)
        We(P[A], f, d, m);
      s(c.anchor, f, d);
      return;
    }
    if (b === Mt) {
      U(c, f, d);
      return;
    }
    if (m !== 2 && g & 1 && C)
      if (m === 0)
        C.beforeEnter(v), s(v, f, d), oe(() => C.enter(v), p);
      else {
        const { leave: A, delayLeave: O, afterLeave: I } = C, x = () => s(v, f, d), j = () => {
          A(v, () => {
            x(), I && I();
          });
        };
        O ? O(v, x, j) : j();
      }
    else
      s(v, f, d);
  }, Pe = (c, f, d, m = !1, p = !1) => {
    const { type: v, props: b, ref: C, children: P, dynamicChildren: g, shapeFlag: S, patchFlag: A, dirs: O } = c;
    if (C != null && yn(C, null, d, c, !0), S & 256) {
      f.ctx.deactivate(c);
      return;
    }
    const I = S & 1 && O, x = !kt(c);
    let j;
    if (x && (j = b && b.onVnodeBeforeUnmount) && be(j, f, c), S & 6)
      To(c.component, d, m);
    else {
      if (S & 128) {
        c.suspense.unmount(d, m);
        return;
      }
      I && He(c, null, f, "beforeUnmount"), S & 64 ? c.type.remove(c, f, d, p, Qe, m) : g && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (v !== me || A > 0 && A & 64) ? De(g, f, d, !1, !0) : (v === me && A & 384 || !p && S & 16) && De(P, f, d), m && Yn(c);
    }
    (x && (j = b && b.onVnodeUnmounted) || I) && oe(() => {
      j && be(j, f, c), I && He(c, null, f, "unmounted");
    }, d);
  }, Yn = (c) => {
    const { type: f, el: d, anchor: m, transition: p } = c;
    if (f === me) {
      Lo(d, m);
      return;
    }
    if (f === Mt) {
      G(c);
      return;
    }
    const v = () => {
      o(d), p && !p.persisted && p.afterLeave && p.afterLeave();
    };
    if (c.shapeFlag & 1 && p && !p.persisted) {
      const { leave: b, delayLeave: C } = p, P = () => b(d, v);
      C ? C(c.el, v, P) : P();
    } else
      v();
  }, Lo = (c, f) => {
    let d;
    for (; c !== f; )
      d = E(c), o(c), c = d;
    o(f);
  }, To = (c, f, d) => {
    const { bum: m, scope: p, update: v, subTree: b, um: C } = c;
    m && Tt(m), p.stop(), v && (v.active = !1, Pe(b, c, f, d)), C && oe(C, f), oe(() => {
      c.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, De = (c, f, d, m = !1, p = !1, v = 0) => {
    for (let b = v; b < c.length; b++)
      Pe(c[b], f, d, m, p);
  }, St = (c) => c.shapeFlag & 6 ? St(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : E(c.anchor || c.el), zn = (c, f, d) => {
    c == null ? f._vnode && Pe(f._vnode, null, null, !0) : y(f._vnode || null, c, f, null, null, null, d), fs(), ro(), f._vnode = c;
  }, Qe = {
    p: y,
    um: Pe,
    m: We,
    r: Yn,
    mt: at,
    mc: T,
    pc: V,
    pbc: K,
    n: St,
    o: e
  };
  let sn, on;
  return t && ([sn, on] = t(Qe)), {
    render: zn,
    hydrate: sn,
    createApp: hr(zn, sn)
  };
}
function Be({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Do(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (R(s) && R(o))
    for (let i = 0; i < s.length; i++) {
      const r = s[i];
      let l = o[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[i] = Me(o[i]), l.el = r.el), n || Do(r, l)), l.type === en && (l.el = r.el);
    }
}
function Pr(e) {
  const t = e.slice(), n = [0];
  let s, o, i, r, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const u = e[s];
    if (u !== 0) {
      if (o = n[n.length - 1], e[o] < u) {
        t[s] = o, n.push(s);
        continue;
      }
      for (i = 0, r = n.length - 1; i < r; )
        l = i + r >> 1, e[n[l]] < u ? i = l + 1 : r = l;
      u < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, r = n[i - 1]; i-- > 0; )
    n[i] = r, r = t[r];
  return n;
}
const Er = (e) => e.__isTeleport, me = Symbol(void 0), en = Symbol(void 0), Ie = Symbol(void 0), Mt = Symbol(void 0), mt = [];
let he = null;
function un(e = !1) {
  mt.push(he = e ? null : []);
}
function br() {
  mt.pop(), he = mt[mt.length - 1] || null;
}
let Pt = 1;
function Ps(e) {
  Pt += e;
}
function Ar(e) {
  return e.dynamicChildren = Pt > 0 ? he || tt : null, br(), Pt > 0 && he && he.push(e), e;
}
function dn(e, t, n, s, o, i) {
  return Ar(pe(
    e,
    t,
    n,
    s,
    o,
    i,
    !0
    /* isBlock */
  ));
}
function Sr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function $e(e, t) {
  return e.type === t.type && e.key === t.key;
}
const tn = "__vInternal", yo = ({ key: e }) => e ?? null, Nt = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? z(e) || ee(e) || L(e) ? { i: ae, r: e, k: t, f: !!n } : e : null;
function pe(e, t = null, n = null, s = 0, o = null, i = e === me ? 0 : 1, r = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && yo(t),
    ref: t && Nt(t),
    scopeId: ao,
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
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: ae
  };
  return l ? ($n(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= z(n) ? 8 : 16), Pt > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  he && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && he.push(a), a;
}
const Ue = Or;
function Or(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === or) && (e = Ie), Sr(e)) {
    const l = Ve(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && $n(l, n), Pt > 0 && !i && he && (l.shapeFlag & 6 ? he[he.indexOf(e)] = l : he.push(l)), l.patchFlag |= -2, l;
  }
  if (wr(e) && (e = e.__vccOpts), t) {
    t = Dr(t);
    let { class: l, style: a } = t;
    l && !z(l) && (t.class = Gt(l)), H(a) && (qs(a) && !R(a) && (a = q({}, a)), t.style = Bt(a));
  }
  const r = z(e) ? 1 : Wi(e) ? 128 : Er(e) ? 64 : H(e) ? 4 : L(e) ? 2 : 0;
  return pe(e, t, n, s, o, r, i, !0);
}
function Dr(e) {
  return e ? qs(e) || tn in e ? q({}, e) : e : null;
}
function Ve(e, t, n = !1) {
  const { props: s, ref: o, patchFlag: i, children: r } = e, l = t ? Rr(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && yo(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? R(o) ? o.concat(Nt(t)) : [o, Nt(t)] : Nt(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: r,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== me ? i === -1 ? 16 : i | 16 : i,
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
function Wt(e = " ", t = 0) {
  return Ue(en, null, e, t);
}
function yr(e, t) {
  const n = Ue(Mt, null, e);
  return n.staticCount = t, n;
}
function Ae(e) {
  return e == null || typeof e == "boolean" ? Ue(Ie) : R(e) ? Ue(
    me,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Me(e) : Ue(en, null, String(e));
}
function Me(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ve(e);
}
function $n(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (R(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), $n(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(tn in t) ? t._ctx = ae : o === 3 && ae && (ae.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    L(t) ? (t = { default: t, _ctx: ae }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Wt(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Rr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = Gt([t.class, s.class]));
      else if (o === "style")
        t.style = Bt([t.style, s.style]);
      else if ($t(o)) {
        const i = t[o], r = s[o];
        r && i !== r && !(R(i) && i.includes(r)) && (t[o] = i ? [].concat(i, r) : r);
      } else
        o !== "" && (t[o] = s[o]);
  }
  return t;
}
function be(e, t, n, s = null) {
  fe(e, t, 7, [
    n,
    s
  ]);
}
const Ir = Oo();
let Ur = 0;
function Lr(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Ir, i = {
    uid: Ur++,
    vnode: e,
    type: s,
    parent: t,
    appContext: o,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Xo(
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
    propsOptions: Eo(s, o),
    emitsOptions: co(s, o),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: W,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: W,
    data: W,
    props: W,
    attrs: W,
    slots: W,
    refs: W,
    setupState: W,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Mi.bind(null, i), e.ce && e.ce(i), i;
}
let X = null;
const Tr = () => X || ae, rt = (e) => {
  X = e, e.scope.on();
}, qe = () => {
  X && X.scope.off(), X = null;
};
function Ro(e) {
  return e.vnode.shapeFlag & 4;
}
let Et = !1;
function xr(e, t = !1) {
  Et = t;
  const { props: n, children: s } = e.vnode, o = Ro(e);
  ur(e, n, o, t), mr(e, s);
  const i = o ? kr(e, t) : void 0;
  return Et = !1, i;
}
function kr(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Zs(new Proxy(e.ctx, ir));
  const { setup: s } = n;
  if (s) {
    const o = e.setupContext = s.length > 1 ? Nr(e) : null;
    rt(e), lt();
    const i = we(s, e, 0, [e.props, o]);
    if (ct(), qe(), Ns(i)) {
      if (i.then(qe, qe), t)
        return i.then((r) => {
          Es(e, r, t);
        }).catch((r) => {
          zt(
            r,
            e,
            0
            /* ErrorCodes.SETUP_FUNCTION */
          );
        });
      e.asyncDep = i;
    } else
      Es(e, i, t);
  } else
    Io(e, t);
}
function Es(e, t, n) {
  L(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : H(t) && (e.setupState = to(t)), Io(e, n);
}
let bs;
function Io(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && bs && !s.render) {
      const o = s.template || Gn(e).template;
      if (o) {
        const { isCustomElement: i, compilerOptions: r } = e.appContext.config, { delimiters: l, compilerOptions: a } = s, u = q(q({
          isCustomElement: i,
          delimiters: l
        }, r), a);
        s.render = bs(o, u);
      }
    }
    e.render = s.render || Ce;
  }
  rt(e), lt(), rr(e), ct(), qe();
}
function Mr(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return ie(e, "get", "$attrs"), t[n];
    }
  });
}
function Nr(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = Mr(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function nn(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(to(Zs(e.exposed)), {
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
function wr(e) {
  return L(e) && "__vccOpts" in e;
}
const Fr = (e, t) => Ii(e, t, Et), Vr = Symbol(""), jr = () => xt(Vr), Wr = "3.2.47", Hr = "http://www.w3.org/2000/svg", Je = typeof document < "u" ? document : null, As = Je && /* @__PURE__ */ Je.createElement("template"), Br = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t ? Je.createElementNS(Hr, e) : Je.createElement(e, n ? { is: n } : void 0);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => Je.createTextNode(e),
  createComment: (e) => Je.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Je.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, o, i) {
    const r = n ? n.previousSibling : t.lastChild;
    if (o && (o === i || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === i || !(o = o.nextSibling)); )
        ;
    else {
      As.innerHTML = s ? `<svg>${e}</svg>` : e;
      const l = As.content;
      if (s) {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      r ? r.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function Gr(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function Kr(e, t, n) {
  const s = e.style, o = z(n);
  if (n && !o) {
    if (t && !z(t))
      for (const i in t)
        n[i] == null && Rn(s, i, "");
    for (const i in n)
      Rn(s, i, n[i]);
  } else {
    const i = s.display;
    o ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (s.display = i);
  }
}
const Ss = /\s*!important$/;
function Rn(e, t, n) {
  if (R(n))
    n.forEach((s) => Rn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = $r(e, t);
    Ss.test(n) ? e.setProperty(_e(s), n.replace(Ss, ""), "important") : e[s] = n;
  }
}
const Os = ["Webkit", "Moz", "ms"], pn = {};
function $r(e, t) {
  const n = pn[t];
  if (n)
    return n;
  let s = Re(t);
  if (s !== "filter" && s in e)
    return pn[t] = s;
  s = Vs(s);
  for (let o = 0; o < Os.length; o++) {
    const i = Os[o] + s;
    if (i in e)
      return pn[t] = i;
  }
  return t;
}
const Ds = "http://www.w3.org/1999/xlink";
function Jr(e, t, n, s, o) {
  if (s && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Ds, t.slice(6, t.length)) : e.setAttributeNS(Ds, t, n);
  else {
    const i = Fo(t);
    n == null || i && !xs(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : n);
  }
}
function Xr(e, t, n, s, o, i, r) {
  if (t === "innerHTML" || t === "textContent") {
    s && r(s, o, i), e[t] = n ?? "";
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && // custom elements may use _value internally
  !e.tagName.includes("-")) {
    e._value = n;
    const a = n ?? "";
    (e.value !== a || // #4956: always set for OPTION elements because its value falls back to
    // textContent if no value attribute is present. And setting .value for
    // OPTION has no side effect
    e.tagName === "OPTION") && (e.value = a), n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = xs(n) : n == null && a === "string" ? (n = "", l = !0) : a === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(t);
}
function Xe(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Yr(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
function zr(e, t, n, s, o = null) {
  const i = e._vei || (e._vei = {}), r = i[t];
  if (s && r)
    r.value = s;
  else {
    const [l, a] = qr(t);
    if (s) {
      const u = i[t] = el(s, o);
      Xe(e, l, u, a);
    } else
      r && (Yr(e, l, r, a), i[t] = void 0);
  }
}
const ys = /(?:Once|Passive|Capture)$/;
function qr(e) {
  let t;
  if (ys.test(e)) {
    t = {};
    let s;
    for (; s = e.match(ys); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : _e(e.slice(2)), t];
}
let mn = 0;
const Zr = /* @__PURE__ */ Promise.resolve(), Qr = () => mn || (Zr.then(() => mn = 0), mn = Date.now());
function el(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    fe(tl(s, n.value), t, 5, [s]);
  };
  return n.value = e, n.attached = Qr(), n;
}
function tl(e, t) {
  if (R(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((s) => (o) => !o._stopped && s && s(o));
  } else
    return t;
}
const Rs = /^on[a-z]/, nl = (e, t, n, s, o = !1, i, r, l, a) => {
  t === "class" ? Gr(e, s, o) : t === "style" ? Kr(e, n, s) : $t(t) ? Un(t) || zr(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : sl(e, t, s, o)) ? Xr(e, t, s, i, r, l, a) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Jr(e, t, s, o));
};
function sl(e, t, n, s) {
  return s ? !!(t === "innerHTML" || t === "textContent" || t in e && Rs.test(t) && L(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Rs.test(t) && z(n) ? !1 : t in e;
}
function ol(e, t) {
  const n = _o(e);
  class s extends Jn {
    constructor(i) {
      super(n, i, t);
    }
  }
  return s.def = n, s;
}
const il = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Jn extends il {
  constructor(t, n = {}, s) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && s ? s(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, oo(() => {
      this._connected || (Ts(null, this.shadowRoot), this._instance = null);
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
      const { props: i, styles: r } = s;
      let l;
      if (i && !R(i))
        for (const a in i) {
          const u = i[a];
          (u === Number || u && u.type === Number) && (a in this._props && (this._props[a] = ts(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Re(a)] = !0);
        }
      this._numberProps = l, o && this._resolveProps(s), this._applyStyles(r), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((s) => t(s, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t, s = R(n) ? n : Object.keys(n || {});
    for (const o of Object.keys(this))
      o[0] !== "_" && s.includes(o) && this._setProp(o, this[o], !0, !1);
    for (const o of s.map(Re))
      Object.defineProperty(this, o, {
        get() {
          return this._getProp(o);
        },
        set(i) {
          this._setProp(o, i);
        }
      });
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    const s = Re(t);
    this._numberProps && this._numberProps[s] && (n = ts(n)), this._setProp(s, n, !1);
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
    n !== this._props[t] && (this._props[t] = n, o && this._instance && this._update(), s && (n === !0 ? this.setAttribute(_e(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(_e(t), n + "") : n || this.removeAttribute(_e(t))));
  }
  _update() {
    Ts(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = Ue(this._def, q({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0;
      const s = (i, r) => {
        this.dispatchEvent(new CustomEvent(i, {
          detail: r
        }));
      };
      n.emit = (i, ...r) => {
        s(i, r), _e(i) !== i && s(_e(i), r);
      };
      let o = this;
      for (; o = o && (o.parentNode || o.host); )
        if (o instanceof Jn) {
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
const rl = {
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
Ji.props;
const Ht = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return R(t) ? (n) => Tt(t, n) : t;
};
function ll(e) {
  e.target.composing = !0;
}
function Is(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const cl = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e._assign = Ht(o);
    const i = s || o.props && o.props.type === "number";
    Xe(e, t ? "change" : "input", (r) => {
      if (r.target.composing)
        return;
      let l = e.value;
      n && (l = l.trim()), i && (l = _n(l)), e._assign(l);
    }), n && Xe(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Xe(e, "compositionstart", ll), Xe(e, "compositionend", Is), Xe(e, "change", Is));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: s, number: o } }, i) {
    if (e._assign = Ht(i), e.composing || document.activeElement === e && e.type !== "range" && (n || s && e.value.trim() === t || (o || e.type === "number") && _n(e.value) === t))
      return;
    const r = t ?? "";
    e.value !== r && (e.value = r);
  }
}, al = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e._assign = Ht(n), Xe(e, "change", () => {
      const s = e._modelValue, o = fl(e), i = e.checked, r = e._assign;
      if (R(s)) {
        const l = ks(s, o), a = l !== -1;
        if (i && !a)
          r(s.concat(o));
        else if (!i && a) {
          const u = [...s];
          u.splice(l, 1), r(u);
        }
      } else if (Jt(s)) {
        const l = new Set(s);
        i ? l.add(o) : l.delete(o), r(l);
      } else
        r(Uo(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Us,
  beforeUpdate(e, t, n) {
    e._assign = Ht(n), Us(e, t, n);
  }
};
function Us(e, { value: t, oldValue: n }, s) {
  e._modelValue = t, R(t) ? e.checked = ks(t, s.props.value) > -1 : Jt(t) ? e.checked = t.has(s.props.value) : t !== n && (e.checked = Kt(t, Uo(e, !0)));
}
function fl(e) {
  return "_value" in e ? e._value : e.value;
}
function Uo(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const ul = /* @__PURE__ */ q({ patchProp: nl }, Br);
let Ls;
function dl() {
  return Ls || (Ls = Cr(ul));
}
const Ts = (...e) => {
  dl().render(...e);
}, pl = { id: "container" }, ml = { key: 1 }, _l = { id: "controls" }, gl = /* @__PURE__ */ yr('<datalist id="tickmarks"><option value="0"></option><option value="10"></option><option value="20"></option><option value="30"></option><option value="40"></option><option value="50"></option><option value="60"></option><option value="70"></option><option value="80"></option><option value="90"></option><option value="100"></option></datalist>', 1), hl = /* @__PURE__ */ pe("p", null, [
  /* @__PURE__ */ Wt(" ← ↑ → ↓ to move the overlay "),
  /* @__PURE__ */ pe("br"),
  /* @__PURE__ */ Wt(" escape to remove the overlay ")
], -1), Cl = /* @__PURE__ */ _o({
  __name: "FigmaOverlay.ce",
  setup(e) {
    const t = ut("Load figma component from clipboard"), n = ut(null), s = ut(!1), o = ut(50), i = ut(!1), r = (h) => {
      n.value && (n.value.innerHTML = h, s.value = !0, document.addEventListener("keydown", _));
    }, l = () => {
      n.value && (n.value.innerHTML = "", s.value = !1, document.removeEventListener("keydown", _));
    }, a = async () => {
      try {
        const h = await navigator.clipboard.readText();
        h.startsWith("<svg") ? r(h) : (t.value = "No SVG found in clipboard!", window.setTimeout(() => {
          t.value = "Load figma component from clipboard";
        }, 2e3));
      } catch (h) {
        console.error(h);
      }
    }, u = () => {
      var h;
      (h = n.value) == null || h.addEventListener("mousedown", (E) => {
        if (!n.value)
          return;
        const D = n.value, M = D.getBoundingClientRect(), y = E.clientX - M.left, B = E.clientY - M.top, w = (U) => {
          D.style.top = `${U.clientY - B}px`, D.style.left = `${U.clientX - y}px`;
        }, te = () => {
          document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", te);
        };
        document.addEventListener("mousemove", w), document.addEventListener("mouseup", te);
      });
    }, _ = (h) => {
      if (n.value)
        switch (h.key) {
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
            l();
            break;
        }
    };
    return Bn(() => u()), (h, E) => (un(), dn(me, null, [
      pe("div", pl, [
        s.value ? (un(), dn("div", ml, [
          pe("div", _l, [
            ps(pe("input", {
              "onUpdate:modelValue": E[0] || (E[0] = (D) => o.value = D),
              type: "range",
              list: "tickmarks",
              min: "0",
              max: "100",
              step: "10"
            }, null, 512), [
              [cl, o.value]
            ]),
            gl,
            pe("label", null, [
              ps(pe("input", {
                "onUpdate:modelValue": E[1] || (E[1] = (D) => i.value = D),
                type: "checkbox",
                name: "ignoreclicks",
                checked: ""
              }, null, 512), [
                [al, i.value]
              ]),
              Wt(" Ignore clicks ")
            ])
          ]),
          hl,
          pe("button", {
            class: "mt-2",
            type: "button",
            onClick: l
          }, "Remove overlay")
        ])) : (un(), dn("button", {
          key: 0,
          type: "button",
          onClick: a
        }, jo(t.value), 1))
      ]),
      pe("div", {
        id: "figmaOverlay",
        ref_key: "figmaOverlay",
        ref: n,
        class: Gt([i.value ? "pointer-events-none" : "pointer-events-auto"]),
        style: Bt({
          opacity: o.value / 100
        })
      }, null, 6)
    ], 64));
  }
}), vl = `div,button,input,p{margin:0;padding:0}#container{position:absolute;bottom:1rem;left:1rem}button{background-color:#27313b;color:#dee5ec;font-size:.75rem;line-height:1rem;padding:0 .5rem;border-radius:.25rem;height:28px}#controls{width:100%;margin-bottom:.5rem}input[type=range]{width:100%}p{font-size:.75rem;line-height:1rem}label{padding-left:4px}button,p,input,label{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}#figmaOverlay{position:absolute;z-index:9999;top:0px;left:0px}.mt-2{margin-top:.5rem}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}
`, Pl = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, El = /* @__PURE__ */ Pl(Cl, [["styles", [vl]]]), bl = ol(El);
customElements.define("figma-overlay", bl);

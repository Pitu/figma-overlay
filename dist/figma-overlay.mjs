function bn(e, t) {
  const n = /* @__PURE__ */ Object.create(null), s = e.split(",");
  for (let o = 0; o < s.length; o++)
    n[s[o]] = !0;
  return t ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
function Vt(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = Y(s) ? To(s) : Vt(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else {
    if (Y(e))
      return e;
    if ($(e))
      return e;
  }
}
const yo = /;(?![^(]*\))/g, Ro = /:([^]+)/, Io = /\/\*.*?\*\//gs;
function To(e) {
  const t = {};
  return e.replace(Io, "").split(yo).forEach((n) => {
    if (n) {
      const s = n.split(Ro);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Sn(e) {
  let t = "";
  if (Y(e))
    t = e;
  else if (I(e))
    for (let n = 0; n < e.length; n++) {
      const s = Sn(e[n]);
      s && (t += s + " ");
    }
  else if ($(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const xo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Mo = /* @__PURE__ */ bn(xo);
function Rs(e) {
  return !!e || e === "";
}
const Lo = (e) => Y(e) ? e : e == null ? "" : I(e) || $(e) && (e.toString === Ms || !x(e.toString)) ? JSON.stringify(e, Is, 2) : String(e), Is = (e, t) => t && t.__v_isRef ? Is(e, t.value) : nt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, o]) => (n[`${s} =>`] = o, n), {})
} : Ts(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : $(t) && !I(t) && !Ls(t) ? String(t) : t, H = {}, tt = [], he = () => {
}, No = () => !1, Uo = /^on[^a-z]/, Wt = (e) => Uo.test(e), On = (e) => e.startsWith("onUpdate:"), q = Object.assign, yn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, wo = Object.prototype.hasOwnProperty, N = (e, t) => wo.call(e, t), I = Array.isArray, nt = (e) => Ht(e) === "[object Map]", Ts = (e) => Ht(e) === "[object Set]", x = (e) => typeof e == "function", Y = (e) => typeof e == "string", Rn = (e) => typeof e == "symbol", $ = (e) => e !== null && typeof e == "object", xs = (e) => $(e) && x(e.then) && x(e.catch), Ms = Object.prototype.toString, Ht = (e) => Ms.call(e), Fo = (e) => Ht(e).slice(8, -1), Ls = (e) => Ht(e) === "[object Object]", In = (e) => Y(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, It = /* @__PURE__ */ bn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), jt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ko = /-(\w)/g, Re = jt((e) => e.replace(ko, (t, n) => n ? n.toUpperCase() : "")), Vo = /\B([A-Z])/g, me = jt((e) => e.replace(Vo, "-$1").toLowerCase()), Ns = jt((e) => e.charAt(0).toUpperCase() + e.slice(1)), Qt = jt((e) => e ? `on${Ns(e)}` : ""), mt = (e, t) => !Object.is(e, t), Tt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Ut = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, cn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, qn = (e) => {
  const t = Y(e) ? Number(e) : NaN;
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
}, Us = (e) => (e.w & ke) > 0, ws = (e) => (e.n & ke) > 0, Ko = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= ke;
}, Xo = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let s = 0; s < t.length; s++) {
      const o = t[s];
      Us(o) && !ws(o) ? o.delete(e) : t[n++] = o, o.w &= ~ke, o.n &= ~ke;
    }
    t.length = n;
  }
}, fn = /* @__PURE__ */ new WeakMap();
let ut = 0, ke = 1;
const un = 30;
let ge;
const ze = Symbol(""), pn = Symbol("");
class xn {
  constructor(t, n = null, s) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, jo(this, s);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = ge, n = we;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = ge, ge = this, we = !0, ke = 1 << ++ut, ut <= un ? Ko(this) : Qn(this), this.fn();
    } finally {
      ut <= un && Xo(this), ke = 1 << --ut, ge = this.parent, we = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    ge === this ? this.deferStop = !0 : this.active && (Qn(this), this.onStop && this.onStop(), this.active = !1);
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
let we = !0;
const Fs = [];
function lt() {
  Fs.push(we), we = !1;
}
function at() {
  const e = Fs.pop();
  we = e === void 0 ? !0 : e;
}
function re(e, t, n) {
  if (we && ge) {
    let s = fn.get(e);
    s || fn.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || s.set(n, o = Tn()), ks(o);
  }
}
function ks(e, t) {
  let n = !1;
  ut <= un ? ws(e) || (e.n |= ke, n = !Us(e)) : n = !e.has(ge), n && (e.add(ge), ge.deps.push(e));
}
function xe(e, t, n, s, o, r) {
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
  (e !== ge || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const $o = /* @__PURE__ */ bn("__proto__,__v_isRef,__isVue"), Vs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Rn)
), Go = /* @__PURE__ */ Mn(), Jo = /* @__PURE__ */ Mn(!1, !0), zo = /* @__PURE__ */ Mn(!0), ts = /* @__PURE__ */ Yo();
function Yo() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = U(this);
      for (let r = 0, i = this.length; r < i; r++)
        re(s, "get", r + "");
      const o = s[t](...n);
      return o === -1 || o === !1 ? s[t](...n.map(U)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      lt();
      const s = U(this)[t].apply(this, n);
      return at(), s;
    };
  }), e;
}
function qo(e) {
  const t = U(this);
  return re(t, "has", e), t.hasOwnProperty(e);
}
function Mn(e = !1, t = !1) {
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
      if (i && N(ts, o))
        return Reflect.get(ts, o, r);
      if (o === "hasOwnProperty")
        return qo;
    }
    const a = Reflect.get(s, o, r);
    return (Rn(o) ? Vs.has(o) : $o(o)) || (e || re(s, "get", o), t) ? a : ee(a) ? i && In(o) ? a : a.value : $(a) ? e ? Xs(a) : Un(a) : a;
  };
}
const Zo = /* @__PURE__ */ Ws(), Qo = /* @__PURE__ */ Ws(!0);
function Ws(e = !1) {
  return function(n, s, o, r) {
    let i = n[s];
    if (rt(i) && ee(i) && !ee(o))
      return !1;
    if (!e && (!wt(o) && !rt(o) && (i = U(i), o = U(o)), !I(n) && ee(i) && !ee(o)))
      return i.value = o, !0;
    const a = I(n) && In(s) ? Number(s) < n.length : N(n, s), f = Reflect.set(n, s, o, r);
    return n === U(r) && (a ? mt(o, i) && xe(n, "set", s, o) : xe(n, "add", s, o)), f;
  };
}
function er(e, t) {
  const n = N(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && xe(e, "delete", t, void 0), s;
}
function tr(e, t) {
  const n = Reflect.has(e, t);
  return (!Rn(t) || !Vs.has(t)) && re(e, "has", t), n;
}
function nr(e) {
  return re(e, "iterate", I(e) ? "length" : ze), Reflect.ownKeys(e);
}
const Hs = {
  get: Go,
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
}, or = /* @__PURE__ */ q({}, Hs, {
  get: Jo,
  set: Qo
}), Ln = (e) => e, Bt = (e) => Reflect.getPrototypeOf(e);
function At(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const o = U(e), r = U(t);
  n || (t !== r && re(o, "get", t), re(o, "get", r));
  const { has: i } = Bt(o), a = s ? Ln : n ? Fn : gt;
  if (i.call(o, t))
    return a(e.get(t));
  if (i.call(o, r))
    return a(e.get(r));
  e !== o && e.get(t);
}
function Dt(e, t = !1) {
  const n = this.__v_raw, s = U(n), o = U(e);
  return t || (e !== o && re(s, "has", e), re(s, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o);
}
function bt(e, t = !1) {
  return e = e.__v_raw, !t && re(U(e), "iterate", ze), Reflect.get(e, "size", e);
}
function ns(e) {
  e = U(e);
  const t = U(this);
  return Bt(t).has.call(t, e) || (t.add(e), xe(t, "add", e, e)), this;
}
function ss(e, t) {
  t = U(t);
  const n = U(this), { has: s, get: o } = Bt(n);
  let r = s.call(n, e);
  r || (e = U(e), r = s.call(n, e));
  const i = o.call(n, e);
  return n.set(e, t), r ? mt(t, i) && xe(n, "set", e, t) : xe(n, "add", e, t), this;
}
function os(e) {
  const t = U(this), { has: n, get: s } = Bt(t);
  let o = n.call(t, e);
  o || (e = U(e), o = n.call(t, e)), s && s.call(t, e);
  const r = t.delete(e);
  return o && xe(t, "delete", e, void 0), r;
}
function rs() {
  const e = U(this), t = e.size !== 0, n = e.clear();
  return t && xe(e, "clear", void 0, void 0), n;
}
function St(e, t) {
  return function(s, o) {
    const r = this, i = r.__v_raw, a = U(i), f = t ? Ln : e ? Fn : gt;
    return !e && re(a, "iterate", ze), i.forEach((p, d) => s.call(o, f(p), f(d), r));
  };
}
function Ot(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = U(o), i = nt(r), a = e === "entries" || e === Symbol.iterator && i, f = e === "keys" && i, p = o[e](...s), d = n ? Ln : t ? Fn : gt;
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
function Ne(e) {
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
      return bt(this);
    },
    has: Dt,
    add: ns,
    set: ss,
    delete: os,
    clear: rs,
    forEach: St(!1, !1)
  }, t = {
    get(r) {
      return At(this, r, !1, !0);
    },
    get size() {
      return bt(this);
    },
    has: Dt,
    add: ns,
    set: ss,
    delete: os,
    clear: rs,
    forEach: St(!1, !0)
  }, n = {
    get(r) {
      return At(this, r, !0);
    },
    get size() {
      return bt(this, !0);
    },
    has(r) {
      return Dt.call(this, r, !0);
    },
    add: Ne(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: Ne(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: Ne(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: Ne(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: St(!0, !1)
  }, s = {
    get(r) {
      return At(this, r, !0, !0);
    },
    get size() {
      return bt(this, !0);
    },
    has(r) {
      return Dt.call(this, r, !0);
    },
    add: Ne(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: Ne(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: Ne(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: Ne(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: St(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    e[r] = Ot(r, !1, !1), n[r] = Ot(r, !0, !1), t[r] = Ot(r, !1, !0), s[r] = Ot(r, !0, !0);
  }), [
    e,
    n,
    t,
    s
  ];
}
const [ir, lr, ar, cr] = /* @__PURE__ */ rr();
function Nn(e, t) {
  const n = t ? e ? cr : ar : e ? lr : ir;
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(N(n, o) && o in s ? n : s, o, r);
}
const fr = {
  get: /* @__PURE__ */ Nn(!1, !1)
}, ur = {
  get: /* @__PURE__ */ Nn(!1, !0)
}, pr = {
  get: /* @__PURE__ */ Nn(!0, !1)
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
function gr(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : mr(Fo(e));
}
function Un(e) {
  return rt(e) ? e : wn(e, !1, Hs, fr, js);
}
function _r(e) {
  return wn(e, !1, or, ur, Bs);
}
function Xs(e) {
  return wn(e, !0, sr, pr, Ks);
}
function wn(e, t, n, s, o) {
  if (!$(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = o.get(e);
  if (r)
    return r;
  const i = gr(e);
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
function wt(e) {
  return !!(e && e.__v_isShallow);
}
function $s(e) {
  return st(e) || rt(e);
}
function U(e) {
  const t = e && e.__v_raw;
  return t ? U(t) : e;
}
function Gs(e) {
  return Ut(e, "__v_skip", !0), e;
}
const gt = (e) => $(e) ? Un(e) : e, Fn = (e) => $(e) ? Xs(e) : e;
function Js(e) {
  we && ge && (e = U(e), ks(e.dep || (e.dep = Tn())));
}
function zs(e, t) {
  e = U(e);
  const n = e.dep;
  n && dn(n);
}
function ee(e) {
  return !!(e && e.__v_isRef === !0);
}
function yt(e) {
  return hr(e, !1);
}
function hr(e, t) {
  return ee(e) ? e : new Cr(e, t);
}
class Cr {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : U(t), this._value = n ? t : gt(t);
  }
  get value() {
    return Js(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || wt(t) || rt(t);
    t = n ? t : U(t), mt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : gt(t), zs(this));
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
function Ys(e) {
  return st(e) ? e : new Proxy(e, vr);
}
var qs;
class Er {
  constructor(t, n, s, o) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[qs] = !1, this._dirty = !0, this.effect = new xn(t, () => {
      this._dirty || (this._dirty = !0, zs(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = s;
  }
  get value() {
    const t = U(this);
    return Js(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
qs = "__v_isReadonly";
function Ar(e, t, n = !1) {
  let s, o;
  const r = x(e);
  return r ? (s = e, o = he) : (s = e.get, o = e.set), new Er(s, o, r || !o, n);
}
function Fe(e, t, n, s) {
  let o;
  try {
    o = s ? e(...s) : e();
  } catch (r) {
    Kt(r, t, n);
  }
  return o;
}
function fe(e, t, n, s) {
  if (x(e)) {
    const r = Fe(e, t, n, s);
    return r && xs(r) && r.catch((i) => {
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
      Fe(f, null, 10, [e, i, a]);
      return;
    }
  }
  Dr(e, n, o, s);
}
function Dr(e, t, n, s = !0) {
  console.error(e);
}
let _t = !1, mn = !1;
const Q = [];
let De = 0;
const ot = [];
let Oe = null, Xe = 0;
const Zs = /* @__PURE__ */ Promise.resolve();
let kn = null;
function Qs(e) {
  const t = kn || Zs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function br(e) {
  let t = De + 1, n = Q.length;
  for (; t < n; ) {
    const s = t + n >>> 1;
    ht(Q[s]) < e ? t = s + 1 : n = s;
  }
  return t;
}
function Vn(e) {
  (!Q.length || !Q.includes(e, _t && e.allowRecurse ? De + 1 : De)) && (e.id == null ? Q.push(e) : Q.splice(br(e.id), 0, e), eo());
}
function eo() {
  !_t && !mn && (mn = !0, kn = Zs.then(no));
}
function Sr(e) {
  const t = Q.indexOf(e);
  t > De && Q.splice(t, 1);
}
function Or(e) {
  I(e) ? ot.push(...e) : (!Oe || !Oe.includes(e, e.allowRecurse ? Xe + 1 : Xe)) && ot.push(e), eo();
}
function is(e, t = _t ? De + 1 : 0) {
  for (; t < Q.length; t++) {
    const n = Q[t];
    n && n.pre && (Q.splice(t, 1), t--, n());
  }
}
function to(e) {
  if (ot.length) {
    const t = [...new Set(ot)];
    if (ot.length = 0, Oe) {
      Oe.push(...t);
      return;
    }
    for (Oe = t, Oe.sort((n, s) => ht(n) - ht(s)), Xe = 0; Xe < Oe.length; Xe++)
      Oe[Xe]();
    Oe = null, Xe = 0;
  }
}
const ht = (e) => e.id == null ? 1 / 0 : e.id, yr = (e, t) => {
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
  mn = !1, _t = !0, Q.sort(yr);
  const t = he;
  try {
    for (De = 0; De < Q.length; De++) {
      const n = Q[De];
      n && n.active !== !1 && Fe(
        n,
        null,
        14
        /* ErrorCodes.SCHEDULER */
      );
    }
  } finally {
    De = 0, Q.length = 0, to(), _t = !1, kn = null, (Q.length || ot.length) && no();
  }
}
function Rr(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || H;
  let o = n;
  const r = t.startsWith("update:"), i = r && t.slice(7);
  if (i && i in s) {
    const d = `${i === "modelValue" ? "model" : i}Modifiers`, { number: P, trim: E } = s[d] || H;
    E && (o = n.map((y) => Y(y) ? y.trim() : y)), P && (o = n.map(cn));
  }
  let a, f = s[a = Qt(t)] || // also try camelCase event handler (#2249)
  s[a = Qt(Re(t))];
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
  if (!x(e)) {
    const f = (p) => {
      const d = so(p, t, !0);
      d && (a = !0, q(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !r && !a ? ($(e) && s.set(e, null), null) : (I(r) ? r.forEach((f) => i[f] = null) : q(i, r), $(e) && s.set(e, i), i);
}
function Xt(e, t) {
  return !e || !Wt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), N(e, t[0].toLowerCase() + t.slice(1)) || N(e, me(t)) || N(e, t));
}
let ce = null, oo = null;
function Ft(e) {
  const t = ce;
  return ce = e, oo = e && e.type.__scopeId || null, t;
}
function Ir(e, t = ce, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && gs(-1);
    const r = Ft(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Ft(r), s._d && gs(1);
    }
    return i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function en(e) {
  const { type: t, vnode: n, proxy: s, withProxy: o, props: r, propsOptions: [i], slots: a, attrs: f, emit: p, render: d, renderCache: P, data: E, setupState: y, ctx: w, inheritAttrs: O } = e;
  let j, F;
  const te = Ft(e);
  try {
    if (n.shapeFlag & 4) {
      const B = o || s;
      j = Ae(d.call(B, B, P, r, y, E, w)), F = f;
    } else {
      const B = t;
      j = Ae(B.length > 1 ? B(r, { attrs: f, slots: a, emit: p }) : B(
        r,
        null
        /* we know it doesn't need it */
      )), F = t.props ? f : Tr(f);
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
  if (F && O !== !1) {
    const B = Object.keys(F), { shapeFlag: Z } = T;
    B.length && Z & 7 && (i && B.some(On) && (F = xr(F, i)), T = Ve(T, F));
  }
  return n.dirs && (T = Ve(T), T.dirs = T.dirs ? T.dirs.concat(n.dirs) : n.dirs), n.transition && (T.transition = n.transition), j = T, Ft(te), j;
}
const Tr = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Wt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, xr = (e, t) => {
  const n = {};
  for (const s in e)
    (!On(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Mr(e, t, n) {
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
const Nr = (e) => e.__isSuspense;
function Ur(e, t) {
  t && t.pendingBranch ? I(e) ? t.effects.push(...e) : t.effects.push(e) : Or(e);
}
function wr(e, t) {
  if (J) {
    let n = J.provides;
    const s = J.parent && J.parent.provides;
    s === n && (n = J.provides = Object.create(s)), n[e] = t;
  }
}
function xt(e, t, n = !1) {
  const s = J || ce;
  if (s) {
    const o = s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && x(t) ? t.call(s.proxy) : t;
  }
}
const Rt = {};
function tn(e, t, n) {
  return ro(e, t, n);
}
function ro(e, t, { immediate: n, deep: s, flush: o, onTrack: r, onTrigger: i } = H) {
  const a = Bo() === (J == null ? void 0 : J.scope) ? J : null;
  let f, p = !1, d = !1;
  if (ee(e) ? (f = () => e.value, p = wt(e)) : st(e) ? (f = () => e, s = !0) : I(e) ? (d = !0, p = e.some((T) => st(T) || wt(T)), f = () => e.map((T) => {
    if (ee(T))
      return T.value;
    if (st(T))
      return Je(T);
    if (x(T))
      return Fe(
        T,
        a,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
  })) : x(e) ? t ? f = () => Fe(
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
    P = F.onStop = () => {
      Fe(
        T,
        a,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, y;
  if (Pt)
    if (E = he, t ? n && fe(t, a, 3, [
      f(),
      d ? [] : void 0,
      E
    ]) : f(), o === "sync") {
      const T = Ni();
      y = T.__watcherHandles || (T.__watcherHandles = []);
    } else
      return he;
  let w = d ? new Array(e.length).fill(Rt) : Rt;
  const O = () => {
    if (F.active)
      if (t) {
        const T = F.run();
        (s || p || (d ? T.some((B, Z) => mt(B, w[Z])) : mt(T, w))) && (P && P(), fe(t, a, 3, [
          T,
          // pass undefined as the old value when it's changed for the first time
          w === Rt ? void 0 : d && w[0] === Rt ? [] : w,
          E
        ]), w = T);
      } else
        F.run();
  };
  O.allowRecurse = !!t;
  let j;
  o === "sync" ? j = O : o === "post" ? j = () => oe(O, a && a.suspense) : (O.pre = !0, a && (O.id = a.uid), j = () => Vn(O));
  const F = new xn(f, j);
  t ? n ? O() : w = F.run() : o === "post" ? oe(F.run.bind(F), a && a.suspense) : F.run();
  const te = () => {
    F.stop(), a && a.scope && yn(a.scope.effects, F);
  };
  return y && y.push(te), te;
}
function Fr(e, t, n) {
  const s = this.proxy, o = Y(e) ? e.includes(".") ? io(s, e) : () => s[e] : e.bind(s, s);
  let r;
  x(t) ? r = t : (r = t.handler, n = t);
  const i = J;
  it(this);
  const a = ro(o, r.bind(s), n);
  return i ? it(i) : Ye(), a;
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
  if (!$(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
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
    const n = Oi(), s = kr();
    let o;
    return () => {
      const r = t.default && ao(t.default(), !0);
      if (!r || !r.length)
        return;
      let i = r[0];
      if (r.length > 1) {
        for (const O of r)
          if (O.type !== Ie) {
            i = O;
            break;
          }
      }
      const a = U(e), { mode: f } = a;
      if (s.isLeaving)
        return nn(i);
      const p = as(i);
      if (!p)
        return nn(i);
      const d = gn(p, a, s, n);
      _n(p, d);
      const P = n.subTree, E = P && as(P);
      let y = !1;
      const { getTransitionKey: w } = p.type;
      if (w) {
        const O = w();
        o === void 0 ? o = O : O !== o && (o = O, y = !0);
      }
      if (E && E.type !== Ie && (!$e(p, E) || y)) {
        const O = gn(E, a, s, n);
        if (_n(E, O), f === "out-in")
          return s.isLeaving = !0, O.afterLeave = () => {
            s.isLeaving = !1, n.update.active !== !1 && n.update();
          }, nn(i);
        f === "in-out" && p.type !== Ie && (O.delayLeave = (j, F, te) => {
          const T = lo(s, E);
          T[String(E.key)] = E, j._leaveCb = () => {
            F(), j._leaveCb = void 0, delete d.delayedLeave;
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
function gn(e, t, n, s) {
  const { appear: o, mode: r, persisted: i = !1, onBeforeEnter: a, onEnter: f, onAfterEnter: p, onEnterCancelled: d, onBeforeLeave: P, onLeave: E, onAfterLeave: y, onLeaveCancelled: w, onBeforeAppear: O, onAppear: j, onAfterAppear: F, onAppearCancelled: te } = t, T = String(e.key), B = lo(n, e), Z = (M, z) => {
    M && fe(M, s, 9, z);
  }, qe = (M, z) => {
    const K = z[1];
    Z(M, z), I(M) ? M.every((ie) => ie.length <= 1) && K() : M.length <= 1 && K();
  }, Le = {
    mode: r,
    persisted: i,
    beforeEnter(M) {
      let z = a;
      if (!n.isMounted)
        if (o)
          z = O || a;
        else
          return;
      M._leaveCb && M._leaveCb(
        !0
        /* cancelled */
      );
      const K = B[T];
      K && $e(e, K) && K.el._leaveCb && K.el._leaveCb(), Z(z, [M]);
    },
    enter(M) {
      let z = f, K = p, ie = d;
      if (!n.isMounted)
        if (o)
          z = j || f, K = F || p, ie = te || d;
        else
          return;
      let Ce = !1;
      const be = M._enterCb = (ct) => {
        Ce || (Ce = !0, ct ? Z(ie, [M]) : Z(K, [M]), Le.delayedLeave && Le.delayedLeave(), M._enterCb = void 0);
      };
      z ? qe(z, [M, be]) : be();
    },
    leave(M, z) {
      const K = String(e.key);
      if (M._enterCb && M._enterCb(
        !0
        /* cancelled */
      ), n.isUnmounting)
        return z();
      Z(P, [M]);
      let ie = !1;
      const Ce = M._leaveCb = (be) => {
        ie || (ie = !0, z(), be ? Z(w, [M]) : Z(y, [M]), M._leaveCb = void 0, B[K] === e && delete B[K]);
      };
      B[K] = e, E ? qe(E, [M, Ce]) : Ce();
    },
    clone(M) {
      return gn(M, t, n, s);
    }
  };
  return Le;
}
function nn(e) {
  if ($t(e))
    return e = Ve(e), e.children = null, e;
}
function as(e) {
  return $t(e) ? e.children ? e.children[0] : void 0 : e;
}
function _n(e, t) {
  e.shapeFlag & 6 && e.component ? _n(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
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
  return x(e) ? { setup: e, name: e.name } : e;
}
const Mt = (e) => !!e.type.__asyncLoader, $t = (e) => e.type.__isKeepAlive;
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
  if (Gt(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      $t(o.parent.vnode) && Br(s, t, n, o), o = o.parent;
  }
}
function Br(e, t, n, s) {
  const o = Gt(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  po(() => {
    yn(s[t], o);
  }, n);
}
function Gt(e, t, n = J, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      lt(), it(n);
      const a = fe(t, n, e, i);
      return Ye(), at(), a;
    });
    return s ? o.unshift(r) : o.push(r), r;
  }
}
const Me = (e) => (t, n = J) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Pt || e === "sp") && Gt(e, (...s) => t(...s), n)
), Kr = Me(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), Wn = Me(
  "m"
  /* LifecycleHooks.MOUNTED */
), Xr = Me(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), $r = Me(
  "u"
  /* LifecycleHooks.UPDATED */
), uo = Me(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), po = Me(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), Gr = Me(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), Jr = Me(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), zr = Me(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function Yr(e, t = J) {
  Gt("ec", e, t);
}
function qr(e, t) {
  const n = ce;
  if (n === null)
    return e;
  const s = Yt(n) || n.proxy, o = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, a, f, p = H] = t[r];
    i && (x(i) && (i = {
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
const Zr = Symbol(), hn = (e) => e ? Do(e) ? Yt(e) || e.proxy : hn(e.parent) : null, pt = (
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
    $parent: (e) => hn(e.parent),
    $root: (e) => hn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Hn(e),
    $forceUpdate: (e) => e.f || (e.f = () => Vn(e.update)),
    $nextTick: (e) => e.n || (e.n = Qs.bind(e.proxy)),
    $watch: (e) => Fr.bind(e)
  })
), sn = (e, t) => e !== H && !e.__isScriptSetup && N(e, t), Qr = {
  get({ _: e }, t) {
    const { ctx: n, setupState: s, data: o, props: r, accessCache: i, type: a, appContext: f } = e;
    let p;
    if (t[0] !== "$") {
      const y = i[t];
      if (y !== void 0)
        switch (y) {
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
        if (o !== H && N(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (p = e.propsOptions[0]) && N(p, t)
        )
          return i[t] = 3, r[t];
        if (n !== H && N(n, t))
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
    if (n !== H && N(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      E = f.config.globalProperties, N(E, t)
    )
      return E[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return sn(o, t) ? (o[t] = n, !0) : s !== H && N(s, t) ? (s[t] = n, !0) : N(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: r } }, i) {
    let a;
    return !!n[i] || e !== H && N(e, i) || sn(t, i) || (a = r[0]) && N(a, i) || N(s, i) || N(pt, i) || N(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : N(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
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
    beforeUpdate: y,
    updated: w,
    activated: O,
    deactivated: j,
    beforeDestroy: F,
    beforeUnmount: te,
    destroyed: T,
    unmounted: B,
    render: Z,
    renderTracked: qe,
    renderTriggered: Le,
    errorCaptured: M,
    serverPrefetch: z,
    // public API
    expose: K,
    inheritAttrs: ie,
    // assets
    components: Ce,
    directives: be,
    filters: ct
  } = t;
  if (p && ti(p, s, null, e.appContext.config.unwrapInjectedRef), i)
    for (const X in i) {
      const V = i[X];
      x(V) && (s[X] = V.bind(n));
    }
  if (o) {
    const X = o.call(n, n);
    $(X) && (e.data = Un(X));
  }
  if (Cn = !0, r)
    for (const X in r) {
      const V = r[X], We = x(V) ? V.bind(n, n) : x(V.get) ? V.get.bind(n, n) : he, vt = !x(V) && x(V.set) ? V.set.bind(n) : he, He = Mi({
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
    const X = x(f) ? f.call(n) : f;
    Reflect.ownKeys(X).forEach((V) => {
      wr(V, X[V]);
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
  if (ne(Kr, P), ne(Wn, E), ne(Xr, y), ne($r, w), ne(Hr, O), ne(jr, j), ne(Yr, M), ne(zr, qe), ne(Jr, Le), ne(uo, te), ne(po, B), ne(Gr, z), I(K))
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
  Z && e.render === he && (e.render = Z), ie != null && (e.inheritAttrs = ie), Ce && (e.components = Ce), be && (e.directives = be);
}
function ti(e, t, n = he, s = !1) {
  I(e) && (e = Pn(e));
  for (const o in e) {
    const r = e[o];
    let i;
    $(r) ? "default" in r ? i = xt(
      r.from || o,
      r.default,
      !0
      /* treat default function as factory */
    ) : i = xt(r.from || o) : i = xt(r), ee(i) && s ? Object.defineProperty(t, o, {
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
  if (Y(e)) {
    const r = t[e];
    x(r) && tn(o, r);
  } else if (x(e))
    tn(o, e.bind(n));
  else if ($(e))
    if (I(e))
      e.forEach((r) => mo(r, t, n, s));
    else {
      const r = x(e.handler) ? e.handler.bind(n) : t[e.handler];
      x(r) && tn(o, r, e);
    }
}
function Hn(e) {
  const t = e.type, { mixins: n, extends: s } = t, { mixins: o, optionsCache: r, config: { optionMergeStrategies: i } } = e.appContext, a = r.get(t);
  let f;
  return a ? f = a : !o.length && !n && !s ? f = t : (f = {}, o.length && o.forEach((p) => kt(f, p, i, !0)), kt(f, t, i)), $(t) && r.set(t, f), f;
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
    return q(x(e) ? e.call(this, this) : e, x(t) ? t.call(this, this) : t);
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
  return e ? q(q(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function oi(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = q(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = se(e[s], t[s]);
  return n;
}
function ri(e, t, n, s = !1) {
  const o = {}, r = {};
  Ut(r, zt, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), go(e, t, o, r);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  n ? e.props = s ? o : _r(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
}
function ii(e, t, n, s) {
  const { props: o, attrs: r, vnode: { patchFlag: i } } = e, a = U(o), [f] = e.propsOptions;
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
        const y = t[E];
        if (f)
          if (N(r, E))
            y !== r[E] && (r[E] = y, p = !0);
          else {
            const w = Re(E);
            o[w] = vn(
              f,
              a,
              w,
              y,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          y !== r[E] && (r[E] = y, p = !0);
      }
    }
  } else {
    go(e, t, o, r) && (p = !0);
    let d;
    for (const P in a)
      (!t || // for camelCase
      !N(t, P) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = me(P)) === P || !N(t, d))) && (f ? n && // for camelCase
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
        (!t || !N(t, P)) && (delete r[P], p = !0);
  }
  p && xe(e, "set", "$attrs");
}
function go(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let f in t) {
      if (It(f))
        continue;
      const p = t[f];
      let d;
      o && N(o, d = Re(f)) ? !r || !r.includes(d) ? n[d] = p : (a || (a = {}))[d] = p : Xt(e.emitsOptions, f) || (!(f in s) || p !== s[f]) && (s[f] = p, i = !0);
    }
  if (r) {
    const f = U(n), p = a || H;
    for (let d = 0; d < r.length; d++) {
      const P = r[d];
      n[P] = vn(o, f, P, p[P], e, !N(p, P));
    }
  }
  return i;
}
function vn(e, t, n, s, o, r) {
  const i = e[n];
  if (i != null) {
    const a = N(i, "default");
    if (a && s === void 0) {
      const f = i.default;
      if (i.type !== Function && x(f)) {
        const { propsDefaults: p } = o;
        n in p ? s = p[n] : (it(o), s = p[n] = f.call(null, t), Ye());
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
function _o(e, t, n = !1) {
  const s = t.propsCache, o = s.get(e);
  if (o)
    return o;
  const r = e.props, i = {}, a = [];
  let f = !1;
  if (!x(e)) {
    const d = (P) => {
      f = !0;
      const [E, y] = _o(P, t, !0);
      q(i, E), y && a.push(...y);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!r && !f)
    return $(e) && s.set(e, tt), tt;
  if (I(r))
    for (let d = 0; d < r.length; d++) {
      const P = Re(r[d]);
      us(P) && (i[P] = H);
    }
  else if (r)
    for (const d in r) {
      const P = Re(d);
      if (us(P)) {
        const E = r[d], y = i[P] = I(E) || x(E) ? { type: E } : Object.assign({}, E);
        if (y) {
          const w = ms(Boolean, y.type), O = ms(String, y.type);
          y[
            0
            /* BooleanFlags.shouldCast */
          ] = w > -1, y[
            1
            /* BooleanFlags.shouldCastTrue */
          ] = O < 0 || w < O, (w > -1 || N(y, "default")) && a.push(P);
        }
      }
    }
  const p = [i, a];
  return $(e) && s.set(e, p), p;
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
  return I(t) ? t.findIndex((n) => ds(n, e)) : x(t) && ds(t, e) ? 0 : -1;
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
    if (x(r))
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
    n ? (e.slots = U(t), Ut(t, "_", n)) : Co(t, e.slots = {});
  } else
    e.slots = {}, t && Po(e, t);
  Ut(e.slots, zt, 1);
}, ci = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let r = !0, i = H;
  if (s.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? r = !1 : (q(o, t), !n && a === 1 && delete o._) : (r = !t.$stable, Co(t, o)), i = t;
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
      isNativeTag: No,
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
    x(s) || (s = Object.assign({}, s)), o != null && !$(o) && (o = null);
    const r = vo(), i = /* @__PURE__ */ new Set();
    let a = !1;
    const f = r.app = {
      _uid: fi++,
      _component: s,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: Ui,
      get config() {
        return r.config;
      },
      set config(p) {
      },
      use(p, ...d) {
        return i.has(p) || (p && x(p.install) ? (i.add(p), p.install(f, ...d)) : x(p) && (i.add(p), p(f, ...d))), f;
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
          return E.appContext = r, d && t ? t(E, p) : e(E, p, P), a = !0, f._container = p, p.__vue_app__ = f, Yt(E.component) || E.component.proxy;
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
    e.forEach((E, y) => En(E, t && (I(t) ? t[y] : t), n, s, o));
    return;
  }
  if (Mt(s) && !o)
    return;
  const r = s.shapeFlag & 4 ? Yt(s.component) || s.component.proxy : s.el, i = o ? null : r, { i: a, r: f } = e, p = t && t.r, d = a.refs === H ? a.refs = {} : a.refs, P = a.setupState;
  if (p != null && p !== f && (Y(p) ? (d[p] = null, N(P, p) && (P[p] = null)) : ee(p) && (p.value = null)), x(f))
    Fe(f, a, 12, [i, d]);
  else {
    const E = Y(f), y = ee(f);
    if (E || y) {
      const w = () => {
        if (e.f) {
          const O = E ? N(P, f) ? P[f] : d[f] : f.value;
          o ? I(O) && yn(O, r) : I(O) ? O.includes(r) || O.push(r) : E ? (d[f] = [r], N(P, f) && (P[f] = d[f])) : (f.value = [r], e.k && (d[e.k] = f.value));
        } else
          E ? (d[f] = i, N(P, f) && (P[f] = i)) : y && (f.value = i, e.k && (d[e.k] = i));
      };
      i ? (w.id = -1, oe(w, n)) : w();
    }
  }
}
const oe = Ur;
function pi(e) {
  return di(e);
}
function di(e, t) {
  const n = Wo();
  n.__VUE__ = !0;
  const { insert: s, remove: o, patchProp: r, createElement: i, createText: a, createComment: f, setText: p, setElementText: d, parentNode: P, nextSibling: E, setScopeId: y = he, insertStaticContent: w } = e, O = (l, c, u, g = null, m = null, C = null, A = !1, h = null, v = !!c.dynamicChildren) => {
    if (l === c)
      return;
    l && !$e(l, c) && (g = Et(l), Pe(l, m, C, !0), l = null), c.patchFlag === -2 && (v = !1, c.dynamicChildren = null);
    const { type: _, ref: b, shapeFlag: D } = c;
    switch (_) {
      case Jt:
        j(l, c, u, g);
        break;
      case Ie:
        F(l, c, u, g);
        break;
      case Lt:
        l == null && te(c, u, g, A);
        break;
      case de:
        Ce(l, c, u, g, m, C, A, h, v);
        break;
      default:
        D & 1 ? Z(l, c, u, g, m, C, A, h, v) : D & 6 ? be(l, c, u, g, m, C, A, h, v) : (D & 64 || D & 128) && _.process(l, c, u, g, m, C, A, h, v, Ze);
    }
    b != null && m && En(b, l && l.ref, C, c || l, !c);
  }, j = (l, c, u, g) => {
    if (l == null)
      s(c.el = a(c.children), u, g);
    else {
      const m = c.el = l.el;
      c.children !== l.children && p(m, c.children);
    }
  }, F = (l, c, u, g) => {
    l == null ? s(c.el = f(c.children || ""), u, g) : c.el = l.el;
  }, te = (l, c, u, g) => {
    [l.el, l.anchor] = w(l.children, c, u, g, l.el, l.anchor);
  }, T = ({ el: l, anchor: c }, u, g) => {
    let m;
    for (; l && l !== c; )
      m = E(l), s(l, u, g), l = m;
    s(c, u, g);
  }, B = ({ el: l, anchor: c }) => {
    let u;
    for (; l && l !== c; )
      u = E(l), o(l), l = u;
    o(c);
  }, Z = (l, c, u, g, m, C, A, h, v) => {
    A = A || c.type === "svg", l == null ? qe(c, u, g, m, C, A, h, v) : z(l, c, m, C, A, h, v);
  }, qe = (l, c, u, g, m, C, A, h) => {
    let v, _;
    const { type: b, props: D, shapeFlag: S, transition: R, dirs: L } = l;
    if (v = l.el = i(l.type, C, D && D.is, D), S & 8 ? d(v, l.children) : S & 16 && M(l.children, v, null, g, m, C && b !== "foreignObject", A, h), L && je(l, null, g, "created"), Le(v, l, l.scopeId, A, g), D) {
      for (const k in D)
        k !== "value" && !It(k) && r(v, k, null, D[k], C, l.children, g, m, Se);
      "value" in D && r(v, "value", null, D.value), (_ = D.onVnodeBeforeMount) && Ee(_, g, l);
    }
    L && je(l, null, g, "beforeMount");
    const W = (!m || m && !m.pendingBranch) && R && !R.persisted;
    W && R.beforeEnter(v), s(v, c, u), ((_ = D && D.onVnodeMounted) || W || L) && oe(() => {
      _ && Ee(_, g, l), W && R.enter(v), L && je(l, null, g, "mounted");
    }, m);
  }, Le = (l, c, u, g, m) => {
    if (u && y(l, u), g)
      for (let C = 0; C < g.length; C++)
        y(l, g[C]);
    if (m) {
      let C = m.subTree;
      if (c === C) {
        const A = m.vnode;
        Le(l, A, A.scopeId, A.slotScopeIds, m.parent);
      }
    }
  }, M = (l, c, u, g, m, C, A, h, v = 0) => {
    for (let _ = v; _ < l.length; _++) {
      const b = l[_] = h ? Ue(l[_]) : Ae(l[_]);
      O(null, b, c, u, g, m, C, A, h);
    }
  }, z = (l, c, u, g, m, C, A) => {
    const h = c.el = l.el;
    let { patchFlag: v, dynamicChildren: _, dirs: b } = c;
    v |= l.patchFlag & 16;
    const D = l.props || H, S = c.props || H;
    let R;
    u && Be(u, !1), (R = S.onVnodeBeforeUpdate) && Ee(R, u, c, l), b && je(c, l, u, "beforeUpdate"), u && Be(u, !0);
    const L = m && c.type !== "foreignObject";
    if (_ ? K(l.dynamicChildren, _, h, u, g, L, C) : A || V(l, c, h, null, u, g, L, C, !1), v > 0) {
      if (v & 16)
        ie(h, c, D, S, u, g, m);
      else if (v & 2 && D.class !== S.class && r(h, "class", null, S.class, m), v & 4 && r(h, "style", D.style, S.style, m), v & 8) {
        const W = c.dynamicProps;
        for (let k = 0; k < W.length; k++) {
          const G = W[k], ue = D[G], Qe = S[G];
          (Qe !== ue || G === "value") && r(h, G, ue, Qe, m, l.children, u, g, Se);
        }
      }
      v & 1 && l.children !== c.children && d(h, c.children);
    } else
      !A && _ == null && ie(h, c, D, S, u, g, m);
    ((R = S.onVnodeUpdated) || b) && oe(() => {
      R && Ee(R, u, c, l), b && je(c, l, u, "updated");
    }, g);
  }, K = (l, c, u, g, m, C, A) => {
    for (let h = 0; h < c.length; h++) {
      const v = l[h], _ = c[h], b = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        v.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (v.type === de || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !$e(v, _) || // - In the case of a component, it could contain anything.
        v.shapeFlag & 70) ? P(v.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          u
        )
      );
      O(v, _, b, null, g, m, C, A, !0);
    }
  }, ie = (l, c, u, g, m, C, A) => {
    if (u !== g) {
      if (u !== H)
        for (const h in u)
          !It(h) && !(h in g) && r(l, h, u[h], null, A, c.children, m, C, Se);
      for (const h in g) {
        if (It(h))
          continue;
        const v = g[h], _ = u[h];
        v !== _ && h !== "value" && r(l, h, _, v, A, c.children, m, C, Se);
      }
      "value" in g && r(l, "value", u.value, g.value);
    }
  }, Ce = (l, c, u, g, m, C, A, h, v) => {
    const _ = c.el = l ? l.el : a(""), b = c.anchor = l ? l.anchor : a("");
    let { patchFlag: D, dynamicChildren: S, slotScopeIds: R } = c;
    R && (h = h ? h.concat(R) : R), l == null ? (s(_, u, g), s(b, u, g), M(c.children, u, b, m, C, A, h, v)) : D > 0 && D & 64 && S && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (K(l.dynamicChildren, S, u, m, C, A, h), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (c.key != null || m && c === m.subTree) && Eo(
      l,
      c,
      !0
      /* shallow */
    )) : V(l, c, u, b, m, C, A, h, v);
  }, be = (l, c, u, g, m, C, A, h, v) => {
    c.slotScopeIds = h, l == null ? c.shapeFlag & 512 ? m.ctx.activate(c, u, g, A, v) : ct(c, u, g, m, C, A, v) : Xn(l, c, v);
  }, ct = (l, c, u, g, m, C, A) => {
    const h = l.component = Si(l, g, m);
    if ($t(l) && (h.ctx.renderer = Ze), yi(h), h.asyncDep) {
      if (m && m.registerDep(h, ne), !l.el) {
        const v = h.subTree = Te(Ie);
        F(null, v, c, u);
      }
      return;
    }
    ne(h, l, c, u, m, C, A);
  }, Xn = (l, c, u) => {
    const g = c.component = l.component;
    if (Mr(l, c, u))
      if (g.asyncDep && !g.asyncResolved) {
        X(g, c, u);
        return;
      } else
        g.next = c, Sr(g.update), g.update();
    else
      c.el = l.el, g.vnode = c;
  }, ne = (l, c, u, g, m, C, A) => {
    const h = () => {
      if (l.isMounted) {
        let { next: b, bu: D, u: S, parent: R, vnode: L } = l, W = b, k;
        Be(l, !1), b ? (b.el = L.el, X(l, b, A)) : b = L, D && Tt(D), (k = b.props && b.props.onVnodeBeforeUpdate) && Ee(k, R, b, L), Be(l, !0);
        const G = en(l), ue = l.subTree;
        l.subTree = G, O(
          ue,
          G,
          // parent may have changed if it's in a teleport
          P(ue.el),
          // anchor may have changed if it's in a fragment
          Et(ue),
          l,
          m,
          C
        ), b.el = G.el, W === null && Lr(l, G.el), S && oe(S, m), (k = b.props && b.props.onVnodeUpdated) && oe(() => Ee(k, R, b, L), m);
      } else {
        let b;
        const { el: D, props: S } = c, { bm: R, m: L, parent: W } = l, k = Mt(c);
        if (Be(l, !1), R && Tt(R), !k && (b = S && S.onVnodeBeforeMount) && Ee(b, W, c), Be(l, !0), D && Zt) {
          const G = () => {
            l.subTree = en(l), Zt(D, l.subTree, l, m, null);
          };
          k ? c.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !l.isUnmounted && G()
          ) : G();
        } else {
          const G = l.subTree = en(l);
          O(null, G, u, g, l, m, C), c.el = G.el;
        }
        if (L && oe(L, m), !k && (b = S && S.onVnodeMounted)) {
          const G = c;
          oe(() => Ee(b, W, G), m);
        }
        (c.shapeFlag & 256 || W && Mt(W.vnode) && W.vnode.shapeFlag & 256) && l.a && oe(l.a, m), l.isMounted = !0, c = u = g = null;
      }
    }, v = l.effect = new xn(
      h,
      () => Vn(_),
      l.scope
      // track it in component's effect scope
    ), _ = l.update = () => v.run();
    _.id = l.uid, Be(l, !0), _();
  }, X = (l, c, u) => {
    c.component = l;
    const g = l.vnode.props;
    l.vnode = c, l.next = null, ii(l, c.props, g, u), ci(l, c.children, u), lt(), is(), at();
  }, V = (l, c, u, g, m, C, A, h, v = !1) => {
    const _ = l && l.children, b = l ? l.shapeFlag : 0, D = c.children, { patchFlag: S, shapeFlag: R } = c;
    if (S > 0) {
      if (S & 128) {
        vt(_, D, u, g, m, C, A, h, v);
        return;
      } else if (S & 256) {
        We(_, D, u, g, m, C, A, h, v);
        return;
      }
    }
    R & 8 ? (b & 16 && Se(_, m, C), D !== _ && d(u, D)) : b & 16 ? R & 16 ? vt(_, D, u, g, m, C, A, h, v) : Se(_, m, C, !0) : (b & 8 && d(u, ""), R & 16 && M(D, u, g, m, C, A, h, v));
  }, We = (l, c, u, g, m, C, A, h, v) => {
    l = l || tt, c = c || tt;
    const _ = l.length, b = c.length, D = Math.min(_, b);
    let S;
    for (S = 0; S < D; S++) {
      const R = c[S] = v ? Ue(c[S]) : Ae(c[S]);
      O(l[S], R, u, null, m, C, A, h, v);
    }
    _ > b ? Se(l, m, C, !0, !1, D) : M(c, u, g, m, C, A, h, v, D);
  }, vt = (l, c, u, g, m, C, A, h, v) => {
    let _ = 0;
    const b = c.length;
    let D = l.length - 1, S = b - 1;
    for (; _ <= D && _ <= S; ) {
      const R = l[_], L = c[_] = v ? Ue(c[_]) : Ae(c[_]);
      if ($e(R, L))
        O(R, L, u, null, m, C, A, h, v);
      else
        break;
      _++;
    }
    for (; _ <= D && _ <= S; ) {
      const R = l[D], L = c[S] = v ? Ue(c[S]) : Ae(c[S]);
      if ($e(R, L))
        O(R, L, u, null, m, C, A, h, v);
      else
        break;
      D--, S--;
    }
    if (_ > D) {
      if (_ <= S) {
        const R = S + 1, L = R < b ? c[R].el : g;
        for (; _ <= S; )
          O(null, c[_] = v ? Ue(c[_]) : Ae(c[_]), u, L, m, C, A, h, v), _++;
      }
    } else if (_ > S)
      for (; _ <= D; )
        Pe(l[_], m, C, !0), _++;
    else {
      const R = _, L = _, W = /* @__PURE__ */ new Map();
      for (_ = L; _ <= S; _++) {
        const le = c[_] = v ? Ue(c[_]) : Ae(c[_]);
        le.key != null && W.set(le.key, _);
      }
      let k, G = 0;
      const ue = S - L + 1;
      let Qe = !1, Jn = 0;
      const ft = new Array(ue);
      for (_ = 0; _ < ue; _++)
        ft[_] = 0;
      for (_ = R; _ <= D; _++) {
        const le = l[_];
        if (G >= ue) {
          Pe(le, m, C, !0);
          continue;
        }
        let ve;
        if (le.key != null)
          ve = W.get(le.key);
        else
          for (k = L; k <= S; k++)
            if (ft[k - L] === 0 && $e(le, c[k])) {
              ve = k;
              break;
            }
        ve === void 0 ? Pe(le, m, C, !0) : (ft[ve - L] = _ + 1, ve >= Jn ? Jn = ve : Qe = !0, O(le, c[ve], u, null, m, C, A, h, v), G++);
      }
      const zn = Qe ? mi(ft) : tt;
      for (k = zn.length - 1, _ = ue - 1; _ >= 0; _--) {
        const le = L + _, ve = c[le], Yn = le + 1 < b ? c[le + 1].el : g;
        ft[_] === 0 ? O(null, ve, u, Yn, m, C, A, h, v) : Qe && (k < 0 || _ !== zn[k] ? He(
          ve,
          u,
          Yn,
          2
          /* MoveType.REORDER */
        ) : k--);
      }
    }
  }, He = (l, c, u, g, m = null) => {
    const { el: C, type: A, transition: h, children: v, shapeFlag: _ } = l;
    if (_ & 6) {
      He(l.component.subTree, c, u, g);
      return;
    }
    if (_ & 128) {
      l.suspense.move(c, u, g);
      return;
    }
    if (_ & 64) {
      A.move(l, c, u, Ze);
      return;
    }
    if (A === de) {
      s(C, c, u);
      for (let D = 0; D < v.length; D++)
        He(v[D], c, u, g);
      s(l.anchor, c, u);
      return;
    }
    if (A === Lt) {
      T(l, c, u);
      return;
    }
    if (g !== 2 && _ & 1 && h)
      if (g === 0)
        h.beforeEnter(C), s(C, c, u), oe(() => h.enter(C), m);
      else {
        const { leave: D, delayLeave: S, afterLeave: R } = h, L = () => s(C, c, u), W = () => {
          D(C, () => {
            L(), R && R();
          });
        };
        S ? S(C, L, W) : W();
      }
    else
      s(C, c, u);
  }, Pe = (l, c, u, g = !1, m = !1) => {
    const { type: C, props: A, ref: h, children: v, dynamicChildren: _, shapeFlag: b, patchFlag: D, dirs: S } = l;
    if (h != null && En(h, null, u, l, !0), b & 256) {
      c.ctx.deactivate(l);
      return;
    }
    const R = b & 1 && S, L = !Mt(l);
    let W;
    if (L && (W = A && A.onVnodeBeforeUnmount) && Ee(W, c, l), b & 6)
      Oo(l.component, u, g);
    else {
      if (b & 128) {
        l.suspense.unmount(u, g);
        return;
      }
      R && je(l, null, c, "beforeUnmount"), b & 64 ? l.type.remove(l, c, u, m, Ze, g) : _ && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (C !== de || D > 0 && D & 64) ? Se(_, c, u, !1, !0) : (C === de && D & 384 || !m && b & 16) && Se(v, c, u), g && $n(l);
    }
    (L && (W = A && A.onVnodeUnmounted) || R) && oe(() => {
      W && Ee(W, c, l), R && je(l, null, c, "unmounted");
    }, u);
  }, $n = (l) => {
    const { type: c, el: u, anchor: g, transition: m } = l;
    if (c === de) {
      So(u, g);
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
  }, So = (l, c) => {
    let u;
    for (; l !== c; )
      u = E(l), o(l), l = u;
    o(c);
  }, Oo = (l, c, u) => {
    const { bum: g, scope: m, update: C, subTree: A, um: h } = l;
    g && Tt(g), m.stop(), C && (C.active = !1, Pe(A, l, c, u)), h && oe(h, c), oe(() => {
      l.isUnmounted = !0;
    }, c), c && c.pendingBranch && !c.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === c.pendingId && (c.deps--, c.deps === 0 && c.resolve());
  }, Se = (l, c, u, g = !1, m = !1, C = 0) => {
    for (let A = C; A < l.length; A++)
      Pe(l[A], c, u, g, m);
  }, Et = (l) => l.shapeFlag & 6 ? Et(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : E(l.anchor || l.el), Gn = (l, c, u) => {
    l == null ? c._vnode && Pe(c._vnode, null, null, !0) : O(c._vnode || null, l, c, null, null, null, u), is(), to(), c._vnode = l;
  }, Ze = {
    p: O,
    um: Pe,
    m: He,
    r: $n,
    mt: ct,
    mc: M,
    pc: V,
    pbc: K,
    n: Et,
    o: e
  };
  let qt, Zt;
  return t && ([qt, Zt] = t(Ze)), {
    render: Gn,
    hydrate: qt,
    createApp: ui(Gn, qt)
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
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[r] = Ue(o[r]), a.el = i.el), n || Eo(i, a)), a.type === Jt && (a.el = i.el);
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
const gi = (e) => e.__isTeleport, de = Symbol(void 0), Jt = Symbol(void 0), Ie = Symbol(void 0), Lt = Symbol(void 0), dt = [];
let _e = null;
function on(e = !1) {
  dt.push(_e = e ? null : []);
}
function _i() {
  dt.pop(), _e = dt[dt.length - 1] || null;
}
let Ct = 1;
function gs(e) {
  Ct += e;
}
function hi(e) {
  return e.dynamicChildren = Ct > 0 ? _e || tt : null, _i(), Ct > 0 && _e && _e.push(e), e;
}
function rn(e, t, n, s, o, r) {
  return hi(ye(
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
function $e(e, t) {
  return e.type === t.type && e.key === t.key;
}
const zt = "__vInternal", Ao = ({ key: e }) => e ?? null, Nt = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? Y(e) || ee(e) || x(e) ? { i: ce, r: e, k: t, f: !!n } : e : null;
function ye(e, t = null, n = null, s = 0, o = null, r = e === de ? 0 : 1, i = !1, a = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ao(t),
    ref: t && Nt(t),
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
  return a ? (Bn(f, n), r & 128 && e.normalize(f)) : n && (f.shapeFlag |= Y(n) ? 8 : 16), Ct > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  _e && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && _e.push(f), f;
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
    return n && Bn(a, n), Ct > 0 && !r && _e && (a.shapeFlag & 6 ? _e[_e.indexOf(e)] = a : _e.push(a)), a.patchFlag |= -2, a;
  }
  if (xi(e) && (e = e.__vccOpts), t) {
    t = vi(t);
    let { class: a, style: f } = t;
    a && !Y(a) && (t.class = Sn(a)), $(f) && ($s(f) && !I(f) && (f = q({}, f)), t.style = Vt(f));
  }
  const i = Y(e) ? 1 : Nr(e) ? 128 : gi(e) ? 64 : $(e) ? 4 : x(e) ? 2 : 0;
  return ye(e, t, n, s, o, i, r, !0);
}
function vi(e) {
  return e ? $s(e) || zt in e ? q({}, e) : e : null;
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
      n && o ? I(o) ? o.concat(Nt(t)) : [o, Nt(t)] : Nt(t)
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
  ) : typeof e == "object" ? Ue(e) : Te(Jt, null, String(e));
}
function Ue(e) {
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
    x(t) ? (t = { default: t, _ctx: ce }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [An(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ai(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = Sn([t.class, s.class]));
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
const Di = vo();
let bi = 0;
function Si(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Di, r = {
    uid: bi++,
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
    propsOptions: _o(s, o),
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Rr.bind(null, r), e.ce && e.ce(r), r;
}
let J = null;
const Oi = () => J || ce, it = (e) => {
  J = e, e.scope.on();
}, Ye = () => {
  J && J.scope.off(), J = null;
};
function Do(e) {
  return e.vnode.shapeFlag & 4;
}
let Pt = !1;
function yi(e, t = !1) {
  Pt = t;
  const { props: n, children: s } = e.vnode, o = Do(e);
  ri(e, n, o, t), ai(e, s);
  const r = o ? Ri(e, t) : void 0;
  return Pt = !1, r;
}
function Ri(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Gs(new Proxy(e.ctx, Qr));
  const { setup: s } = n;
  if (s) {
    const o = e.setupContext = s.length > 1 ? Ti(e) : null;
    it(e), lt();
    const r = Fe(s, e, 0, [e.props, o]);
    if (at(), Ye(), xs(r)) {
      if (r.then(Ye, Ye), t)
        return r.then((i) => {
          _s(e, i, t);
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
      _s(e, r, t);
  } else
    bo(e, t);
}
function _s(e, t, n) {
  x(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : $(t) && (e.setupState = Ys(t)), bo(e, n);
}
let hs;
function bo(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && hs && !s.render) {
      const o = s.template || Hn(e).template;
      if (o) {
        const { isCustomElement: r, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: f } = s, p = q(q({
          isCustomElement: r,
          delimiters: a
        }, i), f);
        s.render = hs(o, p);
      }
    }
    e.render = s.render || he;
  }
  it(e), lt(), ei(e), at(), Ye();
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
function Yt(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Ys(Gs(e.exposed)), {
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
function xi(e) {
  return x(e) && "__vccOpts" in e;
}
const Mi = (e, t) => Ar(e, t, Pt), Li = Symbol(""), Ni = () => xt(Li), Ui = "3.2.47", wi = "http://www.w3.org/2000/svg", Ge = typeof document < "u" ? document : null, Cs = Ge && /* @__PURE__ */ Ge.createElement("template"), Fi = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t ? Ge.createElementNS(wi, e) : Ge.createElement(e, n ? { is: n } : void 0);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => Ge.createTextNode(e),
  createComment: (e) => Ge.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ge.querySelector(e),
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
  const s = e.style, o = Y(n);
  if (n && !o) {
    if (t && !Y(t))
      for (const r in t)
        n[r] == null && Dn(s, r, "");
    for (const r in n)
      Dn(s, r, n[r]);
  } else {
    const r = s.display;
    o ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (s.display = r);
  }
}
const Ps = /\s*!important$/;
function Dn(e, t, n) {
  if (I(n))
    n.forEach((s) => Dn(e, t, s));
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
  let s = Re(t);
  if (s !== "filter" && s in e)
    return ln[t] = s;
  s = Ns(s);
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
    const r = Mo(t);
    n == null || r && !Rs(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : n);
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
    f === "boolean" ? n = Rs(n) : n == null && f === "string" ? (n = "", a = !0) : f === "number" && (n = 0, a = !0);
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
const $i = /* @__PURE__ */ Promise.resolve(), Gi = () => an || ($i.then(() => an = 0), an = Date.now());
function Ji(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    fe(zi(s, n.value), t, 5, [s]);
  };
  return n.value = e, n.attached = Gi(), n;
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
const Ds = /^on[a-z]/, Yi = (e, t, n, s, o = !1, r, i, a, f) => {
  t === "class" ? ki(e, s, o) : t === "style" ? Vi(e, n, s) : Wt(t) ? On(t) || Ki(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : qi(e, t, s, o)) ? ji(e, t, s, r, i, a, f) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Hi(e, t, s, o));
};
function qi(e, t, n, s) {
  return s ? !!(t === "innerHTML" || t === "textContent" || t in e && Ds.test(t) && x(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Ds.test(t) && Y(n) ? !1 : t in e;
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
      this._connected || (ys(null, this.shadowRoot), this._instance = null);
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
          (p === Number || p && p.type === Number) && (f in this._props && (this._props[f] = qn(this._props[f])), (a || (a = /* @__PURE__ */ Object.create(null)))[Re(f)] = !0);
        }
      this._numberProps = a, o && this._resolveProps(s), this._applyStyles(i), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((s) => t(s, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t, s = I(n) ? n : Object.keys(n || {});
    for (const o of Object.keys(this))
      o[0] !== "_" && s.includes(o) && this._setProp(o, this[o], !0, !1);
    for (const o of s.map(Re))
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
    const s = Re(t);
    this._numberProps && this._numberProps[s] && (n = qn(n)), this._setProp(s, n, !1);
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
    ys(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = Te(this._def, q({}, this._props));
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
const bs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return I(t) ? (n) => Tt(t, n) : t;
};
function tl(e) {
  e.target.composing = !0;
}
function Ss(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const nl = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e._assign = bs(o);
    const r = s || o.props && o.props.type === "number";
    et(e, t ? "change" : "input", (i) => {
      if (i.target.composing)
        return;
      let a = e.value;
      n && (a = a.trim()), r && (a = cn(a)), e._assign(a);
    }), n && et(e, "change", () => {
      e.value = e.value.trim();
    }), t || (et(e, "compositionstart", tl), et(e, "compositionend", Ss), et(e, "change", Ss));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: s, number: o } }, r) {
    if (e._assign = bs(r), e.composing || document.activeElement === e && e.type !== "range" && (n || s && e.value.trim() === t || (o || e.type === "number") && cn(e.value) === t))
      return;
    const i = t ?? "";
    e.value !== i && (e.value = i);
  }
}, sl = /* @__PURE__ */ q({ patchProp: Yi }, Fi);
let Os;
function ol() {
  return Os || (Os = pi(sl));
}
const ys = (...e) => {
  ol().render(...e);
}, rl = { id: "container" }, il = { key: 1 }, ll = { id: "info" }, al = /* @__PURE__ */ Ei('<datalist id="tickmarks"><option value="0"></option><option value="10"></option><option value="20"></option><option value="30"></option><option value="40"></option><option value="50"></option><option value="60"></option><option value="70"></option><option value="80"></option><option value="90"></option><option value="100"></option></datalist>', 1), cl = /* @__PURE__ */ ye("p", null, [
  /* @__PURE__ */ An(" ← ↑ → ↓ to move the overlay "),
  /* @__PURE__ */ ye("br"),
  /* @__PURE__ */ An(" escape to remove the overlay ")
], -1), fl = /* @__PURE__ */ co({
  __name: "FigmaOverlay.ce",
  setup(e) {
    const t = yt("Load figma component from clipboard"), n = yt(null), s = yt(!1), o = yt(50), r = (d) => {
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
        const E = n.value, y = E.getBoundingClientRect(), w = P.clientX - y.left, O = P.clientY - y.top, j = (te) => {
          E.style.top = `${te.clientY - O}px`, E.style.left = `${te.clientX - w}px`;
        }, F = () => {
          document.removeEventListener("mousemove", j), document.removeEventListener("mouseup", F);
        };
        document.addEventListener("mousemove", j), document.addEventListener("mouseup", F);
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
      ye("div", rl, [
        s.value ? (on(), rn("div", il, [
          ye("button", {
            type: "button",
            onClick: i
          }, "Remove overlay"),
          ye("div", ll, [
            qr(ye("input", {
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
      ye("div", {
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

function In(e, t) {
  const n = /* @__PURE__ */ Object.create(null), s = e.split(",");
  for (let r = 0; r < s.length; r++)
    n[s[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
function Bt(e) {
  if (A(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = q(s) ? kr(s) : Bt(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else {
    if (q(e))
      return e;
    if (W(e))
      return e;
  }
}
const wr = /;(?![^(]*\))/g, Nr = /:([^]+)/, Dr = /\/\*.*?\*\//gs;
function kr(e) {
  const t = {};
  return e.replace(Dr, "").split(wr).forEach((n) => {
    if (n) {
      const s = n.split(Nr);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function _t(e) {
  let t = "";
  if (q(e))
    t = e;
  else if (A(e))
    for (let n = 0; n < e.length; n++) {
      const s = _t(e[n]);
      s && (t += s + " ");
    }
  else if (W(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Lr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Fr = /* @__PURE__ */ In(Lr);
function Ns(e) {
  return !!e || e === "";
}
function Hr(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Gt(e[s], t[s]);
  return n;
}
function Gt(e, t) {
  if (e === t)
    return !0;
  let n = ts(e), s = ts(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = mt(e), s = mt(t), n || s)
    return e === t;
  if (n = A(e), s = A(t), n || s)
    return n && s ? Hr(e, t) : !1;
  if (n = W(e), s = W(t), n || s) {
    if (!n || !s)
      return !1;
    const r = Object.keys(e).length, o = Object.keys(t).length;
    if (r !== o)
      return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i), u = t.hasOwnProperty(i);
      if (l && !u || !l && u || !Gt(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Ds(e, t) {
  return e.findIndex((n) => Gt(n, t));
}
const Vr = (e) => q(e) ? e : e == null ? "" : A(e) || W(e) && (e.toString === Fs || !M(e.toString)) ? JSON.stringify(e, ks, 2) : String(e), ks = (e, t) => t && t.__v_isRef ? ks(e, t.value) : st(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, r]) => (n[`${s} =>`] = r, n), {})
} : Xt(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : W(t) && !A(t) && !Hs(t) ? String(t) : t, K = {}, nt = [], be = () => {
}, jr = () => !1, Kr = /^on[^a-z]/, $t = (e) => Kr.test(e), Pn = (e) => e.startsWith("onUpdate:"), Z = Object.assign, Mn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Wr = Object.prototype.hasOwnProperty, D = (e, t) => Wr.call(e, t), A = Array.isArray, st = (e) => Ut(e) === "[object Map]", Xt = (e) => Ut(e) === "[object Set]", ts = (e) => Ut(e) === "[object Date]", M = (e) => typeof e == "function", q = (e) => typeof e == "string", mt = (e) => typeof e == "symbol", W = (e) => e !== null && typeof e == "object", Ls = (e) => W(e) && M(e.then) && M(e.catch), Fs = Object.prototype.toString, Ut = (e) => Fs.call(e), Br = (e) => Ut(e).slice(8, -1), Hs = (e) => Ut(e) === "[object Object]", wn = (e) => q(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, wt = /* @__PURE__ */ In(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), zt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Gr = /-(\w)/g, Ae = zt((e) => e.replace(Gr, (t, n) => n ? n.toUpperCase() : "")), $r = /\B([A-Z])/g, _e = zt((e) => e.replace($r, "-$1").toLowerCase()), Vs = zt((e) => e.charAt(0).toUpperCase() + e.slice(1)), on = zt((e) => e ? `on${Vs(e)}` : ""), ht = (e, t) => !Object.is(e, t), Nt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Ht = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, mn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ns = (e) => {
  const t = q(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ss;
const Xr = () => ss || (ss = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let pe;
class zr {
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
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Yr(e, t = pe) {
  t && t.active && t.effects.push(e);
}
function qr() {
  return pe;
}
const Nn = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, js = (e) => (e.w & Fe) > 0, Ks = (e) => (e.n & Fe) > 0, Zr = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Fe;
}, Jr = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let s = 0; s < t.length; s++) {
      const r = t[s];
      js(r) && !Ks(r) ? r.delete(e) : t[n++] = r, r.w &= ~Fe, r.n &= ~Fe;
    }
    t.length = n;
  }
}, hn = /* @__PURE__ */ new WeakMap();
let dt = 0, Fe = 1;
const bn = 30;
let me;
const qe = Symbol(""), vn = Symbol("");
class Dn {
  constructor(t, n = null, s) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Yr(this, s);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = me, n = ke;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = me, me = this, ke = !0, Fe = 1 << ++dt, dt <= bn ? Zr(this) : rs(this), this.fn();
    } finally {
      dt <= bn && Jr(this), Fe = 1 << --dt, me = this.parent, ke = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    me === this ? this.deferStop = !0 : this.active && (rs(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function rs(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let ke = !0;
const Ws = [];
function ct() {
  Ws.push(ke), ke = !1;
}
function ut() {
  const e = Ws.pop();
  ke = e === void 0 ? !0 : e;
}
function oe(e, t, n) {
  if (ke && me) {
    let s = hn.get(e);
    s || hn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || s.set(n, r = Nn()), Bs(r);
  }
}
function Bs(e, t) {
  let n = !1;
  dt <= bn ? Ks(e) || (e.n |= Fe, n = !js(e)) : n = !e.has(me), n && (e.add(me), me.deps.push(e));
}
function Pe(e, t, n, s, r, o) {
  const i = hn.get(e);
  if (!i)
    return;
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else if (n === "length" && A(e)) {
    const u = Number(s);
    i.forEach((a, _) => {
      (_ === "length" || _ >= u) && l.push(a);
    });
  } else
    switch (n !== void 0 && l.push(i.get(n)), t) {
      case "add":
        A(e) ? wn(n) && l.push(i.get("length")) : (l.push(i.get(qe)), st(e) && l.push(i.get(vn)));
        break;
      case "delete":
        A(e) || (l.push(i.get(qe)), st(e) && l.push(i.get(vn)));
        break;
      case "set":
        st(e) && l.push(i.get(qe));
        break;
    }
  if (l.length === 1)
    l[0] && yn(l[0]);
  else {
    const u = [];
    for (const a of l)
      a && u.push(...a);
    yn(Nn(u));
  }
}
function yn(e, t) {
  const n = A(e) ? e : [...e];
  for (const s of n)
    s.computed && os(s);
  for (const s of n)
    s.computed || os(s);
}
function os(e, t) {
  (e !== me || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const Qr = /* @__PURE__ */ In("__proto__,__v_isRef,__isVue"), Gs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(mt)
), eo = /* @__PURE__ */ kn(), to = /* @__PURE__ */ kn(!1, !0), no = /* @__PURE__ */ kn(!0), is = /* @__PURE__ */ so();
function so() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = k(this);
      for (let o = 0, i = this.length; o < i; o++)
        oe(s, "get", o + "");
      const r = s[t](...n);
      return r === -1 || r === !1 ? s[t](...n.map(k)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      ct();
      const s = k(this)[t].apply(this, n);
      return ut(), s;
    };
  }), e;
}
function ro(e) {
  const t = k(this);
  return oe(t, "has", e), t.hasOwnProperty(e);
}
function kn(e = !1, t = !1) {
  return function(s, r, o) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && o === (e ? t ? Eo : qs : t ? Ys : zs).get(s))
      return s;
    const i = A(s);
    if (!e) {
      if (i && D(is, r))
        return Reflect.get(is, r, o);
      if (r === "hasOwnProperty")
        return ro;
    }
    const l = Reflect.get(s, r, o);
    return (mt(r) ? Gs.has(r) : Qr(r)) || (e || oe(s, "get", r), t) ? l : ee(l) ? i && wn(r) ? l : l.value : W(l) ? e ? Zs(l) : Hn(l) : l;
  };
}
const oo = /* @__PURE__ */ $s(), io = /* @__PURE__ */ $s(!0);
function $s(e = !1) {
  return function(n, s, r, o) {
    let i = n[s];
    if (it(i) && ee(i) && !ee(r))
      return !1;
    if (!e && (!Vt(r) && !it(r) && (i = k(i), r = k(r)), !A(n) && ee(i) && !ee(r)))
      return i.value = r, !0;
    const l = A(n) && wn(s) ? Number(s) < n.length : D(n, s), u = Reflect.set(n, s, r, o);
    return n === k(o) && (l ? ht(r, i) && Pe(n, "set", s, r) : Pe(n, "add", s, r)), u;
  };
}
function lo(e, t) {
  const n = D(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && Pe(e, "delete", t, void 0), s;
}
function co(e, t) {
  const n = Reflect.has(e, t);
  return (!mt(t) || !Gs.has(t)) && oe(e, "has", t), n;
}
function uo(e) {
  return oe(e, "iterate", A(e) ? "length" : qe), Reflect.ownKeys(e);
}
const Xs = {
  get: eo,
  set: oo,
  deleteProperty: lo,
  has: co,
  ownKeys: uo
}, fo = {
  get: no,
  set(e, t) {
    return !0;
  },
  deleteProperty(e, t) {
    return !0;
  }
}, ao = /* @__PURE__ */ Z({}, Xs, {
  get: to,
  set: io
}), Ln = (e) => e, Yt = (e) => Reflect.getPrototypeOf(e);
function Tt(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = k(e), o = k(t);
  n || (t !== o && oe(r, "get", t), oe(r, "get", o));
  const { has: i } = Yt(r), l = s ? Ln : n ? jn : bt;
  if (i.call(r, t))
    return l(e.get(t));
  if (i.call(r, o))
    return l(e.get(o));
  e !== r && e.get(t);
}
function At(e, t = !1) {
  const n = this.__v_raw, s = k(n), r = k(e);
  return t || (e !== r && oe(s, "has", e), oe(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Rt(e, t = !1) {
  return e = e.__v_raw, !t && oe(k(e), "iterate", qe), Reflect.get(e, "size", e);
}
function ls(e) {
  e = k(e);
  const t = k(this);
  return Yt(t).has.call(t, e) || (t.add(e), Pe(t, "add", e, e)), this;
}
function cs(e, t) {
  t = k(t);
  const n = k(this), { has: s, get: r } = Yt(n);
  let o = s.call(n, e);
  o || (e = k(e), o = s.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), o ? ht(t, i) && Pe(n, "set", e, t) : Pe(n, "add", e, t), this;
}
function us(e) {
  const t = k(this), { has: n, get: s } = Yt(t);
  let r = n.call(t, e);
  r || (e = k(e), r = n.call(t, e)), s && s.call(t, e);
  const o = t.delete(e);
  return r && Pe(t, "delete", e, void 0), o;
}
function fs() {
  const e = k(this), t = e.size !== 0, n = e.clear();
  return t && Pe(e, "clear", void 0, void 0), n;
}
function It(e, t) {
  return function(s, r) {
    const o = this, i = o.__v_raw, l = k(i), u = t ? Ln : e ? jn : bt;
    return !e && oe(l, "iterate", qe), i.forEach((a, _) => s.call(r, u(a), u(_), o));
  };
}
function Pt(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = k(r), i = st(o), l = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, a = r[e](...s), _ = n ? Ln : t ? jn : bt;
    return !t && oe(o, "iterate", u ? vn : qe), {
      // iterator protocol
      next() {
        const { value: E, done: b } = a.next();
        return b ? { value: E, done: b } : {
          value: l ? [_(E[0]), _(E[1])] : _(E),
          done: b
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
function po() {
  const e = {
    get(o) {
      return Tt(this, o);
    },
    get size() {
      return Rt(this);
    },
    has: At,
    add: ls,
    set: cs,
    delete: us,
    clear: fs,
    forEach: It(!1, !1)
  }, t = {
    get(o) {
      return Tt(this, o, !1, !0);
    },
    get size() {
      return Rt(this);
    },
    has: At,
    add: ls,
    set: cs,
    delete: us,
    clear: fs,
    forEach: It(!1, !0)
  }, n = {
    get(o) {
      return Tt(this, o, !0);
    },
    get size() {
      return Rt(this, !0);
    },
    has(o) {
      return At.call(this, o, !0);
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
    forEach: It(!0, !1)
  }, s = {
    get(o) {
      return Tt(this, o, !0, !0);
    },
    get size() {
      return Rt(this, !0);
    },
    has(o) {
      return At.call(this, o, !0);
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
    forEach: It(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = Pt(o, !1, !1), n[o] = Pt(o, !0, !1), t[o] = Pt(o, !1, !0), s[o] = Pt(o, !0, !0);
  }), [
    e,
    n,
    t,
    s
  ];
}
const [go, _o, mo, ho] = /* @__PURE__ */ po();
function Fn(e, t) {
  const n = t ? e ? ho : mo : e ? _o : go;
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(D(n, r) && r in s ? n : s, r, o);
}
const bo = {
  get: /* @__PURE__ */ Fn(!1, !1)
}, vo = {
  get: /* @__PURE__ */ Fn(!1, !0)
}, yo = {
  get: /* @__PURE__ */ Fn(!0, !1)
}, zs = /* @__PURE__ */ new WeakMap(), Ys = /* @__PURE__ */ new WeakMap(), qs = /* @__PURE__ */ new WeakMap(), Eo = /* @__PURE__ */ new WeakMap();
function xo(e) {
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
function Co(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : xo(Br(e));
}
function Hn(e) {
  return it(e) ? e : Vn(e, !1, Xs, bo, zs);
}
function Uo(e) {
  return Vn(e, !1, ao, vo, Ys);
}
function Zs(e) {
  return Vn(e, !0, fo, yo, qs);
}
function Vn(e, t, n, s, r) {
  if (!W(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const i = Co(e);
  if (i === 0)
    return e;
  const l = new Proxy(e, i === 2 ? s : n);
  return r.set(e, l), l;
}
function rt(e) {
  return it(e) ? rt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function it(e) {
  return !!(e && e.__v_isReadonly);
}
function Vt(e) {
  return !!(e && e.__v_isShallow);
}
function Js(e) {
  return rt(e) || it(e);
}
function k(e) {
  const t = e && e.__v_raw;
  return t ? k(t) : e;
}
function Qs(e) {
  return Ht(e, "__v_skip", !0), e;
}
const bt = (e) => W(e) ? Hn(e) : e, jn = (e) => W(e) ? Zs(e) : e;
function er(e) {
  ke && me && (e = k(e), Bs(e.dep || (e.dep = Nn())));
}
function tr(e, t) {
  e = k(e);
  const n = e.dep;
  n && yn(n);
}
function ee(e) {
  return !!(e && e.__v_isRef === !0);
}
function tt(e) {
  return Oo(e, !1);
}
function Oo(e, t) {
  return ee(e) ? e : new So(e, t);
}
class So {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : k(t), this._value = n ? t : bt(t);
  }
  get value() {
    return er(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Vt(t) || it(t);
    t = n ? t : k(t), ht(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : bt(t), tr(this));
  }
}
function To(e) {
  return ee(e) ? e.value : e;
}
const Ao = {
  get: (e, t, n) => To(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return ee(r) && !ee(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function nr(e) {
  return rt(e) ? e : new Proxy(e, Ao);
}
var sr;
class Ro {
  constructor(t, n, s, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[sr] = !1, this._dirty = !0, this.effect = new Dn(t, () => {
      this._dirty || (this._dirty = !0, tr(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = s;
  }
  get value() {
    const t = k(this);
    return er(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
sr = "__v_isReadonly";
function Io(e, t, n = !1) {
  let s, r;
  const o = M(e);
  return o ? (s = e, r = be) : (s = e.get, r = e.set), new Ro(s, r, o || !r, n);
}
function Le(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (o) {
    qt(o, t, n);
  }
  return r;
}
function ae(e, t, n, s) {
  if (M(e)) {
    const o = Le(e, t, n, s);
    return o && Ls(o) && o.catch((i) => {
      qt(i, t, n);
    }), o;
  }
  const r = [];
  for (let o = 0; o < e.length; o++)
    r.push(ae(e[o], t, n, s));
  return r;
}
function qt(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, l = n;
    for (; o; ) {
      const a = o.ec;
      if (a) {
        for (let _ = 0; _ < a.length; _++)
          if (a[_](e, i, l) === !1)
            return;
      }
      o = o.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Le(u, null, 10, [e, i, l]);
      return;
    }
  }
  Po(e, n, r, s);
}
function Po(e, t, n, s = !0) {
  console.error(e);
}
let vt = !1, En = !1;
const Q = [];
let Ue = 0;
const ot = [];
let Te = null, Ge = 0;
const rr = /* @__PURE__ */ Promise.resolve();
let Kn = null;
function or(e) {
  const t = Kn || rr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Mo(e) {
  let t = Ue + 1, n = Q.length;
  for (; t < n; ) {
    const s = t + n >>> 1;
    yt(Q[s]) < e ? t = s + 1 : n = s;
  }
  return t;
}
function Wn(e) {
  (!Q.length || !Q.includes(e, vt && e.allowRecurse ? Ue + 1 : Ue)) && (e.id == null ? Q.push(e) : Q.splice(Mo(e.id), 0, e), ir());
}
function ir() {
  !vt && !En && (En = !0, Kn = rr.then(cr));
}
function wo(e) {
  const t = Q.indexOf(e);
  t > Ue && Q.splice(t, 1);
}
function No(e) {
  A(e) ? ot.push(...e) : (!Te || !Te.includes(e, e.allowRecurse ? Ge + 1 : Ge)) && ot.push(e), ir();
}
function as(e, t = vt ? Ue + 1 : 0) {
  for (; t < Q.length; t++) {
    const n = Q[t];
    n && n.pre && (Q.splice(t, 1), t--, n());
  }
}
function lr(e) {
  if (ot.length) {
    const t = [...new Set(ot)];
    if (ot.length = 0, Te) {
      Te.push(...t);
      return;
    }
    for (Te = t, Te.sort((n, s) => yt(n) - yt(s)), Ge = 0; Ge < Te.length; Ge++)
      Te[Ge]();
    Te = null, Ge = 0;
  }
}
const yt = (e) => e.id == null ? 1 / 0 : e.id, Do = (e, t) => {
  const n = yt(e) - yt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function cr(e) {
  En = !1, vt = !0, Q.sort(Do);
  const t = be;
  try {
    for (Ue = 0; Ue < Q.length; Ue++) {
      const n = Q[Ue];
      n && n.active !== !1 && Le(
        n,
        null,
        14
        /* ErrorCodes.SCHEDULER */
      );
    }
  } finally {
    Ue = 0, Q.length = 0, lr(), vt = !1, Kn = null, (Q.length || ot.length) && cr();
  }
}
function ko(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || K;
  let r = n;
  const o = t.startsWith("update:"), i = o && t.slice(7);
  if (i && i in s) {
    const _ = `${i === "modelValue" ? "model" : i}Modifiers`, { number: E, trim: b } = s[_] || K;
    b && (r = n.map((U) => q(U) ? U.trim() : U)), E && (r = n.map(mn));
  }
  let l, u = s[l = on(t)] || // also try camelCase event handler (#2249)
  s[l = on(Ae(t))];
  !u && o && (u = s[l = on(_e(t))]), u && ae(u, e, 6, r);
  const a = s[l + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, ae(a, e, 6, r);
  }
}
function ur(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const o = e.emits;
  let i = {}, l = !1;
  if (!M(e)) {
    const u = (a) => {
      const _ = ur(a, t, !0);
      _ && (l = !0, Z(i, _));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !o && !l ? (W(e) && s.set(e, null), null) : (A(o) ? o.forEach((u) => i[u] = null) : Z(i, o), W(e) && s.set(e, i), i);
}
function Zt(e, t) {
  return !e || !$t(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), D(e, t[0].toLowerCase() + t.slice(1)) || D(e, _e(t)) || D(e, t));
}
let fe = null, fr = null;
function jt(e) {
  const t = fe;
  return fe = e, fr = e && e.type.__scopeId || null, t;
}
function Lo(e, t = fe, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && ys(-1);
    const o = jt(t);
    let i;
    try {
      i = e(...r);
    } finally {
      jt(o), s._d && ys(1);
    }
    return i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function ln(e) {
  const { type: t, vnode: n, proxy: s, withProxy: r, props: o, propsOptions: [i], slots: l, attrs: u, emit: a, render: _, renderCache: E, data: b, setupState: U, ctx: P, inheritAttrs: T } = e;
  let B, L;
  const te = jt(e);
  try {
    if (n.shapeFlag & 4) {
      const j = r || s;
      B = Ce(_.call(j, j, E, o, U, b, P)), L = u;
    } else {
      const j = t;
      B = Ce(j.length > 1 ? j(o, { attrs: u, slots: l, emit: a }) : j(
        o,
        null
        /* we know it doesn't need it */
      )), L = t.props ? u : Fo(u);
    }
  } catch (j) {
    gt.length = 0, qt(
      j,
      e,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ), B = Ie(Re);
  }
  let I = B;
  if (L && T !== !1) {
    const j = Object.keys(L), { shapeFlag: J } = I;
    j.length && J & 7 && (i && j.some(Pn) && (L = Ho(L, i)), I = He(I, L));
  }
  return n.dirs && (I = He(I), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition && (I.transition = n.transition), B = I, jt(te), B;
}
const Fo = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || $t(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ho = (e, t) => {
  const n = {};
  for (const s in e)
    (!Pn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Vo(e, t, n) {
  const { props: s, children: r, component: o } = e, { props: i, children: l, patchFlag: u } = t, a = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return s ? ds(s, i, a) : !!i;
    if (u & 8) {
      const _ = t.dynamicProps;
      for (let E = 0; E < _.length; E++) {
        const b = _[E];
        if (i[b] !== s[b] && !Zt(a, b))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? i ? ds(s, i, a) : !0 : !!i;
  return !1;
}
function ds(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !Zt(n, o))
      return !0;
  }
  return !1;
}
function jo({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Ko = (e) => e.__isSuspense;
function Wo(e, t) {
  t && t.pendingBranch ? A(e) ? t.effects.push(...e) : t.effects.push(e) : No(e);
}
function Bo(e, t) {
  if (z) {
    let n = z.provides;
    const s = z.parent && z.parent.provides;
    s === n && (n = z.provides = Object.create(s)), n[e] = t;
  }
}
function Dt(e, t, n = !1) {
  const s = z || fe;
  if (s) {
    const r = s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && M(t) ? t.call(s.proxy) : t;
  }
}
const Mt = {};
function cn(e, t, n) {
  return ar(e, t, n);
}
function ar(e, t, { immediate: n, deep: s, flush: r, onTrack: o, onTrigger: i } = K) {
  const l = qr() === (z == null ? void 0 : z.scope) ? z : null;
  let u, a = !1, _ = !1;
  if (ee(e) ? (u = () => e.value, a = Vt(e)) : rt(e) ? (u = () => e, s = !0) : A(e) ? (_ = !0, a = e.some((I) => rt(I) || Vt(I)), u = () => e.map((I) => {
    if (ee(I))
      return I.value;
    if (rt(I))
      return Ye(I);
    if (M(I))
      return Le(
        I,
        l,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
  })) : M(e) ? t ? u = () => Le(
    e,
    l,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : u = () => {
    if (!(l && l.isUnmounted))
      return E && E(), ae(e, l, 3, [b]);
  } : u = be, t && s) {
    const I = u;
    u = () => Ye(I());
  }
  let E, b = (I) => {
    E = L.onStop = () => {
      Le(
        I,
        l,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, U;
  if (Ct)
    if (b = be, t ? n && ae(t, l, 3, [
      u(),
      _ ? [] : void 0,
      b
    ]) : u(), r === "sync") {
      const I = ji();
      U = I.__watcherHandles || (I.__watcherHandles = []);
    } else
      return be;
  let P = _ ? new Array(e.length).fill(Mt) : Mt;
  const T = () => {
    if (L.active)
      if (t) {
        const I = L.run();
        (s || a || (_ ? I.some((j, J) => ht(j, P[J])) : ht(I, P))) && (E && E(), ae(t, l, 3, [
          I,
          // pass undefined as the old value when it's changed for the first time
          P === Mt ? void 0 : _ && P[0] === Mt ? [] : P,
          b
        ]), P = I);
      } else
        L.run();
  };
  T.allowRecurse = !!t;
  let B;
  r === "sync" ? B = T : r === "post" ? B = () => re(T, l && l.suspense) : (T.pre = !0, l && (T.id = l.uid), B = () => Wn(T));
  const L = new Dn(u, B);
  t ? n ? T() : P = L.run() : r === "post" ? re(L.run.bind(L), l && l.suspense) : L.run();
  const te = () => {
    L.stop(), l && l.scope && Mn(l.scope.effects, L);
  };
  return U && U.push(te), te;
}
function Go(e, t, n) {
  const s = this.proxy, r = q(e) ? e.includes(".") ? dr(s, e) : () => s[e] : e.bind(s, s);
  let o;
  M(t) ? o = t : (o = t.handler, n = t);
  const i = z;
  lt(this);
  const l = ar(r, o.bind(s), n);
  return i ? lt(i) : Ze(), l;
}
function dr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
function Ye(e, t) {
  if (!W(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), ee(e))
    Ye(e.value, t);
  else if (A(e))
    for (let n = 0; n < e.length; n++)
      Ye(e[n], t);
  else if (Xt(e) || st(e))
    e.forEach((n) => {
      Ye(n, t);
    });
  else if (Hs(e))
    for (const n in e)
      Ye(e[n], t);
  return e;
}
function $o() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Bn(() => {
    e.isMounted = !0;
  }), hr(() => {
    e.isUnmounting = !0;
  }), e;
}
const ue = [Function, Array], Xo = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: ue,
    onEnter: ue,
    onAfterEnter: ue,
    onEnterCancelled: ue,
    // leave
    onBeforeLeave: ue,
    onLeave: ue,
    onAfterLeave: ue,
    onLeaveCancelled: ue,
    // appear
    onBeforeAppear: ue,
    onAppear: ue,
    onAfterAppear: ue,
    onAppearCancelled: ue
  },
  setup(e, { slots: t }) {
    const n = wi(), s = $o();
    let r;
    return () => {
      const o = t.default && gr(t.default(), !0);
      if (!o || !o.length)
        return;
      let i = o[0];
      if (o.length > 1) {
        for (const T of o)
          if (T.type !== Re) {
            i = T;
            break;
          }
      }
      const l = k(e), { mode: u } = l;
      if (s.isLeaving)
        return un(i);
      const a = ps(i);
      if (!a)
        return un(i);
      const _ = xn(a, l, s, n);
      Cn(a, _);
      const E = n.subTree, b = E && ps(E);
      let U = !1;
      const { getTransitionKey: P } = a.type;
      if (P) {
        const T = P();
        r === void 0 ? r = T : T !== r && (r = T, U = !0);
      }
      if (b && b.type !== Re && (!$e(a, b) || U)) {
        const T = xn(b, l, s, n);
        if (Cn(b, T), u === "out-in")
          return s.isLeaving = !0, T.afterLeave = () => {
            s.isLeaving = !1, n.update.active !== !1 && n.update();
          }, un(i);
        u === "in-out" && a.type !== Re && (T.delayLeave = (B, L, te) => {
          const I = pr(s, b);
          I[String(b.key)] = b, B._leaveCb = () => {
            L(), B._leaveCb = void 0, delete _.delayedLeave;
          }, _.delayedLeave = te;
        });
      }
      return i;
    };
  }
}, zo = Xo;
function pr(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function xn(e, t, n, s) {
  const { appear: r, mode: o, persisted: i = !1, onBeforeEnter: l, onEnter: u, onAfterEnter: a, onEnterCancelled: _, onBeforeLeave: E, onLeave: b, onAfterLeave: U, onLeaveCancelled: P, onBeforeAppear: T, onAppear: B, onAfterAppear: L, onAppearCancelled: te } = t, I = String(e.key), j = pr(n, e), J = (w, Y) => {
    w && ae(w, s, 9, Y);
  }, Je = (w, Y) => {
    const G = Y[1];
    J(w, Y), A(w) ? w.every((ie) => ie.length <= 1) && G() : w.length <= 1 && G();
  }, we = {
    mode: o,
    persisted: i,
    beforeEnter(w) {
      let Y = l;
      if (!n.isMounted)
        if (r)
          Y = T || l;
        else
          return;
      w._leaveCb && w._leaveCb(
        !0
        /* cancelled */
      );
      const G = j[I];
      G && $e(e, G) && G.el._leaveCb && G.el._leaveCb(), J(Y, [w]);
    },
    enter(w) {
      let Y = u, G = a, ie = _;
      if (!n.isMounted)
        if (r)
          Y = B || u, G = L || a, ie = te || _;
        else
          return;
      let ve = !1;
      const Oe = w._enterCb = (ft) => {
        ve || (ve = !0, ft ? J(ie, [w]) : J(G, [w]), we.delayedLeave && we.delayedLeave(), w._enterCb = void 0);
      };
      Y ? Je(Y, [w, Oe]) : Oe();
    },
    leave(w, Y) {
      const G = String(e.key);
      if (w._enterCb && w._enterCb(
        !0
        /* cancelled */
      ), n.isUnmounting)
        return Y();
      J(E, [w]);
      let ie = !1;
      const ve = w._leaveCb = (Oe) => {
        ie || (ie = !0, Y(), Oe ? J(P, [w]) : J(U, [w]), w._leaveCb = void 0, j[G] === e && delete j[G]);
      };
      j[G] = e, b ? Je(b, [w, ve]) : ve();
    },
    clone(w) {
      return xn(w, t, n, s);
    }
  };
  return we;
}
function un(e) {
  if (Jt(e))
    return e = He(e), e.children = null, e;
}
function ps(e) {
  return Jt(e) ? e.children ? e.children[0] : void 0 : e;
}
function Cn(e, t) {
  e.shapeFlag & 6 && e.component ? Cn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function gr(e, t = !1, n) {
  let s = [], r = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === ge ? (i.patchFlag & 128 && r++, s = s.concat(gr(i.children, t, l))) : (t || i.type !== Re) && s.push(l != null ? He(i, { key: l }) : i);
  }
  if (r > 1)
    for (let o = 0; o < s.length; o++)
      s[o].patchFlag = -2;
  return s;
}
function _r(e) {
  return M(e) ? { setup: e, name: e.name } : e;
}
const kt = (e) => !!e.type.__asyncLoader, Jt = (e) => e.type.__isKeepAlive;
function Yo(e, t) {
  mr(e, "a", t);
}
function qo(e, t) {
  mr(e, "da", t);
}
function mr(e, t, n = z) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Qt(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Jt(r.parent.vnode) && Zo(s, t, n, r), r = r.parent;
  }
}
function Zo(e, t, n, s) {
  const r = Qt(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  br(() => {
    Mn(s[t], r);
  }, n);
}
function Qt(e, t, n = z, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      ct(), lt(n);
      const l = ae(t, n, e, i);
      return Ze(), ut(), l;
    });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const Me = (e) => (t, n = z) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Ct || e === "sp") && Qt(e, (...s) => t(...s), n)
), Jo = Me(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), Bn = Me(
  "m"
  /* LifecycleHooks.MOUNTED */
), Qo = Me(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), ei = Me(
  "u"
  /* LifecycleHooks.UPDATED */
), hr = Me(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), br = Me(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), ti = Me(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), ni = Me(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), si = Me(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function ri(e, t = z) {
  Qt("ec", e, t);
}
function fn(e, t) {
  const n = fe;
  if (n === null)
    return e;
  const s = nn(n) || n.proxy, r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, l, u, a = K] = t[o];
    i && (M(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Ye(l), r.push({
      dir: i,
      instance: s,
      value: l,
      oldValue: void 0,
      arg: u,
      modifiers: a
    }));
  }
  return e;
}
function Ke(e, t, n, s) {
  const r = e.dirs, o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    o && (l.oldValue = o[i].value);
    let u = l.dir[s];
    u && (ct(), ae(u, n, 8, [
      e.el,
      l,
      e,
      t
    ]), ut());
  }
}
const oi = Symbol(), Un = (e) => e ? Ar(e) ? nn(e) || e.proxy : Un(e.parent) : null, pt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Z(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Un(e.parent),
    $root: (e) => Un(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Gn(e),
    $forceUpdate: (e) => e.f || (e.f = () => Wn(e.update)),
    $nextTick: (e) => e.n || (e.n = or.bind(e.proxy)),
    $watch: (e) => Go.bind(e)
  })
), an = (e, t) => e !== K && !e.__isScriptSetup && D(e, t), ii = {
  get({ _: e }, t) {
    const { ctx: n, setupState: s, data: r, props: o, accessCache: i, type: l, appContext: u } = e;
    let a;
    if (t[0] !== "$") {
      const U = i[t];
      if (U !== void 0)
        switch (U) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (an(s, t))
          return i[t] = 1, s[t];
        if (r !== K && D(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && D(a, t)
        )
          return i[t] = 3, o[t];
        if (n !== K && D(n, t))
          return i[t] = 4, n[t];
        On && (i[t] = 0);
      }
    }
    const _ = pt[t];
    let E, b;
    if (_)
      return t === "$attrs" && oe(e, "get", t), _(e);
    if (
      // css module (injected by vue-loader)
      (E = l.__cssModules) && (E = E[t])
    )
      return E;
    if (n !== K && D(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      b = u.config.globalProperties, D(b, t)
    )
      return b[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: o } = e;
    return an(r, t) ? (r[t] = n, !0) : s !== K && D(s, t) ? (s[t] = n, !0) : D(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o } }, i) {
    let l;
    return !!n[i] || e !== K && D(e, i) || an(t, i) || (l = o[0]) && D(l, i) || D(s, i) || D(pt, i) || D(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : D(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
let On = !0;
function li(e) {
  const t = Gn(e), n = e.proxy, s = e.ctx;
  On = !1, t.beforeCreate && gs(
    t.beforeCreate,
    e,
    "bc"
    /* LifecycleHooks.BEFORE_CREATE */
  );
  const {
    // state
    data: r,
    computed: o,
    methods: i,
    watch: l,
    provide: u,
    inject: a,
    // lifecycle
    created: _,
    beforeMount: E,
    mounted: b,
    beforeUpdate: U,
    updated: P,
    activated: T,
    deactivated: B,
    beforeDestroy: L,
    beforeUnmount: te,
    destroyed: I,
    unmounted: j,
    render: J,
    renderTracked: Je,
    renderTriggered: we,
    errorCaptured: w,
    serverPrefetch: Y,
    // public API
    expose: G,
    inheritAttrs: ie,
    // assets
    components: ve,
    directives: Oe,
    filters: ft
  } = t;
  if (a && ci(a, s, null, e.appContext.config.unwrapInjectedRef), i)
    for (const $ in i) {
      const H = i[$];
      M(H) && (s[$] = H.bind(n));
    }
  if (r) {
    const $ = r.call(n, n);
    W($) && (e.data = Hn($));
  }
  if (On = !0, o)
    for (const $ in o) {
      const H = o[$], Ve = M(H) ? H.bind(n, n) : M(H.get) ? H.get.bind(n, n) : be, Ot = !M(H) && M(H.set) ? H.set.bind(n) : be, je = Hi({
        get: Ve,
        set: Ot
      });
      Object.defineProperty(s, $, {
        enumerable: !0,
        configurable: !0,
        get: () => je.value,
        set: (ye) => je.value = ye
      });
    }
  if (l)
    for (const $ in l)
      vr(l[$], s, n, $);
  if (u) {
    const $ = M(u) ? u.call(n) : u;
    Reflect.ownKeys($).forEach((H) => {
      Bo(H, $[H]);
    });
  }
  _ && gs(
    _,
    e,
    "c"
    /* LifecycleHooks.CREATED */
  );
  function ne($, H) {
    A(H) ? H.forEach((Ve) => $(Ve.bind(n))) : H && $(H.bind(n));
  }
  if (ne(Jo, E), ne(Bn, b), ne(Qo, U), ne(ei, P), ne(Yo, T), ne(qo, B), ne(ri, w), ne(si, Je), ne(ni, we), ne(hr, te), ne(br, j), ne(ti, Y), A(G))
    if (G.length) {
      const $ = e.exposed || (e.exposed = {});
      G.forEach((H) => {
        Object.defineProperty($, H, {
          get: () => n[H],
          set: (Ve) => n[H] = Ve
        });
      });
    } else
      e.exposed || (e.exposed = {});
  J && e.render === be && (e.render = J), ie != null && (e.inheritAttrs = ie), ve && (e.components = ve), Oe && (e.directives = Oe);
}
function ci(e, t, n = be, s = !1) {
  A(e) && (e = Sn(e));
  for (const r in e) {
    const o = e[r];
    let i;
    W(o) ? "default" in o ? i = Dt(
      o.from || r,
      o.default,
      !0
      /* treat default function as factory */
    ) : i = Dt(o.from || r) : i = Dt(o), ee(i) && s ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : t[r] = i;
  }
}
function gs(e, t, n) {
  ae(A(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function vr(e, t, n, s) {
  const r = s.includes(".") ? dr(n, s) : () => n[s];
  if (q(e)) {
    const o = t[e];
    M(o) && cn(r, o);
  } else if (M(e))
    cn(r, e.bind(n));
  else if (W(e))
    if (A(e))
      e.forEach((o) => vr(o, t, n, s));
    else {
      const o = M(e.handler) ? e.handler.bind(n) : t[e.handler];
      M(o) && cn(r, o, e);
    }
}
function Gn(e) {
  const t = e.type, { mixins: n, extends: s } = t, { mixins: r, optionsCache: o, config: { optionMergeStrategies: i } } = e.appContext, l = o.get(t);
  let u;
  return l ? u = l : !r.length && !n && !s ? u = t : (u = {}, r.length && r.forEach((a) => Kt(u, a, i, !0)), Kt(u, t, i)), W(t) && o.set(t, u), u;
}
function Kt(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && Kt(e, o, n, !0), r && r.forEach((i) => Kt(e, i, n, !0));
  for (const i in t)
    if (!(s && i === "expose")) {
      const l = ui[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const ui = {
  data: _s,
  props: Be,
  emits: Be,
  // objects
  methods: Be,
  computed: Be,
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
  components: Be,
  directives: Be,
  // watch
  watch: ai,
  // provide / inject
  provide: _s,
  inject: fi
};
function _s(e, t) {
  return t ? e ? function() {
    return Z(M(e) ? e.call(this, this) : e, M(t) ? t.call(this, this) : t);
  } : t : e;
}
function fi(e, t) {
  return Be(Sn(e), Sn(t));
}
function Sn(e) {
  if (A(e)) {
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
function Be(e, t) {
  return e ? Z(Z(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function ai(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = Z(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = se(e[s], t[s]);
  return n;
}
function di(e, t, n, s = !1) {
  const r = {}, o = {};
  Ht(o, tn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), yr(e, t, r, o);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  n ? e.props = s ? r : Uo(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function pi(e, t, n, s) {
  const { props: r, attrs: o, vnode: { patchFlag: i } } = e, l = k(r), [u] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const _ = e.vnode.dynamicProps;
      for (let E = 0; E < _.length; E++) {
        let b = _[E];
        if (Zt(e.emitsOptions, b))
          continue;
        const U = t[b];
        if (u)
          if (D(o, b))
            U !== o[b] && (o[b] = U, a = !0);
          else {
            const P = Ae(b);
            r[P] = Tn(
              u,
              l,
              P,
              U,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          U !== o[b] && (o[b] = U, a = !0);
      }
    }
  } else {
    yr(e, t, r, o) && (a = !0);
    let _;
    for (const E in l)
      (!t || // for camelCase
      !D(t, E) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((_ = _e(E)) === E || !D(t, _))) && (u ? n && // for camelCase
      (n[E] !== void 0 || // for kebab-case
      n[_] !== void 0) && (r[E] = Tn(
        u,
        l,
        E,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete r[E]);
    if (o !== l)
      for (const E in o)
        (!t || !D(t, E)) && (delete o[E], a = !0);
  }
  a && Pe(e, "set", "$attrs");
}
function yr(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let u in t) {
      if (wt(u))
        continue;
      const a = t[u];
      let _;
      r && D(r, _ = Ae(u)) ? !o || !o.includes(_) ? n[_] = a : (l || (l = {}))[_] = a : Zt(e.emitsOptions, u) || (!(u in s) || a !== s[u]) && (s[u] = a, i = !0);
    }
  if (o) {
    const u = k(n), a = l || K;
    for (let _ = 0; _ < o.length; _++) {
      const E = o[_];
      n[E] = Tn(r, u, E, a[E], e, !D(a, E));
    }
  }
  return i;
}
function Tn(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const l = D(i, "default");
    if (l && s === void 0) {
      const u = i.default;
      if (i.type !== Function && M(u)) {
        const { propsDefaults: a } = r;
        n in a ? s = a[n] : (lt(r), s = a[n] = u.call(null, t), Ze());
      } else
        s = u;
    }
    i[
      0
      /* BooleanFlags.shouldCast */
    ] && (o && !l ? s = !1 : i[
      1
      /* BooleanFlags.shouldCastTrue */
    ] && (s === "" || s === _e(n)) && (s = !0));
  }
  return s;
}
function Er(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const o = e.props, i = {}, l = [];
  let u = !1;
  if (!M(e)) {
    const _ = (E) => {
      u = !0;
      const [b, U] = Er(E, t, !0);
      Z(i, b), U && l.push(...U);
    };
    !n && t.mixins.length && t.mixins.forEach(_), e.extends && _(e.extends), e.mixins && e.mixins.forEach(_);
  }
  if (!o && !u)
    return W(e) && s.set(e, nt), nt;
  if (A(o))
    for (let _ = 0; _ < o.length; _++) {
      const E = Ae(o[_]);
      ms(E) && (i[E] = K);
    }
  else if (o)
    for (const _ in o) {
      const E = Ae(_);
      if (ms(E)) {
        const b = o[_], U = i[E] = A(b) || M(b) ? { type: b } : Object.assign({}, b);
        if (U) {
          const P = vs(Boolean, U.type), T = vs(String, U.type);
          U[
            0
            /* BooleanFlags.shouldCast */
          ] = P > -1, U[
            1
            /* BooleanFlags.shouldCastTrue */
          ] = T < 0 || P < T, (P > -1 || D(U, "default")) && l.push(E);
        }
      }
    }
  const a = [i, l];
  return W(e) && s.set(e, a), a;
}
function ms(e) {
  return e[0] !== "$";
}
function hs(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function bs(e, t) {
  return hs(e) === hs(t);
}
function vs(e, t) {
  return A(t) ? t.findIndex((n) => bs(n, e)) : M(t) && bs(t, e) ? 0 : -1;
}
const xr = (e) => e[0] === "_" || e === "$stable", $n = (e) => A(e) ? e.map(Ce) : [Ce(e)], gi = (e, t, n) => {
  if (t._n)
    return t;
  const s = Lo((...r) => $n(t(...r)), n);
  return s._c = !1, s;
}, Cr = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (xr(r))
      continue;
    const o = e[r];
    if (M(o))
      t[r] = gi(r, o, s);
    else if (o != null) {
      const i = $n(o);
      t[r] = () => i;
    }
  }
}, Ur = (e, t) => {
  const n = $n(t);
  e.slots.default = () => n;
}, _i = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = k(t), Ht(t, "_", n)) : Cr(t, e.slots = {});
  } else
    e.slots = {}, t && Ur(e, t);
  Ht(e.slots, tn, 1);
}, mi = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let o = !0, i = K;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? o = !1 : (Z(r, t), !n && l === 1 && delete r._) : (o = !t.$stable, Cr(t, r)), i = t;
  } else
    t && (Ur(e, t), i = { default: 1 });
  if (o)
    for (const l in r)
      !xr(l) && !(l in i) && delete r[l];
};
function Or() {
  return {
    app: null,
    config: {
      isNativeTag: jr,
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
let hi = 0;
function bi(e, t) {
  return function(s, r = null) {
    M(s) || (s = Object.assign({}, s)), r != null && !W(r) && (r = null);
    const o = Or(), i = /* @__PURE__ */ new Set();
    let l = !1;
    const u = o.app = {
      _uid: hi++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Ki,
      get config() {
        return o.config;
      },
      set config(a) {
      },
      use(a, ..._) {
        return i.has(a) || (a && M(a.install) ? (i.add(a), a.install(u, ..._)) : M(a) && (i.add(a), a(u, ..._))), u;
      },
      mixin(a) {
        return o.mixins.includes(a) || o.mixins.push(a), u;
      },
      component(a, _) {
        return _ ? (o.components[a] = _, u) : o.components[a];
      },
      directive(a, _) {
        return _ ? (o.directives[a] = _, u) : o.directives[a];
      },
      mount(a, _, E) {
        if (!l) {
          const b = Ie(s, r);
          return b.appContext = o, _ && t ? t(b, a) : e(b, a, E), l = !0, u._container = a, a.__vue_app__ = u, nn(b.component) || b.component.proxy;
        }
      },
      unmount() {
        l && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide(a, _) {
        return o.provides[a] = _, u;
      }
    };
    return u;
  };
}
function An(e, t, n, s, r = !1) {
  if (A(e)) {
    e.forEach((b, U) => An(b, t && (A(t) ? t[U] : t), n, s, r));
    return;
  }
  if (kt(s) && !r)
    return;
  const o = s.shapeFlag & 4 ? nn(s.component) || s.component.proxy : s.el, i = r ? null : o, { i: l, r: u } = e, a = t && t.r, _ = l.refs === K ? l.refs = {} : l.refs, E = l.setupState;
  if (a != null && a !== u && (q(a) ? (_[a] = null, D(E, a) && (E[a] = null)) : ee(a) && (a.value = null)), M(u))
    Le(u, l, 12, [i, _]);
  else {
    const b = q(u), U = ee(u);
    if (b || U) {
      const P = () => {
        if (e.f) {
          const T = b ? D(E, u) ? E[u] : _[u] : u.value;
          r ? A(T) && Mn(T, o) : A(T) ? T.includes(o) || T.push(o) : b ? (_[u] = [o], D(E, u) && (E[u] = _[u])) : (u.value = [o], e.k && (_[e.k] = u.value));
        } else
          b ? (_[u] = i, D(E, u) && (E[u] = i)) : U && (u.value = i, e.k && (_[e.k] = i));
      };
      i ? (P.id = -1, re(P, n)) : P();
    }
  }
}
const re = Wo;
function vi(e) {
  return yi(e);
}
function yi(e, t) {
  const n = Xr();
  n.__VUE__ = !0;
  const { insert: s, remove: r, patchProp: o, createElement: i, createText: l, createComment: u, setText: a, setElementText: _, parentNode: E, nextSibling: b, setScopeId: U = be, insertStaticContent: P } = e, T = (c, f, d, g = null, p = null, v = null, x = !1, h = null, y = !!f.dynamicChildren) => {
    if (c === f)
      return;
    c && !$e(c, f) && (g = St(c), ye(c, p, v, !0), c = null), f.patchFlag === -2 && (y = !1, f.dynamicChildren = null);
    const { type: m, ref: O, shapeFlag: C } = f;
    switch (m) {
      case en:
        B(c, f, d, g);
        break;
      case Re:
        L(c, f, d, g);
        break;
      case Lt:
        c == null && te(f, d, g, x);
        break;
      case ge:
        ve(c, f, d, g, p, v, x, h, y);
        break;
      default:
        C & 1 ? J(c, f, d, g, p, v, x, h, y) : C & 6 ? Oe(c, f, d, g, p, v, x, h, y) : (C & 64 || C & 128) && m.process(c, f, d, g, p, v, x, h, y, Qe);
    }
    O != null && p && An(O, c && c.ref, v, f || c, !f);
  }, B = (c, f, d, g) => {
    if (c == null)
      s(f.el = l(f.children), d, g);
    else {
      const p = f.el = c.el;
      f.children !== c.children && a(p, f.children);
    }
  }, L = (c, f, d, g) => {
    c == null ? s(f.el = u(f.children || ""), d, g) : f.el = c.el;
  }, te = (c, f, d, g) => {
    [c.el, c.anchor] = P(c.children, f, d, g, c.el, c.anchor);
  }, I = ({ el: c, anchor: f }, d, g) => {
    let p;
    for (; c && c !== f; )
      p = b(c), s(c, d, g), c = p;
    s(f, d, g);
  }, j = ({ el: c, anchor: f }) => {
    let d;
    for (; c && c !== f; )
      d = b(c), r(c), c = d;
    r(f);
  }, J = (c, f, d, g, p, v, x, h, y) => {
    x = x || f.type === "svg", c == null ? Je(f, d, g, p, v, x, h, y) : Y(c, f, p, v, x, h, y);
  }, Je = (c, f, d, g, p, v, x, h) => {
    let y, m;
    const { type: O, props: C, shapeFlag: S, transition: R, dirs: N } = c;
    if (y = c.el = i(c.type, v, C && C.is, C), S & 8 ? _(y, c.children) : S & 16 && w(c.children, y, null, g, p, v && O !== "foreignObject", x, h), N && Ke(c, null, g, "created"), we(y, c, c.scopeId, x, g), C) {
      for (const F in C)
        F !== "value" && !wt(F) && o(y, F, null, C[F], v, c.children, g, p, Se);
      "value" in C && o(y, "value", null, C.value), (m = C.onVnodeBeforeMount) && xe(m, g, c);
    }
    N && Ke(c, null, g, "beforeMount");
    const V = (!p || p && !p.pendingBranch) && R && !R.persisted;
    V && R.beforeEnter(y), s(y, f, d), ((m = C && C.onVnodeMounted) || V || N) && re(() => {
      m && xe(m, g, c), V && R.enter(y), N && Ke(c, null, g, "mounted");
    }, p);
  }, we = (c, f, d, g, p) => {
    if (d && U(c, d), g)
      for (let v = 0; v < g.length; v++)
        U(c, g[v]);
    if (p) {
      let v = p.subTree;
      if (f === v) {
        const x = p.vnode;
        we(c, x, x.scopeId, x.slotScopeIds, p.parent);
      }
    }
  }, w = (c, f, d, g, p, v, x, h, y = 0) => {
    for (let m = y; m < c.length; m++) {
      const O = c[m] = h ? De(c[m]) : Ce(c[m]);
      T(null, O, f, d, g, p, v, x, h);
    }
  }, Y = (c, f, d, g, p, v, x) => {
    const h = f.el = c.el;
    let { patchFlag: y, dynamicChildren: m, dirs: O } = f;
    y |= c.patchFlag & 16;
    const C = c.props || K, S = f.props || K;
    let R;
    d && We(d, !1), (R = S.onVnodeBeforeUpdate) && xe(R, d, f, c), O && Ke(f, c, d, "beforeUpdate"), d && We(d, !0);
    const N = p && f.type !== "foreignObject";
    if (m ? G(c.dynamicChildren, m, h, d, g, N, v) : x || H(c, f, h, null, d, g, N, v, !1), y > 0) {
      if (y & 16)
        ie(h, f, C, S, d, g, p);
      else if (y & 2 && C.class !== S.class && o(h, "class", null, S.class, p), y & 4 && o(h, "style", C.style, S.style, p), y & 8) {
        const V = f.dynamicProps;
        for (let F = 0; F < V.length; F++) {
          const X = V[F], de = C[X], et = S[X];
          (et !== de || X === "value") && o(h, X, de, et, p, c.children, d, g, Se);
        }
      }
      y & 1 && c.children !== f.children && _(h, f.children);
    } else
      !x && m == null && ie(h, f, C, S, d, g, p);
    ((R = S.onVnodeUpdated) || O) && re(() => {
      R && xe(R, d, f, c), O && Ke(f, c, d, "updated");
    }, g);
  }, G = (c, f, d, g, p, v, x) => {
    for (let h = 0; h < f.length; h++) {
      const y = c[h], m = f[h], O = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === ge || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !$e(y, m) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 70) ? E(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          d
        )
      );
      T(y, m, O, null, g, p, v, x, !0);
    }
  }, ie = (c, f, d, g, p, v, x) => {
    if (d !== g) {
      if (d !== K)
        for (const h in d)
          !wt(h) && !(h in g) && o(c, h, d[h], null, x, f.children, p, v, Se);
      for (const h in g) {
        if (wt(h))
          continue;
        const y = g[h], m = d[h];
        y !== m && h !== "value" && o(c, h, m, y, x, f.children, p, v, Se);
      }
      "value" in g && o(c, "value", d.value, g.value);
    }
  }, ve = (c, f, d, g, p, v, x, h, y) => {
    const m = f.el = c ? c.el : l(""), O = f.anchor = c ? c.anchor : l("");
    let { patchFlag: C, dynamicChildren: S, slotScopeIds: R } = f;
    R && (h = h ? h.concat(R) : R), c == null ? (s(m, d, g), s(O, d, g), w(f.children, d, O, p, v, x, h, y)) : C > 0 && C & 64 && S && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (G(c.dynamicChildren, S, d, p, v, x, h), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || p && f === p.subTree) && Sr(
      c,
      f,
      !0
      /* shallow */
    )) : H(c, f, d, O, p, v, x, h, y);
  }, Oe = (c, f, d, g, p, v, x, h, y) => {
    f.slotScopeIds = h, c == null ? f.shapeFlag & 512 ? p.ctx.activate(f, d, g, x, y) : ft(f, d, g, p, v, x, y) : Yn(c, f, y);
  }, ft = (c, f, d, g, p, v, x) => {
    const h = c.component = Mi(c, g, p);
    if (Jt(c) && (h.ctx.renderer = Qe), Ni(h), h.asyncDep) {
      if (p && p.registerDep(h, ne), !c.el) {
        const y = h.subTree = Ie(Re);
        L(null, y, f, d);
      }
      return;
    }
    ne(h, c, f, d, p, v, x);
  }, Yn = (c, f, d) => {
    const g = f.component = c.component;
    if (Vo(c, f, d))
      if (g.asyncDep && !g.asyncResolved) {
        $(g, f, d);
        return;
      } else
        g.next = f, wo(g.update), g.update();
    else
      f.el = c.el, g.vnode = f;
  }, ne = (c, f, d, g, p, v, x) => {
    const h = () => {
      if (c.isMounted) {
        let { next: O, bu: C, u: S, parent: R, vnode: N } = c, V = O, F;
        We(c, !1), O ? (O.el = N.el, $(c, O, x)) : O = N, C && Nt(C), (F = O.props && O.props.onVnodeBeforeUpdate) && xe(F, R, O, N), We(c, !0);
        const X = ln(c), de = c.subTree;
        c.subTree = X, T(
          de,
          X,
          // parent may have changed if it's in a teleport
          E(de.el),
          // anchor may have changed if it's in a fragment
          St(de),
          c,
          p,
          v
        ), O.el = X.el, V === null && jo(c, X.el), S && re(S, p), (F = O.props && O.props.onVnodeUpdated) && re(() => xe(F, R, O, N), p);
      } else {
        let O;
        const { el: C, props: S } = f, { bm: R, m: N, parent: V } = c, F = kt(f);
        if (We(c, !1), R && Nt(R), !F && (O = S && S.onVnodeBeforeMount) && xe(O, V, f), We(c, !0), C && rn) {
          const X = () => {
            c.subTree = ln(c), rn(C, c.subTree, c, p, null);
          };
          F ? f.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !c.isUnmounted && X()
          ) : X();
        } else {
          const X = c.subTree = ln(c);
          T(null, X, d, g, c, p, v), f.el = X.el;
        }
        if (N && re(N, p), !F && (O = S && S.onVnodeMounted)) {
          const X = f;
          re(() => xe(O, V, X), p);
        }
        (f.shapeFlag & 256 || V && kt(V.vnode) && V.vnode.shapeFlag & 256) && c.a && re(c.a, p), c.isMounted = !0, f = d = g = null;
      }
    }, y = c.effect = new Dn(
      h,
      () => Wn(m),
      c.scope
      // track it in component's effect scope
    ), m = c.update = () => y.run();
    m.id = c.uid, We(c, !0), m();
  }, $ = (c, f, d) => {
    f.component = c;
    const g = c.vnode.props;
    c.vnode = f, c.next = null, pi(c, f.props, g, d), mi(c, f.children, d), ct(), as(), ut();
  }, H = (c, f, d, g, p, v, x, h, y = !1) => {
    const m = c && c.children, O = c ? c.shapeFlag : 0, C = f.children, { patchFlag: S, shapeFlag: R } = f;
    if (S > 0) {
      if (S & 128) {
        Ot(m, C, d, g, p, v, x, h, y);
        return;
      } else if (S & 256) {
        Ve(m, C, d, g, p, v, x, h, y);
        return;
      }
    }
    R & 8 ? (O & 16 && Se(m, p, v), C !== m && _(d, C)) : O & 16 ? R & 16 ? Ot(m, C, d, g, p, v, x, h, y) : Se(m, p, v, !0) : (O & 8 && _(d, ""), R & 16 && w(C, d, g, p, v, x, h, y));
  }, Ve = (c, f, d, g, p, v, x, h, y) => {
    c = c || nt, f = f || nt;
    const m = c.length, O = f.length, C = Math.min(m, O);
    let S;
    for (S = 0; S < C; S++) {
      const R = f[S] = y ? De(f[S]) : Ce(f[S]);
      T(c[S], R, d, null, p, v, x, h, y);
    }
    m > O ? Se(c, p, v, !0, !1, C) : w(f, d, g, p, v, x, h, y, C);
  }, Ot = (c, f, d, g, p, v, x, h, y) => {
    let m = 0;
    const O = f.length;
    let C = c.length - 1, S = O - 1;
    for (; m <= C && m <= S; ) {
      const R = c[m], N = f[m] = y ? De(f[m]) : Ce(f[m]);
      if ($e(R, N))
        T(R, N, d, null, p, v, x, h, y);
      else
        break;
      m++;
    }
    for (; m <= C && m <= S; ) {
      const R = c[C], N = f[S] = y ? De(f[S]) : Ce(f[S]);
      if ($e(R, N))
        T(R, N, d, null, p, v, x, h, y);
      else
        break;
      C--, S--;
    }
    if (m > C) {
      if (m <= S) {
        const R = S + 1, N = R < O ? f[R].el : g;
        for (; m <= S; )
          T(null, f[m] = y ? De(f[m]) : Ce(f[m]), d, N, p, v, x, h, y), m++;
      }
    } else if (m > S)
      for (; m <= C; )
        ye(c[m], p, v, !0), m++;
    else {
      const R = m, N = m, V = /* @__PURE__ */ new Map();
      for (m = N; m <= S; m++) {
        const le = f[m] = y ? De(f[m]) : Ce(f[m]);
        le.key != null && V.set(le.key, m);
      }
      let F, X = 0;
      const de = S - N + 1;
      let et = !1, Jn = 0;
      const at = new Array(de);
      for (m = 0; m < de; m++)
        at[m] = 0;
      for (m = R; m <= C; m++) {
        const le = c[m];
        if (X >= de) {
          ye(le, p, v, !0);
          continue;
        }
        let Ee;
        if (le.key != null)
          Ee = V.get(le.key);
        else
          for (F = N; F <= S; F++)
            if (at[F - N] === 0 && $e(le, f[F])) {
              Ee = F;
              break;
            }
        Ee === void 0 ? ye(le, p, v, !0) : (at[Ee - N] = m + 1, Ee >= Jn ? Jn = Ee : et = !0, T(le, f[Ee], d, null, p, v, x, h, y), X++);
      }
      const Qn = et ? Ei(at) : nt;
      for (F = Qn.length - 1, m = de - 1; m >= 0; m--) {
        const le = N + m, Ee = f[le], es = le + 1 < O ? f[le + 1].el : g;
        at[m] === 0 ? T(null, Ee, d, es, p, v, x, h, y) : et && (F < 0 || m !== Qn[F] ? je(
          Ee,
          d,
          es,
          2
          /* MoveType.REORDER */
        ) : F--);
      }
    }
  }, je = (c, f, d, g, p = null) => {
    const { el: v, type: x, transition: h, children: y, shapeFlag: m } = c;
    if (m & 6) {
      je(c.component.subTree, f, d, g);
      return;
    }
    if (m & 128) {
      c.suspense.move(f, d, g);
      return;
    }
    if (m & 64) {
      x.move(c, f, d, Qe);
      return;
    }
    if (x === ge) {
      s(v, f, d);
      for (let C = 0; C < y.length; C++)
        je(y[C], f, d, g);
      s(c.anchor, f, d);
      return;
    }
    if (x === Lt) {
      I(c, f, d);
      return;
    }
    if (g !== 2 && m & 1 && h)
      if (g === 0)
        h.beforeEnter(v), s(v, f, d), re(() => h.enter(v), p);
      else {
        const { leave: C, delayLeave: S, afterLeave: R } = h, N = () => s(v, f, d), V = () => {
          C(v, () => {
            N(), R && R();
          });
        };
        S ? S(v, N, V) : V();
      }
    else
      s(v, f, d);
  }, ye = (c, f, d, g = !1, p = !1) => {
    const { type: v, props: x, ref: h, children: y, dynamicChildren: m, shapeFlag: O, patchFlag: C, dirs: S } = c;
    if (h != null && An(h, null, d, c, !0), O & 256) {
      f.ctx.deactivate(c);
      return;
    }
    const R = O & 1 && S, N = !kt(c);
    let V;
    if (N && (V = x && x.onVnodeBeforeUnmount) && xe(V, f, c), O & 6)
      Mr(c.component, d, g);
    else {
      if (O & 128) {
        c.suspense.unmount(d, g);
        return;
      }
      R && Ke(c, null, f, "beforeUnmount"), O & 64 ? c.type.remove(c, f, d, p, Qe, g) : m && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (v !== ge || C > 0 && C & 64) ? Se(m, f, d, !1, !0) : (v === ge && C & 384 || !p && O & 16) && Se(y, f, d), g && qn(c);
    }
    (N && (V = x && x.onVnodeUnmounted) || R) && re(() => {
      V && xe(V, f, c), R && Ke(c, null, f, "unmounted");
    }, d);
  }, qn = (c) => {
    const { type: f, el: d, anchor: g, transition: p } = c;
    if (f === ge) {
      Pr(d, g);
      return;
    }
    if (f === Lt) {
      j(c);
      return;
    }
    const v = () => {
      r(d), p && !p.persisted && p.afterLeave && p.afterLeave();
    };
    if (c.shapeFlag & 1 && p && !p.persisted) {
      const { leave: x, delayLeave: h } = p, y = () => x(d, v);
      h ? h(c.el, v, y) : y();
    } else
      v();
  }, Pr = (c, f) => {
    let d;
    for (; c !== f; )
      d = b(c), r(c), c = d;
    r(f);
  }, Mr = (c, f, d) => {
    const { bum: g, scope: p, update: v, subTree: x, um: h } = c;
    g && Nt(g), p.stop(), v && (v.active = !1, ye(x, c, f, d)), h && re(h, f), re(() => {
      c.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, Se = (c, f, d, g = !1, p = !1, v = 0) => {
    for (let x = v; x < c.length; x++)
      ye(c[x], f, d, g, p);
  }, St = (c) => c.shapeFlag & 6 ? St(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : b(c.anchor || c.el), Zn = (c, f, d) => {
    c == null ? f._vnode && ye(f._vnode, null, null, !0) : T(f._vnode || null, c, f, null, null, null, d), as(), lr(), f._vnode = c;
  }, Qe = {
    p: T,
    um: ye,
    m: je,
    r: qn,
    mt: ft,
    mc: w,
    pc: H,
    pbc: G,
    n: St,
    o: e
  };
  let sn, rn;
  return t && ([sn, rn] = t(Qe)), {
    render: Zn,
    hydrate: sn,
    createApp: bi(Zn, sn)
  };
}
function We({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Sr(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (A(s) && A(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let l = r[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[o] = De(r[o]), l.el = i.el), n || Sr(i, l)), l.type === en && (l.el = i.el);
    }
}
function Ei(e) {
  const t = e.slice(), n = [0];
  let s, r, o, i, l;
  const u = e.length;
  for (s = 0; s < u; s++) {
    const a = e[s];
    if (a !== 0) {
      if (r = n[n.length - 1], e[r] < a) {
        t[s] = r, n.push(s);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        l = o + i >> 1, e[n[l]] < a ? o = l + 1 : i = l;
      a < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; )
    n[o] = i, i = t[i];
  return n;
}
const xi = (e) => e.__isTeleport, ge = Symbol(void 0), en = Symbol(void 0), Re = Symbol(void 0), Lt = Symbol(void 0), gt = [];
let he = null;
function dn(e = !1) {
  gt.push(he = e ? null : []);
}
function Ci() {
  gt.pop(), he = gt[gt.length - 1] || null;
}
let Et = 1;
function ys(e) {
  Et += e;
}
function Ui(e) {
  return e.dynamicChildren = Et > 0 ? he || nt : null, Ci(), Et > 0 && he && he.push(e), e;
}
function pn(e, t, n, s, r, o) {
  return Ui(ce(
    e,
    t,
    n,
    s,
    r,
    o,
    !0
    /* isBlock */
  ));
}
function Oi(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function $e(e, t) {
  return e.type === t.type && e.key === t.key;
}
const tn = "__vInternal", Tr = ({ key: e }) => e ?? null, Ft = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? q(e) || ee(e) || M(e) ? { i: fe, r: e, k: t, f: !!n } : e : null;
function ce(e, t = null, n = null, s = 0, r = null, o = e === ge ? 0 : 1, i = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Tr(t),
    ref: t && Ft(t),
    scopeId: fr,
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
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: fe
  };
  return l ? (Xn(u, n), o & 128 && e.normalize(u)) : n && (u.shapeFlag |= q(n) ? 8 : 16), Et > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  he && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && he.push(u), u;
}
const Ie = Si;
function Si(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === oi) && (e = Re), Oi(e)) {
    const l = He(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Xn(l, n), Et > 0 && !o && he && (l.shapeFlag & 6 ? he[he.indexOf(e)] = l : he.push(l)), l.patchFlag |= -2, l;
  }
  if (Fi(e) && (e = e.__vccOpts), t) {
    t = Ti(t);
    let { class: l, style: u } = t;
    l && !q(l) && (t.class = _t(l)), W(u) && (Js(u) && !A(u) && (u = Z({}, u)), t.style = Bt(u));
  }
  const i = q(e) ? 1 : Ko(e) ? 128 : xi(e) ? 64 : W(e) ? 4 : M(e) ? 2 : 0;
  return ce(e, t, n, s, r, i, o, !0);
}
function Ti(e) {
  return e ? Js(e) || tn in e ? Z({}, e) : e : null;
}
function He(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: i } = e, l = t ? Ri(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Tr(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? A(r) ? r.concat(Ft(t)) : [r, Ft(t)] : Ft(t)
    ) : r,
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
    patchFlag: t && e.type !== ge ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && He(e.ssContent),
    ssFallback: e.ssFallback && He(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function xt(e = " ", t = 0) {
  return Ie(en, null, e, t);
}
function Ai(e, t) {
  const n = Ie(Lt, null, e);
  return n.staticCount = t, n;
}
function Ce(e) {
  return e == null || typeof e == "boolean" ? Ie(Re) : A(e) ? Ie(
    ge,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? De(e) : Ie(en, null, String(e));
}
function De(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : He(e);
}
function Xn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (A(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Xn(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(tn in t) ? t._ctx = fe : r === 3 && fe && (fe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    M(t) ? (t = { default: t, _ctx: fe }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [xt(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ri(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = _t([t.class, s.class]));
      else if (r === "style")
        t.style = Bt([t.style, s.style]);
      else if ($t(r)) {
        const o = t[r], i = s[r];
        i && o !== i && !(A(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else
        r !== "" && (t[r] = s[r]);
  }
  return t;
}
function xe(e, t, n, s = null) {
  ae(e, t, 7, [
    n,
    s
  ]);
}
const Ii = Or();
let Pi = 0;
function Mi(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Ii, o = {
    uid: Pi++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new zr(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Er(s, r),
    emitsOptions: ur(s, r),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: K,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: K,
    data: K,
    props: K,
    attrs: K,
    slots: K,
    refs: K,
    setupState: K,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = ko.bind(null, o), e.ce && e.ce(o), o;
}
let z = null;
const wi = () => z || fe, lt = (e) => {
  z = e, e.scope.on();
}, Ze = () => {
  z && z.scope.off(), z = null;
};
function Ar(e) {
  return e.vnode.shapeFlag & 4;
}
let Ct = !1;
function Ni(e, t = !1) {
  Ct = t;
  const { props: n, children: s } = e.vnode, r = Ar(e);
  di(e, n, r, t), _i(e, s);
  const o = r ? Di(e, t) : void 0;
  return Ct = !1, o;
}
function Di(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Qs(new Proxy(e.ctx, ii));
  const { setup: s } = n;
  if (s) {
    const r = e.setupContext = s.length > 1 ? Li(e) : null;
    lt(e), ct();
    const o = Le(s, e, 0, [e.props, r]);
    if (ut(), Ze(), Ls(o)) {
      if (o.then(Ze, Ze), t)
        return o.then((i) => {
          Es(e, i, t);
        }).catch((i) => {
          qt(
            i,
            e,
            0
            /* ErrorCodes.SETUP_FUNCTION */
          );
        });
      e.asyncDep = o;
    } else
      Es(e, o, t);
  } else
    Rr(e, t);
}
function Es(e, t, n) {
  M(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : W(t) && (e.setupState = nr(t)), Rr(e, n);
}
let xs;
function Rr(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && xs && !s.render) {
      const r = s.template || Gn(e).template;
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: u } = s, a = Z(Z({
          isCustomElement: o,
          delimiters: l
        }, i), u);
        s.render = xs(r, a);
      }
    }
    e.render = s.render || be;
  }
  lt(e), ct(), li(e), ut(), Ze();
}
function ki(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return oe(e, "get", "$attrs"), t[n];
    }
  });
}
function Li(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = ki(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function nn(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(nr(Qs(e.exposed)), {
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
function Fi(e) {
  return M(e) && "__vccOpts" in e;
}
const Hi = (e, t) => Io(e, t, Ct), Vi = Symbol(""), ji = () => Dt(Vi), Ki = "3.2.47", Wi = "http://www.w3.org/2000/svg", Xe = typeof document < "u" ? document : null, Cs = Xe && /* @__PURE__ */ Xe.createElement("template"), Bi = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t ? Xe.createElementNS(Wi, e) : Xe.createElement(e, n ? { is: n } : void 0);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => Xe.createTextNode(e),
  createComment: (e) => Xe.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Xe.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, o) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === o || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling)); )
        ;
    else {
      Cs.innerHTML = s ? `<svg>${e}</svg>` : e;
      const l = Cs.content;
      if (s) {
        const u = l.firstChild;
        for (; u.firstChild; )
          l.appendChild(u.firstChild);
        l.removeChild(u);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function Gi(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function $i(e, t, n) {
  const s = e.style, r = q(n);
  if (n && !r) {
    if (t && !q(t))
      for (const o in t)
        n[o] == null && Rn(s, o, "");
    for (const o in n)
      Rn(s, o, n[o]);
  } else {
    const o = s.display;
    r ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (s.display = o);
  }
}
const Us = /\s*!important$/;
function Rn(e, t, n) {
  if (A(n))
    n.forEach((s) => Rn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Xi(e, t);
    Us.test(n) ? e.setProperty(_e(s), n.replace(Us, ""), "important") : e[s] = n;
  }
}
const Os = ["Webkit", "Moz", "ms"], gn = {};
function Xi(e, t) {
  const n = gn[t];
  if (n)
    return n;
  let s = Ae(t);
  if (s !== "filter" && s in e)
    return gn[t] = s;
  s = Vs(s);
  for (let r = 0; r < Os.length; r++) {
    const o = Os[r] + s;
    if (o in e)
      return gn[t] = o;
  }
  return t;
}
const Ss = "http://www.w3.org/1999/xlink";
function zi(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Ss, t.slice(6, t.length)) : e.setAttributeNS(Ss, t, n);
  else {
    const o = Fr(t);
    n == null || o && !Ns(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
  }
}
function Yi(e, t, n, s, r, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    s && i(s, r, o), e[t] = n ?? "";
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && // custom elements may use _value internally
  !e.tagName.includes("-")) {
    e._value = n;
    const u = n ?? "";
    (e.value !== u || // #4956: always set for OPTION elements because its value falls back to
    // textContent if no value attribute is present. And setting .value for
    // OPTION has no side effect
    e.tagName === "OPTION") && (e.value = u), n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const u = typeof e[t];
    u === "boolean" ? n = Ns(n) : n == null && u === "string" ? (n = "", l = !0) : u === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(t);
}
function ze(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function qi(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
function Zi(e, t, n, s, r = null) {
  const o = e._vei || (e._vei = {}), i = o[t];
  if (s && i)
    i.value = s;
  else {
    const [l, u] = Ji(t);
    if (s) {
      const a = o[t] = tl(s, r);
      ze(e, l, a, u);
    } else
      i && (qi(e, l, i, u), o[t] = void 0);
  }
}
const Ts = /(?:Once|Passive|Capture)$/;
function Ji(e) {
  let t;
  if (Ts.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Ts); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : _e(e.slice(2)), t];
}
let _n = 0;
const Qi = /* @__PURE__ */ Promise.resolve(), el = () => _n || (Qi.then(() => _n = 0), _n = Date.now());
function tl(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    ae(nl(s, n.value), t, 5, [s]);
  };
  return n.value = e, n.attached = el(), n;
}
function nl(e, t) {
  if (A(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((s) => (r) => !r._stopped && s && s(r));
  } else
    return t;
}
const As = /^on[a-z]/, sl = (e, t, n, s, r = !1, o, i, l, u) => {
  t === "class" ? Gi(e, s, r) : t === "style" ? $i(e, n, s) : $t(t) ? Pn(t) || Zi(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : rl(e, t, s, r)) ? Yi(e, t, s, o, i, l, u) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), zi(e, t, s, r));
};
function rl(e, t, n, s) {
  return s ? !!(t === "innerHTML" || t === "textContent" || t in e && As.test(t) && M(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || As.test(t) && q(n) ? !1 : t in e;
}
function ol(e, t) {
  const n = _r(e);
  class s extends zn {
    constructor(o) {
      super(n, o, t);
    }
  }
  return s.def = n, s;
}
const il = typeof HTMLElement < "u" ? HTMLElement : class {
};
class zn extends il {
  constructor(t, n = {}, s) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && s ? s(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, or(() => {
      this._connected || (ws(null, this.shadowRoot), this._instance = null);
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
      for (const r of s)
        this._setAttr(r.attributeName);
    }).observe(this, { attributes: !0 });
    const t = (s, r = !1) => {
      const { props: o, styles: i } = s;
      let l;
      if (o && !A(o))
        for (const u in o) {
          const a = o[u];
          (a === Number || a && a.type === Number) && (u in this._props && (this._props[u] = ns(this._props[u])), (l || (l = /* @__PURE__ */ Object.create(null)))[Ae(u)] = !0);
        }
      this._numberProps = l, r && this._resolveProps(s), this._applyStyles(i), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((s) => t(s, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t, s = A(n) ? n : Object.keys(n || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && s.includes(r) && this._setProp(r, this[r], !0, !1);
    for (const r of s.map(Ae))
      Object.defineProperty(this, r, {
        get() {
          return this._getProp(r);
        },
        set(o) {
          this._setProp(r, o);
        }
      });
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    const s = Ae(t);
    this._numberProps && this._numberProps[s] && (n = ns(n)), this._setProp(s, n, !1);
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
  _setProp(t, n, s = !0, r = !0) {
    n !== this._props[t] && (this._props[t] = n, r && this._instance && this._update(), s && (n === !0 ? this.setAttribute(_e(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(_e(t), n + "") : n || this.removeAttribute(_e(t))));
  }
  _update() {
    ws(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = Ie(this._def, Z({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0;
      const s = (o, i) => {
        this.dispatchEvent(new CustomEvent(o, {
          detail: i
        }));
      };
      n.emit = (o, ...i) => {
        s(o, i), _e(o) !== o && s(_e(o), i);
      };
      let r = this;
      for (; r = r && (r.parentNode || r.host); )
        if (r instanceof zn) {
          n.parent = r._instance, n.provides = r._instance.provides;
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
const ll = {
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
zo.props;
const Wt = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return A(t) ? (n) => Nt(t, n) : t;
};
function cl(e) {
  e.target.composing = !0;
}
function Rs(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ul = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e._assign = Wt(r);
    const o = s || r.props && r.props.type === "number";
    ze(e, t ? "change" : "input", (i) => {
      if (i.target.composing)
        return;
      let l = e.value;
      n && (l = l.trim()), o && (l = mn(l)), e._assign(l);
    }), n && ze(e, "change", () => {
      e.value = e.value.trim();
    }), t || (ze(e, "compositionstart", cl), ze(e, "compositionend", Rs), ze(e, "change", Rs));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: s, number: r } }, o) {
    if (e._assign = Wt(o), e.composing || document.activeElement === e && e.type !== "range" && (n || s && e.value.trim() === t || (r || e.type === "number") && mn(e.value) === t))
      return;
    const i = t ?? "";
    e.value !== i && (e.value = i);
  }
}, Is = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e._assign = Wt(n), ze(e, "change", () => {
      const s = e._modelValue, r = fl(e), o = e.checked, i = e._assign;
      if (A(s)) {
        const l = Ds(s, r), u = l !== -1;
        if (o && !u)
          i(s.concat(r));
        else if (!o && u) {
          const a = [...s];
          a.splice(l, 1), i(a);
        }
      } else if (Xt(s)) {
        const l = new Set(s);
        o ? l.add(r) : l.delete(r), i(l);
      } else
        i(Ir(e, o));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Ps,
  beforeUpdate(e, t, n) {
    e._assign = Wt(n), Ps(e, t, n);
  }
};
function Ps(e, { value: t, oldValue: n }, s) {
  e._modelValue = t, A(t) ? e.checked = Ds(t, s.props.value) > -1 : Xt(t) ? e.checked = t.has(s.props.value) : t !== n && (e.checked = Gt(t, Ir(e, !0)));
}
function fl(e) {
  return "_value" in e ? e._value : e.value;
}
function Ir(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const al = /* @__PURE__ */ Z({ patchProp: sl }, Bi);
let Ms;
function dl() {
  return Ms || (Ms = vi(al));
}
const ws = (...e) => {
  dl().render(...e);
}, pl = { key: 1 }, gl = { id: "controls" }, _l = /* @__PURE__ */ Ai('<datalist id="tickmarks"><option value="0"></option><option value="10"></option><option value="20"></option><option value="30"></option><option value="40"></option><option value="50"></option><option value="60"></option><option value="70"></option><option value="80"></option><option value="90"></option><option value="100"></option></datalist>', 1), ml = /* @__PURE__ */ ce("p", null, [
  /* @__PURE__ */ xt(" ← ↑ → ↓ to move the overlay "),
  /* @__PURE__ */ ce("br"),
  /* @__PURE__ */ xt(" escape to remove the overlay ")
], -1), hl = /* @__PURE__ */ _r({
  __name: "FigmaOverlay.ce",
  setup(e) {
    const t = tt("Load figma component from clipboard"), n = tt(null), s = tt(!1), r = tt(50), o = tt(!1), i = tt(!0), l = (b) => {
      n.value && (n.value.innerHTML = b, s.value = !0, document.addEventListener("keydown", E));
    }, u = () => {
      n.value && (n.value.innerHTML = "", s.value = !1, document.removeEventListener("keydown", E));
    }, a = async () => {
      try {
        const b = await navigator.clipboard.readText();
        b.startsWith("<svg") ? l(b) : (t.value = "No SVG found in clipboard!", window.setTimeout(() => {
          t.value = "Load figma component from clipboard";
        }, 2e3));
      } catch (b) {
        console.error(b);
      }
    }, _ = () => {
      var b;
      (b = n.value) == null || b.addEventListener("mousedown", (U) => {
        if (!n.value)
          return;
        const P = n.value, T = P.getBoundingClientRect(), B = U.clientX - T.left, L = U.clientY - T.top, te = (j) => {
          P.style.top = `${j.clientY - L}px`, P.style.left = `${j.clientX - B}px`;
        }, I = () => {
          document.removeEventListener("mousemove", te), document.removeEventListener("mouseup", I);
        };
        document.addEventListener("mousemove", te), document.addEventListener("mouseup", I);
      });
    }, E = (b) => {
      if (n.value)
        switch (b.preventDefault(), b.stopPropagation(), b.key) {
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
            u();
            break;
        }
    };
    return Bn(() => _()), (b, U) => (dn(), pn(ge, null, [
      ce("div", {
        id: "container",
        class: _t({ alwaysOnTop: i.value, isShowingOverlay: s.value })
      }, [
        s.value ? (dn(), pn("div", pl, [
          ce("div", gl, [
            fn(ce("input", {
              "onUpdate:modelValue": U[0] || (U[0] = (P) => r.value = P),
              type: "range",
              list: "tickmarks",
              min: "0",
              max: "100",
              step: "10"
            }, null, 512), [
              [ul, r.value]
            ]),
            _l,
            ce("label", null, [
              fn(ce("input", {
                "onUpdate:modelValue": U[1] || (U[1] = (P) => i.value = P),
                type: "checkbox",
                name: "alwaysontop",
                checked: ""
              }, null, 512), [
                [Is, i.value]
              ]),
              xt(" Always on top ")
            ]),
            ce("label", null, [
              fn(ce("input", {
                "onUpdate:modelValue": U[2] || (U[2] = (P) => o.value = P),
                type: "checkbox",
                name: "ignoreclicks",
                checked: ""
              }, null, 512), [
                [Is, o.value]
              ]),
              xt(" Ignore clicks ")
            ])
          ]),
          ml,
          ce("button", {
            class: "mt-2",
            type: "button",
            onClick: u
          }, "Remove overlay")
        ])) : (dn(), pn("button", {
          key: 0,
          type: "button",
          onClick: a
        }, Vr(t.value), 1))
      ], 2),
      ce("div", {
        id: "figmaOverlay",
        ref_key: "figmaOverlay",
        ref: n,
        class: _t([o.value ? "pointer-events-none" : "pointer-events-auto"]),
        style: Bt({
          opacity: r.value / 100
        })
      }, null, 6)
    ], 64));
  }
}), bl = `div,button,input,p{margin:0;padding:0}#container{position:absolute;bottom:1rem;left:1rem;padding:16px}#container.isShowingOverlay{border:1px solid #e5e5e5;border-radius:8px;background-color:#fff;box-shadow:#00000026 0 0 6px}#container.alwaysOnTop{z-index:10000}button{background-color:#27313b;color:#dee5ec;font-size:.75rem;line-height:1rem;padding:0 .5rem;border-radius:.25rem;height:28px}#controls{width:100%;margin-bottom:.5rem}input[type=range]{width:100%}p{font-size:.75rem;line-height:1rem}label{padding-left:4px}button,p,input,label{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}#figmaOverlay{position:absolute;z-index:9999;top:0px;left:0px;border:1px dashed #115cac;border-radius:8px;cursor:move}.mt-2{margin-top:.5rem}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}
`, vl = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, yl = /* @__PURE__ */ vl(hl, [["styles", [bl]]]), El = ol(yl);
customElements.define("figma-overlay", El);

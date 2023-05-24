function Un(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
function Vt(e) {
  if (H(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = z(o) ? Lr(o) : Vt(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else {
    if (z(e))
      return e;
    if (j(e))
      return e;
  }
}
const Dr = /;(?![^(]*\))/g, Sr = /:([^]+)/, Br = /\/\*.*?\*\//gs;
function Lr(e) {
  const t = {};
  return e.replace(Br, "").split(Dr).forEach((n) => {
    if (n) {
      const o = n.split(Sr);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Kt(e) {
  let t = "";
  if (z(e))
    t = e;
  else if (H(e))
    for (let n = 0; n < e.length; n++) {
      const o = Kt(e[n]);
      o && (t += o + " ");
    }
  else if (j(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const wr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Gr = /* @__PURE__ */ Un(wr);
function So(e) {
  return !!e || e === "";
}
function Mr(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let o = 0; n && o < e.length; o++)
    n = Wt(e[o], t[o]);
  return n;
}
function Wt(e, t) {
  if (e === t)
    return !0;
  let n = eo(e), o = eo(t);
  if (n || o)
    return n && o ? e.getTime() === t.getTime() : !1;
  if (n = ht(e), o = ht(t), n || o)
    return e === t;
  if (n = H(e), o = H(t), n || o)
    return n && o ? Mr(e, t) : !1;
  if (n = j(e), o = j(t), n || o) {
    if (!n || !o)
      return !1;
    const r = Object.keys(e).length, s = Object.keys(t).length;
    if (r !== s)
      return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i), u = t.hasOwnProperty(i);
      if (l && !u || !l && u || !Wt(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Bo(e, t) {
  return e.findIndex((n) => Wt(n, t));
}
const kr = (e) => z(e) ? e : e == null ? "" : H(e) || j(e) && (e.toString === Go || !x(e.toString)) ? JSON.stringify(e, Lo, 2) : String(e), Lo = (e, t) => t && t.__v_isRef ? Lo(e, t.value) : nt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, r]) => (n[`${o} =>`] = r, n), {})
} : Yt(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : j(t) && !H(t) && !Mo(t) ? String(t) : t, F = {}, tt = [], Ee = () => {
}, Fr = () => !1, jr = /^on[^a-z]/, Xt = (e) => jr.test(e), Cn = (e) => e.startsWith("onUpdate:"), q = Object.assign, xn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Vr = Object.prototype.hasOwnProperty, S = (e, t) => Vr.call(e, t), H = Array.isArray, nt = (e) => Rt(e) === "[object Map]", Yt = (e) => Rt(e) === "[object Set]", eo = (e) => Rt(e) === "[object Date]", x = (e) => typeof e == "function", z = (e) => typeof e == "string", ht = (e) => typeof e == "symbol", j = (e) => e !== null && typeof e == "object", wo = (e) => j(e) && x(e.then) && x(e.catch), Go = Object.prototype.toString, Rt = (e) => Go.call(e), Kr = (e) => Rt(e).slice(8, -1), Mo = (e) => Rt(e) === "[object Object]", Pn = (e) => z(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, xt = /* @__PURE__ */ Un(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), $t = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Wr = /-(\w)/g, He = $t((e) => e.replace(Wr, (t, n) => n ? n.toUpperCase() : "")), Xr = /\B([A-Z])/g, he = $t((e) => e.replace(Xr, "-$1").toLowerCase()), ko = $t((e) => e.charAt(0).toUpperCase() + e.slice(1)), sn = $t((e) => e ? `on${ko(e)}` : ""), mt = (e, t) => !Object.is(e, t), Pt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, wt = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, hn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, to = (e) => {
  const t = z(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let no;
const Yr = () => no || (no = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let de;
class $r {
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
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Jr(e, t = de) {
  t && t.active && t.effects.push(e);
}
function zr() {
  return de;
}
const Dn = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Fo = (e) => (e.w & Ge) > 0, jo = (e) => (e.n & Ge) > 0, qr = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Ge;
}, Zr = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      Fo(r) && !jo(r) ? r.delete(e) : t[n++] = r, r.w &= ~Ge, r.n &= ~Ge;
    }
    t.length = n;
  }
}, mn = /* @__PURE__ */ new WeakMap();
let dt = 0, Ge = 1;
const gn = 30;
let me;
const ze = Symbol(""), En = Symbol("");
class Sn {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Jr(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = me, n = Le;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = me, me = this, Le = !0, Ge = 1 << ++dt, dt <= gn ? qr(this) : oo(this), this.fn();
    } finally {
      dt <= gn && Zr(this), Ge = 1 << --dt, me = this.parent, Le = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    me === this ? this.deferStop = !0 : this.active && (oo(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function oo(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Le = !0;
const Vo = [];
function lt() {
  Vo.push(Le), Le = !1;
}
function ct() {
  const e = Vo.pop();
  Le = e === void 0 ? !0 : e;
}
function se(e, t, n) {
  if (Le && me) {
    let o = mn.get(e);
    o || mn.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = Dn()), Ko(r);
  }
}
function Ko(e, t) {
  let n = !1;
  dt <= gn ? jo(e) || (e.n |= Ge, n = !Fo(e)) : n = !e.has(me), n && (e.add(me), me.deps.push(e));
}
function xe(e, t, n, o, r, s) {
  const i = mn.get(e);
  if (!i)
    return;
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else if (n === "length" && H(e)) {
    const u = Number(o);
    i.forEach((f, h) => {
      (h === "length" || h >= u) && l.push(f);
    });
  } else
    switch (n !== void 0 && l.push(i.get(n)), t) {
      case "add":
        H(e) ? Pn(n) && l.push(i.get("length")) : (l.push(i.get(ze)), nt(e) && l.push(i.get(En)));
        break;
      case "delete":
        H(e) || (l.push(i.get(ze)), nt(e) && l.push(i.get(En)));
        break;
      case "set":
        nt(e) && l.push(i.get(ze));
        break;
    }
  if (l.length === 1)
    l[0] && Tn(l[0]);
  else {
    const u = [];
    for (const f of l)
      f && u.push(...f);
    Tn(Dn(u));
  }
}
function Tn(e, t) {
  const n = H(e) ? e : [...e];
  for (const o of n)
    o.computed && ro(o);
  for (const o of n)
    o.computed || ro(o);
}
function ro(e, t) {
  (e !== me || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const Qr = /* @__PURE__ */ Un("__proto__,__v_isRef,__isVue"), Wo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ht)
), es = /* @__PURE__ */ Bn(), ts = /* @__PURE__ */ Bn(!1, !0), ns = /* @__PURE__ */ Bn(!0), so = /* @__PURE__ */ os();
function os() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = L(this);
      for (let s = 0, i = this.length; s < i; s++)
        se(o, "get", s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(L)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      lt();
      const o = L(this)[t].apply(this, n);
      return ct(), o;
    };
  }), e;
}
function rs(e) {
  const t = L(this);
  return se(t, "has", e), t.hasOwnProperty(e);
}
function Bn(e = !1, t = !1) {
  return function(o, r, s) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && s === (e ? t ? bs : zo : t ? Jo : $o).get(o))
      return o;
    const i = H(o);
    if (!e) {
      if (i && S(so, r))
        return Reflect.get(so, r, s);
      if (r === "hasOwnProperty")
        return rs;
    }
    const l = Reflect.get(o, r, s);
    return (ht(r) ? Wo.has(r) : Qr(r)) || (e || se(o, "get", r), t) ? l : ee(l) ? i && Pn(r) ? l : l.value : j(l) ? e ? qo(l) : Gn(l) : l;
  };
}
const ss = /* @__PURE__ */ Xo(), is = /* @__PURE__ */ Xo(!0);
function Xo(e = !1) {
  return function(n, o, r, s) {
    let i = n[o];
    if (st(i) && ee(i) && !ee(r))
      return !1;
    if (!e && (!Gt(r) && !st(r) && (i = L(i), r = L(r)), !H(n) && ee(i) && !ee(r)))
      return i.value = r, !0;
    const l = H(n) && Pn(o) ? Number(o) < n.length : S(n, o), u = Reflect.set(n, o, r, s);
    return n === L(s) && (l ? mt(r, i) && xe(n, "set", o, r) : xe(n, "add", o, r)), u;
  };
}
function ls(e, t) {
  const n = S(e, t);
  e[t];
  const o = Reflect.deleteProperty(e, t);
  return o && n && xe(e, "delete", t, void 0), o;
}
function cs(e, t) {
  const n = Reflect.has(e, t);
  return (!ht(t) || !Wo.has(t)) && se(e, "has", t), n;
}
function us(e) {
  return se(e, "iterate", H(e) ? "length" : ze), Reflect.ownKeys(e);
}
const Yo = {
  get: es,
  set: ss,
  deleteProperty: ls,
  has: cs,
  ownKeys: us
}, as = {
  get: ns,
  set(e, t) {
    return !0;
  },
  deleteProperty(e, t) {
    return !0;
  }
}, fs = /* @__PURE__ */ q({}, Yo, {
  get: ts,
  set: is
}), Ln = (e) => e, Jt = (e) => Reflect.getPrototypeOf(e);
function At(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = L(e), s = L(t);
  n || (t !== s && se(r, "get", t), se(r, "get", s));
  const { has: i } = Jt(r), l = o ? Ln : n ? kn : gt;
  if (i.call(r, t))
    return l(e.get(t));
  if (i.call(r, s))
    return l(e.get(s));
  e !== r && e.get(t);
}
function vt(e, t = !1) {
  const n = this.__v_raw, o = L(n), r = L(e);
  return t || (e !== r && se(o, "has", e), se(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function yt(e, t = !1) {
  return e = e.__v_raw, !t && se(L(e), "iterate", ze), Reflect.get(e, "size", e);
}
function io(e) {
  e = L(e);
  const t = L(this);
  return Jt(t).has.call(t, e) || (t.add(e), xe(t, "add", e, e)), this;
}
function lo(e, t) {
  t = L(t);
  const n = L(this), { has: o, get: r } = Jt(n);
  let s = o.call(n, e);
  s || (e = L(e), s = o.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), s ? mt(t, i) && xe(n, "set", e, t) : xe(n, "add", e, t), this;
}
function co(e) {
  const t = L(this), { has: n, get: o } = Jt(t);
  let r = n.call(t, e);
  r || (e = L(e), r = n.call(t, e)), o && o.call(t, e);
  const s = t.delete(e);
  return r && xe(t, "delete", e, void 0), s;
}
function uo() {
  const e = L(this), t = e.size !== 0, n = e.clear();
  return t && xe(e, "clear", void 0, void 0), n;
}
function Ht(e, t) {
  return function(o, r) {
    const s = this, i = s.__v_raw, l = L(i), u = t ? Ln : e ? kn : gt;
    return !e && se(l, "iterate", ze), i.forEach((f, h) => o.call(r, u(f), u(h), s));
  };
}
function Ut(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = L(r), i = nt(s), l = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, f = r[e](...o), h = n ? Ln : t ? kn : gt;
    return !t && se(s, "iterate", u ? En : ze), {
      // iterator protocol
      next() {
        const { value: g, done: O } = f.next();
        return O ? { value: g, done: O } : {
          value: l ? [h(g[0]), h(g[1])] : h(g),
          done: O
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Se(e) {
  return function(...t) {
    return e === "delete" ? !1 : this;
  };
}
function ds() {
  const e = {
    get(s) {
      return At(this, s);
    },
    get size() {
      return yt(this);
    },
    has: vt,
    add: io,
    set: lo,
    delete: co,
    clear: uo,
    forEach: Ht(!1, !1)
  }, t = {
    get(s) {
      return At(this, s, !1, !0);
    },
    get size() {
      return yt(this);
    },
    has: vt,
    add: io,
    set: lo,
    delete: co,
    clear: uo,
    forEach: Ht(!1, !0)
  }, n = {
    get(s) {
      return At(this, s, !0);
    },
    get size() {
      return yt(this, !0);
    },
    has(s) {
      return vt.call(this, s, !0);
    },
    add: Se(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: Se(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: Se(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: Se(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: Ht(!0, !1)
  }, o = {
    get(s) {
      return At(this, s, !0, !0);
    },
    get size() {
      return yt(this, !0);
    },
    has(s) {
      return vt.call(this, s, !0);
    },
    add: Se(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: Se(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: Se(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: Se(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: Ht(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = Ut(s, !1, !1), n[s] = Ut(s, !0, !1), t[s] = Ut(s, !1, !0), o[s] = Ut(s, !0, !0);
  }), [
    e,
    n,
    t,
    o
  ];
}
const [_s, ps, hs, ms] = /* @__PURE__ */ ds();
function wn(e, t) {
  const n = t ? e ? ms : hs : e ? ps : _s;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(S(n, r) && r in o ? n : o, r, s);
}
const gs = {
  get: /* @__PURE__ */ wn(!1, !1)
}, Es = {
  get: /* @__PURE__ */ wn(!1, !0)
}, Ts = {
  get: /* @__PURE__ */ wn(!0, !1)
}, $o = /* @__PURE__ */ new WeakMap(), Jo = /* @__PURE__ */ new WeakMap(), zo = /* @__PURE__ */ new WeakMap(), bs = /* @__PURE__ */ new WeakMap();
function Os(e) {
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
function Rs(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Os(Kr(e));
}
function Gn(e) {
  return st(e) ? e : Mn(e, !1, Yo, gs, $o);
}
function Is(e) {
  return Mn(e, !1, fs, Es, Jo);
}
function qo(e) {
  return Mn(e, !0, as, Ts, zo);
}
function Mn(e, t, n, o, r) {
  if (!j(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const i = Rs(e);
  if (i === 0)
    return e;
  const l = new Proxy(e, i === 2 ? o : n);
  return r.set(e, l), l;
}
function ot(e) {
  return st(e) ? ot(e.__v_raw) : !!(e && e.__v_isReactive);
}
function st(e) {
  return !!(e && e.__v_isReadonly);
}
function Gt(e) {
  return !!(e && e.__v_isShallow);
}
function Zo(e) {
  return ot(e) || st(e);
}
function L(e) {
  const t = e && e.__v_raw;
  return t ? L(t) : e;
}
function Qo(e) {
  return wt(e, "__v_skip", !0), e;
}
const gt = (e) => j(e) ? Gn(e) : e, kn = (e) => j(e) ? qo(e) : e;
function er(e) {
  Le && me && (e = L(e), Ko(e.dep || (e.dep = Dn())));
}
function tr(e, t) {
  e = L(e);
  const n = e.dep;
  n && Tn(n);
}
function ee(e) {
  return !!(e && e.__v_isRef === !0);
}
function ft(e) {
  return Ns(e, !1);
}
function Ns(e, t) {
  return ee(e) ? e : new As(e, t);
}
class As {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : L(t), this._value = n ? t : gt(t);
  }
  get value() {
    return er(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Gt(t) || st(t);
    t = n ? t : L(t), mt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : gt(t), tr(this));
  }
}
function vs(e) {
  return ee(e) ? e.value : e;
}
const ys = {
  get: (e, t, n) => vs(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return ee(r) && !ee(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function nr(e) {
  return ot(e) ? e : new Proxy(e, ys);
}
var or;
class Hs {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[or] = !1, this._dirty = !0, this.effect = new Sn(t, () => {
      this._dirty || (this._dirty = !0, tr(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = L(this);
    return er(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
or = "__v_isReadonly";
function Us(e, t, n = !1) {
  let o, r;
  const s = x(e);
  return s ? (o = e, r = Ee) : (o = e.get, r = e.set), new Hs(o, r, s || !r, n);
}
function we(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (s) {
    zt(s, t, n);
  }
  return r;
}
function ae(e, t, n, o) {
  if (x(e)) {
    const s = we(e, t, n, o);
    return s && wo(s) && s.catch((i) => {
      zt(i, t, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < e.length; s++)
    r.push(ae(e[s], t, n, o));
  return r;
}
function zt(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, l = n;
    for (; s; ) {
      const f = s.ec;
      if (f) {
        for (let h = 0; h < f.length; h++)
          if (f[h](e, i, l) === !1)
            return;
      }
      s = s.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      we(u, null, 10, [e, i, l]);
      return;
    }
  }
  Cs(e, n, r, o);
}
function Cs(e, t, n, o = !0) {
  console.error(e);
}
let Et = !1, bn = !1;
const Q = [];
let Ne = 0;
const rt = [];
let ye = null, We = 0;
const rr = /* @__PURE__ */ Promise.resolve();
let Fn = null;
function sr(e) {
  const t = Fn || rr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function xs(e) {
  let t = Ne + 1, n = Q.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    Tt(Q[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function jn(e) {
  (!Q.length || !Q.includes(e, Et && e.allowRecurse ? Ne + 1 : Ne)) && (e.id == null ? Q.push(e) : Q.splice(xs(e.id), 0, e), ir());
}
function ir() {
  !Et && !bn && (bn = !0, Fn = rr.then(cr));
}
function Ps(e) {
  const t = Q.indexOf(e);
  t > Ne && Q.splice(t, 1);
}
function Ds(e) {
  H(e) ? rt.push(...e) : (!ye || !ye.includes(e, e.allowRecurse ? We + 1 : We)) && rt.push(e), ir();
}
function ao(e, t = Et ? Ne + 1 : 0) {
  for (; t < Q.length; t++) {
    const n = Q[t];
    n && n.pre && (Q.splice(t, 1), t--, n());
  }
}
function lr(e) {
  if (rt.length) {
    const t = [...new Set(rt)];
    if (rt.length = 0, ye) {
      ye.push(...t);
      return;
    }
    for (ye = t, ye.sort((n, o) => Tt(n) - Tt(o)), We = 0; We < ye.length; We++)
      ye[We]();
    ye = null, We = 0;
  }
}
const Tt = (e) => e.id == null ? 1 / 0 : e.id, Ss = (e, t) => {
  const n = Tt(e) - Tt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function cr(e) {
  bn = !1, Et = !0, Q.sort(Ss);
  const t = Ee;
  try {
    for (Ne = 0; Ne < Q.length; Ne++) {
      const n = Q[Ne];
      n && n.active !== !1 && we(
        n,
        null,
        14
        /* ErrorCodes.SCHEDULER */
      );
    }
  } finally {
    Ne = 0, Q.length = 0, lr(), Et = !1, Fn = null, (Q.length || rt.length) && cr();
  }
}
function Bs(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || F;
  let r = n;
  const s = t.startsWith("update:"), i = s && t.slice(7);
  if (i && i in o) {
    const h = `${i === "modelValue" ? "model" : i}Modifiers`, { number: g, trim: O } = o[h] || F;
    O && (r = n.map((v) => z(v) ? v.trim() : v)), g && (r = n.map(hn));
  }
  let l, u = o[l = sn(t)] || // also try camelCase event handler (#2249)
  o[l = sn(He(t))];
  !u && s && (u = o[l = sn(he(t))]), u && ae(u, e, 6, r);
  const f = o[l + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, ae(f, e, 6, r);
  }
}
function ur(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let i = {}, l = !1;
  if (!x(e)) {
    const u = (f) => {
      const h = ur(f, t, !0);
      h && (l = !0, q(i, h));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !s && !l ? (j(e) && o.set(e, null), null) : (H(s) ? s.forEach((u) => i[u] = null) : q(i, s), j(e) && o.set(e, i), i);
}
function qt(e, t) {
  return !e || !Xt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), S(e, t[0].toLowerCase() + t.slice(1)) || S(e, he(t)) || S(e, t));
}
let ue = null, ar = null;
function Mt(e) {
  const t = ue;
  return ue = e, ar = e && e.type.__scopeId || null, t;
}
function Ls(e, t = ue, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && Oo(-1);
    const s = Mt(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Mt(s), o._d && Oo(1);
    }
    return i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function ln(e) {
  const { type: t, vnode: n, proxy: o, withProxy: r, props: s, propsOptions: [i], slots: l, attrs: u, emit: f, render: h, renderCache: g, data: O, setupState: v, ctx: B, inheritAttrs: y } = e;
  let V, w;
  const te = Mt(e);
  try {
    if (n.shapeFlag & 4) {
      const K = r || o;
      V = Ie(h.call(K, K, g, s, v, O, B)), w = u;
    } else {
      const K = t;
      V = Ie(K.length > 1 ? K(s, { attrs: u, slots: l, emit: f }) : K(
        s,
        null
        /* we know it doesn't need it */
      )), w = t.props ? u : ws(u);
    }
  } catch (K) {
    pt.length = 0, zt(
      K,
      e,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ), V = Ce(Ue);
  }
  let C = V;
  if (w && y !== !1) {
    const K = Object.keys(w), { shapeFlag: Z } = C;
    K.length && Z & 7 && (i && K.some(Cn) && (w = Gs(w, i)), C = Me(C, w));
  }
  return n.dirs && (C = Me(C), C.dirs = C.dirs ? C.dirs.concat(n.dirs) : n.dirs), n.transition && (C.transition = n.transition), V = C, Mt(te), V;
}
const ws = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Xt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Gs = (e, t) => {
  const n = {};
  for (const o in e)
    (!Cn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
};
function Ms(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: i, children: l, patchFlag: u } = t, f = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? fo(o, i, f) : !!i;
    if (u & 8) {
      const h = t.dynamicProps;
      for (let g = 0; g < h.length; g++) {
        const O = h[g];
        if (i[O] !== o[O] && !qt(f, O))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : o === i ? !1 : o ? i ? fo(o, i, f) : !0 : !!i;
  return !1;
}
function fo(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t[s] !== e[s] && !qt(n, s))
      return !0;
  }
  return !1;
}
function ks({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Fs = (e) => e.__isSuspense;
function js(e, t) {
  t && t.pendingBranch ? H(e) ? t.effects.push(...e) : t.effects.push(e) : Ds(e);
}
function Vs(e, t) {
  if ($) {
    let n = $.provides;
    const o = $.parent && $.parent.provides;
    o === n && (n = $.provides = Object.create(o)), n[e] = t;
  }
}
function Dt(e, t, n = !1) {
  const o = $ || ue;
  if (o) {
    const r = o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && x(t) ? t.call(o.proxy) : t;
  }
}
const Ct = {};
function cn(e, t, n) {
  return fr(e, t, n);
}
function fr(e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: i } = F) {
  const l = zr() === ($ == null ? void 0 : $.scope) ? $ : null;
  let u, f = !1, h = !1;
  if (ee(e) ? (u = () => e.value, f = Gt(e)) : ot(e) ? (u = () => e, o = !0) : H(e) ? (h = !0, f = e.some((C) => ot(C) || Gt(C)), u = () => e.map((C) => {
    if (ee(C))
      return C.value;
    if (ot(C))
      return Je(C);
    if (x(C))
      return we(
        C,
        l,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
  })) : x(e) ? t ? u = () => we(
    e,
    l,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : u = () => {
    if (!(l && l.isUnmounted))
      return g && g(), ae(e, l, 3, [O]);
  } : u = Ee, t && o) {
    const C = u;
    u = () => Je(C());
  }
  let g, O = (C) => {
    g = w.onStop = () => {
      we(
        C,
        l,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, v;
  if (Ot)
    if (O = Ee, t ? n && ae(t, l, 3, [
      u(),
      h ? [] : void 0,
      O
    ]) : u(), r === "sync") {
      const C = ki();
      v = C.__watcherHandles || (C.__watcherHandles = []);
    } else
      return Ee;
  let B = h ? new Array(e.length).fill(Ct) : Ct;
  const y = () => {
    if (w.active)
      if (t) {
        const C = w.run();
        (o || f || (h ? C.some((K, Z) => mt(K, B[Z])) : mt(C, B))) && (g && g(), ae(t, l, 3, [
          C,
          // pass undefined as the old value when it's changed for the first time
          B === Ct ? void 0 : h && B[0] === Ct ? [] : B,
          O
        ]), B = C);
      } else
        w.run();
  };
  y.allowRecurse = !!t;
  let V;
  r === "sync" ? V = y : r === "post" ? V = () => re(y, l && l.suspense) : (y.pre = !0, l && (y.id = l.uid), V = () => jn(y));
  const w = new Sn(u, V);
  t ? n ? y() : B = w.run() : r === "post" ? re(w.run.bind(w), l && l.suspense) : w.run();
  const te = () => {
    w.stop(), l && l.scope && xn(l.scope.effects, w);
  };
  return v && v.push(te), te;
}
function Ks(e, t, n) {
  const o = this.proxy, r = z(e) ? e.includes(".") ? dr(o, e) : () => o[e] : e.bind(o, o);
  let s;
  x(t) ? s = t : (s = t.handler, n = t);
  const i = $;
  it(this);
  const l = fr(r, s.bind(o), n);
  return i ? it(i) : qe(), l;
}
function dr(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function Je(e, t) {
  if (!j(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), ee(e))
    Je(e.value, t);
  else if (H(e))
    for (let n = 0; n < e.length; n++)
      Je(e[n], t);
  else if (Yt(e) || nt(e))
    e.forEach((n) => {
      Je(n, t);
    });
  else if (Mo(e))
    for (const n in e)
      Je(e[n], t);
  return e;
}
function Ws() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Vn(() => {
    e.isMounted = !0;
  }), gr(() => {
    e.isUnmounting = !0;
  }), e;
}
const ce = [Function, Array], Xs = {
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
    const n = Pi(), o = Ws();
    let r;
    return () => {
      const s = t.default && pr(t.default(), !0);
      if (!s || !s.length)
        return;
      let i = s[0];
      if (s.length > 1) {
        for (const y of s)
          if (y.type !== Ue) {
            i = y;
            break;
          }
      }
      const l = L(e), { mode: u } = l;
      if (o.isLeaving)
        return un(i);
      const f = _o(i);
      if (!f)
        return un(i);
      const h = On(f, l, o, n);
      Rn(f, h);
      const g = n.subTree, O = g && _o(g);
      let v = !1;
      const { getTransitionKey: B } = f.type;
      if (B) {
        const y = B();
        r === void 0 ? r = y : y !== r && (r = y, v = !0);
      }
      if (O && O.type !== Ue && (!Xe(f, O) || v)) {
        const y = On(O, l, o, n);
        if (Rn(O, y), u === "out-in")
          return o.isLeaving = !0, y.afterLeave = () => {
            o.isLeaving = !1, n.update.active !== !1 && n.update();
          }, un(i);
        u === "in-out" && f.type !== Ue && (y.delayLeave = (V, w, te) => {
          const C = _r(o, O);
          C[String(O.key)] = O, V._leaveCb = () => {
            w(), V._leaveCb = void 0, delete h.delayedLeave;
          }, h.delayedLeave = te;
        });
      }
      return i;
    };
  }
}, Ys = Xs;
function _r(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function On(e, t, n, o) {
  const { appear: r, mode: s, persisted: i = !1, onBeforeEnter: l, onEnter: u, onAfterEnter: f, onEnterCancelled: h, onBeforeLeave: g, onLeave: O, onAfterLeave: v, onLeaveCancelled: B, onBeforeAppear: y, onAppear: V, onAfterAppear: w, onAppearCancelled: te } = t, C = String(e.key), K = _r(n, e), Z = (P, J) => {
    P && ae(P, o, 9, J);
  }, Ze = (P, J) => {
    const W = J[1];
    Z(P, J), H(P) ? P.every((ie) => ie.length <= 1) && W() : P.length <= 1 && W();
  }, De = {
    mode: s,
    persisted: i,
    beforeEnter(P) {
      let J = l;
      if (!n.isMounted)
        if (r)
          J = y || l;
        else
          return;
      P._leaveCb && P._leaveCb(
        !0
        /* cancelled */
      );
      const W = K[C];
      W && Xe(e, W) && W.el._leaveCb && W.el._leaveCb(), Z(J, [P]);
    },
    enter(P) {
      let J = u, W = f, ie = h;
      if (!n.isMounted)
        if (r)
          J = V || u, W = w || f, ie = te || h;
        else
          return;
      let Te = !1;
      const Ae = P._enterCb = (ut) => {
        Te || (Te = !0, ut ? Z(ie, [P]) : Z(W, [P]), De.delayedLeave && De.delayedLeave(), P._enterCb = void 0);
      };
      J ? Ze(J, [P, Ae]) : Ae();
    },
    leave(P, J) {
      const W = String(e.key);
      if (P._enterCb && P._enterCb(
        !0
        /* cancelled */
      ), n.isUnmounting)
        return J();
      Z(g, [P]);
      let ie = !1;
      const Te = P._leaveCb = (Ae) => {
        ie || (ie = !0, J(), Ae ? Z(B, [P]) : Z(v, [P]), P._leaveCb = void 0, K[W] === e && delete K[W]);
      };
      K[W] = e, O ? Ze(O, [P, Te]) : Te();
    },
    clone(P) {
      return On(P, t, n, o);
    }
  };
  return De;
}
function un(e) {
  if (Zt(e))
    return e = Me(e), e.children = null, e;
}
function _o(e) {
  return Zt(e) ? e.children ? e.children[0] : void 0 : e;
}
function Rn(e, t) {
  e.shapeFlag & 6 && e.component ? Rn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function pr(e, t = !1, n) {
  let o = [], r = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === pe ? (i.patchFlag & 128 && r++, o = o.concat(pr(i.children, t, l))) : (t || i.type !== Ue) && o.push(l != null ? Me(i, { key: l }) : i);
  }
  if (r > 1)
    for (let s = 0; s < o.length; s++)
      o[s].patchFlag = -2;
  return o;
}
function hr(e) {
  return x(e) ? { setup: e, name: e.name } : e;
}
const St = (e) => !!e.type.__asyncLoader, Zt = (e) => e.type.__isKeepAlive;
function $s(e, t) {
  mr(e, "a", t);
}
function Js(e, t) {
  mr(e, "da", t);
}
function mr(e, t, n = $) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Qt(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Zt(r.parent.vnode) && zs(o, t, n, r), r = r.parent;
  }
}
function zs(e, t, n, o) {
  const r = Qt(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Er(() => {
    xn(o[t], r);
  }, n);
}
function Qt(e, t, n = $, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      lt(), it(n);
      const l = ae(t, n, e, i);
      return qe(), ct(), l;
    });
    return o ? r.unshift(s) : r.push(s), s;
  }
}
const Pe = (e) => (t, n = $) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Ot || e === "sp") && Qt(e, (...o) => t(...o), n)
), qs = Pe(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), Vn = Pe(
  "m"
  /* LifecycleHooks.MOUNTED */
), Zs = Pe(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), Qs = Pe(
  "u"
  /* LifecycleHooks.UPDATED */
), gr = Pe(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), Er = Pe(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), ei = Pe(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), ti = Pe(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), ni = Pe(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function oi(e, t = $) {
  Qt("ec", e, t);
}
function po(e, t) {
  const n = ue;
  if (n === null)
    return e;
  const o = nn(n) || n.proxy, r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, l, u, f = F] = t[s];
    i && (x(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Je(l), r.push({
      dir: i,
      instance: o,
      value: l,
      oldValue: void 0,
      arg: u,
      modifiers: f
    }));
  }
  return e;
}
function je(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    s && (l.oldValue = s[i].value);
    let u = l.dir[o];
    u && (lt(), ae(u, n, 8, [
      e.el,
      l,
      e,
      t
    ]), ct());
  }
}
const ri = Symbol(), In = (e) => e ? Hr(e) ? nn(e) || e.proxy : In(e.parent) : null, _t = (
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
    $parent: (e) => In(e.parent),
    $root: (e) => In(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Kn(e),
    $forceUpdate: (e) => e.f || (e.f = () => jn(e.update)),
    $nextTick: (e) => e.n || (e.n = sr.bind(e.proxy)),
    $watch: (e) => Ks.bind(e)
  })
), an = (e, t) => e !== F && !e.__isScriptSetup && S(e, t), si = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: s, accessCache: i, type: l, appContext: u } = e;
    let f;
    if (t[0] !== "$") {
      const v = i[t];
      if (v !== void 0)
        switch (v) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (an(o, t))
          return i[t] = 1, o[t];
        if (r !== F && S(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && S(f, t)
        )
          return i[t] = 3, s[t];
        if (n !== F && S(n, t))
          return i[t] = 4, n[t];
        Nn && (i[t] = 0);
      }
    }
    const h = _t[t];
    let g, O;
    if (h)
      return t === "$attrs" && se(e, "get", t), h(e);
    if (
      // css module (injected by vue-loader)
      (g = l.__cssModules) && (g = g[t])
    )
      return g;
    if (n !== F && S(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      O = u.config.globalProperties, S(O, t)
    )
      return O[t];
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return an(r, t) ? (r[t] = n, !0) : o !== F && S(o, t) ? (o[t] = n, !0) : S(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s } }, i) {
    let l;
    return !!n[i] || e !== F && S(e, i) || an(t, i) || (l = s[0]) && S(l, i) || S(o, i) || S(_t, i) || S(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : S(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
let Nn = !0;
function ii(e) {
  const t = Kn(e), n = e.proxy, o = e.ctx;
  Nn = !1, t.beforeCreate && ho(
    t.beforeCreate,
    e,
    "bc"
    /* LifecycleHooks.BEFORE_CREATE */
  );
  const {
    // state
    data: r,
    computed: s,
    methods: i,
    watch: l,
    provide: u,
    inject: f,
    // lifecycle
    created: h,
    beforeMount: g,
    mounted: O,
    beforeUpdate: v,
    updated: B,
    activated: y,
    deactivated: V,
    beforeDestroy: w,
    beforeUnmount: te,
    destroyed: C,
    unmounted: K,
    render: Z,
    renderTracked: Ze,
    renderTriggered: De,
    errorCaptured: P,
    serverPrefetch: J,
    // public API
    expose: W,
    inheritAttrs: ie,
    // assets
    components: Te,
    directives: Ae,
    filters: ut
  } = t;
  if (f && li(f, o, null, e.appContext.config.unwrapInjectedRef), i)
    for (const X in i) {
      const M = i[X];
      x(M) && (o[X] = M.bind(n));
    }
  if (r) {
    const X = r.call(n, n);
    j(X) && (e.data = Gn(X));
  }
  if (Nn = !0, s)
    for (const X in s) {
      const M = s[X], ke = x(M) ? M.bind(n, n) : x(M.get) ? M.get.bind(n, n) : Ee, It = !x(M) && x(M.set) ? M.set.bind(n) : Ee, Fe = Gi({
        get: ke,
        set: It
      });
      Object.defineProperty(o, X, {
        enumerable: !0,
        configurable: !0,
        get: () => Fe.value,
        set: (be) => Fe.value = be
      });
    }
  if (l)
    for (const X in l)
      Tr(l[X], o, n, X);
  if (u) {
    const X = x(u) ? u.call(n) : u;
    Reflect.ownKeys(X).forEach((M) => {
      Vs(M, X[M]);
    });
  }
  h && ho(
    h,
    e,
    "c"
    /* LifecycleHooks.CREATED */
  );
  function ne(X, M) {
    H(M) ? M.forEach((ke) => X(ke.bind(n))) : M && X(M.bind(n));
  }
  if (ne(qs, g), ne(Vn, O), ne(Zs, v), ne(Qs, B), ne($s, y), ne(Js, V), ne(oi, P), ne(ni, Ze), ne(ti, De), ne(gr, te), ne(Er, K), ne(ei, J), H(W))
    if (W.length) {
      const X = e.exposed || (e.exposed = {});
      W.forEach((M) => {
        Object.defineProperty(X, M, {
          get: () => n[M],
          set: (ke) => n[M] = ke
        });
      });
    } else
      e.exposed || (e.exposed = {});
  Z && e.render === Ee && (e.render = Z), ie != null && (e.inheritAttrs = ie), Te && (e.components = Te), Ae && (e.directives = Ae);
}
function li(e, t, n = Ee, o = !1) {
  H(e) && (e = An(e));
  for (const r in e) {
    const s = e[r];
    let i;
    j(s) ? "default" in s ? i = Dt(
      s.from || r,
      s.default,
      !0
      /* treat default function as factory */
    ) : i = Dt(s.from || r) : i = Dt(s), ee(i) && o ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : t[r] = i;
  }
}
function ho(e, t, n) {
  ae(H(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Tr(e, t, n, o) {
  const r = o.includes(".") ? dr(n, o) : () => n[o];
  if (z(e)) {
    const s = t[e];
    x(s) && cn(r, s);
  } else if (x(e))
    cn(r, e.bind(n));
  else if (j(e))
    if (H(e))
      e.forEach((s) => Tr(s, t, n, o));
    else {
      const s = x(e.handler) ? e.handler.bind(n) : t[e.handler];
      x(s) && cn(r, s, e);
    }
}
function Kn(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: s, config: { optionMergeStrategies: i } } = e.appContext, l = s.get(t);
  let u;
  return l ? u = l : !r.length && !n && !o ? u = t : (u = {}, r.length && r.forEach((f) => kt(u, f, i, !0)), kt(u, t, i)), j(t) && s.set(t, u), u;
}
function kt(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && kt(e, s, n, !0), r && r.forEach((i) => kt(e, i, n, !0));
  for (const i in t)
    if (!(o && i === "expose")) {
      const l = ci[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const ci = {
  data: mo,
  props: Ke,
  emits: Ke,
  // objects
  methods: Ke,
  computed: Ke,
  // lifecycle
  beforeCreate: oe,
  created: oe,
  beforeMount: oe,
  mounted: oe,
  beforeUpdate: oe,
  updated: oe,
  beforeDestroy: oe,
  beforeUnmount: oe,
  destroyed: oe,
  unmounted: oe,
  activated: oe,
  deactivated: oe,
  errorCaptured: oe,
  serverPrefetch: oe,
  // assets
  components: Ke,
  directives: Ke,
  // watch
  watch: ai,
  // provide / inject
  provide: mo,
  inject: ui
};
function mo(e, t) {
  return t ? e ? function() {
    return q(x(e) ? e.call(this, this) : e, x(t) ? t.call(this, this) : t);
  } : t : e;
}
function ui(e, t) {
  return Ke(An(e), An(t));
}
function An(e) {
  if (H(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function oe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ke(e, t) {
  return e ? q(q(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function ai(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = q(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = oe(e[o], t[o]);
  return n;
}
function fi(e, t, n, o = !1) {
  const r = {}, s = {};
  wt(s, tn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), br(e, t, r, s);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  n ? e.props = o ? r : Is(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function di(e, t, n, o) {
  const { props: r, attrs: s, vnode: { patchFlag: i } } = e, l = L(r), [u] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const h = e.vnode.dynamicProps;
      for (let g = 0; g < h.length; g++) {
        let O = h[g];
        if (qt(e.emitsOptions, O))
          continue;
        const v = t[O];
        if (u)
          if (S(s, O))
            v !== s[O] && (s[O] = v, f = !0);
          else {
            const B = He(O);
            r[B] = vn(
              u,
              l,
              B,
              v,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          v !== s[O] && (s[O] = v, f = !0);
      }
    }
  } else {
    br(e, t, r, s) && (f = !0);
    let h;
    for (const g in l)
      (!t || // for camelCase
      !S(t, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = he(g)) === g || !S(t, h))) && (u ? n && // for camelCase
      (n[g] !== void 0 || // for kebab-case
      n[h] !== void 0) && (r[g] = vn(
        u,
        l,
        g,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete r[g]);
    if (s !== l)
      for (const g in s)
        (!t || !S(t, g)) && (delete s[g], f = !0);
  }
  f && xe(e, "set", "$attrs");
}
function br(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let u in t) {
      if (xt(u))
        continue;
      const f = t[u];
      let h;
      r && S(r, h = He(u)) ? !s || !s.includes(h) ? n[h] = f : (l || (l = {}))[h] = f : qt(e.emitsOptions, u) || (!(u in o) || f !== o[u]) && (o[u] = f, i = !0);
    }
  if (s) {
    const u = L(n), f = l || F;
    for (let h = 0; h < s.length; h++) {
      const g = s[h];
      n[g] = vn(r, u, g, f[g], e, !S(f, g));
    }
  }
  return i;
}
function vn(e, t, n, o, r, s) {
  const i = e[n];
  if (i != null) {
    const l = S(i, "default");
    if (l && o === void 0) {
      const u = i.default;
      if (i.type !== Function && x(u)) {
        const { propsDefaults: f } = r;
        n in f ? o = f[n] : (it(r), o = f[n] = u.call(null, t), qe());
      } else
        o = u;
    }
    i[
      0
      /* BooleanFlags.shouldCast */
    ] && (s && !l ? o = !1 : i[
      1
      /* BooleanFlags.shouldCastTrue */
    ] && (o === "" || o === he(n)) && (o = !0));
  }
  return o;
}
function Or(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, i = {}, l = [];
  let u = !1;
  if (!x(e)) {
    const h = (g) => {
      u = !0;
      const [O, v] = Or(g, t, !0);
      q(i, O), v && l.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!s && !u)
    return j(e) && o.set(e, tt), tt;
  if (H(s))
    for (let h = 0; h < s.length; h++) {
      const g = He(s[h]);
      go(g) && (i[g] = F);
    }
  else if (s)
    for (const h in s) {
      const g = He(h);
      if (go(g)) {
        const O = s[h], v = i[g] = H(O) || x(O) ? { type: O } : Object.assign({}, O);
        if (v) {
          const B = bo(Boolean, v.type), y = bo(String, v.type);
          v[
            0
            /* BooleanFlags.shouldCast */
          ] = B > -1, v[
            1
            /* BooleanFlags.shouldCastTrue */
          ] = y < 0 || B < y, (B > -1 || S(v, "default")) && l.push(g);
        }
      }
    }
  const f = [i, l];
  return j(e) && o.set(e, f), f;
}
function go(e) {
  return e[0] !== "$";
}
function Eo(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function To(e, t) {
  return Eo(e) === Eo(t);
}
function bo(e, t) {
  return H(t) ? t.findIndex((n) => To(n, e)) : x(t) && To(t, e) ? 0 : -1;
}
const Rr = (e) => e[0] === "_" || e === "$stable", Wn = (e) => H(e) ? e.map(Ie) : [Ie(e)], _i = (e, t, n) => {
  if (t._n)
    return t;
  const o = Ls((...r) => Wn(t(...r)), n);
  return o._c = !1, o;
}, Ir = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (Rr(r))
      continue;
    const s = e[r];
    if (x(s))
      t[r] = _i(r, s, o);
    else if (s != null) {
      const i = Wn(s);
      t[r] = () => i;
    }
  }
}, Nr = (e, t) => {
  const n = Wn(t);
  e.slots.default = () => n;
}, pi = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = L(t), wt(t, "_", n)) : Ir(t, e.slots = {});
  } else
    e.slots = {}, t && Nr(e, t);
  wt(e.slots, tn, 1);
}, hi = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, i = F;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? s = !1 : (q(r, t), !n && l === 1 && delete r._) : (s = !t.$stable, Ir(t, r)), i = t;
  } else
    t && (Nr(e, t), i = { default: 1 });
  if (s)
    for (const l in r)
      !Rr(l) && !(l in i) && delete r[l];
};
function Ar() {
  return {
    app: null,
    config: {
      isNativeTag: Fr,
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
let mi = 0;
function gi(e, t) {
  return function(o, r = null) {
    x(o) || (o = Object.assign({}, o)), r != null && !j(r) && (r = null);
    const s = Ar(), i = /* @__PURE__ */ new Set();
    let l = !1;
    const u = s.app = {
      _uid: mi++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: Fi,
      get config() {
        return s.config;
      },
      set config(f) {
      },
      use(f, ...h) {
        return i.has(f) || (f && x(f.install) ? (i.add(f), f.install(u, ...h)) : x(f) && (i.add(f), f(u, ...h))), u;
      },
      mixin(f) {
        return s.mixins.includes(f) || s.mixins.push(f), u;
      },
      component(f, h) {
        return h ? (s.components[f] = h, u) : s.components[f];
      },
      directive(f, h) {
        return h ? (s.directives[f] = h, u) : s.directives[f];
      },
      mount(f, h, g) {
        if (!l) {
          const O = Ce(o, r);
          return O.appContext = s, h && t ? t(O, f) : e(O, f, g), l = !0, u._container = f, f.__vue_app__ = u, nn(O.component) || O.component.proxy;
        }
      },
      unmount() {
        l && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide(f, h) {
        return s.provides[f] = h, u;
      }
    };
    return u;
  };
}
function yn(e, t, n, o, r = !1) {
  if (H(e)) {
    e.forEach((O, v) => yn(O, t && (H(t) ? t[v] : t), n, o, r));
    return;
  }
  if (St(o) && !r)
    return;
  const s = o.shapeFlag & 4 ? nn(o.component) || o.component.proxy : o.el, i = r ? null : s, { i: l, r: u } = e, f = t && t.r, h = l.refs === F ? l.refs = {} : l.refs, g = l.setupState;
  if (f != null && f !== u && (z(f) ? (h[f] = null, S(g, f) && (g[f] = null)) : ee(f) && (f.value = null)), x(u))
    we(u, l, 12, [i, h]);
  else {
    const O = z(u), v = ee(u);
    if (O || v) {
      const B = () => {
        if (e.f) {
          const y = O ? S(g, u) ? g[u] : h[u] : u.value;
          r ? H(y) && xn(y, s) : H(y) ? y.includes(s) || y.push(s) : O ? (h[u] = [s], S(g, u) && (g[u] = h[u])) : (u.value = [s], e.k && (h[e.k] = u.value));
        } else
          O ? (h[u] = i, S(g, u) && (g[u] = i)) : v && (u.value = i, e.k && (h[e.k] = i));
      };
      i ? (B.id = -1, re(B, n)) : B();
    }
  }
}
const re = js;
function Ei(e) {
  return Ti(e);
}
function Ti(e, t) {
  const n = Yr();
  n.__VUE__ = !0;
  const { insert: o, remove: r, patchProp: s, createElement: i, createText: l, createComment: u, setText: f, setElementText: h, parentNode: g, nextSibling: O, setScopeId: v = Ee, insertStaticContent: B } = e, y = (c, a, d, p = null, _ = null, T = null, R = !1, E = null, b = !!a.dynamicChildren) => {
    if (c === a)
      return;
    c && !Xe(c, a) && (p = Nt(c), be(c, _, T, !0), c = null), a.patchFlag === -2 && (b = !1, a.dynamicChildren = null);
    const { type: m, ref: N, shapeFlag: I } = a;
    switch (m) {
      case en:
        V(c, a, d, p);
        break;
      case Ue:
        w(c, a, d, p);
        break;
      case Bt:
        c == null && te(a, d, p, R);
        break;
      case pe:
        Te(c, a, d, p, _, T, R, E, b);
        break;
      default:
        I & 1 ? Z(c, a, d, p, _, T, R, E, b) : I & 6 ? Ae(c, a, d, p, _, T, R, E, b) : (I & 64 || I & 128) && m.process(c, a, d, p, _, T, R, E, b, Qe);
    }
    N != null && _ && yn(N, c && c.ref, T, a || c, !a);
  }, V = (c, a, d, p) => {
    if (c == null)
      o(a.el = l(a.children), d, p);
    else {
      const _ = a.el = c.el;
      a.children !== c.children && f(_, a.children);
    }
  }, w = (c, a, d, p) => {
    c == null ? o(a.el = u(a.children || ""), d, p) : a.el = c.el;
  }, te = (c, a, d, p) => {
    [c.el, c.anchor] = B(c.children, a, d, p, c.el, c.anchor);
  }, C = ({ el: c, anchor: a }, d, p) => {
    let _;
    for (; c && c !== a; )
      _ = O(c), o(c, d, p), c = _;
    o(a, d, p);
  }, K = ({ el: c, anchor: a }) => {
    let d;
    for (; c && c !== a; )
      d = O(c), r(c), c = d;
    r(a);
  }, Z = (c, a, d, p, _, T, R, E, b) => {
    R = R || a.type === "svg", c == null ? Ze(a, d, p, _, T, R, E, b) : J(c, a, _, T, R, E, b);
  }, Ze = (c, a, d, p, _, T, R, E) => {
    let b, m;
    const { type: N, props: I, shapeFlag: A, transition: U, dirs: D } = c;
    if (b = c.el = i(c.type, T, I && I.is, I), A & 8 ? h(b, c.children) : A & 16 && P(c.children, b, null, p, _, T && N !== "foreignObject", R, E), D && je(c, null, p, "created"), De(b, c, c.scopeId, R, p), I) {
      for (const G in I)
        G !== "value" && !xt(G) && s(b, G, null, I[G], T, c.children, p, _, ve);
      "value" in I && s(b, "value", null, I.value), (m = I.onVnodeBeforeMount) && Re(m, p, c);
    }
    D && je(c, null, p, "beforeMount");
    const k = (!_ || _ && !_.pendingBranch) && U && !U.persisted;
    k && U.beforeEnter(b), o(b, a, d), ((m = I && I.onVnodeMounted) || k || D) && re(() => {
      m && Re(m, p, c), k && U.enter(b), D && je(c, null, p, "mounted");
    }, _);
  }, De = (c, a, d, p, _) => {
    if (d && v(c, d), p)
      for (let T = 0; T < p.length; T++)
        v(c, p[T]);
    if (_) {
      let T = _.subTree;
      if (a === T) {
        const R = _.vnode;
        De(c, R, R.scopeId, R.slotScopeIds, _.parent);
      }
    }
  }, P = (c, a, d, p, _, T, R, E, b = 0) => {
    for (let m = b; m < c.length; m++) {
      const N = c[m] = E ? Be(c[m]) : Ie(c[m]);
      y(null, N, a, d, p, _, T, R, E);
    }
  }, J = (c, a, d, p, _, T, R) => {
    const E = a.el = c.el;
    let { patchFlag: b, dynamicChildren: m, dirs: N } = a;
    b |= c.patchFlag & 16;
    const I = c.props || F, A = a.props || F;
    let U;
    d && Ve(d, !1), (U = A.onVnodeBeforeUpdate) && Re(U, d, a, c), N && je(a, c, d, "beforeUpdate"), d && Ve(d, !0);
    const D = _ && a.type !== "foreignObject";
    if (m ? W(c.dynamicChildren, m, E, d, p, D, T) : R || M(c, a, E, null, d, p, D, T, !1), b > 0) {
      if (b & 16)
        ie(E, a, I, A, d, p, _);
      else if (b & 2 && I.class !== A.class && s(E, "class", null, A.class, _), b & 4 && s(E, "style", I.style, A.style, _), b & 8) {
        const k = a.dynamicProps;
        for (let G = 0; G < k.length; G++) {
          const Y = k[G], fe = I[Y], et = A[Y];
          (et !== fe || Y === "value") && s(E, Y, fe, et, _, c.children, d, p, ve);
        }
      }
      b & 1 && c.children !== a.children && h(E, a.children);
    } else
      !R && m == null && ie(E, a, I, A, d, p, _);
    ((U = A.onVnodeUpdated) || N) && re(() => {
      U && Re(U, d, a, c), N && je(a, c, d, "updated");
    }, p);
  }, W = (c, a, d, p, _, T, R) => {
    for (let E = 0; E < a.length; E++) {
      const b = c[E], m = a[E], N = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        b.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (b.type === pe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Xe(b, m) || // - In the case of a component, it could contain anything.
        b.shapeFlag & 70) ? g(b.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          d
        )
      );
      y(b, m, N, null, p, _, T, R, !0);
    }
  }, ie = (c, a, d, p, _, T, R) => {
    if (d !== p) {
      if (d !== F)
        for (const E in d)
          !xt(E) && !(E in p) && s(c, E, d[E], null, R, a.children, _, T, ve);
      for (const E in p) {
        if (xt(E))
          continue;
        const b = p[E], m = d[E];
        b !== m && E !== "value" && s(c, E, m, b, R, a.children, _, T, ve);
      }
      "value" in p && s(c, "value", d.value, p.value);
    }
  }, Te = (c, a, d, p, _, T, R, E, b) => {
    const m = a.el = c ? c.el : l(""), N = a.anchor = c ? c.anchor : l("");
    let { patchFlag: I, dynamicChildren: A, slotScopeIds: U } = a;
    U && (E = E ? E.concat(U) : U), c == null ? (o(m, d, p), o(N, d, p), P(a.children, d, N, _, T, R, E, b)) : I > 0 && I & 64 && A && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (W(c.dynamicChildren, A, d, _, T, R, E), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (a.key != null || _ && a === _.subTree) && vr(
      c,
      a,
      !0
      /* shallow */
    )) : M(c, a, d, N, _, T, R, E, b);
  }, Ae = (c, a, d, p, _, T, R, E, b) => {
    a.slotScopeIds = E, c == null ? a.shapeFlag & 512 ? _.ctx.activate(a, d, p, R, b) : ut(a, d, p, _, T, R, b) : $n(c, a, b);
  }, ut = (c, a, d, p, _, T, R) => {
    const E = c.component = xi(c, p, _);
    if (Zt(c) && (E.ctx.renderer = Qe), Di(E), E.asyncDep) {
      if (_ && _.registerDep(E, ne), !c.el) {
        const b = E.subTree = Ce(Ue);
        w(null, b, a, d);
      }
      return;
    }
    ne(E, c, a, d, _, T, R);
  }, $n = (c, a, d) => {
    const p = a.component = c.component;
    if (Ms(c, a, d))
      if (p.asyncDep && !p.asyncResolved) {
        X(p, a, d);
        return;
      } else
        p.next = a, Ps(p.update), p.update();
    else
      a.el = c.el, p.vnode = a;
  }, ne = (c, a, d, p, _, T, R) => {
    const E = () => {
      if (c.isMounted) {
        let { next: N, bu: I, u: A, parent: U, vnode: D } = c, k = N, G;
        Ve(c, !1), N ? (N.el = D.el, X(c, N, R)) : N = D, I && Pt(I), (G = N.props && N.props.onVnodeBeforeUpdate) && Re(G, U, N, D), Ve(c, !0);
        const Y = ln(c), fe = c.subTree;
        c.subTree = Y, y(
          fe,
          Y,
          // parent may have changed if it's in a teleport
          g(fe.el),
          // anchor may have changed if it's in a fragment
          Nt(fe),
          c,
          _,
          T
        ), N.el = Y.el, k === null && ks(c, Y.el), A && re(A, _), (G = N.props && N.props.onVnodeUpdated) && re(() => Re(G, U, N, D), _);
      } else {
        let N;
        const { el: I, props: A } = a, { bm: U, m: D, parent: k } = c, G = St(a);
        if (Ve(c, !1), U && Pt(U), !G && (N = A && A.onVnodeBeforeMount) && Re(N, k, a), Ve(c, !0), I && rn) {
          const Y = () => {
            c.subTree = ln(c), rn(I, c.subTree, c, _, null);
          };
          G ? a.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !c.isUnmounted && Y()
          ) : Y();
        } else {
          const Y = c.subTree = ln(c);
          y(null, Y, d, p, c, _, T), a.el = Y.el;
        }
        if (D && re(D, _), !G && (N = A && A.onVnodeMounted)) {
          const Y = a;
          re(() => Re(N, k, Y), _);
        }
        (a.shapeFlag & 256 || k && St(k.vnode) && k.vnode.shapeFlag & 256) && c.a && re(c.a, _), c.isMounted = !0, a = d = p = null;
      }
    }, b = c.effect = new Sn(
      E,
      () => jn(m),
      c.scope
      // track it in component's effect scope
    ), m = c.update = () => b.run();
    m.id = c.uid, Ve(c, !0), m();
  }, X = (c, a, d) => {
    a.component = c;
    const p = c.vnode.props;
    c.vnode = a, c.next = null, di(c, a.props, p, d), hi(c, a.children, d), lt(), ao(), ct();
  }, M = (c, a, d, p, _, T, R, E, b = !1) => {
    const m = c && c.children, N = c ? c.shapeFlag : 0, I = a.children, { patchFlag: A, shapeFlag: U } = a;
    if (A > 0) {
      if (A & 128) {
        It(m, I, d, p, _, T, R, E, b);
        return;
      } else if (A & 256) {
        ke(m, I, d, p, _, T, R, E, b);
        return;
      }
    }
    U & 8 ? (N & 16 && ve(m, _, T), I !== m && h(d, I)) : N & 16 ? U & 16 ? It(m, I, d, p, _, T, R, E, b) : ve(m, _, T, !0) : (N & 8 && h(d, ""), U & 16 && P(I, d, p, _, T, R, E, b));
  }, ke = (c, a, d, p, _, T, R, E, b) => {
    c = c || tt, a = a || tt;
    const m = c.length, N = a.length, I = Math.min(m, N);
    let A;
    for (A = 0; A < I; A++) {
      const U = a[A] = b ? Be(a[A]) : Ie(a[A]);
      y(c[A], U, d, null, _, T, R, E, b);
    }
    m > N ? ve(c, _, T, !0, !1, I) : P(a, d, p, _, T, R, E, b, I);
  }, It = (c, a, d, p, _, T, R, E, b) => {
    let m = 0;
    const N = a.length;
    let I = c.length - 1, A = N - 1;
    for (; m <= I && m <= A; ) {
      const U = c[m], D = a[m] = b ? Be(a[m]) : Ie(a[m]);
      if (Xe(U, D))
        y(U, D, d, null, _, T, R, E, b);
      else
        break;
      m++;
    }
    for (; m <= I && m <= A; ) {
      const U = c[I], D = a[A] = b ? Be(a[A]) : Ie(a[A]);
      if (Xe(U, D))
        y(U, D, d, null, _, T, R, E, b);
      else
        break;
      I--, A--;
    }
    if (m > I) {
      if (m <= A) {
        const U = A + 1, D = U < N ? a[U].el : p;
        for (; m <= A; )
          y(null, a[m] = b ? Be(a[m]) : Ie(a[m]), d, D, _, T, R, E, b), m++;
      }
    } else if (m > A)
      for (; m <= I; )
        be(c[m], _, T, !0), m++;
    else {
      const U = m, D = m, k = /* @__PURE__ */ new Map();
      for (m = D; m <= A; m++) {
        const le = a[m] = b ? Be(a[m]) : Ie(a[m]);
        le.key != null && k.set(le.key, m);
      }
      let G, Y = 0;
      const fe = A - D + 1;
      let et = !1, qn = 0;
      const at = new Array(fe);
      for (m = 0; m < fe; m++)
        at[m] = 0;
      for (m = U; m <= I; m++) {
        const le = c[m];
        if (Y >= fe) {
          be(le, _, T, !0);
          continue;
        }
        let Oe;
        if (le.key != null)
          Oe = k.get(le.key);
        else
          for (G = D; G <= A; G++)
            if (at[G - D] === 0 && Xe(le, a[G])) {
              Oe = G;
              break;
            }
        Oe === void 0 ? be(le, _, T, !0) : (at[Oe - D] = m + 1, Oe >= qn ? qn = Oe : et = !0, y(le, a[Oe], d, null, _, T, R, E, b), Y++);
      }
      const Zn = et ? bi(at) : tt;
      for (G = Zn.length - 1, m = fe - 1; m >= 0; m--) {
        const le = D + m, Oe = a[le], Qn = le + 1 < N ? a[le + 1].el : p;
        at[m] === 0 ? y(null, Oe, d, Qn, _, T, R, E, b) : et && (G < 0 || m !== Zn[G] ? Fe(
          Oe,
          d,
          Qn,
          2
          /* MoveType.REORDER */
        ) : G--);
      }
    }
  }, Fe = (c, a, d, p, _ = null) => {
    const { el: T, type: R, transition: E, children: b, shapeFlag: m } = c;
    if (m & 6) {
      Fe(c.component.subTree, a, d, p);
      return;
    }
    if (m & 128) {
      c.suspense.move(a, d, p);
      return;
    }
    if (m & 64) {
      R.move(c, a, d, Qe);
      return;
    }
    if (R === pe) {
      o(T, a, d);
      for (let I = 0; I < b.length; I++)
        Fe(b[I], a, d, p);
      o(c.anchor, a, d);
      return;
    }
    if (R === Bt) {
      C(c, a, d);
      return;
    }
    if (p !== 2 && m & 1 && E)
      if (p === 0)
        E.beforeEnter(T), o(T, a, d), re(() => E.enter(T), _);
      else {
        const { leave: I, delayLeave: A, afterLeave: U } = E, D = () => o(T, a, d), k = () => {
          I(T, () => {
            D(), U && U();
          });
        };
        A ? A(T, D, k) : k();
      }
    else
      o(T, a, d);
  }, be = (c, a, d, p = !1, _ = !1) => {
    const { type: T, props: R, ref: E, children: b, dynamicChildren: m, shapeFlag: N, patchFlag: I, dirs: A } = c;
    if (E != null && yn(E, null, d, c, !0), N & 256) {
      a.ctx.deactivate(c);
      return;
    }
    const U = N & 1 && A, D = !St(c);
    let k;
    if (D && (k = R && R.onVnodeBeforeUnmount) && Re(k, a, c), N & 6)
      Pr(c.component, d, p);
    else {
      if (N & 128) {
        c.suspense.unmount(d, p);
        return;
      }
      U && je(c, null, a, "beforeUnmount"), N & 64 ? c.type.remove(c, a, d, _, Qe, p) : m && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (T !== pe || I > 0 && I & 64) ? ve(m, a, d, !1, !0) : (T === pe && I & 384 || !_ && N & 16) && ve(b, a, d), p && Jn(c);
    }
    (D && (k = R && R.onVnodeUnmounted) || U) && re(() => {
      k && Re(k, a, c), U && je(c, null, a, "unmounted");
    }, d);
  }, Jn = (c) => {
    const { type: a, el: d, anchor: p, transition: _ } = c;
    if (a === pe) {
      xr(d, p);
      return;
    }
    if (a === Bt) {
      K(c);
      return;
    }
    const T = () => {
      r(d), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (c.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: R, delayLeave: E } = _, b = () => R(d, T);
      E ? E(c.el, T, b) : b();
    } else
      T();
  }, xr = (c, a) => {
    let d;
    for (; c !== a; )
      d = O(c), r(c), c = d;
    r(a);
  }, Pr = (c, a, d) => {
    const { bum: p, scope: _, update: T, subTree: R, um: E } = c;
    p && Pt(p), _.stop(), T && (T.active = !1, be(R, c, a, d)), E && re(E, a), re(() => {
      c.isUnmounted = !0;
    }, a), a && a.pendingBranch && !a.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === a.pendingId && (a.deps--, a.deps === 0 && a.resolve());
  }, ve = (c, a, d, p = !1, _ = !1, T = 0) => {
    for (let R = T; R < c.length; R++)
      be(c[R], a, d, p, _);
  }, Nt = (c) => c.shapeFlag & 6 ? Nt(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : O(c.anchor || c.el), zn = (c, a, d) => {
    c == null ? a._vnode && be(a._vnode, null, null, !0) : y(a._vnode || null, c, a, null, null, null, d), ao(), lr(), a._vnode = c;
  }, Qe = {
    p: y,
    um: be,
    m: Fe,
    r: Jn,
    mt: ut,
    mc: P,
    pc: M,
    pbc: W,
    n: Nt,
    o: e
  };
  let on, rn;
  return t && ([on, rn] = t(Qe)), {
    render: zn,
    hydrate: on,
    createApp: gi(zn, on)
  };
}
function Ve({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function vr(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (H(o) && H(r))
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      let l = r[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[s] = Be(r[s]), l.el = i.el), n || vr(i, l)), l.type === en && (l.el = i.el);
    }
}
function bi(e) {
  const t = e.slice(), n = [0];
  let o, r, s, i, l;
  const u = e.length;
  for (o = 0; o < u; o++) {
    const f = e[o];
    if (f !== 0) {
      if (r = n[n.length - 1], e[r] < f) {
        t[o] = r, n.push(o);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        l = s + i >> 1, e[n[l]] < f ? s = l + 1 : i = l;
      f < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), n[s] = o);
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; )
    n[s] = i, i = t[i];
  return n;
}
const Oi = (e) => e.__isTeleport, pe = Symbol(void 0), en = Symbol(void 0), Ue = Symbol(void 0), Bt = Symbol(void 0), pt = [];
let ge = null;
function fn(e = !1) {
  pt.push(ge = e ? null : []);
}
function Ri() {
  pt.pop(), ge = pt[pt.length - 1] || null;
}
let bt = 1;
function Oo(e) {
  bt += e;
}
function Ii(e) {
  return e.dynamicChildren = bt > 0 ? ge || tt : null, Ri(), bt > 0 && ge && ge.push(e), e;
}
function dn(e, t, n, o, r, s) {
  return Ii(_e(
    e,
    t,
    n,
    o,
    r,
    s,
    !0
    /* isBlock */
  ));
}
function Ni(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Xe(e, t) {
  return e.type === t.type && e.key === t.key;
}
const tn = "__vInternal", yr = ({ key: e }) => e ?? null, Lt = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? z(e) || ee(e) || x(e) ? { i: ue, r: e, k: t, f: !!n } : e : null;
function _e(e, t = null, n = null, o = 0, r = null, s = e === pe ? 0 : 1, i = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && yr(t),
    ref: t && Lt(t),
    scopeId: ar,
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
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ue
  };
  return l ? (Xn(u, n), s & 128 && e.normalize(u)) : n && (u.shapeFlag |= z(n) ? 8 : 16), bt > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  ge && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && ge.push(u), u;
}
const Ce = Ai;
function Ai(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === ri) && (e = Ue), Ni(e)) {
    const l = Me(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Xn(l, n), bt > 0 && !s && ge && (l.shapeFlag & 6 ? ge[ge.indexOf(e)] = l : ge.push(l)), l.patchFlag |= -2, l;
  }
  if (wi(e) && (e = e.__vccOpts), t) {
    t = vi(t);
    let { class: l, style: u } = t;
    l && !z(l) && (t.class = Kt(l)), j(u) && (Zo(u) && !H(u) && (u = q({}, u)), t.style = Vt(u));
  }
  const i = z(e) ? 1 : Fs(e) ? 128 : Oi(e) ? 64 : j(e) ? 4 : x(e) ? 2 : 0;
  return _e(e, t, n, o, r, i, s, !0);
}
function vi(e) {
  return e ? Zo(e) || tn in e ? q({}, e) : e : null;
}
function Me(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: i } = e, l = t ? Hi(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && yr(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? H(r) ? r.concat(Lt(t)) : [r, Lt(t)] : Lt(t)
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
    patchFlag: t && e.type !== pe ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && Me(e.ssContent),
    ssFallback: e.ssFallback && Me(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Ft(e = " ", t = 0) {
  return Ce(en, null, e, t);
}
function yi(e, t) {
  const n = Ce(Bt, null, e);
  return n.staticCount = t, n;
}
function Ie(e) {
  return e == null || typeof e == "boolean" ? Ce(Ue) : H(e) ? Ce(
    pe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Be(e) : Ce(en, null, String(e));
}
function Be(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Me(e);
}
function Xn(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (H(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Xn(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(tn in t) ? t._ctx = ue : r === 3 && ue && (ue.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    x(t) ? (t = { default: t, _ctx: ue }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Ft(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Hi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = Kt([t.class, o.class]));
      else if (r === "style")
        t.style = Vt([t.style, o.style]);
      else if (Xt(r)) {
        const s = t[r], i = o[r];
        i && s !== i && !(H(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
function Re(e, t, n, o = null) {
  ae(e, t, 7, [
    n,
    o
  ]);
}
const Ui = Ar();
let Ci = 0;
function xi(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || Ui, s = {
    uid: Ci++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new $r(
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
    propsOptions: Or(o, r),
    emitsOptions: ur(o, r),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: F,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: F,
    data: F,
    props: F,
    attrs: F,
    slots: F,
    refs: F,
    setupState: F,
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
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Bs.bind(null, s), e.ce && e.ce(s), s;
}
let $ = null;
const Pi = () => $ || ue, it = (e) => {
  $ = e, e.scope.on();
}, qe = () => {
  $ && $.scope.off(), $ = null;
};
function Hr(e) {
  return e.vnode.shapeFlag & 4;
}
let Ot = !1;
function Di(e, t = !1) {
  Ot = t;
  const { props: n, children: o } = e.vnode, r = Hr(e);
  fi(e, n, r, t), pi(e, o);
  const s = r ? Si(e, t) : void 0;
  return Ot = !1, s;
}
function Si(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Qo(new Proxy(e.ctx, si));
  const { setup: o } = n;
  if (o) {
    const r = e.setupContext = o.length > 1 ? Li(e) : null;
    it(e), lt();
    const s = we(o, e, 0, [e.props, r]);
    if (ct(), qe(), wo(s)) {
      if (s.then(qe, qe), t)
        return s.then((i) => {
          Ro(e, i, t);
        }).catch((i) => {
          zt(
            i,
            e,
            0
            /* ErrorCodes.SETUP_FUNCTION */
          );
        });
      e.asyncDep = s;
    } else
      Ro(e, s, t);
  } else
    Ur(e, t);
}
function Ro(e, t, n) {
  x(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : j(t) && (e.setupState = nr(t)), Ur(e, n);
}
let Io;
function Ur(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && Io && !o.render) {
      const r = o.template || Kn(e).template;
      if (r) {
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: u } = o, f = q(q({
          isCustomElement: s,
          delimiters: l
        }, i), u);
        o.render = Io(r, f);
      }
    }
    e.render = o.render || Ee;
  }
  it(e), lt(), ii(e), ct(), qe();
}
function Bi(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return se(e, "get", "$attrs"), t[n];
    }
  });
}
function Li(e) {
  const t = (o) => {
    e.exposed = o || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = Bi(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function nn(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(nr(Qo(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in _t)
          return _t[n](e);
      },
      has(t, n) {
        return n in t || n in _t;
      }
    }));
}
function wi(e) {
  return x(e) && "__vccOpts" in e;
}
const Gi = (e, t) => Us(e, t, Ot), Mi = Symbol(""), ki = () => Dt(Mi), Fi = "3.2.47", ji = "http://www.w3.org/2000/svg", Ye = typeof document < "u" ? document : null, No = Ye && /* @__PURE__ */ Ye.createElement("template"), Vi = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t ? Ye.createElementNS(ji, e) : Ye.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => Ye.createTextNode(e),
  createComment: (e) => Ye.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ye.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, r, s) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      No.innerHTML = o ? `<svg>${e}</svg>` : e;
      const l = No.content;
      if (o) {
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
function Ki(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function Wi(e, t, n) {
  const o = e.style, r = z(n);
  if (n && !r) {
    if (t && !z(t))
      for (const s in t)
        n[s] == null && Hn(o, s, "");
    for (const s in n)
      Hn(o, s, n[s]);
  } else {
    const s = o.display;
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = s);
  }
}
const Ao = /\s*!important$/;
function Hn(e, t, n) {
  if (H(n))
    n.forEach((o) => Hn(e, t, o));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Xi(e, t);
    Ao.test(n) ? e.setProperty(he(o), n.replace(Ao, ""), "important") : e[o] = n;
  }
}
const vo = ["Webkit", "Moz", "ms"], _n = {};
function Xi(e, t) {
  const n = _n[t];
  if (n)
    return n;
  let o = He(t);
  if (o !== "filter" && o in e)
    return _n[t] = o;
  o = ko(o);
  for (let r = 0; r < vo.length; r++) {
    const s = vo[r] + o;
    if (s in e)
      return _n[t] = s;
  }
  return t;
}
const yo = "http://www.w3.org/1999/xlink";
function Yi(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(yo, t.slice(6, t.length)) : e.setAttributeNS(yo, t, n);
  else {
    const s = Gr(t);
    n == null || s && !So(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n);
  }
}
function $i(e, t, n, o, r, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    o && i(o, r, s), e[t] = n ?? "";
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
    u === "boolean" ? n = So(n) : n == null && u === "string" ? (n = "", l = !0) : u === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(t);
}
function $e(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Ji(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function zi(e, t, n, o, r = null) {
  const s = e._vei || (e._vei = {}), i = s[t];
  if (o && i)
    i.value = o;
  else {
    const [l, u] = qi(t);
    if (o) {
      const f = s[t] = el(o, r);
      $e(e, l, f, u);
    } else
      i && (Ji(e, l, i, u), s[t] = void 0);
  }
}
const Ho = /(?:Once|Passive|Capture)$/;
function qi(e) {
  let t;
  if (Ho.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Ho); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : he(e.slice(2)), t];
}
let pn = 0;
const Zi = /* @__PURE__ */ Promise.resolve(), Qi = () => pn || (Zi.then(() => pn = 0), pn = Date.now());
function el(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    ae(tl(o, n.value), t, 5, [o]);
  };
  return n.value = e, n.attached = Qi(), n;
}
function tl(e, t) {
  if (H(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else
    return t;
}
const Uo = /^on[a-z]/, nl = (e, t, n, o, r = !1, s, i, l, u) => {
  t === "class" ? Ki(e, o, r) : t === "style" ? Wi(e, n, o) : Xt(t) ? Cn(t) || zi(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ol(e, t, o, r)) ? $i(e, t, o, s, i, l, u) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Yi(e, t, o, r));
};
function ol(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && Uo.test(t) && x(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Uo.test(t) && z(n) ? !1 : t in e;
}
function rl(e, t) {
  const n = hr(e);
  class o extends Yn {
    constructor(s) {
      super(n, s, t);
    }
  }
  return o.def = n, o;
}
const sl = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Yn extends sl {
  constructor(t, n = {}, o) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && o ? o(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, sr(() => {
      this._connected || (Do(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let o = 0; o < this.attributes.length; o++)
      this._setAttr(this.attributes[o].name);
    new MutationObserver((o) => {
      for (const r of o)
        this._setAttr(r.attributeName);
    }).observe(this, { attributes: !0 });
    const t = (o, r = !1) => {
      const { props: s, styles: i } = o;
      let l;
      if (s && !H(s))
        for (const u in s) {
          const f = s[u];
          (f === Number || f && f.type === Number) && (u in this._props && (this._props[u] = to(this._props[u])), (l || (l = /* @__PURE__ */ Object.create(null)))[He(u)] = !0);
        }
      this._numberProps = l, r && this._resolveProps(o), this._applyStyles(i), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((o) => t(o, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t, o = H(n) ? n : Object.keys(n || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && o.includes(r) && this._setProp(r, this[r], !0, !1);
    for (const r of o.map(He))
      Object.defineProperty(this, r, {
        get() {
          return this._getProp(r);
        },
        set(s) {
          this._setProp(r, s);
        }
      });
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    const o = He(t);
    this._numberProps && this._numberProps[o] && (n = to(n)), this._setProp(o, n, !1);
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
  _setProp(t, n, o = !0, r = !0) {
    n !== this._props[t] && (this._props[t] = n, r && this._instance && this._update(), o && (n === !0 ? this.setAttribute(he(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(he(t), n + "") : n || this.removeAttribute(he(t))));
  }
  _update() {
    Do(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = Ce(this._def, q({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0;
      const o = (s, i) => {
        this.dispatchEvent(new CustomEvent(s, {
          detail: i
        }));
      };
      n.emit = (s, ...i) => {
        o(s, i), he(s) !== s && o(he(s), i);
      };
      let r = this;
      for (; r = r && (r.parentNode || r.host); )
        if (r instanceof Yn) {
          n.parent = r._instance, n.provides = r._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((n) => {
      const o = document.createElement("style");
      o.textContent = n, this.shadowRoot.appendChild(o);
    });
  }
}
const il = {
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
Ys.props;
const jt = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return H(t) ? (n) => Pt(t, n) : t;
};
function ll(e) {
  e.target.composing = !0;
}
function Co(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const cl = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, r) {
    e._assign = jt(r);
    const s = o || r.props && r.props.type === "number";
    $e(e, t ? "change" : "input", (i) => {
      if (i.target.composing)
        return;
      let l = e.value;
      n && (l = l.trim()), s && (l = hn(l)), e._assign(l);
    }), n && $e(e, "change", () => {
      e.value = e.value.trim();
    }), t || ($e(e, "compositionstart", ll), $e(e, "compositionend", Co), $e(e, "change", Co));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: o, number: r } }, s) {
    if (e._assign = jt(s), e.composing || document.activeElement === e && e.type !== "range" && (n || o && e.value.trim() === t || (r || e.type === "number") && hn(e.value) === t))
      return;
    const i = t ?? "";
    e.value !== i && (e.value = i);
  }
}, ul = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e._assign = jt(n), $e(e, "change", () => {
      const o = e._modelValue, r = al(e), s = e.checked, i = e._assign;
      if (H(o)) {
        const l = Bo(o, r), u = l !== -1;
        if (s && !u)
          i(o.concat(r));
        else if (!s && u) {
          const f = [...o];
          f.splice(l, 1), i(f);
        }
      } else if (Yt(o)) {
        const l = new Set(o);
        s ? l.add(r) : l.delete(r), i(l);
      } else
        i(Cr(e, s));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: xo,
  beforeUpdate(e, t, n) {
    e._assign = jt(n), xo(e, t, n);
  }
};
function xo(e, { value: t, oldValue: n }, o) {
  e._modelValue = t, H(t) ? e.checked = Bo(t, o.props.value) > -1 : Yt(t) ? e.checked = t.has(o.props.value) : t !== n && (e.checked = Wt(t, Cr(e, !0)));
}
function al(e) {
  return "_value" in e ? e._value : e.value;
}
function Cr(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const fl = /* @__PURE__ */ q({ patchProp: nl }, Vi);
let Po;
function dl() {
  return Po || (Po = Ei(fl));
}
const Do = (...e) => {
  dl().render(...e);
}, _l = { id: "container" }, pl = { key: 1 }, hl = { id: "controls" }, ml = /* @__PURE__ */ yi('<datalist id="tickmarks"><option value="0"></option><option value="10"></option><option value="20"></option><option value="30"></option><option value="40"></option><option value="50"></option><option value="60"></option><option value="70"></option><option value="80"></option><option value="90"></option><option value="100"></option></datalist>', 1), gl = /* @__PURE__ */ _e("p", null, [
  /* @__PURE__ */ Ft(" ← ↑ → ↓ to move the overlay "),
  /* @__PURE__ */ _e("br"),
  /* @__PURE__ */ Ft(" escape to remove the overlay ")
], -1), El = /* @__PURE__ */ hr({
  __name: "FigmaOverlay.ce",
  setup(e) {
    const t = ft("Load figma component from clipboard"), n = ft(null), o = ft(!1), r = ft(50), s = ft(!1), i = (g) => {
      n.value && (n.value.innerHTML = g, o.value = !0, document.addEventListener("keydown", h));
    }, l = () => {
      n.value && (n.value.innerHTML = "", o.value = !1, document.removeEventListener("keydown", h));
    }, u = async () => {
      try {
        const g = await navigator.clipboard.readText();
        g.startsWith("<svg") ? i(g) : (t.value = "No SVG found in clipboard!", window.setTimeout(() => {
          t.value = "Load figma component from clipboard";
        }, 2e3));
      } catch (g) {
        console.error(g);
      }
    }, f = () => {
      var g;
      (g = n.value) == null || g.addEventListener("mousedown", (O) => {
        if (!n.value)
          return;
        const v = n.value, B = v.getBoundingClientRect(), y = O.clientX - B.left, V = O.clientY - B.top, w = (C) => {
          v.style.top = `${C.clientY - V}px`, v.style.left = `${C.clientX - y}px`;
        }, te = () => {
          document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", te);
        };
        document.addEventListener("mousemove", w), document.addEventListener("mouseup", te);
      });
    }, h = (g) => {
      if (n.value)
        switch (g.key) {
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
    return Vn(() => f()), (g, O) => (fn(), dn(pe, null, [
      _e("div", _l, [
        o.value ? (fn(), dn("div", pl, [
          _e("div", hl, [
            po(_e("input", {
              "onUpdate:modelValue": O[0] || (O[0] = (v) => r.value = v),
              type: "range",
              list: "tickmarks",
              min: "0",
              max: "100",
              step: "10"
            }, null, 512), [
              [cl, r.value]
            ]),
            ml,
            _e("label", null, [
              po(_e("input", {
                "onUpdate:modelValue": O[1] || (O[1] = (v) => s.value = v),
                type: "checkbox",
                name: "ignoreclicks",
                checked: ""
              }, null, 512), [
                [ul, s.value]
              ]),
              Ft(" Ignore clicks ")
            ])
          ]),
          gl,
          _e("button", {
            class: "mt-2",
            type: "button",
            onClick: l
          }, "Remove overlay")
        ])) : (fn(), dn("button", {
          key: 0,
          type: "button",
          onClick: u
        }, kr(t.value), 1))
      ]),
      _e("div", {
        id: "figmaOverlay",
        ref_key: "figmaOverlay",
        ref: n,
        class: Kt([s.value ? "pointer-events-none" : "pointer-events-auto"]),
        style: Vt({
          opacity: r.value / 100
        })
      }, null, 6)
    ], 64));
  }
}), Tl = `div,button,input,p{margin:0;padding:0}#container{position:absolute;bottom:1rem;left:1rem}button{background-color:#27313b;color:#dee5ec;font-size:.75rem;line-height:1rem;padding:0 .5rem;border-radius:.25rem;height:28px}#controls{width:100%;margin-bottom:.5rem}input[type=range]{width:100%}p{font-size:.75rem;line-height:1rem}label{padding-left:4px}button,p,input,label{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}#figmaOverlay{position:absolute;z-index:9999;top:0px;left:0px}.mt-2{margin-top:.5rem}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}
`, bl = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Ol = /* @__PURE__ */ bl(El, [["styles", [Tl]]]), Rl = rl(Ol);
customElements.define("figma-overlay", Rl);

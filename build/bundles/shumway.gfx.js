/*

 Copyright 2014 Mozilla Foundation

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
console.time("Load Shared Dependencies");
var Shumway, Shumway$$inline_0 = Shumway || (Shumway = {});
Shumway$$inline_0.version = "0.10.233";
Shumway$$inline_0.build = "9b9a240";
var jsGlobal = function() {
  return this || (0,eval)("this//# sourceURL=jsGlobal-getter");
}(), inBrowser = "undefined" !== typeof window && "document" in window && "plugins" in window.document, inFirefox = "undefined" !== typeof navigator && 0 <= navigator.userAgent.indexOf("Firefox");
function dumpLine(k) {
}
jsGlobal.performance || (jsGlobal.performance = {});
jsGlobal.performance.now || (jsGlobal.performance.now = "undefined" !== typeof dateNow ? dateNow : Date.now);
function lazyInitializer(k, r, f) {
  Object.defineProperty(k, r, {get:function() {
    var c = f();
    Object.defineProperty(k, r, {value:c, configurable:!0, enumerable:!0});
    return c;
  }, configurable:!0, enumerable:!0});
}
var START_TIME = performance.now();
(function(k) {
  function r(d) {
    return(d | 0) === d;
  }
  function f(d) {
    return "object" === typeof d || "function" === typeof d;
  }
  function c(d) {
    return String(Number(d)) === d;
  }
  function t(d) {
    var e = 0;
    if ("number" === typeof d) {
      return e = d | 0, d === e && 0 <= e ? !0 : d >>> 0 === d;
    }
    if ("string" !== typeof d) {
      return!1;
    }
    var b = d.length;
    if (0 === b) {
      return!1;
    }
    if ("0" === d) {
      return!0;
    }
    if (b > k.UINT32_CHAR_BUFFER_LENGTH) {
      return!1;
    }
    var h = 0, e = d.charCodeAt(h++) - 48;
    if (1 > e || 9 < e) {
      return!1;
    }
    for (var p = 0, w = 0;h < b;) {
      w = d.charCodeAt(h++) - 48;
      if (0 > w || 9 < w) {
        return!1;
      }
      p = e;
      e = 10 * e + w;
    }
    return p < k.UINT32_MAX_DIV_10 || p === k.UINT32_MAX_DIV_10 && w <= k.UINT32_MAX_MOD_10 ? !0 : !1;
  }
  (function(d) {
    d[d._0 = 48] = "_0";
    d[d._1 = 49] = "_1";
    d[d._2 = 50] = "_2";
    d[d._3 = 51] = "_3";
    d[d._4 = 52] = "_4";
    d[d._5 = 53] = "_5";
    d[d._6 = 54] = "_6";
    d[d._7 = 55] = "_7";
    d[d._8 = 56] = "_8";
    d[d._9 = 57] = "_9";
  })(k.CharacterCodes || (k.CharacterCodes = {}));
  k.UINT32_CHAR_BUFFER_LENGTH = 10;
  k.UINT32_MAX = 4294967295;
  k.UINT32_MAX_DIV_10 = 429496729;
  k.UINT32_MAX_MOD_10 = 5;
  k.isString = function(d) {
    return "string" === typeof d;
  };
  k.isFunction = function(d) {
    return "function" === typeof d;
  };
  k.isNumber = function(d) {
    return "number" === typeof d;
  };
  k.isInteger = r;
  k.isArray = function(d) {
    return d instanceof Array;
  };
  k.isNumberOrString = function(d) {
    return "number" === typeof d || "string" === typeof d;
  };
  k.isObject = f;
  k.toNumber = function(d) {
    return+d;
  };
  k.isNumericString = c;
  k.isNumeric = function(d) {
    if ("number" === typeof d) {
      return!0;
    }
    if ("string" === typeof d) {
      var e = d.charCodeAt(0);
      return 65 <= e && 90 >= e || 97 <= e && 122 >= e || 36 === e || 95 === e ? !1 : t(d) || c(d);
    }
    return!1;
  };
  k.isIndex = t;
  k.isNullOrUndefined = function(d) {
    return void 0 == d;
  };
  var n;
  (function(d) {
    d.error = function(b) {
      console.error(b);
      throw Error(b);
    };
    d.assert = function(b, h) {
      void 0 === h && (h = "assertion failed");
      "" === b && (b = !0);
      if (!b) {
        if ("undefined" !== typeof console && "assert" in console) {
          throw console.assert(!1, h), Error(h);
        }
        d.error(h.toString());
      }
    };
    d.assertUnreachable = function(b) {
      throw Error("Reached unreachable location " + Error().stack.split("\n")[1] + b);
    };
    d.assertNotImplemented = function(b, h) {
      b || d.error("notImplemented: " + h);
    };
    d.warning = function(b, h, p) {
    };
    d.notUsed = function(b) {
    };
    d.notImplemented = function(b) {
    };
    d.dummyConstructor = function(b) {
    };
    d.abstractMethod = function(b) {
    };
    var e = {};
    d.somewhatImplemented = function(b) {
      e[b] || (e[b] = !0);
    };
    d.unexpected = function(b) {
      d.assert(!1, "Unexpected: " + b);
    };
    d.unexpectedCase = function(b) {
      d.assert(!1, "Unexpected Case: " + b);
    };
  })(n = k.Debug || (k.Debug = {}));
  k.getTicks = function() {
    return performance.now();
  };
  (function(d) {
    function e(h, p) {
      for (var b = 0, e = h.length;b < e;b++) {
        if (h[b] === p) {
          return b;
        }
      }
      h.push(p);
      return h.length - 1;
    }
    d.popManyInto = function(h, b, w) {
      for (var e = b - 1;0 <= e;e--) {
        w[e] = h.pop();
      }
      w.length = b;
    };
    d.popMany = function(h, b) {
      var w = h.length - b, e = h.slice(w, this.length);
      h.length = w;
      return e;
    };
    d.popManyIntoVoid = function(h, b) {
      h.length -= b;
    };
    d.pushMany = function(h, b) {
      for (var w = 0;w < b.length;w++) {
        h.push(b[w]);
      }
    };
    d.top = function(h) {
      return h.length && h[h.length - 1];
    };
    d.last = function(h) {
      return h.length && h[h.length - 1];
    };
    d.peek = function(h) {
      return h[h.length - 1];
    };
    d.indexOf = function(h, b) {
      for (var w = 0, e = h.length;w < e;w++) {
        if (h[w] === b) {
          return w;
        }
      }
      return-1;
    };
    d.equals = function(h, b) {
      if (h.length !== b.length) {
        return!1;
      }
      for (var w = 0;w < h.length;w++) {
        if (h[w] !== b[w]) {
          return!1;
        }
      }
      return!0;
    };
    d.pushUnique = e;
    d.unique = function(h) {
      for (var b = [], w = 0;w < h.length;w++) {
        e(b, h[w]);
      }
      return b;
    };
    d.copyFrom = function(h, b) {
      h.length = 0;
      d.pushMany(h, b);
    };
    d.ensureTypedArrayCapacity = function(h, b) {
      if (h.length < b) {
        var w = h;
        h = new h.constructor(k.IntegerUtilities.nearestPowerOfTwo(b));
        h.set(w, 0);
      }
      return h;
    };
    var b = function() {
      function b(h) {
        void 0 === h && (h = 16);
        this._f32 = this._i32 = this._u16 = this._u8 = null;
        this._offset = 0;
        this.ensureCapacity(h);
      }
      b.prototype.reset = function() {
        this._offset = 0;
      };
      Object.defineProperty(b.prototype, "offset", {get:function() {
        return this._offset;
      }, enumerable:!0, configurable:!0});
      b.prototype.getIndex = function(b) {
        return this._offset / b;
      };
      b.prototype.ensureAdditionalCapacity = function() {
        this.ensureCapacity(this._offset + 68);
      };
      b.prototype.ensureCapacity = function(b) {
        if (!this._u8) {
          this._u8 = new Uint8Array(b);
        } else {
          if (this._u8.length > b) {
            return;
          }
        }
        var h = 2 * this._u8.length;
        h < b && (h = b);
        b = new Uint8Array(h);
        b.set(this._u8, 0);
        this._u8 = b;
        this._u16 = new Uint16Array(b.buffer);
        this._i32 = new Int32Array(b.buffer);
        this._f32 = new Float32Array(b.buffer);
      };
      b.prototype.writeInt = function(b) {
        this.ensureCapacity(this._offset + 4);
        this.writeIntUnsafe(b);
      };
      b.prototype.writeIntAt = function(b, h) {
        this.ensureCapacity(h + 4);
        this._i32[h >> 2] = b;
      };
      b.prototype.writeIntUnsafe = function(b) {
        this._i32[this._offset >> 2] = b;
        this._offset += 4;
      };
      b.prototype.writeFloat = function(b) {
        this.ensureCapacity(this._offset + 4);
        this.writeFloatUnsafe(b);
      };
      b.prototype.writeFloatUnsafe = function(b) {
        this._f32[this._offset >> 2] = b;
        this._offset += 4;
      };
      b.prototype.write4Floats = function(b, h, e, d) {
        this.ensureCapacity(this._offset + 16);
        this.write4FloatsUnsafe(b, h, e, d);
      };
      b.prototype.write4FloatsUnsafe = function(b, h, e, d) {
        var a = this._offset >> 2;
        this._f32[a + 0] = b;
        this._f32[a + 1] = h;
        this._f32[a + 2] = e;
        this._f32[a + 3] = d;
        this._offset += 16;
      };
      b.prototype.write6Floats = function(b, h, e, d, a, g) {
        this.ensureCapacity(this._offset + 24);
        this.write6FloatsUnsafe(b, h, e, d, a, g);
      };
      b.prototype.write6FloatsUnsafe = function(b, h, e, d, a, g) {
        var q = this._offset >> 2;
        this._f32[q + 0] = b;
        this._f32[q + 1] = h;
        this._f32[q + 2] = e;
        this._f32[q + 3] = d;
        this._f32[q + 4] = a;
        this._f32[q + 5] = g;
        this._offset += 24;
      };
      b.prototype.subF32View = function() {
        return this._f32.subarray(0, this._offset >> 2);
      };
      b.prototype.subI32View = function() {
        return this._i32.subarray(0, this._offset >> 2);
      };
      b.prototype.subU16View = function() {
        return this._u16.subarray(0, this._offset >> 1);
      };
      b.prototype.subU8View = function() {
        return this._u8.subarray(0, this._offset);
      };
      b.prototype.hashWords = function(b, h, e) {
        h = this._i32;
        for (var d = 0;d < e;d++) {
          b = (31 * b | 0) + h[d] | 0;
        }
        return b;
      };
      b.prototype.reserve = function(b) {
        b = b + 3 & -4;
        this.ensureCapacity(this._offset + b);
        this._offset += b;
      };
      return b;
    }();
    d.ArrayWriter = b;
  })(k.ArrayUtilities || (k.ArrayUtilities = {}));
  var a = function() {
    function d(e) {
      this._u8 = new Uint8Array(e);
      this._u16 = new Uint16Array(e);
      this._i32 = new Int32Array(e);
      this._f32 = new Float32Array(e);
      this._offset = 0;
    }
    Object.defineProperty(d.prototype, "offset", {get:function() {
      return this._offset;
    }, enumerable:!0, configurable:!0});
    d.prototype.isEmpty = function() {
      return this._offset === this._u8.length;
    };
    d.prototype.readInt = function() {
      var e = this._i32[this._offset >> 2];
      this._offset += 4;
      return e;
    };
    d.prototype.readFloat = function() {
      var e = this._f32[this._offset >> 2];
      this._offset += 4;
      return e;
    };
    return d;
  }();
  k.ArrayReader = a;
  (function(d) {
    function e(b, p) {
      return Object.prototype.hasOwnProperty.call(b, p);
    }
    function b(b, p) {
      for (var w in p) {
        e(p, w) && (b[w] = p[w]);
      }
    }
    d.boxValue = function(b) {
      return void 0 == b || f(b) ? b : Object(b);
    };
    d.toKeyValueArray = function(b) {
      var p = Object.prototype.hasOwnProperty, e = [], d;
      for (d in b) {
        p.call(b, d) && e.push([d, b[d]]);
      }
      return e;
    };
    d.isPrototypeWriteable = function(b) {
      return Object.getOwnPropertyDescriptor(b, "prototype").writable;
    };
    d.hasOwnProperty = e;
    d.propertyIsEnumerable = function(b, p) {
      return Object.prototype.propertyIsEnumerable.call(b, p);
    };
    d.getOwnPropertyDescriptor = function(b, p) {
      return Object.getOwnPropertyDescriptor(b, p);
    };
    d.hasOwnGetter = function(b, p) {
      var e = Object.getOwnPropertyDescriptor(b, p);
      return!(!e || !e.get);
    };
    d.getOwnGetter = function(b, p) {
      var e = Object.getOwnPropertyDescriptor(b, p);
      return e ? e.get : null;
    };
    d.hasOwnSetter = function(b, p) {
      var e = Object.getOwnPropertyDescriptor(b, p);
      return!(!e || !e.set);
    };
    d.createMap = function() {
      return Object.create(null);
    };
    d.createArrayMap = function() {
      return[];
    };
    d.defineReadOnlyProperty = function(b, p, e) {
      Object.defineProperty(b, p, {value:e, writable:!1, configurable:!0, enumerable:!1});
    };
    d.getOwnPropertyDescriptors = function(b) {
      for (var p = d.createMap(), e = Object.getOwnPropertyNames(b), a = 0;a < e.length;a++) {
        p[e[a]] = Object.getOwnPropertyDescriptor(b, e[a]);
      }
      return p;
    };
    d.cloneObject = function(h) {
      var p = Object.create(Object.getPrototypeOf(h));
      b(p, h);
      return p;
    };
    d.copyProperties = function(b, p) {
      for (var e in p) {
        b[e] = p[e];
      }
    };
    d.copyOwnProperties = b;
    d.copyOwnPropertyDescriptors = function(b, p, w) {
      void 0 === w && (w = !0);
      for (var d in p) {
        if (e(p, d)) {
          var a = Object.getOwnPropertyDescriptor(p, d);
          if (w || !e(b, d)) {
            try {
              Object.defineProperty(b, d, a);
            } catch (g) {
            }
          }
        }
      }
    };
    d.getLatestGetterOrSetterPropertyDescriptor = function(b, p) {
      for (var e = {};b;) {
        var d = Object.getOwnPropertyDescriptor(b, p);
        d && (e.get = e.get || d.get, e.set = e.set || d.set);
        if (e.get && e.set) {
          break;
        }
        b = Object.getPrototypeOf(b);
      }
      return e;
    };
    d.defineNonEnumerableGetterOrSetter = function(b, p, e, a) {
      var g = d.getLatestGetterOrSetterPropertyDescriptor(b, p);
      g.configurable = !0;
      g.enumerable = !1;
      a ? g.get = e : g.set = e;
      Object.defineProperty(b, p, g);
    };
    d.defineNonEnumerableGetter = function(b, p, e) {
      Object.defineProperty(b, p, {get:e, configurable:!0, enumerable:!1});
    };
    d.defineNonEnumerableSetter = function(b, p, e) {
      Object.defineProperty(b, p, {set:e, configurable:!0, enumerable:!1});
    };
    d.defineNonEnumerableProperty = function(b, p, e) {
      Object.defineProperty(b, p, {value:e, writable:!0, configurable:!0, enumerable:!1});
    };
    d.defineNonEnumerableForwardingProperty = function(b, p, e) {
      Object.defineProperty(b, p, {get:g.makeForwardingGetter(e), set:g.makeForwardingSetter(e), writable:!0, configurable:!0, enumerable:!1});
    };
    d.defineNewNonEnumerableProperty = function(b, p, e) {
      d.defineNonEnumerableProperty(b, p, e);
    };
    d.createPublicAliases = function(b, p) {
      for (var e = {value:null, writable:!0, configurable:!0, enumerable:!1}, d = 0;d < p.length;d++) {
        var a = p[d];
        e.value = b[a];
        Object.defineProperty(b, "$Bg" + a, e);
      }
    };
  })(k.ObjectUtilities || (k.ObjectUtilities = {}));
  var g;
  (function(d) {
    d.makeForwardingGetter = function(e) {
      return new Function('return this["' + e + '"]//# sourceURL=fwd-get-' + e + ".as");
    };
    d.makeForwardingSetter = function(e) {
      return new Function("value", 'this["' + e + '"] = value;//# sourceURL=fwd-set-' + e + ".as");
    };
    d.bindSafely = function(e, b) {
      function h() {
        return e.apply(b, arguments);
      }
      h.boundTo = b;
      return h;
    };
  })(g = k.FunctionUtilities || (k.FunctionUtilities = {}));
  (function(d) {
    function e(b) {
      return "string" === typeof b ? '"' + b + '"' : "number" === typeof b || "boolean" === typeof b ? String(b) : b instanceof Array ? "[] " + b.length : typeof b;
    }
    d.repeatString = function(b, h) {
      for (var p = "", e = 0;e < h;e++) {
        p += b;
      }
      return p;
    };
    d.memorySizeToString = function(b) {
      b |= 0;
      return 1024 > b ? b + " B" : 1048576 > b ? (b / 1024).toFixed(2) + "KB" : (b / 1048576).toFixed(2) + "MB";
    };
    d.toSafeString = e;
    d.toSafeArrayString = function(b) {
      for (var h = [], p = 0;p < b.length;p++) {
        h.push(e(b[p]));
      }
      return h.join(", ");
    };
    d.utf8decode = function(b) {
      for (var h = new Uint8Array(4 * b.length), p = 0, e = 0, w = b.length;e < w;e++) {
        var d = b.charCodeAt(e);
        if (127 >= d) {
          h[p++] = d;
        } else {
          if (55296 <= d && 56319 >= d) {
            var a = b.charCodeAt(e + 1);
            56320 <= a && 57343 >= a && (d = ((d & 1023) << 10) + (a & 1023) + 65536, ++e);
          }
          0 !== (d & 4292870144) ? (h[p++] = 248 | d >>> 24 & 3, h[p++] = 128 | d >>> 18 & 63, h[p++] = 128 | d >>> 12 & 63, h[p++] = 128 | d >>> 6 & 63) : 0 !== (d & 4294901760) ? (h[p++] = 240 | d >>> 18 & 7, h[p++] = 128 | d >>> 12 & 63, h[p++] = 128 | d >>> 6 & 63) : 0 !== (d & 4294965248) ? (h[p++] = 224 | d >>> 12 & 15, h[p++] = 128 | d >>> 6 & 63) : h[p++] = 192 | d >>> 6 & 31;
          h[p++] = 128 | d & 63;
        }
      }
      return h.subarray(0, p);
    };
    d.utf8encode = function(b) {
      for (var h = 0, p = "";h < b.length;) {
        var e = b[h++] & 255;
        if (127 >= e) {
          p += String.fromCharCode(e);
        } else {
          var d = 192, w = 5;
          do {
            if ((e & (d >> 1 | 128)) === d) {
              break;
            }
            d = d >> 1 | 128;
            --w;
          } while (0 <= w);
          if (0 >= w) {
            p += String.fromCharCode(e);
          } else {
            for (var e = e & (1 << w) - 1, d = !1, a = 5;a >= w;--a) {
              var g = b[h++];
              if (128 != (g & 192)) {
                d = !0;
                break;
              }
              e = e << 6 | g & 63;
            }
            if (d) {
              for (w = h - (7 - a);w < h;++w) {
                p += String.fromCharCode(b[w] & 255);
              }
            } else {
              p = 65536 <= e ? p + String.fromCharCode(e - 65536 >> 10 & 1023 | 55296, e & 1023 | 56320) : p + String.fromCharCode(e);
            }
          }
        }
      }
      return p;
    };
    d.base64ArrayBuffer = function(b) {
      var h = "";
      b = new Uint8Array(b);
      for (var p = b.byteLength, e = p % 3, p = p - e, d, w, a, g, G = 0;G < p;G += 3) {
        g = b[G] << 16 | b[G + 1] << 8 | b[G + 2], d = (g & 16515072) >> 18, w = (g & 258048) >> 12, a = (g & 4032) >> 6, g &= 63, h += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[d] + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[w] + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[a] + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[g];
      }
      1 == e ? (g = b[p], h += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(g & 252) >> 2] + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(g & 3) << 4] + "==") : 2 == e && (g = b[p] << 8 | b[p + 1], h += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(g & 64512) >> 10] + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(g & 1008) >> 4] + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(g & 15) << 
      2] + "=");
      return h;
    };
    d.escapeString = function(b) {
      void 0 !== b && (b = b.replace(/[^\w$]/gi, "$"), /^\d/.test(b) && (b = "$" + b));
      return b;
    };
    d.fromCharCodeArray = function(b) {
      for (var h = "", p = 0;p < b.length;p += 16384) {
        var e = Math.min(b.length - p, 16384), h = h + String.fromCharCode.apply(null, b.subarray(p, p + e))
      }
      return h;
    };
    d.variableLengthEncodeInt32 = function(b) {
      for (var h = 32 - Math.clz32(b), p = Math.ceil(h / 6), h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[p], p = p - 1;0 <= p;p--) {
        h += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[b >> 6 * p & 63];
      }
      return h;
    };
    d.toEncoding = function(b) {
      return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[b];
    };
    d.fromEncoding = function(b) {
      if (65 <= b && 90 >= b) {
        return b - 65;
      }
      if (97 <= b && 122 >= b) {
        return b - 71;
      }
      if (48 <= b && 57 >= b) {
        return b + 4;
      }
      if (36 === b) {
        return 62;
      }
      if (95 === b) {
        return 63;
      }
    };
    d.variableLengthDecodeInt32 = function(b) {
      for (var h = d.fromEncoding(b.charCodeAt(0)), p = 0, e = 0;e < h;e++) {
        var w = 6 * (h - e - 1), p = p | d.fromEncoding(b.charCodeAt(1 + e)) << w
      }
      return p;
    };
    d.trimMiddle = function(b, h) {
      if (b.length <= h) {
        return b;
      }
      var p = h >> 1, e = h - p - 1;
      return b.substr(0, p) + "\u2026" + b.substr(b.length - e, e);
    };
    d.multiple = function(b, h) {
      for (var p = "", e = 0;e < h;e++) {
        p += b;
      }
      return p;
    };
    d.indexOfAny = function(b, h, p) {
      for (var e = b.length, d = 0;d < h.length;d++) {
        var w = b.indexOf(h[d], p);
        0 <= w && (e = Math.min(e, w));
      }
      return e === b.length ? -1 : e;
    };
    var b = Array(3), h = Array(4), p = Array(5), w = Array(6), a = Array(7), g = Array(8), q = Array(9);
    d.concat3 = function(h, p, e) {
      b[0] = h;
      b[1] = p;
      b[2] = e;
      return b.join("");
    };
    d.concat4 = function(b, p, e, d) {
      h[0] = b;
      h[1] = p;
      h[2] = e;
      h[3] = d;
      return h.join("");
    };
    d.concat5 = function(b, h, e, d, w) {
      p[0] = b;
      p[1] = h;
      p[2] = e;
      p[3] = d;
      p[4] = w;
      return p.join("");
    };
    d.concat6 = function(b, h, p, e, d, a) {
      w[0] = b;
      w[1] = h;
      w[2] = p;
      w[3] = e;
      w[4] = d;
      w[5] = a;
      return w.join("");
    };
    d.concat7 = function(b, h, p, e, d, w, g) {
      a[0] = b;
      a[1] = h;
      a[2] = p;
      a[3] = e;
      a[4] = d;
      a[5] = w;
      a[6] = g;
      return a.join("");
    };
    d.concat8 = function(b, h, p, e, d, w, a, G) {
      g[0] = b;
      g[1] = h;
      g[2] = p;
      g[3] = e;
      g[4] = d;
      g[5] = w;
      g[6] = a;
      g[7] = G;
      return g.join("");
    };
    d.concat9 = function(b, h, p, e, d, w, a, g, G) {
      q[0] = b;
      q[1] = h;
      q[2] = p;
      q[3] = e;
      q[4] = d;
      q[5] = w;
      q[6] = a;
      q[7] = g;
      q[8] = G;
      return q.join("");
    };
  })(k.StringUtilities || (k.StringUtilities = {}));
  (function(d) {
    var e = new Uint8Array([7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21]), b = new Int32Array([-680876936, -389564586, 606105819, -1044525330, -176418897, 1200080426, -1473231341, -45705983, 1770035416, -1958414417, -42063, -1990404162, 1804603682, -40341101, -1502002290, 1236535329, -165796510, -1069501632, 
    643717713, -373897302, -701558691, 38016083, -660478335, -405537848, 568446438, -1019803690, -187363961, 1163531501, -1444681467, -51403784, 1735328473, -1926607734, -378558, -2022574463, 1839030562, -35309556, -1530992060, 1272893353, -155497632, -1094730640, 681279174, -358537222, -722521979, 76029189, -640364487, -421815835, 530742520, -995338651, -198630844, 1126891415, -1416354905, -57434055, 1700485571, -1894986606, -1051523, -2054922799, 1873313359, -30611744, -1560198380, 1309151649, 
    -145523070, -1120210379, 718787259, -343485551]);
    d.hashBytesTo32BitsMD5 = function(h, p, d) {
      var a = 1732584193, g = -271733879, q = -1732584194, m = 271733878, c = d + 72 & -64, l = new Uint8Array(c), n;
      for (n = 0;n < d;++n) {
        l[n] = h[p++];
      }
      l[n++] = 128;
      for (h = c - 8;n < h;) {
        l[n++] = 0;
      }
      l[n++] = d << 3 & 255;
      l[n++] = d >> 5 & 255;
      l[n++] = d >> 13 & 255;
      l[n++] = d >> 21 & 255;
      l[n++] = d >>> 29 & 255;
      l[n++] = 0;
      l[n++] = 0;
      l[n++] = 0;
      h = new Int32Array(16);
      for (n = 0;n < c;) {
        for (d = 0;16 > d;++d, n += 4) {
          h[d] = l[n] | l[n + 1] << 8 | l[n + 2] << 16 | l[n + 3] << 24;
        }
        var s = a;
        p = g;
        var u = q, v = m, f, k;
        for (d = 0;64 > d;++d) {
          16 > d ? (f = p & u | ~p & v, k = d) : 32 > d ? (f = v & p | ~v & u, k = 5 * d + 1 & 15) : 48 > d ? (f = p ^ u ^ v, k = 3 * d + 5 & 15) : (f = u ^ (p | ~v), k = 7 * d & 15);
          var r = v, s = s + f + b[d] + h[k] | 0;
          f = e[d];
          v = u;
          u = p;
          p = p + (s << f | s >>> 32 - f) | 0;
          s = r;
        }
        a = a + s | 0;
        g = g + p | 0;
        q = q + u | 0;
        m = m + v | 0;
      }
      return a;
    };
    d.hashBytesTo32BitsAdler = function(b, p, e) {
      var d = 1, a = 0;
      for (e = p + e;p < e;++p) {
        d = (d + (b[p] & 255)) % 65521, a = (a + d) % 65521;
      }
      return a << 16 | d;
    };
  })(k.HashUtilities || (k.HashUtilities = {}));
  var q = function() {
    function d() {
    }
    d.seed = function(e) {
      d._state[0] = e;
      d._state[1] = e;
    };
    d.next = function() {
      var e = this._state, b = Math.imul(18273, e[0] & 65535) + (e[0] >>> 16) | 0;
      e[0] = b;
      var h = Math.imul(36969, e[1] & 65535) + (e[1] >>> 16) | 0;
      e[1] = h;
      e = (b << 16) + (h & 65535) | 0;
      return 2.3283064365386963E-10 * (0 > e ? e + 4294967296 : e);
    };
    d._state = new Uint32Array([57005, 48879]);
    return d;
  }();
  k.Random = q;
  Math.random = function() {
    return q.next();
  };
  (function() {
    function d() {
      this.id = "$weakmap" + e++;
    }
    if ("function" !== typeof jsGlobal.WeakMap) {
      var e = 0;
      d.prototype = {has:function(b) {
        return b.hasOwnProperty(this.id);
      }, get:function(b, h) {
        return b.hasOwnProperty(this.id) ? b[this.id] : h;
      }, set:function(b, h) {
        Object.defineProperty(b, this.id, {value:h, enumerable:!1, configurable:!0});
      }, delete:function(b) {
        delete b[this.id];
      }};
      jsGlobal.WeakMap = d;
    }
  })();
  a = function() {
    function d() {
      "undefined" !== typeof netscape && netscape.security.PrivilegeManager ? this._map = new WeakMap : this._list = [];
    }
    d.prototype.clear = function() {
      this._map ? this._map.clear() : this._list.length = 0;
    };
    d.prototype.push = function(e) {
      this._map ? this._map.set(e, null) : this._list.push(e);
    };
    d.prototype.remove = function(e) {
      this._map ? this._map.delete(e) : this._list[this._list.indexOf(e)] = null;
    };
    d.prototype.forEach = function(e) {
      if (this._map) {
        "undefined" !== typeof netscape && netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"), Components.utils.nondeterministicGetWeakMapKeys(this._map).forEach(function(b) {
          0 !== b._referenceCount && e(b);
        });
      } else {
        for (var b = this._list, h = 0, p = 0;p < b.length;p++) {
          var d = b[p];
          d && (0 === d._referenceCount ? (b[p] = null, h++) : e(d));
        }
        if (16 < h && h > b.length >> 2) {
          h = [];
          for (p = 0;p < b.length;p++) {
            (d = b[p]) && 0 < d._referenceCount && h.push(d);
          }
          this._list = h;
        }
      }
    };
    Object.defineProperty(d.prototype, "length", {get:function() {
      return this._map ? -1 : this._list.length;
    }, enumerable:!0, configurable:!0});
    return d;
  }();
  k.WeakList = a;
  var l;
  (function(d) {
    d.pow2 = function(e) {
      return e === (e | 0) ? 0 > e ? 1 / (1 << -e) : 1 << e : Math.pow(2, e);
    };
    d.clamp = function(e, b, h) {
      return Math.max(b, Math.min(h, e));
    };
    d.roundHalfEven = function(e) {
      if (.5 === Math.abs(e % 1)) {
        var b = Math.floor(e);
        return 0 === b % 2 ? b : Math.ceil(e);
      }
      return Math.round(e);
    };
    d.altTieBreakRound = function(e, b) {
      return.5 !== Math.abs(e % 1) || b ? Math.round(e) : e | 0;
    };
    d.epsilonEquals = function(e, b) {
      return 1E-7 > Math.abs(e - b);
    };
  })(l = k.NumberUtilities || (k.NumberUtilities = {}));
  (function(d) {
    d[d.MaxU16 = 65535] = "MaxU16";
    d[d.MaxI16 = 32767] = "MaxI16";
    d[d.MinI16 = -32768] = "MinI16";
  })(k.Numbers || (k.Numbers = {}));
  var u;
  (function(d) {
    function e(b) {
      return 256 * b << 16 >> 16;
    }
    var b = new ArrayBuffer(8);
    d.i8 = new Int8Array(b);
    d.u8 = new Uint8Array(b);
    d.i32 = new Int32Array(b);
    d.f32 = new Float32Array(b);
    d.f64 = new Float64Array(b);
    d.nativeLittleEndian = 1 === (new Int8Array((new Int32Array([1])).buffer))[0];
    d.floatToInt32 = function(b) {
      d.f32[0] = b;
      return d.i32[0];
    };
    d.int32ToFloat = function(b) {
      d.i32[0] = b;
      return d.f32[0];
    };
    d.swap16 = function(b) {
      return(b & 255) << 8 | b >> 8 & 255;
    };
    d.swap32 = function(b) {
      return(b & 255) << 24 | (b & 65280) << 8 | b >> 8 & 65280 | b >> 24 & 255;
    };
    d.toS8U8 = e;
    d.fromS8U8 = function(b) {
      return b / 256;
    };
    d.clampS8U8 = function(b) {
      return e(b) / 256;
    };
    d.toS16 = function(b) {
      return b << 16 >> 16;
    };
    d.bitCount = function(b) {
      b -= b >> 1 & 1431655765;
      b = (b & 858993459) + (b >> 2 & 858993459);
      return 16843009 * (b + (b >> 4) & 252645135) >> 24;
    };
    d.ones = function(b) {
      b -= b >> 1 & 1431655765;
      b = (b & 858993459) + (b >> 2 & 858993459);
      return 16843009 * (b + (b >> 4) & 252645135) >> 24;
    };
    d.trailingZeros = function(b) {
      return d.ones((b & -b) - 1);
    };
    d.getFlags = function(b, p) {
      var e = "";
      for (b = 0;b < p.length;b++) {
        b & 1 << b && (e += p[b] + " ");
      }
      return 0 === e.length ? "" : e.trim();
    };
    d.isPowerOfTwo = function(b) {
      return b && 0 === (b & b - 1);
    };
    d.roundToMultipleOfFour = function(b) {
      return b + 3 & -4;
    };
    d.nearestPowerOfTwo = function(b) {
      b--;
      b |= b >> 1;
      b |= b >> 2;
      b |= b >> 4;
      b |= b >> 8;
      b |= b >> 16;
      b++;
      return b;
    };
    d.roundToMultipleOfPowerOfTwo = function(b, p) {
      var e = (1 << p) - 1;
      return b + e & ~e;
    };
    Math.imul || (Math.imul = function(b, p) {
      var e = b & 65535, d = p & 65535;
      return e * d + ((b >>> 16 & 65535) * d + e * (p >>> 16 & 65535) << 16 >>> 0) | 0;
    });
    Math.clz32 || (Math.clz32 = function(b) {
      b |= b >> 1;
      b |= b >> 2;
      b |= b >> 4;
      b |= b >> 8;
      return 32 - d.ones(b | b >> 16);
    });
  })(u = k.IntegerUtilities || (k.IntegerUtilities = {}));
  (function(d) {
    function e(b, h, p, e, d, a) {
      return(p - b) * (a - h) - (e - h) * (d - b);
    }
    d.pointInPolygon = function(b, h, p) {
      for (var e = 0, d = p.length - 2, a = 0;a < d;a += 2) {
        var g = p[a + 0], q = p[a + 1], m = p[a + 2], l = p[a + 3];
        (q <= h && l > h || q > h && l <= h) && b < g + (h - q) / (l - q) * (m - g) && e++;
      }
      return 1 === (e & 1);
    };
    d.signedArea = e;
    d.counterClockwise = function(b, h, p, d, a, g) {
      return 0 < e(b, h, p, d, a, g);
    };
    d.clockwise = function(b, h, p, d, a, g) {
      return 0 > e(b, h, p, d, a, g);
    };
    d.pointInPolygonInt32 = function(b, h, p) {
      b |= 0;
      h |= 0;
      for (var e = 0, d = p.length - 2, a = 0;a < d;a += 2) {
        var g = p[a + 0], q = p[a + 1], m = p[a + 2], l = p[a + 3];
        (q <= h && l > h || q > h && l <= h) && b < g + (h - q) / (l - q) * (m - g) && e++;
      }
      return 1 === (e & 1);
    };
  })(k.GeometricUtilities || (k.GeometricUtilities = {}));
  (function(d) {
    d[d.Error = 1] = "Error";
    d[d.Warn = 2] = "Warn";
    d[d.Debug = 4] = "Debug";
    d[d.Log = 8] = "Log";
    d[d.Info = 16] = "Info";
    d[d.All = 31] = "All";
  })(k.LogLevel || (k.LogLevel = {}));
  a = function() {
    function d(e, b) {
      void 0 === e && (e = !1);
      this._tab = "  ";
      this._padding = "";
      this._suppressOutput = e;
      this._out = b || d._consoleOut;
      this._outNoNewline = b || d._consoleOutNoNewline;
    }
    d.prototype.write = function(e, b) {
      void 0 === e && (e = "");
      void 0 === b && (b = !1);
      this._suppressOutput || this._outNoNewline((b ? this._padding : "") + e);
    };
    d.prototype.writeLn = function(e) {
      void 0 === e && (e = "");
      this._suppressOutput || this._out(this._padding + e);
    };
    d.prototype.writeObject = function(e, b) {
      void 0 === e && (e = "");
      this._suppressOutput || this._out(this._padding + e, b);
    };
    d.prototype.writeTimeLn = function(e) {
      void 0 === e && (e = "");
      this._suppressOutput || this._out(this._padding + performance.now().toFixed(2) + " " + e);
    };
    d.prototype.writeComment = function(e) {
      e = e.split("\n");
      if (1 === e.length) {
        this.writeLn("// " + e[0]);
      } else {
        this.writeLn("/**");
        for (var b = 0;b < e.length;b++) {
          this.writeLn(" * " + e[b]);
        }
        this.writeLn(" */");
      }
    };
    d.prototype.writeLns = function(e) {
      e = e.split("\n");
      for (var b = 0;b < e.length;b++) {
        this.writeLn(e[b]);
      }
    };
    d.prototype.errorLn = function(e) {
      d.logLevel & 1 && this.boldRedLn(e);
    };
    d.prototype.warnLn = function(e) {
      d.logLevel & 2 && this.yellowLn(e);
    };
    d.prototype.debugLn = function(e) {
      d.logLevel & 4 && this.purpleLn(e);
    };
    d.prototype.logLn = function(e) {
      d.logLevel & 8 && this.writeLn(e);
    };
    d.prototype.infoLn = function(e) {
      d.logLevel & 16 && this.writeLn(e);
    };
    d.prototype.yellowLn = function(e) {
      this.colorLn(d.YELLOW, e);
    };
    d.prototype.greenLn = function(e) {
      this.colorLn(d.GREEN, e);
    };
    d.prototype.boldRedLn = function(e) {
      this.colorLn(d.BOLD_RED, e);
    };
    d.prototype.redLn = function(e) {
      this.colorLn(d.RED, e);
    };
    d.prototype.purpleLn = function(e) {
      this.colorLn(d.PURPLE, e);
    };
    d.prototype.colorLn = function(e, b) {
      this._suppressOutput || (inBrowser ? this._out(this._padding + b) : this._out(this._padding + e + b + d.ENDC));
    };
    d.prototype.redLns = function(e) {
      this.colorLns(d.RED, e);
    };
    d.prototype.colorLns = function(e, b) {
      for (var h = b.split("\n"), p = 0;p < h.length;p++) {
        this.colorLn(e, h[p]);
      }
    };
    d.prototype.enter = function(e) {
      this._suppressOutput || this._out(this._padding + e);
      this.indent();
    };
    d.prototype.leaveAndEnter = function(e) {
      this.leave(e);
      this.indent();
    };
    d.prototype.leave = function(e) {
      this.outdent();
      !this._suppressOutput && e && this._out(this._padding + e);
    };
    d.prototype.indent = function() {
      this._padding += this._tab;
    };
    d.prototype.outdent = function() {
      0 < this._padding.length && (this._padding = this._padding.substring(0, this._padding.length - this._tab.length));
    };
    d.prototype.writeArray = function(e, b, h) {
      void 0 === b && (b = !1);
      void 0 === h && (h = !1);
      b = b || !1;
      for (var p = 0, d = e.length;p < d;p++) {
        var a = "";
        b && (a = null === e[p] ? "null" : void 0 === e[p] ? "undefined" : e[p].constructor.name, a += " ");
        var g = h ? "" : ("" + p).padRight(" ", 4);
        this.writeLn(g + a + e[p]);
      }
    };
    d.PURPLE = "\u001b[94m";
    d.YELLOW = "\u001b[93m";
    d.GREEN = "\u001b[92m";
    d.RED = "\u001b[91m";
    d.BOLD_RED = "\u001b[1;91m";
    d.ENDC = "\u001b[0m";
    d.logLevel = 31;
    d._consoleOut = console.info.bind(console);
    d._consoleOutNoNewline = console.info.bind(console);
    return d;
  }();
  k.IndentingWriter = a;
  var m = function() {
    return function(d, e) {
      this.value = d;
      this.next = e;
    };
  }(), a = function() {
    function d(e) {
      this._compare = e;
      this._head = null;
      this._length = 0;
    }
    d.prototype.push = function(e) {
      this._length++;
      if (this._head) {
        var b = this._head, h = null;
        e = new m(e, null);
        for (var p = this._compare;b;) {
          if (0 < p(b.value, e.value)) {
            h ? (e.next = b, h.next = e) : (e.next = this._head, this._head = e);
            return;
          }
          h = b;
          b = b.next;
        }
        h.next = e;
      } else {
        this._head = new m(e, null);
      }
    };
    d.prototype.forEach = function(e) {
      for (var b = this._head, h = null;b;) {
        var p = e(b.value);
        if (p === d.RETURN) {
          break;
        } else {
          p === d.DELETE ? b = h ? h.next = b.next : this._head = this._head.next : (h = b, b = b.next);
        }
      }
    };
    d.prototype.isEmpty = function() {
      return!this._head;
    };
    d.prototype.pop = function() {
      if (this._head) {
        this._length--;
        var e = this._head;
        this._head = this._head.next;
        return e.value;
      }
    };
    d.prototype.contains = function(e) {
      for (var b = this._head;b;) {
        if (b.value === e) {
          return!0;
        }
        b = b.next;
      }
      return!1;
    };
    d.prototype.toString = function() {
      for (var e = "[", b = this._head;b;) {
        e += b.value.toString(), (b = b.next) && (e += ",");
      }
      return e + "]";
    };
    d.RETURN = 1;
    d.DELETE = 2;
    return d;
  }();
  k.SortedList = a;
  a = function() {
    function d(e, b) {
      void 0 === b && (b = 12);
      this.start = this.index = 0;
      this._size = 1 << b;
      this._mask = this._size - 1;
      this.array = new e(this._size);
    }
    d.prototype.get = function(e) {
      return this.array[e];
    };
    d.prototype.forEachInReverse = function(e) {
      if (!this.isEmpty()) {
        for (var b = 0 === this.index ? this._size - 1 : this.index - 1, h = this.start - 1 & this._mask;b !== h && !e(this.array[b], b);) {
          b = 0 === b ? this._size - 1 : b - 1;
        }
      }
    };
    d.prototype.write = function(e) {
      this.array[this.index] = e;
      this.index = this.index + 1 & this._mask;
      this.index === this.start && (this.start = this.start + 1 & this._mask);
    };
    d.prototype.isFull = function() {
      return(this.index + 1 & this._mask) === this.start;
    };
    d.prototype.isEmpty = function() {
      return this.index === this.start;
    };
    d.prototype.reset = function() {
      this.start = this.index = 0;
    };
    return d;
  }();
  k.CircularBuffer = a;
  (function(d) {
    function e(b) {
      return b + (d.BITS_PER_WORD - 1) >> d.ADDRESS_BITS_PER_WORD << d.ADDRESS_BITS_PER_WORD;
    }
    function b(b, p) {
      b = b || "1";
      p = p || "0";
      for (var h = "", e = 0;e < length;e++) {
        h += this.get(e) ? b : p;
      }
      return h;
    }
    function h(b) {
      for (var p = [], h = 0;h < length;h++) {
        this.get(h) && p.push(b ? b[h] : h);
      }
      return p.join(", ");
    }
    d.ADDRESS_BITS_PER_WORD = 5;
    d.BITS_PER_WORD = 1 << d.ADDRESS_BITS_PER_WORD;
    d.BIT_INDEX_MASK = d.BITS_PER_WORD - 1;
    var p = function() {
      function b(p) {
        this.size = e(p);
        this.dirty = this.count = 0;
        this.length = p;
        this.bits = new Uint32Array(this.size >> d.ADDRESS_BITS_PER_WORD);
      }
      b.prototype.recount = function() {
        if (this.dirty) {
          for (var b = this.bits, p = 0, h = 0, e = b.length;h < e;h++) {
            var d = b[h], d = d - (d >> 1 & 1431655765), d = (d & 858993459) + (d >> 2 & 858993459), p = p + (16843009 * (d + (d >> 4) & 252645135) >> 24)
          }
          this.count = p;
          this.dirty = 0;
        }
      };
      b.prototype.set = function(b) {
        var p = b >> d.ADDRESS_BITS_PER_WORD, h = this.bits[p];
        b = h | 1 << (b & d.BIT_INDEX_MASK);
        this.bits[p] = b;
        this.dirty |= h ^ b;
      };
      b.prototype.setAll = function() {
        for (var b = this.bits, p = 0, h = b.length;p < h;p++) {
          b[p] = 4294967295;
        }
        this.count = this.size;
        this.dirty = 0;
      };
      b.prototype.assign = function(b) {
        this.count = b.count;
        this.dirty = b.dirty;
        this.size = b.size;
        for (var p = 0, h = this.bits.length;p < h;p++) {
          this.bits[p] = b.bits[p];
        }
      };
      b.prototype.clear = function(b) {
        var p = b >> d.ADDRESS_BITS_PER_WORD, h = this.bits[p];
        b = h & ~(1 << (b & d.BIT_INDEX_MASK));
        this.bits[p] = b;
        this.dirty |= h ^ b;
      };
      b.prototype.get = function(b) {
        return 0 !== (this.bits[b >> d.ADDRESS_BITS_PER_WORD] & 1 << (b & d.BIT_INDEX_MASK));
      };
      b.prototype.clearAll = function() {
        for (var b = this.bits, p = 0, h = b.length;p < h;p++) {
          b[p] = 0;
        }
        this.dirty = this.count = 0;
      };
      b.prototype._union = function(b) {
        var p = this.dirty, h = this.bits;
        b = b.bits;
        for (var e = 0, d = h.length;e < d;e++) {
          var a = h[e], w = a | b[e];
          h[e] = w;
          p |= a ^ w;
        }
        this.dirty = p;
      };
      b.prototype.intersect = function(b) {
        var p = this.dirty, h = this.bits;
        b = b.bits;
        for (var e = 0, d = h.length;e < d;e++) {
          var a = h[e], w = a & b[e];
          h[e] = w;
          p |= a ^ w;
        }
        this.dirty = p;
      };
      b.prototype.subtract = function(b) {
        var p = this.dirty, h = this.bits;
        b = b.bits;
        for (var e = 0, d = h.length;e < d;e++) {
          var a = h[e], w = a & ~b[e];
          h[e] = w;
          p |= a ^ w;
        }
        this.dirty = p;
      };
      b.prototype.negate = function() {
        for (var b = this.dirty, p = this.bits, h = 0, e = p.length;h < e;h++) {
          var d = p[h], a = ~d;
          p[h] = a;
          b |= d ^ a;
        }
        this.dirty = b;
      };
      b.prototype.forEach = function(b) {
        for (var p = this.bits, h = 0, e = p.length;h < e;h++) {
          var a = p[h];
          if (a) {
            for (var w = 0;w < d.BITS_PER_WORD;w++) {
              a & 1 << w && b(h * d.BITS_PER_WORD + w);
            }
          }
        }
      };
      b.prototype.toArray = function() {
        for (var b = [], p = this.bits, h = 0, e = p.length;h < e;h++) {
          var a = p[h];
          if (a) {
            for (var w = 0;w < d.BITS_PER_WORD;w++) {
              a & 1 << w && b.push(h * d.BITS_PER_WORD + w);
            }
          }
        }
        return b;
      };
      b.prototype.equals = function(b) {
        if (this.size !== b.size) {
          return!1;
        }
        var p = this.bits;
        b = b.bits;
        for (var h = 0, e = p.length;h < e;h++) {
          if (p[h] !== b[h]) {
            return!1;
          }
        }
        return!0;
      };
      b.prototype.contains = function(b) {
        if (this.size !== b.size) {
          return!1;
        }
        var p = this.bits;
        b = b.bits;
        for (var h = 0, e = p.length;h < e;h++) {
          if ((p[h] | b[h]) !== p[h]) {
            return!1;
          }
        }
        return!0;
      };
      b.prototype.isEmpty = function() {
        this.recount();
        return 0 === this.count;
      };
      b.prototype.clone = function() {
        var p = new b(this.length);
        p._union(this);
        return p;
      };
      return b;
    }();
    d.Uint32ArrayBitSet = p;
    var a = function() {
      function b(p) {
        this.dirty = this.count = 0;
        this.size = e(p);
        this.bits = 0;
        this.singleWord = !0;
        this.length = p;
      }
      b.prototype.recount = function() {
        if (this.dirty) {
          var b = this.bits, b = b - (b >> 1 & 1431655765), b = (b & 858993459) + (b >> 2 & 858993459);
          this.count = 0 + (16843009 * (b + (b >> 4) & 252645135) >> 24);
          this.dirty = 0;
        }
      };
      b.prototype.set = function(b) {
        var p = this.bits;
        this.bits = b = p | 1 << (b & d.BIT_INDEX_MASK);
        this.dirty |= p ^ b;
      };
      b.prototype.setAll = function() {
        this.bits = 4294967295;
        this.count = this.size;
        this.dirty = 0;
      };
      b.prototype.assign = function(b) {
        this.count = b.count;
        this.dirty = b.dirty;
        this.size = b.size;
        this.bits = b.bits;
      };
      b.prototype.clear = function(b) {
        var p = this.bits;
        this.bits = b = p & ~(1 << (b & d.BIT_INDEX_MASK));
        this.dirty |= p ^ b;
      };
      b.prototype.get = function(b) {
        return 0 !== (this.bits & 1 << (b & d.BIT_INDEX_MASK));
      };
      b.prototype.clearAll = function() {
        this.dirty = this.count = this.bits = 0;
      };
      b.prototype._union = function(b) {
        var p = this.bits;
        this.bits = b = p | b.bits;
        this.dirty = p ^ b;
      };
      b.prototype.intersect = function(b) {
        var p = this.bits;
        this.bits = b = p & b.bits;
        this.dirty = p ^ b;
      };
      b.prototype.subtract = function(b) {
        var p = this.bits;
        this.bits = b = p & ~b.bits;
        this.dirty = p ^ b;
      };
      b.prototype.negate = function() {
        var b = this.bits, p = ~b;
        this.bits = p;
        this.dirty = b ^ p;
      };
      b.prototype.forEach = function(b) {
        var p = this.bits;
        if (p) {
          for (var h = 0;h < d.BITS_PER_WORD;h++) {
            p & 1 << h && b(h);
          }
        }
      };
      b.prototype.toArray = function() {
        var b = [], p = this.bits;
        if (p) {
          for (var h = 0;h < d.BITS_PER_WORD;h++) {
            p & 1 << h && b.push(h);
          }
        }
        return b;
      };
      b.prototype.equals = function(b) {
        return this.bits === b.bits;
      };
      b.prototype.contains = function(b) {
        var p = this.bits;
        return(p | b.bits) === p;
      };
      b.prototype.isEmpty = function() {
        this.recount();
        return 0 === this.count;
      };
      b.prototype.clone = function() {
        var p = new b(this.length);
        p._union(this);
        return p;
      };
      return b;
    }();
    d.Uint32BitSet = a;
    a.prototype.toString = h;
    a.prototype.toBitString = b;
    p.prototype.toString = h;
    p.prototype.toBitString = b;
    d.BitSetFunctor = function(b) {
      var h = 1 === e(b) >> d.ADDRESS_BITS_PER_WORD ? a : p;
      return function() {
        return new h(b);
      };
    };
  })(k.BitSets || (k.BitSets = {}));
  a = function() {
    function d() {
    }
    d.randomStyle = function() {
      d._randomStyleCache || (d._randomStyleCache = "#ff5e3a #ff9500 #ffdb4c #87fc70 #52edc7 #1ad6fd #c644fc #ef4db6 #4a4a4a #dbddde #ff3b30 #ff9500 #ffcc00 #4cd964 #34aadc #007aff #5856d6 #ff2d55 #8e8e93 #c7c7cc #5ad427 #c86edf #d1eefc #e0f8d8 #fb2b69 #f7f7f7 #1d77ef #d6cec3 #55efcb #ff4981 #ffd3e0 #f7f7f7 #ff1300 #1f1f21 #bdbec2 #ff3a2d".split(" "));
      return d._randomStyleCache[d._nextStyle++ % d._randomStyleCache.length];
    };
    d.gradientColor = function(e) {
      return d._gradient[d._gradient.length * l.clamp(e, 0, 1) | 0];
    };
    d.contrastStyle = function(e) {
      e = parseInt(e.substr(1), 16);
      return 128 <= (299 * (e >> 16) + 587 * (e >> 8 & 255) + 114 * (e & 255)) / 1E3 ? "#000000" : "#ffffff";
    };
    d.reset = function() {
      d._nextStyle = 0;
    };
    d.TabToolbar = "#252c33";
    d.Toolbars = "#343c45";
    d.HighlightBlue = "#1d4f73";
    d.LightText = "#f5f7fa";
    d.ForegroundText = "#b6babf";
    d.Black = "#000000";
    d.VeryDark = "#14171a";
    d.Dark = "#181d20";
    d.Light = "#a9bacb";
    d.Grey = "#8fa1b2";
    d.DarkGrey = "#5f7387";
    d.Blue = "#46afe3";
    d.Purple = "#6b7abb";
    d.Pink = "#df80ff";
    d.Red = "#eb5368";
    d.Orange = "#d96629";
    d.LightOrange = "#d99b28";
    d.Green = "#70bf53";
    d.BlueGrey = "#5e88b0";
    d._nextStyle = 0;
    d._gradient = "#FF0000 #FF1100 #FF2300 #FF3400 #FF4600 #FF5700 #FF6900 #FF7B00 #FF8C00 #FF9E00 #FFAF00 #FFC100 #FFD300 #FFE400 #FFF600 #F7FF00 #E5FF00 #D4FF00 #C2FF00 #B0FF00 #9FFF00 #8DFF00 #7CFF00 #6AFF00 #58FF00 #47FF00 #35FF00 #24FF00 #12FF00 #00FF00".split(" ");
    return d;
  }();
  k.ColorStyle = a;
  a = function() {
    function d(e, b, h, p) {
      this.xMin = e | 0;
      this.yMin = b | 0;
      this.xMax = h | 0;
      this.yMax = p | 0;
    }
    d.FromUntyped = function(e) {
      return new d(e.xMin, e.yMin, e.xMax, e.yMax);
    };
    d.FromRectangle = function(e) {
      return new d(20 * e.x | 0, 20 * e.y | 0, 20 * (e.x + e.width) | 0, 20 * (e.y + e.height) | 0);
    };
    d.prototype.setElements = function(e, b, h, p) {
      this.xMin = e;
      this.yMin = b;
      this.xMax = h;
      this.yMax = p;
    };
    d.prototype.copyFrom = function(e) {
      this.setElements(e.xMin, e.yMin, e.xMax, e.yMax);
    };
    d.prototype.contains = function(e, b) {
      return e < this.xMin !== e < this.xMax && b < this.yMin !== b < this.yMax;
    };
    d.prototype.unionInPlace = function(e) {
      e.isEmpty() || (this.extendByPoint(e.xMin, e.yMin), this.extendByPoint(e.xMax, e.yMax));
    };
    d.prototype.extendByPoint = function(e, b) {
      this.extendByX(e);
      this.extendByY(b);
    };
    d.prototype.extendByX = function(e) {
      134217728 === this.xMin ? this.xMin = this.xMax = e : (this.xMin = Math.min(this.xMin, e), this.xMax = Math.max(this.xMax, e));
    };
    d.prototype.extendByY = function(e) {
      134217728 === this.yMin ? this.yMin = this.yMax = e : (this.yMin = Math.min(this.yMin, e), this.yMax = Math.max(this.yMax, e));
    };
    d.prototype.intersects = function(e) {
      return this.contains(e.xMin, e.yMin) || this.contains(e.xMax, e.yMax);
    };
    d.prototype.isEmpty = function() {
      return this.xMax <= this.xMin || this.yMax <= this.yMin;
    };
    Object.defineProperty(d.prototype, "width", {get:function() {
      return this.xMax - this.xMin;
    }, set:function(e) {
      this.xMax = this.xMin + e;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "height", {get:function() {
      return this.yMax - this.yMin;
    }, set:function(e) {
      this.yMax = this.yMin + e;
    }, enumerable:!0, configurable:!0});
    d.prototype.getBaseWidth = function(e) {
      return Math.abs(Math.cos(e)) * (this.xMax - this.xMin) + Math.abs(Math.sin(e)) * (this.yMax - this.yMin);
    };
    d.prototype.getBaseHeight = function(e) {
      return Math.abs(Math.sin(e)) * (this.xMax - this.xMin) + Math.abs(Math.cos(e)) * (this.yMax - this.yMin);
    };
    d.prototype.setEmpty = function() {
      this.xMin = this.yMin = this.xMax = this.yMax = 0;
    };
    d.prototype.setToSentinels = function() {
      this.xMin = this.yMin = this.xMax = this.yMax = 134217728;
    };
    d.prototype.clone = function() {
      return new d(this.xMin, this.yMin, this.xMax, this.yMax);
    };
    d.prototype.toString = function() {
      return "{ xMin: " + this.xMin + ", xMin: " + this.yMin + ", xMax: " + this.xMax + ", xMax: " + this.yMax + " }";
    };
    return d;
  }();
  k.Bounds = a;
  a = function() {
    function d(e, b, h, p) {
      n.assert(r(e));
      n.assert(r(b));
      n.assert(r(h));
      n.assert(r(p));
      this._xMin = e | 0;
      this._yMin = b | 0;
      this._xMax = h | 0;
      this._yMax = p | 0;
    }
    d.FromUntyped = function(e) {
      return new d(e.xMin, e.yMin, e.xMax, e.yMax);
    };
    d.FromRectangle = function(e) {
      return new d(20 * e.x | 0, 20 * e.y | 0, 20 * (e.x + e.width) | 0, 20 * (e.y + e.height) | 0);
    };
    d.prototype.setElements = function(e, b, h, p) {
      this.xMin = e;
      this.yMin = b;
      this.xMax = h;
      this.yMax = p;
    };
    d.prototype.copyFrom = function(e) {
      this.setElements(e.xMin, e.yMin, e.xMax, e.yMax);
    };
    d.prototype.contains = function(e, b) {
      return e < this.xMin !== e < this.xMax && b < this.yMin !== b < this.yMax;
    };
    d.prototype.unionInPlace = function(e) {
      e.isEmpty() || (this.extendByPoint(e.xMin, e.yMin), this.extendByPoint(e.xMax, e.yMax));
    };
    d.prototype.extendByPoint = function(e, b) {
      this.extendByX(e);
      this.extendByY(b);
    };
    d.prototype.extendByX = function(e) {
      134217728 === this.xMin ? this.xMin = this.xMax = e : (this.xMin = Math.min(this.xMin, e), this.xMax = Math.max(this.xMax, e));
    };
    d.prototype.extendByY = function(e) {
      134217728 === this.yMin ? this.yMin = this.yMax = e : (this.yMin = Math.min(this.yMin, e), this.yMax = Math.max(this.yMax, e));
    };
    d.prototype.intersects = function(e) {
      return this.contains(e._xMin, e._yMin) || this.contains(e._xMax, e._yMax);
    };
    d.prototype.isEmpty = function() {
      return this._xMax <= this._xMin || this._yMax <= this._yMin;
    };
    Object.defineProperty(d.prototype, "xMin", {get:function() {
      return this._xMin;
    }, set:function(e) {
      n.assert(r(e));
      this._xMin = e;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "yMin", {get:function() {
      return this._yMin;
    }, set:function(e) {
      n.assert(r(e));
      this._yMin = e | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "xMax", {get:function() {
      return this._xMax;
    }, set:function(e) {
      n.assert(r(e));
      this._xMax = e | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "width", {get:function() {
      return this._xMax - this._xMin;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "yMax", {get:function() {
      return this._yMax;
    }, set:function(e) {
      n.assert(r(e));
      this._yMax = e | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "height", {get:function() {
      return this._yMax - this._yMin;
    }, enumerable:!0, configurable:!0});
    d.prototype.getBaseWidth = function(e) {
      return Math.abs(Math.cos(e)) * (this._xMax - this._xMin) + Math.abs(Math.sin(e)) * (this._yMax - this._yMin);
    };
    d.prototype.getBaseHeight = function(e) {
      return Math.abs(Math.sin(e)) * (this._xMax - this._xMin) + Math.abs(Math.cos(e)) * (this._yMax - this._yMin);
    };
    d.prototype.setEmpty = function() {
      this._xMin = this._yMin = this._xMax = this._yMax = 0;
    };
    d.prototype.clone = function() {
      return new d(this.xMin, this.yMin, this.xMax, this.yMax);
    };
    d.prototype.toString = function() {
      return "{ xMin: " + this._xMin + ", xMin: " + this._yMin + ", xMax: " + this._xMax + ", yMax: " + this._yMax + " }";
    };
    d.prototype.assertValid = function() {
    };
    return d;
  }();
  k.DebugBounds = a;
  a = function() {
    function d(e, b, h, p) {
      this.r = e;
      this.g = b;
      this.b = h;
      this.a = p;
    }
    d.FromARGB = function(e) {
      return new d((e >> 16 & 255) / 255, (e >> 8 & 255) / 255, (e >> 0 & 255) / 255, (e >> 24 & 255) / 255);
    };
    d.FromRGBA = function(e) {
      return d.FromARGB(s.RGBAToARGB(e));
    };
    d.prototype.toRGBA = function() {
      return 255 * this.r << 24 | 255 * this.g << 16 | 255 * this.b << 8 | 255 * this.a;
    };
    d.prototype.toCSSStyle = function() {
      return s.rgbaToCSSStyle(this.toRGBA());
    };
    d.prototype.set = function(e) {
      this.r = e.r;
      this.g = e.g;
      this.b = e.b;
      this.a = e.a;
    };
    d.randomColor = function() {
      var e = .4;
      void 0 === e && (e = 1);
      return new d(Math.random(), Math.random(), Math.random(), e);
    };
    d.parseColor = function(e) {
      d.colorCache || (d.colorCache = Object.create(null));
      if (d.colorCache[e]) {
        return d.colorCache[e];
      }
      var b = document.createElement("span");
      document.body.appendChild(b);
      b.style.backgroundColor = e;
      var h = getComputedStyle(b).backgroundColor;
      document.body.removeChild(b);
      (b = /^rgb\((\d+), (\d+), (\d+)\)$/.exec(h)) || (b = /^rgba\((\d+), (\d+), (\d+), ([\d.]+)\)$/.exec(h));
      h = new d(0, 0, 0, 0);
      h.r = parseFloat(b[1]) / 255;
      h.g = parseFloat(b[2]) / 255;
      h.b = parseFloat(b[3]) / 255;
      h.a = b[4] ? parseFloat(b[4]) / 255 : 1;
      return d.colorCache[e] = h;
    };
    d.Red = new d(1, 0, 0, 1);
    d.Green = new d(0, 1, 0, 1);
    d.Blue = new d(0, 0, 1, 1);
    d.None = new d(0, 0, 0, 0);
    d.White = new d(1, 1, 1, 1);
    d.Black = new d(0, 0, 0, 1);
    d.colorCache = {};
    return d;
  }();
  k.Color = a;
  var s;
  (function(d) {
    function e(b) {
      var h, e, d = b >> 24 & 255;
      e = (Math.imul(b >> 16 & 255, d) + 127) / 255 | 0;
      h = (Math.imul(b >> 8 & 255, d) + 127) / 255 | 0;
      b = (Math.imul(b >> 0 & 255, d) + 127) / 255 | 0;
      return d << 24 | e << 16 | h << 8 | b;
    }
    d.RGBAToARGB = function(b) {
      return b >> 8 & 16777215 | (b & 255) << 24;
    };
    d.ARGBToRGBA = function(b) {
      return b << 8 | b >> 24 & 255;
    };
    d.rgbaToCSSStyle = function(b) {
      return k.StringUtilities.concat9("rgba(", b >> 24 & 255, ",", b >> 16 & 255, ",", b >> 8 & 255, ",", (b & 255) / 255, ")");
    };
    d.cssStyleToRGBA = function(b) {
      if ("#" === b[0]) {
        if (7 === b.length) {
          return parseInt(b.substring(1), 16) << 8 | 255;
        }
      } else {
        if ("r" === b[0]) {
          return b = b.substring(5, b.length - 1).split(","), (parseInt(b[0]) & 255) << 24 | (parseInt(b[1]) & 255) << 16 | (parseInt(b[2]) & 255) << 8 | 255 * parseFloat(b[3]) & 255;
        }
      }
      return 4278190335;
    };
    d.hexToRGB = function(b) {
      return parseInt(b.slice(1), 16);
    };
    d.rgbToHex = function(b) {
      return "#" + ("000000" + (b >>> 0).toString(16)).slice(-6);
    };
    d.isValidHexColor = function(b) {
      return/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(b);
    };
    d.clampByte = function(b) {
      return Math.max(0, Math.min(255, b));
    };
    d.unpremultiplyARGB = function(b) {
      var h, e, d = b >> 24 & 255;
      e = Math.imul(255, b >> 16 & 255) / d & 255;
      h = Math.imul(255, b >> 8 & 255) / d & 255;
      b = Math.imul(255, b >> 0 & 255) / d & 255;
      return d << 24 | e << 16 | h << 8 | b;
    };
    d.premultiplyARGB = e;
    var b;
    d.ensureUnpremultiplyTable = function() {
      if (!b) {
        b = new Uint8Array(65536);
        for (var p = 0;256 > p;p++) {
          for (var h = 0;256 > h;h++) {
            b[(h << 8) + p] = Math.imul(255, p) / h;
          }
        }
      }
    };
    d.tableLookupUnpremultiplyARGB = function(p) {
      p |= 0;
      var h = p >> 24 & 255;
      if (0 === h) {
        return 0;
      }
      if (255 === h) {
        return p;
      }
      var e, d, a = h << 8, g = b;
      d = g[a + (p >> 16 & 255)];
      e = g[a + (p >> 8 & 255)];
      p = g[a + (p >> 0 & 255)];
      return h << 24 | d << 16 | e << 8 | p;
    };
    d.blendPremultipliedBGRA = function(b, h) {
      var e, d;
      d = 256 - (h & 255);
      e = Math.imul(b & 16711935, d) >> 8;
      d = Math.imul(b >> 8 & 16711935, d) >> 8;
      return((h >> 8 & 16711935) + d & 16711935) << 8 | (h & 16711935) + e & 16711935;
    };
    var h = u.swap32;
    d.convertImage = function(p, d, a, g) {
      var q = a.length;
      if (p === d) {
        if (a !== g) {
          for (p = 0;p < q;p++) {
            g[p] = a[p];
          }
        }
      } else {
        if (1 === p && 3 === d) {
          for (k.ColorUtilities.ensureUnpremultiplyTable(), p = 0;p < q;p++) {
            var m = a[p];
            d = m & 255;
            if (0 === d) {
              g[p] = 0;
            } else {
              if (255 === d) {
                g[p] = 4278190080 | m >> 8 & 16777215;
              } else {
                var l = m >> 24 & 255, c = m >> 16 & 255, m = m >> 8 & 255, s = d << 8, u = b, m = u[s + m], c = u[s + c], l = u[s + l];
                g[p] = d << 24 | l << 16 | c << 8 | m;
              }
            }
          }
        } else {
          if (2 === p && 3 === d) {
            for (p = 0;p < q;p++) {
              g[p] = h(a[p]);
            }
          } else {
            if (3 === p && 1 === d) {
              for (p = 0;p < q;p++) {
                d = a[p], g[p] = h(e(d & 4278255360 | d >> 16 & 255 | (d & 255) << 16));
              }
            } else {
              for (n.somewhatImplemented("Image Format Conversion: " + v[p] + " -> " + v[d]), p = 0;p < q;p++) {
                g[p] = a[p];
              }
            }
          }
        }
      }
    };
  })(s = k.ColorUtilities || (k.ColorUtilities = {}));
  a = function() {
    function d(e) {
      void 0 === e && (e = 32);
      this._list = [];
      this._maxSize = e;
    }
    d.prototype.acquire = function(e) {
      if (d._enabled) {
        for (var b = this._list, h = 0;h < b.length;h++) {
          var p = b[h];
          if (p.byteLength >= e) {
            return b.splice(h, 1), p;
          }
        }
      }
      return new ArrayBuffer(e);
    };
    d.prototype.release = function(e) {
      if (d._enabled) {
        var b = this._list;
        b.length === this._maxSize && b.shift();
        b.push(e);
      }
    };
    d.prototype.ensureUint8ArrayLength = function(e, b) {
      if (e.length >= b) {
        return e;
      }
      var h = Math.max(e.length + b, (3 * e.length >> 1) + 1), h = new Uint8Array(this.acquire(h), 0, h);
      h.set(e);
      this.release(e.buffer);
      return h;
    };
    d.prototype.ensureFloat64ArrayLength = function(e, b) {
      if (e.length >= b) {
        return e;
      }
      var h = Math.max(e.length + b, (3 * e.length >> 1) + 1), h = new Float64Array(this.acquire(h * Float64Array.BYTES_PER_ELEMENT), 0, h);
      h.set(e);
      this.release(e.buffer);
      return h;
    };
    d._enabled = !0;
    return d;
  }();
  k.ArrayBufferPool = a;
  (function(d) {
    (function(e) {
      e[e.EXTERNAL_INTERFACE_FEATURE = 1] = "EXTERNAL_INTERFACE_FEATURE";
      e[e.CLIPBOARD_FEATURE = 2] = "CLIPBOARD_FEATURE";
      e[e.SHAREDOBJECT_FEATURE = 3] = "SHAREDOBJECT_FEATURE";
      e[e.VIDEO_FEATURE = 4] = "VIDEO_FEATURE";
      e[e.SOUND_FEATURE = 5] = "SOUND_FEATURE";
      e[e.NETCONNECTION_FEATURE = 6] = "NETCONNECTION_FEATURE";
    })(d.Feature || (d.Feature = {}));
    (function(e) {
      e[e.AVM1_ERROR = 1] = "AVM1_ERROR";
      e[e.AVM2_ERROR = 2] = "AVM2_ERROR";
    })(d.ErrorTypes || (d.ErrorTypes = {}));
    d.instance;
  })(k.Telemetry || (k.Telemetry = {}));
  (function(d) {
    d.instance;
  })(k.FileLoadingService || (k.FileLoadingService = {}));
  (function(d) {
    d[d.BuiltinAbc = 0] = "BuiltinAbc";
    d[d.PlayerglobalAbcs = 1] = "PlayerglobalAbcs";
    d[d.PlayerglobalManifest = 2] = "PlayerglobalManifest";
    d[d.ShellAbc = 3] = "ShellAbc";
  })(k.SystemResourceId || (k.SystemResourceId = {}));
  (function(d) {
    d.instance;
  })(k.SystemResourcesLoadingService || (k.SystemResourcesLoadingService = {}));
  k.registerCSSFont = function(d, e, b) {
    if (inBrowser) {
      var h = document.head;
      h.insertBefore(document.createElement("style"), h.firstChild);
      h = document.styleSheets[0];
      e = "@font-face{font-family:swffont" + d + ";src:url(data:font/opentype;base64," + k.StringUtilities.base64ArrayBuffer(e) + ")}";
      h.insertRule(e, h.cssRules.length);
      b && (b = document.createElement("div"), b.style.fontFamily = "swffont" + d, b.innerHTML = "hello", document.body.appendChild(b), document.body.removeChild(b));
    }
  };
  (function(d) {
    d.instance = {enabled:!1, initJS:function(e) {
    }, registerCallback:function(e) {
    }, unregisterCallback:function(e) {
    }, eval:function(e) {
    }, call:function(e) {
    }, getId:function() {
      return null;
    }};
  })(k.ExternalInterfaceService || (k.ExternalInterfaceService = {}));
  (function(d) {
    d.instance = {setClipboard:function(e) {
    }};
  })(k.ClipboardService || (k.ClipboardService = {}));
  a = function() {
    function d() {
      this._queues = {};
    }
    d.prototype.register = function(e, b) {
      n.assert(e);
      n.assert(b);
      var h = this._queues[e];
      if (h) {
        if (-1 < h.indexOf(b)) {
          return;
        }
      } else {
        h = this._queues[e] = [];
      }
      h.push(b);
    };
    d.prototype.unregister = function(e, b) {
      n.assert(e);
      n.assert(b);
      var h = this._queues[e];
      if (h) {
        var p = h.indexOf(b);
        -1 !== p && h.splice(p, 1);
        0 === h.length && (this._queues[e] = null);
      }
    };
    d.prototype.notify = function(e, b) {
      var h = this._queues[e];
      if (h) {
        h = h.slice();
        b = Array.prototype.slice.call(arguments, 0);
        for (var p = 0;p < h.length;p++) {
          h[p].apply(null, b);
        }
      }
    };
    d.prototype.notify1 = function(e, b) {
      var h = this._queues[e];
      if (h) {
        for (var h = h.slice(), p = 0;p < h.length;p++) {
          (0,h[p])(e, b);
        }
      }
    };
    return d;
  }();
  k.Callback = a;
  (function(d) {
    d[d.None = 0] = "None";
    d[d.PremultipliedAlphaARGB = 1] = "PremultipliedAlphaARGB";
    d[d.StraightAlphaARGB = 2] = "StraightAlphaARGB";
    d[d.StraightAlphaRGBA = 3] = "StraightAlphaRGBA";
    d[d.JPEG = 4] = "JPEG";
    d[d.PNG = 5] = "PNG";
    d[d.GIF = 6] = "GIF";
  })(k.ImageType || (k.ImageType = {}));
  var v = k.ImageType;
  k.getMIMETypeForImageType = function(d) {
    switch(d) {
      case 4:
        return "image/jpeg";
      case 5:
        return "image/png";
      case 6:
        return "image/gif";
      default:
        return "text/plain";
    }
  };
  (function(d) {
    d.toCSSCursor = function(e) {
      switch(e) {
        case 0:
          return "auto";
        case 2:
          return "pointer";
        case 3:
          return "grab";
        case 4:
          return "text";
        default:
          return "default";
      }
    };
  })(k.UI || (k.UI = {}));
  a = function() {
    function d() {
      this.promise = new Promise(function(e, b) {
        this.resolve = e;
        this.reject = b;
      }.bind(this));
    }
    d.prototype.then = function(e, b) {
      return this.promise.then(e, b);
    };
    return d;
  }();
  k.PromiseWrapper = a;
})(Shumway || (Shumway = {}));
(function() {
  function k(b) {
    if ("function" !== typeof b) {
      throw new TypeError("Invalid deferred constructor");
    }
    var h = s();
    b = new b(h);
    var e = h.resolve;
    if ("function" !== typeof e) {
      throw new TypeError("Invalid resolve construction function");
    }
    h = h.reject;
    if ("function" !== typeof h) {
      throw new TypeError("Invalid reject construction function");
    }
    return{promise:b, resolve:e, reject:h};
  }
  function r(b, h) {
    if ("object" !== typeof b || null === b) {
      return!1;
    }
    try {
      var e = b.then;
      if ("function" !== typeof e) {
        return!1;
      }
      e.call(b, h.resolve, h.reject);
    } catch (d) {
      e = h.reject, e(d);
    }
    return!0;
  }
  function f(b) {
    return "object" === typeof b && null !== b && "undefined" !== typeof b.promiseStatus;
  }
  function c(b, h) {
    if ("unresolved" === b.promiseStatus) {
      var e = b.rejectReactions;
      b.result = h;
      b.resolveReactions = void 0;
      b.rejectReactions = void 0;
      b.promiseStatus = "has-rejection";
      t(e, h);
    }
  }
  function t(b, h) {
    for (var e = 0;e < b.length;e++) {
      n({reaction:b[e], argument:h});
    }
  }
  function n(b) {
    0 === h.length && setTimeout(g, 0);
    h.push(b);
  }
  function a(b, h) {
    var e = b.deferred, d = b.handler, a, g;
    try {
      a = d(h);
    } catch (q) {
      return e = e.reject, e(q);
    }
    if (a === e.promise) {
      return e = e.reject, e(new TypeError("Self resolution"));
    }
    try {
      if (g = r(a, e), !g) {
        var m = e.resolve;
        return m(a);
      }
    } catch (l) {
      return e = e.reject, e(l);
    }
  }
  function g() {
    for (;0 < h.length;) {
      var b = h[0];
      try {
        a(b.reaction, b.argument);
      } catch (d) {
        if ("function" === typeof e.onerror) {
          e.onerror(d);
        }
      }
      h.shift();
    }
  }
  function q(b) {
    throw b;
  }
  function l(b) {
    return b;
  }
  function u(b) {
    return function(h) {
      c(b, h);
    };
  }
  function m(b) {
    return function(h) {
      if ("unresolved" === b.promiseStatus) {
        var e = b.resolveReactions;
        b.result = h;
        b.resolveReactions = void 0;
        b.rejectReactions = void 0;
        b.promiseStatus = "has-resolution";
        t(e, h);
      }
    };
  }
  function s() {
    function b(h, e) {
      b.resolve = h;
      b.reject = e;
    }
    return b;
  }
  function v(b, h, e) {
    return function(d) {
      if (d === b) {
        return e(new TypeError("Self resolution"));
      }
      var a = b.promiseConstructor;
      if (f(d) && d.promiseConstructor === a) {
        return d.then(h, e);
      }
      a = k(a);
      return r(d, a) ? a.promise.then(h, e) : h(d);
    };
  }
  function d(b, h, e, d) {
    return function(a) {
      h[b] = a;
      d.countdown--;
      0 === d.countdown && e.resolve(h);
    };
  }
  function e(b) {
    if ("function" !== typeof b) {
      throw new TypeError("resolver is not a function");
    }
    if ("object" !== typeof this) {
      throw new TypeError("Promise to initialize is not an object");
    }
    this.promiseStatus = "unresolved";
    this.resolveReactions = [];
    this.rejectReactions = [];
    this.result = void 0;
    var h = m(this), d = u(this);
    try {
      b(h, d);
    } catch (a) {
      c(this, a);
    }
    this.promiseConstructor = e;
    return this;
  }
  var b = Function("return this")();
  if (b.Promise) {
    "function" !== typeof b.Promise.all && (b.Promise.all = function(h) {
      var e = 0, d = [], a, g, q = new b.Promise(function(b, h) {
        a = b;
        g = h;
      });
      h.forEach(function(b, h) {
        e++;
        b.then(function(b) {
          d[h] = b;
          e--;
          0 === e && a(d);
        }, g);
      });
      0 === e && a(d);
      return q;
    }), "function" !== typeof b.Promise.resolve && (b.Promise.resolve = function(h) {
      return new b.Promise(function(b) {
        b(h);
      });
    });
  } else {
    var h = [];
    e.all = function(b) {
      var h = k(this), e = [], a = {countdown:0}, g = 0;
      b.forEach(function(b) {
        this.cast(b).then(d(g, e, h, a), h.reject);
        g++;
        a.countdown++;
      }, this);
      0 === g && h.resolve(e);
      return h.promise;
    };
    e.cast = function(b) {
      if (f(b)) {
        return b;
      }
      var h = k(this);
      h.resolve(b);
      return h.promise;
    };
    e.reject = function(b) {
      var h = k(this);
      h.reject(b);
      return h.promise;
    };
    e.resolve = function(b) {
      var h = k(this);
      h.resolve(b);
      return h.promise;
    };
    e.prototype = {"catch":function(b) {
      this.then(void 0, b);
    }, then:function(b, h) {
      if (!f(this)) {
        throw new TypeError("this is not a Promises");
      }
      var e = k(this.promiseConstructor), d = "function" === typeof h ? h : q, a = {deferred:e, handler:v(this, "function" === typeof b ? b : l, d)}, d = {deferred:e, handler:d};
      switch(this.promiseStatus) {
        case "unresolved":
          this.resolveReactions.push(a);
          this.rejectReactions.push(d);
          break;
        case "has-resolution":
          n({reaction:a, argument:this.result});
          break;
        case "has-rejection":
          n({reaction:d, argument:this.result});
      }
      return e.promise;
    }};
    b.Promise = e;
  }
})();
"undefined" !== typeof exports && (exports.Shumway = Shumway);
(function() {
  function k(k, f, c) {
    k[f] || Object.defineProperty(k, f, {value:c, writable:!0, configurable:!0, enumerable:!1});
  }
  k(String.prototype, "padRight", function(k, f) {
    var c = this, t = c.replace(/\033\[[0-9]*m/g, "").length;
    if (!k || t >= f) {
      return c;
    }
    for (var t = (f - t) / k.length, n = 0;n < t;n++) {
      c += k;
    }
    return c;
  });
  k(String.prototype, "padLeft", function(k, f) {
    var c = this, t = c.length;
    if (!k || t >= f) {
      return c;
    }
    for (var t = (f - t) / k.length, n = 0;n < t;n++) {
      c = k + c;
    }
    return c;
  });
  k(String.prototype, "trim", function() {
    return this.replace(/^\s+|\s+$/g, "");
  });
  k(String.prototype, "endsWith", function(k) {
    return-1 !== this.indexOf(k, this.length - k.length);
  });
  k(Array.prototype, "replace", function(k, f) {
    if (k === f) {
      return 0;
    }
    for (var c = 0, t = 0;t < this.length;t++) {
      this[t] === k && (this[t] = f, c++);
    }
    return c;
  });
})();
(function(k) {
  (function(r) {
    var f = k.isObject, c = function() {
      function a(a, q, l, c) {
        this.shortName = a;
        this.longName = q;
        this.type = l;
        c = c || {};
        this.positional = c.positional;
        this.parseFn = c.parse;
        this.value = c.defaultValue;
      }
      a.prototype.parse = function(a) {
        this.value = "boolean" === this.type ? a : "number" === this.type ? parseInt(a, 10) : a;
        this.parseFn && this.parseFn(this.value);
      };
      return a;
    }();
    r.Argument = c;
    var t = function() {
      function a() {
        this.args = [];
      }
      a.prototype.addArgument = function(a, q, l, n) {
        a = new c(a, q, l, n);
        this.args.push(a);
        return a;
      };
      a.prototype.addBoundOption = function(a) {
        this.args.push(new c(a.shortName, a.longName, a.type, {parse:function(q) {
          a.value = q;
        }}));
      };
      a.prototype.addBoundOptionSet = function(a) {
        var q = this;
        a.options.forEach(function(a) {
          a instanceof n ? q.addBoundOptionSet(a) : q.addBoundOption(a);
        });
      };
      a.prototype.getUsage = function() {
        var a = "";
        this.args.forEach(function(q) {
          a = q.positional ? a + q.longName : a + ("[-" + q.shortName + "|--" + q.longName + ("boolean" === q.type ? "" : " " + q.type[0].toUpperCase()) + "]");
          a += " ";
        });
        return a;
      };
      a.prototype.parse = function(a) {
        var q = {}, l = [];
        this.args.forEach(function(d) {
          d.positional ? l.push(d) : (q["-" + d.shortName] = d, q["--" + d.longName] = d);
        });
        for (var c = [];a.length;) {
          var m = a.shift(), n = null, v = m;
          if ("--" == m) {
            c = c.concat(a);
            break;
          } else {
            if ("-" == m.slice(0, 1) || "--" == m.slice(0, 2)) {
              n = q[m];
              if (!n) {
                continue;
              }
              v = "boolean" !== n.type ? a.shift() : !0;
            } else {
              l.length ? n = l.shift() : c.push(v);
            }
          }
          n && n.parse(v);
        }
        return c;
      };
      return a;
    }();
    r.ArgumentParser = t;
    var n = function() {
      function a(a, q) {
        void 0 === q && (q = null);
        this.open = !1;
        this.name = a;
        this.settings = q || {};
        this.options = [];
      }
      a.prototype.register = function(g) {
        if (g instanceof a) {
          for (var q = 0;q < this.options.length;q++) {
            var c = this.options[q];
            if (c instanceof a && c.name === g.name) {
              return c;
            }
          }
        }
        this.options.push(g);
        if (this.settings) {
          if (g instanceof a) {
            q = this.settings[g.name], f(q) && (g.settings = q.settings, g.open = q.open);
          } else {
            if ("undefined" !== typeof this.settings[g.longName]) {
              switch(g.type) {
                case "boolean":
                  g.value = !!this.settings[g.longName];
                  break;
                case "number":
                  g.value = +this.settings[g.longName];
                  break;
                default:
                  g.value = this.settings[g.longName];
              }
            }
          }
        }
        return g;
      };
      a.prototype.trace = function(a) {
        a.enter(this.name + " {");
        this.options.forEach(function(q) {
          q.trace(a);
        });
        a.leave("}");
      };
      a.prototype.getSettings = function() {
        var g = {};
        this.options.forEach(function(q) {
          q instanceof a ? g[q.name] = {settings:q.getSettings(), open:q.open} : g[q.longName] = q.value;
        });
        return g;
      };
      a.prototype.setSettings = function(g) {
        g && this.options.forEach(function(q) {
          q instanceof a ? q.name in g && q.setSettings(g[q.name].settings) : q.longName in g && (q.value = g[q.longName]);
        });
      };
      return a;
    }();
    r.OptionSet = n;
    t = function() {
      function a(a, q, c, n, m, s) {
        void 0 === s && (s = null);
        this.longName = q;
        this.shortName = a;
        this.type = c;
        this.value = this.defaultValue = n;
        this.description = m;
        this.config = s;
      }
      a.prototype.parse = function(a) {
        this.value = a;
      };
      a.prototype.trace = function(a) {
        a.writeLn(("-" + this.shortName + "|--" + this.longName).padRight(" ", 30) + " = " + this.type + " " + this.value + " [" + this.defaultValue + "] (" + this.description + ")");
      };
      return a;
    }();
    r.Option = t;
  })(k.Options || (k.Options = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    r.ROOT = "Shumway Options";
    r.shumwayOptions = new k.Options.OptionSet(r.ROOT);
    r.setSettings = function(f) {
      r.shumwayOptions.setSettings(f);
    };
    r.getSettings = function() {
      return r.shumwayOptions.getSettings();
    };
  })(k.Settings || (k.Settings = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    var f = function() {
      function c(c, n) {
        this._parent = c;
        this._timers = k.ObjectUtilities.createMap();
        this._name = n;
        this._count = this._total = this._last = this._begin = 0;
      }
      c.time = function(f, n) {
        c.start(f);
        n();
        c.stop();
      };
      c.start = function(f) {
        c._top = c._top._timers[f] || (c._top._timers[f] = new c(c._top, f));
        c._top.start();
        f = c._flat._timers[f] || (c._flat._timers[f] = new c(c._flat, f));
        f.start();
        c._flatStack.push(f);
      };
      c.stop = function() {
        c._top.stop();
        c._top = c._top._parent;
        c._flatStack.pop().stop();
      };
      c.stopStart = function(f) {
        c.stop();
        c.start(f);
      };
      c.prototype.start = function() {
        this._begin = k.getTicks();
      };
      c.prototype.stop = function() {
        this._last = k.getTicks() - this._begin;
        this._total += this._last;
        this._count += 1;
      };
      c.prototype.toJSON = function() {
        return{name:this._name, total:this._total, timers:this._timers};
      };
      c.prototype.trace = function(c) {
        c.enter(this._name + ": " + this._total.toFixed(2) + " ms, count: " + this._count + ", average: " + (this._total / this._count).toFixed(2) + " ms");
        for (var n in this._timers) {
          this._timers[n].trace(c);
        }
        c.outdent();
      };
      c.trace = function(f) {
        c._base.trace(f);
        c._flat.trace(f);
      };
      c._base = new c(null, "Total");
      c._top = c._base;
      c._flat = new c(null, "Flat");
      c._flatStack = [];
      return c;
    }();
    r.Timer = f;
    f = function() {
      function c(c) {
        this._enabled = c;
        this.clear();
      }
      Object.defineProperty(c.prototype, "counts", {get:function() {
        return this._counts;
      }, enumerable:!0, configurable:!0});
      c.prototype.setEnabled = function(c) {
        this._enabled = c;
      };
      c.prototype.clear = function() {
        this._counts = k.ObjectUtilities.createMap();
        this._times = k.ObjectUtilities.createMap();
      };
      c.prototype.toJSON = function() {
        return{counts:this._counts, times:this._times};
      };
      c.prototype.count = function(c, n, a) {
        void 0 === n && (n = 1);
        void 0 === a && (a = 0);
        if (this._enabled) {
          return void 0 === this._counts[c] && (this._counts[c] = 0, this._times[c] = 0), this._counts[c] += n, this._times[c] += a, this._counts[c];
        }
      };
      c.prototype.trace = function(c) {
        for (var n in this._counts) {
          c.writeLn(n + ": " + this._counts[n]);
        }
      };
      c.prototype._pairToString = function(c, n) {
        var a = n[0], g = n[1], q = c[a], a = a + ": " + g;
        q && (a += ", " + q.toFixed(4), 1 < g && (a += " (" + (q / g).toFixed(4) + ")"));
        return a;
      };
      c.prototype.toStringSorted = function() {
        var c = this, n = this._times, a = [], g;
        for (g in this._counts) {
          a.push([g, this._counts[g]]);
        }
        a.sort(function(a, g) {
          return g[1] - a[1];
        });
        return a.map(function(a) {
          return c._pairToString(n, a);
        }).join(", ");
      };
      c.prototype.traceSorted = function(c, n) {
        void 0 === n && (n = !1);
        var a = this, g = this._times, q = [], l;
        for (l in this._counts) {
          q.push([l, this._counts[l]]);
        }
        q.sort(function(a, g) {
          return g[1] - a[1];
        });
        n ? c.writeLn(q.map(function(q) {
          return a._pairToString(g, q);
        }).join(", ")) : q.forEach(function(q) {
          c.writeLn(a._pairToString(g, q));
        });
      };
      c.instance = new c(!0);
      return c;
    }();
    r.Counter = f;
    f = function() {
      function c(c) {
        this._samples = new Float64Array(c);
        this._index = this._count = 0;
      }
      c.prototype.push = function(c) {
        this._count < this._samples.length && this._count++;
        this._index++;
        this._samples[this._index % this._samples.length] = c;
      };
      c.prototype.average = function() {
        for (var c = 0, n = 0;n < this._count;n++) {
          c += this._samples[n];
        }
        return c / this._count;
      };
      return c;
    }();
    r.Average = f;
  })(k.Metrics || (k.Metrics = {}));
})(Shumway || (Shumway = {}));
var __extends = this.__extends || function(k, r) {
  function f() {
    this.constructor = k;
  }
  for (var c in r) {
    r.hasOwnProperty(c) && (k[c] = r[c]);
  }
  f.prototype = r.prototype;
  k.prototype = new f;
};
(function(k) {
  (function(k) {
    function f(b) {
      for (var h = Math.max.apply(null, b), p = b.length, e = 1 << h, d = new Uint32Array(e), a = h << 16 | 65535, g = 0;g < e;g++) {
        d[g] = a;
      }
      for (var a = 0, g = 1, q = 2;g <= h;a <<= 1, ++g, q <<= 1) {
        for (var c = 0;c < p;++c) {
          if (b[c] === g) {
            for (var m = 0, l = 0;l < g;++l) {
              m = 2 * m + (a >> l & 1);
            }
            for (l = m;l < e;l += q) {
              d[l] = g << 16 | c;
            }
            ++a;
          }
        }
      }
      return{codes:d, maxBits:h};
    }
    var c;
    (function(b) {
      b[b.INIT = 0] = "INIT";
      b[b.BLOCK_0 = 1] = "BLOCK_0";
      b[b.BLOCK_1 = 2] = "BLOCK_1";
      b[b.BLOCK_2_PRE = 3] = "BLOCK_2_PRE";
      b[b.BLOCK_2 = 4] = "BLOCK_2";
      b[b.DONE = 5] = "DONE";
      b[b.ERROR = 6] = "ERROR";
      b[b.VERIFY_HEADER = 7] = "VERIFY_HEADER";
    })(c || (c = {}));
    c = function() {
      function b(b) {
      }
      b.prototype.push = function(b) {
      };
      b.prototype.close = function() {
      };
      b.create = function(b) {
        return "undefined" !== typeof ShumwayCom && ShumwayCom.createSpecialInflate ? new v(b, ShumwayCom.createSpecialInflate) : new t(b);
      };
      b.prototype._processZLibHeader = function(b, p, e) {
        if (p + 2 > e) {
          return 0;
        }
        b = b[p] << 8 | b[p + 1];
        p = null;
        2048 !== (b & 3840) ? p = "inflate: unknown compression method" : 0 !== b % 31 ? p = "inflate: bad FCHECK" : 0 !== (b & 32) && (p = "inflate: FDICT bit set");
        if (p) {
          if (this.onError) {
            this.onError(p);
          }
          return-1;
        }
        return 2;
      };
      b.inflate = function(h, p, e) {
        var d = new Uint8Array(p), a = 0;
        p = b.create(e);
        p.onData = function(b) {
          d.set(b, a);
          a += b.length;
        };
        p.push(h);
        p.close();
        return d;
      };
      return b;
    }();
    k.Inflate = c;
    var t = function(b) {
      function h(h) {
        b.call(this, h);
        this._buffer = null;
        this._bitLength = this._bitBuffer = this._bufferPosition = this._bufferSize = 0;
        this._window = new Uint8Array(65794);
        this._windowPosition = 0;
        this._state = h ? 7 : 0;
        this._isFinalBlock = !1;
        this._distanceTable = this._literalTable = null;
        this._block0Read = 0;
        this._block2State = null;
        this._copyState = {state:0, len:0, lenBits:0, dist:0, distBits:0};
        if (!s) {
          n = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
          a = new Uint16Array(30);
          g = new Uint8Array(30);
          for (var e = h = 0, d = 1;30 > h;++h) {
            a[h] = d, d += 1 << (g[h] = ~~((e += 2 < h ? 1 : 0) / 2));
          }
          var c = new Uint8Array(288);
          for (h = 0;32 > h;++h) {
            c[h] = 5;
          }
          q = f(c.subarray(0, 32));
          l = new Uint16Array(29);
          u = new Uint8Array(29);
          e = h = 0;
          for (d = 3;29 > h;++h) {
            l[h] = d - (28 == h ? 1 : 0), d += 1 << (u[h] = ~~((e += 4 < h ? 1 : 0) / 4 % 6));
          }
          for (h = 0;288 > h;++h) {
            c[h] = 144 > h || 279 < h ? 8 : 256 > h ? 9 : 7;
          }
          m = f(c);
          s = !0;
        }
      }
      __extends(h, b);
      h.prototype.push = function(b) {
        if (!this._buffer || this._buffer.length < this._bufferSize + b.length) {
          var h = new Uint8Array(this._bufferSize + b.length);
          this._buffer && h.set(this._buffer);
          this._buffer = h;
        }
        this._buffer.set(b, this._bufferSize);
        this._bufferSize += b.length;
        this._bufferPosition = 0;
        b = !1;
        do {
          h = this._windowPosition;
          if (0 === this._state && (b = this._decodeInitState())) {
            break;
          }
          switch(this._state) {
            case 1:
              b = this._decodeBlock0();
              break;
            case 3:
              if (b = this._decodeBlock2Pre()) {
                break;
              }
            ;
            case 2:
            ;
            case 4:
              b = this._decodeBlock();
              break;
            case 6:
            ;
            case 5:
              this._bufferPosition = this._bufferSize;
              break;
            case 7:
              var e = this._processZLibHeader(this._buffer, this._bufferPosition, this._bufferSize);
              0 < e ? (this._bufferPosition += e, this._state = 0) : 0 === e ? b = !0 : this._state = 6;
          }
          if (0 < this._windowPosition - h) {
            this.onData(this._window.subarray(h, this._windowPosition));
          }
          65536 <= this._windowPosition && ("copyWithin" in this._buffer ? this._window.copyWithin(0, this._windowPosition - 32768, this._windowPosition) : this._window.set(this._window.subarray(this._windowPosition - 32768, this._windowPosition)), this._windowPosition = 32768);
        } while (!b && this._bufferPosition < this._bufferSize);
        this._bufferPosition < this._bufferSize ? ("copyWithin" in this._buffer ? this._buffer.copyWithin(0, this._bufferPosition, this._bufferSize) : this._buffer.set(this._buffer.subarray(this._bufferPosition, this._bufferSize)), this._bufferSize -= this._bufferPosition) : this._bufferSize = 0;
      };
      h.prototype._decodeInitState = function() {
        if (this._isFinalBlock) {
          return this._state = 5, !1;
        }
        var b = this._buffer, h = this._bufferSize, e = this._bitBuffer, d = this._bitLength, a = this._bufferPosition;
        if (3 > (h - a << 3) + d) {
          return!0;
        }
        3 > d && (e |= b[a++] << d, d += 8);
        var g = e & 7, e = e >> 3, d = d - 3;
        switch(g >> 1) {
          case 0:
            d = e = 0;
            if (4 > h - a) {
              return!0;
            }
            var c = b[a] | b[a + 1] << 8, b = b[a + 2] | b[a + 3] << 8, a = a + 4;
            if (65535 !== (c ^ b)) {
              this._error("inflate: invalid block 0 length");
              b = 6;
              break;
            }
            0 === c ? b = 0 : (this._block0Read = c, b = 1);
            break;
          case 1:
            b = 2;
            this._literalTable = m;
            this._distanceTable = q;
            break;
          case 2:
            if (26 > (h - a << 3) + d) {
              return!0;
            }
            for (;14 > d;) {
              e |= b[a++] << d, d += 8;
            }
            c = (e >> 10 & 15) + 4;
            if ((h - a << 3) + d < 14 + 3 * c) {
              return!0;
            }
            for (var h = {numLiteralCodes:(e & 31) + 257, numDistanceCodes:(e >> 5 & 31) + 1, codeLengthTable:void 0, bitLengths:void 0, codesRead:0, dupBits:0}, e = e >> 14, d = d - 14, l = new Uint8Array(19), s = 0;s < c;++s) {
              3 > d && (e |= b[a++] << d, d += 8), l[n[s]] = e & 7, e >>= 3, d -= 3;
            }
            for (;19 > s;s++) {
              l[n[s]] = 0;
            }
            h.bitLengths = new Uint8Array(h.numLiteralCodes + h.numDistanceCodes);
            h.codeLengthTable = f(l);
            this._block2State = h;
            b = 3;
            break;
          default:
            return this._error("inflate: unsupported block type"), !1;
        }
        this._isFinalBlock = !!(g & 1);
        this._state = b;
        this._bufferPosition = a;
        this._bitBuffer = e;
        this._bitLength = d;
        return!1;
      };
      h.prototype._error = function(b) {
        if (this.onError) {
          this.onError(b);
        }
      };
      h.prototype._decodeBlock0 = function() {
        var b = this._bufferPosition, h = this._windowPosition, e = this._block0Read, d = 65794 - h, a = this._bufferSize - b, g = a < e, q = Math.min(d, a, e);
        this._window.set(this._buffer.subarray(b, b + q), h);
        this._windowPosition = h + q;
        this._bufferPosition = b + q;
        this._block0Read = e - q;
        return e === q ? (this._state = 0, !1) : g && d < a;
      };
      h.prototype._readBits = function(b) {
        var h = this._bitBuffer, e = this._bitLength;
        if (b > e) {
          var d = this._bufferPosition, a = this._bufferSize;
          do {
            if (d >= a) {
              return this._bufferPosition = d, this._bitBuffer = h, this._bitLength = e, -1;
            }
            h |= this._buffer[d++] << e;
            e += 8;
          } while (b > e);
          this._bufferPosition = d;
        }
        this._bitBuffer = h >> b;
        this._bitLength = e - b;
        return h & (1 << b) - 1;
      };
      h.prototype._readCode = function(b) {
        var h = this._bitBuffer, e = this._bitLength, d = b.maxBits;
        if (d > e) {
          var a = this._bufferPosition, g = this._bufferSize;
          do {
            if (a >= g) {
              return this._bufferPosition = a, this._bitBuffer = h, this._bitLength = e, -1;
            }
            h |= this._buffer[a++] << e;
            e += 8;
          } while (d > e);
          this._bufferPosition = a;
        }
        b = b.codes[h & (1 << d) - 1];
        d = b >> 16;
        if (b & 32768) {
          return this._error("inflate: invalid encoding"), this._state = 6, -1;
        }
        this._bitBuffer = h >> d;
        this._bitLength = e - d;
        return b & 65535;
      };
      h.prototype._decodeBlock2Pre = function() {
        var b = this._block2State, h = b.numLiteralCodes + b.numDistanceCodes, e = b.bitLengths, d = b.codesRead, a = 0 < d ? e[d - 1] : 0, g = b.codeLengthTable, q;
        if (0 < b.dupBits) {
          q = this._readBits(b.dupBits);
          if (0 > q) {
            return!0;
          }
          for (;q--;) {
            e[d++] = a;
          }
          b.dupBits = 0;
        }
        for (;d < h;) {
          var c = this._readCode(g);
          if (0 > c) {
            return b.codesRead = d, !0;
          }
          if (16 > c) {
            e[d++] = a = c;
          } else {
            var m;
            switch(c) {
              case 16:
                m = 2;
                q = 3;
                c = a;
                break;
              case 17:
                q = m = 3;
                c = 0;
                break;
              case 18:
                m = 7, q = 11, c = 0;
            }
            for (;q--;) {
              e[d++] = c;
            }
            q = this._readBits(m);
            if (0 > q) {
              return b.codesRead = d, b.dupBits = m, !0;
            }
            for (;q--;) {
              e[d++] = c;
            }
            a = c;
          }
        }
        this._literalTable = f(e.subarray(0, b.numLiteralCodes));
        this._distanceTable = f(e.subarray(b.numLiteralCodes));
        this._state = 4;
        this._block2State = null;
        return!1;
      };
      h.prototype._decodeBlock = function() {
        var b = this._literalTable, h = this._distanceTable, e = this._window, d = this._windowPosition, q = this._copyState, c, m, n, s;
        if (0 !== q.state) {
          switch(q.state) {
            case 1:
              if (0 > (c = this._readBits(q.lenBits))) {
                return!0;
              }
              q.len += c;
              q.state = 2;
            case 2:
              if (0 > (c = this._readCode(h))) {
                return!0;
              }
              q.distBits = g[c];
              q.dist = a[c];
              q.state = 3;
            case 3:
              c = 0;
              if (0 < q.distBits && 0 > (c = this._readBits(q.distBits))) {
                return!0;
              }
              s = q.dist + c;
              m = q.len;
              for (c = d - s;m--;) {
                e[d++] = e[c++];
              }
              q.state = 0;
              if (65536 <= d) {
                return this._windowPosition = d, !1;
              }
              break;
          }
        }
        do {
          c = this._readCode(b);
          if (0 > c) {
            return this._windowPosition = d, !0;
          }
          if (256 > c) {
            e[d++] = c;
          } else {
            if (256 < c) {
              this._windowPosition = d;
              c -= 257;
              n = u[c];
              m = l[c];
              c = 0 === n ? 0 : this._readBits(n);
              if (0 > c) {
                return q.state = 1, q.len = m, q.lenBits = n, !0;
              }
              m += c;
              c = this._readCode(h);
              if (0 > c) {
                return q.state = 2, q.len = m, !0;
              }
              n = g[c];
              s = a[c];
              c = 0 === n ? 0 : this._readBits(n);
              if (0 > c) {
                return q.state = 3, q.len = m, q.dist = s, q.distBits = n, !0;
              }
              s += c;
              for (c = d - s;m--;) {
                e[d++] = e[c++];
              }
            } else {
              this._state = 0;
              break;
            }
          }
        } while (65536 > d);
        this._windowPosition = d;
        return!1;
      };
      return h;
    }(c), n, a, g, q, l, u, m, s = !1, v = function(b) {
      function h(h, e) {
        b.call(this, h);
        this._verifyHeader = h;
        this._specialInflate = e();
        this._specialInflate.onData = function(b) {
          this.onData(b);
        }.bind(this);
      }
      __extends(h, b);
      h.prototype.push = function(b) {
        if (this._verifyHeader) {
          var h;
          this._buffer ? (h = new Uint8Array(this._buffer.length + b.length), h.set(this._buffer), h.set(b, this._buffer.length), this._buffer = null) : h = new Uint8Array(b);
          var e = this._processZLibHeader(h, 0, h.length);
          if (0 === e) {
            this._buffer = h;
            return;
          }
          this._verifyHeader = !0;
          0 < e && (b = h.subarray(e));
        }
        this._specialInflate.push(b);
      };
      h.prototype.close = function() {
        this._specialInflate && (this._specialInflate.close(), this._specialInflate = null);
      };
      return h;
    }(c), d;
    (function(b) {
      b[b.WRITE = 0] = "WRITE";
      b[b.DONE = 1] = "DONE";
      b[b.ZLIB_HEADER = 2] = "ZLIB_HEADER";
    })(d || (d = {}));
    var e = function() {
      function b() {
        this.a = 1;
        this.b = 0;
      }
      b.prototype.update = function(b, e, d) {
        for (var a = this.a, g = this.b;e < d;++e) {
          a = (a + (b[e] & 255)) % 65521, g = (g + a) % 65521;
        }
        this.a = a;
        this.b = g;
      };
      b.prototype.getChecksum = function() {
        return this.b << 16 | this.a;
      };
      return b;
    }();
    k.Adler32 = e;
    d = function() {
      function b(b) {
        this._state = (this._writeZlibHeader = b) ? 2 : 0;
        this._adler32 = b ? new e : null;
      }
      b.prototype.push = function(b) {
        2 === this._state && (this.onData(new Uint8Array([120, 156])), this._state = 0);
        for (var e = b.length, d = new Uint8Array(e + 5 * Math.ceil(e / 65535)), a = 0, g = 0;65535 < e;) {
          d.set(new Uint8Array([0, 255, 255, 0, 0]), a), a += 5, d.set(b.subarray(g, g + 65535), a), g += 65535, a += 65535, e -= 65535;
        }
        d.set(new Uint8Array([0, e & 255, e >> 8 & 255, ~e & 255, ~e >> 8 & 255]), a);
        d.set(b.subarray(g, e), a + 5);
        this.onData(d);
        this._adler32 && this._adler32.update(b, 0, e);
      };
      b.prototype.close = function() {
        this._state = 1;
        this.onData(new Uint8Array([1, 0, 0, 255, 255]));
        if (this._adler32) {
          var b = this._adler32.getChecksum();
          this.onData(new Uint8Array([b & 255, b >> 8 & 255, b >> 16 & 255, b >>> 24 & 255]));
        }
      };
      return b;
    }();
    k.Deflate = d;
  })(k.ArrayUtilities || (k.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    function f(b) {
      for (var e = new Uint16Array(b), d = 0;d < b;d++) {
        e[d] = 1024;
      }
      return e;
    }
    function c(b, e, d, a) {
      for (var g = 1, q = 0, c = 0;c < d;c++) {
        var m = a.decodeBit(b, g + e), g = (g << 1) + m, q = q | m << c
      }
      return q;
    }
    function t(b, e) {
      var d = [];
      d.length = e;
      for (var a = 0;a < e;a++) {
        d[a] = new l(b);
      }
      return d;
    }
    var n = function() {
      function b() {
        this.pos = this.available = 0;
        this.buffer = new Uint8Array(2E3);
      }
      b.prototype.append = function(b) {
        var h = this.pos + this.available, e = h + b.length;
        if (e > this.buffer.length) {
          for (var d = 2 * this.buffer.length;d < e;) {
            d *= 2;
          }
          e = new Uint8Array(d);
          e.set(this.buffer);
          this.buffer = e;
        }
        this.buffer.set(b, h);
        this.available += b.length;
      };
      b.prototype.compact = function() {
        0 !== this.available && (this.buffer.set(this.buffer.subarray(this.pos, this.pos + this.available), 0), this.pos = 0);
      };
      b.prototype.readByte = function() {
        if (0 >= this.available) {
          throw Error("Unexpected end of file");
        }
        this.available--;
        return this.buffer[this.pos++];
      };
      return b;
    }(), a = function() {
      function b(h) {
        this.onData = h;
        this.processed = 0;
      }
      b.prototype.writeBytes = function(b) {
        this.onData.call(null, b);
        this.processed += b.length;
      };
      return b;
    }(), g = function() {
      function b(h) {
        this.outStream = h;
        this.buf = null;
        this.size = this.pos = 0;
        this.isFull = !1;
        this.totalPos = this.writePos = 0;
      }
      b.prototype.create = function(b) {
        this.buf = new Uint8Array(b);
        this.pos = 0;
        this.size = b;
        this.isFull = !1;
        this.totalPos = this.writePos = 0;
      };
      b.prototype.putByte = function(b) {
        this.totalPos++;
        this.buf[this.pos++] = b;
        this.pos === this.size && (this.flush(), this.pos = 0, this.isFull = !0);
      };
      b.prototype.getByte = function(b) {
        return this.buf[b <= this.pos ? this.pos - b : this.size - b + this.pos];
      };
      b.prototype.flush = function() {
        this.writePos < this.pos && (this.outStream.writeBytes(this.buf.subarray(this.writePos, this.pos)), this.writePos = this.pos === this.size ? 0 : this.pos);
      };
      b.prototype.copyMatch = function(b, h) {
        for (var e = this.pos, d = this.size, a = this.buf, g = b <= e ? e - b : d - b + e, q = h;0 < q;) {
          for (var c = Math.min(Math.min(q, d - e), d - g), m = 0;m < c;m++) {
            var l = a[g++];
            a[e++] = l;
          }
          e === d && (this.pos = e, this.flush(), e = 0, this.isFull = !0);
          g === d && (g = 0);
          q -= c;
        }
        this.pos = e;
        this.totalPos += h;
      };
      b.prototype.checkDistance = function(b) {
        return b <= this.pos || this.isFull;
      };
      b.prototype.isEmpty = function() {
        return 0 === this.pos && !this.isFull;
      };
      return b;
    }(), q = function() {
      function b(h) {
        this.inStream = h;
        this.code = this.range = 0;
        this.corrupted = !1;
      }
      b.prototype.init = function() {
        0 !== this.inStream.readByte() && (this.corrupted = !0);
        this.range = -1;
        for (var b = 0, h = 0;4 > h;h++) {
          b = b << 8 | this.inStream.readByte();
        }
        b === this.range && (this.corrupted = !0);
        this.code = b;
      };
      b.prototype.isFinishedOK = function() {
        return 0 === this.code;
      };
      b.prototype.decodeDirectBits = function(b) {
        var h = 0, e = this.range, d = this.code;
        do {
          var e = e >>> 1 | 0, d = d - e | 0, a = d >> 31, d = d + (e & a) | 0;
          d === e && (this.corrupted = !0);
          0 <= e && 16777216 > e && (e <<= 8, d = d << 8 | this.inStream.readByte());
          h = (h << 1) + a + 1 | 0;
        } while (--b);
        this.range = e;
        this.code = d;
        return h;
      };
      b.prototype.decodeBit = function(b, h) {
        var e = this.range, d = this.code, a = b[h], g = (e >>> 11) * a;
        d >>> 0 < g ? (a = a + (2048 - a >> 5) | 0, e = g | 0, g = 0) : (a = a - (a >> 5) | 0, d = d - g | 0, e = e - g | 0, g = 1);
        b[h] = a & 65535;
        0 <= e && 16777216 > e && (e <<= 8, d = d << 8 | this.inStream.readByte());
        this.range = e;
        this.code = d;
        return g;
      };
      return b;
    }(), l = function() {
      function b(h) {
        this.numBits = h;
        this.probs = f(1 << h);
      }
      b.prototype.decode = function(b) {
        for (var h = 1, e = 0;e < this.numBits;e++) {
          h = (h << 1) + b.decodeBit(this.probs, h);
        }
        return h - (1 << this.numBits);
      };
      b.prototype.reverseDecode = function(b) {
        return c(this.probs, 0, this.numBits, b);
      };
      return b;
    }(), u = function() {
      function b() {
        this.choice = f(2);
        this.lowCoder = t(3, 16);
        this.midCoder = t(3, 16);
        this.highCoder = new l(8);
      }
      b.prototype.decode = function(b, h) {
        return 0 === b.decodeBit(this.choice, 0) ? this.lowCoder[h].decode(b) : 0 === b.decodeBit(this.choice, 1) ? 8 + this.midCoder[h].decode(b) : 16 + this.highCoder.decode(b);
      };
      return b;
    }(), m = function() {
      function b(h, e) {
        this.rangeDec = new q(h);
        this.outWindow = new g(e);
        this.markerIsMandatory = !1;
        this.dictSizeInProperties = this.dictSize = this.lp = this.pb = this.lc = 0;
        this.leftToUnpack = this.unpackSize = void 0;
        this.reps = new Int32Array(4);
        this.state = 0;
      }
      b.prototype.decodeProperties = function(b) {
        var h = b[0];
        if (225 <= h) {
          throw Error("Incorrect LZMA properties");
        }
        this.lc = h % 9;
        h = h / 9 | 0;
        this.pb = h / 5 | 0;
        this.lp = h % 5;
        for (h = this.dictSizeInProperties = 0;4 > h;h++) {
          this.dictSizeInProperties |= b[h + 1] << 8 * h;
        }
        this.dictSize = this.dictSizeInProperties;
        4096 > this.dictSize && (this.dictSize = 4096);
      };
      b.prototype.create = function() {
        this.outWindow.create(this.dictSize);
        this.init();
        this.rangeDec.init();
        this.reps[0] = 0;
        this.reps[1] = 0;
        this.reps[2] = 0;
        this.state = this.reps[3] = 0;
        this.leftToUnpack = this.unpackSize;
      };
      b.prototype.decodeLiteral = function(b, h) {
        var e = this.outWindow, d = this.rangeDec, a = 0;
        e.isEmpty() || (a = e.getByte(1));
        var g = 1, a = 768 * (((e.totalPos & (1 << this.lp) - 1) << this.lc) + (a >> 8 - this.lc));
        if (7 <= b) {
          e = e.getByte(h + 1);
          do {
            var q = e >> 7 & 1, e = e << 1, c = d.decodeBit(this.litProbs, a + ((1 + q << 8) + g)), g = g << 1 | c;
            if (q !== c) {
              break;
            }
          } while (256 > g);
        }
        for (;256 > g;) {
          g = g << 1 | d.decodeBit(this.litProbs, a + g);
        }
        return g - 256 & 255;
      };
      b.prototype.decodeDistance = function(b) {
        var h = b;
        3 < h && (h = 3);
        b = this.rangeDec;
        h = this.posSlotDecoder[h].decode(b);
        if (4 > h) {
          return h;
        }
        var e = (h >> 1) - 1, d = (2 | h & 1) << e;
        14 > h ? d = d + c(this.posDecoders, d - h, e, b) | 0 : (d = d + (b.decodeDirectBits(e - 4) << 4) | 0, d = d + this.alignDecoder.reverseDecode(b) | 0);
        return d;
      };
      b.prototype.init = function() {
        this.litProbs = f(768 << this.lc + this.lp);
        this.posSlotDecoder = t(6, 4);
        this.alignDecoder = new l(4);
        this.posDecoders = f(115);
        this.isMatch = f(192);
        this.isRep = f(12);
        this.isRepG0 = f(12);
        this.isRepG1 = f(12);
        this.isRepG2 = f(12);
        this.isRep0Long = f(192);
        this.lenDecoder = new u;
        this.repLenDecoder = new u;
      };
      b.prototype.decode = function(b) {
        for (var h = this.rangeDec, a = this.outWindow, g = this.pb, q = this.dictSize, c = this.markerIsMandatory, m = this.leftToUnpack, l = this.isMatch, n = this.isRep, u = this.isRepG0, f = this.isRepG1, k = this.isRepG2, r = this.isRep0Long, t = this.lenDecoder, y = this.repLenDecoder, A = this.reps[0], C = this.reps[1], x = this.reps[2], E = this.reps[3], B = this.state;;) {
          if (b && 48 > h.inStream.available) {
            this.outWindow.flush();
            break;
          }
          if (0 === m && !c && (this.outWindow.flush(), h.isFinishedOK())) {
            return d;
          }
          var D = a.totalPos & (1 << g) - 1;
          if (0 === h.decodeBit(l, (B << 4) + D)) {
            if (0 === m) {
              return s;
            }
            a.putByte(this.decodeLiteral(B, A));
            B = 4 > B ? 0 : 10 > B ? B - 3 : B - 6;
            m--;
          } else {
            if (0 !== h.decodeBit(n, B)) {
              if (0 === m || a.isEmpty()) {
                return s;
              }
              if (0 === h.decodeBit(u, B)) {
                if (0 === h.decodeBit(r, (B << 4) + D)) {
                  B = 7 > B ? 9 : 11;
                  a.putByte(a.getByte(A + 1));
                  m--;
                  continue;
                }
              } else {
                var F;
                0 === h.decodeBit(f, B) ? F = C : (0 === h.decodeBit(k, B) ? F = x : (F = E, E = x), x = C);
                C = A;
                A = F;
              }
              D = y.decode(h, D);
              B = 7 > B ? 8 : 11;
            } else {
              E = x;
              x = C;
              C = A;
              D = t.decode(h, D);
              B = 7 > B ? 7 : 10;
              A = this.decodeDistance(D);
              if (-1 === A) {
                return this.outWindow.flush(), h.isFinishedOK() ? v : s;
              }
              if (0 === m || A >= q || !a.checkDistance(A)) {
                return s;
              }
            }
            D += 2;
            F = !1;
            void 0 !== m && m < D && (D = m, F = !0);
            a.copyMatch(A + 1, D);
            m -= D;
            if (F) {
              return s;
            }
          }
        }
        this.state = B;
        this.reps[0] = A;
        this.reps[1] = C;
        this.reps[2] = x;
        this.reps[3] = E;
        this.leftToUnpack = m;
        return e;
      };
      return b;
    }(), s = 0, v = 1, d = 2, e = 3, b;
    (function(b) {
      b[b.WAIT_FOR_LZMA_HEADER = 0] = "WAIT_FOR_LZMA_HEADER";
      b[b.WAIT_FOR_SWF_HEADER = 1] = "WAIT_FOR_SWF_HEADER";
      b[b.PROCESS_DATA = 2] = "PROCESS_DATA";
      b[b.CLOSED = 3] = "CLOSED";
    })(b || (b = {}));
    b = function() {
      function b(h) {
        void 0 === h && (h = !1);
        this._state = h ? 1 : 0;
        this.buffer = null;
      }
      b.prototype.push = function(b) {
        if (2 > this._state) {
          var h = this.buffer ? this.buffer.length : 0, d = (1 === this._state ? 17 : 13) + 5;
          if (h + b.length < d) {
            d = new Uint8Array(h + b.length);
            0 < h && d.set(this.buffer);
            d.set(b, h);
            this.buffer = d;
            return;
          }
          var g = new Uint8Array(d);
          0 < h && g.set(this.buffer);
          g.set(b.subarray(0, d - h), h);
          this._inStream = new n;
          this._inStream.append(g.subarray(d - 5));
          this._outStream = new a(function(b) {
            this.onData.call(null, b);
          }.bind(this));
          this._decoder = new m(this._inStream, this._outStream);
          if (1 === this._state) {
            this._decoder.decodeProperties(g.subarray(12, 17)), this._decoder.markerIsMandatory = !1, this._decoder.unpackSize = ((g[4] | g[5] << 8 | g[6] << 16 | g[7] << 24) >>> 0) - 8;
          } else {
            this._decoder.decodeProperties(g.subarray(0, 5));
            for (var h = 0, q = !1, c = 0;8 > c;c++) {
              var l = g[5 + c];
              255 !== l && (q = !0);
              h |= l << 8 * c;
            }
            this._decoder.markerIsMandatory = !q;
            this._decoder.unpackSize = q ? h : void 0;
          }
          this._decoder.create();
          b = b.subarray(d);
          this._state = 2;
        }
        this._inStream.append(b);
        b = this._decoder.decode(!0);
        this._inStream.compact();
        b !== e && this._checkError(b);
      };
      b.prototype.close = function() {
        this._state = 3;
        var b = this._decoder.decode(!1);
        this._checkError(b);
        this._decoder = null;
      };
      b.prototype._checkError = function(b) {
        var h;
        b === s ? h = "LZMA decoding error" : b === e ? h = "Decoding is not complete" : b === v ? void 0 !== this._decoder.unpackSize && this._decoder.unpackSize !== this._outStream.processed && (h = "Finished with end marker before than specified size") : h = "Internal LZMA Error";
        if (h && this.onError) {
          this.onError(h);
        }
      };
      return b;
    }();
    k.LzmaDecoder = b;
  })(k.ArrayUtilities || (k.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    function f(a, d) {
      a !== g(a, 0, d) && throwError("RangeError", Errors.ParamRangeError);
    }
    function c(a) {
      return "string" === typeof a ? a : void 0 == a ? null : a + "";
    }
    var t = k.Debug.notImplemented, n = k.StringUtilities.utf8decode, a = k.StringUtilities.utf8encode, g = k.NumberUtilities.clamp, q = function() {
      return function(a, d, e) {
        this.buffer = a;
        this.length = d;
        this.littleEndian = e;
      };
    }();
    r.PlainObjectDataBuffer = q;
    for (var l = new Uint32Array(33), u = 1, m = 0;32 >= u;u++) {
      l[u] = m = m << 1 | 1;
    }
    var s;
    (function(a) {
      a[a.U8 = 1] = "U8";
      a[a.I32 = 2] = "I32";
      a[a.F32 = 4] = "F32";
    })(s || (s = {}));
    u = function() {
      function m(d) {
        void 0 === d && (d = m.INITIAL_SIZE);
        this._buffer || (this._buffer = new ArrayBuffer(d), this._position = this._length = 0, this._resetViews(), this._littleEndian = m._nativeLittleEndian, this._bitLength = this._bitBuffer = 0);
      }
      m.FromArrayBuffer = function(d, e) {
        void 0 === e && (e = -1);
        var b = Object.create(m.prototype);
        b._buffer = d;
        b._length = -1 === e ? d.byteLength : e;
        b._position = 0;
        b._resetViews();
        b._littleEndian = m._nativeLittleEndian;
        b._bitBuffer = 0;
        b._bitLength = 0;
        return b;
      };
      m.FromPlainObject = function(d) {
        var e = m.FromArrayBuffer(d.buffer, d.length);
        e._littleEndian = d.littleEndian;
        return e;
      };
      m.prototype.toPlainObject = function() {
        return new q(this._buffer, this._length, this._littleEndian);
      };
      m.prototype._resetViews = function() {
        this._u8 = new Uint8Array(this._buffer);
        this._f32 = this._i32 = null;
      };
      m.prototype._requestViews = function(d) {
        0 === (this._buffer.byteLength & 3) && (null === this._i32 && d & 2 && (this._i32 = new Int32Array(this._buffer)), null === this._f32 && d & 4 && (this._f32 = new Float32Array(this._buffer)));
      };
      m.prototype.getBytes = function() {
        return new Uint8Array(this._buffer, 0, this._length);
      };
      m.prototype._ensureCapacity = function(d) {
        var e = this._buffer;
        if (e.byteLength < d) {
          for (var b = Math.max(e.byteLength, 1);b < d;) {
            b *= 2;
          }
          d = m._arrayBufferPool.acquire(b);
          b = this._u8;
          this._buffer = d;
          this._resetViews();
          this._u8.set(b);
          m._arrayBufferPool.release(e);
        }
      };
      m.prototype.clear = function() {
        this._position = this._length = 0;
      };
      m.prototype.readBoolean = function() {
        return 0 !== this.readUnsignedByte();
      };
      m.prototype.readByte = function() {
        return this.readUnsignedByte() << 24 >> 24;
      };
      m.prototype.readUnsignedByte = function() {
        this._position + 1 > this._length && throwError("EOFError", Errors.EOFError);
        return this._u8[this._position++];
      };
      m.prototype.readBytes = function(d, e) {
        var b = 0;
        void 0 === b && (b = 0);
        void 0 === e && (e = 0);
        var h = this._position;
        b || (b = 0);
        e || (e = this._length - h);
        h + e > this._length && throwError("EOFError", Errors.EOFError);
        d.length < b + e && (d._ensureCapacity(b + e), d.length = b + e);
        d._u8.set(new Uint8Array(this._buffer, h, e), b);
        this._position += e;
      };
      m.prototype.readShort = function() {
        return this.readUnsignedShort() << 16 >> 16;
      };
      m.prototype.readUnsignedShort = function() {
        var d = this._u8, e = this._position;
        e + 2 > this._length && throwError("EOFError", Errors.EOFError);
        var b = d[e + 0], d = d[e + 1];
        this._position = e + 2;
        return this._littleEndian ? d << 8 | b : b << 8 | d;
      };
      m.prototype.readInt = function() {
        var d = this._u8, e = this._position;
        e + 4 > this._length && throwError("EOFError", Errors.EOFError);
        var b = d[e + 0], h = d[e + 1], p = d[e + 2], d = d[e + 3];
        this._position = e + 4;
        return this._littleEndian ? d << 24 | p << 16 | h << 8 | b : b << 24 | h << 16 | p << 8 | d;
      };
      m.prototype.readUnsignedInt = function() {
        return this.readInt() >>> 0;
      };
      m.prototype.readFloat = function() {
        var d = this._position;
        d + 4 > this._length && throwError("EOFError", Errors.EOFError);
        this._position = d + 4;
        this._requestViews(4);
        if (this._littleEndian && 0 === (d & 3) && this._f32) {
          return this._f32[d >> 2];
        }
        var e = this._u8, b = k.IntegerUtilities.u8;
        this._littleEndian ? (b[0] = e[d + 0], b[1] = e[d + 1], b[2] = e[d + 2], b[3] = e[d + 3]) : (b[3] = e[d + 0], b[2] = e[d + 1], b[1] = e[d + 2], b[0] = e[d + 3]);
        return k.IntegerUtilities.f32[0];
      };
      m.prototype.readDouble = function() {
        var d = this._u8, e = this._position;
        e + 8 > this._length && throwError("EOFError", Errors.EOFError);
        var b = k.IntegerUtilities.u8;
        this._littleEndian ? (b[0] = d[e + 0], b[1] = d[e + 1], b[2] = d[e + 2], b[3] = d[e + 3], b[4] = d[e + 4], b[5] = d[e + 5], b[6] = d[e + 6], b[7] = d[e + 7]) : (b[0] = d[e + 7], b[1] = d[e + 6], b[2] = d[e + 5], b[3] = d[e + 4], b[4] = d[e + 3], b[5] = d[e + 2], b[6] = d[e + 1], b[7] = d[e + 0]);
        this._position = e + 8;
        return k.IntegerUtilities.f64[0];
      };
      m.prototype.writeBoolean = function(d) {
        this.writeByte(d ? 1 : 0);
      };
      m.prototype.writeByte = function(d) {
        var e = this._position + 1;
        this._ensureCapacity(e);
        this._u8[this._position++] = d;
        e > this._length && (this._length = e);
      };
      m.prototype.writeUnsignedByte = function(d) {
        var e = this._position + 1;
        this._ensureCapacity(e);
        this._u8[this._position++] = d;
        e > this._length && (this._length = e);
      };
      m.prototype.writeRawBytes = function(d) {
        var e = this._position + d.length;
        this._ensureCapacity(e);
        this._u8.set(d, this._position);
        this._position = e;
        e > this._length && (this._length = e);
      };
      m.prototype.writeBytes = function(d, e, b) {
        void 0 === e && (e = 0);
        void 0 === b && (b = 0);
        k.isNullOrUndefined(d) && throwError("TypeError", Errors.NullPointerError, "bytes");
        2 > arguments.length && (e = 0);
        3 > arguments.length && (b = 0);
        f(e, d.length);
        f(e + b, d.length);
        0 === b && (b = d.length - e);
        this.writeRawBytes(new Int8Array(d._buffer, e, b));
      };
      m.prototype.writeShort = function(d) {
        this.writeUnsignedShort(d);
      };
      m.prototype.writeUnsignedShort = function(d) {
        var e = this._position;
        this._ensureCapacity(e + 2);
        var b = this._u8;
        this._littleEndian ? (b[e + 0] = d, b[e + 1] = d >> 8) : (b[e + 0] = d >> 8, b[e + 1] = d);
        this._position = e += 2;
        e > this._length && (this._length = e);
      };
      m.prototype.writeInt = function(d) {
        this.writeUnsignedInt(d);
      };
      m.prototype.write2Ints = function(d, e) {
        this.write2UnsignedInts(d, e);
      };
      m.prototype.write4Ints = function(d, e, b, h) {
        this.write4UnsignedInts(d, e, b, h);
      };
      m.prototype.writeUnsignedInt = function(d) {
        var e = this._position;
        this._ensureCapacity(e + 4);
        this._requestViews(2);
        if (this._littleEndian === m._nativeLittleEndian && 0 === (e & 3) && this._i32) {
          this._i32[e >> 2] = d;
        } else {
          var b = this._u8;
          this._littleEndian ? (b[e + 0] = d, b[e + 1] = d >> 8, b[e + 2] = d >> 16, b[e + 3] = d >> 24) : (b[e + 0] = d >> 24, b[e + 1] = d >> 16, b[e + 2] = d >> 8, b[e + 3] = d);
        }
        this._position = e += 4;
        e > this._length && (this._length = e);
      };
      m.prototype.write2UnsignedInts = function(d, e) {
        var b = this._position;
        this._ensureCapacity(b + 8);
        this._requestViews(2);
        this._littleEndian === m._nativeLittleEndian && 0 === (b & 3) && this._i32 ? (this._i32[(b >> 2) + 0] = d, this._i32[(b >> 2) + 1] = e, this._position = b += 8, b > this._length && (this._length = b)) : (this.writeUnsignedInt(d), this.writeUnsignedInt(e));
      };
      m.prototype.write4UnsignedInts = function(d, e, b, h) {
        var p = this._position;
        this._ensureCapacity(p + 16);
        this._requestViews(2);
        this._littleEndian === m._nativeLittleEndian && 0 === (p & 3) && this._i32 ? (this._i32[(p >> 2) + 0] = d, this._i32[(p >> 2) + 1] = e, this._i32[(p >> 2) + 2] = b, this._i32[(p >> 2) + 3] = h, this._position = p += 16, p > this._length && (this._length = p)) : (this.writeUnsignedInt(d), this.writeUnsignedInt(e), this.writeUnsignedInt(b), this.writeUnsignedInt(h));
      };
      m.prototype.writeFloat = function(d) {
        var e = this._position;
        this._ensureCapacity(e + 4);
        this._requestViews(4);
        if (this._littleEndian === m._nativeLittleEndian && 0 === (e & 3) && this._f32) {
          this._f32[e >> 2] = d;
        } else {
          var b = this._u8;
          k.IntegerUtilities.f32[0] = d;
          d = k.IntegerUtilities.u8;
          this._littleEndian ? (b[e + 0] = d[0], b[e + 1] = d[1], b[e + 2] = d[2], b[e + 3] = d[3]) : (b[e + 0] = d[3], b[e + 1] = d[2], b[e + 2] = d[1], b[e + 3] = d[0]);
        }
        this._position = e += 4;
        e > this._length && (this._length = e);
      };
      m.prototype.write6Floats = function(d, e, b, h, p, a) {
        var g = this._position;
        this._ensureCapacity(g + 24);
        this._requestViews(4);
        this._littleEndian === m._nativeLittleEndian && 0 === (g & 3) && this._f32 ? (this._f32[(g >> 2) + 0] = d, this._f32[(g >> 2) + 1] = e, this._f32[(g >> 2) + 2] = b, this._f32[(g >> 2) + 3] = h, this._f32[(g >> 2) + 4] = p, this._f32[(g >> 2) + 5] = a, this._position = g += 24, g > this._length && (this._length = g)) : (this.writeFloat(d), this.writeFloat(e), this.writeFloat(b), this.writeFloat(h), this.writeFloat(p), this.writeFloat(a));
      };
      m.prototype.writeDouble = function(d) {
        var e = this._position;
        this._ensureCapacity(e + 8);
        var b = this._u8;
        k.IntegerUtilities.f64[0] = d;
        d = k.IntegerUtilities.u8;
        this._littleEndian ? (b[e + 0] = d[0], b[e + 1] = d[1], b[e + 2] = d[2], b[e + 3] = d[3], b[e + 4] = d[4], b[e + 5] = d[5], b[e + 6] = d[6], b[e + 7] = d[7]) : (b[e + 0] = d[7], b[e + 1] = d[6], b[e + 2] = d[5], b[e + 3] = d[4], b[e + 4] = d[3], b[e + 5] = d[2], b[e + 6] = d[1], b[e + 7] = d[0]);
        this._position = e += 8;
        e > this._length && (this._length = e);
      };
      m.prototype.readRawBytes = function() {
        return new Int8Array(this._buffer, 0, this._length);
      };
      m.prototype.writeUTF = function(d) {
        d = c(d);
        d = n(d);
        this.writeShort(d.length);
        this.writeRawBytes(d);
      };
      m.prototype.writeUTFBytes = function(d) {
        d = c(d);
        d = n(d);
        this.writeRawBytes(d);
      };
      m.prototype.readUTF = function() {
        return this.readUTFBytes(this.readShort());
      };
      m.prototype.readUTFBytes = function(d) {
        d >>>= 0;
        var e = this._position;
        e + d > this._length && throwError("EOFError", Errors.EOFError);
        this._position += d;
        return a(new Int8Array(this._buffer, e, d));
      };
      Object.defineProperty(m.prototype, "length", {get:function() {
        return this._length;
      }, set:function(d) {
        d >>>= 0;
        d > this._buffer.byteLength && this._ensureCapacity(d);
        this._length = d;
        this._position = g(this._position, 0, this._length);
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(m.prototype, "bytesAvailable", {get:function() {
        return this._length - this._position;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(m.prototype, "position", {get:function() {
        return this._position;
      }, set:function(d) {
        this._position = d >>> 0;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(m.prototype, "buffer", {get:function() {
        return this._buffer;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(m.prototype, "bytes", {get:function() {
        return this._u8;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(m.prototype, "ints", {get:function() {
        this._requestViews(2);
        return this._i32;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(m.prototype, "objectEncoding", {get:function() {
        return this._objectEncoding;
      }, set:function(d) {
        this._objectEncoding = d >>> 0;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(m.prototype, "endian", {get:function() {
        return this._littleEndian ? "littleEndian" : "bigEndian";
      }, set:function(d) {
        d = c(d);
        this._littleEndian = "auto" === d ? m._nativeLittleEndian : "littleEndian" === d;
      }, enumerable:!0, configurable:!0});
      m.prototype.toString = function() {
        return a(new Int8Array(this._buffer, 0, this._length));
      };
      m.prototype.toBlob = function(d) {
        return new Blob([new Int8Array(this._buffer, this._position, this._length)], {type:d});
      };
      m.prototype.writeMultiByte = function(d, e) {
        t("packageInternal flash.utils.ObjectOutput::writeMultiByte");
      };
      m.prototype.readMultiByte = function(d, e) {
        t("packageInternal flash.utils.ObjectInput::readMultiByte");
      };
      m.prototype.getValue = function(d) {
        d |= 0;
        return d >= this._length ? void 0 : this._u8[d];
      };
      m.prototype.setValue = function(d, e) {
        d |= 0;
        var b = d + 1;
        this._ensureCapacity(b);
        this._u8[d] = e;
        b > this._length && (this._length = b);
      };
      m.prototype.readFixed = function() {
        return this.readInt() / 65536;
      };
      m.prototype.readFixed8 = function() {
        return this.readShort() / 256;
      };
      m.prototype.readFloat16 = function() {
        var d = this.readUnsignedShort(), e = d >> 15 ? -1 : 1, b = (d & 31744) >> 10, d = d & 1023;
        return b ? 31 === b ? d ? NaN : Infinity * e : e * Math.pow(2, b - 15) * (1 + d / 1024) : d / 1024 * Math.pow(2, -14) * e;
      };
      m.prototype.readEncodedU32 = function() {
        var d = this.readUnsignedByte();
        if (!(d & 128)) {
          return d;
        }
        d = d & 127 | this.readUnsignedByte() << 7;
        if (!(d & 16384)) {
          return d;
        }
        d = d & 16383 | this.readUnsignedByte() << 14;
        if (!(d & 2097152)) {
          return d;
        }
        d = d & 2097151 | this.readUnsignedByte() << 21;
        return d & 268435456 ? d & 268435455 | this.readUnsignedByte() << 28 : d;
      };
      m.prototype.readBits = function(d) {
        return this.readUnsignedBits(d) << 32 - d >> 32 - d;
      };
      m.prototype.readUnsignedBits = function(d) {
        for (var e = this._bitBuffer, b = this._bitLength;d > b;) {
          e = e << 8 | this.readUnsignedByte(), b += 8;
        }
        b -= d;
        d = e >>> b & l[d];
        this._bitBuffer = e;
        this._bitLength = b;
        return d;
      };
      m.prototype.readFixedBits = function(d) {
        return this.readBits(d) / 65536;
      };
      m.prototype.readString = function(d) {
        var e = this._position;
        if (d) {
          e + d > this._length && throwError("EOFError", Errors.EOFError), this._position += d;
        } else {
          d = 0;
          for (var b = e;b < this._length && this._u8[b];b++) {
            d++;
          }
          this._position += d + 1;
        }
        return a(new Int8Array(this._buffer, e, d));
      };
      m.prototype.align = function() {
        this._bitLength = this._bitBuffer = 0;
      };
      m.prototype.deflate = function() {
        this.compress("deflate");
      };
      m.prototype.inflate = function() {
        this.uncompress("deflate");
      };
      m.prototype.compress = function(d) {
        d = 0 === arguments.length ? "zlib" : c(d);
        var e;
        switch(d) {
          case "zlib":
            e = new r.Deflate(!0);
            break;
          case "deflate":
            e = new r.Deflate(!1);
            break;
          default:
            return;
        }
        var b = new m;
        e.onData = b.writeRawBytes.bind(b);
        e.push(this._u8.subarray(0, this._length));
        e.close();
        this._ensureCapacity(b._u8.length);
        this._u8.set(b._u8);
        this.length = b.length;
        this._position = 0;
      };
      m.prototype.uncompress = function(d) {
        d = 0 === arguments.length ? "zlib" : c(d);
        var e;
        switch(d) {
          case "zlib":
            e = r.Inflate.create(!0);
            break;
          case "deflate":
            e = r.Inflate.create(!1);
            break;
          case "lzma":
            e = new r.LzmaDecoder(!1);
            break;
          default:
            return;
        }
        var b = new m, h;
        e.onData = b.writeRawBytes.bind(b);
        e.onError = function(b) {
          return h = b;
        };
        e.push(this._u8.subarray(0, this._length));
        h && throwError("IOError", Errors.CompressedDataError);
        e.close();
        this._ensureCapacity(b._u8.length);
        this._u8.set(b._u8);
        this.length = b.length;
        this._position = 0;
      };
      m._nativeLittleEndian = 1 === (new Int8Array((new Int32Array([1])).buffer))[0];
      m.INITIAL_SIZE = 128;
      m._arrayBufferPool = new k.ArrayBufferPool;
      return m;
    }();
    r.DataBuffer = u;
  })(k.ArrayUtilities || (k.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  var r = k.ArrayUtilities.DataBuffer, f = k.ArrayUtilities.ensureTypedArrayCapacity;
  (function(c) {
    c[c.BeginSolidFill = 1] = "BeginSolidFill";
    c[c.BeginGradientFill = 2] = "BeginGradientFill";
    c[c.BeginBitmapFill = 3] = "BeginBitmapFill";
    c[c.EndFill = 4] = "EndFill";
    c[c.LineStyleSolid = 5] = "LineStyleSolid";
    c[c.LineStyleGradient = 6] = "LineStyleGradient";
    c[c.LineStyleBitmap = 7] = "LineStyleBitmap";
    c[c.LineEnd = 8] = "LineEnd";
    c[c.MoveTo = 9] = "MoveTo";
    c[c.LineTo = 10] = "LineTo";
    c[c.CurveTo = 11] = "CurveTo";
    c[c.CubicCurveTo = 12] = "CubicCurveTo";
  })(k.PathCommand || (k.PathCommand = {}));
  (function(c) {
    c[c.Linear = 16] = "Linear";
    c[c.Radial = 18] = "Radial";
  })(k.GradientType || (k.GradientType = {}));
  (function(c) {
    c[c.Pad = 0] = "Pad";
    c[c.Reflect = 1] = "Reflect";
    c[c.Repeat = 2] = "Repeat";
  })(k.GradientSpreadMethod || (k.GradientSpreadMethod = {}));
  (function(c) {
    c[c.RGB = 0] = "RGB";
    c[c.LinearRGB = 1] = "LinearRGB";
  })(k.GradientInterpolationMethod || (k.GradientInterpolationMethod = {}));
  (function(c) {
    c[c.None = 0] = "None";
    c[c.Normal = 1] = "Normal";
    c[c.Vertical = 2] = "Vertical";
    c[c.Horizontal = 3] = "Horizontal";
  })(k.LineScaleMode || (k.LineScaleMode = {}));
  var c = function() {
    return function(c, a, g, q, l, u, m, s, f, d, e) {
      this.commands = c;
      this.commandsPosition = a;
      this.coordinates = g;
      this.morphCoordinates = q;
      this.coordinatesPosition = l;
      this.styles = u;
      this.stylesLength = m;
      this.morphStyles = s;
      this.morphStylesLength = f;
      this.hasFills = d;
      this.hasLines = e;
    };
  }();
  k.PlainObjectShapeData = c;
  var t;
  (function(c) {
    c[c.Commands = 32] = "Commands";
    c[c.Coordinates = 128] = "Coordinates";
    c[c.Styles = 16] = "Styles";
  })(t || (t = {}));
  t = function() {
    function n(a) {
      void 0 === a && (a = !0);
      a && this.clear();
    }
    n.FromPlainObject = function(a) {
      var g = new n(!1);
      g.commands = a.commands;
      g.coordinates = a.coordinates;
      g.morphCoordinates = a.morphCoordinates;
      g.commandsPosition = a.commandsPosition;
      g.coordinatesPosition = a.coordinatesPosition;
      g.styles = r.FromArrayBuffer(a.styles, a.stylesLength);
      g.styles.endian = "auto";
      a.morphStyles && (g.morphStyles = r.FromArrayBuffer(a.morphStyles, a.morphStylesLength), g.morphStyles.endian = "auto");
      g.hasFills = a.hasFills;
      g.hasLines = a.hasLines;
      return g;
    };
    n.prototype.moveTo = function(a, g) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = 9;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = g;
    };
    n.prototype.lineTo = function(a, g) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = 10;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = g;
    };
    n.prototype.curveTo = function(a, g, c, l) {
      this.ensurePathCapacities(1, 4);
      this.commands[this.commandsPosition++] = 11;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = g;
      this.coordinates[this.coordinatesPosition++] = c;
      this.coordinates[this.coordinatesPosition++] = l;
    };
    n.prototype.cubicCurveTo = function(a, g, c, l, n, m) {
      this.ensurePathCapacities(1, 6);
      this.commands[this.commandsPosition++] = 12;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = g;
      this.coordinates[this.coordinatesPosition++] = c;
      this.coordinates[this.coordinatesPosition++] = l;
      this.coordinates[this.coordinatesPosition++] = n;
      this.coordinates[this.coordinatesPosition++] = m;
    };
    n.prototype.beginFill = function(a) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 1;
      this.styles.writeUnsignedInt(a);
      this.hasFills = !0;
    };
    n.prototype.writeMorphFill = function(a) {
      this.morphStyles.writeUnsignedInt(a);
    };
    n.prototype.endFill = function() {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 4;
    };
    n.prototype.endLine = function() {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 8;
    };
    n.prototype.lineStyle = function(a, g, c, l, n, m, s) {
      this.ensurePathCapacities(2, 0);
      this.commands[this.commandsPosition++] = 5;
      this.coordinates[this.coordinatesPosition++] = a;
      a = this.styles;
      a.writeUnsignedInt(g);
      a.writeBoolean(c);
      a.writeUnsignedByte(l);
      a.writeUnsignedByte(n);
      a.writeUnsignedByte(m);
      a.writeUnsignedByte(s);
      this.hasLines = !0;
    };
    n.prototype.writeMorphLineStyle = function(a, g) {
      this.morphCoordinates[this.coordinatesPosition - 1] = a;
      this.morphStyles.writeUnsignedInt(g);
    };
    n.prototype.beginBitmap = function(a, g, c, l, n) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = a;
      a = this.styles;
      a.writeUnsignedInt(g);
      this._writeStyleMatrix(c, !1);
      a.writeBoolean(l);
      a.writeBoolean(n);
      this.hasFills = !0;
    };
    n.prototype.writeMorphBitmap = function(a) {
      this._writeStyleMatrix(a, !0);
    };
    n.prototype.beginGradient = function(a, g, c, l, n, m, s, f) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = a;
      a = this.styles;
      a.writeUnsignedByte(l);
      a.writeShort(f);
      this._writeStyleMatrix(n, !1);
      l = g.length;
      a.writeByte(l);
      for (n = 0;n < l;n++) {
        a.writeUnsignedByte(c[n]), a.writeUnsignedInt(g[n]);
      }
      a.writeUnsignedByte(m);
      a.writeUnsignedByte(s);
      this.hasFills = !0;
    };
    n.prototype.writeMorphGradient = function(a, g, c) {
      this._writeStyleMatrix(c, !0);
      c = this.morphStyles;
      for (var l = 0;l < a.length;l++) {
        c.writeUnsignedByte(g[l]), c.writeUnsignedInt(a[l]);
      }
    };
    n.prototype.writeCommandAndCoordinates = function(a, g, c) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = g;
      this.coordinates[this.coordinatesPosition++] = c;
    };
    n.prototype.writeCoordinates = function(a, g) {
      this.ensurePathCapacities(0, 2);
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = g;
    };
    n.prototype.writeMorphCoordinates = function(a, g) {
      this.morphCoordinates = f(this.morphCoordinates, this.coordinatesPosition);
      this.morphCoordinates[this.coordinatesPosition - 2] = a;
      this.morphCoordinates[this.coordinatesPosition - 1] = g;
    };
    n.prototype.clear = function() {
      this.commandsPosition = this.coordinatesPosition = 0;
      this.commands = new Uint8Array(32);
      this.coordinates = new Int32Array(128);
      this.styles = new r(16);
      this.styles.endian = "auto";
      this.hasFills = this.hasLines = !1;
    };
    n.prototype.isEmpty = function() {
      return 0 === this.commandsPosition;
    };
    n.prototype.clone = function() {
      var a = new n(!1);
      a.commands = new Uint8Array(this.commands);
      a.commandsPosition = this.commandsPosition;
      a.coordinates = new Int32Array(this.coordinates);
      a.coordinatesPosition = this.coordinatesPosition;
      a.styles = new r(this.styles.length);
      a.styles.writeRawBytes(this.styles.bytes);
      this.morphStyles && (a.morphStyles = new r(this.morphStyles.length), a.morphStyles.writeRawBytes(this.morphStyles.bytes));
      a.hasFills = this.hasFills;
      a.hasLines = this.hasLines;
      return a;
    };
    n.prototype.toPlainObject = function() {
      return new c(this.commands, this.commandsPosition, this.coordinates, this.morphCoordinates, this.coordinatesPosition, this.styles.buffer, this.styles.length, this.morphStyles && this.morphStyles.buffer, this.morphStyles ? this.morphStyles.length : 0, this.hasFills, this.hasLines);
    };
    Object.defineProperty(n.prototype, "buffers", {get:function() {
      var a = [this.commands.buffer, this.coordinates.buffer, this.styles.buffer];
      this.morphCoordinates && a.push(this.morphCoordinates.buffer);
      this.morphStyles && a.push(this.morphStyles.buffer);
      return a;
    }, enumerable:!0, configurable:!0});
    n.prototype._writeStyleMatrix = function(a, g) {
      (g ? this.morphStyles : this.styles).write6Floats(a.a, a.b, a.c, a.d, a.tx, a.ty);
    };
    n.prototype.ensurePathCapacities = function(a, g) {
      this.commands = f(this.commands, this.commandsPosition + a);
      this.coordinates = f(this.coordinates, this.coordinatesPosition + g);
    };
    return n;
  }();
  k.ShapeData = t;
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    (function(f) {
      (function(c) {
        c[c.CODE_END = 0] = "CODE_END";
        c[c.CODE_SHOW_FRAME = 1] = "CODE_SHOW_FRAME";
        c[c.CODE_DEFINE_SHAPE = 2] = "CODE_DEFINE_SHAPE";
        c[c.CODE_FREE_CHARACTER = 3] = "CODE_FREE_CHARACTER";
        c[c.CODE_PLACE_OBJECT = 4] = "CODE_PLACE_OBJECT";
        c[c.CODE_REMOVE_OBJECT = 5] = "CODE_REMOVE_OBJECT";
        c[c.CODE_DEFINE_BITS = 6] = "CODE_DEFINE_BITS";
        c[c.CODE_DEFINE_BUTTON = 7] = "CODE_DEFINE_BUTTON";
        c[c.CODE_JPEG_TABLES = 8] = "CODE_JPEG_TABLES";
        c[c.CODE_SET_BACKGROUND_COLOR = 9] = "CODE_SET_BACKGROUND_COLOR";
        c[c.CODE_DEFINE_FONT = 10] = "CODE_DEFINE_FONT";
        c[c.CODE_DEFINE_TEXT = 11] = "CODE_DEFINE_TEXT";
        c[c.CODE_DO_ACTION = 12] = "CODE_DO_ACTION";
        c[c.CODE_DEFINE_FONT_INFO = 13] = "CODE_DEFINE_FONT_INFO";
        c[c.CODE_DEFINE_SOUND = 14] = "CODE_DEFINE_SOUND";
        c[c.CODE_START_SOUND = 15] = "CODE_START_SOUND";
        c[c.CODE_STOP_SOUND = 16] = "CODE_STOP_SOUND";
        c[c.CODE_DEFINE_BUTTON_SOUND = 17] = "CODE_DEFINE_BUTTON_SOUND";
        c[c.CODE_SOUND_STREAM_HEAD = 18] = "CODE_SOUND_STREAM_HEAD";
        c[c.CODE_SOUND_STREAM_BLOCK = 19] = "CODE_SOUND_STREAM_BLOCK";
        c[c.CODE_DEFINE_BITS_LOSSLESS = 20] = "CODE_DEFINE_BITS_LOSSLESS";
        c[c.CODE_DEFINE_BITS_JPEG2 = 21] = "CODE_DEFINE_BITS_JPEG2";
        c[c.CODE_DEFINE_SHAPE2 = 22] = "CODE_DEFINE_SHAPE2";
        c[c.CODE_DEFINE_BUTTON_CXFORM = 23] = "CODE_DEFINE_BUTTON_CXFORM";
        c[c.CODE_PROTECT = 24] = "CODE_PROTECT";
        c[c.CODE_PATHS_ARE_POSTSCRIPT = 25] = "CODE_PATHS_ARE_POSTSCRIPT";
        c[c.CODE_PLACE_OBJECT2 = 26] = "CODE_PLACE_OBJECT2";
        c[c.CODE_REMOVE_OBJECT2 = 28] = "CODE_REMOVE_OBJECT2";
        c[c.CODE_SYNC_FRAME = 29] = "CODE_SYNC_FRAME";
        c[c.CODE_FREE_ALL = 31] = "CODE_FREE_ALL";
        c[c.CODE_DEFINE_SHAPE3 = 32] = "CODE_DEFINE_SHAPE3";
        c[c.CODE_DEFINE_TEXT2 = 33] = "CODE_DEFINE_TEXT2";
        c[c.CODE_DEFINE_BUTTON2 = 34] = "CODE_DEFINE_BUTTON2";
        c[c.CODE_DEFINE_BITS_JPEG3 = 35] = "CODE_DEFINE_BITS_JPEG3";
        c[c.CODE_DEFINE_BITS_LOSSLESS2 = 36] = "CODE_DEFINE_BITS_LOSSLESS2";
        c[c.CODE_DEFINE_EDIT_TEXT = 37] = "CODE_DEFINE_EDIT_TEXT";
        c[c.CODE_DEFINE_VIDEO = 38] = "CODE_DEFINE_VIDEO";
        c[c.CODE_DEFINE_SPRITE = 39] = "CODE_DEFINE_SPRITE";
        c[c.CODE_NAME_CHARACTER = 40] = "CODE_NAME_CHARACTER";
        c[c.CODE_PRODUCT_INFO = 41] = "CODE_PRODUCT_INFO";
        c[c.CODE_DEFINE_TEXT_FORMAT = 42] = "CODE_DEFINE_TEXT_FORMAT";
        c[c.CODE_FRAME_LABEL = 43] = "CODE_FRAME_LABEL";
        c[c.CODE_DEFINE_BEHAVIOUR = 44] = "CODE_DEFINE_BEHAVIOUR";
        c[c.CODE_SOUND_STREAM_HEAD2 = 45] = "CODE_SOUND_STREAM_HEAD2";
        c[c.CODE_DEFINE_MORPH_SHAPE = 46] = "CODE_DEFINE_MORPH_SHAPE";
        c[c.CODE_GENERATE_FRAME = 47] = "CODE_GENERATE_FRAME";
        c[c.CODE_DEFINE_FONT2 = 48] = "CODE_DEFINE_FONT2";
        c[c.CODE_GEN_COMMAND = 49] = "CODE_GEN_COMMAND";
        c[c.CODE_DEFINE_COMMAND_OBJECT = 50] = "CODE_DEFINE_COMMAND_OBJECT";
        c[c.CODE_CHARACTER_SET = 51] = "CODE_CHARACTER_SET";
        c[c.CODE_EXTERNAL_FONT = 52] = "CODE_EXTERNAL_FONT";
        c[c.CODE_DEFINE_FUNCTION = 53] = "CODE_DEFINE_FUNCTION";
        c[c.CODE_PLACE_FUNCTION = 54] = "CODE_PLACE_FUNCTION";
        c[c.CODE_GEN_TAG_OBJECTS = 55] = "CODE_GEN_TAG_OBJECTS";
        c[c.CODE_EXPORT_ASSETS = 56] = "CODE_EXPORT_ASSETS";
        c[c.CODE_IMPORT_ASSETS = 57] = "CODE_IMPORT_ASSETS";
        c[c.CODE_ENABLE_DEBUGGER = 58] = "CODE_ENABLE_DEBUGGER";
        c[c.CODE_DO_INIT_ACTION = 59] = "CODE_DO_INIT_ACTION";
        c[c.CODE_DEFINE_VIDEO_STREAM = 60] = "CODE_DEFINE_VIDEO_STREAM";
        c[c.CODE_VIDEO_FRAME = 61] = "CODE_VIDEO_FRAME";
        c[c.CODE_DEFINE_FONT_INFO2 = 62] = "CODE_DEFINE_FONT_INFO2";
        c[c.CODE_DEBUG_ID = 63] = "CODE_DEBUG_ID";
        c[c.CODE_ENABLE_DEBUGGER2 = 64] = "CODE_ENABLE_DEBUGGER2";
        c[c.CODE_SCRIPT_LIMITS = 65] = "CODE_SCRIPT_LIMITS";
        c[c.CODE_SET_TAB_INDEX = 66] = "CODE_SET_TAB_INDEX";
        c[c.CODE_FILE_ATTRIBUTES = 69] = "CODE_FILE_ATTRIBUTES";
        c[c.CODE_PLACE_OBJECT3 = 70] = "CODE_PLACE_OBJECT3";
        c[c.CODE_IMPORT_ASSETS2 = 71] = "CODE_IMPORT_ASSETS2";
        c[c.CODE_DO_ABC_DEFINE = 72] = "CODE_DO_ABC_DEFINE";
        c[c.CODE_DEFINE_FONT_ALIGN_ZONES = 73] = "CODE_DEFINE_FONT_ALIGN_ZONES";
        c[c.CODE_CSM_TEXT_SETTINGS = 74] = "CODE_CSM_TEXT_SETTINGS";
        c[c.CODE_DEFINE_FONT3 = 75] = "CODE_DEFINE_FONT3";
        c[c.CODE_SYMBOL_CLASS = 76] = "CODE_SYMBOL_CLASS";
        c[c.CODE_METADATA = 77] = "CODE_METADATA";
        c[c.CODE_DEFINE_SCALING_GRID = 78] = "CODE_DEFINE_SCALING_GRID";
        c[c.CODE_DO_ABC = 82] = "CODE_DO_ABC";
        c[c.CODE_DEFINE_SHAPE4 = 83] = "CODE_DEFINE_SHAPE4";
        c[c.CODE_DEFINE_MORPH_SHAPE2 = 84] = "CODE_DEFINE_MORPH_SHAPE2";
        c[c.CODE_DEFINE_SCENE_AND_FRAME_LABEL_DATA = 86] = "CODE_DEFINE_SCENE_AND_FRAME_LABEL_DATA";
        c[c.CODE_DEFINE_BINARY_DATA = 87] = "CODE_DEFINE_BINARY_DATA";
        c[c.CODE_DEFINE_FONT_NAME = 88] = "CODE_DEFINE_FONT_NAME";
        c[c.CODE_START_SOUND2 = 89] = "CODE_START_SOUND2";
        c[c.CODE_DEFINE_BITS_JPEG4 = 90] = "CODE_DEFINE_BITS_JPEG4";
        c[c.CODE_DEFINE_FONT4 = 91] = "CODE_DEFINE_FONT4";
      })(f.SwfTag || (f.SwfTag = {}));
      (function(c) {
        c[c.CODE_DEFINE_SHAPE = 2] = "CODE_DEFINE_SHAPE";
        c[c.CODE_DEFINE_BITS = 6] = "CODE_DEFINE_BITS";
        c[c.CODE_DEFINE_BUTTON = 7] = "CODE_DEFINE_BUTTON";
        c[c.CODE_DEFINE_FONT = 10] = "CODE_DEFINE_FONT";
        c[c.CODE_DEFINE_TEXT = 11] = "CODE_DEFINE_TEXT";
        c[c.CODE_DEFINE_SOUND = 14] = "CODE_DEFINE_SOUND";
        c[c.CODE_DEFINE_BITS_LOSSLESS = 20] = "CODE_DEFINE_BITS_LOSSLESS";
        c[c.CODE_DEFINE_BITS_JPEG2 = 21] = "CODE_DEFINE_BITS_JPEG2";
        c[c.CODE_DEFINE_SHAPE2 = 22] = "CODE_DEFINE_SHAPE2";
        c[c.CODE_DEFINE_SHAPE3 = 32] = "CODE_DEFINE_SHAPE3";
        c[c.CODE_DEFINE_TEXT2 = 33] = "CODE_DEFINE_TEXT2";
        c[c.CODE_DEFINE_BUTTON2 = 34] = "CODE_DEFINE_BUTTON2";
        c[c.CODE_DEFINE_BITS_JPEG3 = 35] = "CODE_DEFINE_BITS_JPEG3";
        c[c.CODE_DEFINE_BITS_LOSSLESS2 = 36] = "CODE_DEFINE_BITS_LOSSLESS2";
        c[c.CODE_DEFINE_EDIT_TEXT = 37] = "CODE_DEFINE_EDIT_TEXT";
        c[c.CODE_DEFINE_SPRITE = 39] = "CODE_DEFINE_SPRITE";
        c[c.CODE_DEFINE_MORPH_SHAPE = 46] = "CODE_DEFINE_MORPH_SHAPE";
        c[c.CODE_DEFINE_FONT2 = 48] = "CODE_DEFINE_FONT2";
        c[c.CODE_DEFINE_VIDEO_STREAM = 60] = "CODE_DEFINE_VIDEO_STREAM";
        c[c.CODE_DEFINE_FONT3 = 75] = "CODE_DEFINE_FONT3";
        c[c.CODE_DEFINE_SHAPE4 = 83] = "CODE_DEFINE_SHAPE4";
        c[c.CODE_DEFINE_MORPH_SHAPE2 = 84] = "CODE_DEFINE_MORPH_SHAPE2";
        c[c.CODE_DEFINE_BINARY_DATA = 87] = "CODE_DEFINE_BINARY_DATA";
        c[c.CODE_DEFINE_BITS_JPEG4 = 90] = "CODE_DEFINE_BITS_JPEG4";
        c[c.CODE_DEFINE_FONT4 = 91] = "CODE_DEFINE_FONT4";
      })(f.DefinitionTags || (f.DefinitionTags = {}));
      (function(c) {
        c[c.CODE_DEFINE_BITS = 6] = "CODE_DEFINE_BITS";
        c[c.CODE_DEFINE_BITS_JPEG2 = 21] = "CODE_DEFINE_BITS_JPEG2";
        c[c.CODE_DEFINE_BITS_JPEG3 = 35] = "CODE_DEFINE_BITS_JPEG3";
        c[c.CODE_DEFINE_BITS_JPEG4 = 90] = "CODE_DEFINE_BITS_JPEG4";
      })(f.ImageDefinitionTags || (f.ImageDefinitionTags = {}));
      (function(c) {
        c[c.CODE_DEFINE_FONT = 10] = "CODE_DEFINE_FONT";
        c[c.CODE_DEFINE_FONT2 = 48] = "CODE_DEFINE_FONT2";
        c[c.CODE_DEFINE_FONT3 = 75] = "CODE_DEFINE_FONT3";
        c[c.CODE_DEFINE_FONT4 = 91] = "CODE_DEFINE_FONT4";
      })(f.FontDefinitionTags || (f.FontDefinitionTags = {}));
      (function(c) {
        c[c.CODE_PLACE_OBJECT = 4] = "CODE_PLACE_OBJECT";
        c[c.CODE_PLACE_OBJECT2 = 26] = "CODE_PLACE_OBJECT2";
        c[c.CODE_PLACE_OBJECT3 = 70] = "CODE_PLACE_OBJECT3";
        c[c.CODE_REMOVE_OBJECT = 5] = "CODE_REMOVE_OBJECT";
        c[c.CODE_REMOVE_OBJECT2 = 28] = "CODE_REMOVE_OBJECT2";
        c[c.CODE_START_SOUND = 15] = "CODE_START_SOUND";
        c[c.CODE_START_SOUND2 = 89] = "CODE_START_SOUND2";
        c[c.CODE_VIDEO_FRAME = 61] = "CODE_VIDEO_FRAME";
      })(f.ControlTags || (f.ControlTags = {}));
      (function(c) {
        c[c.Move = 1] = "Move";
        c[c.HasCharacter = 2] = "HasCharacter";
        c[c.HasMatrix = 4] = "HasMatrix";
        c[c.HasColorTransform = 8] = "HasColorTransform";
        c[c.HasRatio = 16] = "HasRatio";
        c[c.HasName = 32] = "HasName";
        c[c.HasClipDepth = 64] = "HasClipDepth";
        c[c.HasClipActions = 128] = "HasClipActions";
        c[c.HasFilterList = 256] = "HasFilterList";
        c[c.HasBlendMode = 512] = "HasBlendMode";
        c[c.HasCacheAsBitmap = 1024] = "HasCacheAsBitmap";
        c[c.HasClassName = 2048] = "HasClassName";
        c[c.HasImage = 4096] = "HasImage";
        c[c.HasVisible = 8192] = "HasVisible";
        c[c.OpaqueBackground = 16384] = "OpaqueBackground";
        c[c.Reserved = 32768] = "Reserved";
      })(f.PlaceObjectFlags || (f.PlaceObjectFlags = {}));
      (function(c) {
        c[c.Load = 1] = "Load";
        c[c.EnterFrame = 2] = "EnterFrame";
        c[c.Unload = 4] = "Unload";
        c[c.MouseMove = 8] = "MouseMove";
        c[c.MouseDown = 16] = "MouseDown";
        c[c.MouseUp = 32] = "MouseUp";
        c[c.KeyDown = 64] = "KeyDown";
        c[c.KeyUp = 128] = "KeyUp";
        c[c.Data = 256] = "Data";
        c[c.Initialize = 512] = "Initialize";
        c[c.Press = 1024] = "Press";
        c[c.Release = 2048] = "Release";
        c[c.ReleaseOutside = 4096] = "ReleaseOutside";
        c[c.RollOver = 8192] = "RollOver";
        c[c.RollOut = 16384] = "RollOut";
        c[c.DragOver = 32768] = "DragOver";
        c[c.DragOut = 65536] = "DragOut";
        c[c.KeyPress = 131072] = "KeyPress";
        c[c.Construct = 262144] = "Construct";
      })(f.AVM1ClipEvents || (f.AVM1ClipEvents = {}));
    })(k.Parser || (k.Parser = {}));
  })(k.SWF || (k.SWF = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  var r = k.Debug.unexpected, f = function() {
    function c(c, n, a, g) {
      this.url = c;
      this.method = n;
      this.mimeType = a;
      this.data = g;
    }
    c.prototype.readAll = function(c, n) {
      var a = this.url, g = new XMLHttpRequest({mozSystem:!0});
      g.open(this.method || "GET", this.url, !0);
      g.responseType = "arraybuffer";
      c && (g.onprogress = function(a) {
        c(g.response, a.loaded, a.total);
      });
      g.onreadystatechange = function(c) {
        4 === g.readyState && (200 !== g.status && 0 !== g.status || null === g.response ? (r("Path: " + a + " not found."), n(null, g.statusText)) : n(g.response));
      };
      this.mimeType && g.setRequestHeader("Content-Type", this.mimeType);
      g.send(this.data || null);
    };
    c.prototype.readChunked = function(c, n, a, g, q, l) {
      if (0 >= c) {
        this.readAsync(n, a, g, q, l);
      } else {
        var f = 0, m = new Uint8Array(c), s = 0, k;
        this.readAsync(function(d, e) {
          k = e.total;
          for (var b = d.length, h = 0;f + b >= c;) {
            var p = c - f;
            m.set(d.subarray(h, h + p), f);
            h += p;
            b -= p;
            s += c;
            n(m, {loaded:s, total:k});
            f = 0;
          }
          m.set(d.subarray(h), f);
          f += b;
        }, a, g, function() {
          0 < f && (s += f, n(m.subarray(0, f), {loaded:s, total:k}), f = 0);
          q && q();
        }, l);
      }
    };
    c.prototype.readAsync = function(c, n, a, g, q) {
      var l = new XMLHttpRequest({mozSystem:!0}), f = this.url, m = 0, s = 0;
      l.open(this.method || "GET", f, !0);
      l.responseType = "moz-chunked-arraybuffer";
      var k = "moz-chunked-arraybuffer" !== l.responseType;
      k && (l.responseType = "arraybuffer");
      l.onprogress = function(d) {
        k || (m = d.loaded, s = d.total, c(new Uint8Array(l.response), {loaded:m, total:s}));
      };
      l.onreadystatechange = function(d) {
        2 === l.readyState && q && q(f, l.status, l.getAllResponseHeaders());
        4 === l.readyState && (200 !== l.status && 0 !== l.status || null === l.response && (0 === s || m !== s) ? n(l.statusText) : (k && (d = l.response, c(new Uint8Array(d), {loaded:0, total:d.byteLength})), g && g()));
      };
      this.mimeType && l.setRequestHeader("Content-Type", this.mimeType);
      l.send(this.data || null);
      a && a();
    };
    return c;
  }();
  k.BinaryFileReader = f;
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    (function(f) {
      f[f.Objects = 0] = "Objects";
      f[f.References = 1] = "References";
    })(k.RemotingPhase || (k.RemotingPhase = {}));
    (function(f) {
      f[f.HasMatrix = 1] = "HasMatrix";
      f[f.HasBounds = 2] = "HasBounds";
      f[f.HasChildren = 4] = "HasChildren";
      f[f.HasColorTransform = 8] = "HasColorTransform";
      f[f.HasClipRect = 16] = "HasClipRect";
      f[f.HasMiscellaneousProperties = 32] = "HasMiscellaneousProperties";
      f[f.HasMask = 64] = "HasMask";
      f[f.HasClip = 128] = "HasClip";
    })(k.MessageBits || (k.MessageBits = {}));
    (function(f) {
      f[f.None = 0] = "None";
      f[f.Asset = 134217728] = "Asset";
    })(k.IDMask || (k.IDMask = {}));
    (function(f) {
      f[f.EOF = 0] = "EOF";
      f[f.UpdateFrame = 100] = "UpdateFrame";
      f[f.UpdateGraphics = 101] = "UpdateGraphics";
      f[f.UpdateBitmapData = 102] = "UpdateBitmapData";
      f[f.UpdateTextContent = 103] = "UpdateTextContent";
      f[f.UpdateStage = 104] = "UpdateStage";
      f[f.UpdateNetStream = 105] = "UpdateNetStream";
      f[f.RequestBitmapData = 106] = "RequestBitmapData";
      f[f.DrawToBitmap = 200] = "DrawToBitmap";
      f[f.MouseEvent = 300] = "MouseEvent";
      f[f.KeyboardEvent = 301] = "KeyboardEvent";
      f[f.FocusEvent = 302] = "FocusEvent";
    })(k.MessageTag || (k.MessageTag = {}));
    (function(f) {
      f[f.Blur = 0] = "Blur";
      f[f.DropShadow = 1] = "DropShadow";
    })(k.FilterType || (k.FilterType = {}));
    (function(f) {
      f[f.Identity = 0] = "Identity";
      f[f.AlphaMultiplierOnly = 1] = "AlphaMultiplierOnly";
      f[f.All = 2] = "All";
    })(k.ColorTransformEncoding || (k.ColorTransformEncoding = {}));
    (function(f) {
      f[f.Initialized = 0] = "Initialized";
      f[f.Metadata = 1] = "Metadata";
      f[f.PlayStart = 2] = "PlayStart";
      f[f.PlayStop = 3] = "PlayStop";
      f[f.BufferEmpty = 4] = "BufferEmpty";
      f[f.BufferFull = 5] = "BufferFull";
      f[f.Pause = 6] = "Pause";
      f[f.Unpause = 7] = "Unpause";
      f[f.Seeking = 8] = "Seeking";
      f[f.Seeked = 9] = "Seeked";
      f[f.Progress = 10] = "Progress";
      f[f.Error = 11] = "Error";
    })(k.VideoPlaybackEvent || (k.VideoPlaybackEvent = {}));
    (function(f) {
      f[f.Init = 1] = "Init";
      f[f.Pause = 2] = "Pause";
      f[f.Seek = 3] = "Seek";
      f[f.GetTime = 4] = "GetTime";
      f[f.GetBufferLength = 5] = "GetBufferLength";
      f[f.SetSoundLevels = 6] = "SetSoundLevels";
      f[f.GetBytesLoaded = 7] = "GetBytesLoaded";
      f[f.GetBytesTotal = 8] = "GetBytesTotal";
      f[f.EnsurePlaying = 9] = "EnsurePlaying";
    })(k.VideoControlEvent || (k.VideoControlEvent = {}));
    (function(f) {
      f[f.ShowAll = 0] = "ShowAll";
      f[f.ExactFit = 1] = "ExactFit";
      f[f.NoBorder = 2] = "NoBorder";
      f[f.NoScale = 4] = "NoScale";
    })(k.StageScaleMode || (k.StageScaleMode = {}));
    (function(f) {
      f[f.None = 0] = "None";
      f[f.Top = 1] = "Top";
      f[f.Bottom = 2] = "Bottom";
      f[f.Left = 4] = "Left";
      f[f.Right = 8] = "Right";
      f[f.TopLeft = f.Top | f.Left] = "TopLeft";
      f[f.BottomLeft = f.Bottom | f.Left] = "BottomLeft";
      f[f.BottomRight = f.Bottom | f.Right] = "BottomRight";
      f[f.TopRight = f.Top | f.Right] = "TopRight";
    })(k.StageAlignFlags || (k.StageAlignFlags = {}));
    k.MouseEventNames = "click dblclick mousedown mousemove mouseup mouseover mouseout".split(" ");
    k.KeyboardEventNames = ["keydown", "keypress", "keyup"];
    (function(f) {
      f[f.CtrlKey = 1] = "CtrlKey";
      f[f.AltKey = 2] = "AltKey";
      f[f.ShiftKey = 4] = "ShiftKey";
    })(k.KeyboardEventFlags || (k.KeyboardEventFlags = {}));
    (function(f) {
      f[f.DocumentHidden = 0] = "DocumentHidden";
      f[f.DocumentVisible = 1] = "DocumentVisible";
      f[f.WindowBlur = 2] = "WindowBlur";
      f[f.WindowFocus = 3] = "WindowFocus";
    })(k.FocusEventType || (k.FocusEventType = {}));
  })(k.Remoting || (k.Remoting = {}));
})(Shumway || (Shumway = {}));
var throwError, Errors;
(function(k) {
  (function(k) {
    (function(f) {
      var c = function() {
        function c() {
        }
        c.toRGBA = function(a, g, c, l) {
          void 0 === l && (l = 1);
          return "rgba(" + a + "," + g + "," + c + "," + l + ")";
        };
        return c;
      }();
      f.UI = c;
      var k = function() {
        function n() {
        }
        n.prototype.tabToolbar = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(37, 44, 51, a);
        };
        n.prototype.toolbars = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(52, 60, 69, a);
        };
        n.prototype.selectionBackground = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(29, 79, 115, a);
        };
        n.prototype.selectionText = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(245, 247, 250, a);
        };
        n.prototype.splitters = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(0, 0, 0, a);
        };
        n.prototype.bodyBackground = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(17, 19, 21, a);
        };
        n.prototype.sidebarBackground = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(24, 29, 32, a);
        };
        n.prototype.attentionBackground = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(161, 134, 80, a);
        };
        n.prototype.bodyText = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(143, 161, 178, a);
        };
        n.prototype.foregroundTextGrey = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(182, 186, 191, a);
        };
        n.prototype.contentTextHighContrast = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(169, 186, 203, a);
        };
        n.prototype.contentTextGrey = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(143, 161, 178, a);
        };
        n.prototype.contentTextDarkGrey = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(95, 115, 135, a);
        };
        n.prototype.blueHighlight = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(70, 175, 227, a);
        };
        n.prototype.purpleHighlight = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(107, 122, 187, a);
        };
        n.prototype.pinkHighlight = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(223, 128, 255, a);
        };
        n.prototype.redHighlight = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(235, 83, 104, a);
        };
        n.prototype.orangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(217, 102, 41, a);
        };
        n.prototype.lightOrangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(217, 155, 40, a);
        };
        n.prototype.greenHighlight = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(112, 191, 83, a);
        };
        n.prototype.blueGreyHighlight = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(94, 136, 176, a);
        };
        return n;
      }();
      f.UIThemeDark = k;
      k = function() {
        function n() {
        }
        n.prototype.tabToolbar = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(235, 236, 237, a);
        };
        n.prototype.toolbars = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(240, 241, 242, a);
        };
        n.prototype.selectionBackground = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(76, 158, 217, a);
        };
        n.prototype.selectionText = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(245, 247, 250, a);
        };
        n.prototype.splitters = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(170, 170, 170, a);
        };
        n.prototype.bodyBackground = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(252, 252, 252, a);
        };
        n.prototype.sidebarBackground = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(247, 247, 247, a);
        };
        n.prototype.attentionBackground = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(161, 134, 80, a);
        };
        n.prototype.bodyText = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(24, 25, 26, a);
        };
        n.prototype.foregroundTextGrey = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(88, 89, 89, a);
        };
        n.prototype.contentTextHighContrast = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(41, 46, 51, a);
        };
        n.prototype.contentTextGrey = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(143, 161, 178, a);
        };
        n.prototype.contentTextDarkGrey = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(102, 115, 128, a);
        };
        n.prototype.blueHighlight = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(0, 136, 204, a);
        };
        n.prototype.purpleHighlight = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(91, 95, 255, a);
        };
        n.prototype.pinkHighlight = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(184, 46, 229, a);
        };
        n.prototype.redHighlight = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(237, 38, 85, a);
        };
        n.prototype.orangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(241, 60, 0, a);
        };
        n.prototype.lightOrangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(217, 126, 0, a);
        };
        n.prototype.greenHighlight = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(44, 187, 15, a);
        };
        n.prototype.blueGreyHighlight = function(a) {
          void 0 === a && (a = 1);
          return c.toRGBA(95, 136, 176, a);
        };
        return n;
      }();
      f.UIThemeLight = k;
    })(k.Theme || (k.Theme = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    (function(f) {
      var c = function() {
        function c(n, a) {
          this._buffers = n || [];
          this._snapshots = [];
          this._windowStart = this._startTime = a;
          this._maxDepth = 0;
        }
        c.prototype.addBuffer = function(c) {
          this._buffers.push(c);
        };
        c.prototype.getSnapshotAt = function(c) {
          return this._snapshots[c];
        };
        Object.defineProperty(c.prototype, "hasSnapshots", {get:function() {
          return 0 < this.snapshotCount;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(c.prototype, "snapshotCount", {get:function() {
          return this._snapshots.length;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(c.prototype, "startTime", {get:function() {
          return this._startTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(c.prototype, "endTime", {get:function() {
          return this._endTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(c.prototype, "totalTime", {get:function() {
          return this.endTime - this.startTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(c.prototype, "windowStart", {get:function() {
          return this._windowStart;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(c.prototype, "windowEnd", {get:function() {
          return this._windowEnd;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(c.prototype, "windowLength", {get:function() {
          return this.windowEnd - this.windowStart;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(c.prototype, "maxDepth", {get:function() {
          return this._maxDepth;
        }, enumerable:!0, configurable:!0});
        c.prototype.forEachSnapshot = function(c) {
          for (var a = 0, g = this.snapshotCount;a < g;a++) {
            c(this._snapshots[a], a);
          }
        };
        c.prototype.createSnapshots = function() {
          var c = Number.MIN_VALUE, a = 0;
          for (this._snapshots = [];0 < this._buffers.length;) {
            var g = this._buffers.shift().createSnapshot();
            g && (c < g.endTime && (c = g.endTime), a < g.maxDepth && (a = g.maxDepth), this._snapshots.push(g));
          }
          this._windowEnd = this._endTime = c;
          this._maxDepth = a;
        };
        c.prototype.setWindow = function(c, a) {
          if (c > a) {
            var g = c;
            c = a;
            a = g;
          }
          g = Math.min(a - c, this.totalTime);
          c < this._startTime ? (c = this._startTime, a = this._startTime + g) : a > this._endTime && (c = this._endTime - g, a = this._endTime);
          this._windowStart = c;
          this._windowEnd = a;
        };
        c.prototype.moveWindowTo = function(c) {
          this.setWindow(c - this.windowLength / 2, c + this.windowLength / 2);
        };
        return c;
      }();
      f.Profile = c;
    })(k.Profiler || (k.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(k, r) {
  function f() {
    this.constructor = k;
  }
  for (var c in r) {
    r.hasOwnProperty(c) && (k[c] = r[c]);
  }
  f.prototype = r.prototype;
  k.prototype = new f;
};
(function(k) {
  (function(k) {
    (function(f) {
      var c = function() {
        return function(c) {
          this.kind = c;
          this.totalTime = this.selfTime = this.count = 0;
        };
      }();
      f.TimelineFrameStatistics = c;
      var k = function() {
        function n(a, g, c, l, n, m) {
          this.parent = a;
          this.kind = g;
          this.startData = c;
          this.endData = l;
          this.startTime = n;
          this.endTime = m;
          this.maxDepth = 0;
        }
        Object.defineProperty(n.prototype, "totalTime", {get:function() {
          return this.endTime - this.startTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(n.prototype, "selfTime", {get:function() {
          var a = this.totalTime;
          if (this.children) {
            for (var g = 0, c = this.children.length;g < c;g++) {
              var l = this.children[g], a = a - (l.endTime - l.startTime)
            }
          }
          return a;
        }, enumerable:!0, configurable:!0});
        n.prototype.getChildIndex = function(a) {
          for (var g = this.children, c = 0;c < g.length;c++) {
            if (g[c].endTime > a) {
              return c;
            }
          }
          return 0;
        };
        n.prototype.getChildRange = function(a, g) {
          if (this.children && a <= this.endTime && g >= this.startTime && g >= a) {
            var c = this._getNearestChild(a), l = this._getNearestChildReverse(g);
            if (c <= l) {
              return a = this.children[c].startTime, g = this.children[l].endTime, {startIndex:c, endIndex:l, startTime:a, endTime:g, totalTime:g - a};
            }
          }
          return null;
        };
        n.prototype._getNearestChild = function(a) {
          var g = this.children;
          if (g && g.length) {
            if (a <= g[0].endTime) {
              return 0;
            }
            for (var c, l = 0, n = g.length - 1;n > l;) {
              c = (l + n) / 2 | 0;
              var m = g[c];
              if (a >= m.startTime && a <= m.endTime) {
                return c;
              }
              a > m.endTime ? l = c + 1 : n = c;
            }
            return Math.ceil((l + n) / 2);
          }
          return 0;
        };
        n.prototype._getNearestChildReverse = function(a) {
          var g = this.children;
          if (g && g.length) {
            var c = g.length - 1;
            if (a >= g[c].startTime) {
              return c;
            }
            for (var l, n = 0;c > n;) {
              l = Math.ceil((n + c) / 2);
              var m = g[l];
              if (a >= m.startTime && a <= m.endTime) {
                return l;
              }
              a > m.endTime ? n = l : c = l - 1;
            }
            return(n + c) / 2 | 0;
          }
          return 0;
        };
        n.prototype.query = function(a) {
          if (a < this.startTime || a > this.endTime) {
            return null;
          }
          var g = this.children;
          if (g && 0 < g.length) {
            for (var c, l = 0, n = g.length - 1;n > l;) {
              var m = (l + n) / 2 | 0;
              c = g[m];
              if (a >= c.startTime && a <= c.endTime) {
                return c.query(a);
              }
              a > c.endTime ? l = m + 1 : n = m;
            }
            c = g[n];
            if (a >= c.startTime && a <= c.endTime) {
              return c.query(a);
            }
          }
          return this;
        };
        n.prototype.queryNext = function(a) {
          for (var g = this;a > g.endTime;) {
            if (g.parent) {
              g = g.parent;
            } else {
              break;
            }
          }
          return g.query(a);
        };
        n.prototype.getDepth = function() {
          for (var a = 0, g = this;g;) {
            a++, g = g.parent;
          }
          return a;
        };
        n.prototype.calculateStatistics = function() {
          function a(q) {
            if (q.kind) {
              var l = g[q.kind.id] || (g[q.kind.id] = new c(q.kind));
              l.count++;
              l.selfTime += q.selfTime;
              l.totalTime += q.totalTime;
            }
            q.children && q.children.forEach(a);
          }
          var g = this.statistics = [];
          a(this);
        };
        n.prototype.trace = function(a) {
          var g = (this.kind ? this.kind.name + ": " : "Profile: ") + (this.endTime - this.startTime).toFixed(2);
          if (this.children && this.children.length) {
            a.enter(g);
            for (g = 0;g < this.children.length;g++) {
              this.children[g].trace(a);
            }
            a.outdent();
          } else {
            a.writeLn(g);
          }
        };
        return n;
      }();
      f.TimelineFrame = k;
      k = function(c) {
        function a(a) {
          c.call(this, null, null, null, null, NaN, NaN);
          this.name = a;
        }
        __extends(a, c);
        return a;
      }(k);
      f.TimelineBufferSnapshot = k;
    })(k.Profiler || (k.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(f) {
      var c = function() {
        function c(n, a) {
          void 0 === n && (n = "");
          this.name = n || "";
          this._startTime = k.isNullOrUndefined(a) ? jsGlobal.START_TIME : a;
        }
        c.prototype.getKind = function(c) {
          return this._kinds[c];
        };
        Object.defineProperty(c.prototype, "kinds", {get:function() {
          return this._kinds.concat();
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(c.prototype, "depth", {get:function() {
          return this._depth;
        }, enumerable:!0, configurable:!0});
        c.prototype._initialize = function() {
          this._depth = 0;
          this._stack = [];
          this._data = [];
          this._kinds = [];
          this._kindNameMap = Object.create(null);
          this._marks = new k.CircularBuffer(Int32Array, 20);
          this._times = new k.CircularBuffer(Float64Array, 20);
        };
        c.prototype._getKindId = function(n) {
          var a = c.MAX_KINDID;
          if (void 0 === this._kindNameMap[n]) {
            if (a = this._kinds.length, a < c.MAX_KINDID) {
              var g = {id:a, name:n, visible:!0};
              this._kinds.push(g);
              this._kindNameMap[n] = g;
            } else {
              a = c.MAX_KINDID;
            }
          } else {
            a = this._kindNameMap[n].id;
          }
          return a;
        };
        c.prototype._getMark = function(n, a, g) {
          var q = c.MAX_DATAID;
          k.isNullOrUndefined(g) || a === c.MAX_KINDID || (q = this._data.length, q < c.MAX_DATAID ? this._data.push(g) : q = c.MAX_DATAID);
          return n | q << 16 | a;
        };
        c.prototype.enter = function(n, a, g) {
          g = (k.isNullOrUndefined(g) ? performance.now() : g) - this._startTime;
          this._marks || this._initialize();
          this._depth++;
          n = this._getKindId(n);
          this._marks.write(this._getMark(c.ENTER, n, a));
          this._times.write(g);
          this._stack.push(n);
        };
        c.prototype.leave = function(n, a, g) {
          g = (k.isNullOrUndefined(g) ? performance.now() : g) - this._startTime;
          var q = this._stack.pop();
          n && (q = this._getKindId(n));
          this._marks.write(this._getMark(c.LEAVE, q, a));
          this._times.write(g);
          this._depth--;
        };
        c.prototype.count = function(c, a, g) {
        };
        c.prototype.createSnapshot = function() {
          var n;
          void 0 === n && (n = Number.MAX_VALUE);
          if (!this._marks) {
            return null;
          }
          var a = this._times, g = this._kinds, q = this._data, l = new f.TimelineBufferSnapshot(this.name), u = [l], m = 0;
          this._marks || this._initialize();
          this._marks.forEachInReverse(function(l, v) {
            var d = q[l >>> 16 & c.MAX_DATAID], e = g[l & c.MAX_KINDID];
            if (k.isNullOrUndefined(e) || e.visible) {
              var b = l & 2147483648, h = a.get(v), p = u.length;
              if (b === c.LEAVE) {
                if (1 === p && (m++, m > n)) {
                  return!0;
                }
                u.push(new f.TimelineFrame(u[p - 1], e, null, d, NaN, h));
              } else {
                if (b === c.ENTER) {
                  if (e = u.pop(), b = u[u.length - 1]) {
                    for (b.children ? b.children.unshift(e) : b.children = [e], b = u.length, e.depth = b, e.startData = d, e.startTime = h;e;) {
                      if (e.maxDepth < b) {
                        e.maxDepth = b, e = e.parent;
                      } else {
                        break;
                      }
                    }
                  } else {
                    return!0;
                  }
                }
              }
            }
          });
          l.children && l.children.length && (l.startTime = l.children[0].startTime, l.endTime = l.children[l.children.length - 1].endTime);
          return l;
        };
        c.prototype.reset = function(c) {
          this._startTime = k.isNullOrUndefined(c) ? performance.now() : c;
          this._marks ? (this._depth = 0, this._data = [], this._marks.reset(), this._times.reset()) : this._initialize();
        };
        c.FromFirefoxProfile = function(n, a) {
          for (var g = n.profile.threads[0].samples, q = new c(a, g[0].time), l = [], f, m = 0;m < g.length;m++) {
            f = g[m];
            var s = f.time, k = f.frames, d = 0;
            for (f = Math.min(k.length, l.length);d < f && k[d].location === l[d].location;) {
              d++;
            }
            for (var e = l.length - d, b = 0;b < e;b++) {
              f = l.pop(), q.leave(f.location, null, s);
            }
            for (;d < k.length;) {
              f = k[d++], q.enter(f.location, null, s);
            }
            l = k;
          }
          for (;f = l.pop();) {
            q.leave(f.location, null, s);
          }
          return q;
        };
        c.FromChromeProfile = function(n, a) {
          var g = n.timestamps, q = n.samples, l = new c(a, g[0] / 1E3), f = [], m = {}, s;
          c._resolveIds(n.head, m);
          for (var k = 0;k < g.length;k++) {
            var d = g[k] / 1E3, e = [];
            for (s = m[q[k]];s;) {
              e.unshift(s), s = s.parent;
            }
            var b = 0;
            for (s = Math.min(e.length, f.length);b < s && e[b] === f[b];) {
              b++;
            }
            for (var h = f.length - b, p = 0;p < h;p++) {
              s = f.pop(), l.leave(s.functionName, null, d);
            }
            for (;b < e.length;) {
              s = e[b++], l.enter(s.functionName, null, d);
            }
            f = e;
          }
          for (;s = f.pop();) {
            l.leave(s.functionName, null, d);
          }
          return l;
        };
        c._resolveIds = function(n, a) {
          a[n.id] = n;
          if (n.children) {
            for (var g = 0;g < n.children.length;g++) {
              n.children[g].parent = n, c._resolveIds(n.children[g], a);
            }
          }
        };
        c.ENTER = 0;
        c.LEAVE = -2147483648;
        c.MAX_KINDID = 65535;
        c.MAX_DATAID = 32767;
        return c;
      }();
      f.TimelineBuffer = c;
    })(r.Profiler || (r.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(f) {
      (function(c) {
        c[c.DARK = 0] = "DARK";
        c[c.LIGHT = 1] = "LIGHT";
      })(f.UIThemeType || (f.UIThemeType = {}));
      var c = function() {
        function c(n, a) {
          void 0 === a && (a = 0);
          this._container = n;
          this._headers = [];
          this._charts = [];
          this._profiles = [];
          this._activeProfile = null;
          this.themeType = a;
          this._tooltip = this._createTooltip();
        }
        c.prototype.createProfile = function(c, a) {
          var g = new f.Profile(c, a);
          g.createSnapshots();
          this._profiles.push(g);
          this.activateProfile(g);
          return g;
        };
        c.prototype.activateProfile = function(c) {
          this.deactivateProfile();
          this._activeProfile = c;
          this._createViews();
          this._initializeViews();
        };
        c.prototype.activateProfileAt = function(c) {
          this.activateProfile(this.getProfileAt(c));
        };
        c.prototype.deactivateProfile = function() {
          this._activeProfile && (this._destroyViews(), this._activeProfile = null);
        };
        c.prototype.resize = function() {
          this._onResize();
        };
        c.prototype.getProfileAt = function(c) {
          return this._profiles[c];
        };
        Object.defineProperty(c.prototype, "activeProfile", {get:function() {
          return this._activeProfile;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(c.prototype, "profileCount", {get:function() {
          return this._profiles.length;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(c.prototype, "container", {get:function() {
          return this._container;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(c.prototype, "themeType", {get:function() {
          return this._themeType;
        }, set:function(c) {
          switch(c) {
            case 0:
              this._theme = new r.Theme.UIThemeDark;
              break;
            case 1:
              this._theme = new r.Theme.UIThemeLight;
          }
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(c.prototype, "theme", {get:function() {
          return this._theme;
        }, enumerable:!0, configurable:!0});
        c.prototype.getSnapshotAt = function(c) {
          return this._activeProfile.getSnapshotAt(c);
        };
        c.prototype._createViews = function() {
          if (this._activeProfile) {
            var c = this;
            this._overviewHeader = new f.FlameChartHeader(this, 0);
            this._overview = new f.FlameChartOverview(this, 0);
            this._activeProfile.forEachSnapshot(function(a, g) {
              c._headers.push(new f.FlameChartHeader(c, 1));
              c._charts.push(new f.FlameChart(c, a));
            });
            window.addEventListener("resize", this._onResize.bind(this));
          }
        };
        c.prototype._destroyViews = function() {
          if (this._activeProfile) {
            this._overviewHeader.destroy();
            for (this._overview.destroy();this._headers.length;) {
              this._headers.pop().destroy();
            }
            for (;this._charts.length;) {
              this._charts.pop().destroy();
            }
            window.removeEventListener("resize", this._onResize.bind(this));
          }
        };
        c.prototype._initializeViews = function() {
          if (this._activeProfile) {
            var c = this, a = this._activeProfile.startTime, g = this._activeProfile.endTime;
            this._overviewHeader.initialize(a, g);
            this._overview.initialize(a, g);
            this._activeProfile.forEachSnapshot(function(q, l) {
              c._headers[l].initialize(a, g);
              c._charts[l].initialize(a, g);
            });
          }
        };
        c.prototype._onResize = function() {
          if (this._activeProfile) {
            var c = this, a = this._container.offsetWidth;
            this._overviewHeader.setSize(a);
            this._overview.setSize(a);
            this._activeProfile.forEachSnapshot(function(g, q) {
              c._headers[q].setSize(a);
              c._charts[q].setSize(a);
            });
          }
        };
        c.prototype._updateViews = function() {
          if (this._activeProfile) {
            var c = this, a = this._activeProfile.windowStart, g = this._activeProfile.windowEnd;
            this._overviewHeader.setWindow(a, g);
            this._overview.setWindow(a, g);
            this._activeProfile.forEachSnapshot(function(q, l) {
              c._headers[l].setWindow(a, g);
              c._charts[l].setWindow(a, g);
            });
          }
        };
        c.prototype._drawViews = function() {
        };
        c.prototype._createTooltip = function() {
          var c = document.createElement("div");
          c.classList.add("profiler-tooltip");
          c.style.display = "none";
          this._container.insertBefore(c, this._container.firstChild);
          return c;
        };
        c.prototype.setWindow = function(c, a) {
          this._activeProfile.setWindow(c, a);
          this._updateViews();
        };
        c.prototype.moveWindowTo = function(c) {
          this._activeProfile.moveWindowTo(c);
          this._updateViews();
        };
        c.prototype.showTooltip = function(c, a, g, q) {
          this.removeTooltipContent();
          this._tooltip.appendChild(this.createTooltipContent(c, a));
          this._tooltip.style.display = "block";
          var l = this._tooltip.firstChild;
          a = l.clientWidth;
          l = l.clientHeight;
          g += g + a >= c.canvas.clientWidth - 50 ? -(a + 20) : 25;
          q += c.canvas.offsetTop - l / 2;
          this._tooltip.style.left = g + "px";
          this._tooltip.style.top = q + "px";
        };
        c.prototype.hideTooltip = function() {
          this._tooltip.style.display = "none";
        };
        c.prototype.createTooltipContent = function(c, a) {
          var g = Math.round(1E5 * a.totalTime) / 1E5, q = Math.round(1E5 * a.selfTime) / 1E5, l = Math.round(1E4 * a.selfTime / a.totalTime) / 100, f = document.createElement("div"), m = document.createElement("h1");
          m.textContent = a.kind.name;
          f.appendChild(m);
          m = document.createElement("p");
          m.textContent = "Total: " + g + " ms";
          f.appendChild(m);
          g = document.createElement("p");
          g.textContent = "Self: " + q + " ms (" + l + "%)";
          f.appendChild(g);
          if (q = c.getStatistics(a.kind)) {
            l = document.createElement("p"), l.textContent = "Count: " + q.count, f.appendChild(l), l = Math.round(1E5 * q.totalTime) / 1E5, g = document.createElement("p"), g.textContent = "All Total: " + l + " ms", f.appendChild(g), q = Math.round(1E5 * q.selfTime) / 1E5, l = document.createElement("p"), l.textContent = "All Self: " + q + " ms", f.appendChild(l);
          }
          this.appendDataElements(f, a.startData);
          this.appendDataElements(f, a.endData);
          return f;
        };
        c.prototype.appendDataElements = function(c, a) {
          if (!k.isNullOrUndefined(a)) {
            c.appendChild(document.createElement("hr"));
            var g;
            if (k.isObject(a)) {
              for (var q in a) {
                g = document.createElement("p"), g.textContent = q + ": " + a[q], c.appendChild(g);
              }
            } else {
              g = document.createElement("p"), g.textContent = a.toString(), c.appendChild(g);
            }
          }
        };
        c.prototype.removeTooltipContent = function() {
          for (var c = this._tooltip;c.firstChild;) {
            c.removeChild(c.firstChild);
          }
        };
        return c;
      }();
      f.Controller = c;
    })(r.Profiler || (r.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(f) {
      var c = k.NumberUtilities.clamp, r = function() {
        function a(a) {
          this.value = a;
        }
        a.prototype.toString = function() {
          return this.value;
        };
        a.AUTO = new a("auto");
        a.DEFAULT = new a("default");
        a.NONE = new a("none");
        a.HELP = new a("help");
        a.POINTER = new a("pointer");
        a.PROGRESS = new a("progress");
        a.WAIT = new a("wait");
        a.CELL = new a("cell");
        a.CROSSHAIR = new a("crosshair");
        a.TEXT = new a("text");
        a.ALIAS = new a("alias");
        a.COPY = new a("copy");
        a.MOVE = new a("move");
        a.NO_DROP = new a("no-drop");
        a.NOT_ALLOWED = new a("not-allowed");
        a.ALL_SCROLL = new a("all-scroll");
        a.COL_RESIZE = new a("col-resize");
        a.ROW_RESIZE = new a("row-resize");
        a.N_RESIZE = new a("n-resize");
        a.E_RESIZE = new a("e-resize");
        a.S_RESIZE = new a("s-resize");
        a.W_RESIZE = new a("w-resize");
        a.NE_RESIZE = new a("ne-resize");
        a.NW_RESIZE = new a("nw-resize");
        a.SE_RESIZE = new a("se-resize");
        a.SW_RESIZE = new a("sw-resize");
        a.EW_RESIZE = new a("ew-resize");
        a.NS_RESIZE = new a("ns-resize");
        a.NESW_RESIZE = new a("nesw-resize");
        a.NWSE_RESIZE = new a("nwse-resize");
        a.ZOOM_IN = new a("zoom-in");
        a.ZOOM_OUT = new a("zoom-out");
        a.GRAB = new a("grab");
        a.GRABBING = new a("grabbing");
        return a;
      }();
      f.MouseCursor = r;
      var n = function() {
        function a(a, c) {
          this._target = a;
          this._eventTarget = c;
          this._wheelDisabled = !1;
          this._boundOnMouseDown = this._onMouseDown.bind(this);
          this._boundOnMouseUp = this._onMouseUp.bind(this);
          this._boundOnMouseOver = this._onMouseOver.bind(this);
          this._boundOnMouseOut = this._onMouseOut.bind(this);
          this._boundOnMouseMove = this._onMouseMove.bind(this);
          this._boundOnMouseWheel = this._onMouseWheel.bind(this);
          this._boundOnDrag = this._onDrag.bind(this);
          c.addEventListener("mousedown", this._boundOnMouseDown, !1);
          c.addEventListener("mouseover", this._boundOnMouseOver, !1);
          c.addEventListener("mouseout", this._boundOnMouseOut, !1);
          c.addEventListener("onwheel" in document ? "wheel" : "mousewheel", this._boundOnMouseWheel, !1);
        }
        a.prototype.destroy = function() {
          var a = this._eventTarget;
          a.removeEventListener("mousedown", this._boundOnMouseDown);
          a.removeEventListener("mouseover", this._boundOnMouseOver);
          a.removeEventListener("mouseout", this._boundOnMouseOut);
          a.removeEventListener("onwheel" in document ? "wheel" : "mousewheel", this._boundOnMouseWheel);
          window.removeEventListener("mousemove", this._boundOnDrag);
          window.removeEventListener("mouseup", this._boundOnMouseUp);
          this._killHoverCheck();
          this._target = this._eventTarget = null;
        };
        a.prototype.updateCursor = function(g) {
          if (!a._cursorOwner || a._cursorOwner === this._target) {
            var c = this._eventTarget.parentElement;
            a._cursor !== g && (a._cursor = g, ["", "-moz-", "-webkit-"].forEach(function(a) {
              c.style.cursor = a + g;
            }));
            a._cursorOwner = a._cursor === r.DEFAULT ? null : this._target;
          }
        };
        a.prototype._onMouseDown = function(a) {
          this._killHoverCheck();
          if (0 === a.button) {
            var c = this._getTargetMousePos(a, a.target);
            this._dragInfo = {start:c, current:c, delta:{x:0, y:0}, hasMoved:!1, originalTarget:a.target};
            window.addEventListener("mousemove", this._boundOnDrag, !1);
            window.addEventListener("mouseup", this._boundOnMouseUp, !1);
            this._target.onMouseDown(c.x, c.y);
          }
        };
        a.prototype._onDrag = function(a) {
          var c = this._dragInfo;
          a = this._getTargetMousePos(a, c.originalTarget);
          var l = {x:a.x - c.start.x, y:a.y - c.start.y};
          c.current = a;
          c.delta = l;
          c.hasMoved = !0;
          this._target.onDrag(c.start.x, c.start.y, a.x, a.y, l.x, l.y);
        };
        a.prototype._onMouseUp = function(a) {
          window.removeEventListener("mousemove", this._boundOnDrag);
          window.removeEventListener("mouseup", this._boundOnMouseUp);
          var c = this;
          a = this._dragInfo;
          if (a.hasMoved) {
            this._target.onDragEnd(a.start.x, a.start.y, a.current.x, a.current.y, a.delta.x, a.delta.y);
          } else {
            this._target.onClick(a.current.x, a.current.y);
          }
          this._dragInfo = null;
          this._wheelDisabled = !0;
          setTimeout(function() {
            c._wheelDisabled = !1;
          }, 500);
        };
        a.prototype._onMouseOver = function(a) {
          a.target.addEventListener("mousemove", this._boundOnMouseMove, !1);
          if (!this._dragInfo) {
            var c = this._getTargetMousePos(a, a.target);
            this._target.onMouseOver(c.x, c.y);
            this._startHoverCheck(a);
          }
        };
        a.prototype._onMouseOut = function(a) {
          a.target.removeEventListener("mousemove", this._boundOnMouseMove, !1);
          if (!this._dragInfo) {
            this._target.onMouseOut();
          }
          this._killHoverCheck();
        };
        a.prototype._onMouseMove = function(a) {
          if (!this._dragInfo) {
            var c = this._getTargetMousePos(a, a.target);
            this._target.onMouseMove(c.x, c.y);
            this._killHoverCheck();
            this._startHoverCheck(a);
          }
        };
        a.prototype._onMouseWheel = function(a) {
          if (!(a.altKey || a.metaKey || a.ctrlKey || a.shiftKey || (a.preventDefault(), this._dragInfo || this._wheelDisabled))) {
            var q = this._getTargetMousePos(a, a.target);
            a = c("undefined" !== typeof a.deltaY ? a.deltaY / 16 : -a.wheelDelta / 40, -1, 1);
            this._target.onMouseWheel(q.x, q.y, Math.pow(1.2, a) - 1);
          }
        };
        a.prototype._startHoverCheck = function(c) {
          this._hoverInfo = {isHovering:!1, timeoutHandle:setTimeout(this._onMouseMoveIdleHandler.bind(this), a.HOVER_TIMEOUT), pos:this._getTargetMousePos(c, c.target)};
        };
        a.prototype._killHoverCheck = function() {
          if (this._hoverInfo) {
            clearTimeout(this._hoverInfo.timeoutHandle);
            if (this._hoverInfo.isHovering) {
              this._target.onHoverEnd();
            }
            this._hoverInfo = null;
          }
        };
        a.prototype._onMouseMoveIdleHandler = function() {
          var a = this._hoverInfo;
          a.isHovering = !0;
          this._target.onHoverStart(a.pos.x, a.pos.y);
        };
        a.prototype._getTargetMousePos = function(a, c) {
          var l = c.getBoundingClientRect();
          return{x:a.clientX - l.left, y:a.clientY - l.top};
        };
        a.HOVER_TIMEOUT = 500;
        a._cursor = r.DEFAULT;
        return a;
      }();
      f.MouseController = n;
    })(r.Profiler || (r.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    (function(f) {
      (function(c) {
        c[c.NONE = 0] = "NONE";
        c[c.WINDOW = 1] = "WINDOW";
        c[c.HANDLE_LEFT = 2] = "HANDLE_LEFT";
        c[c.HANDLE_RIGHT = 3] = "HANDLE_RIGHT";
        c[c.HANDLE_BOTH = 4] = "HANDLE_BOTH";
      })(f.FlameChartDragTarget || (f.FlameChartDragTarget = {}));
      var c = function() {
        function c(n) {
          this._controller = n;
          this._initialized = !1;
          this._canvas = document.createElement("canvas");
          this._context = this._canvas.getContext("2d");
          this._mouseController = new f.MouseController(this, this._canvas);
          n = n.container;
          n.appendChild(this._canvas);
          n = n.getBoundingClientRect();
          this.setSize(n.width);
        }
        Object.defineProperty(c.prototype, "canvas", {get:function() {
          return this._canvas;
        }, enumerable:!0, configurable:!0});
        c.prototype.setSize = function(c, a) {
          void 0 === a && (a = 20);
          this._width = c;
          this._height = a;
          this._resetCanvas();
          this.draw();
        };
        c.prototype.initialize = function(c, a) {
          this._initialized = !0;
          this.setRange(c, a);
          this.setWindow(c, a, !1);
          this.draw();
        };
        c.prototype.setWindow = function(c, a, g) {
          void 0 === g && (g = !0);
          this._windowStart = c;
          this._windowEnd = a;
          !g || this.draw();
        };
        c.prototype.setRange = function(c, a) {
          var g = !1;
          void 0 === g && (g = !0);
          this._rangeStart = c;
          this._rangeEnd = a;
          !g || this.draw();
        };
        c.prototype.destroy = function() {
          this._mouseController.destroy();
          this._mouseController = null;
          this._controller.container.removeChild(this._canvas);
          this._controller = null;
        };
        c.prototype._resetCanvas = function() {
          var c = window.devicePixelRatio, a = this._canvas;
          a.width = this._width * c;
          a.height = this._height * c;
          a.style.width = this._width + "px";
          a.style.height = this._height + "px";
        };
        c.prototype.draw = function() {
        };
        c.prototype._almostEq = function(c, a) {
          var g;
          void 0 === g && (g = 10);
          return Math.abs(c - a) < 1 / Math.pow(10, g);
        };
        c.prototype._windowEqRange = function() {
          return this._almostEq(this._windowStart, this._rangeStart) && this._almostEq(this._windowEnd, this._rangeEnd);
        };
        c.prototype._decimalPlaces = function(c) {
          return(+c).toFixed(10).replace(/^-?\d*\.?|0+$/g, "").length;
        };
        c.prototype._toPixelsRelative = function(c) {
          return 0;
        };
        c.prototype._toPixels = function(c) {
          return 0;
        };
        c.prototype._toTimeRelative = function(c) {
          return 0;
        };
        c.prototype._toTime = function(c) {
          return 0;
        };
        c.prototype.onMouseWheel = function(f, a, g) {
          f = this._toTime(f);
          a = this._windowStart;
          var q = this._windowEnd, l = q - a;
          g = Math.max((c.MIN_WINDOW_LEN - l) / l, g);
          this._controller.setWindow(a + (a - f) * g, q + (q - f) * g);
          this.onHoverEnd();
        };
        c.prototype.onMouseDown = function(c, a) {
        };
        c.prototype.onMouseMove = function(c, a) {
        };
        c.prototype.onMouseOver = function(c, a) {
        };
        c.prototype.onMouseOut = function() {
        };
        c.prototype.onDrag = function(c, a, g, q, l, f) {
        };
        c.prototype.onDragEnd = function(c, a, g, q, l, f) {
        };
        c.prototype.onClick = function(c, a) {
        };
        c.prototype.onHoverStart = function(c, a) {
        };
        c.prototype.onHoverEnd = function() {
        };
        c.DRAGHANDLE_WIDTH = 4;
        c.MIN_WINDOW_LEN = .1;
        return c;
      }();
      f.FlameChartBase = c;
    })(k.Profiler || (k.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(f) {
      var c = k.StringUtilities.trimMiddle, r = function(n) {
        function a(a, c) {
          n.call(this, a);
          this._textWidth = {};
          this._minFrameWidthInPixels = 1;
          this._snapshot = c;
          this._kindStyle = Object.create(null);
        }
        __extends(a, n);
        a.prototype.setSize = function(a, c) {
          n.prototype.setSize.call(this, a, c || this._initialized ? 12.5 * this._maxDepth : 100);
        };
        a.prototype.initialize = function(a, c) {
          this._initialized = !0;
          this._maxDepth = this._snapshot.maxDepth;
          this.setRange(a, c);
          this.setWindow(a, c, !1);
          this.setSize(this._width, 12.5 * this._maxDepth);
        };
        a.prototype.destroy = function() {
          n.prototype.destroy.call(this);
          this._snapshot = null;
        };
        a.prototype.draw = function() {
          var a = this._context, c = window.devicePixelRatio;
          k.ColorStyle.reset();
          a.save();
          a.scale(c, c);
          a.fillStyle = this._controller.theme.bodyBackground(1);
          a.fillRect(0, 0, this._width, this._height);
          this._initialized && this._drawChildren(this._snapshot);
          a.restore();
        };
        a.prototype._drawChildren = function(a, c) {
          void 0 === c && (c = 0);
          var l = a.getChildRange(this._windowStart, this._windowEnd);
          if (l) {
            for (var f = l.startIndex;f <= l.endIndex;f++) {
              var m = a.children[f];
              this._drawFrame(m, c) && this._drawChildren(m, c + 1);
            }
          }
        };
        a.prototype._drawFrame = function(a, c) {
          var l = this._context, f = this._toPixels(a.startTime), m = this._toPixels(a.endTime), s = m - f;
          if (s <= this._minFrameWidthInPixels) {
            return l.fillStyle = this._controller.theme.tabToolbar(1), l.fillRect(f, 12.5 * c, this._minFrameWidthInPixels, 12 + 12.5 * (a.maxDepth - a.depth)), !1;
          }
          0 > f && (m = s + f, f = 0);
          var m = m - f, n = this._kindStyle[a.kind.id];
          n || (n = k.ColorStyle.randomStyle(), n = this._kindStyle[a.kind.id] = {bgColor:n, textColor:k.ColorStyle.contrastStyle(n)});
          l.save();
          l.fillStyle = n.bgColor;
          l.fillRect(f, 12.5 * c, m, 12);
          12 < s && (s = a.kind.name) && s.length && (s = this._prepareText(l, s, m - 4), s.length && (l.fillStyle = n.textColor, l.textBaseline = "bottom", l.fillText(s, f + 2, 12.5 * (c + 1) - 1)));
          l.restore();
          return!0;
        };
        a.prototype._prepareText = function(a, q, l) {
          var f = this._measureWidth(a, q);
          if (l > f) {
            return q;
          }
          for (var f = 3, m = q.length;f < m;) {
            var s = f + m >> 1;
            this._measureWidth(a, c(q, s)) < l ? f = s + 1 : m = s;
          }
          q = c(q, m - 1);
          f = this._measureWidth(a, q);
          return f <= l ? q : "";
        };
        a.prototype._measureWidth = function(a, c) {
          var l = this._textWidth[c];
          l || (l = a.measureText(c).width, this._textWidth[c] = l);
          return l;
        };
        a.prototype._toPixelsRelative = function(a) {
          return a * this._width / (this._windowEnd - this._windowStart);
        };
        a.prototype._toPixels = function(a) {
          return this._toPixelsRelative(a - this._windowStart);
        };
        a.prototype._toTimeRelative = function(a) {
          return a * (this._windowEnd - this._windowStart) / this._width;
        };
        a.prototype._toTime = function(a) {
          return this._toTimeRelative(a) + this._windowStart;
        };
        a.prototype._getFrameAtPosition = function(a, c) {
          var l = 1 + c / 12.5 | 0, f = this._snapshot.query(this._toTime(a));
          if (f && f.depth >= l) {
            for (;f && f.depth > l;) {
              f = f.parent;
            }
            return f;
          }
          return null;
        };
        a.prototype.onMouseDown = function(a, c) {
          this._windowEqRange() || (this._mouseController.updateCursor(f.MouseCursor.ALL_SCROLL), this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:1});
        };
        a.prototype.onMouseMove = function(a, c) {
        };
        a.prototype.onMouseOver = function(a, c) {
        };
        a.prototype.onMouseOut = function() {
        };
        a.prototype.onDrag = function(a, c, l, f, m, s) {
          if (a = this._dragInfo) {
            m = this._toTimeRelative(-m), this._controller.setWindow(a.windowStartInitial + m, a.windowEndInitial + m);
          }
        };
        a.prototype.onDragEnd = function(a, c, l, n, m, s) {
          this._dragInfo = null;
          this._mouseController.updateCursor(f.MouseCursor.DEFAULT);
        };
        a.prototype.onClick = function(a, c) {
          this._dragInfo = null;
          this._mouseController.updateCursor(f.MouseCursor.DEFAULT);
        };
        a.prototype.onHoverStart = function(a, c) {
          var l = this._getFrameAtPosition(a, c);
          l && (this._hoveredFrame = l, this._controller.showTooltip(this, l, a, c));
        };
        a.prototype.onHoverEnd = function() {
          this._hoveredFrame && (this._hoveredFrame = null, this._controller.hideTooltip());
        };
        a.prototype.getStatistics = function(a) {
          var c = this._snapshot;
          c.statistics || c.calculateStatistics();
          return c.statistics[a.id];
        };
        return a;
      }(f.FlameChartBase);
      f.FlameChart = r;
    })(r.Profiler || (r.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(f) {
      var c = k.NumberUtilities.clamp;
      (function(c) {
        c[c.OVERLAY = 0] = "OVERLAY";
        c[c.STACK = 1] = "STACK";
        c[c.UNION = 2] = "UNION";
      })(f.FlameChartOverviewMode || (f.FlameChartOverviewMode = {}));
      var r = function(k) {
        function a(a, c) {
          void 0 === c && (c = 1);
          this._mode = c;
          this._overviewCanvasDirty = !0;
          this._overviewCanvas = document.createElement("canvas");
          this._overviewContext = this._overviewCanvas.getContext("2d");
          k.call(this, a);
        }
        __extends(a, k);
        a.prototype.setSize = function(a, c) {
          k.prototype.setSize.call(this, a, c || 64);
        };
        Object.defineProperty(a.prototype, "mode", {set:function(a) {
          this._mode = a;
          this.draw();
        }, enumerable:!0, configurable:!0});
        a.prototype._resetCanvas = function() {
          k.prototype._resetCanvas.call(this);
          this._overviewCanvas.width = this._canvas.width;
          this._overviewCanvas.height = this._canvas.height;
          this._overviewCanvasDirty = !0;
        };
        a.prototype.draw = function() {
          var a = this._context, c = window.devicePixelRatio, l = this._width, f = this._height;
          a.save();
          a.scale(c, c);
          a.fillStyle = this._controller.theme.bodyBackground(1);
          a.fillRect(0, 0, l, f);
          a.restore();
          this._initialized && (this._overviewCanvasDirty && (this._drawChart(), this._overviewCanvasDirty = !1), a.drawImage(this._overviewCanvas, 0, 0), this._drawSelection());
        };
        a.prototype._drawSelection = function() {
          var a = this._context, c = this._height, l = window.devicePixelRatio, f = this._selection ? this._selection.left : this._toPixels(this._windowStart), m = this._selection ? this._selection.right : this._toPixels(this._windowEnd), s = this._controller.theme;
          a.save();
          a.scale(l, l);
          this._selection ? (a.fillStyle = s.selectionText(.15), a.fillRect(f, 1, m - f, c - 1), a.fillStyle = "rgba(133, 0, 0, 1)", a.fillRect(f + .5, 0, m - f - 1, 4), a.fillRect(f + .5, c - 4, m - f - 1, 4)) : (a.fillStyle = s.bodyBackground(.4), a.fillRect(0, 1, f, c - 1), a.fillRect(m, 1, this._width, c - 1));
          a.beginPath();
          a.moveTo(f, 0);
          a.lineTo(f, c);
          a.moveTo(m, 0);
          a.lineTo(m, c);
          a.lineWidth = .5;
          a.strokeStyle = s.foregroundTextGrey(1);
          a.stroke();
          c = Math.abs((this._selection ? this._toTime(this._selection.right) : this._windowEnd) - (this._selection ? this._toTime(this._selection.left) : this._windowStart));
          a.fillStyle = s.selectionText(.5);
          a.font = "8px sans-serif";
          a.textBaseline = "alphabetic";
          a.textAlign = "end";
          a.fillText(c.toFixed(2), Math.min(f, m) - 4, 10);
          a.fillText((c / 60).toFixed(2), Math.min(f, m) - 4, 20);
          a.restore();
        };
        a.prototype._drawChart = function() {
          var a = window.devicePixelRatio, c = this._height, l = this._controller.activeProfile, f = 4 * this._width, m = l.totalTime / f, s = this._overviewContext, k = this._controller.theme.blueHighlight(1);
          s.save();
          s.translate(0, a * c);
          var d = -a * c / (l.maxDepth - 1);
          s.scale(a / 4, d);
          s.clearRect(0, 0, f, l.maxDepth - 1);
          1 == this._mode && s.scale(1, 1 / l.snapshotCount);
          for (var e = 0, b = l.snapshotCount;e < b;e++) {
            var h = l.getSnapshotAt(e);
            if (h) {
              var p = null, w = 0;
              s.beginPath();
              s.moveTo(0, 0);
              for (var G = 0;G < f;G++) {
                w = l.startTime + G * m, w = (p = p ? p.queryNext(w) : h.query(w)) ? p.getDepth() - 1 : 0, s.lineTo(G, w);
              }
              s.lineTo(G, 0);
              s.fillStyle = k;
              s.fill();
              1 == this._mode && s.translate(0, -c * a / d);
            }
          }
          s.restore();
        };
        a.prototype._toPixelsRelative = function(a) {
          return a * this._width / (this._rangeEnd - this._rangeStart);
        };
        a.prototype._toPixels = function(a) {
          return this._toPixelsRelative(a - this._rangeStart);
        };
        a.prototype._toTimeRelative = function(a) {
          return a * (this._rangeEnd - this._rangeStart) / this._width;
        };
        a.prototype._toTime = function(a) {
          return this._toTimeRelative(a) + this._rangeStart;
        };
        a.prototype._getDragTargetUnderCursor = function(a, c) {
          if (0 <= c && c < this._height) {
            var l = this._toPixels(this._windowStart), k = this._toPixels(this._windowEnd), m = 2 + f.FlameChartBase.DRAGHANDLE_WIDTH / 2, s = a >= l - m && a <= l + m, n = a >= k - m && a <= k + m;
            if (s && n) {
              return 4;
            }
            if (s) {
              return 2;
            }
            if (n) {
              return 3;
            }
            if (!this._windowEqRange() && a > l + m && a < k - m) {
              return 1;
            }
          }
          return 0;
        };
        a.prototype.onMouseDown = function(a, c) {
          var l = this._getDragTargetUnderCursor(a, c);
          0 === l ? (this._selection = {left:a, right:a}, this.draw()) : (1 === l && this._mouseController.updateCursor(f.MouseCursor.GRABBING), this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:l});
        };
        a.prototype.onMouseMove = function(a, c) {
          var l = f.MouseCursor.DEFAULT, k = this._getDragTargetUnderCursor(a, c);
          0 === k || this._selection || (l = 1 === k ? f.MouseCursor.GRAB : f.MouseCursor.EW_RESIZE);
          this._mouseController.updateCursor(l);
        };
        a.prototype.onMouseOver = function(a, c) {
          this.onMouseMove(a, c);
        };
        a.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(f.MouseCursor.DEFAULT);
        };
        a.prototype.onDrag = function(a, q, l, k, m, s) {
          if (this._selection) {
            this._selection = {left:a, right:c(l, 0, this._width - 1)}, this.draw();
          } else {
            a = this._dragInfo;
            if (4 === a.target) {
              if (0 !== m) {
                a.target = 0 > m ? 2 : 3;
              } else {
                return;
              }
            }
            q = this._windowStart;
            l = this._windowEnd;
            m = this._toTimeRelative(m);
            switch(a.target) {
              case 1:
                q = a.windowStartInitial + m;
                l = a.windowEndInitial + m;
                break;
              case 2:
                q = c(a.windowStartInitial + m, this._rangeStart, l - f.FlameChartBase.MIN_WINDOW_LEN);
                break;
              case 3:
                l = c(a.windowEndInitial + m, q + f.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
                break;
              default:
                return;
            }
            this._controller.setWindow(q, l);
          }
        };
        a.prototype.onDragEnd = function(a, c, l, f, m, s) {
          this._selection && (this._selection = null, this._controller.setWindow(this._toTime(a), this._toTime(l)));
          this._dragInfo = null;
          this.onMouseMove(l, f);
        };
        a.prototype.onClick = function(a, c) {
          this._selection = this._dragInfo = null;
          this._windowEqRange() || (0 === this._getDragTargetUnderCursor(a, c) && this._controller.moveWindowTo(this._toTime(a)), this.onMouseMove(a, c));
          this.draw();
        };
        a.prototype.onHoverStart = function(a, c) {
        };
        a.prototype.onHoverEnd = function() {
        };
        return a;
      }(f.FlameChartBase);
      f.FlameChartOverview = r;
    })(r.Profiler || (r.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(f) {
      var c = k.NumberUtilities.clamp;
      (function(c) {
        c[c.OVERVIEW = 0] = "OVERVIEW";
        c[c.CHART = 1] = "CHART";
      })(f.FlameChartHeaderType || (f.FlameChartHeaderType = {}));
      var r = function(k) {
        function a(a, c) {
          this._type = c;
          k.call(this, a);
        }
        __extends(a, k);
        a.prototype.draw = function() {
          var a = this._context, c = window.devicePixelRatio, l = this._width, f = this._height;
          a.save();
          a.scale(c, c);
          a.fillStyle = this._controller.theme.tabToolbar(1);
          a.fillRect(0, 0, l, f);
          this._initialized && (0 == this._type ? (c = this._toPixels(this._windowStart), l = this._toPixels(this._windowEnd), a.fillStyle = this._controller.theme.bodyBackground(1), a.fillRect(c, 0, l - c, f), this._drawLabels(this._rangeStart, this._rangeEnd), this._drawDragHandle(c), this._drawDragHandle(l)) : this._drawLabels(this._windowStart, this._windowEnd));
          a.restore();
        };
        a.prototype._drawLabels = function(c, q) {
          var l = this._context, f = this._calculateTickInterval(c, q), m = Math.ceil(c / f) * f, s = 500 <= f, k = s ? 1E3 : 1, d = this._decimalPlaces(f / k), s = s ? "s" : "ms", e = this._toPixels(m), b = this._height / 2, h = this._controller.theme;
          l.lineWidth = 1;
          l.strokeStyle = h.contentTextDarkGrey(.5);
          l.fillStyle = h.contentTextDarkGrey(1);
          l.textAlign = "right";
          l.textBaseline = "middle";
          l.font = "11px sans-serif";
          for (h = this._width + a.TICK_MAX_WIDTH;e < h;) {
            l.fillText((m / k).toFixed(d) + " " + s, e - 7, b + 1), l.beginPath(), l.moveTo(e, 0), l.lineTo(e, this._height + 1), l.closePath(), l.stroke(), m += f, e = this._toPixels(m);
          }
        };
        a.prototype._calculateTickInterval = function(c, q) {
          var l = (q - c) / (this._width / a.TICK_MAX_WIDTH), f = Math.pow(10, Math.floor(Math.log(l) / Math.LN10)), l = l / f;
          return 5 < l ? 10 * f : 2 < l ? 5 * f : 1 < l ? 2 * f : f;
        };
        a.prototype._drawDragHandle = function(a) {
          var c = this._context;
          c.lineWidth = 2;
          c.strokeStyle = this._controller.theme.bodyBackground(1);
          c.fillStyle = this._controller.theme.foregroundTextGrey(.7);
          this._drawRoundedRect(c, a - f.FlameChartBase.DRAGHANDLE_WIDTH / 2, f.FlameChartBase.DRAGHANDLE_WIDTH, this._height - 2);
        };
        a.prototype._drawRoundedRect = function(a, c, l, f) {
          var m, s = !0;
          void 0 === s && (s = !0);
          void 0 === m && (m = !0);
          a.beginPath();
          a.moveTo(c + 2, 1);
          a.lineTo(c + l - 2, 1);
          a.quadraticCurveTo(c + l, 1, c + l, 3);
          a.lineTo(c + l, 1 + f - 2);
          a.quadraticCurveTo(c + l, 1 + f, c + l - 2, 1 + f);
          a.lineTo(c + 2, 1 + f);
          a.quadraticCurveTo(c, 1 + f, c, 1 + f - 2);
          a.lineTo(c, 3);
          a.quadraticCurveTo(c, 1, c + 2, 1);
          a.closePath();
          s && a.stroke();
          m && a.fill();
        };
        a.prototype._toPixelsRelative = function(a) {
          return a * this._width / (0 === this._type ? this._rangeEnd - this._rangeStart : this._windowEnd - this._windowStart);
        };
        a.prototype._toPixels = function(a) {
          return this._toPixelsRelative(a - (0 === this._type ? this._rangeStart : this._windowStart));
        };
        a.prototype._toTimeRelative = function(a) {
          return a * (0 === this._type ? this._rangeEnd - this._rangeStart : this._windowEnd - this._windowStart) / this._width;
        };
        a.prototype._toTime = function(a) {
          return this._toTimeRelative(a) + (0 === this._type ? this._rangeStart : this._windowStart);
        };
        a.prototype._getDragTargetUnderCursor = function(a, c) {
          if (0 <= c && c < this._height) {
            if (0 === this._type) {
              var l = this._toPixels(this._windowStart), k = this._toPixels(this._windowEnd), m = 2 + f.FlameChartBase.DRAGHANDLE_WIDTH / 2, l = a >= l - m && a <= l + m, k = a >= k - m && a <= k + m;
              if (l && k) {
                return 4;
              }
              if (l) {
                return 2;
              }
              if (k) {
                return 3;
              }
            }
            if (!this._windowEqRange()) {
              return 1;
            }
          }
          return 0;
        };
        a.prototype.onMouseDown = function(a, c) {
          var l = this._getDragTargetUnderCursor(a, c);
          1 === l && this._mouseController.updateCursor(f.MouseCursor.GRABBING);
          this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:l};
        };
        a.prototype.onMouseMove = function(a, c) {
          var l = f.MouseCursor.DEFAULT, k = this._getDragTargetUnderCursor(a, c);
          0 !== k && (1 !== k ? l = f.MouseCursor.EW_RESIZE : 1 !== k || this._windowEqRange() || (l = f.MouseCursor.GRAB));
          this._mouseController.updateCursor(l);
        };
        a.prototype.onMouseOver = function(a, c) {
          this.onMouseMove(a, c);
        };
        a.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(f.MouseCursor.DEFAULT);
        };
        a.prototype.onDrag = function(a, q, l, k, m, s) {
          a = this._dragInfo;
          if (4 === a.target) {
            if (0 !== m) {
              a.target = 0 > m ? 2 : 3;
            } else {
              return;
            }
          }
          q = this._windowStart;
          l = this._windowEnd;
          m = this._toTimeRelative(m);
          switch(a.target) {
            case 1:
              l = 0 === this._type ? 1 : -1;
              q = a.windowStartInitial + l * m;
              l = a.windowEndInitial + l * m;
              break;
            case 2:
              q = c(a.windowStartInitial + m, this._rangeStart, l - f.FlameChartBase.MIN_WINDOW_LEN);
              break;
            case 3:
              l = c(a.windowEndInitial + m, q + f.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
              break;
            default:
              return;
          }
          this._controller.setWindow(q, l);
        };
        a.prototype.onDragEnd = function(a, c, l, f, m, s) {
          this._dragInfo = null;
          this.onMouseMove(l, f);
        };
        a.prototype.onClick = function(a, c) {
          1 === this._dragInfo.target && this._mouseController.updateCursor(f.MouseCursor.GRAB);
        };
        a.prototype.onHoverStart = function(a, c) {
        };
        a.prototype.onHoverEnd = function() {
        };
        a.TICK_MAX_WIDTH = 75;
        return a;
      }(f.FlameChartBase);
      f.FlameChartHeader = r;
    })(r.Profiler || (r.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    (function(f) {
      (function(c) {
        var f = function() {
          function a(a, c, l, f, m) {
            this.pageLoaded = a;
            this.threadsTotal = c;
            this.threadsLoaded = l;
            this.threadFilesTotal = f;
            this.threadFilesLoaded = m;
          }
          a.prototype.toString = function() {
            return "[" + ["pageLoaded", "threadsTotal", "threadsLoaded", "threadFilesTotal", "threadFilesLoaded"].map(function(a, c, l) {
              return a + ":" + this[a];
            }, this).join(", ") + "]";
          };
          return a;
        }();
        c.TraceLoggerProgressInfo = f;
        var k = function() {
          function a(a) {
            this._baseUrl = a;
            this._threads = [];
            this._progressInfo = null;
          }
          a.prototype.loadPage = function(a, c, l) {
            this._threads = [];
            this._pageLoadCallback = c;
            this._pageLoadProgressCallback = l;
            this._progressInfo = new f(!1, 0, 0, 0, 0);
            this._loadData([a], this._onLoadPage.bind(this));
          };
          Object.defineProperty(a.prototype, "buffers", {get:function() {
            for (var a = [], c = 0, l = this._threads.length;c < l;c++) {
              a.push(this._threads[c].buffer);
            }
            return a;
          }, enumerable:!0, configurable:!0});
          a.prototype._onProgress = function() {
            this._pageLoadProgressCallback && this._pageLoadProgressCallback.call(this, this._progressInfo);
          };
          a.prototype._onLoadPage = function(a) {
            if (a && 1 == a.length) {
              var f = this, l = 0;
              a = a[0];
              var k = a.length;
              this._threads = Array(k);
              this._progressInfo.pageLoaded = !0;
              this._progressInfo.threadsTotal = k;
              for (var m = 0;m < a.length;m++) {
                var s = a[m], n = [s.dict, s.tree];
                s.corrections && n.push(s.corrections);
                this._progressInfo.threadFilesTotal += n.length;
                this._loadData(n, function(a) {
                  return function(e) {
                    e && (e = new c.Thread(e), e.buffer.name = "Thread " + a, f._threads[a] = e);
                    l++;
                    f._progressInfo.threadsLoaded++;
                    f._onProgress();
                    l === k && f._pageLoadCallback.call(f, null, f._threads);
                  };
                }(m), function(a) {
                  f._progressInfo.threadFilesLoaded++;
                  f._onProgress();
                });
              }
              this._onProgress();
            } else {
              this._pageLoadCallback.call(this, "Error loading page.", null);
            }
          };
          a.prototype._loadData = function(a, c, l) {
            var f = 0, m = 0, s = a.length, k = [];
            k.length = s;
            for (var d = 0;d < s;d++) {
              var e = this._baseUrl + a[d], b = new XMLHttpRequest, h = /\.tl$/i.test(e) ? "arraybuffer" : "json";
              b.open("GET", e, !0);
              b.responseType = h;
              b.onload = function(b, h) {
                return function(a) {
                  if ("json" === h) {
                    if (a = this.response, "string" === typeof a) {
                      try {
                        a = JSON.parse(a), k[b] = a;
                      } catch (e) {
                        m++;
                      }
                    } else {
                      k[b] = a;
                    }
                  } else {
                    k[b] = this.response;
                  }
                  ++f;
                  l && l(f);
                  f === s && c(k);
                };
              }(d, h);
              b.send();
            }
          };
          a.colors = "#0044ff #8c4b00 #cc5c33 #ff80c4 #ffbfd9 #ff8800 #8c5e00 #adcc33 #b380ff #bfd9ff #ffaa00 #8c0038 #bf8f30 #f780ff #cc99c9 #aaff00 #000073 #452699 #cc8166 #cca799 #000066 #992626 #cc6666 #ccc299 #ff6600 #526600 #992663 #cc6681 #99ccc2 #ff0066 #520066 #269973 #61994d #739699 #ffcc00 #006629 #269199 #94994d #738299 #ff0000 #590000 #234d8c #8c6246 #7d7399 #ee00ff #00474d #8c2385 #8c7546 #7c8c69 #eeff00 #4d003d #662e1a #62468c #8c6969 #6600ff #4c2900 #1a6657 #8c464f #8c6981 #44ff00 #401100 #1a2466 #663355 #567365 #d90074 #403300 #101d40 #59562d #66614d #cc0000 #002b40 #234010 #4c2626 #4d5e66 #00a3cc #400011 #231040 #4c3626 #464359 #0000bf #331b00 #80e6ff #311a33 #4d3939 #a69b00 #003329 #80ffb2 #331a20 #40303d #00a658 #40ffd9 #ffc480 #ffe1bf #332b26 #8c2500 #9933cc #80fff6 #ffbfbf #303326 #005e8c #33cc47 #b2ff80 #c8bfff #263332 #00708c #cc33ad #ffe680 #f2ffbf #262a33 #388c00 #335ccc #8091ff #bfffd9".split(" ");
          return a;
        }();
        c.TraceLogger = k;
      })(f.TraceLogger || (f.TraceLogger = {}));
    })(k.Profiler || (k.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    (function(f) {
      (function(c) {
        var k;
        (function(c) {
          c[c.START_HI = 0] = "START_HI";
          c[c.START_LO = 4] = "START_LO";
          c[c.STOP_HI = 8] = "STOP_HI";
          c[c.STOP_LO = 12] = "STOP_LO";
          c[c.TEXTID = 16] = "TEXTID";
          c[c.NEXTID = 20] = "NEXTID";
        })(k || (k = {}));
        k = function() {
          function c(a) {
            2 <= a.length && (this._text = a[0], this._data = new DataView(a[1]), this._buffer = new f.TimelineBuffer, this._walkTree(0));
          }
          Object.defineProperty(c.prototype, "buffer", {get:function() {
            return this._buffer;
          }, enumerable:!0, configurable:!0});
          c.prototype._walkTree = function(a) {
            var g = this._data, f = this._buffer;
            do {
              var l = a * c.ITEM_SIZE, k = 4294967295 * g.getUint32(l + 0) + g.getUint32(l + 4), m = 4294967295 * g.getUint32(l + 8) + g.getUint32(l + 12), s = g.getUint32(l + 16), l = g.getUint32(l + 20), v = 1 === (s & 1), s = s >>> 1, s = this._text[s];
              f.enter(s, null, k / 1E6);
              v && this._walkTree(a + 1);
              f.leave(s, null, m / 1E6);
              a = l;
            } while (0 !== a);
          };
          c.ITEM_SIZE = 24;
          return c;
        }();
        c.Thread = k;
      })(f.TraceLogger || (f.TraceLogger = {}));
    })(k.Profiler || (k.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(f) {
      var c = k.NumberUtilities.clamp, r = function() {
        function a() {
          this.length = 0;
          this.lines = [];
          this.format = [];
          this.time = [];
          this.repeat = [];
          this.length = 0;
        }
        a.prototype.append = function(a, c) {
          var f = this.lines;
          0 < f.length && f[f.length - 1] === a ? this.repeat[f.length - 1]++ : (this.lines.push(a), this.repeat.push(1), this.format.push(c ? {backgroundFillStyle:c} : void 0), this.time.push(performance.now()), this.length++);
        };
        a.prototype.get = function(a) {
          return this.lines[a];
        };
        a.prototype.getFormat = function(a) {
          return this.format[a];
        };
        a.prototype.getTime = function(a) {
          return this.time[a];
        };
        a.prototype.getRepeat = function(a) {
          return this.repeat[a];
        };
        return a;
      }();
      f.Buffer = r;
      var n = function() {
        function a(a) {
          this.lineColor = "#2A2A2A";
          this.alternateLineColor = "#262626";
          this.textColor = "#FFFFFF";
          this.selectionColor = "#96C9F3";
          this.selectionTextColor = "#000000";
          this.ratio = 1;
          this.showLineNumbers = !0;
          this.showLineCounter = this.showLineTime = !1;
          this.canvas = a;
          this.canvas.focus();
          this.context = a.getContext("2d", {original:!0});
          this.context.fillStyle = "#FFFFFF";
          this.fontSize = 10;
          this.columnIndex = this.pageIndex = this.lineIndex = 0;
          this.selection = null;
          this.lineHeight = 15;
          this.hasFocus = !1;
          window.addEventListener("resize", this._resizeHandler.bind(this), !1);
          this._resizeHandler();
          this.textMarginBottom = this.textMarginLeft = 4;
          this.refreshFrequency = 0;
          this.buffer = new r;
          a.addEventListener("keydown", function(a) {
            var g = 0;
            switch(a.keyCode) {
              case p:
                this.showLineNumbers = !this.showLineNumbers;
                break;
              case w:
                this.showLineTime = !this.showLineTime;
                break;
              case s:
                g = -1;
                break;
              case n:
                g = 1;
                break;
              case c:
                g = -this.pageLineCount;
                break;
              case f:
                g = this.pageLineCount;
                break;
              case k:
                g = -this.lineIndex;
                break;
              case m:
                g = this.buffer.length - this.lineIndex;
                break;
              case d:
                this.columnIndex -= a.metaKey ? 10 : 1;
                0 > this.columnIndex && (this.columnIndex = 0);
                a.preventDefault();
                break;
              case e:
                this.columnIndex += a.metaKey ? 10 : 1;
                a.preventDefault();
                break;
              case b:
                a.metaKey && (this.selection = {start:0, end:this.buffer.length}, a.preventDefault());
                break;
              case h:
                if (a.metaKey) {
                  var V = "";
                  if (this.selection) {
                    for (var Q = this.selection.start;Q <= this.selection.end;Q++) {
                      V += this.buffer.get(Q) + "\n";
                    }
                  } else {
                    V = this.buffer.get(this.lineIndex);
                  }
                  alert(V);
                }
              ;
            }
            a.metaKey && (g *= this.pageLineCount);
            g && (this.scroll(g), a.preventDefault());
            g && a.shiftKey ? this.selection ? this.lineIndex > this.selection.start ? this.selection.end = this.lineIndex : this.selection.start = this.lineIndex : 0 < g ? this.selection = {start:this.lineIndex - g, end:this.lineIndex} : 0 > g && (this.selection = {start:this.lineIndex, end:this.lineIndex - g}) : g && (this.selection = null);
            this.paint();
          }.bind(this), !1);
          a.addEventListener("focus", function(b) {
            this.hasFocus = !0;
          }.bind(this), !1);
          a.addEventListener("blur", function(b) {
            this.hasFocus = !1;
          }.bind(this), !1);
          var c = 33, f = 34, k = 36, m = 35, s = 38, n = 40, d = 37, e = 39, b = 65, h = 67, p = 78, w = 84;
        }
        a.prototype.resize = function() {
          this._resizeHandler();
        };
        a.prototype._resizeHandler = function() {
          var a = this.canvas.parentElement, c = a.clientWidth, a = a.clientHeight - 1, f = window.devicePixelRatio || 1;
          1 !== f ? (this.ratio = f / 1, this.canvas.width = c * this.ratio, this.canvas.height = a * this.ratio, this.canvas.style.width = c + "px", this.canvas.style.height = a + "px") : (this.ratio = 1, this.canvas.width = c, this.canvas.height = a);
          this.pageLineCount = Math.floor(this.canvas.height / this.lineHeight);
        };
        a.prototype.gotoLine = function(a) {
          this.lineIndex = c(a, 0, this.buffer.length - 1);
        };
        a.prototype.scrollIntoView = function() {
          this.lineIndex < this.pageIndex ? this.pageIndex = this.lineIndex : this.lineIndex >= this.pageIndex + this.pageLineCount && (this.pageIndex = this.lineIndex - this.pageLineCount + 1);
        };
        a.prototype.scroll = function(a) {
          this.gotoLine(this.lineIndex + a);
          this.scrollIntoView();
        };
        a.prototype.paint = function() {
          var a = this.pageLineCount;
          this.pageIndex + a > this.buffer.length && (a = this.buffer.length - this.pageIndex);
          var c = this.textMarginLeft, f = c + (this.showLineNumbers ? 5 * (String(this.buffer.length).length + 2) : 0), k = f + (this.showLineTime ? 40 : 10), m = k + 25;
          this.context.font = this.fontSize + 'px Consolas, "Liberation Mono", Courier, monospace';
          this.context.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);
          for (var s = this.canvas.width, n = this.lineHeight, d = 0;d < a;d++) {
            var e = d * this.lineHeight, b = this.pageIndex + d, h = this.buffer.get(b), p = this.buffer.getFormat(b), w = this.buffer.getRepeat(b), G = 1 < b ? this.buffer.getTime(b) - this.buffer.getTime(0) : 0;
            this.context.fillStyle = b % 2 ? this.lineColor : this.alternateLineColor;
            p && p.backgroundFillStyle && (this.context.fillStyle = p.backgroundFillStyle);
            this.context.fillRect(0, e, s, n);
            this.context.fillStyle = this.selectionTextColor;
            this.context.fillStyle = this.textColor;
            this.selection && b >= this.selection.start && b <= this.selection.end && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, e, s, n), this.context.fillStyle = this.selectionTextColor);
            this.hasFocus && b === this.lineIndex && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, e, s, n), this.context.fillStyle = this.selectionTextColor);
            0 < this.columnIndex && (h = h.substring(this.columnIndex));
            e = (d + 1) * this.lineHeight - this.textMarginBottom;
            this.showLineNumbers && this.context.fillText(String(b), c, e);
            this.showLineTime && this.context.fillText(G.toFixed(1).padLeft(" ", 6), f, e);
            1 < w && this.context.fillText(String(w).padLeft(" ", 3), k, e);
            this.context.fillText(h, m, e);
          }
        };
        a.prototype.refreshEvery = function(a) {
          function c() {
            f.paint();
            f.refreshFrequency && setTimeout(c, f.refreshFrequency);
          }
          var f = this;
          this.refreshFrequency = a;
          f.refreshFrequency && setTimeout(c, f.refreshFrequency);
        };
        a.prototype.isScrolledToBottom = function() {
          return this.lineIndex === this.buffer.length - 1;
        };
        return a;
      }();
      f.Terminal = n;
    })(r.Terminal || (r.Terminal = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    (function(f) {
      var c = function() {
        function c(f) {
          this._lastWeightedTime = this._lastTime = this._index = 0;
          this._gradient = "#FF0000 #FF1100 #FF2300 #FF3400 #FF4600 #FF5700 #FF6900 #FF7B00 #FF8C00 #FF9E00 #FFAF00 #FFC100 #FFD300 #FFE400 #FFF600 #F7FF00 #E5FF00 #D4FF00 #C2FF00 #B0FF00 #9FFF00 #8DFF00 #7CFF00 #6AFF00 #58FF00 #47FF00 #35FF00 #24FF00 #12FF00 #00FF00".split(" ");
          this._container = f;
          this._canvas = document.createElement("canvas");
          this._container.appendChild(this._canvas);
          this._context = this._canvas.getContext("2d");
          this._listenForContainerSizeChanges();
        }
        c.prototype._listenForContainerSizeChanges = function() {
          var c = this._containerWidth, a = this._containerHeight;
          this._onContainerSizeChanged();
          var g = this;
          setInterval(function() {
            if (c !== g._containerWidth || a !== g._containerHeight) {
              g._onContainerSizeChanged(), c = g._containerWidth, a = g._containerHeight;
            }
          }, 10);
        };
        c.prototype._onContainerSizeChanged = function() {
          var c = this._containerWidth, a = this._containerHeight, g = window.devicePixelRatio || 1;
          1 !== g ? (this._ratio = g / 1, this._canvas.width = c * this._ratio, this._canvas.height = a * this._ratio, this._canvas.style.width = c + "px", this._canvas.style.height = a + "px") : (this._ratio = 1, this._canvas.width = c, this._canvas.height = a);
        };
        Object.defineProperty(c.prototype, "_containerWidth", {get:function() {
          return this._container.clientWidth;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(c.prototype, "_containerHeight", {get:function() {
          return this._container.clientHeight;
        }, enumerable:!0, configurable:!0});
        c.prototype.tickAndRender = function(c, a) {
          void 0 === c && (c = !1);
          void 0 === a && (a = 0);
          if (0 === this._lastTime) {
            this._lastTime = performance.now();
          } else {
            var g = 1 * (performance.now() - this._lastTime) + 0 * this._lastWeightedTime, f = this._context, l = 2 * this._ratio, k = 30 * this._ratio, m = performance;
            m.memory && (k += 30 * this._ratio);
            var s = (this._canvas.width - k) / (l + 1) | 0, v = this._index++;
            this._index > s && (this._index = 0);
            s = this._canvas.height;
            f.globalAlpha = 1;
            f.fillStyle = "black";
            f.fillRect(k + v * (l + 1), 0, 4 * l, this._canvas.height);
            var d = Math.min(1E3 / 60 / g, 1);
            f.fillStyle = "#00FF00";
            f.globalAlpha = c ? .5 : 1;
            d = s / 2 * d | 0;
            f.fillRect(k + v * (l + 1), s - d, l, d);
            a && (d = Math.min(1E3 / 240 / a, 1), f.fillStyle = "#FF6347", d = s / 2 * d | 0, f.fillRect(k + v * (l + 1), s / 2 - d, l, d));
            0 === v % 16 && (f.globalAlpha = 1, f.fillStyle = "black", f.fillRect(0, 0, k, this._canvas.height), f.fillStyle = "white", f.font = 8 * this._ratio + "px Arial", f.textBaseline = "middle", l = (1E3 / g).toFixed(0), a && (l += " " + a.toFixed(0)), m.memory && (l += " " + (m.memory.usedJSHeapSize / 1024 / 1024).toFixed(2)), f.fillText(l, 2 * this._ratio, this._containerHeight / 2 * this._ratio));
            this._lastTime = performance.now();
            this._lastWeightedTime = g;
          }
        };
        return c;
      }();
      f.FPS = c;
    })(k.Mini || (k.Mini = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
console.timeEnd("Load Shared Dependencies");
console.time("Load GFX Dependencies");
(function(k) {
  (function(r) {
    function f(b, h, a) {
      return q && a ? "string" === typeof h ? (b = k.ColorUtilities.cssStyleToRGBA(h), k.ColorUtilities.rgbaToCSSStyle(a.transformRGBA(b))) : h instanceof CanvasGradient && h._template ? h._template.createCanvasGradient(b, a) : h : h;
    }
    var c = k.NumberUtilities.clamp;
    (function(b) {
      b[b.None = 0] = "None";
      b[b.Brief = 1] = "Brief";
      b[b.Verbose = 2] = "Verbose";
    })(r.TraceLevel || (r.TraceLevel = {}));
    var t = k.Metrics.Counter.instance;
    r.frameCounter = new k.Metrics.Counter(!0);
    r.traceLevel = 2;
    r.writer = null;
    r.frameCount = function(b) {
      t.count(b);
      r.frameCounter.count(b);
    };
    r.timelineBuffer = new k.Tools.Profiler.TimelineBuffer("GFX");
    r.enterTimeline = function(b, h) {
    };
    r.leaveTimeline = function(b, h) {
    };
    var n = null, a = null, g = null, q = !0;
    q && "undefined" !== typeof CanvasRenderingContext2D && (n = CanvasGradient.prototype.addColorStop, a = CanvasRenderingContext2D.prototype.createLinearGradient, g = CanvasRenderingContext2D.prototype.createRadialGradient, CanvasRenderingContext2D.prototype.createLinearGradient = function(b, h, a, e) {
      return(new u(b, h, a, e)).createCanvasGradient(this, null);
    }, CanvasRenderingContext2D.prototype.createRadialGradient = function(b, h, a, e, d, c) {
      return(new m(b, h, a, e, d, c)).createCanvasGradient(this, null);
    }, CanvasGradient.prototype.addColorStop = function(b, h) {
      n.call(this, b, h);
      this._template.addColorStop(b, h);
    });
    var l = function() {
      return function(b, h) {
        this.offset = b;
        this.color = h;
      };
    }(), u = function() {
      function b(h, a, e, d) {
        this.x0 = h;
        this.y0 = a;
        this.x1 = e;
        this.y1 = d;
        this.colorStops = [];
      }
      b.prototype.addColorStop = function(b, h) {
        this.colorStops.push(new l(b, h));
      };
      b.prototype.createCanvasGradient = function(b, h) {
        for (var e = a.call(b, this.x0, this.y0, this.x1, this.y1), d = this.colorStops, c = 0;c < d.length;c++) {
          var p = d[c], w = p.offset, p = p.color, p = h ? f(b, p, h) : p;
          n.call(e, w, p);
        }
        e._template = this;
        e._transform = this._transform;
        return e;
      };
      return b;
    }(), m = function() {
      function b(h, a, e, d, c, p) {
        this.x0 = h;
        this.y0 = a;
        this.r0 = e;
        this.x1 = d;
        this.y1 = c;
        this.r1 = p;
        this.colorStops = [];
      }
      b.prototype.addColorStop = function(b, h) {
        this.colorStops.push(new l(b, h));
      };
      b.prototype.createCanvasGradient = function(b, h) {
        for (var a = g.call(b, this.x0, this.y0, this.r0, this.x1, this.y1, this.r1), e = this.colorStops, d = 0;d < e.length;d++) {
          var c = e[d], p = c.offset, c = c.color, c = h ? f(b, c, h) : c;
          n.call(a, p, c);
        }
        a._template = this;
        a._transform = this._transform;
        return a;
      };
      return b;
    }(), s;
    (function(b) {
      b[b.ClosePath = 1] = "ClosePath";
      b[b.MoveTo = 2] = "MoveTo";
      b[b.LineTo = 3] = "LineTo";
      b[b.QuadraticCurveTo = 4] = "QuadraticCurveTo";
      b[b.BezierCurveTo = 5] = "BezierCurveTo";
      b[b.ArcTo = 6] = "ArcTo";
      b[b.Rect = 7] = "Rect";
      b[b.Arc = 8] = "Arc";
      b[b.Save = 9] = "Save";
      b[b.Restore = 10] = "Restore";
      b[b.Transform = 11] = "Transform";
    })(s || (s = {}));
    var v = function() {
      function b(h) {
        this._commands = new Uint8Array(b._arrayBufferPool.acquire(8), 0, 8);
        this._commandPosition = 0;
        this._data = new Float64Array(b._arrayBufferPool.acquire(8 * Float64Array.BYTES_PER_ELEMENT), 0, 8);
        this._dataPosition = 0;
        h instanceof b && this.addPath(h);
      }
      b._apply = function(b, h) {
        var a = b._commands, e = b._data, d = 0, c = 0;
        h.beginPath();
        for (var p = b._commandPosition;d < p;) {
          switch(a[d++]) {
            case 1:
              h.closePath();
              break;
            case 2:
              h.moveTo(e[c++], e[c++]);
              break;
            case 3:
              h.lineTo(e[c++], e[c++]);
              break;
            case 4:
              h.quadraticCurveTo(e[c++], e[c++], e[c++], e[c++]);
              break;
            case 5:
              h.bezierCurveTo(e[c++], e[c++], e[c++], e[c++], e[c++], e[c++]);
              break;
            case 6:
              h.arcTo(e[c++], e[c++], e[c++], e[c++], e[c++]);
              break;
            case 7:
              h.rect(e[c++], e[c++], e[c++], e[c++]);
              break;
            case 8:
              h.arc(e[c++], e[c++], e[c++], e[c++], e[c++], !!e[c++]);
              break;
            case 9:
              h.save();
              break;
            case 10:
              h.restore();
              break;
            case 11:
              h.transform(e[c++], e[c++], e[c++], e[c++], e[c++], e[c++]);
          }
        }
      };
      b.prototype._ensureCommandCapacity = function(h) {
        this._commands = b._arrayBufferPool.ensureUint8ArrayLength(this._commands, h);
      };
      b.prototype._ensureDataCapacity = function(h) {
        this._data = b._arrayBufferPool.ensureFloat64ArrayLength(this._data, h);
      };
      b.prototype._writeCommand = function(b) {
        this._commandPosition >= this._commands.length && this._ensureCommandCapacity(this._commandPosition + 1);
        this._commands[this._commandPosition++] = b;
      };
      b.prototype._writeData = function(b, h, a, e, d, c) {
        var p = arguments.length;
        this._dataPosition + p >= this._data.length && this._ensureDataCapacity(this._dataPosition + p);
        var w = this._data, g = this._dataPosition;
        w[g] = b;
        w[g + 1] = h;
        2 < p && (w[g + 2] = a, w[g + 3] = e, 4 < p && (w[g + 4] = d, 6 === p && (w[g + 5] = c)));
        this._dataPosition += p;
      };
      b.prototype.closePath = function() {
        this._writeCommand(1);
      };
      b.prototype.moveTo = function(b, h) {
        this._writeCommand(2);
        this._writeData(b, h);
      };
      b.prototype.lineTo = function(b, h) {
        this._writeCommand(3);
        this._writeData(b, h);
      };
      b.prototype.quadraticCurveTo = function(b, h, a, e) {
        this._writeCommand(4);
        this._writeData(b, h, a, e);
      };
      b.prototype.bezierCurveTo = function(b, h, a, e, d, c) {
        this._writeCommand(5);
        this._writeData(b, h, a, e, d, c);
      };
      b.prototype.arcTo = function(b, h, a, e, d) {
        this._writeCommand(6);
        this._writeData(b, h, a, e, d);
      };
      b.prototype.rect = function(b, h, a, e) {
        this._writeCommand(7);
        this._writeData(b, h, a, e);
      };
      b.prototype.arc = function(b, h, a, e, d, c) {
        this._writeCommand(8);
        this._writeData(b, h, a, e, d, +c);
      };
      b.prototype.addPath = function(b, h) {
        h && (this._writeCommand(9), this._writeCommand(11), this._writeData(h.a, h.b, h.c, h.d, h.e, h.f));
        var a = this._commandPosition + b._commandPosition;
        a >= this._commands.length && this._ensureCommandCapacity(a);
        for (var e = this._commands, d = b._commands, c = this._commandPosition, p = 0;c < a;c++) {
          e[c] = d[p++];
        }
        this._commandPosition = a;
        a = this._dataPosition + b._dataPosition;
        a >= this._data.length && this._ensureDataCapacity(a);
        e = this._data;
        d = b._data;
        c = this._dataPosition;
        for (p = 0;c < a;c++) {
          e[c] = d[p++];
        }
        this._dataPosition = a;
        h && this._writeCommand(10);
      };
      b._arrayBufferPool = new k.ArrayBufferPool;
      return b;
    }();
    r.Path = v;
    if ("undefined" !== typeof CanvasRenderingContext2D && ("undefined" === typeof Path2D || !Path2D.prototype.addPath)) {
      var d = CanvasRenderingContext2D.prototype.fill;
      CanvasRenderingContext2D.prototype.fill = function(b, h) {
        arguments.length && (b instanceof v ? v._apply(b, this) : h = b);
        h ? d.call(this, h) : d.call(this);
      };
      var e = CanvasRenderingContext2D.prototype.stroke;
      CanvasRenderingContext2D.prototype.stroke = function(b, h) {
        arguments.length && (b instanceof v ? v._apply(b, this) : h = b);
        h ? e.call(this, h) : e.call(this);
      };
      var b = CanvasRenderingContext2D.prototype.clip;
      CanvasRenderingContext2D.prototype.clip = function(h, a) {
        arguments.length && (h instanceof v ? v._apply(h, this) : a = h);
        a ? b.call(this, a) : b.call(this);
      };
      window.Path2D = v;
    }
    if ("undefined" !== typeof CanvasPattern && Path2D.prototype.addPath) {
      s = function(b) {
        this._transform = b;
        this._template && (this._template._transform = b);
      };
      CanvasPattern.prototype.setTransform || (CanvasPattern.prototype.setTransform = s);
      CanvasGradient.prototype.setTransform || (CanvasGradient.prototype.setTransform = s);
      var h = CanvasRenderingContext2D.prototype.fill, p = CanvasRenderingContext2D.prototype.stroke;
      CanvasRenderingContext2D.prototype.fill = function(b, a) {
        var e = !!this.fillStyle._transform;
        if ((this.fillStyle instanceof CanvasPattern || this.fillStyle instanceof CanvasGradient) && e && b instanceof Path2D) {
          var e = this.fillStyle._transform, d;
          try {
            d = e.inverse();
          } catch (c) {
            d = e = r.Geometry.Matrix.createIdentitySVGMatrix();
          }
          this.transform(e.a, e.b, e.c, e.d, e.e, e.f);
          e = new Path2D;
          e.addPath(b, d);
          h.call(this, e, a);
          this.transform(d.a, d.b, d.c, d.d, d.e, d.f);
        } else {
          0 === arguments.length ? h.call(this) : 1 === arguments.length ? h.call(this, b) : 2 === arguments.length && h.call(this, b, a);
        }
      };
      CanvasRenderingContext2D.prototype.stroke = function(b) {
        var h = !!this.strokeStyle._transform;
        if ((this.strokeStyle instanceof CanvasPattern || this.strokeStyle instanceof CanvasGradient) && h && b instanceof Path2D) {
          var a = this.strokeStyle._transform, h = a.inverse();
          this.transform(a.a, a.b, a.c, a.d, a.e, a.f);
          a = new Path2D;
          a.addPath(b, h);
          var e = this.lineWidth;
          this.lineWidth *= (h.a + h.d) / 2;
          p.call(this, a);
          this.transform(h.a, h.b, h.c, h.d, h.e, h.f);
          this.lineWidth = e;
        } else {
          0 === arguments.length ? p.call(this) : 1 === arguments.length && p.call(this, b);
        }
      };
    }
    "undefined" !== typeof CanvasRenderingContext2D && function() {
      function b() {
        return r.Geometry.Matrix.createSVGMatrixFromArray(this.mozCurrentTransform);
      }
      CanvasRenderingContext2D.prototype.flashStroke = function(b, h) {
        var a = this.currentTransform;
        if (a) {
          var e = new Path2D;
          e.addPath(b, a);
          var d = this.lineWidth;
          this.setTransform(1, 0, 0, 1, 0, 0);
          switch(h) {
            case 1:
              this.lineWidth = c(d * (k.getScaleX(a) + k.getScaleY(a)) / 2, 1, 1024);
              break;
            case 2:
              this.lineWidth = c(d * k.getScaleY(a), 1, 1024);
              break;
            case 3:
              this.lineWidth = c(d * k.getScaleX(a), 1, 1024);
          }
          this.stroke(e);
          this.setTransform(a.a, a.b, a.c, a.d, a.e, a.f);
          this.lineWidth = d;
        } else {
          this.stroke(b);
        }
      };
      !("currentTransform" in CanvasRenderingContext2D.prototype) && "mozCurrentTransform" in CanvasRenderingContext2D.prototype && Object.defineProperty(CanvasRenderingContext2D.prototype, "currentTransform", {get:b});
    }();
    if ("undefined" !== typeof CanvasRenderingContext2D && void 0 === CanvasRenderingContext2D.prototype.globalColorMatrix) {
      var w = CanvasRenderingContext2D.prototype.fill, G = CanvasRenderingContext2D.prototype.stroke, U = CanvasRenderingContext2D.prototype.fillText, V = CanvasRenderingContext2D.prototype.strokeText;
      Object.defineProperty(CanvasRenderingContext2D.prototype, "globalColorMatrix", {get:function() {
        return this._globalColorMatrix ? this._globalColorMatrix.clone() : null;
      }, set:function(b) {
        b ? this._globalColorMatrix ? this._globalColorMatrix.set(b) : this._globalColorMatrix = b.clone() : this._globalColorMatrix = null;
      }, enumerable:!0, configurable:!0});
      CanvasRenderingContext2D.prototype.fill = function(b, h) {
        var a = null;
        this._globalColorMatrix && (a = this.fillStyle, this.fillStyle = f(this, this.fillStyle, this._globalColorMatrix));
        0 === arguments.length ? w.call(this) : 1 === arguments.length ? w.call(this, b) : 2 === arguments.length && w.call(this, b, h);
        a && (this.fillStyle = a);
      };
      CanvasRenderingContext2D.prototype.stroke = function(b, h) {
        var a = null;
        this._globalColorMatrix && (a = this.strokeStyle, this.strokeStyle = f(this, this.strokeStyle, this._globalColorMatrix));
        0 === arguments.length ? G.call(this) : 1 === arguments.length && G.call(this, b);
        a && (this.strokeStyle = a);
      };
      CanvasRenderingContext2D.prototype.fillText = function(b, h, a, e) {
        var d = null;
        this._globalColorMatrix && (d = this.fillStyle, this.fillStyle = f(this, this.fillStyle, this._globalColorMatrix));
        3 === arguments.length ? U.call(this, b, h, a) : 4 === arguments.length ? U.call(this, b, h, a, e) : k.Debug.unexpected();
        d && (this.fillStyle = d);
      };
      CanvasRenderingContext2D.prototype.strokeText = function(b, h, a, e) {
        var d = null;
        this._globalColorMatrix && (d = this.strokeStyle, this.strokeStyle = f(this, this.strokeStyle, this._globalColorMatrix));
        3 === arguments.length ? V.call(this, b, h, a) : 4 === arguments.length ? V.call(this, b, h, a, e) : k.Debug.unexpected();
        d && (this.strokeStyle = d);
      };
    }
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    k.ScreenShot = function() {
      return function(f, c, k) {
        this.dataURL = f;
        this.w = c;
        this.h = k;
      };
    }();
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  var r = function() {
    function f() {
      this._count = 0;
      this._head = this._tail = null;
    }
    Object.defineProperty(f.prototype, "count", {get:function() {
      return this._count;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(f.prototype, "head", {get:function() {
      return this._head;
    }, enumerable:!0, configurable:!0});
    f.prototype._unshift = function(c) {
      0 === this._count ? this._head = this._tail = c : (c.next = this._head, this._head = c.next.previous = c);
      this._count++;
    };
    f.prototype._remove = function(c) {
      c === this._head && c === this._tail ? this._head = this._tail = null : c === this._head ? (this._head = c.next, this._head.previous = null) : c == this._tail ? (this._tail = c.previous, this._tail.next = null) : (c.previous.next = c.next, c.next.previous = c.previous);
      c.previous = c.next = null;
      this._count--;
    };
    f.prototype.use = function(c) {
      this._head !== c && ((c.next || c.previous || this._tail === c) && this._remove(c), this._unshift(c));
    };
    f.prototype.pop = function() {
      if (!this._tail) {
        return null;
      }
      var c = this._tail;
      this._remove(c);
      return c;
    };
    f.prototype.visit = function(c, f) {
      void 0 === f && (f = !0);
      for (var k = f ? this._head : this._tail;k && c(k);) {
        k = f ? k.next : k.previous;
      }
    };
    return f;
  }();
  k.LRUList = r;
  k.getScaleX = function(f) {
    return f.a;
  };
  k.getScaleY = function(f) {
    return f.d;
  };
})(Shumway || (Shumway = {}));
var Shumway$$inline_28 = Shumway || (Shumway = {}), GFX$$inline_29 = Shumway$$inline_28.GFX || (Shumway$$inline_28.GFX = {}), Option$$inline_30 = Shumway$$inline_28.Options.Option, OptionSet$$inline_31 = Shumway$$inline_28.Options.OptionSet, shumwayOptions$$inline_32 = Shumway$$inline_28.Settings.shumwayOptions, rendererOptions$$inline_33 = shumwayOptions$$inline_32.register(new OptionSet$$inline_31("Renderer Options"));
GFX$$inline_29.imageUpdateOption = rendererOptions$$inline_33.register(new Option$$inline_30("", "imageUpdate", "boolean", !0, "Enable image updating."));
GFX$$inline_29.imageConvertOption = rendererOptions$$inline_33.register(new Option$$inline_30("", "imageConvert", "boolean", !0, "Enable image conversion."));
GFX$$inline_29.stageOptions = shumwayOptions$$inline_32.register(new OptionSet$$inline_31("Stage Renderer Options"));
GFX$$inline_29.forcePaint = GFX$$inline_29.stageOptions.register(new Option$$inline_30("", "forcePaint", "boolean", !1, "Force repainting."));
GFX$$inline_29.ignoreViewport = GFX$$inline_29.stageOptions.register(new Option$$inline_30("", "ignoreViewport", "boolean", !1, "Cull elements outside of the viewport."));
GFX$$inline_29.viewportLoupeDiameter = GFX$$inline_29.stageOptions.register(new Option$$inline_30("", "viewportLoupeDiameter", "number", 256, "Size of the viewport loupe.", {range:{min:1, max:1024, step:1}}));
GFX$$inline_29.disableClipping = GFX$$inline_29.stageOptions.register(new Option$$inline_30("", "disableClipping", "boolean", !1, "Disable clipping."));
GFX$$inline_29.debugClipping = GFX$$inline_29.stageOptions.register(new Option$$inline_30("", "debugClipping", "boolean", !1, "Disable clipping."));
GFX$$inline_29.hud = GFX$$inline_29.stageOptions.register(new Option$$inline_30("", "hud", "boolean", !1, "Enable HUD."));
var webGLOptions$$inline_34 = GFX$$inline_29.stageOptions.register(new OptionSet$$inline_31("WebGL Options"));
GFX$$inline_29.perspectiveCamera = webGLOptions$$inline_34.register(new Option$$inline_30("", "pc", "boolean", !1, "Use perspective camera."));
GFX$$inline_29.perspectiveCameraFOV = webGLOptions$$inline_34.register(new Option$$inline_30("", "pcFOV", "number", 60, "Perspective Camera FOV."));
GFX$$inline_29.perspectiveCameraDistance = webGLOptions$$inline_34.register(new Option$$inline_30("", "pcDistance", "number", 2, "Perspective Camera Distance."));
GFX$$inline_29.perspectiveCameraAngle = webGLOptions$$inline_34.register(new Option$$inline_30("", "pcAngle", "number", 0, "Perspective Camera Angle."));
GFX$$inline_29.perspectiveCameraAngleRotate = webGLOptions$$inline_34.register(new Option$$inline_30("", "pcRotate", "boolean", !1, "Rotate Use perspective camera."));
GFX$$inline_29.perspectiveCameraSpacing = webGLOptions$$inline_34.register(new Option$$inline_30("", "pcSpacing", "number", .01, "Element Spacing."));
GFX$$inline_29.perspectiveCameraSpacingInflate = webGLOptions$$inline_34.register(new Option$$inline_30("", "pcInflate", "boolean", !1, "Rotate Use perspective camera."));
GFX$$inline_29.drawTiles = webGLOptions$$inline_34.register(new Option$$inline_30("", "drawTiles", "boolean", !1, "Draw WebGL Tiles"));
GFX$$inline_29.drawSurfaces = webGLOptions$$inline_34.register(new Option$$inline_30("", "drawSurfaces", "boolean", !1, "Draw WebGL Surfaces."));
GFX$$inline_29.drawSurface = webGLOptions$$inline_34.register(new Option$$inline_30("", "drawSurface", "number", -1, "Draw WebGL Surface #"));
GFX$$inline_29.drawElements = webGLOptions$$inline_34.register(new Option$$inline_30("", "drawElements", "boolean", !0, "Actually call gl.drawElements. This is useful to test if the GPU is the bottleneck."));
GFX$$inline_29.disableSurfaceUploads = webGLOptions$$inline_34.register(new Option$$inline_30("", "disableSurfaceUploads", "boolean", !1, "Disable surface uploads."));
GFX$$inline_29.premultipliedAlpha = webGLOptions$$inline_34.register(new Option$$inline_30("", "premultipliedAlpha", "boolean", !1, "Set the premultipliedAlpha flag on getContext()."));
GFX$$inline_29.unpackPremultiplyAlpha = webGLOptions$$inline_34.register(new Option$$inline_30("", "unpackPremultiplyAlpha", "boolean", !0, "Use UNPACK_PREMULTIPLY_ALPHA_WEBGL in pixelStorei."));
var factorChoices$$inline_35 = {ZERO:0, ONE:1, SRC_COLOR:768, ONE_MINUS_SRC_COLOR:769, DST_COLOR:774, ONE_MINUS_DST_COLOR:775, SRC_ALPHA:770, ONE_MINUS_SRC_ALPHA:771, DST_ALPHA:772, ONE_MINUS_DST_ALPHA:773, SRC_ALPHA_SATURATE:776, CONSTANT_COLOR:32769, ONE_MINUS_CONSTANT_COLOR:32770, CONSTANT_ALPHA:32771, ONE_MINUS_CONSTANT_ALPHA:32772};
GFX$$inline_29.sourceBlendFactor = webGLOptions$$inline_34.register(new Option$$inline_30("", "sourceBlendFactor", "number", factorChoices$$inline_35.ONE, "", {choices:factorChoices$$inline_35}));
GFX$$inline_29.destinationBlendFactor = webGLOptions$$inline_34.register(new Option$$inline_30("", "destinationBlendFactor", "number", factorChoices$$inline_35.ONE_MINUS_SRC_ALPHA, "", {choices:factorChoices$$inline_35}));
var canvas2DOptions$$inline_36 = GFX$$inline_29.stageOptions.register(new OptionSet$$inline_31("Canvas2D Options"));
GFX$$inline_29.clipDirtyRegions = canvas2DOptions$$inline_36.register(new Option$$inline_30("", "clipDirtyRegions", "boolean", !1, "Clip dirty regions."));
GFX$$inline_29.clipCanvas = canvas2DOptions$$inline_36.register(new Option$$inline_30("", "clipCanvas", "boolean", !1, "Clip Regions."));
GFX$$inline_29.cull = canvas2DOptions$$inline_36.register(new Option$$inline_30("", "cull", "boolean", !1, "Enable culling."));
GFX$$inline_29.snapToDevicePixels = canvas2DOptions$$inline_36.register(new Option$$inline_30("", "snapToDevicePixels", "boolean", !1, ""));
GFX$$inline_29.imageSmoothing = canvas2DOptions$$inline_36.register(new Option$$inline_30("", "imageSmoothing", "boolean", !1, ""));
GFX$$inline_29.masking = canvas2DOptions$$inline_36.register(new Option$$inline_30("", "masking", "boolean", !0, "Composite Mask."));
GFX$$inline_29.blending = canvas2DOptions$$inline_36.register(new Option$$inline_30("", "blending", "boolean", !0, ""));
GFX$$inline_29.debugLayers = canvas2DOptions$$inline_36.register(new Option$$inline_30("", "debugLayers", "boolean", !1, ""));
GFX$$inline_29.filters = canvas2DOptions$$inline_36.register(new Option$$inline_30("", "filters", "boolean", !1, ""));
GFX$$inline_29.cacheShapes = canvas2DOptions$$inline_36.register(new Option$$inline_30("", "cacheShapes", "boolean", !0, ""));
GFX$$inline_29.cacheShapesMaxSize = canvas2DOptions$$inline_36.register(new Option$$inline_30("", "cacheShapesMaxSize", "number", 256, "", {range:{min:1, max:1024, step:1}}));
GFX$$inline_29.cacheShapesThreshold = canvas2DOptions$$inline_36.register(new Option$$inline_30("", "cacheShapesThreshold", "number", 256, "", {range:{min:1, max:1024, step:1}}));
(function(k) {
  (function(r) {
    (function(f) {
      function c(a, b, h, d) {
        var c = 1 - d;
        return a * c * c + 2 * b * c * d + h * d * d;
      }
      function t(a, b, h, d, c) {
        var g = c * c, m = 1 - c, f = m * m;
        return a * m * f + 3 * b * c * f + 3 * h * m * g + d * c * g;
      }
      var n = k.NumberUtilities.clamp, a = k.NumberUtilities.pow2, g = k.NumberUtilities.epsilonEquals;
      f.radianToDegrees = function(a) {
        return 180 * a / Math.PI;
      };
      f.degreesToRadian = function(a) {
        return a * Math.PI / 180;
      };
      f.quadraticBezier = c;
      f.quadraticBezierExtreme = function(a, b, h) {
        var d = (a - b) / (a - 2 * b + h);
        return 0 > d ? a : 1 < d ? h : c(a, b, h, d);
      };
      f.cubicBezier = t;
      f.cubicBezierExtremes = function(a, b, h, d) {
        var c = b - a, g;
        g = 2 * (h - b);
        var m = d - h;
        c + m === g && (m *= 1.0001);
        var f = 2 * c - g, l = g - 2 * c, l = Math.sqrt(l * l - 4 * c * (c - g + m));
        g = 2 * (c - g + m);
        c = (f + l) / g;
        f = (f - l) / g;
        l = [];
        0 <= c && 1 >= c && l.push(t(a, b, h, d, c));
        0 <= f && 1 >= f && l.push(t(a, b, h, d, f));
        return l;
      };
      var q = function() {
        function a(b, h) {
          this.x = b;
          this.y = h;
        }
        a.prototype.setElements = function(b, h) {
          this.x = b;
          this.y = h;
          return this;
        };
        a.prototype.set = function(b) {
          this.x = b.x;
          this.y = b.y;
          return this;
        };
        a.prototype.dot = function(b) {
          return this.x * b.x + this.y * b.y;
        };
        a.prototype.squaredLength = function() {
          return this.dot(this);
        };
        a.prototype.distanceTo = function(b) {
          return Math.sqrt(this.dot(b));
        };
        a.prototype.sub = function(b) {
          this.x -= b.x;
          this.y -= b.y;
          return this;
        };
        a.prototype.mul = function(b) {
          this.x *= b;
          this.y *= b;
          return this;
        };
        a.prototype.clone = function() {
          return new a(this.x, this.y);
        };
        a.prototype.toString = function(b) {
          void 0 === b && (b = 2);
          return "{x: " + this.x.toFixed(b) + ", y: " + this.y.toFixed(b) + "}";
        };
        a.prototype.inTriangle = function(b, h, a) {
          var e = b.y * a.x - b.x * a.y + (a.y - b.y) * this.x + (b.x - a.x) * this.y, d = b.x * h.y - b.y * h.x + (b.y - h.y) * this.x + (h.x - b.x) * this.y;
          if (0 > e != 0 > d) {
            return!1;
          }
          b = -h.y * a.x + b.y * (a.x - h.x) + b.x * (h.y - a.y) + h.x * a.y;
          0 > b && (e = -e, d = -d, b = -b);
          return 0 < e && 0 < d && e + d < b;
        };
        a.createEmpty = function() {
          return new a(0, 0);
        };
        a.createEmptyPoints = function(b) {
          for (var h = [], d = 0;d < b;d++) {
            h.push(new a(0, 0));
          }
          return h;
        };
        return a;
      }();
      f.Point = q;
      var l = function() {
        function a(b, h, e) {
          this.x = b;
          this.y = h;
          this.z = e;
        }
        a.prototype.setElements = function(b, h, a) {
          this.x = b;
          this.y = h;
          this.z = a;
          return this;
        };
        a.prototype.set = function(b) {
          this.x = b.x;
          this.y = b.y;
          this.z = b.z;
          return this;
        };
        a.prototype.dot = function(b) {
          return this.x * b.x + this.y * b.y + this.z * b.z;
        };
        a.prototype.cross = function(b) {
          var h = this.z * b.x - this.x * b.z, a = this.x * b.y - this.y * b.x;
          this.x = this.y * b.z - this.z * b.y;
          this.y = h;
          this.z = a;
          return this;
        };
        a.prototype.squaredLength = function() {
          return this.dot(this);
        };
        a.prototype.sub = function(b) {
          this.x -= b.x;
          this.y -= b.y;
          this.z -= b.z;
          return this;
        };
        a.prototype.mul = function(b) {
          this.x *= b;
          this.y *= b;
          this.z *= b;
          return this;
        };
        a.prototype.normalize = function() {
          var b = Math.sqrt(this.squaredLength());
          1E-5 < b ? this.mul(1 / b) : this.setElements(0, 0, 0);
          return this;
        };
        a.prototype.clone = function() {
          return new a(this.x, this.y, this.z);
        };
        a.prototype.toString = function(b) {
          void 0 === b && (b = 2);
          return "{x: " + this.x.toFixed(b) + ", y: " + this.y.toFixed(b) + ", z: " + this.z.toFixed(b) + "}";
        };
        a.createEmpty = function() {
          return new a(0, 0, 0);
        };
        a.createEmptyPoints = function(b) {
          for (var h = [], d = 0;d < b;d++) {
            h.push(new a(0, 0, 0));
          }
          return h;
        };
        return a;
      }();
      f.Point3D = l;
      var u = function() {
        function a(b, h, d, c) {
          this.setElements(b, h, d, c);
          a.allocationCount++;
        }
        a.prototype.setElements = function(b, a, e, d) {
          this.x = b;
          this.y = a;
          this.w = e;
          this.h = d;
        };
        a.prototype.set = function(b) {
          this.x = b.x;
          this.y = b.y;
          this.w = b.w;
          this.h = b.h;
        };
        a.prototype.contains = function(b) {
          var a = b.x + b.w, e = b.y + b.h, d = this.x + this.w, c = this.y + this.h;
          return b.x >= this.x && b.x < d && b.y >= this.y && b.y < c && a > this.x && a <= d && e > this.y && e <= c;
        };
        a.prototype.containsPoint = function(b) {
          return b.x >= this.x && b.x < this.x + this.w && b.y >= this.y && b.y < this.y + this.h;
        };
        a.prototype.isContained = function(b) {
          for (var a = 0;a < b.length;a++) {
            if (b[a].contains(this)) {
              return!0;
            }
          }
          return!1;
        };
        a.prototype.isSmallerThan = function(b) {
          return this.w < b.w && this.h < b.h;
        };
        a.prototype.isLargerThan = function(b) {
          return this.w > b.w && this.h > b.h;
        };
        a.prototype.union = function(b) {
          if (this.isEmpty()) {
            this.set(b);
          } else {
            if (!b.isEmpty()) {
              var a = this.x, e = this.y;
              this.x > b.x && (a = b.x);
              this.y > b.y && (e = b.y);
              var d = this.x + this.w;
              d < b.x + b.w && (d = b.x + b.w);
              var c = this.y + this.h;
              c < b.y + b.h && (c = b.y + b.h);
              this.x = a;
              this.y = e;
              this.w = d - a;
              this.h = c - e;
            }
          }
        };
        a.prototype.isEmpty = function() {
          return 0 >= this.w || 0 >= this.h;
        };
        a.prototype.setEmpty = function() {
          this.h = this.w = this.y = this.x = 0;
        };
        a.prototype.intersect = function(b) {
          var h = a.createEmpty();
          if (this.isEmpty() || b.isEmpty()) {
            return h.setEmpty(), h;
          }
          h.x = Math.max(this.x, b.x);
          h.y = Math.max(this.y, b.y);
          h.w = Math.min(this.x + this.w, b.x + b.w) - h.x;
          h.h = Math.min(this.y + this.h, b.y + b.h) - h.y;
          h.isEmpty() && h.setEmpty();
          this.set(h);
        };
        a.prototype.intersects = function(b) {
          if (this.isEmpty() || b.isEmpty()) {
            return!1;
          }
          var a = Math.max(this.x, b.x), e = Math.max(this.y, b.y), a = Math.min(this.x + this.w, b.x + b.w) - a;
          b = Math.min(this.y + this.h, b.y + b.h) - e;
          return!(0 >= a || 0 >= b);
        };
        a.prototype.intersectsTransformedAABB = function(b, h) {
          var d = a._temporary;
          d.set(b);
          h.transformRectangleAABB(d);
          return this.intersects(d);
        };
        a.prototype.intersectsTranslated = function(b, a, e) {
          if (this.isEmpty() || b.isEmpty()) {
            return!1;
          }
          var d = Math.max(this.x, b.x + a), c = Math.max(this.y, b.y + e);
          a = Math.min(this.x + this.w, b.x + a + b.w) - d;
          b = Math.min(this.y + this.h, b.y + e + b.h) - c;
          return!(0 >= a || 0 >= b);
        };
        a.prototype.area = function() {
          return this.w * this.h;
        };
        a.prototype.clone = function() {
          var b = a.allocate();
          b.set(this);
          return b;
        };
        a.allocate = function() {
          var b = a._dirtyStack;
          return b.length ? b.pop() : new a(12345, 67890, 12345, 67890);
        };
        a.prototype.free = function() {
          a._dirtyStack.push(this);
        };
        a.prototype.snap = function() {
          var b = Math.ceil(this.x + this.w), a = Math.ceil(this.y + this.h);
          this.x = Math.floor(this.x);
          this.y = Math.floor(this.y);
          this.w = b - this.x;
          this.h = a - this.y;
          return this;
        };
        a.prototype.scale = function(b, a) {
          this.x *= b;
          this.y *= a;
          this.w *= b;
          this.h *= a;
          return this;
        };
        a.prototype.offset = function(b, a) {
          this.x += b;
          this.y += a;
          return this;
        };
        a.prototype.resize = function(b, a) {
          this.w += b;
          this.h += a;
          return this;
        };
        a.prototype.expand = function(b, a) {
          this.offset(-b, -a).resize(2 * b, 2 * a);
          return this;
        };
        a.prototype.getCenter = function() {
          return new q(this.x + this.w / 2, this.y + this.h / 2);
        };
        a.prototype.getAbsoluteBounds = function() {
          return new a(0, 0, this.w, this.h);
        };
        a.prototype.toString = function(b) {
          void 0 === b && (b = 2);
          return "{" + this.x.toFixed(b) + ", " + this.y.toFixed(b) + ", " + this.w.toFixed(b) + ", " + this.h.toFixed(b) + "}";
        };
        a.createEmpty = function() {
          var b = a.allocate();
          b.setEmpty();
          return b;
        };
        a.createSquare = function() {
          return new a(-512, -512, 1024, 1024);
        };
        a.createMaxI16 = function() {
          return new a(-32768, -32768, 65535, 65535);
        };
        a.prototype.setMaxI16 = function() {
          this.setElements(-32768, -32768, 65535, 65535);
        };
        a.prototype.getCorners = function(b) {
          b[0].x = this.x;
          b[0].y = this.y;
          b[1].x = this.x + this.w;
          b[1].y = this.y;
          b[2].x = this.x + this.w;
          b[2].y = this.y + this.h;
          b[3].x = this.x;
          b[3].y = this.y + this.h;
        };
        a.allocationCount = 0;
        a._temporary = new a(0, 0, 0, 0);
        a._dirtyStack = [];
        return a;
      }();
      f.Rectangle = u;
      var m = function() {
        function a(b) {
          this.corners = b.map(function(b) {
            return b.clone();
          });
          this.axes = [b[1].clone().sub(b[0]), b[3].clone().sub(b[0])];
          this.origins = [];
          for (var h = 0;2 > h;h++) {
            this.axes[h].mul(1 / this.axes[h].squaredLength()), this.origins.push(b[0].dot(this.axes[h]));
          }
        }
        a.prototype.getBounds = function() {
          return a.getBounds(this.corners);
        };
        a.getBounds = function(b) {
          for (var a = new q(Number.MAX_VALUE, Number.MAX_VALUE), e = new q(Number.MIN_VALUE, Number.MIN_VALUE), d = 0;4 > d;d++) {
            var c = b[d].x, g = b[d].y;
            a.x = Math.min(a.x, c);
            a.y = Math.min(a.y, g);
            e.x = Math.max(e.x, c);
            e.y = Math.max(e.y, g);
          }
          return new u(a.x, a.y, e.x - a.x, e.y - a.y);
        };
        a.prototype.intersects = function(b) {
          return this.intersectsOneWay(b) && b.intersectsOneWay(this);
        };
        a.prototype.intersectsOneWay = function(b) {
          for (var a = 0;2 > a;a++) {
            for (var e = 0;4 > e;e++) {
              var d = b.corners[e].dot(this.axes[a]), c, g;
              0 === e ? g = c = d : d < c ? c = d : d > g && (g = d);
            }
            if (c > 1 + this.origins[a] || g < this.origins[a]) {
              return!1;
            }
          }
          return!0;
        };
        return a;
      }();
      f.OBB = m;
      (function(a) {
        a[a.Unknown = 0] = "Unknown";
        a[a.Identity = 1] = "Identity";
        a[a.Translation = 2] = "Translation";
      })(f.MatrixType || (f.MatrixType = {}));
      var s = function() {
        function a(b, h, d, c, g, m) {
          this._data = new Float64Array(6);
          this._type = 0;
          this.setElements(b, h, d, c, g, m);
          a.allocationCount++;
        }
        Object.defineProperty(a.prototype, "a", {get:function() {
          return this._data[0];
        }, set:function(b) {
          this._data[0] = b;
          this._type = 0;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "b", {get:function() {
          return this._data[1];
        }, set:function(b) {
          this._data[1] = b;
          this._type = 0;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "c", {get:function() {
          return this._data[2];
        }, set:function(b) {
          this._data[2] = b;
          this._type = 0;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "d", {get:function() {
          return this._data[3];
        }, set:function(b) {
          this._data[3] = b;
          this._type = 0;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "tx", {get:function() {
          return this._data[4];
        }, set:function(b) {
          this._data[4] = b;
          1 === this._type && (this._type = 2);
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "ty", {get:function() {
          return this._data[5];
        }, set:function(b) {
          this._data[5] = b;
          1 === this._type && (this._type = 2);
        }, enumerable:!0, configurable:!0});
        a._createSVGMatrix = function() {
          a._svg || (a._svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"));
          return a._svg.createSVGMatrix();
        };
        a.prototype.setElements = function(b, a, d, e, c, g) {
          var m = this._data;
          m[0] = b;
          m[1] = a;
          m[2] = d;
          m[3] = e;
          m[4] = c;
          m[5] = g;
          this._type = 0;
        };
        a.prototype.set = function(b) {
          var a = this._data, d = b._data;
          a[0] = d[0];
          a[1] = d[1];
          a[2] = d[2];
          a[3] = d[3];
          a[4] = d[4];
          a[5] = d[5];
          this._type = b._type;
        };
        a.prototype.emptyArea = function(b) {
          b = this._data;
          return 0 === b[0] || 0 === b[3] ? !0 : !1;
        };
        a.prototype.infiniteArea = function(b) {
          b = this._data;
          return Infinity === Math.abs(b[0]) || Infinity === Math.abs(b[3]) ? !0 : !1;
        };
        a.prototype.isEqual = function(b) {
          if (1 === this._type && 1 === b._type) {
            return!0;
          }
          var a = this._data;
          b = b._data;
          return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
        };
        a.prototype.clone = function() {
          var b = a.allocate();
          b.set(this);
          return b;
        };
        a.allocate = function() {
          var b = a._dirtyStack;
          return b.length ? b.pop() : new a(12345, 12345, 12345, 12345, 12345, 12345);
        };
        a.prototype.free = function() {
          a._dirtyStack.push(this);
        };
        a.prototype.transform = function(b, a, d, e, c, g) {
          var m = this._data, f = m[0], l = m[1], k = m[2], q = m[3], s = m[4], n = m[5];
          m[0] = f * b + k * a;
          m[1] = l * b + q * a;
          m[2] = f * d + k * e;
          m[3] = l * d + q * e;
          m[4] = f * c + k * g + s;
          m[5] = l * c + q * g + n;
          this._type = 0;
          return this;
        };
        a.prototype.transformRectangle = function(b, a) {
          var d = this._data, e = d[0], c = d[1], g = d[2], m = d[3], f = d[4], d = d[5], l = b.x, k = b.y, q = b.w, s = b.h;
          a[0].x = e * l + g * k + f;
          a[0].y = c * l + m * k + d;
          a[1].x = e * (l + q) + g * k + f;
          a[1].y = c * (l + q) + m * k + d;
          a[2].x = e * (l + q) + g * (k + s) + f;
          a[2].y = c * (l + q) + m * (k + s) + d;
          a[3].x = e * l + g * (k + s) + f;
          a[3].y = c * l + m * (k + s) + d;
        };
        a.prototype.isTranslationOnly = function() {
          if (2 === this._type) {
            return!0;
          }
          var b = this._data;
          return 1 === b[0] && 0 === b[1] && 0 === b[2] && 1 === b[3] || g(b[0], 1) && g(b[1], 0) && g(b[2], 0) && g(b[3], 1) ? (this._type = 2, !0) : !1;
        };
        a.prototype.transformRectangleAABB = function(b) {
          var a = this._data;
          if (1 !== this._type) {
            if (2 === this._type) {
              b.x += a[4], b.y += a[5];
            } else {
              var d = a[0], e = a[1], c = a[2], g = a[3], m = a[4], f = a[5], l = b.x, k = b.y, q = b.w, s = b.h, a = d * l + c * k + m, n = e * l + g * k + f, v = d * (l + q) + c * k + m, u = e * (l + q) + g * k + f, r = d * (l + q) + c * (k + s) + m, q = e * (l + q) + g * (k + s) + f, d = d * l + c * (k + s) + m, e = e * l + g * (k + s) + f, g = 0;
              a > v && (g = a, a = v, v = g);
              r > d && (g = r, r = d, d = g);
              b.x = a < r ? a : r;
              b.w = (v > d ? v : d) - b.x;
              n > u && (g = n, n = u, u = g);
              q > e && (g = q, q = e, e = g);
              b.y = n < q ? n : q;
              b.h = (u > e ? u : e) - b.y;
            }
          }
        };
        a.prototype.scale = function(b, a) {
          var d = this._data;
          d[0] *= b;
          d[1] *= a;
          d[2] *= b;
          d[3] *= a;
          d[4] *= b;
          d[5] *= a;
          this._type = 0;
          return this;
        };
        a.prototype.scaleClone = function(b, a) {
          return 1 === b && 1 === a ? this : this.clone().scale(b, a);
        };
        a.prototype.rotate = function(b) {
          var a = this._data, d = a[0], e = a[1], c = a[2], g = a[3], m = a[4], f = a[5], l = Math.cos(b);
          b = Math.sin(b);
          a[0] = l * d - b * e;
          a[1] = b * d + l * e;
          a[2] = l * c - b * g;
          a[3] = b * c + l * g;
          a[4] = l * m - b * f;
          a[5] = b * m + l * f;
          this._type = 0;
          return this;
        };
        a.prototype.concat = function(b) {
          if (1 === b._type) {
            return this;
          }
          var a = this._data;
          b = b._data;
          var d = a[0] * b[0], e = 0, c = 0, g = a[3] * b[3], m = a[4] * b[0] + b[4], f = a[5] * b[3] + b[5];
          if (0 !== a[1] || 0 !== a[2] || 0 !== b[1] || 0 !== b[2]) {
            d += a[1] * b[2], g += a[2] * b[1], e += a[0] * b[1] + a[1] * b[3], c += a[2] * b[0] + a[3] * b[2], m += a[5] * b[2], f += a[4] * b[1];
          }
          a[0] = d;
          a[1] = e;
          a[2] = c;
          a[3] = g;
          a[4] = m;
          a[5] = f;
          this._type = 0;
          return this;
        };
        a.prototype.concatClone = function(b) {
          return this.clone().concat(b);
        };
        a.prototype.preMultiply = function(b) {
          var a = this._data, d = b._data;
          if (2 === b._type && this._type & 3) {
            a[4] += d[4], a[5] += d[5], this._type = 2;
          } else {
            if (1 !== b._type) {
              b = d[0] * a[0];
              var e = 0, c = 0, g = d[3] * a[3], m = d[4] * a[0] + a[4], f = d[5] * a[3] + a[5];
              if (0 !== d[1] || 0 !== d[2] || 0 !== a[1] || 0 !== a[2]) {
                b += d[1] * a[2], g += d[2] * a[1], e += d[0] * a[1] + d[1] * a[3], c += d[2] * a[0] + d[3] * a[2], m += d[5] * a[2], f += d[4] * a[1];
              }
              a[0] = b;
              a[1] = e;
              a[2] = c;
              a[3] = g;
              a[4] = m;
              a[5] = f;
              this._type = 0;
            }
          }
        };
        a.prototype.translate = function(b, a) {
          var d = this._data;
          d[4] += b;
          d[5] += a;
          1 === this._type && (this._type = 2);
          return this;
        };
        a.prototype.setIdentity = function() {
          var b = this._data;
          b[0] = 1;
          b[1] = 0;
          b[2] = 0;
          b[3] = 1;
          b[4] = 0;
          b[5] = 0;
          this._type = 1;
        };
        a.prototype.isIdentity = function() {
          if (1 === this._type) {
            return!0;
          }
          var b = this._data;
          return 1 === b[0] && 0 === b[1] && 0 === b[2] && 1 === b[3] && 0 === b[4] && 0 === b[5];
        };
        a.prototype.transformPoint = function(b) {
          if (1 !== this._type) {
            var a = this._data, d = b.x, e = b.y;
            b.x = a[0] * d + a[2] * e + a[4];
            b.y = a[1] * d + a[3] * e + a[5];
          }
        };
        a.prototype.transformPoints = function(b) {
          if (1 !== this._type) {
            for (var a = 0;a < b.length;a++) {
              this.transformPoint(b[a]);
            }
          }
        };
        a.prototype.deltaTransformPoint = function(b) {
          if (1 !== this._type) {
            var a = this._data, d = b.x, e = b.y;
            b.x = a[0] * d + a[2] * e;
            b.y = a[1] * d + a[3] * e;
          }
        };
        a.prototype.inverse = function(b) {
          var a = this._data, d = b._data;
          if (1 === this._type) {
            b.setIdentity();
          } else {
            if (2 === this._type) {
              d[0] = 1, d[1] = 0, d[2] = 0, d[3] = 1, d[4] = -a[4], d[5] = -a[5], b._type = 2;
            } else {
              var e = a[1], c = a[2], g = a[4], m = a[5];
              if (0 === e && 0 === c) {
                var f = d[0] = 1 / a[0], a = d[3] = 1 / a[3];
                d[1] = 0;
                d[2] = 0;
                d[4] = -f * g;
                d[5] = -a * m;
              } else {
                var f = a[0], a = a[3], l = f * a - e * c;
                if (0 === l) {
                  b.setIdentity();
                  return;
                }
                l = 1 / l;
                d[0] = a * l;
                e = d[1] = -e * l;
                c = d[2] = -c * l;
                a = d[3] = f * l;
                d[4] = -(d[0] * g + c * m);
                d[5] = -(e * g + a * m);
              }
              b._type = 0;
            }
          }
        };
        a.prototype.getTranslateX = function() {
          return this._data[4];
        };
        a.prototype.getTranslateY = function() {
          return this._data[4];
        };
        a.prototype.getScaleX = function() {
          var b = this._data;
          if (1 === b[0] && 0 === b[1]) {
            return 1;
          }
          var a = Math.sqrt(b[0] * b[0] + b[1] * b[1]);
          return 0 < b[0] ? a : -a;
        };
        a.prototype.getScaleY = function() {
          var b = this._data;
          if (0 === b[2] && 1 === b[3]) {
            return 1;
          }
          var a = Math.sqrt(b[2] * b[2] + b[3] * b[3]);
          return 0 < b[3] ? a : -a;
        };
        a.prototype.getScale = function() {
          return(this.getScaleX() + this.getScaleY()) / 2;
        };
        a.prototype.getAbsoluteScaleX = function() {
          return Math.abs(this.getScaleX());
        };
        a.prototype.getAbsoluteScaleY = function() {
          return Math.abs(this.getScaleY());
        };
        a.prototype.getRotation = function() {
          var b = this._data;
          return 180 * Math.atan(b[1] / b[0]) / Math.PI;
        };
        a.prototype.isScaleOrRotation = function() {
          var b = this._data;
          return.01 > Math.abs(b[0] * b[2] + b[1] * b[3]);
        };
        a.prototype.toString = function(b) {
          void 0 === b && (b = 2);
          var a = this._data;
          return "{" + a[0].toFixed(b) + ", " + a[1].toFixed(b) + ", " + a[2].toFixed(b) + ", " + a[3].toFixed(b) + ", " + a[4].toFixed(b) + ", " + a[5].toFixed(b) + "}";
        };
        a.prototype.toWebGLMatrix = function() {
          var b = this._data;
          return new Float32Array([b[0], b[1], 0, b[2], b[3], 0, b[4], b[5], 1]);
        };
        a.prototype.toCSSTransform = function() {
          var b = this._data;
          return "matrix(" + b[0] + ", " + b[1] + ", " + b[2] + ", " + b[3] + ", " + b[4] + ", " + b[5] + ")";
        };
        a.createIdentity = function() {
          var b = a.allocate();
          b.setIdentity();
          return b;
        };
        a.prototype.toSVGMatrix = function() {
          var b = this._data, h = a._createSVGMatrix();
          h.a = b[0];
          h.b = b[1];
          h.c = b[2];
          h.d = b[3];
          h.e = b[4];
          h.f = b[5];
          return h;
        };
        a.prototype.snap = function() {
          var b = this._data;
          return this.isTranslationOnly() ? (b[0] = 1, b[1] = 0, b[2] = 0, b[3] = 1, b[4] = Math.round(b[4]), b[5] = Math.round(b[5]), this._type = 2, !0) : !1;
        };
        a.createIdentitySVGMatrix = function() {
          return a._createSVGMatrix();
        };
        a.createSVGMatrixFromArray = function(b) {
          var h = a._createSVGMatrix();
          h.a = b[0];
          h.b = b[1];
          h.c = b[2];
          h.d = b[3];
          h.e = b[4];
          h.f = b[5];
          return h;
        };
        a.allocationCount = 0;
        a._dirtyStack = [];
        a.multiply = function(b, a) {
          var d = a._data;
          b.transform(d[0], d[1], d[2], d[3], d[4], d[5]);
        };
        return a;
      }();
      f.Matrix = s;
      s = function() {
        function a(b) {
          this._m = new Float32Array(b);
        }
        a.prototype.asWebGLMatrix = function() {
          return this._m;
        };
        a.createCameraLookAt = function(b, h, d) {
          h = b.clone().sub(h).normalize();
          d = d.clone().cross(h).normalize();
          var c = h.clone().cross(d);
          return new a([d.x, d.y, d.z, 0, c.x, c.y, c.z, 0, h.x, h.y, h.z, 0, b.x, b.y, b.z, 1]);
        };
        a.createLookAt = function(b, h, d) {
          h = b.clone().sub(h).normalize();
          d = d.clone().cross(h).normalize();
          var c = h.clone().cross(d);
          return new a([d.x, c.x, h.x, 0, c.x, c.y, h.y, 0, h.x, c.z, h.z, 0, -d.dot(b), -c.dot(b), -h.dot(b), 1]);
        };
        a.prototype.mul = function(b) {
          b = [b.x, b.y, b.z, 0];
          for (var a = this._m, d = [], e = 0;4 > e;e++) {
            d[e] = 0;
            for (var c = 4 * e, g = 0;4 > g;g++) {
              d[e] += a[c + g] * b[g];
            }
          }
          return new l(d[0], d[1], d[2]);
        };
        a.create2DProjection = function(b, d, c) {
          return new a([2 / b, 0, 0, 0, 0, -2 / d, 0, 0, 0, 0, 2 / c, 0, -1, 1, 0, 1]);
        };
        a.createPerspective = function(b) {
          b = Math.tan(.5 * Math.PI - .5 * b);
          var d = 1 / -4999.9;
          return new a([b / 1, 0, 0, 0, 0, b, 0, 0, 0, 0, 5000.1 * d, -1, 0, 0, 1E3 * d, 0]);
        };
        a.createIdentity = function() {
          return a.createTranslation(0, 0);
        };
        a.createTranslation = function(b, d) {
          return new a([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, b, d, 0, 1]);
        };
        a.createXRotation = function(b) {
          var d = Math.cos(b);
          b = Math.sin(b);
          return new a([1, 0, 0, 0, 0, d, b, 0, 0, -b, d, 0, 0, 0, 0, 1]);
        };
        a.createYRotation = function(b) {
          var d = Math.cos(b);
          b = Math.sin(b);
          return new a([d, 0, -b, 0, 0, 1, 0, 0, b, 0, d, 0, 0, 0, 0, 1]);
        };
        a.createZRotation = function(b) {
          var d = Math.cos(b);
          b = Math.sin(b);
          return new a([d, b, 0, 0, -b, d, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        };
        a.createScale = function(b, d, c) {
          return new a([b, 0, 0, 0, 0, d, 0, 0, 0, 0, c, 0, 0, 0, 0, 1]);
        };
        a.createMultiply = function(b, d) {
          var c = b._m, g = d._m, m = c[0], f = c[1], l = c[2], k = c[3], q = c[4], s = c[5], n = c[6], v = c[7], u = c[8], r = c[9], t = c[10], z = c[11], y = c[12], A = c[13], C = c[14], c = c[15], x = g[0], E = g[1], B = g[2], D = g[3], F = g[4], I = g[5], J = g[6], K = g[7], L = g[8], M = g[9], N = g[10], O = g[11], R = g[12], S = g[13], T = g[14], g = g[15];
          return new a([m * x + f * F + l * L + k * R, m * E + f * I + l * M + k * S, m * B + f * J + l * N + k * T, m * D + f * K + l * O + k * g, q * x + s * F + n * L + v * R, q * E + s * I + n * M + v * S, q * B + s * J + n * N + v * T, q * D + s * K + n * O + v * g, u * x + r * F + t * L + z * R, u * E + r * I + t * M + z * S, u * B + r * J + t * N + z * T, u * D + r * K + t * O + z * g, y * x + A * F + C * L + c * R, y * E + A * I + C * M + c * S, y * B + A * J + C * N + c * T, y * D + A * 
          K + C * O + c * g]);
        };
        a.createInverse = function(b) {
          var d = b._m;
          b = d[0];
          var c = d[1], g = d[2], m = d[3], f = d[4], l = d[5], k = d[6], q = d[7], s = d[8], n = d[9], v = d[10], u = d[11], r = d[12], t = d[13], z = d[14], d = d[15], y = v * d, A = z * u, C = k * d, x = z * q, E = k * u, B = v * q, D = g * d, F = z * m, I = g * u, J = v * m, K = g * q, L = k * m, M = s * t, N = r * n, O = f * t, R = r * l, S = f * n, T = s * l, X = b * t, Y = r * c, Z = b * n, $ = s * c, aa = b * l, ba = f * c, da = y * l + x * n + E * t - (A * l + C * n + B * t), ea = A * c + 
          D * n + J * t - (y * c + F * n + I * t), t = C * c + F * l + K * t - (x * c + D * l + L * t), c = B * c + I * l + L * n - (E * c + J * l + K * n), l = 1 / (b * da + f * ea + s * t + r * c);
          return new a([l * da, l * ea, l * t, l * c, l * (A * f + C * s + B * r - (y * f + x * s + E * r)), l * (y * b + F * s + I * r - (A * b + D * s + J * r)), l * (x * b + D * f + L * r - (C * b + F * f + K * r)), l * (E * b + J * f + K * s - (B * b + I * f + L * s)), l * (M * q + R * u + S * d - (N * q + O * u + T * d)), l * (N * m + X * u + $ * d - (M * m + Y * u + Z * d)), l * (O * m + Y * q + aa * d - (R * m + X * q + ba * d)), l * (T * m + Z * q + ba * u - (S * m + $ * q + aa * u)), l * 
          (O * v + T * z + N * k - (S * z + M * k + R * v)), l * (Z * z + M * g + Y * v - (X * v + $ * z + N * g)), l * (X * k + ba * z + R * g - (aa * z + O * g + Y * k)), l * (aa * v + S * g + $ * k - (Z * k + ba * v + T * g))]);
        };
        return a;
      }();
      f.Matrix3D = s;
      s = function() {
        function a(b, d, c) {
          void 0 === c && (c = 7);
          var g = this.size = 1 << c;
          this.sizeInBits = c;
          this.w = b;
          this.h = d;
          this.c = Math.ceil(b / g);
          this.r = Math.ceil(d / g);
          this.grid = [];
          for (b = 0;b < this.r;b++) {
            for (this.grid.push([]), d = 0;d < this.c;d++) {
              this.grid[b][d] = new a.Cell(new u(d * g, b * g, g, g));
            }
          }
        }
        a.prototype.clear = function() {
          for (var b = 0;b < this.r;b++) {
            for (var a = 0;a < this.c;a++) {
              this.grid[b][a].clear();
            }
          }
        };
        a.prototype.getBounds = function() {
          return new u(0, 0, this.w, this.h);
        };
        a.prototype.addDirtyRectangle = function(b) {
          var a = b.x >> this.sizeInBits, d = b.y >> this.sizeInBits;
          if (!(a >= this.c || d >= this.r)) {
            0 > a && (a = 0);
            0 > d && (d = 0);
            var c = this.grid[d][a];
            b = b.clone();
            b.snap();
            if (c.region.contains(b)) {
              c.bounds.isEmpty() ? c.bounds.set(b) : c.bounds.contains(b) || c.bounds.union(b);
            } else {
              for (var e = Math.min(this.c, Math.ceil((b.x + b.w) / this.size)) - a, g = Math.min(this.r, Math.ceil((b.y + b.h) / this.size)) - d, m = 0;m < e;m++) {
                for (var f = 0;f < g;f++) {
                  c = this.grid[d + f][a + m], c = c.region.clone(), c.intersect(b), c.isEmpty() || this.addDirtyRectangle(c);
                }
              }
            }
          }
        };
        a.prototype.gatherRegions = function(b) {
          for (var a = 0;a < this.r;a++) {
            for (var d = 0;d < this.c;d++) {
              this.grid[a][d].bounds.isEmpty() || b.push(this.grid[a][d].bounds);
            }
          }
        };
        a.prototype.gatherOptimizedRegions = function(b) {
          this.gatherRegions(b);
        };
        a.prototype.getDirtyRatio = function() {
          var b = this.w * this.h;
          if (0 === b) {
            return 0;
          }
          for (var a = 0, d = 0;d < this.r;d++) {
            for (var c = 0;c < this.c;c++) {
              a += this.grid[d][c].region.area();
            }
          }
          return a / b;
        };
        a.prototype.render = function(b, a) {
          function d(a) {
            b.rect(a.x, a.y, a.w, a.h);
          }
          if (a && a.drawGrid) {
            b.strokeStyle = "white";
            for (var c = 0;c < this.r;c++) {
              for (var e = 0;e < this.c;e++) {
                var g = this.grid[c][e];
                b.beginPath();
                d(g.region);
                b.closePath();
                b.stroke();
              }
            }
          }
          b.strokeStyle = "#E0F8D8";
          for (c = 0;c < this.r;c++) {
            for (e = 0;e < this.c;e++) {
              g = this.grid[c][e], b.beginPath(), d(g.bounds), b.closePath(), b.stroke();
            }
          }
        };
        a.tmpRectangle = u.createEmpty();
        return a;
      }();
      f.DirtyRegion = s;
      (function(a) {
        var b = function() {
          function b(a) {
            this.region = a;
            this.bounds = u.createEmpty();
          }
          b.prototype.clear = function() {
            this.bounds.setEmpty();
          };
          return b;
        }();
        a.Cell = b;
      })(s = f.DirtyRegion || (f.DirtyRegion = {}));
      var v = function() {
        function a(b, d, c, e, g, m) {
          this.index = b;
          this.x = d;
          this.y = c;
          this.scale = m;
          this.bounds = new u(d * e, c * g, e, g);
        }
        a.prototype.getOBB = function() {
          if (this._obb) {
            return this._obb;
          }
          this.bounds.getCorners(a.corners);
          return this._obb = new m(a.corners);
        };
        a.corners = q.createEmptyPoints(4);
        return a;
      }();
      f.Tile = v;
      var d = function() {
        function a(b, d, c, e, g) {
          this.tileW = c;
          this.tileH = e;
          this.scale = g;
          this.w = b;
          this.h = d;
          this.rows = Math.ceil(d / e);
          this.columns = Math.ceil(b / c);
          this.tiles = [];
          for (d = b = 0;d < this.rows;d++) {
            for (var m = 0;m < this.columns;m++) {
              this.tiles.push(new v(b++, m, d, c, e, g));
            }
          }
        }
        a.prototype.getTiles = function(b, a) {
          if (a.emptyArea(b)) {
            return[];
          }
          if (a.infiniteArea(b)) {
            return this.tiles;
          }
          var d = this.columns * this.rows;
          return 40 > d && a.isScaleOrRotation() ? this.getFewTiles(b, a, 10 < d) : this.getManyTiles(b, a);
        };
        a.prototype.getFewTiles = function(b, d, c) {
          void 0 === c && (c = !0);
          if (d.isTranslationOnly() && 1 === this.tiles.length) {
            return this.tiles[0].bounds.intersectsTranslated(b, d.tx, d.ty) ? [this.tiles[0]] : [];
          }
          d.transformRectangle(b, a._points);
          var g;
          b = new u(0, 0, this.w, this.h);
          c && (g = new m(a._points));
          b.intersect(m.getBounds(a._points));
          if (b.isEmpty()) {
            return[];
          }
          var f = b.x / this.tileW | 0;
          d = b.y / this.tileH | 0;
          var l = Math.ceil((b.x + b.w) / this.tileW) | 0, k = Math.ceil((b.y + b.h) / this.tileH) | 0, f = n(f, 0, this.columns), l = n(l, 0, this.columns);
          d = n(d, 0, this.rows);
          for (var k = n(k, 0, this.rows), q = [];f < l;f++) {
            for (var s = d;s < k;s++) {
              var v = this.tiles[s * this.columns + f];
              v.bounds.intersects(b) && (c ? v.getOBB().intersects(g) : 1) && q.push(v);
            }
          }
          return q;
        };
        a.prototype.getManyTiles = function(b, d) {
          function c(b, a, d) {
            return(b - a.x) * (d.y - a.y) / (d.x - a.x) + a.y;
          }
          function g(b, a, d, c, h) {
            if (!(0 > d || d >= a.columns)) {
              for (c = n(c, 0, a.rows), h = n(h + 1, 0, a.rows);c < h;c++) {
                b.push(a.tiles[c * a.columns + d]);
              }
            }
          }
          var m = a._points;
          d.transformRectangle(b, m);
          for (var f = m[0].x < m[1].x ? 0 : 1, l = m[2].x < m[3].x ? 2 : 3, l = m[f].x < m[l].x ? f : l, f = [], k = 0;5 > k;k++, l++) {
            f.push(m[l % 4]);
          }
          (f[1].x - f[0].x) * (f[3].y - f[0].y) < (f[1].y - f[0].y) * (f[3].x - f[0].x) && (m = f[1], f[1] = f[3], f[3] = m);
          var m = [], q, s, l = Math.floor(f[0].x / this.tileW), k = (l + 1) * this.tileW;
          if (f[2].x < k) {
            q = Math.min(f[0].y, f[1].y, f[2].y, f[3].y);
            s = Math.max(f[0].y, f[1].y, f[2].y, f[3].y);
            var v = Math.floor(q / this.tileH), u = Math.floor(s / this.tileH);
            g(m, this, l, v, u);
            return m;
          }
          var r = 0, t = 4, H = !1;
          if (f[0].x === f[1].x || f[0].x === f[3].x) {
            f[0].x === f[1].x ? (H = !0, r++) : t--, q = c(k, f[r], f[r + 1]), s = c(k, f[t], f[t - 1]), v = Math.floor(f[r].y / this.tileH), u = Math.floor(f[t].y / this.tileH), g(m, this, l, v, u), l++;
          }
          do {
            var z, y, A, C;
            f[r + 1].x < k ? (z = f[r + 1].y, A = !0) : (z = c(k, f[r], f[r + 1]), A = !1);
            f[t - 1].x < k ? (y = f[t - 1].y, C = !0) : (y = c(k, f[t], f[t - 1]), C = !1);
            v = Math.floor((f[r].y < f[r + 1].y ? q : z) / this.tileH);
            u = Math.floor((f[t].y > f[t - 1].y ? s : y) / this.tileH);
            g(m, this, l, v, u);
            if (A && H) {
              break;
            }
            A ? (H = !0, r++, q = c(k, f[r], f[r + 1])) : q = z;
            C ? (t--, s = c(k, f[t], f[t - 1])) : s = y;
            l++;
            k = (l + 1) * this.tileW;
          } while (r < t);
          return m;
        };
        a._points = q.createEmptyPoints(4);
        return a;
      }();
      f.TileCache = d;
      s = function() {
        function c(b, a, d) {
          this._cacheLevels = [];
          this._source = b;
          this._tileSize = a;
          this._minUntiledSize = d;
        }
        c.prototype._getTilesAtScale = function(b, c, e) {
          var g = Math.max(c.getAbsoluteScaleX(), c.getAbsoluteScaleY()), m = 0;
          1 !== g && (m = n(Math.round(Math.log(1 / g) / Math.LN2), -5, 3));
          g = a(m);
          if (this._source.hasFlags(1048576)) {
            for (;;) {
              g = a(m);
              if (e.contains(this._source.getBounds().getAbsoluteBounds().clone().scale(g, g))) {
                break;
              }
              m--;
            }
          }
          this._source.hasFlags(2097152) || (m = n(m, -5, 0));
          g = a(m);
          e = 5 + m;
          m = this._cacheLevels[e];
          if (!m) {
            var m = this._source.getBounds().getAbsoluteBounds().clone().scale(g, g), f, l;
            this._source.hasFlags(1048576) || !this._source.hasFlags(4194304) || Math.max(m.w, m.h) <= this._minUntiledSize ? (f = m.w, l = m.h) : f = l = this._tileSize;
            m = this._cacheLevels[e] = new d(m.w, m.h, f, l, g);
          }
          return m.getTiles(b, c.scaleClone(g, g));
        };
        c.prototype.fetchTiles = function(b, a, d, c) {
          var e = new u(0, 0, d.canvas.width, d.canvas.height);
          b = this._getTilesAtScale(b, a, e);
          var g;
          a = this._source;
          for (var m = 0;m < b.length;m++) {
            var f = b[m];
            f.cachedSurfaceRegion && f.cachedSurfaceRegion.surface && !a.hasFlags(1048592) || (g || (g = []), g.push(f));
          }
          g && this._cacheTiles(d, g, c, e);
          a.removeFlags(16);
          return b;
        };
        c.prototype._getTileBounds = function(b) {
          for (var a = u.createEmpty(), d = 0;d < b.length;d++) {
            a.union(b[d].bounds);
          }
          return a;
        };
        c.prototype._cacheTiles = function(b, a, d, c, e) {
          void 0 === e && (e = 4);
          var g = this._getTileBounds(a);
          b.save();
          b.setTransform(1, 0, 0, 1, 0, 0);
          b.clearRect(0, 0, c.w, c.h);
          b.translate(-g.x, -g.y);
          b.scale(a[0].scale, a[0].scale);
          var m = this._source.getBounds();
          b.translate(-m.x, -m.y);
          2 <= r.traceLevel && r.writer && r.writer.writeLn("Rendering Tiles: " + g);
          this._source.render(b, 0);
          b.restore();
          for (var m = null, f = 0;f < a.length;f++) {
            var l = a[f], k = l.bounds.clone();
            k.x -= g.x;
            k.y -= g.y;
            c.contains(k) || (m || (m = []), m.push(l));
            l.cachedSurfaceRegion = d(l.cachedSurfaceRegion, b, k);
          }
          m && (2 <= m.length ? (a = m.slice(0, m.length / 2 | 0), g = m.slice(a.length), this._cacheTiles(b, a, d, c, e - 1), this._cacheTiles(b, g, d, c, e - 1)) : this._cacheTiles(b, m, d, c, e - 1));
        };
        return c;
      }();
      f.RenderableTileCache = s;
    })(r.Geometry || (r.Geometry = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(k, r) {
  function f() {
    this.constructor = k;
  }
  for (var c in r) {
    r.hasOwnProperty(c) && (k[c] = r[c]);
  }
  f.prototype = r.prototype;
  k.prototype = new f;
};
(function(k) {
  (function(r) {
    var f = k.IntegerUtilities.roundToMultipleOfPowerOfTwo, c = r.Geometry.Rectangle;
    (function(k) {
      var n = function(a) {
        function c() {
          a.apply(this, arguments);
        }
        __extends(c, a);
        return c;
      }(r.Geometry.Rectangle);
      k.Region = n;
      var a = function() {
        function a(c, d) {
          this._root = new g(0, 0, c | 0, d | 0, !1);
        }
        a.prototype.allocate = function(a, d) {
          a = Math.ceil(a);
          d = Math.ceil(d);
          var c = this._root.insert(a, d);
          c && (c.allocator = this, c.allocated = !0);
          return c;
        };
        a.prototype.free = function(a) {
          a.clear();
          a.allocated = !1;
        };
        a.RANDOM_ORIENTATION = !0;
        a.MAX_DEPTH = 256;
        return a;
      }();
      k.CompactAllocator = a;
      var g = function(c) {
        function g(a, e, b, h, p) {
          c.call(this, a, e, b, h);
          this._children = null;
          this._horizontal = p;
          this.allocated = !1;
        }
        __extends(g, c);
        g.prototype.clear = function() {
          this._children = null;
          this.allocated = !1;
        };
        g.prototype.insert = function(a, c) {
          return this._insert(a, c, 0);
        };
        g.prototype._insert = function(d, c, b) {
          if (!(b > a.MAX_DEPTH || this.allocated || this.w < d || this.h < c)) {
            if (this._children) {
              var h;
              if ((h = this._children[0]._insert(d, c, b + 1)) || (h = this._children[1]._insert(d, c, b + 1))) {
                return h;
              }
            } else {
              return h = !this._horizontal, a.RANDOM_ORIENTATION && (h = .5 <= Math.random()), this._children = this._horizontal ? [new g(this.x, this.y, this.w, c, !1), new g(this.x, this.y + c, this.w, this.h - c, h)] : [new g(this.x, this.y, d, this.h, !0), new g(this.x + d, this.y, this.w - d, this.h, h)], h = this._children[0], h.w === d && h.h === c ? (h.allocated = !0, h) : this._insert(d, c, b + 1);
            }
          }
        };
        return g;
      }(k.Region), q = function() {
        function a(c, d, e, b) {
          this._columns = c / e | 0;
          this._rows = d / b | 0;
          this._sizeW = e;
          this._sizeH = b;
          this._freeList = [];
          this._index = 0;
          this._total = this._columns * this._rows;
        }
        a.prototype.allocate = function(a, d) {
          a = Math.ceil(a);
          d = Math.ceil(d);
          var c = this._sizeW, b = this._sizeH;
          if (a > c || d > b) {
            return null;
          }
          var h = this._freeList, p = this._index;
          return 0 < h.length ? (c = h.pop(), c.w = a, c.h = d, c.allocated = !0, c) : p < this._total ? (h = p / this._columns | 0, c = new l((p - h * this._columns) * c, h * b, a, d), c.index = p, c.allocator = this, c.allocated = !0, this._index++, c) : null;
        };
        a.prototype.free = function(a) {
          a.allocated = !1;
          this._freeList.push(a);
        };
        return a;
      }();
      k.GridAllocator = q;
      var l = function(a) {
        function c(d, e, b, h) {
          a.call(this, d, e, b, h);
          this.index = -1;
        }
        __extends(c, a);
        return c;
      }(k.Region);
      k.GridCell = l;
      var u = function() {
        return function(a, c, d) {
          this.size = a;
          this.region = c;
          this.allocator = d;
        };
      }(), m = function(a) {
        function c(d, e, b, h, p) {
          a.call(this, d, e, b, h);
          this.region = p;
        }
        __extends(c, a);
        return c;
      }(k.Region);
      k.BucketCell = m;
      n = function() {
        function a(c, d) {
          this._buckets = [];
          this._w = c | 0;
          this._h = d | 0;
          this._filled = 0;
        }
        a.prototype.allocate = function(a, d) {
          a = Math.ceil(a);
          d = Math.ceil(d);
          var e = Math.max(a, d);
          if (a > this._w || d > this._h) {
            return null;
          }
          var b = null, h, p = this._buckets;
          do {
            for (var g = 0;g < p.length && !(p[g].size >= e && (h = p[g], b = h.allocator.allocate(a, d)));g++) {
            }
            if (!b) {
              var l = this._h - this._filled;
              if (l < d) {
                return null;
              }
              var g = f(e, 8), k = 2 * g;
              k > l && (k = l);
              if (k < g) {
                return null;
              }
              l = new c(0, this._filled, this._w, k);
              this._buckets.push(new u(g, l, new q(l.w, l.h, g, g)));
              this._filled += k;
            }
          } while (!b);
          return new m(h.region.x + b.x, h.region.y + b.y, b.w, b.h, b);
        };
        a.prototype.free = function(a) {
          a.region.allocator.free(a.region);
        };
        return a;
      }();
      k.BucketAllocator = n;
    })(r.RegionAllocator || (r.RegionAllocator = {}));
    (function(c) {
      var f = function() {
        function a(a) {
          this._createSurface = a;
          this._surfaces = [];
        }
        Object.defineProperty(a.prototype, "surfaces", {get:function() {
          return this._surfaces;
        }, enumerable:!0, configurable:!0});
        a.prototype._createNewSurface = function(a, c) {
          var f = this._createSurface(a, c);
          this._surfaces.push(f);
          return f;
        };
        a.prototype.addSurface = function(a) {
          this._surfaces.push(a);
        };
        a.prototype.allocate = function(a, c, f) {
          for (var k = 0;k < this._surfaces.length;k++) {
            var m = this._surfaces[k];
            if (m !== f && (m = m.allocate(a, c))) {
              return m;
            }
          }
          return this._createNewSurface(a, c).allocate(a, c);
        };
        a.prototype.free = function(a) {
        };
        return a;
      }();
      c.SimpleAllocator = f;
    })(r.SurfaceRegionAllocator || (r.SurfaceRegionAllocator = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    var f = r.Geometry.Rectangle, c = r.Geometry.Matrix, t = r.Geometry.DirtyRegion;
    (function(b) {
      b[b.Normal = 1] = "Normal";
      b[b.Layer = 2] = "Layer";
      b[b.Multiply = 3] = "Multiply";
      b[b.Screen = 4] = "Screen";
      b[b.Lighten = 5] = "Lighten";
      b[b.Darken = 6] = "Darken";
      b[b.Difference = 7] = "Difference";
      b[b.Add = 8] = "Add";
      b[b.Subtract = 9] = "Subtract";
      b[b.Invert = 10] = "Invert";
      b[b.Alpha = 11] = "Alpha";
      b[b.Erase = 12] = "Erase";
      b[b.Overlay = 13] = "Overlay";
      b[b.HardLight = 14] = "HardLight";
    })(r.BlendMode || (r.BlendMode = {}));
    var n = r.BlendMode;
    (function(b) {
      b[b.None = 0] = "None";
      b[b.BoundsAutoCompute = 2] = "BoundsAutoCompute";
      b[b.IsMask = 4] = "IsMask";
      b[b.Dirty = 16] = "Dirty";
      b[b.InvalidBounds = 256] = "InvalidBounds";
      b[b.InvalidConcatenatedMatrix = 512] = "InvalidConcatenatedMatrix";
      b[b.InvalidInvertedConcatenatedMatrix = 1024] = "InvalidInvertedConcatenatedMatrix";
      b[b.InvalidConcatenatedColorMatrix = 2048] = "InvalidConcatenatedColorMatrix";
      b[b.UpOnAddedOrRemoved = b.InvalidBounds | b.Dirty] = "UpOnAddedOrRemoved";
      b[b.UpOnMoved = b.InvalidBounds | b.Dirty] = "UpOnMoved";
      b[b.DownOnAddedOrRemoved = b.InvalidConcatenatedMatrix | b.InvalidInvertedConcatenatedMatrix | b.InvalidConcatenatedColorMatrix] = "DownOnAddedOrRemoved";
      b[b.DownOnMoved = b.InvalidConcatenatedMatrix | b.InvalidInvertedConcatenatedMatrix | b.InvalidConcatenatedColorMatrix] = "DownOnMoved";
      b[b.UpOnColorMatrixChanged = b.Dirty] = "UpOnColorMatrixChanged";
      b[b.DownOnColorMatrixChanged = b.InvalidConcatenatedColorMatrix] = "DownOnColorMatrixChanged";
      b[b.Visible = 65536] = "Visible";
      b[b.UpOnInvalidate = b.InvalidBounds | b.Dirty] = "UpOnInvalidate";
      b[b.Default = b.BoundsAutoCompute | b.InvalidBounds | b.InvalidConcatenatedMatrix | b.InvalidInvertedConcatenatedMatrix | b.Visible] = "Default";
      b[b.CacheAsBitmap = 131072] = "CacheAsBitmap";
      b[b.PixelSnapping = 262144] = "PixelSnapping";
      b[b.ImageSmoothing = 524288] = "ImageSmoothing";
      b[b.Dynamic = 1048576] = "Dynamic";
      b[b.Scalable = 2097152] = "Scalable";
      b[b.Tileable = 4194304] = "Tileable";
      b[b.Transparent = 32768] = "Transparent";
    })(r.NodeFlags || (r.NodeFlags = {}));
    var a = r.NodeFlags;
    (function(b) {
      b[b.Node = 1] = "Node";
      b[b.Shape = 3] = "Shape";
      b[b.Group = 5] = "Group";
      b[b.Stage = 13] = "Stage";
      b[b.Renderable = 33] = "Renderable";
    })(r.NodeType || (r.NodeType = {}));
    var g = r.NodeType;
    (function(b) {
      b[b.None = 0] = "None";
      b[b.OnStageBoundsChanged = 1] = "OnStageBoundsChanged";
      b[b.RemovedFromStage = 2] = "RemovedFromStage";
    })(r.NodeEventType || (r.NodeEventType = {}));
    var q = function() {
      function b() {
      }
      b.prototype.visitNode = function(b, a) {
      };
      b.prototype.visitShape = function(b, a) {
        this.visitNode(b, a);
      };
      b.prototype.visitGroup = function(b, a) {
        this.visitNode(b, a);
        for (var d = b.getChildren(), c = 0;c < d.length;c++) {
          d[c].visit(this, a);
        }
      };
      b.prototype.visitStage = function(b, a) {
        this.visitGroup(b, a);
      };
      b.prototype.visitRenderable = function(b, a) {
        this.visitNode(b, a);
      };
      return b;
    }();
    r.NodeVisitor = q;
    var l = function() {
      return function() {
      };
    }();
    r.State = l;
    var u = function(b) {
      function a() {
        b.call(this);
        this.matrix = c.createIdentity();
        this.depth = 0;
      }
      __extends(a, b);
      a.prototype.transform = function(b) {
        var a = this.clone();
        a.matrix.preMultiply(b.getMatrix());
        return a;
      };
      a.allocate = function() {
        var b = a._dirtyStack, d = null;
        b.length && (d = b.pop());
        return d;
      };
      a.prototype.clone = function() {
        var b = a.allocate();
        b || (b = new a);
        b.set(this);
        return b;
      };
      a.prototype.set = function(b) {
        this.matrix.set(b.matrix);
      };
      a.prototype.free = function() {
        a._dirtyStack.push(this);
      };
      a._dirtyStack = [];
      return a;
    }(l);
    r.PreRenderState = u;
    var m = function(b) {
      function a() {
        b.apply(this, arguments);
        this.isDirty = !0;
      }
      __extends(a, b);
      a.prototype.start = function(b, a) {
        this._dirtyRegion = a;
        var d = new u;
        d.matrix.setIdentity();
        b.visit(this, d);
        d.free();
      };
      a.prototype.visitGroup = function(b, a) {
        var d = b.getChildren();
        this.visitNode(b, a);
        for (var c = 0;c < d.length;c++) {
          var h = d[c], e = a.transform(h.getTransform());
          h.visit(this, e);
          e.free();
        }
      };
      a.prototype.visitNode = function(b, a) {
        b.hasFlags(16) && (this.isDirty = !0);
        b.toggleFlags(16, !1);
        b.depth = a.depth++;
      };
      return a;
    }(q);
    r.PreRenderVisitor = m;
    l = function(b) {
      function a(d) {
        b.call(this);
        this.writer = d;
      }
      __extends(a, b);
      a.prototype.visitNode = function(b, a) {
      };
      a.prototype.visitShape = function(b, a) {
        this.writer.writeLn(b.toString());
        this.visitNode(b, a);
      };
      a.prototype.visitGroup = function(b, a) {
        this.visitNode(b, a);
        var d = b.getChildren();
        this.writer.enter(b.toString() + " " + d.length);
        for (var c = 0;c < d.length;c++) {
          d[c].visit(this, a);
        }
        this.writer.outdent();
      };
      a.prototype.visitStage = function(b, a) {
        this.visitGroup(b, a);
      };
      return a;
    }(q);
    r.TracingNodeVisitor = l;
    var s = function() {
      function b() {
        this._clip = -1;
        this._eventListeners = null;
        this._id = b._nextId++;
        this._type = 1;
        this._index = -1;
        this._parent = null;
        this.reset();
      }
      Object.defineProperty(b.prototype, "id", {get:function() {
        return this._id;
      }, enumerable:!0, configurable:!0});
      b.prototype._dispatchEvent = function(b) {
        if (this._eventListeners) {
          for (var a = this._eventListeners, d = 0;d < a.length;d++) {
            var c = a[d];
            c.type === b && c.listener(this, b);
          }
        }
      };
      b.prototype.addEventListener = function(b, a) {
        this._eventListeners || (this._eventListeners = []);
        this._eventListeners.push({type:b, listener:a});
      };
      b.prototype.removeEventListener = function(b, a) {
        for (var d = this._eventListeners, c = 0;c < d.length;c++) {
          var e = d[c];
          if (e.type === b && e.listener === a) {
            d.splice(c, 1);
            break;
          }
        }
      };
      Object.defineProperty(b.prototype, "properties", {get:function() {
        return this._properties || (this._properties = {});
      }, enumerable:!0, configurable:!0});
      b.prototype.reset = function() {
        this._flags = a.Default;
        this._properties = this._transform = this._layer = this._bounds = null;
        this.depth = -1;
      };
      Object.defineProperty(b.prototype, "clip", {get:function() {
        return this._clip;
      }, set:function(b) {
        this._clip = b;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "parent", {get:function() {
        return this._parent;
      }, enumerable:!0, configurable:!0});
      b.prototype.getTransformedBounds = function(b) {
        var a = this.getBounds(!0);
        if (b !== this && !a.isEmpty()) {
          var d = this.getTransform().getConcatenatedMatrix();
          b ? (b = b.getTransform().getInvertedConcatenatedMatrix(), b.preMultiply(d), b.transformRectangleAABB(a), b.free()) : d.transformRectangleAABB(a);
        }
        return a;
      };
      b.prototype._markCurrentBoundsAsDirtyRegion = function() {
      };
      b.prototype.getStage = function(b) {
        void 0 === b && (b = !0);
        for (var a = this._parent;a;) {
          if (a.isType(13)) {
            var d = a;
            if (b) {
              if (d.dirtyRegion) {
                return d;
              }
            } else {
              return d;
            }
          }
          a = a._parent;
        }
        return null;
      };
      b.prototype.getChildren = function(b) {
        throw void 0;
      };
      b.prototype.getBounds = function(b) {
        throw void 0;
      };
      b.prototype.setBounds = function(b) {
        (this._bounds || (this._bounds = f.createEmpty())).set(b);
        this.removeFlags(256);
      };
      b.prototype.clone = function() {
        throw void 0;
      };
      b.prototype.setFlags = function(b) {
        this._flags |= b;
      };
      b.prototype.hasFlags = function(b) {
        return(this._flags & b) === b;
      };
      b.prototype.hasAnyFlags = function(b) {
        return!!(this._flags & b);
      };
      b.prototype.removeFlags = function(b) {
        this._flags &= ~b;
      };
      b.prototype.toggleFlags = function(b, a) {
        this._flags = a ? this._flags | b : this._flags & ~b;
      };
      b.prototype._propagateFlagsUp = function(b) {
        if (0 !== b && !this.hasFlags(b)) {
          this.hasFlags(2) || (b &= -257);
          this.setFlags(b);
          var a = this._parent;
          a && a._propagateFlagsUp(b);
        }
      };
      b.prototype._propagateFlagsDown = function(b) {
        throw void 0;
      };
      b.prototype.isAncestor = function(b) {
        for (;b;) {
          if (b === this) {
            return!0;
          }
          b = b._parent;
        }
        return!1;
      };
      b._getAncestors = function(a, d) {
        var c = b._path;
        for (c.length = 0;a && a !== d;) {
          c.push(a), a = a._parent;
        }
        return c;
      };
      b.prototype._findClosestAncestor = function() {
        for (var b = this;b;) {
          if (!1 === b.hasFlags(512)) {
            return b;
          }
          b = b._parent;
        }
        return null;
      };
      b.prototype.isType = function(b) {
        return this._type === b;
      };
      b.prototype.isTypeOf = function(b) {
        return(this._type & b) === b;
      };
      b.prototype.isLeaf = function() {
        return this.isType(33) || this.isType(3);
      };
      b.prototype.isLinear = function() {
        if (this.isLeaf()) {
          return!0;
        }
        if (this.isType(5)) {
          var b = this._children;
          if (1 === b.length && b[0].isLinear()) {
            return!0;
          }
        }
        return!1;
      };
      b.prototype.getTransformMatrix = function() {
        var b;
        void 0 === b && (b = !1);
        return this.getTransform().getMatrix(b);
      };
      b.prototype.getTransform = function() {
        null === this._transform && (this._transform = new d(this));
        return this._transform;
      };
      b.prototype.getLayer = function() {
        null === this._layer && (this._layer = new e(this));
        return this._layer;
      };
      b.prototype.visit = function(b, a) {
        switch(this._type) {
          case 1:
            b.visitNode(this, a);
            break;
          case 5:
            b.visitGroup(this, a);
            break;
          case 13:
            b.visitStage(this, a);
            break;
          case 3:
            b.visitShape(this, a);
            break;
          case 33:
            b.visitRenderable(this, a);
            break;
          default:
            k.Debug.unexpectedCase();
        }
      };
      b.prototype.invalidate = function() {
        this._propagateFlagsUp(a.UpOnInvalidate);
      };
      b.prototype.toString = function(b) {
        void 0 === b && (b = !1);
        var a = g[this._type] + " " + this._id;
        b && (a += " " + this._bounds.toString());
        return a;
      };
      b._path = [];
      b._nextId = 0;
      return b;
    }();
    r.Node = s;
    var v = function(b) {
      function d() {
        b.call(this);
        this._type = 5;
        this._children = [];
      }
      __extends(d, b);
      d.prototype.getChildren = function(b) {
        void 0 === b && (b = !1);
        return b ? this._children.slice(0) : this._children;
      };
      d.prototype.childAt = function(b) {
        return this._children[b];
      };
      Object.defineProperty(d.prototype, "child", {get:function() {
        return this._children[0];
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(d.prototype, "groupChild", {get:function() {
        return this._children[0];
      }, enumerable:!0, configurable:!0});
      d.prototype.addChild = function(b) {
        b._parent && b._parent.removeChildAt(b._index);
        b._parent = this;
        b._index = this._children.length;
        this._children.push(b);
        this._propagateFlagsUp(a.UpOnAddedOrRemoved);
        b._propagateFlagsDown(a.DownOnAddedOrRemoved);
      };
      d.prototype.removeChildAt = function(b) {
        var d = this._children[b];
        this._children.splice(b, 1);
        d._index = -1;
        d._parent = null;
        this._propagateFlagsUp(a.UpOnAddedOrRemoved);
        d._propagateFlagsDown(a.DownOnAddedOrRemoved);
      };
      d.prototype.clearChildren = function() {
        for (var b = 0;b < this._children.length;b++) {
          var d = this._children[b];
          d && (d._index = -1, d._parent = null, d._propagateFlagsDown(a.DownOnAddedOrRemoved));
        }
        this._children.length = 0;
        this._propagateFlagsUp(a.UpOnAddedOrRemoved);
      };
      d.prototype._propagateFlagsDown = function(b) {
        if (!this.hasFlags(b)) {
          this.setFlags(b);
          for (var a = this._children, d = 0;d < a.length;d++) {
            a[d]._propagateFlagsDown(b);
          }
        }
      };
      d.prototype.getBounds = function(b) {
        void 0 === b && (b = !1);
        var a = this._bounds || (this._bounds = f.createEmpty());
        if (this.hasFlags(256)) {
          a.setEmpty();
          for (var d = this._children, c = f.allocate(), e = 0;e < d.length;e++) {
            var h = d[e];
            c.set(h.getBounds());
            h.getTransformMatrix().transformRectangleAABB(c);
            a.union(c);
          }
          c.free();
          this.removeFlags(256);
        }
        return b ? a.clone() : a;
      };
      return d;
    }(s);
    r.Group = v;
    var d = function() {
      function b(b) {
        this._node = b;
        this._matrix = c.createIdentity();
        this._colorMatrix = r.ColorMatrix.createIdentity();
        this._concatenatedMatrix = c.createIdentity();
        this._invertedConcatenatedMatrix = c.createIdentity();
        this._concatenatedColorMatrix = r.ColorMatrix.createIdentity();
      }
      b.prototype.setMatrix = function(b) {
        this._matrix.isEqual(b) || (this._matrix.set(b), this._node._propagateFlagsUp(a.UpOnMoved), this._node._propagateFlagsDown(a.DownOnMoved));
      };
      b.prototype.setColorMatrix = function(b) {
        this._colorMatrix.set(b);
        this._node._propagateFlagsUp(a.UpOnColorMatrixChanged);
        this._node._propagateFlagsDown(a.DownOnColorMatrixChanged);
      };
      b.prototype.getMatrix = function(b) {
        void 0 === b && (b = !1);
        return b ? this._matrix.clone() : this._matrix;
      };
      b.prototype.hasColorMatrix = function() {
        return null !== this._colorMatrix;
      };
      b.prototype.getColorMatrix = function() {
        var b;
        void 0 === b && (b = !1);
        null === this._colorMatrix && (this._colorMatrix = r.ColorMatrix.createIdentity());
        return b ? this._colorMatrix.clone() : this._colorMatrix;
      };
      b.prototype.getConcatenatedMatrix = function(b) {
        void 0 === b && (b = !1);
        if (this._node.hasFlags(512)) {
          for (var a = this._node._findClosestAncestor(), d = s._getAncestors(this._node, a), e = a ? a.getTransform()._concatenatedMatrix.clone() : c.createIdentity(), g = d.length - 1;0 <= g;g--) {
            var a = d[g], m = a.getTransform();
            e.preMultiply(m._matrix);
            m._concatenatedMatrix.set(e);
            a.removeFlags(512);
          }
        }
        return b ? this._concatenatedMatrix.clone() : this._concatenatedMatrix;
      };
      b.prototype.getInvertedConcatenatedMatrix = function() {
        var b = !0;
        void 0 === b && (b = !1);
        this._node.hasFlags(1024) && (this.getConcatenatedMatrix().inverse(this._invertedConcatenatedMatrix), this._node.removeFlags(1024));
        return b ? this._invertedConcatenatedMatrix.clone() : this._invertedConcatenatedMatrix;
      };
      b.prototype.toString = function() {
        return this._matrix.toString();
      };
      return b;
    }();
    r.Transform = d;
    var e = function() {
      function b(b) {
        this._node = b;
        this._mask = null;
        this._blendMode = 1;
      }
      Object.defineProperty(b.prototype, "filters", {get:function() {
        return this._filters;
      }, set:function(b) {
        this._filters = b;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "blendMode", {get:function() {
        return this._blendMode;
      }, set:function(b) {
        this._blendMode = b;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "mask", {get:function() {
        return this._mask;
      }, set:function(b) {
        this._mask && this._mask !== b && this._mask.removeFlags(4);
        (this._mask = b) && this._mask.setFlags(4);
      }, enumerable:!0, configurable:!0});
      b.prototype.toString = function() {
        return n[this._blendMode];
      };
      return b;
    }();
    r.Layer = e;
    l = function(b) {
      function a(d) {
        b.call(this);
        this._source = d;
        this._type = 3;
        this.ratio = 0;
      }
      __extends(a, b);
      a.prototype.getBounds = function(b) {
        void 0 === b && (b = !1);
        var a = this._bounds || (this._bounds = f.createEmpty());
        this.hasFlags(256) && (a.set(this._source.getBounds()), this.removeFlags(256));
        return b ? a.clone() : a;
      };
      Object.defineProperty(a.prototype, "source", {get:function() {
        return this._source;
      }, enumerable:!0, configurable:!0});
      a.prototype._propagateFlagsDown = function(b) {
        this.setFlags(b);
      };
      a.prototype.getChildren = function(b) {
        return[this._source];
      };
      return a;
    }(s);
    r.Shape = l;
    r.RendererOptions = function() {
      return function() {
        this.debug = !1;
        this.paintRenderable = !0;
        this.paintViewport = this.paintFlashing = this.paintDirtyRegion = this.paintBounds = !1;
        this.clear = !0;
      };
    }();
    (function(b) {
      b[b.Canvas2D = 0] = "Canvas2D";
      b[b.WebGL = 1] = "WebGL";
      b[b.Both = 2] = "Both";
      b[b.DOM = 3] = "DOM";
      b[b.SVG = 4] = "SVG";
    })(r.Backend || (r.Backend = {}));
    q = function(b) {
      function a(d, c, e) {
        b.call(this);
        this._container = d;
        this._stage = c;
        this._options = e;
        this._viewport = f.createSquare();
        this._devicePixelRatio = 1;
      }
      __extends(a, b);
      Object.defineProperty(a.prototype, "viewport", {set:function(b) {
        this._viewport.set(b);
      }, enumerable:!0, configurable:!0});
      a.prototype.render = function() {
        throw void 0;
      };
      a.prototype.resize = function() {
        throw void 0;
      };
      a.prototype.screenShot = function(b, a) {
        throw void 0;
      };
      return a;
    }(q);
    r.Renderer = q;
    q = function(b) {
      function a(d, c, e) {
        void 0 === e && (e = !1);
        b.call(this);
        this._preVisitor = new m;
        this._flags &= -3;
        this._type = 13;
        this._scaleMode = a.DEFAULT_SCALE;
        this._align = a.DEFAULT_ALIGN;
        this._content = new v;
        this._content._flags &= -3;
        this.addChild(this._content);
        this.setFlags(16);
        this.setBounds(new f(0, 0, d, c));
        e ? (this._dirtyRegion = new t(d, c), this._dirtyRegion.addDirtyRectangle(new f(0, 0, d, c))) : this._dirtyRegion = null;
        this._updateContentMatrix();
      }
      __extends(a, b);
      Object.defineProperty(a.prototype, "dirtyRegion", {get:function() {
        return this._dirtyRegion;
      }, enumerable:!0, configurable:!0});
      a.prototype.setBounds = function(a) {
        b.prototype.setBounds.call(this, a);
        this._updateContentMatrix();
        this._dispatchEvent(1);
        this._dirtyRegion && (this._dirtyRegion = new t(a.w, a.h), this._dirtyRegion.addDirtyRectangle(a));
      };
      Object.defineProperty(a.prototype, "content", {get:function() {
        return this._content;
      }, enumerable:!0, configurable:!0});
      a.prototype.readyToRender = function() {
        this._preVisitor.isDirty = !1;
        this._preVisitor.start(this, this._dirtyRegion);
        return this._preVisitor.isDirty ? !0 : !1;
      };
      Object.defineProperty(a.prototype, "align", {get:function() {
        return this._align;
      }, set:function(b) {
        this._align = b;
        this._updateContentMatrix();
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "scaleMode", {get:function() {
        return this._scaleMode;
      }, set:function(b) {
        this._scaleMode = b;
        this._updateContentMatrix();
      }, enumerable:!0, configurable:!0});
      a.prototype._updateContentMatrix = function() {
        if (this._scaleMode === a.DEFAULT_SCALE && this._align === a.DEFAULT_ALIGN) {
          this._content.getTransform().setMatrix(new c(1, 0, 0, 1, 0, 0));
        } else {
          var b = this.getBounds(), d = this._content.getBounds(), e = b.w / d.w, g = b.h / d.h;
          switch(this._scaleMode) {
            case 2:
              e = g = Math.max(e, g);
              break;
            case 4:
              e = g = 1;
              break;
            case 1:
              break;
            default:
              e = g = Math.min(e, g);
          }
          var m;
          m = this._align & 4 ? 0 : this._align & 8 ? b.w - d.w * e : (b.w - d.w * e) / 2;
          b = this._align & 1 ? 0 : this._align & 2 ? b.h - d.h * g : (b.h - d.h * g) / 2;
          this._content.getTransform().setMatrix(new c(e, 0, 0, g, m, b));
        }
      };
      a.DEFAULT_SCALE = 4;
      a.DEFAULT_ALIGN = 5;
      return a;
    }(v);
    r.Stage = q;
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    function f(a, b, d) {
      return a + (b - a) * d;
    }
    function c(a, b, d) {
      return f(a >> 24 & 255, b >> 24 & 255, d) << 24 | f(a >> 16 & 255, b >> 16 & 255, d) << 16 | f(a >> 8 & 255, b >> 8 & 255, d) << 8 | f(a & 255, b & 255, d);
    }
    var t = r.Geometry.Point, n = r.Geometry.Rectangle, a = r.Geometry.Matrix, g = k.ArrayUtilities.indexOf, q = function(a) {
      function b() {
        a.call(this);
        this._parents = [];
        this._renderableParents = [];
        this._invalidateEventListeners = null;
        this._flags &= -3;
        this._type = 33;
      }
      __extends(b, a);
      Object.defineProperty(b.prototype, "parents", {get:function() {
        return this._parents;
      }, enumerable:!0, configurable:!0});
      b.prototype.addParent = function(b) {
        g(this._parents, b);
        this._parents.push(b);
      };
      b.prototype.willRender = function() {
        for (var b = this._parents, a = 0;a < b.length;a++) {
          for (var d = b[a];d;) {
            if (d.isType(13)) {
              return!0;
            }
            if (!d.hasFlags(65536)) {
              break;
            }
            d = d._parent;
          }
        }
        return!1;
      };
      b.prototype.addRenderableParent = function(b) {
        g(this._renderableParents, b);
        this._renderableParents.push(b);
      };
      b.prototype.wrap = function() {
        for (var b, a = this._parents, d = 0;d < a.length;d++) {
          if (b = a[d], !b._parent) {
            return b;
          }
        }
        b = new r.Shape(this);
        this.addParent(b);
        return b;
      };
      b.prototype.invalidate = function() {
        this.setFlags(16);
        for (var b = this._parents, a = 0;a < b.length;a++) {
          b[a].invalidate();
        }
        b = this._renderableParents;
        for (a = 0;a < b.length;a++) {
          b[a].invalidate();
        }
        if (b = this._invalidateEventListeners) {
          for (a = 0;a < b.length;a++) {
            b[a](this);
          }
        }
      };
      b.prototype.addInvalidateEventListener = function(b) {
        this._invalidateEventListeners || (this._invalidateEventListeners = []);
        g(this._invalidateEventListeners, b);
        this._invalidateEventListeners.push(b);
      };
      b.prototype.getBounds = function(b) {
        void 0 === b && (b = !1);
        return b ? this._bounds.clone() : this._bounds;
      };
      b.prototype.getChildren = function(b) {
        return null;
      };
      b.prototype._propagateFlagsUp = function(b) {
        if (0 !== b && !this.hasFlags(b)) {
          for (var a = 0;a < this._parents.length;a++) {
            this._parents[a]._propagateFlagsUp(b);
          }
        }
      };
      b.prototype.render = function(b, a, d, c, e) {
      };
      return b;
    }(r.Node);
    r.Renderable = q;
    var l = function(a) {
      function b(b, d) {
        a.call(this);
        this.setBounds(b);
        this.render = d;
      }
      __extends(b, a);
      return b;
    }(q);
    r.CustomRenderable = l;
    (function(a) {
      a[a.Idle = 1] = "Idle";
      a[a.Playing = 2] = "Playing";
      a[a.Paused = 3] = "Paused";
      a[a.Ended = 4] = "Ended";
    })(r.RenderableVideoState || (r.RenderableVideoState = {}));
    l = function(a) {
      function b(d, c) {
        a.call(this);
        this._flags = 1048592;
        this._lastPausedTime = this._lastTimeInvalidated = 0;
        this._pauseHappening = this._seekHappening = !1;
        this._isDOMElement = !0;
        this.setBounds(new n(0, 0, 1, 1));
        this._assetId = d;
        this._eventSerializer = c;
        var g = document.createElement("video"), m = this._handleVideoEvent.bind(this);
        g.preload = "metadata";
        g.addEventListener("play", m);
        g.addEventListener("pause", m);
        g.addEventListener("ended", m);
        g.addEventListener("loadeddata", m);
        g.addEventListener("progress", m);
        g.addEventListener("suspend", m);
        g.addEventListener("loadedmetadata", m);
        g.addEventListener("error", m);
        g.addEventListener("seeking", m);
        g.addEventListener("seeked", m);
        g.addEventListener("canplay", m);
        g.style.position = "absolute";
        this._video = g;
        this._videoEventHandler = m;
        b._renderableVideos.push(this);
        "undefined" !== typeof registerInspectorAsset && registerInspectorAsset(-1, -1, this);
        this._state = 1;
      }
      __extends(b, a);
      Object.defineProperty(b.prototype, "video", {get:function() {
        return this._video;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "state", {get:function() {
        return this._state;
      }, enumerable:!0, configurable:!0});
      b.prototype.play = function() {
        this._state = 2;
        this._video.play();
      };
      b.prototype.pause = function() {
        this._state = 3;
        this._video.pause();
      };
      b.prototype._handleVideoEvent = function(b) {
        var a = null, d = this._video;
        switch(b.type) {
          case "play":
            if (!this._pauseHappening) {
              return;
            }
            b = 7;
            break;
          case "pause":
            if (2 === this._state) {
              d.play();
              return;
            }
            b = 6;
            this._pauseHappening = !0;
            break;
          case "ended":
            this._state = 4;
            this._notifyNetStream(3, a);
            b = 4;
            break;
          case "loadeddata":
            this._pauseHappening = !1;
            this._notifyNetStream(2, a);
            this.play();
            return;
          case "canplay":
            if (this._pauseHappening) {
              return;
            }
            b = 5;
            break;
          case "progress":
            b = 10;
            break;
          case "suspend":
            return;
          case "loadedmetadata":
            b = 1;
            a = {videoWidth:d.videoWidth, videoHeight:d.videoHeight, duration:d.duration};
            break;
          case "error":
            b = 11;
            a = {code:d.error.code};
            break;
          case "seeking":
            if (!this._seekHappening) {
              return;
            }
            b = 8;
            break;
          case "seeked":
            if (!this._seekHappening) {
              return;
            }
            b = 9;
            this._seekHappening = !1;
            break;
          default:
            return;
        }
        this._notifyNetStream(b, a);
      };
      b.prototype._notifyNetStream = function(b, a) {
        this._eventSerializer.sendVideoPlaybackEvent(this._assetId, b, a);
      };
      b.prototype.processControlRequest = function(b, a) {
        var d = this._video;
        switch(b) {
          case 1:
            d.src = a.url;
            this.play();
            this._notifyNetStream(0, null);
            break;
          case 9:
            d.paused && d.play();
            break;
          case 2:
            d && (a.paused && !d.paused ? (isNaN(a.time) ? this._lastPausedTime = d.currentTime : (0 !== d.seekable.length && (d.currentTime = a.time), this._lastPausedTime = a.time), this.pause()) : !a.paused && d.paused && (this.play(), isNaN(a.time) || this._lastPausedTime === a.time || 0 === d.seekable.length || (d.currentTime = a.time)));
            break;
          case 3:
            d && 0 !== d.seekable.length && (this._seekHappening = !0, d.currentTime = a.time);
            break;
          case 4:
            return d ? d.currentTime : 0;
          case 5:
            return d ? d.duration : 0;
          case 6:
            d && (d.volume = a.volume);
            break;
          case 7:
            if (!d) {
              return 0;
            }
            var c = -1;
            if (d.buffered) {
              for (var e = 0;e < d.buffered.length;e++) {
                c = Math.max(c, d.buffered.end(e));
              }
            } else {
              c = d.duration;
            }
            return Math.round(500 * c);
          case 8:
            return d ? Math.round(500 * d.duration) : 0;
        }
      };
      b.prototype.checkForUpdate = function() {
        this._lastTimeInvalidated !== this._video.currentTime && (this._isDOMElement || this.invalidate());
        this._lastTimeInvalidated = this._video.currentTime;
      };
      b.checkForVideoUpdates = function() {
        for (var a = b._renderableVideos, d = 0;d < a.length;d++) {
          var c = a[d];
          c.willRender() ? (c._video.parentElement || c.invalidate(), c._video.style.zIndex = c.parents[0].depth + "") : c._video.parentElement && c._dispatchEvent(2);
          a[d].checkForUpdate();
        }
      };
      b.prototype.render = function(b, a, d) {
        (a = this._video) && 0 < a.videoWidth && b.drawImage(a, 0, 0, a.videoWidth, a.videoHeight, 0, 0, this._bounds.w, this._bounds.h);
      };
      b._renderableVideos = [];
      return b;
    }(q);
    r.RenderableVideo = l;
    l = function(a) {
      function b(b, d) {
        a.call(this);
        this._flags = 1048592;
        this.properties = {};
        this.setBounds(d);
        b instanceof HTMLCanvasElement ? this._initializeSourceCanvas(b) : this._sourceImage = b;
      }
      __extends(b, a);
      b.FromDataBuffer = function(a, d, c) {
        var e = document.createElement("canvas");
        e.width = c.w;
        e.height = c.h;
        c = new b(e, c);
        c.updateFromDataBuffer(a, d);
        return c;
      };
      b.FromNode = function(a, d, c, e, g) {
        var m = document.createElement("canvas"), f = a.getBounds();
        m.width = f.w;
        m.height = f.h;
        m = new b(m, f);
        m.drawNode(a, d, c, e, g);
        return m;
      };
      b.FromImage = function(a) {
        return new b(a, new n(0, 0, -1, -1));
      };
      b.prototype.updateFromDataBuffer = function(b, a) {
        if (r.imageUpdateOption.value) {
          var d = a.buffer;
          if (4 !== b && 5 !== b && 6 !== b) {
            var c = this._bounds, e = this._imageData;
            e && e.width === c.w && e.height === c.h || (e = this._imageData = this._context.createImageData(c.w, c.h));
            r.imageConvertOption.value && (d = new Int32Array(d), c = new Int32Array(e.data.buffer), k.ColorUtilities.convertImage(b, 3, d, c));
            this._ensureSourceCanvas();
            this._context.putImageData(e, 0, 0);
          }
          this.invalidate();
        }
      };
      b.prototype.readImageData = function(b) {
        b.writeRawBytes(this.imageData.data);
      };
      b.prototype.render = function(b, a, d) {
        this.renderSource ? b.drawImage(this.renderSource, 0, 0) : this._renderFallback(b);
      };
      b.prototype.drawNode = function(b, a, d, c, e) {
        d = r.Canvas2D;
        c = this.getBounds();
        (new d.Canvas2DRenderer(this._canvas, null)).renderNode(b, e || c, a);
      };
      b.prototype._initializeSourceCanvas = function(b) {
        this._canvas = b;
        this._context = this._canvas.getContext("2d");
      };
      b.prototype._ensureSourceCanvas = function() {
        if (!this._canvas) {
          var b = document.createElement("canvas"), a = this._bounds;
          b.width = a.w;
          b.height = a.h;
          this._initializeSourceCanvas(b);
        }
      };
      Object.defineProperty(b.prototype, "imageData", {get:function() {
        this._canvas || (this._ensureSourceCanvas(), this._context.drawImage(this._sourceImage, 0, 0), this._sourceImage = null);
        return this._context.getImageData(0, 0, this._bounds.w, this._bounds.h);
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "renderSource", {get:function() {
        return this._canvas || this._sourceImage;
      }, enumerable:!0, configurable:!0});
      b.prototype._renderFallback = function(b) {
      };
      return b;
    }(q);
    r.RenderableBitmap = l;
    (function(a) {
      a[a.Fill = 0] = "Fill";
      a[a.Stroke = 1] = "Stroke";
      a[a.StrokeFill = 2] = "StrokeFill";
    })(r.PathType || (r.PathType = {}));
    var u = function() {
      return function(a, b, d, c) {
        this.type = a;
        this.style = b;
        this.smoothImage = d;
        this.strokeProperties = c;
        this.path = new Path2D;
      };
    }();
    r.StyledPath = u;
    var m = function() {
      return function(a, b, d, c, g) {
        this.thickness = a;
        this.scaleMode = b;
        this.capsStyle = d;
        this.jointsStyle = c;
        this.miterLimit = g;
      };
    }();
    r.StrokeProperties = m;
    var s = function(d) {
      function b(b, a, c, g) {
        d.call(this);
        this._flags = 6291472;
        this.properties = {};
        this.setBounds(g);
        this._id = b;
        this._pathData = a;
        this._textures = c;
        c.length && this.setFlags(1048576);
      }
      __extends(b, d);
      b.prototype.update = function(b, a, d) {
        this.setBounds(d);
        this._pathData = b;
        this._paths = null;
        this._textures = a;
        this.setFlags(1048576);
        this.invalidate();
      };
      b.prototype.render = function(b, a, d, c, e) {
        void 0 === c && (c = !1);
        void 0 === e && (e = !1);
        b.fillStyle = b.strokeStyle = "transparent";
        a = this._deserializePaths(this._pathData, b, a);
        for (d = 0;d < a.length;d++) {
          var g = a[d];
          b.mozImageSmoothingEnabled = b.msImageSmoothingEnabled = b.imageSmoothingEnabled = g.smoothImage;
          if (0 === g.type) {
            c ? b.clip(g.path, "evenodd") : (b.fillStyle = e ? "#000000" : g.style, b.fill(g.path, "evenodd"), b.fillStyle = "transparent");
          } else {
            if (!c && !e) {
              b.strokeStyle = g.style;
              var m = 1;
              g.strokeProperties && (m = g.strokeProperties.scaleMode, b.lineWidth = g.strokeProperties.thickness, b.lineCap = g.strokeProperties.capsStyle, b.lineJoin = g.strokeProperties.jointsStyle, b.miterLimit = g.strokeProperties.miterLimit);
              var f = b.lineWidth;
              (f = 1 === f || 3 === f) && b.translate(.5, .5);
              b.flashStroke(g.path, m);
              f && b.translate(-.5, -.5);
              b.strokeStyle = "transparent";
            }
          }
        }
      };
      b.prototype._deserializePaths = function(a, d, c) {
        if (this._paths) {
          return this._paths;
        }
        c = this._paths = [];
        var e = null, g = null, f = 0, l = 0, q, s, n = !1, u = 0, v = 0, r = a.commands, t = a.coordinates, z = a.styles, y = z.position = 0;
        a = a.commandsPosition;
        for (var A = 0;A < a;A++) {
          switch(r[A]) {
            case 9:
              n && e && (e.lineTo(u, v), g && g.lineTo(u, v));
              n = !0;
              f = u = t[y++] / 20;
              l = v = t[y++] / 20;
              e && e.moveTo(f, l);
              g && g.moveTo(f, l);
              break;
            case 10:
              f = t[y++] / 20;
              l = t[y++] / 20;
              e && e.lineTo(f, l);
              g && g.lineTo(f, l);
              break;
            case 11:
              q = t[y++] / 20;
              s = t[y++] / 20;
              f = t[y++] / 20;
              l = t[y++] / 20;
              e && e.quadraticCurveTo(q, s, f, l);
              g && g.quadraticCurveTo(q, s, f, l);
              break;
            case 12:
              q = t[y++] / 20;
              s = t[y++] / 20;
              var C = t[y++] / 20, x = t[y++] / 20, f = t[y++] / 20, l = t[y++] / 20;
              e && e.bezierCurveTo(q, s, C, x, f, l);
              g && g.bezierCurveTo(q, s, C, x, f, l);
              break;
            case 1:
              e = this._createPath(0, k.ColorUtilities.rgbaToCSSStyle(z.readUnsignedInt()), !1, null, f, l);
              break;
            case 3:
              q = this._readBitmap(z, d);
              e = this._createPath(0, q.style, q.smoothImage, null, f, l);
              break;
            case 2:
              e = this._createPath(0, this._readGradient(z, d), !1, null, f, l);
              break;
            case 4:
              e = null;
              break;
            case 5:
              g = k.ColorUtilities.rgbaToCSSStyle(z.readUnsignedInt());
              z.position += 1;
              q = z.readByte();
              s = b.LINE_CAPS_STYLES[z.readByte()];
              C = b.LINE_JOINTS_STYLES[z.readByte()];
              q = new m(t[y++] / 20, q, s, C, z.readByte());
              g = this._createPath(1, g, !1, q, f, l);
              break;
            case 6:
              g = this._createPath(2, this._readGradient(z, d), !1, null, f, l);
              break;
            case 7:
              q = this._readBitmap(z, d);
              g = this._createPath(2, q.style, q.smoothImage, null, f, l);
              break;
            case 8:
              g = null;
          }
        }
        n && e && (e.lineTo(u, v), g && g.lineTo(u, v));
        this._pathData = null;
        return c;
      };
      b.prototype._createPath = function(b, a, d, c, e, g) {
        b = new u(b, a, d, c);
        this._paths.push(b);
        b.path.moveTo(e, g);
        return b.path;
      };
      b.prototype._readMatrix = function(b) {
        return new a(b.readFloat(), b.readFloat(), b.readFloat(), b.readFloat(), b.readFloat(), b.readFloat());
      };
      b.prototype._readGradient = function(b, a) {
        var d = b.readUnsignedByte(), c = 2 * b.readShort() / 255, e = this._readMatrix(b), d = 16 === d ? a.createLinearGradient(-1, 0, 1, 0) : a.createRadialGradient(c, 0, 0, 0, 0, 1);
        d.setTransform && d.setTransform(e.toSVGMatrix());
        e = b.readUnsignedByte();
        for (c = 0;c < e;c++) {
          var g = b.readUnsignedByte() / 255, m = k.ColorUtilities.rgbaToCSSStyle(b.readUnsignedInt());
          d.addColorStop(g, m);
        }
        b.position += 2;
        return d;
      };
      b.prototype._readBitmap = function(b, a) {
        var d = b.readUnsignedInt(), c = this._readMatrix(b), e = b.readBoolean() ? "repeat" : "no-repeat", g = b.readBoolean();
        (d = this._textures[d]) ? (e = a.createPattern(d.renderSource, e), e.setTransform(c.toSVGMatrix())) : e = null;
        return{style:e, smoothImage:g};
      };
      b.prototype._renderFallback = function(b) {
        this.fillStyle || (this.fillStyle = k.ColorStyle.randomStyle());
        var a = this._bounds;
        b.save();
        b.beginPath();
        b.lineWidth = 2;
        b.fillStyle = this.fillStyle;
        b.fillRect(a.x, a.y, a.w, a.h);
        b.restore();
      };
      b.LINE_CAPS_STYLES = ["round", "butt", "square"];
      b.LINE_JOINTS_STYLES = ["round", "bevel", "miter"];
      return b;
    }(q);
    r.RenderableShape = s;
    l = function(d) {
      function b() {
        d.apply(this, arguments);
        this._flags = 7340048;
        this._morphPaths = Object.create(null);
      }
      __extends(b, d);
      b.prototype._deserializePaths = function(b, a, d) {
        if (this._morphPaths[d]) {
          return this._morphPaths[d];
        }
        var e = this._morphPaths[d] = [], g = null, l = null, q = 0, n = 0, u, v, r = !1, t = 0, P = 0, H = b.commands, z = b.coordinates, y = b.morphCoordinates, A = b.styles, C = b.morphStyles;
        A.position = 0;
        var x = C.position = 0;
        b = b.commandsPosition;
        for (var E = 0;E < b;E++) {
          switch(H[E]) {
            case 9:
              r && g && (g.lineTo(t, P), l && l.lineTo(t, P));
              r = !0;
              q = t = f(z[x], y[x++], d) / 20;
              n = P = f(z[x], y[x++], d) / 20;
              g && g.moveTo(q, n);
              l && l.moveTo(q, n);
              break;
            case 10:
              q = f(z[x], y[x++], d) / 20;
              n = f(z[x], y[x++], d) / 20;
              g && g.lineTo(q, n);
              l && l.lineTo(q, n);
              break;
            case 11:
              u = f(z[x], y[x++], d) / 20;
              v = f(z[x], y[x++], d) / 20;
              q = f(z[x], y[x++], d) / 20;
              n = f(z[x], y[x++], d) / 20;
              g && g.quadraticCurveTo(u, v, q, n);
              l && l.quadraticCurveTo(u, v, q, n);
              break;
            case 12:
              u = f(z[x], y[x++], d) / 20;
              v = f(z[x], y[x++], d) / 20;
              var B = f(z[x], y[x++], d) / 20, D = f(z[x], y[x++], d) / 20, q = f(z[x], y[x++], d) / 20, n = f(z[x], y[x++], d) / 20;
              g && g.bezierCurveTo(u, v, B, D, q, n);
              l && l.bezierCurveTo(u, v, B, D, q, n);
              break;
            case 1:
              g = this._createMorphPath(0, d, k.ColorUtilities.rgbaToCSSStyle(c(A.readUnsignedInt(), C.readUnsignedInt(), d)), !1, null, q, n);
              break;
            case 3:
              u = this._readMorphBitmap(A, C, d, a);
              g = this._createMorphPath(0, d, u.style, u.smoothImage, null, q, n);
              break;
            case 2:
              u = this._readMorphGradient(A, C, d, a);
              g = this._createMorphPath(0, d, u, !1, null, q, n);
              break;
            case 4:
              g = null;
              break;
            case 5:
              u = f(z[x], y[x++], d) / 20;
              l = k.ColorUtilities.rgbaToCSSStyle(c(A.readUnsignedInt(), C.readUnsignedInt(), d));
              A.position += 1;
              v = A.readByte();
              B = s.LINE_CAPS_STYLES[A.readByte()];
              D = s.LINE_JOINTS_STYLES[A.readByte()];
              u = new m(u, v, B, D, A.readByte());
              l = this._createMorphPath(1, d, l, !1, u, q, n);
              break;
            case 6:
              u = this._readMorphGradient(A, C, d, a);
              l = this._createMorphPath(2, d, u, !1, null, q, n);
              break;
            case 7:
              u = this._readMorphBitmap(A, C, d, a);
              l = this._createMorphPath(2, d, u.style, u.smoothImage, null, q, n);
              break;
            case 8:
              l = null;
          }
        }
        r && g && (g.lineTo(t, P), l && l.lineTo(t, P));
        return e;
      };
      b.prototype._createMorphPath = function(b, a, d, c, e, g, m) {
        b = new u(b, d, c, e);
        this._morphPaths[a].push(b);
        b.path.moveTo(g, m);
        return b.path;
      };
      b.prototype._readMorphMatrix = function(b, d, c) {
        return new a(f(b.readFloat(), d.readFloat(), c), f(b.readFloat(), d.readFloat(), c), f(b.readFloat(), d.readFloat(), c), f(b.readFloat(), d.readFloat(), c), f(b.readFloat(), d.readFloat(), c), f(b.readFloat(), d.readFloat(), c));
      };
      b.prototype._readMorphGradient = function(b, a, d, e) {
        var g = b.readUnsignedByte(), m = 2 * b.readShort() / 255, l = this._readMorphMatrix(b, a, d);
        e = 16 === g ? e.createLinearGradient(-1, 0, 1, 0) : e.createRadialGradient(m, 0, 0, 0, 0, 1);
        e.setTransform && e.setTransform(l.toSVGMatrix());
        l = b.readUnsignedByte();
        for (g = 0;g < l;g++) {
          var m = f(b.readUnsignedByte() / 255, a.readUnsignedByte() / 255, d), q = c(b.readUnsignedInt(), a.readUnsignedInt(), d), q = k.ColorUtilities.rgbaToCSSStyle(q);
          e.addColorStop(m, q);
        }
        b.position += 2;
        return e;
      };
      b.prototype._readMorphBitmap = function(b, a, d, c) {
        var e = b.readUnsignedInt();
        a = this._readMorphMatrix(b, a, d);
        d = b.readBoolean() ? "repeat" : "no-repeat";
        b = b.readBoolean();
        c = c.createPattern(this._textures[e]._canvas, d);
        c.setTransform(a.toSVGMatrix());
        return{style:c, smoothImage:b};
      };
      return b;
    }(s);
    r.RenderableMorphShape = l;
    var v = function() {
      function a() {
        this.align = this.leading = this.descent = this.ascent = this.width = this.y = this.x = 0;
        this.runs = [];
      }
      a._getMeasureContext = function() {
        a._measureContext || (a._measureContext = document.createElement("canvas").getContext("2d"));
        return a._measureContext;
      };
      a.prototype.addRun = function(b, c, g, m) {
        if (g) {
          var f = a._getMeasureContext();
          f.font = b;
          f = f.measureText(g).width | 0;
          this.runs.push(new d(b, c, g, f, m));
          this.width += f;
        }
      };
      a.prototype.wrap = function(b) {
        var c = [this], g = this.runs, m = this;
        m.width = 0;
        m.runs = [];
        for (var f = a._getMeasureContext(), l = 0;l < g.length;l++) {
          var k = g[l], q = k.text;
          k.text = "";
          k.width = 0;
          f.font = k.font;
          for (var s = b, n = q.split(/[\s.-]/), u = 0, v = 0;v < n.length;v++) {
            var r = n[v], t = q.substr(u, r.length + 1), H = f.measureText(t).width | 0;
            if (H > s) {
              do {
                if (k.text && (m.runs.push(k), m.width += k.width, k = new d(k.font, k.fillStyle, "", 0, k.underline), s = new a, s.y = m.y + m.descent + m.leading + m.ascent | 0, s.ascent = m.ascent, s.descent = m.descent, s.leading = m.leading, s.align = m.align, c.push(s), m = s), s = b - H, 0 > s) {
                  var H = t.length, z, y;
                  do {
                    H--;
                    if (1 > H) {
                      throw Error("Shall never happen: bad maxWidth?");
                    }
                    z = t.substr(0, H);
                    y = f.measureText(z).width | 0;
                  } while (y > b);
                  k.text = z;
                  k.width = y;
                  t = t.substr(H);
                  H = f.measureText(t).width | 0;
                }
              } while (0 > s);
            } else {
              s -= H;
            }
            k.text += t;
            k.width += H;
            u += r.length + 1;
          }
          m.runs.push(k);
          m.width += k.width;
        }
        return c;
      };
      return a;
    }();
    r.TextLine = v;
    var d = function() {
      return function(a, b, d, c, g) {
        void 0 === a && (a = "");
        void 0 === b && (b = "");
        void 0 === d && (d = "");
        void 0 === c && (c = 0);
        void 0 === g && (g = !1);
        this.font = a;
        this.fillStyle = b;
        this.text = d;
        this.width = c;
        this.underline = g;
      };
    }();
    r.TextRun = d;
    l = function(d) {
      function b(b) {
        d.call(this);
        this._flags = 1048592;
        this.properties = {};
        this._textBounds = b.clone();
        this._textRunData = null;
        this._plainText = "";
        this._borderColor = this._backgroundColor = 0;
        this._matrix = a.createIdentity();
        this._coords = null;
        this._scrollV = 1;
        this._scrollH = 0;
        this.textRect = b.clone();
        this.lines = [];
        this.setBounds(b);
      }
      __extends(b, d);
      b.prototype.setBounds = function(b) {
        d.prototype.setBounds.call(this, b);
        this._textBounds.set(b);
        this.textRect.setElements(b.x + 2, b.y + 2, b.w - 2, b.h - 2);
      };
      b.prototype.setContent = function(b, a, d, c) {
        this._textRunData = a;
        this._plainText = b;
        this._matrix.set(d);
        this._coords = c;
        this.lines = [];
      };
      b.prototype.setStyle = function(b, a, d, c) {
        this._backgroundColor = b;
        this._borderColor = a;
        this._scrollV = d;
        this._scrollH = c;
      };
      b.prototype.reflow = function(b, a) {
        var d = this._textRunData;
        if (d) {
          for (var c = this._bounds, e = c.w - 4, g = this._plainText, m = this.lines, f = new v, l = 0, q = 0, s = 0, n = 0, u = 0, r = -1;d.position < d.length;) {
            var t = d.readInt(), y = d.readInt(), A = d.readInt(), C = d.readUTF(), x = d.readInt(), E = d.readInt(), B = d.readInt();
            x > s && (s = x);
            E > n && (n = E);
            B > u && (u = B);
            x = d.readBoolean();
            E = "";
            d.readBoolean() && (E += "italic ");
            x && (E += "bold ");
            A = E + A + "px " + C;
            C = d.readInt();
            C = k.ColorUtilities.rgbToHex(C);
            x = d.readInt();
            -1 === r && (r = x);
            d.readBoolean();
            d.readInt();
            d.readInt();
            d.readInt();
            d.readInt();
            d.readInt();
            for (var x = d.readBoolean(), D = "", E = !1;!E;t++) {
              E = t >= y - 1;
              B = g[t];
              if ("\r" !== B && "\n" !== B && (D += B, t < g.length - 1)) {
                continue;
              }
              f.addRun(A, C, D, x);
              if (f.runs.length) {
                m.length && (l += u);
                l += s;
                f.y = l | 0;
                l += n;
                f.ascent = s;
                f.descent = n;
                f.leading = u;
                f.align = r;
                if (a && f.width > e) {
                  for (f = f.wrap(e), D = 0;D < f.length;D++) {
                    var F = f[D], l = F.y + F.descent + F.leading;
                    m.push(F);
                    F.width > q && (q = F.width);
                  }
                } else {
                  m.push(f), f.width > q && (q = f.width);
                }
                f = new v;
              } else {
                l += s + n + u;
              }
              D = "";
              if (E) {
                u = n = s = 0;
                r = -1;
                break;
              }
              "\r" === B && "\n" === g[t + 1] && t++;
            }
            f.addRun(A, C, D, x);
          }
          d = g[g.length - 1];
          "\r" !== d && "\n" !== d || m.push(f);
          d = this.textRect;
          d.w = q;
          d.h = l;
          if (b) {
            if (!a) {
              e = q;
              q = c.w;
              switch(b) {
                case 1:
                  d.x = q - (e + 4) >> 1;
                  break;
                case 3:
                  d.x = q - (e + 4);
              }
              this._textBounds.setElements(d.x - 2, d.y - 2, d.w + 4, d.h + 4);
              c.w = e + 4;
            }
            c.x = d.x - 2;
            c.h = l + 4;
          } else {
            this._textBounds = c;
          }
          for (t = 0;t < m.length;t++) {
            if (c = m[t], c.width < e) {
              switch(c.align) {
                case 1:
                  c.x = e - c.width | 0;
                  break;
                case 2:
                  c.x = (e - c.width) / 2 | 0;
              }
            }
          }
          this.invalidate();
        }
      };
      b.roundBoundPoints = function(b) {
        for (var a = 0;a < b.length;a++) {
          var d = b[a];
          d.x = Math.floor(d.x + .1) + .5;
          d.y = Math.floor(d.y + .1) + .5;
        }
      };
      b.prototype.render = function(d) {
        d.save();
        var c = this._textBounds;
        this._backgroundColor && (d.fillStyle = k.ColorUtilities.rgbaToCSSStyle(this._backgroundColor), d.fillRect(c.x, c.y, c.w, c.h));
        if (this._borderColor) {
          d.strokeStyle = k.ColorUtilities.rgbaToCSSStyle(this._borderColor);
          d.lineCap = "square";
          d.lineWidth = 1;
          var e = b.absoluteBoundPoints, g = d.currentTransform;
          g ? (c = c.clone(), (new a(g.a, g.b, g.c, g.d, g.e, g.f)).transformRectangle(c, e), d.setTransform(1, 0, 0, 1, 0, 0)) : (e[0].x = c.x, e[0].y = c.y, e[1].x = c.x + c.w, e[1].y = c.y, e[2].x = c.x + c.w, e[2].y = c.y + c.h, e[3].x = c.x, e[3].y = c.y + c.h);
          b.roundBoundPoints(e);
          c = new Path2D;
          c.moveTo(e[0].x, e[0].y);
          c.lineTo(e[1].x, e[1].y);
          c.lineTo(e[2].x, e[2].y);
          c.lineTo(e[3].x, e[3].y);
          c.lineTo(e[0].x, e[0].y);
          d.stroke(c);
          g && d.setTransform(g.a, g.b, g.c, g.d, g.e, g.f);
        }
        this._coords ? this._renderChars(d) : this._renderLines(d);
        d.restore();
      };
      b.prototype._renderChars = function(b) {
        if (this._matrix) {
          var a = this._matrix;
          b.transform(a.a, a.b, a.c, a.d, a.tx, a.ty);
        }
        for (var a = this.lines, d = this._coords, c = d.position = 0;c < a.length;c++) {
          for (var e = a[c].runs, g = 0;g < e.length;g++) {
            var m = e[g];
            b.font = m.font;
            b.fillStyle = m.fillStyle;
            for (var m = m.text, f = 0;f < m.length;f++) {
              var l = d.readInt() / 20, k = d.readInt() / 20;
              b.fillText(m[f], l, k);
            }
          }
        }
      };
      b.prototype._renderLines = function(b) {
        var a = this._textBounds;
        b.beginPath();
        b.rect(a.x + 2, a.y + 2, a.w - 4, a.h - 4);
        b.clip();
        b.translate(a.x - this._scrollH + 2, a.y + 2);
        for (var d = this.lines, c = this._scrollV, e = 0, g = 0;g < d.length;g++) {
          var m = d[g], f = m.x, l = m.y;
          if (g + 1 < c) {
            e = l + m.descent + m.leading;
          } else {
            l -= e;
            if (g + 1 - c && l > a.h) {
              break;
            }
            for (var k = m.runs, q = 0;q < k.length;q++) {
              var s = k[q];
              b.font = s.font;
              b.fillStyle = s.fillStyle;
              s.underline && b.fillRect(f, l + m.descent / 2 | 0, s.width, 1);
              b.textAlign = "left";
              b.textBaseline = "alphabetic";
              b.fillText(s.text, f, l);
              f += s.width;
            }
          }
        }
      };
      b.absoluteBoundPoints = [new t(0, 0), new t(0, 0), new t(0, 0), new t(0, 0)];
      return b;
    }(q);
    r.RenderableText = l;
    q = function(a) {
      function b(b, d) {
        a.call(this);
        this._flags = 3145728;
        this.properties = {};
        this.setBounds(new n(0, 0, b, d));
      }
      __extends(b, a);
      Object.defineProperty(b.prototype, "text", {get:function() {
        return this._text;
      }, set:function(b) {
        this._text = b;
      }, enumerable:!0, configurable:!0});
      b.prototype.render = function(b, a, d) {
        b.save();
        b.textBaseline = "top";
        b.fillStyle = "white";
        b.fillText(this.text, 0, 0);
        b.restore();
      };
      return b;
    }(q);
    r.Label = q;
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    var f = k.ColorUtilities.clampByte, c = function() {
      return function() {
      };
    }();
    r.Filter = c;
    var t = function(c) {
      function a(a, f, l) {
        c.call(this);
        this.blurX = a;
        this.blurY = f;
        this.quality = l;
      }
      __extends(a, c);
      return a;
    }(c);
    r.BlurFilter = t;
    t = function(c) {
      function a(a, f, l, k, m, s, v, d, e, b, h) {
        c.call(this);
        this.alpha = a;
        this.angle = f;
        this.blurX = l;
        this.blurY = k;
        this.color = m;
        this.distance = s;
        this.hideObject = v;
        this.inner = d;
        this.knockout = e;
        this.quality = b;
        this.strength = h;
      }
      __extends(a, c);
      return a;
    }(c);
    r.DropshadowFilter = t;
    c = function(c) {
      function a(a, f, l, k, m, s, v, d) {
        c.call(this);
        this.alpha = a;
        this.blurX = f;
        this.blurY = l;
        this.color = k;
        this.inner = m;
        this.knockout = s;
        this.quality = v;
        this.strength = d;
      }
      __extends(a, c);
      return a;
    }(c);
    r.GlowFilter = c;
    (function(c) {
      c[c.Unknown = 0] = "Unknown";
      c[c.Identity = 1] = "Identity";
    })(r.ColorMatrixType || (r.ColorMatrixType = {}));
    c = function() {
      function c(a) {
        this._data = new Float32Array(a);
        this._type = 0;
      }
      c.prototype.clone = function() {
        var a = new c(this._data);
        a._type = this._type;
        return a;
      };
      c.prototype.set = function(a) {
        this._data.set(a._data);
        this._type = a._type;
      };
      c.prototype.toWebGLMatrix = function() {
        return new Float32Array(this._data);
      };
      c.prototype.asWebGLMatrix = function() {
        return this._data.subarray(0, 16);
      };
      c.prototype.asWebGLVector = function() {
        return this._data.subarray(16, 20);
      };
      c.prototype.isIdentity = function() {
        if (this._type & 1) {
          return!0;
        }
        var a = this._data;
        return 1 == a[0] && 0 == a[1] && 0 == a[2] && 0 == a[3] && 0 == a[4] && 1 == a[5] && 0 == a[6] && 0 == a[7] && 0 == a[8] && 0 == a[9] && 1 == a[10] && 0 == a[11] && 0 == a[12] && 0 == a[13] && 0 == a[14] && 1 == a[15] && 0 == a[16] && 0 == a[17] && 0 == a[18] && 0 == a[19];
      };
      c.createIdentity = function() {
        var a = new c([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0]);
        a._type = 1;
        return a;
      };
      c.prototype.setMultipliersAndOffsets = function(a, c, f, l, k, m, s, n) {
        for (var d = this._data, e = 0;e < d.length;e++) {
          d[e] = 0;
        }
        d[0] = a;
        d[5] = c;
        d[10] = f;
        d[15] = l;
        d[16] = k / 255;
        d[17] = m / 255;
        d[18] = s / 255;
        d[19] = n / 255;
        this._type = 0;
      };
      c.prototype.transformRGBA = function(a) {
        var c = a >> 24 & 255, k = a >> 16 & 255, l = a >> 8 & 255, n = a & 255, m = this._data;
        a = f(c * m[0] + k * m[1] + l * m[2] + n * m[3] + 255 * m[16]);
        var s = f(c * m[4] + k * m[5] + l * m[6] + n * m[7] + 255 * m[17]), v = f(c * m[8] + k * m[9] + l * m[10] + n * m[11] + 255 * m[18]), c = f(c * m[12] + k * m[13] + l * m[14] + n * m[15] + 255 * m[19]);
        return a << 24 | s << 16 | v << 8 | c;
      };
      c.prototype.multiply = function(a) {
        if (!(a._type & 1)) {
          var c = this._data, f = a._data;
          a = c[0];
          var l = c[1], k = c[2], m = c[3], s = c[4], n = c[5], d = c[6], e = c[7], b = c[8], h = c[9], p = c[10], r = c[11], G = c[12], U = c[13], t = c[14], Q = c[15], fa = c[16], ca = c[17], ga = c[18], ha = c[19], W = f[0], P = f[1], H = f[2], z = f[3], y = f[4], A = f[5], C = f[6], x = f[7], E = f[8], B = f[9], D = f[10], F = f[11], I = f[12], J = f[13], K = f[14], L = f[15], M = f[16], N = f[17], O = f[18], f = f[19];
          c[0] = a * W + s * P + b * H + G * z;
          c[1] = l * W + n * P + h * H + U * z;
          c[2] = k * W + d * P + p * H + t * z;
          c[3] = m * W + e * P + r * H + Q * z;
          c[4] = a * y + s * A + b * C + G * x;
          c[5] = l * y + n * A + h * C + U * x;
          c[6] = k * y + d * A + p * C + t * x;
          c[7] = m * y + e * A + r * C + Q * x;
          c[8] = a * E + s * B + b * D + G * F;
          c[9] = l * E + n * B + h * D + U * F;
          c[10] = k * E + d * B + p * D + t * F;
          c[11] = m * E + e * B + r * D + Q * F;
          c[12] = a * I + s * J + b * K + G * L;
          c[13] = l * I + n * J + h * K + U * L;
          c[14] = k * I + d * J + p * K + t * L;
          c[15] = m * I + e * J + r * K + Q * L;
          c[16] = a * M + s * N + b * O + G * f + fa;
          c[17] = l * M + n * N + h * O + U * f + ca;
          c[18] = k * M + d * N + p * O + t * f + ga;
          c[19] = m * M + e * N + r * O + Q * f + ha;
          this._type = 0;
        }
      };
      Object.defineProperty(c.prototype, "alphaMultiplier", {get:function() {
        return this._data[15];
      }, enumerable:!0, configurable:!0});
      c.prototype.hasOnlyAlphaMultiplier = function() {
        var a = this._data;
        return 1 == a[0] && 0 == a[1] && 0 == a[2] && 0 == a[3] && 0 == a[4] && 1 == a[5] && 0 == a[6] && 0 == a[7] && 0 == a[8] && 0 == a[9] && 1 == a[10] && 0 == a[11] && 0 == a[12] && 0 == a[13] && 0 == a[14] && 0 == a[16] && 0 == a[17] && 0 == a[18] && 0 == a[19];
      };
      c.prototype.equals = function(a) {
        if (!a) {
          return!1;
        }
        if (this._type === a._type && 1 === this._type) {
          return!0;
        }
        var c = this._data;
        a = a._data;
        for (var f = 0;20 > f;f++) {
          if (.001 < Math.abs(c[f] - a[f])) {
            return!1;
          }
        }
        return!0;
      };
      c.prototype.toSVGFilterMatrix = function() {
        var a = this._data;
        return[a[0], a[4], a[8], a[12], a[16], a[1], a[5], a[9], a[13], a[17], a[2], a[6], a[10], a[14], a[18], a[3], a[7], a[11], a[15], a[19]].join(" ");
      };
      return c;
    }();
    r.ColorMatrix = c;
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(f) {
      function c(a, c) {
        return-1 !== a.indexOf(c, this.length - c.length);
      }
      var t = r.Geometry.Point3D, n = r.Geometry.Matrix3D, a = r.Geometry.degreesToRadian, g = k.Debug.unexpected, q = k.Debug.notImplemented;
      f.SHADER_ROOT = "shaders/";
      var l = function() {
        function l(a, c) {
          this._fillColor = k.Color.Red;
          this._surfaceRegionCache = new k.LRUList;
          this.modelViewProjectionMatrix = n.createIdentity();
          this._canvas = a;
          this._options = c;
          this.gl = a.getContext("experimental-webgl", {preserveDrawingBuffer:!1, antialias:!0, stencil:!0, premultipliedAlpha:!1});
          this._programCache = Object.create(null);
          this._resize();
          this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, c.unpackPremultiplyAlpha ? this.gl.ONE : this.gl.ZERO);
          this._backgroundColor = k.Color.Black;
          this._geometry = new f.WebGLGeometry(this);
          this._tmpVertices = f.Vertex.createEmptyVertices(f.Vertex, 64);
          this._maxSurfaces = c.maxSurfaces;
          this._maxSurfaceSize = c.maxSurfaceSize;
          this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
          this.gl.enable(this.gl.BLEND);
          this.modelViewProjectionMatrix = n.create2DProjection(this._w, this._h, 2E3);
          var g = this;
          this._surfaceRegionAllocator = new r.SurfaceRegionAllocator.SimpleAllocator(function() {
            var a = g._createTexture();
            return new f.WebGLSurface(1024, 1024, a);
          });
        }
        Object.defineProperty(l.prototype, "surfaces", {get:function() {
          return this._surfaceRegionAllocator.surfaces;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(l.prototype, "fillStyle", {set:function(a) {
          this._fillColor.set(k.Color.parseColor(a));
        }, enumerable:!0, configurable:!0});
        l.prototype.setBlendMode = function(a) {
          var c = this.gl;
          switch(a) {
            case 8:
              c.blendFunc(c.SRC_ALPHA, c.DST_ALPHA);
              break;
            case 3:
              c.blendFunc(c.DST_COLOR, c.ONE_MINUS_SRC_ALPHA);
              break;
            case 4:
              c.blendFunc(c.SRC_ALPHA, c.ONE);
              break;
            case 2:
            ;
            case 1:
              c.blendFunc(c.ONE, c.ONE_MINUS_SRC_ALPHA);
              break;
            default:
              q("Blend Mode: " + a);
          }
        };
        l.prototype.setBlendOptions = function() {
          this.gl.blendFunc(this._options.sourceBlendFactor, this._options.destinationBlendFactor);
        };
        l.glSupportedBlendMode = function(a) {
          switch(a) {
            case 8:
            ;
            case 3:
            ;
            case 4:
            ;
            case 1:
              return!0;
            default:
              return!1;
          }
        };
        l.prototype.create2DProjectionMatrix = function() {
          return n.create2DProjection(this._w, this._h, -this._w);
        };
        l.prototype.createPerspectiveMatrix = function(c, g, f) {
          f = a(f);
          g = n.createPerspective(a(g));
          var d = new t(0, 1, 0), e = new t(0, 0, 0);
          c = new t(0, 0, c);
          c = n.createCameraLookAt(c, e, d);
          c = n.createInverse(c);
          d = n.createIdentity();
          d = n.createMultiply(d, n.createTranslation(-this._w / 2, -this._h / 2));
          d = n.createMultiply(d, n.createScale(1 / this._w, -1 / this._h, .01));
          d = n.createMultiply(d, n.createYRotation(f));
          d = n.createMultiply(d, c);
          return d = n.createMultiply(d, g);
        };
        l.prototype.discardCachedImages = function() {
          2 <= r.traceLevel && r.writer && r.writer.writeLn("Discard Cache");
          for (var a = this._surfaceRegionCache.count / 2 | 0, c = 0;c < a;c++) {
            var g = this._surfaceRegionCache.pop();
            2 <= r.traceLevel && r.writer && r.writer.writeLn("Discard: " + g);
            g.texture.atlas.remove(g.region);
            g.texture = null;
          }
        };
        l.prototype.cacheImage = function(a) {
          var c = this.allocateSurfaceRegion(a.width, a.height);
          2 <= r.traceLevel && r.writer && r.writer.writeLn("Uploading Image: @ " + c.region);
          this._surfaceRegionCache.use(c);
          this.updateSurfaceRegion(a, c);
          return c;
        };
        l.prototype.allocateSurfaceRegion = function(a, c) {
          return this._surfaceRegionAllocator.allocate(a, c, null);
        };
        l.prototype.updateSurfaceRegion = function(a, c) {
          var g = this.gl;
          g.bindTexture(g.TEXTURE_2D, c.surface.texture);
          g.texSubImage2D(g.TEXTURE_2D, 0, c.region.x, c.region.y, g.RGBA, g.UNSIGNED_BYTE, a);
        };
        l.prototype._resize = function() {
          var a = this.gl;
          this._w = this._canvas.width;
          this._h = this._canvas.height;
          a.viewport(0, 0, this._w, this._h);
          for (var c in this._programCache) {
            this._initializeProgram(this._programCache[c]);
          }
        };
        l.prototype._initializeProgram = function(a) {
          this.gl.useProgram(a);
        };
        l.prototype._createShaderFromFile = function(a) {
          var g = f.SHADER_ROOT + a, l = this.gl;
          a = new XMLHttpRequest;
          a.open("GET", g, !1);
          a.send();
          if (c(g, ".vert")) {
            g = l.VERTEX_SHADER;
          } else {
            if (c(g, ".frag")) {
              g = l.FRAGMENT_SHADER;
            } else {
              throw "Shader Type: not supported.";
            }
          }
          return this._createShader(g, a.responseText);
        };
        l.prototype.createProgramFromFiles = function() {
          var a = this._programCache["combined.vert-combined.frag"];
          a || (a = this._createProgram([this._createShaderFromFile("combined.vert"), this._createShaderFromFile("combined.frag")]), this._queryProgramAttributesAndUniforms(a), this._initializeProgram(a), this._programCache["combined.vert-combined.frag"] = a);
          return a;
        };
        l.prototype._createProgram = function(a) {
          var c = this.gl, f = c.createProgram();
          a.forEach(function(a) {
            c.attachShader(f, a);
          });
          c.linkProgram(f);
          c.getProgramParameter(f, c.LINK_STATUS) || (g("Cannot link program: " + c.getProgramInfoLog(f)), c.deleteProgram(f));
          return f;
        };
        l.prototype._createShader = function(a, c) {
          var f = this.gl, d = f.createShader(a);
          f.shaderSource(d, c);
          f.compileShader(d);
          return f.getShaderParameter(d, f.COMPILE_STATUS) ? d : (g("Cannot compile shader: " + f.getShaderInfoLog(d)), f.deleteShader(d), null);
        };
        l.prototype._createTexture = function() {
          var a = this.gl, c = a.createTexture();
          a.bindTexture(a.TEXTURE_2D, c);
          a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE);
          a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE);
          a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR);
          a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR);
          a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, 1024, 1024, 0, a.RGBA, a.UNSIGNED_BYTE, null);
          return c;
        };
        l.prototype._createFramebuffer = function(a) {
          var c = this.gl, g = c.createFramebuffer();
          c.bindFramebuffer(c.FRAMEBUFFER, g);
          c.framebufferTexture2D(c.FRAMEBUFFER, c.COLOR_ATTACHMENT0, c.TEXTURE_2D, a, 0);
          c.bindFramebuffer(c.FRAMEBUFFER, null);
          return g;
        };
        l.prototype._queryProgramAttributesAndUniforms = function(a) {
          a.uniforms = {};
          a.attributes = {};
          for (var c = this.gl, g = 0, d = c.getProgramParameter(a, c.ACTIVE_ATTRIBUTES);g < d;g++) {
            var e = c.getActiveAttrib(a, g);
            a.attributes[e.name] = e;
            e.location = c.getAttribLocation(a, e.name);
          }
          g = 0;
          for (d = c.getProgramParameter(a, c.ACTIVE_UNIFORMS);g < d;g++) {
            e = c.getActiveUniform(a, g), a.uniforms[e.name] = e, e.location = c.getUniformLocation(a, e.name);
          }
        };
        Object.defineProperty(l.prototype, "target", {set:function(a) {
          var c = this.gl;
          a ? (c.viewport(0, 0, a.w, a.h), c.bindFramebuffer(c.FRAMEBUFFER, a.framebuffer)) : (c.viewport(0, 0, this._w, this._h), c.bindFramebuffer(c.FRAMEBUFFER, null));
        }, enumerable:!0, configurable:!0});
        l.prototype.clear = function(a) {
          a = this.gl;
          a.clearColor(0, 0, 0, 0);
          a.clear(a.COLOR_BUFFER_BIT);
        };
        l.prototype.clearTextureRegion = function(a, c) {
          void 0 === c && (c = k.Color.None);
          var g = this.gl, d = a.region;
          this.target = a.surface;
          g.enable(g.SCISSOR_TEST);
          g.scissor(d.x, d.y, d.w, d.h);
          g.clearColor(c.r, c.g, c.b, c.a);
          g.clear(g.COLOR_BUFFER_BIT | g.DEPTH_BUFFER_BIT);
          g.disable(g.SCISSOR_TEST);
        };
        l.prototype.sizeOf = function(a) {
          var c = this.gl;
          switch(a) {
            case c.UNSIGNED_BYTE:
              return 1;
            case c.UNSIGNED_SHORT:
              return 2;
            case this.gl.INT:
            ;
            case this.gl.FLOAT:
              return 4;
            default:
              q(a);
          }
        };
        l.MAX_SURFACES = 8;
        return l;
      }();
      f.WebGLContext = l;
    })(r.WebGL || (r.WebGL = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(k, r) {
  function f() {
    this.constructor = k;
  }
  for (var c in r) {
    r.hasOwnProperty(c) && (k[c] = r[c]);
  }
  f.prototype = r.prototype;
  k.prototype = new f;
};
(function(k) {
  (function(r) {
    (function(f) {
      var c = k.Debug.assert, t = function(a) {
        function g() {
          a.apply(this, arguments);
        }
        __extends(g, a);
        g.prototype.ensureVertexCapacity = function(a) {
          c(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 8 * a);
        };
        g.prototype.writeVertex = function(a, g) {
          c(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 8);
          this.writeVertexUnsafe(a, g);
        };
        g.prototype.writeVertexUnsafe = function(a, c) {
          var g = this._offset >> 2;
          this._f32[g] = a;
          this._f32[g + 1] = c;
          this._offset += 8;
        };
        g.prototype.writeVertex3D = function(a, g, f) {
          c(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 12);
          this.writeVertex3DUnsafe(a, g, f);
        };
        g.prototype.writeVertex3DUnsafe = function(a, c, g) {
          var f = this._offset >> 2;
          this._f32[f] = a;
          this._f32[f + 1] = c;
          this._f32[f + 2] = g;
          this._offset += 12;
        };
        g.prototype.writeTriangleElements = function(a, g, f) {
          c(0 === (this._offset & 1));
          this.ensureCapacity(this._offset + 6);
          var m = this._offset >> 1;
          this._u16[m] = a;
          this._u16[m + 1] = g;
          this._u16[m + 2] = f;
          this._offset += 6;
        };
        g.prototype.ensureColorCapacity = function(a) {
          c(0 === (this._offset & 2));
          this.ensureCapacity(this._offset + 16 * a);
        };
        g.prototype.writeColorFloats = function(a, g, f, m) {
          c(0 === (this._offset & 2));
          this.ensureCapacity(this._offset + 16);
          this.writeColorFloatsUnsafe(a, g, f, m);
        };
        g.prototype.writeColorFloatsUnsafe = function(a, c, g, f) {
          var k = this._offset >> 2;
          this._f32[k] = a;
          this._f32[k + 1] = c;
          this._f32[k + 2] = g;
          this._f32[k + 3] = f;
          this._offset += 16;
        };
        g.prototype.writeColor = function() {
          var a = Math.random(), g = Math.random(), f = Math.random(), m = Math.random() / 2;
          c(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 4);
          this._i32[this._offset >> 2] = m << 24 | f << 16 | g << 8 | a;
          this._offset += 4;
        };
        g.prototype.writeColorUnsafe = function(a, c, g, f) {
          this._i32[this._offset >> 2] = f << 24 | g << 16 | c << 8 | a;
          this._offset += 4;
        };
        g.prototype.writeRandomColor = function() {
          this.writeColor();
        };
        return g;
      }(k.ArrayUtilities.ArrayWriter);
      f.BufferWriter = t;
      f.WebGLAttribute = function() {
        return function(a, c, f, l) {
          void 0 === l && (l = !1);
          this.name = a;
          this.size = c;
          this.type = f;
          this.normalized = l;
        };
      }();
      var n = function() {
        function a(a) {
          this.size = 0;
          this.attributes = a;
        }
        a.prototype.initialize = function(a) {
          for (var c = 0, f = 0;f < this.attributes.length;f++) {
            this.attributes[f].offset = c, c += a.sizeOf(this.attributes[f].type) * this.attributes[f].size;
          }
          this.size = c;
        };
        return a;
      }();
      f.WebGLAttributeList = n;
      n = function() {
        function a(a) {
          this._elementOffset = this.triangleCount = 0;
          this.context = a;
          this.array = new t(8);
          this.buffer = a.gl.createBuffer();
          this.elementArray = new t(8);
          this.elementBuffer = a.gl.createBuffer();
        }
        Object.defineProperty(a.prototype, "elementOffset", {get:function() {
          return this._elementOffset;
        }, enumerable:!0, configurable:!0});
        a.prototype.addQuad = function() {
          var a = this._elementOffset;
          this.elementArray.writeTriangleElements(a, a + 1, a + 2);
          this.elementArray.writeTriangleElements(a, a + 2, a + 3);
          this.triangleCount += 2;
          this._elementOffset += 4;
        };
        a.prototype.resetElementOffset = function() {
          this._elementOffset = 0;
        };
        a.prototype.reset = function() {
          this.array.reset();
          this.elementArray.reset();
          this.resetElementOffset();
          this.triangleCount = 0;
        };
        a.prototype.uploadBuffers = function() {
          var a = this.context.gl;
          a.bindBuffer(a.ARRAY_BUFFER, this.buffer);
          a.bufferData(a.ARRAY_BUFFER, this.array.subU8View(), a.DYNAMIC_DRAW);
          a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.elementBuffer);
          a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.elementArray.subU8View(), a.DYNAMIC_DRAW);
        };
        return a;
      }();
      f.WebGLGeometry = n;
      n = function(a) {
        function c(g, f, k) {
          a.call(this, g, f, k);
        }
        __extends(c, a);
        c.createEmptyVertices = function(a, c) {
          for (var g = [], f = 0;f < c;f++) {
            g.push(new a(0, 0, 0));
          }
          return g;
        };
        return c;
      }(r.Geometry.Point3D);
      f.Vertex = n;
      (function(a) {
        a[a.ZERO = 0] = "ZERO";
        a[a.ONE = 1] = "ONE";
        a[a.SRC_COLOR = 768] = "SRC_COLOR";
        a[a.ONE_MINUS_SRC_COLOR = 769] = "ONE_MINUS_SRC_COLOR";
        a[a.DST_COLOR = 774] = "DST_COLOR";
        a[a.ONE_MINUS_DST_COLOR = 775] = "ONE_MINUS_DST_COLOR";
        a[a.SRC_ALPHA = 770] = "SRC_ALPHA";
        a[a.ONE_MINUS_SRC_ALPHA = 771] = "ONE_MINUS_SRC_ALPHA";
        a[a.DST_ALPHA = 772] = "DST_ALPHA";
        a[a.ONE_MINUS_DST_ALPHA = 773] = "ONE_MINUS_DST_ALPHA";
        a[a.SRC_ALPHA_SATURATE = 776] = "SRC_ALPHA_SATURATE";
        a[a.CONSTANT_COLOR = 32769] = "CONSTANT_COLOR";
        a[a.ONE_MINUS_CONSTANT_COLOR = 32770] = "ONE_MINUS_CONSTANT_COLOR";
        a[a.CONSTANT_ALPHA = 32771] = "CONSTANT_ALPHA";
        a[a.ONE_MINUS_CONSTANT_ALPHA = 32772] = "ONE_MINUS_CONSTANT_ALPHA";
      })(f.WebGLBlendFactor || (f.WebGLBlendFactor = {}));
    })(r.WebGL || (r.WebGL = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    (function(f) {
      var c = function() {
        function c(a, g, f) {
          this.texture = f;
          this.w = a;
          this.h = g;
          this._regionAllocator = new k.RegionAllocator.CompactAllocator(this.w, this.h);
        }
        c.prototype.allocate = function(a, c) {
          var f = this._regionAllocator.allocate(a, c);
          return f ? new t(this, f) : null;
        };
        c.prototype.free = function(a) {
          this._regionAllocator.free(a.region);
        };
        return c;
      }();
      f.WebGLSurface = c;
      var t = function() {
        return function(c, a) {
          this.surface = c;
          this.region = a;
          this.next = this.previous = null;
        };
      }();
      f.WebGLSurfaceRegion = t;
    })(k.WebGL || (k.WebGL = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(f) {
      var c = k.Color;
      f.TILE_SIZE = 256;
      f.MIN_UNTILED_SIZE = 256;
      var t = r.Geometry.Matrix, n = r.Geometry.Rectangle, a = function(a) {
        function c() {
          a.apply(this, arguments);
          this.maxSurfaces = 8;
          this.maxSurfaceSize = 4096;
          this.animateZoom = !0;
          this.disableSurfaceUploads = !1;
          this.frameSpacing = 1E-4;
          this.drawSurfaces = this.ignoreColorMatrix = !1;
          this.drawSurface = -1;
          this.premultipliedAlpha = !1;
          this.unpackPremultiplyAlpha = !0;
          this.showTemporaryCanvases = !1;
          this.sourceBlendFactor = 1;
          this.destinationBlendFactor = 771;
        }
        __extends(c, a);
        return c;
      }(r.RendererOptions);
      f.WebGLRendererOptions = a;
      var g = function(g) {
        function l(c, m, l) {
          void 0 === l && (l = new a);
          g.call(this, c, m, l);
          this._tmpVertices = f.Vertex.createEmptyVertices(f.Vertex, 64);
          this._cachedTiles = [];
          c = this._context = new f.WebGLContext(this._canvas, l);
          this._updateSize();
          this._brush = new f.WebGLCombinedBrush(c, new f.WebGLGeometry(c));
          this._stencilBrush = new f.WebGLCombinedBrush(c, new f.WebGLGeometry(c));
          this._scratchCanvas = document.createElement("canvas");
          this._scratchCanvas.width = this._scratchCanvas.height = 2048;
          this._scratchCanvasContext = this._scratchCanvas.getContext("2d", {willReadFrequently:!0});
          this._dynamicScratchCanvas = document.createElement("canvas");
          this._dynamicScratchCanvas.width = this._dynamicScratchCanvas.height = 0;
          this._dynamicScratchCanvasContext = this._dynamicScratchCanvas.getContext("2d", {willReadFrequently:!0});
          this._uploadCanvas = document.createElement("canvas");
          this._uploadCanvas.width = this._uploadCanvas.height = 0;
          this._uploadCanvasContext = this._uploadCanvas.getContext("2d", {willReadFrequently:!0});
          l.showTemporaryCanvases && (document.getElementById("temporaryCanvasPanelContainer").appendChild(this._uploadCanvas), document.getElementById("temporaryCanvasPanelContainer").appendChild(this._scratchCanvas));
          this._clipStack = [];
        }
        __extends(l, g);
        l.prototype.resize = function() {
          this._updateSize();
          this.render();
        };
        l.prototype._updateSize = function() {
          this._viewport = new n(0, 0, this._canvas.width, this._canvas.height);
          this._context._resize();
        };
        l.prototype._cacheImageCallback = function(a, c, g) {
          var f = g.w, d = g.h, e = g.x;
          g = g.y;
          this._uploadCanvas.width = f + 2;
          this._uploadCanvas.height = d + 2;
          this._uploadCanvasContext.drawImage(c.canvas, e, g, f, d, 1, 1, f, d);
          this._uploadCanvasContext.drawImage(c.canvas, e, g, f, 1, 1, 0, f, 1);
          this._uploadCanvasContext.drawImage(c.canvas, e, g + d - 1, f, 1, 1, d + 1, f, 1);
          this._uploadCanvasContext.drawImage(c.canvas, e, g, 1, d, 0, 1, 1, d);
          this._uploadCanvasContext.drawImage(c.canvas, e + f - 1, g, 1, d, f + 1, 1, 1, d);
          return a && a.surface ? (this._options.disableSurfaceUploads || this._context.updateSurfaceRegion(this._uploadCanvas, a), a) : this._context.cacheImage(this._uploadCanvas);
        };
        l.prototype._enterClip = function(a, c, g, f) {
          g.flush();
          c = this._context.gl;
          0 === this._clipStack.length && (c.enable(c.STENCIL_TEST), c.clear(c.STENCIL_BUFFER_BIT), c.stencilFunc(c.ALWAYS, 1, 1));
          this._clipStack.push(a);
          c.colorMask(!1, !1, !1, !1);
          c.stencilOp(c.KEEP, c.KEEP, c.INCR);
          g.flush();
          c.colorMask(!0, !0, !0, !0);
          c.stencilFunc(c.NOTEQUAL, 0, this._clipStack.length);
          c.stencilOp(c.KEEP, c.KEEP, c.KEEP);
        };
        l.prototype._leaveClip = function(a, c, g, f) {
          g.flush();
          c = this._context.gl;
          if (a = this._clipStack.pop()) {
            c.colorMask(!1, !1, !1, !1), c.stencilOp(c.KEEP, c.KEEP, c.DECR), g.flush(), c.colorMask(!0, !0, !0, !0), c.stencilFunc(c.NOTEQUAL, 0, this._clipStack.length), c.stencilOp(c.KEEP, c.KEEP, c.KEEP);
          }
          0 === this._clipStack.length && c.disable(c.STENCIL_TEST);
        };
        l.prototype._renderFrame = function(a, c, g, f) {
        };
        l.prototype._renderSurfaces = function(a) {
          var g = this._options, l = this._context, k = this._viewport;
          if (g.drawSurfaces) {
            var d = l.surfaces, l = t.createIdentity();
            if (0 <= g.drawSurface && g.drawSurface < d.length) {
              for (var g = d[g.drawSurface | 0], d = new n(0, 0, g.w, g.h), e = d.clone();e.w > k.w;) {
                e.scale(.5, .5);
              }
              a.drawImage(new f.WebGLSurfaceRegion(g, d), e, c.White, null, l, .2);
            } else {
              e = k.w / 5;
              e > k.h / d.length && (e = k.h / d.length);
              a.fillRectangle(new n(k.w - e, 0, e, k.h), new c(0, 0, 0, .5), l, .1);
              for (var b = 0;b < d.length;b++) {
                var g = d[b], h = new n(k.w - e, b * e, e, e);
                a.drawImage(new f.WebGLSurfaceRegion(g, new n(0, 0, g.w, g.h)), h, c.White, null, l, .2);
              }
            }
            a.flush();
          }
        };
        l.prototype.render = function() {
          var a = this._options, g = this._context.gl;
          this._context.modelViewProjectionMatrix = a.perspectiveCamera ? this._context.createPerspectiveMatrix(a.perspectiveCameraDistance + (a.animateZoom ? .8 * Math.sin(Date.now() / 3E3) : 0), a.perspectiveCameraFOV, a.perspectiveCameraAngle) : this._context.create2DProjectionMatrix();
          var f = this._brush;
          g.clearColor(0, 0, 0, 0);
          g.clear(g.COLOR_BUFFER_BIT | g.DEPTH_BUFFER_BIT);
          f.reset();
          g = this._viewport;
          f.flush();
          a.paintViewport && (f.fillRectangle(g, new c(.5, 0, 0, .25), t.createIdentity(), 0), f.flush());
          this._renderSurfaces(f);
        };
        return l;
      }(r.Renderer);
      f.WebGLRenderer = g;
    })(r.WebGL || (r.WebGL = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(f) {
      var c = k.Color, t = r.Geometry.Point, n = r.Geometry.Matrix3D, a = function() {
        function a(c, g, f) {
          this._target = f;
          this._context = c;
          this._geometry = g;
        }
        a.prototype.reset = function() {
        };
        a.prototype.flush = function() {
        };
        Object.defineProperty(a.prototype, "target", {get:function() {
          return this._target;
        }, set:function(a) {
          this._target !== a && this.flush();
          this._target = a;
        }, enumerable:!0, configurable:!0});
        return a;
      }();
      f.WebGLBrush = a;
      (function(a) {
        a[a.FillColor = 0] = "FillColor";
        a[a.FillTexture = 1] = "FillTexture";
        a[a.FillTextureWithColorMatrix = 2] = "FillTextureWithColorMatrix";
      })(f.WebGLCombinedBrushKind || (f.WebGLCombinedBrushKind = {}));
      var g = function(a) {
        function g(f, m, l) {
          a.call(this, f, m, l);
          this.kind = 0;
          this.color = new c(0, 0, 0, 0);
          this.sampler = 0;
          this.coordinate = new t(0, 0);
        }
        __extends(g, a);
        g.initializeAttributeList = function(a) {
          var c = a.gl;
          g.attributeList || (g.attributeList = new f.WebGLAttributeList([new f.WebGLAttribute("aPosition", 3, c.FLOAT), new f.WebGLAttribute("aCoordinate", 2, c.FLOAT), new f.WebGLAttribute("aColor", 4, c.UNSIGNED_BYTE, !0), new f.WebGLAttribute("aKind", 1, c.FLOAT), new f.WebGLAttribute("aSampler", 1, c.FLOAT)]), g.attributeList.initialize(a));
        };
        g.prototype.writeTo = function(a) {
          a = a.array;
          a.ensureAdditionalCapacity();
          a.writeVertex3DUnsafe(this.x, this.y, this.z);
          a.writeVertexUnsafe(this.coordinate.x, this.coordinate.y);
          a.writeColorUnsafe(255 * this.color.r, 255 * this.color.g, 255 * this.color.b, 255 * this.color.a);
          a.writeFloatUnsafe(this.kind);
          a.writeFloatUnsafe(this.sampler);
        };
        return g;
      }(f.Vertex);
      f.WebGLCombinedBrushVertex = g;
      a = function(a) {
        function c(f, m, l) {
          void 0 === l && (l = null);
          a.call(this, f, m, l);
          this._blendMode = 1;
          this._program = f.createProgramFromFiles();
          this._surfaces = [];
          g.initializeAttributeList(this._context);
        }
        __extends(c, a);
        c.prototype.reset = function() {
          this._surfaces = [];
          this._geometry.reset();
        };
        c.prototype.drawImage = function(a, g, f, k, d, e, b) {
          void 0 === e && (e = 0);
          void 0 === b && (b = 1);
          if (!a || !a.surface) {
            return!0;
          }
          g = g.clone();
          this._colorMatrix && (k && this._colorMatrix.equals(k) || this.flush());
          this._colorMatrix = k;
          this._blendMode !== b && (this.flush(), this._blendMode = b);
          b = this._surfaces.indexOf(a.surface);
          0 > b && (8 === this._surfaces.length && this.flush(), this._surfaces.push(a.surface), b = this._surfaces.length - 1);
          var h = c._tmpVertices, p = a.region.clone();
          p.offset(1, 1).resize(-2, -2);
          p.scale(1 / a.surface.w, 1 / a.surface.h);
          d.transformRectangle(g, h);
          for (a = 0;4 > a;a++) {
            h[a].z = e;
          }
          h[0].coordinate.x = p.x;
          h[0].coordinate.y = p.y;
          h[1].coordinate.x = p.x + p.w;
          h[1].coordinate.y = p.y;
          h[2].coordinate.x = p.x + p.w;
          h[2].coordinate.y = p.y + p.h;
          h[3].coordinate.x = p.x;
          h[3].coordinate.y = p.y + p.h;
          for (a = 0;4 > a;a++) {
            e = c._tmpVertices[a], e.kind = k ? 2 : 1, e.color.set(f), e.sampler = b, e.writeTo(this._geometry);
          }
          this._geometry.addQuad();
          return!0;
        };
        c.prototype.fillRectangle = function(a, g, f, k) {
          void 0 === k && (k = 0);
          f.transformRectangle(a, c._tmpVertices);
          for (a = 0;4 > a;a++) {
            f = c._tmpVertices[a], f.kind = 0, f.color.set(g), f.z = k, f.writeTo(this._geometry);
          }
          this._geometry.addQuad();
        };
        c.prototype.flush = function() {
          var a = this._geometry, c = this._program, f = this._context.gl, l;
          a.uploadBuffers();
          f.useProgram(c);
          this._target ? (l = n.create2DProjection(this._target.w, this._target.h, 2E3), l = n.createMultiply(l, n.createScale(1, -1, 1))) : l = this._context.modelViewProjectionMatrix;
          f.uniformMatrix4fv(c.uniforms.uTransformMatrix3D.location, !1, l.asWebGLMatrix());
          this._colorMatrix && (f.uniformMatrix4fv(c.uniforms.uColorMatrix.location, !1, this._colorMatrix.asWebGLMatrix()), f.uniform4fv(c.uniforms.uColorVector.location, this._colorMatrix.asWebGLVector()));
          for (l = 0;l < this._surfaces.length;l++) {
            f.activeTexture(f.TEXTURE0 + l), f.bindTexture(f.TEXTURE_2D, this._surfaces[l].texture);
          }
          f.uniform1iv(c.uniforms["uSampler[0]"].location, [0, 1, 2, 3, 4, 5, 6, 7]);
          f.bindBuffer(f.ARRAY_BUFFER, a.buffer);
          var d = g.attributeList.size, e = g.attributeList.attributes;
          for (l = 0;l < e.length;l++) {
            var b = e[l], h = c.attributes[b.name].location;
            f.enableVertexAttribArray(h);
            f.vertexAttribPointer(h, b.size, b.type, b.normalized, d, b.offset);
          }
          this._context.setBlendOptions();
          this._context.target = this._target;
          f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, a.elementBuffer);
          f.drawElements(f.TRIANGLES, 3 * a.triangleCount, f.UNSIGNED_SHORT, 0);
          this.reset();
        };
        c._tmpVertices = f.Vertex.createEmptyVertices(g, 4);
        c._depth = 1;
        return c;
      }(a);
      f.WebGLCombinedBrush = a;
    })(r.WebGL || (r.WebGL = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    (function(f) {
      var c = CanvasRenderingContext2D.prototype.save, k = CanvasRenderingContext2D.prototype.clip, n = CanvasRenderingContext2D.prototype.fill, a = CanvasRenderingContext2D.prototype.stroke, g = CanvasRenderingContext2D.prototype.restore, q = CanvasRenderingContext2D.prototype.beginPath;
      f.notifyReleaseChanged = function() {
        CanvasRenderingContext2D.prototype.save = c;
        CanvasRenderingContext2D.prototype.clip = k;
        CanvasRenderingContext2D.prototype.fill = n;
        CanvasRenderingContext2D.prototype.stroke = a;
        CanvasRenderingContext2D.prototype.restore = g;
        CanvasRenderingContext2D.prototype.beginPath = q;
      };
      CanvasRenderingContext2D.prototype.enterBuildingClippingRegion = function() {
        this.buildingClippingRegionDepth || (this.buildingClippingRegionDepth = 0);
        this.buildingClippingRegionDepth++;
      };
      CanvasRenderingContext2D.prototype.leaveBuildingClippingRegion = function() {
        this.buildingClippingRegionDepth--;
      };
    })(k.Canvas2D || (k.Canvas2D = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(f) {
      function c(a) {
        var c = "source-over";
        switch(a) {
          case 1:
          ;
          case 2:
            break;
          case 3:
            c = "multiply";
            break;
          case 8:
          ;
          case 4:
            c = "screen";
            break;
          case 5:
            c = "lighten";
            break;
          case 6:
            c = "darken";
            break;
          case 7:
            c = "difference";
            break;
          case 13:
            c = "overlay";
            break;
          case 14:
            c = "hard-light";
            break;
          case 11:
            c = "destination-in";
            break;
          case 12:
            c = "destination-out";
            break;
          default:
            k.Debug.somewhatImplemented("Blend Mode: " + r.BlendMode[a]);
        }
        return c;
      }
      var t = k.NumberUtilities.clamp;
      navigator.userAgent.indexOf("Firefox");
      var n = function() {
        function a() {
        }
        a._prepareSVGFilters = function() {
          if (!a._svgBlurFilter) {
            var c = document.createElementNS("http://www.w3.org/2000/svg", "svg"), f = document.createElementNS("http://www.w3.org/2000/svg", "defs"), k = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            k.setAttribute("id", "svgBlurFilter");
            var m = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
            m.setAttribute("stdDeviation", "0 0");
            k.appendChild(m);
            f.appendChild(k);
            a._svgBlurFilter = m;
            k = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            k.setAttribute("id", "svgDropShadowFilter");
            m = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
            m.setAttribute("in", "SourceAlpha");
            m.setAttribute("stdDeviation", "3");
            k.appendChild(m);
            a._svgDropshadowFilterBlur = m;
            m = document.createElementNS("http://www.w3.org/2000/svg", "feOffset");
            m.setAttribute("dx", "0");
            m.setAttribute("dy", "0");
            m.setAttribute("result", "offsetblur");
            k.appendChild(m);
            a._svgDropshadowFilterOffset = m;
            m = document.createElementNS("http://www.w3.org/2000/svg", "feFlood");
            m.setAttribute("flood-color", "rgba(0,0,0,1)");
            k.appendChild(m);
            a._svgDropshadowFilterFlood = m;
            m = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
            m.setAttribute("in2", "offsetblur");
            m.setAttribute("operator", "in");
            k.appendChild(m);
            var m = document.createElementNS("http://www.w3.org/2000/svg", "feMerge"), n = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
            m.appendChild(n);
            n = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
            n.setAttribute("in", "SourceGraphic");
            m.appendChild(n);
            k.appendChild(m);
            f.appendChild(k);
            k = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            k.setAttribute("id", "svgColorMatrixFilter");
            m = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
            m.setAttribute("color-interpolation-filters", "sRGB");
            m.setAttribute("in", "SourceGraphic");
            m.setAttribute("type", "matrix");
            k.appendChild(m);
            f.appendChild(k);
            a._svgColorMatrixFilter = m;
            c.appendChild(f);
            document.documentElement.appendChild(c);
          }
        };
        a._applyColorMatrixFilter = function(c, f) {
          a._prepareSVGFilters();
          a._svgColorMatrixFilter.setAttribute("values", f.toSVGFilterMatrix());
          c.filter = "url(#svgColorMatrixFilter)";
        };
        a._applyFilters = function(c, f, n) {
          function m(a) {
            var b = c / 2;
            switch(a) {
              case 0:
                return 0;
              case 1:
                return b / 2.7;
              case 2:
                return b / 1.28;
              default:
                return b;
            }
          }
          a._prepareSVGFilters();
          a._removeFilters(f);
          for (var s = 0;s < n.length;s++) {
            var v = n[s];
            if (v instanceof r.BlurFilter) {
              var d = v, v = m(d.quality);
              a._svgBlurFilter.setAttribute("stdDeviation", d.blurX * v + " " + d.blurY * v);
              f.filter = "url(#svgBlurFilter)";
            } else {
              v instanceof r.DropshadowFilter && (d = v, v = m(d.quality), a._svgDropshadowFilterBlur.setAttribute("stdDeviation", d.blurX * v + " " + d.blurY * v), a._svgDropshadowFilterOffset.setAttribute("dx", String(Math.cos(d.angle * Math.PI / 180) * d.distance * c)), a._svgDropshadowFilterOffset.setAttribute("dy", String(Math.sin(d.angle * Math.PI / 180) * d.distance * c)), a._svgDropshadowFilterFlood.setAttribute("flood-color", k.ColorUtilities.rgbaToCSSStyle(d.color << 8 | Math.round(255 * 
              d.alpha))), f.filter = "url(#svgDropShadowFilter)");
            }
          }
        };
        a._removeFilters = function(a) {
          a.filter = "none";
        };
        a._applyColorMatrix = function(c, f) {
          a._removeFilters(c);
          f.isIdentity() ? (c.globalAlpha = 1, c.globalColorMatrix = null) : f.hasOnlyAlphaMultiplier() ? (c.globalAlpha = t(f.alphaMultiplier, 0, 1), c.globalColorMatrix = null) : (c.globalAlpha = 1, a._svgFiltersAreSupported ? (a._applyColorMatrixFilter(c, f), c.globalColorMatrix = null) : c.globalColorMatrix = f);
        };
        a._svgFiltersAreSupported = !!Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype, "filter");
        return a;
      }();
      f.Filters = n;
      var a = function() {
        function a(c, g, f, m) {
          this.surface = c;
          this.region = g;
          this.w = f;
          this.h = m;
        }
        a.prototype.free = function() {
          this.surface.free(this);
        };
        a._ensureCopyCanvasSize = function(c, f) {
          var n;
          if (a._copyCanvasContext) {
            if (n = a._copyCanvasContext.canvas, n.width < c || n.height < f) {
              n.width = k.IntegerUtilities.nearestPowerOfTwo(c), n.height = k.IntegerUtilities.nearestPowerOfTwo(f);
            }
          } else {
            n = document.createElement("canvas"), "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(n), n.width = 512, n.height = 512, a._copyCanvasContext = n.getContext("2d");
          }
        };
        a.prototype.draw = function(f, l, k, m, n, r) {
          this.context.setTransform(1, 0, 0, 1, 0, 0);
          var d, e = 0, b = 0;
          f.context.canvas === this.context.canvas ? (a._ensureCopyCanvasSize(m, n), d = a._copyCanvasContext, d.clearRect(0, 0, m, n), d.drawImage(f.surface.canvas, f.region.x, f.region.y, m, n, 0, 0, m, n), d = d.canvas, b = e = 0) : (d = f.surface.canvas, e = f.region.x, b = f.region.y);
          a: {
            switch(r) {
              case 11:
                f = !0;
                break a;
              default:
                f = !1;
            }
          }
          f && (this.context.save(), this.context.beginPath(), this.context.rect(l, k, m, n), this.context.clip());
          this.context.globalCompositeOperation = c(r);
          this.context.drawImage(d, e, b, m, n, l, k, m, n);
          this.context.globalCompositeOperation = c(1);
          f && this.context.restore();
        };
        Object.defineProperty(a.prototype, "context", {get:function() {
          return this.surface.context;
        }, enumerable:!0, configurable:!0});
        a.prototype.resetTransform = function() {
          this.surface.context.setTransform(1, 0, 0, 1, 0, 0);
        };
        a.prototype.reset = function() {
          var a = this.surface.context;
          a.setTransform(1, 0, 0, 1, 0, 0);
          a.fillStyle = null;
          a.strokeStyle = null;
          a.globalAlpha = 1;
          a.globalColorMatrix = null;
          a.globalCompositeOperation = c(1);
        };
        a.prototype.fill = function(a) {
          var c = this.surface.context, g = this.region;
          c.fillStyle = a;
          c.fillRect(g.x, g.y, g.w, g.h);
        };
        a.prototype.clear = function(a) {
          var c = this.surface.context, g = this.region;
          a || (a = g);
          c.clearRect(a.x, a.y, a.w, a.h);
        };
        return a;
      }();
      f.Canvas2DSurfaceRegion = a;
      n = function() {
        function c(a, g) {
          this.canvas = a;
          this.context = a.getContext("2d");
          this.w = a.width;
          this.h = a.height;
          this._regionAllocator = g;
        }
        c.prototype.allocate = function(c, g) {
          var f = this._regionAllocator.allocate(c, g);
          return f ? new a(this, f, c, g) : null;
        };
        c.prototype.free = function(a) {
          this._regionAllocator.free(a.region);
        };
        return c;
      }();
      f.Canvas2DSurface = n;
    })(r.Canvas2D || (r.Canvas2D = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(f) {
      var c = k.Debug.assert, t = k.GFX.Geometry.Rectangle, n = k.GFX.Geometry.Point, a = k.GFX.Geometry.Matrix, g = k.NumberUtilities.clamp, q = k.NumberUtilities.pow2, l = new k.IndentingWriter(!1, dumpLine), u = function() {
        return function(b, a) {
          this.surfaceRegion = b;
          this.scale = a;
        };
      }();
      f.MipMapLevel = u;
      var m = function() {
        function b(b, a, c, d) {
          this._node = a;
          this._levels = [];
          this._surfaceRegionAllocator = c;
          this._size = d;
          this._renderer = b;
        }
        b.prototype.getLevel = function(b) {
          b = Math.max(b.getAbsoluteScaleX(), b.getAbsoluteScaleY());
          var a = 0;
          1 !== b && (a = g(Math.round(Math.log(b) / Math.LN2), -5, 3));
          this._node.hasFlags(2097152) || (a = g(a, -5, 0));
          b = q(a);
          var c = 5 + a, a = this._levels[c];
          if (!a) {
            var d = this._node.getBounds().clone();
            d.scale(b, b);
            d.snap();
            var e = this._surfaceRegionAllocator.allocate(d.w, d.h, null), f = e.region, a = this._levels[c] = new u(e, b), c = new v(e);
            c.clip.set(f);
            c.matrix.setElements(b, 0, 0, b, f.x - d.x, f.y - d.y);
            c.flags |= 64;
            this._renderer.renderNodeWithState(this._node, c);
            c.free();
          }
          return a;
        };
        return b;
      }();
      f.MipMap = m;
      (function(b) {
        b[b.NonZero = 0] = "NonZero";
        b[b.EvenOdd = 1] = "EvenOdd";
      })(f.FillRule || (f.FillRule = {}));
      var s = function(b) {
        function a() {
          b.apply(this, arguments);
          this.blending = this.imageSmoothing = this.snapToDevicePixels = !0;
          this.debugLayers = !1;
          this.filters = this.masking = !0;
          this.cacheShapes = !1;
          this.cacheShapesMaxSize = 256;
          this.cacheShapesThreshold = 16;
          this.alpha = !1;
        }
        __extends(a, b);
        return a;
      }(r.RendererOptions);
      f.Canvas2DRendererOptions = s;
      (function(b) {
        b[b.None = 0] = "None";
        b[b.IgnoreNextLayer = 1] = "IgnoreNextLayer";
        b[b.RenderMask = 2] = "RenderMask";
        b[b.IgnoreMask = 4] = "IgnoreMask";
        b[b.PaintStencil = 8] = "PaintStencil";
        b[b.PaintClip = 16] = "PaintClip";
        b[b.IgnoreRenderable = 32] = "IgnoreRenderable";
        b[b.IgnoreNextRenderWithCache = 64] = "IgnoreNextRenderWithCache";
        b[b.CacheShapes = 256] = "CacheShapes";
        b[b.PaintFlashing = 512] = "PaintFlashing";
        b[b.PaintBounds = 1024] = "PaintBounds";
        b[b.PaintDirtyRegion = 2048] = "PaintDirtyRegion";
        b[b.ImageSmoothing = 4096] = "ImageSmoothing";
        b[b.PixelSnapping = 8192] = "PixelSnapping";
      })(f.RenderFlags || (f.RenderFlags = {}));
      t.createMaxI16();
      var v = function(b) {
        function c(d) {
          b.call(this);
          this.clip = t.createEmpty();
          this.clipList = [];
          this.flags = 0;
          this.target = null;
          this.matrix = a.createIdentity();
          this.colorMatrix = r.ColorMatrix.createIdentity();
          c.allocationCount++;
          this.target = d;
        }
        __extends(c, b);
        c.prototype.set = function(b) {
          this.clip.set(b.clip);
          this.target = b.target;
          this.matrix.set(b.matrix);
          this.colorMatrix.set(b.colorMatrix);
          this.flags = b.flags;
          k.ArrayUtilities.copyFrom(this.clipList, b.clipList);
        };
        c.prototype.clone = function() {
          var b = c.allocate();
          b || (b = new c(this.target));
          b.set(this);
          return b;
        };
        c.allocate = function() {
          var b = c._dirtyStack, a = null;
          b.length && (a = b.pop());
          return a;
        };
        c.prototype.free = function() {
          c._dirtyStack.push(this);
        };
        c.prototype.transform = function(b) {
          var a = this.clone();
          a.matrix.preMultiply(b.getMatrix());
          b.hasColorMatrix() && a.colorMatrix.multiply(b.getColorMatrix());
          return a;
        };
        c.prototype.hasFlags = function(b) {
          return(this.flags & b) === b;
        };
        c.prototype.removeFlags = function(b) {
          this.flags &= ~b;
        };
        c.prototype.toggleFlags = function(b, a) {
          this.flags = a ? this.flags | b : this.flags & ~b;
        };
        c.allocationCount = 0;
        c._dirtyStack = [];
        return c;
      }(r.State);
      f.RenderState = v;
      var d = function() {
        function b() {
          this.culledNodes = this.groups = this.shapes = this._count = 0;
        }
        b.prototype.enter = function(b) {
          this._count++;
          l && (l.enter("> Frame: " + this._count), this._enterTime = performance.now(), this.culledNodes = this.groups = this.shapes = 0);
        };
        b.prototype.leave = function() {
          l && (l.writeLn("Shapes: " + this.shapes + ", Groups: " + this.groups + ", Culled Nodes: " + this.culledNodes), l.writeLn("Elapsed: " + (performance.now() - this._enterTime).toFixed(2)), l.writeLn("Rectangle: " + t.allocationCount + ", Matrix: " + a.allocationCount + ", State: " + v.allocationCount), l.leave("<"));
        };
        return b;
      }();
      f.FrameInfo = d;
      var e = function(b) {
        function e(a, c, g) {
          void 0 === g && (g = new s);
          b.call(this, a, c, g);
          this._visited = 0;
          this._frameInfo = new d;
          this._fontSize = 0;
          this._layers = [];
          if (a instanceof HTMLCanvasElement) {
            var f = a;
            this._viewport = new t(0, 0, f.width, f.height);
            this._target = this._createTarget(f);
          } else {
            this._addLayer("Background Layer");
            g = this._addLayer("Canvas Layer");
            f = document.createElement("canvas");
            g.appendChild(f);
            this._viewport = new t(0, 0, a.scrollWidth, a.scrollHeight);
            var m = this;
            c.addEventListener(1, function() {
              m._onStageBoundsChanged(f);
            });
            this._onStageBoundsChanged(f);
          }
          e._prepareSurfaceAllocators();
        }
        __extends(e, b);
        e.prototype._addLayer = function(b) {
          b = document.createElement("div");
          b.style.position = "absolute";
          b.style.overflow = "hidden";
          b.style.width = "100%";
          b.style.height = "100%";
          b.style.zIndex = this._layers.length + "";
          this._container.appendChild(b);
          this._layers.push(b);
          return b;
        };
        Object.defineProperty(e.prototype, "_backgroundVideoLayer", {get:function() {
          return this._layers[0];
        }, enumerable:!0, configurable:!0});
        e.prototype._createTarget = function(b) {
          return new f.Canvas2DSurfaceRegion(new f.Canvas2DSurface(b), new r.RegionAllocator.Region(0, 0, b.width, b.height), b.width, b.height);
        };
        e.prototype._onStageBoundsChanged = function(b) {
          var a = this._stage.getBounds(!0);
          a.snap();
          for (var c = this._devicePixelRatio = window.devicePixelRatio || 1, d = a.w / c + "px", c = a.h / c + "px", e = 0;e < this._layers.length;e++) {
            var g = this._layers[e];
            g.style.width = d;
            g.style.height = c;
          }
          b.width = a.w;
          b.height = a.h;
          b.style.position = "absolute";
          b.style.width = d;
          b.style.height = c;
          this._target = this._createTarget(b);
          this._fontSize = 10 * this._devicePixelRatio;
        };
        e._prepareSurfaceAllocators = function() {
          e._initializedCaches || (e._surfaceCache = new r.SurfaceRegionAllocator.SimpleAllocator(function(b, a) {
            var c = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(c);
            var d = Math.max(1024, b), e = Math.max(1024, a);
            c.width = d;
            c.height = e;
            var g = null, g = 512 <= b || 512 <= a ? new r.RegionAllocator.GridAllocator(d, e, d, e) : new r.RegionAllocator.BucketAllocator(d, e);
            return new f.Canvas2DSurface(c, g);
          }), e._shapeCache = new r.SurfaceRegionAllocator.SimpleAllocator(function(b, a) {
            var c = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(c);
            c.width = 1024;
            c.height = 1024;
            var d = d = new r.RegionAllocator.CompactAllocator(1024, 1024);
            return new f.Canvas2DSurface(c, d);
          }), e._initializedCaches = !0);
        };
        e.prototype.render = function() {
          var b = this._stage, a = this._target, c = this._options, d = this._viewport;
          a.reset();
          a.context.save();
          a.context.beginPath();
          a.context.rect(d.x, d.y, d.w, d.h);
          a.context.clip();
          this._renderStageToTarget(a, b, d);
          a.reset();
          c.paintViewport && (a.context.beginPath(), a.context.rect(d.x, d.y, d.w, d.h), a.context.strokeStyle = "#FF4981", a.context.lineWidth = 2, a.context.stroke());
          a.context.restore();
        };
        e.prototype.renderNode = function(b, a, c) {
          var d = new v(this._target);
          d.clip.set(a);
          d.flags = 256;
          d.matrix.set(c);
          b.visit(this, d);
          d.free();
        };
        e.prototype.renderNodeWithState = function(b, a) {
          b.visit(this, a);
        };
        e.prototype._renderWithCache = function(b, a) {
          var c = a.matrix, d = b.getBounds();
          if (d.isEmpty()) {
            return!1;
          }
          var g = this._options.cacheShapesMaxSize, f = Math.max(c.getAbsoluteScaleX(), c.getAbsoluteScaleY()), l = !!(a.flags & 16), k = !!(a.flags & 8);
          if (a.hasFlags(256)) {
            if (k || l || !a.colorMatrix.isIdentity() || b.hasFlags(1048576) || 100 < this._options.cacheShapesThreshold || d.w * f > g || d.h * f > g) {
              return!1;
            }
            (f = b.properties.mipMap) || (f = b.properties.mipMap = new m(this, b, e._shapeCache, g));
            l = f.getLevel(c);
            g = l.surfaceRegion;
            f = g.region;
            return l ? (l = a.target.context, l.imageSmoothingEnabled = l.mozImageSmoothingEnabled = !0, l.setTransform(c.a, c.b, c.c, c.d, c.tx, c.ty), l.drawImage(g.surface.canvas, f.x, f.y, f.w, f.h, d.x, d.y, d.w, d.h), !0) : !1;
          }
        };
        e.prototype._intersectsClipList = function(b, a) {
          var c = b.getBounds(!0), d = !1;
          a.matrix.transformRectangleAABB(c);
          a.clip.intersects(c) && (d = !0);
          var e = a.clipList;
          if (d && e.length) {
            for (var d = !1, g = 0;g < e.length;g++) {
              if (c.intersects(e[g])) {
                d = !0;
                break;
              }
            }
          }
          c.free();
          return d;
        };
        e.prototype.visitGroup = function(b, a) {
          this._frameInfo.groups++;
          b.getBounds();
          if ((!b.hasFlags(4) || a.flags & 4) && b.hasFlags(65536)) {
            if (a.flags & 1 || 1 === b.getLayer().blendMode && !b.getLayer().mask || !this._options.blending) {
              if (this._intersectsClipList(b, a)) {
                for (var c = null, d = b.getChildren(), e = 0;e < d.length;e++) {
                  var g = d[e], f = a.transform(g.getTransform());
                  f.toggleFlags(4096, g.hasFlags(524288));
                  if (0 <= g.clip) {
                    c = c || new Uint8Array(d.length);
                    c[g.clip + e]++;
                    var h = f.clone();
                    a.target.context.save();
                    h.flags |= 16;
                    g.visit(this, h);
                    h.free();
                  } else {
                    g.visit(this, f);
                  }
                  if (c && 0 < c[e]) {
                    for (;c[e]--;) {
                      a.target.context.restore();
                    }
                  }
                  f.free();
                }
              } else {
                this._frameInfo.culledNodes++;
              }
            } else {
              a = a.clone(), a.flags |= 1, this._renderLayer(b, a), a.free();
            }
            this._renderDebugInfo(b, a);
          }
        };
        e.prototype._renderDebugInfo = function(b, a) {
          if (a.flags & 1024) {
            var c = a.target.context, d = b.getBounds(!0), g = b.properties.style;
            g || (g = b.properties.style = k.Color.randomColor().toCSSStyle());
            c.strokeStyle = g;
            a.matrix.transformRectangleAABB(d);
            c.setTransform(1, 0, 0, 1, 0, 0);
            d.free();
            d = b.getBounds();
            g = e._debugPoints;
            a.matrix.transformRectangle(d, g);
            c.lineWidth = 1;
            c.beginPath();
            c.moveTo(g[0].x, g[0].y);
            c.lineTo(g[1].x, g[1].y);
            c.lineTo(g[2].x, g[2].y);
            c.lineTo(g[3].x, g[3].y);
            c.lineTo(g[0].x, g[0].y);
            c.stroke();
          }
        };
        e.prototype.visitStage = function(b, a) {
          var c = a.target.context, d = b.getBounds(!0);
          a.matrix.transformRectangleAABB(d);
          d.intersect(a.clip);
          a.target.reset();
          a = a.clone();
          this._options.clear && a.target.clear(a.clip);
          b.hasFlags(32768) || !b.color || a.flags & 32 || (this._container.style.backgroundColor = b.color.toCSSStyle());
          this.visitGroup(b, a);
          b.dirtyRegion && (c.restore(), a.target.reset(), c.globalAlpha = .4, a.hasFlags(2048) && b.dirtyRegion.render(a.target.context), b.dirtyRegion.clear());
          a.free();
        };
        e.prototype.visitShape = function(b, a) {
          if (this._intersectsClipList(b, a)) {
            var c = a.matrix;
            a.flags & 8192 && (c = c.clone(), c.snap());
            var d = a.target.context;
            f.Filters._applyColorMatrix(d, a.colorMatrix);
            b.source instanceof r.RenderableVideo ? this.visitRenderableVideo(b.source, a) : 0 < d.globalAlpha && this.visitRenderable(b.source, a, b.ratio);
            a.flags & 8192 && c.free();
          }
        };
        e.prototype.visitRenderableVideo = function(b, a) {
          if (b.video && b.video.videoWidth) {
            var c = this._devicePixelRatio, d = a.matrix.clone();
            d.scale(1 / c, 1 / c);
            var c = b.getBounds(), e = k.GFX.Geometry.Matrix.createIdentity();
            e.scale(c.w / b.video.videoWidth, c.h / b.video.videoHeight);
            d.preMultiply(e);
            e.free();
            c = d.toCSSTransform();
            b.video.style.transformOrigin = "0 0";
            b.video.style.transform = c;
            var g = this._backgroundVideoLayer;
            g !== b.video.parentElement && (g.appendChild(b.video), b.addEventListener(2, function ca(b) {
              g.removeChild(b.video);
              b.removeEventListener(2, ca);
            }));
            d.free();
          }
        };
        e.prototype.visitRenderable = function(b, a, c) {
          var d = b.getBounds();
          if (!(a.flags & 32 || d.isEmpty())) {
            if (a.hasFlags(64)) {
              a.removeFlags(64);
            } else {
              if (this._renderWithCache(b, a)) {
                return;
              }
            }
            var e = a.matrix, d = a.target.context, g = !!(a.flags & 16), f = !!(a.flags & 8);
            d.setTransform(e.a, e.b, e.c, e.d, e.tx, e.ty);
            this._frameInfo.shapes++;
            d.imageSmoothingEnabled = d.mozImageSmoothingEnabled = a.hasFlags(4096);
            a = b.properties.renderCount || 0;
            b.properties.renderCount = ++a;
            b.render(d, c, null, g, f);
          }
        };
        e.prototype._renderLayer = function(b, a) {
          var c = b.getLayer(), d = c.mask;
          if (d) {
            this._renderWithMask(b, d, c.blendMode, !b.hasFlags(131072) || !d.hasFlags(131072), a);
          } else {
            var d = t.allocate(), e = this._renderToTemporarySurface(b, a, d, null);
            e && (a.target.draw(e, d.x, d.y, d.w, d.h, c.blendMode), e.free());
            d.free();
          }
        };
        e.prototype._renderWithMask = function(b, a, c, d, e) {
          var g = a.getTransform().getConcatenatedMatrix(!0);
          a.parent || (g = g.scale(this._devicePixelRatio, this._devicePixelRatio));
          var f = b.getBounds().clone();
          e.matrix.transformRectangleAABB(f);
          f.snap();
          if (!f.isEmpty()) {
            var h = a.getBounds().clone();
            g.transformRectangleAABB(h);
            h.snap();
            if (!h.isEmpty()) {
              var l = e.clip.clone();
              l.intersect(f);
              l.intersect(h);
              l.snap();
              l.isEmpty() || (f = e.clone(), f.clip.set(l), b = this._renderToTemporarySurface(b, f, t.createEmpty(), null), f.free(), f = e.clone(), f.clip.set(l), f.matrix = g, f.flags |= 4, d && (f.flags |= 8), a = this._renderToTemporarySurface(a, f, t.createEmpty(), b.surface), f.free(), b.draw(a, 0, 0, l.w, l.h, 11), e.target.draw(b, l.x, l.y, l.w, l.h, c), a.free(), b.free());
            }
          }
        };
        e.prototype._renderStageToTarget = function(b, c, d) {
          t.allocationCount = a.allocationCount = v.allocationCount = 0;
          b = new v(b);
          b.clip.set(d);
          this._options.paintRenderable || (b.flags |= 32);
          this._options.paintBounds && (b.flags |= 1024);
          this._options.paintDirtyRegion && (b.flags |= 2048);
          this._options.paintFlashing && (b.flags |= 512);
          this._options.cacheShapes && (b.flags |= 256);
          this._options.imageSmoothing && (b.flags |= 4096);
          this._options.snapToDevicePixels && (b.flags |= 8192);
          this._frameInfo.enter(b);
          c.visit(this, b);
          this._frameInfo.leave();
        };
        e.prototype._renderToTemporarySurface = function(b, a, c, d) {
          var e = a.matrix, g = b.getBounds().clone();
          e.transformRectangleAABB(g);
          g.snap();
          c.set(g);
          c.intersect(a.clip);
          c.snap();
          if (c.isEmpty()) {
            return null;
          }
          d = this._allocateSurface(c.w, c.h, d);
          g = d.region;
          g = new t(g.x, g.y, c.w, c.h);
          d.context.setTransform(1, 0, 0, 1, 0, 0);
          d.clear();
          e = e.clone();
          e.translate(g.x - c.x, g.y - c.y);
          d.context.save();
          a = a.clone();
          a.target = d;
          a.matrix = e;
          a.clip.set(g);
          b.visit(this, a);
          a.free();
          d.context.restore();
          return d;
        };
        e.prototype._allocateSurface = function(b, a, c) {
          return e._surfaceCache.allocate(b, a, c);
        };
        e.prototype.screenShot = function(b, a) {
          if (a) {
            var d = this._stage.content.groupChild.child;
            c(d instanceof r.Stage);
            b = d.content.getBounds(!0);
            d.content.getTransform().getConcatenatedMatrix().transformRectangleAABB(b);
            b.intersect(this._viewport);
          }
          b || (b = new t(0, 0, this._target.w, this._target.h));
          d = document.createElement("canvas");
          d.width = b.w;
          d.height = b.h;
          var e = d.getContext("2d");
          e.fillStyle = this._container.style.backgroundColor;
          e.fillRect(0, 0, b.w, b.h);
          e.drawImage(this._target.context.canvas, b.x, b.y, b.w, b.h, 0, 0, b.w, b.h);
          return new r.ScreenShot(d.toDataURL("image/png"), b.w, b.h);
        };
        e._initializedCaches = !1;
        e._debugPoints = n.createEmptyPoints(4);
        return e;
      }(r.Renderer);
      f.Canvas2DRenderer = e;
    })(r.Canvas2D || (r.Canvas2D = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    var f = r.Geometry.Point, c = r.Geometry.Matrix, t = r.Geometry.Rectangle, n = k.Tools.Mini.FPS, a = function() {
      function a() {
      }
      a.prototype.onMouseUp = function(a, c) {
        a.state = this;
      };
      a.prototype.onMouseDown = function(a, c) {
        a.state = this;
      };
      a.prototype.onMouseMove = function(a, c) {
        a.state = this;
      };
      a.prototype.onMouseWheel = function(a, c) {
        a.state = this;
      };
      a.prototype.onMouseClick = function(a, c) {
        a.state = this;
      };
      a.prototype.onKeyUp = function(a, c) {
        a.state = this;
      };
      a.prototype.onKeyDown = function(a, c) {
        a.state = this;
      };
      a.prototype.onKeyPress = function(a, c) {
        a.state = this;
      };
      return a;
    }();
    r.UIState = a;
    var g = function(a) {
      function c() {
        a.apply(this, arguments);
        this._keyCodes = [];
      }
      __extends(c, a);
      c.prototype.onMouseDown = function(a, c) {
        c.altKey && (a.state = new l(a.worldView, a.getMousePosition(c, null), a.worldView.getTransform().getMatrix(!0)));
      };
      c.prototype.onMouseClick = function(a, c) {
      };
      c.prototype.onKeyDown = function(a, c) {
        this._keyCodes[c.keyCode] = !0;
      };
      c.prototype.onKeyUp = function(a, c) {
        this._keyCodes[c.keyCode] = !1;
      };
      return c;
    }(a), q = function(a) {
      function c() {
        a.apply(this, arguments);
        this._keyCodes = [];
        this._paused = !1;
        this._mousePosition = new f(0, 0);
      }
      __extends(c, a);
      c.prototype.onMouseMove = function(a, c) {
        this._mousePosition = a.getMousePosition(c, null);
        this._update(a);
      };
      c.prototype.onMouseDown = function(a, c) {
      };
      c.prototype.onMouseClick = function(a, c) {
      };
      c.prototype.onMouseWheel = function(a, c) {
        var d = "DOMMouseScroll" === c.type ? -c.detail : c.wheelDelta / 40;
        if (c.altKey) {
          c.preventDefault();
          var e = a.getMousePosition(c, null), b = a.worldView.getTransform().getMatrix(!0), d = 1 + d / 1E3;
          b.translate(-e.x, -e.y);
          b.scale(d, d);
          b.translate(e.x, e.y);
          a.worldView.getTransform().setMatrix(b);
        }
      };
      c.prototype.onKeyPress = function(a, c) {
        if (c.altKey) {
          var d = c.keyCode || c.which;
          console.info("onKeyPress Code: " + d);
          switch(d) {
            case 248:
              this._paused = !this._paused;
              c.preventDefault();
              break;
            case 223:
              a.toggleOption("paintRenderable");
              c.preventDefault();
              break;
            case 8730:
              a.toggleOption("paintViewport");
              c.preventDefault();
              break;
            case 8747:
              a.toggleOption("paintBounds");
              c.preventDefault();
              break;
            case 8706:
              a.toggleOption("paintDirtyRegion");
              c.preventDefault();
              break;
            case 231:
              a.toggleOption("clear");
              c.preventDefault();
              break;
            case 402:
              a.toggleOption("paintFlashing"), c.preventDefault();
          }
          this._update(a);
        }
      };
      c.prototype.onKeyDown = function(a, c) {
        this._keyCodes[c.keyCode] = !0;
        this._update(a);
      };
      c.prototype.onKeyUp = function(a, c) {
        this._keyCodes[c.keyCode] = !1;
        this._update(a);
      };
      c.prototype._update = function(a) {
        a.paused = this._paused;
        if (a.getOption()) {
          var c = r.viewportLoupeDiameter.value, d = r.viewportLoupeDiameter.value;
          a.viewport = new t(this._mousePosition.x - c / 2, this._mousePosition.y - d / 2, c, d);
        } else {
          a.viewport = null;
        }
      };
      return c;
    }(a);
    (function(a) {
      function c() {
        a.apply(this, arguments);
        this._startTime = Date.now();
      }
      __extends(c, a);
      c.prototype.onMouseMove = function(a, c) {
        if (!(10 > Date.now() - this._startTime)) {
          var d = a._world;
          d && (a.state = new l(d, a.getMousePosition(c, null), d.getTransform().getMatrix(!0)));
        }
      };
      c.prototype.onMouseUp = function(a, c) {
        a.state = new g;
        a.selectNodeUnderMouse(c);
      };
      return c;
    })(a);
    var l = function(a) {
      function c(g, f, d) {
        a.call(this);
        this._target = g;
        this._startPosition = f;
        this._startMatrix = d;
      }
      __extends(c, a);
      c.prototype.onMouseMove = function(a, c) {
        c.preventDefault();
        var d = a.getMousePosition(c, null);
        d.sub(this._startPosition);
        this._target.getTransform().setMatrix(this._startMatrix.clone().translate(d.x, d.y));
        a.state = this;
      };
      c.prototype.onMouseUp = function(a, c) {
        a.state = new g;
      };
      return c;
    }(a), a = function() {
      function a(c, f, l) {
        function d(a) {
          h._state.onMouseWheel(h, a);
          h._persistentState.onMouseWheel(h, a);
        }
        void 0 === f && (f = !1);
        void 0 === l && (l = void 0);
        this._state = new g;
        this._persistentState = new q;
        this.paused = !1;
        this.viewport = null;
        this._selectedNodes = [];
        this._eventListeners = Object.create(null);
        this._fullScreen = !1;
        this._container = c;
        this._stage = new r.Stage(512, 512, !0);
        this._worldView = this._stage.content;
        this._world = new r.Group;
        this._worldView.addChild(this._world);
        this._disableHiDPI = f;
        f = document.createElement("div");
        f.style.position = "absolute";
        f.style.width = "100%";
        f.style.height = "100%";
        f.style.zIndex = "0";
        c.appendChild(f);
        if (r.hud.value) {
          var e = document.createElement("div");
          e.style.position = "absolute";
          e.style.width = "100%";
          e.style.height = "100%";
          e.style.pointerEvents = "none";
          var b = document.createElement("div");
          b.style.position = "absolute";
          b.style.width = "100%";
          b.style.height = "20px";
          b.style.pointerEvents = "none";
          e.appendChild(b);
          c.appendChild(e);
          this._fps = new n(b);
        } else {
          this._fps = null;
        }
        this.transparent = e = 0 === l;
        void 0 === l || 0 === l || k.ColorUtilities.rgbaToCSSStyle(l);
        this._options = new r.Canvas2D.Canvas2DRendererOptions;
        this._options.alpha = e;
        this._renderer = new r.Canvas2D.Canvas2DRenderer(f, this._stage, this._options);
        this._listenForContainerSizeChanges();
        this._onMouseUp = this._onMouseUp.bind(this);
        this._onMouseDown = this._onMouseDown.bind(this);
        this._onMouseMove = this._onMouseMove.bind(this);
        var h = this;
        window.addEventListener("mouseup", function(a) {
          h._state.onMouseUp(h, a);
          h._render();
        }, !1);
        window.addEventListener("mousemove", function(a) {
          h._state.onMouseMove(h, a);
          h._persistentState.onMouseMove(h, a);
        }, !1);
        window.addEventListener("DOMMouseScroll", d);
        window.addEventListener("mousewheel", d);
        c.addEventListener("mousedown", function(a) {
          h._state.onMouseDown(h, a);
        });
        window.addEventListener("keydown", function(a) {
          h._state.onKeyDown(h, a);
          if (h._state !== h._persistentState) {
            h._persistentState.onKeyDown(h, a);
          }
        }, !1);
        window.addEventListener("keypress", function(a) {
          h._state.onKeyPress(h, a);
          if (h._state !== h._persistentState) {
            h._persistentState.onKeyPress(h, a);
          }
        }, !1);
        window.addEventListener("keyup", function(a) {
          h._state.onKeyUp(h, a);
          if (h._state !== h._persistentState) {
            h._persistentState.onKeyUp(h, a);
          }
        }, !1);
        this._enterRenderLoop();
      }
      a.prototype._listenForContainerSizeChanges = function() {
        var a = this._containerWidth, c = this._containerHeight;
        this._onContainerSizeChanged();
        var g = this;
        setInterval(function() {
          if (a !== g._containerWidth || c !== g._containerHeight) {
            g._onContainerSizeChanged(), a = g._containerWidth, c = g._containerHeight;
          }
        }, 10);
      };
      a.prototype._onContainerSizeChanged = function() {
        var a = this.getRatio(), g = Math.ceil(this._containerWidth * a), f = Math.ceil(this._containerHeight * a);
        this._stage.setBounds(new t(0, 0, g, f));
        this._stage.content.setBounds(new t(0, 0, g, f));
        this._worldView.getTransform().setMatrix(new c(a, 0, 0, a, 0, 0));
        this._dispatchEvent("resize");
      };
      a.prototype.addEventListener = function(a, c) {
        this._eventListeners[a] || (this._eventListeners[a] = []);
        this._eventListeners[a].push(c);
      };
      a.prototype._dispatchEvent = function(a) {
        if (a = this._eventListeners[a]) {
          for (var c = 0;c < a.length;c++) {
            a[c]();
          }
        }
      };
      a.prototype._enterRenderLoop = function() {
        var a = this;
        requestAnimationFrame(function v() {
          a.render();
          requestAnimationFrame(v);
        });
      };
      Object.defineProperty(a.prototype, "state", {set:function(a) {
        this._state = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "cursor", {set:function(a) {
        this._container.style.cursor = a;
      }, enumerable:!0, configurable:!0});
      a.prototype._render = function() {
        r.RenderableVideo.checkForVideoUpdates();
        var a = (this._stage.readyToRender() || r.forcePaint.value) && !this.paused, c = 0;
        if (a) {
          var g = this._renderer;
          g.viewport = this.viewport ? this.viewport : this._stage.getBounds();
          this._dispatchEvent("render");
          c = performance.now();
          g.render();
          c = performance.now() - c;
        }
        this._fps && this._fps.tickAndRender(!a, c);
      };
      a.prototype.render = function() {
        this._render();
      };
      Object.defineProperty(a.prototype, "world", {get:function() {
        return this._world;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "worldView", {get:function() {
        return this._worldView;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "stage", {get:function() {
        return this._stage;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "options", {get:function() {
        return this._options;
      }, enumerable:!0, configurable:!0});
      a.prototype.getDisplayParameters = function() {
        return{stageWidth:this._containerWidth, stageHeight:this._containerHeight, pixelRatio:this.getRatio(), screenWidth:window.screen ? window.screen.width : 640, screenHeight:window.screen ? window.screen.height : 480};
      };
      a.prototype.toggleOption = function(a) {
        var c = this._options;
        c[a] = !c[a];
      };
      a.prototype.getOption = function() {
        return this._options.paintViewport;
      };
      a.prototype.getRatio = function() {
        var a = window.devicePixelRatio || 1, c = 1;
        1 === a || this._disableHiDPI || (c = a / 1);
        return c;
      };
      Object.defineProperty(a.prototype, "_containerWidth", {get:function() {
        return this._container.clientWidth;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "_containerHeight", {get:function() {
        return this._container.clientHeight;
      }, enumerable:!0, configurable:!0});
      a.prototype.queryNodeUnderMouse = function(a) {
        return this._world;
      };
      a.prototype.selectNodeUnderMouse = function(a) {
        (a = this._world) && this._selectedNodes.push(a);
        this._render();
      };
      a.prototype.getMousePosition = function(a, g) {
        var l = this._container, d = l.getBoundingClientRect(), e = this.getRatio(), l = new f(l.scrollWidth / d.width * (a.clientX - d.left) * e, l.scrollHeight / d.height * (a.clientY - d.top) * e);
        if (!g) {
          return l;
        }
        d = c.createIdentity();
        g.getTransform().getConcatenatedMatrix().inverse(d);
        d.transformPoint(l);
        return l;
      };
      a.prototype.getMouseWorldPosition = function(a) {
        return this.getMousePosition(a, this._world);
      };
      a.prototype._onMouseDown = function(a) {
      };
      a.prototype._onMouseUp = function(a) {
      };
      a.prototype._onMouseMove = function(a) {
      };
      a.prototype.screenShot = function(a, c) {
        return this._renderer.screenShot(a, c);
      };
      return a;
    }();
    r.Easel = a;
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    var f = k.GFX.Geometry.Matrix;
    (function(c) {
      c[c.Simple = 0] = "Simple";
    })(r.Layout || (r.Layout = {}));
    var c = function(c) {
      function a() {
        c.apply(this, arguments);
        this.layout = 0;
      }
      __extends(a, c);
      return a;
    }(r.RendererOptions);
    r.TreeRendererOptions = c;
    var t = function(k) {
      function a(a, f, l) {
        void 0 === l && (l = new c);
        k.call(this, a, f, l);
        this._canvas = document.createElement("canvas");
        this._container.appendChild(this._canvas);
        this._context = this._canvas.getContext("2d");
        this._listenForContainerSizeChanges();
      }
      __extends(a, k);
      a.prototype._listenForContainerSizeChanges = function() {
        var a = this._containerWidth, c = this._containerHeight;
        this._onContainerSizeChanged();
        var f = this;
        setInterval(function() {
          if (a !== f._containerWidth || c !== f._containerHeight) {
            f._onContainerSizeChanged(), a = f._containerWidth, c = f._containerHeight;
          }
        }, 10);
      };
      a.prototype._getRatio = function() {
        var a = window.devicePixelRatio || 1, c = 1;
        1 !== a && (c = a / 1);
        return c;
      };
      a.prototype._onContainerSizeChanged = function() {
        var a = this._getRatio(), c = Math.ceil(this._containerWidth * a), f = Math.ceil(this._containerHeight * a), k = this._canvas;
        0 < a ? (k.width = c * a, k.height = f * a, k.style.width = c + "px", k.style.height = f + "px") : (k.width = c, k.height = f);
      };
      Object.defineProperty(a.prototype, "_containerWidth", {get:function() {
        return this._container.clientWidth;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "_containerHeight", {get:function() {
        return this._container.clientHeight;
      }, enumerable:!0, configurable:!0});
      a.prototype.render = function() {
        var a = this._context;
        a.save();
        a.clearRect(0, 0, this._canvas.width, this._canvas.height);
        a.scale(1, 1);
        0 === this._options.layout && this._renderNodeSimple(this._context, this._stage, f.createIdentity());
        a.restore();
      };
      a.prototype._renderNodeSimple = function(a, c, f) {
        function k(b) {
          var c = b.getChildren();
          a.fillStyle = b.hasFlags(16) ? "red" : "white";
          var f = String(b.id);
          b instanceof r.RenderableText ? f = "T" + f : b instanceof r.RenderableShape ? f = "S" + f : b instanceof r.RenderableBitmap ? f = "B" + f : b instanceof r.RenderableVideo && (f = "V" + f);
          b instanceof r.Renderable && (f = f + " [" + b._parents.length + "]");
          b = a.measureText(f).width;
          a.fillText(f, n, t);
          if (c) {
            n += b + 4;
            e = Math.max(e, n + 20);
            for (f = 0;f < c.length;f++) {
              k(c[f]), f < c.length - 1 && (t += 18, t > m._canvas.height && (a.fillStyle = "gray", n = n - d + e + 8, d = e + 8, t = 0, a.fillStyle = "white"));
            }
            n -= b + 4;
          }
        }
        var m = this;
        a.save();
        a.font = "16px Arial";
        a.fillStyle = "white";
        var n = 0, t = 0, d = 0, e = 0;
        k(c);
        a.restore();
      };
      return a;
    }(r.Renderer);
    r.TreeRenderer = t;
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(f) {
      var c = k.GFX.BlurFilter, t = k.GFX.DropshadowFilter, n = k.GFX.Shape, a = k.GFX.Group, g = k.GFX.RenderableShape, q = k.GFX.RenderableMorphShape, l = k.GFX.RenderableBitmap, u = k.GFX.RenderableVideo, m = k.GFX.RenderableText, s = k.GFX.ColorMatrix, v = k.ShapeData, d = k.ArrayUtilities.DataBuffer, e = k.GFX.Stage, b = k.GFX.Geometry.Matrix, h = k.GFX.Geometry.Rectangle, p = function() {
        function a() {
        }
        a.prototype.writeMouseEvent = function(a, b) {
          var c = this.output;
          c.writeInt(300);
          var d = k.Remoting.MouseEventNames.indexOf(a.type);
          c.writeInt(d);
          c.writeFloat(b.x);
          c.writeFloat(b.y);
          c.writeInt(a.buttons);
          c.writeInt((a.ctrlKey ? 1 : 0) | (a.altKey ? 2 : 0) | (a.shiftKey ? 4 : 0));
        };
        a.prototype.writeKeyboardEvent = function(a) {
          var b = this.output;
          b.writeInt(301);
          var c = k.Remoting.KeyboardEventNames.indexOf(a.type);
          b.writeInt(c);
          b.writeInt(a.keyCode);
          b.writeInt(a.charCode);
          b.writeInt(a.location);
          b.writeInt((a.ctrlKey ? 1 : 0) | (a.altKey ? 2 : 0) | (a.shiftKey ? 4 : 0));
        };
        a.prototype.writeFocusEvent = function(a) {
          var b = this.output;
          b.writeInt(302);
          b.writeInt(a);
        };
        return a;
      }();
      f.GFXChannelSerializer = p;
      p = function() {
        function a(b, c, d) {
          function f(a) {
            a = a.getBounds(!0);
            var c = b.easel.getRatio();
            a.scale(1 / c, 1 / c);
            a.snap();
            g.setBounds(a);
          }
          var g = this.stage = new e(128, 512);
          "undefined" !== typeof registerInspectorStage && registerInspectorStage(g);
          f(b.stage);
          b.stage.addEventListener(1, f);
          b.content = g.content;
          d && this.stage.setFlags(32768);
          c.addChild(this.stage);
          this._nodes = [];
          this._assets = [];
          this._easelHost = b;
          this._canvas = document.createElement("canvas");
          this._context = this._canvas.getContext("2d");
        }
        a.prototype._registerAsset = function(a, b, c) {
          "undefined" !== typeof registerInspectorAsset && registerInspectorAsset(a, b, c);
          this._assets[a] = c;
        };
        a.prototype._makeNode = function(a) {
          if (-1 === a) {
            return null;
          }
          var b = null;
          return b = a & 134217728 ? this._assets[a & -134217729].wrap() : this._nodes[a];
        };
        a.prototype._getAsset = function(a) {
          return this._assets[a];
        };
        a.prototype._getBitmapAsset = function(a) {
          return this._assets[a];
        };
        a.prototype._getVideoAsset = function(a) {
          return this._assets[a];
        };
        a.prototype._getTextAsset = function(a) {
          return this._assets[a];
        };
        a.prototype.registerFont = function(a, b, c) {
          k.registerCSSFont(a, b.data, !inFirefox);
          inFirefox ? c(null) : window.setTimeout(c, 400);
        };
        a.prototype.registerImage = function(a, b, c, d) {
          this._registerAsset(a, b, this._decodeImage(c.dataType, c.data, d));
        };
        a.prototype.registerVideo = function(a) {
          this._registerAsset(a, 0, new u(a, this));
        };
        a.prototype._decodeImage = function(a, b, c) {
          var d = new Image, e = l.FromImage(d);
          d.src = URL.createObjectURL(new Blob([b], {type:k.getMIMETypeForImageType(a)}));
          d.onload = function() {
            e.setBounds(new h(0, 0, d.width, d.height));
            e.invalidate();
            c({width:d.width, height:d.height});
          };
          d.onerror = function() {
            c(null);
          };
          return e;
        };
        a.prototype.sendVideoPlaybackEvent = function(a, b, c) {
          this._easelHost.sendVideoPlaybackEvent(a, b, c);
        };
        return a;
      }();
      f.GFXChannelDeserializerContext = p;
      p = function() {
        function e() {
        }
        e.prototype.read = function() {
          for (var a = 0, b = this.input, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0, l = 0, k = 0;0 < b.bytesAvailable;) {
            switch(a = b.readInt(), a) {
              case 0:
                return;
              case 101:
                c++;
                this._readUpdateGraphics();
                break;
              case 102:
                d++;
                this._readUpdateBitmapData();
                break;
              case 103:
                e++;
                this._readUpdateTextContent();
                break;
              case 100:
                f++;
                this._readUpdateFrame();
                break;
              case 104:
                g++;
                this._readUpdateStage();
                break;
              case 105:
                h++;
                this._readUpdateNetStream();
                break;
              case 200:
                l++;
                this._readDrawToBitmap();
                break;
              case 106:
                k++, this._readRequestBitmapData();
            }
          }
        };
        e.prototype._readMatrix = function() {
          var a = this.input, b = e._temporaryReadMatrix;
          b.setElements(a.readFloat(), a.readFloat(), a.readFloat(), a.readFloat(), a.readFloat() / 20, a.readFloat() / 20);
          return b;
        };
        e.prototype._readRectangle = function() {
          var a = this.input, b = e._temporaryReadRectangle;
          b.setElements(a.readInt() / 20, a.readInt() / 20, a.readInt() / 20, a.readInt() / 20);
          return b;
        };
        e.prototype._readColorMatrix = function() {
          var a = this.input, b = e._temporaryReadColorMatrix, c = 1, d = 1, f = 1, g = 1, h = 0, l = 0, k = 0, m = 0;
          switch(a.readInt()) {
            case 0:
              return e._temporaryReadColorMatrixIdentity;
            case 1:
              g = a.readFloat();
              break;
            case 2:
              c = a.readFloat(), d = a.readFloat(), f = a.readFloat(), g = a.readFloat(), h = a.readInt(), l = a.readInt(), k = a.readInt(), m = a.readInt();
          }
          b.setMultipliersAndOffsets(c, d, f, g, h, l, k, m);
          return b;
        };
        e.prototype._readAsset = function() {
          var a = this.input.readInt(), b = this.inputAssets[a];
          this.inputAssets[a] = null;
          return b;
        };
        e.prototype._readUpdateGraphics = function() {
          for (var a = this.input, b = this.context, c = a.readInt(), d = a.readInt(), e = b._getAsset(c), f = this._readRectangle(), h = v.FromPlainObject(this._readAsset()), l = a.readInt(), k = [], m = 0;m < l;m++) {
            var n = a.readInt();
            k.push(b._getBitmapAsset(n));
          }
          if (e) {
            e.update(h, k, f);
          } else {
            a = h.morphCoordinates ? new q(c, h, k, f) : new g(c, h, k, f);
            for (m = 0;m < k.length;m++) {
              k[m] && k[m].addRenderableParent(a);
            }
            b._registerAsset(c, d, a);
          }
        };
        e.prototype._readUpdateBitmapData = function() {
          var a = this.input, b = this.context, c = a.readInt(), e = a.readInt(), f = b._getBitmapAsset(c), g = this._readRectangle(), a = a.readInt(), h = d.FromPlainObject(this._readAsset());
          f ? f.updateFromDataBuffer(a, h) : (f = l.FromDataBuffer(a, h, g), b._registerAsset(c, e, f));
        };
        e.prototype._readUpdateTextContent = function() {
          var a = this.input, b = this.context, c = a.readInt(), e = a.readInt(), f = b._getTextAsset(c), g = this._readRectangle(), h = this._readMatrix(), l = a.readInt(), k = a.readInt(), n = a.readInt(), p = a.readBoolean(), q = a.readInt(), r = a.readInt(), s = this._readAsset(), t = d.FromPlainObject(this._readAsset()), v = null, u = a.readInt();
          u && (v = new d(4 * u), a.readBytes(v, 4 * u));
          f ? (f.setBounds(g), f.setContent(s, t, h, v), f.setStyle(l, k, q, r), f.reflow(n, p)) : (f = new m(g), f.setContent(s, t, h, v), f.setStyle(l, k, q, r), f.reflow(n, p), b._registerAsset(c, e, f));
          if (this.output) {
            for (a = f.textRect, this.output.writeInt(20 * a.w), this.output.writeInt(20 * a.h), this.output.writeInt(20 * a.x), f = f.lines, a = f.length, this.output.writeInt(a), b = 0;b < a;b++) {
              this._writeLineMetrics(f[b]);
            }
          }
        };
        e.prototype._writeLineMetrics = function(a) {
          this.output.writeInt(a.x);
          this.output.writeInt(a.width);
          this.output.writeInt(a.ascent);
          this.output.writeInt(a.descent);
          this.output.writeInt(a.leading);
        };
        e.prototype._readUpdateStage = function() {
          var a = this.context, b = this.input.readInt();
          a._nodes[b] || (a._nodes[b] = a.stage.content);
          var b = this.input.readInt(), c = this._readRectangle();
          a.stage.content.setBounds(c);
          a.stage.color = k.Color.FromARGB(b);
          a.stage.align = this.input.readInt();
          a.stage.scaleMode = this.input.readInt();
          b = this.input.readInt();
          this.input.readInt();
          c = this.input.readInt();
          a._easelHost.cursor = k.UI.toCSSCursor(c);
          a._easelHost.fullscreen = 0 === b || 1 === b;
        };
        e.prototype._readUpdateNetStream = function() {
          var a = this.context, b = this.input.readInt(), c = a._getVideoAsset(b), d = this._readRectangle();
          c || (a.registerVideo(b), c = a._getVideoAsset(b));
          c.setBounds(d);
        };
        e.prototype._readFilters = function(a) {
          var b = this.input, d = b.readInt(), e = [];
          if (d) {
            for (var f = 0;f < d;f++) {
              var g = b.readInt();
              switch(g) {
                case 0:
                  e.push(new c(b.readFloat(), b.readFloat(), b.readInt()));
                  break;
                case 1:
                  e.push(new t(b.readFloat(), b.readFloat(), b.readFloat(), b.readFloat(), b.readInt(), b.readFloat(), b.readBoolean(), b.readBoolean(), b.readBoolean(), b.readInt(), b.readFloat()));
                  break;
                default:
                  k.Debug.somewhatImplemented(r.FilterType[g]);
              }
            }
            a.getLayer().filters = e;
          }
        };
        e.prototype._readUpdateFrame = function() {
          var b = this.input, c = this.context, d = b.readInt(), e = 0, f = c._nodes[d];
          f || (f = c._nodes[d] = new a);
          d = b.readInt();
          d & 1 && f.getTransform().setMatrix(this._readMatrix());
          d & 8 && f.getTransform().setColorMatrix(this._readColorMatrix());
          if (d & 64) {
            var g = b.readInt();
            0 <= g && (f.getLayer().mask = c._makeNode(g));
          }
          d & 128 && (f.clip = b.readInt());
          d & 32 && (e = b.readInt() / 65535, g = b.readInt(), 1 !== g && (f.getLayer().blendMode = g), this._readFilters(f), f.toggleFlags(65536, b.readBoolean()), f.toggleFlags(131072, b.readBoolean()), f.toggleFlags(262144, !!b.readInt()), f.toggleFlags(524288, !!b.readInt()));
          if (d & 4) {
            d = b.readInt();
            g = f;
            g.clearChildren();
            for (var h = 0;h < d;h++) {
              var l = b.readInt(), l = c._makeNode(l);
              g.addChild(l);
            }
          }
          e && (l = f.getChildren()[0], l instanceof n && (l.ratio = e));
        };
        e.prototype._readDrawToBitmap = function() {
          var a = this.input, c = this.context, d = a.readInt(), e = a.readInt(), f = a.readInt(), g, h, k;
          g = f & 1 ? this._readMatrix().clone() : b.createIdentity();
          f & 8 && (h = this._readColorMatrix());
          f & 16 && (k = this._readRectangle());
          f = a.readInt();
          a.readBoolean();
          a = c._getBitmapAsset(d);
          e = c._makeNode(e);
          a ? a.drawNode(e, g, h, f, k) : c._registerAsset(d, -1, l.FromNode(e, g, h, f, k));
        };
        e.prototype._readRequestBitmapData = function() {
          var a = this.output, b = this.context, c = this.input.readInt();
          b._getBitmapAsset(c).readImageData(a);
        };
        e._temporaryReadMatrix = b.createIdentity();
        e._temporaryReadRectangle = h.createEmpty();
        e._temporaryReadColorMatrix = s.createIdentity();
        e._temporaryReadColorMatrixIdentity = s.createIdentity();
        return e;
      }();
      f.GFXChannelDeserializer = p;
    })(r.GFX || (r.GFX = {}));
  })(k.Remoting || (k.Remoting = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    var f = k.GFX.Geometry.Point, c = k.ArrayUtilities.DataBuffer, t = function() {
      function n(a) {
        this._easel = a;
        var c = a.transparent;
        this._group = a.world;
        this._content = null;
        this._fullscreen = !1;
        this._context = new k.Remoting.GFX.GFXChannelDeserializerContext(this, this._group, c);
        this._addEventListeners();
      }
      n.prototype.onSendUpdates = function(a, c) {
        throw Error("This method is abstract");
      };
      Object.defineProperty(n.prototype, "easel", {get:function() {
        return this._easel;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(n.prototype, "stage", {get:function() {
        return this._easel.stage;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(n.prototype, "content", {set:function(a) {
        this._content = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(n.prototype, "cursor", {set:function(a) {
        this._easel.cursor = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(n.prototype, "fullscreen", {set:function(a) {
        this._fullscreen !== a && (this._fullscreen = a, "undefined" !== typeof ShumwayCom && ShumwayCom.setFullscreen && ShumwayCom.setFullscreen(a));
      }, enumerable:!0, configurable:!0});
      n.prototype._mouseEventListener = function(a) {
        var g = this._easel.getMousePosition(a, this._content), g = new f(g.x, g.y), n = new c, l = new k.Remoting.GFX.GFXChannelSerializer;
        l.output = n;
        l.writeMouseEvent(a, g);
        this.onSendUpdates(n, []);
      };
      n.prototype._keyboardEventListener = function(a) {
        var f = new c, n = new k.Remoting.GFX.GFXChannelSerializer;
        n.output = f;
        n.writeKeyboardEvent(a);
        this.onSendUpdates(f, []);
      };
      n.prototype._addEventListeners = function() {
        for (var a = this._mouseEventListener.bind(this), c = this._keyboardEventListener.bind(this), f = n._mouseEvents, l = 0;l < f.length;l++) {
          window.addEventListener(f[l], a);
        }
        a = n._keyboardEvents;
        for (l = 0;l < a.length;l++) {
          window.addEventListener(a[l], c);
        }
        this._addFocusEventListeners();
        this._easel.addEventListener("resize", this._resizeEventListener.bind(this));
      };
      n.prototype._sendFocusEvent = function(a) {
        var f = new c, n = new k.Remoting.GFX.GFXChannelSerializer;
        n.output = f;
        n.writeFocusEvent(a);
        this.onSendUpdates(f, []);
      };
      n.prototype._addFocusEventListeners = function() {
        var a = this;
        document.addEventListener("visibilitychange", function(c) {
          a._sendFocusEvent(document.hidden ? 0 : 1);
        });
        window.addEventListener("focus", function(c) {
          a._sendFocusEvent(3);
        });
        window.addEventListener("blur", function(c) {
          a._sendFocusEvent(2);
        });
      };
      n.prototype._resizeEventListener = function() {
        this.onDisplayParameters(this._easel.getDisplayParameters());
      };
      n.prototype.onDisplayParameters = function(a) {
        throw Error("This method is abstract");
      };
      n.prototype.processUpdates = function(a, c, f) {
        void 0 === f && (f = null);
        var l = new k.Remoting.GFX.GFXChannelDeserializer;
        l.input = a;
        l.inputAssets = c;
        l.output = f;
        l.context = this._context;
        l.read();
      };
      n.prototype.processVideoControl = function(a, c, f) {
        var l = this._context, k = l._getVideoAsset(a);
        if (!k) {
          if (1 !== c) {
            return;
          }
          l.registerVideo(a);
          k = l._getVideoAsset(a);
        }
        return k.processControlRequest(c, f);
      };
      n.prototype.processRegisterFontOrImage = function(a, c, f, l, k) {
        "font" === f ? this._context.registerFont(a, l, k) : this._context.registerImage(a, c, l, k);
      };
      n.prototype.processFSCommand = function(a, c) {
      };
      n.prototype.processFrame = function() {
      };
      n.prototype.onVideoPlaybackEvent = function(a, c, f) {
        throw Error("This method is abstract");
      };
      n.prototype.sendVideoPlaybackEvent = function(a, c, f) {
        this.onVideoPlaybackEvent(a, c, f);
      };
      n._mouseEvents = k.Remoting.MouseEventNames;
      n._keyboardEvents = k.Remoting.KeyboardEventNames;
      return n;
    }();
    r.EaselHost = t;
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(f) {
      var c = k.ArrayUtilities.DataBuffer, t = k.CircularBuffer, n = k.Tools.Profiler.TimelineBuffer, a = function(a) {
        function f(c, k, m) {
          a.call(this, c);
          this._timelineRequests = Object.create(null);
          this._playerWindow = k;
          this._window = m;
          this._window.addEventListener("message", function(a) {
            this.onWindowMessage(a.data);
          }.bind(this));
          "undefined" !== typeof ShumwayCom ? ShumwayCom.onSyncMessage = function(a) {
            this.onWindowMessage(a, !1);
            return a.result;
          }.bind(this) : this._window.addEventListener("syncmessage", function(a) {
            this.onWindowMessage(a.detail, !1);
          }.bind(this));
        }
        __extends(f, a);
        f.prototype.onSendUpdates = function(a, c) {
          var f = a.getBytes();
          this._playerWindow.postMessage({type:"gfx", updates:f, assets:c}, "*", [f.buffer]);
        };
        f.prototype.onDisplayParameters = function(a) {
          this._playerWindow.postMessage({type:"displayParameters", params:a}, "*");
        };
        f.prototype.onVideoPlaybackEvent = function(a, c, f) {
          this._playerWindow.postMessage({type:"videoPlayback", id:a, eventType:c, data:f}, "*");
        };
        f.prototype.requestTimeline = function(a, c) {
          return new Promise(function(f) {
            this._timelineRequests[a] = f;
            this._playerWindow.postMessage({type:"timeline", cmd:c, request:a}, "*");
          }.bind(this));
        };
        f.prototype._sendRegisterFontOrImageResponse = function(a, c) {
          this._playerWindow.postMessage({type:"registerFontOrImageResponse", requestId:a, result:c}, "*");
        };
        f.prototype.onWindowMessage = function(a, f) {
          void 0 === f && (f = !0);
          if ("object" === typeof a && null !== a) {
            if ("player" === a.type) {
              var g = c.FromArrayBuffer(a.updates.buffer);
              if (f) {
                this.processUpdates(g, a.assets);
              } else {
                var k = new c;
                this.processUpdates(g, a.assets, k);
                a.result = k.toPlainObject();
              }
            } else {
              "frame" !== a.type && ("videoControl" === a.type ? a.result = this.processVideoControl(a.id, a.eventType, a.data) : "registerFontOrImage" === a.type ? this.processRegisterFontOrImage(a.syncId, a.symbolId, a.assetType, a.data, this._sendRegisterFontOrImageResponse.bind(this, a.requestId)) : "fscommand" !== a.type && "timelineResponse" === a.type && a.timeline && (a.timeline.__proto__ = n.prototype, a.timeline._marks.__proto__ = t.prototype, a.timeline._times.__proto__ = t.prototype, 
              this._timelineRequests[a.request](a.timeline)));
            }
          }
        };
        return f;
      }(r.EaselHost);
      f.WindowEaselHost = a;
    })(r.Window || (r.Window = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(f) {
      var c = k.ArrayUtilities.DataBuffer, t = function(f) {
        function a(a) {
          f.call(this, a);
          this._worker = k.Player.Test.FakeSyncWorker.instance;
          this._worker.addEventListener("message", this._onWorkerMessage.bind(this));
          this._worker.addEventListener("syncmessage", this._onSyncWorkerMessage.bind(this));
        }
        __extends(a, f);
        a.prototype.onSendUpdates = function(a, c) {
          var f = a.getBytes();
          this._worker.postMessage({type:"gfx", updates:f, assets:c}, [f.buffer]);
        };
        a.prototype.onDisplayParameters = function(a) {
          this._worker.postMessage({type:"displayParameters", params:a});
        };
        a.prototype.onVideoPlaybackEvent = function(a, c, f) {
          this._worker.postMessage({type:"videoPlayback", id:a, eventType:c, data:f});
        };
        a.prototype.requestTimeline = function(a, c) {
          var f;
          switch(a) {
            case "AVM2":
              f = k.AVM2.timelineBuffer;
              break;
            case "Player":
              f = k.Player.timelineBuffer;
              break;
            case "SWF":
              f = k.SWF.timelineBuffer;
          }
          "clear" === c && f && f.reset();
          return Promise.resolve(f);
        };
        a.prototype._sendRegisterFontOrImageResponse = function(a, c) {
          this._worker.postMessage({type:"registerFontOrImageResponse", requestId:a, result:c});
        };
        a.prototype._onWorkerMessage = function(a, f) {
          void 0 === f && (f = !0);
          var k = a.data;
          if ("object" === typeof k && null !== k) {
            switch(k.type) {
              case "player":
                var n = c.FromArrayBuffer(k.updates.buffer);
                if (f) {
                  this.processUpdates(n, k.assets);
                } else {
                  var m = new c;
                  this.processUpdates(n, k.assets, m);
                  a.result = m.toPlainObject();
                  a.handled = !0;
                }
                break;
              case "videoControl":
                a.result = this.processVideoControl(k.id, k.eventType, k.data);
                a.handled = !0;
                break;
              case "registerFontOrImage":
                this.processRegisterFontOrImage(k.syncId, k.symbolId, k.assetType, k.data, this._sendRegisterFontOrImageResponse.bind(this, k.requestId)), a.handled = !0;
            }
          }
        };
        a.prototype._onSyncWorkerMessage = function(a) {
          return this._onWorkerMessage(a, !1);
        };
        return a;
      }(r.EaselHost);
      f.TestEaselHost = t;
    })(r.Test || (r.Test = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(f) {
      function c(a, c) {
        a.writeInt(c.length);
        a.writeRawBytes(c);
      }
      function r(a) {
        function f(a) {
          switch(typeof a) {
            case "undefined":
              k.writeByte(0);
              break;
            case "boolean":
              k.writeByte(a ? 2 : 3);
              break;
            case "number":
              k.writeByte(4);
              k.writeDouble(a);
              break;
            case "string":
              k.writeByte(5);
              k.writeUTF(a);
              break;
            default:
              if (null === a) {
                k.writeByte(1);
                break;
              }
              if (Array.isArray(a) && a instanceof Int32Array) {
                k.writeByte(6);
                k.writeInt(a.length);
                for (var e = 0;e < a.length;e++) {
                  f(a[e]);
                }
              } else {
                if (a instanceof Uint8Array) {
                  k.writeByte(9), c(k, a);
                } else {
                  if ("length" in a && "buffer" in a && "littleEndian" in a) {
                    k.writeByte(a.littleEndian ? 10 : 11), c(k, new Uint8Array(a.buffer, 0, a.length));
                  } else {
                    if (a instanceof ArrayBuffer) {
                      k.writeByte(8), c(k, new Uint8Array(a));
                    } else {
                      if (a instanceof Int32Array) {
                        k.writeByte(12), c(k, new Uint8Array(a.buffer, a.byteOffset, a.byteLength));
                      } else {
                        if (a.buffer instanceof ArrayBuffer && "number" === typeof a.byteOffset) {
                          throw Error("Some unsupported TypedArray is used");
                        }
                        k.writeByte(7);
                        for (e in a) {
                          k.writeUTF(e), f(a[e]);
                        }
                        k.writeUTF("");
                      }
                    }
                  }
                }
              }
            ;
          }
        }
        var k = new g;
        f(a);
        return k.getBytes();
      }
      function n(a) {
        var c = new g, f = a.readInt();
        a.readBytes(c, f);
        return c.getBytes();
      }
      function a(a) {
        function c() {
          var a = f.readByte();
          switch(a) {
            case 1:
              return null;
            case 2:
              return!0;
            case 3:
              return!1;
            case 4:
              return f.readDouble();
            case 5:
              return f.readUTF();
            case 6:
              for (var a = [], b = f.readInt(), d = 0;d < b;d++) {
                a[d] = c();
              }
              return a;
            case 7:
              for (a = {};b = f.readUTF();) {
                a[b] = c();
              }
              return a;
            case 8:
              return n(f).buffer;
            case 9:
              return n(f);
            case 11:
            ;
            case 10:
              return b = n(f), new q(b.buffer, b.length, 10 === a);
            case 12:
              return new Int32Array(n(f).buffer);
          }
        }
        var f = new g, d = a.readInt();
        a.readBytes(f, d);
        return c();
      }
      var g = k.ArrayUtilities.DataBuffer, q = k.ArrayUtilities.PlainObjectDataBuffer, l;
      (function(a) {
        a[a.Undefined = 0] = "Undefined";
        a[a.Null = 1] = "Null";
        a[a.True = 2] = "True";
        a[a.False = 3] = "False";
        a[a.Number = 4] = "Number";
        a[a.String = 5] = "String";
        a[a.Array = 6] = "Array";
        a[a.Object = 7] = "Object";
        a[a.ArrayBuffer = 8] = "ArrayBuffer";
        a[a.Uint8Array = 9] = "Uint8Array";
        a[a.PlainObjectDataBufferLE = 10] = "PlainObjectDataBufferLE";
        a[a.PlainObjectDataBufferBE = 11] = "PlainObjectDataBufferBE";
        a[a.Int32Array = 12] = "Int32Array";
      })(l || (l = {}));
      (function(a) {
        a[a.None = 0] = "None";
        a[a.PlayerCommand = 1] = "PlayerCommand";
        a[a.PlayerCommandAsync = 2] = "PlayerCommandAsync";
        a[a.Frame = 3] = "Frame";
        a[a.FontOrImage = 4] = "FontOrImage";
        a[a.FSCommand = 5] = "FSCommand";
      })(f.MovieRecordType || (f.MovieRecordType = {}));
      l = function() {
        function a(c) {
          this._maxRecordingSize = c;
          this._recording = new g;
          this._recordingStarted = Date.now();
          this._recording.writeRawBytes(new Uint8Array([77, 83, 87, 70]));
          this._stopped = !1;
        }
        a.prototype.stop = function() {
          this._stopped = !0;
        };
        a.prototype.getRecording = function() {
          return new Blob([this._recording.getBytes()], {type:"application/octet-stream"});
        };
        a.prototype.dump = function() {
          (new u(this._recording.getBytes())).dump();
        };
        a.prototype._createRecord = function(a, c) {
          this._stopped || (this._recording.length + 8 + (c ? c.length : 0) >= this._maxRecordingSize ? (console.error("Recording limit reached"), this._stopped = !0) : (this._recording.writeInt(Date.now() - this._recordingStarted), this._recording.writeInt(a), null !== c ? (this._recording.writeInt(c.length), this._recording.writeRawBytes(c.getBytes())) : this._recording.writeInt(0)));
        };
        a.prototype.recordPlayerCommand = function(a, f, d) {
          var e = new g;
          c(e, f);
          e.writeInt(d.length);
          d.forEach(function(a) {
            a = r(a);
            c(e, a);
          });
          this._createRecord(a ? 2 : 1, e);
        };
        a.prototype.recordFrame = function() {
          this._createRecord(3, null);
        };
        a.prototype.recordFontOrImage = function(a, f, d, e) {
          var b = new g;
          b.writeInt(a);
          b.writeInt(f);
          b.writeUTF(d);
          c(b, r(e));
          this._createRecord(4, b);
        };
        a.prototype.recordFSCommand = function(a, c) {
          var d = new g;
          d.writeUTF(a);
          d.writeUTF(c || "");
          this._createRecord(5, d);
        };
        return a;
      }();
      f.MovieRecorder = l;
      var u = function() {
        function c(a) {
          this._buffer = new g;
          this._buffer.writeRawBytes(a);
          this._buffer.position = 4;
        }
        c.prototype.readNextRecord = function() {
          if (this._buffer.position >= this._buffer.length) {
            return 0;
          }
          var a = this._buffer.readInt(), c = this._buffer.readInt(), d = this._buffer.readInt(), e = null;
          0 < d && (e = new g, this._buffer.readBytes(e, d));
          this.currentTimestamp = a;
          this.currentType = c;
          this.currentData = e;
          return c;
        };
        c.prototype.parsePlayerCommand = function() {
          for (var c = n(this.currentData), f = this.currentData.readInt(), d = [], e = 0;e < f;e++) {
            d.push(a(this.currentData));
          }
          return{updates:c, assets:d};
        };
        c.prototype.parseFSCommand = function() {
          var a = this.currentData.readUTF(), c = this.currentData.readUTF();
          return{command:a, args:c};
        };
        c.prototype.parseFontOrImage = function() {
          var c = this.currentData.readInt(), f = this.currentData.readInt(), d = this.currentData.readUTF(), e = a(this.currentData);
          return{syncId:c, symbolId:f, assetType:d, data:e};
        };
        c.prototype.dump = function() {
          for (var a;a = this.readNextRecord();) {
            console.log("record " + a + " @" + this.currentTimestamp);
            debugger;
            switch(a) {
              case 1:
              ;
              case 2:
                console.log(this.parsePlayerCommand());
                break;
              case 5:
                console.log(this.parseFSCommand());
                break;
              case 4:
                console.log(this.parseFontOrImage());
            }
          }
        };
        return c;
      }();
      f.MovieRecordParser = u;
    })(r.Test || (r.Test = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(r) {
    (function(f) {
      var c = k.ArrayUtilities.DataBuffer, t = function(k) {
        function a(a) {
          k.call(this, a);
        }
        __extends(a, k);
        a.prototype.playUrl = function(a) {
          var c = new XMLHttpRequest;
          c.open("GET", a, !0);
          c.responseType = "arraybuffer";
          c.onload = function() {
            this.playBytes(new Uint8Array(c.response));
          }.bind(this);
          c.send();
        };
        a.prototype.playBytes = function(a) {
          this._parser = new f.MovieRecordParser(a);
          this._lastTimestamp = 0;
          this._parseNext();
        };
        a.prototype.onSendUpdates = function(a, c) {
        };
        a.prototype.onDisplayParameters = function(a) {
        };
        a.prototype.onVideoPlaybackEvent = function(a, c, f) {
        };
        a.prototype.requestTimeline = function(a, c) {
          return Promise.resolve(void 0);
        };
        a.prototype._parseNext = function() {
          if (0 !== this._parser.readNextRecord()) {
            var a = this._parser.currentTimestamp - this._lastTimestamp;
            this._lastTimestamp = this._parser.currentTimestamp;
            setTimeout(this._runRecord.bind(this), a);
          }
        };
        a.prototype._runRecord = function() {
          var a;
          switch(this._parser.currentType) {
            case 1:
            ;
            case 2:
              a = this._parser.parsePlayerCommand();
              var f = 2 === this._parser.currentType, k = c.FromArrayBuffer(a.updates.buffer);
              f ? this.processUpdates(k, a.assets) : (f = new c, this.processUpdates(k, a.assets, f));
              break;
            case 3:
              break;
            case 4:
              a = this._parser.parseFontOrImage();
              this.processRegisterFontOrImage(a.syncId, a.symbolId, a.assetType, a.data, function() {
              });
              break;
            case 5:
              a = this._parser.parseFSCommand();
              break;
            default:
              throw Error("Invalid movie record type");;
          }
          this._parseNext();
        };
        return a;
      }(r.EaselHost);
      f.PlaybackEaselHost = t;
    })(r.Test || (r.Test = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    (function(f) {
      var c = function(c) {
        function k(a, g) {
          void 0 === g && (g = 0);
          c.call(this, a);
          this._recorder = null;
          this._recorder = new f.MovieRecorder(g);
        }
        __extends(k, c);
        Object.defineProperty(k.prototype, "recorder", {get:function() {
          return this._recorder;
        }, enumerable:!0, configurable:!0});
        k.prototype._onWorkerMessage = function(a, f) {
          void 0 === f && (f = !0);
          var k = a.data;
          if ("object" === typeof k && null !== k) {
            switch(k.type) {
              case "player":
                this._recorder.recordPlayerCommand(f, k.updates, k.assets);
                break;
              case "frame":
                this._recorder.recordFrame();
                break;
              case "registerFontOrImage":
                this._recorder.recordFontOrImage(k.syncId, k.symbolId, k.assetType, k.data);
                break;
              case "fscommand":
                this._recorder.recordFSCommand(k.command, k.args);
            }
            c.prototype._onWorkerMessage.call(this, a, f);
          }
        };
        return k;
      }(f.TestEaselHost);
      f.RecordingEaselHost = c;
    })(k.Test || (k.Test = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
console.timeEnd("Load GFX Dependencies");


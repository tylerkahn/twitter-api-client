(self.webpackChunk_twitter_responsive_web =
  self.webpackChunk_twitter_responsive_web || []).push([
  ["endpoints.Contacts"],
  {
    78527: (t, r, e) => {
      "use strict";
      e.r(r), e.d(r, { default: () => c });
      e(36728), e(6886);
      var n = e(6899),
        s = e(65188),
        i = e(44171),
        o = e.n(i),
        a = e(46395);
      const u = (t, r, e) => {
          const n = (0, a.Z)(t, r, e);
          if (t && "string" == typeof n.vcard) {
            const t = o().parse(n.vcard),
              r = (t && t[0]) || null;
            return { ...n, vcard: r };
          }
          return n;
        },
        h = new n.fK.Entity(
          "vcards",
          {},
          {
            idAttribute: (t) => ((0, s.Z)(t.id) ? t.id : t.id_str),
            processStrategy: u,
          }
        ),
        p = { count: 100 },
        c = ({ apiClient: t, featureSwitches: r }) => ({
          fetchAddressBook: (r, e = {}) =>
            t
              .get("contacts/addressbook", { ...p, ...r }, e)
              .then((t) => (0, n.Fv)(t, { contacts: [h] })),
          uploadAddressBook(r, e) {
            const { contacts: n, ...s } = r,
              i = [];
            for (let t = 0; t < n.length; t += 100) i.push(n.slice(t, t + 100));
            return Promise.all(
              i.map((r) =>
                t.post(
                  "contacts/upload_v2",
                  { ...s, contacts: r },
                  {},
                  { ...e, "content-type": "application/json" }
                )
              )
            );
          },
        });
    },
    49874: (t) => {
      t.exports = function (t, r, e) {
        if (((t = t.replace(/\r?\n/g, "")), null != r && r < 5))
          throw new Error("Maximum length must not be less than 5");
        if (((r = null != r ? r : 78), t.length <= r)) return t;
        r -= 4;
        var n = [],
          s = t.length,
          i = 0,
          o = 0;
        if (!e)
          for (; ~(i = t.lastIndexOf(" ", r + o)) && !(i <= o); )
            t.slice(o).length > r
              ? (n.push((o ? " " : "") + t.slice(o, i)), (o = i + 1))
              : (n.push((o ? " " : "") + t.slice(o)), (o = s));
        for (r++; o < s; ) n.push(t.slice(o, (o += r)));
        return n.join("\r\n ");
      };
    },
    19858: (t, r, e) => {
      var n = e(91925),
        s = e(21681);
      function i(t, r, e) {
        Array.isArray(t[r])
          ? t[r].push(e)
          : null != t[r]
          ? (t[r] = [t[r], e])
          : (t[r] = e);
      }
      function o(t, r) {
        var e = r.split("="),
          s = n(e[0]),
          o = e[1];
        return (
          (null != o && "" !== o) || ((o = e[0]), (s = "type")),
          "type" === s
            ? (o
                .toLowerCase()
                .split(",")
                .forEach(function (r) {
                  i(t, s, r);
                }),
              t)
            : (i(t, s, o), t)
        );
      }
      t.exports = function (t) {
        for (
          var r = {},
            e = null,
            a = /^([^;:]+)((?:;(?:[^;:]+))*)(?:\:(.+))?$/i,
            u = t.length - 1,
            h = 1;
          h < u;
          h++
        ) {
          e = t[h];
          var p = a.exec(e);
          if (p) {
            var c = p[1].split("."),
              l = c.pop(),
              d = c.pop(),
              f = p[3],
              v = (p[2] ? p[2].replace(/^;|;$/g, "").split(";") : []).reduce(
                o,
                d ? { group: d } : {}
              ),
              y = n(l);
            i(r, y, new s(y, f, v));
          }
        }
        return r;
      };
    },
    21681: (t) => {
      function r(t, e, n) {
        if (!(this instanceof r)) return new r(e);
        null != n && Object.assign(this, n),
          (this._field = t),
          (this._data = e),
          Object.defineProperty(this, "_field", { enumerable: !1 }),
          Object.defineProperty(this, "_data", { enumerable: !1 });
      }
      function e(t) {
        return t.replace(/([A-Z])/g, "-$1").toUpperCase();
      }
      (r.fromJSON = function (t) {
        var e = t[0],
          n = t[1];
        return (
          /text/i.test(t[2]) || (n.value = t[2]),
          new r(e, Array.isArray(t[3]) ? t[3].join(";") : t[3], n)
        );
      }),
        (r.prototype = {
          constructor: r,
          is: function (t) {
            return (
              (t = (t + "").toLowerCase()),
              Array.isArray(this.type) ? this.type.indexOf(t) : this.type === t
            );
          },
          isEmpty: function () {
            return null == this._data && 0 === Object.keys(this).length;
          },
          clone: function () {
            return new r(this._field, this._data, this);
          },
          toString: function (t) {
            for (
              var r = (this.group ? this.group + "." : "") + e(this._field),
                n = Object.keys(this),
                s = [],
                i = 0;
              i < n.length;
              i++
            )
              "group" !== n[i] && s.push(e(n[i]) + "=" + this[n[i]]);
            return (
              r +
              (s.length ? ";" + s.join(";") : s) +
              ":" +
              (Array.isArray(this._data) ? this._data.join(";") : this._data)
            );
          },
          valueOf: function () {
            return this._data;
          },
          toJSON: function () {
            var t = Object.assign({}, this);
            "text" === t.value && ((t.value = void 0), delete t.value);
            var r = [this._field, t, this.value || "text"];
            switch (this._field) {
              default:
                r.push(this._data);
                break;
              case "adr":
              case "n":
                r.push(this._data.split(";"));
            }
            return r;
          },
        }),
        (t.exports = r);
    },
    44171: (t, r, e) => {
      function n() {
        if (!(this instanceof n)) return new n();
        (this.version = n.versions[n.versions.length - 1]), (this.data = {});
      }
      (n.mimeType = "text/vcard"),
        (n.extension = ".vcf"),
        (n.versions = ["2.1", "3.0", "4.0"]),
        (n.foldLine = e(49874)),
        (n.normalize = function (t) {
          return (t + "")
            .replace(/^[\s\r\n]+|[\s\r\n]+$/g, "")
            .replace(/(\r?\n)\s*(\r?\n)|$/g, "$1")
            .replace(/\r?\n[\x20\x09]+/g, "");
        }),
        (n.isSupported = function (t) {
          return /^\d\.\d$/.test(t) && -1 !== n.versions.indexOf(t);
        }),
        (n.parse = function (t) {
          for (
            var r = (t + "").split(/(?=BEGIN\:VCARD)/gi), e = [], s = 0;
            s < r.length;
            s++
          )
            e.push(new n().parse(r[s]));
          return e;
        }),
        (n.parseLines = e(19858)),
        (n.fromJSON = function (t) {
          if (
            null == (t = "string" == typeof t ? JSON.parse(t) : t) ||
            !Array.isArray(t)
          )
            return new n();
          if (!/vcard/i.test(t[0]))
            throw new Error("Object not in jCard format");
          var r = new n();
          return (
            t[1].forEach(function (t) {
              r.addProperty(n.Property.fromJSON(t));
            }),
            r
          );
        }),
        (n.format = function (t, r) {
          if (
            ((r = r || t.version || n.versions[n.versions.length - 1]),
            !n.isSupported(r))
          )
            throw new Error('Unsupported vCard version "' + r + '"');
          var e = [];
          e.push("BEGIN:VCARD"), e.push("VERSION:" + r);
          for (var s = Object.keys(t.data), i = "", o = 0; o < s.length; o++)
            if ("version" !== s[o])
              if (((i = t.data[s[o]]), Array.isArray(i)))
                for (var a = 0; a < i.length; a++)
                  i[a].isEmpty() || e.push(n.foldLine(i[a].toString(r), 75));
              else i.isEmpty() || e.push(n.foldLine(i.toString(r), 75));
          return e.push("END:VCARD"), e.join("\n");
        }),
        (n.Property = e(21681)),
        (n.prototype = {
          constructor: n,
          get: function (t) {
            return null == this.data[t]
              ? this.data[t]
              : Array.isArray(this.data[t])
              ? this.data[t].map(function (t) {
                  return t.clone();
                })
              : this.data[t].clone();
          },
          set: function (t, r, e) {
            return this.setProperty(new n.Property(t, r, e));
          },
          add: function (t, r, e) {
            var s = new n.Property(t, r, e);
            return this.addProperty(s), this;
          },
          setProperty: function (t) {
            return (this.data[t._field] = t), this;
          },
          addProperty: function (t) {
            var r = t._field;
            return (
              Array.isArray(this.data[r])
                ? this.data[r].push(t)
                : null != this.data[r]
                ? (this.data[r] = [this.data[r], t])
                : (this.data[r] = t),
              this
            );
          },
          parse: function (t) {
            var r = n.normalize(t).split(/\r?\n/g),
              e = r[0],
              s = r[1],
              i = r[r.length - 1];
            if (!/BEGIN:VCARD/i.test(e))
              throw new SyntaxError(
                'Invalid vCard: Expected "BEGIN:VCARD" but found "' + e + '"'
              );
            if (!/END:VCARD/i.test(i))
              throw new SyntaxError(
                'Invalid vCard: Expected "END:VCARD" but found "' + i + '"'
              );
            if (!/VERSION:\d\.\d/i.test(s))
              throw new SyntaxError(
                'Invalid vCard: Expected "VERSION:\\d.\\d" but found "' +
                  s +
                  '"'
              );
            if (
              ((this.version = s.substring(8, 11)),
              !n.isSupported(this.version))
            )
              throw new Error('Unsupported version "' + this.version + '"');
            return (this.data = n.parseLines(r)), this;
          },
          toString: function (t, r) {
            return (t = t || this.version), n.format(this, t);
          },
          toJCard: function (t) {
            t = t || "4.0";
            for (
              var r = Object.keys(this.data),
                e = [["version", {}, "text", t]],
                n = null,
                s = 0;
              s < r.length;
              s++
            )
              if ("version" !== r[s])
                if (((n = this.data[r[s]]), Array.isArray(n)))
                  for (var i = 0; i < n.length; i++) e.push(n[i].toJSON());
                else e.push(n.toJSON());
            return ["vcard", e];
          },
          toJSON: function () {
            return this.toJCard(this.version);
          },
        }),
        (t.exports = n);
    },
    91925: (t) => {
      "use strict";
      function r(t) {
        for (var r = !1, e = 0; e < t.length; e++) {
          var n = t.charAt(e);
          r && /[a-zA-Z]/.test(n) && n.toUpperCase() === n
            ? ((t = t.substr(0, e) + "-" + t.substr(e)), (r = !1), e++)
            : (r = n.toLowerCase() === n);
        }
        return t;
      }
      t.exports = function () {
        var t = [].map
          .call(arguments, function (t) {
            return t.trim();
          })
          .filter(function (t) {
            return t.length;
          })
          .join("-");
        return t.length
          ? 1 === t.length
            ? t.toLowerCase()
            : /[_.\- ]+/.test(t)
            ? (t = r(t))
                .replace(/^[_.\- ]+/, "")
                .toLowerCase()
                .replace(/[_.\- ]+(\w|$)/g, function (t, r) {
                  return r.toUpperCase();
                })
            : t === t.toUpperCase()
            ? t.toLowerCase()
            : t[0] !== t[0].toLowerCase()
            ? t[0].toLowerCase() + t.slice(1)
            : t
          : "";
      };
    },
  },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/endpoints.Contacts.1131c5aa.js.map

(function(t) {
    function e(e) {
      for (var s, r, o = e[0], l = e[1], c = e[2], d = 0, m = []; d < o.length; d++) r = o[d],
      n[r] && m.push(n[r][0]),
      n[r] = 0;
      for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (t[s] = l[s]);
      u && u(e);
      while (m.length) m.shift()();
      return i.push.apply(i, c || []),
      a()
    }
    function a() {
      for (var t, e = 0; e < i.length; e++) {
        for (var a = i[e], s = !0, o = 1; o < a.length; o++) {
          var l = a[o];
          0 !== n[l] && (s = !1)
        }
        s && (i.splice(e--, 1), t = r(r.s = a[0]))
      }
      return t
    }
    var s = {},
    n = {
      app: 0
    },
    i = [];
    function r(e) {
      if (s[e]) return s[e].exports;
      var a = s[e] = {
        i: e,
        l: !1,
        exports: {}
      };
      return t[e].call(a.exports, a, a.exports, r),
      a.l = !0,
      a.exports
    }
    r.m = t,
    r.c = s,
    r.d = function(t, e, a) {
      r.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: a
      })
    },
    r.r = function(t) {
      "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }),
      Object.defineProperty(t, "__esModule", {
        value: !0
      })
    },
    r.t = function(t, e) {
      if (1 & e && (t = r(t)), 8 & e) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (r.r(a), Object.defineProperty(a, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var s in t) r.d(a, s,
      function(e) {
        return t[e]
      }.bind(null, s));
      return a
    },
    r.n = function(t) {
      var e = t && t.__esModule ?
      function() {
        return t["default"]
      }: function() {
        return t
      };
      return r.d(e, "a", e),
      e
    },
    r.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    },
    r.p = "/";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
    l = o.push.bind(o);
    o.push = e,
    o = o.slice();
    for (var c = 0; c < o.length; c++) e(o[c]);
    var u = l;
    i.push([0, "chunk-vendors"]),
    a()
  })({
    0 : function(t, e, a) {
      t.exports = a("56d7")
    },
    "0131": function(t, e, a) {
      t.exports = a.p + "img/wallet.a164f1ba.png"
    },
    "02db": function(t, e, a) {
      t.exports = a.p + "img/scr888.12af847d.png"
    },
    "02f7": function(t, e, a) {
      "use strict";
      var s = a("8522"),
      n = a.n(s);
      n.a
    },
    "034f": function(t, e, a) {
      "use strict";
      var s = a("1356"),
      n = a.n(s);
      n.a
    },
    "03df": function(t, e, a) {},
    "0498": function(t, e, a) {
      "use strict";
      var s = a("2d14"),
      n = a.n(s);
      n.a
    },
    "0c94": function(t, e, a) {
      t.exports = a.p + "img/skype.3e710219.png"
    },
    1356 : function(t, e, a) {},
    1448 : function(t, e, a) {
      "use strict";
      var s = a("30b3"),
      n = a.n(s);
      n.a
    },
    "226e": function(t, e) {
      t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAABVlJREFUeJzt2l2oXFcVwPHfOpNrbExbW78pippK/KjUz4i1FBRLG2ICGiQEpAQUfbAPIupT9aU+2CIUlILogw1SjaKIQluxQYqiD01Lra1oaRrRok2b9CNtos1N5iwfztzcuR8z+8y9cxPB878shrln77XXWqy99zp7Dx0dHR0dHR0dHR0d/49EqcHMvuNnGp4W6pzvUlUpJEgpxKBlLtHT748YIKl6VBWZZ/51bbAT78WbUeFZ/Fnkr5MfRVZPipoc4ULWl0qP9XdfsNSYIapxD88B78Nvg7vwGbwbF+J8vAFbZdwSGYfIG0bouAIP5LqX7Mj168c6D+tKDer5AF8a8vZe5DYcbTQXE6jMvImfwg9a9tqAG2Vchd14NbZqsuYKSa3/gTb2FQMwxHZswe9wOWYn6CtG2dLk4A7tnR/mavxDE5Bh3t873Z+FUTNv4fDt2DH4fCvuC14+QV9VNUJ6XhnhF1lM1pEsdv7KCPdFVOtE9dGiXS0HqbB56Ps78afgspb9x3HLFHTAP3GdzKdSfBPHZNm+4iTp/fg4bMSTlkYb9mBvaReYGy2HnoV4hXS0ZENLDg9svLxRHnvrrPbkrvPGdipnQOPTLE6OaHEbfojXFHXlEtlW7NOe15pzXt5asyej7F6xRfSJvlk8PqbZ7hCP4iuYGatv6A/vKlo4IZm+Ll3fJFp5YZlkEfxD4fn5uIl8DF/WbE0lLp5g/DZ8Gl9F6x26GIDsNSJ8t6URr8fN+Bv24pNGOzqt+T/H7RGIEJmqLG2CbeqA+Sx6AL/BR1oaswHXDeQ47sUBPIS/4yCOtdTVljfhr8wtXbW60KF1ITTIqJ3J0yYvoTdqAjccvFNGL6wr5cTwl2wxD9o68rrkHclzmnQ+OLltS5jRBGZaPJ9VdTSryrCUKLdotquNeBi/wofxLc3b2f8ST0Rd/yfq2rCUaDsFHtXM42sGckq5zD7bHGyx6y2hbSEE+4f+O4OXTj7cGhIezF5YLCUmWczaboPniOr3Ta29SEq9yorP1K13kX9ZtZ1rw6na7D3qk+TsQinQIgDVsHx8tZauDXl3ZPx7fr4Oy3iKAejHhmF5JPU+oVhenG1ib1gnzGg+56XECs4E8+eak5h/Td53TTgu/EykZaVAMQBVvrhASDL2i7gkI3bL/KVzWBME3676+lGznJRo8S5wauHXCBGxXebFwYMi7sHbcNGKPFgNkZJvqFot+MtSDsCiQ4VAhvWRblvZkFMiUvZnbsx+7/mVOk+rKbCM9P0Ud6z8HHP1RHo2wtciUjVGShQzoFpmHkVSh1115XF5DlIfKXaJ06qZHHvwU1oGihlQ96irkENS9wJxQtqCIxNZPgWC71Xh7ioGR2wxWkqUT4SQkY0sNeVgRnUZ7liJIyvkoSrjs1Ud2kiJ1nXAgkDEggdPpfwYtuEnmow4afqHHfB0ZlxVJ/2WUmLiQqh5M0j10gXmTuzSHIZegycm1T2O4IUUW+qM504LbaXEKm+HU6jnjrjn2Iqb8MbV6V7AYeE9ODRFnZjscrTETnwBV05RJxzIyG0ijrTY1SamTQBmNCdAi7lIc59/rebm+C1TtKsh41ZcH2vh+YA2AfggPqdx+AguwCV4O162RnY9kuKLsroz2hT0q6BNAO4NNiU3aOb3WnJYc1t88xqPc4Y2i+CL0vexSZPy3zH9G50Dwuc1vwc6a84z+SJ4/0C+hO0irsaHZG4e320JxzQ3Tfs1RdQf0eyxU/jVzSSsdBc4IXNfVtW+gLreJGKz5rX4VZpa4DxNhp3EM8Qzg4vTQ3g4wwtruLZ1dHR0dHR0dHR0dHR0jOO/g+vd+UmlWmMAAAAASUVORK5CYII="
    },
    "23a1": function(t, e, a) {
      "use strict";
      var s = a("9647"),
      n = a.n(s);
      n.a
    },
    "253e": function(t, e, a) {
      t.exports = a.p + "img/CN.00d7b6d9.png"
    },
    "260c": function(t, e, a) {},
    "2d14": function(t, e, a) {},
    "30b3": function(t, e, a) {},
    3647 : function(t, e, a) {
      t.exports = a.p + "img/Islam.ed37cf4b.png"
    },
    "36b1": function(t, e, a) {},
    "36fe": function(t, e, a) {
      "use strict";
      var s = a("e009"),
      n = a.n(s);
      n.a
    },
    3808 : function(t, e, a) {
      "use strict";
      var s = a("45bc"),
      n = a.n(s);
      n.a
    },
    "3aa5": function(t, e, a) {
      t.exports = a.p + "img/maybank.64031317.png"
    },
    "3cf4": function(t, e, a) {
      t.exports = a.p + "img/CIMB.10e81dc5.png"
    },
    "3e66": function(t, e, a) {
      "use strict";
      var s = a("260c"),
      n = a.n(s);
      n.a
    },
    "3e8a": function(t, e, a) {
      "use strict";
      var s = a("f8ba"),
      n = a.n(s);
      n.a
    },
    "3ebb": function(t, e) {
      t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAA4VBMVEX///8ANnvtHCTrAAAANHoAKnMAOYHtGiLsFBwAMXjsAA/+7u/2kpYAEWj6y83tHyb94eL70tPxaWv1hIfuPELvMjrtMDP2oqXDzdwAHm4AJ3R1kbWPoLyruM2cq8UALnb+8vIhUo/xXWHa4+0AHGz++PgAAGEACWXs8fbx9fgAF2oAAGckOXrM1eLwVllqfaX3qaz6wsTwUFT1jI/0fID4qKqEm71rh684UYji5u5Ia51aeqZ1h6u0xdpLcKAmQoBAWo41SIJgcZuhtM1OZpcdLXHvREksQn/xbXArWpM4YZdHOt7UAAAGRklEQVR4nO3afX+aOAAHcFGoxo5z63UbiQK2oCLVdbfbrK4PPtRet73/F3RAAvLUXlWcfnq/7/4YQrT5EQghUCoBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPwPdI590ULHW/L/fxsuHLf3W7+tfas3GtV/3pVK706rjUb9sxfrS63RqLzxtn3xttW/dvZdxe38XanV6g0v4B+1eq1W+VgqvX3vL3z1tjW8bZWT431XcTtvKtVy7YMfsFErV4OAp7Vyo/Knt+19vVyuv86A5QID9h1r6Js4/SIqvK71A040bpJYK1Zq6d8f6pdjk9rePzK/1K30ZkvLGlrOXgO2VJMQolA9sZYwb63JSCreaE6pYhJZlompUDZuDpMFmj2SYpLBeGEk995vDugG9cgE9NemAjYHtilLK7LiPo4SB2o2oP/bjD7e7jEgDerKkgGPFH+tchRbNXR7REoj3Wm8EZtqpkTA7F4WdJzuLqAmsdy6UzeW8KmAkqzeFNMn7SygNY/yKdRVXZuFzcnmq75GBJRNcXCujmii3h90wP61HbZYl/xqtkZ3Rz1V1N5eNY4IyFyVc3td1RT74ahUhF0FNC5EQ7BlWNC6elB4e7nRd4OAMhtZoeF981E0fbeQjmZHAftMZGHxXlN/5GuVcdiD8IDJHtka8FLq6IAD3nd5K/SSVwX9QeY9SPhlEdBI/Na9G5Ryrw444HfKz6Np6stNHpz+fC7ghASnoXt9uAE13lKEZcZmUlCOXFjPBZSCgOoBt6DBG5BeZq5lhss7EOOZgLod7J6ekf7ywQTs3zBeJtsPitYJz6+8gA6/gpKLQgakOwk4WQafzHlqaO3pL4Kvs2UiYOy3+vqMN7/7a8toneN2u93hAf/odP4KAn7utEXATrtz6gf84ReLz8y8IOBwHDQTW+SMJ/nXlbG1CijJ059nIdbjrU+nWzZg5+On8/PzEz9NtewtfqlWy+Xa6cn5p4ZYOPEXqh+8UuefTtYLOA0C0rzhpE79E4w8DmMBJYVFxGCNLLOtv57jk0rd4+XzUvhL/kKj5i1U4wtlf6FeqbTXCshPNJp3pdaCMSkZaPGAGexu65uJ4x9BpJeprRdQI+TpgOQlAeXpzbYJ9xbQzAsoR8KEKtnyGH3pIVrd4BDV5DUDKoxGmLiboPJ2bdj5tsNOZsDPwWbO371lciagcm1EWguTXyak3pYjmV1eJngvyvKmHYygFzXnsctE8m6iP5zy0Q4ZbNuR+nZyobdm/NMsMxT1Bjn8Ojhz4gGTg7L+Hb8jpEWM1XYzVLvkgy0p2wTOONhExZ1CbkBxnuafwwcRMCyT0wRDGtS9N3ouYHSIFzDvtGlAibYSa01epTP+SVdk/jFTwzs+VRNOR/xHwAKmDtcPaPAThC3jlbd6QSIqBsgOPwmjhlpVvRuUU8zScwHFIbqngDqvu6nET7BWL1gZzTI0+Wezl+xmnBnfO2p4AckPOBIHSRFTo+sHHA74aIMuV+ssfvsgu+FcpnXBZ0HZOJ7Q4Z2PZLJw5+TPyfApi/RZ8LsClpbhhTg6/qxlWPHoFudajMHYfHXTO1wyvm/cqGlyroNWUxFjmYfMs6rfEzCcMZN609HEcSbatSsi26turz8Vs5vKxZkx9IpZ93cXopiymtoO7wej28EzUw3nh91FAfk2egAa1l1irjmdStQWe5zIsV2um2KtzFQmTaema4u5e5muJuXFWNRc3Q8q4Qy/2S1iILNRwFtX1N3vahQzeoRkx8ee/ZYbbSCKokRfkbvNVd/x5MMXiaiFzDlt9gi7dZF9LuYdsbNkpzfq5j1eMrvx6c4nA9Ji5tQ2fUZvPFAiJyokK+4yXep2RpVkKcm054mHRk1VzvCfgLqzIjqYzQOWtAWhLMwo+89k563sRcsxZjaNnojJhNmDUfLCeNWlGWwwvjQKe2Fh07csHO1mzFybY9LMyN44+Cb6QgpLuWxmpPsNrWWk6cW+hbD5ayR9Z6g3rzwj3bsMPPkH+hOt5RX6/uu6VejbEy/16l8ECl7l+vCKX+UKXsY7fe5lvPa+q7id6C3K1OuU7dIreZ0SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOCA/QuEueOhrTkH0AAAAABJRU5ErkJggg=="
    },
    "3ed0": function(t, e) {
      t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA8CAYAAADVPrJMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0NmNhYjhiMi05YWRjLTQyOGYtODU4Ni1kYzVjOTY1YzUyNTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDRCMTA0RTNCRDA0MTFFNUE4ODQ5NTNFQzc4NzIyNTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDRCMTA0RTJCRDA0MTFFNUE4ODQ5NTNFQzc4NzIyNTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpiMzA4YjM0Mi01ODhlLTQxNGUtYTVlOS05ZGViOTFjNjc4ODciIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphNTAzNTQxNC0wNTVmLTExNzktODk0YS1kOTgxNjgzODk5NTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6g1dHdAAAGmUlEQVR42tSbC2wUVRSGz/b9XvqC0rJU+7RYimBKeBUolqpRCNFE0bQ0mEiDCohBFAQiRlED+AATtCSiqShUg8agBkpBqbRgkVIKLV1riyUtfQEt24U+t57TvaN97ezM7MzOcJIvm+7O3t5/751zzj33ju5c3kxQyFyQKcgMJB65DzEgvkgAokPuIGakGalCjMgF5CTSoVTH3GRuzxNZjDyNzEeC7Vw/hr3GILMGvd+L/IH8iHyD1MnZSZ1MI30v8iryLKKX+Ye0IMeRj5CfkX45pqAjFo3ksmm5UgHBXB/TkMNIKbJELdFeyBakHMlQ4DaxZeQjvkeOsFvCaaKTkHPIVsQb1LF05CLyCnOIiop+HjmDJID6Rk5zJ3N2Y5QQ7YrsQnLY1NaSPY4UIhFyiibBXyGrQLuWiJxiuYDDonVsdJeC9i0SyUcmOCp6G/Ic3D02gcXyEKmiaXRfh7vPJiNfs9tSlOg45DNJKZ6LBxge3ACTFx2G+LQvICBslhrCFyJviElD6YcoRqaLjiF+kRCVsh28/IbeVjWnNkJ7w6/OFk75ezJyXshIZ0sRTCOakP7lCMFkUbO3gZtXqLNFU5a4ZzSNw98gB/CO2Nb9QqZCdMoO0Ll62E7S5+xQY5rTsna5PdGU1gWKym7cvCF67gd2r/MJjIXQ2GfUEL4Z8bAlmlK5F8S2aJj2Gri4egqLJw+swmkeokb8zrAlOlvs0tDdJxyCItNF9WBcfIYao73OluhlYlsKjnxE9H/XR8zFmKFztugE5smHiJ6GTBLtwMZOE7808g0DFxdPNUZ72XDRT0ppxVsfJfo7nbf+AUtflxqilwwXPV9KK65uPqK/U3f2fZChzCU1L4/nRPtLSUZAZNctPbeh+re1YL5+Xs28PJUTnQQSa1x93bcEXdfRUgYVRzPB1HxG7cXIdC5Vi5faQqepDty9+eOuqeksVJ9crZUV2CRupOOktmC+XmH3mvqy3VpadsZwosOktmBqLLZ/31t6tSSadlzcSbSf1BY6Wkuh+3Yz/+orPEVrRYZAzntLtmbjAd7PQ2Oe0JpoLxdHg2ZL9UGw9N6x+bmHz1gYn7hSS6J7SbTJoSb6+6G+PIf3krCETMzeYrUi2uS4aLRWHO0ucwO/25y3G5egXpoR3ShHS7VFm/hrN54BEJv6qdqCG7mQVSlHa3faLsO1S/vsVE/iIHrOTvE5vkfgQJVVBqvhMjKjbD9jxV4ICEsG3+BE2yFs/Ey4Z+a7cKV4g932qNgYlpAF3oHx6CzN0NZQBC1V+zETvCK1i7TTOVACpu3Wm2DdBXTYqGaW+NghHB3+IsytxhKoKVoP/TaWmWPjMiBiyujVq6ulu9CPHJDSvRXIXpreFG9OyzXaFL6MJ14SMIrJkPDwfvAfN2PEZ+FJa2wKJjNMXQ0TkzdL6V4hN9L0SqcKtsrpMUhMjIAqKVk7Ttu2+kJMWbsg0JAG+nBhuyIdrRfg78K1vHnC4KU8WIuE/4mmYw2yL3T1EQsgatbbirpjWulV5WcJqcZsR9YPrpyUcTe5nNZefxxqT7+pbE7pPxEMyVuEXJo7vFxElqNEp9quHkWHtUlR4UGGVHuX/AnWQ0EjRH9OyZUSnaIRN554Efq62xUR3ddjtnfJkD2lwaLpmx8qNRpmXIZWHMlE51Mue9u0K8pjdPwyz5Zosk/kSktHXd50tsJfJ7KhsTJXnhHuNoGxIBs6Wkr4LqMb3sInmip965ROgK9d3ANVx1ZgZ6UHjNs3jVCZvxzMN3hnzrHhozw4ZA15D6wHVh5yxgqAwlpI1GJMVqYLHN12aKrKg6bL++xGMxaKjUJEk0WwuO20LUavgGjQj58NPpi3e/pFgLunfiClpcSjp6t9IB6bmkrgJkYDS4+gU9EvIx+P9gHfKeBHkZ9AwjFEDdh3yFO2qkJ8p4t+QTbehYJpRyELeMpg9s6RvWdrimjULiGLyM/xrgQFNLQWrOdCtW6URtMJgRa7y18BjdE0WQPWsxv9GhX8OzIXaRC05hfRMC2XqIjdpjHBVHhbyAohILdosh9Y7CvWgNg25qFXspgMSonmFuNzWBxUa9QPIvcj30r5stRnOCzMq8ey104niT3J7t2lQu9fOUVz1spGnB5ResuRjvBYF8ufZyPzgNW5HDGdzE/g0XHj+czhLQCBJ+1HMcozC8D6WNIh5IacnZT70aI+1tkC9nc4/P/YYRybEUFgffSQc0YdzPPWIrTLT08CUflKsY3tfwUYADI9rUjGSoXjAAAAAElFTkSuQmCC"
    },
    "3f52": function(t, e, a) {
      "use strict";
      var s = a("d02b"),
      n = a.n(s);
      n.a
    },
    "413d": function(t, e, a) {
      t.exports = a.p + "img/TH.5fd4b8d5.png"
    },
    "45bc": function(t, e, a) {},
    4678 : function(t, e, a) {
      var s = {
        "./af": "2bfb",
        "./af.js": "2bfb",
        "./ar": "8e73",
        "./ar-dz": "a356",
        "./ar-dz.js": "a356",
        "./ar-kw": "423e",
        "./ar-kw.js": "423e",
        "./ar-ly": "1cfd",
        "./ar-ly.js": "1cfd",
        "./ar-ma": "0a84",
        "./ar-ma.js": "0a84",
        "./ar-sa": "8230",
        "./ar-sa.js": "8230",
        "./ar-tn": "6d83",
        "./ar-tn.js": "6d83",
        "./ar.js": "8e73",
        "./az": "485c",
        "./az.js": "485c",
        "./be": "1fc1",
        "./be.js": "1fc1",
        "./bg": "84aa",
        "./bg.js": "84aa",
        "./bm": "a7fa",
        "./bm.js": "a7fa",
        "./bn": "9043",
        "./bn.js": "9043",
        "./bo": "d26a",
        "./bo.js": "d26a",
        "./br": "6887",
        "./br.js": "6887",
        "./bs": "2554",
        "./bs.js": "2554",
        "./ca": "d716",
        "./ca.js": "d716",
        "./cs": "3c0d",
        "./cs.js": "3c0d",
        "./cv": "03ec",
        "./cv.js": "03ec",
        "./cy": "9797",
        "./cy.js": "9797",
        "./da": "0f14",
        "./da.js": "0f14",
        "./de": "b469",
        "./de-at": "b3eb",
        "./de-at.js": "b3eb",
        "./de-ch": "bb718",
        "./de-ch.js": "bb718",
        "./de.js": "b469",
        "./dv": "598a",
        "./dv.js": "598a",
        "./el": "8d47",
        "./el.js": "8d47",
        "./en-SG": "cdab",
        "./en-SG.js": "cdab",
        "./en-au": "0e6b",
        "./en-au.js": "0e6b",
        "./en-ca": "3886",
        "./en-ca.js": "3886",
        "./en-gb": "39a6",
        "./en-gb.js": "39a6",
        "./en-ie": "e1d3",
        "./en-ie.js": "e1d3",
        "./en-il": "7333",
        "./en-il.js": "7333",
        "./en-nz": "6f50",
        "./en-nz.js": "6f50",
        "./eo": "65db",
        "./eo.js": "65db",
        "./es": "898b",
        "./es-do": "0a3c",
        "./es-do.js": "0a3c",
        "./es-us": "55c9",
        "./es-us.js": "55c9",
        "./es.js": "898b",
        "./et": "ec18",
        "./et.js": "ec18",
        "./eu": "0ff2",
        "./eu.js": "0ff2",
        "./fa": "8df4",
        "./fa.js": "8df4",
        "./fi": "81e9",
        "./fi.js": "81e9",
        "./fo": "0721",
        "./fo.js": "0721",
        "./fr": "9f26",
        "./fr-ca": "d9f8",
        "./fr-ca.js": "d9f8",
        "./fr-ch": "0e49",
        "./fr-ch.js": "0e49",
        "./fr.js": "9f26",
        "./fy": "7118",
        "./fy.js": "7118",
        "./ga": "5120",
        "./ga.js": "5120",
        "./gd": "f6b4",
        "./gd.js": "f6b4",
        "./gl": "8840",
        "./gl.js": "8840",
        "./gom-latn": "0caa",
        "./gom-latn.js": "0caa",
        "./gu": "e0c5",
        "./gu.js": "e0c5",
        "./he": "c7aa",
        "./he.js": "c7aa",
        "./hi": "dc4d",
        "./hi.js": "dc4d",
        "./hr": "4ba9",
        "./hr.js": "4ba9",
        "./hu": "5b14",
        "./hu.js": "5b14",
        "./hy-am": "d6b6",
        "./hy-am.js": "d6b6",
        "./id": "5038",
        "./id.js": "5038",
        "./is": "0558",
        "./is.js": "0558",
        "./it": "6e98",
        "./it-ch": "6f12",
        "./it-ch.js": "6f12",
        "./it.js": "6e98",
        "./ja": "079e",
        "./ja.js": "079e",
        "./jv": "b540",
        "./jv.js": "b540",
        "./ka": "201b",
        "./ka.js": "201b",
        "./kk": "6d79",
        "./kk.js": "6d79",
        "./km": "e81d",
        "./km.js": "e81d",
        "./kn": "3e92",
        "./kn.js": "3e92",
        "./ko": "22f8",
        "./ko.js": "22f8",
        "./ku": "2421",
        "./ku.js": "2421",
        "./ky": "9609",
        "./ky.js": "9609",
        "./lb": "440c",
        "./lb.js": "440c",
        "./lo": "b29d",
        "./lo.js": "b29d",
        "./lt": "26f9",
        "./lt.js": "26f9",
        "./lv": "b97c",
        "./lv.js": "b97c",
        "./me": "293c",
        "./me.js": "293c",
        "./mi": "688b",
        "./mi.js": "688b",
        "./mk": "6909",
        "./mk.js": "6909",
        "./ml": "02fb",
        "./ml.js": "02fb",
        "./mn": "958b",
        "./mn.js": "958b",
        "./mr": "39bd",
        "./mr.js": "39bd",
        "./ms": "ebe4",
        "./ms-my": "6403",
        "./ms-my.js": "6403",
        "./ms.js": "ebe4",
        "./mt": "1b45",
        "./mt.js": "1b45",
        "./my": "8689",
        "./my.js": "8689",
        "./nb": "6ce3",
        "./nb.js": "6ce3",
        "./ne": "3a39",
        "./ne.js": "3a39",
        "./nl": "facd",
        "./nl-be": "db29",
        "./nl-be.js": "db29",
        "./nl.js": "facd",
        "./nn": "b84c",
        "./nn.js": "b84c",
        "./pa-in": "f3ff",
        "./pa-in.js": "f3ff",
        "./pl": "8d57",
        "./pl.js": "8d57",
        "./pt": "f260",
        "./pt-br": "d2d4",
        "./pt-br.js": "d2d4",
        "./pt.js": "f260",
        "./ro": "972c",
        "./ro.js": "972c",
        "./ru": "957c",
        "./ru.js": "957c",
        "./sd": "6784",
        "./sd.js": "6784",
        "./se": "ffff",
        "./se.js": "ffff",
        "./si": "eda5",
        "./si.js": "eda5",
        "./sk": "7be6",
        "./sk.js": "7be6",
        "./sl": "8155",
        "./sl.js": "8155",
        "./sq": "c8f3",
        "./sq.js": "c8f3",
        "./sr": "cf1e",
        "./sr-cyrl": "13e9",
        "./sr-cyrl.js": "13e9",
        "./sr.js": "cf1e",
        "./ss": "52bd",
        "./ss.js": "52bd",
        "./sv": "5fbd",
        "./sv.js": "5fbd",
        "./sw": "74dc",
        "./sw.js": "74dc",
        "./ta": "3de5",
        "./ta.js": "3de5",
        "./te": "5cbb",
        "./te.js": "5cbb",
        "./tet": "576c",
        "./tet.js": "576c",
        "./tg": "3b1b",
        "./tg.js": "3b1b",
        "./th": "10e8",
        "./th.js": "10e8",
        "./tl-ph": "0f38",
        "./tl-ph.js": "0f38",
        "./tlh": "cf75",
        "./tlh.js": "cf75",
        "./tr": "0e81",
        "./tr.js": "0e81",
        "./tzl": "cf51",
        "./tzl.js": "cf51",
        "./tzm": "c109",
        "./tzm-latn": "b53d",
        "./tzm-latn.js": "b53d",
        "./tzm.js": "c109",
        "./ug-cn": "6117",
        "./ug-cn.js": "6117",
        "./uk": "ada2",
        "./uk.js": "ada2",
        "./ur": "5294",
        "./ur.js": "5294",
        "./uz": "2e8c",
        "./uz-latn": "010e",
        "./uz-latn.js": "010e",
        "./uz.js": "2e8c",
        "./vi": "2921",
        "./vi.js": "2921",
        "./x-pseudo": "fd7e",
        "./x-pseudo.js": "fd7e",
        "./yo": "7f33",
        "./yo.js": "7f33",
        "./zh-cn": "5c3a",
        "./zh-cn.js": "5c3a",
        "./zh-hk": "49ab",
        "./zh-hk.js": "49ab",
        "./zh-tw": "90ea",
        "./zh-tw.js": "90ea"
      };
      function n(t) {
        var e = i(t);
        return a(e)
      }
      function i(t) {
        var e = s[t];
        if (! (e + 1)) {
          var a = new Error("Cannot find module '" + t + "'");
          throw a.code = "MODULE_NOT_FOUND",
          a
        }
        return e
      }
      n.keys = function() {
        return Object.keys(s)
      },
      n.resolve = i,
      t.exports = n,
      n.id = "4678"
    },
    4704 : function(t, e, a) {
      "use strict";
      var s = a("c106"),
      n = a.n(s);
      n.a
    },
    4848 : function(t, e, a) {
      "use strict";
      var s = a("8d3e"),
      n = a.n(s);
      n.a
    },
    "49ea": function(t, e, a) {
      t.exports = a.p + "img/zalo.01ebebe7.png"
    },
    "4e6e": function(t, e, a) {
      var s = {
        "./facebook.png": "d7b6",
        "./instagram.png": "9e37",
        "./line.png": "a390",
        "./phone.png": "3ed0",
        "./skype.png": "0c94",
        "./telegram.png": "cddb",
        "./twitter.png": "226e",
        "./wechat.png": "7696",
        "./whatsapp.png": "b1b1",
        "./zalo.png": "49ea"
      };
      function n(t) {
        var e = i(t);
        return a(e)
      }
      function i(t) {
        var e = s[t];
        if (! (e + 1)) {
          var a = new Error("Cannot find module '" + t + "'");
          throw a.code = "MODULE_NOT_FOUND",
          a
        }
        return e
      }
      n.keys = function() {
        return Object.keys(s)
      },
      n.resolve = i,
      t.exports = n,
      n.id = "4e6e"
    },
    "50c8": function(t, e, a) {},
    "52c2": function(t, e, a) {},
    "56d7": function(t, e, a) {
      "use strict";
      a.r(e);
      a("4917"),
      a("cadf"),
      a("551c"),
      a("f751"),
      a("097d");
      var s = a("2b0e"),
      n = a("bb71");
      a("da64");
      s["default"].use(n["a"], {
        iconfont: "md"
      });
      var i = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("v-app", {
          attrs: {
            dark: ""
          }
        },
        [a("v-content", [a("router-view", {
          attrs: {
            name: "headertop"
          }
        }), a("transition", {
          attrs: {
            name: "fade",
            mode: "out-in"
          }
        },
        [a("keep-alive", {
          attrs: {
            include: ["Home", "Promotion"]
          }
        },
        [(t.$route.meta.keepAlive, a("router-view"))], 1)], 1), a("snackbar", {
          attrs: {
            color: t.appcolor,
            icon: t.appicon,
            text: t.appmessage,
            show: t.showsnackbar
          },
          on: {
            "update-snackbar": function(e) {
              t.showsnackbar = !1
            }
          }
        }), a("vue-snotify")], 1), a("router-view", {
          attrs: {
            name: "footer"
          }
        }), a("shortcut")], 1)
      },
      r = [],
      o = (a("7f7f"), a("96cf"), a("3b8d")),
      l = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("v-snackbar", {
          attrs: {
            value: t.showSnackbar,
            timeout: 3e3,
            top: !0
          },
          on: {
            input: t.snackbarClose
          }
        },
        [a("v-icon", {
          staticClass: "mr-1",
          attrs: {
            color: t.snackbar_color
          }
        },
        [t._v(t._s(t.snackbar_icon))]), t._v("\n\n    " + t._s(t.snackbar_text) + "\n\n    "), a("v-btn", {
          attrs: {
            color: "pink",
            flat: ""
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.snackbarClose(e)
            }
          }
        },
        [t._v("\n        " + t._s(t.$t("reusable.close")) + "\n    ")])], 1)
      },
      c = [],
      u = {
        name: "Snackbar",
        props: ["color", "icon", "text", "show"],
        data: function() {
          return {
            display: !1
          }
        },
        computed: {
          showSnackbar: {
            get: function() {
              return this.show
            },
            set: function(t) {
              this.display = t
            }
          },
          snackbar_text: function() {
            return this.text
          },
          snackbar_icon: function() {
            return this.icon
          },
          snackbar_color: function() {
            return this.color
          }
        },
        methods: {
          snackbarClose: function() {
            var t = !this.showSnackbar;
            this.$emit("update-snackbar", t)
          }
        }
      },
      d = u,
      m = a("2877"),
      p = a("6544"),
      f = a.n(p),
      g = a("8336"),
      h = a("132d"),
      v = a("2db4"),
      _ = Object(m["a"])(d, l, c, !1, null, null, null),
      b = _.exports;
      f()(_, {
        VBtn: g["a"],
        VIcon: h["a"],
        VSnackbar: v["a"]
      });
      var w = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return t.contact ? a("div", {
          staticClass: "shortcut-wrapper",
          attrs: {
            id: "shortcut"
          },
          on: {
            mouseout: function(e) {
              e.preventDefault(),
              "textarea" == t.contact.contentType ? t.slideOut(!1) : t.slideOut(!0)
            },
            mouseover: function(e) {
              e.preventDefault(),
              "textarea" == t.contact.contentType ? t.slideIn(!1) : t.slideIn(!0)
            }
          }
        },
        [a("button", {
          staticClass: "text-xs-center contact-button anti-rotate-center"
        },
        [a("span", {
          staticClass: "v-chip pointer semi-transparent-7-bg",
          on: {
            click: function(e) {
              e.preventDefault(),
              "textarea" == t.contact.contentType && t.toChat(t.contact)
            }
          }
        },
        [a("span", {
          staticClass: "pointer v-chip__content"
        },
        [a("div", {
          staticClass: "v-avatar"
        },
        [a("img", {
          staticClass: "rotate",
          attrs: {
            src: t.contact.avatar,
            alt: t.contact.name
          }
        })]), t._v("\n                    " + t._s(t.contact.name) + "\n                ")])])]), a("ul", {
          staticClass: "contact-img"
        },
        [a("li", {
          style: {
            backgroundImage: "url(" + t.contact.script + ")"
          }
        })])]) : t._e()
      },
      k = [],
      y = {
        props: ["shortcut"],
        data: function() {
          return {}
        },
        computed: {
          contact: function() {
            if (this.$store.getters.system_contactus) {
              var t = this.$store.getters.system_contactus;
              return t["avatar"] = this.getImgUrl(t["type"].toLowerCase()),
              t
            }
            return null
          }
        },
        methods: {
          getImgUrl: function(t) {
            var e = a("4e6e");
            return e("./" + t + ".png")
          },
          toChat: function(t) {
            if (t["script"]) window.open(t["script"]);
            else switch (t["type"]) {
            case "phone":
              window.open("tel:" + t["contact"]);
              break;
            case "facebook":
              window.open(t["contact"], "_system");
              break;
            case "instagram":
              window.open("instagram://user?username=" + t["contact"]);
              break;
            case "line":
              window.open("line://ti/p/@" + t["contact"]);
              break;
            case "skype":
              window.open("skype:" + t["contact"] + "?chat");
              break;
            case "telegram":
              window.open("https://t.me/" + t["contact"]);
              break;
            case "wechat":
              window.open("weixin://dl/chat?" + t["contact"]);
              break;
            case "whatsapp":
              window.open("whatsapp://send?text=Hi%2C%20I%20am%20interested&phone=" + t["contact"]);
              break;
            case "twitter":
              window.open("twitter://user?screen_name=" + t["contact"]);
              break;
            case "zalo":
              window.open("http://zaloapp.com/qr/p/" + t["contact"]);
              break;
            default:
              break
            }
          },
          slideIn: function(t) {
            if (t) {
              var e = document.getElementById("shortcut");
              e.style.left = "-10px"
            }
          },
          slideOut: function(t) {
            if (t) {
              var e = document.getElementById("shortcut");
              e.style.left = "-178px"
            }
          }
        }
      },
      x = y,
      A = (a("f7f6"), Object(m["a"])(x, w, k, !1, null, "6b5922f9", null)),
      D = A.exports,
      C = a("bc3a"),
      T = a.n(C),
      P = T.a.create({
        baseURL: window.api,
        timeout: 5e3
      }),
      V = {
        getLogo: function() {
          var t = this;
          return P.get("/logo", {}).then(function(t) {
            return t.data
          }).then(function(t) {
            return t.data
          }).
          catch(function(e) {
            return t.returnError(e)
          })
        },
        getBanners: function() {
          var t = this;
          return P.get("/banner", {}).then(function(t) {
            return t.data
          }).
          catch(function(e) {
            return t.returnError(e)
          })
        },
        getCommonAsset: function() {
          var t = this;
          return P.get("/common_asset", {}).then(function(t) {
            return t.data
          }).
          catch(function(e) {
            return t.returnError(e)
          })
        },
        getBodyAsset: function() {
          var t = this;
          return P.get("/body_asset", {}).then(function(t) {
            return t.data
          }).
          catch(function(e) {
            return t.returnError(e)
          })
        },
        getCompanyName: function() {
          var t = this;
          return P.get("/name", {}).then(function(t) {
            return t.data
          }).then(function(t) {
            return t.data
          }).
          catch(function(e) {
            return t.returnError(e)
          })
        },
        getMinDeposit: function() {
          var t = this;
          return P.get("/min_deposit", {}).then(function(t) {
            return t.data
          }).then(function(t) {
            return t.data
          }).
          catch(function(e) {
            return t.returnError(e)
          })
        },
        getMinWithdraw: function() {
          var t = this;
          return P.get("/min_withdraw", {}).then(function(t) {
            return t.data
          }).then(function(t) {
            return t.data
          }).
          catch(function(e) {
            return t.returnError(e)
          })
        },
        getMinTransfer: function() {
          var t = this;
          return P.get("/min_transfer", {}).then(function(t) {
            return t.data
          }).then(function(t) {
            return t.data
          }).
          catch(function(e) {
            return t.returnError(e)
          })
        },
        postLogin: function(t) {
          var e = this;
          return P.post("/login", {
            username: t.username,
            password: t.password,
            token: t.token
          }).then(function(t) {
            return t.data
          }).
          catch(function(t) {
            return e.returnError(t)
          })
        },
        postRegister: function(t) {
          var e = this;
          return P.post("/register", {
            username: t.username,
            password: t.password,
            password_confirmation: t.password_confirmation,
            fullname: t.fullname,
            tel_no: t.tel_no,
            token: t.token
          }).then(function(t) {
            return t.data
          }).
          catch(function(t) {
            return e.returnError(t)
          })
        },
        postChangePassword: function(t) {
          var e = this;
          return P.post("/change_password", {
            old_password: t.old_password,
            password: t.password,
            password_confirmation: t.password_confirmation,
            access_token: t.access_token
          }).then(function(t) {
            return t.data
          }).
          catch(function(t) {
            return e.returnError(t)
          })
        },
        getPromotions: function() {
          var t = this;
          return P.get("/promotion", {}).then(function(t) {
            return t.data
          }).
          catch(function(e) {
            return t.returnError(e)
          })
        },
        getContact: function() {
          var t = this;
          return P.get("/contact").then(function(t) {
            return t.data
          }).
          catch(function(e) {
            return t.returnError(e)
          })
        },
        getLivechat: function() {
          var t = this;
          return P.get("/livechat").then(function(t) {
            return t.data
          }).then(function(t) {
            return t.data
          }).
          catch(function(e) {
            return t.returnError(e)
          })
        },
        getPage: function(t) {
          var e = this;
          return P.get("/page", {
            params: {
              name: t.name
            }
          }).then(function(t) {
            return t.data
          }).
          catch(function(t) {
            return e.returnError(t)
          })
        },
        getProducts: function() {
          var t = this;
          return P.get("/product", {}).then(function(t) {
            return t.data
          }).
          catch(function(e) {
            return t.returnError(e)
          })
        },
        getProductsMember: function(t) {
          var e = this;
          return P.get("/product/member", {
            params: {
              access_token: t.access_token
            }
          }).then(function(t) {
            return t.data
          }).
          catch(function(t) {
            return e.returnError(t)
          })
        },
        getBankAccounts: function(t) {
          var e = this;
          return P.get("/bank_account", {
            params: {
              access_token: t.access_token
            }
          }).then(function(t) {
            return t.data
          }).
          catch(function(t) {
            return e.returnError(t)
          })
        },
        getMemberPromotions: function(t) {
          var e = this;
          return P.get("/promotion/member", {
            params: {
              access_token: t.access_token,
              productTo: t.productTo
            }
          }).then(function(t) {
            return t.data
          }).
          catch(function(t) {
            return e.returnError(t)
          })
        },
        getMemberInfo: function(t) {
          var e = this;
          return P.get("/member", {
            params: {
              access_token: t.access_token
            }
          }).then(function(t) {
            return t.data
          }).
          catch(function(t) {
            return e.returnError(t)
          })
        },
        postBankAccount: function(t) {
          var e = this;
          return P.post("/member/bank_account", t).then(function(t) {
            return t.data
          }).
          catch(function(t) {
            return e.returnError(t)
          })
        },
        getBanks: function(t) {
          var e = this;
          return P.get("/bank", {
            params: {
              access_token: t.access_token
            }
          }).then(function(t) {
            return t.data
          }).
          catch(function(t) {
            return e.returnError(t)
          })
        },
        postDeposit: function(t) {
          var e = this;
          return P.post("/tickets/deposit", t, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }).then(function(t) {
            return t.data
          }).
          catch(function(t) {
            return e.returnError(t)
          })
        },
        postWithdraw: function(t) {
          var e = this;
          return P.post("/tickets/withdraw", t).then(function(t) {
            return t.data
          }).
          catch(function(t) {
            return e.returnError(t)
          })
        },
        postTransfer: function(t) {
          var e = this;
          return P.post("/tickets/transfer", t).then(function(t) {
            return t.data
          }).
          catch(function(t) {
            return e.returnError(t)
          })
        },
        postBonus: function(t) {
          var e = this;
          return P.post("/tickets/bonus", t).then(function(t) {
            return t.data
          }).
          catch(function(t) {
            return e.returnError(t)
          })
        },
        getTicketHistory: function(t) {
          var e = this;
          return P.get("/tickets", {
            params: t
          }).then(function(t) {
            return t.data
          }).
          catch(function(t) {
            return e.returnError(t)
          })
        },
        getNotification: function(t) {
          var e = this;
          return P.get("/member/get_Notification", {
            params: {
              access_token: t.access_token
            }
          }).then(function(t) {
            return t.data
          }).
          catch(function(t) {
            return e.returnError(t)
          })
        },
        updateNotification: function(t) {
          var e = this;
          return P.post("/member/update_Notification", {
            access_token: t.access_token
          }).then(function(t) {
            return t.data
          }).
          catch(function(t) {
            return e.returnError(t)
          })
        },
        postFcmTokenForVisitor: function(t) {
          var e = this;
          return P.post("/fcm/saveToken", {
            token: t.token,
            frontend_url: t.frontend_url
          }).then(function(t) {
            return t.data
          }).
          catch(function(t) {
            return e.returnError(t)
          })
        },
        postFcmTokenForUser: function(t) {
          var e = this;
          return P.post("/fcm/storeToken", {
            access_token: t.access_token,
            frontend_url: t.frontend_url,
            token: t.token
          }).then(function(t) {
            return t.data
          }).
          catch(function(t) {
            return e.returnError(t)
          })
        },
        deleteFcmTokenForVisitor: function(t) {
          var e = this;
          return P.post("/fcm/deleteToken", {
            token: t.token,
            frontend_url: t.frontend_url
          }).then(function(t) {
            return t.data
          }).
          catch(function(t) {
            return e.returnError(t)
          })
        },
        deleteFcmTokenForUser: function(t) {
          var e = this;
          return P.post("/fcm/removeToken", {
            access_token: t.access_token,
            frontend_url: t.frontend_url,
            token: t.token
          }).then(function(t) {
            return t.data
          }).
          catch(function(t) {
            return e.returnError(t)
          })
        },
        getFCMConfig: function() {
          var t = this;
          return P.get("/fcm_config", {}).then(function(t) {
            return t.data
          }).
          catch(function(e) {
            return t.returnError(e)
          })
        },
        getCurrency: function() {
          var t = this;
          return P.get("/currency").then(function(t) {
            return t.data
          }).
          catch(function(e) {
            return t.returnError(e)
          })
        },
        getAvailableServices: function() {
          var t = this;
          return P.get("/available_services").then(function(t) {
            return t.data
          }).
          catch(function(e) {
            return t.returnError(e)
          })
        },
        getMemberMiniGameUrl: function(t) {
          var e = this;
          return P.get("/mini_game", {
            params: {
              access_token: t.access_token
            }
          }).then(function(t) {
            return t.data
          }).
          catch(function(t) {
            return e.returnError(t)
          })
        },
        getMemberMiniGameProfile: function(t) {
          var e = this;
          return P.get("/member/mini_game/profile", {
            params: {
              access_token: t.access_token
            }
          }).then(function(t) {
            return t.data
          }).
          catch(function(t) {
            return e.returnError(t)
          })
        },
        getMemberMiniGamePrizesList: function(t) {
          var e = this;
          return P.get("/member/mini_game/prizesList", {
            params: t
          }).then(function(t) {
            return t.data
          }).
          catch(function(t) {
            return e.returnError(t)
          })
        },
        returnError: function(t) {
          var e = {};
          try {
            e = t.response.data
          } catch(a) {
            e = {
              success: !1,
              message: "Network error"
            }
          }
          return e
        }
      },
      j = {
        name: "App",
        data: function() {
          return {
            viewTitle: "",
            titles: {
              home: "Home",
              Changepassowrd: "Change Password",
              History: "History",
              Promotion: "Promotion",
              Affiliate: "Affiliate",
              Game: "Game",
              Deposit: "Deposit",
              Transfer: "Transfer",
              Banklist: "Withdraw",
              Addbank: "Add Bank Detail",
              login: "Login"
            },
            showsnackbar: !1,
            appmessage: "",
            appicon: "",
            appcolor: ""
          }
        },
        components: {
          Snackbar: b,
          shortcut: D
        },
        methods: {
          showToast: function() {
            this.appmessage = this.$t("home.welcome_message", {
              username: this.$store.getters.user_fullname
            }),
            this.appcolor = "green",
            this.appicon = "done_all",
            this.showsnackbar = !0
          },
          resetToast: function() {
            this.showsnackbar = !1
          },
          checkToken: function(t) {
            this.$store.dispatch("setToken", t)
          },
          getMemberInfo: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2,
                  V.getMemberInfo({
                    access_token: this.$store.getters.user_token
                  });
                case 2:
                  e = t.sent,
                  e && "success" in e && !0 === e.success ? (this.$store.dispatch("setMemberInfo", e.data), this.$forceUpdate(), this.showToast()) : (this.visibility = !0, this.alertMessage = e.message, this.alertType = "error", "token invalid" == e.message && (this.$store.dispatch("logout", e.data), this.$router.push({
                    name: "login"
                  })));
                case 4:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } (),
          postFcmToken: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  if (e = null, "" === this.$store.getters.user_token) {
                    t.next = 7;
                    break
                  }
                  return t.next = 4,
                  V.postFcmTokenForUser({
                    access_token: this.$store.getters.user_token,
                    frontend_url: window.location.host,
                    token: this.$store.getters.browser_identity
                  });
                case 4:
                  e = t.sent,
                  t.next = 10;
                  break;
                case 7:
                  return t.next = 9,
                  V.postFcmTokenForVisitor({
                    token: this.$store.getters.browser_identity,
                    frontend_url: window.location.host
                  });
                case 9:
                  e = t.sent;
                case 10:
                  e && "success" in e && e.success;
                case 11:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } (),
          deleteFcmToken: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  if (e = null, "" === this.$store.getters.user_token) {
                    t.next = 7;
                    break
                  }
                  return t.next = 4,
                  V.deleteFcmTokenForUser({
                    access_token: this.$store.getters.user_token,
                    frontend_url: window.location.host,
                    token: this.$store.getters.browser_identity
                  });
                case 4:
                  e = t.sent,
                  t.next = 10;
                  break;
                case 7:
                  return t.next = 9,
                  V.deleteFcmTokenForVisitor({
                    token: this.$store.getters.browser_identity,
                    frontend_url: window.location.host
                  });
                case 9:
                  e = t.sent;
                case 10:
                  e && "success" in e && e.success;
                case 11:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } (),
          handlePermission: function() {
            return navigator.permissions.query({
              name: "notifications"
            }).then(this.permissionQuery)
          },
          permissionQuery: function(t) {
            var e, a = this;
            if ("prompt" == t.state) {
              var s = this;
              this.$snotify.confirm(s.$t("fcm.notification_request_message"), s.$t("fcm.notification"), {
                position: "centerTop",
                buttons: [{
                  text: s.$t("shared.enable"),
                  action: function(t) {
                    a.$snotify.remove(t.id),
                    Notification.requestPermission().then(function() {
                      s.getFCMToken()
                    })
                  },
                  bold: !1
                },
                {
                  text: s.$t("shared.close"),
                  action: function(t) {
                    a.$snotify.remove(t.id)
                  },
                  bold: !1
                }]
              })
            } else "granted" == t.state ? this.getFCMToken() : "denied" == t.state && this.$snotify.warning(this.$t("fcm.notification_warning_message"), this.$t("shared.warning"), {
              timeout: 1e4,
              showProgressBar: !0,
              closeOnClick: !0,
              pauseOnHover: !0
            });
            return e || t
          },
          getFCMToken: function() {
            var t = this;
            firebase.messaging().getToken().then(function(e) {
              "" !== t.$store.getters.browser_identity ? t.$store.getters.browser_identity !== e ? (t.deleteFcmToken(), t.$store.dispatch("setBrowserIdentify", e), t.postFcmToken()) : t.postFcmToken() : (t.$store.dispatch("setBrowserIdentify", e), t.postFcmToken())
            }).
            catch(function(t) {})
          }
        },
        watch: {
          $route: function(t) {
            this.resetToast(),
            1 == this.$store.getters.login_flag && (this.$store.dispatch("toggleLogin", !1), this.showToast()),
            t.name || "" != t ? this.viewTitle = this.titles[t.name] : this.viewTitle = this.titles[this.$route.name]
          }
        },
        mounted: function() {
          var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
            var e, a, s, n, i, r, o;
            return regeneratorRuntime.wrap(function(t) {
              while (1) switch (t.prev = t.next) {
              case 0:
                return document.querySelector("#pwa-manifest").setAttribute("href", window.api + "/pwa_config"),
                this.$route.query.t && this.checkToken(this.$route.query.t),
                "" !== this.$store.getters.user_token && this.getMemberInfo(),
                t.next = 5,
                V.getCurrency();
              case 5:
                return e = t.sent,
                e && this.$store.dispatch("setSystemCurrency", e.data[0].symbol),
                t.next = 9,
                V.getCommonAsset();
              case 9:
                return a = t.sent,
                a && a["data"] && (a["data"]["favicon"] && (s = document.querySelector("link[rel*='icon']") || document.createElement("link"), s.type = "image/x-icon", s.rel = "shortcut icon", s.href = a["data"]["favicon"]["value"], document.getElementsByTagName("head")[0].appendChild(s)), a["data"]["logo"] && this.$store.dispatch("setLogo", a["data"]["logo"]["value"]), a["data"]["shorcutContact"] && this.$store.dispatch("setContactUs", {
                  avatar: "",
                  name: a["data"]["shorcutContact"]["name"],
                  contact: a["data"]["shorcutContact"]["contact"],
                  type: a["data"]["shorcutContact"]["type"].toLowerCase(),
                  contentType: a["data"]["shorcutContact"]["content_type"].toLowerCase(),
                  script: a["data"]["shorcutContact"]["value"]
                }), a["data"]["background"] && (n = document.getElementById("app"), n.style.background = "url(" + a["data"]["background"]["value"] + ")", n.style.backgroundSize = "cover", n.style.backgroundPosition = "center"), a["data"]["script"] && "Editor" == a["data"]["script"]["type"] && $(a["data"]["script"]["value"]).appendTo(document.body)),
                1 == this.$store.getters.login_flag && (this.$store.dispatch("toggleLogin", !1), this.showToast()),
                t.next = 14,
                V.getLivechat();
              case 14:
                return i = t.sent,
                i && $(i["value"]).appendTo(document.body),
                t.next = 18,
                V.getCompanyName();
              case 18:
                return r = t.sent,
                r && r.hasOwnProperty("success") && !0 !== r.success ? this.$store.dispatch("setCompanyName", "Webot") : (this.$store.dispatch("setCompanyName", r), document.title = this.$store.getters.system_name, document.body.classList.add(this.$store.getters.system_name.toLowerCase())),
                t.next = 22,
                V.getAvailableServices();
              case 22:
                o = t.sent,
                o && o.success && this.$store.dispatch("setAvailableServices", o.data);
              case 24:
              case "end":
                return t.stop()
              }
            },
            t, this)
          }));
          function e() {
            return t.apply(this, arguments)
          }
          return e
        } (),
        created: function() {
          var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
            var e, a, s;
            return regeneratorRuntime.wrap(function(t) {
              while (1) switch (t.prev = t.next) {
              case 0:
                return e = this,
                t.next = 3,
                V.getFCMConfig();
              case 3:
                a = t.sent,
                firebase.initializeApp(a.data),
                s = firebase.messaging(),
                navigator.serviceWorker.register("firebase-messaging-sw.js?messagingSenderId=" + a.data["messagingSenderId"]).then(function(t) {
                  s.useServiceWorker(t)
                }).then(function() {
                  e.handlePermission(),
                  s.onMessage(function(t) {})
                });
              case 7:
              case "end":
                return t.stop()
              }
            },
            t, this)
          }));
          function e() {
            return t.apply(this, arguments)
          }
          return e
        } ()
      },
      S = j,
      I = (a("034f"), a("7496")),
      R = a("549c"),
      L = Object(m["a"])(S, i, r, !1, null, null, null),
      z = L.exports;
      f()(L, {
        VApp: I["a"],
        VContent: R["a"]
      });
      var M = a("8c4f"),
      F = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("div", [a("v-flex", {
          attrs: {
            xs12: "",
            sm6: "",
            md6: "",
            lg6: "",
            "offset-lg3": "",
            "offset-sm3": "",
            "offset-md3": "",
            "mt-3": ""
          }
        },
        [a("Alert", {
          attrs: {
            atype: t.alertType,
            message: t.message,
            visibility: t.visibility
          }
        }), t.progressbar ? a("v-progress-linear", {
          attrs: {
            indeterminate: !0
          }
        }) : t._e(), a("v-card", {
          staticClass: "semi-transparent-5-bg v-card__text",
          staticStyle: {
            display: "flex",
            "justify-content": "center",
            "align-items": "center",
            "flex-direction": "column"
          },
          attrs: {
            width: "100%"
          }
        },
        [a("Logo", {
          staticStyle: {
            display: "flex",
            "flex-direction": "column",
            "align-items": "center"
          }
        }), a("v-form", {
          ref: "form",
          staticStyle: {
            width: "80%"
          },
          attrs: {
            "lazy-validation": ""
          },
          model: {
            value: t.valid,
            callback: function(e) {
              t.valid = e
            },
            expression: "valid"
          }
        },
        [a("v-text-field", {
          staticClass: "borderlessInput usernameField",
          attrs: {
            id: "usernameField",
            "single-line": "",
            box: "",
            autofocus: "",
            "background-color": "#7575757d",
            rules: t.usernameRules,
            label: t.$t("user_management.username"),
            required: ""
          },
          model: {
            value: t.username,
            callback: function(e) {
              t.username = e
            },
            expression: "username"
          }
        }), a("v-text-field", {
          staticClass: "borderlessInput passwordField",
          attrs: {
            id: "passwordField",
            "single-line": "",
            box: "",
            autofocus: "",
            "background-color": "#7575757d",
            rules: t.passwordRules,
            label: t.$t("user_management.password"),
            type: "password",
            required: ""
          },
          model: {
            value: t.password,
            callback: function(e) {
              t.password = e
            },
            expression: "password"
          }
        }), a("div", {
          staticClass: "mt-2 mb-2",
          staticStyle: {
            display: "flex",
            "justify-content": "center"
          }
        },
        [a("v-btn", {
          staticStyle: {
            width: "100%"
          },
          attrs: {
            color: "primary",
            disabled: !t.valid
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.validate(e)
            }
          }
        },
        [t._v("\r\n                        " + t._s(t.$t("user_management.login")) + "\r\n                    ")])], 1), a("v-container")], 1)], 1), a("span", {
          staticClass: "mt-2 registerLink"
        },
        [a("span", {
          staticStyle: {
            color: "#666"
          }
        },
        [t._v("Dont have an account?  ")]), a("router-link", {
          attrs: {
            to: {
              name: "Register"
            }
          }
        },
        [a("strong", [t._v("Signup here")])])], 1)], 1)], 1)
      },
      N = [],
      G = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("div", [a("v-alert", {
          attrs: {
            type: t.atype,
            dismissible: "",
            transition: "scale-transition"
          },
          model: {
            value: t.visibility,
            callback: function(e) {
              t.visibility = e
            },
            expression: "visibility"
          }
        },
        [a("span", {
          domProps: {
            innerHTML: t._s(t.message)
          }
        })])], 1)
      },
      B = [],
      E = {
        name: "Alert",
        props: ["atype", "message", "visibility"]
      },
      U = E,
      O = a("0798"),
      W = Object(m["a"])(U, G, B, !1, null, null, null),
      H = W.exports;
      f()(W, {
        VAlert: O["a"]
      });
      var Z = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("div", [a("img", {
          attrs: {
            id: "logo",
            src: t.getLogo,
            alt: "Logo"
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              e.stopPropagation(),
              t.$router.push({
                name: "home"
              })
            }
          }
        })])
      },
      Y = [],
      q = {
        name: "Logo",
        data: function() {
          return {}
        },
        computed: {
          getCompanyName: function() {
            return "" === this.$store.getters.system_name ? "Webot": this.$store.getters.system_name
          },
          getLogo: function() {
            return "" === this.$store.getters.system_logo ? "//assets.office4u.xyz/common_asset/webot_logo.png": this.$store.getters.system_logo
          }
        }
      },
      J = q,
      Q = (a("36fe"), Object(m["a"])(J, Z, Y, !1, null, "be7946ec", null)),
      X = Q.exports,
      K = {
        name: "login",
        data: function() {
          return {
            valid: !0,
            username: "",
            password: "",
            alertType: "",
            message: "",
            visibility: "",
            progressbar: !1
          }
        },
        components: {
          Alert: H,
          Logo: X
        },
        mounted: function() {
          function t(t) {
            var e = null;
            e = $("." + t + " .v-input__control .v-input__slot"),
            e.css("text-shadow", "0px 0px 2px #ccc"),
            e.css("box-shadow", "0 0 2px #fff, 0 0 5px #fff, 0 0 10px #fff"),
            e.css("transition-delay", "0.1s")
          }
          function e(t) {
            var e = null;
            e = $("." + t + " .v-input__control .v-input__slot"),
            e.css("text-shadow", ""),
            e.css("box-shadow", ""),
            e.css("transition-delay", "")
          }
          $("input[type=text]").focus(function() {
            var e = null;
            e = $(this).attr("id"),
            t(e)
          }),
          $("input[type=text]").focusout(function() {
            var t = null;
            t = $(this).attr("id"),
            e(t)
          }),
          $("input[type=password]").focus(function() {
            var e = null;
            e = $(this).attr("id"),
            t(e)
          }),
          $("input[type=password]").focusout(function() {
            var t = null;
            t = $(this).attr("id"),
            e(t)
          })
        },
        computed: {
          usernameRules: function() {
            var t = this;
            return [function(e) {
              return !! e || t.$t("user_management.user_validation_rule")
            }]
          },
          passwordRules: function() {
            var t = this;
            return [function(e) {
              return !! e || t.$t("user_management.pass_validation_rule")
            }]
          }
        },
        methods: {
          resetAlert: function() {
            this.visibility = !1,
            this.message = "",
            this.alertType = "",
            this.progressbar = !1
          },
          validate: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  if (this.resetAlert(), this.progressbar = !0, !this.$refs.form.validate()) {
                    t.next = 10;
                    break
                  }
                  return t.next = 5,
                  V.postLogin({
                    username: this.username,
                    password: this.password,
                    token: this.$store.getters.browser_identity
                  });
                case 5:
                  e = t.sent,
                  this.progressbar = !1,
                  e && "success" in e && 1 == e.success ? (this.$store.dispatch("toggleLogin", !0), this.$store.dispatch("login", e.data), this.$router.push({
                    name: "home"
                  })) : (this.visibility = !0, this.message = e.message, this.alertType = "error"),
                  t.next = 11;
                  break;
                case 10:
                  this.progressbar = !1;
                case 11:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } ()
        }
      },
      tt = K,
      et = (a("9929"), a("6dbf"), a("b0af")),
      at = a("a523"),
      st = a("0e8f"),
      nt = a("4bd4"),
      it = a("8e36"),
      rt = a("2677"),
      ot = Object(m["a"])(tt, F, N, !1, null, "4f6e622a", null),
      lt = ot.exports;
      f()(ot, {
        VBtn: g["a"],
        VCard: et["a"],
        VContainer: at["a"],
        VFlex: st["a"],
        VForm: nt["a"],
        VProgressLinear: it["a"],
        VTextField: rt["a"]
      });
      var ct = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("div", [a("v-flex", {
          attrs: {
            xs12: "",
            sm6: "",
            md6: "",
            lg6: "",
            "offset-lg3": "",
            "offset-sm3": "",
            "offset-md3": "",
            "mt-3": ""
          }
        },
        [a("Alert", {
          attrs: {
            atype: t.alertType,
            message: t.message,
            visibility: t.visibility
          }
        }), t.progressbar ? a("v-progress-linear", {
          attrs: {
            indeterminate: !0
          }
        }) : t._e(), a("v-card", {
          staticClass: "semi-transparent-8-bg v-card__text"
        },
        [a("v-form", {
          ref: "form",
          staticClass: "theme--dark.v-label",
          attrs: {
            "lazy-validation": ""
          },
          model: {
            value: t.valid,
            callback: function(e) {
              t.valid = e
            },
            expression: "valid"
          }
        },
        [a("Logo", {
          staticStyle: {
            display: "flex",
            "justify-content": "center",
            "align-items": "center",
            "flex-direction": "column"
          }
        }), a("v-text-field", {
          staticClass: "borderlessInput register-fullnameField",
          attrs: {
            id: "register-fullnameField",
            "single-line": "",
            box: "",
            autofocus: "",
            "background-color": "#7575757d",
            rules: t.fullnameRules,
            label: t.$t("user_management.full_name"),
            hint: t.$t("user_management.full_name_hint"),
            required: ""
          },
          model: {
            value: t.fullname,
            callback: function(e) {
              t.fullname = e
            },
            expression: "fullname"
          }
        }), a("v-text-field", {
          staticClass: "borderlessInput register-usernameField",
          attrs: {
            id: "register-usernameField",
            "single-line": "",
            box: "",
            autofocus: "",
            "background-color": "#7575757d",
            rules: t.usernameRules,
            label: t.$t("user_management.username"),
            required: ""
          },
          model: {
            value: t.username,
            callback: function(e) {
              t.username = e
            },
            expression: "username"
          }
        }), a("v-text-field", {
          staticClass: "borderlessInput register-passwordField",
          attrs: {
            id: "register-passwordField",
            "single-line": "",
            box: "",
            autofocus: "",
            "background-color": "#7575757d",
            rules: t.passwordRules,
            label: t.$t("user_management.password"),
            type: "password",
            required: ""
          },
          model: {
            value: t.password,
            callback: function(e) {
              t.password = e
            },
            expression: "password"
          }
        }), a("v-text-field", {
          staticClass: "borderlessInput register-confirmPasswordField",
          attrs: {
            id: "register-confirmPasswordField",
            "single-line": "",
            box: "",
            autofocus: "",
            "background-color": "#7575757d",
            rules: t.confirmPasswordRules,
            label: t.$t("user_management.confirm_pass"),
            type: "password",
            required: ""
          },
          model: {
            value: t.confirmPassword,
            callback: function(e) {
              t.confirmPassword = e
            },
            expression: "confirmPassword"
          }
        }), a("v-text-field", {
          staticClass: "borderlessInput register-phoneNoField",
          attrs: {
            id: "register-phoneNoField",
            "single-line": "",
            box: "",
            autofocus: "",
            "background-color": "#7575757d",
            rules: t.phoneRules,
            label: t.$t("user_management.phone_no"),
            hint: t.$t("user_management.phone_number_hint"),
            required: ""
          },
          model: {
            value: t.phone,
            callback: function(e) {
              t.phone = e
            },
            expression: "phone"
          }
        }), a("div", {
          staticClass: "mt-2 mb-4",
          staticStyle: {
            display: "flex",
            "justify-content": "center",
            "flex-direction": "column",
            "align-items": "center"
          }
        },
        [a("v-btn", {
          staticStyle: {
            width: "100%"
          },
          attrs: {
            disabled: !t.valid,
            color: "success"
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.register(e)
            }
          }
        },
        [t._v("\r\n                         " + t._s(t.$t("user_management.register")) + "\r\n                    ")])], 1)], 1)], 1)], 1)], 1)
      },
      ut = [],
      dt = {
        name: "Register",
        data: function() {
          return {
            valid: !0,
            fullname: "",
            username: "",
            password: "",
            confirmPassword: "",
            phone: "",
            alertType: "",
            message: "",
            visibility: "",
            progressbar: !1
          }
        },
        components: {
          Alert: H,
          Logo: X
        },
        mounted: function() {
          function t(t) {
            var e = null;
            e = $("." + t + " .v-input__control .v-input__slot"),
            e.css("text-shadow", "0px 0px 2px #ccc"),
            e.css("box-shadow", "0 0 2px #fff, 0 0 5px #fff, 0 0 10px #fff"),
            e.css("transition-delay", "0.1s")
          }
          function e(t) {
            var e = null;
            e = $("." + t + " .v-input__control .v-input__slot"),
            e.css("text-shadow", ""),
            e.css("box-shadow", ""),
            e.css("transition-delay", "")
          }
          $("input[type=text]").focus(function() {
            console.log("focus");
            var e = null;
            e = $(this).attr("id"),
            t(e)
          }),
          $("input[type=text]").focusout(function() {
            var t = null;
            t = $(this).attr("id"),
            e(t)
          }),
          $("input[type=password]").focus(function() {
            var e = null;
            e = $(this).attr("id"),
            t(e)
          }),
          $("input[type=password]").focusout(function() {
            var t = null;
            t = $(this).attr("id"),
            e(t)
          })
        },
        computed: {
          fullnameRules: function() {
            var t = this;
            return [function(e) {
              return !! e || t.$t("user_management.full_name_validation_rule")
            },
            function(e) {
              return e && e.length >= 6 || t.$t("user_management.full_name_length_validation_rule")
            }]
          },
          usernameRules: function() {
            var t = this;
            return [function(e) {
              return !! e || t.$t("user_management.user_name_validation_rule")
            },
            function(e) {
              return e && e.length >= 6 || t.$t("user_management.user_length_validation_rule")
            }]
          },
          passwordRules: function() {
            var t = this;
            return [function(e) {
              return !! e || t.$t("user_management.password_validation_rule")
            },
            function(e) {
              return e && e.length >= 6 || t.$t("user_management.pass_length_validation_rule")
            }]
          },
          confirmPasswordRules: function() {
            var t = this;
            return [function(e) {
              return !! e || t.$t("user_management.confirm_pass_validation_rule")
            },
            function(e) {
              return t.confirmPasswordCheck()
            }]
          },
          phoneRules: function() {
            var t = this;
            return [function(e) {
              return !! e || t.$t("user_management.phone_validation_rule")
            },
            function(e) {
              return e && e.length >= 10 && e.length <= 12 || t.$t("user_management.phone_length_validation_rule")
            },
            function(e) {
              return "60" === e.substring(0, 2) || t.$t("user_management.phone_number_validation_rule")
            }]
          }
        },
        methods: {
          resetAlert: function() {
            this.visibility = !1,
            this.message = "",
            this.alertType = "",
            this.progressbar = !1
          },
          register: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e, a;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  if (!this.$refs.form.validate()) {
                    t.next = 8;
                    break
                  }
                  return this.resetAlert(),
                  this.progressbar = !0,
                  t.next = 5,
                  V.postRegister({
                    username: this.username,
                    password: this.password,
                    password_confirmation: this.confirmPassword,
                    fullname: this.fullname,
                    tel_no: this.phone,
                    token: this.$store.getters.browser_identity
                  });
                case 5:
                  if (e = t.sent, this.progressbar = !1, e && "success" in e && !0 === e.success) this.$store.commit("toggleRegistrationFlag", !0),
                  this.$store.dispatch("login", e.data),
                  this.$router.push({
                    name: "home"
                  });
                  else {
                    for (a in this.visibility = !0, this.message = e.message, e.data) this.message += "<br>" + e.data[a];
                    this.alertType = "error"
                  }
                case 8:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } (),
          confirmPasswordCheck: function() {
            return this.password === this.confirmPassword || this.$t("user_management.passwords_match_validation_rule")
          }
        }
      },
      mt = dt,
      pt = (a("23a1"), Object(m["a"])(mt, ct, ut, !1, null, null, null)),
      ft = pt.exports;
      f()(pt, {
        VBtn: g["a"],
        VCard: et["a"],
        VFlex: st["a"],
        VForm: nt["a"],
        VProgressLinear: it["a"],
        VTextField: rt["a"]
      });
      var gt = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("div", [a("v-flex", {
          attrs: {
            xs12: "",
            sm4: "",
            "offset-sm4": "",
            "mt-5": ""
          }
        },
        [a("v-container", {
          attrs: {
            "text-xs-center": ""
          }
        },
        [a("v-form", {
          ref: "form",
          attrs: {
            "lazy-validation": ""
          },
          model: {
            value: t.valid,
            callback: function(e) {
              t.valid = e
            },
            expression: "valid"
          }
        },
        [a("v-text-field", {
          attrs: {
            rules: t.nameRules,
            label: "Username",
            required: ""
          },
          model: {
            value: t.name,
            callback: function(e) {
              t.name = e
            },
            expression: "name"
          }
        }), a("v-text-field", {
          attrs: {
            rules: t.phoneRules,
            label: "Phone Number",
            required: ""
          },
          model: {
            value: t.phone,
            callback: function(e) {
              t.phone = e
            },
            expression: "phone"
          }
        }), a("v-btn", {
          attrs: {
            disabled: !t.valid,
            color: "success"
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.send(e)
            }
          }
        },
        [t._v("Submit")])], 1), 1 == t.ready ? a("div", [a("snackbar", {
          attrs: {
            color: t.color,
            icon: t.icon,
            text: t.message,
            show: t.snackbar
          }
        })], 1) : t._e()], 1)], 1)], 1)
      },
      ht = [],
      vt = (a("a481"), {
        name: "Forgot-password",
        data: function() {
          return {
            valid: !0,
            name: "",
            nameRules: [function(t) {
              return !! t || "Username is required"
            },
            function(t) {
              return t && t.length <= 8 || "Username must be less than 8 characters"
            }],
            phone: "",
            phoneRules: [function(t) {
              return !! t || "Phone number is required"
            },
            function(t) {
              return t && t.length <= 6 || "Phone number must be less than 6 characters"
            }],
            checkbox: !1,
            snackbar: !1,
            message: "",
            icon: "",
            color: "",
            ready: !1
          }
        },
        components: {
          snackbar: b
        },
        methods: {
          send: function() {
            if (this.$refs.form.validate()) return this.snackbar = !0,
            this.message = "Send Rquest Successfull",
            this.color = "green",
            this.icon = "done_all",
            this.ready = !0,
            this.$router.replace({
              name: "login"
            })
          }
        }
      }),
      _t = vt,
      bt = Object(m["a"])(_t, gt, ht, !1, null, null, null),
      wt = bt.exports;
      f()(bt, {
        VBtn: g["a"],
        VContainer: at["a"],
        VFlex: st["a"],
        VForm: nt["a"],
        VTextField: rt["a"]
      });
      var kt = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("v-flex", {
          attrs: {
            xs12: "",
            sm6: "",
            md8: "",
            lg4: "",
            "offset-sm3": "",
            "offset-md2": "",
            "offset-lg4": "",
            "mt-5": ""
          }
        },
        [a("Alert", {
          attrs: {
            atype: t.alertType,
            message: t.message,
            visibility: t.visibility
          }
        }), t.progressbar ? a("v-progress-linear", {
          attrs: {
            indeterminate: !0
          }
        }) : t._e(), a("v-container", [a("v-card", {
          staticClass: "semi-transparent-5-bg"
        },
        ["Change Password" == t.$route.name ? a("v-card-title", {
          staticStyle: {
            "border-bottom": "5px solid #3944bb"
          }
        },
        [a("img", {
          staticStyle: {
            float: "left",
            width: "15%",
            "max-width": "50px",
            "margin-right": "15px"
          },
          attrs: {
            src: "//assets.office4u.xyz/photos/BO-Demo/password-icon.svg"
          }
        }), a("div", {
          staticClass: "password-change-form-title"
        },
        [a("span", [t._v(t._s(t.$t("user_management.password_change").toUpperCase()))])])]) : t._e(), a("v-card-text", [a("v-form", {
          ref: "form",
          attrs: {
            "lazy-validation": ""
          },
          model: {
            value: t.valid,
            callback: function(e) {
              t.valid = e
            },
            expression: "valid"
          }
        },
        [a("v-layout", {
          staticClass: "margin-5-top-bottom",
          attrs: {
            row: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs4: ""
          }
        },
        [a("v-subheader", {
          staticClass: "inputlabel"
        },
        [t._v(t._s(t.$t("user_management.old_pass")))])], 1), a("v-flex", {
          staticClass: "margin-16-right",
          attrs: {
            xs8: ""
          }
        },
        [a("v-text-field", {
          staticClass: "oldPasswordField",
          attrs: {
            id: "oldPasswordField",
            rules: t.passwordRules,
            "single-line": "",
            box: "",
            required: ""
          },
          model: {
            value: t.oldPassword,
            callback: function(e) {
              t.oldPassword = e
            },
            expression: "oldPassword"
          }
        })], 1)], 1), a("v-layout", {
          staticClass: "margin-5-top-bottom",
          attrs: {
            row: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs4: ""
          }
        },
        [a("v-subheader", {
          staticClass: "inputlabel"
        },
        [t._v(t._s(t.$t("user_management.new_pass")))])], 1), a("v-flex", {
          staticClass: "margin-16-right",
          attrs: {
            xs8: ""
          }
        },
        [a("v-text-field", {
          staticClass: "newPasswordField",
          attrs: {
            id: "newPasswordField",
            rules: t.passwordRules,
            "single-line": "",
            box: "",
            required: ""
          },
          model: {
            value: t.newPassword,
            callback: function(e) {
              t.newPassword = e
            },
            expression: "newPassword"
          }
        })], 1)], 1), a("v-layout", {
          staticClass: "margin-5-top-bottom",
          attrs: {
            row: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs4: ""
          }
        },
        [a("v-subheader", {
          staticClass: "inputlabel"
        },
        [t._v(t._s(t.$t("user_management.confirmed_pass")))])], 1), a("v-flex", {
          staticClass: "margin-16-right",
          attrs: {
            xs8: ""
          }
        },
        [a("v-text-field", {
          staticClass: "confirmPassworddField",
          attrs: {
            id: "confirmPassworddField",
            rules: t.confirmPasswordRules,
            "single-line": "",
            box: "",
            required: ""
          },
          model: {
            value: t.confirmPassword,
            callback: function(e) {
              t.confirmPassword = e
            },
            expression: "confirmPassword"
          }
        })], 1)], 1), a("v-layout", {
          attrs: {
            row: "",
            "justify-center": ""
          }
        },
        [a("v-btn", {
          staticClass: "mt-3",
          attrs: {
            color: "success",
            disabled: !t.valid
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.validate(e)
            }
          }
        },
        [t._v("\n                            " + t._s(t.$t("user_management.change")) + "\n                        ")]), a("v-btn", {
          staticClass: "mt-3",
          attrs: {
            color: "error"
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.$router.go( - 1)
            }
          }
        },
        [t._v("\n                            " + t._s(t.$t("user_management.back")) + "\n                        ")])], 1)], 1)], 1)], 1)], 1)], 1)
      },
      yt = [],
      xt = {
        name: "PasswordChange",
        data: function() {
          return {
            valid: !0,
            name: "",
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
            alertType: "",
            message: "",
            visibility: "",
            progressbar: !1
          }
        },
        components: {
          Alert: H
        },
        computed: {
          confirmPasswordRules: function() {
            var t = this;
            return [function(e) {
              return !! e || t.$t("user_management.confirm_pass_validation_rule")
            },
            function(e) {
              return t.confirmPasswordCheck()
            }]
          },
          passwordRules: function() {
            var t = this;
            return [function(e) {
              return !! e || t.$t("user_management.password_validation_rule")
            },
            function(e) {
              return e && e.length >= 6 || t.$t("user_management.pass_length_validation_rule")
            }]
          }
        },
        mounted: function() {
          function t(t) {
            var e = null;
            e = $("." + t + " .v-input__control .v-input__slot"),
            e.css("text-shadow", "0px 0px 2px #ccc"),
            e.css("box-shadow", "0 0 2px #fff, 0 0 5px #fff, 0 0 10px #fff"),
            e.css("transition-delay", "0.1s")
          }
          function e(t) {
            var e = null;
            e = $("." + t + " .v-input__control .v-input__slot"),
            e.css("text-shadow", ""),
            e.css("box-shadow", ""),
            e.css("transition-delay", "")
          }
          $("input[type=text]").focus(function() {
            var e = null;
            e = $(this).attr("id"),
            t(e)
          }),
          $("input[type=text]").focusout(function() {
            var t = null;
            t = $(this).attr("id"),
            e(t)
          })
        },
        methods: {
          resetAlert: function() {
            this.visibility = !1,
            this.message = "",
            this.alertType = "",
            this.progressbar = !1
          },
          validate: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e, a;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  if (!this.$refs.form.validate()) {
                    t.next = 6;
                    break
                  }
                  return this.resetAlert(),
                  t.next = 4,
                  V.postChangePassword({
                    old_password: this.oldPassword,
                    password: this.newPassword,
                    password_confirmation: this.confirmPassword,
                    access_token: this.$store.getters.user_token
                  });
                case 4:
                  if (e = t.sent, e && "success" in e && !0 === e.success) this.visibility = !0,
                  this.message = e.message,
                  this.alertType = "success";
                  else {
                    if (this.visibility = !0, this.message = e.message, e.data) for (a in e.data) this.message += "<br>" + e.data[a];
                    this.alertType = "error",
                    "token invalid" == e.message && (this.$store.dispatch("logout", e.data), this.$router.push({
                      name: "login"
                    }))
                  }
                case 6:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } (),
          confirmPasswordCheck: function() {
            return this.newPassword === this.confirmPassword || this.$t("user_management.passwords_match_validation_rule")
          }
        }
      },
      At = xt,
      Dt = (a("3e8a"), a("99d9")),
      Ct = a("12b2"),
      Tt = a("a722"),
      Pt = a("e0c7"),
      Vt = Object(m["a"])(At, kt, yt, !1, null, "9a3d8484", null),
      jt = Vt.exports;
      f()(Vt, {
        VBtn: g["a"],
        VCard: et["a"],
        VCardText: Dt["b"],
        VCardTitle: Ct["a"],
        VContainer: at["a"],
        VFlex: st["a"],
        VForm: nt["a"],
        VLayout: Tt["a"],
        VProgressLinear: it["a"],
        VSubheader: Pt["a"],
        VTextField: rt["a"]
      });
      var St = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("div", [a("v-toolbar", {
          staticClass: "semi-transparent-7-bg",
          staticStyle: {
            height: "50px"
          },
          attrs: {
            fixed: "",
            dense: "",
            "clipped-right": !0,
            app: ""
          }
        },
        [a("div", {
          staticClass: "toolbar-container"
        },
        ["home" !== this.$route.name ? a("v-btn", {
          staticClass: "menu-back-button",
          attrs: {
            icon: ""
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.$router.go( - 1)
            }
          }
        },
        [a("v-icon", [t._v("arrow_back_ios")])], 1) : a("v-btn", {
          staticClass: "menu-back-button",
          attrs: {
            icon: ""
          },
          on: {
            click: function(t) {
              t.preventDefault()
            }
          }
        },
        [a("v-icon", {
          attrs: {
            small: ""
          }
        },
        [t._v("fas fa-home")])], 1), "home" !== this.$route.name ? a("v-toolbar-title", {
          staticClass: "text-uppercase font-size mr-3 ml-0",
          staticStyle: {
            cursor: "pointer"
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.$router.go( - 1)
            }
          }
        },
        [t._v("\n\n                " + t._s(t.$t("route." + t.$route.name)) + "\n\n            ")]) : t._e(), a("v-spacer"), "login" !== this.$route.name && "Register" !== this.$route.name ? a("div", {
          staticClass: "home-title-logo-container"
        },
        [a("img", {
          staticClass: " home-title-logo",
          attrs: {
            src: t.getLogo
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              e.stopPropagation(),
              t.$router.push({
                name: "home"
              })
            }
          }
        })]) : t._e(), a("v-spacer"), "" == t.$store.getters.user_token && "login" !== this.$route.name ? a("div", {
          staticClass: "sub-menu-flexCol top-auth-icon",
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.$router.push({
                name: "login"
              })
            }
          }
        },
        [a("i", {
          staticClass: "fas fa-sign-in-alt",
          staticStyle: {
            "font-size": "16px"
          }
        }), a("span", {
          staticClass: "menu-title",
          staticStyle: {
            "margin-left": "3px"
          }
        },
        [t._v(" " + t._s(t.$t("user_management.login")))])]) : t._e(), "" == t.$store.getters.user_token && "login" !== this.$route.name ? a("div", {
          staticClass: "sub-menu-flexRow top-auth-icon",
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.$router.push({
                name: "login"
              })
            }
          }
        },
        [a("i", {
          staticClass: "fas fa-sign-in-alt",
          staticStyle: {
            "font-size": "16px"
          }
        }), a("span", {
          staticClass: "menu-title",
          staticStyle: {
            "margin-left": "3px"
          }
        },
        [t._v(t._s(t.$t("user_management.login")))])]) : t._e(), "" !== t.$store.getters.user_token && t.notification > 0 ? a("div", {
          staticClass: ".sub-menu-flexCol-Notification top-auth-icon",
          staticStyle: {
            cursor: "pointer"
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.updateNotification()
            }
          }
        },
        [a("v-badge", {
          attrs: {
            left: "",
            overlap: ""
          },
          scopedSlots: t._u([{
            key: "badge",
            fn: function() {
              return [a("span", {
                staticStyle: {
                  "font-size": "10px"
                }
              },
              [t._v(t._s(t.notification))])]
            },
            proxy: !0
          }], null, !1, 117428594)
        },
        [a("i", {
          staticClass: "fas fa-bell notification-bell-size-25"
        })])], 1) : t._e(), a("v-toolbar-side-icon", {
          on: {
            click: function(e) {
              e.preventDefault(),
              e.stopPropagation(),
              t.drawer = !t.drawer
            }
          }
        })], 1)]), a("v-navigation-drawer", {
          staticClass: "semi-transparent-7-bg",
          attrs: {
            "mini-variant": t.mini,
            fixed: "",
            temporary: "",
            "disable-resize-watcher": !0,
            width: "220",
            right: ""
          },
          model: {
            value: t.drawer,
            callback: function(e) {
              t.drawer = e
            },
            expression: "drawer"
          }
        },
        [a("v-list", {
          staticClass: "pa-1 mt-3 transparent-bg",
          attrs: {
            dense: ""
          }
        },
        [a("v-list-tile", {
          attrs: {
            avatar: "",
            tag: "div"
          }
        },
        [a("v-list-tile-avatar", [a("v-icon", {
          attrs: {
            large: ""
          }
        },
        [t._v("assignment_ind")])], 1), a("v-list-tile-content", [a("v-list-tile-title", {
          staticStyle: {
            "font-size": "12px"
          }
        },
        [t._v(t._s(t.getFullname))]), 0 !== t.getUsername ? a("v-list-tile-title", {
          staticClass: "font-size"
        },
        [t._v(t._s(t.getUsername))]) : t._e()], 1)], 1), a("v-divider", {
          attrs: {
            light: ""
          }
        }), a("v-list-tile", {
          on: {
            click: function(e) {
              e.preventDefault(),
              t.sheet = !0
            }
          }
        },
        [a("v-list-tile-action", [a("v-avatar", {
          attrs: {
            size: "32px",
            tile: ""
          }
        },
        [a("img", {
          attrs: {
            src: t.getLanguageFlag
          }
        })])], 1), a("v-list-tile-content", {
          staticStyle: {
            "font-size": "13px"
          }
        },
        [a("v-list-tile-title", [t._v(t._s(t.getLanguage))])], 1)], 1), a("v-divider", {
          staticClass: "p-0",
          attrs: {
            light: ""
          }
        }), t.showPWAInstallPrompt ? a("PWAInstallPrompt", {
          attrs: {
            showPWAInstallPrompt: t.showPWAInstallPrompt,
            installEvent: t.installEvent,
            isIosDevice: t.isIosDevice
          },
          on: {
            toggleDialog: t.togglePWAInstallGuildelineDialog,
            PromptChanged: t.updatePWAInstallprompt
          }
        }) : t._e(), t.showPWAInstallPrompt ? a("v-divider", {
          staticClass: "p-0",
          attrs: {
            light: ""
          }
        }) : t._e(), t._l(t.sideMenu,
        function(e) {
          return a("v-list-tile", {
            key: e.title,
            staticClass: "side-menu",
            on: {
              click: function(a) {
                return a.preventDefault(),
                t.triggerEvent(e)
              }
            }
          },
          [a("v-list-tile-action", [a("v-icon", [t._v(t._s(e.icon))])], 1), a("v-list-tile-content", {
            staticStyle: {
              "font-size": "13px"
            }
          },
          [a("v-list-tile-title", [t._v(t._s(t.$t("home." + e.title)))])], 1)], 1)
        })], 2), a("v-bottom-sheet", {
          attrs: {
            inset: ""
          },
          model: {
            value: t.sheet,
            callback: function(e) {
              t.sheet = e
            },
            expression: "sheet"
          }
        },
        [a("v-list", {
          staticStyle: {
            "background-color": "#000000cc"
          }
        },
        [a("v-subheader", [t._v(" " + t._s(t.$t("home.change_language")))]), t._l(t.tiles,
        function(e) {
          return a("v-list-tile", {
            key: e.title,
            on: {
              click: function(a) {
                return a.preventDefault(),
                t.selectLanguage(e)
              }
            }
          },
          [a("v-list-tile-avatar", [a("v-avatar", {
            attrs: {
              size: "32px",
              tile: ""
            }
          },
          [a("img", {
            attrs: {
              src: t.getImgUrl(e.img),
              alt: e.title
            }
          })])], 1), a("v-list-tile-title", [t._v(t._s(t.$t("reusable." + e.title)))])], 1)
        })], 2)], 1)], 1), a("IOSPWAInstallGuidelineDialog", {
          attrs: {
            dialog: t.dialog
          },
          on: {
            DialogChanged: function(e) {
              t.dialog = e.value
            }
          }
        })], 1)
      },
      It = [],
      Rt = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return 0 == t.mini ? a("v-footer", {
          staticClass: "transparent-bg",
          attrs: {
            height: "auto"
          }
        },
        [a("v-card", {
          staticClass: "flex transparent-bg",
          attrs: {
            flat: "",
            tile: ""
          }
        },
        [a("v-card-actions", {
          staticClass: "justify-center font-size"
        },
        [t._v("\r\n            2019©"), a("strong", [t._v(t._s(t.getCompanyName))])])], 1)], 1) : t._e()
      },
      Lt = [],
      $t = {
        name: "Footer",
        props: ["options"],
        data: function() {
          return {
            mini: this.options,
            icons: ["fab fa-facebook", "fab fa-twitter", "fab fa-google-plus", "fab fa-linkedin", "fab fa-instagram"]
          }
        },
        watch: {
          options: function(t) {
            return this.mini = t
          }
        },
        computed: {
          getCompanyName: function() {
            return "" === this.$store.getters.system_name ? "Webot": this.$store.getters.system_name
          }
        }
      },
      zt = $t,
      Mt = (a("d23d"), a("553a")),
      Ft = Object(m["a"])(zt, Rt, Lt, !1, null, "1afbfa48", null),
      Nt = Ft.exports;
      f()(Ft, {
        VCard: et["a"],
        VCardActions: Dt["a"],
        VFooter: Mt["a"]
      });
      var Gt = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("v-flex", {
          attrs: {
            xs12: "",
            sm12: "",
            md10: "",
            lg8: "",
            "offset-md1": "",
            "offset-lg2": ""
          }
        },
        [a("div", {
          staticClass: "text-xs-center loginbar-group"
        },
        [a("div", {
          staticClass: "btn-group",
          staticStyle: {
            width: "100%"
          }
        },
        [a("v-btn", {
          staticClass: "button loginbarBtn",
          staticStyle: {
            width: "50%"
          },
          attrs: {
            color: "primary"
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.$router.push({
                name: "Register"
              })
            }
          }
        },
        [t._v("\n\n                 " + t._s(t.$t("user_management.register")) + "\n\n             ")]), a("v-btn", {
          staticClass: "button loginbarBtn",
          staticStyle: {
            width: "50%"
          },
          attrs: {
            color: "success"
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.$router.push({
                name: "login"
              })
            }
          }
        },
        [t._v("\n\n                 " + t._s(t.$t("user_management.login")) + "\n\n             ")])], 1)])])
      },
      Bt = [],
      Et = {
        data: function() {
          return {}
        }
      },
      Ut = Et,
      Ot = (a("0498"), Object(m["a"])(Ut, Gt, Bt, !1, null, null, null)),
      Wt = Ot.exports;
      f()(Ot, {
        VBtn: g["a"],
        VFlex: st["a"]
      });
      var Ht = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("v-list-tile", {
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.install(e)
            }
          }
        },
        [a("v-list-tile-action", [a("v-avatar", {
          attrs: {
            size: "32px",
            tile: ""
          }
        },
        [a("img", {
          attrs: {
            src: t.getImgUrl("pwa_icon")
          }
        })])], 1), a("v-list-tile-content", {
          staticStyle: {
            "font-size": "13px"
          }
        },
        [a("v-list-tile-title", [t._v(t._s(t.$t("reusable.install_app")))])], 1)], 1)
      },
      Zt = [],
      Yt = {
        name: "PWAInstallPrompt",
        props: ["showPWAInstallPrompt", "installEvent", "isIosDevice"],
        data: function() {
          return {
            dialog: !1
          }
        },
        computed: {
          event: function() {
            return this.installEvent
          },
          show: function() {
            return this.showPWAInstallPrompt
          },
          IOSDevice: function() {
            return this.isIosDevice
          }
        },
        methods: {
          getImgUrl: function(t) {
            var e = a("9142");
            return e("./" + t + ".png")
          },
          install: function() {
            if (1 == this.IOSDevice && this.$emit("toggleDialog", !0), 0 == this.IOSDevice) {
              var t = this.event,
              e = !this.show;
              t.prompt(),
              t.userChoice.then(function() {
                t = null
              }),
              this.$emit("PromptChanged", {
                showPWAInstallPrompt: e,
                event: t
              })
            }
          }
        }
      },
      qt = Yt,
      Jt = a("8212"),
      Qt = a("ba95"),
      Xt = a("40fe"),
      Kt = a("5d23"),
      te = Object(m["a"])(qt, Ht, Zt, !1, null, null, null),
      ee = te.exports;
      f()(te, {
        VAvatar: Jt["a"],
        VListTile: Qt["a"],
        VListTileAction: Xt["a"],
        VListTileContent: Kt["a"],
        VListTileTitle: Kt["c"]
      });
      var ae = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("div", {
          staticClass: "text-xs-center"
        },
        [a("v-dialog", {
          attrs: {
            content: "",
            scrollable: "",
            width: "500"
          },
          on: {
            input: t.update
          },
          model: {
            value: t.showDialog,
            callback: function(e) {
              t.showDialog = e
            },
            expression: "showDialog"
          }
        },
        [a("v-card", {
          staticClass: "semi-transparent-8-bg"
        },
        [a("v-card-title", {
          staticStyle: {
            "border-bottom": "5px solid #3944bb"
          }
        },
        [a("img", {
          staticStyle: {
            float: "left",
            width: "15%",
            "max-width": "50px",
            "margin-right": "15px"
          },
          attrs: {
            src: "//assets.office4u.xyz/photos/BO-Demo/info.svg"
          }
        }), a("div", {
          staticClass: "ios-install-guideline-title"
        },
        [a("span", [t._v(t._s(t.$t("reusable.ios_install_app_guide_title").toUpperCase()))])])]), a("v-card-text", [t._v("\n                    " + t._s(t.$t("reusable.ios_install_app_guide")) + "\n                ")]), a("v-divider"), a("v-card-actions", [a("v-spacer", {
          staticStyle: {
            "margin-top": "0px",
            "margin-bottom": "0px"
          }
        }), a("v-btn", {
          attrs: {
            color: "primary",
            flat: ""
          },
          on: {
            click: t.update
          }
        },
        [t._v("\n                        Dismiss\n                    ")])], 1)], 1)], 1)], 1)
      },
      se = [],
      ne = {
        name: "IOS-PWA-Install-Guideline-Dialog",
        props: ["dialog"],
        data: function() {
          return {
            display: !1
          }
        },
        computed: {
          showDialog: {
            get: function() {
              return this.dialog
            },
            set: function(t) {
              this.display = t
            }
          }
        },
        methods: {
          update: function() {
            var t = !this.showDialog;
            this.$emit("DialogChanged", t)
          }
        }
      },
      ie = ne,
      re = (a("b47e"), a("169a")),
      oe = a("ce7e"),
      le = a("9910"),
      ce = Object(m["a"])(ie, ae, se, !1, null, "8569c900", null),
      ue = ce.exports;
      f()(ce, {
        VBtn: g["a"],
        VCard: et["a"],
        VCardActions: Dt["a"],
        VCardText: Dt["b"],
        VCardTitle: Ct["a"],
        VDialog: re["a"],
        VDivider: oe["a"],
        VSpacer: le["a"]
      });
      var de = {
        name: "User_header",
        components: {
          Footer: Nt,
          Loginbar: Wt,
          PWAInstallPrompt: ee,
          IOSPWAInstallGuidelineDialog: ue
        },
        props: {
          title: {
            type: String,
          default:
            "Home"
          }
        },
        mounted: function() {
          this.getNotification()
        },
        data: function() {
          return {
            sheet: !1,
            drawer: null,
            notification: null,
            items: [{
              title: "home",
              url: "home",
              icon: "fas fa-home"
            },
            {
              title: "games",
              url: "Game",
              icon: "fas fa-gamepad"
            },
            {
              title: "miniGame",
              url: "Mini Game",
              icon: "fas fa-dice"
            },
            {
              title: "miniGamePrizes",
              url: "Mini Game Prizes",
              icon: "fa fa-trophy"
            },
            {
              title: "promotion",
              url: "Promotion",
              icon: "meeting_room"
            },
            {
              title: "contact",
              url: "Contact",
              icon: "fas fa-comments"
            },
            {
              title: "history",
              url: "History / Deposit",
              icon: "fas fa-history"
            },
            {
              title: "download",
              url: "Download Link",
              icon: "fas fa-download"
            },
            {
              title: "change_password",
              url: "Change Password",
              icon: "lock"
            },
            {
              title: "log_out",
              url: "login",
              icon: "meeting_room"
            }],
            mini: !1,
            right: null,
            tiles: [{
              img: "CN",
              key: "zh-CN",
              title: "lang_chinese"
            },
            {
              img: "MY",
              key: "ms",
              title: "lang_malay"
            },
            {
              img: "UK",
              key: "en",
              title: "lang_english"
            },
            {
              img: "TH",
              key: "th",
              title: "lang_thai"
            }],
            isLogin: this.getLogin_flag,
            showPWAInstallPrompt: !1,
            installEvent: null,
            isIosDevice: !1,
            dialog: !1
          }
        },
        created: function() {
          var t = this,
          e = function() {
            var t = window.navigator.userAgent.toLowerCase();
            return /iphone|ipad|ipod/.test(t)
          },
          a = function() {
            return "standalone" in window.navigator && window.navigator.standalone
          };
          e() && !a() ? (this.showPWAInstallPrompt = !0, this.isIosDevice = !0) : window.addEventListener("beforeinstallprompt",
          function(e) {
            e.preventDefault(),
            t.installEvent = e,
            t.showPWAInstallPrompt = !0
          })
        },
        methods: {
          triggerEvent: function(t) {
            "log_out" == t.title ? (this.$store.dispatch("logout"), this.$router.push({
              name: t.url
            })) : this.$router.push({
              name: t.url
            })
          },
          getImgUrl: function(t) {
            var e = a("9142");
            return e("./" + t + ".png")
          },
          getNotification: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e, a = this;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  if ("" === this.$store.getters.user_token) {
                    t.next = 5;
                    break
                  }
                  return t.next = 3,
                  V.getNotification({
                    access_token: this.$store.getters.user_token
                  });
                case 3:
                  e = t.sent,
                  e && "success" in e && !0 === e.success ? this.notification = e.data: "token invalid" == e.message && (this.$store.dispatch("logout", e.data), this.$router.push({
                    name: "login"
                  }));
                case 5:
                  setTimeout(function() {
                    a.getNotification()
                  },
                  2e4);
                case 6:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } (),
          updateNotification: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2,
                  V.updateNotification({
                    access_token: this.$store.getters.user_token
                  });
                case 2:
                  e = t.sent,
                  e && "success" in e && !0 === e.success ? this.notification = e.data: "token invalid" == e.message && (this.$store.dispatch("logout", e.data), this.$router.push({
                    name: "login"
                  })),
                  this.$router.push({
                    name: "History / Deposit"
                  });
                case 5:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } (),
          selectLanguage: function(t) {
            this.$store.dispatch("setLanguage", t.key),
            this.$root.$i18n.locale = this.$store.getters.lang_flag,
            this.sheet = !1
          },
          updatePWAInstallprompt: function(t) {
            this.showPWAInstallPrompt = t.showPWAInstallPrompt,
            this.installEvent = t.event
          },
          togglePWAInstallGuildelineDialog: function(t) {
            this.dialog = t
          }
        },
        computed: {
          getUsername: function() {
            return "" === this.$store.getters.user_username ? 0 : this.$store.getters.user_username
          },
          getFullname: function() {
            return "" === this.$store.getters.user_fullname ? this.$t("shared.guest") : this.$store.getters.user_fullname
          },
          getLogo: function() {
            return "" === this.$store.getters.system_logo ? "//assets.office4u.xyz/common_asset/webot_logo.png": this.$store.getters.system_logo
          },
          getLogin_flag: function() {
            return this.$store.getters.login_flag
          },
          sideMenu: function() {
            if (this.$store.getters.services && 0 == this.$store.getters.services["mini_game_service"]) {
              var t = this.items.filter(function(t) {
                return "miniGame" != t.title && "miniGamePrizes" != t.title
              });
              this.items = t
            }
            if ("" == this.$store.getters.user_token) {
              var e = this.items.filter(function(t) {
                return "history" != t.title && "log_out" != t.title && "change_password" != t.title && "miniGame" != t.title && "miniGamePrizes" != t.title
              });
              return e
            }
            return this.items
          },
          getLanguage: function() {
            return "en" == this.$store.getters.lang_flag ? "English": "zh-CN" == this.$store.getters.lang_flag ? "华文": "ms" == this.$store.getters.lang_flag ? "Melayu": "th" == this.$store.getters.lang_flag ? "ไทย": "English"
          },
          getLanguageFlag: function() {
            return "en" == this.$store.getters.lang_flag ? this.getImgUrl("UK") : "zh-CN" == this.$store.getters.lang_flag ? this.getImgUrl("CN") : "ms" == this.$store.getters.lang_flag ? this.getImgUrl("MY") : "th" == this.$store.getters.lang_flag ? this.getImgUrl("TH") : this.getImgUrl("UK")
          }
        }
      },
      me = de,
      pe = (a("7262"), a("4ca6")),
      fe = a("288c"),
      ge = a("8860"),
      he = a("c954"),
      ve = a("f774"),
      _e = a("71d9"),
      be = a("706c"),
      we = a("2a7f"),
      ke = Object(m["a"])(me, St, It, !1, null, "5b7b8bb2", null),
      ye = ke.exports;
      f()(ke, {
        VAvatar: Jt["a"],
        VBadge: pe["a"],
        VBottomSheet: fe["a"],
        VBtn: g["a"],
        VDivider: oe["a"],
        VIcon: h["a"],
        VList: ge["a"],
        VListTile: Qt["a"],
        VListTileAction: Xt["a"],
        VListTileAvatar: he["a"],
        VListTileContent: Kt["a"],
        VListTileTitle: Kt["c"],
        VNavigationDrawer: ve["a"],
        VSpacer: le["a"],
        VSubheader: Pt["a"],
        VToolbar: _e["a"],
        VToolbarSideIcon: be["a"],
        VToolbarTitle: we["a"]
      });
      var xe = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("footer", {
          staticStyle: {
            height: "auto",
            "padding-top": "2px"
          }
        },
        [a("v-card", {
          staticClass: "footer semi-transparent-7-bg",
          attrs: {
            flat: "",
            tile: "",
            height: "auto"
          }
        },
        [a("v-card-text", {
          staticClass: "justify-center",
          staticStyle: {
            display: "flex"
          }
        },
        t._l(t.contacts,
        function(e, s) {
          return a("div", {
            key: s,
            attrs: {
              index: s
            }
          },
          [a("img", {
            staticClass: "v-image__image--cover",
            staticStyle: {
              cursor: "pointer",
              padding: "2px"
            },
            attrs: {
              src: t.getImgUrl(e),
              width: "70",
              height: "auto"
            },
            on: {
              click: function(e) {
                return e.preventDefault(),
                t.$router.push({
                  name: "Contact"
                })
              }
            }
          })])
        }), 0)], 1)], 1)
      },
      Ae = [],
      De = {
        name: "pageFooter",
        data: function() {
          return {
            contacts: ["facebook", "twitter", "instagram", "whatsapp"]
          }
        },
        methods: {
          getImgUrl: function(t) {
            var e = a("a219");
            return e("./" + t + ".jpg")
          }
        }
      },
      Ce = De,
      Te = (a("a432"), Object(m["a"])(Ce, xe, Ae, !1, null, "11ac56ea", null)),
      Pe = Te.exports;
      f()(Te, {
        VCard: et["a"],
        VCardText: Dt["b"]
      });
      var Ve = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("div", ["" !== t.atype ? a("Alert", {
          attrs: {
            atype: t.atype,
            message: t.message,
            visibility: t.visibility
          }
        }) : t._e(), a("carousel", {}), a("Step", {
          attrs: {
            step: t.step
          }
        }), "" == t.$store.getters.user_token ? a("Loginbar") : t._e(), a("Banner", {
          attrs: {
            banner: t.banner
          }
        }), a("div", {
          staticClass: "menu-container"
        },
        [a("Menu", {
          attrs: {
            menu: t.menu
          }
        })], 1), a("Banner", {
          attrs: {
            banner: t.bottomBanner
          }
        })], 1)
      },
      je = [],
      Se = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("v-flex", {
          attrs: {
            xs12: "",
            sm12: "",
            md10: "",
            lg8: "",
            "offset-md1": "",
            "offset-lg2": ""
          }
        },
        [a("div", {
          staticClass: "menu-btn-group",
          staticStyle: {
            width: "100%"
          }
        },
        t._l(t.menuList,
        function(e, s) {
          return a("v-btn", {
            key: s,
            staticClass: "menu-button font-size transparent-bg",
            on: {
              click: function(a) {
                return a.preventDefault(),
                t.$router.push({
                  name: e.url
                })
              }
            }
          },
          [a("v-layout", {
            attrs: {
              row: "",
              wrap: ""
            }
          },
          [a("v-flex", {
            staticStyle: {
              position: "relative"
            },
            attrs: {
              xs12: ""
            }
          },
          [a("v-img", {
            attrs: {
              src: e.image,
              contain: ""
            }
          }), a("div", {
            staticClass: "overlay"
          },
          [a("span", {
            staticClass: "home-menu-title"
          },
          [t._v(t._s(t.$t("home_menu." + e.name.toLowerCase().replace(/ /g, "_"))))])])], 1)], 1)], 1)
        }), 1)])
      },
      Ie = [],
      Re = {
        props: ["menu"],
        data: function() {
          return {}
        },
        computed: {
          menuList: function() {
            return "" != this.$store.getters.user_token ? this.menu ? this.menu.after: [] : this.menu ? this.menu.before: []
          }
        }
      },
      Le = Re,
      $e = (a("dbd8"), a("5a81"), a("adda")),
      ze = Object(m["a"])(Le, Se, Ie, !1, null, "8be5eb2c", null),
      Me = ze.exports;
      f()(ze, {
        VBtn: g["a"],
        VFlex: st["a"],
        VImg: $e["a"],
        VLayout: Tt["a"]
      });
      var Fe = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("v-flex", {
          attrs: {
            xs12: "",
            sm12: "",
            md10: "",
            lg8: "",
            "offset-md1": "",
            "offset-lg2": ""
          }
        },
        [a("v-img", {
          attrs: {
            src: t.stepImg
          }
        })], 1)
      },
      Ne = [],
      Ge = {
        props: ["step"],
        data: function() {
          return {}
        },
        computed: {
          stepImg: function() {
            return this.step ? this.step: "//assets.office4u.xyz/common_asset/stepper/stepper-05.webp"
          }
        }
      },
      Be = Ge,
      Ee = (a("3e66"), Object(m["a"])(Be, Fe, Ne, !1, null, "77958fdb", null)),
      Ue = Ee.exports;
      f()(Ee, {
        VFlex: st["a"],
        VImg: $e["a"]
      });
      var Oe = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("v-flex", {
          staticStyle: {
            position: "relative"
          },
          attrs: {
            xs12: "",
            sm12: "",
            md10: "",
            lg8: "",
            "offset-md1": "",
            "offset-lg2": ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs12: ""
          }
        },
        [t.banners && t.banners.length > 0 ? a("carousel", {
          attrs: {
            perPage: 1,
            autoplay: !0,
            paginationEnabled: !1,
            loop: !0,
            speed: 1e3,
            autoplayTimeout: 4e3,
            ease: "true"
          }
        },
        t._l(t.banners,
        function(t, e) {
          return a("slide", {
            key: t.id,
            attrs: {
              index: e
            }
          },
          ["Image" == t.type ? a("img", {
            attrs: {
              src: t.value,
              width: "100%;",
              height: "auto"
            }
          }) : a("video", {
            staticStyle: {
              height: "100%"
            },
            attrs: {
              width: "100%;",
              height: "auto",
              controls: "",
              playsinline: "",
              autoplay: "",
              muted: "",
              loop: ""
            },
            domProps: {
              muted: !0
            }
          },
          [a("source", {
            attrs: {
              src: t.value,
              type: "video/mp4"
            }
          }), a("source", {
            attrs: {
              src: t.value,
              type: "video/webm"
            }
          }), a("source", {
            attrs: {
              src: t.value,
              type: "video/ogg"
            }
          })])])
        }), 1) : t._e()], 1), a("Jackpot")], 1)
      },
      We = [],
      He = (a("28a5"), a("0a63")),
      Ze = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("v-flex", {
          staticClass: "wrapper",
          attrs: {
            xs12: ""
          }
        },
        [a("div", {
          staticClass: "jackpot-wrapper"
        },
        [a("h2", {
          staticClass: "jackpot"
        },
        [t._v("Jackpot  RM"), a("span", {
          attrs: {
            id: "jp_0"
          }
        },
        [t._v(t._s(t.jackpot))])]), a("span", {
          staticClass: "space stars1"
        }), a("span", {
          staticClass: "space stars2"
        }), a("span", {
          staticClass: "space stars3"
        })])])
      },
      Ye = [];
      a("6b54"),
      a("c5f6");
      Number.prototype.formatMoney = function(t, e, a) {
        var s = this,
        n = (t = isNaN(t = Math.abs(t)) ? 2 : t, a = void 0 == a ? ".": a, e = void 0 == e ? ",": e, s < 0 ? "-": ""),
        i = parseInt(s = Math.abs( + s || 0).toFixed(t)) + "",
        r = (r = i.length) > 3 ? r % 3 : 0;
        return n + (r ? i.substr(0, r) + e: "") + i.substr(r).replace(/(\d{3})(?=\d)/g, "$1" + e) + (t ? a + Math.abs(s - i).toFixed(t).slice(2) : "")
      };
      var qe = {
        data: function() {
          return {
            v: new Array,
            vDisp: new Array,
            jpCount: 0,
            jackpotTimer: null,
            secondToReload: 1200,
            msecToBlink: 300,
            msecLoaded: 0,
            jackpot: 0
          }
        },
        computed: {},
        mounted: function() {
          this.getJackpotValues("10000000.00;20000000.00;", 2)
        },
        methods: {
          increaseJackpot: function() {
            for (var t = 0; t < this.jpCount; t++) isNaN(this.vDisp[t]) || (this.vDisp[t] += .01),
            this.displayJackpotValues("jp_" + t, this.vDisp[t])
          },
          getJackpotValues: function(t, e) {
            this.jpCount = e;
            for (var a = new Date,
            s = (1 == a.getFullYear().toString().length ? a.getFullYear().toString() : a.getFullYear().toString(), 1 == a.getMonth().toString().length ? "0" + a.getMonth().toString() : a.getMonth().toString()), n = 1 == a.getDate().toString().length ? "0" + a.getDate().toString() : a.getDate().toString(), i = 1 == a.getHours().toString().length ? "0" + a.getHours().toString() : a.getHours().toString(), r = 1 == a.getMinutes().toString().length ? "0" + a.getMinutes().toString() : a.getMinutes().toString(), o = s + n + i + r, l = 0; l < this.jpCount; l++) isNaN(t.split(";")[l]) ? this.vDisp[l] = t.split(";")[l] : (this.v[l] = parseInt(t.split(";")[l]) + parseInt(o), this.vDisp[l] = this.v[l]);
            0 == this.msecLoaded && (this.jackpotTimer = window.setTimeout(this.increaseJackpot, this.msecToBlink))
          },
          displayJackpotValues: function(t, e) {
            this.msecLoaded += this.msecToBlink,
            isNaN(e) ? this.jackpot = e: this.jackpot = parseFloat(e).formatMoney(2, ",", "."),
            1e3 * this.secondToReload <= this.msecLoaded ? (this.msecLoaded = 1, window.clearTimeout(this.jackpotTimer), this.jackpotTimer = window.setTimeout(this.increaseJackpot, this.msecToBlink)) : (window.clearTimeout(this.jackpotTimer), this.jackpotTimer = window.setTimeout(this.increaseJackpot, this.msecToBlink))
          }
        }
      },
      Je = qe,
      Qe = (a("3f52"), Object(m["a"])(Je, Ze, Ye, !1, null, "53f466ca", null)),
      Xe = Qe.exports;
      f()(Qe, {
        VFlex: st["a"]
      });
      var Ke = {
        data: function() {
          return {
            banners: null
          }
        },
        mounted: function() {
          this.getBanners()
        },
        components: {
          Carousel: He["Carousel"],
          Slide: He["Slide"],
          Jackpot: Xe
        },
        methods: {
          getBanners: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e, a;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2,
                  V.getBanners();
                case 2:
                  e = t.sent,
                  a = null,
                  e && "success" in e && !0 === e.success && (a = e.data.map(function(t) {
                    var e = t.value.split(".");
                    return "jpg" === e[e.length - 1].toLowerCase() || "png" === e[e.length - 1].toLowerCase() || "gif" === e[e.length - 1].toLowerCase() || "jpeg" === e[e.length - 1].toLowerCase() ? (t.type = "Image", t) : "mp4" === e[e.length - 1].toLowerCase() || "webm" === e[e.length - 1].toLowerCase() || "ogg" === e[e.length - 1].toLowerCase() ? (t.type = "Video", t) : (t.type = "Unkown", t)
                  }), this.banners = a.filter(function(t) {
                    return "Unkown" != t.type
                  }));
                case 5:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } ()
        }
      },
      ta = Ke,
      ea = (a("ad24"), Object(m["a"])(ta, Oe, We, !1, null, "7c83774e", null)),
      aa = ea.exports;
      f()(ea, {
        VFlex: st["a"]
      });
      var sa = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("v-flex", {
          attrs: {
            xs12: "",
            sm12: "",
            md10: "",
            lg8: "",
            "offset-md1": "",
            "offset-lg2": ""
          }
        },
        [t.banner ? a("div", t._l(t.banners,
        function(t, e) {
          return a("div", {
            key: e
          },
          [a("v-img", {
            attrs: {
              src: t,
              contain: "",
              height: "auto"
            }
          })], 1)
        }), 0) : t._e()])
      },
      na = [],
      ia = {
        data: function() {
          return {}
        },
        props: ["banner"],
        computed: {
          banners: function() {
            return this.banner
          }
        },
        mounted: function() {},
        methods: {}
      },
      ra = ia,
      oa = Object(m["a"])(ra, sa, na, !1, null, null, null),
      la = oa.exports;
      f()(oa, {
        VFlex: st["a"],
        VImg: $e["a"]
      });
      var ca = {
        name: "Home",
        data: function() {
          return {
            snackbar: !1,
            snackbartitle: "",
            atype: "",
            message: "",
            visibility: "",
            banner: [],
            bottomBanner: [],
            step: null,
            defaultMenu: {
              before: [{
                name: "Register",
                param: "t1_home_body_menu_register",
                image: "//assets.office4u.xyz/common_asset/menu/Register.png",
                url: "Register"
              },
              {
                name: "Deposit",
                param: "t1_home_body_menu_deposit",
                image: "//assets.office4u.xyz/common_asset/menu/Deposit.png",
                url: "Game"
              },
              {
                name: "Games",
                param: "t1_home_body_menu_games",
                image: "//assets.office4u.xyz/common_asset/menu/Games.png",
                url: "Game"
              },
              {
                name: "Promotion",
                param: "t1_home_body_menu_promotion",
                image: "//assets.office4u.xyz/common_asset/menu/Promotion.png",
                url: "Promotion"
              },
              {
                name: "How to Play",
                param: "t1_home_body_menu_howtoplay",
                image: "//assets.office4u.xyz/common_asset/menu/How_2_Play.png",
                url: "Play"
              },
              {
                name: "Contact",
                param: "t1_home_body_menu_contactus",
                image: "//assets.office4u.xyz/common_asset/menu/Contact.png",
                url: "Contact"
              }],
              after: [{
                name: "VIP",
                param: "t1_home_body_menu_vip",
                image: "//assets.office4u.xyz/common_asset/menu/VIP.png",
                url: "Coming Soon"
              },
              {
                name: "Deposit",
                param: "t1_home_body_menu_deposit",
                image: "//assets.office4u.xyz/common_asset/menu/Deposit.png",
                url: "Game"
              },
              {
                name: "Games",
                param: "t1_home_body_menu_games",
                image: "//assets.office4u.xyz/common_asset/menu/Games.png",
                url: "Game"
              },
              {
                name: "Promotion",
                param: "t1_home_body_menu_promotion",
                image: "//assets.office4u.xyz/common_asset/menu/Promotion.png",
                url: "Promotion"
              },
              {
                name: "How to Win",
                param: "t1_home_body_menu_howtowin",
                image: "//assets.office4u.xyz/common_asset/menu/How_2_Win.png",
                url: "Tips"
              },
              {
                name: "Download",
                param: "t1_home_body_menu_download",
                image: "//assets.office4u.xyz/common_asset/menu/Download.png",
                url: "Download Link"
              },
              {
                name: "Mini Game",
                param: "t1_home_body_menu_minigame",
                image: "//assets.office4u.xyz/common_asset/menu/Mini_Game.png",
                url: "Mini Game"
              }]
            },
            defaultMenuImg: {
              Register: "//assets.office4u.xyz/common_asset/menu/Register.png",
              Deposit: "//assets.office4u.xyz/common_asset/menu/Deposit.png",
              Withdraw: "//assets.office4u.xyz/common_asset/menu/Withdraw.png",
              VIP: "//assets.office4u.xyz/common_asset/menu/VIP.png",
              Games: "//assets.office4u.xyz/common_asset/menu/Games.png",
              Promotion: "//assets.office4u.xyz/common_asset/menu/Promotion.png",
              Contact: "//assets.office4u.xyz/common_asset/menu/Contact.png",
              "How to Play": "//assets.office4u.xyz/common_asset/menu/How_2_Play.png",
              "How to Win": "//assets.office4u.xyz/common_asset/menu/How_2_Win.png",
              Download: "//assets.office4u.xyz/common_asset/menu/Download.png",
              "Mini Game": "//assets.office4u.xyz/common_asset/menu/Mini_Game.png"
            },
            menu: null
          }
        },
        components: {
          Menu: Me,
          carousel: aa,
          Alert: H,
          Banner: la,
          Step: Ue,
          Loginbar: Wt
        },
        mounted: function() {
          this.$store.getters.registration_flag && (this.$store.commit("toggleRegistrationFlag", !1), this.message = this.$t("register_success"), this.atype = "success", this.visibility = !0),
          this.getBodyAsset()
        },
        methods: {
          getBodyAsset: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e, a, s, n, i;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2,
                  V.getBodyAsset();
                case 2:
                  e = t.sent,
                  e && e["data"] && (e["data"]["banner"] && (this.banner = e["data"]["banner"].map(function(t) {
                    return t.value
                  })), e["data"]["bottomBanner"] && (this.bottomBanner = e["data"]["bottomBanner"].map(function(t) {
                    return t.value
                  })), e["data"]["step"] && (this.step = e["data"]["step"]["value"]), e["data"]["menu"] && (a = this, s = a.defaultMenuImg, n = [], i = [], e["data"]["menu"]["before"] && (n = e["data"]["menu"]["before"].map(function(t) {
                    var e = "";
                    return t.image ? e = t.image: s[t.menu.name] && (e = s[t.menu.name]),
                    {
                      name: t.menu ? t.menu.name: "Unknown",
                      url: t.menu ? t.menu.route: "Coming Soon",
                      image: e
                    }
                  })), e["data"]["menu"]["after"] && (i = e["data"]["menu"]["after"].map(function(t) {
                    var e = "";
                    return t.image ? e = t.image: s[t.menu.name] && (e = s[t.menu.name]),
                    {
                      name: t.menu ? t.menu.name: "Unknown",
                      url: t.menu ? t.menu.route: "Coming Soon",
                      image: e
                    }
                  })), a.menu = {
                    before: n,
                    after: i
                  }));
                case 4:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } ()
        }
      },
      ua = ca,
      da = Object(m["a"])(ua, Ve, je, !1, null, null, null),
      ma = da.exports,
      pa = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("div", [a("router-view")], 1)
      },
      fa = [],
      ga = {
        data: function() {
          return {}
        },
        methods: {}
      },
      ha = ga,
      va = Object(m["a"])(ha, pa, fa, !1, null, null, null),
      _a = va.exports,
      ba = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("div", [a("v-flex", {
          attrs: {
            xs12: "",
            sm10: "",
            "offset-sm1": "",
            md8: "",
            "offset-md2": "",
            lg6: "",
            "offset-lg3": ""
          }
        },
        ["" !== t.alertType ? a("Alert", {
          attrs: {
            atype: t.alertType,
            message: t.alertMessage,
            visibility: t.visibility
          }
        }) : t._e(), t.progressbar ? a("v-progress-linear", {
          attrs: {
            indeterminate: !0
          }
        }) : t._e(), a("v-list", {
          staticClass: "semi-transparent-bg",
          attrs: {
            "two-line": ""
          }
        },
        [a("v-subheader", [t._v("\n\n                " + t._s(t.$t("withdraw.bank_detail")) + "\n\n                "), a("v-spacer"), a("v-btn", {
          attrs: {
            icon: "",
            dark: "",
            "mt-5": "",
            color: "grey",
            to: {
              name: "Addbank"
            }
          }
        },
        [a("v-icon", [t._v("add")])], 1)], 1), t._l(t.bankAccounts,
        function(e, s) {
          return a("div", {
            key: s
          },
          [a("v-list-tile", {
            attrs: {
              avatar: ""
            },
            on: {
              click: function(a) {
                return a.preventDefault(),
                t.showWithdrawForm(e)
              }
            }
          },
          [a("v-list-tile-avatar", [a("img", {
            attrs: {
              src: e.bank.logo_url
            }
          })]), a("v-list-tile-content", [a("v-list-tile-title", {
            domProps: {
              innerHTML: t._s(e.bank_acc_name)
            }
          }), a("v-list-tile-title", {
            domProps: {
              innerHTML: t._s(e.bank_acc_no)
            }
          }), a("v-list-tile-sub-title", {
            domProps: {
              innerHTML: t._s(e.bank.name)
            }
          })], 1)], 1), s + 1 !== t.bankAccounts.length ? a("v-divider") : t._e()], 1)
        })], 2), a("showDialog", {
          attrs: {
            status: t.dialog,
            selectedBankAcc: t.data.selectedBank,
            selectedProductId: t.data.selectedProductId,
            productsList: t.products
          },
          on: {
            DialogSave: t.save,
            DialogClose: t.close
          }
        }), a("snackbar", {
          attrs: {
            show: t.snackbar,
            color: t.color,
            text: t.message,
            icon: "done_all",
            timeout: 2e3
          }
        })], 1)], 1)
      },
      wa = [],
      ka = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return "Banklist" == t.$route.name && t.data.selectedBank || "Addbank" == t.$route.name && t.data.bank ? a("v-layout", {
          attrs: {
            row: "",
            "justify-center": ""
          }
        },
        [a("v-dialog", {
          attrs: {
            persistent: "",
            "max-width": "600px"
          },
          model: {
            value: t.dialog,
            callback: function(e) {
              t.dialog = e
            },
            expression: "dialog"
          }
        },
        ["" !== t.alertType ? a("Alert", {
          attrs: {
            atype: t.alertType,
            message: t.alertMessage,
            visibility: t.visibility
          }
        }) : t._e(), a("v-card", {
          staticClass: "semi-transparent-9-bg"
        },
        ["Banklist" == t.$route.name ? a("v-card-title", {
          staticStyle: {
            "border-bottom": "5px solid #3944bb"
          }
        },
        [a("img", {
          staticStyle: {
            float: "left",
            width: "15%",
            "max-width": "50px",
            "margin-right": "15px"
          },
          attrs: {
            src: "//assets.office4u.xyz/photos/BO-Demo/game-withdraw.svg"
          }
        }), a("div", {
          staticClass: "withdraw-form-title"
        },
        [a("span", [t._v(t._s(t.$t("withdraw.title").toUpperCase()))])])]) : a("v-card-title", {
          staticStyle: {
            "border-bottom": "5px solid #3944bb"
          }
        },
        [a("img", {
          staticStyle: {
            float: "left",
            width: "15%",
            "max-width": "50px",
            "margin-right": "15px"
          },
          attrs: {
            src: "//assets.office4u.xyz/photos/BO-Demo/blue-deposit-svg.svg"
          }
        }), a("div", {
          staticClass: "withdraw-form-title"
        },
        [a("span", [t._v(t._s(t.$t("withdraw.enter_bank_detail").toUpperCase()))])])]), a("v-card-text", {
          staticClass: "v-card__text"
        },
        ["Banklist" == t.$route.name ? a("span", [t._v(t._s(t.$t("deposit.min_amount_validation_rule", {
          amount: t.minWithdrawAmount,
          currency: this.$store.getters.currency
        })))]) : t._e(), a("div", {
          staticStyle: {
            "margin-bottom": "1em"
          }
        }), "Banklist" == t.$route.name ? a("v-form", {
          ref: "withdrawFrom",
          attrs: {
            "lazy-validation": ""
          },
          model: {
            value: t.valid,
            callback: function(e) {
              t.valid = e
            },
            expression: "valid"
          }
        },
        [a("v-layout", {
          staticClass: "margin-5-top-bottom",
          attrs: {
            row: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs4: ""
          }
        },
        [a("v-subheader", {
          staticClass: "inputlabel"
        },
        [t._v(t._s(t.$t("reusable.product")))])], 1), a("v-flex", {
          staticClass: "margin-16-right",
          attrs: {
            xs8: ""
          }
        },
        [a("v-select", {
          attrs: {
            items: t.products,
            "item-value": "id",
            rules: t.productRules
          },
          scopedSlots: t._u([{
            key: "selection",
            fn: function(e) {
              return [a("img", {
                staticStyle: {
                  "margin-right": "5px"
                },
                attrs: {
                  src: e.item.logo,
                  width: "45px;"
                }
              }), t._v("\r\n\r\n                                        " + t._s(e.item.name) + "\r\n\r\n                                    ")]
            }
          },
          {
            key: "item",
            fn: function(e) {
              return [a("img", {
                staticStyle: {
                  "margin-right": "5px"
                },
                attrs: {
                  src: e.item.logo,
                  width: "45px;"
                }
              }), t._v("\r\n\r\n                                        " + t._s(e.item.name) + "\r\n\r\n                                    ")]
            }
          }], null, !1, 3789470396),
          model: {
            value: t.data.selectedProduct,
            callback: function(e) {
              t.$set(t.data, "selectedProduct", e)
            },
            expression: "data.selectedProduct"
          }
        })], 1)], 1), a("div", {
          staticStyle: {
            "margin-bottom": "1em"
          }
        }), a("v-layout", {
          staticClass: "margin-5-top-bottom",
          attrs: {
            row: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs4: ""
          }
        },
        [a("v-subheader", {
          staticClass: "inputlabel"
        },
        [t._v(t._s(t.$t("history.amount")))])], 1), a("v-flex", {
          staticClass: "margin-16-right",
          attrs: {
            xs8: ""
          }
        },
        [a("v-text-field", {
          staticClass: "withdrawAmountField",
          attrs: {
            rules: t.amountRules,
            "single-line": "",
            box: "",
            required: ""
          },
          on: {
            focus: function(e) {
              return t.inputFocus("withdrawAmountField")
            }
          },
          model: {
            value: t.data.amount,
            callback: function(e) {
              t.$set(t.data, "amount", e)
            },
            expression: "data.amount"
          }
        })], 1)], 1), a("div", {
          staticStyle: {
            "margin-bottom": "1em"
          }
        }), a("v-layout", {
          staticClass: "margin-5-top-bottom",
          attrs: {
            row: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs4: ""
          }
        },
        [a("v-subheader", {
          staticClass: "inputlabel"
        },
        [t._v(t._s(t.$t("withdraw.bank_name")))])], 1), a("v-flex", {
          staticClass: "margin-16-right",
          attrs: {
            xs8: ""
          }
        },
        [a("v-text-field", {
          attrs: {
            value: t.data.selectedBank.bank.name,
            disabled: ""
          }
        })], 1)], 1), a("div", {
          staticStyle: {
            "margin-bottom": "1em"
          }
        }), a("v-layout", {
          staticClass: "margin-5-top-bottom",
          attrs: {
            row: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs4: ""
          }
        },
        [a("v-subheader", {
          staticClass: "inputlabel"
        },
        [t._v(t._s(t.$t("withdraw.account_no")))])], 1), a("v-flex", {
          staticClass: "margin-16-right",
          attrs: {
            xs8: ""
          }
        },
        [a("v-text-field", {
          attrs: {
            value: t.data.selectedBank.bank_acc_no,
            disabled: ""
          }
        })], 1)], 1), a("div", {
          staticStyle: {
            "margin-bottom": "1em"
          }
        }), a("v-layout", {
          staticClass: "margin-5-top-bottom",
          attrs: {
            row: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs4: ""
          }
        },
        [a("v-subheader", {
          staticClass: "inputlabel"
        },
        [t._v(t._s(t.$t("withdraw.account_holder_name")))])], 1), a("v-flex", {
          staticClass: "margin-16-right",
          attrs: {
            xs8: ""
          }
        },
        [a("v-text-field", {
          attrs: {
            value: t.data.selectedBank.bank_acc_name,
            disabled: ""
          }
        })], 1)], 1)], 1) : a("v-form", {
          ref: "bankDetailform",
          attrs: {
            "lazy-validation": ""
          },
          model: {
            value: t.valid,
            callback: function(e) {
              t.valid = e
            },
            expression: "valid"
          }
        },
        [a("v-layout", {
          staticClass: "margin-5-top-bottom",
          attrs: {
            row: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs4: ""
          }
        },
        [a("v-subheader", {
          staticClass: "inputlabel"
        },
        [t._v(t._s(t.$t("withdraw.bank_name")))])], 1), a("v-flex", {
          staticClass: "margin-16-right",
          attrs: {
            xs8: ""
          }
        },
        [a("v-text-field", {
          attrs: {
            value: t.data.bank.name,
            disabled: ""
          }
        })], 1)], 1), a("v-layout", {
          staticClass: "margin-5-top-bottom",
          attrs: {
            row: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs4: ""
          }
        },
        [a("v-subheader", {
          staticClass: "inputlabel"
        },
        [t._v(t._s(t.$t("withdraw.account_no")))])], 1), a("v-flex", {
          staticClass: "margin-16-right",
          attrs: {
            xs8: ""
          }
        },
        [a("v-text-field", {
          staticClass: "banklistAddAccNoField",
          attrs: {
            rules: t.accNoRules,
            required: "",
            box: "",
            "single-line": ""
          },
          on: {
            focus: function(e) {
              return t.inputFocus("banklistAddAccNoField")
            }
          },
          model: {
            value: t.data.accNo,
            callback: function(e) {
              t.$set(t.data, "accNo", e)
            },
            expression: "data.accNo"
          }
        })], 1)], 1), a("v-layout", {
          staticClass: "margin-5-top-bottom",
          attrs: {
            row: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs4: ""
          }
        },
        [a("v-subheader", {
          staticClass: "inputlabel"
        },
        [t._v(t._s(t.$t("withdraw.account_holder_name")))])], 1), a("v-flex", {
          staticClass: "margin-16-right",
          attrs: {
            xs8: ""
          }
        },
        [a("v-text-field", {
          attrs: {
            value: t.data.holderName,
            disabled: ""
          }
        })], 1)], 1)], 1)], 1), a("v-card-actions", {
          staticClass: "v-card__actions font-size"
        },
        [a("v-btn", {
          attrs: {
            color: "blue darken-1",
            disabled: !t.valid,
            flat: "",
            small: ""
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.save(e)
            }
          }
        },
        [t._v(t._s(t.$t("shared.save")))]), a("v-btn", {
          attrs: {
            color: "blue darken-1",
            flat: "",
            small: ""
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.close(e)
            }
          }
        },
        [t._v(t._s(t.$t("reusable.close")))]), a("v-spacer")], 1)], 1)], 1)], 1) : t._e()
      },
      ya = [],
      xa = {
        name: "Dialog-Withdraw",
        props: ["status", "productsList", "selectedBankAcc", "selectedProductId", "selectedBank"],
        data: function() {
          return {
            valid: !0,
            data: {
              selectedBank: null,
              selectedProduct: null,
              amount: 0,
              method: "Online",
              bank: null,
              holderName: this.$store.getters.user_fullname,
              accNo: ""
            },
            products: [],
            minWithdrawAmount: 100,
            alertType: "",
            alertMessage: "",
            visibility: !1
          }
        },
        watch: {
          selectedBankAcc: function(t) {
            this.data.selectedBank = t
          },
          productsList: function(t) {
            this.products = t
          },
          selectedProductId: function(t) {
            this.data.selectedProduct = t
          },
          selectedBank: function(t) {
            this.data.bank = t
          }
        },
        components: {
          Alert: H
        },
        mounted: function() {
          this.getMinWithdraw()
        },
        computed: {
          dialog: function() {
            return this.status
          },
          amountRules: function() {
            var t = this;
            return [function(e) {
              return !! e || t.$t("deposit.require_amount_validation_rule")
            },
            function(e) {
              return e && e >= parseFloat(t.minWithdrawAmount) || t.$t("deposit.min_amount_validation_rule", {
                amount: t.minWithdrawAmount,
                currency: t.$store.getters.currency
              })
            }]
          },
          productRules: function() {
            var t = this;
            return [function(e) {
              return !! e || t.$t("withdraw.product_validation_rule")
            }]
          },
          accNoRules: function() {
            var t = this;
            return [function(e) {
              return !! e || t.$t("withdraw.account_no_validation_rule")
            }]
          }
        },
        methods: {
          inputFocus: function(t) {
            var e = null;
            e = $("." + t + " .v-input__control .v-input__slot"),
            e.css("text-shadow", "0px 0px 2px #ccc"),
            e.css("box-shadow", "0 0 2px #fff, 0 0 5px #fff, 0 0 10px #fff"),
            e.css("transition-delay", "0.1s")
          },
          save: function() {
            "Banklist" == this.$route.name ? this.withdraw() : this.addBankAcc()
          },
          close: function() {
            this.dialog = !this.dialog,
            this.$emit("DialogClose", this.dialog)
          },
          showValidateMessage: function(t) {
            this.visibility = !0,
            this.alertMessage = t,
            this.alertType = "error";
            var e = this;
            setTimeout(function() {
              e.visibility = !1,
              e.alertMessage = "",
              e.alertType = ""
            },
            2e3)
          },
          withdraw: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e, a, s;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  if (! (this.data.selectedBank && this.data.selectedProduct && this.data.amount > 0)) {
                    t.next = 7;
                    break
                  }
                  return t.next = 3,
                  V.postWithdraw({
                    access_token: this.$store.getters.user_token,
                    product_from: this.data.selectedProduct,
                    member_bank_acc_id: this.data.selectedBank.id,
                    method: this.data.method,
                    amount: this.data.amount
                  });
                case 3:
                  if (e = t.sent, e && "success" in e && !0 === e.success) this.dialog = !this.dialog,
                  this.$emit("DialogSave", {
                    dialog: this.dialog,
                    message: e.message
                  });
                  else if ("token invalid" == e.message) this.$store.dispatch("logout", e.data),
                  this.$router.push({
                    name: "login"
                  });
                  else if ("Ticket Detail Invalid" == e.message) {
                    for (s in a = e.message, e.data) a += "<br>" + e.data[s];
                    this.showValidateMessage(a)
                  } else "Product Username Not Exist. " == e.data ? this.showValidateMessage(e.data) : this.showValidateMessage(e.message);
                  t.next = 8;
                  break;
                case 7:
                  this.showValidateMessage(this.$t("deposit.not_completed_form"));
                case 8:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } (),
          addBankAcc: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e, a, s;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  if (!this.data.bank || "" == this.data.accNo) {
                    t.next = 7;
                    break
                  }
                  return t.next = 3,
                  V.postBankAccount({
                    access_token: this.$store.getters.user_token,
                    bank_id: this.data.bank.id,
                    bank_acc_no: this.data.accNo
                  });
                case 3:
                  if (e = t.sent, e && "success" in e && !0 === e.success) this.dialog = !this.dialog,
                  this.$emit("DialogAddBankSave", {
                    dialog: this.dialog,
                    message: e.message
                  });
                  else if ("token invalid" == e.message) this.$store.dispatch("logout", e.data),
                  this.$router.push({
                    name: "login"
                  });
                  else if ("Input Error" == e.message) {
                    for (s in a = e.message, e.data) a += "<br>" + e.data[s];
                    this.showValidateMessage(a)
                  } else this.showValidateMessage(e.message);
                  t.next = 8;
                  break;
                case 7:
                  this.showValidateMessage(this.$t("deposit.not_completed_form"));
                case 8:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } (),
          getMinWithdraw: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2,
                  V.getMinWithdraw();
                case 2:
                  e = t.sent,
                  e && (this.minWithdrawAmount = e);
                case 4:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } ()
        }
      },
      Aa = xa,
      Da = (a("4704"), a("b56d")),
      Ca = Object(m["a"])(Aa, ka, ya, !1, null, "0ee2c91a", null),
      Ta = Ca.exports;
      f()(Ca, {
        VBtn: g["a"],
        VCard: et["a"],
        VCardActions: Dt["a"],
        VCardText: Dt["b"],
        VCardTitle: Ct["a"],
        VDialog: re["a"],
        VFlex: st["a"],
        VForm: nt["a"],
        VLayout: Tt["a"],
        VSelect: Da["a"],
        VSpacer: le["a"],
        VSubheader: Pt["a"],
        VTextField: rt["a"]
      });
      var Pa = {
        name: "BankList",
        data: function() {
          return {
            valid: !0,
            data: {
              selectedBank: null,
              selectedProductId: null
            },
            bankAccounts: [],
            products: [],
            dialog: !1,
            alertType: "",
            alertMessage: "",
            visibility: !1,
            progressbar: !1,
            snackbar: !1,
            message: "",
            color: ""
          }
        },
        components: {
          Alert: H,
          snackbar: b,
          showDialog: Ta
        },
        mounted: function() {
          this.$route.params.product && (this.data.selectedProductId = this.$route.params.product.id),
          this.getFormData()
        },
        watch: {
          message: function(t) {
            var e = this;
            setTimeout(function() {
              if (e.snackbar = !1, t == e.$t("deposit.submit_ticket_success")) return e.$router.push({
                name: "home"
              })
            },
            1e3)
          }
        },
        methods: {
          getImgUrl: function(t) {
            var e = a("9142");
            return e("./" + t + ".png")
          },
          save: function(t) {
            this.message = t.message,
            "Submit Ticket Successfully" == this.message && (this.message = this.$t("deposit.submit_ticket_success")),
            this.color = "green",
            this.dialog = t.dialog,
            this.snackbar = !0
          },
          close: function() {
            this.data.selectedBank = null,
            this.dialog = !this.dialog
          },
          getFormData: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  if (this.progressbar = !0, "" == this.$store.getters.user_token) {
                    t.next = 9;
                    break
                  }
                  return t.next = 4,
                  this.getBankAccounts();
                case 4:
                  return t.next = 6,
                  this.getProducts();
                case 6:
                  this.progressbar = !1,
                  t.next = 10;
                  break;
                case 9:
                  this.$router.push({
                    name:
                    "login"
                  });
                case 10:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } (),
          getBankAccounts: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2,
                  V.getMemberInfo({
                    access_token: this.$store.getters.user_token
                  });
                case 2:
                  e = t.sent,
                  e && "success" in e && !0 === e.success ? this.bankAccounts = e.data.member_bank_acc: (this.visibility = !0, this.alertMessage = e.message, this.alertType = "error", "token invalid" == e.message && (this.$store.dispatch("logout", e.data), this.$router.push({
                    name: "login"
                  })));
                case 4:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } (),
          getProducts: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e, a;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2,
                  V.getProductsMember({
                    access_token: this.$store.getters.user_token
                  });
                case 2:
                  e = t.sent,
                  e && "success" in e && !0 === e.success ? (this.products = e.data, a = this, this.products = this.products.map(function(t) {
                    return 1 == t.id && (t.logo = a.getImgUrl("wallet")),
                    1 != t.id && "" == t.logo && (t.logo = a.getImgUrl("coming-soon")),
                    t
                  })) : (this.visibility = !0, this.alertMessage = e.message, this.alertType = "error", "token invalid" == e.message && (this.$store.dispatch("logout", e.data), this.$router.push({
                    name: "login"
                  })));
                case 4:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } (),
          showWithdrawForm: function(t) {
            this.data.selectedBank = t,
            this.dialog = !this.dialog
          }
        }
      },
      Va = Pa,
      ja = Object(m["a"])(Va, ba, wa, !1, null, null, null),
      Sa = ja.exports;
      f()(ja, {
        VBtn: g["a"],
        VDivider: oe["a"],
        VFlex: st["a"],
        VIcon: h["a"],
        VList: ge["a"],
        VListTile: Qt["a"],
        VListTileAvatar: he["a"],
        VListTileContent: Kt["a"],
        VListTileSubTitle: Kt["b"],
        VListTileTitle: Kt["c"],
        VProgressLinear: it["a"],
        VSpacer: le["a"],
        VSubheader: Pt["a"]
      });
      var Ia = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("div", [a("v-flex", {
          attrs: {
            xs12: "",
            sm10: "",
            "offset-sm1": ""
          }
        },
        ["" !== t.alertType ? a("Alert", {
          attrs: {
            atype: t.alertType,
            message: t.alertMessage,
            visibility: t.visibility
          }
        }) : t._e(), t.progressbar ? a("v-progress-linear", {
          attrs: {
            indeterminate: !0
          }
        }) : t._e(), a("v-item-group", [a("v-container", {
          attrs: {
            "grid-list-lg": ""
          }
        },
        [a("v-layout", {
          attrs: {
            wrap: ""
          }
        },
        t._l(t.banks,
        function(e, s) {
          return a("v-flex", {
            key: s,
            attrs: {
              xs6: ""
            }
          },
          [a("v-item", [a("v-hover", {
            scopedSlots: t._u([{
              key: "default",
              fn: function(s) {
                var n = s.hover;
                return a("v-card", {
                  staticClass: "mx-auto",
                  attrs: {
                    color: "grey lighten-4",
                    "max-width": "800"
                  },
                  on: {
                    click: function(a) {
                      return a.preventDefault(),
                      t.showAddBankForm(e)
                    }
                  }
                },
                [a("v-img", {
                  attrs: {
                    "aspect-ratio": 3,
                    src: e.logo_url
                  }
                },
                [a("v-expand-transition", [n ? a("div", {
                  staticClass: "d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-3 text-xs-center",
                  staticStyle: {
                    height: "100%"
                  }
                },
                [t._v("\r\n                                                " + t._s(e.name) + "\r\n                                            ")]) : t._e()])], 1)], 1)
              }
            }], null, !0)
          })], 1)], 1)
        }), 1)], 1)], 1), a("showDialog", {
          attrs: {
            status: t.dialog,
            selectedBank: t.data.selectedBank
          },
          on: {
            DialogAddBankSave: t.save,
            DialogClose: t.close
          }
        }), a("snackbar", {
          attrs: {
            show: t.snackbar,
            color: "green",
            text: t.$t("withdraw.bank_add_success"),
            icon: "done_all"
          }
        })], 1)], 1)
      },
      Ra = [],
      La = {
        data: function() {
          return {
            valid: !0,
            data: {
              selectedBank: null
            },
            banks: [],
            dialog: !1,
            alertType: "",
            alertMessage: "",
            visibility: !1,
            progressbar: !1,
            snackbar: !1,
            message: "",
            color: ""
          }
        },
        components: {
          Alert: H,
          snackbar: b,
          showDialog: Ta
        },
        mounted: function() {
          this.getBanks()
        },
        watch: {
          message: function(t) {
            var e = this;
            setTimeout(function() {
              if (e.snackbar = !1, "Add Bank Account Successfully" == t) return e.$router.push({
                name: "Banklist"
              })
            },
            1e3)
          }
        },
        methods: {
          getImgUrl: function(t) {
            var e = a("9142");
            return e("./" + t + ".png")
          },
          save: function(t) {
            this.message = t.message,
            this.color = "green",
            this.dialog = t.dialog,
            this.snackbar = !0
          },
          close: function() {
            this.data.selectedBank = null,
            this.dialog = !this.dialog
          },
          getBanks: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2,
                  V.getBanks({
                    access_token: this.$store.getters.user_token
                  });
                case 2:
                  e = t.sent,
                  e && "success" in e && !0 === e.success ? this.banks = e.data: (this.visibility = !0, this.alertMessage = e.message, this.alertType = "error", "token invalid" == e.message && (this.$store.dispatch("logout", e.data), this.$router.push({
                    name: "login"
                  })));
                case 4:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } (),
          showAddBankForm: function(t) {
            this.dialog = !this.dialog,
            this.data.selectedBank = t
          }
        }
      },
      $a = La,
      za = (a("e47d"), a("0789")),
      Ma = a("ce87"),
      Fa = a("d903"),
      Na = a("604c"),
      Ga = Object(m["a"])($a, Ia, Ra, !1, null, null, null),
      Ba = Ga.exports;
      f()(Ga, {
        VCard: et["a"],
        VContainer: at["a"],
        VExpandTransition: za["a"],
        VFlex: st["a"],
        VHover: Ma["a"],
        VImg: $e["a"],
        VItem: Fa["a"],
        VItemGroup: Na["b"],
        VLayout: Tt["a"],
        VProgressLinear: it["a"]
      });
      var Ea = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("div", [a("v-flex", {
          attrs: {
            xs12: "",
            sm10: "",
            "offset-sm1": "",
            md8: "",
            "offset-md2": "",
            lg6: "",
            "offset-lg3": ""
          }
        },
        [a("v-container", {
          attrs: {
            "text-xs-center": ""
          }
        },
        [a("HistoryTab", {
          attrs: {
            currentTab: t.currentTab
          }
        }), a("v-container", {
          attrs: {
            "grid-list-md": ""
          }
        },
        [a("v-layout", {
          attrs: {
            row: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs6: "",
            sm6: "",
            md6: ""
          }
        },
        [a("v-menu", {
          attrs: {
            "close-on-content-click": !1,
            "nudge-right": 40,
            lazy: "",
            transition: "scale-transition",
            "offset-y": "",
            "full-width": "",
            "min-width": "290px"
          },
          scopedSlots: t._u([{
            key: "activator",
            fn: function(e) {
              var s = e.on;
              return [a("v-text-field", t._g({
                attrs: {
                  label: t.$t("history.date_from"),
                  "prepend-icon": "event",
                  readonly: ""
                },
                model: {
                  value: t.fromDate,
                  callback: function(e) {
                    t.fromDate = e
                  },
                  expression: "fromDate"
                }
              },
              s))]
            }
          }])
        },
        [a("v-date-picker", {
          model: {
            value: t.fromDate,
            callback: function(e) {
              t.fromDate = e
            },
            expression: "fromDate"
          }
        })], 1)], 1), a("v-flex", {
          attrs: {
            xs6: "",
            lg6: ""
          }
        },
        [a("v-menu", {
          attrs: {
            "close-on-content-click": !1,
            "nudge-right": 40,
            lazy: "",
            transition: "scale-transition",
            "offset-y": "",
            "full-width": "",
            "min-width": "290px"
          },
          scopedSlots: t._u([{
            key: "activator",
            fn: function(e) {
              var s = e.on;
              return [a("v-text-field", t._g({
                attrs: {
                  label: t.$t("history.date_to"),
                  "prepend-icon": "event",
                  readonly: ""
                },
                model: {
                  value: t.toDate,
                  callback: function(e) {
                    t.toDate = e
                  },
                  expression: "toDate"
                }
              },
              s))]
            }
          }])
        },
        [a("v-date-picker", {
          model: {
            value: t.toDate,
            callback: function(e) {
              t.toDate = e
            },
            expression: "toDate"
          }
        })], 1)], 1)], 1), a("v-layout", {
          attrs: {
            row: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs6: "",
            sm6: "",
            md6: ""
          }
        },
        [a("v-btn", {
          attrs: {
            block: "",
            color: "success"
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.getTicket(e)
            }
          }
        },
        [a("v-icon", {
          attrs: {
            size: "12px"
          }
        },
        [t._v("fas fa-search")]), t._v("\r\n                             \r\n                            " + t._s(t.$t("shared.search")) + "\r\n                        ")], 1)], 1), a("v-flex", {
          attrs: {
            xs6: "",
            sm6: "",
            md6: ""
          }
        },
        [a("v-btn", {
          attrs: {
            block: "",
            color: "error"
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.resetDate(e)
            }
          }
        },
        [a("v-icon", {
          attrs: {
            size: "12px"
          }
        },
        [t._v("fas fa-undo")]), t._v("\r\n                             \r\n                            " + t._s(t.$t("shared.reset")) + "\r\n                        ")], 1)], 1)], 1), a("TicketDialog", {
          attrs: {
            dialog: t.showDialog,
            detail: t.dialogDetail
          },
          on: {
            "close-dialog": t.closeDialog
          }
        })], 1), a("v-divider"), null != t.rows ? a("v-data-table", {
          staticClass: "elevation-1 mt-2",
          attrs: {
            headers: t.headers,
            items: t.rows,
            pagination: t.pagination,
            "total-items": t.pagination.totalItems,
            "rows-per-page-items": t.rowsPerPageItems,
            "rows-per-page-text": t.rowsPerPageItemsText,
            loading: t.isLoading
          },
          on: {
            "update:pagination": function(e) {
              t.pagination = e
            }
          },
          scopedSlots: t._u([{
            key: "items",
            fn: function(e) {
              return [a("tr", {
                on: {
                  click: function(a) {
                    return t.showTicketDetail([e.item])
                  }
                }
              },
              [a("td", {
                staticClass: "text-xs-center",
                domProps: {
                  innerHTML: t._s(t.formatDate(e.item.created_at))
                }
              }), a("td", {
                staticClass: "text-xs-right"
              },
              [t._v(t._s(e.item.amount))]), a("td", {
                staticClass: "text-xs-center",
                domProps: {
                  innerHTML: t._s(t.getStatusText(e.item.status))
                }
              }), a("td", {
                staticClass: "text-xs-center"
              },
              [a("v-btn", {
                attrs: {
                  small: "",
                  outline: ""
                }
              },
              [1 === e.item.ticket_type_id ? a("span", [t._v(t._s(t.$t("history.deposit")))]) : t._e(), 5 === e.item.ticket_type_id ? a("span", [t._v(t._s(t.$t("history.bonus")))]) : t._e(), 6 === e.item.ticket_type_id ? a("span", [t._v(t._s(t.$t("history.token")))]) : t._e()])], 1)])]
            }
          }], null, !1, 3756312056)
        },
        [a("v-progress-linear", {
          attrs: {
            color: "blue",
            indeterminate: !0
          },
          scopedSlots: t._u([{
            key: "progress",
            fn: function() {},
            proxy: !0
          }], null, !1, 63074868)
        })], 1) : t._e()], 1)], 1)], 1)
      },
      Ua = [],
      Oa = a("c1df"),
      Wa = a.n(Oa),
      Ha = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return 0 !== Object.keys(t.detailData).length && t.detailData.constructor !== Object ? a("v-dialog", {
          staticClass: "semi-transparent-5-bg",
          attrs: {
            "max-width": "300"
          },
          model: {
            value: t.showDialog,
            callback: function(e) {
              t.showDialog = e
            },
            expression: "showDialog"
          }
        },
        [a("v-card", {
          staticClass: "semi-transparent-7-bg"
        },
        [a("v-list", {
          staticClass: "semi-transparent-7-bg"
        },
        [a("v-list-tile", [a("v-list-tile-avatar", [a("v-icon", {
          staticClass: "lighten-1 white--text"
        },
        [t._v("fas fa-ticket-alt")])], 1), a("v-list-tile-content", [a("v-list-tile-sub-title", [t._v(" " + t._s(t.$t("reusable.ticket_id")) + " ")]), a("v-list-tile-title", [t._v(t._s(t.detailData[0].id))])], 1)], 1), a("v-divider", {
          attrs: {
            ":inset": !0
          }
        }), a("v-list-tile", [a("v-list-tile-avatar", [a("v-icon", {
          staticClass: "lighten-1 white--text"
        },
        [t._v("far fa-list-alt")])], 1), a("v-list-tile-content", [a("v-list-tile-sub-title", [t._v(" " + t._s(t.$t("reusable.type")) + " ")]), a("v-list-tile-title", [t._v(t._s(t.getTicketTypeText(t.detailData[0].ticket_type_id)))])], 1)], 1), a("v-divider", {
          attrs: {
            inset: !0
          }
        }), a("v-list-tile", [a("v-list-tile-avatar", [a("v-icon", {
          staticClass: "lighten-1 white--text",
          attrs: {
            xs: ""
          }
        },
        [t._v("fas fa-dice")])], 1), a("v-list-tile-content", [a("v-list-tile-sub-title", [t._v(t._s(t.$t("reusable.product")))]), 1 == t.detailData[0].ticket_type_id || 3 == t.detailData[0].ticket_type_id || 5 == t.detailData[0].ticket_type_id ? a("v-list-tile-title", [t._v(t._s(t.detailData[0].product_to.name))]) : t._e(), 2 == t.detailData[0].ticket_type_id || 4 == t.detailData[0].ticket_type_id ? a("v-list-tile-title", [t._v(t._s(t.detailData[0].product_from.name))]) : t._e()], 1)], 1), a("v-divider", {
          attrs: {
            inset: !0
          }
        }), a("v-list-tile", [a("v-list-tile-avatar", [a("v-icon", {
          staticClass: "lighten-1 white--text",
          attrs: {
            xs: ""
          }
        },
        [t._v("fas fa-dollar-sign")])], 1), a("v-list-tile-content", [a("v-list-tile-sub-title", [t._v(" " + t._s(t.$t("history.amount")))]), a("v-list-tile-title", [t._v(t._s(t.detailData[0].amount))])], 1)], 1), 1 == t.detailData[0].ticket_type_id || 2 == t.detailData[0].ticket_type_id ? a("v-divider", {
          attrs: {
            inset: !0
          }
        }) : t._e(), 1 == t.detailData[0].ticket_type_id || 2 == t.detailData[0].ticket_type_id ? a("v-list-tile", [a("v-list-tile-avatar", [a("v-icon", {
          staticClass: "lighten-1 white--text",
          attrs: {
            xs: ""
          }
        },
        [t._v("fas fa-university")])], 1), a("v-list-tile-content", [a("v-list-tile-sub-title", [t._v(" " + t._s(t.$t("reusable.bank")) + " ")]), 1 == t.detailData[0].ticket_type_id ? a("v-list-tile-title", [t._v(t._s(t.detailData[0].bank_acc.code) + " " + t._s(t.detailData[0].bank_acc.acc_no))]) : t._e(), 2 == t.detailData[0].ticket_type_id ? a("v-list-tile-title", [t._v(t._s(t.detailData[0].member_bank_acc.bank_acc_name) + " " + t._s(t.detailData[0].member_bank_acc.bank_acc_no))]) : t._e()], 1)], 1) : t._e(), a("v-divider", {
          attrs: {
            inset: !0
          }
        }), a("v-list-tile", [a("v-list-tile-avatar", [a("v-icon", {
          staticClass: "lighten-1 white--text",
          attrs: {
            xs: ""
          }
        },
        [t._v("fas fa-calendar")])], 1), a("v-list-tile-content", [a("v-list-tile-sub-title", [t._v(" " + t._s(t.$t("reusable.created")) + " ")]), a("v-list-tile-title", [t._v(t._s(t.detailData[0].created_at))])], 1)], 1), a("v-divider", {
          attrs: {
            inset: !0
          }
        }), a("v-list-tile", [a("v-list-tile-avatar", [a("v-icon", {
          staticClass: "lighten-1 white--text",
          attrs: {
            xs: ""
          }
        },
        [t._v("fas fa-clipboard-check")])], 1), a("v-list-tile-content", [a("v-list-tile-sub-title", [t._v(" " + t._s(t.$t("history.status")) + " ")]), a("v-list-tile-title", {
          domProps: {
            innerHTML: t._s(t.getStatusText(t.detailData[0].status))
          }
        })], 1)], 1), a("v-divider", {
          attrs: {
            inset: !0
          }
        }), a("v-list-tile", [a("v-list-tile-avatar", [a("v-icon", {
          staticClass: "lighten-1 white--text",
          attrs: {
            xs: ""
          }
        },
        [t._v("far fa-comment-dots")])], 1), a("v-list-tile-content", [a("v-list-tile-sub-title", [t._v(" " + t._s(t.$t("reusable.remark")) + " ")]), a("v-list-tile-title", [t._v(t._s(t.detailData[0].remark))])], 1)], 1)], 1), a("v-divider"), a("v-card-actions", {
          staticClass: "semi-transparent-7-bg"
        },
        [a("v-btn", {
          attrs: {
            color: "green",
            flat: "flat"
          },
          on: {
            click: function(e) {
              t.showDialog = !1
            }
          }
        },
        [t._v(" " + t._s(t.$t("reusable.close")) + " ")]), a("v-spacer")], 1)], 1)], 1) : t._e()
      },
      Za = [],
      Ya = {
        props: ["dialog", "detail"],
        data: function() {
          return {
            showDialog: this.dialog,
            detailData: this.detail
          }
        },
        methods: {
          getStatusText: function(t) {
            var e = t;
            return "Approved" == t ? (t = this.$t("history.approved"), e = '<strong class="text-success">' + t + "</strong>") : "Reject" == t ? (t = this.$t("history.reject"), e = '<strong class="text-danger">' + t + "</strong>") : "New" == t ? e = this.$t("history.new") : "Verified" == t ? e = this.$t("history.verified") : "Processing" == t && (e = this.$t("history.processing")),
            e
          },
          getTicketTypeText: function(t) {
            switch (t) {
            case 1:
              return "Deposit";
            case 2:
              return "Withdraw";
            case 3:
              return "Transfer In";
            case 4:
              return "Transfer Out";
            case 5:
              return "Bonus";
            default:
              return t
            }
          }
        },
        watch: {
          dialog: function(t) {
            return this.showDialog = t
          },
          detail: function(t) {
            return this.detailData = t
          },
          showDialog: function(t) {
            0 == t && this.$emit("close-dialog")
          }
        }
      },
      qa = Ya,
      Ja = (a("7395"), Object(m["a"])(qa, Ha, Za, !1, null, "b475000a", null)),
      Qa = Ja.exports;
      f()(Ja, {
        VBtn: g["a"],
        VCard: et["a"],
        VCardActions: Dt["a"],
        VDialog: re["a"],
        VDivider: oe["a"],
        VIcon: h["a"],
        VList: ge["a"],
        VListTile: Qt["a"],
        VListTileAvatar: he["a"],
        VListTileContent: Kt["a"],
        VListTileSubTitle: Kt["b"],
        VListTileTitle: Kt["c"],
        VSpacer: le["a"]
      });
      var Xa = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("div", [a("v-tabs", {
          staticClass: "history-tab",
          attrs: {
            "fixed-tabs": ""
          },
          model: {
            value: t.tabData,
            callback: function(e) {
              t.tabData = e
            },
            expression: "tabData"
          }
        },
        t._l(t.buttons,
        function(e) {
          return a("v-tab", {
            key: e.name,
            attrs: {
              ripple: ""
            },
            on: {
              click: function(a) {
                return a.preventDefault(),
                t.$router.push({
                  name: e.route
                })
              }
            }
          },
          [a("v-icon", {
            staticClass: "transaction-icon",
            attrs: {
              size: "12px"
            }
          },
          [t._v(t._s(e.icon))]), t._v("\n             \n            " + t._s(t.$t(e.name)) + "\n        ")], 1)
        }), 1)], 1)
      },
      Ka = [],
      ts = {
        name: "HistoryTab",
        props: ["currentTab"],
        data: function() {
          return {
            tab: 0,
            buttons: [{
              name: "history.deposit_record",
              route: "History / Deposit",
              icon: "fas fa-wallet"
            },
            {
              name: "history.withdraw_record",
              route: "History / Withdraw",
              icon: "fas fa-money-bill-wave"
            },
            {
              name: "history.transfer_record",
              route: "History / Transfer",
              icon: "fas fa-random"
            }]
          }
        },
        computed: {
          tabData: function() {
            switch (this.currentTab) {
            case "deposit":
              this.tab = 0;
              break;
            case "withdraw":
              this.tab = 1;
              break;
            case "transfer":
              this.tab = 2;
              break
            }
            return this.tab
          }
        }
      },
      es = ts,
      as = (a("1448"), a("71a3")),
      ss = a("fe57"),
      ns = Object(m["a"])(es, Xa, Ka, !1, null, null, null),
      is = ns.exports;
      f()(ns, {
        VIcon: h["a"],
        VTab: as["a"],
        VTabs: ss["a"]
      });
      var rs = {
        name: "DepositTicket",
        data: function() {
          return {
            tickets: [],
            pagination: {
              rowsPerPage: 10,
              totalItems: 0,
              page: 1
            },
            showDialog: !1,
            dialogDetail: {},
            rowsPerPageItems: [10],
            rowsPerPageItemsText: "10",
            isLoading: !1,
            fromDate: "",
            toDate: "",
            currentTab: "deposit",
            rows: []
          }
        },
        components: {
          TicketDialog: Qa,
          HistoryTab: is
        },
        computed: {
          headers: function() {
            return [{
              text: this.$t("history.date"),
              align: "center",
              sortable: !1,
              value: "created_at"
            },
            {
              text: this.$t("history.amount"),
              align: "center",
              sortable: !1,
              value: "amount"
            },
            {
              text: this.$t("history.status"),
              align: "center",
              sortable: !1,
              value: "status"
            },
            {
              text: this.$t("history.detail"),
              align: "center",
              sortable: !1,
              value: "detail"
            }]
          }
        },
        methods: {
          getTicket: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e, a;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  return this.isLoading = !0,
                  e = {
                    access_token: this.$store.getters.user_token,
                    size: this.pagination.rowsPerPage,
                    type: "deposit",
                    page: this.pagination.page
                  },
                  this.toDate && (e.dateTo = this.toDate + " 23:59:59"),
                  this.fromDate && (e.dateFrom = this.fromDate + " 00:00:00"),
                  t.next = 6,
                  V.getTicketHistory(e);
                case 6:
                  a = t.sent,
                  a && "success" in a && !0 === a.success ? (this.rows = a.data.data, this.pagination.rowsPerPage = a.data.per_page, this.pagination.totalItems = a.data.total) : "token invalid" == a.message && (this.$store.dispatch("logout", a.data), this.$router.push({
                    name: "login"
                  })),
                  this.isLoading = !1;
                case 9:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } (),
          resetDate: function() {
            this.toDate = "",
            this.fromDate = ""
          },
          formatDate: function(t) {
            var e = Wa()(t).format("DD/MM/YY<br/>hh:mmA");
            return e
          },
          getStatusText: function(t) {
            var e = t;
            return "Approved" == t ? (t = this.$t("history.approved"), e = '<strong class="text-success">' + t + "</strong>") : "Reject" == t ? (t = this.$t("history.reject"), e = '<strong class="text-danger">' + t + "</strong>") : "New" == t ? e = this.$t("history.new") : "Verified" == t ? e = this.$t("history.verified") : "Processing" == t && (e = this.$t("history.processing")),
            e
          },
          showTicketDetail: function(t) {
            this.showDialog = !0,
            this.dialogDetail = t
          },
          closeDialog: function() {
            this.showDialog = !1
          }
        },
        watch: {
          pagination: {
            handler: function() {
              var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function(t) {
                  while (1) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2,
                    this.getTicket();
                  case 2:
                  case "end":
                    return t.stop()
                  }
                },
                t, this)
              }));
              function e() {
                return t.apply(this, arguments)
              }
              return e
            } (),
            deep: !0
          }
        },
        mounted: function() {
          var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
            return regeneratorRuntime.wrap(function(t) {
              while (1) switch (t.prev = t.next) {
              case 0:
                return t.next = 2,
                this.getTicket();
              case 2:
              case "end":
                return t.stop()
              }
            },
            t, this)
          }));
          function e() {
            return t.apply(this, arguments)
          }
          return e
        } ()
      },
      os = rs,
      ls = a("8fea"),
      cs = a("2e4b"),
      us = a("e449"),
      ds = Object(m["a"])(os, Ea, Ua, !1, null, null, null),
      ms = ds.exports;
      f()(ds, {
        VBtn: g["a"],
        VContainer: at["a"],
        VDataTable: ls["a"],
        VDatePicker: cs["a"],
        VDivider: oe["a"],
        VFlex: st["a"],
        VIcon: h["a"],
        VLayout: Tt["a"],
        VMenu: us["a"],
        VProgressLinear: it["a"],
        VTextField: rt["a"]
      });
      var ps = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("div", [a("v-flex", {
          attrs: {
            xs12: "",
            sm10: "",
            "offset-sm1": "",
            md8: "",
            "offset-md2": "",
            lg6: "",
            "offset-lg3": ""
          }
        },
        [a("v-container", {
          attrs: {
            "text-xs-center": ""
          }
        },
        [a("HistoryTab", {
          attrs: {
            currentTab: t.currentTab
          }
        }), a("v-container", {
          attrs: {
            "grid-list-md": ""
          }
        },
        [a("v-layout", {
          attrs: {
            row: "",
            wrap: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs6: "",
            sm6: "",
            md6: ""
          }
        },
        [a("v-menu", {
          attrs: {
            "close-on-content-click": !1,
            "nudge-right": 40,
            lazy: "",
            transition: "scale-transition",
            "offset-y": "",
            "full-width": "",
            "min-width": "290px"
          },
          scopedSlots: t._u([{
            key: "activator",
            fn: function(e) {
              var s = e.on;
              return [a("v-text-field", t._g({
                attrs: {
                  label: t.$t("history.date_from"),
                  "prepend-icon": "event",
                  readonly: ""
                },
                model: {
                  value: t.fromDate,
                  callback: function(e) {
                    t.fromDate = e
                  },
                  expression: "fromDate"
                }
              },
              s))]
            }
          }])
        },
        [a("v-date-picker", {
          model: {
            value: t.fromDate,
            callback: function(e) {
              t.fromDate = e
            },
            expression: "fromDate"
          }
        })], 1)], 1), a("v-flex", {
          attrs: {
            xs6: "",
            lg6: ""
          }
        },
        [a("v-menu", {
          attrs: {
            "close-on-content-click": !1,
            "nudge-right": 40,
            lazy: "",
            transition: "scale-transition",
            "offset-y": "",
            "full-width": "",
            "min-width": "290px"
          },
          scopedSlots: t._u([{
            key: "activator",
            fn: function(e) {
              var s = e.on;
              return [a("v-text-field", t._g({
                attrs: {
                  label: t.$t("history.date_to"),
                  "prepend-icon": "event",
                  readonly: ""
                },
                model: {
                  value: t.toDate,
                  callback: function(e) {
                    t.toDate = e
                  },
                  expression: "toDate"
                }
              },
              s))]
            }
          }])
        },
        [a("v-date-picker", {
          model: {
            value: t.toDate,
            callback: function(e) {
              t.toDate = e
            },
            expression: "toDate"
          }
        })], 1)], 1)], 1), a("v-layout", {
          attrs: {
            row: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs6: "",
            sm6: "",
            md6: ""
          }
        },
        [a("v-btn", {
          attrs: {
            block: "",
            color: "success"
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.getTicket(e)
            }
          }
        },
        [a("v-icon", {
          attrs: {
            size: "12px"
          }
        },
        [t._v("fas fa-search")]), t._v("\r\n                             \r\n                            " + t._s(t.$t("shared.search")) + "\r\n                        ")], 1)], 1), a("v-flex", {
          attrs: {
            xs6: "",
            sm6: "",
            md6: ""
          }
        },
        [a("v-btn", {
          attrs: {
            block: "",
            color: "error"
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.resetDate(e)
            }
          }
        },
        [a("v-icon", {
          attrs: {
            size: "12px"
          }
        },
        [t._v("fas fa-undo")]), t._v("\r\n                             \r\n                            " + t._s(t.$t("shared.reset")) + "\r\n                        ")], 1)], 1)], 1), a("TicketDialog", {
          attrs: {
            dialog: t.showDialog,
            detail: t.dialogDetail
          },
          on: {
            "close-dialog": t.closeDialog
          }
        })], 1), a("v-divider"), null != t.rows ? a("v-data-table", {
          staticClass: "elevation-1 mt-2",
          attrs: {
            headers: t.headers,
            items: t.rows,
            pagination: t.pagination,
            "total-items": t.pagination.totalItems,
            "rows-per-page-items": t.rowsPerPageItems,
            "rows-per-page-text": t.rowsPerPageItemsText,
            loading: t.isLoading
          },
          on: {
            "update:pagination": function(e) {
              t.pagination = e
            }
          },
          scopedSlots: t._u([{
            key: "items",
            fn: function(e) {
              return [a("tr", {
                on: {
                  click: function(a) {
                    return t.showTicketDetail([e.item])
                  }
                }
              },
              [a("td", {
                staticClass: "text-xs-center",
                domProps: {
                  innerHTML: t._s(t.formatDate(e.item.created_at))
                }
              }), a("td", {
                staticClass: "text-xs-right"
              },
              [t._v(t._s(e.item.amount))]), a("td", {
                staticClass: "text-xs-center",
                domProps: {
                  innerHTML: t._s(t.getStatusText(e.item.status))
                }
              }), a("td", {
                staticClass: "text-xs-center"
              },
              [a("v-btn", {
                attrs: {
                  small: "",
                  outline: ""
                }
              },
              [a("span", [t._v(t._s(t.$t("history.withdraw")))])])], 1)])]
            }
          }], null, !1, 1121900686)
        },
        [a("v-progress-linear", {
          attrs: {
            color: "blue",
            indeterminate: !0
          },
          scopedSlots: t._u([{
            key: "progress",
            fn: function() {},
            proxy: !0
          }], null, !1, 63074868)
        })], 1) : t._e()], 1)], 1)], 1)
      },
      fs = [],
      gs = {
        name: "WithdrawTicket",
        data: function() {
          return {
            tickets: [],
            pagination: {
              rowsPerPage: 10,
              totalItems: 0,
              page: 1
            },
            showDialog: !1,
            dialogDetail: {},
            rowsPerPageItems: [10],
            rowsPerPageItemsText: "10",
            isLoading: !1,
            fromDate: "",
            toDate: "",
            currentTab: "withdraw",
            headers: [{
              text: this.$t("history.date"),
              align: "center",
              sortable: !1,
              value: "created_at"
            },
            {
              text: this.$t("history.amount"),
              align: "center",
              sortable: !1,
              value: "amount"
            },
            {
              text: this.$t("history.status"),
              align: "center",
              sortable: !1,
              value: "status"
            },
            {
              text: this.$t("history.detail"),
              align: "center",
              sortable: !1,
              value: "detail"
            }],
            rows: []
          }
        },
        components: {
          TicketDialog: Qa,
          HistoryTab: is
        },
        methods: {
          getTicket: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e, a;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  return this.isLoading = !0,
                  e = {
                    access_token: this.$store.getters.user_token,
                    size: this.pagination.rowsPerPage,
                    type: "withdraw",
                    page: this.pagination.page
                  },
                  this.toDate && (e.dateTo = this.toDate + " 23:59:59"),
                  this.fromDate && (e.dateFrom = this.fromDate + " 00:00:00"),
                  t.next = 6,
                  V.getTicketHistory(e);
                case 6:
                  a = t.sent,
                  a && "success" in a && !0 === a.success ? (this.rows = a.data.data, this.pagination.rowsPerPage = a.data.per_page, this.pagination.totalItems = a.data.total) : "token invalid" == a.message && (this.$store.dispatch("logout", a.data), this.$router.push({
                    name: "login"
                  })),
                  this.isLoading = !1;
                case 9:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } (),
          resetDate: function() {
            this.toDate = "",
            this.fromDate = ""
          },
          formatDate: function(t) {
            var e = Wa()(t).format("DD/MM/YY<br/>hh:mmA");
            return e
          },
          getStatusText: function(t) {
            var e = t;
            return "Approved" == t ? (t = this.$t("history.approved"), e = '<strong class="text-success">' + t + "</strong>") : "Reject" == t ? (t = this.$t("history.reject"), e = '<strong class="text-danger">' + t + "</strong>") : "New" == t ? e = this.$t("history.new") : "Verified" == t ? e = this.$t("history.verified") : "Processing" == t && (e = this.$t("history.processing")),
            e
          },
          showTicketDetail: function(t) {
            this.showDialog = !0,
            this.dialogDetail = t
          },
          closeDialog: function() {
            this.showDialog = !1
          }
        },
        watch: {
          pagination: {
            handler: function() {
              var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function(t) {
                  while (1) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2,
                    this.getTicket();
                  case 2:
                  case "end":
                    return t.stop()
                  }
                },
                t, this)
              }));
              function e() {
                return t.apply(this, arguments)
              }
              return e
            } (),
            deep: !0
          }
        },
        mounted: function() {
          var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
            return regeneratorRuntime.wrap(function(t) {
              while (1) switch (t.prev = t.next) {
              case 0:
                return t.next = 2,
                this.getTicket();
              case 2:
              case "end":
                return t.stop()
              }
            },
            t, this)
          }));
          function e() {
            return t.apply(this, arguments)
          }
          return e
        } ()
      },
      hs = gs,
      vs = Object(m["a"])(hs, ps, fs, !1, null, null, null),
      _s = vs.exports;
      f()(vs, {
        VBtn: g["a"],
        VContainer: at["a"],
        VDataTable: ls["a"],
        VDatePicker: cs["a"],
        VDivider: oe["a"],
        VFlex: st["a"],
        VIcon: h["a"],
        VLayout: Tt["a"],
        VMenu: us["a"],
        VProgressLinear: it["a"],
        VTextField: rt["a"]
      });
      var bs = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("div", [a("v-flex", {
          attrs: {
            xs12: "",
            sm10: "",
            "offset-sm1": "",
            md8: "",
            "offset-md2": "",
            lg6: "",
            "offset-lg3": ""
          }
        },
        [a("v-container", {
          attrs: {
            "text-xs-center": ""
          }
        },
        [a("HistoryTab", {
          attrs: {
            currentTab: t.currentTab
          }
        }), a("v-container", {
          attrs: {
            "grid-list-md": ""
          }
        },
        [a("v-layout", {
          attrs: {
            row: "",
            wrap: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs6: "",
            sm6: "",
            md6: ""
          }
        },
        [a("v-menu", {
          attrs: {
            "close-on-content-click": !1,
            "nudge-right": 40,
            lazy: "",
            transition: "scale-transition",
            "offset-y": "",
            "full-width": "",
            "min-width": "290px"
          },
          scopedSlots: t._u([{
            key: "activator",
            fn: function(e) {
              var s = e.on;
              return [a("v-text-field", t._g({
                attrs: {
                  label: t.$t("history.date_from"),
                  "prepend-icon": "event",
                  readonly: ""
                },
                model: {
                  value: t.fromDate,
                  callback: function(e) {
                    t.fromDate = e
                  },
                  expression: "fromDate"
                }
              },
              s))]
            }
          }])
        },
        [a("v-date-picker", {
          model: {
            value: t.fromDate,
            callback: function(e) {
              t.fromDate = e
            },
            expression: "fromDate"
          }
        })], 1)], 1), a("v-flex", {
          attrs: {
            xs6: "",
            lg6: ""
          }
        },
        [a("v-menu", {
          attrs: {
            "close-on-content-click": !1,
            "nudge-right": 40,
            lazy: "",
            transition: "scale-transition",
            "offset-y": "",
            "full-width": "",
            "min-width": "290px"
          },
          scopedSlots: t._u([{
            key: "activator",
            fn: function(e) {
              var s = e.on;
              return [a("v-text-field", t._g({
                attrs: {
                  label: t.$t("history.date_to"),
                  "prepend-icon": "event",
                  readonly: ""
                },
                model: {
                  value: t.toDate,
                  callback: function(e) {
                    t.toDate = e
                  },
                  expression: "toDate"
                }
              },
              s))]
            }
          }])
        },
        [a("v-date-picker", {
          model: {
            value: t.toDate,
            callback: function(e) {
              t.toDate = e
            },
            expression: "toDate"
          }
        })], 1)], 1)], 1), a("v-layout", {
          attrs: {
            row: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs6: "",
            sm6: "",
            md6: ""
          }
        },
        [a("v-btn", {
          attrs: {
            block: "",
            color: "success"
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.getTicket(e)
            }
          }
        },
        [a("v-icon", {
          attrs: {
            size: "12px"
          }
        },
        [t._v("fas fa-search")]), t._v("\r\n                             \r\n                            " + t._s(t.$t("shared.search")) + "\r\n                        ")], 1)], 1), a("v-flex", {
          attrs: {
            xs6: "",
            sm6: "",
            md6: ""
          }
        },
        [a("v-btn", {
          attrs: {
            block: "",
            color: "error"
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.resetDate(e)
            }
          }
        },
        [a("v-icon", {
          attrs: {
            size: "12px"
          }
        },
        [t._v("fas fa-undo")]), t._v("\r\n                             \r\n                            " + t._s(t.$t("shared.reset")) + "\r\n                        ")], 1)], 1)], 1), a("TicketDialog", {
          attrs: {
            dialog: t.showDialog,
            detail: t.dialogDetail
          },
          on: {
            "close-dialog": t.closeDialog
          }
        })], 1), a("v-divider"), null != t.rows ? a("v-data-table", {
          staticClass: "elevation-1 mt-2",
          attrs: {
            headers: t.headers,
            items: t.rows,
            pagination: t.pagination,
            "total-items": t.pagination.totalItems,
            "rows-per-page-items": t.rowsPerPageItems,
            "rows-per-page-text": t.rowsPerPageItemsText,
            loading: t.isLoading
          },
          on: {
            "update:pagination": function(e) {
              t.pagination = e
            }
          },
          scopedSlots: t._u([{
            key: "items",
            fn: function(e) {
              return [a("tr", {
                on: {
                  click: function(a) {
                    return t.showTicketDetail([e.item])
                  }
                }
              },
              [a("td", {
                staticClass: "text-xs-center",
                domProps: {
                  innerHTML: t._s(t.formatDate(e.item.created_at))
                }
              }), a("td", {
                staticClass: "text-xs-right"
              },
              [t._v(t._s(e.item.amount))]), a("td", {
                staticClass: "text-xs-center",
                domProps: {
                  innerHTML: t._s(t.getStatusText(e.item.status))
                }
              }), a("td", {
                staticClass: "text-xs-center"
              },
              [a("v-btn", {
                attrs: {
                  small: "",
                  outline: ""
                }
              },
              [3 === e.item.ticket_type_id ? a("span", [t._v(t._s(t.$t("history.in")))]) : t._e(), 4 === e.item.ticket_type_id ? a("span", [t._v(t._s(t.$t("history.out")))]) : t._e()])], 1)])]
            }
          }], null, !1, 2454300301)
        },
        [a("v-progress-linear", {
          attrs: {
            color: "blue",
            indeterminate: !0
          },
          scopedSlots: t._u([{
            key: "progress",
            fn: function() {},
            proxy: !0
          }], null, !1, 63074868)
        })], 1) : t._e()], 1)], 1)], 1)
      },
      ws = [],
      ks = {
        name: "TransferTicket",
        data: function() {
          return {
            tickets: [],
            pagination: {
              rowsPerPage: 10,
              totalItems: 0,
              page: 1
            },
            showDialog: !1,
            dialogDetail: {},
            rowsPerPageItems: [10],
            rowsPerPageItemsText: "10",
            isLoading: !1,
            fromDate: "",
            toDate: "",
            currentTab: "transfer",
            headers: [{
              text: this.$t("history.date"),
              align: "center",
              sortable: !1,
              value: "created_at"
            },
            {
              text: this.$t("history.amount"),
              align: "center",
              sortable: !1,
              value: "amount"
            },
            {
              text: this.$t("history.status"),
              align: "center",
              sortable: !1,
              value: "status"
            },
            {
              text: this.$t("history.detail"),
              align: "center",
              sortable: !1,
              value: "detail"
            }],
            rows: []
          }
        },
        components: {
          TicketDialog: Qa,
          HistoryTab: is
        },
        methods: {
          getTicket: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e, a;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  return this.isLoading = !0,
                  e = {
                    access_token: this.$store.getters.user_token,
                    size: this.pagination.rowsPerPage,
                    type: "transfer",
                    page: this.pagination.page
                  },
                  this.toDate && (e.dateTo = this.toDate + " 23:59:59"),
                  this.fromDate && (e.dateFrom = this.fromDate + " 00:00:00"),
                  t.next = 6,
                  V.getTicketHistory(e);
                case 6:
                  a = t.sent,
                  a && "success" in a && !0 === a.success ? (this.rows = a.data.data, this.pagination.rowsPerPage = a.data.per_page, this.pagination.totalItems = a.data.total) : "token invalid" == a.message && (this.$store.dispatch("logout", a.data), this.$router.push({
                    name: "login"
                  })),
                  this.isLoading = !1;
                case 9:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } (),
          resetDate: function() {
            this.toDate = "",
            this.fromDate = ""
          },
          formatDate: function(t) {
            var e = Wa()(t).format("DD/MM/YY<br/>hh:mmA");
            return e
          },
          getStatusText: function(t) {
            var e = t;
            return "Approved" == t ? (t = this.$t("history.approved"), e = '<strong class="text-success">' + t + "</strong>") : "Reject" == t ? (t = this.$t("history.reject"), e = '<strong class="text-danger">' + t + "</strong>") : "New" == t ? e = this.$t("history.new") : "Verified" == t ? e = this.$t("history.verified") : "Processing" == t && (e = this.$t("history.processing")),
            e
          },
          showTicketDetail: function(t) {
            this.showDialog = !0,
            this.dialogDetail = t
          },
          closeDialog: function() {
            this.showDialog = !1
          }
        },
        watch: {
          pagination: {
            handler: function() {
              var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function(t) {
                  while (1) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2,
                    this.getTicket();
                  case 2:
                  case "end":
                    return t.stop()
                  }
                },
                t, this)
              }));
              function e() {
                return t.apply(this, arguments)
              }
              return e
            } (),
            deep: !0
          }
        },
        mounted: function() {
          var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
            return regeneratorRuntime.wrap(function(t) {
              while (1) switch (t.prev = t.next) {
              case 0:
                return t.next = 2,
                this.getTicket();
              case 2:
              case "end":
                return t.stop()
              }
            },
            t, this)
          }));
          function e() {
            return t.apply(this, arguments)
          }
          return e
        } ()
      },
      ys = ks,
      xs = Object(m["a"])(ys, bs, ws, !1, null, null, null),
      As = xs.exports;
      f()(xs, {
        VBtn: g["a"],
        VContainer: at["a"],
        VDataTable: ls["a"],
        VDatePicker: cs["a"],
        VDivider: oe["a"],
        VFlex: st["a"],
        VIcon: h["a"],
        VLayout: Tt["a"],
        VMenu: us["a"],
        VProgressLinear: it["a"],
        VTextField: rt["a"]
      });
      var Ds = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("div", [a("v-flex", {
          attrs: {
            xs12: "",
            sm10: "",
            "offset-sm1": "",
            md8: "",
            "offset-md2": "",
            lg6: "",
            "offset-lg3": ""
          }
        },
        ["" !== t.alertType ? a("Alert", {
          attrs: {
            atype: t.alertType,
            message: t.message,
            visibility: t.visibility
          }
        }) : t._e(), t.progressbar ? a("v-progress-linear", {
          attrs: {
            indeterminate: !0
          }
        }) : t._e(), t._l(t.promotions,
        function(e, s) {
          return a("v-card", {
            key: s,
            staticClass: "m-3 semi-transparent-5-bg rounded-border"
          },
          [a("v-img", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: e.promotion_details[t.lang].url,
              expression: "promotion.promotion_details[lang].url"
            }],
            staticClass: "effect",
            attrs: {
              src: e.promotion_details[t.lang].url,
              contain: ""
            },
            on: {
              click: function(a) {
                return t.openDialog(e)
              }
            }
          })], 1)
        }), a("Dialog", {
          attrs: {
            dialog: t.dialog,
            promotion: t.selectedItem
          },
          on: {
            DialogChanged: function(e) {
              t.dialog = e.value
            }
          }
        })], 2)], 1)
      },
      Cs = [],
      Ts = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("div", {
          staticClass: "text-xs-center",
          attrs: {
            id: "dialog-width"
          }
        },
        [a("v-dialog", {
          attrs: {
            "content-class": "promotion-dialog",
            scrollable: ""
          },
          on: {
            input: t.handler
          },
          model: {
            value: t.showDialog,
            callback: function(e) {
              t.showDialog = e
            },
            expression: "showDialog"
          }
        },
        [a("v-card", [a("v-img", {
          attrs: {
            src: t.promotionDetail.url,
            alt: t.promotionDetail.name,
            contain: ""
          }
        }), a("i", {
          staticClass: "far fa-times-circle close-icon",
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.update(!0)
            }
          }
        }), a("v-card-text", {
          staticStyle: {
            height: "80%"
          },
          domProps: {
            innerHTML: t._s(t.promotionDetail.description)
          }
        })], 1)], 1)], 1)
      },
      Ps = [],
      Vs = {
        name: "Dialog-Promotions",
        props: ["dialog", "promotion"],
        data: function() {
          return {
            showDialog: this.dialog,
            downInner: !1,
            skip: !1
          }
        },
        computed: {
          promotionDetail: function() {
            return this.promotion
          }
        },
        watch: {
          dialog: function(t) {
            return this.showDialog = t
          },
          showDialog: function(t) {
            return this.skip ? (this.downInner = !0, this.skip = !1) : this.downInner = !1
          }
        },
        methods: {
          handler: function() { ! 1 === this.downInner && this.update()
          },
          update: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e, a = arguments;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  e = a.length > 0 && void 0 !== a[0] && a[0],
                  this.skip = e,
                  this.showDialog = !this.showDialog,
                  this.$emit("DialogChanged", this.showDialog);
                case 4:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } ()
        }
      },
      js = Vs,
      Ss = (a("4848"), a("779c"), Object(m["a"])(js, Ts, Ps, !1, null, "f36e9286", null)),
      Is = Ss.exports;
      f()(Ss, {
        VCard: et["a"],
        VCardText: Dt["b"],
        VDialog: re["a"],
        VImg: $e["a"]
      });
      var Rs = {
        name: "Promotion",
        data: function() {
          return {
            alertType: "",
            message: "",
            visibility: !1,
            progressbar: !1,
            promotions: [],
            lang: "en",
            selectedItem: {
              name: "",
              url: "",
              description: ""
            },
            dialog: !1
          }
        },
        components: {
          Alert: H,
          Dialog: Is
        },
        created: function() {
          this.getPromotions()
        },
        methods: {
          getPromotions: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e, a;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  return this.progressbar = !0,
                  t.next = 3,
                  V.getPromotions();
                case 3:
                  e = t.sent,
                  this.progressbar = !1,
                  a = this,
                  e && "success" in e && !0 === e.success ? this.promotions = e.data.map(function(t) {
                    return t.promotion_details && (t.promotion_details = a.arrayToObject(t.promotion_details, "language")),
                    t.token_promotion_details && (t.promotion_details = a.arrayToObject(t.token_promotion_details, "language")),
                    t
                  }) : (this.visibility = !0, this.message = e.message, this.alertType = "error");
                case 7:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } (),
          arrayToObject: function(t, e) {
            return t.reduce(function(t, a) {
              return t[a[e]] = a,
              t
            },
            {})
          },
          openDialog: function(t) {
            this.dialog = !this.dialog,
            this.selectedItem.name = t.name,
            this.selectedItem.url = t.promotion_details[this.lang].url,
            this.selectedItem.description = t.promotion_details[this.lang].description
          }
        }
      },
      Ls = Rs,
      $s = (a("02f7"), Object(m["a"])(Ls, Ds, Cs, !1, null, "4962ee90", null)),
      zs = $s.exports;
      f()($s, {
        VCard: et["a"],
        VFlex: st["a"],
        VImg: $e["a"],
        VProgressLinear: it["a"]
      });
      var Ms = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("div", [a("RComponent", {
          attrs: {
            title: "Affiliate",
            Withdraw: !0,
            buttons: t.buttons
          }
        })], 1)
      },
      Fs = [],
      Ns = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("div", [a("v-flex", {
          attrs: {
            xs12: "",
            sm10: "",
            "offset-sm1": "",
            md6: "",
            "offset-md3": "",
            "mt-3": ""
          }
        },
        [a("v-container", {
          attrs: {
            "text-xs-center": ""
          }
        },
        [a("v-btn-toggle", {
          model: {
            value: t.currentTab,
            callback: function(e) {
              t.currentTab = e
            },
            expression: "currentTab"
          }
        },
        [a("v-btn", {
          attrs: {
            flat: "",
            value: "deposit"
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.$router.push({
                name: "History / Deposit"
              })
            }
          }
        },
        [a("v-icon", {
          staticClass: "transaction-icon",
          attrs: {
            xs: ""
          }
        },
        [t._v("fas fa-wallet")]), t._v("\r\n                    Deposit\r\n                ")], 1), a("v-btn", {
          attrs: {
            flat: "",
            value: "withdraw"
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.$router.push({
                name: "History / Withdraw"
              })
            }
          }
        },
        [a("v-icon", {
          staticClass: "transaction-icon",
          attrs: {
            xs: ""
          }
        },
        [t._v("fas fa-money-bill-wave")]), t._v("\r\n                    Withdraw\r\n                ")], 1), a("v-btn", {
          attrs: {
            flat: "",
            value: "transfer"
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.$router.push({
                name: "History / Transfer"
              })
            }
          }
        },
        [a("v-icon", {
          staticClass: "transaction-icon",
          attrs: {
            xs: ""
          }
        },
        [t._v("fas fa-random")]), t._v("\r\n                    Transfer\r\n                ")], 1)], 1), a("v-container", {
          attrs: {
            "grid-list-md": ""
          }
        },
        [a("v-layout", {
          attrs: {
            row: "",
            wrap: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs6: "",
            sm6: "",
            md6: ""
          }
        },
        [a("v-menu", {
          attrs: {
            "close-on-content-click": !1,
            "nudge-right": 40,
            lazy: "",
            transition: "scale-transition",
            "offset-y": "",
            "full-width": "",
            "min-width": "290px"
          },
          scopedSlots: t._u([{
            key: "activator",
            fn: function(e) {
              var s = e.on;
              return [a("v-text-field", t._g({
                attrs: {
                  label: "From",
                  "prepend-icon": "event",
                  readonly: ""
                },
                model: {
                  value: t.fromDate,
                  callback: function(e) {
                    t.fromDate = e
                  },
                  expression: "fromDate"
                }
              },
              s))]
            }
          }]),
          model: {
            value: t.fromMenu,
            callback: function(e) {
              t.fromMenu = e
            },
            expression: "fromMenu"
          }
        },
        [a("v-date-picker", {
          on: {
            input: function(e) {
              t.fromMenu = !1
            }
          },
          model: {
            value: t.fromDate,
            callback: function(e) {
              t.fromDate = e
            },
            expression: "fromDate"
          }
        })], 1)], 1), a("v-flex", {
          attrs: {
            xs6: "",
            lg6: ""
          }
        },
        [a("v-menu", {
          attrs: {
            "close-on-content-click": !1,
            "nudge-right": 40,
            lazy: "",
            transition: "scale-transition",
            "offset-y": "",
            "full-width": "",
            "min-width": "290px"
          },
          scopedSlots: t._u([{
            key: "activator",
            fn: function(e) {
              var s = e.on;
              return [a("v-text-field", t._g({
                attrs: {
                  label: "To",
                  "prepend-icon": "event",
                  readonly: ""
                },
                model: {
                  value: t.toDate,
                  callback: function(e) {
                    t.toDate = e
                  },
                  expression: "toDate"
                }
              },
              s))]
            }
          }]),
          model: {
            value: t.toMenu,
            callback: function(e) {
              t.toMenu = e
            },
            expression: "toMenu"
          }
        },
        [a("v-date-picker", {
          on: {
            input: function(e) {
              t.toMenu = !1
            }
          },
          model: {
            value: t.toDate,
            callback: function(e) {
              t.toDate = e
            },
            expression: "toDate"
          }
        })], 1)], 1)], 1), a("v-flex", {
          attrs: {
            xs12: "",
            lg: ""
          }
        },
        [a("v-btn", {
          attrs: {
            color: "success"
          },
          on: {
            click: function(e) {
              e.preventDefault(),
              t.desserts = null
            }
          }
        },
        [t._v("\r\n                        Search\r\n                    ")]), a("v-btn", {
          attrs: {
            color: "error"
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.resetdate(e)
            }
          }
        },
        [t._v("\r\n                        Reset\r\n                    ")])], 1)], 1), a("v-divider"), null != t.desserts ? a("v-data-table", {
          staticClass: "elevation-1 mt-2",
          attrs: {
            headers: t.headers,
            items: t.desserts
          },
          scopedSlots: t._u([{
            key: "items",
            fn: function(e) {
              return [a("td", [t._v(t._s(e.item.name))]), a("td", {
                staticClass: "text-xs-right"
              },
              [t._v(t._s(e.item.calories))]), a("td", {
                staticClass: "text-xs-right"
              },
              [t._v(t._s(e.item.fat))]), a("td", {
                staticClass: "text-xs-right"
              },
              [t._v(t._s(e.item.carbs))]), a("td", {
                staticClass: "text-xs-right"
              },
              [t._v(t._s(e.item.protein))]), a("td", {
                staticClass: "text-xs-right"
              },
              [t._v(t._s(e.item.iron))])]
            }
          }], null, !1, 3478900469)
        }) : t._e()], 1)], 1)], 1)
      },
      Gs = [],
      Bs = {
        name: "Affiliate",
        data: function() {
          return {
            selected: "",
            active: !1,
            currentTab: this.tab,
            fromDate: "",
            toDate: "",
            fromMenu: !1,
            toMenu: !1,
            headers: [{
              text: "Dessert (100g serving)",
              align: "left",
              sortable: !1,
              value: "name"
            },
            {
              text: "Calories",
              value: "calories"
            },
            {
              text: "Fat (g)",
              value: "fat"
            },
            {
              text: "Carbs (g)",
              value: "carbs"
            },
            {
              text: "Protein (g)",
              value: "protein"
            },
            {
              text: "Iron (%)",
              value: "iron"
            }],
            desserts: [{
              name: "Frozen Yogurt",
              calories: 159,
              fat: 6,
              carbs: 24,
              protein: 4,
              iron: "1%"
            },
            {
              name: "Ice cream sandwich",
              calories: 237,
              fat: 9,
              carbs: 37,
              protein: 4.3,
              iron: "1%"
            },
            {
              name: "Eclair",
              calories: 262,
              fat: 16,
              carbs: 23,
              protein: 6,
              iron: "7%"
            },
            {
              name: "Cupcake",
              calories: 305,
              fat: 3.7,
              carbs: 67,
              protein: 4.3,
              iron: "8%"
            }]
          }
        },
        props: ["tab", "buttons"],
        methods: {
          resetdate: function() {
            this.toDate = "",
            this.fromDate = "",
            this.desserts = [{
              name: "Frozen Yogurt",
              calories: 159,
              fat: 6,
              carbs: 24,
              protein: 4,
              iron: "1%"
            },
            {
              name: "Ice cream sandwich",
              calories: 237,
              fat: 9,
              carbs: 37,
              protein: 4.3,
              iron: "1%"
            },
            {
              name: "Eclair",
              calories: 262,
              fat: 16,
              carbs: 23,
              protein: 6,
              iron: "7%"
            },
            {
              name: "Cupcake",
              calories: 305,
              fat: 3.7,
              carbs: 67,
              protein: 4.3,
              iron: "8%"
            }]
          }
        }
      },
      Es = Bs,
      Us = (a("8b5f"), a("a609")),
      Os = Object(m["a"])(Es, Ns, Gs, !1, null, "943c6eb8", null),
      Ws = Os.exports;
      f()(Os, {
        VBtn: g["a"],
        VBtnToggle: Us["a"],
        VContainer: at["a"],
        VDataTable: ls["a"],
        VDatePicker: cs["a"],
        VDivider: oe["a"],
        VFlex: st["a"],
        VIcon: h["a"],
        VLayout: Tt["a"],
        VMenu: us["a"],
        VTextField: rt["a"]
      });
      var Hs = {
        name: "Affiliate",
        data: function() {
          return {
            buttons: [{
              title: "Commision Report",
              icon: "format_align_left"
            },
            {
              title: "Withdraw Report",
              icon: "format_align_right"
            }]
          }
        },
        components: {
          RComponent: Ws
        },
        methods: {}
      },
      Zs = Hs,
      Ys = Object(m["a"])(Zs, Ms, Fs, !1, null, null, null),
      qs = Ys.exports,
      Js = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("v-flex", {
          attrs: {
            xs12: "",
            sm10: "",
            "offset-sm1": "",
            md10: "",
            "offset-md1": "",
            lg8: "",
            "offset-lg2": ""
          }
        },
        ["" !== t.alertType ? a("Alert", {
          attrs: {
            atype: t.alertType,
            message: t.message,
            visibility: t.visibility
          }
        }) : t._e(), t.progressbar ? a("v-progress-linear", {
          attrs: {
            indeterminate: !0
          }
        }) : t._e(), a("v-flex", {
          attrs: {
            xs12: ""
          }
        },
        [a("Tags", {
          staticClass: "mt-3 mb-3",
          attrs: {
            products: t.products
          },
          on: {
            navigateTo: t.goToSlide
          }
        }), a("carousel-3d", {
          ref: "productCarousel",
          staticClass: "slider",
          attrs: {
            animationSpeed: "1500",
            count: t.products.length,
            "controls-visible": !0,
            height: t.height,
            width: 600
          },
          on: {
            "after-slide-change": t.onAfterSlideChange
          }
        },
        t._l(t.products,
        function(e, s) {
          return a("slide", {
            key: s,
            style: "height:auto; background:transparent;",
            attrs: {
              index: s
            }
          },
          [a("div", {
            staticClass: "bg-transparent"
          },
          [a("v-card", {
            staticClass: "semi-transparent-7-bg"
          },
          [a("v-card-text", {
            staticClass: "semi-transparent-7-bg"
          },
          [a("ProductCarousel", {
            attrs: {
              product: e
            },
            on: {
              ImageIsLoaded: t.loaded
            }
          }), a("ExpansionPanel", {
            attrs: {
              product: e
            },
            on: {
              show: t.enable
            }
          }), a("DownloadButton", {
            attrs: {
              product: e
            }
          })], 1), a("v-card-actions", {
            staticClass: " game-card-action semi-transparent-7-bg"
          },
          [a("Buttons", {
            attrs: {
              product: e
            }
          })], 1)], 1)], 1)])
        }), 1), a("Snackbar", {
          attrs: {
            color: "green",
            icon: "done_all",
            text: t.$t("shared.copied"),
            show: t.snackbar
          },
          on: {
            "update-snackbar": function(e) {
              t.snackbar = !1
            }
          }
        })], 1)], 1)
      },
      Qs = [],
      Xs = a("3cf7"),
      Ks = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("swiper", {
          staticClass: "swiper",
          staticStyle: {
            margin: "5px"
          },
          attrs: {
            options: t.swiperOption
          }
        },
        t._l(t.productsObject,
        function(e, s) {
          return a("swiper-slide", {
            key: e.id
          },
          [a("span", {
            staticClass: "gradient-border",
            class: {
              active: t.currentActiveProductId == e.id
            },
            on: {
              click: function(a) {
                return t.navigateTo(s, e.id)
              }
            }
          },
          [t._v(t._s(e.name))])])
        }), 1)
      },
      tn = [],
      en = a("7212"),
      an = (a("5f67"), {
        name: "tags",
        data: function() {
          return {
            currentActiveProductId: null,
            swiperOption: {
              slidesPerView: 3,
              spaceBetween: 15,
              direction: "horizontal"
            }
          }
        },
        props: ["products"],
        computed: {
          productsObject: function() {
            return this.products
          }
        },
        components: {
          Swiper: en["Swiper"],
          SwiperSlide: en["SwiperSlide"]
        },
        methods: {
          navigateTo: function(t, e) {
            this.currentActiveProductId = e,
            this.$emit("navigateTo", t)
          }
        }
      }),
      sn = an,
      nn = (a("8c1d"), Object(m["a"])(sn, Ks, tn, !1, null, "e35f79bc", null)),
      rn = nn.exports,
      on = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return t.productsArray ? a("div", [t.productsArray.length > 0 ? a("div", [t.productsArray.length > 0 ? a("carousel", {
          staticStyle: {
            cursor: "grab"
          },
          attrs: {
            perPage: 1,
            autoplay: !0,
            loop: !0,
            speed: 1e3,
            paginationPadding: 3,
            paginationActiveColor: "rgba(255, 255, 255, 0.72)",
            paginationColor: "rgba(255, 255, 255, 0.28)",
            autoplayTimeout: 4e3,
            ease: "true",
            adjustableHeight: !0
          },
          on: {
            "page-change": function(e) {
              return t.vue3DResized()
            }
          }
        },
        t._l(t.productsArray,
        function(t, e) {
          return a("slide", {
            key: e
          },
          ["Image" == t.type ? a("img", {
            directives: [{
              name: "lazy",
              rawName: "v-lazy",
              value: t.url,
              expression: "item.url"
            }],
            attrs: {
              width: "100%",
              height: "auto",
              align: "middle"
            }
          }) : a("video", {
            attrs: {
              width: "100%",
              height: "auto",
              controls: "",
              playsinline: "",
              autoplay: "",
              muted: "",
              loop: ""
            },
            domProps: {
              muted: !0
            }
          },
          [a("source", {
            attrs: {
              src: t.url,
              type: "video/mp4"
            }
          }), a("source", {
            attrs: {
              src: t.url,
              type: "video/webm"
            }
          }), a("source", {
            attrs: {
              src: t.url,
              type: "video/ogg"
            }
          })])])
        }), 1) : t._e()], 1) : a("img", {
          directives: [{
            name: "lazy",
            rawName: "v-lazy",
            value: t.getImgUrl(t.defaultImageUrl),
            expression: "getImgUrl(defaultImageUrl)"
          }],
          attrs: {
            width: "100%",
            height: "auto"
          }
        })]) : t._e()
      },
      ln = [],
      cn = {
        data: function() {
          return {
            defaultImageUrl: "placeholder"
          }
        },
        props: ["product"],
        computed: {
          productsArray: function() {
            var t = this.product,
            e = null;
            return t.product_images && (e = t.product_images.map(function(t) {
              var e = t.url.split(".");
              return "jpg" === e[e.length - 1].toLowerCase() || "png" === e[e.length - 1].toLowerCase() || "gif" === e[e.length - 1].toLowerCase() || "jpeg" === e[e.length - 1].toLowerCase() ? (t.type = "Image", t) : "mp4" === e[e.length - 1].toLowerCase() || "webm" === e[e.length - 1].toLowerCase() || "ogg" === e[e.length - 1].toLowerCase() ? (t.type = "Video", t) : (t.type = "Unkown", t)
            }), e = e.filter(function(t) {
              return "Unkown" != t.type
            })),
            e
          }
        },
        components: {
          Carousel: He["Carousel"],
          Slide: He["Slide"]
        },
        updated: function() {
          this.ImageLoaded()
        },
        methods: {
          getImgUrl: function(t) {
            var e = a("9142");
            return e("./" + t + ".png")
          },
          ImageLoaded: function() {
            this.$emit("ImageIsLoaded")
          },
          vue3DResized: function() {
            this.$emit("ImageIsLoaded")
          }
        }
      },
      un = cn,
      dn = Object(m["a"])(un, on, ln, !1, null, null, null),
      mn = dn.exports,
      pn = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("v-layout", {
          attrs: {
            row: "",
            "align-center": "",
            "justify-center": ""
          }
        },
        [a("v-flex", {
          staticStyle: {
            padding: "10px"
          },
          attrs: {
            xs4: ""
          }
        },
        [a("v-img", {
          staticStyle: {
            float: "right"
          },
          attrs: {
            src: t.getImgUrl("call-center-agent"),
            "lazy-src": t.getImgUrl("call-center-agent"),
            width: "70"
          }
        })], 1), a("v-flex", {
          staticStyle: {
            margin: "10px"
          },
          attrs: {
            xs6: ""
          }
        },
        [t.productDetail.username || t.productDetail.password ? a("div", [a("span", {
          staticClass: "game-expansion-panel-player-title",
          staticStyle: {
            "font-weight": "bolder"
          }
        },
        [t._v(t._s(t.$t("game.player_information")))]), a("br"), a("div", {
          staticStyle: {
            "margin-top": "7px"
          }
        },
        [t._v("\n                    " + t._s(t.productDetail.username ? t.productDetail.username: t.$t("game.pm_message")) + "\n                    "), t.productDetail.username ? a("v-tooltip", {
          attrs: {
            right: ""
          },
          scopedSlots: t._u([{
            key: "activator",
            fn: function(e) {
              var s = e.on;
              return [a("v-icon", t._g({
                staticClass: "ml-2",
                attrs: {
                  size: 13
                },
                on: {
                  click: function(e) {
                    return e.preventDefault(),
                    t.showSnackbar(t.productDetail.username)
                  }
                }
              },
              s), [t._v("file_copy\n                            ")])]
            }
          }], null, !1, 1316250081)
        },
        [a("span", [t._v(t._s(t.$t("shared.copy")))])]) : t._e()], 1), a("div", [t._v("\n                    " + t._s(t.productDetail.password ? t.productDetail.password: t.$t("game.pm_message")) + "\n                    "), t.productDetail.password ? a("v-tooltip", {
          attrs: {
            right: ""
          },
          scopedSlots: t._u([{
            key: "activator",
            fn: function(e) {
              var s = e.on;
              return [a("v-icon", t._g({
                staticClass: "ml-1",
                attrs: {
                  size: 14
                },
                on: {
                  click: function(e) {
                    return e.preventDefault(),
                    t.showSnackbar(t.productDetail.password)
                  }
                }
              },
              s), [t._v("file_copy\n                            ")])]
            }
          }], null, !1, 4171929868)
        },
        [a("span", [t._v(t._s(t.$t("shared.copy")))])]) : t._e()], 1)]) : a("div", [a("span", {
          staticClass: "game-expansion-panel-guest-title",
          staticStyle: {
            "font-weight": "bolder"
          }
        },
        [t._v(t._s(t.$t("game.guest_player_information_title")))]), a("br"), a("span", {
          staticClass: "game-expansion-panel-guest-desc",
          staticStyle: {
            font: "small-caption margin-bottom: 7px"
          }
        },
        [t._v(t._s(t.$t("game.guest_player_information_desc")))]), a("br"), a("div", [a("v-btn", {
          staticStyle: {
            padding: "10px"
          },
          attrs: {
            color: "primary"
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.$router.push({
                name: "Contact"
              })
            }
          }
        },
        [t._v("\n                        " + t._s(t.$t("game.guest_player_information_button")) + "\n                    ")])], 1)])]), a("showDialog", {
          attrs: {
            dialog: t.dialog
          },
          on: {
            DialogChanged: function(e) {
              t.dialog = e.value
            }
          }
        })], 1)
      },
      fn = [],
      gn = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("div", {
          staticClass: "text-xs-center"
        },
        [a("v-dialog", {
          attrs: {
            width: "500"
          },
          model: {
            value: t.showDialog,
            callback: function(e) {
              t.showDialog = e
            },
            expression: "showDialog"
          }
        },
        [a("v-card", [a("v-card-title", {
          staticClass: "headline green",
          attrs: {
            "primary-title": ""
          }
        },
        [a("v-spacer"), a("v-btn", {
          attrs: {
            icon: "",
            dark: "",
            "mt-5": ""
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.update(e)
            }
          }
        },
        [a("v-icon", [t._v("close")])], 1)], 1), a("v-card-text", [a("v-btn", {
          attrs: {
            color: "success"
          }
        },
        [a("v-icon", [t._v("fab fa-android")])], 1), a("v-btn", {
          attrs: {
            color: "error"
          }
        },
        [a("v-icon", [t._v("fab fa-apple")])], 1)], 1), a("v-divider")], 1)], 1)], 1)
      },
      hn = [],
      vn = {
        name: "Dialog-Game",
        props: ["dialog"],
        data: function() {
          return {
            showDialog: this.dialog
          }
        },
        watch: {
          dialog: function(t) {
            return this.showDialog = t
          }
        },
        methods: {
          update: function() {
            this.showDialog,
            this.showDialog,
            this.$emit("DialogChanged", this.showDialog)
          }
        }
      },
      _n = vn,
      bn = Object(m["a"])(_n, gn, hn, !1, null, null, null),
      wn = bn.exports;
      f()(bn, {
        VBtn: g["a"],
        VCard: et["a"],
        VCardText: Dt["b"],
        VCardTitle: Ct["a"],
        VDialog: re["a"],
        VDivider: oe["a"],
        VIcon: h["a"],
        VSpacer: le["a"]
      });
      var kn = {
        name: "Expansion-Pannel",
        props: ["product"],
        data: function() {
          return {
            dialog: !1,
            snackbar: !1
          }
        },
        computed: {
          productDetail: function() {
            return this.product
          }
        },
        components: {
          showDialog: wn
        },
        methods: {
          getImgUrl: function(t) {
            var e = a("9142");
            return e("./" + t + ".png")
          },
          update: function() {
            this.dialog,
            this.dialog
          },
          showSnackbar: function(t) {
            var e = document.createElement("input");
            document.body.appendChild(e),
            e.value = t,
            e.select();
            try {
              var a = document.execCommand("copy");
              this.$emit("show", a)
            } catch(s) {
              alert(this.$t("shared.opp_unable_copy"))
            }
            document.body.removeChild(e)
          }
        }
      },
      yn = kn,
      xn = (a("3808"), a("3a2f")),
      An = Object(m["a"])(yn, pn, fn, !1, null, "2f3de47c", null),
      Dn = An.exports;
      f()(An, {
        VBtn: g["a"],
        VFlex: st["a"],
        VIcon: h["a"],
        VImg: $e["a"],
        VLayout: Tt["a"],
        VTooltip: xn["a"]
      });
      var Cn = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("v-flex", {
          attrs: {
            xs12: ""
          }
        },
        [a("div", {
          staticClass: "action-btn-group",
          staticStyle: {
            width: "100%"
          }
        },
        t._l(t.buttonList,
        function(e, s) {
          return a("v-btn", {
            key: s,
            staticClass: "action-button font-size transparent-bg",
            on: {
              click: function(a) {
                return a.preventDefault(),
                t.$router.push({
                  name: e.route,
                  params: {
                    product: t.productDetail
                  }
                })
              }
            }
          },
          [a("v-layout", {
            attrs: {
              row: "",
              wrap: ""
            }
          },
          [a("v-flex", {
            attrs: {
              xs12: ""
            }
          },
          [a("img", {
            staticStyle: {
              filter: "grayscale(1)",
              width: "50%"
            },
            attrs: {
              src: e.image
            }
          })]), a("v-flex", {
            staticStyle: {
              padding: "10px"
            },
            attrs: {
              xs12: ""
            }
          },
          [a("span", {
            staticClass: "game-action-button-title"
          },
          [t._v(t._s(t.$t("game." + e.label)))])])], 1)], 1)
        }), 1)])
      },
      Tn = [],
      Pn = {
        name: "Button-Pannel",
        props: ["product"],
        data: function() {
          return {
            buttonList: [{
              label: "deposit",
              image: "//assets.office4u.xyz/photos/BO-Demo/blue-deposit-svg.svg",
              route: "Deposit"
            },
            {
              label: "withdraw",
              image: "//assets.office4u.xyz/photos/BO-Demo/game-withdraw.svg",
              route: "Banklist"
            },
            {
              label: "transfer",
              image: "//assets.office4u.xyz/photos/BO-Demo/game-transfer.svg",
              route: "Transfer"
            }]
          }
        },
        computed: {
          productDetail: function() {
            return this.product
          }
        }
      },
      Vn = Pn,
      jn = (a("84fa"), Object(m["a"])(Vn, Cn, Tn, !1, null, null, null)),
      Sn = jn.exports;
      f()(jn, {
        VBtn: g["a"],
        VFlex: st["a"],
        VLayout: Tt["a"]
      });
      var In = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("v-layout", {
          attrs: {
            row: "",
            "align-center": "",
            "justify-center": "",
            "pb-2": ""
          }
        },
        [t.productDetail.url ? a("v-flex", {
          staticStyle: {
            margin: "2.5px"
          },
          attrs: {
            xs6: ""
          }
        },
        [a("v-btn", {
          staticStyle: {
            width: "100%"
          },
          attrs: {
            color: "success",
            target: "_blank",
            href: t.productUrl
          }
        },
        [a("div", {
          staticStyle: {
            display: "flex",
            "flex-direction": "row",
            "justify-content": "center"
          }
        },
        [a("div", {
          staticStyle: {
            width: "30px"
          }
        },
        [a("v-img", {
          staticStyle: {
            width: "100%"
          },
          attrs: {
            src: t.getImgUrl("download")
          }
        })], 1), a("div", {
          staticStyle: {
            display: "flex",
            "align-items": "center",
            padding: "5px"
          }
        },
        [a("span", [t._v(t._s(t.$t("game.download")))])])])])], 1) : t._e(), t.productDetail.mobile_url ? a("v-flex", {
          staticStyle: {
            margin: "2.5px"
          },
          attrs: {
            xs6: ""
          }
        },
        [a("v-btn", {
          staticStyle: {
            width: "100%"
          },
          attrs: {
            color: "warning",
            target: "_blank",
            href: t.productMobileUrl
          }
        },
        [a("div", {
          staticStyle: {
            display: "flex",
            "flex-direction": "row",
            "justify-content": "center"
          }
        },
        [a("div", {
          staticStyle: {
            width: "30px"
          }
        },
        [a("v-img", {
          staticStyle: {
            width: "100%"
          },
          attrs: {
            src: t.getImgUrl("internet")
          }
        })], 1), a("div", {
          staticStyle: {
            display: "flex",
            "align-items": "center",
            padding: "5px"
          }
        },
        [a("span", [t._v(t._s(t.$t("game.website")))])])])])], 1) : t._e()], 1)
      },
      Rn = [],
      Ln = {
        name: "Download-Button-Pannel",
        props: ["product"],
        data: function() {
          return {}
        },
        computed: {
          productDetail: function() {
            return this.product
          },
          productUrl: function() {
            return "//" + this.productDetail.url
          },
          productMobileUrl: function() {
            return "//" + this.productDetail.mobile_url
          }
        },
        methods: {
          getImgUrl: function(t) {
            var e = a("9142");
            return e("./" + t + ".png")
          }
        }
      },
      $n = Ln,
      zn = (a("843a"), Object(m["a"])($n, In, Rn, !1, null, "01322300", null)),
      Mn = zn.exports;
      f()(zn, {
        VBtn: g["a"],
        VFlex: st["a"],
        VImg: $e["a"],
        VLayout: Tt["a"]
      });
      var Fn = a("2ef0"),
      Nn = a.n(Fn),
      Gn = {
        name: "Game",
        data: function() {
          return {
            alertType: "",
            message: "",
            visibility: !1,
            progressbar: !1,
            products: [{
              id: 1,
              name: "Main Wallet"
            }],
            height: 700,
            snackbar: !1,
            initResize: !1
          }
        },
        components: {
          Alert: H,
          Carousel3d: Xs["Carousel3d"],
          Slide: Xs["Slide"],
          Tags: rn,
          ExpansionPanel: Dn,
          Snackbar: b,
          Buttons: Sn,
          ProductCarousel: mn,
          DownloadButton: Mn
        },
        mounted: function() {
          var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
            var e, a, s, n;
            return regeneratorRuntime.wrap(function(t) {
              while (1) switch (t.prev = t.next) {
              case 0:
                return t.next = 2,
                this.getProducts();
              case 2:
                for (e = document.getElementsByClassName("prev"), a = 0; a < e.length; a++) e[a].style.color = "rgba(255, 255, 255, 0.75)";
                for (s = document.getElementsByClassName("next"), n = 0; n < s.length; n++) s[n].style.color = "rgba(255, 255, 255, 0.75)";
                window.addEventListener("resize", this.onResize);
              case 7:
              case "end":
                return t.stop()
              }
            },
            t, this)
          }));
          function e() {
            return t.apply(this, arguments)
          }
          return e
        } (),
        methods: {
          enable: function(t) {
            this.snackbar = t
          },
          getImgUrl: function(t) {
            var e = a("9142");
            return e("./" + t + ".png")
          },
          getProducts: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e, a, s;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  if (this.progressbar = !0, e = null, "" == this.$store.getters.user_token) {
                    t.next = 8;
                    break
                  }
                  return t.next = 5,
                  V.getProductsMember({
                    access_token: this.$store.getters.user_token
                  });
                case 5:
                  e = t.sent,
                  t.next = 11;
                  break;
                case 8:
                  return t.next = 10,
                  V.getProducts();
                case 10:
                  e = t.sent;
                case 11:
                  if (this.progressbar = !1, a = "" != this.$store.getters.user_token, s = this, !(e && "success" in e && !0 === e.success)) {
                    t.next = 21;
                    break
                  }
                  return t.next = 17,
                  e.data.filter(function(t) {
                    return 1 != t.id || a
                  });
                case 17:
                  this.products = t.sent,
                  this.products = this.products.map(function(t) {
                    return 1 == t.id && (t.logo = s.getImgUrl("wallet")),
                    1 != t.id && "" == t.logo && (t.logo = s.getImgUrl("coming-soon")),
                    t.player && t.player.length > 0 && (t.username = t.player[0].username, t.password = t.player[0].password),
                    t
                  }),
                  t.next = 25;
                  break;
                case 21:
                  this.visibility = !0,
                  this.message = e.message,
                  this.alertType = "error",
                  "token invalid" == e.message && (this.$store.dispatch("logout", e.data), this.$router.push({
                    name: "login"
                  }));
                case 25:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } (),
          arrayToObject: function(t, e) {
            return t.reduce(function(t, a) {
              return t[a[e]] = a,
              t
            },
            {})
          },
          goToSlide: function(t) {
            this.$refs.productCarousel.goSlide(t)
          },
          onResize: Nn.a.debounce(function() {
            var t = 120,
            e = document.querySelectorAll(".slide-card-child-logo"),
            a = document.querySelectorAll(".v-card__text"),
            s = 0,
            n = 0;
            if (a.length) for (var i = 0; i < a.length; i++) n = n < a[i].offsetHeight ? a[i].offsetHeight: n;
            if (e.length) for (var r = 0; r < e.length; r++) s = s < e[r].offsetHeight ? e[r].offsetHeight: s;
            var o = document.querySelectorAll(".carousel-3d-container");
            if (o.length) for (var l = 0; l < o.length; l++) {
              var c = n + s + t,
              u = 700 > c ? 700 : c,
              d = u > c ? u: c;
              d != o[l].style.minHeight && (o[l].style.minHeight = d + "px", o[l].style.height = d + "px")
            }
          },
          350),
          onAfterSlideChange: function() {
            this.onResize()
          },
          loaded: function() {
            this.onResize()
          }
        }
      },
      Bn = Gn,
      En = (a("c46d"), a("b7f2"), Object(m["a"])(Bn, Js, Qs, !1, null, "30db90e8", null)),
      Un = En.exports;
      f()(En, {
        VCard: et["a"],
        VCardActions: Dt["a"],
        VCardText: Dt["b"],
        VFlex: st["a"],
        VProgressLinear: it["a"]
      });
      var On = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("div", [a("v-flex", {
          attrs: {
            xs12: "",
            sm10: "",
            "offset-sm1": "",
            md8: "",
            "offset-md2": "",
            lg6: "",
            "offset-lg3": ""
          }
        },
        ["" !== t.alertType ? a("Alert", {
          attrs: {
            atype: t.alertType,
            message: t.alertMessage,
            visibility: t.visibility
          }
        }) : t._e(), t.progressbar ? a("v-progress-linear", {
          attrs: {
            indeterminate: !0
          }
        }) : t._e(), a("v-container", [a("v-card", {
          staticClass: "semi-transparent-5-bg"
        },
        [a("v-card-title", {
          staticStyle: {
            "border-bottom": "5px solid #3944bb"
          }
        },
        [a("img", {
          staticStyle: {
            float: "left",
            width: "15%",
            "max-width": "50px",
            "margin-right": "15px"
          },
          attrs: {
            src: "//assets.office4u.xyz/photos/BO-Demo/blue-deposit-svg.svg"
          }
        }), a("div", {
          staticClass: "deposit-form-title"
        },
        [a("span", [t._v(t._s(t.$t("deposit.title").toUpperCase()))])])]), a("v-card-text", [a("v-form", {
          ref: "form",
          attrs: {
            "lazy-validation": ""
          },
          model: {
            value: t.valid,
            callback: function(e) {
              t.valid = e
            },
            expression: "valid"
          }
        },
        [a("v-layout", {
          staticClass: "margin-5-top-bottom",
          attrs: {
            row: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs4: ""
          }
        },
        [a("v-subheader", {
          staticClass: "inputlabel"
        },
        [t._v("Product")])], 1), a("v-flex", {
          staticClass: "margin-16-right",
          attrs: {
            xs8: ""
          }
        },
        [a("v-select", {
          staticClass: "deposit-form",
          attrs: {
            label: t.$t("deposit.bank_account"),
            items: [t.product],
            value: t.product,
            "single-line": "",
            disabled: "",
            "return-object": ""
          },
          scopedSlots: t._u([{
            key: "selection",
            fn: function(e) {
              return [a("img", {
                staticStyle: {
                  "margin-right": "5px"
                },
                attrs: {
                  src: e.item.logo,
                  width: "35px;"
                }
              }), t._v("\n                                        " + t._s(e.item.name) + "\n                                    ")]
            }
          }])
        })], 1)], 1), a("div", {
          staticStyle: {
            "margin-bottom": "1em"
          }
        }), a("v-layout", {
          staticClass: "margin-5-top-bottom",
          attrs: {
            row: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs4: ""
          }
        },
        [a("v-subheader", {
          staticClass: "inputlabel"
        },
        [t._v(t._s(t.$t("deposit.bank_account")))])], 1), a("v-flex", {
          staticClass: "margin-16-right",
          attrs: {
            xs8: ""
          }
        },
        [a("v-select", {
          attrs: {
            label: t.$t("deposit.bank_account"),
            items: t.bankAccounts,
            "item-value": "id",
            rules: t.bankAccountRules,
            "single-line": "",
            "return-object": ""
          },
          scopedSlots: t._u([{
            key: "selection",
            fn: function(e) {
              return [a("span", [t._v(t._s(e.item.name + "- " + e.item.bank.short_name))])]
            }
          },
          {
            key: "item",
            fn: function(e) {
              return [a("span", [t._v(t._s(e.item.name + "- " + e.item.bank.short_name))])]
            }
          }]),
          model: {
            value: t.data.selectedBank,
            callback: function(e) {
              t.$set(t.data, "selectedBank", e)
            },
            expression: "data.selectedBank"
          }
        })], 1)], 1), a("div", {
          staticStyle: {
            "margin-bottom": "1em"
          }
        }), t.data.selectedBank ? a("v-list", {
          staticClass: "semi-transparent-5-bg overflow-x-auto",
          attrs: {
            "two-line": ""
          }
        },
        [a("v-list-tile", [a("v-list-tile-avatar", [a("img", {
          attrs: {
            src: t.data.selectedBank.bank.logo_url
          }
        })]), a("v-list-tile-content", [a("v-list-tile-title", [t._v(t._s(t.data.selectedBank.name))]), a("v-list-tile-sub-title", [t._v(t._s(t.data.selectedBank.acc_no))])], 1), a("v-list-tile-action", [a("v-btn", {
          attrs: {
            icon: "",
            ripple: ""
          }
        },
        [a("v-icon", {
          attrs: {
            color: "grey lighten-1"
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.copyBankAcc(t.data.selectedBank.acc_no)
            }
          }
        },
        [t._v("file_copy")])], 1)], 1)], 1)], 1) : t._e(), a("div", {
          staticStyle: {
            "margin-bottom": "1em"
          }
        }), a("v-layout", {
          staticClass: "margin-5-top-bottom",
          attrs: {
            row: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs4: ""
          }
        },
        [a("v-subheader", {
          staticClass: "inputlabel"
        },
        [t._v(t._s(t.$t("deposit.transfer_date")))])], 1), a("v-flex", {
          staticClass: "margin-16-right",
          attrs: {
            xs8: ""
          }
        },
        [a("v-datetime-picker", {
          attrs: {
            id: "dateTimePickerField"
          },
          on: {
            input: function(e) {
              return t.changeDateFormat()
            }
          },
          model: {
            value: t.data.transferDateTime,
            callback: function(e) {
              t.$set(t.data, "transferDateTime", e)
            },
            expression: "data.transferDateTime"
          }
        })], 1)], 1), a("div", {
          staticStyle: {
            "margin-bottom": "1em"
          }
        }), a("v-layout", {
          staticClass: "margin-5-top-bottom",
          attrs: {
            row: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs4: ""
          }
        },
        [a("v-subheader", {
          staticClass: "inputlabel"
        },
        [t._v(t._s(t.$t("deposit.amount", {
          currency: this.$store.getters.currency
        })))])], 1), a("v-flex", {
          staticClass: "margin-16-right",
          attrs: {
            xs8: ""
          }
        },
        [a("v-text-field", {
          staticClass: "amountField",
          attrs: {
            id: "amountField",
            rules: t.amountRules,
            "single-line": "",
            box: "",
            required: ""
          },
          model: {
            value: t.data.amount,
            callback: function(e) {
              t.$set(t.data, "amount", e)
            },
            expression: "data.amount"
          }
        })], 1)], 1), a("div", {
          staticStyle: {
            "margin-bottom": "1em"
          }
        }), a("v-layout", {
          staticClass: "margin-5-top-bottom",
          attrs: {
            row: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs4: ""
          }
        },
        [a("v-subheader", {
          staticClass: "inputlabel"
        },
        [t._v("Method")])], 1), a("v-flex", {
          staticClass: "margin-16-right",
          staticStyle: {
            "padding-top": "10px"
          },
          attrs: {
            xs8: ""
          }
        },
        [a("v-radio-group", {
          attrs: {
            rules: t.methodRules,
            row: ""
          },
          model: {
            value: t.data.selectedMethod,
            callback: function(e) {
              t.$set(t.data, "selectedMethod", e)
            },
            expression: "data.selectedMethod"
          }
        },
        t._l(t.methods,
        function(e, s) {
          return a("v-radio", {
            key: s,
            attrs: {
              label: t.$t("deposit." + e),
              value: e
            }
          })
        }), 1)], 1)], 1), a("v-layout", {
          staticClass: "margin-5-top-bottom",
          attrs: {
            row: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs4: ""
          }
        },
        [a("v-subheader", {
          staticClass: "inputlabel"
        },
        [t._v(t._s(t.$t("deposit.ref_no")))])], 1), a("v-flex", {
          staticClass: "margin-16-right",
          attrs: {
            xs8: ""
          }
        },
        [a("v-text-field", {
          staticClass: "refField deposit-form",
          attrs: {
            id: "refField",
            "single-line": "",
            box: "",
            required: ""
          },
          model: {
            value: t.data.referenceNo,
            callback: function(e) {
              t.$set(t.data, "referenceNo", e)
            },
            expression: "data.referenceNo"
          }
        })], 1)], 1), a("div", {
          staticStyle: {
            "margin-bottom": "1em"
          }
        }), a("v-layout", {
          staticClass: "margin-5-top-bottom",
          attrs: {
            row: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs4: ""
          }
        },
        [a("v-subheader", {
          staticClass: "inputlabel"
        },
        [t._v("Receipt")])], 1), a("v-flex", {
          staticClass: "margin-16-right",
          attrs: {
            xs8: ""
          }
        },
        [a("v-flex", {
          staticStyle: {
            display: "flex",
            "flex-wrap": "wrap",
            "align-items": "center"
          },
          attrs: {
            xs12: ""
          }
        },
        [a("v-btn", {
          staticClass: "font-size",
          attrs: {
            small: ""
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.pickFile(e)
            }
          }
        },
        [t._v("\n                                        Attachment\n                                    ")]), a("span", [t._v(t._s(t.data.imageName))])], 1)], 1)], 1), a("input", {
          ref: "image",
          staticStyle: {
            display: "none"
          },
          attrs: {
            type: "file",
            accept: "image/*",
            name: "image_file"
          },
          on: {
            change: t.onFilePicked
          }
        }), a("div", {
          staticStyle: {
            "margin-bottom": "1em"
          }
        }), a("v-layout", {
          staticClass: "margin-5-top-bottom",
          attrs: {
            row: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs4: ""
          }
        },
        [a("v-subheader", {
          staticClass: "inputlabel"
        },
        [t._v("Promotion")])], 1), a("v-flex", {
          staticClass: "margin-16-right",
          attrs: {
            xs8: ""
          }
        },
        [a("v-select", {
          attrs: {
            items: t.promotions,
            "item-text": "name",
            "item-value": "promotion_id"
          },
          model: {
            value: t.data.selectedPromotion,
            callback: function(e) {
              t.$set(t.data, "selectedPromotion", e)
            },
            expression: "data.selectedPromotion"
          }
        })], 1)], 1), a("div", {
          staticStyle: {
            "margin-bottom": "1em"
          }
        }), a("v-layout", {
          attrs: {
            row: "",
            "justify-center": ""
          }
        },
        [a("v-btn", {
          staticClass: "font-size",
          attrs: {
            disabled: !t.valid,
            color: "success",
            small: ""
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.submit(e)
            }
          }
        },
        [t._v("\n                                " + t._s(t.$t("shared.submit")) + "\n                            ")]), a("v-btn", {
          staticClass: "font-size",
          attrs: {
            color: "error",
            small: ""
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.reset(e)
            }
          }
        },
        [t._v("\n                                " + t._s(t.$t("shared.reset")) + "\n                            ")])], 1)], 1)], 1)], 1)], 1)], 1), 1 == t.ready ? a("div", [a("snackbar", {
          attrs: {
            color: t.color,
            icon: t.icon,
            text: t.message,
            show: t.snackbar
          }
        })], 1) : t._e()], 1)
      },
      Wn = [],
      Hn = (a("6762"), a("2fdb"), {
        name: "Deposit",
        data: function() {
          return {
            valid: !0,
            data: {
              selectedBank: null,
              selectedPromotion: 0,
              selectProduct: "",
              selectedMethod: "",
              transferDateTime: Wa()().format("YYYY-MM-DD HH:mm"),
              amount: 0,
              referenceNo: "",
              minDepositAmount: 100,
              imageName: "",
              imageFile: "",
              imageFileType: ""
            },
            product: null,
            bankAccounts: [],
            promotions: [],
            methods: ["Online", "ATM"],
            alertType: "",
            alertMessage: "",
            visibility: !1,
            progressbar: !1,
            snackbar: !1,
            message: "",
            color: "",
            icon: "",
            ready: !1
          }
        },
        components: {
          Alert: H,
          snackbar: b
        },
        mounted: function() {
          if (!this.$route.params.product) return this.$router.push({
            name: "Game"
          });
          function t(t) {
            var e = null;
            e = $("." + t + " .v-input__control .v-input__slot"),
            e.css("text-shadow", "0px 0px 2px #ccc"),
            e.css("box-shadow", "0 0 2px #fff, 0 0 5px #fff, 0 0 10px #fff"),
            e.css("transition-delay", "0.1s")
          }
          function e(t) {
            var e = null;
            e = $("." + t + " .v-input__control .v-input__slot"),
            e.css("text-shadow", ""),
            e.css("box-shadow", ""),
            e.css("transition-delay", "")
          }
          this.product = this.$route.params.product,
          this.data.selectProduct = this.$route.params.product.id,
          this.getMinDeposit(),
          this.getFormData(),
          $("input[type=text]").focus(function() {
            var e = null;
            e = $(this).attr("id"),
            t(e)
          }),
          $("input[type=text]").focusout(function() {
            var t = null;
            t = $(this).attr("id"),
            e(t)
          })
        },
        watch: {
          message: function(t) {
            var e = this;
            setTimeout(function() {
              if (e.ready = !1, e.snackbar = !1, t == e.$t("deposit.submit_ticket_success")) return e.$router.push({
                name: "home"
              })
            },
            1500)
          }
        },
        computed: {
          amountRules: function() {
            var t = this;
            return [function(e) {
              return !! e || t.$t("deposit.require_amount_validation_rule")
            },
            function(e) {
              return e && e >= parseFloat(t.data.minDepositAmount) || t.$t("deposit.min_amount_validation_rule", {
                amount: t.data.minDepositAmount,
                currency: t.$store.getters.currency
              })
            }]
          },
          bankAccountRules: function() {
            var t = this;
            return [function(e) {
              return !! e || t.$t("deposit.bank_acc_validation_rule")
            }]
          },
          methodRules: function() {
            var t = this;
            return [function(e) {
              return !! e || t.$t("deposit.method_validation_rule")
            }]
          }
        },
        methods: {
          getImgUrl: function(t) {
            var e = a("9142");
            return e("./" + t + ".png")
          },
          reset: function() {
            this.data.amount = 0,
            this.data.selectedBank = "",
            this.data.selectedPromotion = "",
            this.data.selectedMethod = "",
            this.data.referenceNo = "",
            this.data.imageName = "",
            this.data.imageFile = "",
            this.data.imageFileType = ""
          },
          submit: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e, a, s;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  if (!this.formValidation()) {
                    t.next = 15;
                    break
                  }
                  return e = new FormData,
                  e.append("access_token", this.$store.getters.user_token),
                  e.append("ref_no", this.data.referenceNo),
                  e.append("product_to", this.data.selectProduct),
                  e.append("bank_acc_id", this.data.selectedBank.id),
                  e.append("method", this.data.selectedMethod),
                  e.append("amount", this.data.amount),
                  e.append("promotion_id", this.data.selectedPromotion),
                  e.append("transferDateTime", this.data.transferDateTime),
                  this.data.imageFile && (e.append("receipt_image", this.data.imageFile), e.append("receipt_image_type", this.data.imageName)),
                  t.next = 13,
                  V.postDeposit(e);
                case 13:
                  if (a = t.sent, a && "success" in a && !0 === a.success) this.message = a.message,
                  "Submit Ticket Successfully" == this.message && (this.message = this.$t("deposit.submit_ticket_success")),
                  this.icon = "done_all",
                  this.color = "green",
                  this.snackbar = !0,
                  this.ready = !0;
                  else if (this.visibility = !0, this.alertMessage = a.message, this.alertType = "error", "token invalid" == a.message) this.$store.dispatch("logout", a.data),
                  this.$router.push({
                    name: "login"
                  });
                  else if ("Ticket Detail Invalid" == a.message) for (s in a.data) this.alertMessage += "<br>" + a.data[s];
                  else "string" === typeof a.data && (this.alertMessage = a.data);
                case 15:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } (),
          getFormData: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  if (this.progressbar = !0, "" == this.$store.getters.user_token) {
                    t.next = 9;
                    break
                  }
                  return t.next = 4,
                  this.getBankAccounts();
                case 4:
                  return t.next = 6,
                  this.getMemberPromotions();
                case 6:
                  this.progressbar = !1,
                  t.next = 10;
                  break;
                case 9:
                  this.$router.push({
                    name:
                    "login"
                  });
                case 10:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } (),
          getBankAccounts: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2,
                  V.getBankAccounts({
                    access_token: this.$store.getters.user_token
                  });
                case 2:
                  e = t.sent,
                  e && "success" in e && !0 === e.success ? this.bankAccounts = e.data: (this.visibility = !0, this.alertMessage = e.message, this.alertType = "error", "token invalid" == e.message && (this.$store.dispatch("logout", e.data), this.$router.push({
                    name: "login"
                  })));
                case 4:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } (),
          getMemberPromotions: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e, a;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2,
                  V.getMemberPromotions({
                    access_token: this.$store.getters.user_token,
                    productTo: this.data.selectProduct
                  });
                case 2:
                  e = t.sent,
                  a = this,
                  e && "success" in e && !0 === e.success ? (a.promotions.push({
                    id: 0,
                    name: "Don't get any bonus",
                    promotion_id: ""
                  }), e.data.map(function(t) {
                    a.promotions.push(t)
                  })) : (this.visibility = !0, this.alertMessage = e.message, this.alertType = "error", "token invalid" == e.message && (this.$store.dispatch("logout", e.data), this.$router.push({
                    name: "login"
                  })));
                case 5:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } (),
          getMinDeposit: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2,
                  V.getMinDeposit();
                case 2:
                  e = t.sent,
                  e && (this.data.minDepositAmount = e);
                case 4:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } (),
          copyBankAcc: function(t) {
            var e = document.createElement("input");
            document.body.appendChild(e),
            e.value = t,
            e.select();
            try {
              document.execCommand("copy");
              this.message = this.$t("shared.copied"),
              this.icon = "done_all",
              this.color = "green",
              this.snackbar = !0,
              this.ready = !0
            } catch(a) {
              alert(this.$t("shared.opp_unable_copy"))
            }
            document.body.removeChild(e)
          },
          pickFile: function() {
            this.$refs.image.click()
          },
          onFilePicked: function(t) {
            var e = t.target.files;
            void 0 !== e[0] ? (this.data.imageName = e[0].name, this.data.imageFile = e[0], this.data.imageFileType = e[0].type) : (this.data.imageName = "", this.data.imageFile = "", this.data.imageFileType = "")
          },
          formValidation: function() {
            return this.data.selectedBank && "" != this.data.selectedMethod && this.data.amount ? "" === this.data.imageName || ( !! this.data.imageFileType.includes("image") || (this.message = this.$t("deposit.invalid_image_type"), this.icon = "clear", this.color = "red", this.snackbar = !0, this.ready = !0, !1)) : (this.message = this.$t("deposit.not_completed_form"), this.icon = "clear", this.color = "red", this.snackbar = !0, this.ready = !0, !1)
          },
          changeDateFormat: function() {
            this.data.transferDateTime = Wa()(this.data.transferDateTime).format("YYYY-MM-DD HH:mm")
          }
        }
      }),
      Zn = Hn,
      Yn = (a("a2ff"), a("df9c"), a("67b6")),
      qn = a("43a6"),
      Jn = Object(m["a"])(Zn, On, Wn, !1, null, "0499d519", null),
      Qn = Jn.exports;
      f()(Jn, {
        VBtn: g["a"],
        VCard: et["a"],
        VCardText: Dt["b"],
        VCardTitle: Ct["a"],
        VContainer: at["a"],
        VFlex: st["a"],
        VForm: nt["a"],
        VIcon: h["a"],
        VLayout: Tt["a"],
        VList: ge["a"],
        VListTile: Qt["a"],
        VListTileAction: Xt["a"],
        VListTileAvatar: he["a"],
        VListTileContent: Kt["a"],
        VListTileSubTitle: Kt["b"],
        VListTileTitle: Kt["c"],
        VProgressLinear: it["a"],
        VRadio: Yn["a"],
        VRadioGroup: qn["a"],
        VSelect: Da["a"],
        VSubheader: Pt["a"],
        VTextField: rt["a"]
      });
      var Xn = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("div", [a("v-flex", {
          attrs: {
            xs12: "",
            sm10: "",
            "offset-sm1": "",
            md8: "",
            "offset-md2": "",
            lg6: "",
            "offset-lg3": ""
          }
        },
        ["" !== t.alertType ? a("Alert", {
          attrs: {
            atype: t.alertType,
            message: t.alertMessage,
            visibility: t.visibility
          }
        }) : t._e(), t.progressbar ? a("v-progress-linear", {
          attrs: {
            indeterminate: !0
          }
        }) : t._e(), a("v-container", [a("v-card", {
          staticClass: "semi-transparent-5-bg"
        },
        [a("v-card-title", {
          staticStyle: {
            "border-bottom": "5px solid #3944bb"
          }
        },
        [a("img", {
          staticStyle: {
            float: "left",
            width: "15%",
            "max-width": "50px",
            "margin-right": "15px"
          },
          attrs: {
            src: "//assets.office4u.xyz/photos/BO-Demo/game-transfer.svg"
          }
        }), a("div", {
          staticClass: "transfer-form-title"
        },
        [a("span", [t._v(t._s(t.$t("transfer.title").toUpperCase()))])])]), a("v-card-text", [a("v-form", {
          ref: "form",
          attrs: {
            "lazy-validation": ""
          },
          model: {
            value: t.valid,
            callback: function(e) {
              t.valid = e
            },
            expression: "valid"
          }
        },
        [a("v-layout", {
          staticClass: "margin-5-top-bottom",
          attrs: {
            row: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs4: ""
          }
        },
        [a("v-subheader", {
          staticClass: "inputlabel"
        },
        [t._v(t._s(t.$t("deposit.amount", {
          currency: this.$store.getters.currency
        })))])], 1), a("v-flex", {
          staticClass: "margin-16-right",
          attrs: {
            xs8: ""
          }
        },
        [a("v-text-field", {
          staticClass: "transfer-form transferAmountField",
          attrs: {
            id: "transferAmountField",
            rules: t.amountRules,
            "single-line": "",
            box: "",
            required: ""
          },
          model: {
            value: t.data.amount,
            callback: function(e) {
              t.$set(t.data, "amount", e)
            },
            expression: "data.amount"
          }
        })], 1)], 1), a("div", {
          staticStyle: {
            "margin-bottom": "1em"
          }
        }), a("v-layout", {
          staticClass: "margin-5-top-bottom",
          attrs: {
            row: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs4: ""
          }
        },
        [a("v-subheader", {
          staticClass: "inputlabel"
        },
        [t._v(t._s(t.$t("transfer.product_from")))])], 1), a("v-flex", {
          staticClass: "margin-16-right",
          attrs: {
            xs8: ""
          }
        },
        [a("v-select", {
          attrs: {
            items: t.productsFrom,
            "item-value": "id",
            rules: t.productFromRules
          },
          scopedSlots: t._u([{
            key: "selection",
            fn: function(e) {
              return [a("v-flex", {
                attrs: {
                  xs12: ""
                }
              },
              [a("img", {
                staticStyle: {
                  "margin-right": "5px"
                },
                attrs: {
                  src: e.item.logo,
                  width: "35px;"
                }
              }), t._v("\n\n                                            " + t._s(e.item.name) + "\n\n                                        ")])]
            }
          },
          {
            key: "item",
            fn: function(e) {
              return [a("v-flex", {
                attrs: {
                  xs12: ""
                }
              },
              [a("img", {
                staticStyle: {
                  "margin-right": "5px"
                },
                attrs: {
                  src: e.item.logo,
                  width: "35px;"
                }
              }), t._v("\n\n                                            " + t._s(e.item.name) + "\n\n                                        ")])]
            }
          }]),
          model: {
            value: t.data.productFrom,
            callback: function(e) {
              t.$set(t.data, "productFrom", e)
            },
            expression: "data.productFrom"
          }
        })], 1)], 1), a("div", {
          staticStyle: {
            "margin-bottom": "1em"
          }
        }), a("v-layout", {
          staticClass: "margin-5-top-bottom",
          attrs: {
            row: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs4: ""
          }
        },
        [a("v-subheader", {
          staticClass: "inputlabel"
        },
        [t._v(t._s(t.$t("transfer.product_to")))])], 1), a("v-flex", {
          staticClass: "margin-16-right",
          attrs: {
            xs8: ""
          }
        },
        [a("v-select", {
          attrs: {
            items: t.productsTo,
            "item-value": "id",
            rules: t.productToRules
          },
          scopedSlots: t._u([{
            key: "selection",
            fn: function(e) {
              return [a("v-flex", {
                attrs: {
                  xs12: ""
                }
              },
              [a("img", {
                staticStyle: {
                  "margin-right": "5px"
                },
                attrs: {
                  src: e.item.logo,
                  width: "35px;"
                }
              }), t._v("\n\n                                            " + t._s(e.item.name) + "\n\n                                        ")])]
            }
          },
          {
            key: "item",
            fn: function(e) {
              return [a("v-flex", {
                attrs: {
                  xs12: ""
                }
              },
              [a("img", {
                staticStyle: {
                  "margin-right": "5px"
                },
                attrs: {
                  src: e.item.logo,
                  width: "35px;"
                }
              }), t._v("\n\n                                            " + t._s(e.item.name) + "\n\n                                        ")])]
            }
          }]),
          model: {
            value: t.data.productTo,
            callback: function(e) {
              t.$set(t.data, "productTo", e)
            },
            expression: "data.productTo"
          }
        })], 1)], 1), a("div", {
          staticStyle: {
            "margin-bottom": "1em"
          }
        }), a("v-layout", {
          attrs: {
            row: "",
            "justify-center": ""
          }
        },
        [a("v-btn", {
          staticClass: "font-size",
          attrs: {
            disabled: !t.valid,
            color: "success",
            small: ""
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.transfer(e)
            }
          }
        },
        [t._v("\n                                " + t._s(t.$t("transfer.transfer_now")) + "\n                            ")]), a("v-btn", {
          staticClass: "font-size",
          attrs: {
            color: "error",
            small: ""
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.reset(e)
            }
          }
        },
        [t._v("\n                                " + t._s(t.$t("shared.reset")) + "\n                            ")])], 1)], 1)], 1)], 1)], 1)], 1), 1 == t.ready ? a("div", [a("snackbar", {
          attrs: {
            color: t.color,
            icon: t.icon,
            text: t.message,
            show: t.snackbar
          }
        })], 1) : t._e()], 1)
      },
      Kn = [],
      ti = {
        name: "Transfer",
        data: function() {
          return {
            valid: !0,
            data: {
              productFrom: null,
              productTo: null,
              amount: 0,
              minTransferAmount: 100
            },
            products: [],
            productsFrom: [],
            productsTo: [],
            alertType: "",
            alertMessage: "",
            visibility: !1,
            progressbar: !1,
            snackbar: !1,
            message: "",
            color: "",
            icon: "",
            ready: !1
          }
        },
        components: {
          Alert: H,
          snackbar: b
        },
        mounted: function() {
          function t(t) {
            var e = null;
            e = $("." + t + " .v-input__control .v-input__slot"),
            e.css("text-shadow", "0px 0px 2px #ccc"),
            e.css("box-shadow", "0 0 2px #fff, 0 0 5px #fff, 0 0 10px #fff"),
            e.css("transition-delay", "0.1s")
          }
          function e(t) {
            var e = null;
            e = $("." + t + " .v-input__control .v-input__slot"),
            e.css("text-shadow", ""),
            e.css("box-shadow", ""),
            e.css("transition-delay", "")
          }
          this.$route.params.product && (this.data.productFrom = this.$route.params.product.id),
          this.getProducts(),
          this.getMinTransfer(),
          $("input[type=text]").focus(function() {
            var e = null;
            e = $(this).attr("id"),
            t(e)
          }),
          $("input[type=text]").focusout(function() {
            var t = null;
            t = $(this).attr("id"),
            e(t)
          })
        },
        watch: {
          message: function(t) {
            var e = this;
            setTimeout(function() {
              if (e.ready = !1, e.snackbar = !1, t == e.$t("deposit.submit_ticket_success")) return e.$router.push({
                name: "home"
              })
            },
            1500)
          },
          "data.productFrom": function(t) {
            this.productsTo = this.products.filter(function(e) {
              return e.id != t
            }),
            t == this.data.productTo && (this.data.productTo = null)
          },
          "data.productTo": function(t) {
            this.productsFrom = this.products.filter(function(e) {
              return e.id != t
            }),
            t == this.data.productFrom && (this.data.productFrom = null)
          }
        },
        computed: {
          amountRules: function() {
            var t = this;
            return [function(e) {
              return !! e || t.$t("deposit.require_amount_validation_rule")
            },
            function(e) {
              return e && e >= parseFloat(t.data.minTransferAmount) || t.$t("deposit.min_amount_validation_rule", {
                amount: t.data.minTransferAmount,
                currency: t.$store.getters.currency
              })
            }]
          },
          productFromRules: function() {
            var t = this;
            return [function(e) {
              return !! e || t.$t("transfer.product_transfer_from_validation_rule")
            },
            function(e) {
              return e && e != t.data.productTo || t.$t("transfer.product_transfer_same_validation_rule")
            }]
          },
          productToRules: function() {
            var t = this;
            return [function(e) {
              return !! e || t.$t("transfer.product_transfer_to_validation_rule")
            },
            function(e) {
              return e && e != t.data.productFrom || t.$t("transfer.product_transfer_same_validation_rule")
            }]
          }
        },
        methods: {
          getImgUrl: function(t) {
            var e = a("9142");
            return e("./" + t + ".png")
          },
          reset: function() {
            this.data.productFrom = null,
            this.data.productTo = null,
            this.data.amount = 0
          },
          getProducts: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e, a;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  return this.progressbar = !0,
                  t.next = 3,
                  V.getProductsMember({
                    access_token: this.$store.getters.user_token
                  });
                case 3:
                  e = t.sent,
                  this.progressbar = !1,
                  e && "success" in e && !0 === e.success ? (this.products = e.data, a = this, this.products = this.products.map(function(t) {
                    return 1 == t.id && (t.logo = a.getImgUrl("wallet")),
                    1 != t.id && "" == t.logo && (t.logo = a.getImgUrl("coming-soon")),
                    t
                  }), this.productsFrom = this.products, this.productsTo = this.products.filter(function(t) {
                    return t.id != a.data.productFrom
                  })) : (this.visibility = !0, this.alertMessage = e.message, this.alertType = "error", "token invalid" == e.message && (this.$store.dispatch("logout", e.data), this.$router.push({
                    name: "login"
                  })));
                case 6:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } (),
          transfer: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e, a;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  if (!this.$refs.form.validate()) {
                    t.next = 10;
                    break
                  }
                  return this.visibility = !1,
                  this.alertMessage = "",
                  this.alertType = "",
                  t.next = 6,
                  V.postTransfer({
                    access_token: this.$store.getters.user_token,
                    product_to: this.data.productTo,
                    product_from: this.data.productFrom,
                    amount: this.data.amount
                  });
                case 6:
                  if (e = t.sent, e && "success" in e && !0 === e.success) this.message = e.message,
                  "Submit Ticket Successfully" == this.message && (this.message = this.$t("deposit.submit_ticket_success")),
                  this.icon = "done_all",
                  this.color = "green",
                  this.snackbar = !0,
                  this.ready = !0;
                  else if (this.visibility = !0, this.alertMessage = e.message, this.alertType = "error", "token invalid" == e.message) this.$store.dispatch("logout", e.data),
                  this.$router.push({
                    name: "login"
                  });
                  else if ("Ticket Detail Invalid" == e.message) for (a in e.data) this.alertMessage += "<br>" + e.data[a];
                  else "string" === typeof e.data && (this.alertMessage = e.data);
                  t.next = 15;
                  break;
                case 10:
                  this.message = this.$t("deposit.not_completed_form"),
                  this.icon = "clear",
                  this.color = "red",
                  this.snackbar = !0,
                  this.ready = !0;
                case 15:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } (),
          getMinTransfer: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2,
                  V.getMinTransfer();
                case 2:
                  e = t.sent,
                  e && (this.data.minTransferAmount = e);
                case 4:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } ()
        }
      },
      ei = ti,
      ai = (a("5b1a"), Object(m["a"])(ei, Xn, Kn, !1, null, "6e5fb1a8", null)),
      si = ai.exports;
      f()(ai, {
        VBtn: g["a"],
        VCard: et["a"],
        VCardText: Dt["b"],
        VCardTitle: Ct["a"],
        VContainer: at["a"],
        VFlex: st["a"],
        VForm: nt["a"],
        VLayout: Tt["a"],
        VProgressLinear: it["a"],
        VSelect: Da["a"],
        VSubheader: Pt["a"],
        VTextField: rt["a"]
      });
      var ni = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("v-flex", {
          attrs: {
            xs12: "",
            sm10: "",
            "offset-sm1": "",
            md8: "",
            "offset-md2": "",
            lg6: "",
            "offset-lg3": "",
            "mt-2": "",
            "mb-2": ""
          }
        },
        ["" !== t.alertType ? a("Alert", {
          attrs: {
            atype: t.alertType,
            message: t.message,
            visibility: t.visibility
          }
        }) : t._e(), t.progressbar ? a("v-progress-linear", {
          attrs: {
            indeterminate: !0
          }
        }) : t._e(), t.items.length > 0 ? a("v-card", {
          staticClass: "semi-transparent-bg"
        },
        [a("v-list", {
          staticClass: "semi-transparent-bg",
          attrs: {
            "two-line": ""
          }
        },
        [t._l(t.items,
        function(e, s) {
          return [a("v-list-tile", {
            key: "contact" + e.id,
            attrs: {
              avatar: ""
            },
            on: {
              click: function(a) {
                a.preventDefault(),
                "textarea" == e.contentType ? t.toChat(e.id) : t.popUpDialog(e.id)
              }
            }
          },
          [a("v-list-tile-avatar", [a("img", {
            attrs: {
              src: e.avatar
            }
          })]), a("v-list-tile-content", [a("v-list-tile-title", {
            domProps: {
              innerHTML: t._s(e.name)
            }
          }), a("v-list-tile-sub-title", {
            domProps: {
              innerHTML: t._s(e.contact)
            }
          })], 1), a("v-list-tile-action", [a("v-icon", [t._v("chat")])], 1)], 1), s + 1 !== t.items.length ? a("v-divider", {
            key: s
          }) : t._e()]
        })], 2)], 1) : t._e(), a("v-dialog", {
          staticClass: "semi-transparent-7-bg",
          attrs: {
            persistent: "",
            "max-width": "290"
          },
          model: {
            value: t.popUp,
            callback: function(e) {
              t.popUp = e
            },
            expression: "popUp"
          }
        },
        [t.popUpDetail ? a("v-card", {
          staticClass: "semi-transparent-7-bg"
        },
        [a("v-img", {
          attrs: {
            src: t.popUpDetail.script
          }
        }), a("v-card-title", {
          staticClass: "headline"
        },
        [t._v(t._s(t.popUpDetail.name))]), a("v-card-actions", [a("v-spacer"), a("v-btn", {
          attrs: {
            color: "green darken-1",
            flat: ""
          },
          on: {
            click: function(e) {
              t.popUp = !1
            }
          }
        },
        [t._v("\n                        " + t._s(t.$t("reusable.close")) + "\n                    ")])], 1)], 1) : t._e()], 1)], 1)
      },
      ii = [],
      ri = {
        data: function() {
          return {
            items: [],
            progressbar: !1,
            alertType: "",
            message: "",
            visibility: "",
            popUp: !1,
            popUpDetail: {}
          }
        },
        components: {
          Alert: H
        },
        methods: {
          resetAlert: function() {
            this.visibility = !1,
            this.message = "",
            this.alertType = "",
            this.progressbar = !1
          },
          getImgUrl: function(t) {
            var e = a("4e6e");
            return e("./" + t + ".png")
          },
          toChat: function(t) {
            if (this.items[t]["script"]) window.open(this.items[t]["script"]);
            else switch (this.items[t]["type"]) {
            case "phone":
              window.open("tel:" + this.items[t]["contact"]);
              break;
            case "facebook":
              window.open(this.items[t]["contact"], "_system");
              break;
            case "instagram":
              window.open("instagram://user?username=" + this.items[t]["contact"]);
              break;
            case "line":
              window.open("line://ti/p/@" + this.items[t]["contact"]);
              break;
            case "skype":
              window.open("skype:" + this.items[t]["contact"] + "?chat");
              break;
            case "telegram":
              window.open("https://t.me/" + this.items[t]["contact"]);
              break;
            case "wechat":
              window.open("weixin://dl/chat?" + this.items[t]["contact"]);
              break;
            case "whatsapp":
              window.open("whatsapp://send?text=Hi%2C%20I%20am%20interested&phone=" + this.items[t]["contact"]);
              break;
            case "twitter":
              window.open("twitter://user?screen_name=" + this.items[t]["contact"]);
              break;
            case "zalo":
              window.open("http://zaloapp.com/qr/p/" + this.items[t]["contact"]);
              break;
            default:
              break
            }
          },
          popUpDialog: function(t) {
            this.popUp = !0,
            this.popUpDetail = this.items[t]
          }
        },
        mounted: function() {
          var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
            var e, a;
            return regeneratorRuntime.wrap(function(t) {
              while (1) switch (t.prev = t.next) {
              case 0:
                return this.progressbar = !0,
                t.next = 3,
                V.getContact();
              case 3:
                if (e = t.sent, e && "success" in e && 1 != e.success) this.visibility = !0,
                this.message = e.message,
                this.alertType = "error";
                else for (a in e.data) this.items.push({
                  id: a,
                  avatar: this.getImgUrl(e.data[a]["type"].toLowerCase()),
                  name: e.data[a]["name"],
                  contact: e.data[a]["contact"],
                  type: e.data[a]["type"].toLowerCase(),
                  contentType: e.data[a]["content_type"].toLowerCase(),
                  script: e.data[a]["value"]
                });
                this.progressbar = !1;
              case 6:
              case "end":
                return t.stop()
              }
            },
            t, this)
          }));
          function e() {
            return t.apply(this, arguments)
          }
          return e
        } ()
      },
      oi = ri,
      li = Object(m["a"])(oi, ni, ii, !1, null, null, null),
      ci = li.exports;
      f()(li, {
        VBtn: g["a"],
        VCard: et["a"],
        VCardActions: Dt["a"],
        VCardTitle: Ct["a"],
        VDialog: re["a"],
        VDivider: oe["a"],
        VFlex: st["a"],
        VIcon: h["a"],
        VImg: $e["a"],
        VList: ge["a"],
        VListTile: Qt["a"],
        VListTileAction: Xt["a"],
        VListTileAvatar: he["a"],
        VListTileContent: Kt["a"],
        VListTileSubTitle: Kt["b"],
        VListTileTitle: Kt["c"],
        VProgressLinear: it["a"],
        VSpacer: le["a"]
      });
      var ui = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("v-flex", {
          attrs: {
            xs12: "",
            sm10: "",
            "offset-sm1": "",
            md8: "",
            "offset-md2": "",
            lg6: "",
            "offset-lg3": ""
          }
        },
        ["" !== t.alertType ? a("Alert", {
          attrs: {
            atype: t.alertType,
            message: t.message,
            visibility: t.visibility
          }
        }) : t._e(), t.progressbar ? a("v-progress-linear", {
          attrs: {
            indeterminate: !0
          }
        }) : t._e(), t.content ? a("v-flex", {
          attrs: {
            xs12: "",
            sm10: "",
            "offset-sm1": "",
            md10: "",
            "offset-md1": ""
          }
        },
        [a("v-container", {
          staticClass: "semi-transparent-5-bg",
          attrs: {
            fluid: ""
          }
        },
        ["Image" == t.content.type ? a("img", {
          attrs: {
            src: t.content.value,
            width: "100%;",
            height: "auto"
          }
        }) : a("div", {
          staticStyle: {
            overflow: "auto",
            margin: "auto"
          },
          domProps: {
            innerHTML: t._s(t.content.value)
          }
        })])], 1) : t._e()], 1)
      },
      di = [],
      mi = {
        data: function() {
          return {
            progressbar: !1,
            alertType: "",
            message: "",
            visibility: "",
            content: ""
          }
        },
        components: {
          Alert: H
        },
        methods: {
          getHow2Win: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  return this.progressbar = !0,
                  t.next = 3,
                  V.getPage({
                    name: "t1_frontend_page_how2win"
                  });
                case 3:
                  e = t.sent,
                  e && "success" in e && !0 === e.success ? this.content = e.data: (this.visibility = !0, this.message = e.message, this.alertType = "error"),
                  this.progressbar = !1;
                case 6:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } ()
        },
        mounted: function() {
          var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
            return regeneratorRuntime.wrap(function(t) {
              while (1) switch (t.prev = t.next) {
              case 0:
                return t.next = 2,
                this.getHow2Win();
              case 2:
              case "end":
                return t.stop()
              }
            },
            t, this)
          }));
          function e() {
            return t.apply(this, arguments)
          }
          return e
        } ()
      },
      pi = mi,
      fi = Object(m["a"])(pi, ui, di, !1, null, null, null),
      gi = fi.exports;
      f()(fi, {
        VContainer: at["a"],
        VFlex: st["a"],
        VProgressLinear: it["a"]
      });
      var hi = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("v-flex", {
          attrs: {
            xs12: "",
            sm10: "",
            "offset-sm1": "",
            md8: "",
            "offset-md2": "",
            lg6: "",
            "offset-lg3": ""
          }
        },
        ["" !== t.alertType ? a("Alert", {
          attrs: {
            atype: t.alertType,
            message: t.message,
            visibility: t.visibility
          }
        }) : t._e(), t.progressbar ? a("v-progress-linear", {
          attrs: {
            indeterminate: !0
          }
        }) : t._e(), t.content ? a("v-flex", {
          attrs: {
            xs12: "",
            sm10: "",
            "offset-sm1": "",
            md10: "",
            "offset-md1": ""
          }
        },
        [a("v-container", {
          staticClass: "semi-transparent-5-bg",
          attrs: {
            fluid: ""
          }
        },
        ["Image" == t.content.type ? a("img", {
          attrs: {
            src: t.content.value,
            width: "100%;",
            height: "auto"
          }
        }) : a("div", {
          staticStyle: {
            overflow: "auto",
            margin: "auto"
          },
          domProps: {
            innerHTML: t._s(t.content.value)
          }
        })])], 1) : t._e()], 1)
      },
      vi = [],
      _i = {
        data: function() {
          return {
            progressbar: !1,
            alertType: "",
            message: "",
            visibility: "",
            content: ""
          }
        },
        components: {
          Alert: H
        },
        methods: {
          getHow2Play: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  return this.progressbar = !0,
                  t.next = 3,
                  V.getPage({
                    name: "t1_frontend_page_how2play"
                  });
                case 3:
                  e = t.sent,
                  e && "success" in e && !0 === e.success ? this.content = e.data: (this.visibility = !0, this.message = e.message, this.alertType = "error"),
                  this.progressbar = !1;
                case 6:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } ()
        },
        mounted: function() {
          var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
            return regeneratorRuntime.wrap(function(t) {
              while (1) switch (t.prev = t.next) {
              case 0:
                return t.next = 2,
                this.getHow2Play();
              case 2:
              case "end":
                return t.stop()
              }
            },
            t, this)
          }));
          function e() {
            return t.apply(this, arguments)
          }
          return e
        } ()
      },
      bi = _i,
      wi = Object(m["a"])(bi, hi, vi, !1, null, null, null),
      ki = wi.exports;
      f()(wi, {
        VContainer: at["a"],
        VFlex: st["a"],
        VProgressLinear: it["a"]
      });
      var yi = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("iframe", {
          staticStyle: {
            border: "0"
          },
          attrs: {
            name: "report",
            height: "100%",
            width: "100%",
            src: "//wbcp.office4u.xyz/download"
          }
        })
      },
      xi = [],
      Ai = {
        name: "Download-Link",
        data: function() {
          return {}
        }
      },
      Di = Ai,
      Ci = Object(m["a"])(Di, yi, xi, !1, null, null, null),
      Ti = Ci.exports,
      Pi = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("div", {
          staticStyle: {
            height: "100%",
            width: "100%"
          }
        },
        [null !== t.url ? a("iframe", {
          staticStyle: {
            border: "0"
          },
          attrs: {
            name: "game",
            height: "100%",
            width: "100%",
            src: t.url
          }
        }) : a("Alert", {
          attrs: {
            atype: t.alertType,
            message: t.alertMessage,
            visibility: t.visibility
          }
        })], 1)
      },
      Vi = [],
      ji = {
        name: "Mini-Geme",
        data: function() {
          return {
            url: null,
            alertType: "",
            alertMessage: "",
            visibility: !1
          }
        },
        components: {
          Alert: H
        },
        mounted: function() {
          var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
            var e;
            return regeneratorRuntime.wrap(function(t) {
              while (1) switch (t.prev = t.next) {
              case 0:
                return t.next = 2,
                V.getMemberMiniGameUrl({
                  access_token: this.$store.getters.user_token
                });
              case 2:
                e = t.sent,
                e.success ? this.url = e.data: (this.visibility = !0, this.alertMessage = e.message, this.alertType = "error");
              case 4:
              case "end":
                return t.stop()
              }
            },
            t, this)
          }));
          function e() {
            return t.apply(this, arguments)
          }
          return e
        } ()
      },
      Si = ji,
      Ii = Object(m["a"])(Si, Pi, Vi, !1, null, null, null),
      Ri = Ii.exports,
      Li = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("v-flex", {
          attrs: {
            xs12: "",
            sm10: "",
            "offset-sm1": "",
            md8: "",
            "offset-md2": "",
            lg6: "",
            "offset-lg3": ""
          }
        },
        [a("v-container", {
          attrs: {
            "text-xs-center": ""
          }
        },
        [a("v-chip", {
          staticClass: "ma-2",
          attrs: {
            color: "primary",
            "text-color": "white"
          }
        },
        [t._v("\n            " + t._s(t.$t("miniGame.token")) + " :  " + t._s(t.member.token) + "\n        ")]), a("v-chip", {
          staticClass: "ma-2",
          attrs: {
            color: "green",
            "text-color": "white"
          }
        },
        [t._v("\n            " + t._s(t.$t("miniGame.credit")) + " : " + t._s(t.member.credit) + "\n        ")]), a("v-container", {
          attrs: {
            "grid-list-md": ""
          }
        },
        [a("v-layout", {
          attrs: {
            row: "",
            wrap: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs6: "",
            sm6: "",
            md6: ""
          }
        },
        [a("v-menu", {
          attrs: {
            "close-on-content-click": !1,
            "nudge-right": 40,
            lazy: "",
            transition: "scale-transition",
            "offset-y": "",
            "full-width": "",
            "min-width": "290px"
          },
          scopedSlots: t._u([{
            key: "activator",
            fn: function(e) {
              var s = e.on;
              return [a("v-text-field", t._g({
                attrs: {
                  label: t.$t("history.date_from"),
                  "prepend-icon": "event",
                  readonly: ""
                },
                model: {
                  value: t.filterData.fromDate,
                  callback: function(e) {
                    t.$set(t.filterData, "fromDate", e)
                  },
                  expression: "filterData.fromDate"
                }
              },
              s))]
            }
          }])
        },
        [a("v-date-picker", {
          model: {
            value: t.filterData.fromDate,
            callback: function(e) {
              t.$set(t.filterData, "fromDate", e)
            },
            expression: "filterData.fromDate"
          }
        })], 1)], 1), a("v-flex", {
          attrs: {
            xs6: "",
            lg6: ""
          }
        },
        [a("v-menu", {
          attrs: {
            "close-on-content-click": !1,
            "nudge-right": 40,
            lazy: "",
            transition: "scale-transition",
            "offset-y": "",
            "full-width": "",
            "min-width": "290px"
          },
          scopedSlots: t._u([{
            key: "activator",
            fn: function(e) {
              var s = e.on;
              return [a("v-text-field", t._g({
                attrs: {
                  label: t.$t("history.date_to"),
                  "prepend-icon": "event",
                  readonly: ""
                },
                model: {
                  value: t.filterData.toDate,
                  callback: function(e) {
                    t.$set(t.filterData, "toDate", e)
                  },
                  expression: "filterData.toDate"
                }
              },
              s))]
            }
          }])
        },
        [a("v-date-picker", {
          model: {
            value: t.filterData.toDate,
            callback: function(e) {
              t.$set(t.filterData, "toDate", e)
            },
            expression: "filterData.toDate"
          }
        })], 1)], 1)], 1), a("v-flex", {
          attrs: {
            xs12: "",
            lg: ""
          }
        },
        [a("v-btn", {
          attrs: {
            small: "",
            color: "success"
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.getMiniGamePrizesList(e)
            }
          }
        },
        [t._v("\n                    " + t._s(t.$t("shared.search")) + "\n                ")]), a("v-btn", {
          attrs: {
            small: "",
            color: "error"
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.resetDate(e)
            }
          }
        },
        [t._v("\n                    " + t._s(t.$t("shared.reset")) + "\n                ")])], 1), a("TicketDialog", {
          attrs: {
            dialog: t.showTicketDetailDialog,
            detail: t.dialogTicketDetail
          },
          on: {
            "close-dialog": t.closeTicketDetail
          }
        }), a("BonusDialog", {
          attrs: {
            dialog: t.showBonusFormDialog,
            selectedPrize: t.dialogBonusForm
          },
          on: {
            "close-dialog": t.closeBonusForm,
            "save-dialog": t.showSnackbar
          }
        }), a("MiniGamePrizeDialog", {
          attrs: {
            dialog: t.showPrizeDetailDialog,
            detail: t.dialogPrizeDetail
          },
          on: {
            "close-dialog": t.closePrizeDetail
          }
        })], 1), a("v-divider"), null != t.rows ? a("v-data-table", {
          staticClass: "elevation-1 mt-2",
          attrs: {
            headers: t.headers,
            items: t.rows,
            pagination: t.pagination,
            "total-items": t.pagination.totalItems,
            "rows-per-page-items": t.rowsPerPageItems,
            "rows-per-page-text": t.rowsPerPageItemsText,
            loading: t.isLoading
          },
          on: {
            "update:pagination": function(e) {
              t.pagination = e
            }
          },
          scopedSlots: t._u([{
            key: "items",
            fn: function(e) {
              return [a("tr", [a("td", {
                staticClass: "text-xs-center"
              },
              [t._v(t._s(e.item.id))]), a("td", {
                staticClass: "text-xs-center"
              },
              [t._v(t._s(e.item.gameName))]), a("td", {
                staticClass: "text-xs-center"
              },
              [t._v(t._s(e.item.name))]), a("td", {
                staticClass: "text-xs-right"
              },
              [t._v(t._s(e.item.amount.toFixed(2)))]), a("td", {
                staticClass: "text-xs-center"
              },
              ["Claim" == e.item.status ? a("span", {
                staticClass: "text-success"
              },
              [t._v("\n\n                            " + t._s(t.$t("miniGame.claim").toUpperCase()) + "\n\n                        ")]) : "Unclaim" == e.item.status ? a("span", ["Credit" == e.item.category ? a("span", [e.item.ticket_id ? a("span", [t._v("\n\n                                    " + t._s(t.$t("history.processing")) + "\n\n                                ")]) : e.item.claimable_days > 0 ? a("span", [a("v-btn", {
                attrs: {
                  tile: "",
                  outlined: "",
                  small: "",
                  color: "primary"
                },
                on: {
                  click: function(a) {
                    return t.showBonusForm(e.item)
                  }
                }
              },
              [a("v-icon", {
                attrs: {
                  small: "",
                  left: ""
                }
              },
              [t._v("fas fa-gift")]), t._v(" " + t._s(t.$t("miniGame.unclaim").toUpperCase()) + "\n\n                                    ")], 1)], 1) : a("span", {
                staticClass: "text-danger"
              },
              [t._v("\n\n                                    " + t._s(t.$t("miniGame.unclaim").toUpperCase()) + "\n\n                                ")])]) : a("span", {
                staticClass: "text-danger"
              },
              [t._v("\n\n                                " + t._s(t.$t("miniGame.unclaim").toUpperCase()) + "\n\n                            ")])]) : a("span")]), a("td", {
                staticClass: "text-xs-center",
                domProps: {
                  innerHTML: t._s(t.getClaimableText(e.item))
                }
              }), a("td", {
                staticClass: "text-xs-center"
              },
              [a("v-btn", {
                attrs: {
                  small: "",
                  outline: ""
                },
                on: {
                  click: function(a) {
                    return t.showPrizeDetail(e.item)
                  }
                }
              },
              [a("span", [t._v(t._s(t.$t("history.detail")))])]), e.item.ticket_id ? a("v-btn", {
                attrs: {
                  small: "",
                  outline: ""
                },
                on: {
                  click: function(a) {
                    return t.showTicketDetail(e.item)
                  }
                }
              },
              [a("span", [t._v(t._s(t.$t("history.bonus")))])]) : t._e()], 1)])]
            }
          }], null, !1, 2975144153)
        },
        [a("v-progress-linear", {
          attrs: {
            color: "blue",
            indeterminate: !0
          },
          scopedSlots: t._u([{
            key: "progress",
            fn: function() {},
            proxy: !0
          }], null, !1, 63074868)
        })], 1) : t._e()], 1), a("Snackbar", {
          attrs: {
            show: t.snackbar,
            color: t.color,
            text: t.message,
            icon: "done_all",
            timeout: 2e3
          }
        })], 1)
      },
      $i = [],
      zi = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return t.data.selectedPrize ? a("v-dialog", {
          staticClass: "semi-transparent-5-bg",
          attrs: {
            "max-width": "300"
          },
          model: {
            value: t.showDialog,
            callback: function(e) {
              t.showDialog = e
            },
            expression: "showDialog"
          }
        },
        [a("Alert", {
          attrs: {
            atype: t.alertType,
            message: t.alertMessage,
            visibility: t.visibility
          }
        }), a("v-card", {
          staticClass: "semi-transparent-9-bg"
        },
        [a("v-card-title", {
          staticStyle: {
            "border-bottom": "5px solid #3944bb"
          }
        },
        [a("img", {
          staticStyle: {
            float: "left",
            width: "15%",
            "max-width": "50px",
            "margin-right": "15px"
          },
          attrs: {
            src: "//assets.office4u.xyz/photos/BO-Demo/prize.svg"
          }
        }), a("div", {
          staticClass: "withdraw-form-title"
        },
        [a("span", [t._v(t._s(t.$t("history.bonus").toUpperCase()))])])]), a("v-card-text", {
          staticClass: "v-card__text"
        },
        [a("v-form", {
          ref: "form",
          attrs: {
            "lazy-validation": ""
          },
          model: {
            value: t.valid,
            callback: function(e) {
              t.valid = e
            },
            expression: "valid"
          }
        },
        [a("v-layout", {
          attrs: {
            wrap: ""
          }
        },
        [a("v-layout", {
          staticClass: "margin-5-top-bottom",
          attrs: {
            row: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs4: ""
          }
        },
        [a("v-subheader", {
          staticClass: "inputlabel"
        },
        [t._v(t._s(t.$t("reusable.product")))])], 1), a("v-flex", {
          staticClass: "margin-16-right",
          attrs: {
            xs8: ""
          }
        },
        [a("v-select", {
          attrs: {
            items: t.productList,
            "item-value": "id",
            rules: t.productRules
          },
          scopedSlots: t._u([{
            key: "selection",
            fn: function(e) {
              return [a("img", {
                staticStyle: {
                  "margin-right": "5px"
                },
                attrs: {
                  src: e.item.logo,
                  width: "45px;"
                }
              }), t._v("\n\n                                      " + t._s(e.item.name) + "\n\n                                  ")]
            }
          },
          {
            key: "item",
            fn: function(e) {
              return [a("img", {
                staticStyle: {
                  "margin-right": "5px"
                },
                attrs: {
                  src: e.item.logo,
                  width: "45px;"
                }
              }), t._v("\n\n                                      " + t._s(e.item.name) + "\n\n                                  ")]
            }
          }], null, !1, 730082236),
          model: {
            value: t.data.selectedProduct,
            callback: function(e) {
              t.$set(t.data, "selectedProduct", e)
            },
            expression: "data.selectedProduct"
          }
        })], 1)], 1), a("div", {
          staticStyle: {
            "margin-bottom": "1em"
          }
        }), a("v-layout", {
          staticClass: "margin-5-top-bottom",
          attrs: {
            row: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs4: ""
          }
        },
        [a("v-subheader", {
          staticClass: "inputlabel"
        },
        [t._v(t._s(t.$t("miniGame.amount")))])], 1), a("v-flex", {
          staticClass: "margin-16-right",
          attrs: {
            xs8: ""
          }
        },
        [a("v-text-field", {
          attrs: {
            value: t.data.selectedPrize.amount,
            disabled: ""
          }
        })], 1)], 1), a("div", {
          staticStyle: {
            "margin-bottom": "1em"
          }
        }), a("v-layout", {
          staticClass: "margin-5-top-bottom",
          attrs: {
            row: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs4: ""
          }
        },
        [a("v-subheader", {
          staticClass: "inputlabel"
        },
        [t._v(t._s(t.$t("miniGame.id")))])], 1), a("v-flex", {
          staticClass: "margin-16-right",
          attrs: {
            xs8: ""
          }
        },
        [a("v-text-field", {
          attrs: {
            value: t.data.selectedPrize.id,
            disabled: ""
          }
        })], 1)], 1), a("div", {
          staticStyle: {
            "margin-bottom": "1em"
          }
        }), a("v-layout", {
          staticClass: "margin-5-top-bottom",
          attrs: {
            row: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs4: ""
          }
        },
        [a("v-subheader", {
          staticClass: "inputlabel"
        },
        [t._v(t._s(t.$t("miniGame.game")))])], 1), a("v-flex", {
          staticClass: "margin-16-right",
          attrs: {
            xs8: ""
          }
        },
        [a("v-text-field", {
          attrs: {
            value: t.data.selectedPrize.gameName,
            disabled: ""
          }
        })], 1)], 1), a("div", {
          staticStyle: {
            "margin-bottom": "1em"
          }
        }), a("v-layout", {
          staticClass: "margin-5-top-bottom",
          attrs: {
            row: ""
          }
        },
        [a("v-flex", {
          attrs: {
            xs4: ""
          }
        },
        [a("v-subheader", {
          staticClass: "inputlabel"
        },
        [t._v(t._s(t.$t("miniGame.prizeName")))])], 1), a("v-flex", {
          staticClass: "margin-16-right",
          attrs: {
            xs8: ""
          }
        },
        [a("v-text-field", {
          attrs: {
            value: t.data.selectedPrize.name,
            disabled: ""
          }
        })], 1)], 1)], 1)], 1)], 1), a("v-card-actions", {
          staticClass: "v-card__actions font-size"
        },
        [a("v-btn", {
          attrs: {
            color: "blue darken-1",
            disabled: !t.valid,
            flat: "",
            small: ""
          },
          on: {
            click: function(e) {
              return e.preventDefault(),
              t.save(e)
            }
          }
        },
        [t._v(t._s(t.$t("shared.save")))]), a("v-btn", {
          attrs: {
            color: "blue darken-1",
            flat: "",
            small: ""
          },
          on: {
            click: function(e) {
              t.showDialog = !1
            }
          }
        },
        [t._v(t._s(t.$t("reusable.close")))]), a("v-spacer")], 1)], 1)], 1) : t._e()
      },
      Mi = [],
      Fi = {
        props: ["dialog", "selectedPrize"],
        data: function() {
          return {
            valid: !0,
            showDialog: this.dialog,
            productList: [],
            data: {
              selectedPrize: null,
              selectedProduct: null
            },
            alertType: "error",
            alertMessage: "",
            visibility: !1
          }
        },
        components: {
          Alert: H
        },
        mounted: function() {
          this.getProducts()
        },
        methods: {
          save: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e, a, s, n;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  if (!this.$refs.form.validate()) {
                    t.next = 8;
                    break
                  }
                  return e = {
                    access_token: this.$store.getters.user_token,
                    product_to: this.data.selectedProduct,
                    prize_log_id: this.data.selectedPrize.id,
                    bonus_amount: this.data.selectedPrize.amount
                  },
                  t.next = 4,
                  V.postBonus(e);
                case 4:
                  if (a = t.sent, a && "success" in a && !0 === a.success) this.showDialog = !this.showDialog,
                  this.$emit("save-dialog", {
                    dialog: this.showDialog,
                    message: a.message
                  });
                  else if ("token invalid" == a.message) this.$store.dispatch("logout", a.data),
                  this.$router.push({
                    name: "login"
                  });
                  else if ("Ticket Detail Invalid" == a.message) {
                    for (n in s = a.message, a.data) s += "<br>" + a.data[n];
                    this.showValidateMessage(s)
                  } else "Submit Ticket Fail" == a.message ? this.showValidateMessage(a.data) : this.showValidateMessage(a.message);
                  t.next = 9;
                  break;
                case 8:
                  this.showValidateMessage(this.$t("deposit.not_completed_form"));
                case 9:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } (),
          showValidateMessage: function(t) {
            this.visibility = !0,
            this.alertMessage = t;
            var e = this;
            setTimeout(function() {
              e.visibility = !1,
              e.alertMessage = ""
            },
            2e3)
          },
          getProducts: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e, a, s;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2,
                  V.getProductsMember({
                    access_token: this.$store.getters.user_token
                  });
                case 2:
                  e = t.sent,
                  e && "success" in e && !0 === e.success ? (a = e.data, s = this, this.productList = a.map(function(t) {
                    return 1 == t.id && (t.logo = s.getImgUrl("wallet")),
                    1 != t.id && "" == t.logo && (t.logo = s.getImgUrl("coming-soon")),
                    t
                  })) : (this.visibility = !0, this.alertMessage = e.message, "token invalid" == e.message && (this.$store.dispatch("logout", e.data), this.$router.push({
                    name: "login"
                  })));
                case 4:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } (),
          getImgUrl: function(t) {
            var e = a("9142");
            return e("./" + t + ".png")
          }
        },
        computed: {
          productRules: function() {
            var t = this;
            return [function(e) {
              return !! e || t.$t("withdraw.product_validation_rule")
            }]
          }
        },
        watch: {
          dialog: function(t) {
            return this.showDialog = t
          },
          showDialog: function(t) {
            0 == t && this.$emit("close-dialog")
          },
          selectedPrize: function(t) {
            this.data.selectedPrize = t
          },
          prizeLogAmount: function(t) {
            this.data.prizeLogAmount = t
          }
        }
      },
      Ni = Fi,
      Gi = (a("6215"), Object(m["a"])(Ni, zi, Mi, !1, null, "6c3886a6", null)),
      Bi = Gi.exports;
      f()(Gi, {
        VBtn: g["a"],
        VCard: et["a"],
        VCardActions: Dt["a"],
        VCardText: Dt["b"],
        VCardTitle: Ct["a"],
        VDialog: re["a"],
        VFlex: st["a"],
        VForm: nt["a"],
        VLayout: Tt["a"],
        VSelect: Da["a"],
        VSpacer: le["a"],
        VSubheader: Pt["a"],
        VTextField: rt["a"]
      });
      var Ei = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return 0 !== Object.keys(t.detailData).length && t.detailData.constructor !== Object ? a("v-dialog", {
          staticClass: "semi-transparent-5-bg",
          attrs: {
            "max-width": "300"
          },
          model: {
            value: t.showDialog,
            callback: function(e) {
              t.showDialog = e
            },
            expression: "showDialog"
          }
        },
        [a("v-card", {
          staticClass: "semi-transparent-7-bg"
        },
        [a("v-list", {
          staticClass: "semi-transparent-7-bg"
        },
        [a("v-list-tile", [a("v-list-tile-avatar", [a("v-icon", {
          staticClass: "lighten-1 white--text"
        },
        [t._v("far fa-id-badge")])], 1), a("v-list-tile-content", [a("v-list-tile-sub-title", [t._v(" " + t._s(t.$t("miniGame.id")) + " ")]), a("v-list-tile-title", [t._v(t._s(t.detailData[0].id))])], 1)], 1), a("v-divider", {
          attrs: {
            ":inset": !0
          }
        }), a("v-list-tile", [a("v-list-tile-avatar", [a("v-icon", {
          staticClass: "lighten-1 white--text"
        },
        [t._v("fas fa-dice")])], 1), a("v-list-tile-content", [a("v-list-tile-sub-title", [t._v(" " + t._s(t.$t("miniGame.game")) + " ")]), a("v-list-tile-title", [t._v(t._s(t.detailData[0].gameName))])], 1)], 1), a("v-divider", {
          attrs: {
            inset: !0
          }
        }), a("v-list-tile", [a("v-list-tile-avatar", [a("v-icon", {
          staticClass: "lighten-1 white--text",
          attrs: {
            xs: ""
          }
        },
        [t._v("fa fa-trophy")])], 1), a("v-list-tile-content", [a("v-list-tile-sub-title", [t._v(" " + t._s(t.$t("miniGame.prizeName")) + " ")]), a("v-list-tile-title", [t._v(t._s(t.detailData[0].name))])], 1)], 1), a("v-divider", {
          attrs: {
            inset: !0
          }
        }), a("v-list-tile", [a("v-list-tile-avatar", [a("v-icon", {
          staticClass: "lighten-1 white--text",
          attrs: {
            xs: ""
          }
        },
        [t._v("far fa-list-alt")])], 1), a("v-list-tile-content", [a("v-list-tile-sub-title", [t._v(" " + t._s(t.$t("miniGame.category")))]), a("v-list-tile-title", [t._v(t._s(t.detailData[0].category))])], 1)], 1), a("v-list-tile", [a("v-list-tile-avatar", [a("v-icon", {
          staticClass: "lighten-1 white--text",
          attrs: {
            xs: ""
          }
        },
        [t._v("fas fa-dollar-sign")])], 1), a("v-list-tile-content", [a("v-list-tile-sub-title", [t._v(" " + t._s(t.$t("miniGame.amount")))]), a("v-list-tile-title", [t._v(t._s(t.detailData[0].amount))])], 1)], 1), a("v-divider", {
          attrs: {
            inset: !0
          }
        }), a("v-list-tile", [a("v-list-tile-avatar", [a("v-icon", {
          staticClass: "lighten-1 white--text",
          attrs: {
            xs: ""
          }
        },
        [t._v("fas fa-clipboard-check")])], 1), a("v-list-tile-content", [a("v-list-tile-sub-title", [t._v(" " + t._s(t.$t("miniGame.status")) + " ")]), a("v-list-tile-title", {
          domProps: {
            innerHTML: t._s(t.getStatusText(t.detailData[0]))
          }
        })], 1)], 1), a("v-divider", {
          attrs: {
            inset: !0
          }
        }), a("v-list-tile", [a("v-list-tile-avatar", [a("v-icon", {
          staticClass: "lighten-1 white--text",
          attrs: {
            xs: ""
          }
        },
        [t._v("fas fa-calendar")])], 1), a("v-list-tile-content", [a("v-list-tile-sub-title", [t._v(" " + t._s(t.$t("miniGame.created_at")) + " ")]), a("v-list-tile-title", [t._v(t._s(t.detailData[0].created_at))])], 1)], 1), a("v-divider", {
          attrs: {
            inset: !0
          }
        }), a("v-list-tile", [a("v-list-tile-avatar", [a("v-icon", {
          staticClass: "lighten-1 white--text",
          attrs: {
            xs: ""
          }
        },
        [t._v("fas fa-calendar-minus")])], 1), a("v-list-tile-content", [a("v-list-tile-sub-title", [t._v(" " + t._s(t.$t("miniGame.expiry_date")) + " ")]), a("v-list-tile-title", [t._v(t._s("" == t.detailData[0].expiry_date ? "-": t.detailData[0].expiry_date))])], 1)], 1), a("v-divider", {
          attrs: {
            inset: !0
          }
        }), a("v-list-tile", [a("v-list-tile-avatar", [a("v-icon", {
          staticClass: "lighten-1 white--text",
          attrs: {
            xs: ""
          }
        },
        [t._v("fas fa-clock")])], 1), a("v-list-tile-content", [a("v-list-tile-sub-title", [t._v(" " + t._s(t.$t("miniGame.claimable_days")) + " ")]), a("v-list-tile-title", {
          domProps: {
            innerHTML: t._s(t.getClaimableText(t.detailData[0]))
          }
        })], 1)], 1)], 1), a("v-divider"), a("v-card-actions", {
          staticClass: "semi-transparent-7-bg"
        },
        [a("v-btn", {
          attrs: {
            color: "green",
            flat: "flat"
          },
          on: {
            click: function(e) {
              t.showDialog = !1
            }
          }
        },
        [t._v(" " + t._s(t.$t("reusable.close")) + " ")]), a("v-spacer")], 1)], 1)], 1) : t._e()
      },
      Ui = [],
      Oi = {
        props: ["dialog", "detail"],
        data: function() {
          return {
            showDialog: this.dialog,
            detailData: this.detail
          }
        },
        methods: {
          getStatusText: function(t) {
            return "Unclaim" == t.status ? t.ticket_id ? this.$t("history.processing") : '<strong class="text-danger">' + this.$t("miniGame.unclaim") + "</strong>": "Claim" == t.status ? '<strong class="text-success">' + this.$t("miniGame.claim") + "</strong>": status
          },
          getClaimableText: function(t) {
            return "Claim" == t.status ? this.$t("miniGame.claim") : "" == t.claimable_days ? "-": t.claimable_days > 0 ? t.claimable_days: this.$t("miniGame.expired")
          }
        },
        watch: {
          dialog: function(t) {
            return this.showDialog = t
          },
          detail: function(t) {
            return this.detailData = t
          },
          showDialog: function(t) {
            0 == t && this.$emit("close-dialog")
          }
        }
      },
      Wi = Oi,
      Hi = (a("7783"), Object(m["a"])(Wi, Ei, Ui, !1, null, "597ee6b8", null)),
      Zi = Hi.exports;
      f()(Hi, {
        VBtn: g["a"],
        VCard: et["a"],
        VCardActions: Dt["a"],
        VDialog: re["a"],
        VDivider: oe["a"],
        VIcon: h["a"],
        VList: ge["a"],
        VListTile: Qt["a"],
        VListTileAvatar: he["a"],
        VListTileContent: Kt["a"],
        VListTileSubTitle: Kt["b"],
        VListTileTitle: Kt["c"],
        VSpacer: le["a"]
      });
      var Yi = {
        name: "MiniGamePrizes",
        components: {
          TicketDialog: Qa,
          BonusDialog: Bi,
          MiniGamePrizeDialog: Zi,
          Snackbar: b
        },
        data: function() {
          return {
            member: {
              token: 0,
              credit: 0
            },
            pagination: {
              rowsPerPage: 10,
              totalItems: 0,
              page: 1
            },
            rowsPerPageItems: [10],
            rowsPerPageItemsText: "10",
            rows: [],
            isLoading: !1,
            showTicketDetailDialog: !1,
            dialogTicketDetail: {},
            showBonusFormDialog: !1,
            dialogBonusForm: {},
            showPrizeDetailDialog: !1,
            dialogPrizeDetail: {},
            filterData: {
              category: "",
              status: "",
              name: "",
              fromDate: "",
              toDate: "",
              fromId: "",
              toId: ""
            },
            snackbar: !1,
            message: "",
            color: ""
          }
        },
        mounted: function() {
          this.getMiniGameProfile(),
          this.getMiniGamePrizesList()
        },
        methods: {
          showSnackbar: function(t) {
            this.message = t.message,
            "Submit Ticket Successfully" == this.message && (this.message = this.$t("deposit.submit_ticket_success"), this.getMiniGamePrizesList()),
            this.color = "green",
            this.showBonusFormDialog = t.dialog,
            this.snackbar = !0
          },
          getMiniGameProfile: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e, a;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  return e = {
                    access_token: this.$store.getters.user_token
                  },
                  t.next = 3,
                  V.getMemberMiniGameProfile(e);
                case 3:
                  a = t.sent,
                  a && "success" in a && !0 === a.success ? (this.member.token = a.data[0].token, this.member.credit = a.data[0].credit) : "token invalid" == a.message && (this.$store.dispatch("logout", a.data), this.$router.push({
                    name: "login"
                  }));
                case 5:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } (),
          getMiniGamePrizesList: function() {
            var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
              var e, a;
              return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                case 0:
                  return this.isLoading = !0,
                  e = {
                    access_token: this.$store.getters.user_token,
                    paginate: this.pagination.rowsPerPage,
                    page: this.pagination.page
                  },
                  this.filterData.fromDate && (e.startDate = this.filterData.fromDate + " 00:00:00"),
                  this.filterData.toDate && (e.endDate = this.filterData.toDate + " 23:59:59"),
                  this.filterData.fromId && (e.idFrom = this.filterData.fromId),
                  this.filterData.toId && (e.idTo = this.filterData.toId),
                  this.filterData.category && (e.category = this.filterData.category),
                  this.filterData.status && (e.status = this.filterData.status),
                  this.filterData.name && (e.name = this.filterData.name),
                  t.next = 11,
                  V.getMemberMiniGamePrizesList(e);
                case 11:
                  a = t.sent,
                  a && "success" in a && !0 === a.success ? (this.rows = a.data.prizeLogs, this.pagination.rowsPerPage = a.data.pagination.per_page, this.pagination.totalItems = a.data.pagination.total) : "token invalid" == a.message && (this.$store.dispatch("logout", a.data), this.$router.push({
                    name: "login"
                  })),
                  this.isLoading = !1;
                case 14:
                case "end":
                  return t.stop()
                }
              },
              t, this)
            }));
            function e() {
              return t.apply(this, arguments)
            }
            return e
          } (),
          resetDate: function() {
            this.filterData.toDate = "",
            this.filterData.fromDate = ""
          },
          showTicketDetail: function(t) {
            t.ticket_id && (this.showTicketDetailDialog = !0, this.dialogTicketDetail = [t.ticket])
          },
          closeTicketDetail: function() {
            this.showTicketDetailDialog = !1
          },
          showPrizeDetail: function(t) {
            this.showPrizeDetailDialog = !0,
            this.dialogPrizeDetail = [t]
          },
          closePrizeDetail: function() {
            this.showPrizeDetailDialog = !1
          },
          showBonusForm: function(t) {
            this.showBonusFormDialog = !0,
            this.dialogBonusForm = t
          },
          closeBonusForm: function() {
            this.showBonusFormDialog = !1
          },
          getStatusText: function(t) {
            return "Unclaim" == t ? this.$t("miniGame.unclaim") : "Claim" == t ? this.$t("miniGame.claim") : t
          },
          getClaimableText: function(t) {
            return "Claim" == t.status ? this.$t("miniGame.claim") : "" == t.claimable_days ? "-": t.claimable_days > 0 ? t.claimable_days: this.$t("miniGame.expired")
          }
        },
        computed: {
          headers: function() {
            return [{
              text: this.$t("miniGame.id"),
              align: "center",
              sortable: !1,
              value: "id"
            },
            {
              text: this.$t("miniGame.game"),
              align: "center",
              sortable: !1,
              value: "gameName"
            },
            {
              text: this.$t("miniGame.prizeName"),
              align: "center",
              sortable: !1,
              value: "name"
            },
            {
              text: this.$t("miniGame.amount"),
              align: "right",
              sortable: !1,
              value: "amount"
            },
            {
              text: this.$t("miniGame.status"),
              align: "center",
              sortable: !1,
              value: "status",
              width: "200px"
            },
            {
              text: this.$t("miniGame.claimable_days"),
              align: "center",
              sortable: !1,
              value: "claimable_days",
              width: "200px"
            },
            {
              text: this.$t("history.detail"),
              align: "center",
              sortable: !1,
              value: "detail"
            }]
          },
          filterCategory: function() {
            return [{
              name: this.$t("miniGame.all"),
              value: ""
            },
            {
              name: this.$t("miniGame.credit"),
              value: "Credit"
            },
            {
              name: this.$t("miniGame.cash"),
              value: "Cash"
            },
            {
              name: this.$t("miniGame.gift"),
              value: "Gift"
            }]
          },
          filterStatus: function() {
            return [{
              name: this.$t("miniGame.all"),
              value: ""
            },
            {
              name: this.$t("miniGame.unclaim"),
              value: "Unclaim"
            },
            {
              name: this.$t("miniGame.claim"),
              value: "Claim"
            }]
          }
        },
        watch: {
          pagination: {
            handler: function() {
              var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function(t) {
                  while (1) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2,
                    this.getMiniGamePrizesList();
                  case 2:
                  case "end":
                    return t.stop()
                  }
                },
                t, this)
              }));
              function e() {
                return t.apply(this, arguments)
              }
              return e
            } (),
            deep: !0
          },
          message: function(t) {
            if (t) {
              var e = this;
              setTimeout(function() {
                e.snackbar = !1,
                e.message = ""
              },
              2e3)
            }
          }
        }
      },
      qi = Yi,
      Ji = (a("7ee7"), a("cc20")),
      Qi = Object(m["a"])(qi, Li, $i, !1, null, "79605d8a", null),
      Xi = Qi.exports;
      f()(Qi, {
        VBtn: g["a"],
        VChip: Ji["a"],
        VContainer: at["a"],
        VDataTable: ls["a"],
        VDatePicker: cs["a"],
        VDivider: oe["a"],
        VFlex: st["a"],
        VIcon: h["a"],
        VLayout: Tt["a"],
        VMenu: us["a"],
        VProgressLinear: it["a"],
        VTextField: rt["a"]
      });
      var Ki = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("v-flex", {
          attrs: {
            xs12: "",
            sm6: "",
            "offset-sm3": ""
          }
        },
        [a("v-card", {
          staticClass: "semi-transparent-7-bg"
        },
        [a("v-img", {
          attrs: {
            src: t.getImgUrl("404error"),
            "aspect-ratio": "2.75"
          }
        }), a("v-card-title", {
          attrs: {
            "primary-title": ""
          }
        },
        [a("div", [a("h3", {
          staticClass: "headline mb-0"
        },
        [t._v("404 Not Found")])])]), a("v-card-actions", [a("v-btn", {
          attrs: {
            flat: "",
            color: "orange"
          }
        },
        [t._v("Home")])], 1)], 1)], 1)
      },
      tr = [],
      er = {
        data: function() {
          return {}
        },
        methods: {
          getImgUrl: function(t) {
            var e = a("9142");
            return e("./" + t + ".png")
          }
        }
      },
      ar = er,
      sr = Object(m["a"])(ar, Ki, tr, !1, null, null, null),
      nr = sr.exports;
      f()(sr, {
        VBtn: g["a"],
        VCard: et["a"],
        VCardActions: Dt["a"],
        VCardTitle: Ct["a"],
        VFlex: st["a"],
        VImg: $e["a"]
      });
      var ir = function() {
        var t = this,
        e = t.$createElement,
        a = t._self._c || e;
        return a("v-flex", {
          attrs: {
            xs12: "",
            sm6: "",
            "offset-sm3": "",
            "pt-4": ""
          }
        },
        [a("v-img", {
          attrs: {
            src: "//assets.office4u.xyz/common_asset/coming-soon.png"
          }
        })], 1)
      },
      rr = [],
      or = {
        data: function() {
          return {}
        }
      },
      lr = or,
      cr = Object(m["a"])(lr, ir, rr, !1, null, "af2a77fc", null),
      ur = cr.exports;
      f()(cr, {
        VFlex: st["a"],
        VImg: $e["a"]
      });
      var dr = a("2f62"),
      mr = a("bfa9"),
      pr = new mr["a"]({
        storage: window.localStorage
      });
      s["default"].use(dr["a"]);
      var fr = new dr["a"].Store({
        state: {
          user_token: "",
          user_fullname: "",
          user_username: "",
          system_name: "Webot",
          system_logo: "//assets.office4u.xyz/common_asset/webot_logo.png",
          system_contactus: null,
          registration_flag: !1,
          login_flag: !1,
          browser_identify: "",
          lang_flag: window.defaultLanguage,
          currency: "",
          services: {
            mini_game_service: 0
          }
        },
        getters: {
          user_token: function(t) {
            return t.user_token
          },
          user_username: function(t) {
            return t.user_username
          },
          user_fullname: function(t) {
            return t.user_fullname
          },
          system_name: function(t) {
            return t.system_name
          },
          system_logo: function(t) {
            return t.system_logo
          },
          system_contactus: function(t) {
            return t.system_contactus
          },
          registration_flag: function(t) {
            return t.registration_flag
          },
          login_flag: function(t) {
            return t.login_flag
          },
          lang_flag: function(t) {
            return t.lang_flag
          },
          browser_identity: function(t) {
            return t.browser_identify
          },
          currency: function(t) {
            return t.currency
          },
          services: function(t) {
            return t.services
          }
        },
        mutations: {
          loginUser: function(t, e) {
            t.user_token = e.access_token,
            t.user_fullname = e.fullname,
            t.user_username = e.username
          },
          logoutUser: function(t) {
            t.user_token = "",
            t.user_fullname = "",
            t.user_username = ""
          },
          setSystemLogo: function(t, e) {
            t.system_logo = e
          },
          setSystemContactUs: function(t, e) {
            t.system_contactus = e
          },
          setSystemName: function(t, e) {
            t.system_name = e
          },
          toggleRegistrationFlag: function(t, e) {
            t.registration_flag = e
          },
          toggleLoginFlag: function(t, e) {
            t.login_flag = e
          },
          toggleLangFlag: function(t, e) {
            t.lang_flag = e
          },
          setSystemToken: function(t, e) {
            t.user_token = e
          },
          setSystemMemberInfo: function(t, e) {
            t.user_fullname = e.fullname,
            t.user_username = e.username
          },
          setBrowserIdentity: function(t, e) {
            t.browser_identify = e
          },
          setCurrency: function(t, e) {
            t.currency = e
          },
          setServices: function(t, e) {
            t.services = e
          }
        },
        actions: {
          toggleLogin: function(t, e) {
            var a = t.commit;
            a("toggleLoginFlag", e)
          },
          login: function(t, e) {
            var a = t.commit;
            a("loginUser", e)
          },
          logout: function(t) {
            var e = t.commit;
            e("logoutUser")
          },
          setLogo: function(t, e) {
            var a = t.commit;
            a("setSystemLogo", e)
          },
          setContactUs: function(t, e) {
            var a = t.commit;
            a("setSystemContactUs", e)
          },
          setCompanyName: function(t, e) {
            var a = t.commit;
            a("setSystemName", e)
          },
          setLanguage: function(t, e) {
            var a = t.commit;
            a("toggleLangFlag", e)
          },
          setToken: function(t, e) {
            var a = t.commit;
            a("setSystemToken", e)
          },
          setMemberInfo: function(t, e) {
            var a = t.commit;
            a("setSystemMemberInfo", e)
          },
          setBrowserIdentify: function(t, e) {
            var a = t.commit;
            a("setBrowserIdentity", e)
          },
          setSystemCurrency: function(t, e) {
            var a = t.commit;
            a("setCurrency", e)
          },
          setAvailableServices: function(t, e) {
            var a = t.commit;
            a("setServices", e)
          }
        },
        plugins: [pr.plugin]
      }),
      gr = [{
        path: "/",
        name: "home",
        alias: "/home",
        components: {
        default:
          ma,
          headertop: ye,
          footer: Pe
        },
        meta: {
          keepAlive: !0
        }
      },
      {
        path: "/login",
        name: "login",
        components: {
        default:
          lt,
          logo: X,
          headertop: ye,
          footer: Pe
        },
        meta: {
          keepAlive: !1
        }
      },
      {
        path: "/register",
        name: "Register",
        components: {
        default:
          ft,
          logo: X,
          headertop: ye,
          footer: Pe
        },
        meta: {
          keepAlive: !1
        }
      },
      {
        path: "/forgotpassword",
        name: "Forgot Password",
        components: {
        default:
          wt,
          logo: X,
          headertop: ye,
          footer: Pe
        },
        meta: {
          keepAlive: !1
        }
      },
      {
        path: "/passwordchange",
        name: "Change Password",
        components: {
        default:
          jt,
          headertop: ye,
          footer: Pe
        },
        meta: {
          keepAlive: !1
        }
      },
      {
        path: "/passwordreset",
        name: "Password Reset",
        components: {
        default:
          jt,
          headertop: ye,
          logo: X,
          footer: Pe
        },
        meta: {
          keepAlive: !1
        }
      },
      {
        path: "/DepositTicket",
        name: "History / Deposit",
        components: {
        default:
          ms,
          headertop: ye,
          footer: Pe
        },
        meta: {
          keepAlive: !1
        }
      },
      {
        path: "/WithdrawTicket",
        name: "History / Withdraw",
        components: {
        default:
          _s,
          headertop: ye,
          footer: Pe
        },
        meta: {
          keepAlive: !1
        }
      },
      {
        path: "/TransferTicket",
        name: "History / Transfer",
        components: {
        default:
          As,
          headertop: ye,
          footer: Pe
        },
        meta: {
          keepAlive: !1
        }
      },
      {
        path: "/promotion",
        name: "Promotion",
        components: {
        default:
          zs,
          headertop: ye,
          footer: Pe
        },
        meta: {
          keepAlive: !0
        }
      },
      {
        path: "/affiliate",
        name: "Affiliate",
        components: {
        default:
          qs,
          headertop: ye,
          footer: Pe
        },
        meta: {
          keepAlive: !1
        }
      },
      {
        path: "/game",
        name: "Game",
        props: {
        default:
          !0,
          headertop: !1,
          footer: !1
        },
        components: {
        default:
          Un,
          headertop: ye,
          footer: Pe
        },
        meta: {
          keepAlive: !1
        }
      },
      {
        path: "/withdraw",
        name: "Withdraw",
        components: {
        default:
          _a,
          headertop: ye,
          footer: Pe
        },
        meta: {
          keepAlive: !1
        },
        children: [{
          path: "",
          name: "Banklist",
          components: {
          default:
            Sa,
            headertop: ye,
            footer: Pe
          }
        },
        {
          path: "addbank",
          name: "Addbank",
          components: {
          default:
            Ba,
            headertop: ye,
            footer: Pe
          }
        }]
      },
      {
        path: "/deposit",
        name: "Deposit",
        components: {
        default:
          Qn,
          headertop: ye,
          footer: Pe
        },
        meta: {
          keepAlive: !1
        }
      },
      {
        path: "/transfer",
        name: "Transfer",
        components: {
        default:
          si,
          headertop: ye,
          footer: Pe
        },
        meta: {
          keepAlive: !1
        }
      },
      {
        path: "/contact",
        name: "Contact",
        components: {
        default:
          ci,
          headertop: ye,
          footer: Pe
        },
        meta: {
          keepAlive: !1
        }
      },
      {
        path: "/tips",
        name: "Tips",
        components: {
        default:
          gi,
          headertop: ye,
          footer: Pe
        },
        meta: {
          keepAlive: !1
        }
      },
      {
        path: "/play",
        name: "Play",
        components: {
        default:
          ki,
          headertop: ye,
          footer: Pe
        },
        meta: {
          keepAlive: !1
        }
      },
      {
        path: "/download",
        name: "Download Link",
        components: {
        default:
          Ti,
          headertop: ye,
          footer: Pe
        },
        meta: {
          keepAlive: !1
        }
      },
      {
        path: "/miniGame",
        name: "Mini Game",
        components: {
        default:
          Ri,
          headertop: ye,
          footer: Pe
        },
        meta: {
          keepAlive: !1
        },
        beforeEnter: function(t, e, a) {
          fr.getters.services && 0 == fr.getters.services["mini_game_service"] ? a({
            name: "Coming Soon"
          }) : a()
        }
      },
      {
        path: "/miniGamePrizes",
        name: "Mini Game Prizes",
        components: {
        default:
          Xi,
          headertop: ye,
          footer: Pe
        },
        meta: {
          keepAlive: !1
        },
        beforeEnter: function(t, e, a) {
          fr.getters.services && 0 == fr.getters.services["mini_game_service"] ? a({
            name: "Coming Soon"
          }) : a()
        }
      },
      {
        path: "/coming-soon",
        name: "Coming Soon",
        components: {
        default:
          ur,
          headertop: ye,
          footer: Pe
        },
        meta: {
          keepAlive: !1
        }
      },
      {
        path: "*",
        name: "404 Not Found",
        components: {
        default:
          nr,
          headertop: ye,
          footer: Pe
        },
        meta: {
          keepAlive: !1
        }
      }],
      hr = a("a925"),
      vr = a("f213"),
      _r = (a("26e8"), {
        en: {
          route: {
            home: "home",
            login: "login",
            Register: "Register",
            "Forgot Password": "Forgot Password",
            "Change Password": "Change Password",
            "Password Reset": "Password Reset",
            "History / Deposit": "History / Deposit",
            "History / Withdraw": "History / Withdraw",
            "History / Transfer": "History / Transfer",
            Promotion: "Promotion",
            Game: "Game",
            Banklist: "BankList",
            Addbank: "Addbank",
            Deposit: "Deposit",
            Transfer: "Transfer",
            Contact: "Contact",
            Tips: "Tips",
            Play: "Play",
            "Coming Soon": "Coming Soon",
            "Download Link": "Download",
            "Mini Game": "Mini Game",
            "Mini Game Prizes": "Mini Game Prizes",
            "404 Not Found": "404 Not Found"
          },
          home: {
            home: "Home",
            games: "Games",
            promotion: "Promotion",
            contact: "Contact",
            history: "History",
            change_password: "Change password",
            change_language: "Change Language",
            log_out: "Log out",
            register_success: "Registration Success",
            welcome_message: "Welcome {username}",
            download: "Download",
            miniGame: "Mini Game",
            miniGamePrizes: "Mini Game Prizes"
          },
          home_menu: {
            vip: "VIP",
            deposit: "Deposit",
            withdraw: "Withdraw",
            games: "Games",
            promotion: "Promotion",
            download: "Download",
            mini_game: "Mini Game",
            register: "Register",
            contact_us: "Contact Us",
            how_to_play: "How To Play",
            how_to_win: "How To Win",
            history: "History"
          },
          game: {
            deposit: "Deposit",
            withdraw: "Withdraw",
            transfer: "Transfer",
            download: "Download",
            website: "Website",
            player_information: "Player Information",
            guest_player_information_title: "Don't have an account yet ?",
            guest_player_information_desc: "Click to link to our customer representative",
            guest_player_information_button: "Create Account",
            pm_message: "Contact us for create account"
          },
          user_management: {
            username: "Username",
            password: "Password",
            login: "Login",
            register: "Register",
            user_validation_rule: "User is required",
            pass_validation_rule: "Pass is required",
            full_name: "Full Name",
            confirm_pass: "Confirm Password",
            phone_no: "Phone No",
            full_name_validation_rule: "Full Name is required",
            full_name_length_validation_rule: "Name is short, must be same with bank account",
            user_name_validation_rule: "Username is required",
            user_length_validation_rule: "Username must be more than 6 characters",
            password_validation_rule: "Password is required",
            pass_length_validation_rule: "Password must be more than 6 characters",
            confirm_pass_validation_rule: "Confirm password is required",
            phone_validation_rule: "Phone is required",
            phone_length_validation_rule: "Phone number length is invalid",
            phone_number_validation_rule: "Phone number is not valid",
            full_name_hint: "Must be same with bank account for withdrawal",
            phone_number_hint: "eg: 60163882233",
            password_change: "Password Change",
            old_pass: "Old Password",
            new_pass: "New Password",
            confirmed_pass: "Confirmed Password",
            change: "Change",
            back: "Back",
            passwords_match_validation_rule: "Password must match"
          },
          deposit: {
            title: "deposit",
            invalid_image_type: "Please upload the valid image format",
            not_completed_form: "Please complete your form",
            not_any_bonus: "Don't get any bonus",
            bank_account: "Bank Account",
            transfer_date: "Transfer Date",
            amount: "Amount ({currency})",
            ref_no: "Reference Number",
            Online: "Online",
            ATM: "ATM",
            upload_receipt: "Upload Receipt",
            select_promotion: "Select Promotion",
            bank_acc_validation_rule: "Please select one bank account",
            method_validation_rule: "Please select method",
            require_amount_validation_rule: "Amount is required",
            min_amount_validation_rule: "Minimum amount: {currency} {amount}",
            submit_ticket_success: "Submit Ticket Successfully"
          },
          withdraw: {
            title: "withdraw",
            bank_detail: "Bank Detail",
            bank_add_success: "Added Successfully",
            enter_bank_detail: "Enter Bank Detail",
            bank_name: "Bank Name",
            account_no: "Account No",
            account_holder_name: "Account Holder Name",
            product_validation_rule: "Please select a product",
            account_no_validation_rule: "Account No is required"
          },
          transfer: {
            title: "transfer",
            product_from: "Product From",
            product_to: "Product To",
            transfer_now: "Transfer Now",
            product_transfer_from_validation_rule: "Product Transfer From is required",
            product_transfer_same_validation_rule: "Cannot select the same product",
            product_transfer_to_validation_rule: "Product Transfer To is required"
          },
          history: {
            deposit_record: "Deposit",
            withdraw_record: "Withdraw",
            transfer_record: "Transfer",
            deposit: "Deposit",
            withdraw: "Withdraw",
            transfer: "Transfer",
            bonus: "Bonus",
            token: "Token",
            date_from: "From",
            date_to: "To",
            date: "Date",
            amount: "Amount",
            status: "Status",
            detail: "Detail",
            approved: "Approved",
            reject: "Reject",
            verified: "Verified",
            processing: "Processing",
            new: "New",
            in:"In",
            out: "Out"
          },
          miniGame: {
            token: "Token",
            credit: "Credit",
            id: "ID",
            game: "Game",
            prizeName: "Prize",
            category: "Category",
            amount: "Amount",
            status: "Status",
            created_at: "Won On",
            expiry_date: "Expiry On",
            claimable_days: "Claimable In",
            all: "All",
            cash: "Cash",
            gift: "Gift",
            claim: "Claim",
            unclaim: "Unclaim",
            leftExpiryDays: "Left {day} Days",
            expired: "Expired",
            fromId: "From Id",
            toId: "To Id"
          },
          reusable: {
            ticket_id: "Ticket ID",
            type: "Type",
            product: "Product",
            bank: "Bank",
            created: "Created",
            status: "Status",
            remark: "Remark",
            close: "Close",
            lang_chinese: "Chinese",
            lang_malay: "Malay",
            lang_english: "English",
            lang_thai: "Thai",
            install_app: "Install App",
            ios_install_app_guide_title: "Install Guideline",
            ios_install_app_guide: "Install App on Your Apple Device. Please tap Share and then Add to home screen"
          },
          shared: {
            copy: "Copy",
            copied: "Copied",
            opp_unable_copy: "Oops, unable to copy",
            submit: "Submit",
            reset: "Reset",
            search: "Search",
            guest: "Guest",
            save: "Save",
            enable: "Enable",
            close: "Close",
            warning: "Warning",
            info: "Info"
          },
          fcm: {
            notification: "Notification",
            notification_request_message: "We'd like to show your the notification for the news and update",
            notification_warning_message: "Please enable notification"
          }
        },
        "zh-CN": {
          route: {
            home: "首页",
            login: "登入",
            Register: "注册",
            "Forgot Password": "忘记密码",
            "Change Password": "更换密码",
            "Password Reset": "重置密码",
            "History / Deposit": "记录 / 存款",
            "History / Withdraw": "记录 / 提款",
            "History / Transfer": "记录 / 转移",
            Promotion: "促销",
            Game: "游戏",
            Banklist: "银行清单",
            Addbank: "新增银行",
            Deposit: "存款",
            Transfer: "转移",
            Contact: "联络",
            Tips: "提示",
            Play: "玩法",
            "Coming Soon": "敬请期待",
            "Download Link": "游戏下载",
            "Mini Game": "迷你游戏",
            "Mini Game Prizes": "迷你游戏奖品清单",
            "404 Not Found": "未知页面"
          },
          home: {
            home: "首页",
            games: "游戏",
            promotion: "优惠",
            contact: "联系",
            history: "记录",
            change_password: "变更密码",
            change_language: "变更语言",
            log_out: "退出",
            register_success: "注册成功",
            welcome_message: "欢迎 {username}",
            download: "下载",
            miniGame: "迷你游戏",
            miniGamePrizes: "迷你游戏奖品清单"
          },
          home_menu: {
            vip: "VIP",
            deposit: "存款",
            withdraw: "提款",
            games: "游戏",
            promotion: "优惠",
            download: "下载",
            mini_game: "迷你游戏",
            register: "注册",
            contact_us: "联络我们",
            how_to_play: "怎么玩",
            how_to_win: "怎么赢",
            history: "交易记录"
          },
          game: {
            deposit: "存款",
            withdraw: "提款",
            transfer: "转账",
            download: "下载",
            website: "网址",
            player_information: "玩家信息",
            guest_player_information_title: "还没有帐号？",
            guest_player_information_desc: "点击链接到我们的客户端",
            guest_player_information_button: "创建账戶",
            pm_message: "联络我们创建账戶"
          },
          user_management: {
            username: "账号",
            password: "密码",
            login: "登入",
            register: "注册",
            user_validation_rule: "账号是必需的",
            pass_validation_rule: "密码是必需的",
            full_name: "全名",
            confirm_pass: "确认密码",
            phone_no: "电话号码",
            full_name_validation_rule: "全名是必需的",
            full_name_length_validation_rule: "输入的全名长度太短，必须与银行帐户名字相同",
            user_name_validation_rule: "账号是必需的",
            user_length_validation_rule: "账号必须超过6个字符",
            password_validation_rule: "密码是必需的",
            pass_length_validation_rule: "密码必须超过6个字符",
            confirm_pass_validation_rule: "确认密码是必需的",
            phone_validation_rule: "电话号码是必需的",
            phone_length_validation_rule: "输入的电话号码长度不正确",
            phone_number_validation_rule: "输入的电话号码不正确",
            full_name_hint: "必须与提款银行账户相同",
            phone_number_hint: "例如: 60163882233",
            password_change: "密码更换",
            old_pass: "旧密码",
            new_pass: "新密码",
            confirmed_pass: "确认密码",
            change: "更改",
            back: "返回",
            passwords_match_validation_rule: "新密码和确认密码必须要相同"
          },
          deposit: {
            title: "存款",
            invalid_image_type: "请上传合适的照片格式",
            not_completed_form: "请完成以下存款表格",
            not_any_bonus: "沒有任何的优惠",
            bank_account: "银行户口",
            transfer_date: "转账日期",
            amount: "存款数额 ({currency})",
            ref_no: "参考代码",
            Online: "在线",
            ATM: "ATM",
            upload_receipt: "上传收据",
            select_promotion: "选择优惠",
            bank_acc_validation_rule: "请选择其中一个银行户口",
            method_validation_rule: "请选择其中一种存款方式",
            require_amount_validation_rule: "请输入存款数额",
            min_amount_validation_rule: "最低的存款数额是 {currency} {amount}",
            submit_ticket_success: "成功提交"
          },
          withdraw: {
            title: "提款",
            bank_detail: "銀行资料",
            bank_add_success: "成功添加",
            enter_bank_detail: "輸入銀行资料",
            bank_name: "银行名字",
            account_no: "户口号码",
            account_holder_name: "账户持有人姓名",
            product_validation_rule: "请选择一个产品",
            account_no_validation_rule: "户口号码是必需的"
          },
          transfer: {
            title: "转账",
            product_from: "请选择要从哪个产品转移",
            product_to: "请选择要转移到哪个产品",
            transfer_now: "轉移",
            product_transfer_from_validation_rule: "选择从哪个产品转移是必需的",
            product_transfer_same_validation_rule: "不可以选择同一个产品",
            product_transfer_to_validation_rule: "选择转移到哪个产品是必需的"
          },
          history: {
            deposit_record: "存款记录",
            withdraw_record: "提款记录",
            transfer_record: "转账记录",
            deposit: "存款",
            withdraw: "提款",
            transfer: "转账",
            bonus: "优惠",
            token: "代币",
            date_from: "从(日期)",
            date_to: "到(日期)",
            date: "日期",
            amount: "数额",
            status: "状态",
            detail: "详情",
            approved: "批准",
            verified: "验证中",
            processing: "处理中",
            reject: "拒绝",
            new: "新",
            in:"汇入",
            out: "支出"
          },
          miniGame: {
            token: "游戏筹码",
            credit: "游戏积分",
            id: "ID",
            game: "游戏",
            prizeName: "奖品",
            category: "类别",
            amount: "数额",
            status: "状态",
            created_at: "获奖日期",
            expiry_date: "到期日",
            claimable_days: "可兑换",
            all: "全部",
            cash: "现金",
            gift: "礼品",
            claim: "已兑换",
            unclaim: "尚未兑换",
            leftExpiryDays: "剩下 {day}天",
            expired: "已过期",
            fromId: "从ID",
            toId: "至ID"
          },
          reusable: {
            ticket_id: "交易码",
            type: "类型",
            product: "产品",
            bank: "银行",
            created: "创建日期",
            remark: "备注",
            close: "关闭",
            lang_chinese: "华文",
            lang_malay: "马来文",
            lang_english: "英文",
            lang_thai: "泰文",
            install_app: "安装应用程序",
            ios_install_app_guide_title: "安装指南",
            ios_install_app_guide: "在Apple设备上安装此应用程序。请点击共享，然后点击添加到主屏幕"
          },
          shared: {
            copy: "复制",
            copied: "已复制",
            opp_unable_copy: "无法复制,请稍后再尝试",
            submit: "提交",
            reset: "重置",
            search: "搜索",
            guest: "游客",
            save: "保存",
            enable: "启用",
            close: "关闭",
            warning: "提醒",
            info: "信息"
          },
          fcm: {
            notification: "通知",
            notification_request_message: "我们想向您显示最新资讯与更新",
            notification_warning_message: "请启用通知"
          }
        },
        ms: {
          route: {
            home: "Utama",
            login: "Log Masuk",
            Register: "Daftar",
            "Forgot Password": "Lupa Kata Laluan",
            "Change Password": "Tukar Kata Laluan",
            "Password Reset": "Reset Kata Laluan",
            "History / Deposit": "Rekod / Deposit",
            "History / Withdraw": "Rekod / Withdraw",
            "History / Transfer": "Rekod / Transfer",
            Promotion: "Tawaran",
            Game: "Permainan",
            Banklist: "Senarai Akaun Bank",
            Addbank: "Tambah Akaun Bank",
            Deposit: "Deposit",
            Transfer: "Transfer",
            Contact: "Hubungi Kami",
            Tips: "Tips",
            Play: "Bermain",
            "Coming Soon": "Akan Datang",
            "Download Link": "Muat turun",
            "Mini Game": "Permainan Mini",
            "Mini Game Prizes": "Hadiah Permainan Mini",
            "404 Not Found": "404 Tidak Dijumpai"
          },
          home: {
            home: "Utama",
            games: "Permainan",
            promotion: "Promosi",
            contact: "Hubungi Kami",
            history: "Rekod",
            change_password: "Tukar Kata Laluan",
            change_language: "Tukar Bahasa",
            log_out: "Log Keluar",
            register_success: "Daftar Berjaya",
            welcome_message: "Selamat Datang {username}",
            download: "Muat Turun",
            miniGame: "Permainan Mini",
            miniGamePrizes: "Senarai Hadiah Permainan Mini"
          },
          home_menu: {
            vip: "VIP",
            deposit: "Deposit",
            withdraw: "Withdraw",
            games: "Permainan",
            promotion: "Promosi",
            download: "Muat Turun",
            mini_game: "Permainan Mini",
            register: "Daftar",
            contact_us: "Hubungi Kami",
            how_to_play: "Cara Bermain",
            how_to_win: "Cara Menang",
            history: "Transaksi Rekod"
          },
          game: {
            deposit: "Deposit",
            withdraw: "Withdraw",
            transfer: "Transfer",
            download: "Muat Turun",
            website: "Laman Web",
            player_information: "Informasi Pemain",
            guest_player_information_title: "Belum ada akaun?",
            guest_player_information_desc: "Klik untuk pautan ke wakil pelanggan kami",
            guest_player_information_button: "Buat akaun",
            pm_message: "Hubungi kami untuk membuat akaun"
          },
          user_management: {
            username: "Name Akaun",
            password: "Kata Laluan",
            login: "Log Masuk",
            register: "Daftar",
            user_validation_rule: "Name Akaun diperlukan",
            pass_validation_rule: "Kata Laluan diperlukan",
            full_name: "Nama Penuh",
            confirm_pass: "Kata Laluan Pengesahan",
            phone_no: "Nombor Telefon",
            full_name_validation_rule: "Nama penuh diperlukan",
            full_name_length_validation_rule: "Nama penuh tidak pendek, mestilah sama dengan akaun bank name",
            user_name_validation_rule: "Name akaun diperlukan",
            user_length_validation_rule: "Nama akaun mesti melebihi 6 aksara",
            password_validation_rule: "Kata laluan diperlukan",
            pass_length_validation_rule: "Kata laluan mesti melebihi 6 aksara",
            confirm_pass_validation_rule: "Kata laluan pengesahan diperlukan",
            phone_validation_rule: "Nombor telefon diperlukan",
            phone_length_validation_rule: "Nombor telefon yang dimasukkan tidak panjang yang betul",
            phone_number_validation_rule: "Nombor telefon yang dimasukkan tidak betul",
            full_name_hint: "Mesti sama dengan nama pemegang akaun bank pengeluaran",
            phone_number_hint: "Contoh: 60163882233",
            password_change: "Pertukaran kata laluan",
            old_pass: "Kata laluan lama",
            new_pass: "Kata laluan baharu",
            confirmed_pass: "Kata laluan pengesahan",
            change: "berubah",
            back: "balik",
            passwords_match_validation_rule: "Kata laluan baharu dan kata laluan pengesahan baru mestilah sama"
          },
          deposit: {
            title: "deposit",
            invalid_image_type: "Sila muat naik format foto yang sesuai",
            not_completed_form: "Sila lengkapkan borang anda",
            not_any_bonus: "Tiada tawaran",
            bank_account: "Akaun bank",
            transfer_date: "Tarikh pemindahan perbankan",
            amount: "Amaun ({currency})",
            ref_no: "No rujukan",
            Online: "Online",
            ATM: "ATM",
            upload_receipt: "Muat naik resit",
            select_promotion: "Pilih promosi",
            bank_acc_validation_rule: "Sila pilih salah satu akaun bank",
            method_validation_rule: "Sila pilih salah satu kaedah deposit",
            require_amount_validation_rule: "Sila masukkan amaun",
            min_amount_validation_rule: "Amaun terendah adalah {currency} {amount}",
            submit_ticket_success: "Hantar berjaya"
          },
          withdraw: {
            title: "withdraw",
            bank_detail: "Perincian bank",
            bank_add_success: "Tambah berjaya",
            enter_bank_detail: "Masukkan maklumat bank",
            bank_name: "Nama bank",
            account_no: "Nombor akaun",
            account_holder_name: "Nama Pemegang Akaun",
            product_validation_rule: "Sila pilih produk",
            account_no_validation_rule: "Nombor akaun diperlukan"
          },
          transfer: {
            title: "transfer",
            product_from: "Sila pilih produk yang anda hendak pindahkan daripada",
            product_to: "Sila pilih produk yang anda hendak pindahkan ke",
            transfer_now: "Pindah sekarang",
            product_transfer_from_validation_rule: "Sila pilih produk yang akan dipindahkan daripada",
            product_transfer_same_validation_rule: "Tidak boleh memilih produk yang sama",
            product_transfer_to_validation_rule: "Sila pilih produk yang akan dipindahkan ke"
          },
          history: {
            deposit_record: "Rekod deposit",
            withdraw_record: "Rekod pengeluaran",
            transfer_record: "Rekod pindahan",
            deposit: "Deposit",
            withdraw: "Pengeluaran",
            transfer: "Pindahan",
            bonus: "Bonus",
            token: "Token",
            date_from: "Dari Tarikh",
            date_to: "Ke Tarikh",
            date: "Tarikh",
            amount: "Amaun",
            status: "Taraf",
            detail: "Perincian",
            approved: "Diluluskan",
            verified: "Mengesahkan",
            processing: "Dalam Proses",
            reject: "Ditolak",
            new: "Baharu",
            in:"Masukkan",
            out: "Keluarkan"
          },
          miniGame: {
            token: "token",
            credit: "kredit",
            id: "ID",
            game: "Game",
            prizeName: "Nama Hadiah",
            category: "Kategori",
            amount: "Amaun",
            status: "Status",
            created_at: "Tarikh Memenangi Hadiah",
            expiry_date: "Tarikh Luput",
            claimable_days: "Boleh ditebus Dalam",
            all: "segala",
            cash: "tunai",
            gift: "hadiah",
            claim: "ditebus",
            unclaim: "belum ditebus",
            leftExpiryDays: "tinggal {day} hari",
            expired: "tamat tempoh",
            fromId: "Dari ID",
            toId: "Hingga ID"
          },
          reusable: {
            ticket_id: "Nombor Transaksi",
            type: "Jenis",
            product: "Produk",
            bank: "Bank",
            created: "Tarikh penghantaran",
            remark: "Remark",
            close: "Tutup",
            lang_chinese: "Mandarin",
            lang_malay: "Melayu",
            lang_english: "Inggeris",
            lang_thai: "Thai",
            install_app: "Pasang Aplikasi",
            ios_install_app_guide_title: "Pasang Garis Panduan",
            ios_install_app_guide: "Pasang Aplikasi pada Peranti Apple Anda. Sila ketik Kongsi dan kemudian Tambah ke skrin utama"
          },
          shared: {
            copy: "Menyalin",
            copied: "Telah menyalin",
            opp_unable_copy: "Op, tidak boleh menyalin",
            submit: "Hantar",
            reset: "Menetapkan semula",
            search: "Cari",
            guest: "Guest",
            save: "Simpan",
            enable: "Aktifkan",
            close: "Tutup",
            warning: "Peringatan",
            info: "Maklumat"
          },
          fcm: {
            notification: "Notis",
            notification_request_message: "Kami ingin menunjukkan kepada anda berita dan maklumat terkini",
            notification_warning_message: "Sila aktifkan notis perkhidmatan"
          }
        },
        th: {
          route: {
            home: "บ้าน",
            login: "เข้าสู่ระบบ",
            Register: "การลงทะเบียน",
            "Forgot Password": "ลืมรหัสผ่าน",
            "Change Password": "เปลี่ยนรหัสผ่าน",
            "Password Reset": "รีเซ็ตรหัสผ่าน",
            "History / Deposit": "ประวัติ / ฝาก",
            "History / Withdraw": "ประวัติ / ถอน",
            "History / Transfer": "ประวัติศาสตร์ / โอน",
            Promotion: "การส่งเสริม",
            Game: "เกม",
            Banklist: "รายชื่อธนาคาร",
            Addbank: "เพิ่มธนาคาร",
            Deposit: "เงินฝาก",
            Transfer: "โอน",
            Contact: "ติดต่อ",
            Tips: "เคล็ดลับ",
            Play: "เล่น",
            "Coming Soon": "เร็ว ๆ นี้",
            "Download Link": "ดาวน์โหลด",
            "Mini Game": "มินิเกม",
            "Mini Game Prizes": "รายการรางวัลมินิเกม",
            "404 Not Found": "ไม่พบ 404"
          },
          home: {
            home: "บ้าน",
            games: "เกม",
            promotion: "การส่งเสริม",
            contact: "ติดต่อ",
            history: "ประวัติศาสตร์",
            change_password: "เปลี่ยนรหัสผ่าน",
            change_language: "เปลี่ยนภาษา",
            log_out: "ออกจากระบบ",
            register_success: "ลงทะเบียนสำเร็จ",
            welcome_message: "ยินดีต้อนรับ {username}",
            download: "ดาวน์โหลด",
            miniGame: "มินิเกม",
            miniGamePrizes: "รายการรางวัลมินิเกม"
          },
          home_menu: {
            vip: "VIP",
            deposit: "เงินฝาก",
            withdraw: "ถอน",
            games: "เกม",
            promotion: "การส่งเสริม",
            download: "ดาวน์โหลด",
            mini_game: "มินิเกม",
            register: "การลงทะเบียน",
            contact_us: "ติดต่อเรา",
            how_to_play: "วิธีการเล่น",
            how_to_win: "วิธีชนะ",
            history: "ประวัติการทำรายการ"
          },
          game: {
            deposit: "เงินฝาก",
            withdraw: "ถอน",
            transfer: "โอน",
            download: "ดาวน์โหลด",
            website: "เว็บไซต์",
            player_information: "ข้อมูลผู้เล่น",
            guest_player_information_title: "อย่ามีบัญชีหรือยัง ?",
            guest_player_information_desc: "คลิกเพื่อเชื่อมโยงไปยังตัวแทนลูกค้าของเรา",
            guest_player_information_button: "สร้างบัญชี",
            pm_message: "โทรหาเราเพื่อสร้างบัญชี"
          },
          user_management: {
            username: "ชื่อผู้ใช้",
            password: "รหัสผ่าน",
            login: "เข้าสู่ระบบ",
            register: "สมัครสมาชิก",
            user_validation_rule: "จำเป็นต้องมีผู้ใช้",
            pass_validation_rule: "ต้องผ่าน",
            full_name: "ชื่อเต็ม",
            confirm_pass: "ยืนยันรหัสผ่าน",
            phone_no: "เบอร์โทรศัพท์",
            full_name_validation_rule: "ต้องระบุชื่อเต็ม",
            full_name_length_validation_rule: "ชื่อสั้นต้องเป็นชื่อเดียวกันกับบัญชีธนาคาร",
            user_name_validation_rule: "ต้องระบุชื่อผู้ใช้",
            user_length_validation_rule: "ชื่อผู้ใช้จะต้องมากกว่า 6 ตัวอักษร",
            password_validation_rule: "ต้องการรหัสผ่าน",
            pass_length_validation_rule: "รหัสผ่านจะต้องมากกว่า 6 ตัวอักษร",
            confirm_pass_validation_rule: "ต้องยืนยันรหัสผ่าน",
            phone_validation_rule: "จำเป็นต้องใช้โทรศัพท์",
            phone_length_validation_rule: "ความยาวหมายเลขโทรศัพท์ไม่ถูกต้อง",
            phone_number_validation_rule: "หมายเลขโทรศัพท์ไม่ถูกต้อง",
            full_name_hint: "ต้องเหมือนกันกับบัญชีธนาคารสำหรับการถอน",
            phone_number_hint: "เช่น: 60163882233",
            password_change: "เปลี่ยนรหัสผ่าน",
            old_pass: "รหัสผ่านเก่า",
            new_pass: "รหัสผ่านใหม่",
            confirmed_pass: "ยืนยันรหัสผ่าน",
            change: "เปลี่ยนแปลง",
            back: "กลับ",
            passwords_match_validation_rule: "รหัสผ่านจะต้องตรงกับ"
          },
          deposit: {
            title: "เงินฝาก",
            invalid_image_type: "โปรดอัปโหลดรูปแบบภาพที่ถูกต้อง",
            not_completed_form: "กรุณากรอกแบบฟอร์มของคุณ",
            not_any_bonus: "อย่าได้รับโบนัสใด ๆ",
            bank_account: "บัญชีธนาคาร",
            transfer_date: "วันที่โอน",
            amount: "จำนวนเงิน ({currency})",
            ref_no: "หมายเลขอ้างอิง",
            Online: "ออนไลน์",
            ATM: "เอทีเอ็ม",
            upload_receipt: "อัพโหลดใบเสร็จรับเงิน",
            select_promotion: "เลือกโปรโมชั่น",
            bank_acc_validation_rule: "โปรดเลือกบัญชีธนาคารหนึ่งบัญชี",
            method_validation_rule: "กรุณาเลือกวิธีการ",
            require_amount_validation_rule: "จำนวนเงินที่ต้องการ",
            min_amount_validation_rule: "จำนวนเงินขั้นต่ำ: {currency} {amount}",
            submit_ticket_success: "ส่งตั๋วสำเร็จ"
          },
          withdraw: {
            title: "ถอน",
            bank_detail: "รายละเอียดธนาคาร",
            bank_add_success: "เพิ่มสำเร็จแล้ว",
            enter_bank_detail: "ใส่รายละเอียดธนาคาร",
            bank_name: "ชื่อธนาคาร",
            account_no: "เลขที่บัญชี",
            account_holder_name: "ชื่อเจ้าของบัญชี",
            product_validation_rule: "กรุณาเลือกผลิตภัณฑ์",
            account_no_validation_rule: "ไม่จำเป็นต้องมีบัญชี"
          },
          transfer: {
            title: "โอน",
            product_from: "สินค้าจาก",
            product_to: "ผลิตภัณฑ์ถึง",
            transfer_now: "โอนตอนนี้",
            product_transfer_from_validation_rule: "ต้องมีการโอนสินค้า",
            product_transfer_same_validation_rule: "ไม่สามารถเลือกผลิตภัณฑ์เดียวกัน",
            product_transfer_to_validation_rule: "ต้องมีการโอนสินค้า"
          },
          history: {
            deposit_record: "เงินฝาก",
            withdraw_record: "ถอน",
            transfer_record: "โอน",
            deposit: "เงินฝาก",
            withdraw: "ถอน",
            transfer: "โอน",
            bonus: "โบนัส",
            token: "เหรียญ",
            date_from: "จาก",
            date_to: "ไปยัง",
            date: "วันที่",
            amount: "จำนวน",
            status: "สถานะ",
            detail: "รายละเอียด",
            approved: "ได้รับการอนุมัติ",
            reject: "ปฏิเสธ",
            verified: "ในการตรวจสอบ",
            processing: "ในการประมวลผล",
            new: "ใหม่",
            in:"ใน",
            out: "ออก"
          },
          miniGame: {
            token: "โทเค็นเกม",
            credit: "เครดิตเกม",
            id: "ID",
            game: "เกม",
            prizeName: "ชื่อของขวัญ",
            category: "หมวดหมู่",
            amount: "จำนวน",
            status: "สถานะ",
            created_at: "วันที่ได้รับรางวัล",
            expiry_date: "วันหมดอายุ",
            claimable_days: "แลกเป็น",
            all: "ทั้งหมด",
            cash: "ตัวเงิน",
            gift: "ของขวัญ",
            claim: "แลก",
            unclaim: "ยังไม่ได้แลก",
            leftExpiryDays: "เหลืออีก {day} วัน",
            expired: "ที่หมดอายุแล้ว",
            fromId: "จากID",
            toId: "ไปยังID"
          },
          reusable: {
            ticket_id: "รหัสตั๋ว",
            type: "ชนิด",
            product: "สินค้า",
            bank: "ธนาคาร",
            created: "ที่สร้างไว้",
            status: "สถานะ",
            remark: "สังเกต",
            close: "ปิด",
            lang_chinese: "ชาวจีน",
            lang_malay: "ภาษามลายู",
            lang_english: "อังกฤษ",
            lang_thai: "ไทย",
            install_app: "ติดตั้งแอพ",
            ios_install_app_guide_title: "ติดตั้งแนวทาง",
            ios_install_app_guide: "ติดตั้งแอปบนอุปกรณ์ Apple ของคุณ กรุณาแตะแชร์จากนั้นเพิ่มไปที่หน้าจอหลัก"
          },
          shared: {
            copied: "คัดลอก",
            opp_unable_copy: "โอ๊ะโอไม่สามารถคัดลอกได้",
            submit: "เสนอ",
            reset: "รีเซ็ต",
            search: "ค้นหา",
            guest: "แขก",
            save: "บันทึก",
            enable: "เปิดใช้งานมัน",
            close: "ปิด",
            warning: "ข้อควรคำนึง",
            info: "ข้อมูล"
          },
          fcm: {
            notification: "หมายประกาศ",
            notification_request_message: "เราต้องการแสดงข่าวและข้อมูลล่าสุดให้กับคุณ",
            notification_warning_message: "กรุณาเปิดใช้งานบริการแจ้งให้ทราบล่วงหน้า"
          }
        }
      }),
      br = _r,
      wr = a("58a0"),
      kr = a.n(wr),
      yr = (a("87df"), a("c671")),
      xr = a("c9640");
      s["default"].component("v-icon", h["a"]),
      s["default"].component("v-dialog", re["a"]),
      s["default"].component("v-btn", g["a"]),
      s["default"].component("v-card", et["a"]),
      s["default"].component("v-spacer", le["a"]),
      s["default"].component("v-card-text", Dt["b"]),
      s["default"].component("v-card-actions", Dt["a"]),
      s["default"].component("v-tabs", ss["a"]),
      s["default"].component("v-tab", as["a"]),
      s["default"].component("v-tab-item", yr["a"]),
      s["default"].component("v-date-picker", cs["a"]),
      s["default"].component("v-time-picker", xr["a"]),
      s["default"].component("v-text-field", rt["a"]),
      s["default"].use(vr["a"]),
      s["default"].config.productionTip = !1,
      s["default"].filter("currency",
      function(t) {
        return "MYR " + t
      }),
      s["default"].use(M["a"]),
      s["default"].use(hr["a"]),
      s["default"].use(VueLazyload, {
        preLoad: 1.3
      }),
      s["default"].use(kr.a);
      var Ar = new M["a"]({
        routes: gr
      }),
      Dr = new hr["a"]({
        locale: fr.getters.lang_flag,
        fallbackLocale: "en",
        messages: br,
        silentTranslationWarn: !0
      });
      Ar.beforeEach(function(t, e, a) {
        t.query.t ? fr.getters.user_token ? a({
          path: "/"
        }) : (window.location.reload(), a()) : fr.getters.user_token || "/login" === t.path ? "/register" == t.path || "/passwordreset" == t.path || "/forgotpassword" == t.path ? a({
          path: "/home"
        }) : a() : "/deposit" == t.path || "/withdraw" == t.path || t.path.match(/withdraw/g) || "/transfer" == t.path || "/DepositTicket" == t.path || "/bonus" == t.path || "/passwordchange" == t.path || "/download" == t.path ? a({
          path: "/login"
        }) : a()
      }),
      new s["default"]({
        router: Ar,
        store: fr,
        i18n: Dr,
        render: function(t) {
          return t(z)
        }
      }).$mount("#app")
    },
    "5a81": function(t, e, a) {
      "use strict";
      var s = a("c599"),
      n = a.n(s);
      n.a
    },
    "5b1a": function(t, e, a) {
      "use strict";
      var s = a("d4bf"),
      n = a.n(s);
      n.a
    },
    "5b4d": function(t, e) {
      t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdMAAAEHBAMAAAAHf7GnAAAAG1BMVEUAAAD///8fHx9/f39fX18/Pz+/v7+fn5/f39/aFU25AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAGgElEQVR4nO2aTVfbRhSGhfzFslMH20vjQMISNQ7u0uaYwBI7Ju0Slxa6jFJasqyatvRndzRz51sYsH10TuB9FsiSNdf30WhGoxmiCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwVXP6ybMmDnx9wUv3ydLmCqxG/yemPz7rWQba1bLi0+YCTNlio+qCCq1FjiquhPvjUVRn7XR18qqovxjmDX7nrJzr4VFW/oU87KetQCk9dNYpT9pf89ORVowpryQ9PXzVK2FBsn4HqJjsX22egWmXfiu0zUI3ZC7F9BqrRXP7gc1BN22LzPFXj2Xh85JSIx/3x1I4w7h+aACLjnfFR1ykycw7YqvyrQ1MwDLhGFqvufBaD48535pR34sjtobPfVrnnGcff50X2TZEfMjeGpfoyo9JG1Q0o3ydrx5cXq1gKFrbVd/pN4KM640QdcfdbXbmbZ5zIyzNURT5QCTXCtlQrVPrUqHoBRSqv+QVpr1vV7YH5L9z2x7PjuRpGRQ1+ZHw2G2Sk+oqx62nv/Zz9o1Vfsc717Dijzlzo3B6dzVKmBY0qD9yf8q+aWtUPmKfyWtTzelVjctSqX2RO8Zztq9xkCvGx3GTyi1pG2afNOBP1WVVHopSKnGh5rVqnykvYR1INAvJUeKi22/bXoFqlHaX6Vn3RoLFFg7kd5aa6+HX2p9imzT32k/i0RyOviirCrxcZalU1EI3nbVINAvJUEvb3Umo+jmr9zoFhJmtkxPadwynrqhNkqmlz3laB5dWZ6CIqe61a0xeuzlR5PyDbqrI1PYcc1ZG5azwSKZC5LSbW9yQ3kql2dA9GXVzW0mer0kpVXdn8ZOkTBmRbk4Kn8FLYqrXszpe4SSf/W6GaUjRMrnV5L6a6A4sS8alqFRlRlSnVia7CaFuqhgHZVrb0eMbDVp2otELVDXGNN737d4PaWpQriSRTYyarpW6eU7q4Uk31ZVEtOgzIWuuqVFuV9+n0Q0Wq3cipBoGsayoj4qTmYsgi21amFWqsSjXTdyu/c5vFAdfxlCG0aszHC8rwLtWk4x5NTLVE8j4z3Qqvw1xoZBWJqcpJNba7Cdmyw4DMazMrUGPtm5x8wrCt0rxLde5d4bnVN6aiiqx7UqqmdhGqRlKtqh5ZFGwWB2Rem1kBax5Yjzt91V6vJ+9D646TqVvnJSJLy0z2K5n9pKBLRaoVqxmTahiQeW1mBbTqv2/NQVv1/R+Z+P40CmvbvrlGbZOxQKo6Rej+JNWGXWGyYBiQeW1mBfiTvpfjHDT5VefqUpyatqZwGtvjVeuBakHA9fVK3nCf0Pnx4Se76o/PzibFqq1LjXwm+6puEeqjtOrQfEWqQcB1DZWi+1RT1YBFdjVP1V7vYezRqpuBakFA5nUPK7BQtc6a3chkF6palXB5pTNWhYePVw0ClqWaqkUcmd3CtmplLFnqBg4ClqRaM33KHarB4z3slhxVr1saegULApakWrdHefc9bCRrfNjQT5Sjum2/edw3hJAEqk6R9DFDCEqlHNWRGeXJN9lFA0NJoLr8wJBSKUc1MWmmIrtFw306z1e1T3nccJ9SKV1VzmoFL3HBADVQtU9RU1cFL3E0VAgDlq5akWNg/9Xc3y9QtU9Rr+kFr+Y0gRQGLL2t7knVivoPAqJitzZBoFq1iqg6U6pWt7cpVcOAJama22n+n8guZv40mj8YD1TtmTc1dVUwjZaqaTQ/YEmqG+p2arATmV1iP/UL9gtUR/oUNZmsVWNrBYDea4OAJalWaBvP25tqgOM+Dep+JqFqQ5+SKo1gyps/kuSLeBiwJNU4k6kk7JxU+RH6T8uX3n48kDkHqtGc1qU+6JvTWsiQczw/svNEL2S4Acsa7k9Y66g3429yNFEkVo++TLvx7LPZv5jmi4LUDgtU64xd96LdAzNLZC9PtadRfMB/IDHLU07AslTp/bEz1Kq86ZlZiZx8jbCT6ZWyAlVahGRqNaZg0ZGfqVT9gGWpyuW+1jAyqtGBTE7/+y6twV7Qo7JAVSwtWyXspWTxA/kqs1b1Aq5R9R52Bjf9rntod3DjHNt9w/cXz8DzKL9Ni7+qDYLCDwgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwtfA/BSxIxQ9PN0YAAAAASUVORK5CYII="
    },
    "5bc9": function(t, e, a) {
      t.exports = a.p + "img/Webot-Logo.594b8f7e.png"
    },
    6215 : function(t, e, a) {
      "use strict";
      var s = a("b326"),
      n = a.n(s);
      n.a
    },
    "6dbf": function(t, e, a) {
      "use strict";
      var s = a("fd0d"),
      n = a.n(s);
      n.a
    },
    "6e03": function(t, e, a) {
      t.exports = a.p + "img/whatsapp.8abfd33f.jpg"
    },
    7262 : function(t, e, a) {
      "use strict";
      var s = a("87ff"),
      n = a.n(s);
      n.a
    },
    7395 : function(t, e, a) {
      "use strict";
      var s = a("76de"),
      n = a.n(s);
      n.a
    },
    7696 : function(t, e, a) {
      t.exports = a.p + "img/wechat.f785fa62.png"
    },
    "76de": function(t, e, a) {},
    7783 : function(t, e, a) {
      "use strict";
      var s = a("c964"),
      n = a.n(s);
      n.a
    },
    "779c": function(t, e, a) {
      "use strict";
      var s = a("e95e"),
      n = a.n(s);
      n.a
    },
    7835 : function(t, e, a) {},
    "7ee7": function(t, e, a) {
      "use strict";
      var s = a("03df"),
      n = a.n(s);
      n.a
    },
    8170 : function(t, e, a) {
      t.exports = a.p + "img/internet.edfa6794.png"
    },
    "843a": function(t, e, a) {
      "use strict";
      var s = a("50c8"),
      n = a.n(s);
      n.a
    },
    "84fa": function(t, e, a) {
      "use strict";
      var s = a("c6b0"),
      n = a.n(s);
      n.a
    },
    8522 : function(t, e, a) {},
    8558 : function(t, e, a) {
      t.exports = a.p + "img/call-center-agent.eb5ac6af.png"
    },
    "87ff": function(t, e, a) {},
    8898 : function(t, e, a) {},
    "8b07": function(t, e, a) {},
    "8b5f": function(t, e, a) {
      "use strict";
      var s = a("8b07"),
      n = a.n(s);
      n.a
    },
    "8c1d": function(t, e, a) {
      "use strict";
      var s = a("a106"),
      n = a.n(s);
      n.a
    },
    "8d3e": function(t, e, a) {},
    9142 : function(t, e, a) {
      var s = {
        "./3win8.png": "b82d",
        "./404error.png": "a982",
        "./918kiss.png": "bc88",
        "./BSN.png": "f4a8",
        "./CIMB.png": "3cf4",
        "./CN.png": "253e",
        "./Islam.png": "3647",
        "./MY.png": "b60b",
        "./RHB.png": "e767",
        "./Standard-Chartered.png": "ffcb",
        "./TH.png": "413d",
        "./UK.png": "cfbf",
        "./UOB.png": "3ebb",
        "./Webot-Logo.png": "5bc9",
        "./ambank.png": "ceb3",
        "./c88-logo.png": "a17f",
        "./call-center-agent.png": "8558",
        "./coming-soon.png": "e6d0",
        "./download.png": "f6f5",
        "./internet.png": "8170",
        "./logo.png": "cf05",
        "./may.png": "933d",
        "./maybank.png": "3aa5",
        "./placeholder.png": "5b4d",
        "./pwa_icon.png": "9c2c",
        "./scr888.png": "02db",
        "./wallet.png": "0131"
      };
      function n(t) {
        var e = i(t);
        return a(e)
      }
      function i(t) {
        var e = s[t];
        if (! (e + 1)) {
          var a = new Error("Cannot find module '" + t + "'");
          throw a.code = "MODULE_NOT_FOUND",
          a
        }
        return e
      }
      n.keys = function() {
        return Object.keys(s)
      },
      n.resolve = i,
      t.exports = n,
      n.id = "9142"
    },
    "933d": function(t, e, a) {
      t.exports = a.p + "img/may.2166d150.png"
    },
    "93ad": function(t, e, a) {
      t.exports = a.p + "img/instagram.27019960.jpg"
    },
    9647 : function(t, e, a) {},
    9929 : function(t, e, a) {
      "use strict";
      var s = a("9abf"),
      n = a.n(s);
      n.a
    },
    "9ab5": function(t, e, a) {
      t.exports = a.p + "img/twitter.c8f65e02.jpg"
    },
    "9abf": function(t, e, a) {},
    "9c2c": function(t, e, a) {
      t.exports = a.p + "img/pwa_icon.939292d6.png"
    },
    "9e37": function(t, e, a) {
      t.exports = a.p + "img/instagram.9e3013e8.png"
    },
    a106: function(t, e, a) {},
    a17f: function(t, e, a) {
      t.exports = a.p + "img/c88-logo.8aab1b11.png"
    },
    a219: function(t, e, a) {
      var s = {
        "./facebook.jpg": "e8e7",
        "./instagram.jpg": "93ad",
        "./twitter.jpg": "9ab5",
        "./whatsapp.jpg": "6e03"
      };
      function n(t) {
        var e = i(t);
        return a(e)
      }
      function i(t) {
        var e = s[t];
        if (! (e + 1)) {
          var a = new Error("Cannot find module '" + t + "'");
          throw a.code = "MODULE_NOT_FOUND",
          a
        }
        return e
      }
      n.keys = function() {
        return Object.keys(s)
      },
      n.resolve = i,
      t.exports = n,
      n.id = "a219"
    },
    a2ff: function(t, e, a) {
      "use strict";
      var s = a("b056"),
      n = a.n(s);
      n.a
    },
    a390: function(t, e) {
      t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA9CAYAAAAeYmHpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkEwMjhBNTBFRkQ4MTFFNTgwQ0VBRjQ5RjAwMUMwRDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkEwMjhBNTFFRkQ4MTFFNTgwQ0VBRjQ5RjAwMUMwRDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2QTAyOEE0RUVGRDgxMUU1ODBDRUFGNDlGMDAxQzBEMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2QTAyOEE0RkVGRDgxMUU1ODBDRUFGNDlGMDAxQzBEMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvdGUEoAAAwQSURBVHjazFsNVJRVGn5mhhmG4VcE+UtDhLR2DdnAdJEyV3GD0nZVdDVr3YzNOuXZdhVd+zVWSzu27WFrT2rtyXX9S/thCwLFCk0SBbFCxcARfwCVvxEYYJiZfe/33cERhvm+gVF55zxn4Jtvvnuf+973ve/73jsKq9UKk8kEs9kMQSyENoIPwZNgxY0QDUHJn95FMLu9BQWhhfPxvHbZ09MTHuyPZcuWIScnR+wCQwohjaDjX+q/DCP8jDCWMIYwgjCUD6mGkzUSmgm1hErC94TjhNMDGgzG7Cwhi3CKoBUvf/LJJyLps9VnUVFRIV5dTphFMBGu9qu5SMJDhFRCAifpqph4VwsInxIK+TXXh/zPhLcIX4qX2tvbRdJqpVq88jLht5yslU9A+TKFkE54kOA3wMnJOvRzjue45j8kbCFckv0UZjgBhL9xTdPwKRQKTotNsAWE2QSDy3Y8mZBL2EeY6wbCjuRuwpuEUsJfCf4uzZlOwgu8p602Xd5P+AMnLF/CCe/zKTgdN0fCud6+40YoT8zcNy0lhNlIp/IJJd9pzeINL+J+8mbLaMJHfNADZX2DaTvEnrR8wozgGt7gbbj1wgb9K0KcKxpXdq/N0uJN2EFYicElbDncyx2oLJHrn5lz2kOYg8Epgbx/s9xFWss1nIzBLayfW7mHGjDp9wi/HlB3rNyeuvgS4gjmAUd/4AEnI36PVLDmTDIIC/vVvIUTIcJD1EMQ7RWNSG2kAD+1H7RKLd1igdFsRENnA6raqwToO/RoM7eJ6lD1a21ga/g2QiLhsqukkwiZLjfZJRIe7TUaKSEpSA5Mxt2+dyPcM1ySQKelE2eNZ1HcXIwvGr5AXmMeLndeFsmrXOpFDOGfPIOQTZolBP+SMROuJ0taTfFPQXp4OpKDk+Gl8nIt9VJqEOMdI2B++HzUttdiV90ubK7ZjLK2MrE38kNj5nQf4+GrLJteRrhLtr3Swj9BNwF5Y/Pw+S8+x8zQmS4TdiSh2lA8e/uzOJRwCO9Ev4MIRYSracfrhGA5pKMIf5Jrt2qTGqtHrMbX8V9jWtC0G+KW2QAuGbEEh+IPYc4QUmCH7K+Gcb8kSZpp2VdOdDOMXtljs/Fi9IvC1LzRMtxrOHaO24m1kWtF4vISoz8SRjojfTvhUTmE2VTLjc3F9OCblWtckxWjVmDjHRuh6FTIIc780xJnpB/nNzm14QB67R67G3H+cbhVsnj4Yrw16i0xkZCWhTyz7kWaLezz5eSn797xLu4dcu8tD8GWRi7F4tDFcoiH8mpOL9LjecrmlPCjwY9iXti8QRN7ro9ZjyjPKDnR3BxHpFOlprWv0herR60eVAF3gCYAL0e+LMYJzmUSIagn6fulgo8FwxZgpG7kTSNksZphtnYRxPe+ZG7oXNylu0tK2ywTS7AnHSIVjKjotShskcPPqluqMSV3CjKOLgero9tLa1cLZh+YhbkH02CymFDaeBSTchKx9sc119130nAC9+Ul4aXvXxL+f/vU35Hw5XjE5ycgIT8e9xAmfjERB2sP9M4yVJ5YELxAjrYn2JO+w2lBj0YwWhuNWN9Yhx+XNpVif/1+7Ly0C109NFLXfgm76/ZgZ80uNHQ04LumwzjY+C1W/bgKuTU53fcVXi5EYd0BfFT7kfD/npqPUdJcgmPNx2igjqGssQxFDUU4YTjpsA/Thk6DUiEZo8bax96jpCKvWO9YYUQdBvBKD+FJOpWud31JoRC+Z7GKc0+pUAn3WuntiSNPoGhKEYZ7j4BKqRSu29rQqrSCH0kf9SQeiXiEZkkXvCkySwxKclw08x6NcHU4zlvPO0tsWLSpspGOlCIdo4txWjhzWYjjRWMN0o+mI+e+XBo4tcN2x/nF4cGQFOnSDqWrI7QjcL7NKWlmxgE20sFyHuo2IQ2GaULR6tGK3Itf4p3TWQj1Cu3dWerdulNv4D9VW8hcu6Cl17q4dbg3eILDx+rUOqkIjdX5/D3samAS/XTjTh4zF79YzIyYgSVHnsGK8pWYFfqb3jkzzQY95df6lrPdcUKZoaxP0jK6yGxHZyMtmS00dzbLm7UKeQkv8+pPRT2Nb+oLsa1qO/59fougaUWPZfLx6MeQGpaKTqtJ8BnJw/ou1bV0tUg1y/h6eNgVd5ytVzhlOCVJRAGeACiud2SO12CxyaxxWShuKMZPVysdzogJARMxJyJNsu3G9kboW/VSRQbWO4uNdKuU0zneehztpnZo1VrHBIhblbEKk/YlCkRNZhNSw1Px+6hFgmmwe9g7CzSERI2/B6qHYtM9G5H8zXR00neu+5x690bFG9ii/1D430vBbHo9EoaO79WHckM56kx1lHw7neYsSu+wkW6UIl3ZViloJCmk95Lhp/ETSBs7jCgyftedfl6x1GPhyIXQKDToUpqEYsBQzVDhM3/NtT24+4MeQObYTCwvzoCfh+he/NX+wn36q3rorfru6V7SWOqQdHZdNqwKSaNmW5UtNtIXpCaFVWXF++fed0g6MWgSspM+Q217HVTcpi0WK8YNicUon2hkJ2YzXQtEZ4Q9jB0PbO+Vli6LWY4oXRTu9BMDww3jNuDh8IfA5oeCzyZvDx88HPZQr/YNHQZsu7RN9EzOeTPlNipY2Jh2Mm3GrrpdnzqtOFLLuqs6HBl/BHcG3jmoko41P6zBqppV4skJ56QLS+NK77OZvayjDm2aNrxw4oVBRbiqqQrrz62XsmWbnLCPvc+wvEHS79Eqt8ewB5tPbR4UhJmzTC9NR5O2SW5YWGxPut12QZK4L/BcxXPYf2H/LSf9/JHnsa9jnxxb5q4VRT3z6VxZLdGItvm3Ia0kDQcvHrxlhF8vex1Zl7PEWFJesFjOMtiepPMgnryS1jY5vCv+V5BanIqdP+28+SWi4+uxsnqlWBaQv+n3OXjGbU/6AicOucSbA5sx98e5yDicAUO74aYQfuXoK1iuX+4qYTa1d/RVAt7kSqYkfDuIMqEr6zBx70TsOL0DFrPlhpA1mox48sCTeLXmVbHS5Vr+8zXhWF+k8wklLhG3ihXlct9yzCufh8S8RHxw8gPUt9W7jXC1oRop+1Ow6eomVzVsk3/0zDp65DXCppdrhmrhT6KsvKijCEWnixBREYHJ/pMxNWQq4oPiEekbCR9PH5d7m6PPwdPHn4Zepxe3IVwnfJjbc5+khfIU4QAvmcJlrbPlg8LrC+YL2Nq+FVsrtkJ9Uo3bVLdhpGYkZlAO/dSYp+Dp4em8+GruQuaxTGSey4Q5UEw++nlS4UX0KBl69GH0bBOvEK7sT/ckz4IFnVirMFEufMZ8Bme6zqDgdAGCfYIxP7LvzZQfrvyApSVLUdBZcK2m0z/COxw5576yT7aIb3BHWUjorM3peYr2f9nxqQhYKUl5+/u3kXQgCQWqAtF+rejv8WvKM/GXvioJfQk7Hss2ANy3acUJRHr1rkOWXipFxrEM5Hfki95ZgYEevHmGcL6PTLlPYaEpO75wCW4UjUqDMd5juv+vN9ZjxeEVmPTtJOSr8q8dlB5YSW4tYbezmpEzYYfAf8dydG6hAxatRQsvqxeajE3YXrUdb1a9iUpV5UBt117YyaJVUoUyKSngGv+vnAKiVNxuUBgwvXC6cGyqmiV2/hiIZ+5VQCE8ITVP5J7VYVNlnmQtTY5Nqynq9zmJ6oBqcSor3UbY1kejZMXWBeofQ9zOrR4wcaVbHJW9ZHHCbXJuFumaZBNnMexkiKduB4OwLIcdpHkWcvYsVSJPZXfSJZ84q7I8yJ1Fyy0kvJ8vqe/JWzb4yl1jo8lir+2Qc5DKPkZnG8y/dLY03CChIFw4LTTVPnOCHHfNFrJaG2kWKW3k3feHK0cR2W+o2M9dfsU9Z9cNJMu2QFYQ4iEe4ZTnEdQca3jqobONgY3ka9z3zbELT+RJAUccX9dnQtzod4fNfsPX3v/BlZ/WKMS4X/iZGwuoP+uheKPReC0wWMezajaBornxy4+OSjle4hphTm8ixF/fhUoEOKz1eu4zSjhZlu2d6088ICjsKz4n7IJRi8UCodi/d+9eVFZWXh+A+vNuh8Adv4RkZNk5zXAx6xbKeZ78yWyZaRCtDRfdEvYqeSxZxluwy2Jnz56N/wswABP+6fSoyIDqAAAAAElFTkSuQmCC"
    },
    a432: function(t, e, a) {
      "use strict";
      var s = a("c380"),
      n = a.n(s);
      n.a
    },
    a982: function(t, e, a) {
      t.exports = a.p + "img/404error.a89f5676.png"
    },
    aa94: function(t, e, a) {},
    ad24: function(t, e, a) {
      "use strict";
      var s = a("f3c2"),
      n = a.n(s);
      n.a
    },
    b056: function(t, e, a) {},
    b1b1: function(t, e, a) {
      t.exports = a.p + "img/whatsapp.933bfa69.png"
    },
    b326: function(t, e, a) {},
    b47e: function(t, e, a) {
      "use strict";
      var s = a("7835"),
      n = a.n(s);
      n.a
    },
    b60b: function(t, e, a) {
      t.exports = a.p + "img/MY.e85838a4.png"
    },
    b7f2: function(t, e, a) {
      "use strict";
      var s = a("52c2"),
      n = a.n(s);
      n.a
    },
    b82d: function(t, e, a) {
      t.exports = a.p + "img/3win8.a5d7450f.png"
    },
    ba1b: function(t, e, a) {},
    bc88: function(t, e, a) {
      t.exports = a.p + "img/918kiss.0b1e723c.png"
    },
    c106: function(t, e, a) {},
    c380: function(t, e, a) {},
    c46d: function(t, e, a) {
      "use strict";
      var s = a("ba1b"),
      n = a.n(s);
      n.a
    },
    c599: function(t, e, a) {},
    c6b0: function(t, e, a) {},
    c95e: function(t, e, a) {},
    c964: function(t, e, a) {},
    cddb: function(t, e, a) {
      t.exports = a.p + "img/telegram.251ecfa5.png"
    },
    ceb3: function(t, e, a) {
      t.exports = a.p + "img/ambank.dfaeb582.png"
    },
    cf05: function(t, e, a) {
      t.exports = a.p + "img/logo.82b9c7a5.png"
    },
    cfbf: function(t, e, a) {
      t.exports = a.p + "img/UK.6f382b2d.png"
    },
    d02b: function(t, e, a) {},
    d23d: function(t, e, a) {
      "use strict";
      var s = a("aa94"),
      n = a.n(s);
      n.a
    },
    d4bf: function(t, e, a) {},
    d6c8: function(t, e, a) {},
    d7b6: function(t, e) {
      t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2RTQxMTIxNkFBRkMxMUU5OTU2RTgyOTY1MEU4QkE0MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2RTQxMTIxN0FBRkMxMUU5OTU2RTgyOTY1MEU4QkE0MCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZFNDExMjE0QUFGQzExRTk5NTZFODI5NjUwRThCQTQwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZFNDExMjE1QUFGQzExRTk5NTZFODI5NjUwRThCQTQwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uiAavgAACYRJREFUeNrkW3tQVNcZP/fu3ffCPtldZHktD10VQdFYJXbUMa0CdpLWxqQxph2bxDjVSf4wpp10apxprclkRptp83KSzDSTkEk70sRXM5rGSGIiE5QALiKwFRZ5w7Iv9nXv7fkWliiwy+ssEHsc5qLevff8vufv+863FM/zKB5rwB1EjXZn1n/bPfkdPd78rn6fxd7pTWN5XkshJMW34AvycTxyLNBJ7VqluCFjgaLaqJFeyU1LvK7XSELx2BdFErDDFRDUNjvuqarv29Lc5lzvcActwRCno6nwqxAjoMb9HItRwz5gKzRNORNkwsZUg6xi+ULtmWXZ6ovJOqlnXgGuvzlg/Lyq8xdXrvc92u8KFFAYl1BAI0EUgLEW7IbHAgiyHGJZHsmlTPMSs+rD9SuM7xRatPVzCrjR7tKfqrDvu1zX8+sQyxvEIgySpoiaIMaOAgEWYSF6LZnK94uLTC8XLtJaZxUw+Gf5hZYnz1e2Px8IciaJSAAbiuuCXQJwLAD3qsXaYw9uyjiSapC74g64rtmRc7z8xl/aur2bZRIAGmek46xBfwjJJcKaRzZn7tu4KvmzuAH+6PPWn/7j/M1XcZDRi4Q0mssF/h0IcaENK42/+1Vp9kuT3c+kAPuDHPrbh/UHLtV2/1mKzZemKTQfFuzcOxhClkzVW3u25T5l0EgDMwaMfRQdLbO+WHmtZ79CyqD5uLy+EErRyz46sDPvYYNG4p02YB8OEq98AGB798vnKVg0zGAG/SxKTpKdevbRJduMWqkv2r0xDf+tjxuf/bquZ16DjZi2RCxAt7q9JcfKrMdBUVPW8MmL9vv/fqbphExCHiwHxCLE4Stsdvz3i3GsYHCs4Kds3iy6Nz/p4N7tlhcmDdhqGzAffqfmMrYVLUkiAa8C6SsVQmROSUAmvQxFrCeyDQ7/QuE/X9V2o/aewah0dAKf5n9Zml2yZW3KmdH/N0Z9Lm+Qfr284XX8Yi3QQ2JpZJgvl95rQj/+wQKUpJbEvL+lw41aOzwYsGDK78LWQZV9YnstOzWxMCc1oSemD5/4rGVXW5d3k5AhB5YbLgyeeCAX7dhinhBsREBomsYFVolzdNp7Z5v/GH5ONMC2W27ducvth+QSAVGf9WMzLi5KQesKDLMWyIDuXrM5duGiZnVUwCcrWp8OBFkjSboIEtYkSlBJkWnWoze2UsHpL+0H/UF2LODmNlcSzre7QTIkFxCXxWYlSpQLp2yWBADjWODZfOnb7rVjgtb5yo6d/gCnlRE2ZwhU5gWKCcpMJ2qyu8MVF8AEC+vq902rnh4jOBx4L1zp3PvDFcYvQYZhwE5PkKmq731MTLgg4Ic3r1SIot7T3juIDr9dA3tA9G1ZAfZCIkvAc67fdG612hypS8yq1vATa5scK/tc/jwSEh1N+cLXGI/twZocxEFNLhMiGWZLkR+S+T/EcvKaxv6tIz78TX1vCY1Idyr44XTETywUfoh9RT4T/hzBvYiwL19t6PsJsDvG6Q1STXbnBpJ5N9LTitStsaI+hTUpxGbH4Ptvv43nhoRGYsGzO3p9q1o7vQamsdWVAd1FUjUuSNFkkKOnH7IgGiOATati+HBOaiI68pvCO4QCv717thnhkhSRyBrwaFxNaWqb+gsYHLaX401qRIQ0zIdNiEK4RJucuWHtjncv9juiTgb6xAyykL7V7Skg3b8ANjcTawS/h6hNkgCBBXc7fEvpzj6fhXQjjhrR9fTJCnQxSLaSwL1c3lA6be/0pDKE0xF/R1KaTleSRYM+lmjrF4TncAX0NHYVbTxaLjPZrNcfgmqHKGB4Fo5VStC0FM2z5R7EgDHhpwhzA4w13L8h+lTIv8CDDx2vHjoexP64bWM6Wr5QM+795yvb0aeVHQiOadAwFR3yXzoupxkA2E9Yirj+5YC/hn3Zh81zwJ0c9f6uPh+qszmQ/LbeGUUjRLLbcjtNYHAK6cf+nEkadOQkgONiN+4hYALBn42TDLyvATpFJ20b3QaZzTVbbwaKq04U99I6taQhXlMAU6mo4i5YDFEqFrTQ6Ub51TlU8OxpmOOQQSO10gattArXnq7/Bw0nqSRV9KIM5Q2YqeDmSM38LL2DYWhPXpaqitYmioNpRnkFlHV3q4YhYGmVom/NpoSbwLSAFJxi72INB0MsystWn8ZBiw8nv4JcTYVcyrRwcxCtqdnx31BelvrESE9Lr5Z4lprVZcCQ7rbQBeNP6UbFhfwcTd0IYFgbVhqPY0Lk4+fEpOP31gBW4tr8pL9GuPoI4IJc9Q1LpqrMH+Mw+fu2IFjpVOIr6wuNJ0fq4u94JoW2rjP9CbMuL3+XAIZ+98ZVyYdUClFwDGBY2M5v3LNEdxS6Dd/3BQ2EVL3s7JY1KeV3dD5GVznb78s8rJAyVjAHUivWKYIgDiNQkGzw/t0/35TxzOj5lDE1WUqSzL2j2PyEP8iGSEAGIfY5/agT170dvYPhs6TIFf4tfKZEuNKHBsKPVi94bk1e0phh1KhDLW+caNh/7nL7iyQmeAAQFPVjgjE1dMRCKv2D2Lx+FmWbEt77/a5lj4jHaeJHrbofK8l6CUftt70E/BlYXDDI4ZwI0zv8d9fhSR5SCyYGk9SSr/duX7RbHOXEIipg+MCebQufStFLP/bNMFWBxULXgw5f0W1XiljfCoQnEtLWJx/I3YbLwKjVX8y+ikEj8R/YmfdQsk56CnrF8zYiY80KGdr6zMOLS5ZmqewxhT+Zbkdn36Dk6PvWN5vbXDukEgZR8wgsKAKb8aXH7895cFm22j6htU22vQMPfrO84eAX1V1/kMyDidrIJG1OWuK7+7Zb9mBrnFQTY8oD4qe/aCv94JztGDYjM+kBmKn4a4jlnfetTn5+x2bzK+Ip7GNaXwG4ftOpL/vE9sI1m+NxGA0ieZg+UbQHS8MM6uTPNqY/V5Svr5tyAJ1uxxL6BZ9Wthf9+6u237Z0eEpgWkYcp94yaBSook4pqVxfaDhSXGT653Rnt2f8NR6ori5Wd62ruNq1u6HFWcqyXKJIODSUMt2Uw6OREX/4WzDNoPjPmjzdGxsKk/+lThTN6AtcRL+oVdPUn/GNtbe4tslRimnjqhDL6QBzOAfjn2i8eWigBUByYdbFMLRbqxRV52Wpzy42q8pXLNTWRurZGbOxeDThQeu2W+5krPH81k7Pit4B/xKHO5AB57OYWSmx5sXDTDAAh/1KhagnQca0GrRSa5JKcmVxprIqOzXBFo9Z7f8JMACPEFSuAbrOYAAAAABJRU5ErkJggg=="
    },
    dbd8: function(t, e, a) {
      "use strict";
      var s = a("d6c8"),
      n = a.n(s);
      n.a
    },
    df9c: function(t, e, a) {
      "use strict";
      var s = a("8898"),
      n = a.n(s);
      n.a
    },
    e009: function(t, e, a) {},
    e47d: function(t, e, a) {
      "use strict";
      var s = a("36b1"),
      n = a.n(s);
      n.a
    },
    e6d0: function(t, e, a) {
      t.exports = a.p + "img/coming-soon.bc938fdf.png"
    },
    e767: function(t, e, a) {
      t.exports = a.p + "img/RHB.c0a9b11b.png"
    },
    e8e7: function(t, e, a) {
      t.exports = a.p + "img/facebook.32415579.jpg"
    },
    e95e: function(t, e, a) {},
    f3c2: function(t, e, a) {},
    f4a8: function(t, e, a) {
      t.exports = a.p + "img/BSN.3f49a6ae.png"
    },
    f6f5: function(t, e, a) {
      t.exports = a.p + "img/download.4779ea67.png"
    },
    f7f6: function(t, e, a) {
      "use strict";
      var s = a("c95e"),
      n = a.n(s);
      n.a
    },
    f8ba: function(t, e, a) {},
    fd0d: function(t, e, a) {},
    ffcb: function(t, e, a) {
      t.exports = a.p + "img/Standard-Chartered.c70c4a91.png"
    }
  });
  //# sourceMappingURL=app.b65d613b.js.map
  
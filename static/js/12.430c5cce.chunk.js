(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [12], {
        1524: function(e, t, n) {
            "use strict";
            n.r(t);
            var r, c, o, a, s, i, u, j, b, l, d, p = n(8),
                f = n(1),
                O = n(2),
                x = n(5),
                h = n(189),
                g = n(86),
                m = n(14),
                v = n(248),
                y = Object(x.e)(O.db)(r || (r = Object(p.a)(["\n  display: none;\n\n  ", " {\n    display: block;\n  }\n"])), (function(e) { return e.theme.mediaQueries.lg })),
                C = n(0),
                w = Object(x.e)(O.n)(c || (c = Object(p.a)(["\n  background: ", ";\n  padding-bottom: 32px;\n  padding-top: 32px;\n"])), (function(e) { return e.theme.colors.gradients.bubblegum })),
                k = function() { var e = Object(m.b)().t; return Object(C.jsx)(w, { children: Object(C.jsx)(v.a, { children: Object(C.jsxs)(O.X, { alignItems: "center", justifyContent: "space-between", children: [Object(C.jsxs)(O.n, { pr: "32px", children: [Object(C.jsx)(O.Z, { as: "h1", scale: "xxl", color: "secondary", mb: "16px", children: e("Voting") }), Object(C.jsx)(O.Z, { as: "h3", scale: "lg", mb: "16px", children: e("Have your say in the future of the Milker Swap Ecosystem") }), Object(C.jsx)(O.r, { startIcon: Object(C.jsx)(O.Qb, { color: "currentColor", width: "24px" }), as: g.a, to: "/voting/proposal/create", children: e("Make a Proposal") })] }), Object(C.jsx)(y, { src: "/images/voting/voting-presents.png", width: 361, height: 214 })] }) }) }) },
                I = Object(x.e)(O.n)(o || (o = Object(p.a)(["\n  background: ", ";\n  padding-bottom: 32px;\n  padding-top: 32px;\n"])), (function(e) { return e.theme.colors.gradients.bubblegum })),
                S = function() { var e = Object(m.b)().t; return Object(C.jsx)(I, { children: Object(C.jsx)(v.a, { children: Object(C.jsxs)(O.X, { alignItems: "center", justifyContent: "space-between", children: [Object(C.jsxs)(O.n, { pr: "32px", children: [Object(C.jsx)(O.Z, { as: "h2", scale: "lg", mb: "16px", children: e("Got a suggestion?") }), Object(C.jsx)(O.nc, { as: "p", children: e("Community proposals are a great way to see how the community feels about your ideas.") }), Object(C.jsx)(O.nc, { as: "p", mb: "16px", children: e("They won't necessarily be implemented if the community votes successful, but suggestions with a lot of community support may be made into Core proposals.") }), Object(C.jsx)(O.r, { startIcon: Object(C.jsx)(O.Qb, { color: "currentColor", width: "24px" }), as: g.a, to: "/voting/proposal/create", children: e("Make a Proposal") })] }), Object(C.jsx)(y, { src: "/images/voting/voting-bunny.png", width: 173, height: 234 })] }) }) }) },
                E = n(6),
                T = n(9),
                L = n(62),
                N = n(383),
                A = n(846),
                D = n(51),
                M = n(807),
                P = n(819),
                X = n.n(P),
                U = n(811),
                V = Object(x.e)(O.X)(a || (a = Object(p.a)(["\n  border-bottom: 1px solid ", ";\n"])), (function(e) { return e.theme.colors.cardBorder })),
                B = x.e.div(s || (s = Object(p.a)(["\n  ", ":last-child {\n    border-bottom: 0;\n  }\n"])), V),
                F = function() { return Object(C.jsx)(B, { children: X()(U.d).map((function(e) { return Object(C.jsxs)(V, { alignItems: "center", justifyContent: "space-between", py: "16px", px: "24px", children: [Object(C.jsxs)(O.n, { style: { flex: 1 }, children: [Object(C.jsx)(O.Ub, { height: "21px", width: "70%", mb: "4px" }), Object(C.jsx)(O.Ub, { height: "21px", width: "30%", mb: "4px" }), Object(C.jsx)(O.Ub, { height: "21px", width: "40%" })] }), Object(C.jsx)(O.Ub, { height: "32px", width: "32px" })] }, e) })) }) },
                G = x.e.div(i || (i = Object(p.a)(["\n  background-color: ", ";\n  padding-top: 16px;\n"])), (function(e) { return e.theme.colors.input })),
                H = function(e) {
                    switch (e) {
                        case D.f.COMMUNITY:
                            return 1;
                        case D.f.ALL:
                            return 2;
                        case D.f.CORE:
                        default:
                            return 0
                    }
                },
                R = function(e) {
                    var t = e.proposalType,
                        n = e.onTypeChange,
                        r = Object(m.b)().t;
                    return Object(C.jsx)(G, {
                        children: Object(C.jsxs)(O.ic, {
                            activeIndex: H(t),
                            onItemClick: function(e) {
                                n(function(e) {
                                    switch (e) {
                                        case 1:
                                            return D.f.COMMUNITY;
                                        case 2:
                                            return D.f.ALL;
                                        default:
                                            return D.f.CORE
                                    }
                                }(e))
                            },
                            children: [Object(C.jsx)(O.hc, { children: Object(C.jsxs)(O.X, { alignItems: "center", children: [Object(C.jsx)(O.Ac, { color: "currentColor", mr: "4px" }), r("Core")] }) }), Object(C.jsxs)(O.hc, { children: [" ", Object(C.jsxs)(O.X, { alignItems: "center", children: [Object(C.jsx)(O.O, { color: "currentColor", mr: "4px" }), r("Community")] })] }), Object(C.jsx)(O.hc, { children: "All" })]
                        })
                    })
                },
                Z = n(21),
                J = n(774),
                Q = function(e) { var t = Object(Z.default)(1e3 * e); return Object(J.default)(t, "MMM do, yyyy HH:mm") },
                Y = function(e) {
                    var t = e.startDate,
                        n = e.endDate,
                        r = e.proposalState,
                        c = Object(m.b)().t,
                        o = { fontSize: "16px", color: "textSubtle", ml: "8px" };
                    return r === D.e.CLOSED ? Object(C.jsx)(O.nc, Object(E.a)(Object(E.a)({}, o), {}, { children: c("Ended %date%", { date: Q(n) }) })) : r === D.e.PENDING ? Object(C.jsx)(O.nc, Object(E.a)(Object(E.a)({}, o), {}, { children: c("Starts %date%", { date: Q(t) }) })) : Object(C.jsx)(O.nc, Object(E.a)(Object(E.a)({}, o), {}, { children: c("Ends %date%", { date: Q(n) }) }))
                },
                _ = n(864),
                z = Object(x.e)(g.a)(u || (u = Object(p.a)(["\n  align-items: center;\n  border-bottom: 1px solid ", ";\n  display: flex;\n  padding: 16px 24px;\n\n  &:hover {\n    background-color: ", ";\n  }\n"])), (function(e) { return e.theme.colors.cardBorder }), (function(e) { return e.theme.colors.dropdown })),
                K = function(e) {
                    var t = e.proposal,
                        n = "/voting/proposal/".concat(t.id);
                    return Object(C.jsxs)(z, { to: n, children: [Object(C.jsxs)(O.n, { as: "span", style: { flex: 1 }, children: [Object(C.jsx)(O.nc, { bold: !0, mb: "8px", children: t.title }), Object(C.jsx)(O.X, { alignItems: "center", mb: "8px", children: Object(C.jsx)(Y, { startDate: t.start, endDate: t.end, proposalState: t.state }) }), Object(C.jsxs)(O.X, { alignItems: "center", children: [Object(C.jsx)(_.a, { proposalState: t.state }), Object(C.jsx)(_.b, { isCoreProposal: Object(M.h)(t), ml: "8px" })] })] }), Object(C.jsx)(O.cb, { variant: "text", children: Object(C.jsx)(O.f, { width: "24px" }) })] })
                },
                q = Object(x.e)(O.X).attrs({ alignItems: "center" })(j || (j = Object(p.a)(["\n  border-bottom: 1px solid ", ";\n  padding: 16px 24px;\n"])), (function(e) { return e.theme.colors.cardBorder })),
                W = x.e.label(b || (b = Object(p.a)(["\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  margin-right: 16px;\n"]))),
                $ = [{ value: D.e.ACTIVE, label: "Vote Now" }, { value: D.e.PENDING, label: "Soon" }, { value: D.e.CLOSED, label: "Closed" }],
                ee = function(e) {
                    var t = e.filterState,
                        n = e.onFilterChange,
                        r = e.isLoading,
                        c = Object(m.b)().t;
                    return Object(C.jsx)(q, {
                        children: $.map((function(e) {
                            var o = e.value,
                                a = e.label;
                            return Object(C.jsxs)(W, {
                                children: [Object(C.jsx)(O.Rb, {
                                    scale: "sm",
                                    value: o,
                                    checked: t === o,
                                    onChange: function(e) {
                                        var t = e.currentTarget.value;
                                        n(t)
                                    },
                                    disabled: r
                                }), Object(C.jsx)(O.nc, { ml: "8px", children: c(a) })]
                            }, a)
                        }))
                    })
                },
                te = function() {
                    var e = Object(m.b)().t,
                        t = Object(f.useState)({ proposalType: D.f.CORE, filterState: D.e.ACTIVE }),
                        n = Object(T.a)(t, 2),
                        r = n[0],
                        c = n[1],
                        o = Object(A.b)(),
                        a = Object(A.c)(),
                        s = Object(L.b)(),
                        i = r.proposalType,
                        u = r.filterState,
                        j = o === D.h.LOADING,
                        b = o === D.h.IDLE;
                    Object(f.useEffect)((function() { s(Object(N.c)({ first: 1e3, state: u })) }), [u, s]);
                    var l = Object(M.b)(Object(M.c)(a, i), u);
                    return Object(C.jsxs)(v.a, { py: "40px", children: [Object(C.jsx)(O.n, { mb: "48px", children: Object(C.jsxs)(O.o, { children: [Object(C.jsx)(g.a, { to: "/", children: e("Home") }), Object(C.jsx)(O.nc, { children: e("Voting") })] }) }), Object(C.jsx)(O.Z, { as: "h2", scale: "xl", mb: "32px", id: "voting-proposals", children: e("Proposals") }), Object(C.jsxs)(O.v, { children: [Object(C.jsx)(R, { proposalType: i, onTypeChange: function(e) { c((function(t) { return Object(E.a)(Object(E.a)({}, t), {}, { proposalType: e }) })) } }), Object(C.jsx)(ee, { filterState: u, onFilterChange: function(e) { c((function(t) { return Object(E.a)(Object(E.a)({}, t), {}, { filterState: e }) })) }, isLoading: j }), j && Object(C.jsx)(F, {}), b && l.length > 0 && l.map((function(e) { return Object(C.jsx)(K, { proposal: e }, e.id) })), b && 0 === l.length && Object(C.jsx)(O.X, { alignItems: "center", justifyContent: "center", p: "32px", children: Object(C.jsx)(O.Z, { as: "h5", children: e("No proposals found") }) })] })] })
                },
                ne = x.e.div(l || (l = Object(p.a)(["\n  flex: none;\n"]))),
                re = x.e.div(d || (d = Object(p.a)(["\n  flex: 1;\n  height: 100%;\n"])));
            t.default = function() { return Object(C.jsxs)(C.Fragment, { children: [Object(C.jsx)(h.a, {}), Object(C.jsxs)(O.X, { flexDirection: "column", minHeight: "calc(100vh - 64px)", children: [Object(C.jsx)(ne, { children: Object(C.jsx)(k, {}) }), Object(C.jsx)(re, { children: Object(C.jsx)(te, {}) }), Object(C.jsx)(ne, { children: Object(C.jsx)(S, {}) })] })] }) }
        },
        807: function(e, t, n) {
            "use strict";
            n.d(t, "h", (function() { return p })), n.d(t, "c", (function() { return f })), n.d(t, "b", (function() { return O })), n.d(t, "d", (function() { return x })), n.d(t, "e", (function() { return h })), n.d(t, "i", (function() { return g })), n.d(t, "g", (function() { return m })), n.d(t, "a", (function() { return v })), n.d(t, "f", (function() { return y }));
            var r = n(19),
                c = n(32),
                o = n(6),
                a = n(3),
                s = n.n(a),
                i = n(13),
                u = n(96),
                j = n(33),
                b = n(51),
                l = n(97),
                d = n(811),
                p = function(e) { return e.author.toLowerCase() === d.a.toLowerCase() },
                f = function(e, t) {
                    switch (t) {
                        case b.f.COMMUNITY:
                            return e.filter((function(e) { return !p(e) }));
                        case b.f.CORE:
                            return e.filter((function(e) { return p(e) }));
                        case b.f.ALL:
                        default:
                            return e
                    }
                },
                O = function(e, t) { return e.filter((function(e) { return e.state === t })) },
                x = function() { return { plugins: {}, network: 56, strategies: [{ name: "cyber cows", params: { symbol: "CYBER COWS", address: j.a.cake.address, decimals: 18 } }] } },
                h = function() { return { version: d.e, timestamp: (Date.now() / 1e3).toFixed(), space: d.c } },
                g = function() {
                    var e = Object(i.a)(s.a.mark((function e(t) {
                        var n, r, c;
                        return s.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch(u.i, { method: "post", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify(t) });
                                case 2:
                                    if ((n = e.sent).ok) { e.next = 8; break }
                                    return e.next = 6, n.json();
                                case 6:
                                    throw r = e.sent, new Error(null === r || void 0 === r ? void 0 : r.error_description);
                                case 8:
                                    return e.next = 10, n.json();
                                case 10:
                                    return c = e.sent, e.abrupt("return", c);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                m = function() {
                    var e = Object(i.a)(s.a.mark((function e(t, n, r) {
                        var c, o, a;
                        return s.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.t0 = r, e.t0) { e.next = 5; break }
                                    return e.next = 4, l.a.getBlockNumber();
                                case 4:
                                    e.t0 = e.sent;
                                case 5:
                                    return c = e.t0, e.next = 8, fetch("".concat(u.j, "/power"), { method: "post", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ address: t, block: c, poolAddresses: n }) });
                                case 8:
                                    return o = e.sent, e.next = 11, o.json();
                                case 11:
                                    return a = e.sent, e.abrupt("return", a.data);
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, r) { return e.apply(this, arguments) }
                }(),
                v = function(e) { return e.reduce((function(e, t) { var n = t.proposal.choices[t.choice - 1]; return Object(o.a)(Object(o.a)({}, e), {}, Object(r.a)({}, n, e[n] ? [].concat(Object(c.a)(e[n]), [t]) : [t])) }), {}) },
                y = function(e) { return e.reduce((function(e, t) { var n; return e + parseFloat(null === (n = t.metadata) || void 0 === n ? void 0 : n.votingPower) }), 0) }
        },
        811: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() { return r })), n.d(t, "a", (function() { return c })), n.d(t, "b", (function() { return o })), n.d(t, "e", (function() { return a })), n.d(t, "c", (function() { return s })), n.d(t, "f", (function() { return i }));
            var r = 10,
                c = "0x6eaf1b33b8672c5dc40aB8f4bA3A0111723126c7",
                o = "https://gateway.ipfs.io/ipfs",
                a = "0.1.3",
                s = "cake.eth",
                i = 10
        },
        819: function(e, t, n) {
            var r = n(494),
                c = n(845),
                o = n(820),
                a = 4294967295,
                s = Math.min;
            e.exports = function(e, t) {
                if ((e = o(e)) < 1 || e > 9007199254740991) return [];
                var n = a,
                    i = s(e, a);
                t = c(t), e -= a;
                for (var u = r(i, t); ++n < e;) t(n);
                return u
            }
        },
        820: function(e, t, n) {
            var r = n(493);
            e.exports = function(e) {
                var t = r(e),
                    n = t % 1;
                return t === t ? n ? t - n : t : 0
            }
        },
        845: function(e, t, n) {
            var r = n(251);
            e.exports = function(e) { return "function" == typeof e ? e : r }
        },
        846: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() { return c })), n.d(t, "a", (function() { return o })), n.d(t, "d", (function() { return a })), n.d(t, "e", (function() { return s })), n.d(t, "b", (function() { return i }));
            var r = n(23),
                c = function() { var e = Object(r.c)((function(e) { return e.voting.proposals })); return Object.values(e) },
                o = function(e) { return Object(r.c)((function(t) { return t.voting.proposals[e] })) },
                a = function(e) { var t = Object(r.c)((function(t) { return t.voting.votes[e] })); return t ? t.filter((function(e) { return !0 !== e._inValid })) : [] },
                s = function() { return Object(r.c)((function(e) { return e.voting.voteLoadingStatus })) },
                i = function() { return Object(r.c)((function(e) { return e.voting.proposalLoadingStatus })) }
        },
        864: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return j })), n.d(t, "b", (function() { return b }));
            var r = n(6),
                c = n(53),
                o = (n(1), n(195)),
                a = n(51),
                s = n(0),
                i = ["proposalState"],
                u = ["isCoreProposal"],
                j = function(e) {
                    var t = e.proposalState,
                        n = Object(c.a)(e, i);
                    return t === a.e.ACTIVE ? Object(s.jsx)(o.h, Object(r.a)({}, n)) : t === a.e.PENDING ? Object(s.jsx)(o.g, Object(r.a)({}, n)) : Object(s.jsx)(o.a, Object(r.a)({}, n))
                },
                b = function(e) {
                    var t = e.isCoreProposal,
                        n = Object(c.a)(e, u);
                    return t ? Object(s.jsx)(o.d, Object(r.a)({}, n)) : Object(s.jsx)(o.b, Object(r.a)({}, n))
                }
        }
    }
]);
//# sourceMappingURL=12.430c5cce.chunk.js.map
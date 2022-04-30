(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [27], {
        1518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() { return ur }));
            var r, c = n(6),
                a = n(9),
                i = n(8),
                s = n(1),
                l = n.n(s),
                o = n(79),
                d = n(15),
                b = n.n(d),
                j = n(43),
                u = n(2),
                p = n(4),
                x = n(5),
                O = n(449),
                h = n(189),
                m = n(98),
                f = n(396),
                g = n(14),
                v = n(31),
                y = n(388),
                k = n(123),
                w = n(415),
                S = n(357),
                C = n(47),
                T = n(42),
                A = n(384),
                D = n(455),
                L = n(397),
                q = n(398),
                P = n(38),
                R = n(0),
                U = x.e.div(r || (r = Object(i.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ", ";\n  }\n"])), (function(e) { return e.theme.colors.primary })),
                B = function(e) {
                    var t = e.onClick,
                        n = e.expanded,
                        r = Object(g.b)().t;
                    return Object(R.jsxs)(U, { "aria-label": r("Hide or show expandable content"), role: "button", onClick: function() { return t() }, children: [Object(R.jsx)(u.nc, { color: "primary", bold: !0, children: r(n ? "Hide" : "Details") }), n ? Object(R.jsx)(u.K, {}) : Object(R.jsx)(u.H, {})] })
                };
            B.defaultProps = { expanded: !1 };
            var N, F, z, E, I, M, Q, X, W, G, V, H, Z, Y, _, K, $, J, ee, te, ne, re, ce, ae, ie, se, le, oe, de, be, je, ue, pe, xe, Oe, he, me, fe, ge, ve, ye, ke, we, Se, Ce, Te, Ae, De, Le, qe, Pe, Re, Ue, Be, Ne, Fe, ze, Ee, Ie, Me, Qe, Xe, We, Ge, Ve, He, Ze, Ye, _e = B,
                Ke = n(50),
                $e = n(36),
                Je = n(33),
                et = function(e) {
                    var t = e.quoteTokenAddress,
                        n = e.tokenAddress,
                        r = Je.a.wbnb.address,
                        c = n && n !== r ? n : "BNB";
                    return "".concat(t && t !== r ? t : "BNB", "/").concat(c)
                },
                tt = x.e.div(N || (N = Object(i.a)(["\n  margin-top: 24px;\n"]))),
                nt = Object(x.e)(u.jb)(F || (F = Object(i.a)(["\n  font-weight: 400;\n"]))),
                rt = function(e) {
                    var t = e.bscScanAddress,
                        n = e.infoAddress,
                        r = e.removed,
                        c = e.totalValueFormatted,
                        a = e.lpLabel,
                        i = e.addLiquidityUrl,
                        s = Object(g.b)().t;
                    return Object(R.jsxs)(tt, { children: [Object(R.jsxs)(u.X, { justifyContent: "space-between", children: [Object(R.jsxs)(u.nc, { children: [s("Total Liquidity"), ":"] }), c ? Object(R.jsx)(u.nc, { children: c }) : Object(R.jsx)(u.Ub, { width: 75, height: 25 })] }), !r && Object(R.jsx)(nt, { href: i, children: s("Get %symbol%", { symbol: a }) }), Object(R.jsx)(nt, { href: t, children: s("View Contract") }), Object(R.jsx)(nt, { href: n, children: s("See Pair Info") })] })
                },
                ct = n(195),
                at = n(257),
                it = Object(x.e)(u.X)(z || (z = Object(i.a)(["\n  svg {\n    margin-right: 4px;\n  }\n"]))),
                st = Object(x.e)(u.kc)(E || (E = Object(i.a)(["\n  margin-left: 4px;\n"]))),
                lt = function(e) {
                    var t = e.lpLabel,
                        n = e.multiplier,
                        r = e.isCommunityFarm,
                        c = e.token,
                        a = e.quoteToken;
                    return Object(R.jsxs)(it, { justifyContent: "space-between", alignItems: "center", mb: "12px", children: [Object(R.jsx)(at.b, { variant: "inverted", primaryToken: c, secondaryToken: a, width: 64, height: 64 }), Object(R.jsxs)(u.X, { flexDirection: "column", alignItems: "flex-end", children: [Object(R.jsx)(u.Z, { mb: "4px", children: t.split(" ")[0] }), Object(R.jsxs)(u.X, { justifyContent: "center", children: [r ? Object(R.jsx)(ct.b, {}) : Object(R.jsx)(ct.d, {}), n ? Object(R.jsx)(st, { variant: "secondary", children: n }) : Object(R.jsx)(u.Ub, { ml: "4px", width: 42, height: 28 })] })] })] })
                },
                ot = n(3),
                dt = n.n(ot),
                bt = n(13),
                jt = n(62),
                ut = n(125),
                pt = n(45),
                xt = n(108),
                Ot = n(44),
                ht = x.e.div(I || (I = Object(i.a)(["\n  height: ", "px;\n  width: ", "px;\n"])), (function(e) { return e.size }), (function(e) { return e.size })),
                mt = function(e) {
                    var t, n = e.size,
                        r = void 0 === n ? "md" : n,
                        c = Object(s.useContext)(x.a).spacing;
                    switch (r) {
                        case "lg":
                            t = c[6];
                            break;
                        case "sm":
                            t = c[2];
                            break;
                        case "md":
                        default:
                            t = c[4]
                    }
                    return Object(R.jsx)(ht, { size: t })
                },
                ft = x.e.div(M || (M = Object(i.a)(["\n  align-items: center;\n  background-color: ", "00;\n  display: flex;\n  margin: 0;\n  padding: ", "px 0;\n"])), (function(e) { return e.theme.colors.primaryDark }), (function(e) { return e.theme.spacing[4] })),
                gt = x.e.div(Q || (Q = Object(i.a)(["\n  flex: 1;\n"]))),
                vt = function(e) {
                    var t = e.children,
                        n = l.a.Children.toArray(t).length;
                    return Object(R.jsx)(ft, { children: l.a.Children.map(t, (function(e, t) { return Object(R.jsxs)(R.Fragment, { children: [Object(R.jsx)(gt, { children: e }), t < n - 1 && Object(R.jsx)(mt, {})] }) })) })
                },
                yt = n(64),
                kt = x.e.div(X || (X = Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  padding: 8px 16px 8px 0;\n  width: 100%;\n"])), (function(e) { return e.theme.colors.input }), (function(e) {
                    var t = e.isWarning,
                        n = void 0 !== t && t,
                        r = e.theme;
                    return n ? r.shadows.warning : r.shadows.inset
                }), (function(e) { return e.theme.colors.text })),
                wt = Object(x.e)(u.fb)(W || (W = Object(i.a)(["\n  box-shadow: none;\n  width: 60px;\n  margin: 0 8px;\n  padding: 0 8px;\n  border: none;\n\n  ", " {\n    width: 80px;\n  }\n\n  ", " {\n    width: auto;\n  }\n"])), (function(e) { return e.theme.mediaQueries.xs }), (function(e) { return e.theme.mediaQueries.sm })),
                St = Object(x.e)(u.nc)(G || (G = Object(i.a)(["\n  position: absolute;\n  bottom: -22px;\n  a {\n    display: inline;\n  }\n"]))),
                Ct = function(e) {
                    var t = e.max,
                        n = e.symbol,
                        r = e.onChange,
                        c = e.onSelectMax,
                        a = e.value,
                        i = e.addLiquidityUrl,
                        s = e.inputTitle,
                        l = e.decimals,
                        o = void 0 === l ? 18 : l,
                        d = Object(g.b)().t,
                        b = "0" === t || !t;
                    return Object(R.jsxs)("div", { style: { position: "relative" }, children: [Object(R.jsxs)(kt, { isWarning: b, children: [Object(R.jsxs)(u.X, { justifyContent: "space-between", pl: "16px", children: [Object(R.jsx)(u.nc, { fontSize: "14px", children: s }), Object(R.jsx)(u.nc, { fontSize: "14px", children: d("Balance: %balance%", { balance: function(e) { if (b) return "0"; var t = Object(yt.parseUnits)(e, o); return Object(v.a)(t, o, o) }(t) }) })] }), Object(R.jsxs)(u.X, { alignItems: "flex-end", justifyContent: "space-around", children: [Object(R.jsx)(wt, { pattern: "^[0-9]*[.,]?[0-9]{0,".concat(o, "}$"), inputMode: "decimal", step: "any", min: "0", onChange: r, placeholder: "0", value: a }), Object(R.jsx)(u.r, { scale: "sm", onClick: c, mr: "8px", children: d("Max") }), Object(R.jsx)(u.nc, { fontSize: "16px", children: n })] })] }), b && Object(R.jsxs)(St, { fontSize: "14px", color: "failure", children: [d("No tokens to stake"), ":", " ", Object(R.jsx)(u.ib, { fontSize: "14px", bold: !1, href: i, external: !0, color: "failure", children: d("Get %symbol%", { symbol: n }) })] })] })
                },
                Tt = n(162),
                At = n(95),
                Dt = n(119),
                Lt = Object(x.e)(u.X)(V || (V = Object(i.a)(["\n  cursor: pointer;\n"]))),
                qt = Object(x.e)(u.nc)(H || (H = Object(i.a)(["\n  width: 72px;\n  max-width: 72px;\n  overflow: hidden;\n  text-align: right;\n  text-overflow: ellipsis;\n"]))),
                Pt = function(e) {
                    var t = e.max,
                        n = e.stakedBalance,
                        r = e.onConfirm,
                        c = e.onDismiss,
                        i = e.tokenName,
                        l = void 0 === i ? "" : i,
                        o = e.multiplier,
                        d = e.displayApr,
                        j = e.lpPrice,
                        p = e.lpLabel,
                        x = e.apr,
                        O = e.addLiquidityUrl,
                        h = e.cakePrice,
                        m = Object(s.useState)(""),
                        f = Object(a.a)(m, 2),
                        y = f[0],
                        k = f[1],
                        w = Object(At.a)(),
                        S = w.toastSuccess,
                        C = w.toastError,
                        T = Object(s.useState)(!1),
                        A = Object(a.a)(T, 2),
                        D = A[0],
                        L = A[1],
                        q = Object(s.useState)(!1),
                        P = Object(a.a)(q, 2),
                        U = P[0],
                        B = P[1],
                        N = Object(g.b)().t,
                        F = Object(s.useMemo)((function() { return Object(v.i)(t) }), [t]),
                        z = new b.a(y),
                        E = new b.a(F),
                        I = z.times(j),
                        M = Object(Dt.b)({ principalInUSD: z.isNaN() ? 0 : I.toNumber(), apr: x, earningTokenPrice: h.toNumber() }),
                        Q = h.times(M[3]),
                        X = Object(v.e)(Q.toNumber(), Q.gt(1e4) ? 0 : 2, Q.gt(1e4) ? 0 : 2),
                        W = Object(s.useCallback)((function(e) { e.currentTarget.validity.valid && k(e.currentTarget.value.replace(/,/g, ".")) }), [k]),
                        G = Object(s.useCallback)((function() { k(F) }), [F, k]);
                    return U ? Object(R.jsx)(Tt.a, { linkLabel: N("Get %symbol%", { symbol: p }), stakingTokenBalance: n.plus(t), stakingTokenSymbol: l, stakingTokenPrice: j.toNumber(), earningTokenPrice: h.toNumber(), apr: x, multiplier: o, displayApr: d, linkHref: O, isFarm: !0, initialValue: y, onBack: function() { return B(!1) } }) : Object(R.jsxs)(u.wb, {
                        title: N("Stake LP tokens"),
                        onDismiss: c,
                        children: [Object(R.jsx)(Ct, { value: y, onSelectMax: G, onChange: W, max: F, symbol: l, addLiquidityUrl: O, inputTitle: N("Stake") }), Object(R.jsxs)(u.X, { mt: "24px", alignItems: "center", justifyContent: "space-between", children: [Object(R.jsxs)(u.nc, { mr: "8px", color: "textSubtle", children: [N("Annual ROI at current rates"), ":"] }), Object(R.jsxs)(Lt, { alignItems: "center", onClick: function() { return B(!0) }, children: [Object(R.jsxs)(qt, { children: ["$", X] }), Object(R.jsx)(u.cb, { variant: "text", scale: "sm", children: Object(R.jsx)(u.u, { color: "textSubtle", width: "18px" }) })] })] }), Object(R.jsxs)(vt, {
                            children: [Object(R.jsx)(u.r, { variant: "secondary", onClick: c, width: "100%", disabled: D, children: N("Cancel") }), Object(R.jsx)(u.r, {
                                width: "100%",
                                disabled: D || !z.isFinite() || z.eq(0) || z.gt(E),
                                onClick: Object(bt.a)(dt.a.mark((function e() {
                                    return dt.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return L(!0), e.prev = 1, e.next = 4, r(y);
                                            case 4:
                                                S(N("Staked!"), N("Your funds have been staked in the farm")), c(), e.next = 12;
                                                break;
                                            case 8:
                                                e.prev = 8, e.t0 = e.catch(1), C(N("Error"), N("Please try again. Confirm the transaction and make sure you are paying enough gas!")), console.error(e.t0);
                                            case 12:
                                                return e.prev = 12, L(!1), e.finish(12);
                                            case 15:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [1, 8, 12, 15]
                                    ])
                                }))),
                                children: N(D ? "Confirming" : "Confirm")
                            })]
                        }), Object(R.jsx)(u.jb, { href: O, style: { alignSelf: "center" }, children: N("Get %symbol%", { symbol: l }) })]
                    })
                },
                Rt = function(e) {
                    var t = e.onConfirm,
                        n = e.onDismiss,
                        r = e.max,
                        c = e.tokenName,
                        i = void 0 === c ? "" : c,
                        l = Object(s.useState)(""),
                        o = Object(a.a)(l, 2),
                        d = o[0],
                        j = o[1],
                        p = Object(At.a)(),
                        x = p.toastSuccess,
                        O = p.toastError,
                        h = Object(s.useState)(!1),
                        m = Object(a.a)(h, 2),
                        f = m[0],
                        y = m[1],
                        k = Object(g.b)().t,
                        w = Object(s.useMemo)((function() { return Object(v.i)(r) }), [r]),
                        S = new b.a(d),
                        C = new b.a(w),
                        T = Object(s.useCallback)((function(e) { e.currentTarget.validity.valid && j(e.currentTarget.value.replace(/,/g, ".")) }), [j]),
                        A = Object(s.useCallback)((function() { j(w) }), [w, j]);
                    return Object(R.jsxs)(u.wb, {
                        title: k("Unstake LP tokens"),
                        onDismiss: n,
                        children: [Object(R.jsx)(Ct, { onSelectMax: A, onChange: T, value: d, max: w, symbol: i, inputTitle: k("Unstake") }), Object(R.jsxs)(vt, {
                            children: [Object(R.jsx)(u.r, { variant: "secondary", onClick: n, width: "100%", disabled: f, children: k("Cancel") }), Object(R.jsx)(u.r, {
                                disabled: f || !S.isFinite() || S.eq(0) || S.gt(C),
                                onClick: Object(bt.a)(dt.a.mark((function e() {
                                    return dt.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return y(!0), e.prev = 1, e.next = 4, t(d);
                                            case 4:
                                                x(k("Unstaked!"), k("Your earnings have also been harvested to your wallet")), n(), e.next = 12;
                                                break;
                                            case 8:
                                                e.prev = 8, e.t0 = e.catch(1), O(k("Error"), k("Please try again. Confirm the transaction and make sure you are paying enough gas!")), console.error(e.t0);
                                            case 12:
                                                return e.prev = 12, y(!1), e.finish(12);
                                            case 15:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [1, 8, 12, 15]
                                    ])
                                }))),
                                width: "100%",
                                children: k(f ? "Confirming" : "Confirm")
                            })]
                        })]
                    })
                },
                Ut = n(191),
                Bt = function(e) {
                    var t = Object(pt.n)();
                    return {
                        onUnstake: Object(s.useCallback)(function() {
                            var n = Object(bt.a)(dt.a.mark((function n(r) {
                                return dt.a.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.next = 2, Object(Ut.e)(t, e, r);
                                        case 2:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function(e) { return n.apply(this, arguments) }
                        }(), [t, e])
                    }
                },
                Nt = function(e) {
                    var t = Object(pt.n)();
                    return {
                        onStake: Object(s.useCallback)(function() {
                            var n = Object(bt.a)(dt.a.mark((function n(r) {
                                var c;
                                return dt.a.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.next = 2, Object(Ut.d)(t, e, r);
                                        case 2:
                                            c = n.sent, console.info(c);
                                        case 4:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function(e) { return n.apply(this, arguments) }
                        }(), [t, e])
                    }
                },
                Ft = x.e.div(Z || (Z = Object(i.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),
                zt = function(e) {
                    var t = e.stakedBalance,
                        n = e.tokenBalance,
                        r = e.tokenName,
                        c = e.pid,
                        i = e.multiplier,
                        l = e.apr,
                        d = e.displayApr,
                        p = e.addLiquidityUrl,
                        x = e.cakePrice,
                        O = e.lpLabel,
                        h = Object(g.b)().t,
                        f = Nt(c).onStake,
                        y = Bt(c).onUnstake,
                        k = Object(o.h)(),
                        w = Object(jt.b)(),
                        S = Object(j.c)().account,
                        C = Object(m.c)(r),
                        T = function() {
                            var e = Object(bt.a)(dt.a.mark((function e(t) {
                                return dt.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, f(t);
                                        case 2:
                                            w(Object(ut.b)({ account: S, pids: [c] }));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) { return e.apply(this, arguments) }
                        }(),
                        A = function() {
                            var e = Object(bt.a)(dt.a.mark((function e(t) {
                                return dt.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, y(t);
                                        case 2:
                                            w(Object(ut.b)({ account: S, pids: [c] }));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) { return e.apply(this, arguments) }
                        }(),
                        D = Object(s.useCallback)((function() { var e = Object(v.f)(t); return e.gt(0) && e.lt(1e-7) ? "<0.0000001" : e.gt(0) ? e.toFixed(8, b.a.ROUND_DOWN) : e.toFixed(3, b.a.ROUND_DOWN) }), [t]),
                        L = Object(u.Mc)(Object(R.jsx)(Pt, { max: n, stakedBalance: t, onConfirm: T, tokenName: r, multiplier: i, lpPrice: C, lpLabel: O, apr: l, displayApr: d, addLiquidityUrl: p, cakePrice: x })),
                        q = Object(a.a)(L, 1)[0],
                        P = Object(u.Mc)(Object(R.jsx)(Rt, { max: t, onConfirm: A, tokenName: r })),
                        U = Object(a.a)(P, 1)[0];
                    return Object(R.jsxs)(u.X, { justifyContent: "space-between", alignItems: "center", children: [Object(R.jsxs)(u.X, { flexDirection: "column", alignItems: "flex-start", children: [Object(R.jsx)(u.Z, { color: t.eq(0) ? "textDisabled" : "text", children: D() }), t.gt(0) && C.gt(0) && Object(R.jsx)(Ot.a, { fontSize: "12px", color: "textSubtle", decimals: 2, value: Object(v.g)(C.times(t)), unit: " USD", prefix: "~" })] }), t.eq(0) ? Object(R.jsx)(u.r, { onClick: q, disabled: ["history", "archived"].some((function(e) { return k.pathname.includes(e) })), children: h("Stake LP") }) : Object(R.jsxs)(Ft, { children: [Object(R.jsx)(u.cb, { variant: "tertiary", onClick: U, mr: "6px", children: Object(R.jsx)(u.vb, { color: "primary", width: "14px" }) }), Object(R.jsx)(u.cb, { variant: "tertiary", onClick: q, disabled: ["history", "archived"].some((function(e) { return k.pathname.includes(e) })), children: Object(R.jsx)(u.a, { color: "primary", width: "14px" }) })] })] })
                },
                Et = n(30),
                It = function(e) {
                    var t = Object(pt.n)();
                    return {
                        onReward: Object(s.useCallback)(Object(bt.a)(dt.a.mark((function n() {
                            return dt.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, Object(Ut.c)(t, e);
                                    case 2:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        }))), [e, t])
                    }
                },
                Mt = function(e) {
                    var t = e.earnings,
                        n = e.pid,
                        r = Object(j.c)().account,
                        c = Object(At.a)(),
                        i = c.toastSuccess,
                        l = c.toastError,
                        o = Object(g.b)().t,
                        d = Object(s.useState)(!1),
                        p = Object(a.a)(d, 2),
                        x = p[0],
                        O = p[1],
                        h = It(n).onReward,
                        f = Object(m.g)(),
                        y = Object(jt.b)(),
                        k = r ? Object(v.f)(t) : Et.c,
                        w = k.toFixed(3, b.a.ROUND_DOWN),
                        S = k ? k.multipliedBy(f).toNumber() : 0;
                    return Object(R.jsxs)(u.X, {
                        mb: "8px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        children: [Object(R.jsxs)(u.X, { flexDirection: "column", alignItems: "flex-start", children: [Object(R.jsx)(u.Z, { color: k.eq(0) ? "textDisabled" : "text", children: w }), S > 0 && Object(R.jsx)(Ot.a, { fontSize: "12px", color: "textSubtle", decimals: 2, value: S, unit: " USD", prefix: "~" })] }), Object(R.jsx)(u.r, {
                            disabled: k.eq(0) || x,
                            onClick: Object(bt.a)(dt.a.mark((function e() {
                                return dt.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return O(!0), e.prev = 1, e.next = 4, h();
                                        case 4:
                                            i("".concat(o("Harvested"), "!"), o("Your %symbol% earnings have been sent to your wallet!", { symbol: "CyberCows" })), e.next = 11;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(1), l(o("Error"), o("Please try again. Confirm the transaction and make sure you are paying enough gas!")), console.error(e.t0);
                                        case 11:
                                            return e.prev = 11, O(!1), e.finish(11);
                                        case 14:
                                            y(Object(ut.b)({ account: r, pids: [n] }));
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 7, 11, 14]
                                ])
                            }))),
                            children: o("Harvest")
                        })]
                    })
                },
                Qt = n(56),
                Xt = n(130),
                Wt = function(e) {
                    var t = Object(pt.n)(),
                        n = Object(Xt.a)().callWithGasPrice;
                    return {
                        onApprove: Object(s.useCallback)(Object(bt.a)(dt.a.mark((function r() {
                            var c, a;
                            return dt.a.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return r.prev = 0, r.next = 3, n(e, "approve", [t.address, Qt.a.constants.MaxUint256]);
                                    case 3:
                                        return c = r.sent, r.next = 6, c.wait();
                                    case 6:
                                        return a = r.sent, r.abrupt("return", a.status);
                                    case 10:
                                        return r.prev = 10, r.t0 = r.catch(0), r.abrupt("return", !1);
                                    case 13:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, null, [
                                [0, 10]
                            ])
                        }))), [e, t, n])
                    }
                },
                Gt = x.e.div(Y || (Y = Object(i.a)(["\n  padding-top: 16px;\n"]))),
                Vt = function(e) {
                    var t = e.farm,
                        n = e.account,
                        r = e.addLiquidityUrl,
                        c = e.cakePrice,
                        i = e.lpLabel,
                        l = Object(g.b)().t,
                        o = Object(s.useState)(!1),
                        d = Object(a.a)(o, 2),
                        b = d[0],
                        j = d[1],
                        p = t.pid,
                        x = t.lpAddresses,
                        O = t.userData || {},
                        h = O.allowance,
                        m = O.tokenBalance,
                        f = O.stakedBalance,
                        v = O.earnings,
                        y = Object($e.a)(x),
                        k = n && h && h.isGreaterThan(0),
                        w = Object(jt.b)(),
                        S = Object(pt.h)(y),
                        C = Wt(S).onApprove,
                        T = Object(s.useCallback)(Object(bt.a)(dt.a.mark((function e() {
                            return dt.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, j(!0), e.next = 4, C();
                                    case 4:
                                        w(Object(ut.b)({ account: n, pids: [p] })), j(!1), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), console.error(e.t0);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 8]
                            ])
                        }))), [C, w, n, p]);
                    return Object(R.jsxs)(Gt, { children: [Object(R.jsxs)(u.X, { children: [Object(R.jsx)(u.nc, { bold: !0, textTransform: "uppercase", color: "secondary", fontSize: "12px", pr: "4px", children: "CYBER COWS" }), Object(R.jsx)(u.nc, { bold: !0, textTransform: "uppercase", color: "textSubtle", fontSize: "12px", children: l("Earned") })] }), Object(R.jsx)(Mt, { earnings: v, pid: p }), Object(R.jsxs)(u.X, { children: [Object(R.jsx)(u.nc, { bold: !0, textTransform: "uppercase", color: "secondary", fontSize: "12px", pr: "4px", children: t.lpSymbol }), Object(R.jsx)(u.nc, { bold: !0, textTransform: "uppercase", color: "textSubtle", fontSize: "12px", children: l("Staked") })] }), n ? k ? Object(R.jsx)(zt, { stakedBalance: f, tokenBalance: m, tokenName: t.lpSymbol, pid: p, apr: t.apr, lpLabel: i, cakePrice: c, addLiquidityUrl: r }) : Object(R.jsx)(u.r, { mt: "8px", width: "100%", disabled: b, onClick: T, children: l("Enable Contract") }) : Object(R.jsx)(xt.a, { mt: "8px", width: "100%" })] })
                },
                Ht = Object(x.e)(u.X)(_ || (_ = Object(i.a)(["\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.5;\n  }\n"]))),
                Zt = function(e) {
                    var t = e.variant,
                        n = e.pid,
                        r = e.lpLabel,
                        c = e.lpSymbol,
                        i = e.cakePrice,
                        s = e.apr,
                        l = e.multiplier,
                        o = e.displayApr,
                        d = e.addLiquidityUrl,
                        b = Object(g.b)().t,
                        j = Object(m.c)(c),
                        p = Object(m.a)(n),
                        x = p.tokenBalance,
                        O = p.stakedBalance,
                        h = Object(u.Mc)(Object(R.jsx)(Tt.a, { linkLabel: b("Get %symbol%", { symbol: r }), stakingTokenBalance: O.plus(x), stakingTokenSymbol: c, stakingTokenPrice: j.toNumber(), earningTokenPrice: i.toNumber(), apr: s, multiplier: l, displayApr: o, linkHref: d, isFarm: !0 })),
                        f = Object(a.a)(h, 1)[0];
                    return Object(R.jsxs)(Ht, { alignItems: "center", onClick: function(e) { e.stopPropagation(), f() }, children: [o, "%", "text-and-button" === t && Object(R.jsx)(u.cb, { variant: "text", scale: "sm", ml: "4px", children: Object(R.jsx)(u.u, { width: "18px" }) })] })
                },
                Yt = Object(x.e)(u.v)(K || (K = Object(i.a)(["\n  align-self: baseline;\n"]))),
                _t = Object(x.e)(u.X)($ || ($ = Object(i.a)(["\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n"]))),
                Kt = x.e.div(J || (J = Object(i.a)(["\n  padding: 24px;\n  border-top: 2px solid ", ";\n  overflow: hidden;\n"])), (function(e) { return e.theme.colors.cardBorder })),
                $t = function(e) {
                    var t = e.farm,
                        n = e.displayApr,
                        r = e.removed,
                        c = e.cakePrice,
                        i = e.account,
                        l = Object(g.b)().t,
                        o = Object(s.useState)(!1),
                        d = Object(a.a)(o, 2),
                        b = d[0],
                        j = d[1],
                        p = t.liquidity && t.liquidity.gt(0) ? "$".concat(t.liquidity.toNumber().toLocaleString(void 0, { maximumFractionDigits: 0 })) : "",
                        x = t.lpSymbol && t.lpSymbol.toUpperCase().replace("Cyber Cows", ""),
                        O = t.dual ? t.dual.earnLabel : l("Cyber Cows + Fees"),
                        h = et({ quoteTokenAddress: t.quoteToken.address, tokenAddress: t.token.address }),
                        m = "".concat(Ke.c, "/").concat(h),
                        f = Object($e.a)(t.lpAddresses),
                        v = "CYBERCOWS" === t.token.symbol;
                    return Object(R.jsxs)(Yt, { isActive: v, children: [Object(R.jsxs)(_t, { children: [Object(R.jsx)(lt, { lpLabel: x, multiplier: t.multiplier, isCommunityFarm: t.isCommunity, token: t.token, quoteToken: t.quoteToken }), !r && Object(R.jsxs)(u.X, { justifyContent: "space-between", alignItems: "center", children: [Object(R.jsxs)(u.nc, { children: [l("APR"), ":"] }), Object(R.jsx)(u.nc, { bold: !0, style: { display: "flex", alignItems: "center" }, children: t.apr ? Object(R.jsx)(Zt, { variant: "text-and-button", pid: t.pid, lpSymbol: t.lpSymbol, multiplier: t.multiplier, lpLabel: x, addLiquidityUrl: m, cakePrice: c, apr: t.apr, displayApr: n }) : Object(R.jsx)(u.Ub, { height: 24, width: 80 }) })] }), Object(R.jsxs)(u.X, { justifyContent: "space-between", children: [Object(R.jsxs)(u.nc, { children: [l("Earn"), ":"] }), Object(R.jsx)(u.nc, { bold: !0, children: O })] }), Object(R.jsx)(Vt, { farm: t, lpLabel: x, account: i, cakePrice: c, addLiquidityUrl: m })] }), Object(R.jsxs)(Kt, { children: [Object(R.jsx)(_e, { onClick: function() { return j(!b) }, expanded: b }), b && Object(R.jsx)(rt, { removed: r, bscScanAddress: Object(P.e)(f, "address"), infoAddress: "/info/pool/".concat(f), totalValueFormatted: p, lpLabel: x, addLiquidityUrl: m })] })] })
                },
                Jt = n(450),
                en = x.e.div(ee || (ee = Object(i.a)(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n\n  button {\n    width: 20px;\n    height: 20px;\n\n    svg {\n      path {\n        fill: ", ";\n      }\n    }\n  }\n"])), (function(e) { return e.theme.colors.text }), (function(e) { return e.theme.colors.textSubtle })),
                tn = x.e.div(te || (te = Object(i.a)(["\n  min-width: 60px;\n  text-align: left;\n"]))),
                nn = function(e) {
                    var t = e.value,
                        n = e.pid,
                        r = e.lpLabel,
                        c = e.lpSymbol,
                        a = e.multiplier,
                        i = e.tokenAddress,
                        s = e.quoteTokenAddress,
                        l = e.cakePrice,
                        o = e.originalValue,
                        d = e.hideButton,
                        b = void 0 !== d && d,
                        j = et({ quoteTokenAddress: s, tokenAddress: i }),
                        p = "".concat(Ke.c, "/").concat(j);
                    return 0 !== o ? Object(R.jsx)(en, { children: o ? Object(R.jsx)(Zt, { variant: b ? "text" : "text-and-button", pid: n, lpSymbol: c, lpLabel: r, multiplier: a, cakePrice: l, apr: o, displayApr: t, addLiquidityUrl: p }) : Object(R.jsx)(tn, { children: Object(R.jsx)(u.Ub, { width: 60 }) }) }) : Object(R.jsx)(en, { children: Object(R.jsxs)(tn, { children: [o, "%"] }) })
                },
                rn = x.e.div(ne || (ne = Object(i.a)(["\n  padding-left: 16px;\n  display: flex;\n  align-items: center;\n\n  ", " {\n    padding-left: 32px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                cn = x.e.div(re || (re = Object(i.a)(["\n  padding-right: 8px;\n  width: 24px;\n\n  ", " {\n    width: 40px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                an = function(e) {
                    var t = e.token,
                        n = e.quoteToken,
                        r = e.label,
                        c = e.pid,
                        a = Object(m.a)(c).stakedBalance,
                        i = Object(g.b)().t,
                        s = Object(v.g)(a);
                    return Object(R.jsxs)(rn, { children: [Object(R.jsx)(cn, { children: Object(R.jsx)(at.b, { variant: "inverted", primaryToken: t, secondaryToken: n, width: 40, height: 40 }) }), Object(R.jsxs)("div", { children: [s ? Object(R.jsx)(u.nc, { color: "secondary", fontSize: "12px", bold: !0, textTransform: "uppercase", children: i("Farming") }) : null, Object(R.jsx)(u.nc, { bold: !0, children: r })] })] })
                },
                sn = x.e.span(ce || (ce = Object(i.a)(["\n  color: ", ";\n  display: flex;\n  align-items: center;\n"])), (function(e) {
                    var t = e.earned,
                        n = e.theme;
                    return t ? n.colors.text : n.colors.textDisabled
                })),
                ln = function(e) { var t = e.earnings; return e.userDataReady ? Object(R.jsx)(sn, { earned: t, children: t.toLocaleString() }) : Object(R.jsx)(sn, { earned: 0, children: Object(R.jsx)(u.Ub, { width: 60 }) }) },
                on = x.e.div(ae || (ae = Object(i.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n  padding-right: 8px;\n  color: ", ";\n\n  ", " {\n    padding-right: 0px;\n  }\n"])), (function(e) { return e.theme.colors.primary }), (function(e) { return e.theme.mediaQueries.sm })),
                dn = Object(x.e)(u.H)(ie || (ie = Object(i.a)(["\n  transform: ", ";\n  height: 20px;\n"])), (function(e) { return e.toggled ? "rotate(180deg)" : "rotate(0)" })),
                bn = function(e) {
                    var t = e.actionPanelToggled,
                        n = Object(g.b)().t,
                        r = Object(u.Lc)().isDesktop;
                    return Object(R.jsxs)(on, { children: [!r && n("Details"), Object(R.jsx)(dn, { color: "primary", toggled: t })] })
                },
                jn = x.e.div(se || (se = Object(i.a)(["\n  display: inline-block;\n"]))),
                un = x.e.div(le || (le = Object(i.a)(["\n  color: ", ";\n  width: 36px;\n  text-align: right;\n  margin-right: 14px;\n\n  ", " {\n    text-align: left;\n    margin-right: 0;\n  }\n"])), (function(e) { return e.theme.colors.text }), (function(e) { return e.theme.mediaQueries.lg })),
                pn = x.e.div(oe || (oe = Object(i.a)(["\n  display: flex;\n  align-items: center;\n"]))),
                xn = function(e) {
                    var t = e.multiplier,
                        n = t ? t.toLowerCase() : Object(R.jsx)(u.Ub, { width: 30 }),
                        r = Object(g.b)().t,
                        c = Object(R.jsxs)(R.Fragment, { children: [Object(R.jsx)(u.nc, { children: r("The Multiplier represents the proportion of CyberCows rewards each farm receives, as a proportion of the CyberCows produced each block.") }), Object(R.jsx)(u.nc, { my: "24px", children: r("For example, if a 1x farm received 1 CyberCows per block, a 40x farm would receive 40 CyberCows per block.") }), Object(R.jsx)(u.nc, { children: r("This amount is already included in all APR calculations for the farm.") })] }),
                        a = Object(u.Oc)(c, { placement: "top-end", tooltipOffset: [20, 10] }),
                        i = a.targetRef,
                        s = a.tooltip,
                        l = a.tooltipVisible;
                    return Object(R.jsxs)(pn, { children: [Object(R.jsx)(un, { children: n }), Object(R.jsx)(jn, { ref: i, children: Object(R.jsx)(u.ab, { color: "textSubtle" }) }), l && s] })
                },
                On = x.e.div(de || (de = Object(i.a)(["\n  display: inline-block;\n"]))),
                hn = x.e.div(be || (be = Object(i.a)(["\n  min-width: 110px;\n  font-weight: 600;\n  text-align: right;\n  margin-right: 14px;\n\n  ", " {\n    text-align: left;\n    margin-right: 0;\n  }\n"])), (function(e) { return e.theme.mediaQueries.lg })),
                mn = x.e.div(je || (je = Object(i.a)(["\n  display: flex;\n  align-items: center;\n"]))),
                fn = function(e) {
                    var t = e.liquidity,
                        n = t && t.gt(0) ? "$".concat(Number(t).toLocaleString(void 0, { maximumFractionDigits: 0 })) : Object(R.jsx)(u.Ub, { width: 60 }),
                        r = Object(g.b)().t,
                        c = Object(u.Oc)(r("Total value of the funds in this farm\u2019s liquidity pool"), { placement: "top-end", tooltipOffset: [20, 10] }),
                        a = c.targetRef,
                        i = c.tooltip,
                        s = c.tooltipVisible;
                    return Object(R.jsxs)(mn, { children: [Object(R.jsx)(hn, { children: Object(R.jsx)(u.nc, { children: n }) }), Object(R.jsx)(On, { ref: a, children: Object(R.jsx)(u.ab, { color: "textSubtle" }) }), s && i] })
                },
                gn = x.e.div(ue || (ue = Object(i.a)(["\n  padding: 16px;\n  border: 2px solid ", ";\n  border-radius: 16px;\n  flex-grow: 1;\n  flex-basis: 0;\n  margin-bottom: 16px;\n\n  ", " {\n    margin-left: 12px;\n    margin-right: 12px;\n    margin-bottom: 0;\n    max-height: 100px;\n  }\n\n  ", " {\n    margin-left: 48px;\n    margin-right: 0;\n    margin-bottom: 0;\n    max-height: 100px;\n  }\n"])), (function(e) { return e.theme.colors.input }), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.xl })),
                vn = x.e.div(pe || (pe = Object(i.a)(["\n  display: flex;\n"]))),
                yn = x.e.div(xe || (xe = Object(i.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),
                kn = function(e) {
                    var t = e.pid,
                        n = e.userData,
                        r = e.userDataReady,
                        c = Object(At.a)(),
                        i = c.toastSuccess,
                        l = c.toastError,
                        o = new b.a(n.earnings),
                        d = Object(m.g)(),
                        p = Et.c,
                        x = 0,
                        O = r ? p.toLocaleString() : Object(R.jsx)(u.Ub, { width: 60 });
                    o.isZero() || (x = (p = Object(v.f)(o)).multipliedBy(d).toNumber(), O = p.toFixed(3, b.a.ROUND_DOWN));
                    var h = Object(s.useState)(!1),
                        f = Object(a.a)(h, 2),
                        y = f[0],
                        k = f[1],
                        w = It(t).onReward,
                        S = Object(g.b)().t,
                        C = Object(jt.b)(),
                        T = Object(j.c)().account;
                    return Object(R.jsxs)(gn, {
                        children: [Object(R.jsxs)(vn, { children: [Object(R.jsx)(u.nc, { bold: !0, textTransform: "uppercase", color: "secondary", fontSize: "12px", pr: "4px", children: "CYBER COWS" }), Object(R.jsx)(u.nc, { bold: !0, textTransform: "uppercase", color: "textSubtle", fontSize: "12px", children: S("Earned") })] }), Object(R.jsxs)(yn, {
                            children: [Object(R.jsxs)("div", { children: [Object(R.jsx)(u.Z, { children: O }), x > 0 && Object(R.jsx)(Ot.a, { fontSize: "12px", color: "textSubtle", decimals: 2, value: x, unit: " USD", prefix: "~" })] }), Object(R.jsx)(u.r, {
                                disabled: p.eq(0) || y || !r,
                                onClick: Object(bt.a)(dt.a.mark((function e() {
                                    return dt.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return k(!0), e.prev = 1, e.next = 4, w();
                                            case 4:
                                                i("".concat(S("Harvested"), "!"), S("Your %symbol% earnings have been sent to your wallet!", { symbol: "Cyber Cows" })), e.next = 11;
                                                break;
                                            case 7:
                                                e.prev = 7, e.t0 = e.catch(1), l(S("Error"), S("Please try again. Confirm the transaction and make sure you are paying enough gas!")), console.error(e.t0);
                                            case 11:
                                                return e.prev = 11, k(!1), e.finish(11);
                                            case 14:
                                                C(Object(ut.b)({ account: T, pids: [t] }));
                                            case 15:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [1, 7, 11, 14]
                                    ])
                                }))),
                                ml: "4px",
                                children: S("Harvest")
                            })]
                        })]
                    })
                },
                wn = x.e.div(Oe || (Oe = Object(i.a)(["\n  display: flex;\n"]))),
                Sn = function(e) {
                    var t = e.pid,
                        n = e.apr,
                        r = e.multiplier,
                        c = e.lpSymbol,
                        i = e.lpLabel,
                        l = e.lpAddresses,
                        b = e.quoteToken,
                        p = e.token,
                        x = e.userDataReady,
                        O = e.displayApr,
                        h = Object(g.b)().t,
                        f = Object(j.c)().account,
                        y = Object(s.useState)(!1),
                        k = Object(a.a)(y, 2),
                        w = k[0],
                        S = k[1],
                        C = Object(m.a)(t),
                        T = C.allowance,
                        A = C.tokenBalance,
                        D = C.stakedBalance,
                        L = Nt(t).onStake,
                        q = Bt(t).onUnstake,
                        P = Object(o.h)(),
                        U = Object(m.c)(c),
                        B = Object(m.g)(),
                        N = f && T && T.isGreaterThan(0),
                        F = Object($e.a)(l),
                        z = et({ quoteTokenAddress: b.address, tokenAddress: p.address }),
                        E = "".concat(Ke.c, "/").concat(z),
                        I = function() {
                            var e = Object(bt.a)(dt.a.mark((function e(n) {
                                return dt.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, L(n);
                                        case 2:
                                            Z(Object(ut.b)({ account: f, pids: [t] }));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) { return e.apply(this, arguments) }
                        }(),
                        M = function() {
                            var e = Object(bt.a)(dt.a.mark((function e(n) {
                                return dt.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, q(n);
                                        case 2:
                                            Z(Object(ut.b)({ account: f, pids: [t] }));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) { return e.apply(this, arguments) }
                        }(),
                        Q = Object(s.useCallback)((function() { var e = Object(v.f)(D); return e.gt(0) && e.lt(1e-7) ? e.toFixed(10, d.BigNumber.ROUND_DOWN) : e.gt(0) && e.lt(1e-4) ? Object(v.i)(D).toLocaleString() : e.toFixed(3, d.BigNumber.ROUND_DOWN) }), [D]),
                        X = Object(u.Mc)(Object(R.jsx)(Pt, { max: A, lpPrice: U, lpLabel: i, apr: n, displayApr: O, stakedBalance: D, onConfirm: I, tokenName: c, multiplier: r, addLiquidityUrl: E, cakePrice: B })),
                        W = Object(a.a)(X, 1)[0],
                        G = Object(u.Mc)(Object(R.jsx)(Rt, { max: D, onConfirm: M, tokenName: c })),
                        V = Object(a.a)(G, 1)[0],
                        H = Object(pt.h)(F),
                        Z = Object(jt.b)(),
                        Y = Wt(H).onApprove,
                        _ = Object(s.useCallback)(Object(bt.a)(dt.a.mark((function e() {
                            return dt.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, S(!0), e.next = 4, Y();
                                    case 4:
                                        Z(Object(ut.b)({ account: f, pids: [t] })), S(!1), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), console.error(e.t0);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 8]
                            ])
                        }))), [Y, Z, f, t]);
                    return f ? N ? D.gt(0) ? Object(R.jsxs)(gn, { children: [Object(R.jsxs)(vn, { children: [Object(R.jsx)(u.nc, { bold: !0, textTransform: "uppercase", color: "secondary", fontSize: "12px", pr: "4px", children: c }), Object(R.jsx)(u.nc, { bold: !0, textTransform: "uppercase", color: "textSubtle", fontSize: "12px", children: h("Staked") })] }), Object(R.jsxs)(yn, { children: [Object(R.jsxs)("div", { children: [Object(R.jsx)(u.Z, { children: Q() }), D.gt(0) && U.gt(0) && Object(R.jsx)(Ot.a, { fontSize: "12px", color: "textSubtle", decimals: 2, value: Object(v.g)(U.times(D)), unit: " USD", prefix: "~" })] }), Object(R.jsxs)(wn, { children: [Object(R.jsx)(u.cb, { variant: "secondary", onClick: V, mr: "6px", children: Object(R.jsx)(u.vb, { color: "primary", width: "14px" }) }), Object(R.jsx)(u.cb, { variant: "secondary", onClick: W, disabled: ["history", "archived"].some((function(e) { return P.pathname.includes(e) })), children: Object(R.jsx)(u.a, { color: "primary", width: "14px" }) })] })] })] }) : Object(R.jsxs)(gn, { children: [Object(R.jsxs)(vn, { children: [Object(R.jsx)(u.nc, { bold: !0, textTransform: "uppercase", color: "textSubtle", fontSize: "12px", pr: "4px", children: h("Stake").toUpperCase() }), Object(R.jsx)(u.nc, { bold: !0, textTransform: "uppercase", color: "secondary", fontSize: "12px", children: c })] }), Object(R.jsx)(yn, { children: Object(R.jsx)(u.r, { width: "100%", onClick: W, variant: "secondary", disabled: ["history", "archived"].some((function(e) { return P.pathname.includes(e) })), children: h("Stake LP") }) })] }) : x ? Object(R.jsxs)(gn, { children: [Object(R.jsx)(vn, { children: Object(R.jsx)(u.nc, { bold: !0, textTransform: "uppercase", color: "textSubtle", fontSize: "12px", children: h("Enable Farm") }) }), Object(R.jsx)(yn, { children: Object(R.jsx)(u.r, { width: "100%", disabled: w, onClick: _, variant: "secondary", children: h("Enable") }) })] }) : Object(R.jsxs)(gn, { children: [Object(R.jsx)(vn, { children: Object(R.jsx)(u.nc, { bold: !0, textTransform: "uppercase", color: "textSubtle", fontSize: "12px", children: h("Start Farming") }) }), Object(R.jsx)(yn, { children: Object(R.jsx)(u.Ub, { width: 180, marginBottom: 28, marginTop: 14 }) })] }) : Object(R.jsxs)(gn, { children: [Object(R.jsx)(vn, { children: Object(R.jsx)(u.nc, { bold: !0, textTransform: "uppercase", color: "textSubtle", fontSize: "12px", children: h("Start Farming") }) }), Object(R.jsx)(yn, { children: Object(R.jsx)(xt.a, { width: "100%" }) })] })
                },
                Cn = Object(x.f)(he || (he = Object(i.a)(["\n  from {\n    max-height: 0px;\n  }\n  to {\n    max-height: 500px;\n  }\n"]))),
                Tn = Object(x.f)(me || (me = Object(i.a)(["\n  from {\n    max-height: 500px;\n  }\n  to {\n    max-height: 0px;\n  }\n"]))),
                An = x.e.div(fe || (fe = Object(i.a)(["\n  animation: ", ";\n  overflow: hidden;\n  background: ", ";\n  display: flex;\n  width: 100%;\n  flex-direction: column-reverse;\n  padding: 24px;\n\n  ", " {\n    flex-direction: row;\n    padding: 16px 32px;\n  }\n"])), (function(e) { return e.expanded ? Object(x.d)(ge || (ge = Object(i.a)(["\n          ", " 300ms linear forwards\n        "])), Cn) : Object(x.d)(ve || (ve = Object(i.a)(["\n          ", " 300ms linear forwards\n        "])), Tn) }), (function(e) { return e.theme.colors.background }), (function(e) { return e.theme.mediaQueries.lg })),
                Dn = Object(x.e)(u.jb)(ye || (ye = Object(i.a)(["\n  font-weight: 400;\n"]))),
                Ln = x.e.div(ke || (ke = Object(i.a)(["\n  color: ", ";\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n\n  ", " {\n    justify-content: flex-start;\n  }\n"])), (function(e) { return e.theme.colors.text }), (function(e) { return e.theme.mediaQueries.sm })),
                qn = x.e.div(we || (we = Object(i.a)(["\n  display: flex;\n  align-items: center;\n  margin-top: 25px;\n\n  ", " {\n    margin-top: 16px;\n  }\n\n  > div {\n    height: 24px;\n    padding: 0 6px;\n    font-size: 14px;\n    margin-right: 4px;\n\n    svg {\n      width: 14px;\n    }\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Pn = x.e.div(Se || (Se = Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n\n  ", " {\n    flex-direction: row;\n    align-items: center;\n    flex-grow: 1;\n    flex-basis: 0;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Rn = x.e.div(Ce || (Ce = Object(i.a)(["\n  min-width: 200px;\n"]))),
                Un = x.e.div(Te || (Te = Object(i.a)(["\n  display: block;\n\n  ", " {\n    display: none;\n  }\n"])), (function(e) { return e.theme.mediaQueries.lg })),
                Bn = x.e.div(Ae || (Ae = Object(i.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 4px 0px;\n"]))),
                Nn = function(e) {
                    var t = e.details,
                        n = e.apr,
                        r = e.multiplier,
                        a = e.liquidity,
                        i = e.userDataReady,
                        s = e.expanded,
                        l = t,
                        o = Object(g.b)().t,
                        d = "0X" !== l.multiplier,
                        b = l.quoteToken,
                        j = l.token,
                        p = l.dual,
                        x = l.lpSymbol && l.lpSymbol.toUpperCase().replace("CyberCows", ""),
                        O = et({ quoteTokenAddress: b.address, tokenAddress: j.address }),
                        h = Object($e.a)(l.lpAddresses),
                        m = Object(P.e)(h, "address"),
                        f = "/info/pool/".concat(h);
                    return Object(R.jsxs)(An, { expanded: s, children: [Object(R.jsxs)(Rn, { children: [d && Object(R.jsx)(Ln, { children: Object(R.jsx)(Dn, { href: "/add/".concat(O), children: o("Get %symbol%", { symbol: x }) }) }), Object(R.jsx)(Dn, { href: m, children: o("View Contract") }), Object(R.jsx)(Dn, { href: f, children: o("See Pair Info") }), Object(R.jsxs)(qn, { children: [l.isCommunity ? Object(R.jsx)(ct.b, {}) : Object(R.jsx)(ct.d, {}), p ? Object(R.jsx)(ct.e, {}) : null] })] }), Object(R.jsxs)(Un, { children: [Object(R.jsxs)(Bn, { children: [Object(R.jsx)(u.nc, { children: o("APR") }), Object(R.jsx)(nn, Object(c.a)({}, n))] }), Object(R.jsxs)(Bn, { children: [Object(R.jsx)(u.nc, { children: o("Multiplier") }), Object(R.jsx)(xn, Object(c.a)({}, r))] }), Object(R.jsxs)(Bn, { children: [Object(R.jsx)(u.nc, { children: o("Liquidity") }), Object(R.jsx)(fn, Object(c.a)({}, a))] })] }), Object(R.jsxs)(Pn, { children: [Object(R.jsx)(kn, Object(c.a)(Object(c.a)({}, l), {}, { userDataReady: i })), Object(R.jsx)(Sn, Object(c.a)(Object(c.a)({}, l), {}, { userDataReady: i, lpLabel: x, displayApr: n.value }))] })] })
                },
                Fn = x.e.div(De || (De = Object(i.a)(["\n  font-size: 12px;\n  color: ", ";\n  text-align: left;\n"])), (function(e) { return e.theme.colors.textSubtle })),
                zn = x.e.div(Le || (Le = Object(i.a)(["\n  min-height: 24px;\n  display: flex;\n  align-items: center;\n"]))),
                En = function(e) {
                    var t = e.label,
                        n = void 0 === t ? "" : t,
                        r = e.children;
                    return Object(R.jsxs)("div", { children: [n && Object(R.jsx)(Fn, { children: n }), Object(R.jsx)(zn, { children: r })] })
                },
                In = [{ id: 1, name: "farm", sortable: !0, label: "" }, { id: 2, name: "earned", sortable: !0, label: "Earned" }, { id: 3, name: "apr", sortable: !0, label: "APR" }, { id: 6, name: "details", sortable: !0, label: "" }],
                Mn = [{ id: 1, name: "farm", sortable: !0, label: "" }, { id: 2, name: "earned", sortable: !0, label: "Earned" }, { id: 3, name: "apr", sortable: !0, label: "APR" }, { id: 4, name: "liquidity", sortable: !0, label: "Liquidity" }, { id: 5, name: "multiplier", sortable: !0, label: "Multiplier" }, { id: 6, name: "details", sortable: !0, label: "" }],
                Qn = { apr: nn, farm: an, earned: ln, details: bn, multiplier: xn, liquidity: fn },
                Xn = x.e.div(qe || (qe = Object(i.a)(["\n  padding: 24px 0px;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  padding-right: 8px;\n\n  ", " {\n    padding-right: 32px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.xl })),
                Wn = x.e.tr(Pe || (Pe = Object(i.a)(["\n  cursor: pointer;\n  border-bottom: 2px solid ", ";\n"])), (function(e) { return e.theme.colors.cardBorder })),
                Gn = x.e.td(Re || (Re = Object(i.a)(["\n  padding: 16px 0 24px 16px;\n"]))),
                Vn = x.e.td(Ue || (Ue = Object(i.a)(["\n  padding-top: 16px;\n  padding-bottom: 24px;\n"]))),
                Hn = x.e.td(Be || (Be = Object(i.a)(["\n  padding-top: 24px;\n"]))),
                Zn = function(e) {
                    var t = e.details,
                        n = e.userDataReady,
                        r = !!Object(m.a)(t.pid).stakedBalance.toNumber(),
                        i = Object(s.useState)(r),
                        o = Object(a.a)(i, 2),
                        d = o[0],
                        b = o[1],
                        j = Object(Jt.a)(d, 300),
                        p = Object(g.b)().t,
                        x = function() { b(!d) };
                    Object(s.useEffect)((function() { b(r) }), [r]);
                    var O = Object(u.Lc)(),
                        h = O.isDesktop,
                        f = O.isMobile,
                        v = !h,
                        y = v ? In : Mn,
                        k = y.map((function(e) { return e.name }));
                    return Object(R.jsxs)(R.Fragment, {
                        children: [f ? Object(R.jsxs)(Wn, { onClick: x, children: [Object(R.jsxs)("td", { children: [Object(R.jsx)("tr", { children: Object(R.jsx)(Hn, { children: Object(R.jsx)(En, { children: Object(R.jsx)(an, Object(c.a)({}, e.farm)) }) }) }), Object(R.jsxs)("tr", { children: [Object(R.jsx)(Gn, { children: Object(R.jsx)(En, { label: p("Earned"), children: Object(R.jsx)(ln, Object(c.a)(Object(c.a)({}, e.earned), {}, { userDataReady: n })) }) }), Object(R.jsx)(Vn, { children: Object(R.jsx)(En, { label: p("APR"), children: Object(R.jsx)(nn, Object(c.a)(Object(c.a)({}, e.apr), {}, { hideButton: !0 })) }) })] })] }), Object(R.jsx)("td", { children: Object(R.jsx)(Xn, { children: Object(R.jsx)(En, { children: Object(R.jsx)(bn, { actionPanelToggled: d }) }) }) })] }) : Object(R.jsx)(Wn, {
                            onClick: x,
                            children: Object.keys(e).map((function(t) {
                                var r = k.indexOf(t);
                                if (-1 === r) return null;
                                switch (t) {
                                    case "details":
                                        return Object(R.jsx)("td", { children: Object(R.jsx)(Xn, { children: Object(R.jsx)(En, { children: Object(R.jsx)(bn, { actionPanelToggled: d }) }) }) }, t);
                                    case "apr":
                                        return Object(R.jsx)("td", { children: Object(R.jsx)(Xn, { children: Object(R.jsx)(En, { label: p("APR"), children: Object(R.jsx)(nn, Object(c.a)(Object(c.a)({}, e.apr), {}, { hideButton: v })) }) }) }, t);
                                    default:
                                        return Object(R.jsx)("td", { children: Object(R.jsx)(Xn, { children: Object(R.jsx)(En, { label: p(y[r].label), children: l.a.createElement(Qn[t], Object(c.a)(Object(c.a)({}, e[t]), {}, { userDataReady: n })) }) }) }, t)
                                }
                            }))
                        }), j && Object(R.jsx)("tr", { children: Object(R.jsx)("td", { colSpan: 6, children: Object(R.jsx)(Nn, Object(c.a)(Object(c.a)({}, e), {}, { expanded: d })) }) })]
                    })
                },
                Yn = x.e.div(Ne || (Ne = Object(i.a)(["\n  filter: ", ";\n  width: 100%;\n  background: ", ";\n  border-radius: 16px;\n  margin: 16px 0px;\n"])), (function(e) { return e.theme.card.dropShadow }), (function(e) { return e.theme.card.background })),
                _n = x.e.div(Fe || (Fe = Object(i.a)(["\n  overflow: visible;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]))),
                Kn = x.e.table(ze || (ze = Object(i.a)(["\n  border-collapse: collapse;\n  font-size: 14px;\n  border-radius: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n"]))),
                $n = x.e.tbody(Ee || (Ee = Object(i.a)(["\n  & tr {\n    td {\n      font-size: 16px;\n      vertical-align: middle;\n    }\n  }\n"]))),
                Jn = x.e.div(Ie || (Ie = Object(i.a)(["\n  position: relative;\n"]))),
                er = x.e.div(Me || (Me = Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 5px;\n  padding-bottom: 5px;\n"]))),
                tr = function(e) {
                    var t = Object(s.useRef)(null),
                        n = Object(g.b)().t,
                        r = e.data,
                        a = e.columns,
                        i = e.userDataReady,
                        l = Object(u.Nc)(a, r, { sortable: !0, sortColumn: "farm" }).rows;
                    return Object(R.jsx)(Yn, { id: "farms-table", children: Object(R.jsxs)(Jn, { children: [Object(R.jsx)(_n, { ref: t, children: Object(R.jsx)(Kn, { children: Object(R.jsx)($n, { children: l.map((function(e) { return Object(s.createElement)(Zn, Object(c.a)(Object(c.a)({}, e.original), {}, { userDataReady: i, key: "table-row-".concat(e.id) })) })) }) }) }), Object(R.jsx)(er, { children: Object(R.jsxs)(u.r, { variant: "text", onClick: function() { t.current.scrollIntoView({ behavior: "smooth" }) }, children: [n("To Top"), Object(R.jsx)(u.K, { color: "primary" })] }) })] }) })
                },
                nr = n(86),
                rr = function(e) {
                    var t, n = e.hasStakeInFinishedFarms,
                        r = Object(o.j)().url,
                        c = Object(o.h)(),
                        a = Object(g.b)().t;
                    switch (c.pathname) {
                        case "/farms":
                            t = 0;
                            break;
                        case "/farms/history":
                            t = 1;
                            break;
                        case "/farms/archived":
                            t = 2;
                            break;
                        default:
                            t = 0
                    }
                    return Object(R.jsx)(cr, { children: Object(R.jsxs)(u.s, { activeIndex: t, scale: "sm", variant: "subtle", children: [Object(R.jsx)(u.t, { as: nr.a, to: "".concat(r), children: a("Live") }), Object(R.jsx)(u.Fb, { show: n, children: Object(R.jsx)(u.t, { id: "finished-farms-button", as: nr.a, to: "".concat(r, "/history"), children: a("Finished") }) })] }) })
                },
                cr = x.e.div(Qe || (Qe = Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  a {\n    padding-left: 12px;\n    padding-right: 12px;\n  }\n\n  ", " {\n    margin-left: 16px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                ar = x.e.div(Xe || (Xe = Object(i.a)(["\n  margin-left: -8px;\n\n  ", " {\n    margin-left: 0;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                ir = function(e) {
                    var t = e.viewMode,
                        n = e.onToggle,
                        r = function(e) { t !== e && n(e) };
                    return Object(R.jsxs)(ar, { children: [Object(R.jsx)(u.cb, { variant: "text", scale: "sm", id: "clickFarmCardView", onClick: function() { return r(T.b.CARD) }, children: Object(R.jsx)(u.A, { color: t === T.b.CARD ? "primary" : "textDisabled" }) }), Object(R.jsx)(u.cb, { variant: "text", scale: "sm", id: "clickFarmTableView", onClick: function() { return r(T.b.TABLE) }, children: Object(R.jsx)(u.kb, { color: t === T.b.TABLE ? "primary" : "textDisabled" }) })] })
                },
                sr = x.e.div(We || (We = Object(i.a)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  position: relative;\n\n  justify-content: space-between;\n  flex-direction: column;\n  margin-bottom: 32px;\n\n  ", " {\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 16px 32px;\n    margin-bottom: 0;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                lr = x.e.div(Ge || (Ge = Object(i.a)(["\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n\n  ", " {\n    margin-left: 8px;\n  }\n"])), u.nc),
                or = x.e.div(Ve || (Ve = Object(i.a)(["\n  > ", " {\n    font-size: 12px;\n  }\n"])), u.nc),
                dr = x.e.div(He || (He = Object(i.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 8px 0px;\n\n  ", " {\n    width: auto;\n    padding: 0;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                br = x.e.div(Ze || (Ze = Object(i.a)(["\n  flex-wrap: wrap;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n  width: 100%;\n\n  > div {\n    padding: 8px 0px;\n  }\n\n  ", " {\n    justify-content: flex-start;\n    width: auto;\n\n    > div {\n      padding: 0;\n    }\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                jr = (Object(x.e)(u.db)(Ye || (Ye = Object(i.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 58px;\n"]))), function(e, t) { return e && t ? (e + t).toLocaleString("en-US", { maximumFractionDigits: 2 }) : e ? e.toLocaleString("en-US", { maximumFractionDigits: 2 }) : null }),
                ur = function() {
                    var e = Object(o.j)().path,
                        t = Object(o.h)().pathname,
                        n = Object(g.b)().t,
                        r = Object(m.b)(),
                        i = r.data,
                        l = r.userDataLoaded,
                        d = Object(m.g)(),
                        x = Object(s.useState)(""),
                        P = Object(a.a)(x, 2),
                        U = P[0],
                        B = P[1],
                        N = Object(C.n)(),
                        F = Object(a.a)(N, 2),
                        z = F[0],
                        E = F[1],
                        I = Object(j.c)().account,
                        M = Object(s.useState)("hot"),
                        Q = Object(a.a)(M, 2),
                        X = Q[0],
                        W = Q[1],
                        G = Object(f.a)(),
                        V = G.observerRef,
                        H = G.isIntersecting,
                        Z = Object(s.useRef)(0),
                        Y = t.includes("archived"),
                        _ = t.includes("history"),
                        K = !_ && !Y;
                    Object(m.f)(Y);
                    var $ = !I || !!I && l,
                        J = Object(C.m)(K),
                        ee = Object(a.a)(J, 2),
                        te = ee[0],
                        ne = ee[1],
                        re = i.filter((function(e) { return 0 !== e.pid && "0X" !== e.multiplier && !Object(w.a)(e.pid) })),
                        ce = i.filter((function(e) { return 0 !== e.pid && "0X" === e.multiplier && !Object(w.a)(e.pid) })),
                        ae = i.filter((function(e) { return Object(w.a)(e.pid) })),
                        ie = re.filter((function(e) { return e.userData && new b.a(e.userData.stakedBalance).isGreaterThan(0) })),
                        se = ce.filter((function(e) { return e.userData && new b.a(e.userData.stakedBalance).isGreaterThan(0) })),
                        le = ae.filter((function(e) { return e.userData && new b.a(e.userData.stakedBalance).isGreaterThan(0) })),
                        oe = Object(s.useCallback)((function(e) {
                            var t = e.map((function(e) {
                                if (!e.lpTotalInQuoteToken || !e.quoteTokenPriceBusd) return e;
                                var t = new b.a(e.lpTotalInQuoteToken).times(e.quoteTokenPriceBusd),
                                    n = K ? Object(y.a)(new b.a(e.poolWeight), d, t, e.lpAddresses[p.a.MAINNET]) : { cakeRewardsApr: 0, lpRewardsApr: 0 },
                                    r = n.cakeRewardsApr,
                                    a = n.lpRewardsApr;
                                return Object(c.a)(Object(c.a)({}, e), {}, { apr: r, lpRewardsApr: a, liquidity: t })
                            }));
                            if (U) {
                                var n = Object(S.a)(U.toLowerCase());
                                t = t.filter((function(e) { return Object(S.a)(e.lpSymbol.toLowerCase()).includes(n) }))
                            }
                            return t
                        }), [d, U, K]),
                        de = Object(s.useState)(12),
                        be = Object(a.a)(de, 2),
                        je = be[0],
                        ue = be[1],
                        pe = Object(s.useMemo)((function() {
                            var e = [];
                            return K && (e = oe(te ? ie : re)), _ && (e = oe(te ? se : ce)), Y && (e = oe(te ? le : ae)),
                                function(e) {
                                    switch (X) {
                                        case "apr":
                                            return Object(k.orderBy)(e, (function(e) { return e.apr + e.lpRewardsApr }), "desc");
                                        case "multiplier":
                                            return Object(k.orderBy)(e, (function(e) { return e.multiplier ? Number(e.multiplier.slice(0, -1)) : 0 }), "desc");
                                        case "earned":
                                            return Object(k.orderBy)(e, (function(e) { return e.userData ? Number(e.userData.earnings) : 0 }), "desc");
                                        case "liquidity":
                                            return Object(k.orderBy)(e, (function(e) { return Number(e.liquidity) }), "desc");
                                        default:
                                            return e
                                    }
                                }(e).slice(0, je)
                        }), [X, re, oe, ce, ae, K, _, Y, le, se, te, ie, je]);
                    Z.current = pe.length, Object(s.useEffect)((function() { H && ue((function(e) { return e <= Z.current ? e + 12 : e })) }), [H]);
                    var xe = pe.map((function(e) {
                        var t = e.token,
                            n = e.quoteToken,
                            r = t.address,
                            c = n.address,
                            a = e.lpSymbol && e.lpSymbol.split(" ")[0].toUpperCase().replace("CYBERCOWS", "");
                        return { apr: { value: jr(e.apr, e.lpRewardsApr), pid: e.pid, multiplier: e.multiplier, lpLabel: a, lpSymbol: e.lpSymbol, tokenAddress: r, quoteTokenAddress: c, cakePrice: d, originalValue: e.apr }, farm: { label: a, pid: e.pid, token: e.token, quoteToken: e.quoteToken }, earned: { earnings: Object(v.g)(new b.a(e.userData.earnings)), pid: e.pid }, liquidity: { liquidity: e.liquidity }, multiplier: { multiplier: e.multiplier }, details: e }
                    }));
                    return Object(R.jsxs)(R.Fragment, {
                        children: [Object(R.jsxs)(A.a, { children: [Object(R.jsx)(u.Z, { as: "h1", scale: "xxl", color: "White", mb: "24px", children: n("Farms") }), Object(R.jsx)(u.Z, { scale: "lg", color: "text", children: n("Stake LP tokens to earn.") })] }), Object(R.jsxs)(h.b, {
                            children: [Object(R.jsxs)(sr, { children: [Object(R.jsxs)(br, { children: [Object(R.jsx)(ir, { viewMode: z, onToggle: function(e) { return E(e) } }), Object(R.jsxs)(lr, { children: [Object(R.jsx)(u.sc, { id: "staked-only-farms", checked: te, onChange: function() { return ne(!te) }, scale: "sm" }), Object(R.jsxs)(u.nc, { children: [" ", n("Staked only")] })] }), Object(R.jsx)(rr, { hasStakeInFinishedFarms: se.length > 0 })] }), Object(R.jsxs)(dr, { children: [Object(R.jsxs)(or, { children: [Object(R.jsx)(u.nc, { textTransform: "uppercase", children: n("Sort by") }), Object(R.jsx)(L.a, { options: [{ label: n("Hot"), value: "hot" }, { label: n("APR"), value: "apr" }, { label: n("Multiplier"), value: "multiplier" }, { label: n("Earned"), value: "earned" }, { label: n("Liquidity"), value: "liquidity" }], onOptionChange: function(e) { W(e.value) } })] }), Object(R.jsxs)(or, { style: { marginLeft: 16 }, children: [Object(R.jsx)(u.nc, { textTransform: "uppercase", children: n("Search") }), Object(R.jsx)(D.a, { onChange: function(e) { B(e.target.value) }, placeholder: "Search Farms" })] })] })] }), function() {
                                if (z === T.b.TABLE && xe.length) {
                                    var t = Mn.map((function(e) {
                                        return {
                                            id: e.id,
                                            name: e.name,
                                            label: e.label,
                                            sort: function(t, n) {
                                                switch (e.name) {
                                                    case "farm":
                                                        return n.id - t.id;
                                                    case "apr":
                                                        return t.original.apr.value && n.original.apr.value ? Number(t.original.apr.value) - Number(n.original.apr.value) : 0;
                                                    case "earned":
                                                        return t.original.earned.earnings - n.original.earned.earnings;
                                                    default:
                                                        return 1
                                                }
                                            },
                                            sortable: e.sortable
                                        }
                                    }));
                                    return Object(R.jsx)(tr, { data: xe, columns: t, userDataReady: $ })
                                }
                                return Object(R.jsxs)(O.a, { children: [Object(R.jsx)(o.b, { exact: !0, path: "".concat(e), children: pe.map((function(e) { return Object(R.jsx)($t, { farm: e, displayApr: jr(e.apr, e.lpRewardsApr), cakePrice: d, account: I, removed: !1 }, e.pid) })) }), Object(R.jsx)(o.b, { exact: !0, path: "".concat(e, "/history"), children: pe.map((function(e) { return Object(R.jsx)($t, { farm: e, displayApr: jr(e.apr, e.lpRewardsApr), cakePrice: d, account: I, removed: !0 }, e.pid) })) }), Object(R.jsx)(o.b, { exact: !0, path: "".concat(e, "/archived"), children: pe.map((function(e) { return Object(R.jsx)($t, { farm: e, displayApr: jr(e.apr, e.lpRewardsApr), cakePrice: d, account: I, removed: !0 }, e.pid) })) })] })
                            }(), I && !l && te && Object(R.jsx)(u.X, { justifyContent: "center", children: Object(R.jsx)(q.a, {}) }), Object(R.jsx)("div", { ref: V })]
                        })]
                    })
                }
        }
    }
]);
//# sourceMappingURL=27.c69b4c3a.chunk.js.map
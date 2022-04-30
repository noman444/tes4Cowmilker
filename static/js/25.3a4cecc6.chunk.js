(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [25], { 1527: function(e, t, n) { "use strict";
            n.r(t); var c, r, i, a, s, o, l, d, b, j, u, O, f, p, x, h = n(8),
                m = n(1),
                v = n(5),
                g = n(2),
                k = n(14),
                w = n(189),
                y = n(43),
                C = n(140),
                S = n(62),
                I = n(381),
                N = n(842),
                T = n(3),
                F = n.n(T),
                P = n(13),
                A = n(9),
                D = n(188),
                H = v.e.div(c || (c = Object(h.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n"]))),
                E = n(56),
                W = n(227),
                L = n(95),
                z = n(45),
                J = n(130),
                M = n(99),
                Q = n(0),
                U = Object(v.e)(g.nc)(r || (r = Object(h.a)(["\n  font-weight: 600;\n"]))),
                Z = v.e.div(i || (i = Object(h.a)(["\n  margin-bottom: 16px;\n"]))),
                _ = v.e.div(a || (a = Object(h.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),
                B = v.e.label(s || (s = Object(h.a)(["\n  color: ", ";\n  display: block;\n  margin-bottom: 8px;\n  margin-top: 24px;\n"])), (function(e) { return e.theme.colors.text })),
                G = function(e) { var t = e.nft,
                        n = e.tokenIds,
                        c = e.onSuccess,
                        r = e.onDismiss,
                        i = Object(m.useState)(!1),
                        a = Object(A.a)(i, 2),
                        s = a[0],
                        o = a[1],
                        l = Object(m.useState)(""),
                        d = Object(A.a)(l, 2),
                        b = d[0],
                        j = d[1],
                        u = Object(m.useState)(null),
                        O = Object(A.a)(u, 2),
                        f = O[0],
                        p = O[1],
                        x = Object(k.b)().t,
                        h = Object(y.c)().account,
                        v = Object(z.i)(Object(W.a)()),
                        w = Object(L.a)().toastSuccess,
                        C = Object(J.a)().callWithGasPrice,
                        S = function() { var e = Object(P.a)(F.a.mark((function e() { var t, i; return F.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.prev = 0, E.a.utils.isAddress(b)) { e.next = 6; break }
                                            p(x("Please enter a valid wallet address")), e.next = 14; break;
                                        case 6:
                                            return e.next = 8, C(v, "transferFrom", [h, b, n[0]]);
                                        case 8:
                                            return t = e.sent, o(!0), e.next = 12, t.wait();
                                        case 12:
                                            (i = e.sent).status ? (r(), c(), w(x("NFT successfully transferred!"), Object(Q.jsx)(M.b, { txHash: i.transactionHash }))) : (p(x("Unable to transfer NFT")), o(!1));
                                        case 14:
                                            e.next = 19; break;
                                        case 16:
                                            e.prev = 16, e.t0 = e.catch(0), console.error("Unable to transfer NFT:", e.t0);
                                        case 19:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [0, 16]
                                ]) }))); return function() { return e.apply(this, arguments) } }(); return Object(Q.jsxs)(g.wb, { title: x("Transfer NFT"), onDismiss: r, children: [Object(Q.jsxs)(Z, { children: [f && Object(Q.jsx)(g.nc, { color: "failure", mb: "8px", children: f }), Object(Q.jsxs)(H, { children: [Object(Q.jsxs)(g.nc, { children: [x("Transferring"), ":"] }), Object(Q.jsx)(U, { children: x("1x %nftName% NFT", { nftName: t.name }) })] }), Object(Q.jsxs)(B, { htmlFor: "transferAddress", children: [x("Receiving address"), ":"] }), Object(Q.jsx)(g.fb, { id: "transferAddress", name: "address", type: "text", placeholder: x("Paste address"), value: b, onChange: function(e) { var t = e.target.value;
                                    j(t) }, isWarning: f, disabled: s })] }), Object(Q.jsxs)(_, { children: [Object(Q.jsx)(g.r, { width: "100%", variant: "secondary", onClick: r, children: x("Cancel") }), Object(Q.jsx)(g.r, { width: "100%", onClick: S, disabled: !h || s || !b, children: x("Confirm") })] })] }) },
                K = v.e.div(o || (o = Object(h.a)(["\n  margin-bottom: 16px;\n"]))),
                R = v.e.div(l || (l = Object(h.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),
                X = function(e) { var t = e.nft,
                        n = e.onSuccess,
                        c = e.onClaim,
                        r = e.onDismiss,
                        i = Object(m.useState)(!1),
                        a = Object(A.a)(i, 2),
                        s = a[0],
                        o = a[1],
                        l = Object(k.b)().t,
                        d = Object(y.c)().account,
                        b = Object(L.a)(),
                        j = b.toastError,
                        u = b.toastSuccess,
                        O = function() { var e = Object(P.a)(F.a.mark((function e() { var t, i; return F.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return o(!0), e.prev = 1, e.next = 4, c();
                                        case 4:
                                            return t = e.sent, e.next = 7, t.wait();
                                        case 7:
                                            (i = e.sent).status && (u(l("Successfully claimed!"), Object(Q.jsx)(M.b, { txHash: i.transactionHash })), r(), n()), e.next = 15; break;
                                        case 11:
                                            e.prev = 11, e.t0 = e.catch(1), j(l("Error"), l("Please try again. Confirm the transaction and make sure you are paying enough gas!")), o(!1);
                                        case 15:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [1, 11]
                                ]) }))); return function() { return e.apply(this, arguments) } }(); return Object(Q.jsxs)(g.wb, { title: l("Claim Collectible"), onDismiss: r, children: [Object(Q.jsx)(K, { children: Object(Q.jsxs)(g.X, { alignItems: "center", mb: "8px", justifyContent: "space-between", children: [Object(Q.jsxs)(g.nc, { children: [l("You will receive"), ":"] }), Object(Q.jsx)(g.nc, { bold: !0, children: l("1x %nftName% Collectible", { nftName: t.name }) })] }) }), Object(Q.jsxs)(R, { children: [Object(Q.jsx)(g.r, { width: "100%", variant: "secondary", onClick: r, children: l("Cancel") }), Object(Q.jsx)(g.r, { width: "100%", onClick: O, disabled: !d, isLoading: s, endIcon: s ? Object(Q.jsx)(g.i, { color: "currentColor", spin: !0 }) : null, children: l("Confirm") })] })] }) },
                Y = v.e.div(d || (d = Object(h.a)(["\n  background-color: ", ";\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  padding-bottom: 100%;\n"])), (function(e) { return e.theme.colors.cardBorder })),
                q = v.e.img(b || (b = Object(h.a)(["\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  transition: opacity 1s linear;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 24px 24px 0 0;\n"]))),
                V = v.e.video(j || (j = Object(h.a)(["\n  height: 100%;\n  width: 100%;\n"]))),
                $ = function(e) { var t = e.nft,
                        n = e.isOwned,
                        c = void 0 !== n && n,
                        r = t.images,
                        i = t.name,
                        a = t.video,
                        s = "/images/nfts/".concat(r.lg); if (a) { var o = Object(Q.jsxs)(V, { autoPlay: !0, controls: !1, loop: !0, muted: !0, poster: s, children: [Object(Q.jsx)("source", { src: a.webm, type: "video/webm" }), Object(Q.jsx)("source", { src: a.mp4, type: "video/mp4" })] }); return c ? Object(Q.jsx)("a", { href: r.ipfs, target: "_blank", rel: "noreferrer noopener", children: o }) : o } var l = Object(Q.jsx)(q, { src: s, alt: i }); return Object(Q.jsx)(Y, { children: c ? Object(Q.jsx)("a", { href: r.ipfs, target: "_blank", rel: "noreferrer noopener", children: l }) : l }) },
                ee = Object(v.e)(H)(u || (u = Object(h.a)(["\n  min-height: 28px;\n"]))),
                te = Object(v.e)(g.r).attrs({ variant: "text" })(O || (O = Object(h.a)(["\n  height: auto;\n  padding: 16px 24px;\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n\n  &:focus:not(:active) {\n    box-shadow: none;\n  }\n"]))),
                ne = v.e.div(f || (f = Object(h.a)(["\n  padding: 24px;\n"]))),
                ce = function(e) { var t, n = e.nft,
                        c = e.canClaim,
                        r = void 0 !== c && c,
                        i = e.tokenIds,
                        a = void 0 === i ? [] : i,
                        s = e.onClaim,
                        o = e.refresh,
                        l = Object(m.useState)(!1),
                        d = Object(A.a)(l, 2),
                        b = d[0],
                        j = d[1],
                        u = Object(k.b)().t,
                        O = Object(D.c)().profile,
                        f = n.identifier,
                        p = n.name,
                        x = n.description,
                        h = a.length > 0,
                        v = b ? g.K : g.H,
                        w = function() { var e = Object(P.a)(F.a.mark((function e() { return F.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            j(!b);
                                        case 1:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(),
                        y = function() { o() },
                        C = Object(g.Mc)(Object(Q.jsx)(G, { nft: n, tokenIds: a, onSuccess: y })),
                        S = Object(A.a)(C, 1)[0],
                        I = Object(g.Mc)(Object(Q.jsx)(X, { nft: n, onSuccess: y, onClaim: s })),
                        N = Object(A.a)(I, 1)[0]; return Object(Q.jsxs)(g.v, { isActive: h, children: [Object(Q.jsx)($, { nft: n, isOwned: h }), Object(Q.jsxs)(g.w, { children: [Object(Q.jsxs)(ee, { children: [Object(Q.jsx)(g.Z, { children: p }), h && Object(Q.jsx)(g.kc, { outline: !0, variant: "secondary", children: u("In Wallet") }), (null === O || void 0 === O || null === (t = O.nft) || void 0 === t ? void 0 : t.identifier) === f && Object(Q.jsx)(g.kc, { outline: !0, variant: "success", children: u("Profile Pic") })] }), r && Object(Q.jsx)(g.r, { width: "100%", mt: "24px", onClick: N, children: u("Claim this NFT") }), h && Object(Q.jsx)(g.r, { width: "100%", variant: "secondary", mt: "24px", onClick: S, children: u("Transfer") })] }), Object(Q.jsxs)(g.x, { p: "0", children: [Object(Q.jsx)(te, { width: "100%", endIcon: Object(Q.jsx)(v, { width: "24px", color: "primary" }), onClick: w, children: u("Details") }), b && Object(Q.jsx)(ne, { children: Object(Q.jsx)(g.nc, { as: "p", color: "textSubtle", style: { textAlign: "center" }, children: u(x) }) })] })] }) },
                re = v.e.div(p || (p = Object(h.a)(["\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: 1fr;\n  padding-bottom: 24px;\n  padding-top: 24px;\n\n  ", " {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  ", " {\n    grid-template-columns: repeat(3, 1fr);\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.md })),
                ie = {},
                ae = function() { var e = Object(N.a)().tokenIds,
                        t = Object(S.b)(),
                        n = Object(y.c)().account,
                        c = Object(m.useCallback)((function() { n && t(Object(I.b)(n)) }), [t, n]); return Object(m.useEffect)((function() { c() }), [n, c]), Object(Q.jsx)(re, { children: C.a.pancake.map((function(t) { var n = ie[t.identifier] || ce; return Object(Q.jsx)("div", { id: "nft-".concat(t.name), children: Object(Q.jsx)(n, { nft: t, tokenIds: e[t.identifier], refresh: c }) }, t.name) })) }) },
                se = v.e.div(x || (x = Object(h.a)(["\n  border-bottom: 2px solid ", ";\n  margin-bottom: 24px;\n  padding-bottom: 32px;\n"])), (function(e) { return e.theme.colors.textSubtle }));
            t.default = function() { var e = Object(k.b)().t; return Object(Q.jsxs)(w.b, { children: [Object(Q.jsx)(se, { children: Object(Q.jsx)(g.Z, { as: "h1", scale: "xxl", color: "secondary", children: e("CyberCows NFTs ") }) }), Object(Q.jsx)(ae, {})] }) } }, 842: function(e, t, n) { "use strict";
            n.d(t, "a", (function() { return l })); var c = n(1),
                r = n(43),
                i = n(23),
                a = n(62),
                s = n(140),
                o = n(381),
                l = function() { var e = Object(r.c)().account,
                        t = Object(a.b)(),
                        n = Object(i.c)((function(e) { return e.collectibles })),
                        l = n.isInitialized,
                        d = n.isLoading,
                        b = n.data,
                        j = Object.keys(b); return Object(c.useEffect)((function() {!l && e && t(Object(o.b)(e)) }), [l, e, t]), { isInitialized: l, isLoading: d, tokenIds: b, nftsInWallet: s.a.pancake.filter((function(e) { return j.includes(e.identifier) })) } } } }
]);
//# sourceMappingURL=25.3a4cecc6.chunk.js.map
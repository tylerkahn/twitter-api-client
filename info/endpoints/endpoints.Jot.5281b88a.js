"use strict";
(self.webpackChunk_twitter_responsive_web =
  self.webpackChunk_twitter_responsive_web || []).push([
  ["endpoints.Jot"],
  {
    49135: (e, t, r) => {
      r.r(t), r.d(t, { default: () => o });
      const o = ({ apiClient: e, featureSwitches: t }) => ({
        clientEvent: (t, r = !1, o = {}) =>
          e.post("jot/client_event", t, { keepalive: r }, o, ".json"),
        errorLog: (t, r = {}) => e.post("jot/error_log", t, {}, r, ".json"),
        externalReferer: (t, r = {}) =>
          e.post("jot/external_referer", t, {}, r, ".json"),
      });
    },
  },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/endpoints.Jot.5281b88a.js.map

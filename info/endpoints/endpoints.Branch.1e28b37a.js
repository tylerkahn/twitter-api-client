"use strict";
(self.webpackChunk_twitter_responsive_web =
  self.webpackChunk_twitter_responsive_web || []).push([
  ["endpoints.Branch"],
  {
    65237: (t, e, n) => {
      n.r(e), n.d(e, { default: () => i });
      const i = ({ apiClient: t, featureSwitches: e }) => ({
        initSdk: () =>
          t.post("branch/init", {}, {}, { "content-type": "application/json" }),
        callback: (e) =>
          t.post(
            "branch/callback",
            { cross_platform_id: e },
            {},
            { "content-type": "application/json" }
          ),
      });
    },
  },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/endpoints.Branch.1e28b37a.js.map

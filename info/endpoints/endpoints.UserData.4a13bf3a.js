"use strict";
(self.webpackChunk_twitter_responsive_web =
  self.webpackChunk_twitter_responsive_web || []).push([
  ["endpoints.UserData"],
  {
    22866: (t, e, a) => {
      a.r(e), a.d(e, { default: () => n });
      const n = ({ apiClient: t, featureSwitches: e }) => ({
        fetchDownloads: (e, a) => t.get("account/user_twitter_data", e, a, ""),
        createDataDownload: (e, a) =>
          t.post(
            "account/user_twitter_data",
            e,
            {},
            { ...a, "content-type": "application/json" },
            ""
          ),
        markDataAsDownloaded: (e, a) =>
          t.put(
            "account/user_twitter_data",
            e,
            { ...a, "content-type": "application/json" },
            ""
          ),
      });
    },
  },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/endpoints.UserData.4a13bf3a.js.map

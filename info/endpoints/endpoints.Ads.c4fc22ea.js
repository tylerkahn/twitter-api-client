"use strict";
(self.webpackChunk_twitter_responsive_web =
  self.webpackChunk_twitter_responsive_web || []).push([
  ["endpoints.Ads"],
  {
    9060: (e, t, s) => {
      s.r(t), s.d(t, { default: () => a });
      const a = ({ apiClient: e, featureSwitches: t }) => ({
        createLocalId: (t) =>
          e
            .postUnversioned(
              "/12/measurement/dcm_local_id",
              t,
              {},
              "https://ads-api.twitter.com"
            )
            .then((e) => e.data),
      });
    },
  },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/endpoints.Ads.c4fc22ea.js.map

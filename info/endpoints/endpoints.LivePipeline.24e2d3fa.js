"use strict";
(self.webpackChunk_twitter_responsive_web =
  self.webpackChunk_twitter_responsive_web || []).push([
  ["endpoints.LivePipeline"],
  {
    53346: (e, s, i) => {
      i.r(s), i.d(s, { default: () => t });
      const t = ({ apiClient: e, featureSwitches: s }) => ({
        updateSubscriptions(s, i) {
          const { sessionId: t, toSubscribe: n, toUnsubscribe: p } = s,
            o = { sub_topics: n.join(","), unsub_topics: p.join(",") },
            u = { ...i, "LivePipeline-Session": t };
          return e.post("live_pipeline/update_subscriptions", o, {}, u, "");
        },
      });
    },
  },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/endpoints.LivePipeline.24e2d3fa.js.map

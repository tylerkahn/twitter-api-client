"use strict";
(self.webpackChunk_twitter_responsive_web =
  self.webpackChunk_twitter_responsive_web || []).push([
  ["endpoints.Account"],
  {
    14287: (t, e, s) => {
      s.r(e), s.d(e, { default: () => a });
      const a = ({ apiClient: t, featureSwitches: e }) => ({
        disassociateAccount: (e = {}, s = {}) =>
          t.post(
            "account/not_my_account/disassociate",
            e,
            {},
            { ...s, "content-type": "application/json" }
          ),
        getMaskedData: (e = {}, s = {}) =>
          t.get("account/not_my_account/get_masked_data", e, s),
      });
    },
  },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/endpoints.Account.cd57e96a.js.map

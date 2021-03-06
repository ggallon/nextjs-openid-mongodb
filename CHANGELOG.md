## [v0.9.2](https://github.com/ggallon/nextjs-openid-mongodb/tree/v0.9.2) (2020-01-08)
- Updating settings types
- Added validation for settings in the Node.js instance
- Update packages devDependencies

## [v0.9.1](https://github.com/ggallon/nextjs-openid-mongodb/tree/v0.9.1) (2019-12-21)
- Added SameSite support
- Update dependencies and devdependencies
- Update README

## [v0.9.0](https://github.com/ggallon/nextjs-openid-mongodb/tree/v0.9.0) (2019-11-19)

- Fix typescript build issue introduce to v0.6.1
- Adds the domain option in cookies
- Update dependencies and devdependencies
- Fix missing LoginOptions to ISignInWithAuth0
- Update Git issue templates (feature_request, bug_report) and pull_request_template
- Update CODE-OF-CONDUCT
- Clean code

## [v0.6.3](https://github.com/ggallon/nextjs-openid-mongodb/tree/v0.6.3) (2019-11-8)

- Fix test login handler

## [v0.6.2](https://github.com/ggallon/nextjs-openid-mongodb/tree/v0.6.2) (2019-11-8)

- Enables sending a custom state to the auth server
- Update packages dependencies

## [v0.6.1](https://github.com/ggallon/nextjs-openid-mongodb/tree/v0.6.1) (2019-11-01)

- Fix version return for telemetry
- Update dependencies and locked packages versions
- Fix lint rules

## [v0.6.0](https://github.com/ggallon/nextjs-openid-mongodb/tree/v0.6.0) (2019-10-30)

- forked from [@auth0/nextjs-auth0](https://github.com/auth0/nextjs-auth0/)
- Custum package to nextjs-openid-mongodb

## [v0.5.0](https://github.com/ggallon/nextjs-openid-mongodb/tree/v0.5.0) (2019-10-14)

- Added support for custom authorization parameters in the Login handler

## [v0.4.0](https://github.com/ggallon/nextjs-openid-mongodb/tree/v0.4.0) (2019-10-10)

- Rename the `httpClient` to `oidcClient` setting to support more OIDC related settings.
- Added support for `id_token` leeway for when the time on your server is running behind on Auth0.
- Improve handling of `Secure` cookies. Don't force `Secure` cookies when running on localhost (to fix issues related to `next start`)

## [v0.3.0](https://github.com/ggallon/nextjs-openid-mongodb/tree/v0.3.0) (2019-10-09)

- Fixed issue related to `audience` not being passed to the `/authorize` request
- Rename `useAuth0` to `initAuth0` to clear any confusion about React Hooks (this SDK does not provide a hook)
- Added a new handler to require authentication on API routes.

## [v0.2.0](https://github.com/ggallon/nextjs-openid-mongodb/tree/v0.2.0) (2019-09-25)

- Added support for `storeRefreshToken` to persist the `refresh_token` in the session
- Added prettier
- Removed the need build time configuration

## [v0.1.0](https://github.com/ggallon/nextjs-openid-mongodb/tree/v0.1.0) (2019-09-17)

Initial release.

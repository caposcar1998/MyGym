// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
let domain = "dev-4y63k0ek.us.auth0.com"
let clientId = "5QWlFGQ9Q0ZvLGYbnT4QY27pjZj1EV3e"
export const environment = {
  production: false,
  auth: {
    domain,
    clientId, 
    redirectUrl: window.location.origin
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

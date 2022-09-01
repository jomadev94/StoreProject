// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'gf-storeproject',
    appId: '1:651998259393:web:8bc4590f64a7488f32cc40',
    storageBucket: 'gf-storeproject.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyBYw-JNSlz68fda9-LrqxezOn_Mnu5GY1E',
    authDomain: 'gf-storeproject.firebaseapp.com',
    messagingSenderId: '651998259393',
  },
  production: false,
  apiUrl:"https://localhost:7059/api/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

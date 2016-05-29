import "babel-polyfill";

let context = require.context('./spec', true, /Spec\.js$/);
context.keys().forEach(context);

import * as requestPromise from "request-promise";
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as mime from "mime";
import * as moment from "moment";
import * as lodash from "lodash";

const packageNames = require("all-the-package-names");

// Some initialization
admin.initializeApp();
admin.database();
admin.firestore();

// Simulate a blocking initialization op
let x = 0;
for (let i=0; i<100000000; i++) {
  x = 2*i;
}
x = x;

moment.locales().forEach(locale => moment.locale(locale));

const funcB = functions.https.onRequest(async (req, res) => {
  // None of what's inside this function matters, I'm only calling this stuff
  // to avoid any "your not using this imported module" warnings.

  await requestPromise("https://www.google.com");
  await admin.auth().listUsers();
  lodash.startsWith("foobar", "foo");
  mime.getExtension("text/javascript");
  packageNames.forEach((packageName: string) => packageName);

  res.send('ok');
});

exports = module.exports = funcB;

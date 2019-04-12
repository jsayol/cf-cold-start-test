import * as functions from "firebase-functions";

const funcA = functions.https.onRequest((req, res) => {
  res.send("Hello!");
});

exports = module.exports = funcA;

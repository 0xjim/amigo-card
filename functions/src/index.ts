import * as functions from "firebase-functions";
import admin = require("firebase-admin");

admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const writeNewUserToDatabase = functions.auth.user().onCreate((user) => {
  return admin.firestore()
      .collection("users")
      .doc(user.uid)
      .set({
        email: user.email,
      });
});

export const inactivateUserInDatabase =
functions.auth.user().onDelete((user) => {
  return admin.firestore()
      .collection("users")
      .doc(user.uid)
      .delete();
});

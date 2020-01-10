var admin = require('firebase-admin');
var app = admin.initializeApp();

adminApp.get("/", (request, response) => {
    return response.redirect("/admin/login");
});

function login() {
    var userEmail = document.getElementById("email").value;
    var userPass = document.getElementById("password").value;
 
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (error) {
        document.getElementById('loginError').innerHTML = `Error signing in to firebase`;
      }
    });
 }

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
  });

  // Imports the Google Cloud client library.
const {Storage} = require('@google-cloud/storage');

// Instantiates a client. If you don't specify credentials when constructing
// the client, the client library will look for credentials in the
// environment.
const storage = new Storage();

try {
  // Makes an authenticated API request.
  const results = await storage.getBuckets();

  const [buckets] = results;

  console.log('Buckets:');
  buckets.forEach(bucket => {
    console.log(bucket.name);
  });
} catch (err) {
  console.error('ERROR:', err);
}



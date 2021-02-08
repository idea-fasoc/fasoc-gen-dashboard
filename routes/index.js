const express = require('express');

const router = express.Router();

const mountRegisterRoutes = require('../features/register/routes');
const mountLoginRoutes = require('../features/login/routes');
const mountLogoutRoutes = require('../features/logout/routes');
const mountResetPasswordRoutes = require('../features/reset-password/routes');
const mountProfileRoutes = require('../features/profile/routes');



function isAuthenticated(req, res, next) {
  if (req.user && req.isAuthenticated()) {
    return next();
  }

  return res.redirect('/');
}

/* GET home page. */
router.get('/', (req, res) => {
  res.render('pages/dashboard');
});

router.get('/icons', (req, res) => {
  res.render('pages/icons');
});

router.get('/maps', (req, res) => {
  res.render('pages/maps');
});

router.get('/tables',  (req, res) => {
  res.render('pages/tables');
});

const mongodb = require("mongodb"); // load mongodb
var MongoClient = require('mongodb').MongoClient;

//local DB
//const uri = "mongodb://localhost:27017"; // put your URI HERE

//remote
const uri = "mongodb+srv://admin:admin@clusterfasoc.hrzi9.mongodb.net/Fasoc?retryWrites=true&w=majority"


// connect to your MongoDB database through your URI. 
// The connect() function takes a uri and callback function as arguments.
MongoClient.connect(uri, (err, client) => {
  // connect to your specific collection (a.k.a database) that you specified at the end of your URI (/database)
  var db = client.db('Fasoc');
  const collection = db.collection("fasoc_DB");


  router.get("/register", (req, res) => {
    res.render('pages/register');
  });

  // Responds to POST requests with the route parameter being the username.
  // Creates a new user in the collection with the `user` parameter and the JSON sent with the req in the `body` property
  // Example request: https://mynodeserver.com/myNEWusername
  router.post("/:register", (req, res) => {
    // inserts a new document in the database (collection)
    //var specifications = { name: req.body.name, email: req.body.email };
    //var results = { name: req.body.name, email: req.body.email };
    collection.insertOne(
      //{specifications, results},
      {...req.body}, // this is one object to insert. `requst.params` gets the url req parameters
      (err, r) => {
        if (err) {
          res.send("Error in POST req.");
        } else {
          //res.send("Generator inserted");
          res.redirect('/register');
        }
      }
    );
  });
});

mountRegisterRoutes(router);
mountLoginRoutes(router);
mountLogoutRoutes(router, [isAuthenticated]);
mountResetPasswordRoutes(router);
mountProfileRoutes(router, [isAuthenticated]);

module.exports = router;

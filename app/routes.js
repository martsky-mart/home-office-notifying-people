var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index', {'global_header_text' : 'Home Office'});
});


// Branching

// -------------------------------------------------------------- V1
router.get('/outgoing-comms/1/3/', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var hasDependants = req.query.radioHasDependant;
  var radioDependant1 = req.query.radioDependant1;
  var radioDependant2 = req.query.radioDependant2;
  var radioPolice = req.query.radioPolice;

  if (hasDependants == "no" & radioPolice == "no"){
    // redirect to the relevant page
    res.redirect("/outgoing-comms/1/3-approval-nodependants-nopolice");
  }

  else  if (hasDependants == "no" & radioPolice == "yes"){
    // redirect to the relevant page
    res.redirect("/outgoing-comms/1/3-approval-nodependants-withpolice");
  }

  else if (hasDependants == "yes" & radioPolice == "no"){
    // redirect to the relevant page
    res.redirect("/outgoing-comms/1/3-approval-withdependants-nopolice");
  }

  else if (hasDependants == "yes" & radioPolice == "yes"){
    // redirect to the relevant page
    res.redirect("/outgoing-comms/1/3-approval-withdependants-withpolice");
  }


  else {

    // if over18 is any other value (or is missing) render the page requested
   // res.render('examples/over-18');

  }

});


router.get('/outgoing-comms/1/2a/', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var visa = req.query.radioVisa;

  if (visa == "refuse"){
    // redirect to the relevant page
    res.redirect("/outgoing-comms/1/placeholder");
  }
  else if (visa == "approve"){
     res.redirect("/outgoing-comms/1/2");
  }

  else {
    res.redirect('/outgoing-comms/1/1?errors=on');
  }

});

router.get('/outgoing-comms/1/', function (req, res) {
  res.render('/outgoing-comms/1/1', {'errors_on' : req.query.errors});
});


// -------------------------------------------------------------- V2
router.get('/outgoing-comms/2/3/', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var hasDependants = req.query.radioHasDependant;
  var radioDependant1 = req.query.radioDependant1;
  var radioDependant2 = req.query.radioDependant2;
  var radioPolice = req.query.radioPolice;

  if (hasDependants == "no" & radioPolice == "no"){
    // redirect to the relevant page
    res.redirect("/outgoing-comms/2/3-approval-nodependants-nopolice");
  }

  else  if (hasDependants == "no" & radioPolice == "yes"){
    // redirect to the relevant page
    res.redirect("/outgoing-comms/2/3-approval-nodependants-withpolice");
  }

  else if (hasDependants == "yes" & radioPolice == "no"){
    // redirect to the relevant page
    res.redirect("/outgoing-comms/2/3-approval-withdependants-nopolice");
  }

  else if (hasDependants == "yes" & radioPolice == "yes"){
    // redirect to the relevant page
    res.redirect("/outgoing-comms/2/3-approval-withdependants-withpolice");
  }


  else {

    // if over18 is any other value (or is missing) render the page requested
   // res.render('examples/over-18');

  }

});


router.get('/outgoing-comms/2/2a/', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var visa = req.query.radioVisa;

  if (visa == "refuse"){
    // redirect to the relevant page
    res.redirect("/outgoing-comms/2/placeholder");
  }
  else if (visa == "approve"){
     res.redirect("/outgoing-comms/2/2");
  }

  else {
    res.redirect('/outgoing-comms/2/1?errors=on');
  }

});

router.get('/outgoing-comms/2/', function (req, res) {
  res.render('/outgoing-comms/2/1', {'errors_on' : req.query.errors});
});


// -------------------------------------------------------------- V3


router.get('/outgoing-comms/3/3/', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var hasDependants = req.query.radioHasDependant;
  var radioDependant1 = req.query.radioDependant1;
  var radioDependant2 = req.query.radioDependant2;
  var radioPolice = req.query.radioPolice;

  if (hasDependants == "no" & radioPolice == "no"){
    // redirect to the relevant page
    res.redirect("/outgoing-comms/3/3-approval-nodependants-nopolice");
  }

  else  if (hasDependants == "no" & radioPolice == "yes"){
    // redirect to the relevant page
    res.redirect("/outgoing-comms/3/3-approval-nodependants-withpolice");
  }

  else if (hasDependants == "yes" & radioPolice == "no"){
    // redirect to the relevant page
    res.redirect("/outgoing-comms/3/3-approval-withdependants-nopolice");
  }

  else if (hasDependants == "yes" & radioPolice == "yes"){
    // redirect to the relevant page
    res.redirect("/outgoing-comms/3/3-approval-withdependants-withpolice");
  }


  else {

    // if over18 is any other value (or is missing) render the page requested
   // res.render('examples/over-18');

  }

});


router.get('/outgoing-comms/3/2a/', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var visa = req.query.radioVisa;

  if (visa == "refuse"){
    // redirect to the relevant page
    res.redirect("/outgoing-comms/3/placeholder");
  }
  else if (visa == "approve"){
     res.redirect("/outgoing-comms/3/2");
  }

  else {
    res.redirect('/outgoing-comms/3/1?errors=on');
  }

});

router.get('/outgoing-comms/3/', function (req, res) {
  res.render('/outgoing-comms/3/1', {'errors_on' : req.query.errors});
});

module.exports = router;
var express = require('express');
var router = express.Router();


router.get('/userManagement', function(req, res) {
   
  
    res.render('admin/userManagement');
})

module.exports = router;
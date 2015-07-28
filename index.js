var express = require('express');
var app = express();

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/post',function(req,res,next){
    var kadi = req.body.kadi;
    var sifre = req.body.sifre;

      
    res.send('Hosgeldin'+kadi);
});

module.exports = router;

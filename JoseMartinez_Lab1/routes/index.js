var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
	return res.render('index.ejs');
});


router.post('/', function(req, res, next) {
	console.log(req.body);
	
	var personInfo = req.body;
	let personPrint = req.body;
	let buff = new Buffer(personPrint.ipassword, 'base64');
	personPrint.ipassword = buff.toString('ascii');
	 
	console.log(personPrint);

	if(!personInfo.iusername || !personInfo.iemail || !personInfo.ipassword ){
		console.log("Send back") ;
		res.send();
	} else {
		 
		console.log("Fin One") ;
			User.findOne({email:personInfo.iemail},function(err,data){
				if(!data){
					var c;
					User.findOne({},function(err,data){

						if (data) {
							console.log("if");
							c = data.unique_id + 1;
						}else{
							c=1;
						}
					  console.log("Creating a user") ;
						var newPerson = new User({
							email:personInfo.iemail,
							username: personInfo.iusername,
							passwordhash: personInfo.ipassword
							
						});

						newPerson.save(function(err, Person){
							if(err)
								console.log(err);
							else
								console.log('Success');
						});

					}).sort({_id: -1}).limit(1);
					res.send({"Success":"You are regestered,You can login now."});
				}else{
					res.send({"Success":"Email is already used."});
				}

			});
		 
	}
});


router.get('/logout', function (req, res, next) {
	console.log("logout")
	if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
    	if (err) {
    		return next(err);
    	} else {
    		return res.redirect('/');
    	}
    });
}
});
 

module.exports = router;
var  parse = require('./parse');
var  db = require('./redis-connect');

parse.getLatestSlideNameValue(function(profileName){
     db.isNameExists(profileName.toLowerCase(),function(reply){
        if(reply==1)
            console.log("#"+profileName);
        else
            console.log("*"+profileName);
            process.exit(1);
    }); 
    
});

//var profileName = "rinky";

//console.log(ex);
// if( ex ==1 )
//     console.log("yes")
// console.log("no");


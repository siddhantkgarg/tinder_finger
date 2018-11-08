var redis = require("redis"),
    client = redis.createClient();
 
    client.on("error", function (err) {
        console.log("Error " + err);
    });


module.exports = {
    isNameExists : function(name,cb){
        client.sismember("allnames",name,function(err,replies){
           //console.log("reply : " + replies );
           cb(replies);
        });
    }
}
   
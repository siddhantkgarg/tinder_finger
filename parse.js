const fs = require('fs');
const xpath = require('xpath');
const parse5 = require('parse5');
const xmlser = require('xmlserializer');
const dom = require('xmldom').DOMParser;



// fs.readFile('./../out.xml',function(err,data){
//     const document = parse5.parse(data.toString());
//     const xhtml = xmlser.serializeToString(document);
//     const doc = new dom().parseFromString(xhtml);
//     const select = xpath.useNamespaces({"x": "http://www.w3.org/1999/xhtml"});
//     const nodes = select('string(//x:node[@resource-id="com.tinder:id/recs_card_user_headline_name"]/@text)', doc);
//     //console.log("nodes "+ nodes.trim(","));
//     cb(nodes);
// }); 

module.exports = {
  getLatestSlideNameValue : function(cb){
        fs.readFile('./../window_dump.xml',function(err,data){
            const document = parse5.parse(data.toString());
            const xhtml = xmlser.serializeToString(document);
            const doc = new dom().parseFromString(xhtml);
            const select = xpath.useNamespaces({"x": "http://www.w3.org/1999/xhtml"});
            const nodes = select('string(//x:node[@resource-id="com.tinder:id/recs_card_user_headline_name"]/@text)', doc);
            cb(nodes.trim(","));
        }); 
    }
}


String.prototype.trimRight = function(charlist) {
    if (charlist === undefined)
      charlist = "\s";
  
    return this.replace(new RegExp("[" + charlist + "]+$"), "");
  };



  String.prototype.trimLeft = function(charlist) {
    if (charlist === undefined)
      charlist = "\s";
  
    return this.replace(new RegExp("^[" + charlist + "]+"), "");
  };
    
  String.prototype.trim = function(charlist) {
    return this.trimLeft(charlist).trimRight(charlist);
  };

   

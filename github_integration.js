var request = require("request");

var client_id = "60f72f281a4d25455fcd";
var client_secret = "4f7964caa5b5d1ff215d6f3c1e72b8f9244b5f2b";

exports.getAuthorizationToken = function(code, callback) {
  request.post({url : "https://github.com/login/oauth/access_token", form : {code: code, client_id: client_id, client_secret : client_secret}, headers : {Accept: "application/json"}}, function(err, response, body){
    callback(err, body.access_token);
  });
}

exports.userAsValidatedAxaEmail = function(githubProfil, axaEmail, authorizationToken, callback) {
  callback(null, false);
}

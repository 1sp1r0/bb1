var request = require("request");

var client_id = "60f72f281a4d25455fcd";
var client_secret = "c84dea3db7f306d4a002318b77aed0d5182c9a7c";

exports.getAuthorizationToken = function(code, callback) {
  request.post({url : "https://github.com/login/oauth/access_token", form : {code: code, client_id: client_id, client_secret : client_secret}, headers : {Accept: "application/json"}}, function(err, response, body){
    body = JSON.parse(body);
    callback(err, body.access_token);
  });
}

exports.userAsValidatedAxaEmail = function(githubProfil, axaEmail, authorizationToken, callback) {
  callback(null, false);
}

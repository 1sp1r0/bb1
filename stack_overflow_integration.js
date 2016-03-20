var request = require("request");

exports.checkOutNewMessages = function(tag){
  var fromDate = Math.round((new Date().getTime()/1000) - (60 * 5));
  var stackOverflowUrl = "https://api.stackexchange.com/2.2/search/advanced?fromdate="+ fromDate +"&order=desc&sort=activity&tagged="+tag+"&site=stackoverflow";

  request.get({url : stackOverflowUrl, gzip : true}, function(err, response, body){

    var stackOverflowResponse = JSON.parse(body);
    console.log(stackOverflowResponse);
    for(var i = 0; i < stackOverflowResponse.items.length; i++){
      var requestToSend = {
        text : "One of your coworker needs your help.\nCheck out his question on stackoverflow here : " + stackOverflowResponse.items[i].link,
        username : "SlackOverflow",
        markdown : true,
      };
      var slackUrl = "https://slack.com/api/chat.postMessage?token=xoxp-27898435879-27903388593-27891662934-4d6ff6433b&channel=%23helpme";

      request.post({url : slackUrl, form : requestToSend, gzip : true}, function(err, response, body){
        console.log(body);
      });
    }
  });
};

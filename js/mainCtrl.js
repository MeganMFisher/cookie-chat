angular.module('chatroom').controller('mainCtrl', function($scope, messageService){

  //The getMessages function will call the getMessages method on the messageService object.
  //You'll then save the result of that request to your controller's $scope as messages ($scope.messages)

  $scope.getMessage = function(){
      messageService.getMessage().then(function(result) {
        // $scope.message = "";
        $scope.messages = result.reverse();
      });
  }
  $scope.getMessage();

  $scope.postMessage = function(newMessage){
    messageService.postMessage(newMessage).then(function(result) {

      });
  }

   setInterval(function(){
    $scope.getMessage();

  }, 1500)


  //The postMessage function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
  //pass that text to the postMessage method on the messageService object which will
  //then post it to the backend.

  //uncomment this code when your getMessages function is finished
  //This goes and gets new data every second, which mimicking a chat room experience.


$scope.getCookie = function() {
    messageService.getCookie().then(function(result){
      $scope.cookies = result;
    });
}

$scope.getCookie();

$scope.postCookie = function(newCookie){
  messageService.postCookie(newCookie).then(function(result){

  });
}

})
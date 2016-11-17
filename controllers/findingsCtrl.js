 app.controller('findingsCtrl',function($scope,$http){


 $http({
  method: 'GET',
  url: 'php/getFilesInFolder.php'
}).then(function successCallback(response) {

    // RESPONSE CONTAINS YOUR FILE LIST
    console.log(response);
    console.log("success");
    console.log(response.status);
    console.log(response.data);
    $scope.fileNames=response.data;
    console.log($scope.fileNames[0].name);

   /* for(data in response.data)
    {
      var fileName ={
        article_id
      }

    }
*/
        console.log(response.statusText);

  }, function errorCallback(response) {

    // ERROR CASE
        console.log(response);
        console.log("error");
        console.log(response.status);
        console.log(response.statusText);
$scope.fileNames="Error in fetching";

        


  });

});

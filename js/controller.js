app.controller('ViewController',['$scope','$http', function($scope,$http){
                                 
$http.get('js/nw-data.json').then(function(response){
  $scope.msglist=response.data.msgboost;
                            
}); 
  $http.get('js/nw-data2.json').then(function(response){
    $scope.ttlist=response.data.maindata;
   
   console.log($scope.ttlist);                                              
});
}]);


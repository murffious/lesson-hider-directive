angular.module("directivePractice")
.controller("lessonCtrl", function ($scope, lessonService) {
    
   $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo']
   $scope.announceDay = function (lesson, day) {
              if ( day !== undefined ) {
       alert(lesson + ' is active on ' + day + '.')
              }
       else   {
           alert(lesson + " is not taught")
     //($scope.lesson === lesson)
   }
}

$scope.striked = {
    value: true
}
})
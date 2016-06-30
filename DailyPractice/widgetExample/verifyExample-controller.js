/**
 * Created by Administrator on 2016/6/30.
 */
angular.module("myApp", [])
.controller('verifyExampleCtrl', ['$scope','$state', '$http', function($scope, $state, $http) {

    var vm = $scope.vm = {
        show_error: false,
        show_type: 1,
        user: {}
    };

    vm.submit = function (basic_form) {
        vm.show_error = true;
        basic_form.$setDirty();
        if(basic_form.$valid){
            alert("提交成功！");
        }
    };

    vm.change_show_type = function (form) {
        if (vm.show_type == 2) {
            vm.show_error = true;
        } else {
            vm.show_error = false;
        }
    }
    $scope.submit = function (userForm) {
        userForm.$setDirty();
        if(userForm.$valid){
            alert("提交成功！");
        }
    };
}])
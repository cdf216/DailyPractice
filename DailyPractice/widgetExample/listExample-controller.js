/**
 * Created by Administrator on 2016/7/4.
 */
angular.module("myapp",[]).controller("listController", function ($scope,CityData) {

    $scope.selected = {};
    //省市区选择
    var user = $scope.user = {};
    user.provinces = CityData;
    // 更换省的时候清空市
    $scope.$watch('user.province', function(province) {
        user.city = null;
    });
    // 更换市的时候清空区
    $scope.$watch('user.city', function(city) {
        user.area = null;
    });

});
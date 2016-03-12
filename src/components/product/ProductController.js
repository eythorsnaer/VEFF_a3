"use strict";

angular.module("project3App").controller("ProductController",
function ProductController($scope, $location, AppResource, $routeParams) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update product etc.

	if ($routeParams.id == null){
		$location.path("");
		$location.replace();
	}

	$scope.sellerID = $routeParams.id;
	$scope.text = "Products";
	$scope.products = [];

	AppResource.getSellerProducts($scope.sellerID).success(function(sellerProducts){
		$scope.products = sellerProducts;
		console.log('id: ', $scope.sellerID);
		console.log($scope.products);
	});
});
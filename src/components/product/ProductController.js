"use strict";

angular.module("project3App").controller("ProductController",
function ProductController($scope, AppResource) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update product etc.
	var products;
	$scope.text = "Products";
	$scope.products = [];

	function addProductsToCollection(products){
		for (var p in products) {
			console.log(p);
			$scope.products.push(p);
		}
	}

	function errorFun(){
		console.log("Error");
	}

	AppResource.getSellers().success(function(sellers){
		$scope.sellers = sellers;
	}).error(errorFun());

	for (var s in $scope.sellers){
		AppResource.getSellerProducts(s.id).success(addProductsToCollection(products)).error(errorFun());
	}
});
"use strict";

angular.module("project3App").controller("ProductController",
function ProductController($scope, $location, AppResource, $routeParams) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update product etc.
	
	$scope.text = "Products";
	$scope.products = [];
	var sellerID = parseInt($routeParams.id);

	AppResource.getSellerProducts(sellerID).success(function(sellerProducts){
		$scope.products = sellerProducts;
		console.log('id: ', sellerID);
		console.log($scope.products);
	});
});
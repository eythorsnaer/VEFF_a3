"use strict";

angular.module("project3App").controller("SellerDetailsController",
function SellerDetailsController($scope, AppResource, centrisNotify, $routeParams, $location) {
	
	$scope.products = [];
	$scope.topTen = [];
	var product;

	$scope.isLoading = true;

	if ($routeParams.id == null){
		$location.path("");
		$location.replace();
	}

	var sellerID = parseInt($routeParams.id);
	$scope.sellerID = sellerID;
	$scope.seller = {
		name: 		"",
		category: 	"",
		imagePath: 	""
	};

	AppResource.getSellerProducts(sellerID).success(function(sellerProducts){
		$scope.products = sellerProducts;
	});	

	AppResource.getSellerDetails(sellerID).success(function(seller) {
		$scope.seller = seller;
		$scope.isLoading = false;
	}).error(function() {
		$scope.isLoading = false;
	});

	function exists(id, array){
		for (var i = 0; i < array.length; i++){
			if (array[i].id === id)
			{
				return true;
			}
		}

		return false;
	}

	for (var i = 0; $scope.topTen.length < 10 && i < $scope.products.length; i++){
		
		product = $scope.products[i];

		if (!exists(product.id, $scope.topTen)){
			for (var j = 0; j < $scope.products.length; j++){
		
				if (product.quantitySold < $scope.products[j].quantitySold && !exists($scope.products[j].id, $scope.topTen)){
					product = $scope.products[j];
				}
			}

			$scope.topTen.push(product);
		}
	}
});
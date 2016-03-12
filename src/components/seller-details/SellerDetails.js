"use strict";

angular.module("project3App").controller("SellerDetailsController",
function SellerDetailsController($scope, AppResource, centrisNotify, $routeParams, $location) {
	
	$scope.isLoading = true;

	if ($routeParams.id == null){
		$location.path("");
		$location.replace();
	}

	var sellerID = parseInt($routeParams.id);
	$scope.seller = {
		name: 		"",
		category: 	"",
		imagePath: 	""
	};

	AppResource.getSellerDetails(sellerID).success(function(seller) {
		console.log('sellerDetails: ', seller);
		$scope.seller = seller;
		$scope.isLoading = false;
	}).error(function() {
		$scope.isLoading = false;
	});



});
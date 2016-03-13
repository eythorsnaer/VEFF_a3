"use strict";

angular.module("project3App").controller("SellerDetailsController",
function SellerDetailsController($scope, AppResource, centrisNotify, $routeParams, $location, ProductDlg) {
	
	$scope.isLoading = true;
	$scope.products = [];
	$scope.topTen = [];
	var temp = [];
	var product;
	var value;
	var a;

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

	if ($scope.products.length === 0){
		$scope.hasNoProducts = true;
	}
	else{
		$scope.hasNoProducts = false;
	}

	AppResource.getSellerDetails(sellerID).success(function(seller) {
		$scope.seller = seller;
		$scope.isLoading = false;
	}).error(function() {
		$scope.isLoading = false;
	});

	$scope.onAddProduct = function onAddProduct() {
		ProductDlg.show().then(function(product) {
			AppResource.addSellerProduct(sellerID, product).success(function(p) {
				var newProduct = product;
				$scope.products.push(newProduct);
				centrisNotify.success("products.Messages.UpadateSucceeded");
			}).error(function() {
				centrisNotify.error("products.Messages.UpdateFailed");
			});
		});
	};

	$scope.onEditProduct = function onEditProduct(productToEdit) {
		ProductDlg.show(productToEdit).then(function(product) {
			AppResource.updateSellerProduct(productToEdit.id, product).success(function(p) {
				centrisNotify.success("products.Messages.UpadateSucceeded");
				
			}).error(function() {
				centrisNotify.error("products.Messages.UpdateFailed");
				
			});
		});
	};

	for (var i = 0; i < $scope.products.length; i++){
		temp.push($scope.products[i]);
	}

	for (i = 0; i < 10 && i < temp.length; i++){
		
		product = temp[i];
		value = i;
		
		for (var j = i + 1; j < temp.length; j++){
			if (product.quantitySold < temp[j].quantitySold){
				product = temp[j];
				value = j;
			}
		}

		a = temp[i];
		temp[i] = temp[value];
		temp[value] = a;

		$scope.topTen.push(temp[i]);
	}
});
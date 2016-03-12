"use strict";

angular.module("project3App").controller("SellerDetailsController",
function SellerDetailsController($scope, AppResource, centrisNotify, $routeParams, $location, ProductDlg) {
	
	$scope.isLoading = true;
	$scope.isProductDlgOpen = true;
	$scope.products = [];
	$scope.topTen = [];
	var product;

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

	AppResource.getSellerProducts(sellerID).success(function(sellerProducts){
		$scope.products = sellerProducts;
	});	

	AppResource.getSellerDetails(sellerID).success(function(seller) {
		$scope.seller = seller;
		$scope.isLoading = false;
	}).error(function() {
		$scope.isLoading = false;
	});

	$scope.onAddProduct = function onAddProduct() {
		$scope.isProductDlgOpen = true;

		ProductDlg.show().then(function(product) {
			$scope.isProductDlgOpen = true;

			AppResource.addSellerProduct(sellerID, product).success(function(p) {
				var newProduct = product;
				$scope.products.push(newProduct);
				centrisNotify.success("products.Messages.UpadateSucceeded");
				$scope.isProductDlgOpen = false;
			}).error(function() {
				centrisNotify.error("products.Messages.UpdateFailed");
				$scope.isProductDlgOpen = false;
			});
		}, function() {
			$scope.isProductDlgOpen = false;
		});
	};

	$scope.onEditProduct = function onEditProduct(productToEdit) {
		$scope.isProductDlgOpen = true;

		ProductDlg.show(productToEdit).then(function(product) {

			AppResource.updateProduct(productToEdit.id, product).success(function(p) {
				centrisNotify.success("products.Messages.UpadateSucceeded");
				$scope.isProductDlgOpen = false;
			}).error(function() {
				centrisNotify.error("products.Messages.UpdateFailed");
				$scope.isProductDlgOpen = false;
			});
		}, function() {
			$scope.isProductDlgOpen = false;
		});
	};

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
"use strict";

angular.module("project3App").controller("SellerDetailsController",
function SellerDetailsController($scope, AppResource, centrisNotify, $routeParams, $location, ProductDlg) {
	
	$scope.isLoading = true;
	$scope.isProductDlgOpen = true;
	$scope.products = [];

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
		console.log('id: ', sellerID);
		console.log($scope.products);
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

});
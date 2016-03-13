'use strict';

angular.module("project3App").controller("ProductDlgController",
function ProductDlgController($scope, centrisNotify, modalParam) {

	var product = modalParam.product;

	if (product !== undefined) {
		$scope.product = {
			name: 			 product.name,
			price: 			 product.price,
			quantitySold: 	 product.quantitySold,
			quantityInStock: product.quantityInStock, 
			imagePath: 		 product.imagePath
		};
	} 
	else {
		$scope.product = {
			name: 	 "",
			price: 			 "",
			quantitySold: 	 "",
			quantityInStock: "", 
			imagePath: 		 ""
		};
	}

	$scope.onOk = function onOk() {
		//product validation
		//should not be empty
		if($scope.product.name.length === 0) {
			centrisNotify.error("product.Messages.NameRequired");
			return;
		}
		if($scope.product.price.length === 0) {
			centrisNotify.error("product.Messages.PriceRequired");
			return;
		}
		if($scope.product.quantitySold.length === 0){
			centrisNotify.error("product.Messages.QuantitySoldRequired");
			return;
		}
		if($scope.product.quantitySold.length === 0) {
			centrisNotify.error("product.Messages.QunatityInStockRequired");
			return;
		}
		if($scope.product.imagePath.length === 0){
			centrisNotify.error("product.Messages.ImagePathRequired");
			return;
		}

		//should be number
		if(isNaN($scope.product.price)) {
			centrisNotify.error("product.Messages.PriceRequired");
			return;
		}
		if(isNaN($scope.product.quantitySold)){
			centrisNotify.error("product.Messages.QuantitySoldRequired");
			return;
		}
		if(isNaN($scope.product.quantitySold)) {
			centrisNotify.error("product.Messages.QunatityInStockRequired");
			return;
		}

		$scope.$close($scope.product);
	};

	$scope.onCancel = function onCancel() {
		$scope.$dismiss('cancel');
	};
});
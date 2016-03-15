'use strict';

angular.module("project3App").controller("ProductDlgController",
function ProductDlgController($scope, centrisNotify) {

	if ($scope.product !== undefined) {
		$scope.product = {
			name: 			 $scope.product.name,
			price: 			 $scope.product.price,
			quantitySold: 	 $scope.product.quantitySold,
			quantityInStock: $scope.product.quantityInStock, 
			imagePath: 		 $scope.product.imagePath
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
			centrisNotify.error("productDlg.Messages.NameRequired");
			return;
		}
		if($scope.product.price.length === 0) {
			centrisNotify.error("productDlg.Messages.PriceRequired");
			return;
		}
		if($scope.product.quantitySold.length === 0){
			centrisNotify.error("productDlg.Messages.QuantitySoldRequired");
			return;
		}
		if($scope.product.quantityInStock.length === 0) {
			centrisNotify.error("productDlg.Messages.QuantityInStockRequired");
			return;
		}
		if($scope.product.imagePath.length === 0){
			centrisNotify.error("productDlg.Messages.ImagePathRequired");
			return;
		}

		//should be number
		if(isNaN($scope.product.price)) {
			centrisNotify.error("productDlg.Messages.PriceIsNaN", "products.Fail");
			return;
		}
		if(isNaN($scope.product.quantitySold)){
			centrisNotify.error("productDlg.Messages.QuantitySoldIsNaN", "products.Fail");
			return;
		}
		if(isNaN($scope.product.quantityInStock)) {
			centrisNotify.error("productDlg.Messages.QuantityInStockIsNaN", "products.Fail");
			return;
		}

		$scope.$close($scope.product);
	};

	$scope.onCancel = function onCancel() {
		$scope.$dismiss('cancel');
	};
});
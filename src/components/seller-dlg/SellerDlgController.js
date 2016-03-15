'use strict';

angular.module("project3App").controller("SellerDlgController",
function SellerDlgController($scope, centrisNotify) {

	if ($scope.seller !== undefined) {
		$scope.seller = {
			name: 		$scope.seller.name,
			category: 	$scope.seller.category,
			imagePath: 	$scope.seller.imagePath
		};
	} 
	else {
		$scope.seller = {
			name: 		"",
			category: 	"",
			imagePath: 	""
		};
	}

	$scope.onOk = function onOk() {
		//TODO: validation !!!!
		if($scope.seller.name.length === 0) {
			centrisNotify.error("sellerDlg.Messages.NameRequired");
			return;
		}
		if($scope.seller.category.length === 0) {
			centrisNotify.error("sellerDlg.Messages.CategoryRequired");
			return;
		}
		if($scope.seller.imagePath.length === 0){
			centrisNotify.error("sellerDlg.Messages.ImagePathRequired");
			return;
		}

		$scope.$close($scope.seller);
	};

	$scope.onCancel = function onCancel() {
		$scope.$dismiss('cancel');
	};
});
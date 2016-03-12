"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, centrisNotify, SellerDlg) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	$scope.isLoading = true;

	$scope.sellers = [];
	$scope.selectedSeller = {
		name: "",
		category: "",
		imagePath: ""
	};

	AppResource.getSellers().success(function(sellers) {
		$scope.sellers = sellers;
		$scope.isLoading = false;
	}).error(function() {
		$scope.isLoading = false;
	});

	$scope.onAddSeller = function onAddSeller() {
		
		SellerDlg.show().then(function(seller) {
			AppResource.addSeller(seller).success(function(seller) {
				//$scope.sellers.push(seller);
				centrisNotify.success("sellers.Messages.SaveSucceeded"); //, "sellers.Ok");
				//console.log("save success");
			}).error(function() {
				//TODO: error message
				centrisNotify.error("sellers.Messages.SaveFailed"); //, "sellers.Fail");
				//console.log("save error");
			});
		});
	};

	$scope.onEditSeller = function onEditSeller(selectedSeller) {

		SellerDlg.show().then(function(seller) {
			AppResource.updateSeller(seller.id, seller).success(function(seller) {
				centrisNotify.success("sellers.Messages.UpadateSucceeded");
				//console.log("update success");
			}).error(function() {
				centrisNotify.error("sellers.Messages.UpdateFailed");
				//console.log("update error");
			});
		});
	};
});
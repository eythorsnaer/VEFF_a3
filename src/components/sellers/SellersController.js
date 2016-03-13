"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, centrisNotify, SellerDlg) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	$scope.isLoading = true;
	$scope.sellers = [];
	$scope.testVar = "sjomli";

	AppResource.getSellers().success(function(sellers) {
		$scope.sellers = sellers;
		$scope.isLoading = false;
	}).error(function() {
		$scope.isLoading = false;
	});

	$scope.onAddSeller = function onAddSeller() {
		
		SellerDlg.show().then(function(seller) {
			AppResource.addSeller(seller).success(function(s) {
				centrisNotify.success("sellers.Messages.SaveSucceeded"); 
			}).error(function() {
				centrisNotify.error("sellers.Messages.SaveFailed"); 
			});
		});
	};

	$scope.onEditSeller = function onEditSeller(selectedSeller) {

		SellerDlg.show(selectedSeller).then(function(seller) {
			AppResource.updateSeller(selectedSeller.id, seller).success(function(s) {
				centrisNotify.success("sellers.Messages.UpadateSucceeded");
			}).error(function() {
				centrisNotify.error("sellers.Messages.UpdateFailed");
			});
		});
	};
});
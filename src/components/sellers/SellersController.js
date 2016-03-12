"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, centrisNotify, SellerDlg) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	$scope.isLoading = true;
	$scope.isSellerDlgOpen = false;
	$scope.sellers = [];

	AppResource.getSellers().success(function(sellers) {
		$scope.sellers = sellers;
		$scope.isLoading = false;
	}).error(function() {
		$scope.isLoading = false;
	});

	$scope.onAddSeller = function onAddSeller() {
		$scope.isSellerDlgOpen = true;
		
		SellerDlg.show().then(function(seller) {
			AppResource.addSeller(seller).success(function(seller) {
				centrisNotify.success("sellers.Messages.SaveSucceeded"); //, "sellers.Ok");
				$scope.isSellerDlgOpen = false;
			}).error(function() {
				centrisNotify.error("sellers.Messages.SaveFailed"); //, "sellers.Fail");
				$scope.isSellerDlgOpen = false;

			});
		}, function() {
			$scope.isSellerDlgOpen = false;
			console.log('modal dismissed');
		});
	};

	$scope.onEditSeller = function onEditSeller(selectedSeller) {
		$scope.isSellerDlgOpen = true;

		SellerDlg.show(selectedSeller).then(function(seller) {
			AppResource.updateSeller(selectedSeller.id, seller).success(function(seller) {
				centrisNotify.success("sellers.Messages.UpadateSucceeded");
				$scope.isSellerDlgOpen = false;
			}).error(function() {
				centrisNotify.error("sellers.Messages.UpdateFailed");
				$scope.isSellerDlgOpen = false;
			});
		}, function() {
			$scope.isSellerDlgOpen = false;
			console.log('modal dismissed');
		});
	};
});
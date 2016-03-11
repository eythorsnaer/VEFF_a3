"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, $translate) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	$scope.errorMessage = "meeee";

	AppResource.getSellers().success(function(sellers) {
		$scope.sellers = sellers;
	});

	$scope.onAddSeller = function onAddSeller() {
		var peterSeller = {
			name: "Peter Pan",
			category: "Movies",
			imagePath: "http://img.lum.dolimg.com/v1/images/image_76e1e8c7.jpeg"
		};

		AppResource.addSeller(peterSeller).success(function(seller){
			var newSeller = seller;
			//centrisNotify.success("sellers.Message.SaveSucceeded", "sellers.Ok");
		}).error(function() {
			//TODO: error message
			//centrisNotify.error("sellers.Messages.SaveFailed", "sellers.Fail");
		});
	};
});
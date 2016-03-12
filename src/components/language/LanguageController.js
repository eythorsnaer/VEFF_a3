"use strict";

angular.module("project3App").controller("LanguageController",
function LanguageController($scope, $translate) {
	$scope.onChangeToIS = function onChangeToIS() {
		$translate.use("is");
	};

	$scope.onChangeToEN = function onChangeToEN() {
		$translate.use("en");
	};
});
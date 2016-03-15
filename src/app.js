"use strict";

angular.module("project3App", ["ngRoute", "ui.bootstrap", "sharedServices", "pascalprecht.translate"])
.config(function ($routeProvider, $translateProvider) {
	$routeProvider.when("/", {
		controller: "SellersController",
		templateUrl: "components/sellers/index.html"
	}).when("/sellers/:id", {
		controller: "SellerDetailsController",
		templateUrl: "components/seller-details/seller-details.html"
	}).when("/sellers/:id/topTen", {
		controller: "SellerDetailsController",
		templateUrl: "components/seller-details/seller-details-topTen.html"
	})
	. otherwise({
		templateUrl: "components/sellers/index.html"
	});


	$translateProvider.fallbackLanguage('en');

	$translateProvider.registerAvailableLanguageKeys(['en', 'is'],{
		'en_*':'en',
		'is_*':'is'
	});

	$translateProvider.useStaticFilesLoader({
		prefix: "lang_",
		suffix: ".json"
	});

	$translateProvider.useSanitizeValueStrategy('escape');

	$translateProvider.use("is");
});


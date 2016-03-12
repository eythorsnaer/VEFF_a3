"use strict";

angular.module("project3App").directive('productCard', function productCard(){
	return {
		restrict: "E",
		templateUrl: "Product.html",
		scope: {
			product: "=ngModel"
		},
		link: function(scope, element, attributes){
			var condition = attributes["validate-condition"];
			console.log(scope.product);
		}
	};
});
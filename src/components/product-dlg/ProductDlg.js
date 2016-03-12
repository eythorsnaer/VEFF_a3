"use strict";

angular.module("project3App").factory("ProductDlg",
function ProductDlg($uibModal) {
	return {
		show: function(product) {
			var modalInstance = $uibModal.open({
				templateUrl: "components/product-dlg/product-dlg.html",
				controller: "ProductDlgController",
				resolve: {
					modalParam: function () {
					    return {
						  	product: product
					    };
				 	}
				}
			});

			return modalInstance.result;
		}
	};
});
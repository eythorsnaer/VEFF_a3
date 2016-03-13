"use strict";

describe("SellersController should be unit tested here", function() {
	// TODO: add beforeEach/describe/it/etc. functions as appropriate!
	beforeEach(module("project3App"));

    var SellersController, scope, appResource, sellerDlg;
    var mockLocation = {
        path: function(p) {
        }
    };

	describe("SellersController", function() {

        beforeEach(inject(function ($rootScope, AppResource, centrisNotify, SellerDlg) {
        	scope = $rootScope.$new();
            appResource = AppResource;
            sellerDlg = SellerDlg;

            spyOn(resource, 'getSellers').and.callThrough();
            spyOn(resource, 'addSeller').and.callThrough();
            spyOn(resource, 'updateSeller').and.callThrough();
            spyOn(sellerDlg, 'show').and.callThrough();
            spyOn(mockLocation, "path");

        	SellersController = $controller('SellersController', {
                $scope: scope,
                $location: mocLocation,
                AppResource: appResource,
                sellerDlg: sellerDlg
            });
        }));
    });

    it("says SellersController is defined", function() {
        expect(SellersController).toBeDefined();
    });

    it('says testVar is ', function () {
        expect(scope.testVar).toEqual("sjomli");
    });

});

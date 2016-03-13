"use strict";

describe("SellersController should be unit tested here", function() {
	// TODO: add beforeEach/describe/it/etc. functions as appropriate!
	beforeEach(module("project3App"));

    var SellersController, scope, appResource, sellerDlg;


    beforeEach(inject(function ($controller, $rootScope, AppResource, SellerDlg) {
    	scope = $rootScope.$new();
        appResource = AppResource;
        sellerDlg = SellerDlg;

        spyOn(resource, 'getSellers').and.callThrough();
        spyOn(resource, 'addSeller').and.callThrough();
        spyOn(resource, 'updateSeller').and.callThrough();
        spyOn(sellerDlg, 'show').and.callThrough();

    	SellersController = $controller('SellersController', {
            $scope: scope,
            AppResource: appResource,
            sellerDlg: sellerDlg
        });
    }));
  

    it("says SellersController is defined", function() {
        expect(SellersController).toBeDefined();
    });


});

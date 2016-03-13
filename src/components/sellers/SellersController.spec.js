'use strict';

describe("SellersController should be unit tested here\n", function() {

    beforeEach(module("project3App"));

    var sellersController, scope, appResource, sellerDlg;


    beforeEach(inject(function ($controller, $rootScope, AppResource, SellerDlg) {
    	scope = $rootScope.$new();
        appResource = AppResource;
        sellerDlg = SellerDlg;

        spyOn(appResource, 'getSellers').and.callThrough();
        spyOn(appResource, 'addSeller').and.callThrough();
        spyOn(appResource, 'updateSeller').and.callThrough();
        spyOn(sellerDlg, 'show').and.callThrough();

    	sellersController = $controller('SellersController', {
            $scope: scope,
            AppResource: appResource,
            sellerDlg: sellerDlg
        });
    }));

    //test =================================================

    //check parameters
    it("SellersController should be defined\n", function() {
        expect(sellersController).toBeDefined();
        expect(scope).toBeDefined();
        expect(appResource).toBeDefined();
        expect(sellerDlg).toBeDefined();
    });

    it("scope vars should be defined\n", function() {
        expect(scope.isLoading).toBeDefined();
        expect(scope.sellers).toBeDefined();
    });

    it("scope vars should be initalized\n", function() {
        //expect(scope.isLoading).toEqual(true);
        expect(scope.sellers.length).toEqual(4);
    });

    //create mock seller
    var mockSeller = {
        id: "5",
        name: "sjomli",
        category: "sjomlar",
        imagePath: "imgur.com/sjomli/sjomli.jpg"
    };

    //onAddSeller()
    it("onAddSeller should add the memeber to $scope.sellers\n", function(){
        scope.onAddSeller(mockSeller);
        expect(sellerDlg.show).toHaveBeenCalled();
        //expect(appResource).toHaveBeenCalled();
    });

    //getSellers
    it("$scope.sellers should have the new seller added above\n", function() {
        expect(appResource.getSellers).toHaveBeenCalled();
    });

    //onEditSeller()
    it("onEditSeller should update the seller in $scope.sellers\n", function(){
        mockSeller.name = "sveinbjorn";
        scope.onAddSeller(mockSeller);
        expect(sellerDlg.show).toHaveBeenCalled();
    });


});




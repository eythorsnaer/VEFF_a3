'use strict';

describe("SellersController should be unit tested here\n", function() {

    beforeEach(module("project3App"));

    var sellersController, scope, appResource, sellerDlg, location;

    var mockSeller = {
        id: 5,
        name: "svali",
        category: "drykkir",
        imagePath: "imgur.com/sjomli/sjomli.jpg"
    };

    var mockSellerDlg = {
        show: function() {
            return {
                then: function(fn){
                    fn(mockSeller);
                }
            };
        }
    };

    // ctrl init ==========================================

    beforeEach(inject(function ($controller, $rootScope, AppResource) {
    	scope = $rootScope.$new();
        appResource = AppResource;

        spyOn(appResource, 'getSellers').and.callThrough();
        spyOn(appResource, 'addSeller').and.callThrough();
        spyOn(appResource, 'updateSeller').and.callThrough();
        spyOn(mockSellerDlg, 'show').and.callThrough();
        //spyOn(mockSellerDlg, 'then').and.callThrough();


    	sellersController = $controller('SellersController', {
            $scope: scope,
            AppResource: appResource,
            sellerDlg: mockSellerDlg
        });
    }));

    //test =================================================

    //check parameters
    it("SellersController should be defined", function() {
        expect(sellersController).toBeDefined();
        expect(scope).toBeDefined();
        expect(appResource).toBeDefined();
    });

    it("scope vars should be defined", function() {
        expect(scope.isLoading).toBeDefined();
        expect(scope.sellers).toBeDefined();
        expect(scope.onAddSeller).toBeDefined();
        expect(scope.onEditSeller).toBeDefined();
    });

    it("scope vars should be initalized", function() {
        expect(scope.sellers.length).toEqual(4);
    });

    //onAddSeller()
    it("onAddSeller should add the memeber to $scope.sellers", function(){
        scope.onAddSeller();
        //expect(mockSellerDlg.show).toHaveBeenCalled();


        //scope.onAddSeller(mockSeller);
        //expect(appResource.addSeller).toHaveBeenCalledWith(mockSeller);
        //expect(mockSellerDlg.show).toHaveBeenCalled();
        //expect(mockSellerDlg.show).toHaveBeenCalled();
    });

    //getSellers
    it("getSellers should have been called for the new seller added above", function() {
        expect(appResource.getSellers).toHaveBeenCalled();
    });

    //onEditSeller()
    it("onEditSeller should update the seller in $scope.sellers", function(){
        mockSeller.name = "sjomli";
        //spyOn(mockSellerDlg, 'show');
        //spyOn(mockSellerDlg, 'then');
        //spyOn(appResource, 'updateSeller');
        //spyOn(mockSellerDlg, 'then');
        

        scope.onEditSeller(mockSeller);
        //expect(mockSellerDlg.show).toHaveBeenCalled();
    });


});




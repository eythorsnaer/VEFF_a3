'use strict';

describe("SellerDetailsController should be unit tested here\n", function() {

    beforeEach(module("project3App"));

    var ctrl, scope, routeParams, appResource, productDlg, notify;

    var mockLocation = {
        path: "/sellers/1"
    };

    //create mock product
    var mockProduct = {
        id: 1,
        product: {
            id: 23,
            name: "svali",
            price: 2990,
            quantitySold: 45,
            quantityInStock: 900,
            imagePath: "imgur.com/sjomli/sjomli.jpg"
        }
    };

    // ctrl init ==========================================

    beforeEach(inject(function ($controller, $rootScope, $routeParams, $location, AppResource, ProductDlg, centrisNotify) {
        scope = $rootScope.$new();
        routeParams = $routeParams;
        routeParams.id = 1;
        appResource = AppResource;
        productDlg = ProductDlg;
        mockLocation = $location;
        notify = centrisNotify;

        spyOn(appResource, 'getSellerProducts').and.callThrough();
        spyOn(appResource, 'getSellerDetails').and.callThrough();
        spyOn(productDlg, 'show').and.callThrough();
        spyOn(mockLocation, "path");


        ctrl = $controller('SellerDetailsController', {
            $scope: scope,
            $routeParams: routeParams,
            $location: mockLocation,
            AppResource: appResource,
            productDlg: ProductDlg
        });
    }));

    //test =================================================


    //check parameters
    it("vars should be defined", function() {
        expect(ctrl).toBeDefined();
        expect(routeParams).toBeDefined();
        expect(routeParams.id).toBeDefined();
        expect(appResource).toBeDefined();
        expect(productDlg).toBeDefined();
        expect(mockLocation).toBeDefined();
        expect(notify).toBeDefined();
    });

    it("scope vars should be defined", function() {
        expect(scope.isLoading).toBeDefined();
        expect(scope.products).toBeDefined();
        expect(scope.topTen).toBeDefined();
        expect(scope.sellerID).toBeDefined();
        expect(scope.seller).toBeDefined();
        expect(scope.hasProducts).toBeDefined();
        expect(scope.onAddProduct).toBeDefined();
        expect(scope.onEditProduct).toBeDefined();
    });

    it("scope vars should be initalized", function() {
        expect(scope.isLoading).toBe(false);
        expect(scope.products.length).toEqual(20);
        expect(scope.topTen.length).toEqual(10);
        expect(scope.sellerID).toEqual(1);
        expect(scope.seller).not.toEqual(undefined);
        expect(scope.hasProducts).toBe(true);
    });



    it("getSellerDetails should have been called", function() {
        appResource.getSellerDetails();
        expect(appResource.getSellerDetails).toHaveBeenCalled();
    });

    //onAddProduct()
    it("onAddProduct should add the memeber to $scope.sellers\n", function(){
        scope.onAddProduct(mockProduct);
        expect(productDlg.show).toHaveBeenCalled();
        //expect(appResource).toHaveBeenCalled();
    });

    //getSellerProducts
    it("getSellerProducts should have been called", function() {
        appResource.getSellerProducts();
        expect(appResource.getSellerProducts).toHaveBeenCalled();
    });

    //onEditProduct()
    it("onEditSeller should update the seller in $scope.sellers\n", function(){
        mockProduct.name = "bali";
        scope.onAddProduct(mockProduct);
        expect(productDlg.show).toHaveBeenCalled();
    });


});




beforeEach(module("project3App"));

var sellersController, scope, AppResource, centrisNotify;

<<<<<<< HEAD
    var SellersController, scope, appResource, sellerDlg;


    beforeEach(inject(function ($controller, $rootScope, AppResource, SellerDlg) {
    	scope = $rootScope.$new();
        appResource = AppResource;
        sellerDlg = SellerDlg;

        spyOn(appResource, 'getSellers').and.callThrough();
        spyOn(appResource, 'addSeller').and.callThrough();
        spyOn(appResource, 'updateSeller').and.callThrough();
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
=======
describe("SellersController", function() {
    beforeEach(inject(function ($rootScope, $controller, AppResource) {
    	scope = $rootScope.$new();

    	sellersController = $controller("SellersController", {
            $scope: scope,
            AppResource: AppResource
        });
    }));

    it('says testVar is', function () {
        expect(scope.testvar).toEqual("sjomli");
    });

    it('checks if sellers is empty', function () {
        expect(scope.sellers.length).not.toEqual(0);
    });
});
>>>>>>> 9da2aabd47b8117507fcf98b6985d91336c001e0

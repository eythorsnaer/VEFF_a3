beforeEach(module("project3App"));

var sellersController, scope, AppResource, centrisNotify;

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
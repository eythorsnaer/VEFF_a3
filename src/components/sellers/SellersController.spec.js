"use strict";

describe("SellersController should be unit tested here", function() {
	// TODO: add beforeEach/describe/it/etc. functions as appropriate!
	bebforeEach(module("project3App"));

	describe("SellersController", function() {
        beforeEach(inject(function ($rootScope, $controller) {
        	scope = $rootScope.$new();

        	SellersController = $controller('SellersController', {
                $scope: scope,
                
            });
        }));
    });

    it('says testVar is ', function () {
        expect(scope.testVar === "sjomli");
    });

});

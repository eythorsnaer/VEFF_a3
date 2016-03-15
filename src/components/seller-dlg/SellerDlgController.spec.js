'use strict';

describe("SellerDlgController should be unit tested here\n", function() {

    beforeEach(module("project3App"));

    var ctrl, scope, notify;

    var nameError = "sellerDlg.Messages.NameRequired";
    var categoryError = "sellerDlg.Messages.CategoryRequired";
    var imageError = "sellerDlg.Messages.ImagePathRequired";

    //create mock product
    var mockSeller = {
        id: 5,
        name: "svali",
        category: "drykkir",
        imagePath: "imgur.com/sjomli/sjomli.jpg"
    };


    var mockNotify = {
        error: function(string){}
    };

    // ctrl init ==========================================

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        scope.$close = function(p) {};
        scope.$dismiss = function() {};

        notify = mockNotify;

        spyOn(scope, "$close");
        spyOn(notify, "error");

        ctrl = $controller('SellerDlgController', {
            $scope: scope,
            centrisNotify: notify,
        });
    }));


    //test =================================================

    //check parameters
    it("vars should be defined", function() {
        expect(ctrl).toBeDefined();
        expect(notify).toBeDefined();  
    });

    //check scope vars
    it("scope vars should be defined", function() {
        expect(scope.onOk).toBeDefined();
        expect(scope.onCancel).toBeDefined();  
    });

    // onOk with valid seller
    it ("should call $close when onOk is called with valid seller", function() {
        scope.seller = mockSeller;
        scope.onOk();
        expect(scope.$close).toHaveBeenCalledWith(scope.seller);
    });

    it ("should call notify.error when onOk is called with seller.name as empty", function() {
        mockSeller.name = "";
        scope.seller = mockSeller;
        scope.onOk();
        expect(notify.error).toHaveBeenCalledWith(nameError);
        expect(scope.$close).not.toHaveBeenCalled();
        mockSeller.name = "bla";
    });

    it ("should call notify.error when onOk is called with seller.category as empty", function() {
        mockSeller.category = "";
        scope.seller = mockSeller;
        scope.onOk();
        expect(notify.error).toHaveBeenCalledWith(categoryError);
        expect(scope.$close).not.toHaveBeenCalled();
        mockSeller.category = "bla";
    });

    it ("should call notify.error when onOk is called with seller.imagePath as empty", function() {
        mockSeller.imagePath = "";
        scope.seller = mockSeller;
        scope.onOk();
        expect(notify.error).toHaveBeenCalledWith(imageError);
        expect(scope.$close).not.toHaveBeenCalled();
        mockSeller.imagePath = "bla";
    });


    it ("should call $dismiss when onCancel is called", function() {
        spyOn(scope, "$dismiss");
        scope.onCancel();
        expect(scope.$dismiss).toHaveBeenCalled();
    });

});




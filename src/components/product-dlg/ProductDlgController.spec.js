'use strict';

describe("ProductDlgController should be unit tested here\n", function() {

    beforeEach(module("project3App"));

    var ctrl, scope, notify;

    var nameError = "productDlg.Messages.NameRequired";
    var priceError = "productDlg.Messages.PriceRequired";
    var soldError = "productDlg.Messages.QuantitySoldRequired";
    var stockError = "productDlg.Messages.QuantityInStockRequired";
    var imageError = "productDlg.Messages.ImagePathRequired";

    var priceNaNError = "productDlg.Messages.PriceIsNaN";
    var soldNaNError = "productDlg.Messages.QuantitySoldIsNaN";
    var stockNaNError = "productDlg.Messages.QuantityInStockIsNaN";
    var failError = "products.Fail";

    //create mock product
    var mockProduct = {
        id: 23,
        name: "svali",
        price: "2990",
        quantitySold: "45",
        quantityInStock: "900",
        imagePath: "imgur.com/sjomli/sjomli.jpg"
    };


    var mockNotify = {
        error: function(s1, s2){}
    };

    // ctrl init ==========================================

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        scope.$close = function(p) {};
        scope.$dismiss = function() {};

        notify = mockNotify;


        spyOn(scope, "$close");
        spyOn(notify, "error");

        ctrl = $controller('ProductDlgController', {
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

    // onOk with valid product
    it ("should call $close when onOk is called with valid product", function() {
        scope.product = mockProduct;
        scope.onOk();
        expect(scope.$close).toHaveBeenCalledWith(scope.product);
    });

    it ("should call notify.error when onOk is called with product.name is empty", function() {
        mockProduct.name = "";
        scope.product = mockProduct;
        scope.onOk();
        expect(notify.error).toHaveBeenCalledWith(nameError);
        expect(scope.$close).not.toHaveBeenCalled();
        mockProduct.name = "bla";
    });

    it ("should call notify.error when onOk is called with product.price is empty", function() {
        mockProduct.price = "";
        scope.product = mockProduct;
        scope.onOk();
        expect(notify.error).toHaveBeenCalledWith(priceError);
        expect(scope.$close).not.toHaveBeenCalled();
        mockProduct.price = 1;
    });

    it ("should call notify.error when onOk is called with product.quantitySold is empty", function() {
        mockProduct.quantitySold = "";
        scope.product = mockProduct;
        scope.onOk();
        expect(notify.error).toHaveBeenCalledWith(soldError);
        expect(scope.$close).not.toHaveBeenCalled();
        mockProduct.quantitySold = 1;
    });

    it ("should call notify.error when onOk is called with product.quantityInStock is empty", function() {
        mockProduct.quantityInStock = "";
        scope.product = mockProduct;
        scope.onOk();
        expect(notify.error).toHaveBeenCalledWith(stockError);
        expect(scope.$close).not.toHaveBeenCalled();
        mockProduct.quantityInStock = 1;
    });

    it ("should call notify.error when onOk is called with product.imagePath is empty", function() {
        mockProduct.imagePath = "";
        scope.product = mockProduct;
        scope.onOk();
        expect(notify.error).toHaveBeenCalledWith(imageError);
        expect(scope.$close).not.toHaveBeenCalled();
        mockProduct.imagePath = "bla";
    });
    

    it ("should call notify.error when onOk is called with product.price as string", function() {
        mockProduct.price = "NotANumber.jpg";
        scope.product = mockProduct;
        scope.onOk();
        expect(notify.error).toHaveBeenCalledWith(priceNaNError, failError);
        expect(scope.$close).not.toHaveBeenCalled();
        mockProduct.price = 1;
    });

    it ("should call notify.error when onOk is called with product.quantitySold as string", function() {
        mockProduct.quantitySold = "NotANumber.jpg";
        scope.product = mockProduct;
        scope.onOk();
        expect(notify.error).toHaveBeenCalledWith(soldNaNError, failError);
        expect(scope.$close).not.toHaveBeenCalled();
        mockProduct.quantitySold = 1;
    });

    it ("should call notify.error when onOk is called with product.quantityInStock as string", function() {
        mockProduct.quantityInStock = "NotANumber.jpg";
        scope.product = mockProduct;
        scope.onOk();
        expect(notify.error).toHaveBeenCalledWith(stockNaNError, failError);
        expect(scope.$close).not.toHaveBeenCalled();
        mockProduct.quantityInStock = 1;
    });

    it ("should call $dismiss when onCancel is called", function() {
        spyOn(scope, "$dismiss");
        scope.onCancel();
        expect(scope.$dismiss).toHaveBeenCalled();
    });

});




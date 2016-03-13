'use strict';

describe("LanguageController should be unit tested here\n", function() {

    beforeEach(module("project3App"));

    var languageController, scope, translate, language;

    beforeEach(inject(function ($controller, $rootScope, $translate) {
    	scope = $rootScope.$new();
        translate = $translate;
        language = $translate.proposedLanguage() || $translate.use();

    	languageController = $controller('LanguageController', {
            $scope: scope,
            $translate: translate
        });
    }));

    //test =================================================

    it("variables should be defined\n", function() {
        expect(languageController).toBeDefined();
        expect(scope).toBeDefined();
        expect(translate).toBeDefined();
        expect(language).toBeDefined();
    });

    it("language should be default is\n", function() {
        expect(language).toEqual('is');
    });

     it("language should be fallback to en\n", function() {
        scope.onChangeToFallback();
        expect(language).toEqual('en');
    });

    it("onChangeToIS should change the language to is\n", function() {
        scope.onChangeToIS();
        expect(language).toEqual("is");
    });

    it("onChangeToEN should change the language to en\n", function() {
        scope.onChangeToEn();
        expect(language).toEqual("en");
    });



});
'use strict';

describe("LanguageController should be unit tested here", function() {

    beforeEach(module("project3App"));

    var languageController, scope, translate, language;

    beforeEach(inject(function ($controller, $rootScope, $translate) {
    	scope = $rootScope.$new();
        translate = $translate;
        //language = $translate.proposedLanguage() || $translate.use();

    	languageController = $controller('LanguageController', {
            $scope: scope,
            $translate: translate
        });
    }));

    //test =================================================

    it("variables should be defined", function() {
        expect(languageController).toBeDefined();
        expect(scope).toBeDefined();
        expect(translate).toBeDefined();
        //expect(language).toBeDefined();
    });

    it("language should be default is", function() {
        expect(translate.proposedLanguage()).toEqual('is');
    });

    it("onChangeToEN should change the language to en", function() {
        scope.onChangeToEN();
        expect(translate.proposedLanguage()).toEqual("en");
    });

    it("onChangeToIS should change the language to is", function() {
        scope.onChangeToIS();
        expect(translate.proposedLanguage()).toEqual("is");
    });



});
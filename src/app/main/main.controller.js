"use strict";
var MainController = (function () {
    function MainController($timeout, webDevTec, toastr) {
        var _this = this;
        this.activate = function ($timeout) {
            _this.getWebDevTec();
            $timeout(function () {
                _this.classAnimation = 'rubberBand';
            }, 4000);
        };
        this.awesomeThings = new Array();
        this.webDevTec = webDevTec;
        this.classAnimation = '';
        this.creationDate = 1451953210196;
        this.toastr = toastr;
        this.activate($timeout);
    }
    MainController.prototype.showToastr = function () {
        this.toastr.info('Fork <a href="https://github.com/OR13/AMTG" target="_blank"><b>Angular Material TypeScript Gulp</b></a>');
        this.classAnimation = '';
    };
    MainController.prototype.getWebDevTec = function () {
        this.awesomeThings = this.webDevTec.tec;
    };
    return MainController;
}());
exports.MainController = MainController;

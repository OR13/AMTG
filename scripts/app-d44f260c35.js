/******/!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}// webpackBootstrap
/******/
var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){var o,r=n(1),a=n(2),i=n(3),s=n(4),c=n(5),l=n(6),u=n(7),p=n(8);!function(t){"use strict";angular.module("AMTG",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ngMaterial","toastr"]).constant("malarkey",malarkey).constant("moment",moment).config(r.config).config(a.routerConfig).run(i.runBlock).service("githubContributor",c.GithubContributor).service("webDevTec",l.WebDevTecService).controller("MainController",s.MainController).directive("acmeNavbar",u.acmeNavbar).directive("acmeMalarkey",p.acmeMalarkey)}(o||(o={}))},function(t,e){function n(t,e){t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}n.$inject=["$logProvider","toastrConfig"],e.config=n},function(t,e){function n(t,e){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),e.otherwise("/")}n.$inject=["$stateProvider","$urlRouterProvider"],e.routerConfig=n},function(t,e){function n(t){t.debug("runBlock end")}n.$inject=["$log"],e.runBlock=n},function(t,e){var n=function(){function t(t,e,n){var o=this;this.activate=function(t){o.getWebDevTec(),t(function(){o.classAnimation="rubberBand"},4e3)},this.activate.$inject=["$timeout"],this.awesomeThings=new Array,this.webDevTec=e,this.classAnimation="",this.creationDate=1451953210196,this.toastr=n,this.activate(t)}return t.$inject=["$timeout","webDevTec","toastr"],t.prototype.showToastr=function(){this.toastr.info('Fork <a href="https://github.com/OR13/AMTG" target="_blank"><b>Angular Material TypeScript Gulp</b></a>'),this.classAnimation=""},t.prototype.getWebDevTec=function(){this.awesomeThings=this.webDevTec.tec},t}();e.MainController=n},function(t,e){var n=function(){function t(t,e){this.$log=t,this.$http=e,this.apiHost="https://api.github.com/repos/OR13/AMTG"}return t.$inject=["$log","$http"],t.prototype.getContributors=function(t){var e=this;return void 0===t&&(t=30),this.$http.get(this.apiHost+"/contributors?per_page="+t).then(function(t){return t.data})["catch"](function(t){e.$log.error("XHR Failed for getContributors.\n",t.data)})},t}();e.GithubContributor=n},function(t,e){var n=function(){function t(){var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"},{title:"TypeScript",url:"http://www.typescriptlang.org/",description:"TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.",logo:"typescript.png"}];this.data=t.map(function(t){return t.rank=Math.random(),t})}return Object.defineProperty(t.prototype,"tec",{get:function(){return this.data},enumerable:!0,configurable:!0}),t}();e.WebDevTecService=n},function(t,e){function n(){return{restrict:"E",scope:{creationDate:"="},templateUrl:"app/components/navbar/navbar.html",controller:o,controllerAs:"vm",bindToController:!0}}e.acmeNavbar=n;var o=function(){function t(t){this.relativeDate=t(this.creationDate).fromNow()}return t.$inject=["moment"],t}();e.NavbarController=o},function(t,e){function n(t){return{restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:o,controller:r,controllerAs:"vm"}}function o(t,e,n,o){var r,a=o.malarkey(e[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});e.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(t){a.type(t).pause()["delete"]()}),r=t.$watch("vm.contributors",function(t,e){angular.forEach(o.contributors,function(t){a.type(t.login).pause()["delete"]()})}),t.$on("$destroy",function(){r()})}n.$inject=["malarkey"],e.acmeMalarkey=n;var r=function(){function t(t,e,n){this.$log=t,this.githubContributor=e,this.malarkey=n,this.contributors=[],this.activate()}return t.$inject=["$log","githubContributor","malarkey"],t.prototype.activate=function(){var t=this;return this.getContributors().then(function(){t.$log.info("Activated Contributors View")})},t.prototype.getContributors=function(){var t=this;return this.githubContributor.getContributors(10).then(function(e){return t.contributors=e,t.contributors})},t}();e.MalarkeyController=r}]),angular.module("AMTG").run(["$templateCache",function(t){t.put("app/main/main.html",'<div layout="vertical" layout-fill=""><md-content><header><acme-navbar creation-date="main.creationDate"></acme-navbar></header><section class="jumbotron"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><md-button class="md-raised animated infinite" ng-class="main.classAnimation" ng-click="main.showToastr()">Splendid Toastr</md-button><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></section><div class="techs" layout-align="center"><md-card ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><md-card-content><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><h3 class="md-title">{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p></md-card-content><div class="md-action-buttons"><md-button ng-href="{{ awesomeThing.url }}">Website</md-button></div></md-card></div></md-content></div>'),t.put("app/components/navbar/navbar.html",'<md-toolbar layout="row" layout-align="center center"><md-button href="/">AMTG</md-button><section flex="" layout="row" layout-align="left center"><md-button href="https://docs.google.com/presentation/d/1c2TA0afccSeynkcCXIGI65E-Ah1QeBDsMv2SCWGffHg/pub?start=false&loop=false&delayms=3000" class="md-raised" target="_blank">Slides</md-button><md-button href="https://github.com/OR13/AMTG" class="md-raised">Code</md-button></section><md-button class="acme-navbar-text">Application was created {{ vm.relativeDate }}.</md-button></md-toolbar>')}]);
//# sourceMappingURL=../maps/scripts/app-d44f260c35.js.map

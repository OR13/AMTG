"use strict";
var GithubContributor = (function () {
    function GithubContributor($log, $http) {
        this.$log = $log;
        this.$http = $http;
        this.apiHost = 'https://api.github.com/repos/OR13/AMTG';
    }
    GithubContributor.prototype.getContributors = function (limit) {
        var _this = this;
        if (limit === void 0) { limit = 30; }
        return this.$http.get(this.apiHost + '/contributors?per_page=' + limit)
            .then(function (response) {
            return response.data;
        })
            .catch(function (error) {
            _this.$log.error('XHR Failed for getContributors.\n', error.data);
        });
    };
    return GithubContributor;
}());
exports.GithubContributor = GithubContributor;

(function () {
  "use strict";

angular
  .module('pamsVerification')
  .controller('VerificationController', function ($scope, VerificationService, LoginService, AdminService, CompanyService, $routeParams) {
    var vm = this;

    vm.check = function(item) {
      console.log("SUBMITTED", item);
      VerificationService.checkItem(item);
    };

  });
})();

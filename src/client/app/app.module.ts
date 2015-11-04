///<reference path="../../../typings/angularjs/angular.d.ts"/>
///<reference path="../../../typings/angular-ui-router/angular-ui-router.d.ts"/>
///<reference path="../../../typings/toastr/toastr.d.ts"/>
///<reference path="../../../typings/moment/moment.d.ts"/>
namespace app {
  'use strict';

  angular.module('app', [
    'app.core',
    'app.widgets',
    'app.admin',
    'app.dashboard',
    'app.layout'
  ]);
}

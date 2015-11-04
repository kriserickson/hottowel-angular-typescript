/* global toastr:false, moment:false */
///<reference path="../app.module.ts"/>

namespace app.core {
    'use strict';

    angular
        .module('app.core')
        .constant('toastr', toastr)
        .constant('moment', moment);
}

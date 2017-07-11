System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Validations;
    return {
        setters:[],
        execute: function() {
            Validations = (function () {
                function Validations() {
                }
                Validations.emailValidation = function (control) {
                    var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    var valid = regEx.test(control.value);
                    return valid ? null : { emailValidation: true };
                };
                return Validations;
            }());
            exports_1("Validations", Validations);
        }
    }
});
//# sourceMappingURL=validations.js.map
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Users, Address;
    return {
        setters:[],
        execute: function() {
            Users = (function () {
                function Users() {
                    this.address = new Address();
                }
                return Users;
            }());
            exports_1("Users", Users);
            Address = (function () {
                function Address() {
                }
                return Address;
            }());
            exports_1("Address", Address);
        }
    }
});
//# sourceMappingURL=users.js.map
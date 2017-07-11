System.register(['angular2/core', 'angular2/common', 'angular2/router', './validations', './user.service', './users'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, validations_1, user_service_1, router_2, users_1;
    var NewUserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (validations_1_1) {
                validations_1 = validations_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (users_1_1) {
                users_1 = users_1_1;
            }],
        execute: function() {
            NewUserComponent = (function () {
                function NewUserComponent(fb, _userService, _router, _routeParams) {
                    this._userService = _userService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.user = new users_1.Users();
                    this.form = fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['', validations_1.Validations.emailValidation],
                        // phone: ['',Validators.compose([Validators.minLength, Validators.required])],
                        phone: [],
                        address: fb.group({
                            street: [],
                            suite: [],
                            city: [],
                            zipcode: []
                        })
                    });
                }
                NewUserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get("id");
                    this.title = id ? "Edit User" : "New User";
                    if (!id)
                        return;
                    this._userService.getUsers(id)
                        .subscribe(function (users) { return _this.user = users; }, function (response) {
                        if (response.status == 404) {
                            _this._router.navigate(['NotFound']);
                        }
                    });
                };
                NewUserComponent.prototype.routerCanDeactivate = function (next, previous) {
                    //Checking if any field has been touched or filled. Only then we display the
                    //message. Or else the user can navigate without warning. 
                    if (this.form.dirty) {
                        return confirm("You will lose the data if you navigate to other page. Please confirm.");
                    }
                    else {
                        return true;
                    }
                };
                //On Click of save button this method is called 
                //and using the _userService variable, we add the 
                //enter user data to the url. then using the private _router
                //variable we redirect to Users page.
                NewUserComponent.prototype.save = function () {
                    var _this = this;
                    var result;
                    if (this.user.id) {
                        result = this._userService.updateUser(this.user)
                            .subscribe(function (moveto) {
                            _this._router.navigate(['Users']);
                        });
                    }
                    else {
                        this._userService.addNewUser(this.user)
                            .subscribe(function (moveto) {
                            _this._router.navigate(['Users']);
                        });
                    }
                };
                NewUserComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/newUser.component.html',
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, user_service_1.UserService, router_1.Router, router_2.RouteParams])
                ], NewUserComponent);
                return NewUserComponent;
            }());
            exports_1("NewUserComponent", NewUserComponent);
        }
    }
});
//# sourceMappingURL=newUser.component.js.map
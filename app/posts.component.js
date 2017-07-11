System.register(['angular2/core', './posts.service', './loading.component', './user.service', './pagination.component'], function(exports_1, context_1) {
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
    var core_1, posts_service_1, loading_component_1, user_service_1, pagination_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (loading_component_1_1) {
                loading_component_1 = loading_component_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (pagination_component_1_1) {
                pagination_component_1 = pagination_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_postService, _userService) {
                    this._postService = _postService;
                    this._userService = _userService;
                    this.postsLoading = true;
                    this.posts = [];
                    this.users = [];
                    this.commentsLoading = true;
                    this.pagedPosts = [];
                    this.pageSize = 10;
                }
                PostsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._postService.getPosts()
                        .subscribe(function (res) {
                        _this.posts = res;
                        _this.pagedPosts = _this.loadPagesPosts(1);
                    }, null, function () { _this.postsLoading = false; });
                    this._userService.getUser()
                        .subscribe(function (users) { return _this.users = users; });
                };
                PostsComponent.prototype.postDetails = function (post) {
                    var _this = this;
                    this.currentPost = post;
                    this._postService.getComments(post.id)
                        .subscribe(function (comments) { return _this.currentPost.comments = comments; }, null, function () { _this.commentsLoading = false; });
                };
                PostsComponent.prototype.reloadPosts = function (filter) {
                    var _this = this;
                    //Suppose the current post is not the one 
                    //we are selecting in a filter. This should 
                    //not be shown. 
                    this.currentPost = null;
                    this._postService.getSpecificUserComments(filter)
                        .subscribe(function (posts) { return _this.posts = posts; });
                };
                PostsComponent.prototype.onPageChanged = function (page) {
                    this.pagedPosts = this.loadPagesPosts(page);
                };
                PostsComponent.prototype.loadPagesPosts = function (page) {
                    var result = [];
                    var startingIndex = (page - 1) * this.pageSize;
                    var endIndex = Math.min(startingIndex + this.pageSize, this.posts.length);
                    for (var i = startingIndex; i < endIndex; i++)
                        result.push(this.posts[i]);
                    return result;
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        templateUrl: "app/posts.component.html",
                        providers: [posts_service_1.PostService, user_service_1.UserService],
                        directives: [loading_component_1.LoadingComponent, pagination_component_1.PaginationComponent],
                        styles: ["\n        .posts li { cursor: default; } \n        .posts li:hover { background: #ecf0f1; }\n        .list-group-item.active,   \n        .list-group-item.active:hover,   \n        .list-group-item.active:focus {  \n            background-color: #ecf0f1;  \n            border-color: #ecf0f1;   \n            color: #2c3e50; \n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostService, user_service_1.UserService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map
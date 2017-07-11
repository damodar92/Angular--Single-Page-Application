import {Component, OnInit} from 'angular2/core';
import {PostService} from './posts.service';
import {LoadingComponent} from './loading.component';
import {UserService} from './user.service';
import {PaginationComponent} from './pagination.component';

@Component({
    templateUrl: `app/posts.component.html`,
    providers: [PostService, UserService],
    directives: [LoadingComponent, PaginationComponent],
    styles: [`
        .posts li { cursor: default; } 
        .posts li:hover { background: #ecf0f1; }
        .list-group-item.active,   
        .list-group-item.active:hover,   
        .list-group-item.active:focus {  
            background-color: #ecf0f1;  
            border-color: #ecf0f1;   
            color: #2c3e50; 
        }
    `]
})
export class PostsComponent implements OnInit{
    postsLoading = true;
    currentPost;
    posts = [];
    users = [];
    commentsLoading =true;
    pagedPosts= [];
    pageSize = 10;

    constructor(private _postService: PostService,
                private _userService : UserService){

    }

    ngOnInit(){
        this._postService.getPosts()
            .subscribe(res => {
                this.posts =res;
                this.pagedPosts= this.loadPagesPosts(1);
            },
            null,
            ()=>{this.postsLoading = false;}
            );

        this._userService.getUser()
        .subscribe(users=> this.users =users);

    }
    postDetails(post){
        this.currentPost =post;

        this._postService.getComments(post.id)
            .subscribe(
                comments => this.currentPost.comments =comments,
                null,
                ()=>{this.commentsLoading =false});
    }
    reloadPosts(filter){
        //Suppose the current post is not the one 
        //we are selecting in a filter. This should 
        //not be shown. 
        this.currentPost =null;

        this._postService.getSpecificUserComments(filter)
        .subscribe(posts => this.posts =posts);
    }

    onPageChanged(page) {
        this.pagedPosts = this.loadPagesPosts(page);
	}

    private loadPagesPosts(page){
        var result = [];
		var startingIndex = (page - 1) * this.pageSize;
        var endIndex = Math.min(startingIndex + this.pageSize, this.posts.length);

        for (var i = startingIndex; i < endIndex; i++)
            result.push(this.posts[i]);
            
        return result;
    }
}
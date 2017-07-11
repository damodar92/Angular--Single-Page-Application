import {Component, OnInit} from 'angular2/core';
import {UserService} from './user.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
    templateUrl: 'app/users.component.html',
    providers: [UserService],
    directives: [ROUTER_DIRECTIVES]
})
export class UsersComponent implements OnInit{
    users: any[];

    constructor(private _userService: UserService){

    }
    ngOnInit(){
        this._userService.getUser()
        .subscribe(
            users => this.users = users)
    }
    deleteUser(user){
        //splice method is used to add or remove the elements to an array.
        //first parameter is the index were the element is present, 
        //second parameter is the number of elements that has to be removed/deleted.
        if(confirm("Are you sure you want to delete "+ user.name+"?")){
            var index = this.users.indexOf(user);

            this.users.splice(index, 1);

            this._userService.deleteUser(user.id)
            .subscribe(null,
            err => {
                //If we could not delete the user add the user
                //back to the view using splice method.
                alert("Could not delete the user");
                this.users.splice(index, 0, user);
            });
            
        }
    }
}
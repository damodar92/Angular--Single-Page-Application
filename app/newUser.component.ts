import {Component, OnInit} from 'angular2/core';
import {ControlGroup, Control, FormBuilder, Validators} from 'angular2/common';
import {ROUTER_DIRECTIVES, CanDeactivate, Router} from 'angular2/router';
import {Validations} from './validations';
import {UserService} from './user.service';
import {RouteParams} from 'angular2/router';
import {Users} from './users';

@Component({
    templateUrl: 'app/newUser.component.html',
    providers: [UserService]
})

export class NewUserComponent implements CanDeactivate, OnInit{
    form: ControlGroup;
    title: string;
    user = new Users();

    constructor(
        fb: FormBuilder, 
    private _userService: UserService,
    private _router: Router,
    private _routeParams: RouteParams
    ){
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['', Validations.emailValidation],
            // phone: ['',Validators.compose([Validators.minLength, Validators.required])],
            phone:[],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        })
    }

    ngOnInit(){
        var id = this._routeParams.get("id");

        this.title = id ? "Edit User" : "New User";

        if(!id)
                 return;
        
        
        this._userService.getUsers(id)
            .subscribe(
                users=> this.user =users,
                response => {
                    if(response.status == 404){
                        this._router.navigate(['NotFound']);
                    }
                });
         
    }

    routerCanDeactivate(next, previous){
        //Checking if any field has been touched or filled. Only then we display the
        //message. Or else the user can navigate without warning. 
        if(this.form.dirty){
            return confirm("You will lose the data if you navigate to other page. Please confirm.")
        }
        else
            {
                return true;
            }
    }
    //On Click of save button this method is called 
    //and using the _userService variable, we add the 
    //enter user data to the url. then using the private _router
    //variable we redirect to Users page.
    save(){
        var result;

        if(this.user.id){
            result =this._userService.updateUser(this.user)
            .subscribe(moveto=> {
               this._router.navigate(['Users'])
            });
        }
        else 
            {this._userService.addNewUser(this.user)
            .subscribe(moveto=> {
               this._router.navigate(['Users'])
            });
        }
    }
}
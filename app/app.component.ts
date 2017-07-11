import {Component} from 'angular2/core';
import {NavigationComponent} from './navigation.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home.component';
import {UsersComponent} from './users.component';
import {PostsComponent} from './posts.component';
import {NewUserComponent} from './newUser.component';
import {NotFoundComponent} from './notFound.component';

@RouteConfig([
    {path:'/', name: 'Home', component: HomeComponent},
    {path: '/users', name: 'Users', component: UsersComponent},
    {path: '/posts', name: 'Posts', component: PostsComponent},
    {path: '/newUser', name: 'NewUser', component: NewUserComponent},
    {path: '/editUser/:id', name: 'EditUser', component: NewUserComponent},
    {path: '/notFound', name: 'NotFound', component: NotFoundComponent},
    {path: '/*other', name: 'Other', redirectTo: ['Home']}
])

@Component({
    selector: 'my-app',
    template: `
    <navigation></navigation>
    <div class ="container">
        <router-outlet></router-outlet>
    </div>
    
    `,
    directives: [NavigationComponent, ROUTER_DIRECTIVES]
})
export class AppComponent { }
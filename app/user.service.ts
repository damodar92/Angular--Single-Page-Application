import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService{

    private _url = "http://jsonplaceholder.typicode.com/users";

    constructor(private _http: Http){

    }

    getUser(){
        return this._http.get(this._url)
        .map(result => result.json());
    }

    getUsers(id){
        return this._http.get(this._url+"/"+id)
        .map(result => result.json());
    }
    
    addNewUser(user){
        return this._http.post(this._url, JSON.stringify(user))
        .map(res=> res.json())
    }
    updateUser(user){
       return this._http.put(this.getUserUrl(user.id), JSON.stringify(user))
        .map(res=> res.json()) 
    }

    deleteUser(id){
       return this._http.delete(this.getUserUrl(id))
        .map(res=> res.json()) 
    }

    private getUserUrl(id){
        console.log(id);
        return this._url + "/" +id;
    }

}
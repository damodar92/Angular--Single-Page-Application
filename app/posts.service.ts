import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';

@Injectable()

export class PostService{
    private _url ="http://jsonplaceholder.typicode.com/posts";

    constructor(private _http: Http){

    }

    getPosts(){
        return this._http.get(this._url)
        .map(res=> res.json());
    }
    getPostBody(title){
        var url = this._url +"?title="+title;
        return this._http.get(url)
        .map(res=> res.json());
    }
    getComments(id){
        return this._http.get(this._url+"/"+id+"/comments")
        .map(Res=> Res.json());
    }
    getSpecificUserComments(filter?){
        if(filter && filter.userId){
            return this._http.get(this._url+"?userId="+filter.userId)
            .map(res=> res.json());
            
         }
        else {
            return this._http.get(this._url)
            .map(res=> res.json());
        }
    
    }
}
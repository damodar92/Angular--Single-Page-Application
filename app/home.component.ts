import {Component, OnInit} from 'angular2/core';

@Component({
    template:`
        <h1>{{title}}</h1>
    `
})
export class HomeComponent implements OnInit{
    title: string;
    ngOnInit(){
        this.title = 'Home';
    }
}
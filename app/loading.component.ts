import {Component, Input} from 'angular2/core';
@Component({
    selector: 'loading-icon',
    template: `
            <i *ngIf="visible" class="fa fa-spinner fa-spin fa-3x"></i>
    `
})
export class LoadingComponent{
    @Input() visible =true;
}
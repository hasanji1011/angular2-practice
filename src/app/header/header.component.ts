import {Component} from '@angular/core';

@Component({
    selector:'cm-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{
    brandName:string;
    constructor(){
        this.brandName = "AppStore"
    }
    contentType="";
    loadTemplate(item){
        this.contentType=item;
        console.log(this.contentType)
    }
}
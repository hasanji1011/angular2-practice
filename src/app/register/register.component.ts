import {Component} from '@angular/core';
import {RegisterService} from './register.service';
@Component({
    selector:'cm-register',
    templateUrl:'./register.component.html'
})

export class RegisterCompontent{
    constructor(private regSvc:RegisterService){

    }
    user:Object={};
    // countries=[
    //     {
    //         code:"IN",
    //         name:"India"
    //     },
    //     {
    //         code:"USA",
    //         name:"United States of America"
    //     },
    //     {
    //         code:"UK",
    //         name:"United Kingdom"
    //     }
    // ];
    countries = this.regSvc.getCountries();
    printData(){
        console.log(this.user);
    }
}
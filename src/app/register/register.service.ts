import {Injectable} from '@angular/core';

@Injectable()
export class RegisterService{
    getCountries(){
        return [
        {
            code:"IN",
            name:"India"
        },
        {
            code:"USA",
            name:"United States of America"
        },
        {
            code:"UK",
            name:"United Kingdom"
        }
    ];
    }
}
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService{
    constructor(private http:Http){

    }
    getProducts():Observable<any>{
        return this.http.get('http://jsonplaceholder.typicode.com/posts')
        .map((res)=>res.json())
        .catch((err)=>err.json());
        //return {"name":"Iphone7s","price":"70000 INR"};
        // return this.http.get('api/products/products.json')
        // .map((res)=> res.json())
        // .catch((err)=>err.json());
    }
    addProducts(){

    }
    searchProducts(){

    }
}
import {Component} from '@angular/core';
import {ProductService} from './products.service';

@Component({
    selector:'app-products',
    templateUrl:'./products.component.html',
    providers:[ProductService]
})
export class ProductsComponent{
    itemSelected={};
    constructor(private productSvc:ProductService){
        this.getProducts();
    }
    products;
    getProducts(){
        console.log("service called")
            this.productSvc.getProducts().subscribe(res=>{
            this.products = res;
            console.log(this.products)
        })
    }
    select(item){
        this.itemSelected = item;
        console.log(item)
    }
    
}
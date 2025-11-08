import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {Product} from "../../../model/product";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products: Product[]=[];
  // productsByCatID: Product[]=[];

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(() => this.lodeProducts() );
  }

  constructor(private productService: ProductService ,private activatedRoute: ActivatedRoute){
  }

  lodeProducts(){
    let hasCateortId =  this.activatedRoute.snapshot.paramMap.has("id");
    let hasProductName =  this.activatedRoute.snapshot.paramMap.has("key");
    if(hasCateortId){
      // this.activatedRoute.paramMap.subscribe(params => {
      //   const id = params.get("id");
      //   if (id) {
      //     this.getProductsByCategoryID(id);
      //   }
      // });
      this.getProductsByCategoryID(this.activatedRoute.snapshot.paramMap.get("id"));
      return ;
    }
    if(hasProductName)
    {
      this.serachByName(this.activatedRoute.snapshot.paramMap.get("key"));
      return ;
    }
    this.getProducts();

  }


  getProducts() {
    this.productService.getAllProducts().subscribe(
      value => {
        this.products = value;
        // console.log(this.products)
      }
    );
  }

  getProductsByCategoryID(id)
    {
      this.productService.getProductsByCategoryID(id).subscribe(
        value => {
          this.products = value;
          // console.log(this.products)
        }
      );
    }

  serachByName(word)
  {
    this.productService.searchByProductName(word).subscribe(
      value => {
        this.products = value;
        // console.log(this.products)
      }
    );
  }

}

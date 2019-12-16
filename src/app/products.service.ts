import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders   } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

   // Http Headers
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  uri = 'localhost:8081';
  uriToken = 'http://localhost:8081';
  
  constructor(private http: HttpClient) { }

  registerTolken(captchaResponse, email): Observable<any> {
    let res = '';
    const obj = {
        "username":email,
        "password":captchaResponse
    }
   return  this.http.post(`${this.uriToken}/register`, obj).pipe();
  }

  getTotken(captchaResponse, email): Observable<any> {
    let res = '';
    const obj = {
        "username":email,
        "password":captchaResponse
    }
   return  this.http.post(`${this.uriToken}/authenticate`, obj).pipe();
  }

  addProduct(ProductName, ProductDescription, ProductPrice) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getProducts() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editProduct(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

  updateProduct(ProductName, ProductDescription, ProductPrice, id) {
      const obj = {
        ProductName,
        ProductDescription,
        ProductPrice
      };
      this
        .http
        .post(`${this.uri}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
  }

  deleteProduct(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
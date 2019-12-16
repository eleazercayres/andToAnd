import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-financed-value-add',
  templateUrl: './financed-value-add.component.html',
  styleUrls: ['./financed-value-add.component.css']
})
export class FinancedValueAddComponent implements OnInit {

  angForm: FormGroup;
  public captchaResponse: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private ps: ProductsService) {
    this.createForm();
  }

  public resolved(captchaResponse: string, email: string, financedValue: string) {
    
    this.captchaResponse =  captchaResponse;
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    
    this.ps.registerTolken(captchaResponse, email).subscribe(res => {
      console.log(JSON.stringify(res));
      this.ps.getTotken(captchaResponse, email).subscribe(resToken => {
        console.log(JSON.stringify(resToken));
      });
    });
    

    if (!this.captchaResponse) {
      alert("O captcha e obrigatorio");
    }
  }
  
  createForm() {
    this.angForm = this.fb.group({
      FinancedValue: ['', Validators.required ],
      Email: ['', [Validators.required, Validators.email] ]
    });
  }

  addProduct(FinancedValue) {
    if (!this.captchaResponse) {
      alert("O captcha e obrigatorio");
    }
    //this.ps.addProduct(FinancedValue);
    //this.router.navigate(['products']);
  }

  ngOnInit() {
  }

}

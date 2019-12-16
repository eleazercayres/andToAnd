import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { RecaptchaModule } from 'ng-recaptcha';
import { NgxCurrencyModule } from "ngx-currency";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from  'ngx-ui-loader';

import { HttpConfigInterceptor} from './interceptor/httpconfig.interceptor';

import { ProductsService } from './products.service';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductGetComponent } from './product-get/product-get.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { FinancedValueAddComponent } from './financed-value-add/financed-value-add.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FinancedComponent } from './financed/financed.component';
import { CampaignService } from './campaign.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductGetComponent,
    ProductEditComponent,
    FinancedValueAddComponent,
    FinancedComponent
  ],
  imports: [
    BrowserModule,
    NgxCurrencyModule,
    NgxSpinnerModule,
    RecaptchaModule,
    NgxUiLoaderModule, // import NgxUiLoaderModule
    NgxUiLoaderHttpModule, 
    HttpClientModule,
    ReactiveFormsModule,
    SlimLoadingBarModule,
    AppRoutingModule
  ],
  providers: [
    CampaignService,
    ProductsService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

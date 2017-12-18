import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CryptoLoaderComponent } from './components/crypto-loader/crypto-loader.component';
import { CryptoItemComponent } from './components/crypto-item/crypto-item.component';

const ROUTES: Routes = [
  { path: '', component: HomeComponent},
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CryptoLoaderComponent,
    CryptoItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

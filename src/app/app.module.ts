import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { TransformToSpacesPipe } from './prodotti/Pipes/prodotti.pipe';
import { StarComponentComponent } from './prodotti/star-component/star-component.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './prodotti/product/product.component';

import { HeaderComponent } from './home/header/header.component';
import { MainComponent } from './home/main/main.component';
import { ArticleComponent } from './home/article/article.component';
import { FooterComponent } from './home/footer/footer.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { JSONComponent } from './json/json.component';
import { HomeComponent } from './home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdottiComponent,
    ArticleComponent,
    TransformToSpacesPipe,
    HeaderComponent,
    FooterComponent,
    StarComponentComponent,
    ProductComponent,
    MainComponent,
    PageNotFoundComponentComponent,
    JSONComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'Home', component: HomeComponent },
      { path: 'products', component: ProdottiComponent },
      { path: 'products/:id', component: ProductComponent },
      { path: 'json-objects', component: JSONComponent },
      { path: '', redirectTo: 'Home', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponentComponent },
    ]),
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';
import { Product } from '../prodotti/prodotti.interface';
@Component({
  selector: 'app-page-not-found-component',
  templateUrl: './page-not-found-component.component.html',
  styleUrls: ['./page-not-found-component.component.css'],
})
export class PageNotFoundComponentComponent implements OnInit {
  public title = 'Unfortunetly the page was not found !';
  constructor() {}

  ngOnInit(): void {}
}

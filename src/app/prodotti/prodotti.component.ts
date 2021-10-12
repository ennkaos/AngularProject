import { Component, OnDestroy, OnInit, Output } from '@angular/core';

import { ProdottiServiceService } from './ProdottiService/prodotti-service.service';

import { Product } from './prodotti.interface';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css'],
})
export class ProdottiComponent implements OnInit, OnDestroy {
  title: string = 'My Product Application';
  @Output()
  public expand: boolean = false;
  public dataStorage!: any;
  public pipedData!: Array<Product>;
  public ifSearch: boolean = false;
  private _listFilter: string = '';
  private errorMessageString: string = '';
  sub!: Subscription;
  get listfilter(): string {
    return this._listFilter;
  }
  set listfilter(value: string) {
    this._listFilter = value;
  }
  constructor(public serviceProddoti: ProdottiServiceService) {}

  ngOnInit(): void {
    this.sub = this.serviceProddoti.onReceivedData().subscribe({
      next: (products) => {
        this.dataStorage = products;
        this.pipedData = this.dataStorage;
      },
      error: (err) => {
        this.errorMessageString = err;
      },
    });

    console.log(this.dataStorage);
    console.log(this.pipedData);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onClickEvent() {
    this.expand = !this.expand;
  }
  onSearch() {
    if (this.listfilter) {
      let filteredArray: Product[] = this.serviceProddoti.onFilterInput(
        this.listfilter,
        this.pipedData
      );
      console.log(filteredArray.length);
      if (filteredArray.length !== 0) {
        this.pipedData = filteredArray;
        this.listfilter = '';
        this.ifSearch = false;
      } else if (filteredArray.length === 0) {
        this.ifSearch = true;
        this.pipedData = this.dataStorage.default;
      }
    } else if (!this.listfilter) {
      this.pipedData = this.dataStorage;
      this.ifSearch = false;
    }
  }
  onRatingClick(message: string) {
    this.title = ' This Product has a rating of:' + message;
  }
}

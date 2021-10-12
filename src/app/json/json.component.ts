import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../prodotti/prodotti.interface';
import { ProdottiServiceService } from '../prodotti/ProdottiService/prodotti-service.service';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css'],
})
export class JSONComponent implements OnInit, OnDestroy {
  public sub!: Subscription;
  public products$!: Product[];

  constructor(public serviceProddoti: ProdottiServiceService) {}
  ngOnInit(): void {
    this.sub = this.serviceProddoti.onReceivedData().subscribe({
      next: (products) => (this.products$ = products),
    });
    console.log(this.products$);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Product } from '../prodotti.interface';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProdottiServiceService {
  private productUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}
  onReceivedData(): Observable<Product[]> {
    console.log(this.productUrl);
    return this.http.get<Product[]>(this.productUrl).pipe(
      tap((data) => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    let errmessage = '';
    if (err.error instanceof ErrorEvent) {
      errmessage = `An error ocured ${err.error.message}`;
    } else {
      errmessage = `Server returned code ${err.status}, error message  is ${err.message}`;
    }
    console.error(ErrorHandler);
    return throwError(errmessage);
  }
  onFilterInput(input: string, array: Array<Product>) {
    let result: Product[] = [];
    array.filter((item: Product) => {
      item.productName.toLocaleLowerCase().includes(input.toLocaleLowerCase())
        ? result.push(item)
        : undefined;
    });
    return result;
  }
}

import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Icon } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-star-component',
  templateUrl: './star-component.component.html',
  styleUrls: ['./star-component.component.css'],
})
export class StarComponentComponent implements OnInit, OnChanges {
  @Input()
  rating!: number;
  cropWidth: number = 75;
  numberOfStars!: number;
  icon: any = faStar;
  @Output()
  ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}
  ngOnChanges(): void {
    this.cropWidth = (this.rating * 75) / 5;
  }
  ngOnInit(): void {}
  @Output()
  onRating() {
    this.ratingClicked.emit(` ${this.rating} stars`);
  }
}

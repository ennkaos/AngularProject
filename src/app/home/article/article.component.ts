import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  public image = '../../../assets/images/download.jfif';
  public text: string =
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eligendi consectetur libero alias. Provident nulla mollitia a sequi dolorem cumque vero error temporibus commodi quidem, reprehenderit suscipit, inventore ea cum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eligendi consectetur libero alias. Provident nulla mollitia a sequi dolorem cumque vero error temporibus commodi quidem, reprehenderit suscipit, inventore ea cum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eligendi consectetur libero alias. Provident nulla mollitia a sequi dolorem cumque vero error temporibus commodi quidem, reprehenderit suscipit, inventore ea cum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eligendi consectetur libero alias. Provident nulla mollitia a sequi dolorem cumque vero error temporibus commodi quidem, reprehenderit suscipit, inventore ea cum?';
  constructor() {}

  ngOnInit(): void {}
}

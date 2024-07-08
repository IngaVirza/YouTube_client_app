import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as cardsData from '../../assets/response.json';
import { DatePipe, Location } from '@angular/common';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.scss',
})
export class SearchItemComponent {
  public router: ActivatedRoute = inject(ActivatedRoute);

  public data = cardsData.items.find(
    (el) => el.id == this.router.snapshot.params['id']
  );

  constructor(private _location: Location) {}

  pipe = new DatePipe('en-US');
  myFormattedDate = this.pipe.transform(
    this.data?.snippet.publishedAt,
    'short'
  );

  goBack() {
    this._location.back();
  }
}

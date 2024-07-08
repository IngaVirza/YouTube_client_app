import { Component, Input } from '@angular/core';
import * as cardsData from '../../assets/response.json';
import { Router } from '@angular/router';
import { FilterPipe } from '../../shared/filter.pipe';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export class SearchResultsComponent {
  searchKey: string = '';
  constructor(private router: Router) {}

  public canLeave = false;

  public data = cardsData.items;

  navigateToRoute(itemData: any) {
    this.router.navigate(['/search-item', itemData]);
  }

  @Input() searchParam: string = '';

  ngOnInit(): void {}
}

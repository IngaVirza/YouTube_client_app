import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent implements OnInit {
  public step: string = '';
  public filteredCard: string = '';

  ngOnInit(): void {}
  search(event: any) {
    this.filteredCard = (event.target as HTMLInputElement).value;
    console.log(this.filteredCard);
  }
}

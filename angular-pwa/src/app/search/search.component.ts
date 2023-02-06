import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() drinks:any;
  @Output() onSearchFor: EventEmitter<string> = new EventEmitter();

  cocktail_input: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    this.onSearchFor.emit(this.cocktail_input);
  }
}

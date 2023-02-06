import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail-interface';

@Component({
  selector: 'app-cocktailcard',
  templateUrl: './cocktailcard.component.html',
  styleUrls: ['./cocktailcard.component.css']
})
export class CocktailcardComponent implements OnInit {
  @Input() item: Cocktail | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  moreInformation() {
    
  }

}

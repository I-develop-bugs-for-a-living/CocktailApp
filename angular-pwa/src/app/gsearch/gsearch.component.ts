import { sequence } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../cocktail-interface';

@Component({
  selector: 'app-gsearch',
  templateUrl: './gsearch.component.html',
  styleUrls: ['./gsearch.component.css'],
})
export class GsearchComponent implements OnInit {
  availableGlases: any = [];
  searchResults:any;
  drinks:Cocktail[] = [];

  constructor(private api: CocktailService) {}

  ngOnInit(): void {
    this.api.getGlassTypes().subscribe((response) => {
      this.searchResults = response;
      this.searchResults = this.searchResults.drinks;
      for (let glass of this.searchResults) {
        this.availableGlases.push({'name': glass.strGlass})
      }
    });
  }

  queryDrink(glassName:string) {
    this.api.glassSearch(glassName).subscribe((response) => {
      this.searchResults = response;
      this.searchResults = this.searchResults.drinks;
      this.drinks = [];
      for (let drink of this.searchResults) {
        this.drinks.push({'name': drink.strDrink, 'alcoholic': drink.strAlcoholic, 'category': drink.strCategory, 'glass': drink.strGlass})
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail-interface';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-csearch',
  templateUrl: './csearch.component.html',
  styleUrls: ['./csearch.component.css']
})
export class CsearchComponent implements OnInit {

  searchResults:any;
  drinks:Cocktail[] = [];

  constructor(private API:CocktailService) { }

  ngOnInit(): void {
  }

  searchFor(searchquery:string) {
    this.API.cocktailSearch(searchquery).subscribe((response) => {
      this.searchResults = response
      this.searchResults = this.searchResults.drinks
      this.drinks = [];
      for (let drink of this.searchResults) {
        this.drinks.push({'id': drink.idDrink ,'name': drink.strDrink, 'alcoholic': drink.strAlcoholic, 'category': drink.strCategory, 'glass': drink.strGlass})
      }
    })
  }

}

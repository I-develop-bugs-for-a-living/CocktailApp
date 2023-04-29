import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail-interface';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-isearch',
  templateUrl: './isearch.component.html',
  styleUrls: ['./isearch.component.css']
})
export class IsearchComponent implements OnInit {
  drinks:Cocktail[] = [];
  searchResults:any;
  searchText:string = '';
  availableIngredients: any = [];

  constructor(private API:CocktailService) { }

  searchIngredient() {
  }

  ngOnInit(): void {
    this.API.getIngredients().subscribe((response) => {
      this.searchResults = response;
      this.searchResults = this.searchResults.drinks;
      for (let glass of this.searchResults) {
        this.availableIngredients.push({'name': glass.strIngredient1})
      }
    });
  }

  queryDrink(ingredientName:string) {
    this.API.ingredientsSearch(ingredientName).subscribe((response) => {
      this.searchResults = response;
      this.searchResults = this.searchResults.drinks;
      this.drinks = [];
      for (let drink of this.searchResults) {
        console.log(drink.strCategory);
        this.drinks.push({'id': drink.idDrink, 'name': drink.strDrink, 'alcoholic': drink.strAlcoholic, 'category': drink.strCategory, 'glass': drink.strGlass})
      }
    });
  }
  searchFor(searchquery:any) {
    this.API.ingredientsSearch(searchquery).subscribe((response) => {
      this.searchResults = response
      this.searchResults = this.searchResults.drinks
      this.drinks = [];
      for (let drink of this.searchResults) {
        this.drinks.push({'id': drink.idDrink,'name': drink.strDrink, 'alcoholic': drink.strAlcoholic, 'category': drink.strCategory, 'glass': drink.strGlass})
      }
      console.log(this.drinks)
    })
  }

}

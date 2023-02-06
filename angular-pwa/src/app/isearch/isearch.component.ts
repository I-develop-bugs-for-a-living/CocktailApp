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

  constructor(private API:CocktailService) { }

  ngOnInit(): void {
  }

  searchFor(searchquery:any) {
    this.API.ingredientsSearch(searchquery).subscribe((response) => {
      this.searchResults = response
      this.searchResults = this.searchResults.drinks
      this.drinks = [];
      for (let drink of this.searchResults) {
        this.drinks.push({'name': drink.strDrink, 'alcoholic': drink.strAlcoholic, 'category': drink.strCategory, 'glass': drink.strGlass})
      }
      console.log(this.drinks)
    })
  }

}

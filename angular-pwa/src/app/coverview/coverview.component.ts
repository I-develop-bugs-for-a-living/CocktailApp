import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coverview',
  templateUrl: './coverview.component.html',
  styleUrls: ['./coverview.component.css']
})
export class CoverviewComponent implements OnInit {
  drink: any;
  ingredients: any;

  constructor(private API: CocktailService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.API.cocktailDetails(params['id']).subscribe((data:any) => {
        this.drink = data.drinks[0];

        // Get ingredients
        this.ingredients = [];
        for (let i = 1; i <= 15; i++) {
          if (this.drink['strIngredient' + i]) {
            this.ingredients.push({
              ingredient: this.drink['strIngredient' + i],
              measure: this.drink['strMeasure' + i]
            });
          }
        }
        console.log(this.drink);
      })
    })
  }

}

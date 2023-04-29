import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cocktailcard',
  templateUrl: './cocktailcard.component.html',
  styleUrls: ['./cocktailcard.component.css']
})
export class CocktailcardComponent implements OnInit {
  @Input() item: Cocktail | null = null;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  moreInformation(id:any) {
    this.router.navigate(['c_overview', id])
  }

}

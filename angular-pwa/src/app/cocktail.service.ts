import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

  constructor(private http:HttpClient) {}

  cocktailDetails(id:string) {
    const url = `${this.apiUrl}lookup.php?i=${id}`
    return this.http.get(url);
  }

  cocktailSearch(query:string) {
    const url = `${this.apiUrl}search.php?s=${query}`
    return this.http.get(url);
  }

  ingredientsSearch(query:string) {
    const url = `${this.apiUrl}filter.php?i=${query}`
    return this.http.get(url);
  }

  glassSearch(query:string) {
    const url = `${this.apiUrl}filter.php?g=${query}`
    return this.http.get(url);
  }

  getGlassTypes() {
    const url = `${this.apiUrl}list.php?g=list`
    return this.http.get(url);
  }

  getIngredients() {
    const url = `${this.apiUrl}list.php?i=list`
    return this.http.get(url);
  }
}

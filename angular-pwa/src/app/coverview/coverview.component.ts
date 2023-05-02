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

  constructor(private API: CocktailService, private route: ActivatedRoute) {
      this.synth = window.speechSynthesis;
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => {
          this.loadVoices();
        };
      }
  }
  synth: SpeechSynthesis;
  voices: SpeechSynthesisVoice[] = [];
  text = 'Hello, I am your text-to-speech example.';

  loadVoices(): void {
    this.voices = this.synth.getVoices();
  }

  speak(): void {
    let ingredientText = "To make this drink, you will need ";
    for (let i = 0; i < this.ingredients.length; i++) {
      const { ingredient, measure } = this.ingredients[i];
      if (i === this.ingredients.length - 1) {
        ingredientText += "and ";
      }
      ingredientText += `${ingredient}, `;
    }
    ingredientText += ". ";
    this.text = "Today we are going to make a " + this.drink.strDrink + ". "  + ingredientText +"Instructions: " + this.drink.strInstructions + " You can serve this drink in a " + this.drink.strGlass;
    if (this.synth.speaking) {
      console.error('SpeechSynthesis is already speaking.');
      return;
    }
    if (this.text !== '') {
      const utterance = new SpeechSynthesisUtterance(this.text);
      const englishVoice = this.getEnglishVoice(); // Wählen Sie die englische Stimme.
      if (englishVoice) {
        utterance.voice = englishVoice;
      }
      this.synth.speak(utterance);
    }


  }

  getEnglishVoice(): SpeechSynthesisVoice | null {
    const englishVoices = this.voices.filter(voice => voice.lang.startsWith('en'));
    let englishVoiceNames = englishVoices.map(voice => voice.name);
    console.log(englishVoiceNames);
    if(englishVoiceNames.includes('Microsoft Susan - English (United Kingdom)')) {
      return englishVoices[englishVoiceNames.indexOf('Microsoft Susan - English (United Kingdom)')];
    } else if (englishVoiceNames.includes('Microsoft Libby Online (Natural) - English (United Kingdom)')) {
      return englishVoices[englishVoiceNames.indexOf('Microsoft Libby Online (Natural) - English (United Kingdom)')];
    }

    return englishVoices.length > 0 ? englishVoices[0] : null;
  }
//['Microsoft Natasha Online (Natural) - English (Australia)', 'Microsoft William Online (Natural) - English (Australia)', 'Microsoft Clara Online (Natural) - English (Canada)', 'Microsoft Liam Online (Natural) - English (Canada)', 'Microsoft Sam Online (Natural) - English (Hongkong)', 'Microsoft Yan Online (Natural) - English (Hongkong)', 'Microsoft Neerja Online (Natural) - English (India) (Preview)', 'Microsoft Neerja Online (Natural) - English (India)', 'Microsoft Prabhat Online (Natural) - English (India)', 'Microsoft Connor Online (Natural) - English (Ireland)', 'Microsoft Emily Online (Natural) - English (Ireland)', 'Microsoft Asilia Online (Natural) - English (Kenya)', 'Microsoft Chilemba Online (Natural) - English (Kenya)', 'Microsoft Mitchell Online (Natural) - English (New Zealand)', 'Microsoft Molly Online (Natural) - English (New Zealand)', 'Microsoft Abeo Online (Natural) - English (Nigeria)', 'Microsoft Ezinne Online (Natural) - English (Nigeria)', 'Microsoft James Online (Natural) - English (Philippines)', 'Microsoft Rosa Online (Natural) - English (Philippines)', 'Microsoft Luna Online (Natural) - English (Singapore)', 'Microsoft Wayne Online (Natural) - English (Singapore)', 'Microsoft Leah Online (Natural) - English (South Africa)', 'Microsoft Luke Online (Natural) - English (South Africa)', 'Microsoft Elimu Online (Natural) - English (Tanzania)', 'Microsoft Imani Online (Natural) - English (Tanzania)', 'Microsoft Libby Online (Natural) - English (United Kingdom)', 'Microsoft Maisie Online (Natural) - English (United Kingdom)', 'Microsoft Ryan Online (Natural) - English (United Kingdom)', 'Microsoft Sonia Online (Natural) - English (United Kingdom)', 'Microsoft Thomas Online (Natural) - English (United Kingdom)', 'Microsoft Aria Online (Natural) - English (United States)', 'Microsoft Ana Online (Natural) - English (United States)', 'Microsoft Christopher Online (Natural) - English (United States)', 'Microsoft Eric Online (Natural) - English (United States)', 'Microsoft Guy Online (Natural) - English (United States)', 'Microsoft Jenny Online (Natural) - English (United States)', 'Microsoft Michelle Online (Natural) - English (United States)', 'Microsoft Roger Online (Natural) - English (United States)', 'Microsoft Steffan Online (Natural) - English (United States)']



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
        console.log(this.ingredients)
      })
    })
  }

}

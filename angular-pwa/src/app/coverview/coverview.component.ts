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
    this.text = this.drink.strInstructions;
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
    return englishVoices.length > 0 ? englishVoices[0] : null;
  }




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

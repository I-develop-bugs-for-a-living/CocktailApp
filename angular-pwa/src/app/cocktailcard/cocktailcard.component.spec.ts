import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailcardComponent } from './cocktailcard.component';

describe('CocktailcardComponent', () => {
  let component: CocktailcardComponent;
  let fixture: ComponentFixture<CocktailcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

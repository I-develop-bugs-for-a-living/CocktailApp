import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverviewComponent } from './coverview.component';

describe('CoverviewComponent', () => {
  let component: CoverviewComponent;
  let fixture: ComponentFixture<CoverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

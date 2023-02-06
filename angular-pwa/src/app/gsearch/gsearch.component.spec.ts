import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsearchComponent } from './gsearch.component';

describe('GsearchComponent', () => {
  let component: GsearchComponent;
  let fixture: ComponentFixture<GsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

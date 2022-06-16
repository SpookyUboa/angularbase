import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TekkenComponent } from './tekken.component';

describe('TekkenComponent', () => {
  let component: TekkenComponent;
  let fixture: ComponentFixture<TekkenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TekkenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TekkenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

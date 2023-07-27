import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteComponent } from './hote.component';

describe('HoteComponent', () => {
  let component: HoteComponent;
  let fixture: ComponentFixture<HoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

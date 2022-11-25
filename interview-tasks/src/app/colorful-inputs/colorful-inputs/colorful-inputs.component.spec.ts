import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorfulInputsComponent } from './colorful-inputs.component';

describe('ColorfulInputsComponent', () => {
  let component: ColorfulInputsComponent;
  let fixture: ComponentFixture<ColorfulInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorfulInputsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorfulInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

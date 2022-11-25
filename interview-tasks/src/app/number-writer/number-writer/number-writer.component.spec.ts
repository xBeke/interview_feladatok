import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberWriterComponent } from './number-writer.component';

describe('NumberWriterComponent', () => {
  let component: NumberWriterComponent;
  let fixture: ComponentFixture<NumberWriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberWriterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

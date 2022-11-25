import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorfulInputsComponent } from './colorful-inputs/colorful-inputs.component';
import { ColorfulInputsRoutingModule } from './colorful-inputs-router.module';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ColorfulInputsComponent
  ],
  imports: [
    CommonModule,
    ColorfulInputsRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class ColorfulInputsModule { }

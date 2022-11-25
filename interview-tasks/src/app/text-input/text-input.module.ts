import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input/text-input.component';
import { TextInputRoutingModule } from './text-input-router.module';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TextInputComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    TextInputRoutingModule,
    MatInputModule,
    FormsModule
  ],
  bootstrap: [TextInputComponent],
})
export class TextInputModule { }

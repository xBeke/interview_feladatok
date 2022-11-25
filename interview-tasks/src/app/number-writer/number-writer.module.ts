import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberWriterComponent } from './number-writer/number-writer.component';
import { NumberWriterRoutingModule } from './number-writer-router.module';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    NumberWriterComponent
  ],
  imports: [
    CommonModule,
    NumberWriterRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    FormsModule,
    MatInputModule
  ]
})
export class NumberWriterModule { }

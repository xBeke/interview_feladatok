import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextInputComponent } from './text-input/text-input.component';

const routes: Routes = [
  { path: '', component: TextInputComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextInputRoutingModule { }

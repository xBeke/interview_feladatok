import { ColorfulInputsComponent } from './colorful-inputs/colorful-inputs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ColorfulInputsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorfulInputsRoutingModule { }

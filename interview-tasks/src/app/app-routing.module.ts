import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator/calculator.component';
import { ColorfulInputsComponent } from './colorful-inputs/colorful-inputs/colorful-inputs.component';
import { NumberWriterComponent } from './number-writer/number-writer/number-writer.component';
import { PersonComponent } from './person/person/person.component';
import { TextInputComponent } from './text-input/text-input/text-input.component';

const routes: Routes = [
  { path: 'text-input', loadChildren: () => import('./text-input/text-input.module').then(m => m.TextInputModule) },
  { path: 'person', loadChildren: () => import('./person/person.module').then(m => m.PersonModule) },
  { path: 'number-writer', loadChildren: () => import('./number-writer/number-writer.module').then(m => m.NumberWriterModule) },
  { path: 'colorful-inputs', loadChildren: () => import('./colorful-inputs/colorful-inputs.module').then(m => m.ColorfulInputsModule) },
  { path: 'calculator', loadChildren: () => import('./calculator/calculator.module').then(m => m.CalculatorModule) },
  { path: '**', loadChildren: () => import('./text-input/text-input.module').then(m => m.TextInputModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

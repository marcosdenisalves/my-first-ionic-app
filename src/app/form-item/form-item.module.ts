import { IonicCurrencyMaskModule } from '@thiagoprz/ionic-currency-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormItemComponent } from './form-item.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: FormItemComponent,
  },
];

@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    IonicCurrencyMaskModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  declarations: [FormItemComponent],
})
export class FormItemComponentModule {}

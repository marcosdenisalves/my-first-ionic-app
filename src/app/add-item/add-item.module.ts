import { IonicCurrencyMaskModule } from '@thiagoprz/ionic-currency-mask';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: AddItemComponent,
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
  declarations: [AddItemComponent],
})
export class AddItemComponentModule {}

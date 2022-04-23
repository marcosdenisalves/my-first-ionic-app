import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddItemComponent } from './add-item.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { MaskPipe } from 'ngx-mask';

const routes: Routes = [
  {
    path: '',
    component: AddItemComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  declarations: [AddItemComponent],
  providers: [ MaskPipe ],
})
export class AddItemComponentModule {}

import { StorageService } from '../services/storage.service';
import { AccountPayble } from './../models/account-payble';
import { FormatService } from '../services/format.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  toastMessage: string;
  accountPaybleList: AccountPayble[] = [];

  constructor(
    private router: Router,
    public formatService: FormatService,
    private storageService: StorageService,
    public toastController: ToastController,
  ) { }

  async ngOnInit() {
    await this.initAccountPaybleList();
  }

  async initAccountPaybleList() {
    await this.storageService.init();
    const accountPaybleList = await this.storageService.get('accountPaybleList');
    this.accountPaybleList.push(...accountPaybleList);
  }

  async presentToast(item: AccountPayble) {
    const payed = item.payed = !item.payed;
    this.validateToastMessage(payed);
    await this.openToast();
    return payed;
  }

  async openToast() {
    const toast = await this.toastController.create({
      message: this.toastMessage,
      duration: 2000,
    });
    toast.present();
  }

  validateToastMessage(payed: boolean) {
    this.toastMessage = payed ? 'Pagamento realizado com sucesso!' : 'Pagamento cancelado!';
  }

  removeItem(index: number) {
    this.accountPaybleList.splice(index, 1);
    this.storageService.set('accountPaybleList', this.accountPaybleList);
  }

  navigate() {
    this.router.navigate(['/form'], {state: { list: this.accountPaybleList }});
  }
}

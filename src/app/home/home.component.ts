import { AccountPayble } from './../models/account-payble';
import { SubjectService } from '../services/subject.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormatService } from '../services/format.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  toastMessage: string;
  accountPaybleList: AccountPayble[] = [
    new AccountPayble(
      'Conta de Energia',
      '245,00',
      '2022-10-25T10:46:20Z',
      'Esta conta deve ser paga no prazo para obter descontos'
    )
  ];

  constructor(
    private router: Router,
    private subjectService: SubjectService,
    public formatService: FormatService,
    public toastController: ToastController,
  ) {}

  ngOnInit() {
    this.subjectService.accountPayble.subscribe((accountPaybleItem: AccountPayble) => {
      this.accountPaybleList.push(accountPaybleItem);
    });
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
  }

  navigate() {
    this.router.navigate(['/form']);
  }
}

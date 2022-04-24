import { AccountPayble } from './../models/account-payble';
import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  accountPaybleList: AccountPayble[] = [
    // new AccountPayble(
    //   'Conta de Energia',
    //   '245,00',
    //   '25 Julho 2022',
    //   'Esta conta deve ser paga no prazo para obter descontos'
    // )
  ];

  constructor(
    private appService: AppService,
    private router: Router
  ) { }

  ngOnInit() {
    this.appService.accountPayble.subscribe((accountPaybleItem: AccountPayble) => {
      this.accountPaybleList.push(accountPaybleItem);
    });
  }

  navigate() {
    this.router.navigate(['/form']);
  }
}

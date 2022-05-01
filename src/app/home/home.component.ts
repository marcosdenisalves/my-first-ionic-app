import { AccountPayble } from './../models/account-payble';
import { SubjectService } from '../services/subject.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormatService } from '../services/format.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
    public formatService: FormatService
  ) {}

  ngOnInit() {
    this.subjectService.accountPayble.subscribe((accountPaybleItem: AccountPayble) => {
      this.accountPaybleList.push(accountPaybleItem);
    });
  }

  navigate() {
    this.router.navigate(['/form']);
  }
}

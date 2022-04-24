import { AppService } from './../app.service';
/* eslint-disable @typescript-eslint/member-ordering */
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { format, parseISO } from 'date-fns';
import { AccountPayble } from '../models/account-payble';
import { IonDatetime } from '@ionic/angular';
import { Router } from '@angular/router';
import { ptBR } from 'date-fns/locale';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss'],
})
export class FormItemComponent implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  itemFormGroup: FormGroup = this.fb.group({
    title: ['', Validators.required],
    value: ['', Validators.required],
    dueDate: ['', Validators.required],
    description: [''],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.itemFormGroup.reset();
  }

  returnToHome() {
    this.router.navigate(['/home']);
  }

  onSubmit() {
    this.appService.accountPayble.next(
      new AccountPayble(
        this.title.value,
        this.value.value,
        this.dueDate.value,
        this.description.value
      )
    );
    this.returnToHome();
  }

  formatDate(value: string) {
    return format(parseISO(value), 'dd MMM yyyy', { locale: ptBR });
  }

  get title() {
    return this.itemFormGroup.get('title') as FormControl;
  }

  get value() {
    return this.itemFormGroup.get('value') as FormControl;
  }

  get dueDate() {
    return this.itemFormGroup.get('dueDate') as FormControl;
  }

  get description() {
    return this.itemFormGroup.get('description') as FormControl;
  }
}

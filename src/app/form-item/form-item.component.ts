/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/member-ordering */
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatetimeChangeEventDetail, IonDatetime } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { FormatService } from './../services/format.service';
import { AccountPayble } from './../models/account-payble';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss'],
})
export class FormItemComponent implements OnInit, DatetimeChangeEventDetail {
  @ViewChild(IonDatetime) popoverDateTime: IonDatetime;
  isPopoverOpen: boolean;
  isoDateTime: string;
  value?: string;

  accountPaybleList: AccountPayble[] = [];

  itemFormGroup: FormGroup = this.fb.group({
    date: ['', Validators.required],
    description: [''],
    ticketValue: ['', Validators.required],
    title: ['', Validators.required],
  });

  constructor(
    public formatService: FormatService,
    private fb: FormBuilder,
    private router: Router,
    private storageService: StorageService,
  ) { }

  ngOnInit() {
    this.itemFormGroup.reset();
    this.accountPaybleList = this.router.getCurrentNavigation().extras.state.list;
  }

  confirm() {
    this.popoverDateTime.confirm(true).then(() => {
      this.isoDateTime =  this.popoverDateTime.value;
      this.date.setValue(this.formatService.formatDate(this.isoDateTime));
    });
  }

  reset() {
    this.popoverDateTime.reset();
  }

  onSubmit() {
    this.accountPaybleList.push(this.createAccountPayble());
    this.storageService.set('accountPaybleList', this.accountPaybleList);
    this.returnToHome();
  }

  createAccountPayble() {
    return new AccountPayble(
      this.title.value,
      this.ticketValue.value,
      this.isoDateTime,
      this.description.value
    );
  }

  returnToHome() {
    this.itemFormGroup.reset();
    this.router.navigate(['/home']);
  }

  get title() {
    return this.itemFormGroup.get('title') as FormControl;
  }

  get ticketValue() {
    return this.itemFormGroup.get('ticketValue') as FormControl;
  }

  get date() {
    return this.itemFormGroup.get('date') as FormControl;
  }

  get description() {
    return this.itemFormGroup.get('description') as FormControl;
  }
}

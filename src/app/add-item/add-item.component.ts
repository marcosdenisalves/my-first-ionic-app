/* eslint-disable @typescript-eslint/member-ordering */
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { format, parseISO } from 'date-fns';
import { IonDatetime } from '@ionic/angular';
import { ptBR } from 'date-fns/locale';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  newItemGroup: FormGroup = this.fb.group({
    title: [''],
    value: [''],
    dueDate: [''],
    description: [''],
  });

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit() {}

  returnToHome() {
    return this.router.navigate(['/home']);
  }

  save() {
    console.log(this.newItemGroup);
    return this.returnToHome();
  }

  formatDate(value: string) {
    return format(parseISO(value), 'dd MMM yyyy', { locale: ptBR });
  }

  get title() {
    return this.newItemGroup.get('title') as FormControl;
  }

  get value() {
    return this.newItemGroup.get('value') as FormControl;
  }

  get dueDate() {
    return this.newItemGroup.get('dueDate') as FormControl;
  }

  get description() {
    return this.newItemGroup.get('description') as FormControl;
  }
}

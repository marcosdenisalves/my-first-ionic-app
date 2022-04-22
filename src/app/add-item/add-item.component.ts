import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { format, parseISO } from 'date-fns';
import { IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  dateValue = '';
  dateValue2 = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  returnToHome() {
    return this.router.navigate(['/home']);
  }

  save() {
    return this.returnToHome();
  }

  formatDate(value: string) {
    return format(parseISO(value), 'MMM dd yyyy');
  }
}

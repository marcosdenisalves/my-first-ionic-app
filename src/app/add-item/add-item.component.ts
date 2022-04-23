import { MaskPipe } from 'ngx-mask';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { format, parseISO } from 'date-fns';
import { IonDatetime } from '@ionic/angular';
import { ptBR } from 'date-fns/locale';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  dateValue = '';
  dateValue2 = '';
  valor: any;

  constructor(private router: Router, private maskPipe: MaskPipe) {}

  ngOnInit() {}

  returnToHome() {
    return this.router.navigate(['/home']);
  }

  save() {
    return this.returnToHome();
  }

  formatDate(value: string) {
    return format(parseISO(value), 'dd MMM yyyy', { locale: ptBR });
  }

  updateWithMask(event) {
    this.valor = this.maskPipe.transform(
      event.currentTarget.value,
      '000.00.00'
    );
  }
}

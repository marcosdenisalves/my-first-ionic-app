import { Injectable } from '@angular/core';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

@Injectable({
  providedIn: 'root',
})
export class FormatService {
  constructor() {}

  formatDate(value: string) {
    return value ? format(parseISO(value), 'dd MMM yyyy', { locale: ptBR }) : '';
  }
}

import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { AccountPayble } from '../models/account-payble';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  accountPayble: Subject<AccountPayble> = new Subject<AccountPayble>();
  constructor() {}
}

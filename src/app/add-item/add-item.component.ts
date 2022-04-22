import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  returnToHome() {
    return this.router.navigate(['/home']);
  }

  save() {
    return this.returnToHome();
  }
}

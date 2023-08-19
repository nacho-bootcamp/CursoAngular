import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  current: number = 0

  sumar(a: number, b: number) {
    this.current = a + b
  }
}

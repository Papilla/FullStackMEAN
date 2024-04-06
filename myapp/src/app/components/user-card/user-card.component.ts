import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  name = 'Jonathan'
  surname = 'Joestar'
  age = 25
  married = true
  address = {
    country: 'ES',
    city: 'Vigo',
    street: 'Príncipe',
  }
  private dni = '76549827J'
  public nationality = "Española"

  getDate() {
    return new Date()
  }
}

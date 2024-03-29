import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  product = {
    image: 'https://minorwatches.com/wp-content/uploads/2022/08/Minor_18-copia-300x300.webp',
    name: 'Unbranded Granite Computer',
    description: 'The Football Is Good For Training And Recreational Purposes',
    unitAvailable: 20,
    date: 'Sat Mar 23 2024 23:00:46 GMT+0100 (Central European Standard Time)',
    price: 34.5436456,
  }

  productImageStyle = {
    border: '1px solid black',
    filter: 'sepia(0)'
  }

  formState = false

  address = ''

  postalCode = 0

  buyProduct() {
    console.log('compraremos un producto');
    this.formState = true;
  }

  orderProduct() {
    console.log(`Direccion de usuario: ${this.address}`)
    console.log(`Codigo postal: ${this.postalCode}`)
  }

  addToCart() {
    console.log('agregaremos un producto al carro de compras');
  }

  onMouseEnter() {
    console.log('mouse enter');
    this.productImageStyle = {...this.productImageStyle, filter: 'sepia(0.3)'}
  }

  onMouseLeave() {
    console.log('mouse leave');
    this.productImageStyle = {...this.productImageStyle, filter: 'sepia(0)'}
  }
}
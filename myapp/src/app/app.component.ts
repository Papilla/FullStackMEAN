import { Component, OnInit } from '@angular/core';

export const products = [
  {
    image: 'https://minorwatches.com/wp-content/uploads/2022/08/Minor_18-copia-300x300.webp',
    name: 'Unbranded Granite Computer',
    description: 'The Football Is Good For Training And Recreational Purposes',
    unitAvailable: 0,
    date: 'Sat Mar 23 2024 23:00:46 GMT+0100 (Central European Standard Time)',
    price: 65.5436456,
  },
  {
    image: 'https://minorwatches.com/wp-content/uploads/2022/08/Minor_18-copia-300x300.webp',
    name: 'Unbranded Granite Computer',
    description: 'The Football Is Good For Training And Recreational Purposes',
    unitAvailable: 0,
    date: 'Sat Mar 23 2024 23:00:46 GMT+0100 (Central European Standard Time)',
    price: 654.5436456,
  },
  {
    image: 'https://minorwatches.com/wp-content/uploads/2022/08/Minor_18-copia-300x300.webp',
    name: 'Unbranded Granite Computer',
    description: 'The Football Is Good For Training And Recreational Purposes',
    unitAvailable: 15,
    date: 'Sat Mar 23 2024 23:00:46 GMT+0100 (Central European Standard Time)',
    price: 543.5436456,
    category: 'technology'
  },
  {
    image: 'https://minorwatches.com/wp-content/uploads/2022/08/Minor_18-copia-300x300.webp',
    name: 'Unbranded Granite Computer',
    description: 'The Football Is Good For Training And Recreational Purposes',
    unitAvailable: 0,
    date: 'Sat Mar 23 2024 23:00:46 GMT+0100 (Central European Standard Time)',
    price: 0.5436456,
  },
  {
    image: 'https://minorwatches.com/wp-content/uploads/2022/08/Minor_18-copia-300x300.webp',
    name: 'Unbranded Granite Computer',
    description: 'The Football Is Good For Training And Recreational Purposes',
    unitAvailable: 0,
    date: 'Sat Mar 23 2024 23:00:46 GMT+0100 (Central European Standard Time)',
    price: 23.5436456,
  },
  {
    image: 'https://minorwatches.com/wp-content/uploads/2022/08/Minor_18-copia-300x300.webp',
    name: 'Unbranded Granite Computer',
    description: 'The Football Is Good For Training And Recreational Purposes',
    unitAvailable: 10,
    date: 'Sat Mar 23 2024 23:00:46 GMT+0100 (Central European Standard Time)',
    price: 11.5436456,
    category: 'home',
  },
  {
    image: 'https://minorwatches.com/wp-content/uploads/2022/08/Minor_18-copia-300x300.webp',
    name: 'Unbranded Granite Computer',
    description: 'The Football Is Good For Training And Recreational Purposes',
    unitAvailable: 20,
    date: 'Sat Mar 23 2024 23:00:46 GMT+0100 (Central European Standard Time)',
    price: 34.5436456,
    category: 'cosmetics',
  }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'myapp';
  
  styles = {
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    padding: '20px',
    width: '200px',
  }
  
  products: any;

  ngOnInit(): void {
    this.products = products;
  }
}

import { Component, input } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  id=input.required<string>();
  limit=input.required<string>();
  page=input.required<string>();

}

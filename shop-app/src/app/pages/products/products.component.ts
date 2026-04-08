import { CommonModule } from '@angular/common';
import { Component,Inject,OnInit } from '@angular/core';
import { ProductItemComponent } from '../../common/product-item/product-item.component';
import { Product } from '../../models/Product';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../service/ProductService';

@Component({
  selector: 'app-products',
  imports: [ProductItemComponent, CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  constructor(private productService:ProductService){}

 
  }
}

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() data!: Product;
  @Output() item = new EventEmitter();
  ngOnInit(): void {}
  addButton: boolean = false;
  amount: number = 0;

  add() {
    this.item.emit({ item: this.data, quantity: this.amount });
  }
}

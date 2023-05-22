import { FruitService } from './../../services/fruit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
})
export class ItemsListComponent implements OnInit {
  listFruits_ar = ['Apple', 'Kiwi'];

  constructor(private fruitService: FruitService) {
    this.listFruits_ar = this.fruitService.getFruits();
  }

  ngOnInit(): void {}
}

import { Drink } from 'src/app/model/Drinks';
import { FruitService } from './../../services/fruit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
})
export class ItemsListComponent implements OnInit {
  listFruits_ar = ['Apple', 'Kiwi'];
  listDrink_ar: Drink[] = [];

  constructor(private fruitService: FruitService) {
    this.listFruits_ar = this.fruitService.getFruits();
    this.listDrink_ar = this.fruitService.getDrinks();
  }

  ngOnInit(): void {}
}

import { FruitService } from './../../services/fruit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-user',
  templateUrl: './input-user.component.html',
  styleUrls: ['./input-user.component.css'],
})
export class InputUserComponent implements OnInit {
  fruit_input = '';

  constructor(private fruitService: FruitService) {}

  ngOnInit() {}

  addFruit() {
    this.fruitService.addFruit(this.fruit_input);
  }
}

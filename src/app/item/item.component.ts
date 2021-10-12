import { Component, OnInit } from '@angular/core';
import { item } from './item';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class itemComponent implements OnInit {
  item: item = {
    id: 1,
    name: 'Guardian Angel',
    description: 'Wearer revives with 400 HP'
  };

  
  constructor() { }

  ngOnInit(): void {
  }

}

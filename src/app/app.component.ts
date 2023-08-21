import { Component } from '@angular/core';
import {Observable, of} from "rxjs";
import {TableColumnHeader} from "./core/models/tableColumnHeader";
import {Skill} from "./core/models/skill";
import {TableColumn} from "./core/models/tableColumn";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data$:Observable<any[]>=of([
      {
        "id": 1,
        "name": "Alice Smith",
        "address": {
          "street": "123 Main St",
          "city": "Wonderland",
          "zip": "12345",
          "country": "Fairyland"
        },
        "contact": {
          "email": "alice@example.com",
          "phone": "123-456-7890"
        },
        "orders": [
          {
            "orderId": "A001",
            "product": "Magic Potion",
            "quantity": 3,
            "price": 12.5
          },
          {
            "orderId": "A002",
            "product": "Magic Carpet",
            "quantity": 1,
            "price": 99.99
          }
        ],
        "isActive": true,
        "joinedDate": "2021-01-15T12:30:00.000Z"
      },
      {
        "id": 2,
        "name": "Bob Johnson",
        "address": {
          "street": "456 King's Rd",
          "city": "Kingdom",
          "zip": "67890",
          "country": "Fantasyland"
        },
        "contact": {
          "email": "bob@example.com",
          "phone": "987-654-3210"
        },
        "orders": [
          {
            "orderId": "B001",
            "product": "Knight's Armor",
            "quantity": 1,
            "price": 250.75
          }
        ],
        "isActive": false,
        "joinedDate": "2020-06-20T10:20:00.000Z"
      },
      {
        "id": 3,
        "name": "Charlie Brown",
        "address": {
          "street": "789 Chocolate St",
          "city": "Peanuts",
          "zip": "11122",
          "country": "Comicland"
        },
        "contact": {
          "email": "charlie@example.com",
          "phone": "555-444-3333"
        },
        "orders": [
          {
            "orderId": "C001",
            "product": "Baseball Glove",
            "quantity": 2,
            "price": 24.5
          },
          {
            "orderId": "C002",
            "product": "Kite",
            "quantity": 1,
            "price": 15.5
          }
        ],
        "isActive": true,
        "joinedDate": "2019-11-15T08:40:00.000Z"
      }
    ]
  )
  headers:TableColumnHeader[]=[{dataKey:'name'}]
  columns:TableColumn[]=[{dataKey:'name'}]

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cate-list',
  templateUrl: './cate-list.component.html',
  styleUrls: ['./cate-list.component.css']
})
export class CateListComponent implements OnInit {
  product_lst = [
    {
      id: 1,
      name: "Iphone 12"
    },
    {
      id: 2,
      name: "Samsung note 20"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

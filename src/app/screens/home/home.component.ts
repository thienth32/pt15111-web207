import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../_services/category.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cates = [];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCateList();
  }

  getCateList(){
    this.categoryService.getCategory()
        .subscribe(data => {
          this.cates = data;
        })
  }

}

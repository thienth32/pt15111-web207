import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../_services/category.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cates = [];
  constructor(private cateService: CategoryService) { }

  ngOnInit(): void {
    this.getCates();
  }

  getCates(){
    this.cateService.getCategory()
                    .subscribe(data => {
                      console.log(data);
                      this.cates = data;
                    });
  }

  

}

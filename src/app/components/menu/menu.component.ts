import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  cates = [];
  constructor(private authService: AuthenticationService,
            private cateService: CategoryService
    ) { }

  ngOnInit(): void {
    // đã đăng nhập hay chưa
    // nếu đăng nhập rồi thì gọi danh sách cate
    if(this.authService.currentUserValue != null){
      this.getCatesList();
    }
  }

  getCatesList(){
    this.cateService.getCategory()
                  .subscribe(data => {
                    console.log(data);
                    this.cates = data;
                  })
  }

}

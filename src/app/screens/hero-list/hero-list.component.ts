import { Component, OnInit } from '@angular/core';

// decorator
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heros = [
    {
      id: 1, 
      name: 'Ben 10',
      image: '',
      gender: 'male',
      display: true
    },
    {
      id: 2,
      name: 'batman',
      image: '',
      gender: 'male',
      display: true
    },
    {
      id: 3,
      name: 'wolverine',
      image: '',
      gender: 'male',
      display: true
    },
    {
      id: 4,
      name: 'wonder women',
      image: '',
      spell: ['lighting', 'run', 'strength'],
      gender: 'female',
      display: true
    },
    {
      id: 5,
      name: 'cat women',
      image: '',
      spell: ['run'],
      gender: 'female',
      display: true
    }
  ]
  heroItem = {
    id: 0,
    name: "",
    age: 0,
    gender: "male",
    image: "",
    display: true
  }
  constructor() { }

  ngOnInit(): void {
  }

  saveHero(){
    // nếu id của heroitem = 0 => tạo mới
      // tìm id lớn nhất đang có trong danh sách => lấy ra id mới = lớn nhất + 1
      // lưu thông tin của heroitem vào trong mảng heros
    

    // xóa trắng dữ liệu của biến heroItem
  }

  sortByGender(event){
    if (event.target.value == 1){
      this.heros.map(hero => {
        hero.display = true;
        return hero;
      });
    } else if (event.target.value == 2){
      this.heros.map(hero => {
        if(hero.gender == 'female'){
          hero.display = false;
        }else{
          hero.display = true;
        }
        return hero;
      });
    }else{
      this.heros.map(hero => {
        if(hero.gender == 'female'){
          hero.display = true;
        }else{
          hero.display = false;
        }
        return hero;
      })
    }
    console.log(this.heros);
  }
}

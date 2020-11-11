import { Component, OnInit, Input, 
    EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero;
  @Output() editHeroEvent = new EventEmitter();
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  editHeroEmit(){
    this.editHeroEvent.emit(this.hero);
  }

}

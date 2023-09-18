import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fastandup',
  templateUrl: './fastandup.component.html',
  styleUrls: ['./fastandup.component.scss']
})
export class FastandupComponent implements OnInit {
  goToFastAndUp(){
    window.open("https://www.fastandup.in/","_blank");
  }
  constructor() { }

  ngOnInit(): void {
  }

}

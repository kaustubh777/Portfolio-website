import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  goToFacebook(){
    window.open("https://www.facebook.com/parthjagtap09","_blank");
  }
  goToTwitter(){
    window.open("https://twitter.com/parthjagtap09?lang=en","_blank");
  }
  goToInsta(){
    window.open("https://www.instagram.com/parthjagtap09/?hl=en","_blank");
  }
  constructor() { }

  ngOnInit(): void {
  }

}

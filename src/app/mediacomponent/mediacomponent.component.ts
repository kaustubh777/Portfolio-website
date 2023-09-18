import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mediacomponent',
  templateUrl: './mediacomponent.component.html',
  styleUrls: ['./mediacomponent.component.scss']
})
export class MediacomponentComponent implements OnInit {
  goToTimes(){
    window.open("https://m.timesofindia.com/city/pune/punes-ice-hockey-players-have-their-eyes-set-on-the-national-games/amp_articleshow/58234923.cms","_blank");
  }
  goToPune(){
    window.open("https://punemirror.indiatimes.com/pune/campus/a-study-in-sport/amp_articleshow/56574145.cms","_blank");
  }
  goToIBR(){
    window.open("https://indiabookofrecords.in/longest-non-stop-skating-marathon/","_blank");
  }
  goToWRA(){
    window.open("https://www.worldrecordacademy.com/sports/longest_Roller_Skating_Marathon_Indian_skaters_set_world_record_112343.html#participants","_blank");
  }
  goToIE(){
    window.open("https://indianexpress.com/article/sports/hockey/iihf-pune-boy-to-appear-in-world-in-line-hockey-championship-at-new-zealand/","_blank");
  }
  goToIssuu(){
    window.open("https://issuu.com/thegoldensparrow/docs/tgs_broadsheet_pages_april_16_pdf_f/9","_blank");
  }
  constructor() { }

  ngOnInit(): void {
  }

}

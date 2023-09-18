import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';;

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      var flag = true;
    $(window).scroll(function() {
      
      var hT = $('#scroll-to').offset().top,
          hH = $('#scroll-to').outerHeight(),
          wH = $(window).height(),
          wS = $(this).scrollTop();
          if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH) && flag == true){
            $(document).ready(function() {
              flag = false;
              $('.counter').each(function () {
              $(this).prop('Counter',0).animate({
              Counter: $(this).text()
              }, {
              duration: 5000,
              easing: 'swing',
              step: function (now) {
              $(this).text(Math.ceil(now));
              }
              });
              }
              
              );
              
              });      
      }
   });
  });
  }

}

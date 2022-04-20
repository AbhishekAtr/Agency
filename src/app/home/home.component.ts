import { Component, OnInit } from '@angular/core';


declare var $: any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  arrayLength = 6;
  getArray(count: number) {
    return new Array(count)
  }
  ngOnInit() {
    setTimeout(() => {
      this.setSlickSLider();
      this.setSecondSlider();
    }, 200);
  }

  setSlickSLider() {
    $(document).ready(function(){
      $('.carousel1').slick({
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots:true,
        centerMode: true,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            // centerMode: true,
    
          }
    
        }, {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            infinite: true,
    
          }
        },  {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
          }
        }]
      });
    });
}

setSecondSlider() {
  $(".clients_logos").slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 1800,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: false } },
        { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    ],
});
}
}
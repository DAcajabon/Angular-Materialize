import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.jquery_code();
  }

  jquery_code() {
    $(document).ready(function(){
      $('.sidenav').sidenav();
    });

    $(document).ready(function(){
      $('.collapsible').collapsible();
    });

    $(document).ready(function(){
      $('div.collapsible-body ul li').on('click', function(){
          var clicked = $(this);
          $('div.collapsible-body ul li').each(function(){
              if($(this).hasClass('active')){
                  $(this).removeClass('active');
              }
          });
          $(this).addClass('active');
      });
  });

  }
}

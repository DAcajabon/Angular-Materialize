import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public saveEmail(): void {
    swal({
      title: '<strong>Sure</strong>',
      text: 'Info will be lost',
      type: 'warning',
      showCancelButton: true,
      focusConfirm: false
    }).then((a) => {
      if (a.value) {
        swal({
          title: 'Deleted',
          type: 'info'
        })
      }
    })
  }

}

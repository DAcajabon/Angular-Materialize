import { Component } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Materialize';
  public saveEmail(): void {
    swal({
      title: '<strong>Seguro</strong>',
      text: 'Se perdera la info',
      type: 'warning',
      showCancelButton: true,
      focusConfirm: false
    }).then((a) => {
      if(a.value){
        swal({
          title: 'borrado',
          type: 'info'
        })
      }
    })
  }
}

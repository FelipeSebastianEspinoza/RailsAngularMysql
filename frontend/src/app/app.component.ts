import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  books;
  extinguisher = {
    name:'hola@gmail.com',
    active:'true',
  };
  user = {
    user:{
      email:'holaw@gmail.com',
      password:'123456789',
    }
 
  };
  constructor(private http: HttpClient) {
    // http.get('http://localhost:3000/extinguishers')
    //   .subscribe(res => {
    //     console.log(res);
    //   });
      
    // http.post<any>('http://localhost:3000/extinguishers', this.extinguisher).subscribe(res => {
    //   console.log("extintor")
    // console.log(res);
    // console.log("extintor")
    // });
     
    http.post<any>('http://localhost:3000/login', this.user).subscribe(res => {
      console.log(res);
    });
  }

}

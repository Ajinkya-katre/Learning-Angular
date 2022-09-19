import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
  name:string='ajinkya katre'
  mob:number= 8308607474
  isValid:boolean = true
  cars = ['BMW','AUDI','MERCEDES'];
  student = {

    name:'ajinkya',
    age:32,
    greet(){
      console.log("Student name is " + this.name + "Age is : " + this.age );
    }
  }

}

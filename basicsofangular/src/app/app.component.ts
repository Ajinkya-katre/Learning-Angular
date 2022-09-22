import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  studentCourse:string = 'Full Stack Development'
  studentStatus = false;
  userName:string='';
  // console.log(userName);
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

  imageUrl = 'https://cdn.cta.tech/cta/media/media/videos/globe-in-light-image.png?ext=.png'
  color:any ='red';

  clickCount=0
  clickP() {
    this.clickCount++;
  }
  clickM(){
    this.clickCount--;
  }

  data:any;
  
  onClicked(){
    for(let i = this.data; i > 0; i--){
      setInterval(()=>this.data--,1000)
      }
  }

  onClickedOnData(){
    console.log("You have clicked");
    this.title = 'Welcome to '
    console.log("UserName : ", this.userName)
  }

  studentData:any= [12,14,132123,124,32,423,4,12,41,34,1,413,12,,12,41,23,12,3,123]

  @Input() count: number = 0;
  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();
 
  increment() {
   this.count++;
   this.countChange.emit(this.count);
 }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  doFollow(data:string){
    alert(data);
    console.warn('父组件接收值：'+data);
  }
}

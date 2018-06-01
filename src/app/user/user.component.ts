import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';
//import { UserService } from './user.service';
import { User } from './model/User';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	data: any = {
		id: 0
	};
  users: User[];
  constructor(public activeRoute:ActivatedRoute) {
    //this.users = userService.getUsers().subscribe(
    //  data => {
    //    this.users = data
    //  },
    //  error => console.log(error)
    //)
  }

  ngOnInit() {
  	this.activeRoute.params.subscribe(
  			params => this.getPost(params['id'])
  		)

  }
  public getPost(id: number){
  	console.warn(id);
  	this.data.id = id;
  }

}

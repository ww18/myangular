import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	data: any = {
		id: 0
	}
  constructor(public activeRoute:ActivatedRoute) {

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

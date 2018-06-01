import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  public childTitle: string;
  @Output()
  public follow = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  public followBtnClick(){
    this.follow.emit('子组件传值');
  }

}

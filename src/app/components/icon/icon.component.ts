import { Component, OnInit, Input } from '@angular/core';

import { faPen, faTimes } from "@fortawesome/free-solid-svg-icons"
import { faCircle } from "@fortawesome/free-regular-svg-icons"

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  //filled by parent
  @Input() iconName: string;

  //import thing from dependancy set to variable name
  faPen = faPen;
  faTimes = faTimes;
  faCircle = faCircle;

  constructor() { }

  ngOnInit(): void {
  }

}

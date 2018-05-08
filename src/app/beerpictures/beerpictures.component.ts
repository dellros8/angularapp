import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-beerpictures',
  templateUrl: './beerpictures.component.html',
  styleUrls: ['./beerpictures.component.css']
})
export class BeerpicturesComponent implements OnInit {

  @Input() beerpictures;

  constructor() { }

  ngOnInit() {
  }

}

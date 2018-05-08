import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  @Input() beer;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BeerService } from "../beer.service";

@Component({
  selector: 'app-beerlist',
  templateUrl: './beerlist.component.html',
  styleUrls: ['./beerlist.component.css']
})
export class BeerlistComponent implements OnInit {

  beers: any = [];

  constructor(private http: HttpClient, private service: BeerService) {}

  ngOnInit() {
    this.getBeerList();
  }

  getBeerList() {
    this.service.getBeers()
    .subscribe((beers: any) => {
      this.beers = beers;
    })
  }

}

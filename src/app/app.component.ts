import { Component } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { TacoService } from "./taco.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  taco = null;
  helpText = "Enter name";
  
  constructor(private http: HttpClient, private tacoService: TacoService){

  }

  ngOnInit() {
    this.getRandomTaco();
  }

  getRandomTaco() {
    this.tacoService.getTaco()
    .subscribe((taco: any) => {
      this.taco = {
        text: taco.base_layer.recipe,
      };
    });
  }
}
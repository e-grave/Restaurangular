import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.sass']
})
export class CarteComponent implements OnInit {

  dogs = [
    {race : 'berger allemand', name : 'Wolfy'},
    {race : 'bulldog anglais', name : 'Mac Fly'},
    {race : 'caniche', name : 'Rasta'},
  ];

  temperatures = [0,5,35,-10];
  
  constructor() { }

  ngOnInit(): void {
  }

}

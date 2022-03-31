import { Component, OnInit } from '@angular/core';

interface City{
  id: number
  name: string
  people: number
  country: string
}

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})

export class CityComponent implements OnInit {

  update: Boolean = false;

  cities: Array<City> = [
    {
      id: 1,
      name: "Madrid",
      people: 350000,
      country: "Spain"
    },
    {
      id: 2,
      name: "Valencia",
      people: 100000,
      country: "Spain"
    },
    {
      id: 3,
      name: "Barcelona",
      people: 250000,
      country: "Spain"
    },

  ];

  name_input: string = "";
  people_input: string = "";
  country_input: string = "";
  id_count: number = 4;

  nameUpdate_input: string = "";
  peopleUpdate_input: string = "";
  countryUpdate_input: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  createCity() : void {
    let newCity: City = {
      id: this.id_count,
      name: this.name_input,
      people: Number(this.people_input),
      country: this.country_input
    }
    this.cities.push(newCity);
    console.log(this.cities);
    this.id_count++;
  }

  deleteCity(id: number) : void {
    this.cities = this.cities.filter((city) => city.id != id);
  }

  updateView(): void{
    this.update = true;
  }

  disableUpdateView(): void{
    this.update = false;
  }

  updateCity(id: number): void {
    let updateCity = this.cities.find((city) => city.id === id);
    if (updateCity !== undefined) {
      updateCity.name = this.nameUpdate_input;
      updateCity.people = Number(this.peopleUpdate_input);
      updateCity.country = this.countryUpdate_input;
      this.disableUpdateView();
    }
  }

}
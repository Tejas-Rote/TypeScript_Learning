import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";


export class User implements Mappable{
  name: string;
  color:string = 'red'
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.person.firstName();
    // here we cannot directly assign as object as it will be initialized as null or undefined when class is instansiated, as there is not initialization in the class itself.
    this.location = {
        lat:faker.location.latitude(),
        lng:faker.location.longitude()
    }
  }

  markerContent():string {
      return `User Name: ${this.name} `
  }
}

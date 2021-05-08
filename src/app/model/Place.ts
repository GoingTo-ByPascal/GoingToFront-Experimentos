import { City } from "./City";
import { Country } from "./Country";
import { Locatable } from "./Locatable";

export class Place{
    id:string;
    name:string;
    stars:number;
    locatable:Locatable;
    city:City;
    country:Country;
    isFavorite: boolean = false
}

import { Country } from "./Country";
import { Locatable } from "./Locatable";

export class City{
    id:string;
    name:string;
    locatable:Locatable;
    country:Country
}
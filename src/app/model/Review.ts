import { Locatable } from "./Locatable";
import { UserProfile } from "./UserProfile";

export class Review{
    comment:string;
    stars:number;
    reviewedAt:Date;
    locatable:Locatable;
    userProfile:UserProfile
}
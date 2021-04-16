import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Locatable } from 'src/app/model/Locatable';
import { Review } from 'src/app/model/Review';
import { LocatableService } from 'src/app/services/locatable.service';

@Component({
  selector: 'app-locatable-detail',
  templateUrl: './locatable-detail.component.html',
  styleUrls: ['./locatable-detail.component.scss']
})
export class LocatableDetailComponent implements OnInit {

  Subscriptions:Subscription[] = []
  constructor(private route:ActivatedRoute,private locatableService:LocatableService) { }
  location:string;
  locatable:Locatable = new Locatable()
  promos: any[] = []
  reviews : Review[] = []
  tips : any[] = []
  ngOnInit(): void {
    this.location = this.route.snapshot.params.id;
    this.initialize()
  }
  initialize(){
    this.Subscriptions.push(this.locatableService.getLocatableInfo(this.location).subscribe((response:any)=>{
        this.locatable = response
    })
    )
    this.getData()
  }

  getData(){
    this.Subscriptions.push(this.locatableService.getReviewsByLocatableId(this.location).subscribe((response:any)=>{
      this.reviews = response
    }),
    this.locatableService.getTipsByLocatableId(this.location).subscribe((response:any)=>{
      this.tips = response

    }),
    this.locatableService.getPromoByLocatableId(this.location).subscribe((response:any)=>{
      this.promos = response

    })
    
    )
  }

}

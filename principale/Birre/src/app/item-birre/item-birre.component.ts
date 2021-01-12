
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-birre',
  templateUrl: './item-birre.component.html',
  styleUrls: ['./item-birre.component.css']
})
export class ItemBirreComponent implements OnInit {
  routeObs: Observable<ParamMap>;
  apiServiceObs: Observable<Object>;
  birra : any;

  constructor(
    private route: ActivatedRoute,
    private service: APIService,
    private location: Location ) { }


  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }
  getRouterParam = (params: ParamMap) =>
  {
    let id = params.get('id');
    console.log (id);
    this.apiServiceObs = this.service.getBirre(id);
    this.apiServiceObs.subscribe((data)=>this.birra = data)
  }

    back() : void
    {
        this.location.back();
    }
  }



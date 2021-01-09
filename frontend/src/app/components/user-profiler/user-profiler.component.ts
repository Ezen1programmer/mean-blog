import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user-service/user.service";
import {Subscription} from "rxjs";
import {map} from "rxjs/operators";
import {User} from "../../services/authentication-service/authentication.service";

@Component({
  selector: 'app-user-profiler',
  templateUrl: './user-profiler.component.html',
  styleUrls: ['./user-profiler.component.scss']
})
export class UserProfilerComponent implements OnInit, OnDestroy {

  userId:number = null;
  private sub:Subscription;
  user:User

  constructor(
    private activatedRoute:ActivatedRoute,
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params =>{
      this.userId = parseInt(params['id']);
      this.userService.findOne(this.userId).pipe(
        map((user:User)=> this.user = user)
      ).subscribe()
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }


}

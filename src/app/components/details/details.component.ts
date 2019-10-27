import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User } from '../../models/user';
import { ApiUsersService } from '../../services/api-users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {

  id: number;
  user: User;
  userSub$: Subscription;

  constructor(
    private route: ActivatedRoute,
    private apiUsersService: ApiUsersService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.userSub$ = this.apiUsersService.getUserById(this.id)
      .subscribe(data => {
        this.user = data;
        console.log(this.user);
      });

  }

  goBack(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.userSub$.unsubscribe();
  }

}

import { Component, OnInit } from '@angular/core';

import { ApiUsersService } from '../../services/api-users.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})

export class TableComponent implements OnInit {
  public searchName: string;
  public filteredData = '';
  public users: User[] = [];
  public user: User;
  public startArray: User[] = [];
  public mesage: string;

  constructor(private apiUserService: ApiUsersService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    return this.apiUserService.loadUsers().subscribe(data => {
      this.startArray = data;
      console.log(this.startArray);
    });
  }

  searchUsers($event: any) {
    this.filteredData = this.searchName;
    console.log(this.filteredData);
    this.users = this.startArray.filter(res => {
      return res.login.toLocaleLowerCase().match(this.filteredData.toLocaleLowerCase());
    }).slice(0, 20);
    if (this.users.length === 0) {
      this.mesage = 'We can not find any User for Your request. Try again, please!';
    } else {
      this.mesage = 'Watch the result of Your request';
    }
    this.searchName = '';
    console.log(this.users);
  }

}

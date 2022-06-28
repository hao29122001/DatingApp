import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import {AccountService } from '../_services/account.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}

  constructor(public accountSevice: AccountService) { }

  ngOnInit(): void {
  }

  login(){
    this.accountSevice.login(this.model).subscribe(response =>{
      console.log(response);
    },error =>{
      console.log(error);
    })
  }
  logout(){
    this.accountSevice.logout();
  }

}

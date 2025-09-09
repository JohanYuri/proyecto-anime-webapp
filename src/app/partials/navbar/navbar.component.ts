import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from 'express';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit , OnDestroy{

  public isSidenavOpen: boolean = false;

  public currentPage: string = '';

  //public currentUser: any = null;

  private userSub!: Subscription;
  private sidenavSub!: Subscription;

  constructor (
    private readonly router: Router,
    private readonly AuthService: AuthService,
    private readonly sidenavService: sidenavService,
  ) {};

  ngOnInit(): void {}

  ngOnDestroy(): void {}

}



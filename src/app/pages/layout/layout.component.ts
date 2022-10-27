import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public currentUser!: User

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.currentUser;
  }

  public logout() {
    this.authService.logout;
  }

}

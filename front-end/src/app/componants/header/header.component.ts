import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../service/security/auth.service';
import {SharedServiceService} from '../../../service/shared-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor(private route : Router , private authService:AuthService , private sharedService: SharedServiceService) {

    }

    search(key){
      this.route.navigateByUrl('/search/'+key);
    }

    isUserLogin(): boolean{
      return this.authService.isUserLogin();
    }

  logout() {
    this.authService.logout();
    this.route.navigateByUrl("/login")
  }

  navigateIfEmpty(value: string) {
    if (!value || value.trim() === '') {
      this.route.navigate(['/products']);
    }
  }

  //  for Restoran


  setActiveAll() {
    this.sharedService.setSelectedCategory('ALL');
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  ngOnInit(): void {
    window.addEventListener('scroll', this.toggleStickyNavbar);
  }

  toggleStickyNavbar = () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (window.pageYOffset > 50) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    }
  };

}

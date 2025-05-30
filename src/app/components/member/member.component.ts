import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    window.addEventListener('scroll', this.checkStickyNavbar);
    window.addEventListener('resize', this.checkStickyNavbar); // Handle window resize
    document.querySelectorAll('.nav-link').forEach(anchor => {
      anchor.addEventListener('click', this.handleAnchorClick);
    });
    this.checkStickyNavbar(); // Initial check on load
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.checkStickyNavbar);
    window.removeEventListener('resize', this.checkStickyNavbar);
    document.querySelectorAll('.nav-link').forEach(anchor => {
      anchor.removeEventListener('click', this.handleAnchorClick);
    });
  }

  private checkStickyNavbar = () => {
    const navbar = document.getElementById('navbar');
    const mcontent = document.getElementById('maincontent');
    if (navbar && mcontent) {
      // Check if body height is less than or equal to viewport height
      const isBodyHeightSmall = document.body.scrollHeight <= window.innerHeight;
      if (isBodyHeightSmall) {
        navbar.classList.add('sticky');
        mcontent.classList.add('maincontent');
      } else {
        navbar.classList.remove('sticky');
        mcontent.classList.remove('maincontent');
      }
    }
  };

  private handleAnchorClick = (e: Event) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLAnchorElement;
    const targetId = target.getAttribute('href')?.substring(1);
    const targetElement = document.getElementById(targetId || '');
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  };
}
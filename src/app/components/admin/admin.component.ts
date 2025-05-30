import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {

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
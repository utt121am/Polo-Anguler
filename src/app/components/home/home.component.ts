import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  features: any;

  exploreMore() {
    throw new Error('Method not implemented.');
  }

  onMouseMove(event: MouseEvent, cardId: string) {
    const card = document.querySelector(`#${cardId} .card-inner`) as HTMLElement;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    const rotateX = (y / rect.height) * -20; // Tilt up to 20 degrees
    const rotateY = (x / rect.width) * 20;   // Tilt up to 20 degrees

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  onMouseLeave(cardId: string) {
    const card = document.querySelector(`#${cardId} .card-inner`) as HTMLElement;
    if (!card) return;

    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  }

}

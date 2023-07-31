import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Router, RouterLink} from "@angular/router";
import {animate, AnimationEvent, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        filter: 'blur(0px)',
      })),
      state('closed', style({
        transform: 'scale(1)',
        filter: 'blur(8px)',
        opacity: 0.0,
      })),
      transition('open => closed', [
        animate('2s')
      ]),
      transition('closed => open', [
        animate('0.0s')
      ]),
    ]),
  ],
})
export class LandingComponent {
  constructor(private router: Router) {
  }
  open = true;

  toggle() {
    this.open = !this.open;
  }

  go($event: AnimationEvent) {
    if ($event.toState === 'closed') {
      this.router.navigate(['/greeting']).catch(console.error);
    }
  }
}

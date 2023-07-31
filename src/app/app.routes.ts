import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/landing/landing.component').then(m => m.LandingComponent)},
  { path: 'greeting', loadComponent: () => import('./pages/greeting/greeting.component').then(m => m.GreetingComponent)},
  { path: 'rock', loadComponent: () => import('./pages/rock-out/rock-out.component').then(m => m.RockOutComponent)},
];

import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from "@angular/material/slider";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatSliderModule, RouterLink],
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        filter: 'blur(0px)',
        opacity: 1
      })),
      state('closed', style({
        filter: 'blur(8px)',
        opacity: 0.1
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
  ]
})
export class GreetingComponent implements OnInit, OnDestroy {
  @ViewChild('banner') banner: ElementRef<HTMLVideoElement> = {} as ElementRef<HTMLVideoElement>;
  bgm_music: HTMLAudioElement = {} as HTMLAudioElement;
  constructor(private router: Router) {}

  closed = true;

  ngOnInit() {
    this.bgm_music = new Audio('assets/bgm.mp3')
    this.bgm_music.volume = 0;
    this.bgm_music.currentTime = 20.1;

    // wait for song to be ready
    this.bgm_music.addEventListener('canplaythrough', () => {
      this.bgm_music.removeEventListener('canplaythrough', () => {});
      this.bgm_music.play().then( () => {
        this.fadeIn();
      }).catch(() => {});
    });

    setTimeout(() => {
      this.closed = false;
    }, 1);
  }

  ngOnDestroy() {
    this.bgm_music.pause();
  }

  toggleMute() {
    this.bgm_music.muted = !this.bgm_music.muted;
  }

  updateVol($event: number) {
    this.bgm_music.volume = $event;
  }

  leadOut() {
    this.closed = true;
    this.fadeOut('/rock');
  }

  private fadeIn() {
    const interval = setInterval(() => {
      if (this.bgm_music.volume >= .5) {
        clearInterval(interval);
      }

      this.bgm_music.volume = Math.round(this.bgm_music.volume * 10) / 10;
      this.bgm_music.volume += .1;
    }, 200);
  }
  private fadeOut(path: string) {
    const interval = setInterval(() => {
      if (this.bgm_music.volume <= 0) {
        clearInterval(interval);
        this.router.navigate([`${path}`]).catch(console.error);
        return;
      }

      this.bgm_music.volume = Math.round(this.bgm_music.volume * 10) / 10;
      this.bgm_music.volume -= .1;
    }, 100);
  }

  togglePlay() {
    this.banner.nativeElement.play().then(() => {
      return;
    });
    this.bgm_music.paused ? this.bgm_music.play() : this.bgm_music.pause();
  }
}

import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {throwError} from "rxjs";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-rock-out',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './rock-out.component.html',
  styleUrls: ['./rock-out.component.scss']
})
export class RockOutComponent implements AfterViewInit {
  @ViewChild('myVideo') myVideo: ElementRef<HTMLVideoElement> = {} as ElementRef<HTMLVideoElement>;
  playing: boolean = false;

  ngAfterViewInit() {
    console.log(this.myVideo.nativeElement.paused)
    this.playing = !this.myVideo.nativeElement.paused;
  }

  toggle() {
    if (!this.myVideo.nativeElement.paused && this.myVideo.nativeElement.currentTime > 0) {
      this.myVideo.nativeElement.pause();
      this.playing = false;
      return;
    }
    if (this.myVideo.nativeElement.paused) {
      this.myVideo.nativeElement.play().then(
        () => {
          this.playing = true;
        }
      ).catch((err) => {
        // throw error;
        throwError(err);
      });
      return;
    }
  }
}

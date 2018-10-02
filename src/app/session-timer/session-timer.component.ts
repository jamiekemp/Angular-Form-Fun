import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs/Rx';
import { SessionTimerService } from '../services/session-timer.service';

@Component({
  selector: 'app-session-timer',
  templateUrl: './session-timer.component.html',
  styleUrls: ['./session-timer.component.scss']
})
export class SessionTimerComponent implements OnInit {

    countDown: Subject<number>;
    countdownTimePlaceholder: number;

    constructor(private sessionTimerService: SessionTimerService) {
    }

    ngOnInit() {
        this.sessionTimerService.setTimer();
        this.countDown = this.sessionTimerService.countDown;

        this.countDown.subscribe(data => {
          if (data <= this.sessionTimerService.countdownStart && data > 0) {
              this.countdownTimePlaceholder = data; // Needed to stop flash of nothing or null
              // this.showCountdownModal = true;
          } else {
              // this.showCountdownModal = false;
          }
        });
    }

    restartTimer() {
        this.sessionTimerService.restartTimer();
    }

}

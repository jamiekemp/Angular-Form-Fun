import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs/Rx';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { StorageService } from './storage.service';

@Injectable()
export class SessionTimerService {

    sessionTimer: Subscription;
    // totalSessionTime = (15 * 60) - 30;  // 15 minutes minus 30 seconds as a safety margin
    // countdownStart = 120;  // Show countdown with 120 seconds left
    // Quick Testing Times
    totalSessionTime = 120;
    countdownStart = 60;

    counter: Observable<number>;
    countDown: Subject<number> = new Subject;

    constructor(private storageService: StorageService) {}

    getSessionTimeStamp() {
        return this.storageService.getItem('session-ts');
    }

    setSessionTimeStamp() {
        const timestamp = +new Date();
        this.storageService.setItem('session-ts', timestamp);
        return timestamp;
    }

    setTimer() {
        const startTimeStamp = this.getSessionTimeStamp() || this.setSessionTimeStamp();
        this.counter = TimerObservable.create(0, 1000);

        this.sessionTimer && this.sessionTimer.unsubscribe(); // Only run one sessionTimer subscription at a time

        this.sessionTimer = this.counter.subscribe(seconds => {

            // console.log('Seconds', seconds);   // Keep for debug
            const nowTimeStamp = +new Date();  // Begin Logic to compare timestamp diff seconds to our TimerObservable seconds
            const TimeStampDiff = Math.round((nowTimeStamp - startTimeStamp) / 1000);  // Convert to seconds
            if (TimeStampDiff !== seconds) { seconds = TimeStampDiff; }  // If they don't match, we'll use TimeStampDiff
            // console.log('TSeconds', seconds);  // Keep for debug

            this.countDown.next(this.totalSessionTime - seconds);

            if (seconds >= this.totalSessionTime) { // Session Timed Out
                // this.router.navigate([`/session-timeout/`]);
            }
        });
    }

    endTimer() {
        this.countDown && this.countDown.next(0);
        this.sessionTimer && this.sessionTimer.unsubscribe();
    }

    restartTimer() {
        this.storageService.removeItem('session-ts');
        this.setTimer();
    }
}

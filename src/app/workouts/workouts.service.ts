import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Workout }    from './workout';
import { WORKOUTS }   from './mock-workout';

@Injectable({
  providedIn: 'root'
})

export class WorkoutsService {

  constructor() { }

  getWorkouts(): Observable<Workout[]> {
    return of(WORKOUTS);
  }  
}

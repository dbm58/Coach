import { Component, OnInit } from '@angular/core';
import { Workout }           from './workouts/workout';
import { WorkoutsService }   from './workouts/workouts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit
{
  selectedWorkout: Workout;

  workouts: Workout[ ];

  constructor(private workoutService: WorkoutsService) { }

  title = 'Coach';

  ngOnInit( )
  {
    this.getWorkouts( );
  }

  setSelected( workout: Workout )
  {
    this.selectedWorkout = workout;
  }

  clearSelected( )
  {
    this.selectedWorkout = null;
  }
  
  getWorkouts(): void
  {
    this.workoutService
        .getWorkouts()
        .subscribe(workouts => this.workouts = workouts);
  }
}

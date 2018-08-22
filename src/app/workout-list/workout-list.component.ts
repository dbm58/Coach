import { Component, OnInit } from '@angular/core';
import { Workout }           from '../workouts/workout';
import { WorkoutsService }   from '../workouts/workouts.service';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {

  selectedWorkout: Workout;

  workouts: Workout[ ];

  constructor(private workoutService: WorkoutsService) { }

  ngOnInit( )
  {
    this.getWorkouts( );
  }

  getWorkouts(): void
  {
    this.workoutService
        .getWorkouts()
        .subscribe(workouts => this.workouts = workouts);
  }

  onSelect(workout: Workout): void
  {
    selectedWorkout = workout;
  //alert( workout.name );
  }
}


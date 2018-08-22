import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Workout }           from '../workouts/workout';
import { WorkoutsService }   from '../workouts/workouts.service';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {

  @Output( ) selectedWorkout = new EventEmitter<Workout>( );

  @Input( ) workouts: Workout[ ];

  onSelect(workout: Workout): void
  {
    this.selectedWorkout.emit( workout );
  }
}


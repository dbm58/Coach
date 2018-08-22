import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountDownComponent } from './count-down/count-down.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CountDownComponent,
    WorkoutListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

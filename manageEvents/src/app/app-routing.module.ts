import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { HomeComponent } from './pages/home/home.component';
import { ReservationViewComponent } from './pages/reservation-view/reservationview.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'reservation/new', component:ReservationComponent },
  { path:'reservation/view', component:ReservationViewComponent },
  { path:'form', component:FormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

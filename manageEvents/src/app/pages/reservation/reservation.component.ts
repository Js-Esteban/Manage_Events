import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})

export class ReservationComponent implements OnInit {
  date = new Date();
  list : number[]=[]
  id:string=''

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    this.list = this.getDaysInMonth(currentYear, currentMonth);

    console.log(this.list)
  }

  getDaysInMonth(year: number, month: number): number[] {
    const totalDays = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: totalDays }, (_, index) => index + 1);
  }

  nextForm(day:any){
    console.log(day)
    this.router.navigate(['/form'], { queryParams: { day: day } })
  }
}

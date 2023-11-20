import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationviewComponent } from './reservationview.component';

describe('ReservationviewComponent', () => {
  let component: ReservationviewComponent;
  let fixture: ComponentFixture<ReservationviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

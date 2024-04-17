import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLawyerComponent } from './update-lawyer.component';

describe('UpdateLawyerComponent', () => {
  let component: UpdateLawyerComponent;
  let fixture: ComponentFixture<UpdateLawyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateLawyerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateLawyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

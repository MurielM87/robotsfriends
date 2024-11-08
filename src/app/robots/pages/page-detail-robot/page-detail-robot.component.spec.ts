import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetailRobotComponent } from './page-detail-robot.component';

describe('PageDetailRobotComponent', () => {
  let component: PageDetailRobotComponent;
  let fixture: ComponentFixture<PageDetailRobotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageDetailRobotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDetailRobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

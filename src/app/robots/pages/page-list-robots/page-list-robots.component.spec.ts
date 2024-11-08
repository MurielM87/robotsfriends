import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListRobotsComponent } from './page-list-robots.component';

describe('PageListRobotsComponent', () => {
  let component: PageListRobotsComponent;
  let fixture: ComponentFixture<PageListRobotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageListRobotsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListRobotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

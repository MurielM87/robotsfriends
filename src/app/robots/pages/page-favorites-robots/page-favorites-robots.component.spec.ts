import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFavoritesRobotsComponent } from './page-favorites-robots.component';

describe('PageFavoritesRobotsComponent', () => {
  let component: PageFavoritesRobotsComponent;
  let fixture: ComponentFixture<PageFavoritesRobotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageFavoritesRobotsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFavoritesRobotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RobotsRoutingModule } from './robots-routing.module';
import { PageListRobotsComponent } from './pages/page-list-robots/page-list-robots.component';
import { PageDetailRobotComponent } from './pages/page-detail-robot/page-detail-robot.component';
import { PageFavoritesRobotsComponent } from './pages/page-favorites-robots/page-favorites-robots.component';


@NgModule({
  declarations: [
    PageListRobotsComponent,
    PageDetailRobotComponent,
    PageFavoritesRobotsComponent
  ],
  imports: [
    CommonModule,
    RobotsRoutingModule
  ],
  exports: [
    PageListRobotsComponent,
    PageDetailRobotComponent,
    PageFavoritesRobotsComponent
  ]
})
export class RobotsModule { }

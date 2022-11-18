import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { AboutusComponent } from './aboutus.component';
import { AboutUsRoutingModule } from './aboutus-routing.module';



@NgModule({
  declarations: [
    AboutusComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ],
  exports: [
    AboutusComponent
  ]
})
export class AboutusModule { }

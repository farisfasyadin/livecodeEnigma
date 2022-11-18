import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NotfoundComponent } from './component/notfound/notfound.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NotfoundComponent
  ]
})
export class SharedModule { }

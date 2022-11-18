import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { ArticlelistComponent } from './articlelist/articlelist.component';
import { ArticlelistRoutingModule } from './article-routing.module';



@NgModule({
  declarations: [
    ArticleComponent,
    ArticlelistComponent
  ],
  imports: [
    CommonModule,
    ArticlelistRoutingModule
  ],
  exports: [
    ArticleComponent
  ]
})
export class ArticleModule { }

import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ArticlelistComponent } from "./articlelist/articlelist.component";

const routes: Routes = [
    {path: '', component: ArticlelistComponent},
    
]
@NgModule ({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
    
})
export class ArticlelistRoutingModule {}
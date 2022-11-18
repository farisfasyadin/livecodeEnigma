import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    // {
    //     path: 'home', component: BerandaComponent,
    //     children: [
    //         {path: 'learn', component: AboutComponent},
    //         {path: 'faq', component: FaqComponent},
    //         {path: 'instructor', component: InstructorComponent}
    //     ]
    // },
    {path: 'about-us', loadChildren: () => import('./aboutus/aboutus.module').then(m => m.AboutusModule)},   
    {path: 'article-list', loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)}, 
]
@NgModule ({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
    
})
export class PagesRoutingModule {}
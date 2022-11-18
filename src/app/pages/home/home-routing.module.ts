import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";

const routes: Routes = [
    {
        path: '', component: HomeComponent,
        // children: [
        //     {path: 'learn', component: AboutComponent},
        //     {path: 'faq', component: FaqComponent},
        //     {path: 'instructor', component: InstructorComponent}
        // ]
    },
    
]
@NgModule ({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
    
})
export class HomeRoutingModule {}
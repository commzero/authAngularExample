import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core"
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'', component:LoginComponent},
    {path:'homepage', component:HomepageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}

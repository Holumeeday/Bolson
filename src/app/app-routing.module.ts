import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimaryComponent} from './primary/primary.component';
import { SecondaryComponent } from './secondary/secondary.component';
import { ContactusComponent} from './contactus/Contactus.component';
import { HomeComponent } from './home/home.component';
import { ParentalcontrolComponent } from './parentalcontrol/parentalcontrol.component';



const routes: Routes = [
  {path:'home', component: HomeComponent},
  { path: 'primary', component: PrimaryComponent },
  { path: 'secondary', component: SecondaryComponent },
  { path: 'parentalcontrol', component: ParentalcontrolComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
},
  { path: 'contactus', component: ContactusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

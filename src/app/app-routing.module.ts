import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimaryComponent} from './primary/primary.component';
import { SecondaryComponent } from './secondary/secondary.component';
import { ContactUsComponent} from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ParentalcontrolComponent } from './parentalcontrol/parentalcontrol.component';



const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

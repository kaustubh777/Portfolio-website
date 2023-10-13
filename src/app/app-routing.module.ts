import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MediaComponent } from './media/media.component';
import { ProfileComponent } from './profile/profile.component';
import { SponsersComponent } from './sponsers/sponsers.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'profile',component:ProfileComponent },
  {path:'sponsers',component: SponsersComponent},
  {path:'media',component:MediaComponent},
  {path:'contact',component:ContactComponent},
  { path: '**', redirectTo:'',pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,ProfileComponent,ProfileComponent,MediaComponent,ContactComponent]

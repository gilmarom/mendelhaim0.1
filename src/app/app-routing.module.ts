import { NgModule } from '@angular/core';
import { HomeComponent} from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ResearchDetailsComponent  } from './research-details/research-details.component';
import { ResearchListComponent } from './research-list/research-list.component';
import  {DonateComponent} from './donate/donate.component';
import { AboutComponent} from './about/about.component';
import { PodcastComponent} from './podcast/podcast.component';
import { PlayComponent } from './play/play.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './customers/dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent},
  { path: 'detail/:id', component: ResearchDetailsComponent },
  { path: 'research', component: ResearchListComponent },
  { path: 'donate/:id', component: DonateComponent},
  { path: 'about', component: AboutComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'podcast', component: PodcastComponent },
  { path: 'podcast/:id', component: PlayComponent },
  { path: 'contact', component:ContactComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

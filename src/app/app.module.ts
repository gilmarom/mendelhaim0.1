import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResearchListComponent } from './research-list/research-list.component';
import { ResearchDetailsComponent } from './research-details/research-details.component';
import { DonateComponent } from './donate/donate.component';
import { PlayComponent } from './play/play.component';
import { PodcastComponent } from './podcast/podcast.component';

import { researchFilterPipe } from './research-filter.pipe';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './customers/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
// Import your library
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ResearchListComponent,
    ResearchDetailsComponent,
    DonateComponent,
    researchFilterPipe,
    AboutComponent,
    PodcastComponent,
    PlayComponent,
    ContactComponent,
    DashboardComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
        NgbModule.forRoot()


  ],
  providers: [researchFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

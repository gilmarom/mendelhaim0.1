import { Component, OnInit } from '@angular/core';
import {PodcastService } from '../podcast.service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.css']
})
export class PodcastComponent implements OnInit {
  podcasts = [];
  public show_dialog : boolean = false;
  public button_name : any = 'Show Login Form!';

  constructor( podcastService:PodcastService, http:HttpClient) { }

  ngOnInit() {
       this.podcasts = [
         {id:7, name:'Movement to a future' , particpate:'Dr. Ilia Stambler'},
         {id:6, name:'Disruptive is Clarity', particpate:'Liz Parrish Bioviva Sciences'},
         {id:5, name:'Difficult but Solvable',particpate: 'Mr. Nathan Rudnick'},
         {id:4, name:'Heaven on Earth',particpate: 'Mr. James Strole'},
         {id:3, name:'Mission Alpha',particpate: 'Mr. Sergey Young'}, 
         {id:2, name:'Under Pressure',particpate: 'Dr Scott Sherr'},
         {id:1, name: 'The lottery of life', particpate: 'Dr Anat Chesner-Haviv'}
   ]
  }

  
  toggle() {
    this.show_dialog = !this.show_dialog;

    // CHANGE THE TEXT OF THE BUTTON.
    if(this.show_dialog) 
      this.button_name = "Hide Login Form!";
    else
      this.button_name = "Show Login Form!";
  }
}




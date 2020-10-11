import { Component, OnInit } from '@angular/core';
import { Tweet } from '../models/tweet.model';

@Component({
  selector: 'app-crear-tweet',
  templateUrl: './crear-tweet.component.html',
  styleUrls: ['./crear-tweet.component.css']
})
export class CrearTweetComponent implements OnInit {
  
  newTweet: Tweet;
  
  constructor () {
    this.newTweet = new Tweet ();
  }
  
  ngOnInit(): void {
  }



  crearTweet(){
    
    console.log(this.newTweet);
  }

}

import { Component, OnInit } from '@angular/core';
import { Tweet } from '../models/tweet.model';
import { TweetInfoService } from '../service/tweet-info.service';



@Component({
  selector: 'app-crear-tweet',
  templateUrl: './crear-tweet.component.html',
  styleUrls: ['./crear-tweet.component.css']
})
export class CrearTweetComponent implements OnInit {
  
  newTweet: Tweet;
  
  constructor (private tweetInfoService: TweetInfoService) {
    this.newTweet = new Tweet ();
  }
  
  ngOnInit(): void {
  }



  crearTweet(){
    
    this.tweetInfoService.creationTweet(this.newTweet);
    
  }

}

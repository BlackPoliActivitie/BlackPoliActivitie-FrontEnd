import { Component, OnInit } from '@angular/core';
import { Tweet } from '../models/tweet.model';
import { TweetInfoService } from '../service/tweet-info.service';

@Component({
  selector: 'app-ver-tweets',
  templateUrl: './ver-tweets.component.html',
  styleUrls: ['./ver-tweets.component.css']
})
export class VerTweetsComponent implements OnInit {

  tweets: Array <Tweet>;
  constructor(private tweetInfoService: TweetInfoService) {
    this.tweets= new Array <Tweet> ();
   }

  ngOnInit(): void {
  this.tweetInfoService.getAllTweet();
  }

  fillTweet() {
    this.tweetInfoService.getAllTweet().subscribe(tweet=> 
      {this.tweets=tweet;
        console.log(this.tweets)});
  }


}

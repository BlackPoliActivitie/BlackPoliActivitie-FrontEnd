import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tweet } from '../models/tweet.model';

@Injectable({
  providedIn: 'root'
})
export class TweetInfoService {

  
  constructor(private http: HttpClient) { }

  creationTweet (newTweet: Tweet) {
    this.http.post('https://blackpoli.herokuapp.com/post', newTweet).subscribe(tweet => console.log(tweet));
  }


  

}

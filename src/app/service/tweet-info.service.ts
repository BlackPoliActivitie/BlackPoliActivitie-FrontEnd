import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from '../models/tweet.model';

@Injectable({
  providedIn: 'root'
})
export class TweetInfoService {

  tweets: Array <Tweet>;
  constructor(private http: HttpClient) { 
    this.tweets= new Array <Tweet> ();
  }

  creationTweet (newTweet: Tweet) {
    this.http.post('https://blackpoli.herokuapp.com/post', newTweet).subscribe(tweet => console.log(tweet));
  }

  getAllTweet(): Observable <Tweet[]> {
    
    return this.http.get<Tweet[]>('https://blackpoli.herokuapp.com/post/131');  
    }


  

}
